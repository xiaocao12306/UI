import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Drawer, Dropdown } from "@aurora-ui/react";
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

function FocusReturnDrawerDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ minHeight: 420, padding: 16 }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open Focus Return Drawer
      </Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        side="right"
        title="Focus return drawer"
        description="Closing should restore focus to trigger by default."
      >
        <p style={{ margin: 0 }}>Use close button and verify trigger focus restoration.</p>
      </Drawer>
    </div>
  );
}

export const FocusReturn: Story = {
  render: () => <FocusReturnDrawerDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", { name: "Open Focus Return Drawer" });

    await userEvent.click(trigger);
    await expect(await body.findByRole("dialog", { name: "Focus return drawer" })).toBeInTheDocument();

    await userEvent.click(body.getByRole("button", { name: "Close drawer" }));
    await expect(trigger).toHaveFocus();
  }
};

function FocusReturnDisabledDrawerDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ minHeight: 420, padding: 16, display: "grid", gap: 8, justifyItems: "start" }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open No Focus Return Drawer
      </Button>
      <button type="button">Post-close target</button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        side="right"
        title="No focus return drawer"
        description="Closing should not force focus back to the trigger."
        restoreFocus={false}
      >
        <p style={{ margin: 0 }}>Use this mode when close flow intentionally hands off focus.</p>
      </Drawer>
    </div>
  );
}

export const NoFocusReturn: Story = {
  render: () => <FocusReturnDisabledDrawerDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", { name: "Open No Focus Return Drawer" });

    await userEvent.click(trigger);
    await expect(await body.findByRole("dialog", { name: "No focus return drawer" })).toBeInTheDocument();

    await userEvent.click(body.getByRole("button", { name: "Close drawer" }));
    await expect(trigger).not.toHaveFocus();
  }
};

function NestedOverlayDrawerDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ minHeight: 420, padding: 16 }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open Nested Overlay Drawer
      </Button>
      <Drawer open={open} onOpenChange={setOpen} title="Nested overlay drawer">
        <div style={{ display: "grid", gap: 10 }}>
          <p style={{ margin: 0 }}>Escape should close dropdown first, then drawer.</p>
          <Dropdown
            label="Drawer actions"
            items={[
              { key: "duplicate", label: "Duplicate" },
              { key: "archive", label: "Archive" }
            ]}
          />
        </div>
      </Drawer>
    </div>
  );
}

export const NestedDismissOrder: Story = {
  render: () => <NestedOverlayDrawerDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole("button", { name: "Open Nested Overlay Drawer" }));
    await expect(await body.findByRole("dialog", { name: "Nested overlay drawer" })).toBeInTheDocument();

    await userEvent.click(body.getByRole("button", { name: "Drawer actions" }));
    await expect(body.getByRole("menu", { name: "Drawer actions" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("menu", { name: "Drawer actions" })).not.toBeInTheDocument();
    await expect(body.getByRole("dialog", { name: "Nested overlay drawer" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", { name: "Nested overlay drawer" })).not.toBeInTheDocument();
  }
};
