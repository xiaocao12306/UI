import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Drawer } from "./Drawer";

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
});
