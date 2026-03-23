import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, Button } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";
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

export const RuntimeConfigNormalization: Story = {
  render: () => (
    <AlertShowcase>
      <Alert
        tone={" DANGER " as unknown as "danger"}
        live={" ASSERTIVE " as unknown as "assertive"}
        title="Danger from runtime token"
        description="Trim/lowercase runtime tokens map to supported alert semantics."
      />
      <Alert
        tone={"critical" as unknown as "info"}
        live={"LOUD" as unknown as "polite"}
        title="Fallback from invalid token"
        description="Invalid runtime tokens fall back to default info/polite semantics."
      />
    </AlertShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const normalizedAlert = canvas.getByRole("alert", { name: "Danger from runtime token" });
    await expect(normalizedAlert).toHaveAttribute("aria-live", "assertive");

    const fallbackAlert = canvas.getByRole("status", { name: "Fallback from invalid token" });
    await expect(fallbackAlert).toHaveAttribute("aria-live", "polite");
  }
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

export const LabelledByPrecedence: Story = {
  render: () => (
    <AlertShowcase>
      <h3 id="alert-heading" style={{ margin: 0 }}>
        Release readiness heading
      </h3>
      <Alert
        title="Release readiness"
        description="Status copy inherits visible heading naming."
        ariaLabel="Fallback release readiness alert"
        ariaLabelledBy="alert-heading"
      />
    </AlertShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("status", { name: "Release readiness heading" });
    await expect(alert).toHaveAttribute("aria-labelledby", "alert-heading");
    await expect(alert).not.toHaveAttribute("aria-label");
  }
};

export const NonTextTitleAutoNameFallback: Story = {
  render: () => (
    <AlertShowcase>
      <Alert title={<span aria-hidden>✅</span>} description="Auto fallback name for icon-only title." />
    </AlertShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("status", { name: "Alert" });
    await expect(alert).toHaveAttribute("aria-label", "Alert");
    await expect(alert).not.toHaveAttribute("aria-labelledby");
  }
};

export const NumericContentSemantics: Story = {
  render: () => (
    <AlertShowcase>
      <Alert title={0} description={0}>
        {0}
      </Alert>
    </AlertShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("status");
    const contentNodes = canvas.getAllByText("0");

    await expect(contentNodes).toHaveLength(3);
    await expect(alert).toHaveTextContent("000");
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

    fireEvent.mouseDown(closeButton, { button: 0, ctrlKey: true });
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
    const ownerDocument = canvasElement.ownerDocument;
    const closeButton = canvas.getByRole("button", { name: "Pressed-state dismiss" });

    closeButton.focus();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    fireEvent.keyDown(closeButton, { key: "Enter", ctrlKey: true });
    await expect(closeButton).not.toHaveAttribute("data-pressed");

    const preemptActivationKeys = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " " || event.key === "Space" || event.key === "Spacebar") {
        event.preventDefault();
      }
    };
    try {
      ownerDocument.addEventListener("keydown", preemptActivationKeys, true);
      fireEvent.keyDown(closeButton, { key: "Enter" });
      await expect(closeButton).not.toHaveAttribute("data-pressed");
      fireEvent.keyDown(closeButton, { key: "Space" });
      await expect(closeButton).not.toHaveAttribute("data-pressed");
    } finally {
      ownerDocument.removeEventListener("keydown", preemptActivationKeys, true);
    }

    fireEvent.keyDown(closeButton, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    await expect(closeButton).not.toHaveAttribute("data-pressed");
    fireEvent.keyDown(closeButton, { key: "Enter", keyCode: 229, which: 229 });
    await expect(closeButton).not.toHaveAttribute("data-pressed");
  }
};

export const CloseButtonPrimaryPointerOnly: Story = {
  render: () => (
    <AlertShowcase>
      <Alert
        tone="warning"
        title="Pending action"
        description="Close button should expose pointer pressed feedback only for primary pointer intent."
        onClose={() => {}}
        closeLabel="Pointer-pressed dismiss"
      />
    </AlertShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const closeButton = canvas.getByRole("button", { name: "Pointer-pressed dismiss" });

    fireEvent.mouseDown(closeButton, { button: 2 });
    await expect(closeButton).not.toHaveAttribute("data-pressed");

    fireEvent.mouseDown(closeButton, { button: 0, ctrlKey: true });
    await expect(closeButton).not.toHaveAttribute("data-pressed");

    fireEvent.mouseDown(closeButton, { button: 0 });
    await waitFor(() => {
      expect(closeButton).toHaveAttribute("data-pressed", "true");
    });
    fireEvent.pointerCancel(closeButton);
    await waitFor(() => {
      expect(closeButton).not.toHaveAttribute("data-pressed");
    });

    fireEvent.mouseDown(closeButton, { button: 0 });
    await waitFor(() => {
      expect(closeButton).toHaveAttribute("data-pressed", "true");
    });
    fireEvent.mouseUp(closeButton, { button: 0 });
    await waitFor(() => {
      expect(closeButton).not.toHaveAttribute("data-pressed");
    });
  }
};
