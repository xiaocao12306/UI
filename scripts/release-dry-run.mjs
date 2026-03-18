#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { appendFileSync } from "node:fs";

const checks = [
  {
    label: "changeset version",
    command: ["pnpm", "changeset", "version"]
  },
  {
    label: "@aurora-ui/tokens npm publish --dry-run",
    command: ["pnpm", "--filter", "@aurora-ui/tokens", "exec", "npm", "publish", "--dry-run", "--access", "public"]
  },
  {
    label: "@aurora-ui/primitives npm publish --dry-run",
    command: ["pnpm", "--filter", "@aurora-ui/primitives", "exec", "npm", "publish", "--dry-run", "--access", "public"]
  },
  {
    label: "@aurora-ui/react npm publish --dry-run",
    command: ["pnpm", "--filter", "@aurora-ui/react", "exec", "npm", "publish", "--dry-run", "--access", "public"]
  }
];

const packageMetrics = [];
let changesetStatus = "ok";
let dryRunStatus = "success";
let failedStepLabel = "";

function runStep(label, command) {
  console.log("");
  console.log(`==> ${label}`);
  const result = spawnSync(command[0], command.slice(1), {
    encoding: "utf8",
    stdio: "pipe",
    shell: process.platform === "win32"
  });
  const output = `${result.stdout ?? ""}${result.stderr ?? ""}`;

  if (result.stdout) {
    process.stdout.write(result.stdout);
  }
  if (result.stderr) {
    process.stderr.write(result.stderr);
  }

  if (result.status !== 0) {
    throw new Error(`Step failed: ${label}`);
  }

  if (label === "changeset version" && output.includes("No unreleased changesets found")) {
    changesetStatus = "no-pending-changesets";
  }

  if (label.includes("npm publish --dry-run")) {
    packageMetrics.push(extractPackageMetrics(output));
  }
}

function extractPackageMetrics(output) {
  const name = output.match(/npm notice name:\s+([^\n]+)/)?.[1]?.trim() ?? "unknown";
  const packageSize = output.match(/npm notice package size:\s+([^\n]+)/)?.[1]?.trim() ?? "n/a";
  const unpackedSize = output.match(/npm notice unpacked size:\s+([^\n]+)/)?.[1]?.trim() ?? "n/a";
  return { name, packageSize, unpackedSize };
}

function writeSummary() {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) {
    return;
  }

  const lines = [
    "## Release Dry-Run Summary",
    "",
    `- status: \`${dryRunStatus}\``,
    ...(failedStepLabel ? [`- failed step: \`${failedStepLabel}\``] : []),
    `- changeset version: \`${changesetStatus}\``,
    "",
    "| Package | Tarball Size | Unpacked Size |",
    "| --- | --- | --- |"
  ];

  for (const metric of packageMetrics) {
    lines.push(`| \`${metric.name}\` | ${metric.packageSize} | ${metric.unpackedSize} |`);
  }

  lines.push("");
  lines.push("- npm login warning in dry-run mode is expected when token is not configured locally.");
  lines.push("");
  appendFileSync(summaryPath, `${lines.join("\n")}\n`, "utf8");
}

console.log("Aurora UI release dry-run");
console.log("-------------------------");

try {
  for (const step of checks) {
    runStep(step.label, step.command);
  }
} catch (error) {
  dryRunStatus = "failed";
  if (error instanceof Error && error.message.startsWith("Step failed: ")) {
    failedStepLabel = error.message.replace("Step failed: ", "");
  }
  writeSummary();
  throw error;
}

writeSummary();

console.log("");
console.log("Dry-run completed.");
console.log("If version files changed, commit/reset them intentionally before pushing.");
