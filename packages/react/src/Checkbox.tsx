import * as React from "react";

export type CheckboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  label?: React.ReactNode;
  description?: React.ReactNode;
  invalid?: boolean;
  indeterminate?: boolean;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, description, invalid = false, indeterminate = false, disabled, style, onFocus, onBlur, ...props },
  forwardedRef
) {
  const [focused, setFocused] = React.useState(false);
  const localRef = React.useRef<HTMLInputElement | null>(null);
  const descriptionId = React.useId();
  const describedBy = [props["aria-describedby"], description ? descriptionId : undefined].filter(Boolean).join(" ") || undefined;

  React.useEffect(() => {
    if (localRef.current) {
      localRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const assignRef = React.useCallback(
    (node: HTMLInputElement | null) => {
      localRef.current = node;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    },
    [forwardedRef]
  );

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "flex-start",
        gap: 10,
        color: "var(--aurora-text-primary)",
        fontSize: "var(--aurora-font-size-sm)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.75 : 1,
        ...style
      }}
    >
      <input
        {...props}
        ref={assignRef}
        type="checkbox"
        disabled={disabled}
        aria-invalid={invalid || undefined}
        aria-checked={indeterminate ? "mixed" : props["aria-checked"]}
        aria-describedby={describedBy}
        data-focused={focused ? "true" : undefined}
        style={{
          margin: "2px 0 0",
          width: 16,
          height: 16,
          accentColor: invalid ? "var(--aurora-color-red-500)" : "var(--aurora-accent-default)",
          cursor: disabled ? "not-allowed" : "pointer",
          boxShadow: focused
            ? `0 0 0 3px ${invalid ? "color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)" : "color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)"}`
            : "none"
        }}
        onFocus={(event) => {
          setFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          onBlur?.(event);
        }}
      />
      {label || description ? (
        <span style={{ display: "grid", gap: description ? 2 : 0 }}>
          {label ? <span>{label}</span> : null}
          {description ? (
            <span id={descriptionId} style={{ color: "var(--aurora-text-secondary)", fontSize: "var(--aurora-font-size-xs)" }}>
              {description}
            </span>
          ) : null}
        </span>
      ) : null}
    </label>
  );
});
