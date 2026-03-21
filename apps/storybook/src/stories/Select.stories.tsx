import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Select } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";
import { StoryShowcaseFrame, storyMutedTextStyle } from "./storyShowcase";

function SelectShowcase({ children, gap = 10 }: { children: React.ReactNode; gap?: number }) {
  return (
    <StoryShowcaseFrame maxWidth="min(100%, 360px)" gap={gap}>
      {children}
    </StoryShowcaseFrame>
  );
}

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
    <SelectShowcase>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-primary)" }}>Selected</span>
        <Badge>{framework}</Badge>
      </div>
      <Select aria-label="Framework select" value={framework} onChange={(event) => setFramework(event.target.value)}>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="svelte">Svelte</option>
      </Select>
    </SelectShowcase>
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
    <SelectShowcase gap={8}>
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
          ...storyMutedTextStyle,
          color: "color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"
        }}
      >
        Environment is required before deployment.
      </p>
    </SelectShowcase>
  )
};

export const BlankAriaLabelFallback: Story = {
  render: () => (
    <SelectShowcase gap={8}>
      <label htmlFor="storybook-select-blank-label" style={storyMutedTextStyle}>
        Framework label
      </label>
      <Select id="storybook-select-blank-label" aria-label="   " defaultValue="react">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </Select>
    </SelectShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", { name: "Framework label" });
    await expect(select).not.toHaveAttribute("aria-label");
  }
};

export const LabelledByPrecedence: Story = {
  render: () => (
    <SelectShowcase gap={8}>
      <p id="storybook-select-heading" style={storyMutedTextStyle}>
        Framework heading
      </p>
      <Select aria-label="Framework fallback name" aria-labelledby="storybook-select-heading" defaultValue="react">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </Select>
    </SelectShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", { name: "Framework heading" });
    await expect(select).toHaveAttribute("aria-labelledby", "storybook-select-heading");
    await expect(select).not.toHaveAttribute("aria-label");
  }
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

export const FocusIntentReentry: Story = {
  render: () => (
    <SelectShowcase gap={8}>
      <p style={storyMutedTextStyle}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores select
        focus-visible state.
      </p>
      <button type="button">Before select</button>
      <Select aria-label="Focus intent select" defaultValue="react">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </Select>
    </SelectShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", { name: "Before select" });
    const select = canvas.getByRole("combobox", { name: "Focus intent select" });

    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(select).toHaveFocus();
    await expect(select).toHaveAttribute("data-focus-visible", "true");
  }
};
