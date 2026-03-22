import * as React from "react";
import { DismissableLayer, FocusScope, Portal } from "@aurora-ui/primitives";
import { lockBodyScroll } from "./bodyScrollLock";

export type DialogSize = "sm" | "md" | "lg";
export type DialogCloseReason = "close-button" | "escape-key" | "outside-pointer";

export type DialogProps = {
  open: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  size?: DialogSize;
  restoreFocus?: boolean;
  closeOnEscape?: boolean;
  closeOnOutsidePointer?: boolean;
  showCloseButton?: boolean;
  closeLabel?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onCloseReason?: (reason: DialogCloseReason) => void;
  onOpenChange: (open: boolean) => void;
};

const dialogSizeMap: Record<DialogSize, string> = {
  sm: "min(420px, calc(100vw - 32px))",
  md: "min(560px, calc(100vw - 32px))",
  lg: "min(760px, calc(100vw - 32px))"
};

export function Dialog({
  open,
  title,
  description,
  children,
  size = "md",
  restoreFocus = true,
  closeOnEscape = true,
  closeOnOutsidePointer = true,
  showCloseButton = true,
  closeLabel = "Close dialog",
  ariaLabel,
  ariaLabelledBy,
  onEscapeKeyDown,
  onPointerDownOutside,
  onCloseReason,
  onOpenChange
}: DialogProps) {
  const titleId = React.useId();
  const descriptionId = React.useId();
  const hasDescriptionContent = hasRenderableDialogNode(description);
  const [closeButtonHovered, setCloseButtonHovered] = React.useState(false);
  const [closeButtonPressed, setCloseButtonPressed] = React.useState(false);
  const [closeButtonFocusVisible, setCloseButtonFocusVisible] = React.useState(false);
  const closeButtonFocusIntentRef = React.useRef(true);
  const warnedMissingAriaLabelSignatureRef = React.useRef<string | null>(null);
  const panelRef = React.useRef<HTMLElement | null>(null);
  const [panelElement, setPanelElement] = React.useState<HTMLElement | null>(null);
  const resolvedCloseLabel =
    typeof closeLabel === "string" && closeLabel.trim().length > 0
      ? closeLabel.trim()
      : "Close dialog";
  const resolvedAriaLabelledBy =
    typeof ariaLabelledBy === "string" && ariaLabelledBy.trim().length > 0
      ? ariaLabelledBy.trim()
      : undefined;
  const resolvedAriaLabel =
    resolvedAriaLabelledBy === undefined &&
    typeof ariaLabel === "string" &&
    ariaLabel.trim().length > 0
      ? ariaLabel.trim()
      : undefined;
  const hasExplicitDialogName = resolvedAriaLabel !== undefined || resolvedAriaLabelledBy !== undefined;

  const closeWithReason = React.useCallback(
    (reason: DialogCloseReason) => {
      onCloseReason?.(reason);
      onOpenChange(false);
    },
    [onCloseReason, onOpenChange]
  );

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    if (getReadableDialogTextNode(title).length > 0 || hasExplicitDialogName) {
      warnedMissingAriaLabelSignatureRef.current = null;
      return;
    }

    const signature = "missing-dialog-name";
    if (warnedMissingAriaLabelSignatureRef.current === signature) {
      return;
    }
    warnedMissingAriaLabelSignatureRef.current = signature;

    console.warn("[Dialog] Non-text title should provide ariaLabel or ariaLabelledBy.");
  }, [hasExplicitDialogName, title]);

  React.useEffect(() => {
    if (!open || !panelElement) {
      return;
    }

    return lockBodyScroll(panelElement.ownerDocument);
  }, [open, panelElement]);

  React.useEffect(() => {
    if (!open || !panelElement) {
      return;
    }

    const ownerDocument = panelElement.ownerDocument;
    const markKeyboardIntent = (event: KeyboardEvent) => {
      if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
      }
      closeButtonFocusIntentRef.current = true;
    };
    const markPointerIntent = (event: Event) => {
      if ("button" in event && !isPrimaryPointerButton((event as MouseEvent | PointerEvent).button)) {
        return;
      }
      if ("ctrlKey" in event && event.ctrlKey) {
        return;
      }
      closeButtonFocusIntentRef.current = false;
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
  }, [open, panelElement]);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--aurora-overlay-bg)",
          backdropFilter: "blur(var(--aurora-overlay-blur))",
          display: "grid",
          placeItems: "center",
          zIndex: "var(--aurora-z-modal)"
        }}
      >
        <DismissableLayer
          onEscapeKeyDown={(event) => {
            onEscapeKeyDown?.(event);
            if (event.defaultPrevented) {
              return;
            }
            if (!closeOnEscape) {
              event.preventDefault();
              return;
            }

            event.preventDefault();
            closeWithReason("escape-key");
          }}
          onPointerDownOutside={(event) => {
            onPointerDownOutside?.(event);
            if (event.defaultPrevented) {
              return;
            }
            if (!closeOnOutsidePointer) {
              event.preventDefault();
              return;
            }

            event.preventDefault();
            closeWithReason("outside-pointer");
          }}
          onDismiss={() => onOpenChange(false)}
        >
          <FocusScope restoreFocus={restoreFocus}>
            <section
              ref={(node) => {
                panelRef.current = node;
                setPanelElement(node);
              }}
              role="dialog"
              aria-modal="true"
              aria-label={resolvedAriaLabel}
              aria-labelledby={resolvedAriaLabelledBy ?? (resolvedAriaLabel ? undefined : titleId)}
              aria-describedby={hasDescriptionContent ? descriptionId : undefined}
              aria-keyshortcuts={closeOnEscape ? "Escape" : undefined}
              data-state="open"
              style={{
                width: dialogSizeMap[size],
                borderRadius: "var(--aurora-radius-lg)",
                border: "1px solid var(--aurora-panel-border)",
                background: "var(--aurora-panel-bg)",
                boxShadow: "var(--aurora-panel-shadow)",
                maxHeight: "calc(100vh - 32px)",
                padding: 16,
                display: "grid",
                gridTemplateRows: "auto minmax(0, 1fr)",
                gap: 12
              }}
            >
              <header style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 8 }}>
                <div style={{ display: "grid", gap: 4 }}>
                  <h2 id={titleId} style={{ margin: 0, color: "var(--aurora-text-primary)", fontSize: "var(--aurora-font-size-lg)" }}>
                    {title}
                  </h2>
                  {hasDescriptionContent ? (
                    <p id={descriptionId} style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
                      {description}
                    </p>
                  ) : null}
                </div>
                {showCloseButton ? (
                  <button
                    data-aurora-reduced-motion="transition"
                    type="button"
                    onClick={() => closeWithReason("close-button")}
                    aria-label={resolvedCloseLabel}
                    aria-keyshortcuts="Enter Space"
                    onMouseEnter={() => {
                      setCloseButtonHovered(true);
                    }}
                    onMouseLeave={() => {
                      setCloseButtonHovered(false);
                      setCloseButtonPressed(false);
                    }}
                    onPointerDown={(event) => {
                      if (event.ctrlKey) {
                        return;
                      }
                      if (!isPrimaryPointerButton(event.button)) {
                        return;
                      }

                      closeButtonFocusIntentRef.current = false;
                      setCloseButtonFocusVisible(false);
                      setCloseButtonPressed(true);
                    }}
                    onPointerUp={(event) => {
                      if (isPrimaryPointerButton(event.button)) {
                        setCloseButtonPressed(false);
                      }
                    }}
                    onMouseDown={(event) => {
                      if (event.button === 0 && !event.ctrlKey) {
                        closeButtonFocusIntentRef.current = false;
                        setCloseButtonFocusVisible(false);
                      }
                      if (event.button === 0 && !event.ctrlKey) {
                        setCloseButtonPressed(true);
                      }
                    }}
                    onMouseUp={(event) => {
                      if (event.button === 0) {
                        setCloseButtonPressed(false);
                      }
                    }}
                    onPointerCancel={() => {
                      setCloseButtonPressed(false);
                    }}
                    onKeyDown={(event) => {
                      closeButtonFocusIntentRef.current = true;
                      if (isComposingDialogCloseButtonActivationEvent(event)) {
                        return;
                      }
                      if (
                        isDialogCloseButtonActivationKey(event.key) &&
                        !isModifiedDialogCloseButtonActivationChord(event)
                      ) {
                        setCloseButtonPressed(true);
                      }
                    }}
                    onKeyUp={(event) => {
                      if (isDialogCloseButtonActivationKey(event.key)) {
                        setCloseButtonPressed(false);
                      }
                    }}
                    onFocus={(event) => {
                      setCloseButtonFocusVisible(resolveFocusVisibleState(event.currentTarget, closeButtonFocusIntentRef.current));
                    }}
                    onBlur={() => {
                      setCloseButtonFocusVisible(false);
                      setCloseButtonPressed(false);
                    }}
                    style={{
                      borderRadius: "var(--aurora-radius-sm)",
                      border:
                        closeButtonHovered || closeButtonFocusVisible
                          ? "1px solid var(--aurora-border-strong)"
                          : "1px solid var(--aurora-border-default)",
                      background: closeButtonPressed
                        ? "color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))"
                        : closeButtonHovered
                          ? "color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))"
                          : "var(--aurora-surface-elevated)",
                      color: closeButtonHovered ? "var(--aurora-text-primary)" : "var(--aurora-text-secondary)",
                      boxShadow: closeButtonFocusVisible
                        ? "0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)"
                        : "none",
                      width: 30,
                      height: 30,
                      cursor: "pointer",
                      transform: closeButtonPressed ? "translateY(1px)" : "translateY(0)",
                      transition:
                        "background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"
                    }}
                  >
                    ×
                  </button>
                ) : null}
              </header>
              <div data-slot="dialog-content" style={{ minHeight: 0, overflow: "auto", paddingRight: 2 }}>
                {children}
              </div>
            </section>
          </FocusScope>
        </DismissableLayer>
      </div>
    </Portal>
  );
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

function isDialogCloseButtonActivationKey(key: string) {
  return key === "Enter" || key === " " || key === "Space" || key === "Spacebar";
}

function isModifiedDialogCloseButtonActivationChord(event: Pick<KeyboardEvent, "altKey" | "ctrlKey" | "metaKey">) {
  return event.altKey || event.ctrlKey || event.metaKey;
}

function isComposingDialogCloseButtonActivationEvent(
  event: React.KeyboardEvent<HTMLButtonElement>
) {
  const nativeEvent = event.nativeEvent;
  if (nativeEvent.isComposing) {
    return true;
  }

  return typeof nativeEvent.keyCode === "number" && nativeEvent.keyCode === 229;
}

function getReadableDialogTextNode(node: React.ReactNode): string {
  if (typeof node === "string") {
    return normalizeReadableDialogText(node);
  }

  if (typeof node === "number") {
    return normalizeReadableDialogText(String(node));
  }

  if (Array.isArray(node)) {
    return normalizeReadableDialogText(
      node
        .map((item) => getReadableDialogTextNode(item))
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
    return normalizeReadableDialogText(elementProps["aria-label"]);
  }

  return getReadableDialogTextNode(elementProps.children);
}

function hasRenderableDialogNode(node: React.ReactNode): boolean {
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
    return node.some((item) => hasRenderableDialogNode(item));
  }

  return React.isValidElement(node);
}

function normalizeReadableDialogText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}
