import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Checkbox } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Checkbox supports label/description narration, indeterminate state, and invalid/disabled visual semantics."
      }
    }
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  return (
    <div style={{ width: 320, display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Current state</span>
        <Badge tone={checked ? "success" : "danger"}>{checked ? "Enabled" : "Disabled"}</Badge>
      </div>
      <Checkbox
        aria-label="Enable AI memory"
        label="Enable AI memory"
        description="Persist short-term context between prompts."
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledCheckbox />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", { name: "Enable AI memory" });
    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();
  }
};

export const Indeterminate: Story = {
  args: {
    "aria-label": "Select all rows",
    label: "Select all rows",
    description: "Some rows are already selected.",
    indeterminate: true
  }
};

export const InvalidAndDisabled: Story = {
  render: () => (
    <div style={{ width: 320, display: "grid", gap: 14 }}>
      <Checkbox
        aria-label="Terms agreement"
        label="Terms agreement"
        description="You must accept terms before continuing."
        invalid
      />
      <Checkbox
        aria-label="System lock"
        label="System lock"
        description="Controlled by organization policy."
        disabled
        defaultChecked
      />
    </div>
  )
};
