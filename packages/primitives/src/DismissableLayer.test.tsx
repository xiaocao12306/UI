import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
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
  afterEach(() => {
    document.removeEventListener("keydown", preemptEscape, true);
    document.removeEventListener("pointerdown", preemptPointerDown, true);
  });

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

  it("isolates Escape handling across different ownerDocument stacks", () => {
    const onMainDismiss = vi.fn();
    const onIframeDismiss = vi.fn();
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument;
    if (!iframeDocument) {
      throw new Error("iframe contentDocument is unavailable");
    }
    const iframeContainer = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(iframeContainer);

    try {
      render(
        <DismissableLayer onDismiss={onMainDismiss}>
          <div>Main document layer</div>
        </DismissableLayer>
      );
      render(
        <DismissableLayer onDismiss={onIframeDismiss}>
          <div>Iframe document layer</div>
        </DismissableLayer>,
        { container: iframeContainer, baseElement: iframeDocument.body }
      );

      fireEvent.keyDown(document, { key: "Escape" });
      expect(onMainDismiss).toHaveBeenCalledTimes(1);
      expect(onIframeDismiss).not.toHaveBeenCalled();

      fireEvent.keyDown(iframeDocument, { key: "Escape" });
      expect(onIframeDismiss).toHaveBeenCalledTimes(1);
    } finally {
      iframe.remove();
    }
  });

  it("isolates outside-pointer handling across different ownerDocument stacks", () => {
    const onMainDismiss = vi.fn();
    const onIframeDismiss = vi.fn();
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument;
    if (!iframeDocument) {
      throw new Error("iframe contentDocument is unavailable");
    }
    const iframeContainer = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(iframeContainer);

    try {
      render(
        <div>
          <DismissableLayer onDismiss={onMainDismiss}>
            <div>Main document layer</div>
          </DismissableLayer>
          <button type="button">Main outside target</button>
        </div>
      );
      render(
        <div>
          <DismissableLayer onDismiss={onIframeDismiss}>
            <div>Iframe document layer</div>
          </DismissableLayer>
          <button type="button">Iframe outside target</button>
        </div>,
        { container: iframeContainer, baseElement: iframeDocument.body }
      );

      fireEvent.pointerDown(screen.getByRole("button", { name: "Main outside target" }));
      expect(onMainDismiss).toHaveBeenCalledTimes(1);
      expect(onIframeDismiss).not.toHaveBeenCalled();

      const iframeOutsideTarget = iframeContainer.querySelector("button");
      if (!iframeOutsideTarget) {
        throw new Error("expected iframe outside target");
      }
      fireEvent.pointerDown(iframeOutsideTarget);
      expect(onIframeDismiss).toHaveBeenCalledTimes(1);
    } finally {
      iframe.remove();
    }
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

  it("skips escape callback and dismiss when event is preempted upstream", () => {
    const onDismiss = vi.fn();
    const onEscapeKeyDown = vi.fn();

    document.addEventListener("keydown", preemptEscape, true);
    render(
      <DismissableLayer onDismiss={onDismiss} onEscapeKeyDown={onEscapeKeyDown}>
        <div>Layer body</div>
      </DismissableLayer>
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("skips outside-pointer callback and dismiss when pointerdown is preempted upstream", () => {
    const onDismiss = vi.fn();
    const onPointerDownOutside = vi.fn();

    document.addEventListener("pointerdown", preemptPointerDown, true);
    render(
      <div>
        <DismissableLayer onDismiss={onDismiss} onPointerDownOutside={onPointerDownOutside}>
          <div>Layer body</div>
        </DismissableLayer>
        <button type="button">Outside target</button>
      </div>
    );

    fireEvent.pointerDown(screen.getByRole("button", { name: "Outside target" }));

    expect(onPointerDownOutside).not.toHaveBeenCalled();
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("ignores non-primary pointer buttons for outside dismiss", () => {
    const onDismiss = vi.fn();
    const onPointerDownOutside = vi.fn();

    render(
      <div>
        <DismissableLayer onDismiss={onDismiss} onPointerDownOutside={onPointerDownOutside}>
          <div>Layer body</div>
        </DismissableLayer>
        <button type="button">Outside target</button>
      </div>
    );

    const event = new Event("pointerdown", { bubbles: true, cancelable: true });
    Object.defineProperty(event, "button", { configurable: true, value: 2 });
    Object.defineProperty(event, "buttons", { configurable: true, value: 2 });
    Object.defineProperty(event, "pointerType", { configurable: true, value: "mouse" });
    screen.getByRole("button", { name: "Outside target" }).dispatchEvent(event);

    expect(onPointerDownOutside).not.toHaveBeenCalled();
    expect(onDismiss).not.toHaveBeenCalled();
  });
});

function preemptEscape(event: KeyboardEvent) {
  if (event.key === "Escape") {
    event.preventDefault();
  }
}

function preemptPointerDown(event: PointerEvent) {
  event.preventDefault();
}
