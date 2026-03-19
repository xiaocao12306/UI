import type { TestRunnerConfig } from "@storybook/test-runner";
import { checkA11y, configureAxe, injectAxe } from "axe-playwright";

const colorContrastSkipStoryIds = new Set([
  "core-button--variant-matrix",
  "data-table--accessible-name-fallback",
  "data-table--accessible-name-labelled-by-heading",
  "data-table--accessible-name-without-caption",
  "data-table--localized-sort-labels",
  "data-table--release-checklist",
  "data-table--single-row-sort-disabled",
  "data-table--sort-telemetry",
  "data-table--with-row-action"
]);

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
