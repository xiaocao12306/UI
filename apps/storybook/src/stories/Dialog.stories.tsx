import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Dialog, Input, Textarea } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

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
  render: () => <InteractiveDialog />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole("button", { name: "Open Draft Dialog" }));
    await expect(await body.findByRole("dialog", { name: "Create AI Draft" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", { name: "Create AI Draft" })).not.toBeInTheDocument();
  }
};

export const OpenByDefault: Story = {
  render: () => <InitiallyOpenDialog />
};

function NonDismissableDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      title="Critical Confirmation"
      description="This dialog requires an explicit action and ignores Escape / outside clicks."
      closeOnEscape={false}
      closeOnOutsidePointer={false}
      size="lg"
    >
      <div style={{ display: "grid", gap: 12 }}>
        <p style={{ margin: 0 }}>Review the migration plan before confirming release.</p>
        <div style={{ display: "flex", gap: 8, justifyContent: "end" }}>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </div>
      </div>
    </Dialog>
  );
}

export const NonDismissable: Story = {
  render: () => <NonDismissableDialog />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);

    await expect(await body.findByRole("dialog", { name: "Critical Confirmation" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", { name: "Critical Confirmation" })).toBeInTheDocument();

    await userEvent.click(body.getByRole("button", { name: "Cancel" }));
    await expect(body.queryByRole("dialog", { name: "Critical Confirmation" })).not.toBeInTheDocument();
  }
};
