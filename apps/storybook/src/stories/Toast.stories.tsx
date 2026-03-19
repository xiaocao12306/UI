import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Toast } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";

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

      <Toast
        open={open}
        onOpenChange={setOpen}
        title="Info"
        description="Build queued."
        tone="info"
        duration={0}
        position="top-left"
      />
      <Toast
        open={open}
        onOpenChange={setOpen}
        title="Success"
        description="Release published successfully."
        tone="success"
        duration={0}
        position="top-right"
      />
      <Toast
        open={open}
        onOpenChange={setOpen}
        title="Warning"
        description="Publish is pending manual review."
        tone="warning"
        duration={0}
        position="bottom-left"
      />
      <Toast
        open={open}
        onOpenChange={setOpen}
        title="Danger"
        description="Deploy failed due to secret mismatch."
        tone="danger"
        duration={0}
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

    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Close blocking notice" }));
    await expect(canvas.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Reopen" }));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  }
};

function DangerActionToastDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <div style={{ minHeight: 260, padding: 16 }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Reopen
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        duration={0}
        closeOnEscape={false}
        closeLabel="Close incident notice"
        title="Production incident requires approval"
        description="Incident severity is high. Confirm rollback owner before continuing."
        tone="danger"
        action={
          <Button size="sm" onClick={() => setOpen(false)}>
            Confirm owner
          </Button>
        }
      />
    </div>
  );
}

export const ActionRequiredDanger: Story = {
  render: () => <DangerActionToastDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole("alertdialog")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Close incident notice" }));
    await expect(canvas.queryByRole("alertdialog")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Reopen" }));
    await expect(canvas.getByRole("alertdialog")).toBeInTheDocument();
  }
};

function CloseReasonTelemetryDemo() {
  const [open, setOpen] = React.useState(true);
  const [lastReason, setLastReason] = React.useState("none");
  const [closeTrace, setCloseTrace] = React.useState("N/A");

  const appendTrace = React.useCallback((step: string) => {
    setCloseTrace((current) => (current === "N/A" ? step : `${current} -> ${step}`));
  }, []);

  return (
    <div style={{ minHeight: 260, padding: 16, display: "grid", gap: 8, justifyItems: "start" }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Last close reason:{" "}
        <strong data-testid="toast-close-reason" style={{ color: "var(--aurora-text-primary)" }}>
          {lastReason}
        </strong>
      </p>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Close trace:{" "}
        <strong data-testid="toast-close-trace" style={{ color: "var(--aurora-text-primary)" }}>
          {closeTrace}
        </strong>
      </p>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Timeout reason is documented but not asserted in play due timing instability.
      </p>
      <Button
        variant="outline"
        onClick={() => {
          setCloseTrace("N/A");
          setOpen(true);
        }}
      >
        Reopen Toast
      </Button>
      <Toast
        open={open}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen);
          if (!nextOpen) {
            appendTrace("open:false");
          }
        }}
        duration={0}
        title="Close reason telemetry"
        description="Track whether this toast closed from click, Escape, or timeout."
        onCloseReason={(reason) => {
          setLastReason(reason);
          appendTrace(`reason:${reason}`);
        }}
      />
    </div>
  );
}

export const CloseReasonTelemetry: Story = {
  render: () => <CloseReasonTelemetryDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("N/A");
    await userEvent.click(canvas.getByRole("button", { name: "Close toast" }));
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("close-button");
    await expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false");

    await userEvent.click(canvas.getByRole("button", { name: "Reopen Toast" }));
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
  }
};

function EscapeStackOrderDemo() {
  const [openState, setOpenState] = React.useState({ first: true, second: true });

  return (
    <div style={{ minHeight: 260, padding: 16 }}>
      <Button variant="outline" onClick={() => setOpenState({ first: true, second: true })}>
        Reopen Stack
      </Button>

      <Toast
        open={openState.first}
        onOpenChange={(open) => {
          setOpenState((current) => ({ ...current, first: open }));
        }}
        title="First notice"
        description="Earlier notification in stack order."
        tone="info"
        duration={0}
        position="bottom-left"
      />
      <Toast
        open={openState.second}
        onOpenChange={(open) => {
          setOpenState((current) => ({ ...current, second: open }));
        }}
        title="Second notice"
        description="Latest notification should close first on Escape."
        tone="success"
        duration={0}
        position="bottom-right"
      />
    </div>
  );
}

export const EscapeStackOrder: Story = {
  render: () => <EscapeStackOrderDemo />
};

function StackedViewportOffsetDemo() {
  const [openState, setOpenState] = React.useState({ first: true, second: true });

  return (
    <div style={{ minHeight: 280, padding: 16 }}>
      <Button variant="outline" onClick={() => setOpenState({ first: true, second: true })}>
        Reopen stack
      </Button>
      <Toast
        open={openState.first}
        onOpenChange={(open) => {
          setOpenState((current) => ({ ...current, first: open }));
        }}
        title="First stack item"
        description="Older toast should offset away from viewport edge."
        tone="info"
        duration={0}
        position="bottom-right"
      />
      <Toast
        open={openState.second}
        onOpenChange={(open) => {
          setOpenState((current) => ({ ...current, second: open }));
        }}
        title="Second stack item"
        description="Latest toast remains anchored to viewport edge."
        tone="success"
        duration={0}
        position="bottom-right"
      />
    </div>
  );
}

export const StackedViewportOffset: Story = {
  render: () => <StackedViewportOffsetDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const first = await canvas.findByRole("status", { name: "First stack item" });
    const second = await canvas.findByRole("status", { name: "Second stack item" });

    await expect(first.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px");
    await expect(second.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px");
  }
};

export const FocusedToastEscapesFirst: Story = {
  render: () => (
    <div style={{ minHeight: 280, padding: 16, display: "grid", gap: 8 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Focus or hover any older toast to promote it to top priority before pressing Escape.
      </p>
      <EscapeStackOrderDemo />
    </div>
  )
};

function EscapePreemptedDemo() {
  const [open, setOpen] = React.useState(true);
  const [preemptEscape, setPreemptEscape] = React.useState(true);

  React.useEffect(() => {
    if (!preemptEscape) {
      return undefined;
    }

    const onKeyDownCapture = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", onKeyDownCapture, true);
    return () => {
      document.removeEventListener("keydown", onKeyDownCapture, true);
    };
  }, [preemptEscape]);

  return (
    <div style={{ minHeight: 260, padding: 16, display: "grid", gap: 8, justifyItems: "start" }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Reopen Toast
      </Button>
      <Button variant="ghost" onClick={() => setPreemptEscape((value) => !value)}>
        {preemptEscape ? "Disable global Escape handler" : "Enable global Escape handler"}
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        duration={0}
        title="Global Escape override"
        description="When upper-layer handlers preempt Escape, toast should stay open."
        tone="info"
      />
    </div>
  );
}

function EscapeGuardedByToastDemo() {
  const [open, setOpen] = React.useState(true);
  const [guardEscape, setGuardEscape] = React.useState(true);

  return (
    <div style={{ minHeight: 260, padding: 16, display: "grid", gap: 8, justifyItems: "start" }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Reopen Toast
      </Button>
      <Button variant="ghost" onClick={() => setGuardEscape((value) => !value)}>
        {guardEscape ? "Disable toast Escape guard" : "Enable toast Escape guard"}
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        duration={0}
        title="Toast-level Escape guard"
        description="Toast can intercept Escape locally before close logic runs."
        tone="info"
        onEscapeKeyDown={(event) => {
          if (guardEscape) {
            event.preventDefault();
          }
        }}
      />
    </div>
  );
}

function EscapeImeCompositionDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <div style={{ minHeight: 260, padding: 16, display: "grid", gap: 8, justifyItems: "start" }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Reopen Toast
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        duration={0}
        title="IME composition guard"
        description="Escape during active composition should not dismiss this toast."
        tone="info"
        action={<input aria-label="Inline response" placeholder="Type with IME..." />}
      />
    </div>
  );
}

function EscapePreemptedSkipsHookDemo() {
  const [open, setOpen] = React.useState(true);
  const [hookCount, setHookCount] = React.useState(0);

  React.useEffect(() => {
    const onKeyDownCapture = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", onKeyDownCapture, true);
    return () => {
      document.removeEventListener("keydown", onKeyDownCapture, true);
    };
  }, []);

  return (
    <div style={{ minHeight: 260, padding: 16, display: "grid", gap: 8, justifyItems: "start" }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Escape hook calls:{" "}
        <strong data-testid="escape-hook-count" style={{ color: "var(--aurora-text-primary)" }}>
          {hookCount}
        </strong>
      </p>
      <Toast
        open={open}
        onOpenChange={setOpen}
        duration={0}
        title="Preempted escape skips toast hook"
        description="Global escape preemption should prevent toast-level escape callback execution."
        tone="info"
        onEscapeKeyDown={() => setHookCount((count) => count + 1)}
      />
    </div>
  );
}

export const EscapePreemptedByGlobalHandler: Story = {
  render: () => <EscapePreemptedDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("status", { name: "Global Escape override" })).toBeInTheDocument();

    fireEvent.keyDown(doc, { key: "Escape" });
    await expect(canvas.getByRole("status", { name: "Global Escape override" })).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Disable global Escape handler" }));
    await expect(canvas.getByRole("button", { name: "Enable global Escape handler" })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Close toast" }));
    await expect(canvas.queryByRole("status", { name: "Global Escape override" })).not.toBeInTheDocument();
  }
};

export const EscapePreemptedSkipsToastHook: Story = {
  render: () => <EscapePreemptedSkipsHookDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;

    await expect(canvas.getByRole("status", { name: "Preempted escape skips toast hook" })).toBeInTheDocument();
    fireEvent.keyDown(doc, { key: "Escape" });
    await expect(canvas.getByTestId("escape-hook-count")).toHaveTextContent("0");
    await expect(canvas.getByRole("status", { name: "Preempted escape skips toast hook" })).toBeInTheDocument();
  }
};

export const EscapeGuardedByToastHandler: Story = {
  render: () => <EscapeGuardedByToastDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("status", { name: "Toast-level Escape guard" })).toBeInTheDocument();

    fireEvent.keyDown(doc, { key: "Escape" });
    await expect(canvas.getByRole("status", { name: "Toast-level Escape guard" })).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Disable toast Escape guard" }));
    await expect(canvas.getByRole("button", { name: "Enable toast Escape guard" })).toBeInTheDocument();
  }
};

export const EscapeIgnoresImeComposition: Story = {
  render: () => <EscapeImeCompositionDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("dialog", { name: "IME composition guard" })).toBeInTheDocument();

    fireEvent.keyDown(doc, { key: "Escape", isComposing: true, keyCode: 229, which: 229 });
    await expect(canvas.getByRole("dialog", { name: "IME composition guard" })).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Close toast" }));
    await expect(canvas.queryByRole("dialog", { name: "IME composition guard" })).not.toBeInTheDocument();
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

export const LiveRegionOff: Story = {
  args: {
    title: "Background sync",
    description: "Silent status updates are visible but not announced.",
    live: "off",
    duration: 0
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByRole("status", { name: "Background sync" })).toHaveAttribute("aria-live", "off");
  }
};
