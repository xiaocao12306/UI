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
let versionStepRan = false;
let restoredFileCount = 0;

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
    `- restored version files: \`${restoredFileCount}\``,
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

function runGit(args) {
  const result = spawnSync("git", args, {
    encoding: "utf8",
    stdio: "pipe",
    shell: process.platform === "win32"
  });

  if (result.status !== 0) {
    throw new Error(`git ${args.join(" ")} failed`);
  }

  return result.stdout ?? "";
}

function getGitStatusLines() {
  const output = runGit(["status", "--porcelain"]);
  return output
    .split("\n")
    .map((line) => line.trimEnd())
    .filter(Boolean);
}

function ensureCleanWorkingTree() {
  const lines = getGitStatusLines();
  if (lines.length > 0) {
    throw new Error("Step failed: preflight clean-working-tree check");
  }
}

function restoreVersionChanges() {
  if (!versionStepRan) {
    return;
  }

  const lines = getGitStatusLines();
  const changedTrackedPaths = new Set();

  for (const line of lines) {
    const status = line.slice(0, 2);
    if (status === "??") {
      continue;
    }

    const rawPath = line.slice(3).trim();
    if (!rawPath) {
      continue;
    }

    const resolvedPath = rawPath.includes(" -> ") ? rawPath.split(" -> ")[1].trim() : rawPath;
    if (resolvedPath) {
      changedTrackedPaths.add(resolvedPath);
    }
  }

  if (changedTrackedPaths.size === 0) {
    return;
  }

  runGit(["checkout", "--", ...changedTrackedPaths]);
  restoredFileCount = changedTrackedPaths.size;
}

console.log("Aurora UI release dry-run");
console.log("-------------------------");

try {
  ensureCleanWorkingTree();

  for (const step of checks) {
    runStep(step.label, step.command);
    if (step.label === "changeset version") {
      versionStepRan = true;
    }
  }
} catch (error) {
  dryRunStatus = "failed";
  if (error instanceof Error && error.message.startsWith("Step failed: ")) {
    failedStepLabel = error.message.replace("Step failed: ", "");
  }

  try {
    restoreVersionChanges();
  } catch {
    if (!failedStepLabel) {
      failedStepLabel = "restore version changes";
    }
  }

  writeSummary();
  throw error;
}

try {
  restoreVersionChanges();
} catch (error) {
  dryRunStatus = "failed";
  failedStepLabel = "restore version changes";
  writeSummary();
  throw error;
}

writeSummary();

console.log("");
console.log("Dry-run completed.");
console.log("Any version-file edits produced by dry-run were reverted automatically.");
