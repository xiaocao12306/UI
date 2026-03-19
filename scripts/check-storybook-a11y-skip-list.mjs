#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const workspaceRoot = process.cwd();
const testRunnerPath = path.resolve(workspaceRoot, "apps/storybook/.storybook/test-runner.ts");
const storyIndexPath = path.resolve(workspaceRoot, "apps/storybook/storybook-static/index.json");
const LOG_PREFIX = "[storybook-a11y-skip-check]";

function fail(message) {
  console.error(`${LOG_PREFIX} error: ${message}`);
  process.exit(1);
}

function parseSkipIds(content) {
  const setMatch = content.match(/const colorContrastSkipStoryIds = new Set\(\[([\s\S]*?)\]\);/);
  if (!setMatch) {
    fail("could not locate colorContrastSkipStoryIds set in test-runner.ts");
  }

  const ids = [...setMatch[1].matchAll(/"([^"]+)"/g)].map((match) => match[1]);
  return ids;
}

function ensureSortedUnique(ids) {
  const unique = new Set(ids);
  if (unique.size !== ids.length) {
    fail("skip list contains duplicate story ids.");
  }

  const sorted = [...ids].sort((a, b) => a.localeCompare(b));
  for (let index = 0; index < ids.length; index += 1) {
    if (ids[index] !== sorted[index]) {
      fail("skip list must stay lexicographically sorted for reviewability.");
    }
  }
}

function ensureIdsExist(ids, storyEntries) {
  const entryIds = new Set(Object.keys(storyEntries));
  const missing = ids.filter((id) => !entryIds.has(id));
  if (missing.length > 0) {
    fail(`skip list references unknown story ids: ${missing.join(", ")}`);
  }
}

async function main() {
  const [testRunnerSource, storyIndexSource] = await Promise.all([
    readFile(testRunnerPath, "utf8"),
    readFile(storyIndexPath, "utf8")
  ]);

  const skipIds = parseSkipIds(testRunnerSource);
  ensureSortedUnique(skipIds);

  const storyIndex = JSON.parse(storyIndexSource);
  ensureIdsExist(skipIds, storyIndex.entries ?? {});

  console.log(`${LOG_PREFIX} ok: ${skipIds.length} skip ids verified against story index.`);
}

main().catch((error) => {
  fail(error instanceof Error ? error.message : String(error));
});
