import { describe, expect, it } from "vitest";
import { createThemeStyleSheet, createThemeVariables, tokenToCssVar } from "./css";

describe("token css utilities", () => {
  it("maps token name to css variable", () => {
    expect(tokenToCssVar("button.solid.bg")).toBe("--aurora-button-solid-bg");
  });

  it("creates merged theme variables", () => {
    const vars = createThemeVariables("core-light");
    expect(vars["--aurora-surface-default"]).toBe("#ffffff");
    expect(vars["--aurora-button-solid-bg"]).toBe("var(--aurora-accent-default)");
  });

  it("creates stylesheet output", () => {
    const cssText = createThemeStyleSheet("core-dark", ".demo");
    expect(cssText.startsWith(".demo {")).toBe(true);
    expect(cssText.includes("--aurora-text-primary: #f8fafc;")).toBe(true);
  });
});
