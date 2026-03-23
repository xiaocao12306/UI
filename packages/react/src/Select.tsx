import * as React from "react";
import { fieldBaseStyle } from "./FieldStyles";
import { resolveInvalidAria } from "./a11y";

export type SelectProps = React.ComponentPropsWithoutRef<"select"> & {
  invalid?: boolean;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    style,
    invalid,
    disabled,
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onPointerDown,
    "aria-invalid": ariaInvalid,
    "aria-label": rawAriaLabel,
    "aria-labelledby": rawAriaLabelledBy,
    "aria-keyshortcuts": rawAriaKeyShortcuts,
    children,
    ...restProps
  },
  ref
) {
  const selectRef = React.useRef<HTMLSelectElement | null>(null);
  const warnedDuplicateOptionValuesSignatureRef = React.useRef<string | null>(null);
  const [focused, setFocused] = React.useState(false);
  const [focusVisible, setFocusVisible] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const committedValueRef = React.useRef<string | undefined>(undefined);
  const focusVisibleIntentRef = React.useRef(false);
  const resolvedInvalidAria = resolveInvalidAria(invalid, ariaInvalid);
  const isInvalid = resolvedInvalidAria !== undefined;
  const resolvedDisabled = resolveBooleanFlag(disabled, false);
  const isInteractionDisabled = resolvedDisabled;
  const ariaLabelledBy = resolveNonEmptyLabel(rawAriaLabelledBy);
  const ariaLabel = ariaLabelledBy ? undefined : resolveNonEmptyLabel(rawAriaLabel);
  const ariaKeyShortcuts = isInteractionDisabled
    ? undefined
    : resolveNonEmptyLabel(rawAriaKeyShortcuts) ?? "ArrowDown ArrowUp";
  const normalizedChildren = React.useMemo(() => normalizeSelectChildren(children), [children]);
  const optionMetadata = React.useMemo(
    () => collectSelectOptionMetadata(normalizedChildren),
    [normalizedChildren]
  );
  const optionValues = React.useMemo(
    () => optionMetadata.map((option) => option.value),
    [optionMetadata]
  );

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const duplicateValues = new Set<string>();
    const seenValues = new Set<string>();
    optionValues.forEach((value) => {
      if (seenValues.has(value)) {
        duplicateValues.add(value);
      }
      seenValues.add(value);
    });

    if (duplicateValues.size === 0) {
      warnedDuplicateOptionValuesSignatureRef.current = null;
      return;
    }

    const signature = Array.from(duplicateValues).sort().join("|");
    if (warnedDuplicateOptionValuesSignatureRef.current === signature) {
      return;
    }
    warnedDuplicateOptionValuesSignatureRef.current = signature;

    console.warn(
      `[Select] Duplicate option values detected: ${Array.from(duplicateValues)
        .map((item) => `"${item}"`)
        .join(
          ", "
        )}. Values should be unique to keep native selected-option semantics deterministic. Duplicate values fall back to the first enabled matching option for selected-state semantics.`
    );
  }, [optionValues]);

  React.useLayoutEffect(() => {
    const select = selectRef.current;
    if (!select) {
      return;
    }

    const selectedValue = resolveOptionValue(select.value);
    if (selectedValue === undefined) {
      return;
    }

    const preferredSelectedIndex = resolvePreferredOptionIndex(optionMetadata, selectedValue);
    if (preferredSelectedIndex >= 0 && preferredSelectedIndex !== select.selectedIndex) {
      // Keep duplicate option-value semantics deterministic by preferring the first enabled match.
      select.selectedIndex = preferredSelectedIndex;
    }
    committedValueRef.current = resolveOptionValue(select.value);
  }, [optionMetadata, value]);

  React.useEffect(() => {
    if (!isInteractionDisabled) {
      return;
    }

    setFocused(false);
    setFocusVisible(false);
    setHovered(false);
  }, [isInteractionDisabled]);

  React.useEffect(() => {
    const ownerDocument = selectRef.current?.ownerDocument ?? document;
    const markKeyboardIntent = (event: KeyboardEvent) => {
      if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
      }
      focusVisibleIntentRef.current = true;
    };
    const markPointerIntent = (event: Event) => {
      if ("button" in event && !isPrimaryPointerButton((event as MouseEvent | PointerEvent).button)) {
        return;
      }
      if ("ctrlKey" in event && event.ctrlKey) {
        return;
      }
      focusVisibleIntentRef.current = false;
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

  const setRefs = React.useCallback(
    (node: HTMLSelectElement | null) => {
      selectRef.current = node;
      if (typeof ref === "function") {
        ref(node);
        return;
      }

      if (ref) {
        ref.current = node;
      }
    },
    [ref]
  );

  return (
    <select
      ref={setRefs}
      {...restProps}
      value={value}
      defaultValue={defaultValue}
      disabled={resolvedDisabled}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-invalid={resolvedInvalidAria}
      aria-keyshortcuts={ariaKeyShortcuts}
      data-invalid={isInvalid ? "true" : undefined}
      data-focused={focused ? "true" : undefined}
      data-focus-visible={focusVisible ? "true" : undefined}
      data-hovered={hovered ? "true" : undefined}
      data-aurora-reduced-motion="transition"
      style={{
        ...fieldBaseStyle,
        transition:
          "border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",
        borderColor: isInvalid
          ? "var(--aurora-color-red-500)"
          : focused
            ? "var(--aurora-border-strong)"
            : hovered && !isInteractionDisabled
              ? "var(--aurora-border-strong)"
              : "var(--aurora-input-border)",
        boxShadow: focused && focusVisible && !isInteractionDisabled
          ? `0 0 0 3px ${isInvalid ? "color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)" : "color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`
          : "none",
        background: resolvedDisabled
          ? "color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))"
          : "var(--aurora-input-bg)",
        color: resolvedDisabled
          ? "color-mix(in srgb, var(--aurora-input-text) 60%, transparent)"
          : "var(--aurora-input-text)",
        cursor: resolvedDisabled ? "not-allowed" : "pointer",
        ...style
      }}
      onChange={(event) => {
        const currentValue = resolveOptionValue(event.currentTarget.value);
        if (currentValue !== undefined) {
          const preferredSelectedIndex = resolvePreferredOptionIndex(optionMetadata, currentValue);
          if (
            preferredSelectedIndex >= 0 &&
            preferredSelectedIndex !== event.currentTarget.selectedIndex
          ) {
            event.currentTarget.selectedIndex = preferredSelectedIndex;
          }
        }

        const normalizedValue = resolveOptionValue(event.currentTarget.value);
        const previousValue = committedValueRef.current;
        committedValueRef.current = normalizedValue;
        if (normalizedValue !== undefined && previousValue !== undefined && normalizedValue === previousValue) {
          return;
        }

        onChange?.(event);
      }}
      onFocus={(event) => {
        setFocused(true);
        setFocusVisible(
          resolveFocusVisibleState(event.currentTarget, focusVisibleIntentRef.current)
        );
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setFocused(false);
        setFocusVisible(false);
        onBlur?.(event);
      }}
      onMouseDown={(event) => {
        if (event.button === 0 && !event.ctrlKey) {
          focusVisibleIntentRef.current = false;
          setFocusVisible(false);
        }
        onMouseDown?.(event);
      }}
      onPointerDown={(event) => {
        if (isPrimaryPointerButton(event.button) && !event.ctrlKey) {
          focusVisibleIntentRef.current = false;
          setFocusVisible(false);
        }
        onPointerDown?.(event);
      }}
      onMouseEnter={(event) => {
        if (!isInteractionDisabled) {
          setHovered(true);
        }
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setHovered(false);
        onMouseLeave?.(event);
      }}
    >
      {normalizedChildren}
    </select>
  );
});

function resolveBooleanFlag(value: unknown, fallback: boolean) {
  if (typeof value !== "boolean") {
    return fallback;
  }

  return value;
}

function resolveNonEmptyLabel(label: string | undefined) {
  if (typeof label !== "string") {
    return undefined;
  }

  const normalized = label.trim();
  return normalized.length > 0 ? normalized : undefined;
}

function resolveFocusVisibleState(target: HTMLSelectElement, fallback: boolean) {
  try {
    return target.matches(":focus-visible") || fallback;
  } catch {
    return fallback;
  }
}

function isPrimaryPointerButton(button: number | undefined) {
  return typeof button !== "number" || button <= 0;
}

type SelectOptionMetadata = {
  value: string;
  disabled: boolean;
};

function normalizeSelectChildren(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (node) => {
    if (!React.isValidElement(node)) {
      return node;
    }

    const type = typeof node.type === "string" ? node.type : null;
    if (type === "option") {
      const optionProps = node.props as { disabled?: unknown };
      return React.cloneElement(node, {
        disabled: resolveBooleanFlag(optionProps.disabled, false)
      } as { disabled: boolean });
    }

    if (type === "optgroup") {
      const optionGroupProps = node.props as { children?: React.ReactNode; disabled?: unknown };
      return React.cloneElement(node, {
        disabled: resolveBooleanFlag(optionGroupProps.disabled, false),
        children: normalizeSelectChildren(optionGroupProps.children)
      } as { disabled: boolean; children?: React.ReactNode });
    }

    const elementProps = node.props as { children?: React.ReactNode };
    return React.cloneElement(node, {
      children: normalizeSelectChildren(elementProps.children)
    } as { children?: React.ReactNode });
  });
}

function collectSelectOptionMetadata(children: React.ReactNode) {
  const metadata: SelectOptionMetadata[] = [];
  const collect = (nodes: React.ReactNode, inheritedDisabled = false) => {
    React.Children.forEach(nodes, (node) => {
      if (!React.isValidElement(node)) {
        return;
      }

      const type = typeof node.type === "string" ? node.type : null;
      if (type === "option") {
        const optionProps = node.props as { value?: unknown; disabled?: unknown; children?: React.ReactNode };
        const optionValue = resolveOptionValue(optionProps.value, optionProps.children);
        if (optionValue !== undefined) {
          metadata.push({
            value: optionValue,
            disabled: inheritedDisabled || resolveBooleanFlag(optionProps.disabled, false)
          });
        }
        return;
      }

      if (type === "optgroup") {
        const optionGroupProps = node.props as { children?: React.ReactNode; disabled?: unknown };
        collect(
          optionGroupProps.children,
          inheritedDisabled || resolveBooleanFlag(optionGroupProps.disabled, false)
        );
        return;
      }

      collect((node.props as { children?: React.ReactNode }).children, inheritedDisabled);
    });
  };

  collect(children);
  return metadata;
}

function resolveOptionValue(value: unknown, fallbackNode?: React.ReactNode) {
  if (value === undefined || value === null) {
    const fallbackValue = getReadableOptionText(fallbackNode);
    return fallbackValue.length > 0 ? fallbackValue : undefined;
  }
  return String(value);
}

function getReadableOptionText(node: React.ReactNode): string {
  if (typeof node === "string") {
    return normalizeOptionText(node);
  }

  if (typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return normalizeOptionText(
      node
        .map((child) => getReadableOptionText(child))
        .filter((childText) => childText.length > 0)
        .join(" ")
    );
  }

  if (!React.isValidElement(node)) {
    return "";
  }

  return getReadableOptionText((node.props as { children?: React.ReactNode }).children);
}

function normalizeOptionText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function resolvePreferredOptionIndex(options: SelectOptionMetadata[], selectedValue: string) {
  let firstMatchingIndex = -1;
  let firstEnabledMatchingIndex = -1;
  for (let index = 0; index < options.length; index += 1) {
    const option = options[index];
    if (option.value !== selectedValue) {
      continue;
    }

    if (firstMatchingIndex === -1) {
      firstMatchingIndex = index;
    }

    if (!option.disabled) {
      firstEnabledMatchingIndex = index;
      break;
    }
  }

  if (firstEnabledMatchingIndex !== -1) {
    return firstEnabledMatchingIndex;
  }

  return firstMatchingIndex;
}
