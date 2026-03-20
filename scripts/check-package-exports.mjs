#!/usr/bin/env node

import { readdir, readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

async function main() {
  const packagesDir = resolve(process.cwd(), "packages");
  const packageDirs = await readdir(packagesDir, { withFileTypes: true });
  const failures = [];
  let checkedCount = 0;

  for (const entry of packageDirs) {
    if (!entry.isDirectory()) {
      continue;
    }

    const packageRoot = resolve(packagesDir, entry.name);
    const packageJsonPath = resolve(packageRoot, "package.json");
    const packageJson = await readJsonIfExists(packageJsonPath);
    if (!packageJson) {
      continue;
    }

    if (packageJson.private === true) {
      continue;
    }

    checkedCount += 1;
    const packageName = typeof packageJson.name === "string" ? packageJson.name : entry.name;
    const packageFailures = validatePackageExports({
      packageJson,
      packageName
    });

    const artifactChecks = await validateArtifactsExist(packageRoot, packageJson, packageName);
    packageFailures.push(...artifactChecks);

    if (packageFailures.length > 0) {
      failures.push(...packageFailures);
      continue;
    }

    console.log(`[release-exports-check] ok: ${packageName}`);
  }

  if (failures.length > 0) {
    console.error("[release-exports-check] error: export metadata validation failed.");
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exit(1);
  }

  console.log(`[release-exports-check] ok: validated ${checkedCount} publishable package(s).`);
}

main().catch((error) => {
  console.error(
    `[release-exports-check] error: ${error instanceof Error ? error.message : String(error)}`
  );
  process.exit(1);
});

function validatePackageExports({ packageJson, packageName }) {
  const failures = [];

  if (!Array.isArray(packageJson.files) || !packageJson.files.includes("dist")) {
    failures.push(`${packageName}: package.json files must include "dist".`);
  }

  const main = readNonEmptyString(packageJson.main);
  const module = readNonEmptyString(packageJson.module);
  const types = readNonEmptyString(packageJson.types);
  if (!main || !module || !types) {
    failures.push(`${packageName}: package.json main/module/types must all be non-empty strings.`);
    return failures;
  }

  const rootExport =
    packageJson.exports && typeof packageJson.exports === "object"
      ? packageJson.exports["."]
      : null;
  if (!rootExport || typeof rootExport !== "object") {
    failures.push(`${packageName}: package.json exports["."] must be an object.`);
    return failures;
  }

  const exportImport = readNonEmptyString(rootExport.import);
  const exportRequire = readNonEmptyString(rootExport.require);
  const exportTypes = readNonEmptyString(rootExport.types);
  if (!exportImport || !exportRequire || !exportTypes) {
    failures.push(`${packageName}: exports["."] must define import/require/types.`);
    return failures;
  }

  const expectedImport = ensureDotSlash(module);
  const expectedRequire = ensureDotSlash(main);
  const expectedTypes = ensureDotSlash(types);
  if (exportImport !== expectedImport) {
    failures.push(
      `${packageName}: exports["."].import (${exportImport}) must match module (${expectedImport}).`
    );
  }
  if (exportRequire !== expectedRequire) {
    failures.push(
      `${packageName}: exports["."].require (${exportRequire}) must match main (${expectedRequire}).`
    );
  }
  if (exportTypes !== expectedTypes) {
    failures.push(
      `${packageName}: exports["."].types (${exportTypes}) must match types (${expectedTypes}).`
    );
  }

  return failures;
}

async function validateArtifactsExist(packageRoot, packageJson, packageName) {
  const failures = [];
  const artifactPaths = [
    readNonEmptyString(packageJson.main),
    readNonEmptyString(packageJson.module),
    readNonEmptyString(packageJson.types)
  ];

  for (const relativePath of artifactPaths) {
    if (!relativePath) {
      continue;
    }
    const absolutePath = resolve(packageRoot, relativePath);
    const exists = await pathExists(absolutePath);
    if (!exists) {
      failures.push(`${packageName}: missing build artifact ${relativePath}.`);
    }
  }

  return failures;
}

function ensureDotSlash(pathValue) {
  return pathValue.startsWith("./") ? pathValue : `./${pathValue}`;
}

function readNonEmptyString(value) {
  if (typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

async function readJsonIfExists(path) {
  try {
    const content = await readFile(path, "utf8");
    return JSON.parse(content);
  } catch (error) {
    if (isFileNotFoundError(error)) {
      return null;
    }
    throw error;
  }
}

async function pathExists(path) {
  try {
    await stat(path);
    return true;
  } catch (error) {
    if (isFileNotFoundError(error)) {
      return false;
    }
    throw error;
  }
}

function isFileNotFoundError(error) {
  return Boolean(error && typeof error === "object" && "code" in error && error.code === "ENOENT");
}
