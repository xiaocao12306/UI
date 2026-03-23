import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders content", () => {
    render(<Badge>Stable</Badge>);
    expect(screen.getByText("Stable")).toBeInTheDocument();
  });

  it("applies success tone tokens with contrast-safe text", () => {
    render(<Badge tone="success">Healthy</Badge>);
    const badge = screen.getByText("Healthy");
    const style = badge.getAttribute("style") ?? "";

    expect(style).toContain("var(--aurora-feedback-success-bg)");
    expect(style).toContain("var(--aurora-feedback-success-border)");
    expect(style).toContain("var(--aurora-text-primary)");
  });

  it("allows style overrides", () => {
    render(
      <Badge style={{ letterSpacing: "0.08em" }}>
        AI
      </Badge>
    );

    expect(screen.getByText("AI")).toHaveStyle({ letterSpacing: "0.08em" });
  });

  it("normalizes runtime tone tokens and falls back invalid values to default tone", () => {
    const { rerender } = render(<Badge tone={" SUCCESS " as unknown as "success"}>Runtime success</Badge>);
    const runtimeSuccessBadge = screen.getByText("Runtime success");
    const successStyle = runtimeSuccessBadge.getAttribute("style") ?? "";
    expect(successStyle).toContain("var(--aurora-feedback-success-bg)");
    expect(successStyle).toContain("var(--aurora-feedback-success-border)");

    rerender(<Badge tone={"critical" as unknown as "default"}>Runtime fallback</Badge>);
    const runtimeFallbackBadge = screen.getByText("Runtime fallback");
    const fallbackStyle = runtimeFallbackBadge.getAttribute("style") ?? "";
    expect(fallbackStyle).toContain("var(--aurora-surface-elevated)");
    expect(fallbackStyle).toContain("var(--aurora-border-default)");
  });
});
