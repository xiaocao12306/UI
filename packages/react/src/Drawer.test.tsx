import * as React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Dialog } from "./Dialog";
import { Drawer } from "./Drawer";
import { Dropdown } from "./Dropdown";
import { resetBodyScrollLockForTests } from "./bodyScrollLock";
import { dispatchNonPrimaryPointerDown } from "./test-utils/pointer";

afterEach(() => {
  document.body.style.overflow = "";
  resetBodyScrollLockForTests();
});

describe("Drawer", () => {
  it("calls onOpenChange(false) from close controls", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Drawer open onOpenChange={onOpenChange} onCloseReason={onCloseReason} title="Filters">
        <p>Drawer content</p>
      </Drawer>
    );

    fireEvent.click(screen.getByRole("button", { name: "Close drawer" }));
    expect(onCloseReason).toHaveBeenNthCalledWith(1, "close-button");
    expect(onOpenChange).toHaveBeenCalledWith(false);

    onOpenChange.mockClear();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onCloseReason).toHaveBeenNthCalledWith(2, "escape-key");
    expect(onOpenChange).toHaveBeenCalledWith(false);

    onOpenChange.mockClear();
    fireEvent.pointerDown(document.body);
    expect(onCloseReason).toHaveBeenNthCalledWith(3, "outside-pointer");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("marks close-button transitions for reduced-motion fallback", () => {
    render(
      <Drawer open onOpenChange={() => {}} title="Filters">
        <p>Drawer content</p>
      </Drawer>
    );

    expect(screen.getByRole("button", { name: "Close drawer" })).toHaveAttribute(
      "data-aurora-reduced-motion",
      "transition"
    );
  });

  it("exposes close-button keyboard shortcut hints for Enter/Space activation", () => {
    render(
      <Drawer open onOpenChange={() => {}} title="Shortcut hints drawer">
        <p>Drawer content</p>
      </Drawer>
    );

    expect(screen.getByRole("button", { name: "Close drawer" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Enter Space"
    );
  });

  it("exposes Escape keyboard shortcut hints only when closeOnEscape is enabled", () => {
    const { rerender } = render(
      <Drawer open onOpenChange={() => {}} title="Escape hints drawer">
        <p>Drawer content</p>
      </Drawer>
    );

    expect(screen.getByRole("dialog", { name: "Escape hints drawer" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Escape"
    );

    rerender(
      <Drawer open onOpenChange={() => {}} title="Escape hints drawer" closeOnEscape={false}>
        <p>Drawer content</p>
      </Drawer>
    );

    expect(screen.getByRole("dialog", { name: "Escape hints drawer" })).not.toHaveAttribute(
      "aria-keyshortcuts"
    );
  });

  it("ignores blank closeLabel and falls back to default close button name", () => {
    render(
      <Drawer open onOpenChange={() => {}} title="Fallback close label drawer" closeLabel="   ">
        <p>Drawer content</p>
      </Drawer>
    );

    expect(screen.getByRole("button", { name: "Close drawer" })).toBeInTheDocument();
  });

  it("emits close callbacks in deterministic order for close-button and outside-pointer dismiss", () => {
    const events: string[] = [];
    render(
      <Drawer
        open
        title="Close order drawer"
        onOpenChange={(nextOpen) => {
          events.push(`open:${String(nextOpen)}`);
        }}
        onCloseReason={(reason) => {
          events.push(`reason:${reason}`);
        }}
      >
        <p>Drawer content</p>
      </Drawer>
    );

    fireEvent.click(screen.getByRole("button", { name: "Close drawer" }));
    expect(events).toEqual(["reason:close-button", "open:false"]);

    events.length = 0;
    fireEvent.pointerDown(document.body);
    expect(events).toEqual(["reason:outside-pointer", "open:false"]);
  });

  it("supports non-dismissible escape and outside-pointer branches", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Drawer
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        title="Release notes"
        closeOnEscape={false}
        closeOnOutsidePointer={false}
      >
        <p>Drawer content</p>
      </Drawer>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    fireEvent.pointerDown(document.body);

    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("prevents default on handled Escape and outside-pointer dismiss events", () => {
    const keyboardDefaultPrevented: boolean[] = [];
    const pointerDefaultPrevented: boolean[] = [];
    const onDocumentKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        keyboardDefaultPrevented.push(event.defaultPrevented);
      }
    };
    const onDocumentPointerdown = (event: PointerEvent) => {
      pointerDefaultPrevented.push(event.defaultPrevented);
    };

    try {
      render(
        <Drawer open onOpenChange={() => {}} title="Dismiss event preemption drawer">
          <p>Drawer content</p>
        </Drawer>
      );
      document.addEventListener("keydown", onDocumentKeydown);
      document.addEventListener("pointerdown", onDocumentPointerdown);

      fireEvent.keyDown(document, { key: "Escape" });
      fireEvent.pointerDown(document.body);

      expect(keyboardDefaultPrevented).toEqual([true]);
      expect(pointerDefaultPrevented).toEqual([true]);
    } finally {
      document.removeEventListener("keydown", onDocumentKeydown);
      document.removeEventListener("pointerdown", onDocumentPointerdown);
    }
  });

  it("ignores repeated Escape keydown before first non-repeat dismiss", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Drawer open onOpenChange={onOpenChange} onCloseReason={onCloseReason} title="Drawer repeat guard">
        <p>Drawer content</p>
      </Drawer>
    );

    fireEvent.keyDown(document, { key: "Escape", repeat: true });
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Drawer repeat guard" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onCloseReason).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenCalledWith("escape-key");
    expect(onOpenChange).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("ignores modified Escape combinations for dismiss and hook callbacks", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();
    const onEscapeKeyDown = vi.fn();

    render(
      <Drawer
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        onEscapeKeyDown={onEscapeKeyDown}
        title="Shortcut guard drawer"
      >
        <p>Drawer content</p>
      </Drawer>
    );

    fireEvent.keyDown(document, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(document, { key: "Escape", altKey: true });
    fireEvent.keyDown(document, { key: "Escape", metaKey: true });

    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Shortcut guard drawer" })).toBeInTheDocument();
  });

  it("ignores non-primary outside pointer interactions", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Drawer
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        title="Ignore right click"
      >
        <p>Drawer content</p>
      </Drawer>
    );

    dispatchNonPrimaryPointerDown(document.body);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Ignore right click" })).toBeInTheDocument();
  });

  it("skips escape callback and dismiss when Escape is preempted upstream", () => {
    const onOpenChange = vi.fn();
    const onEscapeKeyDown = vi.fn();
    const onCloseReason = vi.fn();
    const preemptEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", preemptEscape, true);

    render(
      <Drawer
        open
        onOpenChange={onOpenChange}
        title="Preempted escape drawer"
        onEscapeKeyDown={onEscapeKeyDown}
        onCloseReason={onCloseReason}
      >
        <p>Drawer content</p>
      </Drawer>
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    document.removeEventListener("keydown", preemptEscape, true);
  });

  it("does not emit close reason when dismissal handlers prevent default", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();
    const onEscapeKeyDown = vi.fn((event: KeyboardEvent) => event.preventDefault());
    const onPointerDownOutside = vi.fn((event: PointerEvent) => event.preventDefault());

    render(
      <Drawer
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        title="Guarded drawer"
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
      >
        <p>Drawer content</p>
      </Drawer>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    fireEvent.pointerDown(document.body);

    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onPointerDownOutside).toHaveBeenCalledTimes(1);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("ignores Escape dismiss while IME composition is active", () => {
    const onOpenChange = vi.fn();

    render(
      <Drawer open onOpenChange={onOpenChange} title="IME safe drawer">
        <p>Drawer content</p>
      </Drawer>
    );

    fireEvent.keyDown(document, { key: "Escape", isComposing: true });
    fireEvent.keyDown(document, { key: "Escape", keyCode: 229 });
    expect(onOpenChange).not.toHaveBeenCalled();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("wires title and description semantics", () => {
    render(
      <Drawer
        open
        onOpenChange={() => {}}
        title="Keyboard shortcuts"
        description="Use Ctrl/Cmd + K to open command palette."
      >
        <p>Drawer content</p>
      </Drawer>
    );

    const dialog = screen.getByRole("dialog", { name: "Keyboard shortcuts" });
    const description = screen.getByText("Use Ctrl/Cmd + K to open command palette.");

    expect(dialog).toHaveAttribute("aria-describedby", description.getAttribute("id"));
  });

  it("dismisses nested overlays from top layer first on Escape", () => {
    function NestedOverlayFixture() {
      const [open, setOpen] = React.useState(true);

      return (
        <Drawer open={open} onOpenChange={setOpen} title="Nested overlay drawer">
          <Dropdown
            label="Drawer actions"
            items={[
              { key: "duplicate", label: "Duplicate" },
              { key: "archive", label: "Archive" }
            ]}
          />
        </Drawer>
      );
    }

    render(<NestedOverlayFixture />);

    fireEvent.click(screen.getByRole("button", { name: "Drawer actions" }));
    expect(screen.getByRole("menu", { name: "Drawer actions" })).toBeInTheDocument();
    expect(screen.getByRole("dialog", { name: "Nested overlay drawer" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("menu", { name: "Drawer actions" })).toBeNull();
    expect(screen.getByRole("dialog", { name: "Nested overlay drawer" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Nested overlay drawer" })).toBeNull();
  });

  it("restores focus to trigger by default after close", () => {
    function FocusRestoreFixture() {
      const [open, setOpen] = React.useState(false);

      return (
        <div>
          <button type="button" onClick={() => setOpen(true)}>
            Open drawer
          </button>
          <Drawer open={open} onOpenChange={setOpen} title="Focus restore drawer">
            <p>Drawer content</p>
          </Drawer>
        </div>
      );
    }

    render(<FocusRestoreFixture />);

    const trigger = screen.getByRole("button", { name: "Open drawer" });
    trigger.focus();
    expect(trigger).toHaveFocus();
    fireEvent.click(trigger);
    expect(screen.getByRole("dialog", { name: "Focus restore drawer" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Close drawer" }));
    expect(trigger).toHaveFocus();
  });

  it("supports disabling focus restore after close", () => {
    function NoFocusRestoreFixture() {
      const [open, setOpen] = React.useState(false);

      return (
        <div>
          <button type="button" onClick={() => setOpen(true)}>
            Open no-restore drawer
          </button>
          <Drawer
            open={open}
            onOpenChange={setOpen}
            title="No focus restore drawer"
            restoreFocus={false}
          >
            <p>Drawer content</p>
          </Drawer>
        </div>
      );
    }

    render(<NoFocusRestoreFixture />);

    const trigger = screen.getByRole("button", { name: "Open no-restore drawer" });
    trigger.focus();
    expect(trigger).toHaveFocus();
    fireEvent.click(trigger);
    expect(screen.getByRole("dialog", { name: "No focus restore drawer" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Close drawer" }));
    expect(trigger).not.toHaveFocus();
  });

  it("shows close button focus ring only for focus-visible state", () => {
    render(
      <Drawer open onOpenChange={() => {}} title="Focusable drawer">
        <p>Drawer content</p>
      </Drawer>
    );

    const closeButton = screen.getByRole("button", { name: "Close drawer" });
    const nativeMatches = closeButton.matches.bind(closeButton);
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation((selector) => {
      if (selector === ":focus-visible") {
        return true;
      }

      return nativeMatches(selector);
    });

    fireEvent.focus(closeButton);
    expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.blur(closeButton);
    expect(closeButton.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");
    matchesSpy.mockRestore();
  });

  it("preserves close-button focus ring on non-primary or ctrl-primary pointer down", () => {
    render(
      <Drawer open onOpenChange={() => {}} title="Secondary pointer drawer">
        <p>Drawer content</p>
      </Drawer>
    );

    const closeButton = screen.getByRole("button", { name: "Close drawer" });
    const nativeMatches = closeButton.matches.bind(closeButton);
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation((selector) => {
      if (selector === ":focus-visible") {
        return true;
      }

      return nativeMatches(selector);
    });

    fireEvent.focus(closeButton);
    expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.mouseDown(closeButton, { button: 2 });
    expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.mouseDown(closeButton, { button: 0, ctrlKey: true });
    expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    matchesSpy.mockRestore();
  });

  it("tracks ownerDocument keyboard focus intent when focus-visible matching is unavailable", () => {
    render(
      <div>
        <button type="button">Before drawer close</button>
        <Drawer open onOpenChange={() => {}} title="Document focus intent drawer" closeLabel="Document intent close">
          <p>Drawer content</p>
        </Drawer>
      </div>
    );

    const beforeButton = screen.getByRole("button", { name: "Before drawer close" });
    const closeButton = screen.getByRole("button", { name: "Document intent close" });
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.focus(closeButton);
    expect(closeButton.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");

    fireEvent.blur(closeButton);
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(closeButton);
    expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.blur(closeButton);
    fireEvent.mouseDown(document.body, { button: 2 });
    fireEvent.focus(closeButton);
    expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.blur(closeButton);
    fireEvent.mouseDown(document.body, { button: 0, ctrlKey: true });
    fireEvent.focus(closeButton);
    expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.blur(closeButton);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(closeButton);
    expect(closeButton.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");

    matchesSpy.mockRestore();
  });

  it("ignores modified ownerDocument keydown for close-button focus-visible fallback intent", () => {
    render(
      <div>
        <button type="button">Before drawer close</button>
        <Drawer open onOpenChange={() => {}} title="Modified-key intent drawer" closeLabel="Modified intent close">
          <p>Drawer content</p>
        </Drawer>
      </div>
    );

    const beforeButton = screen.getByRole("button", { name: "Before drawer close" });
    const closeButton = screen.getByRole("button", { name: "Modified intent close" });
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.blur(closeButton);
    fireEvent.keyDown(document, { key: "Tab", ctrlKey: true });
    fireEvent.focus(closeButton);
    expect(closeButton.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");

    fireEvent.blur(closeButton);
    fireEvent.keyDown(document, { key: "Tab", metaKey: true });
    fireEvent.focus(closeButton);
    expect(closeButton.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");

    fireEvent.blur(closeButton);
    fireEvent.keyDown(document, { key: "Tab", altKey: true });
    fireEvent.focus(closeButton);
    expect(closeButton.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");

    matchesSpy.mockRestore();
  });

  it("tracks ownerDocument keyboard focus intent for iframe-hosted renders", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument;
    const iframeWindow = iframe.contentWindow;
    if (!iframeDocument || !iframeWindow) {
      throw new Error("expected iframe document/window to exist");
    }

    const iframeContainer = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(iframeContainer);

    const { getByRole, unmount } = render(
      <div>
        <button type="button">Before iframe drawer close</button>
        <Drawer open onOpenChange={() => {}} title="Iframe drawer" closeLabel="Iframe drawer close">
          <p>Drawer content</p>
        </Drawer>
      </div>,
      {
        container: iframeContainer,
        baseElement: iframeDocument.body
      }
    );
    const beforeButton = getByRole("button", { name: "Before iframe drawer close" });
    const closeButton = getByRole("button", { name: "Iframe drawer close" });
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    try {
      fireEvent.mouseDown(beforeButton, { button: 0 });
      fireEvent.focus(closeButton);
      expect(closeButton.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");

      fireEvent.blur(closeButton);
      iframeDocument.dispatchEvent(
        new iframeWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      fireEvent.focus(closeButton);
      expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

      fireEvent.blur(closeButton);
      iframeDocument.dispatchEvent(
        new iframeWindow.MouseEvent("mousedown", { bubbles: true, button: 0, ctrlKey: true })
      );
      fireEvent.focus(closeButton);
      expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

      fireEvent.blur(closeButton);
      iframeDocument.dispatchEvent(
        new iframeWindow.MouseEvent("mousedown", { bubbles: true, button: 0 })
      );
      fireEvent.focus(closeButton);
      expect(closeButton.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");
    } finally {
      unmount();
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });

  it("applies pressed transform only for plain primary-button close-button pointer paths", () => {
    render(
      <Drawer open onOpenChange={() => {}} title="Pressable drawer">
        <p>Drawer content</p>
      </Drawer>
    );

    const closeButton = screen.getByRole("button", { name: "Close drawer" });
    fireEvent.mouseDown(closeButton, { button: 2 });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.mouseDown(closeButton, { button: 0, ctrlKey: true });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.mouseDown(closeButton, { button: 0 });
    expect(closeButton.getAttribute("style")).toContain("translateY(1px)");

    fireEvent.mouseUp(closeButton, { button: 2 });
    expect(closeButton.getAttribute("style")).toContain("translateY(1px)");

    fireEvent.mouseUp(closeButton, { button: 0 });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");
  });

  it("applies close-button pressed transform for unmodified keyboard activation keys and ignores modified chords", () => {
    render(
      <Drawer open onOpenChange={() => {}} title="Keyboard press drawer">
        <p>Drawer content</p>
      </Drawer>
    );

    const closeButton = screen.getByRole("button", { name: "Close drawer" });

    fireEvent.keyDown(closeButton, { key: "Enter" });
    expect(closeButton.getAttribute("style")).toContain("translateY(1px)");
    fireEvent.keyUp(closeButton, { key: "Enter" });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.keyDown(closeButton, { key: "Enter", ctrlKey: true });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");
    fireEvent.keyUp(closeButton, { key: "Enter", ctrlKey: true });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.keyDown(closeButton, { key: "Spacebar" });
    expect(closeButton.getAttribute("style")).toContain("translateY(1px)");
    fireEvent.keyUp(closeButton, { key: "Spacebar" });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.keyDown(closeButton, { key: "Space" });
    expect(closeButton.getAttribute("style")).toContain("translateY(1px)");
    fireEvent.keyUp(closeButton, { key: "Space" });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.keyDown(closeButton, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.keyDown(closeButton, { key: "Enter", keyCode: 229, which: 229 });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");
  });

  it("keeps Tab/Shift+Tab focus cycling inside drawer", async () => {
    const user = userEvent.setup();

    render(
      <div>
        <button type="button">Outside before</button>
        <Drawer open onOpenChange={() => {}} title="Focus trap drawer">
          <button type="button">Primary action</button>
          <button type="button">Secondary action</button>
        </Drawer>
        <button type="button">Outside after</button>
      </div>
    );

    const closeButton = screen.getByRole("button", { name: "Close drawer" });
    const primaryAction = screen.getByRole("button", { name: "Primary action" });
    const secondaryAction = screen.getByRole("button", { name: "Secondary action" });

    closeButton.focus();
    expect(closeButton).toHaveFocus();

    await user.tab();
    expect(primaryAction).toHaveFocus();

    await user.tab();
    expect(secondaryAction).toHaveFocus();

    await user.tab();
    expect(closeButton).toHaveFocus();

    await user.tab({ shift: true });
    expect(secondaryAction).toHaveFocus();
  });

  it("locks body scroll while open and restores when closed", () => {
    const { rerender } = render(
      <Drawer open onOpenChange={() => {}} title="Drawer scroll lock">
        <p>Drawer content</p>
      </Drawer>
    );

    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <Drawer open={false} onOpenChange={() => {}} title="Drawer scroll lock">
        <p>Drawer content</p>
      </Drawer>
    );

    expect(document.body.style.overflow).toBe("");
  });

  it("keeps body scroll locked while another modal surface remains open", () => {
    const { rerender } = render(
      <>
        <Drawer open onOpenChange={() => {}} title="Drawer lock">
          <p>Drawer content</p>
        </Drawer>
        <Dialog open onOpenChange={() => {}} title="Dialog lock">
          <p>Dialog content</p>
        </Dialog>
      </>
    );

    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <>
        <Drawer open={false} onOpenChange={() => {}} title="Drawer lock">
          <p>Drawer content</p>
        </Drawer>
        <Dialog open onOpenChange={() => {}} title="Dialog lock">
          <p>Dialog content</p>
        </Dialog>
      </>
    );

    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <>
        <Drawer open={false} onOpenChange={() => {}} title="Drawer lock">
          <p>Drawer content</p>
        </Drawer>
        <Dialog open={false} onOpenChange={() => {}} title="Dialog lock">
          <p>Dialog content</p>
        </Dialog>
      </>
    );

    expect(document.body.style.overflow).toBe("");
  });

  it("renders the drawer portal in ownerDocument body when mounted in iframe container", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument;
    if (!iframeDocument) {
      throw new Error("expected iframe document to exist");
    }

    const iframeContainer = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(iframeContainer);

    let unmount: (() => void) | undefined;
    try {
      ({ unmount } = render(
        <Drawer open onOpenChange={() => {}} title="Iframe drawer">
          <p>Drawer body</p>
        </Drawer>,
        { container: iframeContainer, baseElement: iframeDocument.body }
      ));

      expect(within(iframeDocument.body).getByRole("dialog", { name: "Iframe drawer" })).toBeInTheDocument();
      expect(screen.queryByRole("dialog", { name: "Iframe drawer" })).toBeNull();
    } finally {
      unmount?.();
      iframe.remove();
    }
  });

  it("isolates Escape and outside-pointer dismiss handling per owner document", () => {
    const onMainOpenChange = vi.fn();
    const onIframeOpenChange = vi.fn();
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
        <Drawer open onOpenChange={onMainOpenChange} title="Main document drawer">
          <p>Main body</p>
        </Drawer>
      ));
      ({ unmount: unmountIframe } = render(
        <Drawer open onOpenChange={onIframeOpenChange} title="Iframe document drawer">
          <p>Iframe body</p>
        </Drawer>,
        { container: iframeContainer, baseElement: iframeDocument.body }
      ));

      fireEvent.keyDown(document, { key: "Escape" });
      expect(onMainOpenChange).toHaveBeenCalledWith(false);
      expect(onIframeOpenChange).not.toHaveBeenCalled();

      fireEvent.pointerDown(iframeDocument.body);
      expect(onIframeOpenChange).toHaveBeenCalledWith(false);
    } finally {
      unmountIframe?.();
      unmountMain?.();
      iframe.remove();
    }
  });

  it("locks and restores iframe ownerDocument scroll without mutating main document body", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument;
    if (!iframeDocument) {
      throw new Error("expected iframe document to exist");
    }

    const iframeContainer = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(iframeContainer);

    let unmount: (() => void) | undefined;
    try {
      ({ unmount } = render(
        <Drawer open onOpenChange={() => {}} title="Iframe scroll lock drawer">
          <p>Drawer body</p>
        </Drawer>,
        { container: iframeContainer, baseElement: iframeDocument.body }
      ));

      expect(iframeDocument.body.style.overflow).toBe("hidden");
      expect(document.body.style.overflow).toBe("");
    } finally {
      unmount?.();
      expect(iframeDocument.body.style.overflow).toBe("");
      iframe.remove();
    }
  });
});
