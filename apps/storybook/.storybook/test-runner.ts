import type { TestRunnerConfig } from "@storybook/test-runner";
import { checkA11y, configureAxe, injectAxe } from "axe-playwright";

const colorContrastSkipStoryIds = new Set([]);

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    await configureAxe(page);

    const axeRules = colorContrastSkipStoryIds.has(context.id)
      ? {
          "color-contrast": {
            enabled: false
          }
        }
      : undefined;

    await checkA11y(page, "#storybook-root", {
      verbose: false,
      detailedReport: true,
      detailedReportOptions: {
        html: true
      },
      axeOptions: {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]
        },
        rules: axeRules
      }
    });
  }
};

export default config;
