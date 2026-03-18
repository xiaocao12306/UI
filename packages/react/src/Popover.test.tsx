import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Popover } from "./Popover";

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

  it("supports icon trigger naming via triggerAriaLabel", () => {
    render(
      <Popover triggerLabel="⋯" triggerAriaLabel="More info">
        <p>Popover content</p>
      </Popover>
    );

    fireEvent.click(screen.getByRole("button", { name: "More info" }));
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

function dispatchNonPrimaryPointerDown(target: EventTarget) {
  const event = new Event("pointerdown", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "button", { configurable: true, value: 2 });
  Object.defineProperty(event, "buttons", { configurable: true, value: 2 });
  Object.defineProperty(event, "pointerType", { configurable: true, value: "mouse" });
  target.dispatchEvent(event);
}
