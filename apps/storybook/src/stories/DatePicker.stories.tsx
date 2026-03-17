import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, DatePicker } from "@aurora-ui/react";

const meta = {
  title: "Form/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "DatePicker wraps a date input with Aurora token styling and controlled/uncontrolled date selection support."
      }
    }
  },
  args: {
    "aria-label": "Release date",
    onValueChange: () => {}
  }
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledDatePickerDemo() {
  const [value, setValue] = React.useState("2026-03-17");
  return (
    <div style={{ width: 360, display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Selected date</span>
        <Badge tone="default">{value}</Badge>
      </div>
      <DatePicker
        aria-label="Release date"
        value={value}
        onValueChange={setValue}
        min="2026-01-01"
        max="2026-12-31"
      />
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledDatePickerDemo />
};

export const InvalidState: Story = {
  args: {
    "aria-label": "Release date",
    defaultValue: "2026-01-09",
    invalid: true
  }
};
