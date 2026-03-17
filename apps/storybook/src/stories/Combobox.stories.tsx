import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Combobox, type ComboboxOption } from "@aurora-ui/react";

const frameworkOptions: ComboboxOption[] = [
  { value: "react", label: "React", keywords: ["library", "jsx"] },
  { value: "vue", label: "Vue", keywords: ["framework"] },
  { value: "svelte", label: "Svelte", keywords: ["compiler"] },
  { value: "solid", label: "Solid", keywords: ["signals"], disabled: true }
];

const meta = {
  title: "Form/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."
      }
    }
  },
  args: {
    options: frameworkOptions,
    onValueChange: () => {}
  }
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledComboboxDemo() {
  const [value, setValue] = React.useState("react");

  return (
    <div style={{ width: 400, display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Selected framework</span>
        <Badge tone="default">{value}</Badge>
      </div>
      <Combobox id="framework-combobox" options={frameworkOptions} value={value} onValueChange={setValue} ariaLabel="Framework" />
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledComboboxDemo />
};

export const WithCustomEmptyMessage: Story = {
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
};
