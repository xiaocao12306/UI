import type { Meta, StoryObj } from "@storybook/react";
import { StreamingText } from "@aurora-ui/react";
import { expect, within } from "@storybook/test";
import { StoryShowcaseFrame } from "./storyShowcase";

const sample = "Aurora UI streaming response is rendering.";

const meta = {
  title: "Feedback/StreamingText",
  component: StreamingText,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "StreamingText covers realtime token rendering with optional cursor policy and completion callbacks."
      }
    }
  },
  args: {
    text: sample,
    speed: 18
  }
} satisfies Meta<typeof StreamingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", { name: "Streaming text" });
    await expect(status).toHaveAttribute("aria-live", "polite");
  }
};

export const InstantDone: Story = {
  args: {
    streaming: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", { name: "Streaming text" });
    await expect(status).toHaveAttribute("aria-busy", "false");
    await expect(status).toHaveTextContent(sample);
  }
};

export const MultilineCursor: Story = {
  args: {
    text: "Line one\nLine two\nLine three",
    cursorChar: "▋",
    showCursorWhenDone: true
  },
  render: (args) => (
    <StoryShowcaseFrame maxWidth="min(100%, 380px)">
      <StreamingText {...args} />
    </StoryShowcaseFrame>
  )
};
