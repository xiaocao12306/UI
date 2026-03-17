import * as React from "react";

export type MessageSpeaker = "user" | "assistant" | "system";

export type MessageBubbleProps = {
  speaker: MessageSpeaker;
  children: React.ReactNode;
};

const speakerStyles: Record<MessageSpeaker, React.CSSProperties> = {
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

export function MessageBubble({ speaker, children }: MessageBubbleProps) {
  return (
    <article
      style={{
        maxWidth: "min(680px, 90%)",
        borderRadius: 12,
        border: "1px solid",
        padding: "10px 12px",
        ...speakerStyles[speaker]
      }}
    >
      {children}
    </article>
  );
}
