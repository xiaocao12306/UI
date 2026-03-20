import * as React from "react";

export type TabItem = {
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
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

function buildKeyIndexMap(items: TabItem[]) {
  return items.reduce<Record<string, number>>((accumulator, item, index) => {
    accumulator[item.key] = index;
    return accumulator;
  }, {});
}

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

function getNearestEnabledKey(items: TabItem[], anchorIndex: number | undefined, fallbackKey: string | undefined) {
  if (!Array.isArray(items) || items.length === 0) {
    return fallbackKey;
  }

  if (typeof anchorIndex !== "number" || Number.isNaN(anchorIndex)) {
    return fallbackKey;
  }

  for (let distance = 0; distance < items.length; distance += 1) {
    const rightIndex = anchorIndex + distance;
    if (rightIndex >= 0 && rightIndex < items.length && !items[rightIndex]?.disabled) {
      return items[rightIndex]?.key ?? fallbackKey;
    }

    if (distance === 0) {
      continue;
    }

    const leftIndex = anchorIndex - distance;
    if (leftIndex >= 0 && leftIndex < items.length && !items[leftIndex]?.disabled) {
      return items[leftIndex]?.key ?? fallbackKey;
    }
  }

  return fallbackKey;
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
  const keyboardActivationTimerWindowRef = React.useRef<Window | null>(null);
  const warnedInvalidControlledValueRef = React.useRef<string | null>(null);
  const warnedDuplicateKeysSignatureRef = React.useRef<string | null>(null);
  const warnedMissingLabelSignatureRef = React.useRef<string | null>(null);
  const focusIntentRef = React.useRef(true);
  const [recentKeyIndexMap, setRecentKeyIndexMap] = React.useState<Record<string, number>>(() =>
    buildKeyIndexMap(items)
  );
  const firstEnabledKey = items.find((item) => !item.disabled)?.key;
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? firstEnabledKey);
  const [hoveredTabKey, setHoveredTabKey] = React.useState<string | null>(null);
  const [pressedTabKey, setPressedTabKey] = React.useState<string | null>(null);
  const [focusVisibleTabKey, setFocusVisibleTabKey] = React.useState<string | null>(null);
  const resolvedAriaLabel = resolveNonEmptyLabel(ariaLabel, "Tabs");
  const resolvedAriaLabelledBy = resolveNonEmptyLabel(ariaLabelledBy);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const duplicateKeys = new Set<string>();
    const seenKeys = new Set<string>();
    items.forEach((item) => {
      if (seenKeys.has(item.key)) {
        duplicateKeys.add(item.key);
      }
      seenKeys.add(item.key);
    });

    if (duplicateKeys.size === 0) {
      warnedDuplicateKeysSignatureRef.current = null;
      return;
    }

    const signature = Array.from(duplicateKeys).sort().join("|");
    if (warnedDuplicateKeysSignatureRef.current === signature) {
      return;
    }
    warnedDuplicateKeysSignatureRef.current = signature;

    console.warn(
      `[Tabs] Duplicate item keys detected: ${Array.from(duplicateKeys)
        .map((key) => `"${key}"`)
        .join(", ")}. Keys should be unique to keep aria bindings and focus behavior deterministic.`
    );
  }, [items]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const missingLabelKeys = items.reduce<string[]>((keys, item) => {
      const hasExplicitAriaLabel =
        typeof item.ariaLabel === "string" && item.ariaLabel.trim().length > 0;
      if (hasExplicitAriaLabel || hasReadableTextNode(item.label)) {
        return keys;
      }

      keys.push(item.key);
      return keys;
    }, []);

    if (missingLabelKeys.length === 0) {
      warnedMissingLabelSignatureRef.current = null;
      return;
    }

    const signature = missingLabelKeys.sort().join("|");
    if (warnedMissingLabelSignatureRef.current === signature) {
      return;
    }
    warnedMissingLabelSignatureRef.current = signature;

    console.warn(
      `[Tabs] Non-text labels should provide ariaLabel: ${missingLabelKeys
        .map((key) => `"${key}"`)
        .join(", ")}.`
    );
  }, [items]);

  React.useEffect(() => {
    setRecentKeyIndexMap(buildKeyIndexMap(items));
  }, [items]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production" || value === undefined) {
      return;
    }

    const hasMatchingEnabledItem = items.some((item) => item.key === value && !item.disabled);
    if (hasMatchingEnabledItem) {
      warnedInvalidControlledValueRef.current = null;
      return;
    }

    const reason = items.some((item) => item.key === value) ? "disabled" : "missing";
    const signature = `${value}::${reason}`;
    if (warnedInvalidControlledValueRef.current === signature) {
      return;
    }
    warnedInvalidControlledValueRef.current = signature;

    console.warn(
      `[Tabs] Controlled value "${value}" does not reference an enabled tab (${reason}); falling back to the first enabled tab.`
    );
  }, [items, value]);

  React.useEffect(() => {
    const ownerDocument = tabListRef.current?.ownerDocument ?? document;
    const markKeyboardIntent = (event: KeyboardEvent) => {
      if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
      }
      focusIntentRef.current = true;
    };
    const markPointerIntent = () => {
      focusIntentRef.current = false;
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
  }, []);

  const currentRawValue = value ?? internalValue;
  const currentItem = items.find((item) => item.key === currentRawValue);
  const currentValue = (() => {
    if (currentItem && !currentItem.disabled) {
      return currentRawValue;
    }

    if (value === undefined && currentRawValue && !currentItem) {
      return getNearestEnabledKey(
        items,
        recentKeyIndexMap[currentRawValue],
        firstEnabledKey
      );
    }

    return firstEnabledKey;
  })();
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
        const timerWindow = keyboardActivationTimerWindowRef.current ?? window;
        timerWindow.clearTimeout(keyboardActivationResetTimerRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    const enabledKeys = new Set(items.filter((item) => !item.disabled).map((item) => item.key));
    setHoveredTabKey((currentKey) =>
      currentKey && !enabledKeys.has(currentKey) ? null : currentKey
    );
    setPressedTabKey((currentKey) =>
      currentKey && !enabledKeys.has(currentKey) ? null : currentKey
    );
    setFocusVisibleTabKey((currentKey) =>
      currentKey && !enabledKeys.has(currentKey) ? null : currentKey
    );
  }, [items]);

  const clearKeyboardActivationLatch = React.useCallback(() => {
    keyboardActivationTabKeyRef.current = null;
    if (keyboardActivationResetTimerRef.current !== null) {
      const timerWindow = keyboardActivationTimerWindowRef.current ?? window;
      timerWindow.clearTimeout(keyboardActivationResetTimerRef.current);
      keyboardActivationResetTimerRef.current = null;
    }
    keyboardActivationTimerWindowRef.current = null;
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
        aria-label={resolvedAriaLabelledBy ? undefined : resolvedAriaLabel}
        aria-labelledby={resolvedAriaLabelledBy}
        aria-orientation={orientation}
        aria-disabled={firstEnabledKey ? undefined : true}
        onBlurCapture={(event) => {
          const nextFocused = event.relatedTarget as Node | null;
          if (nextFocused && event.currentTarget.contains(nextFocused)) {
            return;
          }

          setFocusedValue(currentValue);
        }}
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
          const hovered = !disabled && hoveredTabKey === item.key;
          const pressed = !disabled && pressedTabKey === item.key;
          const focusVisible = !disabled && focusVisibleTabKey === item.key;
          const interactive = hovered || focusVisible;
          const itemAriaLabel = resolveNonEmptyLabel(item.ariaLabel);

          return (
            <button
              key={item.key}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`${baseId}-tab-${index}`}
              type="button"
              role="tab"
              aria-label={itemAriaLabel}
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
              onMouseDown={(event) => {
                if (disabled) {
                  return;
                }

                if (event.button !== 0) {
                  return;
                }

                focusIntentRef.current = false;
                setFocusVisibleTabKey((currentKey) =>
                  currentKey === item.key ? null : currentKey
                );
                setPressedTabKey(item.key);
              }}
              onMouseUp={(event) => {
                if (event.button === 0) {
                  setPressedTabKey((currentKey) => (currentKey === item.key ? null : currentKey));
                }
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
                if (event.altKey || event.ctrlKey || event.metaKey) {
                  return;
                }
                if (activationMode === "manual" && isTabActivationKey(event.key)) {
                  if (isComposingActivationEvent(event)) {
                    return;
                  }
                  event.preventDefault();
                  if (event.repeat) {
                    return;
                  }
                  keyboardActivationTabKeyRef.current = item.key;
                  const ownerWindow = event.currentTarget.ownerDocument.defaultView ?? window;
                  if (keyboardActivationResetTimerRef.current !== null) {
                    const timerWindow = keyboardActivationTimerWindowRef.current ?? ownerWindow;
                    timerWindow.clearTimeout(keyboardActivationResetTimerRef.current);
                  }
                  keyboardActivationTimerWindowRef.current = ownerWindow;
                  keyboardActivationResetTimerRef.current = ownerWindow.setTimeout(() => {
                    keyboardActivationTabKeyRef.current = null;
                    keyboardActivationResetTimerRef.current = null;
                    keyboardActivationTimerWindowRef.current = null;
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

function isComposingActivationEvent(event: React.KeyboardEvent<HTMLButtonElement>) {
  const nativeEvent = event.nativeEvent;
  if (nativeEvent.isComposing) {
    return true;
  }

  return typeof nativeEvent.keyCode === "number" && nativeEvent.keyCode === 229;
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

function resolveNonEmptyLabel(label: string | undefined, fallback?: string): string | undefined {
  if (typeof label === "string" && label.trim().length > 0) {
    return label.trim();
  }

  return fallback;
}
