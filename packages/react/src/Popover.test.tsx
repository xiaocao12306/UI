import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Popover } from "./Popover";
import { dispatchCtrlPrimaryPointerDown, dispatchNonPrimaryPointerDown } from "./test-utils/pointer";

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

  it("exposes Tab/Escape shortcut hints on popover content when closeOnEscape is enabled", () => {
    const { rerender } = render(
      <Popover triggerLabel="Escape hint popover">
        <p>Hint content</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "Escape hint popover" }));
    expect(screen.getByRole("dialog", { name: "Popover content" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Tab Escape"
    );

    rerender(
      <Popover triggerLabel="Escape hint popover" open closeOnEscape={false}>
        <p>Hint content</p>
      </Popover>
    );
    expect(screen.getByRole("dialog", { name: "Popover content" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Tab"
    );
  });

  it("dismisses on boundary Tab/Shift+Tab and keeps in-popover Tab navigation intact", () => {
    const onCloseReason = vi.fn();

    render(
      <div>
        <button type="button">Popover previous control</button>
        <Popover triggerLabel="Popover tab flow" onCloseReason={onCloseReason}>
          <div style={{ display: "grid", gap: 8 }}>
            <input aria-label="Popover first field" />
            <button type="button">Popover final action</button>
          </div>
        </Popover>
        <button type="button">Popover next control</button>
      </div>
    );

    const trigger = screen.getByRole("button", { name: "Popover tab flow" });
    const previousControl = screen.getByRole("button", { name: "Popover previous control" });
    const nextControl = screen.getByRole("button", { name: "Popover next control" });

    fireEvent.click(trigger);
    const firstField = screen.getByRole("textbox", { name: "Popover first field" });
    const finalAction = screen.getByRole("button", { name: "Popover final action" });
    expect(firstField).toHaveFocus();

    finalAction.focus();
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    expect(finalAction).toHaveFocus();
    expect(onCloseReason).not.toHaveBeenCalled();

    fireEvent.keyDown(finalAction, { key: "Tab" });
    expect(screen.queryByRole("dialog", { name: "Popover content" })).toBeNull();
    expect(nextControl).toHaveFocus();
    expect(onCloseReason).toHaveBeenNthCalledWith(1, "tab-key");

    fireEvent.click(trigger);
    expect(screen.getByRole("textbox", { name: "Popover first field" })).toHaveFocus();

    fireEvent.keyDown(screen.getByRole("textbox", { name: "Popover first field" }), {
      key: "Tab",
      shiftKey: true
    });
    expect(screen.queryByRole("dialog", { name: "Popover content" })).toBeNull();
    expect(previousControl).toHaveFocus();
    expect(onCloseReason).toHaveBeenNthCalledWith(2, "tab-key");
  });

  it("skips unfocusable adjacent controls when dismissing on Tab boundary", () => {
    render(
      <div>
        <Popover triggerLabel="Popover tab skip">
          <button type="button">Popover boundary action</button>
        </Popover>
        <button type="button" style={{ display: "none" }}>
          Hidden next candidate
        </button>
        <div inert={true}>
          <button type="button">Inert next candidate</button>
        </div>
        <button type="button">Visible next candidate</button>
      </div>
    );

    const trigger = screen.getByRole("button", { name: "Popover tab skip" });
    const visibleNextCandidate = screen.getByRole("button", { name: "Visible next candidate" });

    fireEvent.click(trigger);
    const boundaryAction = screen.getByRole("button", { name: "Popover boundary action" });
    expect(boundaryAction).toHaveFocus();

    fireEvent.keyDown(boundaryAction, { key: "Tab" });
    expect(screen.queryByRole("dialog", { name: "Popover content" })).toBeNull();
    expect(visibleNextCandidate).toHaveFocus();
  });

  it("falls back to trigger focus when Tab boundary dismiss has no adjacent controls", () => {
    render(
      <Popover triggerLabel="Popover tab fallback">
        <button type="button">Popover boundary action</button>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Popover tab fallback" });

    fireEvent.click(trigger);
    const boundaryAction = screen.getByRole("button", { name: "Popover boundary action" });
    expect(boundaryAction).toHaveFocus();

    fireEvent.keyDown(boundaryAction, { key: "Tab" });
    expect(screen.queryByRole("dialog", { name: "Popover content" })).toBeNull();
    expect(trigger).toHaveFocus();

    fireEvent.click(trigger);
    expect(screen.getByRole("button", { name: "Popover boundary action" })).toHaveFocus();

    fireEvent.keyDown(screen.getByRole("button", { name: "Popover boundary action" }), {
      key: "Tab",
      shiftKey: true
    });
    expect(screen.queryByRole("dialog", { name: "Popover content" })).toBeNull();
    expect(trigger).toHaveFocus();
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

  it("skips trigger and content keyboard handling when keydown is preempted upstream", () => {
    const onCloseReason = vi.fn();
    const preemptManagedKeys = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "Tab") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", preemptManagedKeys, true);

    try {
      render(
        <Popover triggerLabel="Managed keys popover" onCloseReason={onCloseReason}>
          <button type="button">Popover managed action</button>
        </Popover>
      );

      const trigger = screen.getByRole("button", { name: "Managed keys popover" });
      fireEvent.focus(trigger);

      fireEvent.keyDown(trigger, { key: "ArrowDown" });
      expect(screen.queryByRole("dialog", { name: "Popover content" })).toBeNull();

      fireEvent.click(trigger);
      const dialog = screen.getByRole("dialog", { name: "Popover content" });
      const action = screen.getByRole("button", { name: "Popover managed action" });
      expect(dialog).toBeInTheDocument();
      expect(action).toHaveFocus();

      fireEvent.keyDown(action, { key: "Tab" });
      expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
      expect(onCloseReason).not.toHaveBeenCalled();
    } finally {
      document.removeEventListener("keydown", preemptManagedKeys, true);
    }
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

  it("warns when non-text triggerLabel omits triggerAriaLabel and triggerAriaLabelledBy", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    try {
      render(
        <Popover triggerLabel={<span aria-hidden="true">⋯</span>}>
          <p>Popover content</p>
        </Popover>
      );

      expect(warnSpy).toHaveBeenCalledWith(
        "[Popover] Non-text triggerLabel should provide triggerAriaLabel or triggerAriaLabelledBy."
      );
      expect(screen.getByRole("button", { name: "Open popover" })).toHaveAttribute(
        "aria-label",
        "Open popover"
      );
    } finally {
      warnSpy.mockRestore();
    }
  });

  it("does not warn for non-text triggerLabel when triggerAriaLabel is provided", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    try {
      render(
        <Popover triggerLabel={<span aria-hidden="true">⋯</span>} triggerAriaLabel="More info">
          <p>Popover content</p>
        </Popover>
      );

      expect(warnSpy).not.toHaveBeenCalled();
    } finally {
      warnSpy.mockRestore();
    }
  });

  it("does not warn for non-text triggerLabel when triggerAriaLabelledBy is provided", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    try {
      render(
        <div>
          <h2 id="popover-heading">More info</h2>
          <Popover triggerLabel={<span aria-hidden="true">⋯</span>} triggerAriaLabelledBy="popover-heading">
            <p>Popover content</p>
          </Popover>
        </div>
      );

      expect(warnSpy).not.toHaveBeenCalled();
    } finally {
      warnSpy.mockRestore();
    }
  });

  it("does not warn for non-text triggerLabel when inline aria-label is present", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    try {
      render(
        <Popover
          triggerLabel={
            <span aria-label="More info">
              <span aria-hidden="true">⋯</span>
            </span>
          }
        >
          <p>Popover content</p>
        </Popover>
      );

      expect(screen.getByRole("button", { name: "More info" })).toBeInTheDocument();
      expect(warnSpy).not.toHaveBeenCalled();
    } finally {
      warnSpy.mockRestore();
    }
  });

  it("prioritizes triggerAriaLabelledBy over triggerAriaLabel for icon trigger naming", () => {
    render(
      <div>
        <h2 id="popover-trigger-heading">Popover actions</h2>
        <Popover
          triggerLabel="⋯"
          triggerAriaLabel="Fallback popover actions"
          triggerAriaLabelledBy="popover-trigger-heading"
        >
          <p>Popover content</p>
        </Popover>
      </div>
    );

    const trigger = screen.getByRole("button", { name: "Popover actions" });
    expect(trigger).toHaveAttribute("aria-labelledby", "popover-trigger-heading");
    expect(trigger).not.toHaveAttribute("aria-label");

    fireEvent.click(trigger);
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  });

  it("ignores blank triggerAriaLabelledBy and falls back to triggerAriaLabel", () => {
    render(
      <Popover
        triggerLabel="⋯"
        triggerAriaLabel="Fallback popover actions"
        triggerAriaLabelledBy="   "
      >
        <p>Popover content</p>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Fallback popover actions" });
    expect(trigger).not.toHaveAttribute("aria-labelledby");
    expect(trigger).toHaveAttribute("aria-label", "Fallback popover actions");

    fireEvent.click(trigger);
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

  it("ignores Escape dismiss while IME composition is active", () => {
    const onEscapeKeyDown = vi.fn();
    const onOpenChange = vi.fn();

    render(
      <Popover triggerLabel="IME safe popover" onEscapeKeyDown={onEscapeKeyDown} onOpenChange={onOpenChange}>
        <p>IME guard content</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "IME safe popover" }));
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    onEscapeKeyDown.mockClear();
    onOpenChange.mockClear();

    fireEvent.keyDown(document, { key: "Escape", isComposing: true, keyCode: 229, which: 229 });
    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    const legacyEscapeEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true
    });
    Object.defineProperty(legacyEscapeEvent, "keyCode", { value: 229 });
    document.dispatchEvent(legacyEscapeEvent);
    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(false);
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

      const iframeOutsideTarget = within(iframeDocument.body).getByRole("button", {
        name: "Iframe outside target"
      });
      dispatchCtrlPrimaryPointerDown(iframeOutsideTarget);
      expect(within(iframeDocument.body).getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

      fireEvent.pointerDown(iframeOutsideTarget);
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

  it("dismisses nested popovers from top layer first on outside pointer", () => {
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

    fireEvent.click(screen.getByRole("button", { name: "Outer popover" }));
    expect(screen.getByRole("dialog", { name: "Outer popover content" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Inner popover" }));
    expect(screen.getByRole("dialog", { name: "Inner popover content" })).toBeInTheDocument();

    fireEvent.pointerDown(document.body);
    expect(screen.queryByRole("dialog", { name: "Inner popover content" })).toBeNull();
    expect(screen.getByRole("dialog", { name: "Outer popover content" })).toBeInTheDocument();
    expect(innerCloseReason).toHaveBeenCalledWith("outside-pointer");
    expect(outerCloseReason).not.toHaveBeenCalled();

    fireEvent.pointerDown(document.body);
    expect(screen.queryByRole("dialog", { name: "Outer popover content" })).toBeNull();
    expect(outerCloseReason).toHaveBeenCalledWith("outside-pointer");
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
