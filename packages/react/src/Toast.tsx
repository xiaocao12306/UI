import * as React from "react";

export type ToastProps = {
  open: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  onClose?: () => void;
};

export function Toast({ open, title, description, action, onClose }: ToastProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: "var(--aurora-z-toast)",
        minWidth: 280,
        maxWidth: 420,
        borderRadius: "var(--aurora-radius-lg)",
        border: "1px solid var(--aurora-border-default)",
        background: "var(--aurora-surface-overlay)",
        boxShadow: "var(--aurora-shadow-lg)",
        padding: 12,
        display: "grid",
        gap: 8
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        <strong style={{ color: "var(--aurora-text-primary)" }}>{title}</strong>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close toast"
          style={{ border: 0, background: "transparent", cursor: "pointer", color: "var(--aurora-text-secondary)" }}
        >
          ×
        </button>
      </div>
      {description ? <div style={{ color: "var(--aurora-text-secondary)" }}>{description}</div> : null}
      {action ? <div>{action}</div> : null}
    </div>
  );
}
