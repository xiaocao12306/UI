import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Input, Popover } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";
import { StoryShowcaseFrame, storyEmphasisTextStyle, storyMutedTextStyle } from "./storyShowcase";

const popoverTelemetryTextStyle: React.CSSProperties = {
  ...storyMutedTextStyle
};

const popoverTelemetryValueStyle: React.CSSProperties = {
  ...storyEmphasisTextStyle
};

function PopoverShowcase({ children }: { children: React.ReactNode }) {
  return (
    <StoryShowcaseFrame maxWidth="min(100%, 620px)" gap={12}>
      {children}
    </StoryShowcaseFrame>
  );
}

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

function dispatchLegacyImeEscape(ownerDocument: Document) {
  const event = new KeyboardEvent("keydown", {
    key: "Escape",
    bubbles: true,
    cancelable: true
  });
  Object.defineProperty(event, "keyCode", { value: 229 });
  ownerDocument.dispatchEvent(event);
}

export const Default: Story = {
  args: {
    children: <p style={{ margin: 0 }}>Popover content for quick context editing.</p>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Open Popover" });
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown");

    await userEvent.click(trigger);
    const dialog = canvas.getByRole("dialog", { name: "Popover content" });
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveAttribute("aria-keyshortcuts", "Escape");
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", { name: "Popover content" })).not.toBeInTheDocument();
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown");

    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
  }
};

function TriggerArrowDownModifierGuardPopoverDemo() {
  const [openCount, setOpenCount] = React.useState(0);

  return (
    <PopoverShowcase>
      <p style={popoverTelemetryTextStyle}>
        ArrowDown open calls:{" "}
        <strong data-testid="popover-arrowdown-open-calls" style={popoverTelemetryValueStyle}>
          {openCount}
        </strong>
      </p>
      <Popover
        triggerLabel="ArrowDown Guard Popover"
        onOpenChange={(nextOpen) => {
          if (nextOpen) {
            setOpenCount((count) => count + 1);
          }
        }}
      >
        <p style={{ margin: 0 }}>Only unmodified ArrowDown should open this popover.</p>
      </Popover>
    </PopoverShowcase>
  );
}

export const TriggerArrowDownModifierGuard: Story = {
  render: () => <TriggerArrowDownModifierGuardPopoverDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "ArrowDown Guard Popover" });
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown");

    trigger.focus();
    fireEvent.keyDown(trigger, { key: "ArrowDown", ctrlKey: true });
    fireEvent.keyDown(trigger, { key: "ArrowDown", altKey: true });
    fireEvent.keyDown(trigger, { key: "ArrowDown", metaKey: true });
    await expect(canvas.queryByRole("dialog", { name: "Popover content" })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("0");

    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    await expect(canvas.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("1");
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
    <PopoverShowcase>
      <Popover {...args} />
      <button type="button">Outside target</button>
    </PopoverShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Review policy" });

    await userEvent.click(trigger);
    const dialog = canvas.getByRole("dialog", { name: "Popover content" });
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).not.toHaveAttribute("aria-keyshortcuts");

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
    <PopoverShowcase>
      <p style={popoverTelemetryTextStyle}>
        Escape guard calls:{" "}
        <strong data-testid="popover-guard-escape-calls" style={popoverTelemetryValueStyle}>
          {escapeCalls}
        </strong>
      </p>
      <p style={popoverTelemetryTextStyle}>
        Outside guard calls:{" "}
        <strong data-testid="popover-guard-outside-calls" style={popoverTelemetryValueStyle}>
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
    </PopoverShowcase>
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

function NestedDismissOrderPopoverDemo() {
  return (
    <PopoverShowcase>
      <p style={popoverTelemetryTextStyle}>
        Nested popovers should dismiss one layer at a time: first Escape closes inner, second
        Escape closes outer.
      </p>
      <Popover triggerLabel="Outer popover" contentLabel="Outer popover content">
        <div style={{ display: "grid", gap: 8 }}>
          <p style={{ margin: 0 }}>Outer layer content.</p>
          <Popover triggerLabel="Inner popover" contentLabel="Inner popover content">
            <p style={{ margin: 0 }}>Inner layer content.</p>
          </Popover>
        </div>
      </Popover>
    </PopoverShowcase>
  );
}

export const NestedDismissOrder: Story = {
  render: () => <NestedDismissOrderPopoverDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const outerTrigger = await canvas.findByRole("button", { name: "Outer popover" });

    await userEvent.click(outerTrigger);
    await expect(canvas.getByRole("dialog", { name: "Outer popover content" })).toBeInTheDocument();

    const innerTrigger = canvas.getByRole("button", { name: "Inner popover" });
    await userEvent.click(innerTrigger);
    await expect(canvas.getByRole("dialog", { name: "Inner popover content" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", { name: "Inner popover content" })).not.toBeInTheDocument();
    await expect(canvas.getByRole("dialog", { name: "Outer popover content" })).toBeInTheDocument();
    await expect(innerTrigger).toHaveFocus();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", { name: "Outer popover content" })).not.toBeInTheDocument();
    await expect(outerTrigger).toHaveFocus();
  }
};

function NestedOutsideDismissOrderPopoverDemo() {
  const [trace, setTrace] = React.useState("none");

  const appendTrace = (entry: string) => {
    setTrace((current) => (current === "none" ? entry : `${current} -> ${entry}`));
  };

  return (
    <PopoverShowcase>
      <p style={popoverTelemetryTextStyle}>
        Outside pointer should dismiss nested popovers one layer at a time.
      </p>
      <Popover
        triggerLabel="Outer outside-order popover"
        contentLabel="Outer outside-order popover content"
        onCloseReason={(reason) => appendTrace(`outer:reason:${reason}`)}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            appendTrace("outer:open:false");
          }
        }}
      >
        <div style={{ display: "grid", gap: 8 }}>
          <p style={{ margin: 0 }}>Outer layer content.</p>
          <Popover
            triggerLabel="Inner outside-order popover"
            contentLabel="Inner outside-order popover content"
            onCloseReason={(reason) => appendTrace(`inner:reason:${reason}`)}
            onOpenChange={(nextOpen) => {
              if (!nextOpen) {
                appendTrace("inner:open:false");
              }
            }}
          >
            <p style={{ margin: 0 }}>Inner layer content.</p>
          </Popover>
        </div>
      </Popover>
      <button type="button">Popover nested outside target</button>
      <p style={popoverTelemetryTextStyle}>
        Nested close trace:{" "}
        <strong data-testid="popover-nested-outside-trace" style={popoverTelemetryValueStyle}>
          {trace}
        </strong>
      </p>
    </PopoverShowcase>
  );
}

export const NestedOutsideDismissOrder: Story = {
  render: () => <NestedOutsideDismissOrderPopoverDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const outerTrigger = await canvas.findByRole("button", { name: "Outer outside-order popover" });

    await userEvent.click(outerTrigger);
    await expect(
      canvas.getByRole("dialog", { name: "Outer outside-order popover content" })
    ).toBeInTheDocument();

    const innerTrigger = canvas.getByRole("button", { name: "Inner outside-order popover" });
    await userEvent.click(innerTrigger);
    await expect(
      canvas.getByRole("dialog", { name: "Inner outside-order popover content" })
    ).toBeInTheDocument();

    const outsideTarget = canvas.getByRole("button", { name: "Popover nested outside target" });
    await userEvent.click(outsideTarget);
    await expect(
      canvas.queryByRole("dialog", { name: "Inner outside-order popover content" })
    ).not.toBeInTheDocument();
    await expect(
      canvas.getByRole("dialog", { name: "Outer outside-order popover content" })
    ).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-nested-outside-trace")).toHaveTextContent(
      "inner:reason:outside-pointer -> inner:open:false"
    );

    await userEvent.click(outsideTarget);
    await expect(
      canvas.queryByRole("dialog", { name: "Outer outside-order popover content" })
    ).not.toBeInTheDocument();
    await expect(canvas.getByTestId("popover-nested-outside-trace")).toHaveTextContent(
      "inner:reason:outside-pointer -> inner:open:false -> outer:reason:outside-pointer -> outer:open:false"
    );
  }
};

export const OutsideDismissFocusTransfer: Story = {
  args: {
    triggerLabel: "Focus Policy",
    children: <p style={{ margin: 0 }}>Dismiss me by clicking outside.</p>
  },
  render: () => (
    <PopoverShowcase>
      <Popover triggerLabel="Focus Policy">
        <p style={{ margin: 0 }}>Dismiss me by clicking outside.</p>
      </Popover>
      <button type="button">Popover Next Focus Target</button>
    </PopoverShowcase>
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
    <PopoverShowcase>
      <p style={popoverTelemetryTextStyle}>
        Last close reason:{" "}
        <strong data-testid="popover-close-reason" style={popoverTelemetryValueStyle}>
          {lastReason}
        </strong>
      </p>
      <p style={popoverTelemetryTextStyle}>
        Last close trace:{" "}
        <strong data-testid="popover-close-trace" style={popoverTelemetryValueStyle}>
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
    </PopoverShowcase>
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
    <PopoverShowcase>
      <p style={popoverTelemetryTextStyle}>
        Escape hook calls:{" "}
        <strong data-testid="popover-escape-calls" style={popoverTelemetryValueStyle}>
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
    </PopoverShowcase>
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
    const ownerDocument = canvasElement.ownerDocument;
    const trigger = await canvas.findByRole("button", { name: "Preempted popover" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    fireEvent.keyDown(ownerDocument, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(ownerDocument, { key: "Escape", altKey: true });
    fireEvent.keyDown(ownerDocument, { key: "Escape", metaKey: true });
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-escape-calls")).toHaveTextContent("0");

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-escape-calls")).toHaveTextContent("0");
  }
};

function EscapeRepeatPopoverDemo() {
  const [open, setOpen] = React.useState(false);
  const [escapeCalls, setEscapeCalls] = React.useState(0);
  const [closeReason, setCloseReason] = React.useState("none");

  return (
    <PopoverShowcase>
      <p style={popoverTelemetryTextStyle}>
        Escape hook calls:{" "}
        <strong data-testid="popover-repeat-escape-calls" style={popoverTelemetryValueStyle}>
          {escapeCalls}
        </strong>
      </p>
      <p style={popoverTelemetryTextStyle}>
        Last close reason:{" "}
        <strong data-testid="popover-repeat-close-reason" style={popoverTelemetryValueStyle}>
          {closeReason}
        </strong>
      </p>
      <Popover
        triggerLabel="Repeat Escape Popover"
        open={open}
        onOpenChange={setOpen}
        onEscapeKeyDown={() => setEscapeCalls((count) => count + 1)}
        onCloseReason={setCloseReason}
      >
        <p style={{ margin: 0 }}>Repeated Escape keydown should not close this popover.</p>
      </Popover>
    </PopoverShowcase>
  );
}

export const EscapeRepeatGuard: Story = {
  args: {
    triggerLabel: "Repeat Escape Popover",
    children: <p style={{ margin: 0 }}>Repeated Escape keydown should not close this popover.</p>
  },
  render: () => <EscapeRepeatPopoverDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
    const trigger = await canvas.findByRole("button", { name: "Repeat Escape Popover" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    fireEvent.keyDown(ownerDocument, { key: "Escape", repeat: true });
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("0");
    await expect(canvas.getByTestId("popover-repeat-close-reason")).toHaveTextContent("none");

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", { name: "Popover content" })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("1");
    await expect(canvas.getByTestId("popover-repeat-close-reason")).toHaveTextContent("escape-key");
  }
};

function EscapeImeCompositionPopoverDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <PopoverShowcase>
      <Popover triggerLabel="IME composition popover" open={open} onOpenChange={setOpen}>
        <p style={{ margin: 0 }}>Escape during IME composition should not dismiss this popover.</p>
      </Popover>
    </PopoverShowcase>
  );
}

export const EscapeIgnoresImeComposition: Story = {
  args: {
    triggerLabel: "IME composition popover",
    children: <p style={{ margin: 0 }}>Escape during IME composition should not dismiss this popover.</p>
  },
  render: () => <EscapeImeCompositionPopoverDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
    const trigger = await canvas.findByRole("button", { name: "IME composition popover" });

    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, { key: "Escape", isComposing: true, keyCode: 229, which: 229 });
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    dispatchLegacyImeEscape(ownerDocument);
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    await userEvent.click(trigger);
    await expect(canvas.queryByRole("dialog", { name: "Popover content" })).not.toBeInTheDocument();
  }
};
