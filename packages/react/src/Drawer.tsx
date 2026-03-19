import * as React from "react";
import { DismissableLayer, FocusScope, Portal } from "@aurora-ui/primitives";
import { lockBodyScroll } from "./bodyScrollLock";

export type DrawerCloseReason = "close-button" | "escape-key" | "outside-pointer";

export type DrawerProps = {
  open: boolean;
  side?: "left" | "right";
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  restoreFocus?: boolean;
  closeOnEscape?: boolean;
  closeOnOutsidePointer?: boolean;
  showCloseButton?: boolean;
  closeLabel?: string;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onCloseReason?: (reason: DrawerCloseReason) => void;
  onOpenChange: (open: boolean) => void;
};

export function Drawer({
  open,
  side = "right",
  title,
  description,
  children,
  restoreFocus = true,
  closeOnEscape = true,
  closeOnOutsidePointer = true,
  showCloseButton = true,
  closeLabel = "Close drawer",
  onEscapeKeyDown,
  onPointerDownOutside,
  onCloseReason,
  onOpenChange
}: DrawerProps) {
  const titleId = React.useId();
  const descriptionId = React.useId();
  const [closeButtonHovered, setCloseButtonHovered] = React.useState(false);
  const [closeButtonPressed, setCloseButtonPressed] = React.useState(false);
  const [closeButtonFocusVisible, setCloseButtonFocusVisible] = React.useState(false);
  const closeButtonFocusIntentRef = React.useRef(true);

  const closeWithReason = React.useCallback(
    (reason: DrawerCloseReason) => {
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
            <aside
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={description ? descriptionId : undefined}
              data-side={side}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                [side]: 0,
                width: "min(420px, 90vw)",
                borderLeft: side === "right" ? "1px solid var(--aurora-panel-border)" : undefined,
                borderRight: side === "left" ? "1px solid var(--aurora-panel-border)" : undefined,
                background: "var(--aurora-panel-bg)",
                boxShadow: "var(--aurora-panel-shadow)",
                padding: 16,
                display: "grid",
                gridTemplateRows: "auto 1fr",
                gap: 12,
                borderTopLeftRadius: side === "right" ? "var(--aurora-radius-lg)" : 0,
                borderBottomLeftRadius: side === "right" ? "var(--aurora-radius-lg)" : 0,
                borderTopRightRadius: side === "left" ? "var(--aurora-radius-lg)" : 0,
                borderBottomRightRadius: side === "left" ? "var(--aurora-radius-lg)" : 0
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
                      setCloseButtonPressed(false);
                    }}
                    onMouseDown={(event) => {
                      closeButtonFocusIntentRef.current = false;
                      setCloseButtonFocusVisible(false);
                      if (event.button === 0) {
                        setCloseButtonPressed(true);
                      }
                    }}
                    onMouseUp={(event) => {
                      if (event.button === 0) {
                        setCloseButtonPressed(false);
                      }
                    }}
                    onKeyDown={() => {
                      closeButtonFocusIntentRef.current = true;
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
              <div style={{ overflow: "auto" }}>{children}</div>
            </aside>
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
