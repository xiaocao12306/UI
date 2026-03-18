import * as React from "react";
import { DismissableLayer, FocusScope, Portal } from "@aurora-ui/primitives";
import { lockBodyScroll } from "./bodyScrollLock";

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
  onOpenChange
}: DrawerProps) {
  const titleId = React.useId();
  const descriptionId = React.useId();

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
            if (!closeOnEscape) {
              event.preventDefault();
            }
          }}
          onPointerDownOutside={(event) => {
            onPointerDownOutside?.(event);
            if (!closeOnOutsidePointer) {
              event.preventDefault();
            }
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
                    onClick={() => onOpenChange(false)}
                    aria-label={closeLabel}
                    style={{
                      borderRadius: "var(--aurora-radius-sm)",
                      border: "1px solid var(--aurora-border-default)",
                      background: "var(--aurora-surface-elevated)",
                      color: "var(--aurora-text-secondary)",
                      width: 30,
                      height: 30,
                      cursor: "pointer"
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
