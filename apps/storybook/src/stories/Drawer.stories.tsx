import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Drawer, Dropdown } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";

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

function DismissGuardDrawerDemo() {
  const [open, setOpen] = React.useState(true);
  const [escapeCalls, setEscapeCalls] = React.useState(0);
  const [outsideCalls, setOutsideCalls] = React.useState(0);

  return (
    <div style={{ minHeight: 420, padding: 16, display: "grid", gap: 10, justifyItems: "start" }}>
      <button
        type="button"
        data-testid="drawer-guard-outside-target"
        aria-label="Drawer guard outside target"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1,
          height: 1,
          opacity: 0
        }}
      />
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Escape guard calls:{" "}
        <strong data-testid="drawer-guard-escape-calls" style={{ color: "var(--aurora-text-primary)" }}>
          {escapeCalls}
        </strong>
      </p>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Outside guard calls:{" "}
        <strong data-testid="drawer-guard-outside-calls" style={{ color: "var(--aurora-text-primary)" }}>
          {outsideCalls}
        </strong>
      </p>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Guarded drawer"
        onEscapeKeyDown={(event) => {
          event.preventDefault();
          setEscapeCalls((count) => count + 1);
        }}
        onPointerDownOutside={(event) => {
          event.preventDefault();
          setOutsideCalls((count) => count + 1);
        }}
      >
        <p style={{ margin: 0 }}>Dismiss hooks can block Escape and outside pointer close paths.</p>
      </Drawer>
    </div>
  );
}

export const DismissGuardHooks: Story = {
  render: () => <DismissGuardDrawerDemo />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = body.getByTestId("drawer-guard-outside-target");

    await expect(await body.findByRole("dialog", { name: "Guarded drawer" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", { name: "Guarded drawer" })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1");

    await userEvent.click(outsideTarget);
    await expect(body.getByRole("dialog", { name: "Guarded drawer" })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1");
  }
};

function CloseButtonPrimaryPointerOnlyDrawerDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <div style={{ minHeight: 420, padding: 16, display: "grid", gap: 10, justifyItems: "start" }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Reopen Drawer
      </Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Primary pointer close affordance"
        description="Close button should only show pressed state for primary pointer interactions."
      >
        <p style={{ margin: 0 }}>Validate close-button pressed feedback with primary pointer only.</p>
      </Drawer>
    </div>
  );
}

export const CloseButtonPrimaryPointerOnly: Story = {
  render: () => <CloseButtonPrimaryPointerOnlyDrawerDemo />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", { name: "Close drawer" });

    fireEvent.mouseDown(closeButton, { button: 2 });
    await expect(closeButton.style.transform).toContain("translateY(0");

    fireEvent.mouseDown(closeButton);
    fireEvent.mouseUp(closeButton);
    await expect(closeButton.style.transform).toContain("translateY(0");
  }
};

function CloseReasonTelemetryDrawerDemo() {
  const [open, setOpen] = React.useState(false);
  const [lastReason, setLastReason] = React.useState("none");
  const [lastTrace, setLastTrace] = React.useState("none");

  return (
    <div style={{ minHeight: 420, padding: 16, display: "grid", gap: 10, justifyItems: "start" }}>
      <button
        type="button"
        data-testid="drawer-outside-target"
        aria-label="Drawer outside target"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1,
          height: 1,
          opacity: 0
        }}
      />
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Last close reason:{" "}
        <strong data-testid="drawer-close-reason" style={{ color: "var(--aurora-text-primary)" }}>
          {lastReason}
        </strong>
      </p>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Last close trace:{" "}
        <strong data-testid="drawer-close-trace" style={{ color: "var(--aurora-text-primary)" }}>
          {lastTrace}
        </strong>
      </p>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open Telemetry Drawer
      </Button>
      <Drawer
        open={open}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen);
          if (!nextOpen) {
            setLastTrace((current) => `${current} -> open:false`);
          }
        }}
        title="Close reason telemetry drawer"
        onCloseReason={(reason) => {
          setLastReason(reason);
          setLastTrace(`reason:${reason}`);
        }}
      >
        <p style={{ margin: 0 }}>Track close-button, Escape, and outside-pointer dismiss reasons.</p>
      </Drawer>
    </div>
  );
}

export const CloseReasonTelemetry: Story = {
  render: () => <CloseReasonTelemetryDrawerDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = canvas.getByTestId("drawer-outside-target");

    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("none");

    await userEvent.click(canvas.getByRole("button", { name: "Open Telemetry Drawer" }));
    await expect(await body.findByRole("dialog", { name: "Close reason telemetry drawer" })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", { name: "Close drawer" }));
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("close-button");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false");

    await userEvent.click(canvas.getByRole("button", { name: "Open Telemetry Drawer" }));
    await expect(await body.findByRole("dialog", { name: "Close reason telemetry drawer" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false");

    await userEvent.click(canvas.getByRole("button", { name: "Open Telemetry Drawer" }));
    await expect(await body.findByRole("dialog", { name: "Close reason telemetry drawer" })).toBeInTheDocument();
    await userEvent.pointer({ target: outsideTarget, keys: "[MouseLeft]" });
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
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

function FocusTrapKeyboardCycleDrawerDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <div style={{ minHeight: 420, padding: 16, display: "grid", gap: 10, justifyItems: "start" }}>
      <button type="button">Outside before drawer</button>
      <Drawer open={open} onOpenChange={setOpen} title="Focus trap drawer">
        <div style={{ display: "grid", gap: 10 }}>
          <p style={{ margin: 0 }}>Tab and Shift+Tab should cycle within the drawer.</p>
          <Button>Primary drawer action</Button>
          <Button variant="outline">Secondary drawer action</Button>
        </div>
      </Drawer>
      <button type="button">Outside after drawer</button>
    </div>
  );
}

export const FocusTrapKeyboardCycle: Story = {
  render: () => <FocusTrapKeyboardCycleDrawerDemo />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", { name: "Close drawer" });
    const primaryAction = body.getByRole("button", { name: "Primary drawer action" });
    const secondaryAction = body.getByRole("button", { name: "Secondary drawer action" });
    const outsideAfter = body.getByRole("button", { name: "Outside after drawer" });

    closeButton.focus();
    await expect(closeButton).toHaveFocus();

    await userEvent.tab();
    await expect(primaryAction).toHaveFocus();

    await userEvent.tab();
    await expect(secondaryAction).toHaveFocus();

    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(outsideAfter).not.toHaveFocus();

    await userEvent.tab({ shift: true });
    await expect(secondaryAction).toHaveFocus();
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

function EscapeImeGuardDrawerDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <Drawer open={open} onOpenChange={setOpen} title="IME composition drawer">
      <p style={{ margin: 0 }}>Escape should be ignored while IME composition is active.</p>
    </Drawer>
  );
}

export const EscapeIgnoresImeComposition: Story = {
  render: () => <EscapeImeGuardDrawerDemo />,
  play: async ({ canvasElement }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);

    await expect(await body.findByRole("dialog", { name: "IME composition drawer" })).toBeInTheDocument();

    fireEvent.keyDown(ownerDocument, { key: "Escape", isComposing: true });
    await expect(body.getByRole("dialog", { name: "IME composition drawer" })).toBeInTheDocument();

    fireEvent.keyDown(ownerDocument, { key: "Escape", keyCode: 229 });
    await expect(body.getByRole("dialog", { name: "IME composition drawer" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", { name: "IME composition drawer" })).not.toBeInTheDocument();
  }
};

function EscapePreemptedDrawerDemo() {
  const [open, setOpen] = React.useState(true);
  const [escapeCalls, setEscapeCalls] = React.useState(0);

  React.useEffect(() => {
    const preemptEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", preemptEscape, true);
    return () => {
      document.removeEventListener("keydown", preemptEscape, true);
    };
  }, []);

  return (
    <div style={{ minHeight: 420, padding: 16, display: "grid", gap: 10, justifyItems: "start" }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Escape hook calls:{" "}
        <strong data-testid="drawer-escape-calls" style={{ color: "var(--aurora-text-primary)" }}>
          {escapeCalls}
        </strong>
      </p>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Preempted escape drawer"
        onEscapeKeyDown={() => setEscapeCalls((count) => count + 1)}
      >
        <p style={{ margin: 0 }}>Escape should remain preempted by global handlers.</p>
      </Drawer>
    </div>
  );
}

export const EscapePreemptedByGlobalHandler: Story = {
  render: () => <EscapePreemptedDrawerDemo />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);

    await expect(await body.findByRole("dialog", { name: "Preempted escape drawer" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", { name: "Preempted escape drawer" })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-escape-calls")).toHaveTextContent("0");
  }
};
