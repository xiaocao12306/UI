import * as React from "react";

export type ToastTone = "info" | "success" | "warning" | "danger";
export type ToastPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";
export type ToastCloseReason = "close-button" | "escape-key" | "timeout";

export type ToastProps = {
  open: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  tone?: ToastTone;
  live?: "polite" | "assertive" | "off";
  duration?: number;
  pauseOnHover?: boolean;
  closeOnEscape?: boolean;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  closeLabel?: string;
  ariaLabel?: string;
  position?: ToastPosition;
  onClose?: () => void;
  onCloseReason?: (reason: ToastCloseReason) => void;
  onOpenChange?: (open: boolean) => void;
};

const toneStyleMap: Record<ToastTone, React.CSSProperties> = {
  info: {
    borderColor: "color-mix(in srgb, var(--aurora-accent-default) 38%, var(--aurora-border-default))",
    background: "var(--aurora-surface-overlay)",
    color: "var(--aurora-text-primary)"
  },
  success: {
    borderColor: "rgba(34, 197, 94, 0.45)",
    background: "color-mix(in srgb, rgba(34, 197, 94, 0.12) 42%, var(--aurora-surface-overlay))",
    color: "var(--aurora-text-primary)"
  },
  warning: {
    borderColor: "rgba(245, 158, 11, 0.5)",
    background: "color-mix(in srgb, rgba(245, 158, 11, 0.16) 42%, var(--aurora-surface-overlay))",
    color: "var(--aurora-text-primary)"
  },
  danger: {
    borderColor: "rgba(239, 68, 68, 0.5)",
    background: "color-mix(in srgb, rgba(239, 68, 68, 0.16) 42%, var(--aurora-surface-overlay))",
    color: "var(--aurora-text-primary)"
  }
};

const positionStyleMap: Record<ToastPosition, React.CSSProperties> = {
  "bottom-right": { right: 16, bottom: 16 },
  "bottom-left": { left: 16, bottom: 16 },
  "top-right": { right: 16, top: 16 },
  "top-left": { left: 16, top: 16 }
};

const toastEscapeStack: HTMLElement[] = [];

function pushToastToStack(element: HTMLElement) {
  const existingIndex = toastEscapeStack.lastIndexOf(element);
  if (existingIndex >= 0) {
    toastEscapeStack.splice(existingIndex, 1);
  }
  toastEscapeStack.push(element);
}

function removeToastFromStack(element: HTMLElement) {
  const existingIndex = toastEscapeStack.lastIndexOf(element);
  if (existingIndex >= 0) {
    toastEscapeStack.splice(existingIndex, 1);
  }
}

function isTopToast(element: HTMLElement) {
  return toastEscapeStack[toastEscapeStack.length - 1] === element;
}

function isComposingEscapeEvent(event: KeyboardEvent) {
  if (event.isComposing) {
    return true;
  }

  return event.keyCode === 229;
}

export function Toast({
  open,
  title,
  description,
  action,
  tone = "info",
  live,
  duration = 4000,
  pauseOnHover = true,
  closeOnEscape = true,
  onEscapeKeyDown,
  closeLabel = "Close toast",
  ariaLabel,
  position = "bottom-right",
  onClose,
  onCloseReason,
  onOpenChange
}: ToastProps) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [pauseState, setPauseState] = React.useState({ hover: false, focus: false });
  const paused = pauseOnHover && (pauseState.hover || pauseState.focus);
  const titleId = React.useId();
  const descriptionId = React.useId();

  React.useEffect(() => {
    const element = rootRef.current;
    if (!open || !element) {
      return;
    }

    pushToastToStack(element);
    return () => {
      removeToastFromStack(element);
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) {
      setPauseState({ hover: false, focus: false });
    }
  }, [open]);

  const close = React.useCallback(
    (reason: ToastCloseReason) => {
      onCloseReason?.(reason);
      onClose?.();
      onOpenChange?.(false);
    },
    [onClose, onCloseReason, onOpenChange]
  );

  const closeByButton = React.useCallback(() => {
    close("close-button");
  }, [close]);

  const closeByEscape = React.useCallback(() => {
    close("escape-key");
  }, [close]);

  const closeByTimeout = React.useCallback(() => {
    close("timeout");
  }, [close]);

  const promoteToTop = React.useCallback(() => {
    const element = rootRef.current;
    if (!open || !element) {
      return;
    }
    pushToastToStack(element);
  }, [open]);

  React.useEffect(() => {
    if (!open || duration <= 0 || (pauseOnHover && paused)) {
      return;
    }

    const timer = window.setTimeout(() => {
      closeByTimeout();
    }, duration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [closeByTimeout, duration, open, pauseOnHover, paused]);

  React.useEffect(() => {
    if (!open || !closeOnEscape) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      if (isComposingEscapeEvent(event)) {
        return;
      }

      const element = rootRef.current;
      if (!element || !isTopToast(element)) {
        return;
      }

      if (event.defaultPrevented) {
        return;
      }

      onEscapeKeyDown?.(event);
      if (event.defaultPrevented) {
        return;
      }

      event.preventDefault();
      closeByEscape();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closeByEscape, closeOnEscape, onEscapeKeyDown, open]);

  if (!open) {
    return null;
  }

  const role = tone === "danger" ? "alert" : "status";
  const ariaLive = live ?? (tone === "danger" ? "assertive" : "polite");

  return (
    <div
      ref={rootRef}
      role={role}
      aria-live={ariaLive}
      aria-atomic="true"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabel ? undefined : titleId}
      aria-describedby={description ? descriptionId : undefined}
      onMouseEnter={() => {
        promoteToTop();
        if (pauseOnHover) {
          setPauseState((current) => ({ ...current, hover: true }));
        }
      }}
      onMouseLeave={() => {
        if (pauseOnHover) {
          setPauseState((current) => ({ ...current, hover: false }));
        }
      }}
      onFocusCapture={() => {
        promoteToTop();
        if (pauseOnHover) {
          setPauseState((current) => ({ ...current, focus: true }));
        }
      }}
      onBlurCapture={(event) => {
        if (pauseOnHover && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPauseState((current) => ({ ...current, focus: false }));
        }
      }}
      style={{
        position: "fixed",
        zIndex: "var(--aurora-z-toast)",
        minWidth: 280,
        maxWidth: 420,
        borderRadius: "var(--aurora-radius-lg)",
        border: "1px solid var(--aurora-border-default)",
        boxShadow: "var(--aurora-shadow-lg)",
        padding: 12,
        display: "grid",
        gap: 8,
        ...toneStyleMap[tone],
        ...positionStyleMap[position]
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "start" }}>
        <strong id={titleId} style={{ color: "var(--aurora-text-primary)" }}>
          {title}
        </strong>
        <button
          type="button"
          onClick={closeByButton}
          aria-label={closeLabel}
          style={{
            borderRadius: "var(--aurora-radius-sm)",
            border: "1px solid var(--aurora-border-default)",
            background: "var(--aurora-surface-elevated)",
            cursor: "pointer",
            color: "var(--aurora-text-secondary)",
            width: 28,
            height: 28
          }}
        >
          ×
        </button>
      </div>
      {description ? (
        <div id={descriptionId} style={{ color: "var(--aurora-text-secondary)" }}>
          {description}
        </div>
      ) : null}
      {action ? <div>{action}</div> : null}
    </div>
  );
}
