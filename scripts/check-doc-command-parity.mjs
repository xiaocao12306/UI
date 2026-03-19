#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const docsGateFiles = ["README.md", "docs/storybook.md", "docs/testing-and-release.md"];
const releaseGateDocsFiles = ["README.md", "docs/testing-and-release.md"];
const secretsDocsChecks = [
  {
    label: "chromatic preflight alias",
    includes: "pnpm release:preflight:chromatic"
  },
  {
    label: "publish preflight alias",
    includes: "pnpm release:preflight:publish"
  },
  {
    label: "chromatic enforce dispatch",
    includes: "gh workflow run chromatic.yml -f enforce=true"
  },
  {
    label: "release enforce dispatch",
    includes: "gh workflow run release.yml -f enforce=true"
  }
];

async function main() {
  const packageJsonPath = resolve(process.cwd(), "package.json");
  const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));

  const storybookGateScript = packageJson.scripts?.["storybook:test:ci"];
  const releaseGateScript = packageJson.scripts?.["release:gate:ci"];

  if (!storybookGateScript || !releaseGateScript) {
    throw new Error("missing required scripts in package.json: storybook:test:ci / release:gate:ci");
  }

  const storybookGateCommands = extractPnpmScriptCommands(storybookGateScript);
  const releaseGateCommands = extractPnpmScriptCommands(releaseGateScript);

  const checks = [
    ...docsGateFiles.map((file) => ({
      file,
      requirements: storybookGateCommands.map((command) => ({
        label: `storybook gate command: ${command}`,
        includes: `pnpm ${command}`
      }))
    })),
    ...releaseGateDocsFiles.map((file) => ({
      file,
      requirements: releaseGateCommands.map((command) => ({
        label: `release gate command: ${command}`,
        includes: `pnpm ${command}`
      }))
    })),
    {
      file: "docs/secrets.md",
      requirements: secretsDocsChecks
    }
  ];

  const missing = [];

  for (const check of checks) {
    const filePath = resolve(process.cwd(), check.file);
    const content = await readFile(filePath, "utf8");
    for (const requirement of check.requirements) {
      if (!content.includes(requirement.includes)) {
        missing.push({
          file: check.file,
          label: requirement.label,
          expected: requirement.includes
        });
      }
    }
  }

  if (missing.length === 0) {
    console.log(
      `[docs-command-check] ok: validated ${checks.length} files and ${checks.reduce(
        (count, item) => count + item.requirements.length,
        0
      )} command references`
    );
    return;
  }

  console.error("[docs-command-check] error: missing required command references:");
  for (const item of missing) {
    console.error(`- ${item.file}: ${item.label} -> ${item.expected}`);
  }
  process.exit(1);
}

main().catch((error) => {
  console.error(`[docs-command-check] error: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
});

function extractPnpmScriptCommands(script) {
  const commands = new Set();

  for (const segment of script
    .split("&&")
    .map((item) => item.trim())
    .filter(Boolean)) {
    if (!segment.startsWith("pnpm ")) {
      continue;
    }

    const tokens = segment.split(/\s+/);
    if (tokens[1] === "--filter") {
      const filteredCommand = tokens[3];
      if (filteredCommand) {
        commands.add(filteredCommand);
      }
      continue;
    }

    const command = tokens[1];
    if (command) {
      commands.add(command);
    }
  }

  return Array.from(commands);
}
