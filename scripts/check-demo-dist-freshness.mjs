#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import process from "node:process";

function run(command, args, label, options = {}) {
  const { printStdout = true, printStderr = true } = options;
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    encoding: "utf8",
    stdio: "pipe",
    shell: process.platform === "win32"
  });

  if (printStdout && result.stdout) {
    process.stdout.write(result.stdout);
  }
  if (printStderr && result.stderr) {
    process.stderr.write(result.stderr);
  }

  if (result.status !== 0) {
    console.error(`[demo-dist-check] error: ${label} failed.`);
    process.exit(result.status ?? 1);
  }

  return result.stdout ?? "";
}

console.log("[demo-dist-check] building demo dist for sync verification...");
run("pnpm", ["--filter", "@aurora-ui/demo", "build"], "demo build");

const statusOutput = run("git", ["status", "--porcelain", "--", "apps/demo/dist"], "git status", {
  printStdout: false,
  printStderr: false
});
const changedDistEntries = statusOutput
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

if (changedDistEntries.length > 0) {
  console.error("[demo-dist-check] error: demo dist is out of sync with current sources.");
  console.error("[demo-dist-check] changed entries:");
  for (const entry of changedDistEntries) {
    console.error(`  ${entry}`);
  }
  console.error("[demo-dist-check] fix: run `pnpm demo:build`, commit dist updates, then rerun.");
  process.exit(1);
}

console.log("[demo-dist-check] ok: demo dist is synchronized.");
