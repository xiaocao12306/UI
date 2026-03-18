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
  onValueChange?: (value: string) => void;
};

function getNextEnabledIndex(items: TabItem[], startIndex: number, direction: 1 | -1) {
  if (items.length === 0) {
    return -1;
  }

  let index = startIndex;
  for (let i = 0; i < items.length; i += 1) {
    index = (index + direction + items.length) % items.length;
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
  onValueChange
}: TabsProps) {
  const baseId = React.useId();
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
              onClick={() => {
                setFocusedValue(item.key);
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
                  const firstIndex = getNextEnabledIndex(items, -1, 1);
                  moveToIndex(firstIndex);
                  return;
                }

                if (event.key === "End") {
                  event.preventDefault();
                  const lastIndex = getNextEnabledIndex(items, 0, -1);
                  moveToIndex(lastIndex);
                  return;
                }

                const nextKeyToDirection =
                  orientation === "horizontal"
                    ? { ArrowRight: 1 as const, ArrowLeft: -1 as const }
                    : { ArrowDown: 1 as const, ArrowUp: -1 as const };
                const direction = nextKeyToDirection[event.key as keyof typeof nextKeyToDirection];
                if (!direction) {
                  return;
                }

                event.preventDefault();

                const nextIndex = getNextEnabledIndex(items, index, direction);
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
