import type { Meta, StoryObj } from "@storybook/react";
import { Button, Input, Popover } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Overlay/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Popover supports controlled/uncontrolled mode with Escape and outside pointer dismissal. Use ArrowDown on trigger for keyboard open."
      }
    }
  },
  args: {
    triggerLabel: "Open Popover"
  }
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p style={{ margin: 0 }}>Popover content for quick context editing.</p>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Open Popover" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", { name: "Popover content" })).not.toBeInTheDocument();

    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  }
};

export const WithInteractiveContent: Story = {
  args: {
    triggerLabel: "Edit Name",
    children: (
      <div style={{ width: 280, display: "grid", gap: 8 }}>
        <label htmlFor="name" style={{ fontSize: "var(--aurora-font-size-sm)", fontWeight: 600 }}>
          Display name
        </label>
        <Input id="name" defaultValue="Aurora Team" />
        <Button size="sm">Save</Button>
      </div>
    )
  }
};

export const IconTrigger: Story = {
  args: {
    triggerLabel: "⋯",
    triggerAriaLabel: "More context actions",
    children: <p style={{ margin: 0 }}>Quick context actions from icon trigger.</p>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "More context actions" });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  }
};

export const NonDismissible: Story = {
  args: {
    triggerLabel: "Review policy",
    closeOnEscape: false,
    closeOnOutsidePointer: false,
    children: <p style={{ margin: 0 }}>This popover must be closed via trigger toggle.</p>
  },
  render: (args) => (
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <Popover {...args} />
      <button type="button">Outside target</button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Review policy" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Outside target" }));
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
  }
};

export const OutsideDismissFocusTransfer: Story = {
  args: {
    triggerLabel: "Focus Policy",
    children: <p style={{ margin: 0 }}>Dismiss me by clicking outside.</p>
  },
  render: () => (
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <Popover triggerLabel="Focus Policy">
        <p style={{ margin: 0 }}>Dismiss me by clicking outside.</p>
      </Popover>
      <button type="button">Popover Next Focus Target</button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Focus Policy" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    const outsideTarget = canvas.getByRole("button", { name: "Popover Next Focus Target" });
    await userEvent.click(outsideTarget);
    await expect(canvas.queryByRole("dialog", { name: "Popover content" })).not.toBeInTheDocument();
    await expect(outsideTarget).toHaveFocus();
  }
};
