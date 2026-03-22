import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { focusAdjacentTabbable } from "./focusTabbable";

describe("focusTabbable", () => {
  it("focuses the next tabbable element while skipping disabled/hidden/inert/excluded nodes", () => {
    render(
      <div>
        <button type="button">Previous</button>
        <div data-testid="excluded">
          <button type="button">Excluded</button>
        </div>
        <button type="button">Current</button>
        <button type="button" disabled>
          Disabled
        </button>
        <button type="button" style={{ display: "none" }}>
          Hidden
        </button>
        <div inert={true}>
          <button type="button">Inert</button>
        </div>
        <button type="button">Next</button>
      </div>
    );

    const current = screen.getByRole("button", { name: "Current" });
    const next = screen.getByRole("button", { name: "Next" });
    const excluded = screen.getByTestId("excluded");
    current.focus();

    const moved = focusAdjacentTabbable(document, current, 1, excluded);

    expect(moved).toBe(true);
    expect(next).toHaveFocus();
  });

  it("focuses the previous tabbable element for reverse traversal", () => {
    render(
      <div>
        <button type="button">Previous</button>
        <button type="button">Current</button>
      </div>
    );

    const current = screen.getByRole("button", { name: "Current" });
    const previous = screen.getByRole("button", { name: "Previous" });
    current.focus();

    const moved = focusAdjacentTabbable(document, current, -1);

    expect(moved).toBe(true);
    expect(previous).toHaveFocus();
  });

  it("returns false when no adjacent tabbable candidate exists", () => {
    render(
      <div>
        <button type="button">Current</button>
      </div>
    );

    const current = screen.getByRole("button", { name: "Current" });
    current.focus();

    expect(focusAdjacentTabbable(document, current, 1)).toBe(false);
    expect(focusAdjacentTabbable(document, current, -1)).toBe(false);
    expect(current).toHaveFocus();
  });
});
