import * as React from "react";
import { DismissableLayer } from "@aurora-ui/primitives";
import { Button } from "./Button";

export type PopoverAlign = "start" | "end";

export type PopoverProps = {
  triggerLabel: React.ReactNode;
  triggerAriaLabel?: string;
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
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

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange]
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
        aria-label={triggerAriaLabel}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? contentId : undefined}
        onClick={() => setOpen(!isOpen)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && !isOpen) {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        {triggerLabel}
      </Button>
      {isOpen ? (
        <DismissableLayer
          id={contentId}
          ref={contentRef}
          role="dialog"
          aria-label={contentLabel}
          tabIndex={-1}
          onEscapeKeyDown={(event) => {
            if (event.defaultPrevented) {
              return;
            }

            event.preventDefault();
            setOpen(false);
            triggerRef.current?.focus();
          }}
          onPointerDownOutside={(event) => {
            if (event.defaultPrevented) {
              return;
            }

            setOpen(false);
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
