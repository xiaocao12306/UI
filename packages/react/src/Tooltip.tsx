import * as React from "react";

export type TooltipSide = "top" | "right" | "bottom" | "left";

export type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactElement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  closeOnEscape?: boolean;
  delayDuration?: number;
  closeDelay?: number;
  side?: TooltipSide;
  sideOffset?: number;
  maxWidth?: number | string;
};

function getPositionStyle(side: TooltipSide, sideOffset: number): React.CSSProperties {
  switch (side) {
    case "top":
      return { bottom: `calc(100% + ${sideOffset}px)`, left: "50%", transform: "translateX(-50%)" };
    case "right":
      return { left: `calc(100% + ${sideOffset}px)`, top: "50%", transform: "translateY(-50%)" };
    case "left":
      return { right: `calc(100% + ${sideOffset}px)`, top: "50%", transform: "translateY(-50%)" };
    case "bottom":
    default:
      return { top: `calc(100% + ${sideOffset}px)`, left: "50%", transform: "translateX(-50%)" };
  }
}

function resolveTooltipDelay(value: number, fallback: number) {
  if (!Number.isFinite(value)) {
    return fallback;
  }

  return Math.max(0, Math.trunc(value));
}

function resolveTooltipSideOffset(value: number, fallback: number) {
  if (!Number.isFinite(value)) {
    return fallback;
  }

  return Math.trunc(value);
}

function resolveBooleanFlag(value: unknown, fallback: boolean) {
  if (typeof value !== "boolean") {
    return fallback;
  }
  return value;
}

function resolveTooltipMaxWidth(value: number | string, fallback: number) {
  if (typeof value === "number") {
    if (Number.isFinite(value) && value >= 0) {
      return value;
    }

    return fallback;
  }

  const normalizedValue = value.trim();
  if (normalizedValue.length > 0) {
    return normalizedValue;
  }

  return fallback;
}

export function Tooltip({
  content,
  children,
  open,
  defaultOpen,
  onOpenChange,
  disabled = false,
  closeOnEscape = true,
  delayDuration = 250,
  closeDelay = 80,
  side = "top",
  sideOffset = 8,
  maxWidth = 320
}: TooltipProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen ?? false);
  const tooltipId = React.useId();
  const rootRef = React.useRef<HTMLSpanElement | null>(null);
  const openTimerRef = React.useRef<number | null>(null);
  const closeTimerRef = React.useRef<number | null>(null);
  const openTimerWindowRef = React.useRef<Window | null>(null);
  const closeTimerWindowRef = React.useRef<Window | null>(null);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const warnedMissingTriggerNameRef = React.useRef(false);
  const safeDelayDuration = resolveTooltipDelay(delayDuration, 250);
  const safeCloseDelay = resolveTooltipDelay(closeDelay, 80);
  const safeSideOffset = resolveTooltipSideOffset(sideOffset, 8);
  const safeMaxWidth = resolveTooltipMaxWidth(maxWidth, 320);
  const resolvedDisabled = resolveBooleanFlag(disabled, false);
  const resolvedCloseOnEscape = resolveBooleanFlag(closeOnEscape, true);

  const getOwnerWindow = React.useCallback(
    () => rootRef.current?.ownerDocument.defaultView ?? window,
    []
  );

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (resolvedDisabled && nextOpen) {
        return;
      }
      if (isOpen === nextOpen) {
        return;
      }
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [resolvedDisabled, isControlled, isOpen, onOpenChange]
  );

  const clearTimers = React.useCallback(() => {
    if (openTimerRef.current !== null) {
      (openTimerWindowRef.current ?? getOwnerWindow()).clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
      openTimerWindowRef.current = null;
    }
    if (closeTimerRef.current !== null) {
      (closeTimerWindowRef.current ?? getOwnerWindow()).clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
      closeTimerWindowRef.current = null;
    }
  }, [getOwnerWindow]);

  const closeImmediately = React.useCallback(() => {
    clearTimers();
    setOpen(false);
  }, [clearTimers, setOpen]);

  const openImmediately = React.useCallback(() => {
    if (resolvedDisabled) {
      return;
    }
    if (closeTimerRef.current !== null) {
      (closeTimerWindowRef.current ?? getOwnerWindow()).clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
      closeTimerWindowRef.current = null;
    }
    setOpen(true);
  }, [resolvedDisabled, getOwnerWindow, setOpen]);

  const scheduleOpen = React.useCallback(() => {
    if (resolvedDisabled) {
      return;
    }
    const ownerWindow = getOwnerWindow();
    if (closeTimerRef.current !== null) {
      (closeTimerWindowRef.current ?? ownerWindow).clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
      closeTimerWindowRef.current = null;
    }
    if (safeDelayDuration <= 0) {
      setOpen(true);
      return;
    }
    if (openTimerRef.current !== null) {
      (openTimerWindowRef.current ?? ownerWindow).clearTimeout(openTimerRef.current);
    }
    openTimerWindowRef.current = ownerWindow;
    openTimerRef.current = ownerWindow.setTimeout(() => {
      setOpen(true);
      openTimerRef.current = null;
      openTimerWindowRef.current = null;
    }, safeDelayDuration);
  }, [resolvedDisabled, getOwnerWindow, safeDelayDuration, setOpen]);

  const scheduleClose = React.useCallback(() => {
    const ownerWindow = getOwnerWindow();
    if (openTimerRef.current !== null) {
      (openTimerWindowRef.current ?? ownerWindow).clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
      openTimerWindowRef.current = null;
    }
    if (safeCloseDelay <= 0) {
      setOpen(false);
      return;
    }
    if (closeTimerRef.current !== null) {
      (closeTimerWindowRef.current ?? ownerWindow).clearTimeout(closeTimerRef.current);
    }
    closeTimerWindowRef.current = ownerWindow;
    closeTimerRef.current = ownerWindow.setTimeout(() => {
      setOpen(false);
      closeTimerRef.current = null;
      closeTimerWindowRef.current = null;
    }, safeCloseDelay);
  }, [getOwnerWindow, safeCloseDelay, setOpen]);

  React.useEffect(() => clearTimers, [clearTimers]);

  React.useEffect(() => {
    if (resolvedDisabled && isOpen) {
      setOpen(false);
    }
  }, [resolvedDisabled, isOpen, setOpen]);

  const visible = isOpen && !resolvedDisabled;
  const child = React.Children.only(children) as React.ReactElement<Record<string, unknown>>;
  const childProps = child.props;
  const resolvedTriggerAriaLabelledBy = resolveNonEmptyTooltipLabel(
    childProps["aria-labelledby"] as string | undefined
  );
  const resolvedTriggerAriaLabel =
    resolvedTriggerAriaLabelledBy === undefined
      ? resolveNonEmptyTooltipLabel(childProps["aria-label"] as string | undefined)
      : undefined;
  const resolvedTriggerTitle =
    resolvedTriggerAriaLabelledBy === undefined && resolvedTriggerAriaLabel === undefined
      ? resolveNonEmptyTooltipLabel(childProps.title as string | undefined)
      : undefined;
  const hasReadableTriggerText =
    getReadableTooltipTextNode(childProps.children as React.ReactNode).length > 0;
  const mergedDescribedBy =
    [childProps["aria-describedby"], visible ? tooltipId : undefined].filter(Boolean).join(" ") ||
    undefined;

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }
    if (warnedMissingTriggerNameRef.current) {
      return;
    }
    if (
      hasReadableTriggerText ||
      resolvedTriggerAriaLabel !== undefined ||
      resolvedTriggerAriaLabelledBy !== undefined ||
      resolvedTriggerTitle !== undefined
    ) {
      return;
    }

    warnedMissingTriggerNameRef.current = true;
    console.warn("[Tooltip] Non-text trigger should provide aria-label or aria-labelledby.");
  }, [
    hasReadableTriggerText,
    resolvedTriggerAriaLabel,
    resolvedTriggerAriaLabelledBy,
    resolvedTriggerTitle
  ]);
  // eslint-disable-next-line react-hooks/refs -- timer refs are read only inside DOM event callbacks.
  const trigger = React.cloneElement(child, {
    "aria-describedby": mergedDescribedBy,
    onMouseEnter: (event: React.MouseEvent<HTMLElement>) => {
      (childProps.onMouseEnter as ((value: React.MouseEvent<HTMLElement>) => void) | undefined)?.(
        event
      );
      if (!event.defaultPrevented) {
        scheduleOpen();
      }
    },
    onMouseLeave: (event: React.MouseEvent<HTMLElement>) => {
      (childProps.onMouseLeave as ((value: React.MouseEvent<HTMLElement>) => void) | undefined)?.(
        event
      );
      if (!event.defaultPrevented) {
        scheduleClose();
      }
    },
    onFocus: (event: React.FocusEvent<HTMLElement>) => {
      (childProps.onFocus as ((value: React.FocusEvent<HTMLElement>) => void) | undefined)?.(event);
      if (!event.defaultPrevented) {
        openImmediately();
      }
    },
    onBlur: (event: React.FocusEvent<HTMLElement>) => {
      (childProps.onBlur as ((value: React.FocusEvent<HTMLElement>) => void) | undefined)?.(event);
      if (!event.defaultPrevented) {
        closeImmediately();
      }
    },
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {
      (childProps.onKeyDown as ((value: React.KeyboardEvent<HTMLElement>) => void) | undefined)?.(
        event
      );
      if (
        !event.defaultPrevented &&
        resolvedCloseOnEscape &&
        event.key === "Escape" &&
        !event.altKey &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.repeat &&
        !isComposingTooltipKeyEvent(event)
      ) {
        closeImmediately();
      }
    }
  });

  return (
    <span ref={rootRef} style={{ position: "relative", display: "inline-flex", maxWidth: "100%" }}>
      {trigger}
      {visible ? (
        <span
          id={tooltipId}
          role="tooltip"
          aria-keyshortcuts={resolvedCloseOnEscape ? "Escape" : undefined}
          onMouseEnter={scheduleOpen}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute",
            ...getPositionStyle(side, safeSideOffset),
            background: "var(--aurora-color-slate-900)",
            color: "white",
            padding: "6px 8px",
            borderRadius: 6,
            fontSize: 12,
            whiteSpace: "normal",
            maxWidth: safeMaxWidth,
            zIndex: "var(--aurora-z-overlay)"
          }}
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}

function isComposingTooltipKeyEvent(event: React.KeyboardEvent<HTMLElement>) {
  const nativeEvent = event.nativeEvent;
  if (nativeEvent.isComposing) {
    return true;
  }

  return typeof nativeEvent.keyCode === "number" && nativeEvent.keyCode === 229;
}

function getReadableTooltipTextNode(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return normalizeReadableTooltipText(String(node));
  }

  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  if (Array.isArray(node)) {
    return normalizeReadableTooltipText(
      node
        .map((item) => getReadableTooltipTextNode(item))
        .filter((item) => item.length > 0)
        .join(" ")
    );
  }

  if (!React.isValidElement(node)) {
    return "";
  }

  const elementProps = node.props as {
    children?: React.ReactNode;
    "aria-hidden"?: boolean | "true" | "false";
    "aria-label"?: string;
  };
  if (elementProps["aria-hidden"] === true || elementProps["aria-hidden"] === "true") {
    return "";
  }

  const inlineAriaLabel = resolveNonEmptyTooltipLabel(elementProps["aria-label"]);
  if (inlineAriaLabel) {
    return inlineAriaLabel;
  }

  return getReadableTooltipTextNode(elementProps.children);
}

function resolveNonEmptyTooltipLabel(value: string | undefined): string | undefined {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }

  return undefined;
}

function normalizeReadableTooltipText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}
