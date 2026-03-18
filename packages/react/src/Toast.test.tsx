import * as React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Toast } from "./Toast";

describe("Toast", () => {
  it("renders live region and closes via close button", () => {
    const onClose = vi.fn();

    render(<Toast open title="Saved" description="Changes were persisted" onClose={onClose} />);

    const toast = screen.getByRole("status");
    expect(toast).toHaveAttribute("aria-live", "polite");
    expect(toast).toHaveAttribute("aria-atomic", "true");
    expect(toast).toHaveAttribute("aria-labelledby");
    expect(toast).toHaveAttribute("aria-describedby");

    fireEvent.click(screen.getByRole("button", { name: "Close toast" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("supports explicit live-region label override", () => {
    render(<Toast open title={<span aria-hidden>✅</span>} ariaLabel="Sync completed notification" />);

    const toast = screen.getByRole("status", { name: "Sync completed notification" });
    expect(toast).toHaveAttribute("aria-label", "Sync completed notification");
    expect(toast).not.toHaveAttribute("aria-labelledby");
  });

  it("supports custom close button label", () => {
    render(<Toast open title="Saved" closeLabel="Dismiss notification" />);
    expect(screen.getByRole("button", { name: "Dismiss notification" })).toBeInTheDocument();
  });

  it("uses alert role for danger tone", () => {
    render(<Toast open tone="danger" title="Failed" />);
    expect(screen.getByRole("alert")).toHaveAttribute("aria-live", "assertive");
  });

  it("supports overriding live-region politeness", () => {
    render(<Toast open title="Background sync" live="off" duration={0} />);
    expect(screen.getByRole("status", { name: "Background sync" })).toHaveAttribute("aria-live", "off");
  });

  it("allows live override while preserving danger alert role", () => {
    render(<Toast open tone="danger" title="Incident" live="polite" duration={0} />);
    expect(screen.getByRole("alert", { name: "Incident" })).toHaveAttribute("aria-live", "polite");
  });

  it("supports escape to close", () => {
    const onOpenChange = vi.fn();
    render(<Toast open title="Escapable" onOpenChange={onOpenChange} />);

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("calls onEscapeKeyDown before closing", () => {
    const onOpenChange = vi.fn();
    const onEscapeKeyDown = vi.fn();

    render(<Toast open title="Escapable" onOpenChange={onOpenChange} onEscapeKeyDown={onEscapeKeyDown} />);
    fireEvent.keyDown(document, { key: "Escape" });

    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("allows onEscapeKeyDown to prevent dismissal", () => {
    const onOpenChange = vi.fn();

    render(
      <Toast
        open
        title="Guarded"
        onOpenChange={onOpenChange}
        onEscapeKeyDown={(event) => {
          event.preventDefault();
        }}
      />
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("status", { name: "Guarded" })).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(<Toast open={false} title="Hidden" />);
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("auto dismisses when duration elapses", () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    const onOpenChange = vi.fn();

    try {
      render(<Toast open title="Timed" duration={1200} onClose={onClose} onOpenChange={onOpenChange} />);

      act(() => {
        vi.advanceTimersByTime(1199);
      });
      expect(onClose).not.toHaveBeenCalled();
      expect(onOpenChange).not.toHaveBeenCalled();

      act(() => {
        vi.advanceTimersByTime(1);
      });
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onOpenChange).toHaveBeenCalledWith(false);
    } finally {
      vi.useRealTimers();
    }
  });

  it("pauses auto dismiss while hovered when pauseOnHover is enabled", () => {
    vi.useFakeTimers();
    const onOpenChange = vi.fn();

    try {
      render(<Toast open title="Hover pause" duration={2000} onOpenChange={onOpenChange} />);

      const toast = screen.getByRole("status");
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      fireEvent.mouseEnter(toast);
      act(() => {
        vi.advanceTimersByTime(3000);
      });
      expect(onOpenChange).not.toHaveBeenCalled();

      fireEvent.mouseLeave(toast);
      act(() => {
        vi.advanceTimersByTime(1999);
      });
      expect(onOpenChange).not.toHaveBeenCalled();

      act(() => {
        vi.advanceTimersByTime(1);
      });
      expect(onOpenChange).toHaveBeenCalledWith(false);
    } finally {
      vi.useRealTimers();
    }
  });

  it("pauses auto dismiss while toast controls are focused", () => {
    vi.useFakeTimers();
    const onOpenChange = vi.fn();

    try {
      render(<Toast open title="Focus pause" duration={1500} onOpenChange={onOpenChange} />);

      act(() => {
        vi.advanceTimersByTime(700);
      });

      const closeButton = screen.getByRole("button", { name: "Close toast" });
      fireEvent.focus(closeButton);
      act(() => {
        vi.advanceTimersByTime(2000);
      });
      expect(onOpenChange).not.toHaveBeenCalled();

      fireEvent.blur(closeButton);
      act(() => {
        vi.advanceTimersByTime(1499);
      });
      expect(onOpenChange).not.toHaveBeenCalled();

      act(() => {
        vi.advanceTimersByTime(1);
      });
      expect(onOpenChange).toHaveBeenCalledWith(false);
    } finally {
      vi.useRealTimers();
    }
  });

  it("does not pause on focus when pauseOnHover is disabled", () => {
    vi.useFakeTimers();
    const onOpenChange = vi.fn();

    try {
      render(<Toast open title="No pause" duration={1000} pauseOnHover={false} onOpenChange={onOpenChange} />);

      fireEvent.focus(screen.getByRole("button", { name: "Close toast" }));
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      expect(onOpenChange).toHaveBeenCalledWith(false);
    } finally {
      vi.useRealTimers();
    }
  });

  it("does not close on escape when closeOnEscape is disabled", () => {
    const onOpenChange = vi.fn();

    render(<Toast open title="Sticky" closeOnEscape={false} onOpenChange={onOpenChange} />);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("does not close when Escape event is already default prevented", () => {
    const onOpenChange = vi.fn();

    render(<Toast open title="Sticky" onOpenChange={onOpenChange} />);

    const event = new KeyboardEvent("keydown", { key: "Escape", bubbles: true, cancelable: true });
    event.preventDefault();
    document.dispatchEvent(event);

    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("closes stacked toasts from top-most to oldest on Escape", () => {
    function StackedToasts() {
      const [firstOpen, setFirstOpen] = React.useState(true);
      const [secondOpen, setSecondOpen] = React.useState(true);

      return (
        <>
          <Toast open={firstOpen} title="First" onOpenChange={setFirstOpen} />
          <Toast open={secondOpen} title="Second" onOpenChange={setSecondOpen} />
        </>
      );
    }

    render(<StackedToasts />);

    expect(screen.getByRole("status", { name: "First" })).toBeInTheDocument();
    expect(screen.getByRole("status", { name: "Second" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.getByRole("status", { name: "First" })).toBeInTheDocument();
    expect(screen.queryByRole("status", { name: "Second" })).toBeNull();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("status", { name: "First" })).toBeNull();
  });

  it("promotes focused toast to top of stack before Escape dismiss", () => {
    function StackedToasts() {
      const [firstOpen, setFirstOpen] = React.useState(true);
      const [secondOpen, setSecondOpen] = React.useState(true);

      return (
        <>
          <Toast open={firstOpen} title="First" duration={0} onOpenChange={setFirstOpen} />
          <Toast open={secondOpen} title="Second" duration={0} onOpenChange={setSecondOpen} />
        </>
      );
    }

    render(<StackedToasts />);

    const [firstCloseButton] = screen.getAllByRole("button", { name: "Close toast" });
    fireEvent.focus(firstCloseButton);
    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("status", { name: "First" })).toBeNull();
    expect(screen.getByRole("status", { name: "Second" })).toBeInTheDocument();
  });

  it("resets paused state after close and reopen", () => {
    vi.useFakeTimers();
    const onOpenChange = vi.fn();

    try {
      const { rerender } = render(<Toast open title="Retryable" duration={1000} onOpenChange={onOpenChange} />);
      const toast = screen.getByRole("status");
      fireEvent.mouseEnter(toast);

      rerender(<Toast open={false} title="Retryable" duration={1000} onOpenChange={onOpenChange} />);
      rerender(<Toast open title="Retryable" duration={1000} onOpenChange={onOpenChange} />);

      act(() => {
        vi.advanceTimersByTime(1000);
      });

      expect(onOpenChange).toHaveBeenCalledWith(false);
    } finally {
      vi.useRealTimers();
    }
  });
});
