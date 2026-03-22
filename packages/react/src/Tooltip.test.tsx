import { act, fireEvent, render, screen, within } from "@testing-library/react";
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
    expect(screen.getByRole("tooltip")).toHaveAttribute("aria-keyshortcuts", "Escape");

    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(screen.queryByRole("tooltip")).toBeNull();

    fireEvent.focus(trigger);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    fireEvent.blur(trigger);
    expect(screen.queryByRole("tooltip")).toBeNull();
  });

  it("ignores modified/repeated/IME Escape keydowns and closes on plain Escape", () => {
    render(
      <Tooltip content="Tooltip content" closeDelay={0}>
        <button type="button">Escape guard trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Escape guard trigger" });
    fireEvent.focus(trigger);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    fireEvent.keyDown(trigger, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(trigger, { key: "Escape", altKey: true });
    fireEvent.keyDown(trigger, { key: "Escape", metaKey: true });
    fireEvent.keyDown(trigger, { key: "Escape", repeat: true });
    fireEvent.keyDown(trigger, { key: "Escape", isComposing: true, keyCode: 229, which: 229 });
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    fireEvent.keyDown(trigger, { key: "Escape", shiftKey: true });
    expect(screen.queryByRole("tooltip")).toBeNull();
  });

  it("keeps tooltip open on Escape when closeOnEscape is disabled", () => {
    render(
      <Tooltip content="Tooltip content" closeDelay={0} closeOnEscape={false}>
        <button type="button">Escape disabled trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Escape disabled trigger" });
    fireEvent.focus(trigger);

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).not.toHaveAttribute("aria-keyshortcuts");

    fireEvent.keyDown(trigger, { key: "Escape" });
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

  it("skips duplicate onOpenChange emits when controlled state is unchanged", () => {
    const onOpenChange = vi.fn();

    render(
      <Tooltip content="Controlled tooltip" open={false} closeDelay={0} onOpenChange={onOpenChange}>
        <button type="button">Controlled trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Controlled trigger" });
    fireEvent.keyDown(trigger, { key: "Escape" });
    fireEvent.blur(trigger);
    fireEvent.mouseLeave(trigger);

    expect(onOpenChange).not.toHaveBeenCalled();
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

  it("warns when non-text trigger omits aria-label and aria-labelledby", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    render(
      <Tooltip content="Tooltip content">
        <button type="button">
          <span aria-hidden="true">ⓘ</span>
        </button>
      </Tooltip>
    );

    expect(warnSpy).toHaveBeenCalledWith(
      "[Tooltip] Non-text trigger should provide aria-label or aria-labelledby."
    );
    warnSpy.mockRestore();
  });

  it("does not warn when non-text trigger provides aria-label", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    render(
      <Tooltip content="Tooltip content">
        <button type="button" aria-label="More info">
          <span aria-hidden="true">ⓘ</span>
        </button>
      </Tooltip>
    );

    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it("does not warn when non-text trigger provides aria-labelledby", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    render(
      <>
        <span id="tooltip-trigger-name">More info</span>
        <Tooltip content="Tooltip content">
          <button type="button" aria-labelledby="tooltip-trigger-name">
            <span aria-hidden="true">ⓘ</span>
          </button>
        </Tooltip>
      </>
    );

    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it("does not warn when rich non-text trigger exposes inline aria-label", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    render(
      <Tooltip content="Tooltip content">
        <button type="button">
          <span aria-label="More info">
            <span aria-hidden="true">ⓘ</span>
          </span>
        </button>
      </Tooltip>
    );

    expect(screen.getByRole("button", { name: "More info" })).toBeInTheDocument();
    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it("cleans tooltip id from aria-describedby after close", () => {
    render(
      <Tooltip content="Tooltip content" closeDelay={0}>
        <button type="button" aria-describedby="helper-id">
          Trigger
        </button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Trigger" });
    fireEvent.focus(trigger);

    const tooltip = screen.getByRole("tooltip");
    const tooltipId = tooltip.getAttribute("id");
    expect(trigger.getAttribute("aria-describedby")).toContain("helper-id");
    expect(trigger.getAttribute("aria-describedby")).toContain(tooltipId as string);

    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(screen.queryByRole("tooltip")).toBeNull();
    expect(trigger).toHaveAttribute("aria-describedby", "helper-id");
  });

  it("respects preventDefault from trigger handlers", () => {
    const onMouseEnter = vi.fn((event: React.MouseEvent<HTMLButtonElement>) =>
      event.preventDefault()
    );
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

  it("respects preventDefault from trigger close handlers", () => {
    const onMouseLeave = vi.fn((event: React.MouseEvent<HTMLButtonElement>) =>
      event.preventDefault()
    );
    const onBlur = vi.fn((event: React.FocusEvent<HTMLButtonElement>) => event.preventDefault());
    const onKeyDown = vi.fn((event: React.KeyboardEvent<HTMLButtonElement>) =>
      event.preventDefault()
    );

    render(
      <Tooltip content="Tooltip content" delayDuration={0} closeDelay={0}>
        <button type="button" onMouseLeave={onMouseLeave} onBlur={onBlur} onKeyDown={onKeyDown}>
          Guarded close trigger
        </button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Guarded close trigger" });
    fireEvent.focus(trigger);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    fireEvent.keyDown(trigger, { key: "Escape" });
    fireEvent.blur(trigger);
    fireEvent.mouseLeave(trigger);

    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
  });

  it("does not emit duplicate open events while already visible", () => {
    const onOpenChange = vi.fn();

    render(
      <Tooltip
        content="Tooltip content"
        delayDuration={0}
        closeDelay={0}
        onOpenChange={onOpenChange}
      >
        <button type="button">No duplicate open trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "No duplicate open trigger" });
    fireEvent.focus(trigger);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    fireEvent.mouseEnter(trigger);
    expect(onOpenChange).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenNthCalledWith(1, true);
  });

  it("applies side and sideOffset positioning styles", () => {
    render(
      <Tooltip
        content="Tooltip content"
        side="right"
        sideOffset={14}
        delayDuration={0}
        closeDelay={0}
      >
        <button type="button">Positioned trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Positioned trigger" });
    fireEvent.focus(trigger);

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip.style.left).toBe("calc(100% + 14px)");
    expect(tooltip.style.top).toBe("50%");
    expect(tooltip.style.transform).toBe("translateY(-50%)");
  });

  it("keeps tooltip open when close timer is cancelled by re-entering tooltip content", () => {
    vi.useFakeTimers();

    render(
      <Tooltip content="Tooltip content" delayDuration={0} closeDelay={120}>
        <button type="button">Hover bridge</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Hover bridge" });
    fireEvent.focus(trigger);
    const tooltip = screen.getByRole("tooltip");

    fireEvent.mouseLeave(trigger);
    fireEvent.mouseEnter(tooltip);
    act(() => {
      vi.advanceTimersByTime(120);
    });
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    fireEvent.mouseLeave(tooltip);
    act(() => {
      vi.advanceTimersByTime(120);
    });
    expect(screen.queryByRole("tooltip")).toBeNull();

    vi.useRealTimers();
  });

  it("uses ownerDocument window timers in iframe-hosted tooltip", () => {
    const iframe = document.createElement("iframe");
    document.body.append(iframe);
    const iframeDocument = iframe.contentDocument as Document;
    const iframeWindow = iframeDocument.defaultView as Window;
    const host = iframeDocument.createElement("div");
    iframeDocument.body.append(host);

    const iframeSetTimeoutSpy = vi.spyOn(iframeWindow, "setTimeout");
    const iframeClearTimeoutSpy = vi.spyOn(iframeWindow, "clearTimeout");

    const { unmount } = render(
      <Tooltip content="Iframe tooltip" delayDuration={120} closeDelay={0}>
        <button type="button">Iframe trigger</button>
      </Tooltip>,
      { container: host }
    );

    const trigger = within(host).getByRole("button", { name: "Iframe trigger" });
    fireEvent.mouseEnter(trigger);

    expect(iframeSetTimeoutSpy).toHaveBeenCalled();

    unmount();
    expect(iframeClearTimeoutSpy).toHaveBeenCalled();

    iframeSetTimeoutSpy.mockRestore();
    iframeClearTimeoutSpy.mockRestore();
    iframe.remove();
  });
});
