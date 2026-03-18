import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Drawer } from "./Drawer";
import { Dropdown } from "./Dropdown";
import { resetBodyScrollLockForTests } from "./bodyScrollLock";

afterEach(() => {
  document.body.style.overflow = "";
  resetBodyScrollLockForTests();
});

describe("Drawer", () => {
  it("calls onOpenChange(false) from close controls", () => {
    const onOpenChange = vi.fn();

    render(
      <Drawer open onOpenChange={onOpenChange} title="Filters">
        <p>Drawer content</p>
      </Drawer>
    );

    fireEvent.click(screen.getByRole("button", { name: "Close drawer" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);

    onOpenChange.mockClear();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);

    onOpenChange.mockClear();
    fireEvent.pointerDown(document.body);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("supports non-dismissible escape and outside-pointer branches", () => {
    const onOpenChange = vi.fn();

    render(
      <Drawer open onOpenChange={onOpenChange} title="Release notes" closeOnEscape={false} closeOnOutsidePointer={false}>
        <p>Drawer content</p>
      </Drawer>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    fireEvent.pointerDown(document.body);

    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("wires title and description semantics", () => {
    render(
      <Drawer open onOpenChange={() => {}} title="Keyboard shortcuts" description="Use Ctrl/Cmd + K to open command palette.">
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
          <Drawer open={open} onOpenChange={setOpen} title="No focus restore drawer" restoreFocus={false}>
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
});
