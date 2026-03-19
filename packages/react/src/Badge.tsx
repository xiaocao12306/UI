import * as React from "react";

export type BadgeTone = "default" | "success" | "danger";
export type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
  tone?: BadgeTone;
};

const toneStyles: Record<BadgeTone, React.CSSProperties> = {
  default: {
    background: "var(--aurora-surface-elevated)",
    color: "var(--aurora-text-primary)",
    borderColor: "var(--aurora-border-default)"
  },
  success: {
    background: "var(--aurora-feedback-success-bg)",
    color: "var(--aurora-text-primary)",
    borderColor: "var(--aurora-feedback-success-border)"
  },
  danger: {
    background: "var(--aurora-feedback-danger-bg)",
    color: "var(--aurora-text-primary)",
    borderColor: "var(--aurora-feedback-danger-border)"
  }
};

export function Badge({ tone = "default", style, ...props }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 24,
        borderRadius: "var(--aurora-radius-pill)",
        border: "1px solid",
        padding: "0 10px",
        fontSize: "var(--aurora-font-size-xs)",
        fontWeight: "var(--aurora-font-weight-medium)",
        ...toneStyles[tone],
        ...style
      }}
      {...props}
    />
  );
}
