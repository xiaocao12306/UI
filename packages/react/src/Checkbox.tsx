import * as React from "react";

export type CheckboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  label?: React.ReactNode;
};

export function Checkbox({ label, style, ...props }: CheckboxProps) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        color: "var(--aurora-text-primary)",
        fontSize: "var(--aurora-font-size-sm)",
        ...style
      }}
    >
      <input type="checkbox" {...props} />
      {label}
    </label>
  );
}
