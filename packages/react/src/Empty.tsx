import * as React from "react";

export type EmptyProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

export function Empty({ title, description, action }: EmptyProps) {
  return (
    <div
      style={{
        border: "1px dashed var(--aurora-border-default)",
        borderRadius: "var(--aurora-radius-lg)",
        padding: 24,
        display: "grid",
        justifyItems: "center",
        gap: 10,
        textAlign: "center"
      }}
    >
      <strong style={{ color: "var(--aurora-text-primary)" }}>{title}</strong>
      {description ? <p style={{ color: "var(--aurora-text-secondary)", margin: 0 }}>{description}</p> : null}
      {action}
    </div>
  );
}
