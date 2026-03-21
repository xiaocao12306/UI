import * as React from "react";
import { Button } from "./Button";
import { Textarea } from "./Textarea";

export type PromptInputProps = {
  onSubmit?: (prompt: string) => void;
  submitting?: boolean;
  placeholder?: string;
};

export function PromptInput({ onSubmit, submitting, placeholder = "Type your prompt..." }: PromptInputProps) {
  const [value, setValue] = React.useState("");
  const composingRef = React.useRef(false);
  const trimmedValue = value.trim();

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
        aria-label="Prompt input"
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <small aria-live="polite" style={{ color: "var(--aurora-text-secondary)" }}>
          {submitting ? "Generating response..." : "Ctrl/Cmd + Enter to send"}
        </small>
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
