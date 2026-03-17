import type { Meta, StoryObj } from "@storybook/react";
import { Button, Input } from "@aurora-ui/react";

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
