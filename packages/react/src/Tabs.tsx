import * as React from "react";

export type TabItem = {
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
};

export type TabsProps = {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  orientation?: "horizontal" | "vertical";
  activationMode?: "automatic" | "manual";
  loop?: boolean;
  onValueChange?: (value: string) => void;
};

function getNextEnabledIndex(items: TabItem[], startIndex: number, direction: 1 | -1, loop: boolean) {
  if (items.length === 0) {
    return -1;
  }

  const fallbackIndex = items[startIndex]?.disabled ? -1 : startIndex;
  let index = startIndex;
  for (let i = 0; i < items.length; i += 1) {
    index += direction;
    if (loop) {
      if (index < 0) {
        index = items.length - 1;
      } else if (index >= items.length) {
        index = 0;
      }
    } else if (index < 0 || index >= items.length) {
      return fallbackIndex;
    }

    if (!items[index]?.disabled) {
      return index;
    }
  }

  return fallbackIndex;
}

function getFirstEnabledIndex(items: TabItem[]) {
  return items.findIndex((item) => !item.disabled);
}

function getLastEnabledIndex(items: TabItem[]) {
  for (let index = items.length - 1; index >= 0; index -= 1) {
    if (!items[index]?.disabled) {
      return index;
    }
  }

  return -1;
}

export function Tabs({
  items,
  value,
  defaultValue,
  ariaLabel = "Tabs",
  ariaLabelledBy,
  orientation = "horizontal",
  activationMode = "automatic",
  loop = true,
  onValueChange
}: TabsProps) {
  const baseId = React.useId();
  const tabListRef = React.useRef<HTMLDivElement>(null);
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const firstEnabledKey = items.find((item) => !item.disabled)?.key;
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? firstEnabledKey);

  const currentRawValue = value ?? internalValue;
  const currentValue = items.some((item) => item.key === currentRawValue && !item.disabled) ? currentRawValue : firstEnabledKey;
  const [focusedValue, setFocusedValue] = React.useState<string | undefined>(currentValue);
  const focusTargetValue = items.some((item) => item.key === focusedValue && !item.disabled) ? focusedValue : currentValue;

  React.useEffect(() => {
    if (value === undefined && currentValue !== internalValue) {
      setInternalValue(currentValue);
    }
  }, [currentValue, internalValue, value]);

  React.useEffect(() => {
    setFocusedValue(currentValue);
  }, [currentValue]);

  const select = React.useCallback(
    (nextValue: string) => {
      const target = items.find((item) => item.key === nextValue);
      if (!target || target.disabled || nextValue === currentValue) {
        return;
      }

      if (value === undefined) {
        setInternalValue(nextValue);
      }
      onValueChange?.(nextValue);
    },
    [currentValue, items, onValueChange, value]
  );

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div
        ref={tabListRef}
        role="tablist"
        aria-label={ariaLabelledBy ? undefined : ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-orientation={orientation}
        style={{
          display: "flex",
          gap: 6,
          flexWrap: orientation === "horizontal" ? "wrap" : "nowrap",
          flexDirection: orientation === "vertical" ? "column" : "row"
        }}
      >
        {items.map((item, index) => {
          const selected = item.key === currentValue;
          const disabled = Boolean(item.disabled);

          return (
            <button
              key={item.key}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`${baseId}-tab-${item.key}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.key}`}
              aria-disabled={disabled || undefined}
              tabIndex={focusTargetValue === item.key ? 0 : -1}
              disabled={disabled}
              onClick={(event) => {
                setFocusedValue(item.key);
                if (activationMode === "manual" && event.detail === 0) {
                  return;
                }
                select(item.key);
              }}
              onFocus={() => {
                setFocusedValue(item.key);
              }}
              onKeyDown={(event) => {
                if (activationMode === "manual" && isTabActivationKey(event.key)) {
                  event.preventDefault();
                  select(item.key);
                  return;
                }

                const moveToIndex = (nextIndex: number) => {
                  const nextKey = items[nextIndex]?.key;
                  if (!nextKey) {
                    return;
                  }

                  setFocusedValue(nextKey);
                  if (activationMode === "automatic") {
                    select(nextKey);
                  }
                  tabRefs.current[nextIndex]?.focus();
                };

                if (event.key === "Home") {
                  event.preventDefault();
                  const firstIndex = getFirstEnabledIndex(items);
                  moveToIndex(firstIndex);
                  return;
                }

                if (event.key === "End") {
                  event.preventDefault();
                  const lastIndex = getLastEnabledIndex(items);
                  moveToIndex(lastIndex);
                  return;
                }

                const moveDirection = getTabMoveDirection({
                  orientation,
                  key: event.key,
                  isRtl: orientation === "horizontal" && isElementDirectionRtl(tabListRef.current)
                });
                if (!moveDirection) {
                  return;
                }

                event.preventDefault();

                const nextIndex = getNextEnabledIndex(items, index, moveDirection, loop);
                moveToIndex(nextIndex);
              }}
              style={{
                height: 34,
                borderRadius: "var(--aurora-radius-md)",
                border: selected ? "1px solid var(--aurora-accent-default)" : "1px solid var(--aurora-border-default)",
                background: selected
                  ? "color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)"
                  : "var(--aurora-surface-default)",
                color: disabled
                  ? "color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)"
                  : "var(--aurora-text-primary)",
                padding: "0 12px",
                cursor: disabled ? "not-allowed" : "pointer"
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {items.map((item) => {
        const selected = item.key === currentValue;

        return (
          <div
            key={item.key}
            id={`${baseId}-panel-${item.key}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${item.key}`}
            hidden={!selected}
            style={{
              display: selected ? undefined : "none",
              border: "1px solid var(--aurora-border-default)",
              borderRadius: "var(--aurora-radius-md)",
              padding: 12,
              background: "var(--aurora-surface-default)"
            }}
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
}

function isTabActivationKey(key: string) {
  return key === "Enter" || key === " " || key === "Spacebar";
}

function getTabMoveDirection({
  orientation,
  key,
  isRtl
}: {
  orientation: "horizontal" | "vertical";
  key: string;
  isRtl: boolean;
}) {
  if (orientation === "vertical") {
    if (key === "ArrowDown") {
      return 1 as const;
    }
    if (key === "ArrowUp") {
      return -1 as const;
    }
    return undefined;
  }

  if (key === "ArrowRight") {
    return isRtl ? (-1 as const) : (1 as const);
  }
  if (key === "ArrowLeft") {
    return isRtl ? (1 as const) : (-1 as const);
  }

  return undefined;
}

function isElementDirectionRtl(element: HTMLElement | null) {
  if (!element) {
    return false;
  }

  const nearestDirRoot = element.closest<HTMLElement>("[dir]");
  if (nearestDirRoot?.dir === "rtl") {
    return true;
  }
  if (nearestDirRoot?.dir === "ltr") {
    return false;
  }

  if (typeof window === "undefined") {
    return false;
  }

  return window.getComputedStyle(element).direction === "rtl";
}
