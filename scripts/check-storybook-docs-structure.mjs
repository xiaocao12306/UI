#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const checks = [
  {
    file: "apps/storybook/src/docs/Component-API.mdx",
    headings: [
      "## Core",
      "### Button",
      "### Input",
      "### FormField",
      "### Dialog",
      "### Dropdown",
      "### Tabs",
      "### Table",
      "### Toast",
      "### CommandPalette",
      "### PromptInput"
    ]
  },
  {
    file: "apps/storybook/src/docs/Best-Practices.mdx",
    headings: [
      "## API Design",
      "## Theming",
      "## Accessibility",
      "## Overlay Policies",
      "## Testing",
      "## AI Interaction Patterns",
      "## Data Presentation Patterns"
    ]
  }
];

async function main() {
  const missing = [];

  for (const check of checks) {
    const content = await readFile(resolve(process.cwd(), check.file), "utf8");
    for (const heading of check.headings) {
      if (!new RegExp(`^${escapeRegExp(heading)}\\s*$`, "m").test(content)) {
        missing.push({ file: check.file, heading });
      }
    }
  }

  if (missing.length === 0) {
    const headingCount = checks.reduce((sum, item) => sum + item.headings.length, 0);
    console.log(
      `[storybook-docs-structure-check] ok: validated ${checks.length} docs files and ${headingCount} required headings`
    );
    return;
  }

  console.error("[storybook-docs-structure-check] error: missing required docs headings:");
  for (const item of missing) {
    console.error(`- ${item.file}: ${item.heading}`);
  }
  process.exit(1);
}

main().catch((error) => {
  console.error(
    `[storybook-docs-structure-check] error: ${error instanceof Error ? error.message : String(error)}`
  );
  process.exit(1);
});

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
