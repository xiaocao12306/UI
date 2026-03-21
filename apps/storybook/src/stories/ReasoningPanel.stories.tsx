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
    const toggle = await canvas.findByRole("button", { name: "Expand reasoning panel" });

    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(toggle).toHaveAttribute("aria-label", "Collapse reasoning panel");
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

export const LocalizedLabels: Story = {
  args: {
    title: "推理过程",
    steps: ["收集上下文", "梳理约束", "输出执行计划"],
    expandLabel: "展开推理面板",
    collapseLabel: "收起推理面板",
    listAriaLabel: "推理步骤",
    emptyText: "暂无推理步骤。"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", { name: "展开推理面板" });
    await userEvent.click(toggle);
    await expect(canvas.getByRole("button", { name: "收起推理面板" })).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByRole("list", { name: "推理步骤" })).toBeInTheDocument();
  }
};
