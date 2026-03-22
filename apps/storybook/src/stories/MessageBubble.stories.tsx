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
    const assistantMessage = canvas.getByRole("article", { name: "Assistant message" });
    await expect(assistantMessage).toHaveTextContent(
      "Here is the generated summary."
    );
    await expect(assistantMessage).toHaveAttribute("aria-roledescription", "message");
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

export const LocalizedNaming: Story = {
  render: () => (
    <StoryFullscreenFrame minHeight={260}>
      <MessageBubble speaker="system" speakerLabel="系统">
        模型已切换到发布模式。
      </MessageBubble>
      <MessageBubble speaker="user" speakerLabel="产品经理">
        请输出 v0.2 发布摘要。
      </MessageBubble>
      <MessageBubble speaker="assistant" ariaLabel="发布助手回复" roleDescription="聊天消息">
        已生成按模块拆分的发布摘要。
      </MessageBubble>
    </StoryFullscreenFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("article", { name: "系统 message" })).toBeInTheDocument();
    await expect(canvas.getByRole("article", { name: "产品经理 message" })).toBeInTheDocument();
    const assistantMessage = canvas.getByRole("article", { name: "发布助手回复" });
    await expect(assistantMessage).toBeInTheDocument();
    await expect(assistantMessage).toHaveAttribute("aria-roledescription", "聊天消息");
  }
};

export const LabelledByPrecedence: Story = {
  render: () => (
    <StoryFullscreenFrame minHeight={220}>
      <h3 id="message-heading" style={{ margin: 0 }}>
        Release assistant message
      </h3>
      <MessageBubble
        speaker="assistant"
        ariaLabel="Fallback assistant label"
        ariaLabelledBy="message-heading"
      >
        Linked heading naming remains canonical.
      </MessageBubble>
    </StoryFullscreenFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const message = canvas.getByRole("article", { name: "Release assistant message" });
    await expect(message).toHaveAttribute("aria-labelledby", "message-heading");
    await expect(message).not.toHaveAttribute("aria-label");
  }
};
