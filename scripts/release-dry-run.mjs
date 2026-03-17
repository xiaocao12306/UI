#!/usr/bin/env node

import { spawnSync } from "node:child_process";

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

function runStep(label, command) {
  console.log("");
  console.log(`==> ${label}`);
  const result = spawnSync(command[0], command.slice(1), {
    stdio: "inherit",
    shell: process.platform === "win32"
  });

  if (result.status !== 0) {
    throw new Error(`Step failed: ${label}`);
  }
}

console.log("Aurora UI release dry-run");
console.log("-------------------------");

for (const step of checks) {
  runStep(step.label, step.command);
}

console.log("");
console.log("Dry-run completed.");
console.log("If version files changed, commit/reset them intentionally before pushing.");
