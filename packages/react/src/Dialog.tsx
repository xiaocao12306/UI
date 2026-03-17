import * as React from "react";
import { DismissableLayer, FocusScope, Portal } from "@aurora-ui/primitives";

export type DialogProps = {
  open: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
};

export function Dialog({ open, title, children, onOpenChange }: DialogProps) {
  const titleId = React.useId();

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
          zIndex: 1300
        }}
      >
        <DismissableLayer onDismiss={() => onOpenChange(false)}>
          <FocusScope>
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              style={{
                width: "min(560px, calc(100vw - 32px))",
                borderRadius: "var(--aurora-radius-lg)",
                border: "1px solid var(--aurora-panel-border)",
                background: "var(--aurora-panel-bg)",
                boxShadow: "var(--aurora-panel-shadow)",
                padding: 16,
                display: "grid",
                gap: 12
              }}
            >
              <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                <strong id={titleId} style={{ color: "var(--aurora-text-primary)" }}>
                  {title}
                </strong>
                <button type="button" onClick={() => onOpenChange(false)} aria-label="Close dialog">
                  ×
                </button>
              </header>
              <div>{children}</div>
            </section>
          </FocusScope>
        </DismissableLayer>
      </div>
    </Portal>
  );
}
