import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Switch } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";
import { StoryShowcaseFrame } from "./storyShowcase";

const meta = {
  title: "Form/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."
      }
    }
  },
  args: {
    label: "Live updates",
    description: "Automatically refresh release activity every 30 seconds."
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledSwitch() {
  const [checked, setChecked] = React.useState(true);

  return (
    <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-primary)" }}>Current state</span>
        <Badge tone={checked ? "success" : "danger"}>{checked ? "Enabled" : "Paused"}</Badge>
      </div>
      <Switch
        label="Live updates"
        description="Automatically refresh release activity every 30 seconds."
        checked={checked}
        onCheckedChange={setChecked}
      />
    </StoryShowcaseFrame>
  );
}

export const Controlled: Story = {
  render: () => <ControlledSwitch />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", { name: "Live updates" });

    await userEvent.click(control);
    await expect(control).toHaveAttribute("aria-checked", "false");
    await expect(canvas.getByText("Paused")).toBeInTheDocument();
  }
};

export const InvalidAndDisabled: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch
        label="Incident bypass"
        description="Resolve validation warnings before enabling bypass."
        invalid
        defaultChecked={false}
      />
      <Switch
        label="Org lock"
        description="Managed by administrator policy."
        disabled
        defaultChecked
      />
    </StoryShowcaseFrame>
  )
};

export const KeyboardToggle: Story = {
  args: {
    defaultChecked: false,
    label: "Keyboard mode",
    description: "Press Space to toggle this switch."
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", { name: "Keyboard mode" });

    control.focus();
    await userEvent.keyboard("[Space]");
    await expect(control).toHaveAttribute("aria-checked", "true");
  }
};

export const KeyboardModifierGuard: Story = {
  args: {
    defaultChecked: false,
    label: "Modified keyboard mode",
    description: "Ctrl/Meta/Alt + Space should not toggle this switch."
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", { name: "Modified keyboard mode" });

    control.focus();
    fireEvent.keyDown(control, { key: " ", ctrlKey: true });
    fireEvent.keyDown(control, { key: "Space", metaKey: true });
    fireEvent.keyDown(control, { key: "Spacebar", altKey: true });
    await expect(control).toHaveAttribute("aria-checked", "false");

    await userEvent.keyboard("[Space]");
    await expect(control).toHaveAttribute("aria-checked", "true");
  }
};

export const LabelledByPrecedence: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <p id="switch-labelledby-heading" style={{ margin: 0, color: "var(--aurora-text-primary)" }}>
        Approval switch heading
      </p>
      <Switch
        label="Approval gate"
        description="aria-labelledby should stay canonical when both naming props exist."
        aria-label="Fallback approval switch name"
        aria-labelledby="switch-labelledby-heading"
        defaultChecked={false}
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", { name: "Approval switch heading" });
    await expect(control).toHaveAttribute("aria-labelledby", "switch-labelledby-heading");
    await expect(control).not.toHaveAttribute("aria-label");
  }
};

function GuardedClickSwitch() {
  const [checked, setChecked] = React.useState(false);

  return (
    <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch
        label="Guarded toggle"
        description="Consumer blocks pointer toggle via onClick.preventDefault()."
        checked={checked}
        onCheckedChange={setChecked}
        onClick={(event) => {
          event.preventDefault();
        }}
      />
      <Badge tone={checked ? "success" : "default"}>{checked ? "Enabled" : "Blocked"}</Badge>
    </StoryShowcaseFrame>
  );
}

export const ClickPreventDefaultGuard: Story = {
  render: () => <GuardedClickSwitch />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", { name: "Guarded toggle" });

    await userEvent.click(control);
    await expect(control).toHaveAttribute("aria-checked", "false");
    await expect(canvas.getByText("Blocked")).toBeInTheDocument();
  }
};

export const PointerPrimaryOnly: Story = {
  args: {
    defaultChecked: false,
    label: "Pointer priority",
    description: "Primary button press should expose and release pressed visuals."
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", { name: "Pointer priority" });

    await userEvent.pointer([{ target: control, keys: "[MouseLeft>]" }]);
    await expect(control).toHaveAttribute("data-pressed", "true");

    await userEvent.unhover(control);
    await expect(control).not.toHaveAttribute("data-pressed");
  }
};
