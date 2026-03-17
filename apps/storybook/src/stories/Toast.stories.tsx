import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Toast } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."
      }
    }
  },
  args: {
    open: true,
    title: "Saved",
    description: "Your changes are synced.",
    tone: "info"
  }
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

function ToneMatrixDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <div style={{ minHeight: 460, padding: 16, display: "grid", gap: 8 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Reopen Toasts
        </Button>
      </div>

      <Toast open={open} onOpenChange={setOpen} title="Info" description="Build queued." tone="info" position="top-left" />
      <Toast
        open={open}
        onOpenChange={setOpen}
        title="Success"
        description="Release published successfully."
        tone="success"
        position="top-right"
      />
      <Toast
        open={open}
        onOpenChange={setOpen}
        title="Warning"
        description="Publish is pending manual review."
        tone="warning"
        position="bottom-left"
      />
      <Toast
        open={open}
        onOpenChange={setOpen}
        title="Danger"
        description="Deploy failed due to secret mismatch."
        tone="danger"
        position="bottom-right"
      />
    </div>
  );
}

export const ToneMatrix: Story = {
  render: () => <ToneMatrixDemo />
};

function ActionRequiredToastDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <div style={{ minHeight: 260, padding: 16 }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Reopen
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        closeOnEscape={false}
        duration={0}
        closeLabel="Close blocking notice"
        title="Publish blocked"
        description="Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action."
        tone="warning"
        action={
          <Button size="sm" onClick={() => setOpen(false)}>
            Acknowledge
          </Button>
        }
      />
    </div>
  );
}

export const ActionRequired: Story = {
  render: () => <ActionRequiredToastDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole("status")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Close blocking notice" }));
    await expect(canvas.queryByRole("status")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Reopen" }));
    await expect(canvas.getByRole("status")).toBeInTheDocument();
  }
};

export const AriaLabelOverride: Story = {
  args: {
    title: <span aria-hidden>✅</span>,
    description: "Build artifact is ready.",
    ariaLabel: "Build artifact ready notification"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByRole("status", { name: "Build artifact ready notification" })).toBeInTheDocument();
  }
};
