import * as React from "react";

export type ReasoningPanelProps = {
  title?: React.ReactNode;
  steps: string[];
  defaultOpen?: boolean;
  expandLabel?: string;
  collapseLabel?: string;
  emptyText?: React.ReactNode;
  listAriaLabel?: string;
};

export function ReasoningPanel({
  title = "Model reasoning",
  steps,
  defaultOpen = false,
  expandLabel = "Expand reasoning panel",
  collapseLabel = "Collapse reasoning panel",
  emptyText = "No reasoning steps captured.",
  listAriaLabel = "Reasoning steps"
}: ReasoningPanelProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const panelId = React.useId();
  const resolvedExpandLabel = resolveNonEmptyLabel(expandLabel) ?? "Expand reasoning panel";
  const resolvedCollapseLabel = resolveNonEmptyLabel(collapseLabel) ?? "Collapse reasoning panel";
  const resolvedListAriaLabel = resolveNonEmptyLabel(listAriaLabel) ?? "Reasoning steps";

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
        aria-label={open ? resolvedCollapseLabel : resolvedExpandLabel}
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
        <span aria-hidden="true" style={{ marginRight: 8 }}>
          {open ? "▼" : "▶"}
        </span>
        <span>{title}</span>
      </button>
      {open ? (
        <ol
          id={panelId}
          aria-label={resolvedListAriaLabel}
          style={{ margin: 0, padding: "0 12px 12px 28px", color: "var(--aurora-text-secondary)", display: "grid", gap: 8 }}
        >
          {steps.length > 0 ? (
            steps.map((step, index) => <li key={`${index}-${step}`}>{step}</li>)
          ) : (
            <li>{emptyText}</li>
          )}
        </ol>
      ) : null}
    </section>
  );
}

function resolveNonEmptyLabel(value: string | undefined) {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }

  return undefined;
}
