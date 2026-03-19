import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const auroraManagerTheme = create({
  base: "light",
  brandTitle: "Aurora UI",
  brandUrl: "https://github.com/xiaocao12306/UI",
  colorPrimary: "#1d4ed8",
  colorSecondary: "#0891b2",
  appBg: "#f8fafc",
  appContentBg: "#ffffff",
  appBorderColor: "#e2e8f0",
  appBorderRadius: 10,
  barBg: "#ffffff",
  barTextColor: "#334155",
  barSelectedColor: "#1d4ed8",
  textColor: "#0f172a",
  textInverseColor: "#ffffff",
  inputBg: "#ffffff",
  inputBorder: "#cbd5e1",
  inputTextColor: "#0f172a",
  inputBorderRadius: 8,
  fontBase: "\"IBM Plex Sans\", \"Segoe UI\", sans-serif",
  fontCode: "\"IBM Plex Mono\", \"SFMono-Regular\", monospace"
});

addons.setConfig({
  theme: auroraManagerTheme,
  sidebar: {
    showRoots: true
  }
});
