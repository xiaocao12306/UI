import { componentTokens } from "./components";
import { globalTokens } from "./global";
import { themePacks } from "./themes";
import type { FlatTokenMap, ThemeName, TokenValue } from "./types";

const PREFIX = "--aurora";

export function tokenToCssVar(tokenName: string): string {
  return `${PREFIX}-${tokenName.replace(/\./g, "-")}`;
}

function valueToCss(value: TokenValue): string {
  return typeof value === "number" ? String(value) : value;
}

export function toCssVariables(tokens: FlatTokenMap): Record<string, string> {
  return Object.fromEntries(
    Object.entries(tokens).map(([tokenName, tokenValue]) => [tokenToCssVar(tokenName), valueToCss(tokenValue)])
  );
}

export function createThemeVariables(themeName: ThemeName): Record<string, string> {
  return {
    ...toCssVariables(globalTokens),
    ...toCssVariables(themePacks[themeName]),
    ...toCssVariables(componentTokens)
  };
}

export function createThemeStyleSheet(themeName: ThemeName, selector = ":root"): string {
  const variables = createThemeVariables(themeName);
  const lines = Object.entries(variables).map(([key, value]) => `  ${key}: ${value};`);
  return `${selector} {\n${lines.join("\n")}\n}`;
}
