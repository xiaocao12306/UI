#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const checks = [
  {
    file: "README.md",
    requirements: [
      {
        label: "storybook docs parity command",
        includes: "pnpm storybook:docs:parity:check"
      },
      {
        label: "release gate chain with coverage",
        includes: "verify + coverage:gate + demo:e2e + demo:dist:check + storybook:test:ci"
      }
    ]
  },
  {
    file: "docs/testing-and-release.md",
    requirements: [
      {
        label: "storybook docs parity command",
        includes: "pnpm storybook:docs:parity:check"
      }
    ]
  },
  {
    file: "docs/storybook.md",
    requirements: [
      {
        label: "storybook docs parity command",
        includes: "pnpm storybook:docs:parity:check"
      }
    ]
  }
];

async function main() {
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
