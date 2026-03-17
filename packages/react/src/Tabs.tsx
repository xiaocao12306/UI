import * as React from "react";

export type TabItem = {
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
};

export type TabsProps = {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export function Tabs({ items, value, defaultValue, onValueChange }: TabsProps) {
  const baseId = React.useId();
  const firstKey = items[0]?.key;
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? firstKey);
  const currentValue = value ?? internalValue;

  const select = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue);
    }
    onValueChange?.(nextValue);
  };

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div role="tablist" aria-orientation="horizontal" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {items.map((item) => {
          const selected = item.key === currentValue;
          const itemIndex = items.findIndex((candidate) => candidate.key === item.key);
          return (
            <button
              key={item.key}
              id={`${baseId}-tab-${item.key}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(item.key)}
              onKeyDown={(event) => {
                if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
                  return;
                }

                event.preventDefault();

                if (event.key === "Home") {
                  select(items[0]?.key ?? item.key);
                  return;
                }

                if (event.key === "End") {
                  select(items[items.length - 1]?.key ?? item.key);
                  return;
                }

                const nextIndex =
                  event.key === "ArrowRight"
                    ? (itemIndex + 1) % items.length
                    : (itemIndex - 1 + items.length) % items.length;

                select(items[nextIndex]?.key ?? item.key);
              }}
              style={{
                height: 34,
                borderRadius: "var(--aurora-radius-md)",
                border: selected ? "1px solid var(--aurora-accent-default)" : "1px solid var(--aurora-border-default)",
                background: selected ? "rgba(29, 78, 216, 0.1)" : "transparent",
                color: "var(--aurora-text-primary)",
                padding: "0 12px"
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
