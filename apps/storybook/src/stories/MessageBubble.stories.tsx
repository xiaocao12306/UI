import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { MessageBubble } from "@aurora-ui/react";
import { StoryFullscreenFrame } from "./storyShowcase";

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

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("article", { name: "Assistant message" })).toHaveTextContent(
      "Here is the generated summary."
    );
  }
};

export const Conversation: Story = {
  render: () => (
    <StoryFullscreenFrame minHeight={320}>
      <MessageBubble speaker="system">Model switched to release-planning mode.</MessageBubble>
      <MessageBubble speaker="user">Generate a concise changelog for v0.2.</MessageBubble>
      <MessageBubble speaker="assistant">
        Changelog drafted with highlights, breaking changes, and migration tips.
      </MessageBubble>
    </StoryFullscreenFrame>
  )
};
