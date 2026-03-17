import * as React from "react";

export type AlertTone = "info" | "success" | "warning" | "danger";
export type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
  tone?: AlertTone;
  title?: React.ReactNode;
  description?: React.ReactNode;
  live?: "polite" | "assertive" | "off";
  onClose?: () => void;
  closeLabel?: string;
};

const toneStyleMap: Record<AlertTone, React.CSSProperties> = {
  info: { background: "rgba(14, 165, 233, 0.12)", borderColor: "rgba(14, 165, 233, 0.3)", color: "#0369a1" },
  success: {
    background: "rgba(34, 197, 94, 0.12)",
    borderColor: "rgba(34, 197, 94, 0.3)",
    color: "#15803d"
  },
  warning: {
    background: "rgba(245, 158, 11, 0.12)",
    borderColor: "rgba(245, 158, 11, 0.3)",
    color: "#b45309"
  },
  danger: { background: "rgba(239, 68, 68, 0.12)", borderColor: "rgba(239, 68, 68, 0.3)", color: "#b91c1c" }
};

export function Alert({
  tone = "info",
  title,
  description,
  live,
  onClose,
  closeLabel = "Dismiss alert",
  children,
  style,
  ...props
}: AlertProps) {
  const role = tone === "danger" ? "alert" : "status";
  const ariaLive = live ?? (role === "alert" ? "assertive" : "polite");

  return (
    <div
      role={role}
      aria-live={ariaLive}
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
            type="button"
            aria-label={closeLabel}
            onClick={() => onClose()}
            style={{
              borderRadius: "var(--aurora-radius-sm)",
              border: "1px solid color-mix(in srgb, currentColor 35%, transparent)",
              background: "transparent",
              color: "inherit",
              cursor: "pointer",
              width: 24,
              height: 24,
              lineHeight: 1
            }}
          >
            ×
          </button>
        ) : null}
      </div>
    </div>
  );
}
