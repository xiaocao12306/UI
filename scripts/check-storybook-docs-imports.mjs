import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const docsDir = path.resolve(process.cwd(), "apps/storybook/src/docs");

const importPattern = /^import\s+\*\s+as\s+(\w+Stories)\s+from\s+["'][^"']+["'];?\s*$/gm;
const usagePattern = /\b(\w+Stories)\./g;

async function collectMdxFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return collectMdxFiles(fullPath);
      }
      if (entry.isFile() && entry.name.endsWith(".mdx")) {
        return [fullPath];
      }
      return [];
    })
  );

  return files.flat();
}

function unique(values) {
  return [...new Set(values)];
}

function analyzeFile(content) {
  const imports = unique([...content.matchAll(importPattern)].map((match) => match[1]));
  const usages = unique([...content.matchAll(usagePattern)].map((match) => match[1]));
  const missingImports = usages.filter((usage) => !imports.includes(usage));
  const unusedImports = imports.filter((importName) => !usages.includes(importName));

  return { missingImports, unusedImports };
}

const mdxFiles = await collectMdxFiles(docsDir);
const failures = [];
const warnings = [];

for (const filePath of mdxFiles) {
  const content = await readFile(filePath, "utf8");
  const { missingImports, unusedImports } = analyzeFile(content);

  if (missingImports.length > 0) {
    failures.push({ filePath, missingImports });
  }
  if (unusedImports.length > 0) {
    warnings.push({ filePath, unusedImports });
  }
}

for (const warning of warnings) {
  console.warn(
    `[storybook-docs-import-check] warning: ${path.relative(process.cwd(), warning.filePath)} has unused story imports: ${warning.unusedImports.join(", ")}`
  );
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(
      `[storybook-docs-import-check] error: ${path.relative(process.cwd(), failure.filePath)} is missing story imports for: ${failure.missingImports.join(", ")}`
    );
  }
  process.exit(1);
}

console.log(`[storybook-docs-import-check] ok: scanned ${mdxFiles.length} mdx docs files`);
