import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@aurora-ui/react": resolve(rootDir, "../../packages/react/src/index.tsx"),
      "@aurora-ui/primitives": resolve(rootDir, "../../packages/primitives/src/index.tsx"),
      "@aurora-ui/tokens": resolve(rootDir, "../../packages/tokens/src/index.ts")
    }
  },
  server: {
    allowedHosts: true
  },
  preview: {
    allowedHosts: true
  }
});
