#!/usr/bin/env node

import { access } from "node:fs/promises";
import { constants } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { setTimeout as delay } from "node:timers/promises";

const LOG_PREFIX = "[storybook-test-grep]";
const PORT = 6106;
const STORYBOOK_URL = `http://127.0.0.1:${PORT}`;
const workspaceRoot = process.cwd();
const staticIndexPath = path.resolve(workspaceRoot, "apps/storybook/storybook-static/index.html");
const pattern = process.argv.slice(2).join(" ").trim();

function log(message) {
  console.log(`${LOG_PREFIX} ${message}`);
}

function fail(message) {
  console.error(`${LOG_PREFIX} error: ${message}`);
  process.exit(1);
}

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: workspaceRoot,
      stdio: "inherit",
      ...options
    });

    child.on("error", reject);
    child.on("exit", (code, signal) => {
      resolve({ code: code ?? 1, signal });
    });
  });
}

async function ensureStaticBuilt() {
  try {
    await access(staticIndexPath, constants.F_OK);
  } catch {
    fail("missing apps/storybook/storybook-static. Run `pnpm storybook:build` first.");
  }
}

async function waitForStorybook(timeoutMs = 30_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(STORYBOOK_URL);
      if (response.ok) {
        return;
      }
    } catch {
      // Ignore startup connection failures.
    }
    await delay(300);
  }
  fail(`storybook static server did not become ready within ${timeoutMs}ms.`);
}

async function main() {
  if (!pattern) {
    fail("usage: pnpm storybook:test:grep \"Table.stories.tsx\"");
  }

  await ensureStaticBuilt();

  await runCommand("sh", ["-lc", `fuser -k ${PORT}/tcp >/dev/null 2>&1 || true`]);

  log(`starting static server on ${STORYBOOK_URL}`);
  const server = spawn("node", ["scripts/serve-storybook-static.mjs"], {
    cwd: workspaceRoot,
    stdio: "inherit"
  });

  const cleanup = async () => {
    if (server.killed) {
      return;
    }

    server.kill("SIGTERM");
    await delay(600);
    if (!server.killed) {
      server.kill("SIGKILL");
    }
  };

  try {
    await waitForStorybook();
    log(`running Storybook tests with --testPathPattern "${pattern}"`);
    const result = await runCommand("pnpm", [
      "--filter",
      "@aurora-ui/storybook-app",
      "storybook:test",
      "--",
      "--testPathPattern",
      pattern
    ]);

    if (result.code !== 0) {
      process.exit(result.code ?? 1);
    }
  } finally {
    await cleanup();
  }
}

main().catch((error) => {
  fail(error instanceof Error ? error.message : String(error));
});
