import * as React from "react";
import { Button } from "./Button";
import { Textarea } from "./Textarea";

export type PromptInputProps = {
  onSubmit?: (prompt: string) => void;
  submitting?: boolean;
  placeholder?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  shortcutHint?: React.ReactNode;
  submittingHint?: React.ReactNode;
};

export function PromptInput({
  onSubmit,
  submitting,
  placeholder = "Type your prompt...",
  ariaLabel,
  ariaLabelledBy,
  shortcutHint = "Ctrl/Cmd + Enter to send",
  submittingHint = "Generating response..."
}: PromptInputProps) {
  const [value, setValue] = React.useState("");
  const composingRef = React.useRef(false);
  const hintId = React.useId();
  const trimmedValue = value.trim();
  const activeHint = submitting ? submittingHint : shortcutHint;
  const hasHintContent = hasRenderablePromptNode(activeHint);
  const resolvedAriaLabelledBy = resolveNonEmptyLabel(ariaLabelledBy);
  const resolvedAriaLabel =
    resolvedAriaLabelledBy === undefined ? resolveNonEmptyLabel(ariaLabel) ?? "Prompt input" : undefined;

  const submit = () => {
    if (!trimmedValue || submitting) {
      return;
    }

    onSubmit?.(trimmedValue);
    setValue("");
  };

  return (
    <div
      aria-busy={submitting || undefined}
      style={{
        border: "1px solid var(--aurora-border-default)",
        borderRadius: "var(--aurora-radius-lg)",
        background: "var(--aurora-surface-default)",
        padding: 10,
        display: "grid",
        gap: 8
      }}
    >
      <Textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        aria-label={resolvedAriaLabel}
        aria-labelledby={resolvedAriaLabelledBy}
        aria-describedby={hasHintContent ? hintId : undefined}
        aria-keyshortcuts={submitting ? undefined : "Control+Enter Meta+Enter"}
        disabled={submitting}
        rows={4}
        onCompositionStart={() => {
          composingRef.current = true;
        }}
        onCompositionEnd={() => {
          composingRef.current = false;
        }}
        onKeyDown={(event) => {
          if (composingRef.current || isComposingPromptKeyEvent(event)) {
            return;
          }

          if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
            submit();
          }
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: hasHintContent ? "space-between" : "flex-end",
          alignItems: "center"
        }}
      >
        {hasHintContent ? (
          <small id={hintId} aria-live="polite" style={{ color: "var(--aurora-text-secondary)" }}>
            {activeHint}
          </small>
        ) : null}
        <Button onClick={submit} disabled={submitting || !trimmedValue}>
          {submitting ? "Sending..." : "Send"}
        </Button>
      </div>
    </div>
  );
}

function isComposingPromptKeyEvent(event: React.KeyboardEvent<HTMLTextAreaElement>) {
  const nativeEvent = event.nativeEvent as KeyboardEvent & { isComposing?: boolean; keyCode?: number };
  return Boolean(nativeEvent.isComposing) || nativeEvent.keyCode === 229;
}

function resolveNonEmptyLabel(label: string | undefined) {
  if (typeof label === "string" && label.trim().length > 0) {
    return label.trim();
  }

  return undefined;
}

function hasRenderablePromptNode(node: React.ReactNode) {
  if (node === null || node === undefined || typeof node === "boolean") {
    return false;
  }

  if (typeof node === "string") {
    return node.trim().length > 0;
  }

  return true;
}
