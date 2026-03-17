import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@aurora-ui/react";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Core/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Status badge for concise semantic signals in dashboards and AI interaction traces."
      }
    }
  },
  args: {
    children: "Stable"
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ToneMatrix: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Badge>Default</Badge>
      <Badge tone="success">Passed</Badge>
      <Badge tone="danger">Failed</Badge>
    </div>
  )
};

export const AiInteractionStatus: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Badge>Queued</Badge>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Prompt is waiting for the model response.</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Badge tone="success">Grounded</Badge>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Citations and reasoning checks passed.</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Badge tone="danger">Needs review</Badge>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Low-confidence branch detected.</span>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Queued")).toBeInTheDocument();
    await expect(canvas.getByText("Grounded")).toBeInTheDocument();
    await expect(canvas.getByText("Needs review")).toBeInTheDocument();
  }
};
