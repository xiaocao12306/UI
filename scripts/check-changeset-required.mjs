#!/usr/bin/env node

import { spawnSync } from "node:child_process";

const args = parseArgs(process.argv.slice(2));
const baseRef = args.base ?? "origin/main";
const headRef = args.head ?? "HEAD";

const changedFiles = gitDiffNameOnly(baseRef, headRef);
const packageChanges = changedFiles.filter((file) => file.startsWith("packages/"));
const changesetFiles = changedFiles.filter((file) => isChangesetMarkdown(file));

console.log("[changeset-required] base:", baseRef);
console.log("[changeset-required] head:", headRef);
console.log("[changeset-required] changed files:", changedFiles.length);
console.log("[changeset-required] package changes:", packageChanges.length);
console.log("[changeset-required] changeset files:", changesetFiles.length);

if (packageChanges.length === 0) {
  console.log("[changeset-required] ok: no package changes detected, changeset is not required.");
  process.exit(0);
}

if (changesetFiles.length > 0) {
  console.log("[changeset-required] ok: changeset file detected.");
  for (const file of changesetFiles) {
    console.log(`  - ${file}`);
  }
  process.exit(0);
}

console.error("[changeset-required] error: package changes detected without a changeset file.");
console.error("[changeset-required] add a markdown file under .changeset/ (run `pnpm changeset`).");
console.error("[changeset-required] changed package files:");
for (const file of packageChanges) {
  console.error(`  - ${file}`);
}
process.exit(1);

function parseArgs(argv) {
  const parsed = {};

  for (let index = 0; index < argv.length; index += 1) {
    const part = argv[index];
    if (!part.startsWith("--")) {
      continue;
    }

    const key = part.slice(2);
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) {
      continue;
    }

    parsed[key] = value;
    index += 1;
  }

  return parsed;
}

function gitDiffNameOnly(base, head) {
  const range = `${base}...${head}`;
  const result = spawnSync("git", ["diff", "--name-only", "--diff-filter=ACMR", range], {
    encoding: "utf8",
    stdio: "pipe",
    shell: process.platform === "win32"
  });

  if (result.status !== 0) {
    const stderr = (result.stderr ?? "").trim();
    throw new Error(
      `[changeset-required] failed to run git diff for range ${range}${stderr ? `: ${stderr}` : ""}`
    );
  }

  return (result.stdout ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function isChangesetMarkdown(filePath) {
  if (!filePath.startsWith(".changeset/")) {
    return false;
  }

  if (!filePath.endsWith(".md")) {
    return false;
  }

  return filePath !== ".changeset/README.md";
}
