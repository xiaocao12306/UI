import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Toast } from "@aurora-ui/react";

const meta = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Toast supports tone variants, auto-close duration, Escape dismissal, and hover pause for actionable notifications."
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
