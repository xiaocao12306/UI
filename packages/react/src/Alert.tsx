import * as React from "react";

export type AlertTone = "info" | "success" | "warning" | "danger";
export type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
  tone?: AlertTone;
  title?: React.ReactNode;
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

export function Alert({ tone = "info", title, children, style, ...props }: AlertProps) {
  return (
    <div
      role="alert"
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
      {title ? <strong>{title}</strong> : null}
      {children ? <div>{children}</div> : null}
    </div>
  );
}
