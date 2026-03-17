import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button, Tag } from "@aurora-ui/react";

const meta = {
  title: "Core/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."
      }
    }
  },
  args: {
    children: "Generate Response"
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "solid",
    size: "md"
  }
};

export const VariantMatrix: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Tag>Token: button.solid.bg</Tag>
        <Badge tone="success">Theme-aware</Badge>
      </div>
    </div>
  )
};
