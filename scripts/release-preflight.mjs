#!/usr/bin/env node

const checks = [
  {
    name: "CHROMATIC_PROJECT_TOKEN",
    description: "Chromatic visual regression upload",
    scope: "chromatic"
  },
  {
    name: "NPM_TOKEN",
    description: "Changesets npm publish",
    scope: "publish"
  }
];

const validScopes = new Set(["all", "chromatic", "publish"]);
const scopeArg = process.argv.find((arg) => arg.startsWith("--scope="));
const scope = scopeArg ? scopeArg.split("=")[1] : "all";

function printUsage() {
  console.log("Usage: pnpm release:preflight -- --scope=<all|chromatic|publish>");
}

if (!validScopes.has(scope)) {
  console.error(`Invalid --scope value: ${scope}`);
  printUsage();
  process.exit(1);
}

const activeChecks = checks.filter((check) => scope === "all" || check.scope === scope);
let hasMissing = false;

console.log("Aurora UI release preflight");
console.log("--------------------------");
console.log(`scope: ${scope}`);
console.log("");

for (const check of activeChecks) {
  const value = process.env[check.name];
  const ok = Boolean(value && value.trim().length > 0);
  const status = ok ? "OK" : "MISSING";
  console.log(`${status.padEnd(7)} ${check.name} - ${check.description}`);
  if (!ok) {
    hasMissing = true;
  }
}

if (hasMissing) {
  console.log("");
  console.log(`Some required secrets are missing for scope "${scope}".`);
  console.log("See docs/secrets.md for setup instructions.");
  printUsage();
  process.exit(1);
}

console.log("");
console.log("All required secrets are available for this scope.");
