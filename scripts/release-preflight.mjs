#!/usr/bin/env node

const checks = [
  {
    name: "CHROMATIC_PROJECT_TOKEN",
    description: "Chromatic visual regression upload"
  },
  {
    name: "NPM_TOKEN",
    description: "Changesets npm publish"
  }
];

let hasMissing = false;

console.log("Aurora UI release preflight");
console.log("--------------------------");

for (const check of checks) {
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
  console.log("Some required secrets are missing.");
  console.log("See docs/secrets.md for setup instructions.");
  process.exit(1);
}

console.log("");
console.log("All required secrets are available.");
