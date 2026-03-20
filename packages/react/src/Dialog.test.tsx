import * as React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Dialog } from "./Dialog";
import { Dropdown } from "./Dropdown";
import { Drawer } from "./Drawer";
import { resetBodyScrollLockForTests } from "./bodyScrollLock";
import { dispatchNonPrimaryPointerDown } from "./test-utils/pointer";

afterEach(() => {
  document.body.style.overflow = "";
  resetBodyScrollLockForTests();
});

describe("Dialog", () => {
  it("calls onOpenChange(false) when close button clicked", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Dialog open onOpenChange={onOpenChange} onCloseReason={onCloseReason} title="Settings">
        <p>Body</p>
      </Dialog>
    );

    fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(onCloseReason).toHaveBeenCalledWith("close-button");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("ignores blank closeLabel and falls back to default close button name", () => {
    render(
      <Dialog open onOpenChange={() => {}} title="Fallback close label" closeLabel="   ">
        <p>Body</p>
      </Dialog>
    );

    expect(screen.getByRole("button", { name: "Close dialog" })).toBeInTheDocument();
  });

  it("emits close callbacks in deterministic order for close-button and Escape dismiss", () => {
    const events: string[] = [];
    render(
      <Dialog
        open
        onOpenChange={(nextOpen) => {
          events.push(`open:${String(nextOpen)}`);
        }}
        onCloseReason={(reason) => {
          events.push(`reason:${reason}`);
        }}
        title="Close order"
      >
        <p>Body</p>
      </Dialog>
    );

    fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(events).toEqual(["reason:close-button", "open:false"]);

    events.length = 0;
    fireEvent.keyDown(document, { key: "Escape" });
    expect(events).toEqual(["reason:escape-key", "open:false"]);
  });

  it("connects dialog with title via aria-labelledby", () => {
    render(
      <Dialog open onOpenChange={() => {}} title="Accessibility Title">
        <p>Body</p>
      </Dialog>
    );

    const dialog = screen.getByRole("dialog");
    const heading = screen.getByText("Accessibility Title");
    expect(dialog).toHaveAttribute("aria-labelledby", heading.getAttribute("id"));
  });

  it("connects dialog description via aria-describedby", () => {
    render(
      <Dialog
        open
        onOpenChange={() => {}}
        title="Accessibility Title"
        description="Dialog description"
      >
        <p>Body</p>
      </Dialog>
    );

    const dialog = screen.getByRole("dialog");
    const description = screen.getByText("Dialog description");
    expect(dialog).toHaveAttribute("aria-describedby", description.getAttribute("id"));
  });

  it("constrains dialog height and enables scrollable content region", () => {
    render(
      <Dialog open onOpenChange={() => {}} title="Long content dialog">
        <div style={{ height: 1200 }}>Long content</div>
      </Dialog>
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveStyle({ maxHeight: "calc(100vh - 32px)" });
    const content = dialog.querySelector('[data-slot="dialog-content"]');
    expect(content).not.toBeNull();
    expect(content).toHaveStyle({ overflow: "auto" });
  });

  it("shows close-button focus ring only for focus-visible state", () => {
    render(
      <Dialog open onOpenChange={() => {}} title="Focus ring dialog">
        <p>Body</p>
      </Dialog>
    );

    const closeButton = screen.getByRole("button", { name: "Close dialog" });
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

  it("keeps close-button focus-visible state on non-primary mouse down", () => {
    render(
      <Dialog open onOpenChange={() => {}} title="Focus intent dialog">
        <p>Body</p>
      </Dialog>
    );

    const closeButton = screen.getByRole("button", { name: "Close dialog" });
    const nativeMatches = closeButton.matches.bind(closeButton);
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation((selector) => {
      if (selector === ":focus-visible") {
        return true;
      }

      return nativeMatches(selector);
    });

    fireEvent.focus(closeButton);
    expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.mouseDown(closeButton, { button: 1 });
    expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.mouseDown(closeButton, { button: 0 });
    expect(closeButton.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");
    matchesSpy.mockRestore();
  });

  it("keeps Tab/Shift+Tab focus cycling inside dialog", async () => {
    const user = userEvent.setup();

    render(
      <div>
        <button type="button">Outside before</button>
        <Dialog open onOpenChange={() => {}} title="Focus trap dialog">
          <button type="button">Primary action</button>
          <button type="button">Secondary action</button>
        </Dialog>
        <button type="button">Outside after</button>
      </div>
    );

    const closeButton = screen.getByRole("button", { name: "Close dialog" });
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

  it("does not dismiss on escape when closeOnEscape is false", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();
    render(
      <Dialog
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        title="Pinned"
        closeOnEscape={false}
      >
        <p>Body</p>
      </Dialog>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("emits close reasons for Escape and outside-pointer dismiss", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Dialog
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        title="Dismiss reasons"
      >
        <p>Body</p>
      </Dialog>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onCloseReason).toHaveBeenNthCalledWith(1, "escape-key");
    expect(onOpenChange).toHaveBeenNthCalledWith(1, false);

    fireEvent.pointerDown(document.body);
    expect(onCloseReason).toHaveBeenNthCalledWith(2, "outside-pointer");
    expect(onOpenChange).toHaveBeenNthCalledWith(2, false);
  });

  it("does not emit close reason when dialog escape handler prevents dismiss", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Dialog
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        onEscapeKeyDown={(event) => {
          event.preventDefault();
        }}
        title="Guarded dismiss"
      >
        <p>Body</p>
      </Dialog>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("does not emit close reason when dismissal handlers prevent default", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();
    const onEscapeKeyDown = vi.fn((event: KeyboardEvent) => event.preventDefault());
    const onPointerDownOutside = vi.fn((event: PointerEvent) => event.preventDefault());

    render(
      <Dialog
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        title="Guarded dismiss"
      >
        <p>Body</p>
      </Dialog>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    fireEvent.pointerDown(document.body);

    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onPointerDownOutside).toHaveBeenCalledTimes(1);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
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
      <Dialog
        open
        onOpenChange={onOpenChange}
        title="Preempted escape"
        onEscapeKeyDown={onEscapeKeyDown}
        onCloseReason={onCloseReason}
      >
        <p>Body</p>
      </Dialog>
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    document.removeEventListener("keydown", preemptEscape, true);
  });

  it("ignores Escape dismiss while IME composition is active", () => {
    const onOpenChange = vi.fn();
    render(
      <Dialog open onOpenChange={onOpenChange} title="IME safe dialog">
        <p>Body</p>
      </Dialog>
    );

    fireEvent.keyDown(document, { key: "Escape", isComposing: true });
    fireEvent.keyDown(document, { key: "Escape", keyCode: 229 });
    expect(onOpenChange).not.toHaveBeenCalled();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("does not dismiss on outside pointer when closeOnOutsidePointer is false", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();
    render(
      <Dialog
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        title="Pinned"
        closeOnOutsidePointer={false}
      >
        <p>Body</p>
      </Dialog>
    );

    fireEvent.pointerDown(document.body);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("ignores non-primary outside pointer interactions", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();
    render(
      <Dialog
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        title="Ignore right click"
      >
        <p>Body</p>
      </Dialog>
    );

    dispatchNonPrimaryPointerDown(document.body);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Ignore right click" })).toBeInTheDocument();
  });

  it("locks body scroll while open and restores when closed", () => {
    const { rerender } = render(
      <Dialog open onOpenChange={() => {}} title="Scroll lock">
        <p>Body</p>
      </Dialog>
    );

    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <Dialog open={false} onOpenChange={() => {}} title="Scroll lock">
        <p>Body</p>
      </Dialog>
    );
    expect(document.body.style.overflow).toBe("");
  });

  it("keeps body scroll locked while another modal surface remains open", () => {
    const { rerender } = render(
      <>
        <Dialog open onOpenChange={() => {}} title="Dialog lock">
          <p>Dialog content</p>
        </Dialog>
        <Drawer open onOpenChange={() => {}} title="Drawer lock">
          <p>Drawer content</p>
        </Drawer>
      </>
    );

    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <>
        <Dialog open={false} onOpenChange={() => {}} title="Dialog lock">
          <p>Dialog content</p>
        </Dialog>
        <Drawer open onOpenChange={() => {}} title="Drawer lock">
          <p>Drawer content</p>
        </Drawer>
      </>
    );

    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <>
        <Dialog open={false} onOpenChange={() => {}} title="Dialog lock">
          <p>Dialog content</p>
        </Dialog>
        <Drawer open={false} onOpenChange={() => {}} title="Drawer lock">
          <p>Drawer content</p>
        </Drawer>
      </>
    );

    expect(document.body.style.overflow).toBe("");
  });

  it("renders the dialog portal in ownerDocument body when mounted in iframe container", () => {
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
        <Dialog open onOpenChange={() => {}} title="Iframe dialog">
          <p>Dialog body</p>
        </Dialog>,
        { container: iframeContainer, baseElement: iframeDocument.body }
      ));

      expect(within(iframeDocument.body).getByRole("dialog", { name: "Iframe dialog" })).toBeInTheDocument();
      expect(screen.queryByRole("dialog", { name: "Iframe dialog" })).toBeNull();
    } finally {
      unmount?.();
      iframe.remove();
    }
  });

  it("restores focus to the previously focused element after close by default", async () => {
    const user = userEvent.setup();

    function FocusRestoreFixture() {
      const [open, setOpen] = React.useState(false);

      return (
        <div>
          <button type="button" onClick={() => setOpen(true)}>
            Open dialog
          </button>
          <Dialog open={open} onOpenChange={setOpen} title="Focus restore dialog">
            <p>Body</p>
          </Dialog>
        </div>
      );
    }

    render(<FocusRestoreFixture />);
    const trigger = screen.getByRole("button", { name: "Open dialog" });

    await user.click(trigger);
    await user.click(screen.getByRole("button", { name: "Close dialog" }));

    expect(trigger).toHaveFocus();
  });

  it("does not restore focus when restoreFocus is false", async () => {
    const user = userEvent.setup();

    function FocusRestoreDisabledFixture() {
      const [open, setOpen] = React.useState(false);

      return (
        <div>
          <button type="button" onClick={() => setOpen(true)}>
            Open dialog
          </button>
          <Dialog
            open={open}
            onOpenChange={setOpen}
            title="Focus restore disabled"
            restoreFocus={false}
          >
            <p>Body</p>
          </Dialog>
        </div>
      );
    }

    render(<FocusRestoreDisabledFixture />);
    const trigger = screen.getByRole("button", { name: "Open dialog" });

    await user.click(trigger);
    await user.click(screen.getByRole("button", { name: "Close dialog" }));

    expect(trigger).not.toHaveFocus();
  });

  it("dismisses nested overlays from top layer first on Escape", () => {
    function NestedOverlayFixture() {
      const [open, setOpen] = React.useState(true);

      return (
        <Dialog open={open} onOpenChange={setOpen} title="Nested overlay dialog">
          <Dropdown
            label="Dialog actions"
            items={[
              { key: "duplicate", label: "Duplicate" },
              { key: "archive", label: "Archive" }
            ]}
          />
        </Dialog>
      );
    }

    render(<NestedOverlayFixture />);

    fireEvent.click(screen.getByRole("button", { name: "Dialog actions" }));
    expect(screen.getByRole("menu", { name: "Dialog actions" })).toBeInTheDocument();
    expect(screen.getByRole("dialog", { name: "Nested overlay dialog" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("menu", { name: "Dialog actions" })).toBeNull();
    expect(screen.getByRole("dialog", { name: "Nested overlay dialog" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Nested overlay dialog" })).toBeNull();
  });
});
