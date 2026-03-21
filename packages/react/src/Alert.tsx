import * as React from "react";

export type AlertTone = "info" | "success" | "warning" | "danger";
export type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
  tone?: AlertTone;
  title?: React.ReactNode;
  description?: React.ReactNode;
  live?: "polite" | "assertive" | "off";
  ariaLabel?: string;
  onClose?: () => void;
  closeLabel?: string;
};

const toneStyleMap: Record<AlertTone, React.CSSProperties> = {
  info: {
    background: "var(--aurora-feedback-info-bg)",
    borderColor: "var(--aurora-feedback-info-border)",
    color: "var(--aurora-feedback-info-text)"
  },
  success: {
    background: "var(--aurora-feedback-success-bg)",
    borderColor: "var(--aurora-feedback-success-border)",
    color: "var(--aurora-feedback-success-text)"
  },
  warning: {
    background: "var(--aurora-feedback-warning-bg)",
    borderColor: "var(--aurora-feedback-warning-border)",
    color: "var(--aurora-feedback-warning-text)"
  },
  danger: {
    background: "var(--aurora-feedback-danger-bg)",
    borderColor: "var(--aurora-feedback-danger-border)",
    color: "var(--aurora-feedback-danger-text)"
  }
};

export function Alert({
  tone = "info",
  title,
  description,
  live,
  ariaLabel,
  onClose,
  closeLabel = "Dismiss alert",
  children,
  style,
  ...props
}: AlertProps) {
  const [closeButtonFocused, setCloseButtonFocused] = React.useState(false);
  const [closeButtonFocusVisible, setCloseButtonFocusVisible] = React.useState(false);
  const [closeButtonHovered, setCloseButtonHovered] = React.useState(false);
  const [closeButtonPressed, setCloseButtonPressed] = React.useState(false);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const focusVisibleIntentRef = React.useRef(false);
  const role = tone === "danger" ? "alert" : "status";
  const ariaLive = live ?? (role === "alert" ? "assertive" : "polite");
  const resolvedCloseLabel =
    typeof closeLabel === "string" && closeLabel.trim().length > 0
      ? closeLabel.trim()
      : "Dismiss alert";
  const resolvedAriaLabel =
    typeof ariaLabel === "string" && ariaLabel.trim().length > 0 ? ariaLabel.trim() : undefined;

  React.useEffect(() => {
    if (onClose) {
      return;
    }

    setCloseButtonFocused(false);
    setCloseButtonFocusVisible(false);
    setCloseButtonHovered(false);
    setCloseButtonPressed(false);
  }, [onClose]);

  React.useEffect(() => {
    if (!onClose) {
      return;
    }

    const ownerDocument = closeButtonRef.current?.ownerDocument ?? document;
    const markKeyboardIntent = (event: KeyboardEvent) => {
      if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
      }
      focusVisibleIntentRef.current = true;
    };
    const markPointerIntent = (event: Event) => {
      if ("button" in event && typeof event.button === "number" && event.button !== 0) {
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
  }, [onClose]);

  return (
    <div
      role={role}
      aria-live={ariaLive}
      aria-label={resolvedAriaLabel}
      style={{
        borderRadius: "var(--aurora-radius-md)",
        border: "1px solid",
        padding: "10px 12px",
        display: "grid",
        gap: 6,
        ...toneStyleMap[tone],
        ...style
      }}
      {...props}
    >
      <div style={{ display: "flex", gap: 8, alignItems: "start", justifyContent: "space-between" }}>
        <div style={{ display: "grid", gap: description || children ? 4 : 0 }}>
          {title ? <strong>{title}</strong> : null}
          {description ? <div>{description}</div> : null}
          {children ? <div>{children}</div> : null}
        </div>
        {onClose ? (
          <button
            ref={closeButtonRef}
            type="button"
            aria-label={resolvedCloseLabel}
            aria-keyshortcuts="Enter Space"
            data-focus-visible={closeButtonFocusVisible ? "true" : undefined}
            data-pressed={closeButtonPressed ? "true" : undefined}
            onClick={() => onClose()}
            onFocus={(event) => {
              setCloseButtonFocused(true);
              setCloseButtonFocusVisible(
                resolveFocusVisibleState(event.currentTarget, focusVisibleIntentRef.current)
              );
            }}
            onBlur={() => {
              setCloseButtonFocused(false);
              setCloseButtonFocusVisible(false);
              setCloseButtonPressed(false);
            }}
            onMouseEnter={() => {
              setCloseButtonHovered(true);
            }}
            onMouseLeave={() => {
              setCloseButtonHovered(false);
              setCloseButtonPressed(false);
            }}
            onMouseDown={(event) => {
              if (event.button !== 0) {
                return;
              }
              focusVisibleIntentRef.current = false;
              setCloseButtonFocusVisible(false);
              setCloseButtonPressed(true);
            }}
            onMouseUp={(event) => {
              if (event.button === 0) {
                setCloseButtonPressed(false);
              }
            }}
            onPointerDown={(event) => {
              if (event.button !== 0) {
                return;
              }
              focusVisibleIntentRef.current = false;
              setCloseButtonFocusVisible(false);
            }}
            onKeyDown={(event) => {
              focusVisibleIntentRef.current = true;
              if (isComposingAlertActivationEvent(event)) {
                return;
              }
              if ((event.ctrlKey || event.metaKey || event.altKey) && isAlertActivationKey(event.key)) {
                return;
              }
              if (isAlertActivationKey(event.key)) {
                setCloseButtonPressed(true);
              }
            }}
            onKeyUp={(event) => {
              if (isAlertActivationKey(event.key)) {
                setCloseButtonPressed(false);
              }
            }}
            style={{
              borderRadius: "var(--aurora-radius-sm)",
              border: `1px solid ${closeButtonHovered ? "color-mix(in srgb, currentColor 48%, transparent)" : "color-mix(in srgb, currentColor 35%, transparent)"}`,
              background: closeButtonPressed
                ? "color-mix(in srgb, currentColor 24%, transparent)"
                : closeButtonHovered
                  ? "color-mix(in srgb, currentColor 16%, transparent)"
                  : "transparent",
              color: "inherit",
              cursor: "pointer",
              width: 24,
              height: 24,
              lineHeight: 1,
              transform: closeButtonPressed ? "translateY(1px)" : "translateY(0)",
              boxShadow:
                closeButtonFocused && closeButtonFocusVisible
                  ? "0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)"
                  : "none",
              transition:
                "background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"
            }}
          >
            ×
          </button>
        ) : null}
      </div>
    </div>
  );
}

function isAlertActivationKey(key: string) {
  return key === "Enter" || key === " " || key === "Space" || key === "Spacebar";
}

function isComposingAlertActivationEvent(event: React.KeyboardEvent<HTMLButtonElement>) {
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
