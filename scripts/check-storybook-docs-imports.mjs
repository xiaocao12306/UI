import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const docsDir = path.resolve(process.cwd(), "apps/storybook/src/docs");

const importPattern = /^import\s+\*\s+as\s+(\w+Stories)\s+from\s+["']([^"']+)["'];?\s*$/gm;
const usagePattern = /\b(\w+Stories)\./g;
const storyRefPattern = /\b(\w+Stories)\.(\w+)\b/g;
const exportPattern = /export\s+(?:const|function|let|var)\s+(\w+)/g;
const exportListPattern = /export\s*\{([^}]+)\}/g;

const storyExportCache = new Map();

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
  const imports = [...content.matchAll(importPattern)].map((match) => ({ alias: match[1], source: match[2] }));
  const importAliases = unique(imports.map((entry) => entry.alias));
  const usages = unique([...content.matchAll(usagePattern)].map((match) => match[1]));
  const missingImports = usages.filter((usage) => !importAliases.includes(usage));
  const unusedImports = importAliases.filter((importName) => !usages.includes(importName));
  const storyRefs = [...content.matchAll(storyRefPattern)].map((match) => ({ alias: match[1], exportName: match[2] }));

  return { imports, storyRefs, missingImports, unusedImports };
}

async function resolveImportFile(fromFilePath, importSource) {
  const resolvedBase = path.resolve(path.dirname(fromFilePath), importSource);
  const candidates = [resolvedBase, `${resolvedBase}.ts`, `${resolvedBase}.tsx`, `${resolvedBase}.js`, `${resolvedBase}.jsx`];

  for (const candidate of candidates) {
    try {
      const content = await readFile(candidate, "utf8");
      return { filePath: candidate, content };
    } catch {
      // try next candidate
    }
  }

  return null;
}

function collectExports(content) {
  const exportNames = new Set();

  for (const match of content.matchAll(exportPattern)) {
    exportNames.add(match[1]);
  }

  for (const match of content.matchAll(exportListPattern)) {
    const items = match[1]
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    for (const item of items) {
      const aliasedName = item.split(/\s+as\s+/i)[1]?.trim();
      const directName = item.split(/\s+as\s+/i)[0]?.trim();
      if (aliasedName) {
        exportNames.add(aliasedName);
      } else if (directName) {
        exportNames.add(directName);
      }
    }
  }

  return exportNames;
}

async function loadStoryExports(fromFilePath, importSource) {
  const cacheKey = `${fromFilePath}::${importSource}`;
  if (storyExportCache.has(cacheKey)) {
    return storyExportCache.get(cacheKey);
  }

  const resolved = await resolveImportFile(fromFilePath, importSource);
  if (!resolved) {
    const missingFileResult = { missingFile: true, filePath: importSource, exports: new Set() };
    storyExportCache.set(cacheKey, missingFileResult);
    return missingFileResult;
  }

  const exports = collectExports(resolved.content);
  const result = { missingFile: false, filePath: resolved.filePath, exports };
  storyExportCache.set(cacheKey, result);
  return result;
}

const mdxFiles = await collectMdxFiles(docsDir);
const failures = [];
const warnings = [];

for (const filePath of mdxFiles) {
  const content = await readFile(filePath, "utf8");
  const { imports, storyRefs, missingImports, unusedImports } = analyzeFile(content);
  const importLookup = new Map(imports.map((entry) => [entry.alias, entry.source]));
  const missingStoryExports = [];

  for (const storyRef of storyRefs) {
    if (!importLookup.has(storyRef.alias)) {
      continue;
    }

    const source = importLookup.get(storyRef.alias);
    const exportInfo = await loadStoryExports(filePath, source);
    if (exportInfo.missingFile) {
      missingStoryExports.push({
        alias: storyRef.alias,
        exportName: storyRef.exportName,
        source,
        reason: "story-file-not-found"
      });
      continue;
    }

    if (!exportInfo.exports.has(storyRef.exportName)) {
      missingStoryExports.push({
        alias: storyRef.alias,
        exportName: storyRef.exportName,
        source: path.relative(process.cwd(), exportInfo.filePath),
        reason: "story-export-not-found"
      });
    }
  }

  if (missingImports.length > 0) {
    failures.push({ filePath, missingImports, missingStoryExports });
  } else if (missingStoryExports.length > 0) {
    failures.push({ filePath, missingImports: [], missingStoryExports });
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
    if (failure.missingImports.length > 0) {
      console.error(
        `[storybook-docs-import-check] error: ${path.relative(process.cwd(), failure.filePath)} is missing story imports for: ${failure.missingImports.join(", ")}`
      );
    }
    if (failure.missingStoryExports.length > 0) {
      const refs = failure.missingStoryExports
        .map((entry) => `${entry.alias}.${entry.exportName} -> ${entry.source} (${entry.reason})`)
        .join(", ");
      console.error(`[storybook-docs-import-check] error: ${path.relative(process.cwd(), failure.filePath)} has invalid story refs: ${refs}`);
    }
  }
  process.exit(1);
}

console.log(`[storybook-docs-import-check] ok: scanned ${mdxFiles.length} mdx docs files`);
