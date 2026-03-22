import * as React from "react";
import { resolveInvalidAria } from "./a11y";

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
    onPointerDown,
    onPointerUp,
    onPointerCancel,
    onKeyDown,
    onKeyUp,
    "aria-invalid": ariaInvalid,
    "aria-label": rawAriaLabel,
    "aria-labelledby": rawAriaLabelledBy,
    "aria-keyshortcuts": rawAriaKeyShortcuts,
    ...props
  },
  forwardedRef
) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const [focused, setFocused] = React.useState(false);
  const [focusVisible, setFocusVisible] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const focusVisibleIntentRef = React.useRef(true);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const warnedMissingAriaLabelSignatureRef = React.useRef<string | null>(null);
  const resolvedInvalidAria = resolveInvalidAria(invalid, ariaInvalid);
  const isInvalid = resolvedInvalidAria !== undefined;

  const descriptionId = React.useId();
  const labelId = React.useId();

  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;
  const hasLabelContent = hasRenderableSwitchNode(label);
  const hasDescriptionContent = hasRenderableSwitchNode(description);
  const ariaLabelledBy = resolveNonEmptyLabel(rawAriaLabelledBy);
  const ariaLabel = ariaLabelledBy ? undefined : resolveNonEmptyLabel(rawAriaLabel);
  const ariaKeyShortcuts = disabled ? undefined : resolveNonEmptyLabel(rawAriaKeyShortcuts) ?? "Space";
  const describedBy = [props["aria-describedby"], hasDescriptionContent ? descriptionId : undefined]
    .filter(Boolean)
    .join(" ") || undefined;
  const labelledBy =
    ariaLabel || ariaLabelledBy || !hasLabelContent ? ariaLabelledBy : labelId;

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

  React.useEffect(() => {
    if (!disabled) {
      return;
    }

    setFocused(false);
    setFocusVisible(false);
    setHovered(false);
    setPressed(false);
  }, [disabled]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const hasReadableLabelText = getReadableSwitchTextNode(label).length > 0;
    const hasExplicitAriaLabel = ariaLabel !== undefined || ariaLabelledBy !== undefined;
    if (hasReadableLabelText || hasExplicitAriaLabel) {
      warnedMissingAriaLabelSignatureRef.current = null;
      return;
    }

    const signature = "missing-aria-name";
    if (warnedMissingAriaLabelSignatureRef.current === signature) {
      return;
    }
    warnedMissingAriaLabelSignatureRef.current = signature;

    console.warn("[Switch] Non-text label content should provide aria-label or aria-labelledby.");
  }, [ariaLabel, ariaLabelledBy, label]);

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

  const assignRef = React.useCallback(
    (node: HTMLButtonElement | null) => {
      buttonRef.current = node;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
        return;
      }

      if (forwardedRef) {
        forwardedRef.current = node;
      }
    },
    [forwardedRef]
  );

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
      ref={assignRef}
      type={type ?? "button"}
      role="switch"
      aria-checked={currentChecked}
      aria-invalid={resolvedInvalidAria}
      aria-disabled={disabled || undefined}
      aria-label={ariaLabel}
      aria-describedby={describedBy}
      aria-labelledby={labelledBy}
      aria-keyshortcuts={ariaKeyShortcuts}
      disabled={disabled}
      data-state={currentChecked ? "checked" : "unchecked"}
      data-invalid={isInvalid ? "true" : undefined}
      data-pressed={pressed ? "true" : undefined}
      data-focus-visible={focusVisible ? "true" : undefined}
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
        setFocusVisible(
          resolveFocusVisibleState(event.currentTarget, focusVisibleIntentRef.current)
        );
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setFocused(false);
        setFocusVisible(false);
        setPressed(false);
        onBlur?.(event);
      }}
      onMouseEnter={(event) => {
        if (!disabled) {
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
        if (!disabled && event.button === 0 && !event.ctrlKey) {
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
          !disabled &&
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
      onKeyDown={(event) => {
        focusVisibleIntentRef.current = true;
        onKeyDown?.(event);
        if (event.defaultPrevented || disabled) {
          return;
        }

        if (!isSwitchActivationKey(event.key)) {
          return;
        }

        if (isComposingSwitchActivationEvent(event) || isModifiedSwitchActivationChord(event)) {
          return;
        }

        event.preventDefault();
        if (event.repeat) {
          return;
        }
        setPressed(true);
        handleToggle();
      }}
      onKeyUp={(event) => {
        if (isSwitchActivationKey(event.key)) {
          setPressed(false);
        }
        onKeyUp?.(event);
      }}
    >
      <span
        data-aurora-reduced-motion="transition"
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
          boxShadow: focused && focusVisible ? `0 0 0 3px ${focusRingColor}` : "none",
          transition:
            "background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"
        }}
      >
        <span
          data-aurora-reduced-motion="transition"
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
      {hasLabelContent || hasDescriptionContent ? (
        <span style={{ display: "grid", gap: hasDescriptionContent ? 2 : 0, paddingTop: 1 }}>
          {hasLabelContent ? <span id={labelId}>{label}</span> : null}
          {hasDescriptionContent ? (
            <span id={descriptionId} style={{ color: "var(--aurora-text-secondary)", fontSize: "var(--aurora-font-size-xs)" }}>
              {description}
            </span>
          ) : null}
        </span>
      ) : null}
    </button>
  );
});

function isSwitchActivationKey(key: string) {
  return key === " " || key === "Space" || key === "Spacebar";
}

function isModifiedSwitchActivationChord(event: React.KeyboardEvent<HTMLButtonElement>) {
  return event.ctrlKey || event.metaKey || event.altKey;
}

function isComposingSwitchActivationEvent(event: React.KeyboardEvent<HTMLButtonElement>) {
  const nativeEvent = event.nativeEvent;
  if (nativeEvent.isComposing) {
    return true;
  }

  return typeof nativeEvent.keyCode === "number" && nativeEvent.keyCode === 229;
}

function resolveNonEmptyLabel(label: string | undefined) {
  if (typeof label !== "string") {
    return undefined;
  }

  const normalized = label.trim();
  return normalized.length > 0 ? normalized : undefined;
}

function hasRenderableSwitchNode(node: React.ReactNode): boolean {
  if (node === null || node === undefined || typeof node === "boolean") {
    return false;
  }

  if (typeof node === "string") {
    return node.trim().length > 0;
  }

  if (typeof node === "number") {
    return true;
  }

  if (Array.isArray(node)) {
    return node.some((item) => hasRenderableSwitchNode(item));
  }

  return React.isValidElement(node);
}

function isPrimaryPointerButton(button: number | undefined) {
  return typeof button !== "number" || button <= 0;
}

function getReadableSwitchTextNode(node: React.ReactNode): string {
  if (typeof node === "string") {
    return normalizeReadableSwitchText(node);
  }

  if (typeof node === "number") {
    return normalizeReadableSwitchText(String(node));
  }

  if (Array.isArray(node)) {
    return normalizeReadableSwitchText(
      node
        .map((item) => getReadableSwitchTextNode(item))
        .filter((item) => item.length > 0)
        .join(" ")
    );
  }

  if (!React.isValidElement(node)) {
    return "";
  }

  const elementProps = node.props as {
    children?: React.ReactNode;
    "aria-hidden"?: boolean | "true" | "false";
    "aria-label"?: string;
  };
  if (elementProps["aria-hidden"] === true || elementProps["aria-hidden"] === "true") {
    return "";
  }

  if (
    typeof elementProps["aria-label"] === "string" &&
    elementProps["aria-label"].trim().length > 0
  ) {
    return normalizeReadableSwitchText(elementProps["aria-label"]);
  }

  return getReadableSwitchTextNode(elementProps.children);
}

function normalizeReadableSwitchText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function resolveFocusVisibleState(target: HTMLButtonElement, fallback: boolean) {
  try {
    return target.matches(":focus-visible") || fallback;
  } catch {
    return fallback;
  }
}
