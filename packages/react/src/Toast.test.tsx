import * as React from "react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Popover } from "./Popover";
import { Toast } from "./Toast";

describe("Toast", () => {
  it("renders live region and closes via close button", () => {
    const onClose = vi.fn();
    const onCloseReason = vi.fn();

    render(<Toast open title="Saved" description="Changes were persisted" onClose={onClose} onCloseReason={onCloseReason} />);

    const toast = screen.getByRole("status");
    expect(toast).toHaveAttribute("aria-live", "polite");
    expect(toast).toHaveAttribute("aria-atomic", "true");
    expect(toast).toHaveAttribute("aria-labelledby");
    expect(toast).toHaveAttribute("aria-describedby");

    fireEvent.click(screen.getByRole("button", { name: "Close toast" }));
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenCalledWith("close-button");
  });

  it("marks toast transitions for reduced-motion fallback", () => {
    render(<Toast open title="Saved" />);

    const toast = screen.getByRole("status", { name: "Saved" });
    const closeButton = screen.getByRole("button", { name: "Close toast" });

    expect(toast).toHaveAttribute("data-aurora-reduced-motion", "transition");
    expect(closeButton).toHaveAttribute("data-aurora-reduced-motion", "transition");
  });

  it("emits close callbacks in deterministic order for close-button dismiss", () => {
    const events: string[] = [];
    render(
      <Toast
        open
        title="Saved"
        onCloseReason={(reason) => {
          events.push(`reason:${reason}`);
        }}
        onClose={() => {
          events.push("close");
        }}
        onOpenChange={(nextOpen) => {
          events.push(`open:${String(nextOpen)}`);
        }}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Close toast" }));

    expect(events).toEqual(["reason:close-button", "close", "open:false"]);
  });

  it("emits close callbacks in deterministic order for escape dismiss", () => {
    const events: string[] = [];
    render(
      <Toast
        open
        title="Escapable"
        onCloseReason={(reason) => {
          events.push(`reason:${reason}`);
        }}
        onClose={() => {
          events.push("close");
        }}
        onOpenChange={(nextOpen) => {
          events.push(`open:${String(nextOpen)}`);
        }}
      />
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(events).toEqual(["reason:escape-key", "close", "open:false"]);
  });

  it("supports explicit live-region label override", () => {
    render(<Toast open title={<span aria-hidden>✅</span>} ariaLabel="Sync completed notification" />);

    const toast = screen.getByRole("status", { name: "Sync completed notification" });
    expect(toast).toHaveAttribute("aria-label", "Sync completed notification");
    expect(toast).not.toHaveAttribute("aria-labelledby");
  });

  it("prefers ariaLabelledBy over ariaLabel and keeps heading naming canonical", () => {
    render(
      <div>
        <h2 id="toast-heading">Release incident notice</h2>
        <Toast
          open
          title="Fallback toast title"
          ariaLabel="Fallback toast label"
          ariaLabelledBy="toast-heading"
        />
      </div>
    );

    const toast = screen.getByRole("status", { name: "Release incident notice" });
    expect(toast).toHaveAttribute("aria-labelledby", "toast-heading");
    expect(toast).not.toHaveAttribute("aria-label");
  });

  it("ignores blank ariaLabelledBy and preserves ariaLabel naming", () => {
    render(<Toast open title={<span aria-hidden>✅</span>} ariaLabel="Sync completed notification" ariaLabelledBy="   " />);

    const toast = screen.getByRole("status", { name: "Sync completed notification" });
    expect(toast).toHaveAttribute("aria-label", "Sync completed notification");
    expect(toast).not.toHaveAttribute("aria-labelledby");
  });

  it("ignores blank ariaLabel and falls back to title-derived naming", () => {
    render(<Toast open title="Saved" ariaLabel="   " />);

    const toast = screen.getByRole("status", { name: "Saved" });
    expect(toast).not.toHaveAttribute("aria-label");
    expect(toast).toHaveAttribute("aria-labelledby");
  });

  it("warns when non-text title omits ariaLabel", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(<Toast open title={<span aria-hidden>✅</span>} />);
      expect(warnSpy).toHaveBeenCalledWith(
        "[Toast] Non-text titles should provide ariaLabel or ariaLabelledBy so notification name remains accessible."
      );
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("does not warn when non-text title provides ariaLabel", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(<Toast open title={<span aria-hidden>✅</span>} ariaLabel="Sync completed notification" />);
      expect(warnSpy).not.toHaveBeenCalled();
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("does not warn when non-text title provides ariaLabelledBy", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(
        <div>
          <h2 id="toast-heading">Sync completed notification</h2>
          <Toast open title={<span aria-hidden>✅</span>} ariaLabelledBy="toast-heading" />
        </div>
      );
      expect(warnSpy).not.toHaveBeenCalled();
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("warns when non-text title uses blank ariaLabel", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(<Toast open title={<span aria-hidden>✅</span>} ariaLabel="   " />);
      expect(warnSpy).toHaveBeenCalledWith(
        "[Toast] Non-text titles should provide ariaLabel or ariaLabelledBy so notification name remains accessible."
      );
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("does not warn when rich non-text title exposes aria-label on inner node", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(<Toast open title={<span aria-label="Sync completed notification">✅</span>} />);
      expect(warnSpy).not.toHaveBeenCalled();
      expect(screen.getByRole("status", { name: "Sync completed notification" })).toBeInTheDocument();
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("supports custom close button label", () => {
    render(<Toast open title="Saved" closeLabel="Dismiss notification" />);
    expect(screen.getByRole("button", { name: "Dismiss notification" })).toBeInTheDocument();
  });

  it("ignores blank closeLabel and falls back to default close button name", () => {
    render(<Toast open title="Saved" closeLabel="   " />);
    expect(screen.getByRole("button", { name: "Close toast" })).toBeInTheDocument();
  });

  it("treats numeric description as renderable toast semantics", () => {
    render(<Toast open title="Release notice" description={0} duration={0} />);

    const toast = screen.getByRole("status", { name: "Release notice" });
    const descriptions = screen.getAllByText("0");
    expect(descriptions).toHaveLength(1);
    expect(toast).toHaveAttribute("aria-describedby", descriptions[0].getAttribute("id"));
  });

  it("uses alert role for danger tone", () => {
    render(<Toast open tone="danger" title="Failed" />);
    expect(screen.getByRole("alert")).toHaveAttribute("aria-live", "assertive");
  });

  it("uses dialog role for actionable non-danger toast", () => {
    render(<Toast open title="Action required" action={<button type="button">Acknowledge</button>} />);

    const toast = screen.getByRole("dialog", { name: "Action required" });
    expect(toast).toHaveAttribute("aria-modal", "false");
    expect(toast).not.toHaveAttribute("aria-live");
  });

  it("uses alertdialog role for actionable danger toast", () => {
    render(<Toast open tone="danger" title="Incident" action={<button type="button">Review</button>} />);

    const toast = screen.getByRole("alertdialog", { name: "Incident" });
    expect(toast).toHaveAttribute("aria-modal", "false");
    expect(toast).not.toHaveAttribute("aria-live");
  });

  it("treats boolean-false action as non-actionable live region", () => {
    render(<Toast open title="Passive update" action={false} />);

    const toast = screen.getByRole("status", { name: "Passive update" });
    expect(toast).toHaveAttribute("aria-live", "polite");
    expect(toast).not.toHaveAttribute("aria-modal");
    expect(screen.queryByRole("dialog", { name: "Passive update" })).toBeNull();
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
    const onCloseReason = vi.fn();
    render(<Toast open title="Escapable" onOpenChange={onOpenChange} onCloseReason={onCloseReason} />);
    expect(screen.getByRole("status", { name: "Escapable" })).toHaveAttribute("aria-keyshortcuts", "Escape");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(onCloseReason).toHaveBeenCalledWith("escape-key");
  });

  it("supports Shift+Escape to close", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(<Toast open title="Escapable" onOpenChange={onOpenChange} onCloseReason={onCloseReason} />);
    fireEvent.keyDown(document, { key: "Escape", shiftKey: true });

    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(onCloseReason).toHaveBeenCalledWith("escape-key");
  });

  it("keeps toast open when a top overlay layer handles Escape first", async () => {
    function ToastWithTopPopoverLayer() {
      const [toastOpen, setToastOpen] = React.useState(true);

      return (
        <>
          <Popover triggerLabel="Open overlay" contentLabel="Escape overlay">
            <p>Overlay content</p>
          </Popover>
          <Toast open={toastOpen} onOpenChange={setToastOpen} title="Overlay-aware toast" duration={0} />
        </>
      );
    }

    render(<ToastWithTopPopoverLayer />);

    fireEvent.click(screen.getByRole("button", { name: "Open overlay" }));
    expect(screen.getByRole("dialog", { name: "Escape overlay" })).toBeInTheDocument();
    expect(screen.getByRole("status", { name: "Overlay-aware toast" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => {
      expect(screen.queryByRole("dialog", { name: "Escape overlay" })).toBeNull();
    });
    expect(screen.getByRole("status", { name: "Overlay-aware toast" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => {
      expect(screen.queryByRole("status", { name: "Overlay-aware toast" })).toBeNull();
    });
  });

  it("ignores repeated Escape keydown to prevent long-press duplicate close", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(<Toast open title="Escapable" duration={0} onOpenChange={onOpenChange} onCloseReason={onCloseReason} />);

    fireEvent.keyDown(document, { key: "Escape", repeat: true });
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("status", { name: "Escapable" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(onCloseReason).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenCalledWith("escape-key");
  });

  it("ignores repeated Escape keydown before stacked-toast top dismissal", () => {
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

    fireEvent.keyDown(document, { key: "Escape", repeat: true });
    expect(screen.getByRole("status", { name: "First" })).toBeInTheDocument();
    expect(screen.getByRole("status", { name: "Second" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.getByRole("status", { name: "First" })).toBeInTheDocument();
    expect(screen.queryByRole("status", { name: "Second" })).toBeNull();
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
    const onCloseReason = vi.fn();
    const onOpenChange = vi.fn();

    try {
      render(<Toast open title="Timed" duration={1200} onClose={onClose} onCloseReason={onCloseReason} onOpenChange={onOpenChange} />);

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
      expect(onCloseReason).toHaveBeenCalledWith("timeout");
    } finally {
      vi.useRealTimers();
    }
  });

  it("auto dismisses passive toast after default 4000ms when duration is omitted", () => {
    vi.useFakeTimers();
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    try {
      render(
        <Toast open title="Passive default timer" onOpenChange={onOpenChange} onCloseReason={onCloseReason} />
      );

      act(() => {
        vi.advanceTimersByTime(3999);
      });
      expect(onOpenChange).not.toHaveBeenCalled();
      expect(onCloseReason).not.toHaveBeenCalled();

      act(() => {
        vi.advanceTimersByTime(1);
      });
      expect(onOpenChange).toHaveBeenCalledWith(false);
      expect(onCloseReason).toHaveBeenCalledWith("timeout");
    } finally {
      vi.useRealTimers();
    }
  });

  it("emits close callbacks in deterministic order for timeout dismiss", () => {
    vi.useFakeTimers();
    const events: string[] = [];

    try {
      render(
        <Toast
          open
          title="Timed"
          duration={1200}
          onCloseReason={(reason) => {
            events.push(`reason:${reason}`);
          }}
          onClose={() => {
            events.push("close");
          }}
          onOpenChange={(nextOpen) => {
            events.push(`open:${String(nextOpen)}`);
          }}
        />
      );

      act(() => {
        vi.advanceTimersByTime(1200);
      });

      expect(events).toEqual(["reason:timeout", "close", "open:false"]);
    } finally {
      vi.useRealTimers();
    }
  });

  it("does not auto dismiss when duration is zero or negative", () => {
    vi.useFakeTimers();
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    try {
      const { rerender } = render(
        <Toast open title="Persistent" duration={0} onOpenChange={onOpenChange} onCloseReason={onCloseReason} />
      );

      act(() => {
        vi.advanceTimersByTime(5000);
      });
      expect(onOpenChange).not.toHaveBeenCalled();
      expect(onCloseReason).not.toHaveBeenCalled();

      rerender(<Toast open title="Persistent" duration={-1} onOpenChange={onOpenChange} onCloseReason={onCloseReason} />);
      act(() => {
        vi.advanceTimersByTime(5000);
      });
      expect(onOpenChange).not.toHaveBeenCalled();
      expect(onCloseReason).not.toHaveBeenCalled();
    } finally {
      vi.useRealTimers();
    }
  });

  it("does not auto dismiss actionable toast when duration is not provided", () => {
    vi.useFakeTimers();
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    try {
      render(
        <Toast
          open
          title="Action required"
          action={<button type="button">Review</button>}
          onOpenChange={onOpenChange}
          onCloseReason={onCloseReason}
        />
      );

      act(() => {
        vi.advanceTimersByTime(10000);
      });

      expect(onOpenChange).not.toHaveBeenCalled();
      expect(onCloseReason).not.toHaveBeenCalled();
      expect(screen.getByRole("dialog", { name: "Action required" })).toBeInTheDocument();
    } finally {
      vi.useRealTimers();
    }
  });

  it("auto dismisses actionable toast when explicit duration is provided", () => {
    vi.useFakeTimers();
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    try {
      render(
        <Toast
          open
          title="Action required"
          action={<button type="button">Review</button>}
          duration={1200}
          onOpenChange={onOpenChange}
          onCloseReason={onCloseReason}
        />
      );

      act(() => {
        vi.advanceTimersByTime(1199);
      });
      expect(onOpenChange).not.toHaveBeenCalled();

      act(() => {
        vi.advanceTimersByTime(1);
      });
      expect(onOpenChange).toHaveBeenCalledWith(false);
      expect(onCloseReason).toHaveBeenCalledWith("timeout");
    } finally {
      vi.useRealTimers();
    }
  });

  it("pauses auto dismiss while hovered and resumes with remaining duration", () => {
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
        vi.advanceTimersByTime(999);
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

  it("pauses auto dismiss while toast controls are focused and resumes with remaining duration", () => {
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
        vi.advanceTimersByTime(799);
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

  it("pauses auto dismiss while document is hidden and resumes with remaining duration", () => {
    vi.useFakeTimers();
    const onOpenChange = vi.fn();
    let visibilityState: DocumentVisibilityState = "visible";
    const visibilitySpy = vi
      .spyOn(document, "visibilityState", "get")
      .mockImplementation(() => visibilityState);

    try {
      render(<Toast open title="Hidden tab pause" duration={1500} onOpenChange={onOpenChange} />);

      act(() => {
        vi.advanceTimersByTime(700);
      });

      act(() => {
        visibilityState = "hidden";
        document.dispatchEvent(new Event("visibilitychange"));
      });
      act(() => {
        vi.advanceTimersByTime(3000);
      });
      expect(onOpenChange).not.toHaveBeenCalled();

      act(() => {
        visibilityState = "visible";
        document.dispatchEvent(new Event("visibilitychange"));
      });
      act(() => {
        vi.advanceTimersByTime(799);
      });
      expect(onOpenChange).not.toHaveBeenCalled();

      act(() => {
        vi.advanceTimersByTime(1);
      });
      expect(onOpenChange).toHaveBeenCalledWith(false);
    } finally {
      visibilitySpy.mockRestore();
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
    expect(screen.getByRole("status", { name: "Sticky" })).not.toHaveAttribute("aria-keyshortcuts");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("ignores modified Escape keydown for close and hook callbacks", () => {
    const onOpenChange = vi.fn();
    const onEscapeKeyDown = vi.fn();

    render(<Toast open title="Shortcut Guard" onOpenChange={onOpenChange} onEscapeKeyDown={onEscapeKeyDown} />);
    expect(screen.getByRole("status", { name: "Shortcut Guard" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Escape"
    );

    fireEvent.keyDown(document, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(document, { key: "Escape", altKey: true });
    fireEvent.keyDown(document, { key: "Escape", metaKey: true });

    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("status", { name: "Shortcut Guard" })).toBeInTheDocument();
  });

  it("does not close when Escape event is already default prevented", () => {
    const onOpenChange = vi.fn();

    render(<Toast open title="Sticky" onOpenChange={onOpenChange} />);

    const event = new KeyboardEvent("keydown", { key: "Escape", bubbles: true, cancelable: true });
    event.preventDefault();
    document.dispatchEvent(event);

    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("does not call escape hook when Escape event is already default prevented", () => {
    const onEscapeKeyDown = vi.fn();

    render(<Toast open title="Sticky" onEscapeKeyDown={onEscapeKeyDown} onOpenChange={() => {}} />);

    const event = new KeyboardEvent("keydown", { key: "Escape", bubbles: true, cancelable: true });
    event.preventDefault();
    document.dispatchEvent(event);

    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(screen.getByRole("status", { name: "Sticky" })).toBeInTheDocument();
  });

  it("does not close on Escape while IME composition is active", () => {
    const onOpenChange = vi.fn();

    render(<Toast open title="Composing" onOpenChange={onOpenChange} />);

    fireEvent.keyDown(document, { key: "Escape", isComposing: true, keyCode: 229, which: 229 });
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("status", { name: "Composing" })).toBeInTheDocument();

    const legacyEscapeEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true
    });
    Object.defineProperty(legacyEscapeEvent, "keyCode", { value: 229 });
    document.dispatchEvent(legacyEscapeEvent);
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("status", { name: "Composing" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("does not fire escape hook during IME composition", () => {
    const onEscapeKeyDown = vi.fn();

    render(<Toast open title="Composing" onEscapeKeyDown={onEscapeKeyDown} onOpenChange={() => {}} />);

    fireEvent.keyDown(document, { key: "Escape", isComposing: true, keyCode: 229, which: 229 });
    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(screen.getByRole("status", { name: "Composing" })).toBeInTheDocument();

    const legacyEscapeEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true
    });
    Object.defineProperty(legacyEscapeEvent, "keyCode", { value: 229 });
    document.dispatchEvent(legacyEscapeEvent);
    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(screen.getByRole("status", { name: "Composing" })).toBeInTheDocument();
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

  it("ignores modified Escape keydown before stacked-toast top dismissal", () => {
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

    fireEvent.keyDown(document, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(document, { key: "Escape", metaKey: true });
    fireEvent.keyDown(document, { key: "Escape", altKey: true });
    expect(screen.getByRole("status", { name: "First" })).toBeInTheDocument();
    expect(screen.getByRole("status", { name: "Second" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.getByRole("status", { name: "First" })).toBeInTheDocument();
    expect(screen.queryByRole("status", { name: "Second" })).toBeNull();
  });

  it("isolates Escape dismissal stacks per owner document", () => {
    const onMainOpenChange = vi.fn();
    const onSecondaryOpenChange = vi.fn();
    const secondaryDocument = document.implementation.createHTMLDocument("secondary");
    const secondaryContainer = secondaryDocument.createElement("div");
    secondaryDocument.body.appendChild(secondaryContainer);

    render(<Toast open title="Main document toast" duration={0} onOpenChange={onMainOpenChange} />);
    render(<Toast open title="Secondary document toast" duration={0} onOpenChange={onSecondaryOpenChange} />, {
      container: secondaryContainer,
      baseElement: secondaryDocument.body
    });

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onMainOpenChange).toHaveBeenCalledTimes(1);
    expect(onMainOpenChange).toHaveBeenCalledWith(false);
    expect(onSecondaryOpenChange).not.toHaveBeenCalled();

    secondaryDocument.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    expect(onSecondaryOpenChange).toHaveBeenCalledTimes(1);
    expect(onSecondaryOpenChange).toHaveBeenCalledWith(false);
  });

  it("uses owner document window timers when mounted in an iframe document", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);

    const iframeWindow = iframe.contentWindow;
    const iframeDocument = iframe.contentDocument;
    if (!iframeWindow || !iframeDocument) {
      throw new Error("Expected iframe document to be available in test environment.");
    }

    const setTimeoutSpy = vi.spyOn(iframeWindow, "setTimeout");

    try {
      const container = iframeDocument.createElement("div");
      iframeDocument.body.appendChild(container);
      render(<Toast open title="Iframe timer" duration={1200} onOpenChange={() => {}} />, {
        container,
        baseElement: iframeDocument.body
      });

      expect(setTimeoutSpy).toHaveBeenCalled();
    } finally {
      setTimeoutSpy.mockRestore();
      iframe.remove();
    }
  });

  it("clears iframe window timers when toast closes early", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);

    const iframeWindow = iframe.contentWindow;
    const iframeDocument = iframe.contentDocument;
    if (!iframeWindow || !iframeDocument) {
      throw new Error("Expected iframe document to be available in test environment.");
    }

    const clearTimeoutSpy = vi.spyOn(iframeWindow, "clearTimeout");

    try {
      const container = iframeDocument.createElement("div");
      iframeDocument.body.appendChild(container);
      const view = render(<Toast open title="Iframe timer clear" duration={1200} onOpenChange={() => {}} />, {
        container,
        baseElement: iframeDocument.body
      });

      fireEvent.click(view.getByRole("button", { name: "Close toast" }));
      expect(clearTimeoutSpy).toHaveBeenCalled();
    } finally {
      clearTimeoutSpy.mockRestore();
      iframe.remove();
    }
  });

  it("exposes Escape shortcut only for the current top escapable toast", async () => {
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

    const first = screen.getByRole("status", { name: "First" });
    const second = screen.getByRole("status", { name: "Second" });

    await waitFor(() => {
      expect(first).not.toHaveAttribute("aria-keyshortcuts");
      expect(second).toHaveAttribute("aria-keyshortcuts", "Escape");
    });

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByRole("status", { name: "Second" })).toBeNull();
      expect(screen.getByRole("status", { name: "First" })).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
  });

  it("reassigns Escape shortcut when the top toast unmounts outside close callbacks", async () => {
    function StackedToasts() {
      const [baseOpen, setBaseOpen] = React.useState(true);
      const [topMounted, setTopMounted] = React.useState(true);

      return (
        <>
          <button type="button" onClick={() => setTopMounted(false)}>
            Unmount top toast
          </button>
          <Toast open={baseOpen} title="Base" duration={0} onOpenChange={setBaseOpen} />
          {topMounted ? <Toast open title="Top" duration={0} onOpenChange={() => {}} /> : null}
        </>
      );
    }

    render(<StackedToasts />);

    const baseToast = screen.getByRole("status", { name: "Base" });
    const topToast = screen.getByRole("status", { name: "Top" });

    await waitFor(() => {
      expect(baseToast).not.toHaveAttribute("aria-keyshortcuts");
      expect(topToast).toHaveAttribute("aria-keyshortcuts", "Escape");
    });

    fireEvent.click(screen.getByRole("button", { name: "Unmount top toast" }));

    await waitFor(() => {
      expect(screen.queryByRole("status", { name: "Top" })).toBeNull();
      expect(screen.getByRole("status", { name: "Base" })).toHaveAttribute("aria-keyshortcuts", "Escape");
    });

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("status", { name: "Base" })).toBeNull();
  });

  it("adds visible offset for older toasts in the same viewport corner", async () => {
    function StackedToasts() {
      const [firstOpen, setFirstOpen] = React.useState(true);
      const [secondOpen, setSecondOpen] = React.useState(true);

      return (
        <>
          <Toast open={firstOpen} title="First" duration={0} position="bottom-right" onOpenChange={setFirstOpen} />
          <Toast open={secondOpen} title="Second" duration={0} position="bottom-right" onOpenChange={setSecondOpen} />
        </>
      );
    }

    render(<StackedToasts />);

    const firstToast = screen.getByRole("status", { name: "First" });
    const secondToast = screen.getByRole("status", { name: "Second" });

    await waitFor(() => {
      expect(firstToast.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px");
      expect(secondToast.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px");
    });
  });

  it("reassigns visual and escape stacks when toast position changes at runtime", async () => {
    function PositionSwitchingToasts() {
      const [movingPosition, setMovingPosition] = React.useState<"bottom-right" | "top-left">(
        "bottom-right"
      );

      return (
        <>
          <button type="button" onClick={() => setMovingPosition("top-left")}>
            Move toast
          </button>
          <Toast open title="Base" duration={0} position="bottom-right" onOpenChange={() => {}} />
          <Toast open title="Moving" duration={0} position={movingPosition} onOpenChange={() => {}} />
        </>
      );
    }

    render(<PositionSwitchingToasts />);

    const baseToast = screen.getByRole("status", { name: "Base" });
    const movingToast = screen.getByRole("status", { name: "Moving" });

    await waitFor(() => {
      expect(baseToast.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px");
      expect(movingToast.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px");
      expect(baseToast).not.toHaveAttribute("aria-keyshortcuts");
      expect(movingToast).toHaveAttribute("aria-keyshortcuts", "Escape");
    });

    fireEvent.click(screen.getByRole("button", { name: "Move toast" }));

    await waitFor(() => {
      expect(baseToast.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px");
      expect(movingToast.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px");
      expect(baseToast).not.toHaveAttribute("aria-keyshortcuts");
      expect(movingToast).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
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

  it("promotes hovered toast to top of stack before Escape dismiss", () => {
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

    const firstToast = screen.getByRole("status", { name: "First" });
    fireEvent.mouseEnter(firstToast);
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

  it("emits close callback once even when timeout fires after manual close", () => {
    vi.useFakeTimers();
    const onCloseReason = vi.fn();
    const onOpenChange = vi.fn();

    try {
      render(<Toast open title="Deduped close" duration={1000} onCloseReason={onCloseReason} onOpenChange={onOpenChange} />);

      fireEvent.click(screen.getByRole("button", { name: "Close toast" }));
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      expect(onCloseReason).toHaveBeenCalledTimes(1);
      expect(onCloseReason).toHaveBeenCalledWith("close-button");
      expect(onOpenChange).toHaveBeenCalledTimes(1);
      expect(onOpenChange).toHaveBeenCalledWith(false);
    } finally {
      vi.useRealTimers();
    }
  });

  it("emits close callbacks once when close button and Escape fire back-to-back", () => {
    const onCloseReason = vi.fn();
    const onOpenChange = vi.fn();

    render(<Toast open title="Deduped close" duration={0} onCloseReason={onCloseReason} onOpenChange={onOpenChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Close toast" }));
    fireEvent.keyDown(document, { key: "Escape" });

    expect(onCloseReason).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenCalledWith("close-button");
    expect(onOpenChange).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("closes the most recent escapable toast when top-most toast disables Escape", () => {
    function StackedToasts() {
      const [firstOpen, setFirstOpen] = React.useState(true);
      const [secondOpen, setSecondOpen] = React.useState(true);

      return (
        <>
          <Toast open={firstOpen} title="Escapable" duration={0} onOpenChange={setFirstOpen} />
          <Toast open={secondOpen} title="Pinned" duration={0} closeOnEscape={false} onOpenChange={setSecondOpen} />
        </>
      );
    }

    render(<StackedToasts />);
    expect(screen.getByRole("status", { name: "Escapable" })).toHaveAttribute("aria-keyshortcuts", "Escape");
    expect(screen.getByRole("status", { name: "Pinned" })).not.toHaveAttribute("aria-keyshortcuts");

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("status", { name: "Escapable" })).toBeNull();
    expect(screen.getByRole("status", { name: "Pinned" })).toBeInTheDocument();
  });

  it("recomputes Escape shortcut hints when stacked toast closeOnEscape changes at runtime", async () => {
    function StackedToasts() {
      const [topCloseOnEscape, setTopCloseOnEscape] = React.useState(false);

      return (
        <>
          <button type="button" onClick={() => setTopCloseOnEscape((current) => !current)}>
            Toggle top escape
          </button>
          <Toast open title="Base" duration={0} onOpenChange={() => {}} />
          <Toast open title="Top" duration={0} closeOnEscape={topCloseOnEscape} onOpenChange={() => {}} />
        </>
      );
    }

    render(<StackedToasts />);

    const baseToast = screen.getByRole("status", { name: "Base" });
    const topToast = screen.getByRole("status", { name: "Top" });
    await waitFor(() => {
      expect(baseToast).toHaveAttribute("aria-keyshortcuts", "Escape");
      expect(topToast).not.toHaveAttribute("aria-keyshortcuts");
    });

    fireEvent.click(screen.getByRole("button", { name: "Toggle top escape" }));

    await waitFor(() => {
      expect(baseToast).not.toHaveAttribute("aria-keyshortcuts");
      expect(topToast).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
  });

  it("shows close button focus ring only for focus-visible state", () => {
    render(<Toast open title="Focusable" duration={0} />);

    const closeButton = screen.getByRole("button", { name: "Close toast" });
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

  it("preserves close-button focus ring on non-primary pointer down", () => {
    render(<Toast open title="Secondary pointer" duration={0} />);

    const closeButton = screen.getByRole("button", { name: "Close toast" });
    const nativeMatches = closeButton.matches.bind(closeButton);
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation((selector) => {
      if (selector === ":focus-visible") {
        return true;
      }

      return nativeMatches(selector);
    });

    fireEvent.focus(closeButton);
    expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.mouseDown(closeButton, { button: 2 });
    expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.mouseDown(closeButton, { button: 0, ctrlKey: true });
    expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
    matchesSpy.mockRestore();
  });

  it("applies pressed transform only for primary-button pointer down and clears on pointer up", () => {
    render(<Toast open title="Pressable" duration={0} />);

    const closeButton = screen.getByRole("button", { name: "Close toast" });
    fireEvent.mouseDown(closeButton, { button: 2 });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.mouseDown(closeButton, { button: 0, ctrlKey: true });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.mouseDown(closeButton);
    expect(closeButton.getAttribute("style")).toContain("translateY(1px)");

    fireEvent.mouseUp(closeButton);
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");
  });

  it("clears pressed transform when close button pointer interaction is canceled", () => {
    render(<Toast open title="Cancelable press" duration={0} />);

    const closeButton = screen.getByRole("button", { name: "Close toast" });
    fireEvent.mouseDown(closeButton, { button: 0 });
    expect(closeButton.getAttribute("style")).toContain("translateY(1px)");

    fireEvent.pointerCancel(closeButton);
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");
  });

  it("applies pressed transform for non-mouse primary pointer interactions", () => {
    render(<Toast open title="Touch pressable" duration={0} />);

    const closeButton = screen.getByRole("button", { name: "Close toast" });
    fireEvent.pointerDown(closeButton, { pointerType: "touch", button: 0 });
    expect(closeButton.getAttribute("style")).toContain("translateY(1px)");

    fireEvent.pointerUp(closeButton, { pointerType: "touch", button: 0 });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.pointerDown(closeButton, { pointerType: "touch", button: -1 });
    expect(closeButton.getAttribute("style")).toContain("translateY(1px)");
    fireEvent.pointerUp(closeButton, { pointerType: "touch", button: -1 });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");
  });

  it("applies pressed transform for unmodified keyboard activation keys and ignores modified chords", () => {
    render(<Toast open title="Keyboard pressable" duration={0} />);

    const closeButton = screen.getByRole("button", { name: "Close toast" });

    fireEvent.keyDown(closeButton, { key: "Enter" });
    expect(closeButton.getAttribute("style")).toContain("translateY(1px)");
    fireEvent.keyUp(closeButton, { key: "Enter" });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.keyDown(closeButton, { key: "Enter", ctrlKey: true });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");
    fireEvent.keyUp(closeButton, { key: "Enter", ctrlKey: true });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.keyDown(closeButton, { key: "Enter", repeat: true });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.keyDown(closeButton, { key: "Spacebar" });
    expect(closeButton.getAttribute("style")).toContain("translateY(1px)");
    fireEvent.keyUp(closeButton, { key: "Spacebar" });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.keyDown(closeButton, { key: "Space" });
    expect(closeButton.getAttribute("style")).toContain("translateY(1px)");
    fireEvent.keyUp(closeButton, { key: "Space" });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.keyDown(closeButton, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");

    fireEvent.keyDown(closeButton, { key: "Enter", keyCode: 229, which: 229 });
    expect(closeButton.getAttribute("style")).toContain("translateY(0)");
  });

  it("exposes close-button keyboard shortcut hints for Enter/Space activation", () => {
    render(<Toast open title="Shortcut hints" duration={0} />);
    expect(screen.getByRole("button", { name: "Close toast" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Enter Space"
    );
  });

  it("applies close-button hover visuals and keyboard-intended focus fallback when focus-visible is unavailable", () => {
    render(<Toast open title="Hover + fallback" duration={0} />);

    const closeButton = screen.getByRole("button", { name: "Close toast" });
    const defaultBackground = closeButton.style.background;
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation(() => {
      throw new Error("focus-visible is unsupported");
    });

    fireEvent.mouseEnter(closeButton);
    expect(closeButton.style.background).not.toBe(defaultBackground);

    fireEvent.mouseLeave(closeButton);
    expect(closeButton.style.background).toBe(defaultBackground);

    fireEvent.mouseDown(closeButton);
    fireEvent.focus(closeButton);
    expect(closeButton.style.boxShadow).toBe("none");

    fireEvent.blur(closeButton);
    fireEvent.keyDown(closeButton, { key: "Tab" });
    fireEvent.focus(closeButton);
    expect(closeButton.style.boxShadow).toContain("0 0 0 3px");
    matchesSpy.mockRestore();
  });

  it("falls back to keyboard intent when close-button :focus-visible returns false", () => {
    render(<Toast open title="Focus fallback false" duration={0} />);

    const closeButton = screen.getByRole("button", { name: "Close toast" });
    const nativeMatches = closeButton.matches.bind(closeButton);
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation((selector) => {
      if (selector === ":focus-visible") {
        return false;
      }

      return nativeMatches(selector);
    });

    fireEvent.mouseDown(closeButton, { button: 0 });
    fireEvent.focus(closeButton);
    expect(closeButton.style.boxShadow).toBe("none");

    fireEvent.blur(closeButton);
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(closeButton);
    expect(closeButton.style.boxShadow).toContain("0 0 0 3px");

    matchesSpy.mockRestore();
  });

  it("restores close-button focus fallback after pointer intent when keyboard intent is tracked on document", () => {
    render(<Toast open title="Keyboard re-entry" duration={0} />);

    const closeButton = screen.getByRole("button", { name: "Close toast" });
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation(() => {
      throw new Error("focus-visible is unsupported");
    });

    fireEvent.mouseDown(closeButton);
    fireEvent.focus(closeButton);
    expect(closeButton.style.boxShadow).toBe("none");

    fireEvent.blur(closeButton);
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(closeButton);
    expect(closeButton.style.boxShadow).toContain("0 0 0 3px");

    fireEvent.blur(closeButton);
    fireEvent.mouseDown(document.body, { button: 2 });
    fireEvent.focus(closeButton);
    expect(closeButton.style.boxShadow).toContain("0 0 0 3px");

    fireEvent.blur(closeButton);
    fireEvent.mouseDown(document.body, { button: 0, ctrlKey: true });
    fireEvent.focus(closeButton);
    expect(closeButton.style.boxShadow).toContain("0 0 0 3px");

    fireEvent.blur(closeButton);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(closeButton);
    expect(closeButton.style.boxShadow).toBe("none");
    matchesSpy.mockRestore();
  });

  it("restores close-button focus fallback for iframe-hosted toasts after ownerDocument keyboard intent", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeWindow = iframe.contentWindow;
    const iframeDocument = iframe.contentDocument;
    if (!iframeWindow || !iframeDocument) {
      throw new Error("Expected iframe document to be available in test environment.");
    }

    const container = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(container);
    const { getByRole, unmount } = render(<Toast open title="Iframe keyboard re-entry" duration={0} />, {
      container,
      baseElement: iframeDocument.body
    });

    const closeButton = getByRole("button", { name: "Close toast" });
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation(() => {
      throw new Error("focus-visible is unsupported");
    });

    try {
      iframeDocument.dispatchEvent(new iframeWindow.MouseEvent("mousedown", { bubbles: true, button: 0 }));
      fireEvent.focus(closeButton);
      expect(closeButton.style.boxShadow).toBe("none");

      fireEvent.blur(closeButton);
      iframeDocument.dispatchEvent(new iframeWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true }));
      fireEvent.focus(closeButton);
      expect(closeButton.style.boxShadow).toContain("0 0 0 3px");

      fireEvent.blur(closeButton);
      iframeDocument.dispatchEvent(
        new iframeWindow.MouseEvent("mousedown", { bubbles: true, button: 0, ctrlKey: true })
      );
      fireEvent.focus(closeButton);
      expect(closeButton.style.boxShadow).toContain("0 0 0 3px");

      fireEvent.blur(closeButton);
      iframeDocument.dispatchEvent(new iframeWindow.MouseEvent("mousedown", { bubbles: true, button: 0 }));
      fireEvent.focus(closeButton);
      expect(closeButton.style.boxShadow).toBe("none");
    } finally {
      unmount();
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });
});
