import { act, fireEvent, render, screen } from "@testing-library/react";
import type * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("opens on hover after delay and closes on leave", () => {
    vi.useFakeTimers();

    render(
      <Tooltip content="Tooltip content" delayDuration={300} closeDelay={0}>
        <button type="button">Trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Trigger" });

    expect(screen.queryByRole("tooltip")).toBeNull();

    fireEvent.mouseEnter(trigger);
    act(() => {
      vi.advanceTimersByTime(299);
    });
    expect(screen.queryByRole("tooltip")).toBeNull();
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(screen.getByRole("tooltip")).toHaveTextContent("Tooltip content");

    fireEvent.mouseLeave(trigger);
    act(() => {
      vi.runAllTimers();
    });
    expect(screen.queryByRole("tooltip")).toBeNull();

    vi.useRealTimers();
  });

  it("opens on focus and closes on escape / blur", () => {
    render(
      <Tooltip content="Tooltip content" closeDelay={0}>
        <button type="button">Trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Trigger" });

    fireEvent.focus(trigger);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(screen.queryByRole("tooltip")).toBeNull();

    fireEvent.focus(trigger);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    fireEvent.blur(trigger);
    expect(screen.queryByRole("tooltip")).toBeNull();
  });

  it("supports controlled mode and emits onOpenChange", () => {
    const onOpenChange = vi.fn();

    render(
      <Tooltip content="Controlled tooltip" open closeDelay={0} onOpenChange={onOpenChange}>
        <button type="button">Trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Trigger" });
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("merges aria-describedby and supports disabled mode", () => {
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <Tooltip content="Tooltip content">
        <button type="button" aria-describedby="helper-id">
          Trigger
        </button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Trigger" });
    fireEvent.focus(trigger);
    const tooltip = screen.getByRole("tooltip");
    const describedBy = trigger.getAttribute("aria-describedby");

    expect(describedBy).toContain("helper-id");
    expect(describedBy).toContain(tooltip.getAttribute("id") as string);

    rerender(
      <Tooltip content="Tooltip content" open disabled onOpenChange={onOpenChange}>
        <button type="button">Trigger</button>
      </Tooltip>
    );

    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(screen.queryByRole("tooltip")).toBeNull();
  });

  it("respects preventDefault from trigger handlers", () => {
    const onMouseEnter = vi.fn((event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault());
    const onFocus = vi.fn((event: React.FocusEvent<HTMLButtonElement>) => event.preventDefault());

    render(
      <Tooltip content="Tooltip content" delayDuration={0} closeDelay={0}>
        <button type="button" onMouseEnter={onMouseEnter} onFocus={onFocus}>
          Guarded trigger
        </button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Guarded trigger" });
    fireEvent.mouseEnter(trigger);
    fireEvent.focus(trigger);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("tooltip")).toBeNull();
  });
});
