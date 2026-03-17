import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Dialog } from "./Dialog";

describe("Dialog", () => {
  it("calls onOpenChange(false) when close button clicked", () => {
    const onOpenChange = vi.fn();

    render(
      <Dialog open onOpenChange={onOpenChange} title="Settings">
        <p>Body</p>
      </Dialog>
    );

    fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
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
      <Dialog open onOpenChange={() => {}} title="Accessibility Title" description="Dialog description">
        <p>Body</p>
      </Dialog>
    );

    const dialog = screen.getByRole("dialog");
    const description = screen.getByText("Dialog description");
    expect(dialog).toHaveAttribute("aria-describedby", description.getAttribute("id"));
  });

  it("does not dismiss on escape when closeOnEscape is false", () => {
    const onOpenChange = vi.fn();
    render(
      <Dialog open onOpenChange={onOpenChange} title="Pinned" closeOnEscape={false}>
        <p>Body</p>
      </Dialog>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("does not dismiss on outside pointer when closeOnOutsidePointer is false", () => {
    const onOpenChange = vi.fn();
    render(
      <Dialog open onOpenChange={onOpenChange} title="Pinned" closeOnOutsidePointer={false}>
        <p>Body</p>
      </Dialog>
    );

    fireEvent.pointerDown(document.body);
    expect(onOpenChange).not.toHaveBeenCalled();
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
          <Dialog open={open} onOpenChange={setOpen} title="Focus restore disabled" restoreFocus={false}>
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
});
