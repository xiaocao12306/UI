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

type ToastDocumentState = {
  escapeStack: HTMLElement[];
  visualStacks: Record<ToastPosition, HTMLElement[]>;
  listeners: Set<() => void>;
};

const toastVisualStackOffset = 14;
const toastStateByDocument = new WeakMap<Document, ToastDocumentState>();

function createToastVisualStacks(): Record<ToastPosition, HTMLElement[]> {
  return {
    "bottom-right": [],
    "bottom-left": [],
    "top-right": [],
    "top-left": []
  };
}

function getToastDocumentState(ownerDocument: Document): ToastDocumentState {
  const existingState = toastStateByDocument.get(ownerDocument);
  if (existingState) {
    return existingState;
  }

  const nextState: ToastDocumentState = {
    escapeStack: [],
    visualStacks: createToastVisualStacks(),
    listeners: new Set()
  };
  toastStateByDocument.set(ownerDocument, nextState);
  return nextState;
}

function notifyToastStackChanged(ownerDocument: Document) {
  const state = getToastDocumentState(ownerDocument);
  state.listeners.forEach((listener) => {
    listener();
  });
}

function subscribeToastStack(ownerDocument: Document, listener: () => void) {
  const state = getToastDocumentState(ownerDocument);
  state.listeners.add(listener);
  return () => {
    state.listeners.delete(listener);
  };
}

function pushToastToStack(ownerDocument: Document, element: HTMLElement) {
  const state = getToastDocumentState(ownerDocument);
  const existingIndex = state.escapeStack.lastIndexOf(element);
  if (existingIndex >= 0) {
    state.escapeStack.splice(existingIndex, 1);
  }
  state.escapeStack.push(element);
  notifyToastStackChanged(ownerDocument);
}

function removeToastFromStack(ownerDocument: Document, element: HTMLElement) {
  const state = getToastDocumentState(ownerDocument);
  const existingIndex = state.escapeStack.lastIndexOf(element);
  if (existingIndex >= 0) {
    state.escapeStack.splice(existingIndex, 1);
    notifyToastStackChanged(ownerDocument);
  }
}

function updateToastVisualStackStyles(state: ToastDocumentState, position: ToastPosition) {
  const stack = state.visualStacks[position];
  const direction = position.startsWith("bottom") ? -1 : 1;
  stack.forEach((entry, index) => {
    const distanceFromTop = stack.length - 1 - index;
    entry.style.setProperty("--aurora-toast-stack-offset", `${distanceFromTop * direction * toastVisualStackOffset}px`);
  });
}

function pushToastToVisualStack(ownerDocument: Document, element: HTMLElement, position: ToastPosition) {
  const state = getToastDocumentState(ownerDocument);
  const stack = state.visualStacks[position];
  const existingIndex = stack.lastIndexOf(element);
  if (existingIndex >= 0) {
    stack.splice(existingIndex, 1);
  }
  stack.push(element);
  updateToastVisualStackStyles(state, position);
}

function removeToastFromVisualStack(ownerDocument: Document, element: HTMLElement, position: ToastPosition) {
  const state = getToastDocumentState(ownerDocument);
  const stack = state.visualStacks[position];
  const existingIndex = stack.lastIndexOf(element);
  element.style.removeProperty("--aurora-toast-stack-offset");
  if (existingIndex < 0) {
    return;
  }

  stack.splice(existingIndex, 1);
  updateToastVisualStackStyles(state, position);
}

function isTopCloseableToast(ownerDocument: Document, element: HTMLElement) {
  const state = getToastDocumentState(ownerDocument);
  for (let index = state.escapeStack.length - 1; index >= 0; index -= 1) {
    const entry = state.escapeStack[index];
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
  duration,
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
  const hasAction = React.Children.toArray(action).length > 0;
  const resolvedDuration = duration ?? (hasAction ? 0 : 4000);
  const remainingDurationRef = React.useRef(resolvedDuration);
  const [documentHidden, setDocumentHidden] = React.useState(false);
  const [pauseState, setPauseState] = React.useState({ hover: false, focus: false });
  const [closeButtonHovered, setCloseButtonHovered] = React.useState(false);
  const [closeButtonPressed, setCloseButtonPressed] = React.useState(false);
  const [closeButtonFocusVisible, setCloseButtonFocusVisible] = React.useState(false);
  const [showEscapeKeyShortcuts, setShowEscapeKeyShortcuts] = React.useState(false);
  const paused = documentHidden || (pauseOnHover && (pauseState.hover || pauseState.focus));
  const titleId = React.useId();
  const descriptionId = React.useId();

  const updateEscapeKeyShortcutsVisibility = React.useCallback(() => {
    const element = rootRef.current;
    setShowEscapeKeyShortcuts(
      Boolean(
        open &&
          closeOnEscape &&
          element &&
          isTopCloseableToast(element.ownerDocument, element)
      )
    );
  }, [closeOnEscape, open]);

  React.useEffect(() => {
    updateEscapeKeyShortcutsVisibility();
  }, [updateEscapeKeyShortcutsVisibility]);

  React.useEffect(() => {
    const ownerDocument = rootRef.current?.ownerDocument;
    if (!ownerDocument) {
      return;
    }

    return subscribeToastStack(ownerDocument, updateEscapeKeyShortcutsVisibility);
  }, [updateEscapeKeyShortcutsVisibility]);

  React.useEffect(() => {
    const element = rootRef.current;
    if (!open || !element) {
      return;
    }

    const ownerDocument = element.ownerDocument;
    pushToastToStack(ownerDocument, element);
    pushToastToVisualStack(ownerDocument, element, position);
    return () => {
      removeToastFromStack(ownerDocument, element);
      removeToastFromVisualStack(ownerDocument, element, position);
    };
  }, [open, position]);

  React.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }

    notifyToastStackChanged(rootRef.current.ownerDocument);
  }, [closeOnEscape, open]);

  React.useEffect(() => {
    if (!open) {
      setPauseState({ hover: false, focus: false });
      setDocumentHidden(false);
    }
    closeRequestedRef.current = false;
  }, [open]);

  React.useEffect(() => {
    if (!open) {
      return;
    }

    const ownerDocument = rootRef.current?.ownerDocument ?? document;
    const syncVisibilityState = () => {
      setDocumentHidden(ownerDocument.visibilityState === "hidden");
    };

    syncVisibilityState();
    ownerDocument.addEventListener("visibilitychange", syncVisibilityState);
    return () => {
      ownerDocument.removeEventListener("visibilitychange", syncVisibilityState);
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) {
      return;
    }

    const ownerDocument = rootRef.current?.ownerDocument ?? document;
    const markKeyboardIntent = (event: KeyboardEvent) => {
      if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
      }
      closeButtonFocusIntentRef.current = true;
    };
    const markPointerIntent = () => {
      closeButtonFocusIntentRef.current = false;
    };

    ownerDocument.addEventListener("keydown", markKeyboardIntent, true);
    ownerDocument.addEventListener("pointerdown", markPointerIntent, true);
    ownerDocument.addEventListener("mousedown", markPointerIntent, true);
    ownerDocument.addEventListener("touchstart", markPointerIntent, true);

    return () => {
      ownerDocument.removeEventListener("keydown", markKeyboardIntent, true);
      ownerDocument.removeEventListener("pointerdown", markPointerIntent, true);
      ownerDocument.removeEventListener("mousedown", markPointerIntent, true);
      ownerDocument.removeEventListener("touchstart", markPointerIntent, true);
    };
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
    const ownerDocument = element.ownerDocument;
    pushToastToStack(ownerDocument, element);
    pushToastToVisualStack(ownerDocument, element, position);
  }, [open, position]);

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
    remainingDurationRef.current = resolvedDuration;

    if (!open || resolvedDuration <= 0) {
      return;
    }

    startCloseTimer(resolvedDuration);
    return () => {
      clearCloseTimer();
    };
  }, [clearCloseTimer, open, resolvedDuration, startCloseTimer]);

  React.useEffect(() => {
    if (!open || resolvedDuration <= 0) {
      return;
    }

    if (paused) {
      pauseCloseTimer();
      return;
    }

    if (timeoutRef.current === null) {
      startCloseTimer(remainingDurationRef.current);
    }
  }, [open, pauseCloseTimer, pauseOnHover, paused, resolvedDuration, startCloseTimer]);

  React.useEffect(() => {
    if (!open || !closeOnEscape) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      if (event.repeat) {
        return;
      }

      if (isComposingEscapeEvent(event)) {
        return;
      }

      const element = rootRef.current;
      if (!element || !isTopCloseableToast(element.ownerDocument, element)) {
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

    const ownerDocument = rootRef.current?.ownerDocument ?? document;
    ownerDocument.addEventListener("keydown", onKeyDown);
    return () => {
      ownerDocument.removeEventListener("keydown", onKeyDown);
    };
  }, [closeByEscape, closeOnEscape, onEscapeKeyDown, open]);

  if (!open) {
    return null;
  }

  const role = hasAction ? (tone === "danger" ? "alertdialog" : "dialog") : tone === "danger" ? "alert" : "status";
  const ariaLive = hasAction ? undefined : (live ?? (tone === "danger" ? "assertive" : "polite"));

  return (
    <div
      ref={rootRef}
      role={role}
      data-close-on-escape={closeOnEscape ? "true" : "false"}
      aria-modal={hasAction ? "false" : undefined}
      aria-live={ariaLive}
      aria-atomic="true"
      aria-keyshortcuts={showEscapeKeyShortcuts ? "Escape" : undefined}
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
        transform: "translateY(var(--aurora-toast-stack-offset, 0px))",
        transition: "transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",
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
          onMouseDown={(event) => {
            if (event.button !== 0) {
              return;
            }
            closeButtonFocusIntentRef.current = false;
            setCloseButtonFocusVisible(false);
            setCloseButtonPressed(true);
          }}
          onMouseUp={(event) => {
            if (event.button !== 0) {
              return;
            }
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
      {hasAction ? <div>{action}</div> : null}
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
