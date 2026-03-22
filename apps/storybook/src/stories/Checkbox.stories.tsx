import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Checkbox } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";

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
        <span style={{ color: "var(--aurora-text-primary)" }}>Current state</span>
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

export const ShortcutHintPrecision: Story = {
  render: () => (
    <div style={{ width: 320, display: "grid", gap: 14 }}>
      <Checkbox
        label="Shortcut metadata checkbox"
        description="Actionable checkboxes should expose Space shortcut hints."
      />
      <Checkbox
        label="Blocked shortcut metadata checkbox"
        description="Disabled checkboxes should not advertise keyboard shortcuts."
        disabled
        defaultChecked
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole("checkbox", { name: /^Shortcut metadata checkbox/ })
    ).toHaveAttribute("aria-keyshortcuts", "Space");
    await expect(
      canvas.getByRole("checkbox", { name: /^Blocked shortcut metadata checkbox/ })
    ).not.toHaveAttribute("aria-keyshortcuts");
  }
};

export const LabelledByPrecedence: Story = {
  render: () => (
    <div style={{ width: 320, display: "grid", gap: 10 }}>
      <p id="checkbox-story-heading" style={{ margin: 0, color: "var(--aurora-text-primary)" }}>
        Checkbox heading
      </p>
      <Checkbox
        aria-label="Fallback checkbox name"
        aria-labelledby="checkbox-story-heading"
        label="Release gate"
        description="aria-labelledby should remain canonical."
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", { name: "Checkbox heading" });
    await expect(checkbox).toHaveAttribute("aria-labelledby", "checkbox-story-heading");
    await expect(checkbox).not.toHaveAttribute("aria-label");
  }
};

export const IconLabelledByPrecedence: Story = {
  render: () => (
    <div style={{ width: 320, display: "grid", gap: 10 }}>
      <p id="checkbox-icon-heading" style={{ margin: 0, color: "var(--aurora-text-primary)" }}>
        Notification opt-in
      </p>
      <Checkbox
        aria-label="Fallback notification checkbox"
        aria-labelledby="checkbox-icon-heading"
        label={<span aria-hidden="true">🔔</span>}
        description="Icon-only label should still keep canonical external naming."
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", { name: "Notification opt-in" });
    await expect(checkbox).toHaveAttribute("aria-labelledby", "checkbox-icon-heading");
    await expect(checkbox).not.toHaveAttribute("aria-label");
  }
};

export const NumericContentSemantics: Story = {
  args: {
    label: 0,
    description: 0
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    const describedById = checkbox.getAttribute("aria-describedby");

    await expect(checkbox).toHaveAccessibleName("0");
    await expect(describedById).toBeTruthy();
    await expect(canvas.getAllByText("0").length).toBeGreaterThanOrEqual(2);
  }
};

export const FocusIntentReentry: Story = {
  render: () => (
    <div style={{ width: 320, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 13 }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores checkbox
        focus-visible state.
      </p>
      <button type="button">Before checkbox</button>
      <Checkbox
        label="Focus intent checkbox"
        description="Keyboard re-entry should restore focus ring semantics."
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", { name: "Before checkbox" });
    const checkbox = canvas.getByRole("checkbox", { name: /^Focus intent checkbox/ });

    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(checkbox).toHaveFocus();
    await expect(checkbox).toHaveAttribute("data-focus-visible", "true");
    fireEvent.mouseDown(checkbox, { button: 0, ctrlKey: true });
    await expect(checkbox).toHaveAttribute("data-focus-visible", "true");
  }
};
