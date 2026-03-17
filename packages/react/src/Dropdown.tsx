import * as React from "react";
import { DismissableLayer } from "@aurora-ui/primitives";
import { Button } from "./Button";

export type DropdownItem = {
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
};

export type DropdownProps = {
  label: React.ReactNode;
  triggerAriaLabel?: string;
  items: DropdownItem[];
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

function getNextEnabledIndex(items: DropdownItem[], currentIndex: number, direction: 1 | -1) {
  if (items.length === 0) {
    return -1;
  }

  let index = currentIndex;
  for (let i = 0; i < items.length; i += 1) {
    index = (index + direction + items.length) % items.length;
    if (!items[index]?.disabled) {
      return index;
    }
  }

  return -1;
}

export function Dropdown({ label, triggerAriaLabel, items, open, defaultOpen, onOpenChange }: DropdownProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen ?? false);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const triggerId = React.useId();
  const menuId = React.useId();

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
      setActiveIndex(-1);
      return;
    }

    const firstEnabledIndex = items.findIndex((item) => !item.disabled);
    setActiveIndex(firstEnabledIndex);
  }, [isOpen, items]);

  React.useEffect(() => {
    if (!isOpen || activeIndex < 0) {
      return;
    }

    itemRefs.current[activeIndex]?.focus();
  }, [activeIndex, isOpen]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Button
        id={triggerId}
        ref={triggerRef}
        variant="outline"
        aria-label={triggerAriaLabel}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        onClick={() => setOpen(!isOpen)}
        onKeyDown={(event) => {
          if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
            return;
          }

          event.preventDefault();
          if (!isOpen) {
            setOpen(true);
          }

          const nextIndex = event.key === "ArrowDown" ? getNextEnabledIndex(items, -1, 1) : getNextEnabledIndex(items, 0, -1);
          setActiveIndex(nextIndex);
        }}
      >
        {label}
      </Button>
      {isOpen ? (
        <DismissableLayer
          onDismiss={() => {
            setOpen(false);
            triggerRef.current?.focus();
          }}
        >
          <ul
            id={menuId}
            role="menu"
            aria-labelledby={triggerId}
            aria-orientation="vertical"
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: 0,
              margin: 0,
              padding: 6,
              listStyle: "none",
              minWidth: 200,
              borderRadius: "var(--aurora-radius-md)",
              border: "1px solid var(--aurora-border-default)",
              background: "var(--aurora-surface-overlay)",
              boxShadow: "var(--aurora-shadow-md)",
              zIndex: "var(--aurora-z-overlay)"
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.preventDefault();
                setOpen(false);
                triggerRef.current?.focus();
                return;
              }

              if (event.key === "ArrowDown") {
                event.preventDefault();
                setActiveIndex((current) => getNextEnabledIndex(items, current < 0 ? -1 : current, 1));
                return;
              }

              if (event.key === "ArrowUp") {
                event.preventDefault();
                setActiveIndex((current) => getNextEnabledIndex(items, current < 0 ? 0 : current, -1));
                return;
              }

              if (event.key === "Home") {
                event.preventDefault();
                setActiveIndex(getNextEnabledIndex(items, -1, 1));
                return;
              }

              if (event.key === "End") {
                event.preventDefault();
                setActiveIndex(getNextEnabledIndex(items, 0, -1));
                return;
              }

              if (event.key === "Tab") {
                setOpen(false);
              }
            }}
          >
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={item.key} role="none">
                  <button
                    ref={(node) => {
                      itemRefs.current[index] = node;
                    }}
                    role="menuitem"
                    type="button"
                    disabled={item.disabled}
                    tabIndex={isActive ? 0 : -1}
                    aria-disabled={item.disabled || undefined}
                    onMouseEnter={() => {
                      if (!item.disabled) {
                        setActiveIndex(index);
                      }
                    }}
                    onClick={() => {
                      if (item.disabled) {
                        return;
                      }

                      item.onSelect?.();
                      setOpen(false);
                      triggerRef.current?.focus();
                    }}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      border: 0,
                      background: isActive
                        ? "color-mix(in srgb, var(--aurora-accent-default) 12%, transparent)"
                        : "transparent",
                      padding: "8px 10px",
                      borderRadius: 8,
                      cursor: item.disabled ? "not-allowed" : "pointer",
                      color: item.disabled
                        ? "color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)"
                        : "var(--aurora-text-primary)"
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </DismissableLayer>
      ) : null}
    </div>
  );
}
