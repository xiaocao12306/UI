import * as React from "react";
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

function DismissGuardPopoverDemo() {
  const [escapeCalls, setEscapeCalls] = React.useState(0);
  const [outsideCalls, setOutsideCalls] = React.useState(0);

  return (
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Escape guard calls:{" "}
        <strong data-testid="popover-guard-escape-calls" style={{ color: "var(--aurora-text-primary)" }}>
          {escapeCalls}
        </strong>
      </p>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Outside guard calls:{" "}
        <strong data-testid="popover-guard-outside-calls" style={{ color: "var(--aurora-text-primary)" }}>
          {outsideCalls}
        </strong>
      </p>
      <Popover
        triggerLabel="Guarded popover"
        onEscapeKeyDown={(event) => {
          event.preventDefault();
          setEscapeCalls((count) => count + 1);
        }}
        onPointerDownOutside={(event) => {
          event.preventDefault();
          setOutsideCalls((count) => count + 1);
        }}
      >
        <p style={{ margin: 0 }}>Dismiss hooks can block Escape/outside close paths.</p>
      </Popover>
      <button type="button">Guarded outside target</button>
    </div>
  );
}

export const DismissGuardHooks: Story = {
  args: {
    triggerLabel: "Guarded popover",
    children: <p style={{ margin: 0 }}>Dismiss hooks can block Escape/outside close paths.</p>
  },
  render: () => <DismissGuardPopoverDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Guarded popover" });
    const outsideTarget = canvas.getByRole("button", { name: "Guarded outside target" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-guard-escape-calls")).toHaveTextContent("1");

    await userEvent.click(outsideTarget);
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-guard-outside-calls")).toHaveTextContent("1");
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

function CloseReasonTelemetryPopoverDemo() {
  const [lastReason, setLastReason] = React.useState("none");
  const [lastTrace, setLastTrace] = React.useState("none");

  return (
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Last close reason:{" "}
        <strong data-testid="popover-close-reason" style={{ color: "var(--aurora-text-primary)" }}>
          {lastReason}
        </strong>
      </p>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Last close trace:{" "}
        <strong data-testid="popover-close-trace" style={{ color: "var(--aurora-text-primary)" }}>
          {lastTrace}
        </strong>
      </p>
      <Popover
        triggerLabel="Telemetry popover"
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            setLastTrace((current) => `${current} -> open:false`);
          }
        }}
        onCloseReason={(reason) => {
          setLastReason(reason);
          setLastTrace(`reason:${reason}`);
        }}
      >
        <p style={{ margin: 0 }}>Track trigger / Escape / outside close behavior.</p>
      </Popover>
      <button type="button">Outside target</button>
    </div>
  );
}

export const CloseReasonTelemetry: Story = {
  args: {
    triggerLabel: "Telemetry popover",
    children: <p style={{ margin: 0 }}>Track trigger / Escape / outside close behavior.</p>
  },
  render: () => <CloseReasonTelemetryPopoverDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Telemetry popover" });
    const outsideTarget = canvas.getByRole("button", { name: "Outside target" });

    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("none");

    await userEvent.click(trigger);
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("reason:escape-key -> open:false");

    await userEvent.click(trigger);
    await userEvent.click(outsideTarget);
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");

    await userEvent.click(trigger);
    await userEvent.click(trigger);
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("trigger-click");
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("reason:trigger-click -> open:false");
  }
};

function EscapePreemptedPopoverDemo() {
  const [open, setOpen] = React.useState(false);
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
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Escape hook calls:{" "}
        <strong data-testid="popover-escape-calls" style={{ color: "var(--aurora-text-primary)" }}>
          {escapeCalls}
        </strong>
      </p>
      <Popover
        triggerLabel="Preempted popover"
        open={open}
        onOpenChange={setOpen}
        onEscapeKeyDown={() => setEscapeCalls((count) => count + 1)}
      >
        <p style={{ margin: 0 }}>Escape should remain preempted by global handlers.</p>
      </Popover>
    </div>
  );
}

export const EscapePreemptedByGlobalHandler: Story = {
  args: {
    triggerLabel: "Preempted popover",
    children: <p style={{ margin: 0 }}>Escape should remain preempted by global handlers.</p>
  },
  render: () => <EscapePreemptedPopoverDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Preempted popover" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-escape-calls")).toHaveTextContent("0");
  }
};
