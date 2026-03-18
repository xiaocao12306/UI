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
  onEscapeKeyDown,
  onPointerDownOutside,
  onCloseReason,
  onOpenChange
}: DialogProps) {
  const titleId = React.useId();
  const descriptionId = React.useId();
  const [closeButtonHovered, setCloseButtonHovered] = React.useState(false);
  const [closeButtonFocusVisible, setCloseButtonFocusVisible] = React.useState(false);
  const closeButtonFocusIntentRef = React.useRef(true);

  const closeWithReason = React.useCallback(
    (reason: DialogCloseReason) => {
      onCloseReason?.(reason);
      onOpenChange(false);
    },
    [onCloseReason, onOpenChange]
  );

  React.useEffect(() => {
    if (!open) {
      return;
    }

    return lockBodyScroll();
  }, [open]);

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

            onCloseReason?.("escape-key");
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

            onCloseReason?.("outside-pointer");
          }}
          onDismiss={() => onOpenChange(false)}
        >
          <FocusScope restoreFocus={restoreFocus}>
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={description ? descriptionId : undefined}
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
                  {description ? (
                    <p id={descriptionId} style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
                      {description}
                    </p>
                  ) : null}
                </div>
                {showCloseButton ? (
                  <button
                    type="button"
                    onClick={() => closeWithReason("close-button")}
                    aria-label={closeLabel}
                    onMouseEnter={() => {
                      setCloseButtonHovered(true);
                    }}
                    onMouseLeave={() => {
                      setCloseButtonHovered(false);
                    }}
                    onMouseDown={() => {
                      closeButtonFocusIntentRef.current = false;
                      setCloseButtonFocusVisible(false);
                    }}
                    onKeyDown={() => {
                      closeButtonFocusIntentRef.current = true;
                    }}
                    onFocus={(event) => {
                      setCloseButtonFocusVisible(resolveFocusVisibleState(event.currentTarget, closeButtonFocusIntentRef.current));
                    }}
                    onBlur={() => {
                      setCloseButtonFocusVisible(false);
                    }}
                    style={{
                      borderRadius: "var(--aurora-radius-sm)",
                      border: closeButtonHovered ? "1px solid var(--aurora-border-strong)" : "1px solid var(--aurora-border-default)",
                      background: closeButtonHovered
                        ? "color-mix(in srgb, var(--aurora-surface-elevated) 78%, var(--aurora-surface-default))"
                        : "var(--aurora-surface-elevated)",
                      color: closeButtonHovered ? "var(--aurora-text-primary)" : "var(--aurora-text-secondary)",
                      boxShadow: closeButtonFocusVisible
                        ? "0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)"
                        : "none",
                      width: 30,
                      height: 30,
                      cursor: "pointer",
                      transition:
                        "background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"
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
    return target.matches(":focus-visible");
  } catch {
    return fallback;
  }
}
