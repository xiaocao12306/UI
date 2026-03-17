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

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || submitting) {
      return;
    }

    onSubmit?.(trimmed);
    setValue("");
  };

  return (
    <div
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
        rows={4}
        onKeyDown={(event) => {
          if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
            submit();
          }
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <small style={{ color: "var(--aurora-text-secondary)" }}>Ctrl/Cmd + Enter to send</small>
        <Button onClick={submit} disabled={submitting || !value.trim()}>
          {submitting ? "Sending..." : "Send"}
        </Button>
      </div>
    </div>
  );
}
