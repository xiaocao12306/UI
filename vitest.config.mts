import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [resolve(rootDir, "vitest.setup.ts")],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      include: ["packages/**/src/**/*.{ts,tsx}"]
    }
  }
});
