import * as React from "react";

export type RadioOption = {
  label: React.ReactNode;
  value: string;
};

export type RadioGroupProps = {
  name: string;
  value?: string;
  options: RadioOption[];
  onChange?: (nextValue: string) => void;
};

export function RadioGroup({ name, value, options, onChange }: RadioGroupProps) {
  return (
    <div style={{ display: "grid", gap: 8 }} role="radiogroup" aria-label={name}>
      {options.map((option) => (
        <label
          key={option.value}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "var(--aurora-text-primary)",
            fontSize: "var(--aurora-font-size-sm)"
          }}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
