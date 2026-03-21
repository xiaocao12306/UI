import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, Button } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";
import { StoryShowcaseFrame } from "./storyShowcase";

function AlertShowcase({ children }: { children: React.ReactNode }) {
  return (
    <StoryShowcaseFrame maxWidth="min(100%, 560px)">
      {children}
    </StoryShowcaseFrame>
  );
}

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
    <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
  )
};

function DismissibleAlertDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <AlertShowcase>
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
    </AlertShowcase>
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

export const AccessibilityMetadata: Story = {
  args: {
    title: "Release readiness",
    description: "Status copy is exposed through an explicit accessible name.",
    ariaLabel: "Release readiness alert"
  },
  render: (args) => (
    <AlertShowcase>
      <Alert {...args} onClose={() => {}} closeLabel="Dismiss release readiness alert" />
    </AlertShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("status", { name: "Release readiness alert" });
    await expect(alert).toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Dismiss release readiness alert" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Enter Space"
    );
  }
};

export const FocusIntentReentry: Story = {
  render: () => (
    <AlertShowcase>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 13 }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores close-button
        focus-visible state.
      </p>
      <button type="button">Before alert close</button>
      <Alert
        tone="warning"
        title="Pending action"
        description="Close affordance should restore keyboard focus ring on re-entry."
        onClose={() => {}}
        closeLabel="Focus intent dismiss"
      />
    </AlertShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", { name: "Before alert close" });
    const closeButton = canvas.getByRole("button", { name: "Focus intent dismiss" });

    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton).toHaveAttribute("data-focus-visible", "true");
  }
};

export const CloseButtonKeyboardPressedState: Story = {
  render: () => (
    <AlertShowcase>
      <Alert
        tone="warning"
        title="Pending action"
        description="Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys."
        onClose={() => {}}
        closeLabel="Pressed-state dismiss"
      />
    </AlertShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const closeButton = canvas.getByRole("button", { name: "Pressed-state dismiss" });

    closeButton.focus();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    fireEvent.keyDown(closeButton, { key: "Enter", ctrlKey: true });
    await expect(closeButton).not.toHaveAttribute("data-pressed");
    fireEvent.keyDown(closeButton, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    await expect(closeButton).not.toHaveAttribute("data-pressed");
    fireEvent.keyDown(closeButton, { key: "Enter", keyCode: 229, which: 229 });
    await expect(closeButton).not.toHaveAttribute("data-pressed");
  }
};
