import * as React from "react";
import { DismissableLayer } from "@aurora-ui/primitives";
import { Button } from "./Button";
import { focusAdjacentTabbable, getTabbableElements } from "./focusTabbable";

export type PopoverAlign = "start" | "end";
export type PopoverCloseReason = "trigger-click" | "escape-key" | "outside-pointer" | "tab-key";

export type PopoverProps = {
  triggerLabel: React.ReactNode;
  triggerAriaLabel?: string;
  triggerAriaLabelledBy?: string;
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

const popoverTriggerKeyboardShortcut = "ArrowDown";
const popoverContentKeyboardShortcuts = "Tab";

function resolvePopoverSideOffset(sideOffset: number, fallback: number) {
  if (!Number.isFinite(sideOffset)) {
    return fallback;
  }

  return Math.trunc(sideOffset);
}

export function Popover({
  triggerLabel,
  triggerAriaLabel,
  triggerAriaLabelledBy,
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
  const warnedMissingTriggerNameRef = React.useRef(false);
  const resolvedTriggerAriaLabelledBy =
    typeof triggerAriaLabelledBy === "string" && triggerAriaLabelledBy.trim().length > 0
      ? triggerAriaLabelledBy.trim()
      : undefined;
  const explicitTriggerAriaLabel =
    !resolvedTriggerAriaLabelledBy && typeof triggerAriaLabel === "string" && triggerAriaLabel.trim().length > 0
      ? triggerAriaLabel.trim()
      : undefined;
  const resolvedContentLabel =
    typeof contentLabel === "string" && contentLabel.trim().length > 0
      ? contentLabel.trim()
      : "Popover content";
  const hasReadableTriggerLabelText = getReadablePopoverLabel(triggerLabel).length > 0;
  const safeSideOffset = resolvePopoverSideOffset(sideOffset, 8);
  const resolvedTriggerAriaLabel = resolvedTriggerAriaLabelledBy
    ? undefined
    : explicitTriggerAriaLabel ?? (hasReadableTriggerLabelText ? undefined : "Open popover");

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

  const dismissWithTabNavigation = React.useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      event.preventDefault();
      const ownerDocument = event.currentTarget.ownerDocument;
      const fallbackAnchor = event.target instanceof HTMLElement ? event.target : event.currentTarget;
      const focusAnchor = triggerRef.current ?? fallbackAnchor;
      const moved = focusAdjacentTabbable(
        ownerDocument,
        focusAnchor,
        event.shiftKey ? -1 : 1,
        contentRef.current
      );
      if (!moved) {
        focusAnchor.focus();
      }
      closeWithReason("tab-key");
    },
    [closeWithReason]
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

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }
    if (warnedMissingTriggerNameRef.current) {
      return;
    }
    if (
      hasReadableTriggerLabelText ||
      explicitTriggerAriaLabel !== undefined ||
      resolvedTriggerAriaLabelledBy !== undefined
    ) {
      return;
    }

    warnedMissingTriggerNameRef.current = true;
    console.warn("[Popover] Non-text triggerLabel should provide triggerAriaLabel or triggerAriaLabelledBy.");
  }, [explicitTriggerAriaLabel, hasReadableTriggerLabelText, resolvedTriggerAriaLabelledBy]);

  const horizontalPosition = align === "start" ? { left: 0 } : { right: 0 };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Button
        ref={triggerRef}
        variant="outline"
        aria-labelledby={resolvedTriggerAriaLabelledBy}
        aria-label={resolvedTriggerAriaLabel}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? contentId : undefined}
        aria-keyshortcuts={isOpen ? undefined : popoverTriggerKeyboardShortcut}
        onClick={() => {
          if (isOpen) {
            closeWithReason("trigger-click");
            return;
          }

          setOpen(true);
        }}
        onKeyDown={(event) => {
          if (event.defaultPrevented) {
            return;
          }

          if (event.key === "Tab" && isOpen) {
            if (event.altKey || event.ctrlKey || event.metaKey) {
              return;
            }
            dismissWithTabNavigation(event);
            return;
          }

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
          aria-keyshortcuts={
            closeOnEscape ? `${popoverContentKeyboardShortcuts} Escape` : popoverContentKeyboardShortcuts
          }
          tabIndex={-1}
          onKeyDown={(event) => {
            if (event.defaultPrevented) {
              return;
            }

            if (event.key !== "Tab") {
              return;
            }
            if (event.altKey || event.ctrlKey || event.metaKey) {
              return;
            }

            if (!shouldDismissOnTabBoundary(event.currentTarget, event.shiftKey)) {
              return;
            }

            dismissWithTabNavigation(event);
          }}
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
            top: `calc(100% + ${safeSideOffset}px)`,
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

function shouldDismissOnTabBoundary(layer: HTMLElement, reverse: boolean) {
  const ownerDocument = layer.ownerDocument;
  const activeElement = ownerDocument.activeElement;
  if (!(activeElement instanceof HTMLElement) || !layer.contains(activeElement)) {
    return false;
  }

  const tabbableElements = getTabbableElements(layer);
  if (tabbableElements.length === 0) {
    return true;
  }

  const activeIndex = tabbableElements.indexOf(activeElement);
  if (activeIndex < 0) {
    return true;
  }

  return reverse ? activeIndex === 0 : activeIndex === tabbableElements.length - 1;
}

function getReadablePopoverLabel(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return normalizeReadablePopoverLabel(String(node));
  }

  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  if (Array.isArray(node)) {
    return normalizeReadablePopoverLabel(
      node
        .map((item) => getReadablePopoverLabel(item))
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

  if (typeof elementProps["aria-label"] === "string" && elementProps["aria-label"].trim().length > 0) {
    return normalizeReadablePopoverLabel(elementProps["aria-label"]);
  }

  return getReadablePopoverLabel(elementProps.children);
}

function normalizeReadablePopoverLabel(value: string) {
  return value.replace(/\s+/g, " ").trim();
}
