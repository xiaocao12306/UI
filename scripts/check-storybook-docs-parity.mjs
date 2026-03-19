import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const docsDir = path.resolve(process.cwd(), "apps/storybook/src/docs");
const componentApiPath = path.join(docsDir, "Component-API.mdx");
const bestPracticesPath = path.join(docsDir, "Best-Practices.mdx");

const importPattern = /^import\s+\*\s+as\s+(\w+Stories)\s+from\s+["'][^"']+["'];?\s*$/gm;

const requiredSharedImports = [
  "ButtonStories",
  "FormFieldStories",
  "DialogStories",
  "DrawerStories",
  "TooltipStories",
  "PopoverStories",
  "DropdownStories",
  "CommandPaletteStories",
  "ToastStories",
  "TabsStories",
  "TableStories",
  "PaginationStories"
];

function collectImportAliases(content) {
  return [...new Set([...content.matchAll(importPattern)].map((match) => match[1]))];
}

function sortValues(values) {
  return [...values].sort((left, right) => left.localeCompare(right));
}

const [componentApiContent, bestPracticesContent] = await Promise.all([
  readFile(componentApiPath, "utf8"),
  readFile(bestPracticesPath, "utf8")
]);

const componentApiImports = collectImportAliases(componentApiContent);
const bestPracticesImports = collectImportAliases(bestPracticesContent);
const componentApiSet = new Set(componentApiImports);
const bestPracticesSet = new Set(bestPracticesImports);

const parityFailures = [];

const missingFromComponentApi = bestPracticesImports.filter((alias) => !componentApiSet.has(alias));
if (missingFromComponentApi.length > 0) {
  parityFailures.push(
    `Component-API.mdx 缺少 Best-Practices.mdx 已导入的故事别名：${sortValues(missingFromComponentApi).join(", ")}`
  );
}

const missingRequiredInComponentApi = requiredSharedImports.filter((alias) => !componentApiSet.has(alias));
if (missingRequiredInComponentApi.length > 0) {
  parityFailures.push(
    `Component-API.mdx 缺少共享门禁故事别名：${sortValues(missingRequiredInComponentApi).join(", ")}`
  );
}

const missingRequiredInBestPractices = requiredSharedImports.filter(
  (alias) => !bestPracticesSet.has(alias)
);
if (missingRequiredInBestPractices.length > 0) {
  parityFailures.push(
    `Best-Practices.mdx 缺少共享门禁故事别名：${sortValues(missingRequiredInBestPractices).join(", ")}`
  );
}

if (parityFailures.length > 0) {
  for (const failure of parityFailures) {
    console.error(`[storybook-docs-parity-check] error: ${failure}`);
  }
  process.exit(1);
}

console.log(
  `[storybook-docs-parity-check] ok: Component API ${componentApiImports.length} imports, Best Practices ${bestPracticesImports.length} imports`
);
