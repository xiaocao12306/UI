import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("is decorative by default", () => {
    const { container } = render(<Skeleton data-testid="skeleton" />);
    const skeleton = screen.getByTestId("skeleton");

    expect(skeleton).toHaveAttribute("aria-hidden", "true");
    expect(skeleton).not.toHaveAttribute("role");
    expect(skeleton).toHaveAttribute("data-aurora-reduced-motion", "animate");
    expect(skeleton).toHaveStyle({ animation: "aurora-skeleton-shimmer 1.2s ease-in-out infinite" });
    expect(container.querySelector("style")).toBeNull();
  });

  it("supports status narration when ariaLabel is set", () => {
    render(<Skeleton ariaLabel="Loading profile card" />);
    const skeleton = screen.getByRole("status", { name: "Loading profile card" });

    expect(skeleton).toHaveAttribute("aria-live", "polite");
    expect(skeleton).toHaveAttribute("aria-busy", "true");
  });

  it("prefers ariaLabelledBy over ariaLabel", () => {
    render(
      <div>
        <h2 id="skeleton-heading">Loading profile card</h2>
        <Skeleton ariaLabel="Fallback loading label" ariaLabelledBy="skeleton-heading" />
      </div>
    );

    const skeleton = screen.getByRole("status", { name: "Loading profile card" });
    expect(skeleton).toHaveAttribute("aria-labelledby", "skeleton-heading");
    expect(skeleton).not.toHaveAttribute("aria-label");
  });

  it("ignores blank ariaLabelledBy and preserves ariaLabel narration", () => {
    render(<Skeleton ariaLabel="Loading profile card" ariaLabelledBy="   " />);
    const skeleton = screen.getByRole("status", { name: "Loading profile card" });

    expect(skeleton).toHaveAttribute("aria-label", "Loading profile card");
    expect(skeleton).not.toHaveAttribute("aria-labelledby");
  });

  it("ignores blank ariaLabel and keeps decorative semantics", () => {
    render(<Skeleton data-testid="skeleton-blank-label" ariaLabel="   " />);
    const skeleton = screen.getByTestId("skeleton-blank-label");

    expect(skeleton).toHaveAttribute("aria-hidden", "true");
    expect(skeleton).not.toHaveAttribute("role");
    expect(skeleton).not.toHaveAttribute("aria-label");
  });

  it("supports circle variant and non-animated branch", () => {
    render(<Skeleton data-testid="avatar" variant="circle" width={40} height={40} animated={false} />);
    const skeleton = screen.getByTestId("avatar");

    expect(skeleton).toHaveStyle({ borderRadius: "9999px", width: "40px", height: "40px" });
    expect(skeleton).not.toHaveStyle({ animation: "aurora-skeleton-shimmer 1.2s ease-in-out infinite" });
  });
});
