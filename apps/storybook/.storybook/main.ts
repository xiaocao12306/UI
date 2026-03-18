import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const configDir = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@chromatic-com/storybook"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(existingConfig) {
    const alias = {
      "@aurora-ui/react": resolve(configDir, "../../../packages/react/src/index.tsx"),
      "@aurora-ui/primitives": resolve(configDir, "../../../packages/primitives/src/index.tsx"),
      "@aurora-ui/tokens": resolve(configDir, "../../../packages/tokens/src/index.ts")
    };

    return {
      ...existingConfig,
      resolve: {
        ...(existingConfig.resolve ?? {}),
        alias: {
          ...(existingConfig.resolve?.alias ?? {}),
          ...alias
        }
      },
      build: {
        ...(existingConfig.build ?? {}),
        chunkSizeWarningLimit: 2500
      }
    };
  }
};
export default config;
