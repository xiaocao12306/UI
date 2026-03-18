#!/usr/bin/env node

import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDir, "..");
const staticRoot = path.resolve(workspaceRoot, "apps/storybook/storybook-static");
const port = Number(process.env.PORT ?? "6106");
const host = process.env.HOST ?? "127.0.0.1";

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2"
};

function resolveContentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  return MIME_TYPES[extension] ?? "application/octet-stream";
}

function resolveFilePath(requestUrl) {
  const normalizedPath = decodeURIComponent(requestUrl.pathname);
  const relativePath = normalizedPath === "/" ? "/index.html" : normalizedPath;
  return path.resolve(staticRoot, `.${relativePath}`);
}

function isPathInsideStaticRoot(candidatePath) {
  const relative = path.relative(staticRoot, candidatePath);
  return relative && !relative.startsWith("..") && !path.isAbsolute(relative);
}

async function handleRequest(request, response) {
  const requestUrl = new URL(request.url ?? "/", `http://${host}:${port}`);
  const filePath = resolveFilePath(requestUrl);

  if (!isPathInsideStaticRoot(filePath) && filePath !== path.resolve(staticRoot, "index.html")) {
    response.statusCode = 403;
    response.end("Forbidden");
    return;
  }

  try {
    const fileStats = await stat(filePath);
    const resolvedFile = fileStats.isDirectory() ? path.resolve(filePath, "index.html") : filePath;
    response.statusCode = 200;
    response.setHeader("Content-Type", resolveContentType(resolvedFile));
    response.setHeader("Cache-Control", "no-store");
    createReadStream(resolvedFile).pipe(response);
  } catch {
    response.statusCode = 404;
    response.end("Not found");
  }
}

createServer((request, response) => {
  void handleRequest(request, response);
})
  .listen(port, host, () => {
    console.log(`[storybook-static-server] serving ${staticRoot} at http://${host}:${port}`);
  })
  .on("error", (error) => {
    console.error(
      `[storybook-static-server] failed to start at http://${host}:${port}:`,
      error instanceof Error ? error.message : error
    );
    process.exit(1);
  });
