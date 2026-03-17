import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Dialog, Input, Textarea } from "@aurora-ui/react";

const meta = {
  title: "Overlay/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."
      }
    }
  },
  args: {
    open: false,
    title: "Dialog",
    children: "Dialog content",
    onOpenChange: () => {}
  }
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveDialog() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Button onClick={() => setOpen(true)}>Open Draft Dialog</Button>
      <Dialog open={open} onOpenChange={setOpen} title="Create AI Draft">
        <div style={{ display: "grid", gap: 10 }}>
          <Input placeholder="Title" aria-label="Title" />
          <Textarea placeholder="Describe expected output..." aria-label="Description" />
          <Button>Save Draft</Button>
        </div>
      </Dialog>
    </div>
  );
}

function InitiallyOpenDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen} title="Review Prompt Plan">
      <p style={{ margin: 0 }}>Escape and outside pointer interactions should dismiss this dialog.</p>
    </Dialog>
  );
}

export const Interactive: Story = {
  render: () => <InteractiveDialog />
};

export const OpenByDefault: Story = {
  render: () => <InitiallyOpenDialog />
};
