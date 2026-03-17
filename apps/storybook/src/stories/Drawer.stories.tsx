import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Drawer } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Overlay/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."
      }
    }
  },
  args: {
    open: true,
    side: "right",
    title: "Release filters",
    description: "Refine release list by environment and risk level.",
    children: "Drawer content",
    onOpenChange: () => {}
  }
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveDrawerDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ minHeight: 420, padding: 16 }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        side="right"
        title="Release filters"
        description="Filter environment, owner, and severity."
      >
        <div style={{ display: "grid", gap: 10 }}>
          <p style={{ margin: 0 }}>Use this panel to narrow incident review scope.</p>
          <Button onClick={() => setOpen(false)}>Apply and close</Button>
        </div>
      </Drawer>
    </div>
  );
}

export const Interactive: Story = {
  render: () => <InteractiveDrawerDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole("button", { name: "Open Drawer" }));
    await expect(await body.findByRole("dialog", { name: "Release filters" })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", { name: "Close drawer" }));
    await expect(body.queryByRole("dialog", { name: "Release filters" })).not.toBeInTheDocument();
  }
};

function NonDismissibleDrawerDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <div style={{ minHeight: 420, padding: 16 }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Reopen Drawer
      </Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Security checklist"
        description="Dismiss by completing required action."
        side="left"
        closeOnEscape={false}
        closeOnOutsidePointer={false}
        showCloseButton={false}
      >
        <div style={{ display: "grid", gap: 10 }}>
          <p style={{ margin: 0 }}>Outside click and Escape are disabled in this flow.</p>
          <Button onClick={() => setOpen(false)}>I understand</Button>
        </div>
      </Drawer>
    </div>
  );
}

export const NonDismissible: Story = {
  render: () => <NonDismissibleDrawerDemo />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", { name: "Security checklist" });

    await userEvent.keyboard("{Escape}");
    await expect(dialog).toBeInTheDocument();

    await userEvent.click(body.getByRole("button", { name: "I understand" }));
    await expect(body.queryByRole("dialog", { name: "Security checklist" })).not.toBeInTheDocument();
  }
};
