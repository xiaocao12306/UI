import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Dialog, Dropdown, Input, Textarea } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";
import { StoryShowcaseFrame, storyEmphasisTextStyle, storyMutedTextStyle } from "./storyShowcase";

const meta = {
  title: "Overlay/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."
      }
    }
  },
  args: {
    open: false,
    title: "Dialog",
    children: "Dialog content",
    onOpenChange: () => {}
  }
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const storyStackStyle: React.CSSProperties = { display: "grid", gap: 12 };
const storyContentStackStyle: React.CSSProperties = { display: "grid", gap: 10 };
const storyActionRowStyle: React.CSSProperties = { display: "flex", gap: 8, justifyContent: "end" };
const storyTelemetryStackStyle: React.CSSProperties = { display: "grid", gap: 12, justifyItems: "start" };
const storyParagraphStyle: React.CSSProperties = { margin: 0 };
const storyOutsideProbeStyle: React.CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  width: 1,
  height: 1,
  opacity: 0
};

function InteractiveDialog() {
  const [open, setOpen] = React.useState(false);

  return (
    <StoryShowcaseFrame gap={12}>
      <Button onClick={() => setOpen(true)}>Open Draft Dialog</Button>
      <Dialog open={open} onOpenChange={setOpen} title="Create AI Draft">
        <div style={storyContentStackStyle}>
          <Input placeholder="Title" aria-label="Title" />
          <Textarea placeholder="Describe expected output..." aria-label="Description" />
          <Button>Save Draft</Button>
        </div>
      </Dialog>
    </StoryShowcaseFrame>
  );
}

function InitiallyOpenDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen} title="Review Prompt Plan">
      <p style={storyParagraphStyle}>Escape and outside pointer interactions should dismiss this dialog.</p>
    </Dialog>
  );
}

export const Interactive: Story = {
  render: () => <InteractiveDialog />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole("button", { name: "Open Draft Dialog" }));
    await expect(await body.findByRole("dialog", { name: "Create AI Draft" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", { name: "Create AI Draft" })).not.toBeInTheDocument();
  }
};

function LabelledByPrecedenceDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <StoryShowcaseFrame align="start">
      <h3 id="dialog-heading" style={{ margin: 0 }}>
        Release checklist dialog heading
      </h3>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title={<span aria-hidden>✅</span>}
        ariaLabel="Fallback release checklist dialog"
        ariaLabelledBy="dialog-heading"
      >
        <p style={storyParagraphStyle}>Dialog name should follow visible heading binding.</p>
      </Dialog>
    </StoryShowcaseFrame>
  );
}

export const LabelledByPrecedence: Story = {
  render: () => <LabelledByPrecedenceDialog />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", { name: "Release checklist dialog heading" });
    await expect(dialog).toHaveAttribute("aria-labelledby", "dialog-heading");
    await expect(dialog).not.toHaveAttribute("aria-label");
  }
};

function IconTitleAriaLabelFallbackDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <StoryShowcaseFrame align="start">
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title={<span aria-hidden>⚙️</span>}
        ariaLabel="Automation settings dialog"
      >
        <p style={storyParagraphStyle}>Icon-only title should keep explicit ariaLabel naming.</p>
      </Dialog>
    </StoryShowcaseFrame>
  );
}

export const IconTitleAriaLabelFallback: Story = {
  render: () => <IconTitleAriaLabelFallbackDialog />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", { name: "Automation settings dialog" });
    await expect(dialog).toHaveAttribute("aria-label", "Automation settings dialog");
    await expect(dialog).not.toHaveAttribute("aria-labelledby");
  }
};

function NonTextTitleAutoNameFallbackDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <StoryShowcaseFrame align="start">
      <Dialog open={open} onOpenChange={setOpen} title={<span aria-hidden>⚙️</span>}>
        <p style={storyParagraphStyle}>Icon-only title now keeps fallback dialog naming.</p>
      </Dialog>
    </StoryShowcaseFrame>
  );
}

export const NonTextTitleAutoNameFallback: Story = {
  render: () => <NonTextTitleAutoNameFallbackDialog />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", { name: "Dialog" });
    await expect(dialog).toHaveAttribute("aria-label", "Dialog");
    await expect(dialog).not.toHaveAttribute("aria-labelledby");
  }
};

function NumericDescriptionDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <StoryShowcaseFrame align="start">
      <Dialog open={open} onOpenChange={setOpen} title="Numeric description dialog" description={0}>
        <p style={storyParagraphStyle}>Dialog description supports numeric ReactNode content.</p>
      </Dialog>
    </StoryShowcaseFrame>
  );
}

export const NumericDescriptionSemantics: Story = {
  render: () => <NumericDescriptionDialog />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", { name: "Numeric description dialog" });
    const descriptions = body.getAllByText("0");

    await expect(descriptions).toHaveLength(1);
    await expect(descriptions[0].tagName).toBe("P");
    await expect(dialog).toHaveAttribute("aria-describedby", descriptions[0].id);
  }
};

function FocusReturnDialog() {
  const [open, setOpen] = React.useState(false);

  return (
    <StoryShowcaseFrame gap={12}>
      <Button onClick={() => setOpen(true)}>Open Focus Return Dialog</Button>
      <Dialog open={open} onOpenChange={setOpen} title="Focus Return">
        <p style={storyParagraphStyle}>Close this dialog and focus should return to the trigger button.</p>
      </Dialog>
    </StoryShowcaseFrame>
  );
}

export const FocusReturn: Story = {
  render: () => <FocusReturnDialog />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", { name: "Open Focus Return Dialog" });

    await userEvent.click(trigger);
    await expect(await body.findByRole("dialog", { name: "Focus Return" })).toBeInTheDocument();

    await userEvent.click(body.getByRole("button", { name: "Close dialog" }));
    await expect(trigger).toHaveFocus();
  }
};

function FocusTrapKeyboardCycleDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <StoryShowcaseFrame gap={12}>
      <button type="button">Outside before dialog</button>
      <Dialog open={open} onOpenChange={setOpen} title="Focus trap dialog">
        <div style={storyContentStackStyle}>
          <p style={storyParagraphStyle}>Tab and Shift+Tab should cycle within the dialog.</p>
          <Button>Primary dialog action</Button>
          <Button variant="outline">Secondary dialog action</Button>
        </div>
      </Dialog>
      <button type="button">Outside after dialog</button>
    </StoryShowcaseFrame>
  );
}

export const FocusTrapKeyboardCycle: Story = {
  render: () => <FocusTrapKeyboardCycleDialog />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", { name: "Close dialog" });
    const primaryAction = body.getByRole("button", { name: "Primary dialog action" });
    const secondaryAction = body.getByRole("button", { name: "Secondary dialog action" });
    const outsideAfter = body.getByRole("button", { name: "Outside after dialog" });

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

function FocusIntentPrimaryPointerDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen} title="Focus intent pointer policy">
      <p style={storyParagraphStyle}>
        Non-primary mouse down should not clear close-button focus-visible feedback.
      </p>
    </Dialog>
  );
}

export const FocusIntentPrimaryPointerOnly: Story = {
  render: () => <FocusIntentPrimaryPointerDialog />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", { name: "Close dialog" });

    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    const secondaryMouseDown = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      button: 1
    });
    closeButton.dispatchEvent(secondaryMouseDown);
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
    await expect(closeButton.style.transform).toContain("0");

    await userEvent.pointer([{ target: closeButton, keys: "[MouseLeft>]" }]);
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("1px");
    });
    await expect(closeButton.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");
  }
};

function FocusIntentReentryDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <StoryShowcaseFrame gap={12}>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Focus intent re-entry dialog"
        closeLabel="Focus intent close dialog"
      >
        <p style={storyParagraphStyle}>
          Click the in-dialog action first, then Tab to verify owner-document keyboard intent restores close-button focus ring.
        </p>
        <button type="button">Dialog content action</button>
      </Dialog>
    </StoryShowcaseFrame>
  );
}

export const FocusIntentReentry: Story = {
  render: () => <FocusIntentReentryDialog />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialogAction = await body.findByRole("button", { name: "Dialog content action" });
    const closeButton = await body.findByRole("button", { name: "Focus intent close dialog" });

    await userEvent.click(dialogAction);
    await expect(dialogAction).toHaveFocus();

    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
    fireEvent.mouseDown(closeButton, { button: 0, ctrlKey: true });
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
  }
};

function CloseButtonKeyboardPressedDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      title="Keyboard pressed close affordance"
      description="Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys."
    >
      <p style={storyParagraphStyle}>Validate keyboard activation parity with pointer pressed-state feedback.</p>
    </Dialog>
  );
}

export const CloseButtonKeyboardPressedState: Story = {
  render: () => <CloseButtonKeyboardPressedDialog />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const ownerDocument = canvasElement.ownerDocument;
    const dialog = await body.findByRole("dialog", { name: "Keyboard pressed close affordance" });
    await expect(dialog).toHaveAttribute("aria-keyshortcuts", "Escape");
    const closeButton = await body.findByRole("button", { name: "Close dialog" });
    await expect(closeButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");

    fireEvent.mouseDown(closeButton, { button: 0 });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.pointerCancel(closeButton);
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });

    fireEvent.pointerDown(closeButton, { pointerType: "touch", button: 0 });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.pointerUp(closeButton, { pointerType: "touch", button: 0 });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });

    closeButton.focus();
    fireEvent.keyDown(closeButton, { key: "Enter", ctrlKey: true });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyUp(closeButton, { key: "Enter", ctrlKey: true });

    const preemptActivationKeys = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " " || event.key === "Space" || event.key === "Spacebar") {
        event.preventDefault();
      }
    };
    try {
      ownerDocument.addEventListener("keydown", preemptActivationKeys, true);
      fireEvent.keyDown(closeButton, { key: "Enter" });
      await waitFor(() => {
        expect(closeButton.style.transform).toContain("translateY(0");
      });
      fireEvent.keyDown(closeButton, { key: "Space" });
      await waitFor(() => {
        expect(closeButton.style.transform).toContain("translateY(0");
      });
    } finally {
      ownerDocument.removeEventListener("keydown", preemptActivationKeys, true);
    }

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

function CloseButtonManagedKeysPreemptedByLocalHandlerDialog() {
  return (
    <Dialog
      open
      onOpenChange={() => {}}
      title="Locally preempted keyboard close dialog"
      description="Local close-button key guards should suppress pressed feedback."
      onCloseButtonKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " " ||
          event.key === "Space" ||
          event.key === "Spacebar"
        ) {
          event.preventDefault();
        }
      }}
    >
      <p style={storyParagraphStyle}>Local guards preempt managed close-button keyboard feedback.</p>
    </Dialog>
  );
}

export const CloseButtonManagedKeysPreemptedByLocalHandler: Story = {
  render: () => <CloseButtonManagedKeysPreemptedByLocalHandlerDialog />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", { name: "Close dialog" });

    closeButton.focus();
    fireEvent.keyDown(closeButton, { key: "Enter" });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyUp(closeButton, { key: "Enter" });

    fireEvent.keyDown(closeButton, { key: "Space" });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyUp(closeButton, { key: "Space" });
  }
};

export const OpenByDefault: Story = {
  render: () => <InitiallyOpenDialog />
};

function NonDismissableDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      title="Critical Confirmation"
      description="This dialog requires an explicit action and ignores Escape / outside clicks."
      closeOnEscape={false}
      closeOnOutsidePointer={false}
      size="lg"
    >
      <div style={storyStackStyle}>
        <p style={storyParagraphStyle}>Review the migration plan before confirming release.</p>
        <div style={storyActionRowStyle}>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </div>
      </div>
    </Dialog>
  );
}

export const NonDismissable: Story = {
  render: () => <NonDismissableDialog />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", { name: "Critical Confirmation" });

    await expect(dialog).toBeInTheDocument();
    await expect(dialog).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", { name: "Critical Confirmation" })).toBeInTheDocument();

    await userEvent.click(body.getByRole("button", { name: "Cancel" }));
    await expect(body.queryByRole("dialog", { name: "Critical Confirmation" })).not.toBeInTheDocument();
  }
};

function DismissGuardDialog() {
  const [open, setOpen] = React.useState(true);
  const [escapeCalls, setEscapeCalls] = React.useState(0);
  const [outsideCalls, setOutsideCalls] = React.useState(0);

  return (
    <StoryShowcaseFrame gap={12}>
      <div style={storyTelemetryStackStyle}>
      <button
        type="button"
        data-testid="dialog-guard-outside-target"
        aria-label="Dialog guard outside target"
        style={storyOutsideProbeStyle}
      />
      <p style={storyMutedTextStyle}>
        Escape guard calls:{" "}
        <strong data-testid="dialog-guard-escape-calls" style={storyEmphasisTextStyle}>
          {escapeCalls}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Outside guard calls:{" "}
        <strong data-testid="dialog-guard-outside-calls" style={storyEmphasisTextStyle}>
          {outsideCalls}
        </strong>
      </p>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Guarded dismissal dialog"
        onEscapeKeyDown={(event) => {
          event.preventDefault();
          setEscapeCalls((count) => count + 1);
        }}
        onPointerDownOutside={(event) => {
          event.preventDefault();
          setOutsideCalls((count) => count + 1);
        }}
      >
        <p style={storyParagraphStyle}>Dismiss hooks can block Escape and outside pointer close paths.</p>
      </Dialog>
      </div>
    </StoryShowcaseFrame>
  );
}

export const DismissGuardHooks: Story = {
  render: () => <DismissGuardDialog />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = body.getByTestId("dialog-guard-outside-target");

    await expect(await body.findByRole("dialog", { name: "Guarded dismissal dialog" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", { name: "Guarded dismissal dialog" })).toBeInTheDocument();
    await expect(body.getByTestId("dialog-guard-escape-calls")).toHaveTextContent("1");

    await userEvent.click(outsideTarget);
    await expect(body.getByRole("dialog", { name: "Guarded dismissal dialog" })).toBeInTheDocument();
    await expect(body.getByTestId("dialog-guard-outside-calls")).toHaveTextContent("1");
  }
};

function CloseReasonTelemetryDialog() {
  const [open, setOpen] = React.useState(false);
  const [lastReason, setLastReason] = React.useState("none");
  const [lastTrace, setLastTrace] = React.useState("none");

  return (
    <StoryShowcaseFrame gap={12}>
      <div style={storyTelemetryStackStyle}>
      <button
        type="button"
        data-testid="dialog-outside-target"
        aria-label="Dialog outside target"
        style={storyOutsideProbeStyle}
      />
      <p style={storyMutedTextStyle}>
        Last close reason:{" "}
        <strong data-testid="dialog-close-reason" style={storyEmphasisTextStyle}>
          {lastReason}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Last close trace:{" "}
        <strong data-testid="dialog-close-trace" style={storyEmphasisTextStyle}>
          {lastTrace}
        </strong>
      </p>
      <Button onClick={() => setOpen(true)}>Open Telemetry Dialog</Button>
      <Dialog
        open={open}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen);
          if (!nextOpen) {
            setLastTrace((current) => `${current} -> open:false`);
          }
        }}
        title="Close Reason Telemetry"
        onCloseReason={(reason) => {
          setLastReason(reason);
          setLastTrace(`reason:${reason}`);
        }}
      >
        <p style={storyParagraphStyle}>Track close-button, Escape, and outside-pointer dismiss reasons.</p>
      </Dialog>
      </div>
    </StoryShowcaseFrame>
  );
}

export const CloseReasonTelemetry: Story = {
  render: () => <CloseReasonTelemetryDialog />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = canvas.getByTestId("dialog-outside-target");

    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("none");

    await userEvent.click(canvas.getByRole("button", { name: "Open Telemetry Dialog" }));
    await expect(await body.findByRole("dialog", { name: "Close Reason Telemetry" })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", { name: "Close dialog" }));
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("close-button");
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false");

    await userEvent.click(canvas.getByRole("button", { name: "Open Telemetry Dialog" }));
    await expect(await body.findByRole("dialog", { name: "Close Reason Telemetry" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false");

    await userEvent.click(canvas.getByRole("button", { name: "Open Telemetry Dialog" }));
    await expect(await body.findByRole("dialog", { name: "Close Reason Telemetry" })).toBeInTheDocument();
    outsideTarget.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        cancelable: true,
        button: 0,
        ctrlKey: true,
        pointerType: "mouse"
      })
    );
    await expect(body.getByRole("dialog", { name: "Close Reason Telemetry" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key");
    await userEvent.pointer({ target: outsideTarget, keys: "[MouseLeft]" });
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
  }
};

function NestedOverlayDialog() {
  const [open, setOpen] = React.useState(false);

  return (
    <StoryShowcaseFrame gap={12}>
      <Button onClick={() => setOpen(true)}>Open Nested Overlay Dialog</Button>
      <Dialog open={open} onOpenChange={setOpen} title="Nested Overlay Dialog">
        <div style={storyContentStackStyle}>
          <p style={storyParagraphStyle}>Escape should close dropdown first, then dialog.</p>
          <Dropdown
            label="Dialog actions"
            items={[
              { key: "duplicate", label: "Duplicate" },
              { key: "archive", label: "Archive" }
            ]}
          />
        </div>
      </Dialog>
    </StoryShowcaseFrame>
  );
}

export const NestedDismissOrder: Story = {
  render: () => <NestedOverlayDialog />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole("button", { name: "Open Nested Overlay Dialog" }));
    await expect(await body.findByRole("dialog", { name: "Nested Overlay Dialog" })).toBeInTheDocument();

    await userEvent.click(body.getByRole("button", { name: "Dialog actions" }));
    await expect(body.getByRole("menu", { name: "Dialog actions" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("menu", { name: "Dialog actions" })).not.toBeInTheDocument();
    await expect(body.getByRole("dialog", { name: "Nested Overlay Dialog" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", { name: "Nested Overlay Dialog" })).not.toBeInTheDocument();
  }
};

function EscapeImeGuardDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen} title="IME composition dialog">
      <p style={storyParagraphStyle}>Escape should be ignored while IME composition is active.</p>
    </Dialog>
  );
}

export const EscapeIgnoresImeComposition: Story = {
  render: () => <EscapeImeGuardDialog />,
  play: async ({ canvasElement }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);

    await expect(await body.findByRole("dialog", { name: "IME composition dialog" })).toBeInTheDocument();

    fireEvent.keyDown(ownerDocument, { key: "Escape", isComposing: true });
    await expect(body.getByRole("dialog", { name: "IME composition dialog" })).toBeInTheDocument();

    fireEvent.keyDown(ownerDocument, { key: "Escape", keyCode: 229 });
    await expect(body.getByRole("dialog", { name: "IME composition dialog" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", { name: "IME composition dialog" })).not.toBeInTheDocument();
  }
};

function EscapePreemptedDialog() {
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
    <StoryShowcaseFrame gap={12}>
      <p style={storyMutedTextStyle}>
        Escape hook calls:{" "}
        <strong data-testid="dialog-escape-calls" style={storyEmphasisTextStyle}>
          {escapeCalls}
        </strong>
      </p>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Preempted escape dialog"
        onEscapeKeyDown={() => setEscapeCalls((count) => count + 1)}
      >
        <p style={storyParagraphStyle}>Escape should remain preempted by global handlers.</p>
      </Dialog>
    </StoryShowcaseFrame>
  );
}

export const EscapePreemptedByGlobalHandler: Story = {
  render: () => <EscapePreemptedDialog />,
  play: async ({ canvasElement }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);

    await expect(await body.findByRole("dialog", { name: "Preempted escape dialog" })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(ownerDocument, { key: "Escape", altKey: true });
    fireEvent.keyDown(ownerDocument, { key: "Escape", metaKey: true });
    await expect(body.getByRole("dialog", { name: "Preempted escape dialog" })).toBeInTheDocument();
    await expect(body.getByTestId("dialog-escape-calls")).toHaveTextContent("0");

    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", { name: "Preempted escape dialog" })).toBeInTheDocument();
    await expect(body.getByTestId("dialog-escape-calls")).toHaveTextContent("0");
  }
};

function EscapeRepeatDialogDemo() {
  const [open, setOpen] = React.useState(true);
  const [escapeCalls, setEscapeCalls] = React.useState(0);
  const [closeReason, setCloseReason] = React.useState("none");

  return (
    <StoryShowcaseFrame gap={12}>
      <p style={storyMutedTextStyle}>
        Escape hook calls:{" "}
        <strong data-testid="dialog-repeat-escape-calls" style={storyEmphasisTextStyle}>
          {escapeCalls}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Last close reason:{" "}
        <strong data-testid="dialog-repeat-close-reason" style={storyEmphasisTextStyle}>
          {closeReason}
        </strong>
      </p>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Repeat escape dialog"
        onEscapeKeyDown={() => setEscapeCalls((count) => count + 1)}
        onCloseReason={setCloseReason}
      >
        <p style={storyParagraphStyle}>Repeated Escape keydown should not close this dialog.</p>
      </Dialog>
    </StoryShowcaseFrame>
  );
}

export const EscapeRepeatGuard: Story = {
  render: () => <EscapeRepeatDialogDemo />,
  play: async ({ canvasElement }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);

    await expect(await body.findByRole("dialog", { name: "Repeat escape dialog" })).toBeInTheDocument();

    fireEvent.keyDown(ownerDocument, { key: "Escape", repeat: true });
    await expect(body.getByRole("dialog", { name: "Repeat escape dialog" })).toBeInTheDocument();
    await expect(body.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("0");
    await expect(body.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("none");

    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", { name: "Repeat escape dialog" })).not.toBeInTheDocument();
    await expect(body.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("1");
    await expect(body.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("escape-key");
  }
};
