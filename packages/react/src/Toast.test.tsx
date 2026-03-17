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

    fireEvent.click(screen.getByRole("button", { name: "Close toast" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("uses alert role for danger tone", () => {
    render(<Toast open tone="danger" title="Failed" />);
    expect(screen.getByRole("alert")).toHaveAttribute("aria-live", "assertive");
  });

  it("supports escape to close", () => {
    const onOpenChange = vi.fn();
    render(<Toast open title="Escapable" onOpenChange={onOpenChange} />);

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
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

  it("does not close on escape when closeOnEscape is disabled", () => {
    const onOpenChange = vi.fn();

    render(<Toast open title="Sticky" closeOnEscape={false} onOpenChange={onOpenChange} />);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).not.toHaveBeenCalled();
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
