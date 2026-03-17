import * as React from "react";

export type ToastTone = "info" | "success" | "warning" | "danger";
export type ToastPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";

export type ToastProps = {
  open: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  tone?: ToastTone;
  duration?: number;
  pauseOnHover?: boolean;
  closeOnEscape?: boolean;
  position?: ToastPosition;
  onClose?: () => void;
  onOpenChange?: (open: boolean) => void;
};

const toneStyleMap: Record<ToastTone, React.CSSProperties> = {
  info: {
    borderColor: "color-mix(in srgb, var(--aurora-accent-default) 38%, var(--aurora-border-default))",
    background: "var(--aurora-surface-overlay)",
    color: "var(--aurora-text-primary)"
  },
  success: {
    borderColor: "rgba(34, 197, 94, 0.45)",
    background: "color-mix(in srgb, rgba(34, 197, 94, 0.12) 42%, var(--aurora-surface-overlay))",
    color: "var(--aurora-text-primary)"
  },
  warning: {
    borderColor: "rgba(245, 158, 11, 0.5)",
    background: "color-mix(in srgb, rgba(245, 158, 11, 0.16) 42%, var(--aurora-surface-overlay))",
    color: "var(--aurora-text-primary)"
  },
  danger: {
    borderColor: "rgba(239, 68, 68, 0.5)",
    background: "color-mix(in srgb, rgba(239, 68, 68, 0.16) 42%, var(--aurora-surface-overlay))",
    color: "var(--aurora-text-primary)"
  }
};

const positionStyleMap: Record<ToastPosition, React.CSSProperties> = {
  "bottom-right": { right: 16, bottom: 16 },
  "bottom-left": { left: 16, bottom: 16 },
  "top-right": { right: 16, top: 16 },
  "top-left": { left: 16, top: 16 }
};

export function Toast({
  open,
  title,
  description,
  action,
  tone = "info",
  duration = 4000,
  pauseOnHover = true,
  closeOnEscape = true,
  position = "bottom-right",
  onClose,
  onOpenChange
}: ToastProps) {
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      setPaused(false);
    }
  }, [open]);

  const close = React.useCallback(() => {
    onClose?.();
    onOpenChange?.(false);
  }, [onClose, onOpenChange]);

  React.useEffect(() => {
    if (!open || duration <= 0 || (pauseOnHover && paused)) {
      return;
    }

    const timer = window.setTimeout(() => {
      close();
    }, duration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [close, duration, open, pauseOnHover, paused]);

  React.useEffect(() => {
    if (!open || !closeOnEscape) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [close, closeOnEscape, open]);

  if (!open) {
    return null;
  }

  const role = tone === "danger" ? "alert" : "status";
  const ariaLive = tone === "danger" ? "assertive" : "polite";

  return (
    <div
      role={role}
      aria-live={ariaLive}
      aria-atomic="true"
      onMouseEnter={() => {
        if (pauseOnHover) {
          setPaused(true);
        }
      }}
      onMouseLeave={() => {
        if (pauseOnHover) {
          setPaused(false);
        }
      }}
      style={{
        position: "fixed",
        zIndex: "var(--aurora-z-toast)",
        minWidth: 280,
        maxWidth: 420,
        borderRadius: "var(--aurora-radius-lg)",
        border: "1px solid var(--aurora-border-default)",
        boxShadow: "var(--aurora-shadow-lg)",
        padding: 12,
        display: "grid",
        gap: 8,
        ...toneStyleMap[tone],
        ...positionStyleMap[position]
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "start" }}>
        <strong style={{ color: "var(--aurora-text-primary)" }}>{title}</strong>
        <button
          type="button"
          onClick={close}
          aria-label="Close toast"
          style={{
            borderRadius: "var(--aurora-radius-sm)",
            border: "1px solid var(--aurora-border-default)",
            background: "var(--aurora-surface-elevated)",
            cursor: "pointer",
            color: "var(--aurora-text-secondary)",
            width: 28,
            height: 28
          }}
        >
          ×
        </button>
      </div>
      {description ? <div style={{ color: "var(--aurora-text-secondary)" }}>{description}</div> : null}
      {action ? <div>{action}</div> : null}
    </div>
  );
}
