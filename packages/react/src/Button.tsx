import * as React from "react";

export type ButtonVariant = "solid" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  loadingText?: React.ReactNode;
};

const sizeStyleMap: Record<ButtonSize, React.CSSProperties> = {
  sm: {
    height: "var(--aurora-button-height-sm)",
    fontSize: "var(--aurora-font-size-sm)",
    padding: "0 12px"
  },
  md: {
    height: "var(--aurora-button-height-md)",
    fontSize: "var(--aurora-font-size-md)",
    padding: "0 14px"
  },
  lg: {
    height: "var(--aurora-button-height-lg)",
    fontSize: "var(--aurora-font-size-md)",
    padding: "0 18px"
  }
};

type VariantStateStyles = {
  base: React.CSSProperties;
  hover: React.CSSProperties;
  active: React.CSSProperties;
  disabled: React.CSSProperties;
};

const variantStyleMap: Record<ButtonVariant, VariantStateStyles> = {
  solid: {
    base: {
      background: "var(--aurora-button-solid-bg)",
      color: "var(--aurora-button-solid-text)",
      border: "1px solid transparent"
    },
    hover: {
      background: "var(--aurora-button-solid-bg-hover)"
    },
    active: {
      background: "color-mix(in srgb, var(--aurora-button-solid-bg-hover) 88%, black)"
    },
    disabled: {
      background:
        "color-mix(in srgb, var(--aurora-button-solid-bg) 60%, var(--aurora-surface-elevated))",
      color: "var(--aurora-text-primary)"
    }
  },
  ghost: {
    base: {
      background: "var(--aurora-button-ghost-bg)",
      color: "var(--aurora-button-ghost-text)",
      border: "1px solid transparent"
    },
    hover: {
      background: "color-mix(in srgb, var(--aurora-text-primary) 8%, transparent)"
    },
    active: {
      background: "color-mix(in srgb, var(--aurora-text-primary) 14%, transparent)"
    },
    disabled: {
      color: "color-mix(in srgb, var(--aurora-button-ghost-text) 56%, transparent)"
    }
  },
  outline: {
    base: {
      background: "transparent",
      color: "var(--aurora-text-primary)",
      border: "1px solid var(--aurora-button-border)"
    },
    hover: {
      background: "color-mix(in srgb, var(--aurora-text-primary) 6%, transparent)",
      border: "1px solid var(--aurora-border-strong)"
    },
    active: {
      background: "color-mix(in srgb, var(--aurora-text-primary) 12%, transparent)",
      border: "1px solid var(--aurora-border-strong)"
    },
    disabled: {
      color: "color-mix(in srgb, var(--aurora-text-primary) 56%, transparent)",
      border: "1px solid color-mix(in srgb, var(--aurora-button-border) 64%, transparent)"
    }
  }
};

function resolveBooleanFlag(value: unknown, fallback: boolean) {
  if (typeof value !== "boolean") {
    return fallback;
  }
  return value;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "solid",
    size = "md",
    loading = false,
    loadingText,
    style,
    disabled,
    type,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    children,
    "aria-label": rawAriaLabel,
    "aria-labelledby": rawAriaLabelledBy,
    ...props
  },
  ref
) {
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const [focusVisible, setFocusVisible] = React.useState(false);
  const focusVisibleIntentRef = React.useRef(true);
  const missingA11yNameWarnedRef = React.useRef(false);
  const resolvedLoading = resolveBooleanFlag(loading, false);
  const interactionDisabled = disabled || resolvedLoading;
  const ariaLabelledBy =
    typeof rawAriaLabelledBy === "string" && rawAriaLabelledBy.trim().length > 0
      ? rawAriaLabelledBy.trim()
      : undefined;
  const ariaLabel =
    ariaLabelledBy === undefined && typeof rawAriaLabel === "string" && rawAriaLabel.trim().length > 0
      ? rawAriaLabel.trim()
      : undefined;
  const title = props.title;
  const variantStyles = variantStyleMap[variant];
  const stateStyle = interactionDisabled
    ? variantStyles.disabled
    : pressed
      ? variantStyles.active
      : hovered
        ? variantStyles.hover
        : null;

  React.useEffect(() => {
    if (!interactionDisabled) {
      return;
    }

    setHovered(false);
    setPressed(false);
  }, [interactionDisabled]);

  React.useEffect(() => {
    const ownerDocument = buttonRef.current?.ownerDocument ?? document;
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
    (node: HTMLButtonElement | null) => {
      buttonRef.current = node;
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

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    if (missingA11yNameWarnedRef.current) {
      return;
    }

    const hasExplicitName =
      (typeof ariaLabel === "string" && ariaLabel.trim().length > 0) ||
      (typeof ariaLabelledBy === "string" && ariaLabelledBy.trim().length > 0) ||
      (typeof title === "string" && title.trim().length > 0);
    const announcedContent = resolvedLoading ? (loadingText ?? children) : children;

    if (!hasExplicitName && !hasReadableText(announcedContent)) {
      missingA11yNameWarnedRef.current = true;
      console.warn(
        "[aurora-ui/Button] Icon-only usage requires an accessible name. Provide aria-label or aria-labelledby."
      );
    }
  }, [ariaLabel, ariaLabelledBy, children, resolvedLoading, loadingText, title]);

  return (
    <button
      data-aurora-reduced-motion="transition"
      ref={setRefs}
      type={type ?? "button"}
      disabled={interactionDisabled}
      aria-busy={resolvedLoading || undefined}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      data-loading={resolvedLoading ? "true" : undefined}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        borderRadius: "var(--aurora-button-radius)",
        fontWeight: "var(--aurora-font-weight-medium)",
        transition:
          "background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",
        cursor: interactionDisabled ? "not-allowed" : "pointer",
        boxShadow: focusVisible
          ? "0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)"
          : undefined,
        transform: !interactionDisabled && pressed ? "translateY(1px)" : undefined,
        ...sizeStyleMap[size],
        ...variantStyles.base,
        ...stateStyle,
        ...style
      }}
      onMouseEnter={(event) => {
        if (!interactionDisabled) {
          setHovered(true);
        }
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setHovered(false);
        setPressed(false);
        onMouseLeave?.(event);
      }}
      onMouseDown={(event) => {
        if (event.button === 0 && !event.ctrlKey) {
          focusVisibleIntentRef.current = false;
          setFocusVisible(false);
        }
        if (!interactionDisabled && event.button === 0 && !event.ctrlKey) {
          setPressed(true);
        }
        onMouseDown?.(event);
      }}
      onPointerDown={(event) => {
        if (event.button === 0 && !event.ctrlKey) {
          focusVisibleIntentRef.current = false;
          setFocusVisible(false);
        }
        if (
          !interactionDisabled &&
          !event.ctrlKey &&
          isPrimaryPointerButton(event.button)
        ) {
          setPressed(true);
        }
        onPointerDown?.(event);
      }}
      onPointerUp={(event) => {
        if (isPrimaryPointerButton(event.button)) {
          setPressed(false);
        }
        onPointerUp?.(event);
      }}
      onPointerCancel={(event) => {
        setPressed(false);
        onPointerCancel?.(event);
      }}
      onMouseUp={(event) => {
        if (event.button === 0) {
          setPressed(false);
        }
        onMouseUp?.(event);
      }}
      onFocus={(event) => {
        setFocusVisible(
          resolveFocusVisibleState(event.currentTarget, focusVisibleIntentRef.current)
        );
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setFocusVisible(false);
        setPressed(false);
        onBlur?.(event);
      }}
      onKeyDown={(event) => {
        focusVisibleIntentRef.current = true;
        onKeyDown?.(event);
        if (
          !event.defaultPrevented &&
          !interactionDisabled &&
          !isComposingButtonActivationEvent(event) &&
          isButtonActivationKey(event.key) &&
          !isModifiedActivationChord(event)
        ) {
          setPressed(true);
        }
      }}
      onKeyUp={(event) => {
        if (isButtonActivationKey(event.key)) {
          setPressed(false);
        }
        onKeyUp?.(event);
      }}
      {...props}
    >
      {resolvedLoading ? (
        <>
          <span
            aria-hidden="true"
            data-aurora-reduced-motion="animate"
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              border: "2px solid currentColor",
              borderTopColor: "transparent",
              animation: "aurora-spin 0.8s linear infinite"
            }}
          />
          <span>{loadingText ?? children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
});

function isButtonActivationKey(key: string) {
  return key === "Enter" || key === " " || key === "Space" || key === "Spacebar";
}

function isPrimaryPointerButton(button: number | undefined) {
  return typeof button !== "number" || button <= 0;
}

function isModifiedActivationChord(event: React.KeyboardEvent<HTMLButtonElement>) {
  return event.ctrlKey || event.metaKey || event.altKey;
}

function isComposingButtonActivationEvent(event: React.KeyboardEvent<HTMLButtonElement>) {
  const nativeEvent = event.nativeEvent;
  if (nativeEvent.isComposing) {
    return true;
  }

  return typeof nativeEvent.keyCode === "number" && nativeEvent.keyCode === 229;
}

function resolveFocusVisibleState(target: HTMLButtonElement, fallback: boolean) {
  try {
    return target.matches(":focus-visible") || fallback;
  } catch {
    return fallback;
  }
}

function hasReadableText(node: React.ReactNode): boolean {
  if (typeof node === "string") {
    return node.trim().length > 0;
  }

  if (typeof node === "number") {
    return true;
  }

  if (Array.isArray(node)) {
    return node.some((item) => hasReadableText(item));
  }

  if (React.isValidElement(node)) {
    const elementProps = node.props as {
      children?: React.ReactNode;
      "aria-hidden"?: boolean | "true" | "false";
      "aria-label"?: string;
    };
    if (elementProps["aria-hidden"] === true || elementProps["aria-hidden"] === "true") {
      return false;
    }
    if (typeof elementProps["aria-label"] === "string" && elementProps["aria-label"].trim().length > 0) {
      return true;
    }
    return hasReadableText(elementProps.children);
  }

  return false;
}
