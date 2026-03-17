import * as React from "react";

export type ReasoningPanelProps = {
  title?: React.ReactNode;
  steps: string[];
  defaultOpen?: boolean;
};

export function ReasoningPanel({ title = "Model reasoning", steps, defaultOpen = false }: ReasoningPanelProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const panelId = React.useId();

  return (
    <section
      style={{
        border: "1px solid var(--aurora-border-default)",
        borderRadius: "var(--aurora-radius-md)",
        background: "var(--aurora-surface-elevated)",
        overflow: "hidden"
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        style={{
          width: "100%",
          height: 38,
          border: 0,
          background: "transparent",
          textAlign: "left",
          padding: "0 12px",
          color: "var(--aurora-text-primary)",
          fontWeight: 600,
          cursor: "pointer"
        }}
      >
        {open ? "▼" : "▶"} {title}
      </button>
      {open ? (
        <ol
          id={panelId}
          style={{ margin: 0, padding: "0 12px 12px 28px", color: "var(--aurora-text-secondary)", display: "grid", gap: 8 }}
        >
          {steps.length > 0 ? (
            steps.map((step, index) => <li key={`${index}-${step}`}>{step}</li>)
          ) : (
            <li>No reasoning steps captured.</li>
          )}
        </ol>
      ) : null}
    </section>
  );
}
