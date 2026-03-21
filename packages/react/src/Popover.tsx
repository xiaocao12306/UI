import * as React from "react";
import { DismissableLayer } from "@aurora-ui/primitives";
import { Button } from "./Button";

export type PopoverAlign = "start" | "end";
export type PopoverCloseReason = "trigger-click" | "escape-key" | "outside-pointer";

export type PopoverProps = {
  triggerLabel: React.ReactNode;
  triggerAriaLabel?: string;
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  closeOnEscape?: boolean;
  closeOnOutsidePointer?: boolean;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onCloseReason?: (reason: PopoverCloseReason) => void;
  align?: PopoverAlign;
  sideOffset?: number;
  contentLabel?: string;
};

export function Popover({
  triggerLabel,
  triggerAriaLabel,
  children,
  open,
  defaultOpen,
  onOpenChange,
  closeOnEscape = true,
  closeOnOutsidePointer = true,
  onEscapeKeyDown,
  onPointerDownOutside,
  onCloseReason,
  align = "start",
  sideOffset = 8,
  contentLabel = "Popover content"
}: PopoverProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen ?? false);
  const contentId = React.useId();
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const resolvedTriggerAriaLabel =
    typeof triggerAriaLabel === "string" && triggerAriaLabel.trim().length > 0
      ? triggerAriaLabel.trim()
      : undefined;
  const resolvedContentLabel =
    typeof contentLabel === "string" && contentLabel.trim().length > 0
      ? contentLabel.trim()
      : "Popover content";

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange]
  );

  const closeWithReason = React.useCallback(
    (reason: PopoverCloseReason) => {
      onCloseReason?.(reason);
      setOpen(false);
    },
    [onCloseReason, setOpen]
  );

  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    const content = contentRef.current;
    if (!content) {
      return;
    }

    const firstFocusable = content.querySelector<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    (firstFocusable ?? content).focus();
  }, [isOpen]);

  const horizontalPosition = align === "start" ? { left: 0 } : { right: 0 };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Button
        ref={triggerRef}
        variant="outline"
        aria-label={resolvedTriggerAriaLabel}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? contentId : undefined}
        onClick={() => {
          if (isOpen) {
            closeWithReason("trigger-click");
            return;
          }

          setOpen(true);
        }}
        onKeyDown={(event) => {
          if (event.key !== "ArrowDown" || isOpen) {
            return;
          }

          if (event.altKey || event.ctrlKey || event.metaKey) {
            return;
          }

          event.preventDefault();
          setOpen(true);
        }}
      >
        {triggerLabel}
      </Button>
      {isOpen ? (
        <DismissableLayer
          id={contentId}
          ref={contentRef}
          role="dialog"
          aria-label={resolvedContentLabel}
          tabIndex={-1}
          onEscapeKeyDown={(event) => {
            onEscapeKeyDown?.(event);
            if (event.defaultPrevented || !closeOnEscape) {
              event.preventDefault();
              return;
            }

            event.preventDefault();
            closeWithReason("escape-key");
            triggerRef.current?.focus();
          }}
          onPointerDownOutside={(event) => {
            const target = event.target;
            if (target instanceof Node && triggerRef.current?.contains(target)) {
              return;
            }

            onPointerDownOutside?.(event);
            if (event.defaultPrevented || !closeOnOutsidePointer) {
              event.preventDefault();
              return;
            }

            closeWithReason("outside-pointer");
          }}
          style={{
            position: "absolute",
            top: `calc(100% + ${sideOffset}px)`,
            minWidth: 220,
            borderRadius: "var(--aurora-radius-md)",
            border: "1px solid var(--aurora-border-default)",
            background: "var(--aurora-surface-overlay)",
            boxShadow: "var(--aurora-shadow-md)",
            padding: 10,
            zIndex: "var(--aurora-z-overlay)",
            ...horizontalPosition
          }}
        >
          {children}
        </DismissableLayer>
      ) : null}
    </div>
  );
}
