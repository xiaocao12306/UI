import * as React from "react";
import { fieldBaseStyle } from "./FieldStyles";
import { resolveInvalidAria } from "./a11y";

export type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  invalid?: boolean;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  {
    style,
    invalid,
    rows,
    disabled,
    readOnly,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onPointerDown,
    "aria-invalid": ariaInvalid,
    "aria-label": rawAriaLabel,
    "aria-labelledby": rawAriaLabelledBy,
    ...restProps
  },
  ref
) {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const [focused, setFocused] = React.useState(false);
  const [focusVisible, setFocusVisible] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const focusVisibleIntentRef = React.useRef(false);
  const resolvedInvalidAria = resolveInvalidAria(invalid, ariaInvalid);
  const isInvalid = resolvedInvalidAria !== undefined;
  const isInteractionDisabled = Boolean(disabled);
  const resolvedRows = resolveTextareaRows(rows);
  const ariaLabelledBy = resolveNonEmptyLabel(rawAriaLabelledBy);
  const ariaLabel = ariaLabelledBy ? undefined : resolveNonEmptyLabel(rawAriaLabel);

  React.useEffect(() => {
    if (!isInteractionDisabled) {
      return;
    }

    setFocused(false);
    setFocusVisible(false);
    setHovered(false);
  }, [isInteractionDisabled]);

  React.useEffect(() => {
    const ownerDocument = textareaRef.current?.ownerDocument ?? document;
    const markKeyboardIntent = (event: KeyboardEvent) => {
      if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
      }
      focusVisibleIntentRef.current = true;
    };
    const markPointerIntent = (event: Event) => {
      if ("button" in event && !isPrimaryPointerButton((event as MouseEvent | PointerEvent).button)) {
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

  const setRefs = React.useCallback(
    (node: HTMLTextAreaElement | null) => {
      textareaRef.current = node;
      if (typeof ref === "function") {
        ref(node);
        return;
      }

      if (ref) {
        ref.current = node;
      }
    },
    [ref]
  );

  return (
    <textarea
      ref={setRefs}
      {...restProps}
      rows={resolvedRows}
      disabled={disabled}
      readOnly={readOnly}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-invalid={resolvedInvalidAria}
      data-invalid={isInvalid ? "true" : undefined}
      data-focused={focused ? "true" : undefined}
      data-focus-visible={focusVisible ? "true" : undefined}
      data-hovered={hovered ? "true" : undefined}
      data-aurora-reduced-motion="transition"
      style={{
        ...fieldBaseStyle,
        transition:
          "border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",
        borderColor: isInvalid
          ? "var(--aurora-color-red-500)"
          : focused
            ? "var(--aurora-border-strong)"
            : hovered && !isInteractionDisabled
              ? "var(--aurora-border-strong)"
              : "var(--aurora-input-border)",
        boxShadow: focused && focusVisible && !isInteractionDisabled
          ? `0 0 0 3px ${isInvalid ? "color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)" : "color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`
          : "none",
        background: disabled
          ? "color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))"
          : readOnly
            ? "color-mix(in srgb, var(--aurora-input-bg) 85%, var(--aurora-surface-default))"
            : "var(--aurora-input-bg)",
        color: disabled
          ? "color-mix(in srgb, var(--aurora-input-text) 60%, transparent)"
          : "var(--aurora-input-text)",
        cursor: disabled ? "not-allowed" : readOnly ? "default" : undefined,
        minHeight: 96,
        height: "auto",
        padding: "10px 12px",
        resize: "vertical",
        ...style
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
      onMouseEnter={(event) => {
        if (!isInteractionDisabled) {
          setHovered(true);
        }
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setHovered(false);
        onMouseLeave?.(event);
      }}
    />
  );
});

function resolveNonEmptyLabel(label: string | undefined) {
  if (typeof label !== "string") {
    return undefined;
  }

  const normalized = label.trim();
  return normalized.length > 0 ? normalized : undefined;
}

function resolveFocusVisibleState(target: HTMLTextAreaElement, fallback: boolean) {
  try {
    return target.matches(":focus-visible") || fallback;
  } catch {
    return fallback;
  }
}

function isPrimaryPointerButton(button: number | undefined) {
  return typeof button !== "number" || button <= 0;
}

function resolveTextareaRows(rows: number | undefined) {
  if (typeof rows !== "number" || !Number.isFinite(rows)) {
    return undefined;
  }

  const normalized = Math.trunc(rows);
  return normalized > 0 ? normalized : undefined;
}
