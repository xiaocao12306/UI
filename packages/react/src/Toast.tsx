import * as React from "react";
import { hasActiveDismissableLayer } from "@aurora-ui/primitives";

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
  ariaLabelledBy?: string;
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
const interactiveAriaRoles = new Set([
  "button",
  "link",
  "menuitem",
  "option",
  "tab",
  "checkbox",
  "switch",
  "radio",
  "textbox",
  "combobox",
  "spinbutton",
  "treeitem"
]);

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
  ariaLabelledBy,
  position = "bottom-right",
  onClose,
  onCloseReason,
  onOpenChange
}: ToastProps) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const warnedMissingAriaLabelRef = React.useRef(false);
  const closeButtonFocusIntentRef = React.useRef(true);
  const closeRequestedRef = React.useRef(false);
  const timeoutRef = React.useRef<number | null>(null);
  const timerWindowRef = React.useRef<Window | null>(null);
  const timerStartedAtRef = React.useRef(0);
  const hasActionContent = hasRenderableToastNode(action);
  const hasActionAffordance = hasInteractiveToastActionNode(action);
  const resolvedDuration = duration ?? (hasActionAffordance ? 0 : 4000);
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
  const hasDescriptionContent = hasRenderableToastNode(description);
  const resolvedAriaLabelledBy =
    typeof ariaLabelledBy === "string" && ariaLabelledBy.trim().length > 0
      ? ariaLabelledBy.trim()
      : undefined;
  const explicitAriaLabel =
    resolvedAriaLabelledBy === undefined &&
    typeof ariaLabel === "string" &&
    ariaLabel.trim().length > 0
      ? ariaLabel.trim()
      : undefined;
  const hasReadableTitleText = hasReadableTextNode(title);
  const resolvedAriaLabel = resolvedAriaLabelledBy
    ? undefined
    : explicitAriaLabel ?? (hasReadableTitleText ? undefined : "Toast");
  const resolvedCloseLabel =
    typeof closeLabel === "string" && closeLabel.trim().length > 0
      ? closeLabel.trim()
      : "Close toast";

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
    const markPointerIntent = (event: Event) => {
      if ("button" in event && !isPrimaryPointerButton((event as MouseEvent | PointerEvent).button)) {
        return;
      }
      if ("ctrlKey" in event && event.ctrlKey) {
        return;
      }
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
      const timerWindow = timerWindowRef.current ?? window;
      timerWindow.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    timerWindowRef.current = null;
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
      const ownerWindow = rootRef.current?.ownerDocument.defaultView ?? window;
      timerWindowRef.current = ownerWindow;
      timeoutRef.current = ownerWindow.setTimeout(() => {
        timeoutRef.current = null;
        timerWindowRef.current = null;
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

      if (event.altKey || event.ctrlKey || event.metaKey) {
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

      if (hasActiveDismissableLayer(element.ownerDocument)) {
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

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const hasExplicitName = Boolean(explicitAriaLabel || resolvedAriaLabelledBy);
    if (hasExplicitName || hasReadableTitleText) {
      warnedMissingAriaLabelRef.current = false;
      return;
    }

    if (warnedMissingAriaLabelRef.current) {
      return;
    }
    warnedMissingAriaLabelRef.current = true;

    console.warn(
      "[Toast] Non-text titles should provide ariaLabel or ariaLabelledBy so notification name remains accessible."
    );
  }, [explicitAriaLabel, hasReadableTitleText, resolvedAriaLabelledBy]);

  if (!open) {
    return null;
  }

  const role = hasActionAffordance
    ? (tone === "danger" ? "alertdialog" : "dialog")
    : tone === "danger"
      ? "alert"
      : "status";
  const ariaLive = hasActionAffordance ? undefined : (live ?? (tone === "danger" ? "assertive" : "polite"));

  return (
    <div
      data-aurora-reduced-motion="transition"
      ref={rootRef}
      role={role}
      data-close-on-escape={closeOnEscape ? "true" : "false"}
      aria-modal={hasActionAffordance ? "false" : undefined}
      aria-live={ariaLive}
      aria-atomic="true"
      aria-keyshortcuts={showEscapeKeyShortcuts ? "Escape" : undefined}
      aria-label={resolvedAriaLabel}
      aria-labelledby={resolvedAriaLabelledBy ?? (resolvedAriaLabel ? undefined : titleId)}
      aria-describedby={hasDescriptionContent ? descriptionId : undefined}
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
          data-aurora-reduced-motion="transition"
          type="button"
          onClick={closeByButton}
          aria-label={resolvedCloseLabel}
          aria-keyshortcuts="Enter Space"
          onMouseEnter={() => {
            setCloseButtonHovered(true);
          }}
          onMouseLeave={() => {
            setCloseButtonHovered(false);
            setCloseButtonPressed(false);
          }}
          onPointerDown={(event) => {
            if (event.ctrlKey) {
              return;
            }
            if (!isPrimaryPointerButton(event.button)) {
              return;
            }
            closeButtonFocusIntentRef.current = false;
            setCloseButtonFocusVisible(false);
            setCloseButtonPressed(true);
          }}
          onPointerUp={(event) => {
            if (isPrimaryPointerButton(event.button)) {
              setCloseButtonPressed(false);
            }
          }}
          onMouseDown={(event) => {
            if (event.button !== 0 || event.ctrlKey) {
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
          onPointerCancel={() => {
            setCloseButtonPressed(false);
          }}
          onKeyDown={(event) => {
            closeButtonFocusIntentRef.current = true;
            if (event.defaultPrevented) {
              return;
            }
            if (isComposingToastCloseButtonActivationEvent(event)) {
              return;
            }
            if (
              isToastCloseButtonActivationKey(event.key) &&
              !isModifiedToastCloseButtonActivationChord(event) &&
              !event.repeat
            ) {
              setCloseButtonPressed(true);
            }
          }}
          onKeyUp={(event) => {
            if (isToastCloseButtonActivationKey(event.key)) {
              setCloseButtonPressed(false);
            }
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
      {hasDescriptionContent ? (
        <div id={descriptionId} style={{ color: "var(--aurora-text-secondary)" }}>
          {description}
        </div>
      ) : null}
      {hasActionContent ? <div>{action}</div> : null}
    </div>
  );
}

function resolveFocusVisibleState(target: HTMLButtonElement, fallback: boolean) {
  try {
    return target.matches(":focus-visible") || fallback;
  } catch {
    return fallback;
  }
}

function isToastCloseButtonActivationKey(key: string) {
  return key === "Enter" || key === " " || key === "Space" || key === "Spacebar";
}

function isModifiedToastCloseButtonActivationChord(event: React.KeyboardEvent<HTMLButtonElement>) {
  return event.ctrlKey || event.metaKey || event.altKey;
}

function isComposingToastCloseButtonActivationEvent(event: React.KeyboardEvent<HTMLButtonElement>) {
  const nativeEvent = event.nativeEvent;
  if (nativeEvent.isComposing) {
    return true;
  }

  return typeof nativeEvent.keyCode === "number" && nativeEvent.keyCode === 229;
}

function isPrimaryPointerButton(button: number | undefined) {
  return typeof button !== "number" || button <= 0;
}

function hasReadableTextNode(node: React.ReactNode): boolean {
  if (typeof node === "string") {
    return node.trim().length > 0;
  }

  if (typeof node === "number") {
    return true;
  }

  if (Array.isArray(node)) {
    return node.some((child) => hasReadableTextNode(child));
  }

  if (!React.isValidElement(node)) {
    return false;
  }

  const elementProps = node.props as {
    children?: React.ReactNode;
    "aria-hidden"?: boolean | "true" | "false";
    "aria-label"?: string;
  };

  if (elementProps["aria-hidden"] === true || elementProps["aria-hidden"] === "true") {
    return false;
  }

  if (typeof elementProps["aria-label"] === "string" && elementProps["aria-label"].trim().length > 0) {
    return true;
  }

  return hasReadableTextNode(elementProps.children);
}

function hasRenderableToastNode(node: React.ReactNode): boolean {
  if (node === null || node === undefined || typeof node === "boolean") {
    return false;
  }

  if (typeof node === "string") {
    return node.trim().length > 0;
  }

  if (typeof node === "number") {
    return true;
  }

  if (Array.isArray(node)) {
    return node.some((item) => hasRenderableToastNode(item));
  }

  return React.isValidElement(node);
}

function hasInteractiveToastActionNode(node: React.ReactNode): boolean {
  if (node === null || node === undefined || typeof node === "boolean") {
    return false;
  }

  if (typeof node === "string" || typeof node === "number") {
    return false;
  }

  if (Array.isArray(node)) {
    return node.some((item) => hasInteractiveToastActionNode(item));
  }

  if (!React.isValidElement(node)) {
    return false;
  }

  const elementProps = node.props as {
    children?: React.ReactNode;
    disabled?: boolean;
    "aria-disabled"?: boolean | "true" | "false";
    role?: string;
    href?: string;
    to?: string;
    target?: string;
    tabIndex?: number;
    contentEditable?: boolean;
    onClick?: ((event: unknown) => void) | undefined;
    onKeyDown?: ((event: unknown) => void) | undefined;
    onKeyUp?: ((event: unknown) => void) | undefined;
    onKeyPress?: ((event: unknown) => void) | undefined;
    onMouseDown?: ((event: unknown) => void) | undefined;
    onPointerDown?: ((event: unknown) => void) | undefined;
    onTouchStart?: ((event: unknown) => void) | undefined;
  };

  if (node.type === React.Fragment) {
    return hasInteractiveToastActionNode(elementProps.children);
  }

  if (typeof node.type === "string") {
    if (isInteractiveNativeActionElement(node.type, elementProps)) {
      return true;
    }

    if (hasInteractiveActionProps(elementProps)) {
      return true;
    }

    return hasInteractiveToastActionNode(elementProps.children);
  }

  if (hasInteractiveActionProps(elementProps)) {
    return true;
  }

  return hasInteractiveToastActionNode(elementProps.children);
}

function isInteractiveNativeActionElement(
  elementType: string,
  props: {
    disabled?: boolean;
    "aria-disabled"?: boolean | "true" | "false";
    href?: string;
    target?: string;
    tabIndex?: number;
  }
) {
  if (isActionElementDisabled(props)) {
    return false;
  }

  const normalizedElementType = elementType.toLowerCase();
  if (normalizedElementType === "button") {
    return true;
  }

  if (
    normalizedElementType === "input" ||
    normalizedElementType === "select" ||
    normalizedElementType === "textarea"
  ) {
    return true;
  }

  if (normalizedElementType === "a") {
    return (
      (typeof props.href === "string" && props.href.trim().length > 0) ||
      typeof props.target === "string"
    );
  }

  return false;
}

function hasInteractiveActionProps(props: {
  disabled?: boolean;
  "aria-disabled"?: boolean | "true" | "false";
  role?: string;
  href?: string;
  to?: string;
  tabIndex?: number;
  contentEditable?: boolean;
  onClick?: ((event: unknown) => void) | undefined;
  onKeyDown?: ((event: unknown) => void) | undefined;
  onKeyUp?: ((event: unknown) => void) | undefined;
  onKeyPress?: ((event: unknown) => void) | undefined;
  onMouseDown?: ((event: unknown) => void) | undefined;
  onPointerDown?: ((event: unknown) => void) | undefined;
  onTouchStart?: ((event: unknown) => void) | undefined;
}) {
  if (isActionElementDisabled(props)) {
    return false;
  }

  const hasInteractiveRole = isInteractiveRole(props.role);
  const hasInteractiveEventHandler =
    typeof props.onClick === "function" ||
    typeof props.onKeyDown === "function" ||
    typeof props.onKeyUp === "function" ||
    typeof props.onKeyPress === "function" ||
    typeof props.onMouseDown === "function" ||
    typeof props.onPointerDown === "function" ||
    typeof props.onTouchStart === "function";
  const hasNavigationTarget =
    (typeof props.href === "string" && props.href.trim().length > 0) ||
    (typeof props.to === "string" && props.to.trim().length > 0);
  const hasFocusableTabIndex = typeof props.tabIndex === "number" && props.tabIndex >= 0;

  if (hasInteractiveRole || hasNavigationTarget || props.contentEditable === true) {
    return true;
  }

  if (hasInteractiveEventHandler) {
    return true;
  }

  return hasFocusableTabIndex && (hasInteractiveRole || hasInteractiveEventHandler);
}

function isActionElementDisabled(props: {
  disabled?: boolean;
  "aria-disabled"?: boolean | "true" | "false";
}) {
  return (
    props.disabled === true ||
    props["aria-disabled"] === true ||
    props["aria-disabled"] === "true"
  );
}

function isInteractiveRole(role: string | undefined) {
  if (typeof role !== "string") {
    return false;
  }

  return role
    .split(/\s+/)
    .some((token) => interactiveAriaRoles.has(token.trim().toLowerCase()));
}
