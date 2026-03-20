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
  invalid,
  "aria-invalid": ariaInvalid,
  disabled = false,
  direction = "vertical"
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const currentValue = value ?? internalValue;
  const resolvedInvalidAria = resolveInvalidAria(invalid, ariaInvalid);
  const isInvalid = resolvedInvalidAria !== undefined;
  const resolvedAriaLabel =
    typeof ariaLabel === "string" && ariaLabel.trim().length > 0
      ? ariaLabel.trim()
      : undefined;

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
      style={{
        display: direction === "horizontal" ? "flex" : "grid",
        gap: 8,
        alignItems: direction === "horizontal" ? "center" : undefined
      }}
      role="radiogroup"
      aria-label={resolvedAriaLabel ?? name}
      aria-invalid={resolvedInvalidAria}
    >
      {options.map((option) => (
        <label
          key={option.value}
          style={{
            display: "inline-flex",
            alignItems: "flex-start",
            gap: 8,
            color: "var(--aurora-text-primary)",
            fontSize: "var(--aurora-font-size-sm)",
            opacity: disabled || option.disabled ? 0.7 : 1,
            cursor: disabled || option.disabled ? "not-allowed" : "pointer"
          }}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={currentValue === option.value}
            disabled={disabled || option.disabled}
            onChange={() => handleChange(option.value, option.disabled)}
            style={{
              marginTop: 2,
              accentColor: isInvalid ? "var(--aurora-color-red-500)" : "var(--aurora-accent-default)",
              cursor: disabled || option.disabled ? "not-allowed" : "pointer"
            }}
          />
          <span style={{ display: "grid", gap: option.description ? 2 : 0 }}>
            <span>{option.label}</span>
            {option.description ? (
              <span style={{ color: "var(--aurora-text-secondary)", fontSize: "var(--aurora-font-size-xs)" }}>{option.description}</span>
            ) : null}
          </span>
        </label>
      ))}
    </div>
  );
}
