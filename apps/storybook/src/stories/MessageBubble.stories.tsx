import type { Meta, StoryObj } from "@storybook/react";
import { MessageBubble } from "@aurora-ui/react";

const meta = {
  title: "AI/MessageBubble",
  component: MessageBubble,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "MessageBubble renders user, assistant, and system variants for chat-style AI interfaces."
      }
    }
  },
  args: {
    speaker: "assistant",
    children: "Here is the generated summary."
  }
} satisfies Meta<typeof MessageBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Conversation: Story = {
  render: () => (
    <div style={{ minHeight: 320, padding: 16, display: "grid", gap: 10 }}>
      <MessageBubble speaker="system">Model switched to release-planning mode.</MessageBubble>
      <MessageBubble speaker="user">Generate a concise changelog for v0.2.</MessageBubble>
      <MessageBubble speaker="assistant">
        Changelog drafted with highlights, breaking changes, and migration tips.
      </MessageBubble>
    </div>
  )
};
