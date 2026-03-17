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

export const StateMatrix: Story = {
  render: () => (
    <div style={{ width: 780, display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gap: 8 }}>
        <strong>Default + Disabled</strong>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="solid" disabled>
            Solid Disabled
          </Button>
          <Button variant="outline" disabled>
            Outline Disabled
          </Button>
          <Button variant="ghost" disabled>
            Ghost Disabled
          </Button>
        </div>
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        <strong>Loading + Size</strong>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
          <Button size="sm" loading loadingText="Loading">
            Save
          </Button>
          <Button size="md" loading>
            Generate Response
          </Button>
          <Button size="lg" variant="outline" loading loadingText="Publishing">
            Publish
          </Button>
        </div>
      </div>

      <small style={{ color: "var(--aurora-text-secondary)" }}>
        Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate.
      </small>
    </div>
  )
};
