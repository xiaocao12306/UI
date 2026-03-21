import * as React from "react";
import { fieldBaseStyle } from "./FieldStyles";
import { resolveInvalidAria } from "./a11y";

export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  invalid?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    style,
    invalid,
    disabled,
    readOnly,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    onKeyDown,
    onKeyUp,
    onPointerDown,
    "aria-invalid": ariaInvalid,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    ...props
  },
  ref
) {
  const [focused, setFocused] = React.useState(false);
  const [focusVisible, setFocusVisible] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const focusVisibleIntentRef = React.useRef(false);
  const resolvedInvalidAria = resolveInvalidAria(invalid, ariaInvalid);
  const isInvalid = resolvedInvalidAria !== undefined;
  const isInteractionDisabled = Boolean(disabled);
  const resolvedAriaLabelledBy = resolveNonEmptyLabel(ariaLabelledBy);
  const resolvedAriaLabel = resolvedAriaLabelledBy ? undefined : resolveNonEmptyLabel(ariaLabel);

  React.useEffect(() => {
    if (!isInteractionDisabled) {
      return;
    }

    setFocused(false);
    setFocusVisible(false);
    setHovered(false);
    setActive(false);
  }, [isInteractionDisabled]);

  return (
    <input
      ref={ref}
      disabled={disabled}
      readOnly={readOnly}
      data-aurora-input="true"
      aria-invalid={resolvedInvalidAria}
      aria-label={resolvedAriaLabel}
      aria-labelledby={resolvedAriaLabelledBy}
      data-invalid={isInvalid ? "true" : undefined}
      data-focused={focused ? "true" : undefined}
      data-focus-visible={focusVisible ? "true" : undefined}
      data-hovered={hovered ? "true" : undefined}
      data-active={active ? "true" : undefined}
      data-disabled={isInteractionDisabled ? "true" : undefined}
      data-aurora-reduced-motion="transition"
      style={{
        ...fieldBaseStyle,
        transition:
          "border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",
        borderColor: isInteractionDisabled
          ? "var(--aurora-input-border)"
          : isInvalid
          ? "var(--aurora-color-red-500)"
          : focused || active
            ? "var(--aurora-border-strong)"
            : hovered
              ? "var(--aurora-border-strong)"
              : "var(--aurora-input-border)",
        boxShadow: focused && focusVisible && !isInteractionDisabled
          ? `0 0 0 3px ${isInvalid ? "color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)" : "color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`
          : "none",
        transform: active && !readOnly && !isInteractionDisabled ? "translateY(1px)" : undefined,
        background: disabled
          ? "color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))"
          : readOnly
            ? "color-mix(in srgb, var(--aurora-input-bg) 85%, var(--aurora-surface-default))"
            : "var(--aurora-input-bg)",
        color: disabled
          ? "color-mix(in srgb, var(--aurora-input-text) 60%, transparent)"
          : "var(--aurora-input-text)",
        cursor: disabled ? "not-allowed" : readOnly ? "default" : undefined,
        ...style
      }}
      onFocus={(event) => {
        setFocused(true);
        setFocusVisible(resolveFocusVisibleState(event.currentTarget, focusVisibleIntentRef.current));
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setFocused(false);
        setFocusVisible(false);
        setActive(false);
        onBlur?.(event);
      }}
      onMouseEnter={(event) => {
        if (!isInteractionDisabled) {
          setHovered(true);
        }
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setHovered(false);
        setActive(false);
        onMouseLeave?.(event);
      }}
      onMouseDown={(event) => {
        if (event.button === 0) {
          focusVisibleIntentRef.current = false;
          setFocusVisible(false);
        }
        if (!isInteractionDisabled && !readOnly && event.button === 0) {
          setActive(true);
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
      onMouseUp={(event) => {
        if (event.button === 0) {
          setActive(false);
        }
        onMouseUp?.(event);
      }}
      onKeyDown={(event) => {
        focusVisibleIntentRef.current = true;
        if (
          !isInteractionDisabled &&
          !readOnly &&
          isInputActivationKey(event.key) &&
          !isModifiedActivationChord(event) &&
          !isComposingKeyboardEvent(event)
        ) {
          setActive(true);
        }
        onKeyDown?.(event);
      }}
      onKeyUp={(event) => {
        if (isInputActivationKey(event.key) && !isComposingKeyboardEvent(event)) {
          setActive(false);
        }
        onKeyUp?.(event);
      }}
      {...props}
    />
  );
});

function isInputActivationKey(key: string) {
  return key === "Enter";
}

function isModifiedActivationChord(event: React.KeyboardEvent<HTMLInputElement>) {
  return event.ctrlKey || event.metaKey || event.altKey;
}

function isComposingKeyboardEvent(event: React.KeyboardEvent<HTMLInputElement>) {
  const nativeEvent = event.nativeEvent as KeyboardEvent & { isComposing?: boolean; keyCode?: number };
  return Boolean(nativeEvent.isComposing) || nativeEvent.keyCode === 229;
}

function resolveFocusVisibleState(target: HTMLInputElement, fallback: boolean) {
  try {
    return target.matches(":focus-visible") || fallback;
  } catch {
    return fallback;
  }
}

function resolveNonEmptyLabel(label: string | undefined) {
  if (typeof label === "string" && label.trim().length > 0) {
    return label.trim();
  }

  return undefined;
}
