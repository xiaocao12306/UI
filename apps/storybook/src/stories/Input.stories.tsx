import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, FormField, Input } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."
      }
    }
  },
  args: {
    placeholder: "Search release notes..."
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AiPromptStyle: Story = {
  render: () => (
    <div style={{ width: 520, display: "grid", gap: 8 }}>
      <label htmlFor="prompt" style={{ fontWeight: 600 }}>
        Prompt Draft
      </label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8 }}>
        <Input id="prompt" placeholder="Ask Aurora AI to scaffold a new dialog flow..." aria-label="AI prompt" />
        <Button>Send</Button>
      </div>
      <small style={{ color: "var(--aurora-text-secondary)" }}>
        Tip: switch theme in toolbar to validate input token contrast.
      </small>
    </div>
  )
};

export const StateMatrix: Story = {
  render: () => (
    <div style={{ width: 560, display: "grid", gap: 12 }}>
      <FormField label="Default" description="Hover and focus to verify border and ring states.">
        <Input placeholder="Type project name..." />
      </FormField>

      <FormField label="Error" error="Please provide a valid email address." required>
        <Input placeholder="name@company.com" defaultValue="invalid-email" />
      </FormField>

      <FormField label="Disabled" description="Disabled fields remain readable with lower emphasis." disabled>
        <Input placeholder="Disabled field" />
      </FormField>

      <FormField label="Read-only" description="Read-only fields are focusable but not editable.">
        <Input value="release/0.1.0" readOnly aria-label="Release branch" />
      </FormField>
    </div>
  )
};

function ValidationFlowDemo() {
  const [value, setValue] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const invalid = touched && value.trim().length === 0;

  return (
    <div style={{ width: 560, display: "grid", gap: 10 }}>
      <FormField label="Prompt" error={invalid ? "Prompt is required." : undefined}>
        <Input
          aria-label="Prompt input"
          value={value}
          placeholder="Describe release note summary..."
          onChange={(event) => setValue(event.target.value)}
          onBlur={() => setTouched(true)}
        />
      </FormField>
      <small style={{ color: "var(--aurora-text-secondary)" }} data-testid="char-count">
        {value.length} chars
      </small>
      <Button disabled={value.trim().length === 0}>Submit Prompt</Button>
    </div>
  );
}

export const ValidationFlow: Story = {
  render: () => <ValidationFlowDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox", { name: "Prompt input" });

    await userEvent.click(input);
    await userEvent.tab();
    await expect(canvas.getByRole("alert")).toHaveTextContent("Prompt is required.");
    await expect(canvas.getByRole("button", { name: "Submit Prompt" })).toBeDisabled();

    await userEvent.type(input, "Release summary");
    await expect(canvas.queryByRole("alert")).not.toBeInTheDocument();
    await expect(canvas.getByTestId("char-count")).toHaveTextContent("15 chars");
    await expect(canvas.getByRole("button", { name: "Submit Prompt" })).not.toBeDisabled();
  }
};
