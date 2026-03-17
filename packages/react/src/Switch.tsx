import * as React from "react";

export type SwitchProps = {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: React.ReactNode;
};

export function Switch({ checked, onCheckedChange, disabled, label }: SwitchProps) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: disabled ? "not-allowed" : "pointer" }}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onCheckedChange?.(!checked)}
        style={{
          width: 44,
          height: 24,
          borderRadius: 999,
          border: "1px solid var(--aurora-border-default)",
          background: checked ? "var(--aurora-accent-default)" : "var(--aurora-surface-elevated)",
          padding: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: checked ? "flex-end" : "flex-start"
        }}
      >
        <span
          style={{
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "#fff"
          }}
        />
      </button>
      {label ? <span style={{ color: "var(--aurora-text-primary)" }}>{label}</span> : null}
    </label>
  );
}
