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
    borderColor: "var(--aurora-feedback-info-border)",
    background: "color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",
    color: "var(--aurora-text-primary)"
  },
  success: {
    borderColor: "var(--aurora-feedback-success-border)",
    background: "color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",
    color: "var(--aurora-text-primary)"
  },
  warning: {
    borderColor: "var(--aurora-feedback-warning-border)",
    background: "color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",
    color: "var(--aurora-text-primary)"
  },
  danger: {
    borderColor: "var(--aurora-feedback-danger-border)",
    background: "color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",
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

function isTopCloseableToast(element: HTMLElement) {
  for (let index = toastEscapeStack.length - 1; index >= 0; index -= 1) {
    const entry = toastEscapeStack[index];
    if (entry?.dataset.closeOnEscape !== "true") {
      continue;
    }

    return entry === element;
  }

  return false;
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
  const closeButtonFocusIntentRef = React.useRef(true);
  const closeRequestedRef = React.useRef(false);
  const timeoutRef = React.useRef<number | null>(null);
  const timerStartedAtRef = React.useRef(0);
  const remainingDurationRef = React.useRef(duration);
  const [pauseState, setPauseState] = React.useState({ hover: false, focus: false });
  const [closeButtonHovered, setCloseButtonHovered] = React.useState(false);
  const [closeButtonPressed, setCloseButtonPressed] = React.useState(false);
  const [closeButtonFocusVisible, setCloseButtonFocusVisible] = React.useState(false);
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
    closeRequestedRef.current = false;
  }, [open]);

  const clearCloseTimer = React.useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    timerStartedAtRef.current = 0;
  }, []);

  const close = React.useCallback(
    (reason: ToastCloseReason) => {
      if (closeRequestedRef.current) {
        return;
      }

      closeRequestedRef.current = true;
      clearCloseTimer();
      onCloseReason?.(reason);
      onClose?.();
      onOpenChange?.(false);
    },
    [clearCloseTimer, onClose, onCloseReason, onOpenChange]
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

  const startCloseTimer = React.useCallback(
    (timeoutMs: number) => {
      if (timeoutMs <= 0) {
        closeByTimeout();
        return;
      }

      clearCloseTimer();
      remainingDurationRef.current = timeoutMs;
      timerStartedAtRef.current = Date.now();
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
        timerStartedAtRef.current = 0;
        remainingDurationRef.current = 0;
        closeByTimeout();
      }, timeoutMs);
    },
    [clearCloseTimer, closeByTimeout]
  );

  const pauseCloseTimer = React.useCallback(() => {
    if (timeoutRef.current === null || timerStartedAtRef.current === 0) {
      return;
    }

    const elapsed = Date.now() - timerStartedAtRef.current;
    remainingDurationRef.current = Math.max(0, remainingDurationRef.current - elapsed);
    clearCloseTimer();
  }, [clearCloseTimer]);

  React.useEffect(() => {
    clearCloseTimer();
    remainingDurationRef.current = duration;

    if (!open || duration <= 0) {
      return;
    }

    startCloseTimer(duration);
    return () => {
      clearCloseTimer();
    };
  }, [clearCloseTimer, duration, open, startCloseTimer]);

  React.useEffect(() => {
    if (!open || duration <= 0 || !pauseOnHover) {
      return;
    }

    if (paused) {
      pauseCloseTimer();
      return;
    }

    if (timeoutRef.current === null) {
      startCloseTimer(remainingDurationRef.current);
    }
  }, [duration, open, pauseCloseTimer, pauseOnHover, paused, startCloseTimer]);

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
      if (!element || !isTopCloseableToast(element)) {
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
      data-close-on-escape={closeOnEscape ? "true" : "false"}
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
          onMouseEnter={() => {
            setCloseButtonHovered(true);
          }}
          onMouseLeave={() => {
            setCloseButtonHovered(false);
            setCloseButtonPressed(false);
          }}
          onMouseDown={() => {
            closeButtonFocusIntentRef.current = false;
            setCloseButtonFocusVisible(false);
            setCloseButtonPressed(true);
          }}
          onMouseUp={() => {
            setCloseButtonPressed(false);
          }}
          onKeyDown={() => {
            closeButtonFocusIntentRef.current = true;
          }}
          onFocus={(event) => {
            setCloseButtonFocusVisible(resolveFocusVisibleState(event.currentTarget, closeButtonFocusIntentRef.current));
          }}
          onBlur={() => {
            setCloseButtonFocusVisible(false);
            setCloseButtonPressed(false);
          }}
          style={{
            borderRadius: "var(--aurora-radius-sm)",
            border:
              closeButtonHovered || closeButtonFocusVisible
                ? "1px solid var(--aurora-border-strong)"
                : "1px solid var(--aurora-border-default)",
            background: closeButtonPressed
              ? "color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))"
              : closeButtonHovered
                ? "color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))"
                : "var(--aurora-surface-elevated)",
            cursor: "pointer",
            color: closeButtonHovered ? "var(--aurora-text-primary)" : "var(--aurora-text-secondary)",
            boxShadow: closeButtonFocusVisible
              ? "0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)"
              : "none",
            width: 28,
            height: 28,
            transform: closeButtonPressed ? "translateY(1px)" : "translateY(0)",
            transition:
              "background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"
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

function resolveFocusVisibleState(target: HTMLButtonElement, fallback: boolean) {
  try {
    return target.matches(":focus-visible");
  } catch {
    return fallback;
  }
}
