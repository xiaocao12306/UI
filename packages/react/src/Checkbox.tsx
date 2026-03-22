import * as React from "react";
import { resolveInvalidAria } from "./a11y";

export type CheckboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  label?: React.ReactNode;
  description?: React.ReactNode;
  invalid?: boolean;
  indeterminate?: boolean;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    label,
    description,
    invalid,
    indeterminate = false,
    disabled,
    style,
    onFocus,
    onBlur,
    onMouseDown,
    onPointerDown,
    onKeyDown,
    "aria-invalid": ariaInvalid,
    "aria-label": rawAriaLabel,
    "aria-labelledby": rawAriaLabelledBy,
    "aria-keyshortcuts": rawAriaKeyShortcuts,
    ...restProps
  },
  forwardedRef
) {
  const [focused, setFocused] = React.useState(false);
  const [focusVisible, setFocusVisible] = React.useState(false);
  const localRef = React.useRef<HTMLInputElement | null>(null);
  const focusVisibleIntentRef = React.useRef(false);
  const descriptionId = React.useId();
  const resolvedInvalidAria = resolveInvalidAria(invalid, ariaInvalid);
  const isInvalid = resolvedInvalidAria !== undefined;
  const isInteractionDisabled = Boolean(disabled);
  const ariaLabelledBy = resolveNonEmptyLabel(rawAriaLabelledBy);
  const ariaLabel = ariaLabelledBy ? undefined : resolveNonEmptyLabel(rawAriaLabel);
  const ariaKeyShortcuts = isInteractionDisabled
    ? undefined
    : resolveNonEmptyLabel(rawAriaKeyShortcuts) ?? "Space";
  const describedBy = [restProps["aria-describedby"], description ? descriptionId : undefined].filter(Boolean).join(" ") || undefined;

  React.useEffect(() => {
    if (!isInteractionDisabled) {
      return;
    }

    setFocused(false);
    setFocusVisible(false);
  }, [isInteractionDisabled]);

  React.useEffect(() => {
    const ownerDocument = localRef.current?.ownerDocument ?? document;
    const markKeyboardIntent = (event: KeyboardEvent) => {
      if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
      }
      focusVisibleIntentRef.current = true;
    };
    const markPointerIntent = (event: Event) => {
      if ("button" in event && !isPrimaryPointerButton(event.button)) {
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
        {...restProps}
        ref={assignRef}
        type="checkbox"
        disabled={disabled}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-invalid={resolvedInvalidAria}
        aria-checked={indeterminate ? "mixed" : restProps["aria-checked"]}
        aria-describedby={describedBy}
        aria-keyshortcuts={ariaKeyShortcuts}
        data-focused={focused ? "true" : undefined}
        data-focus-visible={focusVisible ? "true" : undefined}
        style={{
          margin: "2px 0 0",
          width: 16,
          height: 16,
          accentColor: isInvalid ? "var(--aurora-color-red-500)" : "var(--aurora-accent-default)",
          cursor: disabled ? "not-allowed" : "pointer",
          boxShadow: focused && focusVisible && !isInteractionDisabled
            ? `0 0 0 3px ${isInvalid ? "color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)" : "color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)"}`
            : "none"
        }}
        onFocus={(event) => {
          setFocused(true);
          setFocusVisible(
            resolveFocusVisibleState(event.currentTarget, focusVisibleIntentRef.current)
          );
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          setFocusVisible(false);
          onBlur?.(event);
        }}
        onMouseDown={(event) => {
          if (event.button === 0 && !event.ctrlKey) {
            focusVisibleIntentRef.current = false;
            setFocusVisible(false);
          }
          onMouseDown?.(event);
        }}
        onPointerDown={(event) => {
          if (isPrimaryPointerButton(event.button) && !event.ctrlKey) {
            focusVisibleIntentRef.current = false;
            setFocusVisible(false);
          }
          onPointerDown?.(event);
        }}
        onKeyDown={(event) => {
          focusVisibleIntentRef.current = true;
          onKeyDown?.(event);
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

function isPrimaryPointerButton(button: number | undefined) {
  return typeof button !== "number" || button <= 0;
}
