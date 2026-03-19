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

function getNextEnabledIndex(
  items: TabItem[],
  startIndex: number,
  direction: 1 | -1,
  loop: boolean
) {
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
  const keyboardActivationTabKeyRef = React.useRef<string | null>(null);
  const keyboardActivationResetTimerRef = React.useRef<number | null>(null);
  const focusIntentRef = React.useRef(true);
  const firstEnabledKey = items.find((item) => !item.disabled)?.key;
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? firstEnabledKey);
  const [hoveredTabKey, setHoveredTabKey] = React.useState<string | null>(null);
  const [pressedTabKey, setPressedTabKey] = React.useState<string | null>(null);
  const [focusVisibleTabKey, setFocusVisibleTabKey] = React.useState<string | null>(null);

  const currentRawValue = value ?? internalValue;
  const currentValue = items.some((item) => item.key === currentRawValue && !item.disabled)
    ? currentRawValue
    : firstEnabledKey;
  const [focusedValue, setFocusedValue] = React.useState<string | undefined>(currentValue);
  const focusTargetValue = items.some((item) => item.key === focusedValue && !item.disabled)
    ? focusedValue
    : currentValue;

  React.useEffect(() => {
    if (value === undefined && currentValue !== internalValue) {
      setInternalValue(currentValue);
    }
  }, [currentValue, internalValue, value]);

  React.useEffect(() => {
    setFocusedValue(currentValue);
  }, [currentValue]);

  React.useEffect(() => {
    return () => {
      if (keyboardActivationResetTimerRef.current !== null) {
        window.clearTimeout(keyboardActivationResetTimerRef.current);
      }
    };
  }, []);

  const clearKeyboardActivationLatch = React.useCallback(() => {
    keyboardActivationTabKeyRef.current = null;
    if (keyboardActivationResetTimerRef.current !== null) {
      window.clearTimeout(keyboardActivationResetTimerRef.current);
      keyboardActivationResetTimerRef.current = null;
    }
  }, []);

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
        aria-disabled={firstEnabledKey ? undefined : true}
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
          const hovered = hoveredTabKey === item.key;
          const pressed = pressedTabKey === item.key;
          const focusVisible = focusVisibleTabKey === item.key;
          const interactive = hovered || focusVisible;

          return (
            <button
              key={item.key}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`${baseId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${index}`}
              aria-disabled={disabled || undefined}
              aria-keyshortcuts={
                activationMode === "manual" && !disabled ? "Enter Space" : undefined
              }
              tabIndex={focusTargetValue === item.key ? 0 : -1}
              disabled={disabled}
              onClick={(event) => {
                setFocusedValue(item.key);
                const clickFromKeyboardActivation =
                  activationMode === "manual" &&
                  event.detail === 0 &&
                  keyboardActivationTabKeyRef.current === item.key;
                clearKeyboardActivationLatch();
                if (clickFromKeyboardActivation) {
                  return;
                }
                select(item.key);
              }}
              onMouseEnter={() => {
                if (disabled) {
                  return;
                }

                setHoveredTabKey(item.key);
              }}
              onMouseLeave={() => {
                setHoveredTabKey((currentKey) => (currentKey === item.key ? null : currentKey));
                setPressedTabKey((currentKey) => (currentKey === item.key ? null : currentKey));
              }}
              onMouseDown={() => {
                if (disabled) {
                  return;
                }

                focusIntentRef.current = false;
                setFocusVisibleTabKey((currentKey) =>
                  currentKey === item.key ? null : currentKey
                );
                setPressedTabKey(item.key);
              }}
              onMouseUp={() => {
                setPressedTabKey((currentKey) => (currentKey === item.key ? null : currentKey));
              }}
              onFocus={() => {
                setFocusedValue(item.key);
                if (disabled) {
                  setFocusVisibleTabKey((currentKey) =>
                    currentKey === item.key ? null : currentKey
                  );
                  return;
                }

                setFocusVisibleTabKey((currentKey) =>
                  resolveFocusVisibleState(tabRefs.current[index], focusIntentRef.current)
                    ? item.key
                    : currentKey === item.key
                      ? null
                      : currentKey
                );
              }}
              onBlur={() => {
                setFocusVisibleTabKey((currentKey) =>
                  currentKey === item.key ? null : currentKey
                );
                setPressedTabKey((currentKey) => (currentKey === item.key ? null : currentKey));
              }}
              onKeyDown={(event) => {
                focusIntentRef.current = true;
                if (activationMode === "manual" && isTabActivationKey(event.key)) {
                  event.preventDefault();
                  if (event.repeat) {
                    return;
                  }
                  keyboardActivationTabKeyRef.current = item.key;
                  if (keyboardActivationResetTimerRef.current !== null) {
                    window.clearTimeout(keyboardActivationResetTimerRef.current);
                  }
                  keyboardActivationResetTimerRef.current = window.setTimeout(() => {
                    keyboardActivationTabKeyRef.current = null;
                    keyboardActivationResetTimerRef.current = null;
                  }, 0);
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
                border: selected
                  ? "1px solid var(--aurora-accent-default)"
                  : interactive
                    ? "1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))"
                    : "1px solid var(--aurora-border-default)",
                background: selected
                  ? "color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)"
                  : pressed
                    ? "color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))"
                    : hovered
                      ? "color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))"
                      : "var(--aurora-surface-default)",
                color: disabled
                  ? "color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)"
                  : "var(--aurora-text-primary)",
                padding: "0 12px",
                cursor: disabled ? "not-allowed" : "pointer",
                boxShadow: focusVisible
                  ? "0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)"
                  : "none",
                transform: pressed ? "translateY(1px)" : "translateY(0)",
                transition:
                  "background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {items.map((item, index) => {
        const selected = item.key === currentValue;

        return (
          <div
            key={item.key}
            id={`${baseId}-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${index}`}
            tabIndex={selected ? 0 : -1}
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
  return key === "Enter" || key === " " || key === "Space" || key === "Spacebar";
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

function resolveFocusVisibleState(target: HTMLButtonElement | null, fallback: boolean) {
  if (!target) {
    return fallback;
  }

  try {
    return target.matches(":focus-visible");
  } catch {
    return fallback;
  }
}
