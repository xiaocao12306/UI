import * as React from "react";
import { resolveInvalidState } from "./a11y";

export type SwitchProps = Omit<React.ComponentPropsWithoutRef<"button">, "children" | "role" | "onChange"> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  invalid?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
};

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  {
    checked,
    defaultChecked = false,
    onCheckedChange,
    disabled = false,
    invalid,
    label,
    description,
    style,
    type,
    onClick,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    onKeyDown,
    "aria-invalid": ariaInvalid,
    ...props
  },
  forwardedRef
) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const [focused, setFocused] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const isInvalid = resolveInvalidState(invalid, ariaInvalid);

  const descriptionId = React.useId();
  const labelId = React.useId();

  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;
  const describedBy = [props["aria-describedby"], description ? descriptionId : undefined].filter(Boolean).join(" ") || undefined;
  const labelledBy =
    props["aria-label"] || props["aria-labelledby"] || !label ? props["aria-labelledby"] : labelId;

  const focusRingColor = isInvalid
    ? "color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)"
    : "color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)";
  const trackBorderColor = isInvalid
    ? "var(--aurora-color-red-500)"
    : hovered && !disabled
      ? "var(--aurora-border-strong)"
      : "var(--aurora-border-default)";
  const trackBackground = disabled
    ? "color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))"
    : isInvalid
      ? currentChecked
        ? "color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))"
        : "color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))"
      : currentChecked
        ? "var(--aurora-accent-default)"
        : "var(--aurora-surface-elevated)";

  const handleToggle = React.useCallback(() => {
    if (disabled) {
      return;
    }
    const nextChecked = !Boolean(currentChecked);
    if (!isControlled) {
      setInternalChecked(nextChecked);
    }
    onCheckedChange?.(nextChecked);
  }, [currentChecked, disabled, isControlled, onCheckedChange]);

  return (
    <button
      {...props}
      ref={forwardedRef}
      type={type ?? "button"}
      role="switch"
      aria-checked={currentChecked}
      aria-invalid={isInvalid || undefined}
      aria-disabled={disabled || undefined}
      aria-describedby={describedBy}
      aria-labelledby={labelledBy}
      disabled={disabled}
      data-state={currentChecked ? "checked" : "unchecked"}
      data-invalid={isInvalid ? "true" : undefined}
      style={{
        border: "none",
        margin: 0,
        padding: 0,
        background: "transparent",
        color: "var(--aurora-text-primary)",
        font: "inherit",
        display: "inline-flex",
        alignItems: "flex-start",
        gap: 10,
        textAlign: "left",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.72 : 1,
        ...style
      }}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }
        handleToggle();
      }}
      onFocus={(event) => {
        setFocused(true);
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setFocused(false);
        setPressed(false);
        onBlur?.(event);
      }}
      onMouseEnter={(event) => {
        setHovered(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setHovered(false);
        setPressed(false);
        onMouseLeave?.(event);
      }}
      onMouseDown={(event) => {
        setPressed(true);
        onMouseDown?.(event);
      }}
      onMouseUp={(event) => {
        setPressed(false);
        onMouseUp?.(event);
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (event.defaultPrevented || disabled) {
          return;
        }
        if (event.key === " " || event.key === "Spacebar") {
          event.preventDefault();
          handleToggle();
        }
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 44,
          height: 24,
          borderRadius: 999,
          border: `1px solid ${trackBorderColor}`,
          background: trackBackground,
          padding: 2,
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
          boxShadow: focused ? `0 0 0 3px ${focusRingColor}` : "none",
          transition:
            "background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"
        }}
      >
        <span
          style={{
            width: 18,
            height: 18,
            borderRadius: 999,
            background: "var(--aurora-surface-default)",
            boxShadow: "var(--aurora-shadow-sm)",
            transform: `translateX(${currentChecked ? 20 : 0}px) scale(${pressed ? 0.96 : 1})`,
            transition:
              "transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"
          }}
        />
      </span>
      {label || description ? (
        <span style={{ display: "grid", gap: description ? 2 : 0, paddingTop: 1 }}>
          {label ? <span id={labelId}>{label}</span> : null}
          {description ? (
            <span id={descriptionId} style={{ color: "var(--aurora-text-secondary)", fontSize: "var(--aurora-font-size-xs)" }}>
              {description}
            </span>
          ) : null}
        </span>
      ) : null}
    </button>
  );
});
