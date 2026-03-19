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
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    children,
    ...props
  },
  ref
) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const [focusVisible, setFocusVisible] = React.useState(false);
  const focusVisibleIntentRef = React.useRef(true);
  const interactionDisabled = disabled || loading;
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

  return (
    <button
      ref={ref}
      type={type ?? "button"}
      disabled={interactionDisabled}
      aria-busy={loading || undefined}
      data-loading={loading ? "true" : undefined}
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
        focusVisibleIntentRef.current = false;
        setFocusVisible(false);
        if (!interactionDisabled && event.button === 0) {
          setPressed(true);
        }
        onMouseDown?.(event);
      }}
      onPointerDown={(event) => {
        focusVisibleIntentRef.current = false;
        setFocusVisible(false);
        onPointerDown?.(event);
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
        if (!interactionDisabled && isButtonActivationKey(event.key)) {
          setPressed(true);
        }
        onKeyDown?.(event);
      }}
      onKeyUp={(event) => {
        if (isButtonActivationKey(event.key)) {
          setPressed(false);
        }
        onKeyUp?.(event);
      }}
      {...props}
    >
      {loading ? (
        <>
          <span
            aria-hidden="true"
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
  return key === "Enter" || key === " " || key === "Spacebar";
}

function resolveFocusVisibleState(target: HTMLButtonElement, fallback: boolean) {
  try {
    return target.matches(":focus-visible");
  } catch {
    return fallback;
  }
}
