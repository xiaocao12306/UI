#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDir, "..");
const projectMetadataPath = path.resolve(workspaceRoot, "apps/storybook/storybook-static/project.json");
const VOLATILE_KEYS = ["generatedAt", "userSince"];
const STABLE_TIMESTAMP = 0;

function normalizeMetadata(metadata) {
  let changed = false;
  const normalized = { ...metadata };

  for (const key of VOLATILE_KEYS) {
    if (key in normalized && normalized[key] !== STABLE_TIMESTAMP) {
      normalized[key] = STABLE_TIMESTAMP;
      changed = true;
    }
  }

  return { normalized, changed };
}

async function run() {
  const source = await readFile(projectMetadataPath, "utf8");
  const parsed = JSON.parse(source);
  const { normalized, changed } = normalizeMetadata(parsed);

  if (!changed) {
    console.log("[storybook-static-normalize] project.json already stable");
    return;
  }

  await writeFile(projectMetadataPath, `${JSON.stringify(normalized)}\n`, "utf8");
  console.log(
    `[storybook-static-normalize] normalized ${VOLATILE_KEYS.join(", ")} in ${path.relative(workspaceRoot, projectMetadataPath)}`
  );
}

run().catch((error) => {
  console.error("[storybook-static-normalize] failed:", error instanceof Error ? error.message : error);
  process.exit(1);
});
