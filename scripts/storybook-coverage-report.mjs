#!/usr/bin/env node

import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const LOG_PREFIX = "[storybook-coverage-report]";
const rootDir = process.cwd();
const storiesDir = path.resolve(rootDir, "apps/storybook/src/stories");
const docsDir = path.resolve(rootDir, "apps/storybook/src/docs");

const importPattern = /^import\s+\*\s+as\s+(\w+Stories)\s+from\s+["']([^"']+)["'];?\s*$/gm;
const storyRefPattern = /\b(\w+Stories)\.(\w+)\b/g;
const directExportPattern = /export\s+(?:const|let|var|class|(?:async\s+)?function)\s+(\w+)/g;
const exportListPattern = /export\s*\{([^}]+)\}/g;

const usage = `Usage:
  node scripts/storybook-coverage-report.mjs [--strict]

Options:
  --strict   Exit with non-zero code when coverage/doc reference issues are found.
  --help     Show this help message.
`;

function printHelp() {
  console.log(usage.trimEnd());
}

function parseArgs(args) {
  const normalizedArgs = args.filter((arg) => arg !== "--");
  const allowed = new Set(["--help", "--strict"]);
  const unknown = normalizedArgs.filter((arg) => !allowed.has(arg));
  if (unknown.length > 0) {
    console.error(`${LOG_PREFIX} error: unknown arguments: ${unknown.join(", ")}`);
    printHelp();
    process.exit(1);
  }

  if (normalizedArgs.includes("--help")) {
    printHelp();
    process.exit(0);
  }

  return { strict: normalizedArgs.includes("--strict") };
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(directory, matcher) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return collectFiles(fullPath, matcher);
      }
      if (entry.isFile() && matcher(entry.name)) {
        return [fullPath];
      }
      return [];
    })
  );

  return nestedFiles.flat().sort((a, b) => a.localeCompare(b));
}

function parseStoryImports(content) {
  return [...content.matchAll(importPattern)].map((match) => ({
    alias: match[1],
    source: match[2]
  }));
}

function parseStoryRefs(content) {
  return [...content.matchAll(storyRefPattern)].map((match) => ({
    alias: match[1],
    exportName: match[2]
  }));
}

async function resolveImportFile(fromFilePath, importSource) {
  if (!importSource.startsWith(".")) {
    return null;
  }

  const resolvedBase = path.resolve(path.dirname(fromFilePath), importSource);
  const candidates = [
    resolvedBase,
    `${resolvedBase}.ts`,
    `${resolvedBase}.tsx`,
    `${resolvedBase}.js`,
    `${resolvedBase}.jsx`,
    `${resolvedBase}.mjs`,
    `${resolvedBase}.cjs`
  ];

  for (const candidate of candidates) {
    if (await exists(candidate)) {
      return path.resolve(candidate);
    }
  }

  return null;
}

function collectExports(content) {
  const exportNames = new Set();

  for (const match of content.matchAll(directExportPattern)) {
    exportNames.add(match[1]);
  }

  for (const match of content.matchAll(exportListPattern)) {
    const items = match[1]
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    for (const item of items) {
      const [left, right] = item.split(/\s+as\s+/i).map((part) => part.trim());
      const candidate = (right || left || "").replace(/^type\s+/i, "").trim();
      if (candidate) {
        exportNames.add(candidate);
      }
    }
  }

  return exportNames;
}

function percent(numerator, denominator) {
  if (denominator === 0) {
    return "0.0";
  }
  return ((numerator / denominator) * 100).toFixed(1);
}

function relative(filePath) {
  return path.relative(rootDir, filePath);
}

const { strict } = parseArgs(process.argv.slice(2));

const storyExportsCache = new Map();
async function getStoryExports(storyFilePath) {
  if (storyExportsCache.has(storyFilePath)) {
    return storyExportsCache.get(storyFilePath);
  }

  const content = await readFile(storyFilePath, "utf8");
  const exports = collectExports(content);
  storyExportsCache.set(storyFilePath, exports);
  return exports;
}

let storyFiles = [];
let docFiles = [];
try {
  storyFiles = await collectFiles(storiesDir, (name) => /\.stories\.[jt]sx?$/.test(name));
  docFiles = await collectFiles(docsDir, (name) => name.endsWith(".mdx"));
} catch (error) {
  console.error(`${LOG_PREFIX} error: failed to scan storybook docs/stories directories.`);
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

const storyFileSet = new Set(storyFiles.map((filePath) => path.resolve(filePath)));
const importedStoryFiles = new Set();
const referencedStoryFiles = new Set();

const missingImports = [];
const missingStoryFiles = [];
const missingStoryExports = [];
const unusedStoryImports = [];

let docsWithStoryImports = 0;
let totalStoryImports = 0;
let totalStoryRefs = 0;
let validStoryRefs = 0;

for (const docFile of docFiles) {
  const content = await readFile(docFile, "utf8");
  const imports = parseStoryImports(content);
  const refs = parseStoryRefs(content);
  const importLookup = new Map(imports.map((entry) => [entry.alias, entry.source]));
  const resolvedImportLookup = new Map();
  const usedAliases = new Set(refs.map((ref) => ref.alias));

  totalStoryImports += imports.length;
  totalStoryRefs += refs.length;
  if (imports.length > 0) {
    docsWithStoryImports += 1;
  }

  for (const imported of imports) {
    const resolved = await resolveImportFile(docFile, imported.source);
    if (!resolved) {
      missingStoryFiles.push({
        docFile,
        alias: imported.alias,
        source: imported.source
      });
      continue;
    }

    resolvedImportLookup.set(imported.alias, resolved);
    if (storyFileSet.has(resolved)) {
      importedStoryFiles.add(resolved);
    }
  }

  for (const ref of refs) {
    if (!importLookup.has(ref.alias)) {
      missingImports.push({
        docFile,
        alias: ref.alias,
        exportName: ref.exportName
      });
      continue;
    }

    const resolvedStoryFile = resolvedImportLookup.get(ref.alias);
    if (!resolvedStoryFile) {
      continue;
    }

    if (storyFileSet.has(resolvedStoryFile)) {
      referencedStoryFiles.add(resolvedStoryFile);
    }

    const exports = await getStoryExports(resolvedStoryFile);
    if (!exports.has(ref.exportName)) {
      missingStoryExports.push({
        docFile,
        alias: ref.alias,
        exportName: ref.exportName,
        storyFile: resolvedStoryFile
      });
      continue;
    }

    validStoryRefs += 1;
  }

  for (const imported of imports) {
    if (!usedAliases.has(imported.alias)) {
      unusedStoryImports.push({
        docFile,
        alias: imported.alias,
        source: imported.source
      });
    }
  }
}

const unimportedStoryFiles = storyFiles.filter((filePath) => !importedStoryFiles.has(path.resolve(filePath)));
const unreferencedStoryFiles = storyFiles.filter((filePath) => !referencedStoryFiles.has(path.resolve(filePath)));

const gatingIssueCount =
  missingImports.length + missingStoryFiles.length + missingStoryExports.length + unreferencedStoryFiles.length;

console.log(`${LOG_PREFIX} summary`);
console.log(`mode: ${strict ? "strict" : "report-only"}`);
console.log(`stories total: ${storyFiles.length}`);
console.log(
  `docs import coverage: ${importedStoryFiles.size}/${storyFiles.length} (${percent(importedStoryFiles.size, storyFiles.length)}%)`
);
console.log(
  `docs reference coverage: ${referencedStoryFiles.size}/${storyFiles.length} (${percent(referencedStoryFiles.size, storyFiles.length)}%)`
);
console.log(`docs scanned: ${docFiles.length} (with story imports: ${docsWithStoryImports})`);
console.log(`story imports in docs: ${totalStoryImports}`);
console.log(`story refs in docs: ${totalStoryRefs} (valid: ${validStoryRefs})`);
console.log("");

console.log("story inventory:");
for (const storyFile of storyFiles) {
  const absolutePath = path.resolve(storyFile);
  let status = "missing-docs";
  if (referencedStoryFiles.has(absolutePath)) {
    status = "referenced";
  } else if (importedStoryFiles.has(absolutePath)) {
    status = "import-only";
  }
  console.log(`  [${status}] ${relative(storyFile)}`);
}
console.log("");

console.log(`docs issues:`);
console.log(`  missing imports: ${missingImports.length}`);
console.log(`  missing story files: ${missingStoryFiles.length}`);
console.log(`  missing story exports: ${missingStoryExports.length}`);
console.log(`  unused story imports: ${unusedStoryImports.length}`);
console.log(`  unreferenced story files: ${unreferencedStoryFiles.length}`);

if (missingStoryFiles.length > 0) {
  console.log("");
  console.log("missing story files:");
  for (const issue of missingStoryFiles) {
    console.log(`  - ${relative(issue.docFile)}: ${issue.alias} -> ${issue.source}`);
  }
}

if (missingImports.length > 0) {
  console.log("");
  console.log("missing imports:");
  for (const issue of missingImports) {
    console.log(`  - ${relative(issue.docFile)}: ${issue.alias}.${issue.exportName}`);
  }
}

if (missingStoryExports.length > 0) {
  console.log("");
  console.log("missing story exports:");
  for (const issue of missingStoryExports) {
    console.log(`  - ${relative(issue.docFile)}: ${issue.alias}.${issue.exportName} -> ${relative(issue.storyFile)}`);
  }
}

if (unusedStoryImports.length > 0) {
  console.log("");
  console.log("unused story imports:");
  for (const issue of unusedStoryImports) {
    console.log(`  - ${relative(issue.docFile)}: ${issue.alias} -> ${issue.source}`);
  }
}

if (unimportedStoryFiles.length > 0) {
  console.log("");
  console.log("stories not imported by docs:");
  for (const storyFile of unimportedStoryFiles) {
    console.log(`  - ${relative(storyFile)}`);
  }
}

if (strict && gatingIssueCount > 0) {
  console.error("");
  console.error(`${LOG_PREFIX} error: strict mode failed with ${gatingIssueCount} gating issue(s).`);
  process.exit(1);
}

if (gatingIssueCount > 0) {
  console.log("");
  console.log(`${LOG_PREFIX} warning: found ${gatingIssueCount} gating issue(s).`);
} else {
  console.log("");
  console.log(`${LOG_PREFIX} ok: no gating issues found.`);
}
