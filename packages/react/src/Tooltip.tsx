import * as React from "react";

export type TooltipSide = "top" | "right" | "bottom" | "left";

export type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactElement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  delayDuration?: number;
  closeDelay?: number;
  side?: TooltipSide;
  sideOffset?: number;
  maxWidth?: number | string;
};

function composeEventHandlers<EventType extends { defaultPrevented?: boolean }>(
  userHandler: ((event: EventType) => void) | undefined,
  internalHandler: (event: EventType) => void
) {
  return (event: EventType) => {
    userHandler?.(event);
    if (!event.defaultPrevented) {
      internalHandler(event);
    }
  };
}

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

export function Tooltip({
  content,
  children,
  open,
  defaultOpen,
  onOpenChange,
  disabled = false,
  delayDuration = 250,
  closeDelay = 80,
  side = "top",
  sideOffset = 8,
  maxWidth = 320
}: TooltipProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen ?? false);
  const tooltipId = React.useId();
  const openTimerRef = React.useRef<number | null>(null);
  const closeTimerRef = React.useRef<number | null>(null);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (disabled && nextOpen) {
        return;
      }
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [disabled, isControlled, onOpenChange]
  );

  const clearTimers = React.useCallback(() => {
    if (openTimerRef.current !== null) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const closeImmediately = React.useCallback(() => {
    clearTimers();
    setOpen(false);
  }, [clearTimers, setOpen]);

  const openImmediately = React.useCallback(() => {
    if (disabled) {
      return;
    }
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpen(true);
  }, [disabled, setOpen]);

  const scheduleOpen = React.useCallback(() => {
    if (disabled) {
      return;
    }
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (delayDuration <= 0) {
      setOpen(true);
      return;
    }
    if (openTimerRef.current !== null) {
      window.clearTimeout(openTimerRef.current);
    }
    openTimerRef.current = window.setTimeout(() => {
      setOpen(true);
      openTimerRef.current = null;
    }, delayDuration);
  }, [delayDuration, disabled, setOpen]);

  const scheduleClose = React.useCallback(() => {
    if (openTimerRef.current !== null) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeDelay <= 0) {
      setOpen(false);
      return;
    }
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
      closeTimerRef.current = null;
    }, closeDelay);
  }, [closeDelay, setOpen]);

  React.useEffect(() => clearTimers, [clearTimers]);

  React.useEffect(() => {
    if (disabled && isOpen) {
      setOpen(false);
    }
  }, [disabled, isOpen, setOpen]);

  const visible = isOpen && !disabled;
  const child = React.Children.only(children) as React.ReactElement<Record<string, unknown>>;
  const childProps = child.props;
  const mergedDescribedBy = [childProps["aria-describedby"], visible ? tooltipId : undefined].filter(Boolean).join(" ") || undefined;

  return (
    <span style={{ position: "relative", display: "inline-flex", maxWidth: "100%" }}>
      {React.cloneElement(child, {
        "aria-describedby": mergedDescribedBy,
        onMouseEnter: composeEventHandlers(
          childProps.onMouseEnter as ((event: React.MouseEvent<HTMLElement>) => void) | undefined,
          () => scheduleOpen()
        ),
        onMouseLeave: composeEventHandlers(
          childProps.onMouseLeave as ((event: React.MouseEvent<HTMLElement>) => void) | undefined,
          () => scheduleClose()
        ),
        onFocus: composeEventHandlers(
          childProps.onFocus as ((event: React.FocusEvent<HTMLElement>) => void) | undefined,
          () => openImmediately()
        ),
        onBlur: composeEventHandlers(
          childProps.onBlur as ((event: React.FocusEvent<HTMLElement>) => void) | undefined,
          () => closeImmediately()
        ),
        onKeyDown: composeEventHandlers(
          childProps.onKeyDown as ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined,
          (event: React.KeyboardEvent<HTMLElement>) => {
            if (event.key === "Escape") {
              closeImmediately();
            }
          }
        )
      })}
      {visible ? (
        <span
          id={tooltipId}
          role="tooltip"
          onMouseEnter={scheduleOpen}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute",
            ...getPositionStyle(side, sideOffset),
            background: "var(--aurora-color-slate-900)",
            color: "white",
            padding: "6px 8px",
            borderRadius: 6,
            fontSize: 12,
            whiteSpace: "normal",
            maxWidth,
            zIndex: 1200
          }}
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}
