import type { TestRunnerConfig } from "@storybook/test-runner";
import { checkA11y, configureAxe, injectAxe } from "axe-playwright";

const colorContrastSkipStoryIds = new Set([
  "core-badge--tone-matrix",
  "core-badge--ai-interaction-status",
  "core-button--variant-matrix",
  "core-tag--ai-context-markers",
  "data-table--release-checklist",
  "data-table--with-row-action",
  "data-table--single-row-sort-disabled",
  "data-table--accessible-name-without-caption",
  "data-table--accessible-name-fallback",
  "data-table--accessible-name-labelled-by-heading",
  "data-table--sort-telemetry",
  "data-table--localized-sort-labels",
  "feedback-alert--default",
  "feedback-alert--tone-matrix",
  "feedback-alert--dismissible",
  "form-checkbox--controlled",
  "form-datepicker--invalid-with-helper",
  "form-formfield--with-input-control",
  "form-input--state-matrix",
  "form-select--invalid-state",
  "form-switch--controlled",
  "form-textarea--invalid-with-helper"
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
