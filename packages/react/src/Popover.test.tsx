import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Popover } from "./Popover";

describe("Popover", () => {
  it("opens and closes through trigger, escape key, and outside pointer", () => {
    render(
      <Popover triggerLabel="Open popover">
        <p>Popover content</p>
      </Popover>
    );

    const trigger = screen.getByRole("button", { name: "Open popover" });
    expect(trigger).not.toHaveAttribute("aria-controls");
    expect(screen.queryByText("Popover content")).toBeNull();

    fireEvent.click(trigger);
    const dialog = screen.getByRole("dialog", { name: "Popover content" });
    expect(trigger).toHaveAttribute("aria-controls", dialog.id);
    expect(screen.getByText("Popover content")).toBeInTheDocument();
    expect(trigger).not.toHaveFocus();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(trigger).not.toHaveAttribute("aria-controls");
    expect(screen.queryByText("Popover content")).toBeNull();
    expect(trigger).toHaveFocus();

    fireEvent.click(trigger);
    expect(screen.getByText("Popover content")).toBeInTheDocument();
    expect(trigger).not.toHaveFocus();

    fireEvent.pointerDown(document.body);
    expect(screen.queryByText("Popover content")).toBeNull();
    expect(trigger).not.toHaveFocus();
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

  it("supports icon trigger naming via triggerAriaLabel", () => {
    render(
      <Popover triggerLabel="⋯" triggerAriaLabel="More info">
        <p>Popover content</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "More info" }));
    expect(screen.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  });
});
