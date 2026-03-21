import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Popover } from "./Popover";
import { dispatchNonPrimaryPointerDown } from "./test-utils/pointer";

describe("Popover", () => {
  it("opens and closes through trigger, escape key, and outside pointer", () => {
    const onCloseReason = vi.fn();

    render(
      <Popover triggerLabel="Open popover" onCloseReason={onCloseReason}>
        <p>Popover content</p>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Open popover" });
    expect(trigger).not.toHaveAttribute("aria-controls");
    expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown");
    expect(screen.queryByText("Popover content")).toBeNull();

    fireEvent.click(trigger);
    const dialog = screen.getByRole("dialog", { name: "Popover content" });
    expect(trigger).toHaveAttribute("aria-controls", dialog.id);
    expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    expect(screen.getByText("Popover content")).toBeInTheDocument();
    expect(trigger).not.toHaveFocus();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(trigger).not.toHaveAttribute("aria-controls");
    expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown");
    expect(screen.queryByText("Popover content")).toBeNull();
    expect(trigger).toHaveFocus();
    expect(onCloseReason).toHaveBeenNthCalledWith(1, "escape-key");

    fireEvent.click(trigger);
    expect(screen.getByText("Popover content")).toBeInTheDocument();
    expect(trigger).not.toHaveFocus();

    fireEvent.pointerDown(document.body);
    expect(screen.queryByText("Popover content")).toBeNull();
    expect(trigger).not.toHaveFocus();
    expect(onCloseReason).toHaveBeenNthCalledWith(2, "outside-pointer");
  });

  it("supports controlled mode", () => {
    const onOpenChange = vi.fn();

    render(
      <Popover triggerLabel="Open popover" open onOpenChange={onOpenChange}>
        <p>Controlled content</p>
      </Popover>
    );

    expect(screen.getByText("Controlled content")).toBeInTheDocument();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("opens via ArrowDown and focuses the first focusable content", () => {
    render(
      <Popover triggerLabel="Keyboard open">
        <button type="button">Primary action</button>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Keyboard open" });
    expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown");
    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: "ArrowDown" });

    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    expect(screen.getByRole("button", { name: "Primary action" })).toHaveFocus();
  });

  it("exposes Escape shortcut hints on popover content only when closeOnEscape is enabled", () => {
    const { rerender } = render(
      <Popover triggerLabel="Escape hint popover">
        <p>Hint content</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "Escape hint popover" }));
    expect(screen.getByRole("dialog", { name: "Popover content" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Escape"
    );

    rerender(
      <Popover triggerLabel="Escape hint popover" open closeOnEscape={false}>
        <p>Hint content</p>
      </Popover>
    );
    expect(screen.getByRole("dialog", { name: "Popover content" })).not.toHaveAttribute(
      "aria-keyshortcuts"
    );
  });

  it("ignores modified ArrowDown combinations for trigger keyboard open", () => {
    render(
      <Popover triggerLabel="Arrow guard popover">
        <button type="button">Primary action</button>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Arrow guard popover" });
    fireEvent.focus(trigger);

    fireEvent.keyDown(trigger, { key: "ArrowDown", ctrlKey: true });
    fireEvent.keyDown(trigger, { key: "ArrowDown", altKey: true });
    fireEvent.keyDown(trigger, { key: "ArrowDown", metaKey: true });
    expect(screen.queryByRole("dialog", { name: "Popover content" })).toBeNull();

    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  });

  it("focuses popover container when no focusable content exists", () => {
    render(
      <Popover triggerLabel="No focusables">
        <p>Read-only details</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "No focusables" }));
    const dialog = screen.getByRole("dialog", { name: "Popover content" });
    expect(dialog).toHaveFocus();
  });

  it("ignores blank contentLabel and falls back to default popover dialog name", () => {
    render(
      <Popover triggerLabel="Blank content label" contentLabel="   ">
        <p>Read-only details</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "Blank content label" }));
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  });

  it("supports icon trigger naming via triggerAriaLabel", () => {
    render(
      <Popover triggerLabel="⋯" triggerAriaLabel="More info">
        <p>Popover content</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "More info" }));
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  });

  it("ignores blank triggerAriaLabel and keeps visible trigger text as accessible name", () => {
    render(
      <Popover triggerLabel="Info" triggerAriaLabel="   ">
        <p>Popover content</p>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Info" });
    expect(trigger).not.toHaveAttribute("aria-label");
    fireEvent.click(trigger);
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  });

  it("supports configurable dismiss policies and event hooks", () => {
    const onEscapeKeyDown = vi.fn();
    const onPointerDownOutside = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Popover
        triggerLabel="Policy"
        closeOnEscape={false}
        closeOnOutsidePointer={false}
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        onCloseReason={onCloseReason}
      >
        <p>Policy content</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "Policy" }));
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    fireEvent.pointerDown(document.body);
    expect(onPointerDownOutside).toHaveBeenCalledTimes(1);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  });

  it("keeps popover open when dismiss hooks call preventDefault", () => {
    const onEscapeKeyDown = vi.fn((event: KeyboardEvent) => {
      event.preventDefault();
    });
    const onPointerDownOutside = vi.fn((event: PointerEvent) => {
      event.preventDefault();
    });
    const onCloseReason = vi.fn();

    render(
      <Popover
        triggerLabel="Guarded"
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        onCloseReason={onCloseReason}
      >
        <p>Guarded content</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "Guarded" }));
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    fireEvent.pointerDown(document.body);
    expect(onPointerDownOutside).toHaveBeenCalledTimes(1);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  });

  it("ignores modified Escape combinations for dismiss and hook callbacks", () => {
    const onEscapeKeyDown = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Popover
        triggerLabel="Shortcut Guard"
        onEscapeKeyDown={onEscapeKeyDown}
        onCloseReason={onCloseReason}
      >
        <p>Guarded content</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "Shortcut Guard" }));
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(document, { key: "Escape", altKey: true });
    fireEvent.keyDown(document, { key: "Escape", metaKey: true });

    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  });

  it("ignores repeated Escape keydown for dismiss and hook callbacks", () => {
    const onEscapeKeyDown = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Popover
        triggerLabel="Repeat Guard"
        onEscapeKeyDown={onEscapeKeyDown}
        onCloseReason={onCloseReason}
      >
        <p>Repeat guarded content</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "Repeat Guard" }));
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape", repeat: true });
    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenCalledWith("escape-key");
    expect(screen.queryByRole("dialog", { name: "Popover content" })).toBeNull();
  });

  it("skips escape callback and dismiss when Escape is preempted upstream", () => {
    const onEscapeKeyDown = vi.fn();
    const onCloseReason = vi.fn();
    const preemptEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", preemptEscape, true);
    render(
      <Popover
        triggerLabel="Preempted"
        onEscapeKeyDown={onEscapeKeyDown}
        onCloseReason={onCloseReason}
      >
        <p>Preempted content</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "Preempted" }));
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    document.removeEventListener("keydown", preemptEscape, true);
  });

  it("isolates Escape and outside-pointer dismiss handling per owner document", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument;
    if (!iframeDocument) {
      throw new Error("expected iframe document to exist");
    }

    const iframeContainer = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(iframeContainer);

    let unmountMain: (() => void) | undefined;
    let unmountIframe: (() => void) | undefined;
    try {
      ({ unmount: unmountMain } = render(
        <div>
          <Popover triggerLabel="Main popover">
            <p>Main popover content</p>
          </Popover>
          <button type="button">Main outside target</button>
        </div>
      ));
      ({ unmount: unmountIframe } = render(
        <div>
          <Popover triggerLabel="Iframe popover">
            <p>Iframe popover content</p>
          </Popover>
          <button type="button">Iframe outside target</button>
        </div>,
        { container: iframeContainer, baseElement: iframeDocument.body }
      ));

      fireEvent.click(screen.getByRole("button", { name: "Main popover" }));
      fireEvent.click(within(iframeDocument.body).getByRole("button", { name: "Iframe popover" }));
      expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
      expect(within(iframeDocument.body).getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

      fireEvent.keyDown(document, { key: "Escape" });
      expect(screen.queryByRole("dialog", { name: "Popover content" })).toBeNull();
      expect(within(iframeDocument.body).getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

      fireEvent.pointerDown(within(iframeDocument.body).getByRole("button", { name: "Iframe outside target" }));
      expect(within(iframeDocument.body).queryByRole("dialog", { name: "Popover content" })).toBeNull();
    } finally {
      unmountIframe?.();
      unmountMain?.();
      iframe.remove();
    }
  });

  it("dismisses nested popovers from top layer first", () => {
    const outerCloseReason = vi.fn();
    const innerCloseReason = vi.fn();

    render(
      <Popover
        triggerLabel="Outer popover"
        contentLabel="Outer popover content"
        onCloseReason={outerCloseReason}
      >
        <div style={{ display: "grid", gap: 8 }}>
          <p>Outer body</p>
          <Popover
            triggerLabel="Inner popover"
            contentLabel="Inner popover content"
            onCloseReason={innerCloseReason}
          >
            <p>Inner body</p>
          </Popover>
        </div>
      </Popover>
    );

    const outerTrigger = screen.getByRole("button", { name: "Outer popover" });
    fireEvent.click(outerTrigger);
    expect(screen.getByRole("dialog", { name: "Outer popover content" })).toBeInTheDocument();

    const innerTrigger = screen.getByRole("button", { name: "Inner popover" });
    fireEvent.click(innerTrigger);
    expect(screen.getByRole("dialog", { name: "Inner popover content" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Inner popover content" })).toBeNull();
    expect(screen.getByRole("dialog", { name: "Outer popover content" })).toBeInTheDocument();
    expect(innerCloseReason).toHaveBeenCalledWith("escape-key");
    expect(outerCloseReason).not.toHaveBeenCalled();
    expect(innerTrigger).toHaveFocus();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Outer popover content" })).toBeNull();
    expect(outerCloseReason).toHaveBeenCalledWith("escape-key");
    expect(outerTrigger).toHaveFocus();
  });

  it("emits trigger-click close reason when trigger toggles open popover", () => {
    const onCloseReason = vi.fn();
    const onPointerDownOutside = vi.fn();

    render(
      <Popover
        triggerLabel="Trigger close reason"
        onCloseReason={onCloseReason}
        onPointerDownOutside={onPointerDownOutside}
      >
        <p>Popover content</p>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Trigger close reason" });
    fireEvent.click(trigger);
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    fireEvent.pointerDown(trigger);
    fireEvent.click(trigger);

    expect(onPointerDownOutside).not.toHaveBeenCalled();
    expect(onCloseReason).toHaveBeenCalledWith("trigger-click");
    expect(screen.queryByRole("dialog", { name: "Popover content" })).toBeNull();
  });

  it("emits close callbacks in deterministic order for trigger and Escape dismiss", () => {
    const events: string[] = [];
    render(
      <Popover
        triggerLabel="Order"
        onCloseReason={(reason) => {
          events.push(`reason:${reason}`);
        }}
        onOpenChange={(nextOpen) => {
          events.push(`open:${String(nextOpen)}`);
        }}
      >
        <p>Popover content</p>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Order" });
    fireEvent.click(trigger);
    events.length = 0;

    fireEvent.click(trigger);
    expect(events).toEqual(["reason:trigger-click", "open:false"]);

    fireEvent.click(trigger);
    events.length = 0;

    fireEvent.keyDown(document, { key: "Escape" });
    expect(events).toEqual(["reason:escape-key", "open:false"]);
  });

  it("ignores non-primary outside pointer interactions", () => {
    const onCloseReason = vi.fn();

    render(
      <Popover triggerLabel="Ignore right click" onCloseReason={onCloseReason}>
        <p>Popover content</p>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Ignore right click" });
    fireEvent.click(trigger);
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    dispatchNonPrimaryPointerDown(document.body);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  });
});
