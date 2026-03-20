import * as React from "react";
import { fieldBaseStyle } from "./FieldStyles";
import { resolveInvalidAria } from "./a11y";

export type SelectProps = React.ComponentPropsWithoutRef<"select"> & {
  invalid?: boolean;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { style, invalid, disabled, onFocus, onBlur, onMouseEnter, onMouseLeave, "aria-invalid": ariaInvalid, ...props },
  ref
) {
  const [focused, setFocused] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const resolvedInvalidAria = resolveInvalidAria(invalid, ariaInvalid);
  const isInvalid = resolvedInvalidAria !== undefined;

  return (
    <select
      ref={ref}
      disabled={disabled}
      aria-invalid={resolvedInvalidAria}
      data-invalid={isInvalid ? "true" : undefined}
      data-focused={focused ? "true" : undefined}
      data-aurora-reduced-motion="transition"
      style={{
        ...fieldBaseStyle,
        transition:
          "border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",
        borderColor: isInvalid
          ? "var(--aurora-color-red-500)"
          : focused
            ? "var(--aurora-border-strong)"
            : hovered && !disabled
              ? "var(--aurora-border-strong)"
              : "var(--aurora-input-border)",
        boxShadow: focused
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
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setFocused(false);
        onBlur?.(event);
      }}
      onMouseEnter={(event) => {
        setHovered(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setHovered(false);
        onMouseLeave?.(event);
      }}
      {...props}
    />
  );
});
