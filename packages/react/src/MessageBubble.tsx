import * as React from "react";

export type MessageRole = "user" | "assistant" | "system";

export type MessageBubbleProps = {
  role: MessageRole;
  children: React.ReactNode;
};

const roleStyles: Record<MessageRole, React.CSSProperties> = {
  user: {
    marginLeft: "auto",
    background: "var(--aurora-accent-default)",
    color: "var(--aurora-text-inverse)",
    borderColor: "transparent"
  },
  assistant: {
    marginRight: "auto",
    background: "var(--aurora-surface-elevated)",
    color: "var(--aurora-text-primary)",
    borderColor: "var(--aurora-border-default)"
  },
  system: {
    margin: "0 auto",
    background: "transparent",
    color: "var(--aurora-text-secondary)",
    borderColor: "transparent"
  }
};

export function MessageBubble({ role, children }: MessageBubbleProps) {
  return (
    <article
      style={{
        maxWidth: "min(680px, 90%)",
        borderRadius: 12,
        border: "1px solid",
        padding: "10px 12px",
        ...roleStyles[role]
      }}
    >
      {children}
    </article>
  );
}
