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
    console.error(`[storybook-static-check] error: ${label} failed.`);
    process.exit(result.status ?? 1);
  }

  return result.stdout ?? "";
}

console.log("[storybook-static-check] building storybook-static for sync verification...");
run("pnpm", ["--filter", "@aurora-ui/storybook-app", "build-storybook"], "storybook build");

const statusOutput = run("git", ["status", "--porcelain", "--", "apps/storybook/storybook-static"], "git status", {
  printStdout: false,
  printStderr: false
});
const changedStaticEntries = statusOutput
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

if (changedStaticEntries.length > 0) {
  console.error("[storybook-static-check] error: storybook-static is out of sync with current sources.");
  console.error("[storybook-static-check] changed entries:");
  for (const entry of changedStaticEntries) {
    console.error(`  ${entry}`);
  }
  console.error("[storybook-static-check] fix: run `pnpm storybook:build`, commit static updates, then rerun.");
  process.exit(1);
}

console.log("[storybook-static-check] ok: storybook-static is synchronized.");
