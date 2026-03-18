import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DismissableLayer } from "./DismissableLayer";

function NestedDismissableLayers() {
  const [outerOpen, setOuterOpen] = React.useState(true);
  const [innerOpen, setInnerOpen] = React.useState(false);

  return (
    <div>
      {outerOpen ? (
        <DismissableLayer onDismiss={() => setOuterOpen(false)}>
          <div data-testid="outer-shell">
            <button type="button" onClick={() => setInnerOpen(true)}>
              Open inner layer
            </button>
            {innerOpen ? (
              <DismissableLayer onDismiss={() => setInnerOpen(false)}>
                <div data-testid="inner-shell">Inner layer</div>
              </DismissableLayer>
            ) : null}
          </div>
        </DismissableLayer>
      ) : null}
      <button type="button">Outside target</button>
    </div>
  );
}

describe("DismissableLayer", () => {
  it("dismisses only the topmost layer on Escape", () => {
    render(<NestedDismissableLayers />);

    fireEvent.click(screen.getByRole("button", { name: "Open inner layer" }));
    expect(screen.getByTestId("outer-shell")).toBeInTheDocument();
    expect(screen.getByTestId("inner-shell")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.getByTestId("outer-shell")).toBeInTheDocument();
    expect(screen.queryByTestId("inner-shell")).toBeNull();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByTestId("outer-shell")).toBeNull();
  });

  it("dismisses only the topmost layer on outside pointer interaction", () => {
    render(<NestedDismissableLayers />);

    fireEvent.click(screen.getByRole("button", { name: "Open inner layer" }));
    const outerShell = screen.getByTestId("outer-shell");
    expect(screen.getByTestId("inner-shell")).toBeInTheDocument();

    fireEvent.pointerDown(outerShell);
    expect(screen.getByTestId("outer-shell")).toBeInTheDocument();
    expect(screen.queryByTestId("inner-shell")).toBeNull();

    fireEvent.pointerDown(screen.getByRole("button", { name: "Outside target" }));
    expect(screen.queryByTestId("outer-shell")).toBeNull();
  });

  it("ignores Escape dismiss while IME composition is active", () => {
    const onDismiss = vi.fn();
    const onEscapeKeyDown = vi.fn();

    render(
      <DismissableLayer onDismiss={onDismiss} onEscapeKeyDown={onEscapeKeyDown}>
        <div>Layer body</div>
      </DismissableLayer>
    );

    fireEvent.keyDown(document, { key: "Escape", isComposing: true });
    fireEvent.keyDown(document, { key: "Escape", keyCode: 229 });

    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onDismiss).not.toHaveBeenCalled();
  });
});
