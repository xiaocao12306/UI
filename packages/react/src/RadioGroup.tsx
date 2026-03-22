import * as React from "react";
import { resolveInvalidAria } from "./a11y";

export type RadioOption = {
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  disabled?: boolean;
};

export type RadioGroupProps = {
  name: string;
  value?: string;
  defaultValue?: string;
  options: RadioOption[];
  onChange?: (nextValue: string) => void;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  invalid?: boolean;
  "aria-invalid"?: React.AriaAttributes["aria-invalid"];
  disabled?: boolean;
  direction?: "vertical" | "horizontal";
};

export function RadioGroup({
  name,
  value,
  defaultValue,
  options,
  onChange,
  ariaLabel,
  ariaLabelledBy,
  invalid,
  "aria-invalid": ariaInvalid,
  disabled = false,
  direction = "vertical"
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);
  const [focusVisibleIndex, setFocusVisibleIndex] = React.useState<number | null>(null);
  const groupRef = React.useRef<HTMLDivElement | null>(null);
  const focusVisibleIntentRef = React.useRef(false);
  const warnedDuplicateValuesSignatureRef = React.useRef<string | null>(null);
  const warnedMissingAriaLabelSignatureRef = React.useRef<string | null>(null);
  const currentValue = value ?? internalValue;
  const resolvedInvalidAria = resolveInvalidAria(invalid, ariaInvalid);
  const isInvalid = resolvedInvalidAria !== undefined;
  const resolvedAriaLabelledBy = resolveNonEmptyLabel(ariaLabelledBy);
  const resolvedAriaLabel = resolvedAriaLabelledBy
    ? undefined
    : resolveNonEmptyLabel(ariaLabel);
  const focusRingColor = isInvalid
    ? "color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)"
    : "color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)";

  React.useEffect(() => {
    if (!disabled) {
      return;
    }

    setFocusedIndex(null);
    setFocusVisibleIndex(null);
  }, [disabled]);

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
      `[RadioGroup] Duplicate option values detected: ${Array.from(duplicateValues)
        .map((item) => `"${item}"`)
        .join(", ")}. Values should be unique to keep checked and focus semantics deterministic; duplicate render keys are auto-suffixed by option index for stability.`
    );
  }, [options]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const missingAriaLabelValues = options.reduce<string[]>((values, option) => {
      const hasReadableLabelText = getReadableRadioOptionText(option).length > 0;
      const hasExplicitAriaLabel = resolveNonEmptyLabel(option.ariaLabel) !== undefined;
      const hasExplicitAriaLabelledBy = resolveNonEmptyLabel(option.ariaLabelledBy) !== undefined;

      if (hasReadableLabelText || hasExplicitAriaLabel || hasExplicitAriaLabelledBy) {
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
      `[RadioGroup] Non-text option labels should provide ariaLabel or ariaLabelledBy: ${missingAriaLabelValues.join(", ")}.`
    );
  }, [options]);

  const optionRenderKeys = React.useMemo(() => {
    const counts = new Map<string, number>();
    return options.map((option) => {
      const count = counts.get(option.value) ?? 0;
      counts.set(option.value, count + 1);
      return count === 0 ? option.value : `${option.value}__duplicate-${count}`;
    });
  }, [options]);

  React.useEffect(() => {
    const ownerDocument = groupRef.current?.ownerDocument ?? document;
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

  const handleChange = (nextValue: string, optionDisabled: boolean | undefined) => {
    if (disabled || optionDisabled) {
      return;
    }
    if (value === undefined) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  };

  return (
    <div
      ref={groupRef}
      style={{
        display: direction === "horizontal" ? "flex" : "grid",
        gap: 8,
        alignItems: direction === "horizontal" ? "center" : undefined
      }}
      role="radiogroup"
      aria-label={resolvedAriaLabelledBy ? undefined : resolvedAriaLabel ?? name}
      aria-labelledby={resolvedAriaLabelledBy}
      aria-orientation={direction}
      aria-invalid={resolvedInvalidAria}
    >
      {options.map((option, index) => {
        const optionDisabled = Boolean(disabled || option.disabled);
        const isFocused = focusedIndex === index;
        const isFocusVisible = focusVisibleIndex === index;
        const optionAriaLabelledBy = resolveNonEmptyLabel(option.ariaLabelledBy);
        const optionAriaLabel = optionAriaLabelledBy ? undefined : resolveNonEmptyLabel(option.ariaLabel);

        return (
          <label
            key={optionRenderKeys[index] ?? `${option.value}__index-${index}`}
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: 8,
              color: "var(--aurora-text-primary)",
              fontSize: "var(--aurora-font-size-sm)",
              opacity: optionDisabled ? 0.7 : 1,
              cursor: optionDisabled ? "not-allowed" : "pointer"
            }}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              aria-labelledby={optionAriaLabelledBy}
              aria-label={optionAriaLabel}
              checked={currentValue === option.value}
              disabled={optionDisabled}
              aria-keyshortcuts={optionDisabled ? undefined : "Space"}
              data-focused={isFocused ? "true" : undefined}
              data-focus-visible={isFocusVisible ? "true" : undefined}
              onChange={() => handleChange(option.value, option.disabled)}
              onFocus={(event) => {
                setFocusedIndex(index);
                setFocusVisibleIndex(
                  resolveFocusVisibleState(event.currentTarget, focusVisibleIntentRef.current)
                    ? index
                    : null
                );
              }}
              onBlur={() => {
                setFocusedIndex((current) => (current === index ? null : current));
                setFocusVisibleIndex((current) => (current === index ? null : current));
              }}
              onMouseDown={(event) => {
                if (event.button !== 0 || event.ctrlKey) {
                  return;
                }
                focusVisibleIntentRef.current = false;
                setFocusVisibleIndex((current) => (current === index ? null : current));
              }}
              onPointerDown={(event) => {
                if (!isPrimaryPointerButton(event.button) || event.ctrlKey) {
                  return;
                }
                focusVisibleIntentRef.current = false;
                setFocusVisibleIndex((current) => (current === index ? null : current));
              }}
              onKeyDown={() => {
                focusVisibleIntentRef.current = true;
              }}
              style={{
                marginTop: 2,
                accentColor: isInvalid ? "var(--aurora-color-red-500)" : "var(--aurora-accent-default)",
                cursor: optionDisabled ? "not-allowed" : "pointer",
                boxShadow: isFocused && isFocusVisible && !optionDisabled ? `0 0 0 3px ${focusRingColor}` : "none"
              }}
            />
            <span style={{ display: "grid", gap: option.description ? 2 : 0 }}>
              <span>{option.label}</span>
              {option.description ? (
                <span style={{ color: "var(--aurora-text-secondary)", fontSize: "var(--aurora-font-size-xs)" }}>{option.description}</span>
              ) : null}
            </span>
          </label>
        );
      })}
    </div>
  );
}

function resolveNonEmptyLabel(label: string | undefined) {
  if (typeof label !== "string") {
    return undefined;
  }

  const normalized = label.trim();
  return normalized.length > 0 ? normalized : undefined;
}

function getReadableRadioOptionText(option: RadioOption) {
  const labelText = getReadableRadioTextNode(option.label);
  const descriptionText = getReadableRadioTextNode(option.description);
  return normalizeReadableRadioText([labelText, descriptionText].filter((item) => item.length > 0).join(" "));
}

function getReadableRadioTextNode(node: React.ReactNode): string {
  if (typeof node === "string") {
    return normalizeReadableRadioText(node);
  }

  if (typeof node === "number") {
    return normalizeReadableRadioText(String(node));
  }

  if (Array.isArray(node)) {
    return normalizeReadableRadioText(
      node
        .map((item) => getReadableRadioTextNode(item))
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
    return normalizeReadableRadioText(elementProps["aria-label"]);
  }

  return getReadableRadioTextNode(elementProps.children);
}

function normalizeReadableRadioText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function resolveFocusVisibleState(target: HTMLInputElement, fallback: boolean) {
  try {
    return target.matches(":focus-visible") || fallback;
  } catch {
    return fallback;
  }
}

function isPrimaryPointerButton(button: number | undefined) {
  return typeof button !== "number" || button <= 0;
}
