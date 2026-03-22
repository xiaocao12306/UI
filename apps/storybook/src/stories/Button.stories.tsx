import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button, Tag } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";
import { StoryShowcaseFrame, storyMutedTextStyle } from "./storyShowcase";

const meta = {
  title: "Core/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."
      }
    }
  },
  args: {
    children: "Generate Response"
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "solid",
    size: "md"
  }
};

export const VariantMatrix: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 760px)" gap={12}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Tag>Token: button.solid.bg</Tag>
        <Badge tone="success">Theme-aware</Badge>
      </div>
    </StoryShowcaseFrame>
  )
};

export const StateMatrix: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 800px)" gap={16}>
      <div style={{ display: "grid", gap: 8 }}>
        <strong>Default + Disabled</strong>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="solid" disabled>
            Solid Disabled
          </Button>
          <Button variant="outline" disabled>
            Outline Disabled
          </Button>
          <Button variant="ghost" disabled>
            Ghost Disabled
          </Button>
        </div>
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        <strong>Loading + Size</strong>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
          <Button size="sm" loading loadingText="Loading">
            Save
          </Button>
          <Button size="md" loading>
            Generate Response
          </Button>
          <Button size="lg" variant="outline" loading loadingText="Publishing">
            Publish
          </Button>
        </div>
      </div>

      <small style={storyMutedTextStyle}>
        Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to
        validate.
      </small>
    </StoryShowcaseFrame>
  )
};

function KeyboardActivationDemo() {
  const [count, setCount] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  return (
    <StoryShowcaseFrame maxWidth="min(100%, 560px)" gap={12}>
      <p style={storyMutedTextStyle}>
        Activation count: <strong data-testid="activation-count">{count}</strong>
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Button onClick={() => setCount((value) => value + 1)}>Run Action</Button>
        <Button variant="outline" loading={loading} onClick={() => setCount((value) => value + 10)}>
          Background Task
        </Button>
        <Button variant="outline" onClick={() => setLoading((value) => !value)}>
          {loading ? "Enable Background Task" : "Disable Background Task"}
        </Button>
      </div>
    </StoryShowcaseFrame>
  );
}

export const KeyboardActivation: Story = {
  render: () => <KeyboardActivationDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const runAction = await canvas.findByRole("button", { name: "Run Action" });

    runAction.focus();
    fireEvent.keyDown(runAction, { key: "Enter", ctrlKey: true });
    fireEvent.keyUp(runAction, { key: "Enter", ctrlKey: true });
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("0");

    fireEvent.keyDown(runAction, { key: "Enter", metaKey: true });
    fireEvent.keyUp(runAction, { key: "Enter", metaKey: true });
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("0");

    fireEvent.keyDown(runAction, { key: " ", altKey: true });
    fireEvent.keyUp(runAction, { key: " ", altKey: true });
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("0");

    fireEvent.keyDown(runAction, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    await waitFor(() => {
      expect(runAction.style.transform).not.toContain("translateY(1px)");
    });
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("0");

    fireEvent.keyDown(runAction, { key: "Enter", keyCode: 229, which: 229 });
    await waitFor(() => {
      expect(runAction.style.transform).not.toContain("translateY(1px)");
    });
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("0");

    fireEvent.keyDown(runAction, { key: "Space" });
    await waitFor(() => {
      expect(runAction.style.transform).toContain("translateY(1px)");
    });
    fireEvent.keyUp(runAction, { key: "Space" });
    await waitFor(() => {
      expect(runAction.style.transform).not.toContain("translateY(1px)");
    });

    await userEvent.keyboard("{Shift>}{Enter}{/Shift}");
    await userEvent.keyboard(" ");
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("2");

    const loadingButton = canvas.getByRole("button", { name: "Background Task" });
    await expect(loadingButton).toBeDisabled();
    await expect(loadingButton).toHaveAttribute("aria-busy", "true");

    await userEvent.click(canvas.getByRole("button", { name: "Enable Background Task" }));
    await expect(loadingButton).not.toBeDisabled();
    await userEvent.click(loadingButton);
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("12");
  }
};

function FocusIntentReentryDemo() {
  return (
    <StoryShowcaseFrame maxWidth="min(100%, 560px)" gap={10}>
      <p style={storyMutedTextStyle}>
        Click first, then press <kbd>Tab</kbd> to re-enter and verify button focus-visible
        fallback.
      </p>
      <button type="button">Before button</button>
      <Button variant="outline">Focus intent target</Button>
    </StoryShowcaseFrame>
  );
}

export const FocusIntentReentry: Story = {
  render: () => <FocusIntentReentryDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", { name: "Before button" });
    const target = canvas.getByRole("button", { name: "Focus intent target" });

    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(target).toHaveFocus();
    await waitFor(() => {
      expect(target.style.boxShadow).toContain("0 0 0 3px");
    });
    fireEvent.mouseDown(target, { button: 0, ctrlKey: true });
    await waitFor(() => {
      expect(target.style.boxShadow).toContain("0 0 0 3px");
    });
  }
};

export const PrimaryPointerOnly: Story = {
  render: function RenderPrimaryPointerOnly() {
    const [count, setCount] = React.useState(0);

    return (
      <div style={{ display: "grid", gap: 8 }}>
        <Button onClick={() => setCount((value) => value + 1)}>Primary Pointer Only</Button>
        <small>
          Activation count: <span data-testid="primary-pointer-count">{count}</span>
        </small>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", { name: "Primary Pointer Only" });
    const count = canvas.getByTestId("primary-pointer-count");

    fireEvent.mouseDown(button, { button: 2 });
    fireEvent.mouseUp(button, { button: 2 });
    await expect(count).toHaveTextContent("0");

    fireEvent.mouseDown(button);
    await expect(button.style.transform).toContain("translateY(1px)");
    fireEvent.pointerCancel(button);
    await expect(button.style.transform).toContain("translateY(0");
    await expect(count).toHaveTextContent("0");

    fireEvent.pointerDown(button, { pointerType: "touch", button: 0 });
    await expect(button.style.transform).toContain("translateY(1px)");
    fireEvent.pointerUp(button, { pointerType: "touch", button: 0 });
    await expect(button.style.transform).toContain("translateY(0");
    await expect(count).toHaveTextContent("0");

    await userEvent.click(button);
    await expect(count).toHaveTextContent("1");
  }
};

export const IconOnlyAccessibleName: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 560px)" gap={10}>
      <div style={{ display: "flex", gap: 8 }}>
        <Button aria-label="Add release note" variant="outline">
          <span aria-hidden="true">+</span>
        </Button>
        <Button aria-label="Open settings" variant="ghost">
          <span aria-hidden="true">⚙</span>
        </Button>
      </div>
      <small style={storyMutedTextStyle}>
        Icon-only buttons should always provide an accessible name via <code>aria-label</code> or{" "}
        <code>aria-labelledby</code>.
      </small>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", { name: "Add release note" })).toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Open settings" })).toBeInTheDocument();
  }
};
