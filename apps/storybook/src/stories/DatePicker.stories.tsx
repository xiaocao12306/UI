import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, DatePicker } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";

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
        <span style={{ color: "var(--aurora-text-primary)" }}>Selected date</span>
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
      <p id="release-date-help" style={{ margin: 0, color: "var(--aurora-text-primary)", fontSize: 13 }}>
        Choose a date between February and December.
      </p>
      <p
        id="release-date-error"
        style={{
          margin: 0,
          color: "color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",
          fontSize: 13
        }}
      >
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

export const ShortcutHintPrecision: Story = {
  render: () => (
    <div style={{ width: 360, display: "grid", gap: 12 }}>
      <DatePicker aria-label="Date shortcut hint input" defaultValue="2026-08-15" onValueChange={() => {}} />
      <DatePicker
        aria-label="Date shortcut custom input"
        aria-keyshortcuts="Enter"
        defaultValue="2026-08-16"
        onValueChange={() => {}}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText("Date shortcut hint input")).not.toHaveAttribute(
      "aria-keyshortcuts"
    );
    await expect(canvas.getByLabelText("Date shortcut custom input")).toHaveAttribute(
      "aria-keyshortcuts",
      "Enter"
    );
  }
};

export const BlankAriaLabelFallback: Story = {
  render: () => (
    <div style={{ width: 360, display: "grid", gap: 8 }}>
      <p
        id="release-window-label"
        style={{ margin: 0, color: "var(--aurora-text-primary)", fontWeight: 600 }}
      >
        Release window
      </p>
      <DatePicker aria-label="   " aria-labelledby="release-window-label" defaultValue="2026-11-09" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Release window");
    await expect(input).toHaveAttribute("aria-labelledby", "release-window-label");
    await expect(input).not.toHaveAttribute("aria-label");
  }
};

export const LabelledByPrecedence: Story = {
  render: () => (
    <div style={{ width: 360, display: "grid", gap: 8 }}>
      <h3 id="release-calendar-heading" style={{ margin: 0, color: "var(--aurora-text-primary)" }}>
        Release calendar
      </h3>
      <DatePicker
        aria-label="Release date"
        aria-labelledby="release-calendar-heading"
        defaultValue="2026-06-15"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Release calendar");
    await expect(input).toHaveAttribute("aria-labelledby", "release-calendar-heading");
    await expect(input).not.toHaveAttribute("aria-label");
  }
};

export const FocusIntentReentry: Story = {
  render: () => (
    <div style={{ width: 360, display: "grid", gap: 8 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 13 }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores date input
        focus-visible state.
      </p>
      <button type="button">Before date input</button>
      <DatePicker aria-label="Focus intent date" defaultValue="2026-08-15" onValueChange={() => {}} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", { name: "Before date input" });
    const input = canvas.getByLabelText("Focus intent date");

    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(input).toHaveFocus();
    await expect(input).toHaveAttribute("data-focus-visible", "true");
  }
};
