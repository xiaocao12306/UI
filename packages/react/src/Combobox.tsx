import * as React from "react";
import { Input } from "./Input";

export type ComboboxOption = {
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
};

export type ComboboxProps = {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  emptyMessage?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  ariaLabel?: string;
};

function findNextEnabledIndex(options: ComboboxOption[], startIndex: number, direction: 1 | -1) {
  if (options.length === 0) {
    return -1;
  }

  let index = startIndex;
  for (let i = 0; i < options.length; i += 1) {
    index = (index + direction + options.length) % options.length;
    if (!options[index]?.disabled) {
      return index;
    }
  }

  return -1;
}

function isComboboxManagedKeyboardKey(key: string) {
  return (
    key === "Escape" ||
    key === "ArrowDown" ||
    key === "ArrowUp" ||
    key === "Home" ||
    key === "End" ||
    key === "Enter"
  );
}

function isComposingComboboxKeyEvent(event: React.KeyboardEvent<HTMLInputElement>) {
  const nativeEvent = event.nativeEvent as KeyboardEvent & { isComposing?: boolean; keyCode?: number };
  if (nativeEvent.isComposing) {
    return true;
  }

  // Legacy fallback for IME workflows on browsers emitting keyCode=229.
  return typeof nativeEvent.keyCode === "number" && nativeEvent.keyCode === 229;
}

function isPrimaryPointerDownEvent(event: PointerEvent) {
  const button = typeof event.button === "number" ? event.button : 0;
  if (button > 0) {
    return false;
  }

  if (event.pointerType === "mouse" || event.pointerType === "") {
    if (typeof event.buttons === "number" && event.buttons !== 0 && (event.buttons & 1) === 0) {
      return false;
    }
    if (event.ctrlKey) {
      return false;
    }
  }

  return true;
}

export function Combobox({
  options,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Search option...",
  emptyMessage = "No option found.",
  disabled = false,
  id,
  ariaLabel = "Combobox"
}: ComboboxProps) {
  const listId = React.useId();
  const rootRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [query, setQuery] = React.useState("");
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const warnedDuplicateValuesSignatureRef = React.useRef<string | null>(null);
  const resolvedAriaLabel =
    typeof ariaLabel === "string" && ariaLabel.trim().length > 0
      ? ariaLabel.trim()
      : "Combobox";
  const resolvedListboxAriaLabel = `${resolvedAriaLabel} options`;
  const currentValue = value ?? internalValue;

  const selectedOption = React.useMemo(() => options.find((item) => item.value === currentValue), [currentValue, options]);

  React.useEffect(() => {
    if (!open) {
      setQuery(selectedOption?.label ?? "");
    }
  }, [open, selectedOption]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const duplicateValues = new Set<string>();
    const seenValues = new Set<string>();
    options.forEach((option) => {
      if (seenValues.has(option.value)) {
        duplicateValues.add(option.value);
      }
      seenValues.add(option.value);
    });

    if (duplicateValues.size === 0) {
      warnedDuplicateValuesSignatureRef.current = null;
      return;
    }

    const signature = Array.from(duplicateValues).sort().join("|");
    if (warnedDuplicateValuesSignatureRef.current === signature) {
      return;
    }
    warnedDuplicateValuesSignatureRef.current = signature;

    console.warn(
      `[Combobox] Duplicate option values detected: ${Array.from(duplicateValues)
        .map((item) => `"${item}"`)
        .join(", ")}. Values should be unique to keep selection and active option semantics deterministic; duplicate values now receive render-key suffixes to avoid React key collisions.`
    );
  }, [options]);

  React.useEffect(() => {
    if (disabled) {
      setOpen(false);
      setActiveIndex(-1);
    }
  }, [disabled]);

  React.useEffect(() => {
    if (!open) {
      return;
    }

    const ownerDocument = rootRef.current?.ownerDocument ?? document;
    const onPointerDown = (event: PointerEvent) => {
      if (!isPrimaryPointerDownEvent(event)) {
        return;
      }
      if (event.defaultPrevented) {
        return;
      }
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    ownerDocument.addEventListener("pointerdown", onPointerDown);
    return () => {
      ownerDocument.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const filtered = React.useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return options;
    }

    return options.filter((option) => {
      const haystack = [option.label, ...(option.keywords ?? [])].join(" ").toLowerCase();
      return haystack.includes(normalized);
    });
  }, [options, query]);
  const filteredRenderKeys = React.useMemo(() => {
    const counts = new Map<string, number>();
    return filtered.map((item) => {
      const count = counts.get(item.value) ?? 0;
      counts.set(item.value, count + 1);
      return count === 0 ? item.value : `${item.value}__duplicate-${count}`;
    });
  }, [filtered]);

  React.useEffect(() => {
    if (!open) {
      setActiveIndex(-1);
      return;
    }

    const selectedIndex = filtered.findIndex((item) => item.value === currentValue && !item.disabled);
    if (selectedIndex >= 0) {
      setActiveIndex(selectedIndex);
      return;
    }

    const firstEnabled = filtered.findIndex((item) => !item.disabled);
    setActiveIndex(firstEnabled);
  }, [currentValue, filtered, open]);

  const selectOption = (option: ComboboxOption) => {
    if (disabled || option.disabled) {
      return;
    }

    if (value === undefined) {
      setInternalValue(option.value);
    }
    onValueChange?.(option.value);
    setOpen(false);
  };

  return (
    <div ref={rootRef} style={{ display: "grid", gap: 8 }}>
      <Input
        ref={inputRef}
        id={id}
        role="combobox"
        aria-autocomplete="list"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-activedescendant={open && activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined}
        aria-label={resolvedAriaLabel}
        autoComplete="off"
        value={query}
        disabled={disabled}
        placeholder={placeholder}
        onFocus={() => {
          if (disabled) {
            return;
          }
          setOpen(true);
        }}
        onBlur={(event) => {
          if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
            setOpen(false);
          }
        }}
        onChange={(event) => {
          if (disabled) {
            return;
          }
          setQuery(event.target.value);
          setOpen(true);
        }}
        onKeyDown={(event) => {
          if (disabled) {
            return;
          }

          if (isComboboxManagedKeyboardKey(event.key) && isComposingComboboxKeyEvent(event)) {
            return;
          }

          if ((event.altKey || event.ctrlKey || event.metaKey) && isComboboxManagedKeyboardKey(event.key)) {
            return;
          }

          if (event.key === "Escape") {
            setOpen(false);
            return;
          }

          if (event.key === "ArrowDown") {
            event.preventDefault();
            setOpen(true);
            setActiveIndex((previous) => findNextEnabledIndex(filtered, previous < 0 ? -1 : previous, 1));
            return;
          }

          if (event.key === "ArrowUp") {
            event.preventDefault();
            setOpen(true);
            setActiveIndex((previous) => findNextEnabledIndex(filtered, previous < 0 ? 0 : previous, -1));
            return;
          }

          if (event.key === "Home") {
            event.preventDefault();
            setOpen(true);
            setActiveIndex(filtered.findIndex((item) => !item.disabled));
            return;
          }

          if (event.key === "End") {
            event.preventDefault();
            setOpen(true);
            for (let index = filtered.length - 1; index >= 0; index -= 1) {
              if (!filtered[index]?.disabled) {
                setActiveIndex(index);
                return;
              }
            }
          }

          if (event.key === "Enter" && open && activeIndex >= 0) {
            event.preventDefault();
            const item = filtered[activeIndex];
            if (item) {
              selectOption(item);
            }
          }
        }}
      />
      {open ? (
        <div
          id={listId}
          role="listbox"
          aria-label={resolvedListboxAriaLabel}
          style={{
            border: "1px solid var(--aurora-border-default)",
            borderRadius: "var(--aurora-radius-md)",
            background: "var(--aurora-surface-default)",
            maxHeight: 220,
            overflow: "auto",
            padding: 4,
            display: "grid",
            gap: 4
          }}
        >
          {filtered.length > 0 ? (
            filtered.map((item, index) => {
              const active = index === activeIndex;
              const selected = item.value === currentValue;
              return (
                <button
                  key={filteredRenderKeys[index] ?? `${item.value}__index-${index}`}
                  id={`${listId}-option-${index}`}
                  type="button"
                  role="option"
                  tabIndex={-1}
                  aria-selected={selected}
                  aria-disabled={item.disabled || undefined}
                  disabled={item.disabled}
                  onMouseDown={(event) => {
                    if (event.button !== 0 || item.disabled) {
                      return;
                    }
                    event.preventDefault();
                    inputRef.current?.focus();
                  }}
                  onMouseEnter={() => {
                    if (!item.disabled) {
                      setActiveIndex(index);
                    }
                  }}
                  onClick={() => selectOption(item)}
                  style={{
                    border: "1px solid var(--aurora-border-default)",
                    borderRadius: "var(--aurora-radius-sm)",
                    background: active
                      ? "color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))"
                      : "var(--aurora-surface-default)",
                    color: item.disabled
                      ? "color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)"
                      : "var(--aurora-text-primary)",
                    textAlign: "left",
                    padding: "0 10px",
                    height: 34,
                    cursor: item.disabled ? "not-allowed" : "pointer"
                  }}
                >
                  {item.label}
                </button>
              );
            })
          ) : (
            <p role="status" aria-live="polite" style={{ margin: 0, padding: "8px 10px", color: "var(--aurora-text-secondary)" }}>
              {emptyMessage}
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
