import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@aurora-ui/tokens": resolve(rootDir, "packages/tokens/src/index.ts"),
      "@aurora-ui/primitives": resolve(rootDir, "packages/primitives/src/index.tsx"),
      "@aurora-ui/react": resolve(rootDir, "packages/react/src/index.tsx")
    }
  },
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
