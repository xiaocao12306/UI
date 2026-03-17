import type { Meta, StoryObj } from "@storybook/react";
import { ReasoningPanel } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "AI/ReasoningPanel",
  component: ReasoningPanel,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "ReasoningPanel exposes collapsible model thinking steps with accessible expand/collapse semantics."
      }
    }
  },
  args: {
    title: "Model reasoning",
    steps: ["Understand release scope", "Group changes by area", "Generate review-ready summary"]
  }
} satisfies Meta<typeof ReasoningPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", { name: /Model reasoning/ });

    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByText("Understand release scope")).toBeInTheDocument();
  }
};

export const OpenByDefault: Story = {
  args: {
    defaultOpen: true
  }
};

export const EmptyFallback: Story = {
  args: {
    steps: []
  }
};
