import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@aurora-ui/react";

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
      <Tag style={{ borderColor: "var(--aurora-color-blue-500)", color: "var(--aurora-color-blue-500)" }}>priority</Tag>
    </div>
  )
};

export const AiContextMarkers: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Tag>conversation-id: 1438</Tag>
        <Tag>scope: docs</Tag>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Tag style={{ borderColor: "var(--aurora-color-blue-500)", color: "var(--aurora-color-blue-500)" }}>memory synced</Tag>
        <Tag style={{ borderColor: "var(--aurora-color-red-500)", color: "var(--aurora-color-red-500)" }}>awaiting approval</Tag>
      </div>
    </div>
  )
};
