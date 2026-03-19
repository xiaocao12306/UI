import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Switch } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Form/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."
      }
    }
  },
  args: {
    label: "Live updates",
    description: "Automatically refresh release activity every 30 seconds."
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledSwitch() {
  const [checked, setChecked] = React.useState(true);

  return (
    <div style={{ width: 360, display: "grid", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-primary)" }}>Current state</span>
        <Badge tone={checked ? "success" : "danger"}>{checked ? "Enabled" : "Paused"}</Badge>
      </div>
      <Switch
        label="Live updates"
        description="Automatically refresh release activity every 30 seconds."
        checked={checked}
        onCheckedChange={setChecked}
      />
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledSwitch />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", { name: "Live updates" });

    await userEvent.click(control);
    await expect(control).toHaveAttribute("aria-checked", "false");
    await expect(canvas.getByText("Paused")).toBeInTheDocument();
  }
};

export const InvalidAndDisabled: Story = {
  render: () => (
    <div style={{ width: 360, display: "grid", gap: 12 }}>
      <Switch
        label="Incident bypass"
        description="Resolve validation warnings before enabling bypass."
        invalid
        defaultChecked={false}
      />
      <Switch
        label="Org lock"
        description="Managed by administrator policy."
        disabled
        defaultChecked
      />
    </div>
  )
};

export const KeyboardToggle: Story = {
  args: {
    defaultChecked: false,
    label: "Keyboard mode",
    description: "Press Space to toggle this switch."
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", { name: "Keyboard mode" });

    control.focus();
    await userEvent.keyboard("[Space]");
    await expect(control).toHaveAttribute("aria-checked", "true");
  }
};
