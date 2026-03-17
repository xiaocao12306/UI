import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, Button } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."
      }
    }
  },
  args: {
    tone: "info",
    title: "Release queued",
    description: "Deployment starts after quality checks complete."
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ToneMatrix: Story = {
  render: () => (
    <div style={{ width: 540, display: "grid", gap: 10 }}>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </div>
  )
};

function DismissibleAlertDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <div style={{ width: 540, display: "grid", gap: 10 }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Reopen
      </Button>
      {open ? (
        <Alert
          tone="warning"
          title="Pending action"
          description="Set NPM_TOKEN before triggering real publish."
          onClose={() => setOpen(false)}
          closeLabel="Dismiss pending action"
        />
      ) : null}
    </div>
  );
}

export const Dismissible: Story = {
  render: () => <DismissibleAlertDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole("status")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Dismiss pending action" }));
    await expect(canvas.queryByRole("status")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Reopen" }));
    await expect(canvas.getByRole("status")).toBeInTheDocument();
  }
};
