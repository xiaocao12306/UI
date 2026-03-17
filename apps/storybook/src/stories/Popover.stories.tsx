import type { Meta, StoryObj } from "@storybook/react";
import { Button, Input, Popover } from "@aurora-ui/react";

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
