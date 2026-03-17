import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PromptInput } from "@aurora-ui/react";

const meta = {
  title: "AI/PromptInput",
  component: PromptInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."
      }
    }
  },
  args: {
    placeholder: "Summarize user feedback and propose action items..."
  }
} satisfies Meta<typeof PromptInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

function InteractivePromptInput() {
  const [submitting, setSubmitting] = React.useState(false);
  const [lastPrompt, setLastPrompt] = React.useState("None");

  return (
    <div style={{ width: 620, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Last submitted prompt: <strong style={{ color: "var(--aurora-text-primary)" }}>{lastPrompt}</strong>
      </p>
      <PromptInput
        submitting={submitting}
        onSubmit={(prompt) => {
          setSubmitting(true);
          setLastPrompt(prompt);
          window.setTimeout(() => setSubmitting(false), 900);
        }}
      />
    </div>
  );
}

export const WithAiRequestState: Story = {
  render: () => <InteractivePromptInput />
};
