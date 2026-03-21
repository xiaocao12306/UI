import * as React from "react";
import { resolveInvalidAria } from "./a11y";

export type RadioOption = {
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
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
  const [focusedValue, setFocusedValue] = React.useState<string | null>(null);
  const [focusVisibleValue, setFocusVisibleValue] = React.useState<string | null>(null);
  const groupRef = React.useRef<HTMLDivElement | null>(null);
  const focusVisibleIntentRef = React.useRef(false);
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

    setFocusedValue(null);
    setFocusVisibleValue(null);
  }, [disabled]);

  React.useEffect(() => {
    const ownerDocument = groupRef.current?.ownerDocument ?? document;
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
      aria-invalid={resolvedInvalidAria}
    >
      {options.map((option) => {
        const optionDisabled = Boolean(disabled || option.disabled);
        const isFocused = focusedValue === option.value;
        const isFocusVisible = focusVisibleValue === option.value;

        return (
          <label
            key={option.value}
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
              checked={currentValue === option.value}
              disabled={optionDisabled}
              data-focused={isFocused ? "true" : undefined}
              data-focus-visible={isFocusVisible ? "true" : undefined}
              onChange={() => handleChange(option.value, option.disabled)}
              onFocus={(event) => {
                setFocusedValue(option.value);
                setFocusVisibleValue(
                  resolveFocusVisibleState(event.currentTarget, focusVisibleIntentRef.current)
                    ? option.value
                    : null
                );
              }}
              onBlur={() => {
                setFocusedValue((current) => (current === option.value ? null : current));
                setFocusVisibleValue((current) => (current === option.value ? null : current));
              }}
              onMouseDown={(event) => {
                if (event.button !== 0) {
                  return;
                }
                focusVisibleIntentRef.current = false;
                setFocusVisibleValue((current) => (current === option.value ? null : current));
              }}
              onPointerDown={(event) => {
                if (event.button !== 0) {
                  return;
                }
                focusVisibleIntentRef.current = false;
                setFocusVisibleValue((current) => (current === option.value ? null : current));
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

function resolveFocusVisibleState(target: HTMLInputElement, fallback: boolean) {
  try {
    return target.matches(":focus-visible") || fallback;
  } catch {
    return fallback;
  }
}
