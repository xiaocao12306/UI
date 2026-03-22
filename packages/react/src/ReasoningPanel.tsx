import * as React from "react";

export type ReasoningPanelProps = {
  title?: React.ReactNode;
  steps: string[];
  defaultOpen?: boolean;
  expandLabel?: string;
  collapseLabel?: string;
  emptyText?: React.ReactNode;
  listAriaLabel?: string;
  listAriaLabelledBy?: string;
};

export function ReasoningPanel({
  title = "Model reasoning",
  steps,
  defaultOpen = false,
  expandLabel = "Expand reasoning panel",
  collapseLabel = "Collapse reasoning panel",
  emptyText = "No reasoning steps captured.",
  listAriaLabel = "Reasoning steps",
  listAriaLabelledBy
}: ReasoningPanelProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const panelId = React.useId();
  const normalizedSteps = React.useMemo(
    () => steps.filter((step) => step.trim().length > 0),
    [steps]
  );
  const hasEmptyTextContent = hasRenderableReasoningNode(emptyText);
  const resolvedEmptyText = hasEmptyTextContent ? emptyText : "No reasoning steps captured.";
  const resolvedExpandLabel = resolveNonEmptyLabel(expandLabel) ?? "Expand reasoning panel";
  const resolvedCollapseLabel = resolveNonEmptyLabel(collapseLabel) ?? "Collapse reasoning panel";
  const resolvedListAriaLabelledBy = resolveNonEmptyLabel(listAriaLabelledBy);
  const resolvedListAriaLabel = resolvedListAriaLabelledBy
    ? undefined
    : resolveNonEmptyLabel(listAriaLabel) ?? "Reasoning steps";

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
        aria-keyshortcuts="Enter Space"
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
          aria-labelledby={resolvedListAriaLabelledBy}
          style={{ margin: 0, padding: "0 12px 12px 28px", color: "var(--aurora-text-secondary)", display: "grid", gap: 8 }}
        >
          {normalizedSteps.length > 0 ? (
            normalizedSteps.map((step, index) => <li key={`${index}-${step}`}>{step}</li>)
          ) : (
            <li>{resolvedEmptyText}</li>
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

function hasRenderableReasoningNode(node: React.ReactNode): boolean {
  if (node === null || node === undefined || typeof node === "boolean") {
    return false;
  }

  if (typeof node === "string") {
    return node.trim().length > 0;
  }

  if (typeof node === "number") {
    return true;
  }

  if (Array.isArray(node)) {
    return node.some((item) => hasRenderableReasoningNode(item));
  }

  return React.isValidElement(node);
}
