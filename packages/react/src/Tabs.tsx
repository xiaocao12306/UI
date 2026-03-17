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

export function Tabs({ items, value, defaultValue, ariaLabel = "Tabs", onValueChange }: TabsProps) {
  const baseId = React.useId();
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const firstEnabledKey = items.find((item) => !item.disabled)?.key;
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? firstEnabledKey);

  const currentRawValue = value ?? internalValue;
  const currentValue = items.some((item) => item.key === currentRawValue && !item.disabled) ? currentRawValue : firstEnabledKey;

  React.useEffect(() => {
    if (value === undefined && currentValue !== internalValue) {
      setInternalValue(currentValue);
    }
  }, [currentValue, internalValue, value]);

  const select = React.useCallback(
    (nextValue: string) => {
      const target = items.find((item) => item.key === nextValue);
      if (!target || target.disabled) {
        return;
      }

      if (value === undefined) {
        setInternalValue(nextValue);
      }
      onValueChange?.(nextValue);
    },
    [items, onValueChange, value]
  );

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        aria-orientation="horizontal"
        style={{ display: "flex", gap: 6, flexWrap: "wrap" }}
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
              tabIndex={selected ? 0 : -1}
              disabled={disabled}
              onClick={() => select(item.key)}
              onKeyDown={(event) => {
                if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
                  return;
                }

                event.preventDefault();

                if (event.key === "Home") {
                  const firstIndex = getNextEnabledIndex(items, -1, 1);
                  const firstKey = items[firstIndex]?.key;
                  if (firstKey) {
                    select(firstKey);
                    tabRefs.current[firstIndex]?.focus();
                  }
                  return;
                }

                if (event.key === "End") {
                  const lastIndex = getNextEnabledIndex(items, 0, -1);
                  const lastKey = items[lastIndex]?.key;
                  if (lastKey) {
                    select(lastKey);
                    tabRefs.current[lastIndex]?.focus();
                  }
                  return;
                }

                const nextIndex = getNextEnabledIndex(items, index, event.key === "ArrowRight" ? 1 : -1);
                const nextKey = items[nextIndex]?.key;
                if (nextKey) {
                  select(nextKey);
                  tabRefs.current[nextIndex]?.focus();
                }
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

      {items.map((item) =>
        item.key === currentValue ? (
          <div
            key={item.key}
            id={`${baseId}-panel-${item.key}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${item.key}`}
            style={{
              border: "1px solid var(--aurora-border-default)",
              borderRadius: "var(--aurora-radius-md)",
              padding: 12,
              background: "var(--aurora-surface-default)"
            }}
          >
            {item.content}
          </div>
        ) : null
      )}
    </div>
  );
}
