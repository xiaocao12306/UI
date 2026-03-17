import type { Meta, StoryObj } from "@storybook/react";
import { StreamingCodeBlock } from "@aurora-ui/react";
import { expect, waitFor } from "@storybook/test";

const meta = {
  title: "AI/StreamingCodeBlock",
  component: StreamingCodeBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "StreamingCodeBlock reveals generated code progressively and marks busy state until streaming completes."
      }
    }
  },
  args: {
    language: "bash",
    code: "pnpm verify",
    speed: 12
  }
} satisfies Meta<typeof StreamingCodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[aria-busy]") as HTMLElement;
    const codeNode = canvasElement.querySelector("code") as HTMLElement;

    await expect(root).toHaveAttribute("aria-busy", "true");
    await waitFor(() => {
      expect(codeNode).toHaveTextContent("pnpm verify");
      expect(root).toHaveAttribute("aria-busy", "false");
    });
  }
};

export const InstantRender: Story = {
  args: {
    language: "ts",
    code: "export const releaseReady = true;",
    speed: 0
  }
};
