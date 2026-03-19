import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@aurora-ui/react";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Core/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Neutral metadata chip for filters, environment labels, and branch markers."
      }
    }
  },
  args: {
    children: "release/0.1.0"
  }
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MetadataRow: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
      <Tag>cloud</Tag>
      <Tag>frontend</Tag>
      <Tag>design-system</Tag>
      <Tag
        style={{
          borderColor: "var(--aurora-color-blue-500)",
          background: "color-mix(in srgb, var(--aurora-color-blue-500) 16%, var(--aurora-surface-elevated))",
          color: "var(--aurora-text-primary)"
        }}
      >
        priority
      </Tag>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("cloud")).toBeInTheDocument();
    await expect(canvas.getByText("frontend")).toBeInTheDocument();
    await expect(canvas.getByText("design-system")).toBeInTheDocument();
    await expect(canvas.getByText("priority")).toBeInTheDocument();
  }
};

export const AiContextMarkers: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Tag>conversation-id: 1438</Tag>
        <Tag>scope: docs</Tag>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Tag
          style={{
            borderColor: "var(--aurora-color-blue-500)",
            background: "color-mix(in srgb, var(--aurora-color-blue-500) 16%, var(--aurora-surface-elevated))",
            color: "var(--aurora-text-primary)"
          }}
        >
          memory synced
        </Tag>
        <Tag
          style={{
            borderColor: "var(--aurora-color-red-500)",
            background: "color-mix(in srgb, var(--aurora-color-red-500) 16%, var(--aurora-surface-elevated))",
            color: "var(--aurora-text-primary)"
          }}
        >
          awaiting approval
        </Tag>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("conversation-id: 1438")).toBeInTheDocument();
    await expect(canvas.getByText("scope: docs")).toBeInTheDocument();
    await expect(canvas.getByText("memory synced")).toBeInTheDocument();
    await expect(canvas.getByText("awaiting approval")).toBeInTheDocument();
  }
};
