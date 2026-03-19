import type { TestRunnerConfig } from "@storybook/test-runner";
import { checkA11y, configureAxe, injectAxe } from "axe-playwright";

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page) {
    await configureAxe(page);

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
        rules: {
          "color-contrast": {
            enabled: false
          }
        }
      }
    });
  }
};

export default config;
