import type { Preview } from "@storybook/react";
import { AuroraProvider, GlobalStyles } from "@aurora-ui/react";
import type { ThemeName } from "@aurora-ui/tokens";

const themes: ThemeName[] = ["core-light", "core-dark", "glass", "neo-brutal"];

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Aurora theme pack",
      defaultValue: "core-light",
      toolbar: {
        icon: "paintbrush",
        items: themes,
        showName: true
      }
    }
  },
  decorators: [
    (Story, context) => (
      <AuroraProvider theme={context.globals.theme as ThemeName}>
        <GlobalStyles />
        <div
          style={{
            minHeight: "100vh",
            padding: 24,
            background: "var(--aurora-surface-default)",
            color: "var(--aurora-text-primary)",
            fontFamily: "var(--aurora-font-family-base)"
          }}
        >
          <Story />
        </div>
      </AuroraProvider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
