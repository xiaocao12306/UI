import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Drawer, Dropdown } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";
import { StoryFullscreenFrame, storyEmphasisTextStyle, storyMutedTextStyle } from "./storyShowcase";

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

const storyContentStackStyle: React.CSSProperties = { display: "grid", gap: 10 };
const storyTelemetryStackStyle: React.CSSProperties = { display: "grid", gap: 10, justifyItems: "start" };
const storyParagraphStyle: React.CSSProperties = { margin: 0 };
const storyOutsideProbeStyle: React.CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  width: 1,
  height: 1,
  opacity: 0
};

function InteractiveDrawerDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <StoryFullscreenFrame align="start">
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
        <div style={storyContentStackStyle}>
          <p style={storyParagraphStyle}>Use this panel to narrow incident review scope.</p>
          <Button onClick={() => setOpen(false)}>Apply and close</Button>
        </div>
      </Drawer>
    </StoryFullscreenFrame>
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

function LabelledByPrecedenceDrawerDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <StoryFullscreenFrame align="start">
      <h3 id="drawer-heading" style={{ margin: 0 }}>
        Release checklist drawer heading
      </h3>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title={<span aria-hidden>✅</span>}
        ariaLabel="Fallback release checklist drawer"
        ariaLabelledBy="drawer-heading"
      >
        <p style={storyParagraphStyle}>Drawer name should follow visible heading binding.</p>
      </Drawer>
    </StoryFullscreenFrame>
  );
}

export const LabelledByPrecedence: Story = {
  render: () => <LabelledByPrecedenceDrawerDemo />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const drawer = await body.findByRole("dialog", { name: "Release checklist drawer heading" });
    await expect(drawer).toHaveAttribute("aria-labelledby", "drawer-heading");
    await expect(drawer).not.toHaveAttribute("aria-label");
  }
};

function NonDismissibleDrawerDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <StoryFullscreenFrame align="start">
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
        <div style={storyContentStackStyle}>
          <p style={storyParagraphStyle}>Outside click and Escape are disabled in this flow.</p>
          <Button onClick={() => setOpen(false)}>I understand</Button>
        </div>
      </Drawer>
    </StoryFullscreenFrame>
  );
}

export const NonDismissible: Story = {
  render: () => <NonDismissibleDrawerDemo />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", { name: "Security checklist" });
    await expect(dialog).not.toHaveAttribute("aria-keyshortcuts");

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
    <StoryFullscreenFrame align="start">
      <div style={storyTelemetryStackStyle}>
      <button
        type="button"
        data-testid="drawer-guard-outside-target"
        aria-label="Drawer guard outside target"
        style={storyOutsideProbeStyle}
      />
      <p style={storyMutedTextStyle}>
        Escape guard calls:{" "}
        <strong data-testid="drawer-guard-escape-calls" style={storyEmphasisTextStyle}>
          {escapeCalls}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Outside guard calls:{" "}
        <strong data-testid="drawer-guard-outside-calls" style={storyEmphasisTextStyle}>
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
        <p style={storyParagraphStyle}>Dismiss hooks can block Escape and outside pointer close paths.</p>
      </Drawer>
      </div>
    </StoryFullscreenFrame>
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
    <StoryFullscreenFrame align="start">
      <Button variant="outline" onClick={() => setOpen(true)}>
        Reopen Drawer
      </Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Primary pointer close affordance"
        description="Close button should only show pressed state for primary pointer interactions."
      >
        <p style={storyParagraphStyle}>Validate close-button pressed feedback with primary pointer only.</p>
      </Drawer>
    </StoryFullscreenFrame>
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

function FocusIntentReentryDrawerDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <StoryFullscreenFrame align="start">
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Focus intent re-entry drawer"
        closeLabel="Focus intent close drawer"
      >
        <div style={storyContentStackStyle}>
          <p style={storyParagraphStyle}>
            Click the in-drawer action first, then Tab to verify owner-document keyboard intent restores close-button focus ring.
          </p>
          <button type="button">Drawer content action</button>
        </div>
      </Drawer>
    </StoryFullscreenFrame>
  );
}

export const FocusIntentReentry: Story = {
  render: () => <FocusIntentReentryDrawerDemo />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const drawerAction = await body.findByRole("button", { name: "Drawer content action" });
    const closeButton = await body.findByRole("button", { name: "Focus intent close drawer" });

    await userEvent.click(drawerAction);
    await expect(drawerAction).toHaveFocus();

    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
    fireEvent.mouseDown(closeButton, { button: 0, ctrlKey: true });
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
  }
};

function CloseButtonKeyboardPressedDrawerDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <StoryFullscreenFrame align="start">
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Keyboard pressed close affordance"
        description="Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys."
      >
        <p style={storyParagraphStyle}>Validate keyboard activation parity with pointer pressed-state feedback.</p>
      </Drawer>
    </StoryFullscreenFrame>
  );
}

export const CloseButtonKeyboardPressedState: Story = {
  render: () => <CloseButtonKeyboardPressedDrawerDemo />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const drawer = await body.findByRole("dialog", { name: "Keyboard pressed close affordance" });
    await expect(drawer).toHaveAttribute("aria-keyshortcuts", "Escape");
    const closeButton = await body.findByRole("button", { name: "Close drawer" });
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

function CloseReasonTelemetryDrawerDemo() {
  const [open, setOpen] = React.useState(false);
  const [lastReason, setLastReason] = React.useState("none");
  const [lastTrace, setLastTrace] = React.useState("none");

  return (
    <StoryFullscreenFrame align="start">
      <div style={storyTelemetryStackStyle}>
      <button
        type="button"
        data-testid="drawer-outside-target"
        aria-label="Drawer outside target"
        style={storyOutsideProbeStyle}
      />
      <p style={storyMutedTextStyle}>
        Last close reason:{" "}
        <strong data-testid="drawer-close-reason" style={storyEmphasisTextStyle}>
          {lastReason}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Last close trace:{" "}
        <strong data-testid="drawer-close-trace" style={storyEmphasisTextStyle}>
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
        <p style={storyParagraphStyle}>Track close-button, Escape, and outside-pointer dismiss reasons.</p>
      </Drawer>
      </div>
    </StoryFullscreenFrame>
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
    outsideTarget.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        cancelable: true,
        button: 0,
        ctrlKey: true,
        pointerType: "mouse"
      })
    );
    await expect(body.getByRole("dialog", { name: "Close reason telemetry drawer" })).toBeInTheDocument();
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key");
    await userEvent.pointer({ target: outsideTarget, keys: "[MouseLeft]" });
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
  }
};

function FocusReturnDrawerDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <StoryFullscreenFrame align="start">
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
        <p style={storyParagraphStyle}>Use close button and verify trigger focus restoration.</p>
      </Drawer>
    </StoryFullscreenFrame>
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
    <StoryFullscreenFrame align="start">
      <button type="button">Outside before drawer</button>
      <Drawer open={open} onOpenChange={setOpen} title="Focus trap drawer">
        <div style={storyContentStackStyle}>
          <p style={storyParagraphStyle}>Tab and Shift+Tab should cycle within the drawer.</p>
          <Button>Primary drawer action</Button>
          <Button variant="outline">Secondary drawer action</Button>
        </div>
      </Drawer>
      <button type="button">Outside after drawer</button>
    </StoryFullscreenFrame>
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
    <StoryFullscreenFrame align="start" gap={8}>
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
        <p style={storyParagraphStyle}>Use this mode when close flow intentionally hands off focus.</p>
      </Drawer>
    </StoryFullscreenFrame>
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
    <StoryFullscreenFrame align="start">
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open Nested Overlay Drawer
      </Button>
      <Drawer open={open} onOpenChange={setOpen} title="Nested overlay drawer">
        <div style={storyContentStackStyle}>
          <p style={storyParagraphStyle}>Escape should close dropdown first, then drawer.</p>
          <Dropdown
            label="Drawer actions"
            items={[
              { key: "duplicate", label: "Duplicate" },
              { key: "archive", label: "Archive" }
            ]}
          />
        </div>
      </Drawer>
    </StoryFullscreenFrame>
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
      <p style={storyParagraphStyle}>Escape should be ignored while IME composition is active.</p>
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
    <StoryFullscreenFrame align="start">
      <p style={storyMutedTextStyle}>
        Escape hook calls:{" "}
        <strong data-testid="drawer-escape-calls" style={storyEmphasisTextStyle}>
          {escapeCalls}
        </strong>
      </p>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Preempted escape drawer"
        onEscapeKeyDown={() => setEscapeCalls((count) => count + 1)}
      >
        <p style={storyParagraphStyle}>Escape should remain preempted by global handlers.</p>
      </Drawer>
    </StoryFullscreenFrame>
  );
}

export const EscapePreemptedByGlobalHandler: Story = {
  render: () => <EscapePreemptedDrawerDemo />,
  play: async ({ canvasElement }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);

    await expect(await body.findByRole("dialog", { name: "Preempted escape drawer" })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(ownerDocument, { key: "Escape", altKey: true });
    fireEvent.keyDown(ownerDocument, { key: "Escape", metaKey: true });
    await expect(body.getByRole("dialog", { name: "Preempted escape drawer" })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-escape-calls")).toHaveTextContent("0");

    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", { name: "Preempted escape drawer" })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-escape-calls")).toHaveTextContent("0");
  }
};

function EscapeRepeatDrawerDemo() {
  const [open, setOpen] = React.useState(true);
  const [escapeCalls, setEscapeCalls] = React.useState(0);
  const [closeReason, setCloseReason] = React.useState("none");

  return (
    <StoryFullscreenFrame align="start">
      <p style={storyMutedTextStyle}>
        Escape hook calls:{" "}
        <strong data-testid="drawer-repeat-escape-calls" style={storyEmphasisTextStyle}>
          {escapeCalls}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Last close reason:{" "}
        <strong data-testid="drawer-repeat-close-reason" style={storyEmphasisTextStyle}>
          {closeReason}
        </strong>
      </p>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Repeat escape drawer"
        onEscapeKeyDown={() => setEscapeCalls((count) => count + 1)}
        onCloseReason={setCloseReason}
      >
        <p style={storyParagraphStyle}>Repeated Escape keydown should not close this drawer.</p>
      </Drawer>
    </StoryFullscreenFrame>
  );
}

export const EscapeRepeatGuard: Story = {
  render: () => <EscapeRepeatDrawerDemo />,
  play: async ({ canvasElement }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);

    await expect(await body.findByRole("dialog", { name: "Repeat escape drawer" })).toBeInTheDocument();

    fireEvent.keyDown(ownerDocument, { key: "Escape", repeat: true });
    await expect(body.getByRole("dialog", { name: "Repeat escape drawer" })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("0");
    await expect(body.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("none");

    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", { name: "Repeat escape drawer" })).not.toBeInTheDocument();
    await expect(body.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("1");
    await expect(body.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("escape-key");
  }
};
