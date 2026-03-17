import * as React from "react";
import { DismissableLayer, FocusScope, Portal } from "@aurora-ui/primitives";

export type DrawerProps = {
  open: boolean;
  side?: "left" | "right";
  title: React.ReactNode;
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
};

export function Drawer({ open, side = "right", title, children, onOpenChange }: DrawerProps) {
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
          zIndex: 1300
        }}
      >
        <DismissableLayer onDismiss={() => onOpenChange(false)}>
          <FocusScope>
            <aside
              role="dialog"
              aria-modal="true"
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
                gap: 12
              }}
            >
              <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                <strong style={{ color: "var(--aurora-text-primary)" }}>{title}</strong>
                <button type="button" onClick={() => onOpenChange(false)} aria-label="Close drawer">
                  ×
                </button>
              </header>
              <div style={{ overflow: "auto" }}>{children}</div>
            </aside>
          </FocusScope>
        </DismissableLayer>
      </div>
    </Portal>
  );
}
