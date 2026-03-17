import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, RadioGroup } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const options = [
  { label: "Small", value: "s", description: "Compact layout" },
  { label: "Medium", value: "m", description: "Balanced layout" },
  { label: "Large", value: "l", description: "Readable layout" }
];

const meta = {
  title: "Form/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."
      }
    }
  },
  args: {
    name: "Size selection",
    options
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledRadioGroup() {
  const [size, setSize] = React.useState("m");

  return (
    <div style={{ width: 340, display: "grid", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Current size</span>
        <Badge>{size}</Badge>
      </div>
      <RadioGroup name="Size selection" value={size} onChange={setSize} options={options} />
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledRadioGroup />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const large = canvas.getByRole("radio", { name: /Large/i });
    await userEvent.click(large);
    await expect(large).toBeChecked();
  }
};

export const InvalidState: Story = {
  args: {
    name: "Approval",
    invalid: true,
    options: [
      { label: "Approved", value: "approved" },
      { label: "Rejected", value: "rejected" }
    ]
  }
};

export const DisabledOption: Story = {
  args: {
    name: "Release track",
    defaultValue: "stable",
    options: [
      { label: "Stable", value: "stable" },
      { label: "Canary", value: "canary", disabled: true },
      { label: "Experimental", value: "experimental" }
    ]
  }
};
