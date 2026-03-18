import * as React from "react";
import { DismissableLayer } from "@aurora-ui/primitives";
import { Button } from "./Button";

export type DropdownItem = {
  key: string;
  label: React.ReactNode;
  textValue?: string;
  disabled?: boolean;
  onSelect?: () => void;
};

export type DropdownCloseReason = "trigger-click" | "item-select" | "escape-key" | "outside-pointer" | "tab-key";

export type DropdownProps = {
  label: React.ReactNode;
  triggerAriaLabel?: string;
  items: DropdownItem[];
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  closeOnEscape?: boolean;
  closeOnOutsidePointer?: boolean;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onCloseReason?: (reason: DropdownCloseReason) => void;
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

function getDropdownItemText(item: DropdownItem) {
  if (typeof item.textValue === "string") {
    return item.textValue.trim();
  }

  return typeof item.label === "string" ? item.label.trim() : "";
}

function normalizeTypeaheadText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getNextTypeaheadQuery(previousQuery: string, nextChar: string, elapsedMs: number, timeoutMs = 500) {
  if (elapsedMs > timeoutMs || previousQuery.length === 0) {
    return nextChar;
  }

  if (previousQuery.length === 1 && previousQuery === nextChar) {
    return nextChar;
  }

  return `${previousQuery}${nextChar}`;
}

function getTypeaheadIndex(items: DropdownItem[], currentIndex: number, query: string) {
  if (items.length === 0 || query.length === 0) {
    return -1;
  }

  const normalized = normalizeTypeaheadText(query);
  for (let offset = 1; offset <= items.length; offset += 1) {
    const index = (currentIndex + offset + items.length) % items.length;
    const item = items[index];
    if (!item || item.disabled) {
      continue;
    }

    if (normalizeTypeaheadText(getDropdownItemText(item)).startsWith(normalized)) {
      return index;
    }
  }

  return -1;
}

export function Dropdown({
  label,
  triggerAriaLabel,
  items,
  open,
  defaultOpen,
  onOpenChange,
  closeOnEscape = true,
  closeOnOutsidePointer = true,
  onEscapeKeyDown,
  onPointerDownOutside,
  onCloseReason
}: DropdownProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen ?? false);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const typeaheadStateRef = React.useRef<{ query: string; timestamp: number }>({ query: "", timestamp: 0 });
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

  const closeWithReason = React.useCallback(
    (reason: DropdownCloseReason) => {
      onCloseReason?.(reason);
      setOpen(false);
    },
    [onCloseReason, setOpen]
  );

  React.useEffect(() => {
    if (!isOpen) {
      setActiveIndex(-1);
      typeaheadStateRef.current = { query: "", timestamp: 0 };
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
        onClick={() => {
          if (isOpen) {
            closeWithReason("trigger-click");
            return;
          }
          setOpen(true);
        }}
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
                closeWithReason("tab-key");
                return;
              }

              if (isComposingDropdownKeyEvent(event)) {
                return;
              }

              if (event.key.length === 1 && !event.altKey && !event.ctrlKey && !event.metaKey) {
                const normalizedKey = normalizeTypeaheadText(event.key);
                if (normalizedKey.length === 0) {
                  return;
                }

                const now = Date.now();
                const elapsed = now - typeaheadStateRef.current.timestamp;
                const nextQuery = getNextTypeaheadQuery(typeaheadStateRef.current.query, normalizedKey, elapsed);
                typeaheadStateRef.current = { query: nextQuery, timestamp: now };

                let nextIndex = getTypeaheadIndex(items, activeIndex < 0 ? -1 : activeIndex, nextQuery);
                if (nextIndex < 0 && nextQuery.length > 1) {
                  nextIndex = getTypeaheadIndex(items, activeIndex < 0 ? -1 : activeIndex, normalizedKey);
                  if (nextIndex >= 0) {
                    typeaheadStateRef.current = { query: normalizedKey, timestamp: now };
                  }
                }

                if (nextIndex >= 0) {
                  event.preventDefault();
                  setActiveIndex(nextIndex);
                }
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
                      closeWithReason("item-select");
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

function isComposingDropdownKeyEvent(event: React.KeyboardEvent<HTMLElement>) {
  const nativeEvent = event.nativeEvent;
  if (nativeEvent.isComposing) {
    return true;
  }

  return typeof nativeEvent.keyCode === "number" && nativeEvent.keyCode === 229;
}
