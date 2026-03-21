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
  const focusVisibleIntentRef = React.useRef(false);
  const resolvedInvalidAria = resolveInvalidAria(invalid, ariaInvalid);
  const isInvalid = resolvedInvalidAria !== undefined;
  const isInteractionDisabled = Boolean(disabled);
  const ariaLabelledBy = resolveNonEmptyLabel(rawAriaLabelledBy);
  const ariaLabel = ariaLabelledBy ? undefined : resolveNonEmptyLabel(rawAriaLabel);
  const ariaKeyShortcuts = isInteractionDisabled
    ? undefined
    : resolveNonEmptyLabel(rawAriaKeyShortcuts) ?? "ArrowDown ArrowUp";
  const optionValues = React.useMemo(() => collectSelectOptionValues(children), [children]);

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
        .join(", ")}. Values should be unique to keep native selected-option semantics deterministic.`
    );
  }, [optionValues]);

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
      if ("button" in event && typeof event.button === "number" && event.button !== 0) {
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
      disabled={disabled}
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
        background: disabled
          ? "color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))"
          : "var(--aurora-input-bg)",
        color: disabled
          ? "color-mix(in srgb, var(--aurora-input-text) 60%, transparent)"
          : "var(--aurora-input-text)",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style
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
        if (event.button === 0) {
          focusVisibleIntentRef.current = false;
          setFocusVisible(false);
        }
        onMouseDown?.(event);
      }}
      onPointerDown={(event) => {
        if (event.button === 0) {
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
      {children}
    </select>
  );
});

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

function collectSelectOptionValues(children: React.ReactNode) {
  const values: string[] = [];
  const collect = (nodes: React.ReactNode) => {
    React.Children.forEach(nodes, (node) => {
      if (!React.isValidElement(node)) {
        return;
      }

      const type = typeof node.type === "string" ? node.type : null;
      if (type === "option") {
        const optionValue = resolveOptionValue((node.props as { value?: unknown }).value);
        if (optionValue !== undefined) {
          values.push(optionValue);
        }
        return;
      }

      if (type === "optgroup") {
        collect((node.props as { children?: React.ReactNode }).children);
        return;
      }

      collect((node.props as { children?: React.ReactNode }).children);
    });
  };

  collect(children);
  return values;
}

function resolveOptionValue(value: unknown) {
  if (value === undefined || value === null) {
    return undefined;
  }
  return String(value);
}
