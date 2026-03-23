import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, RadioGroup } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";

const options = [
  { label: "Small", value: "s", description: "Compact layout" },
  { label: "Medium", value: "m", description: "Balanced layout" },
  { label: "Large", value: "l", description: "Readable layout" }
];
const iconOptions = [
  {
    label: (
      <span aria-hidden="true" style={{ fontSize: 16 }}>
        🚀
      </span>
    ),
    value: "deploy",
    ariaLabel: "Deploy mode",
    ariaLabelledBy: "radio-option-heading"
  },
  {
    label: (
      <span aria-hidden="true" style={{ fontSize: 16 }}>
        ↩️
      </span>
    ),
    value: "rollback",
    ariaLabel: "Rollback mode"
  }
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

export const GroupDisabledSemantics: Story = {
  args: {
    name: "Maintenance window",
    disabled: true,
    defaultValue: "stable",
    options: [
      { label: "Stable", value: "stable" },
      { label: "Canary", value: "canary" }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole("radiogroup", { name: "Maintenance window" });
    await expect(group).toHaveAttribute("aria-disabled", "true");
    await expect(canvas.getByRole("radio", { name: "Stable" })).toBeDisabled();
  }
};

function RuntimeBooleanConfigNormalizationRadioGroup() {
  const [selectedValue, setSelectedValue] = React.useState("none");
  const [events, setEvents] = React.useState(0);

  return (
    <div style={{ width: 340, display: "grid", gap: 12 }}>
      <RadioGroup
        name="Runtime boolean radio group"
        disabled={"true" as unknown as boolean}
        options={[
          { label: "Small", value: "s" },
          { label: "Medium", value: "m", disabled: "true" as unknown as boolean }
        ]}
        onChange={(nextValue) => {
          setSelectedValue(nextValue);
          setEvents((value) => value + 1);
        }}
      />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Badge tone="default">
          Selected: <span data-testid="radio-runtime-selected">{selectedValue}</span>
        </Badge>
        <Badge tone="default">
          Change events: <span data-testid="radio-runtime-events">{events}</span>
        </Badge>
      </div>
    </div>
  );
}

export const RuntimeBooleanConfigNormalization: Story = {
  render: () => <RuntimeBooleanConfigNormalizationRadioGroup />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole("radiogroup", { name: "Runtime boolean radio group" });
    const medium = canvas.getByRole("radio", { name: "Medium" });
    const selected = canvas.getByTestId("radio-runtime-selected");
    const events = canvas.getByTestId("radio-runtime-events");

    await expect(group).not.toHaveAttribute("aria-disabled");
    await expect(medium).not.toBeDisabled();
    await expect(medium).toHaveAttribute("aria-keyshortcuts", "Space");
    await expect(selected).toHaveTextContent("none");
    await expect(events).toHaveTextContent("0");

    await userEvent.click(medium);
    await expect(selected).toHaveTextContent("m");
    await expect(events).toHaveTextContent("1");
  }
};

export const NumericDescriptionSemantics: Story = {
  args: {
    name: "Numeric descriptions",
    options: [{ label: "Priority tier", value: "p0", description: 0 }]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const description = canvas.getByText("0");
    const radio = canvas.getByRole("radio", { name: "Priority tier" });
    await expect(canvas.getByText("0")).toBeInTheDocument();
    await expect(radio).toHaveAttribute("aria-describedby", description.getAttribute("id"));
  }
};

export const ShortcutHintPrecision: Story = {
  args: {
    name: "Shortcut hints",
    options: [
      { label: "Enabled radio option", value: "enabled" },
      { label: "Disabled radio option", value: "disabled", disabled: true }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("radio", { name: "Enabled radio option" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Space"
    );
    await expect(canvas.getByRole("radio", { name: "Disabled radio option" })).not.toHaveAttribute(
      "aria-keyshortcuts"
    );
  }
};

export const DuplicateValueSingleCheckedSemantics: Story = {
  args: {
    name: "Duplicate value semantics",
    value: "react",
    options: [
      { label: "React legacy", value: "react", disabled: true },
      { label: "React stable", value: "react" },
      { label: "Vue", value: "vue" }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const legacy = canvas.getByRole("radio", { name: "React legacy" });
    const stable = canvas.getByRole("radio", { name: "React stable" });
    await expect(legacy).not.toBeChecked();
    await expect(stable).toBeChecked();
    await userEvent.click(legacy);
    await expect(stable).toBeChecked();
    await expect(legacy).not.toBeChecked();
  }
};

export const LabelledByPrecedence: Story = {
  render: () => (
    <div style={{ width: 340, display: "grid", gap: 12 }}>
      <p id="radiogroup-story-heading" style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Release preference heading
      </p>
      <RadioGroup
        name="Release preference fallback"
        ariaLabel="Release preference fallback label"
        ariaLabelledBy="radiogroup-story-heading"
        defaultValue="m"
        options={options}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole("radiogroup", { name: "Release preference heading" });
    await expect(group).toHaveAttribute("aria-labelledby", "radiogroup-story-heading");
    await expect(group).not.toHaveAttribute("aria-label");
  }
};

export const OptionLabelledByPrecedence: Story = {
  render: () => (
    <div style={{ width: 340, display: "grid", gap: 12 }}>
      <p id="radio-option-heading" style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Deploy mode
      </p>
      <RadioGroup name="Deployment mode fallback" options={iconOptions} defaultValue="deploy" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deployOption = canvas.getByRole("radio", { name: "Deploy mode" });
    await expect(deployOption).toHaveAttribute("aria-labelledby", "radio-option-heading");
    await expect(deployOption).not.toHaveAttribute("aria-label");
  }
};

export const FocusIntentReentry: Story = {
  render: () => (
    <div style={{ width: 340, display: "grid", gap: 12 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 13 }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores radio
        focus-visible state.
      </p>
      <button type="button">Before radio group</button>
      <RadioGroup
        name="Focus intent group"
        defaultValue="m"
        options={[
          { label: "Small", value: "s", description: "Compact layout" },
          { label: "Medium", value: "m", description: "Balanced layout" },
          { label: "Large", value: "l", description: "Readable layout" }
        ]}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", { name: "Before radio group" });
    const medium = canvas.getByRole("radio", { name: /^Medium/ });

    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(medium).toHaveFocus();
    await expect(medium).toHaveAttribute("data-focus-visible", "true");
    fireEvent.mouseDown(medium, { button: 0, ctrlKey: true });
    await expect(medium).toHaveAttribute("data-focus-visible", "true");
  }
};
