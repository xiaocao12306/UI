import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PromptInput } from "@aurora-ui/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";

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
  const [submissionCount, setSubmissionCount] = React.useState(0);

  return (
    <div style={{ width: 620, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Last submitted prompt: <strong style={{ color: "var(--aurora-text-primary)" }}>{lastPrompt}</strong>
      </p>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Submission count: <strong style={{ color: "var(--aurora-text-primary)" }}>{submissionCount}</strong>
      </p>
      <PromptInput
        submitting={submitting}
        onSubmit={(prompt) => {
          setSubmitting(true);
          setLastPrompt(prompt);
          setSubmissionCount((value) => value + 1);
          window.setTimeout(() => setSubmitting(false), 600);
        }}
      />
    </div>
  );
}

export const WithAiRequestState: Story = {
  render: () => <InteractivePromptInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", { name: "Prompt input" });
    const sendButton = canvas.getByRole("button", { name: "Send" });

    await expect(sendButton).toBeDisabled();
    await userEvent.type(textbox, "Draft release retrospective");
    await expect(sendButton).toBeEnabled();

    await userEvent.keyboard("{Control>}{Enter}{/Control}");
    await expect(canvas.getByText("Draft release retrospective")).toBeInTheDocument();
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");

    const loadingButton = canvas.getByRole("button", { name: "Sending..." });
    await expect(loadingButton).toBeDisabled();
    await userEvent.click(loadingButton);
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");

    await waitFor(() => {
      expect(canvas.getByRole("button", { name: "Send" })).toBeDisabled();
    });
  }
};

function MultiActionFeedbackPromptInput() {
  const [submitting, setSubmitting] = React.useState(false);
  const [updates, setUpdates] = React.useState<string[]>([]);

  return (
    <div style={{ width: 620, display: "grid", gap: 10 }}>
      <PromptInput
        submitting={submitting}
        placeholder="Draft release note and publish checklist..."
        onSubmit={(prompt) => {
          setSubmitting(true);
          setUpdates([`Queued: ${prompt}`]);
          window.setTimeout(() => setUpdates((items) => [...items, "Draft generated"]), 120);
          window.setTimeout(() => setUpdates((items) => [...items, "Fact check complete"]), 240);
          window.setTimeout(() => {
            setUpdates((items) => [...items, "Ready for publish"]);
            setSubmitting(false);
          }, 360);
        }}
      />
      <ol aria-label="AI action feedback" style={{ margin: 0, paddingLeft: 20, color: "var(--aurora-text-secondary)" }}>
        {updates.length > 0 ? updates.map((item) => <li key={item}>{item}</li>) : <li>No actions yet.</li>}
      </ol>
    </div>
  );
}

export const MultiActionFeedback: Story = {
  render: () => <MultiActionFeedbackPromptInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", { name: "Prompt input" });

    await userEvent.type(textbox, "Prepare changelog summary");
    await userEvent.click(canvas.getByRole("button", { name: "Send" }));

    await expect(canvas.getByText("Queued: Prepare changelog summary")).toBeInTheDocument();
    await waitFor(() => {
      expect(canvas.getByText("Draft generated")).toBeInTheDocument();
      expect(canvas.getByText("Fact check complete")).toBeInTheDocument();
      expect(canvas.getByText("Ready for publish")).toBeInTheDocument();
    });
  }
};
