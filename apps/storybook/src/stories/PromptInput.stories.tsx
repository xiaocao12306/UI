import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PromptInput } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";
import { StoryShowcaseFrame, storyEmphasisTextStyle, storyMutedTextStyle } from "./storyShowcase";

const promptTelemetryTextStyle: React.CSSProperties = {
  ...storyMutedTextStyle
};

const promptTelemetryValueStyle: React.CSSProperties = {
  ...storyEmphasisTextStyle
};

function PromptInputShowcase({ children }: { children: React.ReactNode }) {
  return (
    <StoryShowcaseFrame maxWidth="min(100%, 640px)">
      {children}
    </StoryShowcaseFrame>
  );
}

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

function dispatchLegacyImeCtrlEnter(element: HTMLElement) {
  const event = new KeyboardEvent("keydown", {
    key: "Enter",
    ctrlKey: true,
    bubbles: true,
    cancelable: true
  });
  Object.defineProperty(event, "keyCode", { value: 229 });
  element.dispatchEvent(event);
}

export const Default: Story = {};

function InteractivePromptInput() {
  const [submitting, setSubmitting] = React.useState(false);
  const [lastPrompt, setLastPrompt] = React.useState("None");
  const [submissionCount, setSubmissionCount] = React.useState(0);

  return (
    <PromptInputShowcase>
      <p style={promptTelemetryTextStyle}>
        Last submitted prompt: <strong style={promptTelemetryValueStyle}>{lastPrompt}</strong>
      </p>
      <p style={promptTelemetryTextStyle}>
        Submission count: <strong style={promptTelemetryValueStyle}>{submissionCount}</strong>
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
    </PromptInputShowcase>
  );
}

export const WithAiRequestState: Story = {
  render: () => <InteractivePromptInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", { name: "Prompt input" });
    await expect(textbox).toHaveAttribute("aria-keyshortcuts", "Control+Enter Meta+Enter");
    const shortcutHint = canvas.getByText("Ctrl/Cmd + Enter to send");
    await expect(textbox).toHaveAttribute("aria-describedby", shortcutHint.getAttribute("id"));
    const sendButton = canvas.getByRole("button", { name: "Send" });

    await expect(sendButton).toBeDisabled();
    await userEvent.type(textbox, "Draft release retrospective");
    await expect(sendButton).toBeEnabled();
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");

    fireEvent.compositionStart(textbox);
    fireEvent.keyDown(textbox, { key: "Enter", ctrlKey: true });
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");
    fireEvent.compositionEnd(textbox);
    dispatchLegacyImeCtrlEnter(textbox);
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");

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

export const LocalizedCopy: Story = {
  args: {
    ariaLabel: "智能提示输入",
    shortcutHint: "按 Ctrl/Cmd + Enter 提交",
    submittingHint: "正在生成建议..."
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", { name: "智能提示输入" });
    await expect(textbox).toHaveAttribute("aria-keyshortcuts", "Control+Enter Meta+Enter");
    const shortcutHint = canvas.getByText("按 Ctrl/Cmd + Enter 提交");
    await expect(shortcutHint).toBeInTheDocument();
    await expect(textbox).toHaveAttribute("aria-describedby", shortcutHint.getAttribute("id"));
  }
};

function MultiActionFeedbackPromptInput() {
  const [submitting, setSubmitting] = React.useState(false);
  const [updates, setUpdates] = React.useState<string[]>([]);

  return (
    <PromptInputShowcase>
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
      <ol aria-label="AI action feedback" style={{ ...promptTelemetryTextStyle, paddingLeft: 20 }}>
        {updates.length > 0 ? updates.map((item) => <li key={item}>{item}</li>) : <li>No actions yet.</li>}
      </ol>
    </PromptInputShowcase>
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
