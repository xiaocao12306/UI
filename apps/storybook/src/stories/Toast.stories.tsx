import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Popover, Toast } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";
import { StoryFullscreenFrame, storyEmphasisTextStyle, storyMutedTextStyle } from "./storyShowcase";

const toastTelemetryTextStyle: React.CSSProperties = {
  ...storyMutedTextStyle
};

const toastTelemetryValueStyle: React.CSSProperties = {
  ...storyEmphasisTextStyle
};

function ToastShowcase({
  children,
  minHeight = 260,
  align = "stretch"
}: {
  children: React.ReactNode;
  minHeight?: number;
  align?: "stretch" | "start";
}) {
  return (
    <StoryFullscreenFrame minHeight={minHeight} align={align} gap={8}>
      {children}
    </StoryFullscreenFrame>
  );
}

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

function dispatchLegacyImeEscape(doc: Document) {
  const event = new KeyboardEvent("keydown", {
    key: "Escape",
    bubbles: true,
    cancelable: true
  });
  Object.defineProperty(event, "keyCode", { value: 229 });
  doc.dispatchEvent(event);
}

export const Default: Story = {};

function ToneMatrixDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <ToastShowcase minHeight={460}>
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
    </ToastShowcase>
  );
}

export const ToneMatrix: Story = {
  render: () => <ToneMatrixDemo />
};

function CloseButtonPrimaryPointerOnlyDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <ToastShowcase align="start">
      <Button variant="outline" onClick={() => setOpen(true)}>
        Reopen Toast
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        duration={0}
        title="Primary pointer close affordance"
        description="Close button should only show pressed state for primary pointer interactions."
        tone="info"
      />
    </ToastShowcase>
  );
}

export const CloseButtonPrimaryPointerOnly: Story = {
  render: () => <CloseButtonPrimaryPointerOnlyDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const closeButton = canvas.getByRole("button", { name: "Close toast" });

    fireEvent.mouseDown(closeButton, { button: 2 });
    await expect(closeButton.style.transform).toContain("translateY(0");

    fireEvent.mouseDown(closeButton);
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.pointerCancel(closeButton);
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });

    closeButton.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        cancelable: true,
        pointerType: "touch",
        button: 0
      })
    );
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    closeButton.dispatchEvent(
      new PointerEvent("pointerup", {
        bubbles: true,
        cancelable: true,
        pointerType: "touch",
        button: 0
      })
    );
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });

    fireEvent.mouseDown(closeButton);
    fireEvent.mouseUp(closeButton);
    await expect(closeButton.style.transform).toContain("translateY(0");
  }
};

function CloseButtonKeyboardPressedStateDemo() {
  return (
    <ToastShowcase align="start">
      <Toast
        open
        onOpenChange={() => {}}
        duration={0}
        title="Keyboard pressed close affordance"
        description="Close button should expose pressed-state feedback for unmodified Enter/Space only, and ignore IME composition keys."
        tone="info"
      />
    </ToastShowcase>
  );
}

export const CloseButtonKeyboardPressedState: Story = {
  render: () => <CloseButtonKeyboardPressedStateDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const closeButton = canvas.getByRole("button", { name: "Close toast" });
    await expect(closeButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");

    closeButton.focus();
    fireEvent.keyDown(closeButton, { key: "Enter", ctrlKey: true });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyUp(closeButton, { key: "Enter", ctrlKey: true });

    fireEvent.keyDown(closeButton, { key: "Enter" });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.keyUp(closeButton, { key: "Enter" });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });

    fireEvent.keyDown(closeButton, { key: "Spacebar" });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.keyUp(closeButton, { key: "Spacebar" });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });

    fireEvent.keyDown(closeButton, { key: "Space" });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.keyUp(closeButton, { key: "Space" });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });

    fireEvent.keyDown(closeButton, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });

    fireEvent.keyDown(closeButton, { key: "Enter", keyCode: 229, which: 229 });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
  }
};

function FocusIntentReentryDemo() {
  return (
    <ToastShowcase align="start">
      <button type="button">Before toast close</button>
      <Toast
        open
        onOpenChange={() => {}}
        duration={0}
        title="Focus intent re-entry toast"
        description="Click the preceding control first, then Tab to verify close-button focus ring recovery."
        tone="info"
      />
    </ToastShowcase>
  );
}

export const FocusIntentReentry: Story = {
  render: () => <FocusIntentReentryDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const beforeButton = await canvas.findByRole("button", { name: "Before toast close" });
    const closeButton = await canvas.findByRole("button", { name: "Close toast" });

    await userEvent.click(beforeButton);
    await expect(beforeButton).toHaveFocus();

    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton.style.boxShadow).toContain("0 0 0 3px");
    fireEvent.mouseDown(closeButton, { button: 0, ctrlKey: true });
    await expect(closeButton.style.boxShadow).toContain("0 0 0 3px");
  }
};

function ActionRequiredToastDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <ToastShowcase>
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
    </ToastShowcase>
  );
}

export const ActionRequired: Story = {
  render: () => <ActionRequiredToastDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const dialog = canvas.getByRole("dialog");
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.click(canvas.getByRole("button", { name: "Close blocking notice" }));
    await expect(canvas.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Reopen" }));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  }
};

function DangerActionToastDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <ToastShowcase>
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
    </ToastShowcase>
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

function BlankActionSemanticsDemo() {
  return (
    <ToastShowcase align="start">
      <Toast
        open
        onOpenChange={() => {}}
        title="Passive update"
        description="Blank action content should not upgrade toast role semantics."
        action="   "
      />
    </ToastShowcase>
  );
}

export const BlankActionSemantics: Story = {
  render: () => <BlankActionSemanticsDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByRole("status", { name: "Passive update" })).toBeInTheDocument();
    await expect(canvas.queryByRole("dialog", { name: "Passive update" })).toBeNull();
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
    <ToastShowcase align="start">
      <p style={toastTelemetryTextStyle}>
        Last close reason:{" "}
        <strong data-testid="toast-close-reason" style={toastTelemetryValueStyle}>
          {lastReason}
        </strong>
      </p>
      <p style={toastTelemetryTextStyle}>
        Close trace:{" "}
        <strong data-testid="toast-close-trace" style={toastTelemetryValueStyle}>
          {closeTrace}
        </strong>
      </p>
      <p style={toastTelemetryTextStyle}>
        Timeout branch is validated in a dedicated story: `TimeoutCloseReason`.
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
    </ToastShowcase>
  );
}

export const CloseReasonTelemetry: Story = {
  render: () => <CloseReasonTelemetryDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await waitFor(() => {
      expect(canvas.getByRole("status", { name: "Close reason telemetry" })).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("N/A");
    await userEvent.click(canvas.getByRole("button", { name: "Close toast" }));
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("close-button");
    await expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false");

    await userEvent.click(canvas.getByRole("button", { name: "Reopen Toast" }));
    fireEvent.keyDown(doc, { key: "Escape", ctrlKey: true });
    await expect(canvas.getByRole("status", { name: "Close reason telemetry" })).toBeInTheDocument();
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("close-button");
    const telemetryToast = canvas.getByRole("status", { name: "Close reason telemetry" });
    telemetryToast.focus();
    await userEvent.keyboard("{Shift>}{Escape}{/Shift}");
    await waitFor(() => {
      expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("escape-key");
    });
    await waitFor(() => {
      expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
    });
  }
};

function TimeoutCloseReasonDemo() {
  const [open, setOpen] = React.useState(true);
  const [lastReason, setLastReason] = React.useState("none");

  return (
    <ToastShowcase align="start">
      <p style={toastTelemetryTextStyle}>
        Last close reason:{" "}
        <strong data-testid="toast-timeout-reason" style={toastTelemetryValueStyle}>
          {lastReason}
        </strong>
      </p>
      <Button
        variant="outline"
        onClick={() => {
          setLastReason("none");
          setOpen(true);
        }}
      >
        Reopen Timed Toast
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        duration={300}
        title="Timeout close telemetry"
        description="This toast should close via timeout and emit timeout reason."
        onCloseReason={setLastReason}
      />
    </ToastShowcase>
  );
}

export const TimeoutCloseReason: Story = {
  render: () => <TimeoutCloseReasonDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(
      await canvas.findByRole("status", { name: "Timeout close telemetry" })
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(canvas.queryByRole("status", { name: "Timeout close telemetry" })).not.toBeInTheDocument();
    });
    await expect(canvas.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout");
  }
};

function EscapeStackOrderDemo() {
  const [openState, setOpenState] = React.useState({ first: true, second: true });

  return (
    <ToastShowcase>
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
    </ToastShowcase>
  );
}

export const EscapeStackOrder: Story = {
  render: () => <EscapeStackOrderDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;

    const first = await canvas.findByRole("status", { name: "First notice" });
    const second = await canvas.findByRole("status", { name: "Second notice" });
    await waitFor(() => {
      expect(first).not.toHaveAttribute("aria-keyshortcuts");
      expect(second).toHaveAttribute("aria-keyshortcuts", "Escape");
    });

    fireEvent.keyDown(doc, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(doc, { key: "Escape", metaKey: true });
    await expect(second).toBeInTheDocument();

    await userEvent.click(within(second).getByRole("button", { name: "Close toast" }));
    await expect(canvas.queryByRole("status", { name: "Second notice" })).not.toBeInTheDocument();
    await waitFor(() => {
      expect(canvas.getByRole("status", { name: "First notice" })).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
  }
};

function EscapeShortcutSyncDemo() {
  const [openState, setOpenState] = React.useState({ first: true, second: true });
  const [topCloseOnEscape, setTopCloseOnEscape] = React.useState(true);

  return (
    <ToastShowcase minHeight={280} align="start">
      <Button variant="outline" onClick={() => setOpenState({ first: true, second: true })}>
        Reopen Stack
      </Button>
      <Button variant="ghost" onClick={() => setTopCloseOnEscape((current) => !current)}>
        {topCloseOnEscape ? "Pin top toast" : "Unpin top toast"}
      </Button>

      <Toast
        open={openState.first}
        onOpenChange={(open) => {
          setOpenState((current) => ({ ...current, first: open }));
        }}
        title="Base notice"
        description="Shortcut hint should move here when top toast is pinned."
        tone="info"
        duration={0}
        position="top-left"
      />
      <Toast
        open={openState.second}
        onOpenChange={(open) => {
          setOpenState((current) => ({ ...current, second: open }));
        }}
        closeOnEscape={topCloseOnEscape}
        title="Top notice"
        description="Shortcut hint should follow this toast when Escape is enabled."
        tone="success"
        duration={0}
        position="top-left"
      />
    </ToastShowcase>
  );
}

export const EscapeShortcutSync: Story = {
  render: () => <EscapeShortcutSyncDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    const baseToast = await canvas.findByRole("status", { name: "Base notice" });
    const topToast = await canvas.findByRole("status", { name: "Top notice" });

    await waitFor(() => {
      expect(baseToast).not.toHaveAttribute("aria-keyshortcuts");
      expect(topToast).toHaveAttribute("aria-keyshortcuts", "Escape");
    });

    await userEvent.click(canvas.getByRole("button", { name: "Pin top toast" }));
    await waitFor(() => {
      expect(baseToast).toHaveAttribute("aria-keyshortcuts", "Escape");
      expect(topToast).not.toHaveAttribute("aria-keyshortcuts");
    });

    await userEvent.click(canvas.getByRole("button", { name: "Unpin top toast" }));
    await waitFor(() => {
      expect(baseToast).not.toHaveAttribute("aria-keyshortcuts");
      expect(topToast).toHaveAttribute("aria-keyshortcuts", "Escape");
    });

    fireEvent.keyDown(doc, { key: "Escape", repeat: true });
    await expect(canvas.getByRole("status", { name: "Base notice" })).toBeInTheDocument();
    await expect(canvas.getByRole("status", { name: "Top notice" })).toBeInTheDocument();
  }
};

function StackedViewportOffsetDemo() {
  const [openState, setOpenState] = React.useState({ first: true, second: true });

  return (
    <ToastShowcase minHeight={280}>
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
    </ToastShowcase>
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
    <ToastShowcase minHeight={280}>
      <p style={toastTelemetryTextStyle}>
        Focus or hover any older toast to promote it to top priority before pressing Escape.
      </p>
      <EscapeStackOrderDemo />
    </ToastShowcase>
  ),
  play: async ({ canvasElement }) => {
    const doc = canvasElement.ownerDocument;
    const canvas = within(doc.body);

    const first = await canvas.findByRole("status", { name: "First notice" });
    const second = await canvas.findByRole("status", { name: "Second notice" });

    await within(first).findByRole("button", { name: "Close toast" }).then((button) => button.focus());
    await waitFor(() => {
      expect(first).toHaveAttribute("aria-keyshortcuts", "Escape");
      expect(second).not.toHaveAttribute("aria-keyshortcuts");
    });
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("status", { name: "First notice" })).not.toBeInTheDocument();
    await expect(canvas.getByRole("status", { name: "Second notice" })).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: /reopen stack/i }));
    const reopenedFirst = await canvas.findByRole("status", { name: "First notice" });
    await canvas.findByRole("status", { name: "Second notice" });

    fireEvent.mouseEnter(reopenedFirst);
    await waitFor(() => {
      expect(reopenedFirst).toHaveAttribute("aria-keyshortcuts", "Escape");
      expect(canvas.getByRole("status", { name: "Second notice" })).not.toHaveAttribute("aria-keyshortcuts");
    });
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("status", { name: "First notice" })).not.toBeInTheDocument();
    await expect(canvas.getByRole("status", { name: "Second notice" })).toBeInTheDocument();
  }
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
    <ToastShowcase align="start">
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
    </ToastShowcase>
  );
}

function EscapeGuardedByToastDemo() {
  const [open, setOpen] = React.useState(true);
  const [guardEscape, setGuardEscape] = React.useState(true);

  return (
    <ToastShowcase align="start">
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
    </ToastShowcase>
  );
}

function EscapeImeCompositionDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <ToastShowcase align="start">
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
    </ToastShowcase>
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
    <ToastShowcase align="start">
      <p style={toastTelemetryTextStyle}>
        Escape hook calls:{" "}
        <strong data-testid="escape-hook-count" style={toastTelemetryValueStyle}>
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
    </ToastShowcase>
  );
}

function EscapePreemptedByOverlayLayerDemo() {
  const [toastOpen, setToastOpen] = React.useState(true);

  return (
    <ToastShowcase align="start">
      <Popover triggerLabel="Open escape overlay" contentLabel="Escape overlay">
        <p style={{ margin: 0 }}>This overlay should consume the first Escape key press.</p>
      </Popover>
      <Toast
        open={toastOpen}
        onOpenChange={setToastOpen}
        duration={0}
        title="Overlay-aware toast"
        description="Escape closes this toast only after the top overlay layer is gone."
        tone="info"
      />
    </ToastShowcase>
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

export const EscapePreemptedByOverlayLayer: Story = {
  render: () => <EscapePreemptedByOverlayLayerDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;

    await expect(canvas.getByRole("status", { name: "Overlay-aware toast" })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Open escape overlay" }));
    await expect(canvas.getByRole("dialog", { name: "Escape overlay" })).toBeInTheDocument();

    fireEvent.keyDown(doc, { key: "Escape" });
    await waitFor(() => {
      expect(canvas.queryByRole("dialog", { name: "Escape overlay" })).not.toBeInTheDocument();
    });
    await expect(canvas.getByRole("status", { name: "Overlay-aware toast" })).toBeInTheDocument();

    fireEvent.keyDown(doc, { key: "Escape" });
    await waitFor(() => {
      expect(canvas.queryByRole("status", { name: "Overlay-aware toast" })).not.toBeInTheDocument();
    });
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
    dispatchLegacyImeEscape(doc);
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

export const NumericDescriptionSemantics: Story = {
  render: () => (
    <ToastShowcase align="start">
      <Toast open duration={0} title="Release notice" description={0} />
    </ToastShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const toast = canvas.getByRole("status", { name: "Release notice" });
    const descriptions = canvas.getAllByText("0");

    await expect(descriptions).toHaveLength(1);
    await expect(toast).toHaveAttribute("aria-describedby", descriptions[0].id);
  }
};

export const LabelledByPrecedence: Story = {
  render: () => (
    <ToastShowcase align="start">
      <h3 id="toast-heading" style={{ margin: 0 }}>
        Build artifact ready heading
      </h3>
      <Toast
        open
        duration={0}
        title={<span aria-hidden>✅</span>}
        description="Build artifact is ready."
        ariaLabel="Fallback build artifact notification"
        ariaLabelledBy="toast-heading"
      />
    </ToastShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const toast = canvas.getByRole("status", { name: "Build artifact ready heading" });
    await expect(toast).toHaveAttribute("aria-labelledby", "toast-heading");
    await expect(toast).not.toHaveAttribute("aria-label");
  }
};

export const NonTextTitleAutoNameFallback: Story = {
  render: () => (
    <ToastShowcase align="start">
      <Toast open duration={0} title={<span aria-hidden>✅</span>} description="Auto fallback name for icon-only title." />
    </ToastShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const toast = canvas.getByRole("status", { name: "Toast" });
    await expect(toast).toHaveAttribute("aria-label", "Toast");
    await expect(toast).not.toHaveAttribute("aria-labelledby");
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
