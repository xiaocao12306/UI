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
});
