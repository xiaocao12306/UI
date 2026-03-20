import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GlobalStyles } from "./GlobalStyles";

describe("GlobalStyles", () => {
  it("provides reduced-motion fallbacks for animated and transitioned surfaces", () => {
    const { container } = render(<GlobalStyles />);
    const styleText = container.textContent ?? "";

    expect(styleText).toContain("@media (prefers-reduced-motion: reduce)");
    expect(styleText).toContain('[data-aurora-reduced-motion~="animate"]');
    expect(styleText).toContain('[data-aurora-reduced-motion~="transition"]');
    expect(styleText).toContain('[data-aurora-reduced-motion~="transform-reset"]');
  });
});
