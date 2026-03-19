import { render } from "@testing-library/react";
import { createThemeVariables } from "@aurora-ui/tokens";
import { describe, expect, it } from "vitest";
import { AuroraProvider } from "./AuroraProvider";

describe("AuroraProvider", () => {
  it("marks provider root with theme metadata", () => {
    const { container } = render(
      <AuroraProvider theme="core-dark">
        <div>content</div>
      </AuroraProvider>
    );

    const provider = container.querySelector("[data-aurora-provider]");
    expect(provider).not.toBeNull();
    expect(provider).toHaveAttribute("data-aurora-theme", "core-dark");
  });

  it("updates css variables and theme metadata when theme changes", () => {
    const { container, rerender } = render(
      <AuroraProvider theme="core-light">
        <div>content</div>
      </AuroraProvider>
    );

    const provider = container.querySelector("[data-aurora-provider]") as HTMLDivElement;
    const lightVars = createThemeVariables("core-light");
    expect(provider.style.getPropertyValue("--aurora-surface-default")).toBe(
      lightVars["--aurora-surface-default"]
    );
    expect(provider).toHaveAttribute("data-aurora-theme", "core-light");

    rerender(
      <AuroraProvider theme="neo-brutal">
        <div>content</div>
      </AuroraProvider>
    );

    const brutalVars = createThemeVariables("neo-brutal");
    expect(provider.style.getPropertyValue("--aurora-surface-default")).toBe(
      brutalVars["--aurora-surface-default"]
    );
    expect(provider).toHaveAttribute("data-aurora-theme", "neo-brutal");
  });
});
