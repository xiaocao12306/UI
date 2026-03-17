import type { Meta, StoryObj } from "@storybook/react";
import { Button, Empty } from "@aurora-ui/react";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Feedback/Empty",
  component: Empty,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Empty provides accessible placeholder states with optional icon/action and tone guidance."
      }
    }
  },
  args: {
    title: "No releases yet",
    description: "Create your first release to start tracking rollout quality."
  }
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <Empty {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const empty = await canvas.findByRole("status");
    await expect(empty).toHaveTextContent("No releases yet");
  }
};

export const WithAction: Story = {
  args: {
    icon: <span aria-hidden style={{ fontSize: 20 }}>🧭</span>,
    action: <Button size="sm">Create release</Button>
  },
  render: (args) => (
    <div style={{ width: 360 }}>
      <Empty {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole("button", { name: "Create release" })).toBeInTheDocument();
  }
};

export const ToneMatrix: Story = {
  render: () => (
    <div style={{ width: 420, display: "grid", gap: 12 }}>
      <Empty title="Default" description="Baseline empty state." />
      <Empty title="Info" description="No synced records yet." tone="info" />
      <Empty title="Warning" description="No eligible items for this filter." tone="warning" />
      <Empty title="Danger" description="No data returned due to request failure." tone="danger" />
    </div>
  )
};
