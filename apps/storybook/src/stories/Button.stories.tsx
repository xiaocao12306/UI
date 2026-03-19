import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button, Tag } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Core/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."
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
        Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to
        validate.
      </small>
    </div>
  )
};

function KeyboardActivationDemo() {
  const [count, setCount] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  return (
    <div style={{ width: 520, display: "grid", gap: 12 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Activation count: <strong data-testid="activation-count">{count}</strong>
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Button onClick={() => setCount((value) => value + 1)}>Run Action</Button>
        <Button
          variant="outline"
          loading={loading}
          style={{
            color: "var(--aurora-text-primary)",
            borderColor: "var(--aurora-border-strong)"
          }}
          onClick={() => setCount((value) => value + 10)}
        >
          Background Task
        </Button>
        <Button variant="outline" onClick={() => setLoading((value) => !value)}>
          {loading ? "Enable Background Task" : "Disable Background Task"}
        </Button>
      </div>
    </div>
  );
}

export const KeyboardActivation: Story = {
  render: () => <KeyboardActivationDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const runAction = await canvas.findByRole("button", { name: "Run Action" });

    runAction.focus();
    await userEvent.keyboard("{Enter}");
    await userEvent.keyboard(" ");
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("2");

    const loadingButton = canvas.getByRole("button", { name: "Background Task" });
    await expect(loadingButton).toBeDisabled();
    await expect(loadingButton).toHaveAttribute("aria-busy", "true");

    await userEvent.click(canvas.getByRole("button", { name: "Enable Background Task" }));
    await expect(loadingButton).not.toBeDisabled();
    await userEvent.click(loadingButton);
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("12");
  }
};
