import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, DatePicker } from "@aurora-ui/react";
import { expect, fireEvent, within } from "@storybook/test";

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
  render: () => <ControlledDatePickerDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Release date");

    fireEvent.change(input, { target: { value: "2026-04-02" } });
    await expect(canvas.getByText("2026-04-02")).toBeInTheDocument();
  }
};

export const InvalidState: Story = {
  args: {
    "aria-label": "Release date",
    defaultValue: "2026-01-09",
    invalid: true
  }
};

export const InvalidWithHelper: Story = {
  render: () => (
    <div style={{ width: 360, display: "grid", gap: 8 }}>
      <DatePicker
        aria-label="Release date"
        defaultValue="2026-02-10"
        invalid
        aria-describedby="release-date-help"
        errorMessageId="release-date-error"
        onValueChange={() => {}}
      />
      <p id="release-date-help" style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 13 }}>
        Choose a date between February and December.
      </p>
      <p id="release-date-error" style={{ margin: 0, color: "var(--aurora-color-red-500)", fontSize: 13 }}>
        Release date must be in the approved launch window.
      </p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Release date");
    await expect(input).toHaveAttribute("aria-describedby", "release-date-help release-date-error");
    await expect(input).toHaveAttribute("aria-errormessage", "release-date-error");
  }
};

export const StateMatrix: Story = {
  render: () => (
    <div style={{ width: 360, display: "grid", gap: 12 }}>
      <DatePicker aria-label="Default date picker" defaultValue="2026-03-17" onValueChange={() => {}} />
      <DatePicker
        aria-label="Invalid date picker"
        defaultValue="2025-12-31"
        min="2026-01-01"
        invalid
        onValueChange={() => {}}
      />
      <DatePicker aria-label="Read only date picker" value="2026-07-01" readOnly onValueChange={() => {}} />
      <DatePicker aria-label="Disabled date picker" defaultValue="2026-08-15" disabled onValueChange={() => {}} />
    </div>
  )
};
