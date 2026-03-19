#!/usr/bin/env node

import { appendFile, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const storiesDir = path.resolve(rootDir, "apps/storybook/src/stories");
const storyFilePattern = /\.stories\.[jt]sx?$/;
const playPropertyPattern = /\bplay\s*:/;
const LOG_PREFIX = "[storybook-play-coverage-check]";

async function collectStoryFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return collectStoryFiles(fullPath);
      }
      if (entry.isFile() && storyFilePattern.test(entry.name)) {
        return [fullPath];
      }
      return [];
    })
  );

  return nested.flat().sort((a, b) => a.localeCompare(b));
}

function relative(filePath) {
  return path.relative(rootDir, filePath);
}

async function appendSummary(totalFiles, missingPlayFiles) {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) {
    return;
  }

  const status = missingPlayFiles.length === 0 ? "ok" : "issues-found";
  const lines = [
    "## Storybook Play Coverage",
    "",
    `- status: \`${status}\``,
    `- story files scanned: \`${totalFiles}\``,
    `- files with play hooks: \`${totalFiles - missingPlayFiles.length}\``,
    `- files missing play hooks: \`${missingPlayFiles.length}\``
  ];

  if (missingPlayFiles.length > 0) {
    lines.push("");
    lines.push("### Missing Play Hooks");
    for (const filePath of missingPlayFiles) {
      lines.push(`- \`${relative(filePath)}\``);
    }
  }

  lines.push("");
  await appendFile(summaryPath, `${lines.join("\n")}\n`);
}

let storyFiles = [];
try {
  storyFiles = await collectStoryFiles(storiesDir);
} catch (error) {
  console.error(`${LOG_PREFIX} error: failed to scan ${relative(storiesDir)}.`);
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

const missingPlayFiles = [];
for (const storyFile of storyFiles) {
  const content = await readFile(storyFile, "utf8");
  if (!playPropertyPattern.test(content)) {
    missingPlayFiles.push(storyFile);
  }
}

await appendSummary(storyFiles.length, missingPlayFiles);

if (missingPlayFiles.length > 0) {
  console.error(`${LOG_PREFIX} error: ${missingPlayFiles.length} story file(s) missing play hooks.`);
  for (const storyFile of missingPlayFiles) {
    console.error(`- ${relative(storyFile)}`);
  }
  console.error(`${LOG_PREFIX} fix: add at least one exported story with a play function per file.`);
  process.exit(1);
}

console.log(`${LOG_PREFIX} ok: ${storyFiles.length}/${storyFiles.length} story files include play hooks.`);
