import * as React from "react";

export type AlertTone = "info" | "success" | "warning" | "danger";
export type AlertProps = Omit<React.ComponentPropsWithoutRef<"div">, "title"> & {
  tone?: AlertTone;
  title?: React.ReactNode;
  description?: React.ReactNode;
  live?: "polite" | "assertive" | "off";
  ariaLabel?: string;
  ariaLabelledBy?: string;
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

function resolveAlertTone(value: unknown, fallback: AlertTone) {
  if (typeof value === "string") {
    const normalizedValue = value.trim().toLowerCase();
    if (
      normalizedValue === "info" ||
      normalizedValue === "success" ||
      normalizedValue === "warning" ||
      normalizedValue === "danger"
    ) {
      return normalizedValue;
    }
  }

  return fallback;
}

function resolveAlertLive(value: unknown): NonNullable<AlertProps["live"]> | undefined {
  if (typeof value === "string") {
    const normalizedValue = value.trim().toLowerCase();
    if (normalizedValue === "polite" || normalizedValue === "assertive" || normalizedValue === "off") {
      return normalizedValue;
    }
  }

  return undefined;
}

export function Alert({
  tone = "info",
  title,
  description,
  live,
  ariaLabel,
  ariaLabelledBy,
  onClose,
  closeLabel = "Dismiss alert",
  children,
  style,
  ...props
}: AlertProps) {
  const titleId = React.useId();
  const [closeButtonFocused, setCloseButtonFocused] = React.useState(false);
  const [closeButtonFocusVisible, setCloseButtonFocusVisible] = React.useState(false);
  const [closeButtonHovered, setCloseButtonHovered] = React.useState(false);
  const [closeButtonPressed, setCloseButtonPressed] = React.useState(false);
  const warnedMissingAriaLabelRef = React.useRef(false);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const focusVisibleIntentRef = React.useRef(false);
  const resolvedTone = resolveAlertTone(tone, "info");
  const resolvedLive = resolveAlertLive(live);
  const role = resolvedTone === "danger" ? "alert" : "status";
  const ariaLive = resolvedLive ?? (role === "alert" ? "assertive" : "polite");
  const hasTitleContent = hasRenderableAlertNode(title);
  const hasDescriptionContent = hasRenderableAlertNode(description);
  const hasChildrenContent = hasRenderableAlertNode(children);
  const resolvedCloseLabel =
    typeof closeLabel === "string" && closeLabel.trim().length > 0
      ? closeLabel.trim()
      : "Dismiss alert";
  const resolvedAriaLabelledBy =
    typeof ariaLabelledBy === "string" && ariaLabelledBy.trim().length > 0
      ? ariaLabelledBy.trim()
      : undefined;
  const explicitAriaLabel =
    resolvedAriaLabelledBy === undefined &&
    typeof ariaLabel === "string" &&
    ariaLabel.trim().length > 0
      ? ariaLabel.trim()
      : undefined;
  const hasReadableTitleText = getReadableAlertTextNode(title).length > 0;
  const hasExplicitAlertName = explicitAriaLabel !== undefined || resolvedAriaLabelledBy !== undefined;
  const resolvedAriaLabel = resolvedAriaLabelledBy
    ? undefined
    : explicitAriaLabel ?? (hasTitleContent && !hasReadableTitleText ? "Alert" : undefined);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    if (!hasTitleContent || hasReadableTitleText || hasExplicitAlertName) {
      warnedMissingAriaLabelRef.current = false;
      return;
    }

    if (warnedMissingAriaLabelRef.current) {
      return;
    }
    warnedMissingAriaLabelRef.current = true;

    console.warn("[Alert] Non-text title should provide ariaLabel or ariaLabelledBy.");
  }, [hasExplicitAlertName, hasReadableTitleText, hasTitleContent]);

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
  }, [onClose]);

  return (
    <div
      role={role}
      aria-live={ariaLive}
      aria-label={resolvedAriaLabel}
      aria-labelledby={resolvedAriaLabelledBy ?? (resolvedAriaLabel ? undefined : hasTitleContent ? titleId : undefined)}
      style={{
        borderRadius: "var(--aurora-radius-md)",
        border: "1px solid",
        padding: "10px 12px",
        display: "grid",
        gap: 6,
        ...toneStyleMap[resolvedTone],
        ...style
      }}
      {...props}
    >
      <div style={{ display: "flex", gap: 8, alignItems: "start", justifyContent: "space-between" }}>
        <div style={{ display: "grid", gap: hasDescriptionContent || hasChildrenContent ? 4 : 0 }}>
          {hasTitleContent ? <strong id={titleId}>{title}</strong> : null}
          {hasDescriptionContent ? <div>{description}</div> : null}
          {hasChildrenContent ? <div>{children}</div> : null}
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
              if (event.button !== 0 || event.ctrlKey) {
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
              if (!isPrimaryPointerButton(event.button) || event.ctrlKey) {
                return;
              }
              focusVisibleIntentRef.current = false;
              setCloseButtonFocusVisible(false);
              setCloseButtonPressed(true);
            }}
            onPointerUp={(event) => {
              if (isPrimaryPointerButton(event.button)) {
                setCloseButtonPressed(false);
              }
            }}
            onPointerCancel={() => {
              setCloseButtonPressed(false);
            }}
            onKeyDown={(event) => {
              focusVisibleIntentRef.current = true;
              if (event.defaultPrevented) {
                return;
              }
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

function isPrimaryPointerButton(button: number | undefined) {
  return typeof button !== "number" || button <= 0;
}

function hasRenderableAlertNode(node: React.ReactNode): boolean {
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
    return node.some((item) => hasRenderableAlertNode(item));
  }

  return React.isValidElement(node);
}

function getReadableAlertTextNode(node: React.ReactNode): string {
  if (typeof node === "string") {
    return normalizeReadableAlertText(node);
  }

  if (typeof node === "number") {
    return normalizeReadableAlertText(String(node));
  }

  if (Array.isArray(node)) {
    return normalizeReadableAlertText(
      node
        .map((item) => getReadableAlertTextNode(item))
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

  if (typeof elementProps["aria-label"] === "string" && elementProps["aria-label"].trim().length > 0) {
    return normalizeReadableAlertText(elementProps["aria-label"]);
  }

  return getReadableAlertTextNode(elementProps.children);
}

function normalizeReadableAlertText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}
