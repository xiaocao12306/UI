import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Select } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."
      }
    }
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledSelectDemo() {
  const [framework, setFramework] = React.useState("react");

  return (
    <div style={{ width: 340, display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-primary)" }}>Selected</span>
        <Badge>{framework}</Badge>
      </div>
      <Select aria-label="Framework select" value={framework} onChange={(event) => setFramework(event.target.value)}>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="svelte">Svelte</option>
      </Select>
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledSelectDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", { name: "Framework select" });
    await userEvent.selectOptions(select, "vue");
    await expect(select).toHaveValue("vue");
  }
};

export const InvalidState: Story = {
  render: () => (
    <div style={{ width: 340, display: "grid", gap: 8 }}>
      <Select aria-label="Environment select" invalid defaultValue="" aria-describedby="environment-error">
        <option value="" disabled>
          Select environment
        </option>
        <option value="prod">Production</option>
        <option value="stage">Staging</option>
      </Select>
      <p
        id="environment-error"
        style={{
          margin: 0,
          color: "color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",
          fontSize: 13
        }}
      >
        Environment is required before deployment.
      </p>
    </div>
  )
};

export const DisabledState: Story = {
  args: {
    "aria-label": "Disabled framework select",
    disabled: true,
    defaultValue: "react",
    children: [
      <option value="react" key="react">
        React
      </option>,
      <option value="vue" key="vue">
        Vue
      </option>
    ]
  }
};
