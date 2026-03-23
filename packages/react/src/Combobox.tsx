import * as React from "react";
import { Input } from "./Input";

export type ComboboxOption = {
  value: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
};

export type ComboboxProps = {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onInputKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  emptyMessage?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
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

function shouldHandleComboboxHomeEndKey(event: React.KeyboardEvent<HTMLInputElement>) {
  if (event.key !== "Home" && event.key !== "End") {
    return true;
  }

  const input = event.currentTarget;
  const selectionStart = input.selectionStart;
  const selectionEnd = input.selectionEnd;
  if (selectionStart === null || selectionEnd === null) {
    return true;
  }

  if (selectionStart !== selectionEnd) {
    return false;
  }

  if (event.key === "Home") {
    return selectionStart === 0;
  }

  return selectionEnd === input.value.length;
}

function getComboboxOptionRenderKeys(options: ComboboxOption[]) {
  const counts = new Map<string, number>();
  return options.map((item) => {
    const count = counts.get(item.value) ?? 0;
    counts.set(item.value, count + 1);
    return count === 0 ? item.value : `${item.value}__duplicate-${count}`;
  });
}

function isPrimaryPointerButton(button: number | undefined) {
  return typeof button !== "number" || button <= 0;
}

function isPrimaryPointerDownEvent(event: PointerEvent) {
  if (!isPrimaryPointerButton(event.button)) {
    return false;
  }

  const button = typeof event.button === "number" ? event.button : 0;
  if (event.ctrlKey && button === 0) {
    return false;
  }

  if (event.pointerType === "mouse" || event.pointerType === "") {
    if (typeof event.buttons === "number" && event.buttons !== 0 && (event.buttons & 1) === 0) {
      return false;
    }
  }

  return true;
}

function resolveBooleanFlag(value: unknown, fallback: boolean) {
  if (typeof value !== "boolean") {
    return fallback;
  }

  return value;
}

export function Combobox({
  options,
  value,
  defaultValue,
  onValueChange,
  onInputKeyDown,
  placeholder = "Search option...",
  emptyMessage = "No option found.",
  disabled = false,
  id,
  ariaLabel = "Combobox",
  ariaLabelledBy
}: ComboboxProps) {
  const listId = React.useId();
  const rootRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [query, setQuery] = React.useState("");
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const warnedDuplicateValuesSignatureRef = React.useRef<string | null>(null);
  const warnedMissingAriaLabelSignatureRef = React.useRef<string | null>(null);
  const warnedMissingSearchMetadataSignatureRef = React.useRef<string | null>(null);
  const wasOpenRef = React.useRef(false);
  const previousQueryRef = React.useRef("");
  const previousActiveSnapshotRef = React.useRef<{ activeIndex: number; filteredRenderKeys: string[] }>({
    activeIndex: -1,
    filteredRenderKeys: []
  });
  const resolvedAriaLabelledBy =
    resolveNonEmptyLabel(ariaLabelledBy);
  const resolvedAriaLabel =
    resolvedAriaLabelledBy === undefined
      ? resolveNonEmptyLabel(ariaLabel, "Combobox")
      : undefined;
  const resolvedPlaceholder = resolveNonEmptyLabel(placeholder, "Search option...");
  const resolvedEmptyMessage = hasRenderableComboboxNode(emptyMessage)
    ? emptyMessage
    : "No option found.";
  const resolvedDisabled = resolveBooleanFlag(disabled, false);
  const resolvedOptions = React.useMemo(
    () =>
      options.map((option) => ({
        ...option,
        disabled: resolveBooleanFlag(option.disabled, false)
      })),
    [options]
  );
  const resolvedListboxAriaLabel =
    resolvedAriaLabel === undefined ? undefined : `${resolvedAriaLabel} options`;
  const currentValue = value ?? internalValue;
  const selectedOptionIndex = React.useMemo(() => {
    const firstEnabledMatchIndex = resolvedOptions.findIndex(
      (item) => item.value === currentValue && !item.disabled
    );
    if (firstEnabledMatchIndex >= 0) {
      return firstEnabledMatchIndex;
    }

    return resolvedOptions.findIndex((item) => item.value === currentValue);
  }, [currentValue, resolvedOptions]);
  const selectedOption = React.useMemo(
    () => (selectedOptionIndex >= 0 ? resolvedOptions[selectedOptionIndex] : undefined),
    [resolvedOptions, selectedOptionIndex]
  );

  React.useEffect(() => {
    if (!open) {
      setQuery(selectedOption ? getComboboxOptionText(selectedOption) : "");
    }
  }, [open, selectedOption]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const duplicateValues = new Set<string>();
    const seenValues = new Set<string>();
    resolvedOptions.forEach((option) => {
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
        .join(", ")}. Values should be unique to keep selection and active option semantics deterministic; duplicate values now receive duplicate-occurrence render-key suffixes to avoid React key collisions.`
    );
  }, [resolvedOptions]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const missingAriaLabelValues = resolvedOptions.reduce<string[]>((values, option) => {
      const hasReadableLabelText = getReadableComboboxLabelText(option.label).length > 0;
      const hasExplicitAriaLabel = resolveNonEmptyLabel(option.ariaLabel) !== undefined;
      const hasExplicitAriaLabelledBy = resolveNonEmptyLabel(option.ariaLabelledBy) !== undefined;
      const hasTextValueAlias = resolveNonEmptyLabel(option.textValue) !== undefined;

      if (hasReadableLabelText || hasExplicitAriaLabel || hasExplicitAriaLabelledBy || hasTextValueAlias) {
        return values;
      }

      values.push(`"${option.value}"`);
      return values;
    }, []);

    if (missingAriaLabelValues.length === 0) {
      warnedMissingAriaLabelSignatureRef.current = null;
      return;
    }

    const signature = missingAriaLabelValues.slice().sort().join("|");
    if (warnedMissingAriaLabelSignatureRef.current === signature) {
      return;
    }
    warnedMissingAriaLabelSignatureRef.current = signature;

    console.warn(
      `[Combobox] Non-text option labels should provide ariaLabel, ariaLabelledBy, or textValue for accessible naming: ${missingAriaLabelValues.join(", ")}.`
    );
  }, [resolvedOptions]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const missingSearchMetadataValues = resolvedOptions.reduce<string[]>((values, option) => {
      const hasReadableLabelText = getReadableComboboxLabelText(option.label).length > 0;
      const hasTextValue = resolveNonEmptyLabel(option.textValue) !== undefined;
      const hasAriaLabel = resolveNonEmptyLabel(option.ariaLabel) !== undefined;
      const hasSearchKeywords =
        Array.isArray(option.keywords) &&
        option.keywords.some((keyword) => typeof keyword === "string" && keyword.trim().length > 0);

      if (hasReadableLabelText || hasTextValue || hasAriaLabel || hasSearchKeywords) {
        return values;
      }

      values.push(`"${option.value}"`);
      return values;
    }, []);

    if (missingSearchMetadataValues.length === 0) {
      warnedMissingSearchMetadataSignatureRef.current = null;
      return;
    }

    const signature = missingSearchMetadataValues.slice().sort().join("|");
    if (warnedMissingSearchMetadataSignatureRef.current === signature) {
      return;
    }
    warnedMissingSearchMetadataSignatureRef.current = signature;

    console.warn(
      `[Combobox] Non-text option labels should provide textValue, ariaLabel, or keywords for searchable metadata: ${missingSearchMetadataValues.join(", ")}.`
    );
  }, [resolvedOptions]);

  React.useEffect(() => {
    if (resolvedDisabled) {
      setOpen(false);
      setActiveIndex(-1);
    }
  }, [resolvedDisabled]);

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
    const normalized = normalizeSearchText(query);
    if (!normalized) {
      return resolvedOptions;
    }

    return resolvedOptions.filter((option) => {
      const haystack = normalizeSearchText([getComboboxOptionText(option), ...(option.keywords ?? [])].join(" "));
      return haystack.includes(normalized);
    });
  }, [query, resolvedOptions]);
  const enabledCount = React.useMemo(
    () => filtered.reduce((count, option) => (option.disabled ? count : count + 1), 0),
    [filtered]
  );
  const canNavigateOptions = enabledCount > 1;
  const canSelectOption = open && enabledCount > 0;
  const searchKeyShortcuts = React.useMemo(() => {
    if (resolvedDisabled) {
      return undefined;
    }
    if (!open) {
      return "Enter";
    }

    const shortcuts: string[] = [];
    if (canNavigateOptions) {
      shortcuts.push("ArrowDown", "ArrowUp", "Home", "End");
    }
    if (canSelectOption) {
      shortcuts.push("Enter");
    }
    if (open) {
      shortcuts.push("Escape");
    }

    return shortcuts.length > 0 ? shortcuts.join(" ") : undefined;
  }, [canNavigateOptions, canSelectOption, open, resolvedDisabled]);
  const filteredRenderKeys = React.useMemo(() => getComboboxOptionRenderKeys(filtered), [filtered]);

  React.useEffect(() => {
    if (!open) {
      wasOpenRef.current = false;
      previousQueryRef.current = query;
      setActiveIndex(-1);
      return;
    }

    const queryUnchanged = wasOpenRef.current && previousQueryRef.current === query;
    const selectedIndex = filtered.findIndex(
      (item) => item === selectedOption && !item.disabled
    );
    if (selectedIndex >= 0) {
      wasOpenRef.current = true;
      previousQueryRef.current = query;
      setActiveIndex((current) => (current === selectedIndex ? current : selectedIndex));
      return;
    }

    if (queryUnchanged) {
      const previousSnapshot = previousActiveSnapshotRef.current;
      const previousActiveRenderKey =
        previousSnapshot.activeIndex >= 0 &&
        previousSnapshot.activeIndex < previousSnapshot.filteredRenderKeys.length
          ? previousSnapshot.filteredRenderKeys[previousSnapshot.activeIndex] ?? null
          : null;

      if (previousActiveRenderKey !== null) {
        const preservedActiveIndex = filteredRenderKeys.findIndex(
          (renderKey, index) => renderKey === previousActiveRenderKey && !filtered[index]?.disabled
        );
        if (preservedActiveIndex >= 0) {
          wasOpenRef.current = true;
          previousQueryRef.current = query;
          setActiveIndex((current) => (current === preservedActiveIndex ? current : preservedActiveIndex));
          return;
        }
      }
    }

    const firstEnabled = filtered.findIndex((item) => !item.disabled);
    wasOpenRef.current = true;
    previousQueryRef.current = query;
    setActiveIndex((current) => {
      if (current >= 0 && current < filtered.length && !filtered[current]?.disabled) {
        return current;
      }
      return firstEnabled;
    });
  }, [filtered, filteredRenderKeys, open, query, selectedOption]);

  React.useEffect(() => {
    previousActiveSnapshotRef.current = {
      activeIndex,
      filteredRenderKeys
    };
  }, [activeIndex, filteredRenderKeys]);

  const selectOption = (option: ComboboxOption) => {
    if (resolvedDisabled || option.disabled) {
      return;
    }

    if (value === undefined) {
      setInternalValue(option.value);
    }
    onValueChange?.(option.value);
    setOpen(false);
  };
  const hasResults = open && filtered.length > 0;

  return (
    <div ref={rootRef} style={{ display: "grid", gap: 8 }}>
      <Input
        ref={inputRef}
        id={id}
        role="combobox"
        aria-autocomplete="list"
        aria-haspopup="listbox"
        aria-expanded={hasResults}
        aria-controls={hasResults ? listId : undefined}
        aria-activedescendant={hasResults && activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined}
        aria-keyshortcuts={searchKeyShortcuts}
        aria-label={resolvedAriaLabel}
        aria-labelledby={resolvedAriaLabelledBy}
        autoComplete="off"
        value={query}
        disabled={resolvedDisabled}
        placeholder={resolvedPlaceholder}
        onFocus={() => {
          if (resolvedDisabled) {
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
          if (resolvedDisabled) {
            return;
          }
          setQuery(event.target.value);
          setOpen(true);
        }}
        onKeyDown={(event) => {
          if (resolvedDisabled) {
            return;
          }
          onInputKeyDown?.(event);
          if (event.defaultPrevented) {
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
            if (!shouldHandleComboboxHomeEndKey(event)) {
              return;
            }
            event.preventDefault();
            setOpen(true);
            setActiveIndex(filtered.findIndex((item) => !item.disabled));
            return;
          }

          if (event.key === "End") {
            if (!shouldHandleComboboxHomeEndKey(event)) {
              return;
            }
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
            if (event.repeat) {
              return;
            }
            const item = filtered[activeIndex];
            if (item) {
              selectOption(item);
            }
          }
        }}
      />
      {hasResults ? (
        <div
          id={listId}
          role="listbox"
          aria-label={resolvedListboxAriaLabel}
          aria-labelledby={resolvedAriaLabelledBy}
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
          {filtered.map((item, index) => {
            const active = index === activeIndex;
            const selected = item === selectedOption;
            const resolvedOptionAriaLabelledBy = resolveNonEmptyLabel(item.ariaLabelledBy);
            const hasReadableOptionLabelText = getReadableComboboxLabelText(item.label).length > 0;
            const optionTextValueFallback = resolveNonEmptyLabel(item.textValue);
            const resolvedOptionAriaLabel =
              resolvedOptionAriaLabelledBy === undefined
                ? resolveNonEmptyLabel(
                    item.ariaLabel,
                    hasReadableOptionLabelText ? undefined : optionTextValueFallback
                  )
                : undefined;
            return (
              <button
                key={filteredRenderKeys[index] ?? `${item.value}__index-${index}`}
                id={`${listId}-option-${index}`}
                type="button"
                role="option"
                tabIndex={-1}
                aria-labelledby={resolvedOptionAriaLabelledBy}
                aria-label={resolvedOptionAriaLabel}
                aria-selected={selected}
                aria-disabled={item.disabled || undefined}
                disabled={item.disabled}
                onMouseDown={(event) => {
                  if (event.button !== 0 || event.ctrlKey || item.disabled) {
                    return;
                  }
                  event.preventDefault();
                  inputRef.current?.focus();
                }}
                onPointerDown={(event) => {
                  if (
                    item.disabled ||
                    event.pointerType === "mouse" ||
                    !isPrimaryPointerButton(event.button) ||
                    event.ctrlKey
                  ) {
                    return;
                  }
                  // Preserve combobox input focus for touch/pen selection.
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
          })}
        </div>
      ) : open ? (
        <p role="status" aria-live="polite" style={{ margin: 0, padding: "8px 10px", color: "var(--aurora-text-secondary)" }}>
          {resolvedEmptyMessage}
        </p>
      ) : null}
    </div>
  );
}

function normalizeSearchText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function getComboboxOptionText(option: ComboboxOption) {
  const resolvedTextValue = resolveNonEmptyLabel(option.textValue);
  if (resolvedTextValue !== undefined) {
    return normalizeReadableComboboxText(resolvedTextValue);
  }

  const resolvedAriaLabel = resolveNonEmptyLabel(option.ariaLabel);
  if (resolvedAriaLabel !== undefined) {
    return normalizeReadableComboboxText(resolvedAriaLabel);
  }

  const readableLabelText = getReadableComboboxLabelText(option.label);
  if (readableLabelText.length > 0) {
    return readableLabelText;
  }

  return normalizeReadableComboboxText(option.value);
}

function getReadableComboboxLabelText(node: React.ReactNode): string {
  if (typeof node === "string") {
    return normalizeReadableComboboxText(node);
  }

  if (typeof node === "number") {
    return normalizeReadableComboboxText(String(node));
  }

  if (Array.isArray(node)) {
    return normalizeReadableComboboxText(
      node
        .map((item) => getReadableComboboxLabelText(item))
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

  if (
    typeof elementProps["aria-label"] === "string" &&
    elementProps["aria-label"].trim().length > 0
  ) {
    return normalizeReadableComboboxText(elementProps["aria-label"]);
  }

  return getReadableComboboxLabelText(elementProps.children);
}

function resolveNonEmptyLabel(label: string | undefined, fallback?: string): string | undefined {
  if (typeof label === "string" && label.trim().length > 0) {
    return label.trim();
  }

  return fallback;
}

function hasRenderableComboboxNode(node: React.ReactNode): boolean {
  if (node === null || node === undefined || typeof node === "boolean") {
    return false;
  }

  if (typeof node === "string") {
    return node.trim().length > 0;
  }

  if (typeof node === "number") {
    return true;
  }

  if (Array.isArray(node)) {
    return node.some((item) => hasRenderableComboboxNode(item));
  }

  return React.isValidElement(node);
}

function normalizeReadableComboboxText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}
