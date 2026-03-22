import * as React from "react";

export type MessageSpeaker = "user" | "assistant" | "system";

export type MessageBubbleProps = {
  speaker: MessageSpeaker;
  children: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  speakerLabel?: string;
  roleDescription?: string;
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

const speakerLabels: Record<MessageSpeaker, string> = {
  user: "User",
  assistant: "Assistant",
  system: "System"
};

export function MessageBubble({
  speaker,
  children,
  ariaLabel,
  ariaLabelledBy,
  speakerLabel,
  roleDescription
}: MessageBubbleProps) {
  const resolvedSpeakerLabel = resolveNonEmptyLabel(speakerLabel) ?? speakerLabels[speaker];
  const resolvedAriaLabelledBy = resolveNonEmptyLabel(ariaLabelledBy);
  const resolvedAriaLabel =
    resolvedAriaLabelledBy === undefined
      ? resolveNonEmptyLabel(ariaLabel) ?? `${resolvedSpeakerLabel} message`
      : undefined;
  const resolvedRoleDescription = resolveNonEmptyLabel(roleDescription) ?? "message";

  return (
    <article
      aria-label={resolvedAriaLabel}
      aria-labelledby={resolvedAriaLabelledBy}
      aria-roledescription={resolvedRoleDescription}
      data-speaker={speaker}
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

function resolveNonEmptyLabel(label: string | undefined) {
  if (typeof label === "string" && label.trim().length > 0) {
    return label.trim();
  }

  return undefined;
}
