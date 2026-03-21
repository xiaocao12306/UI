import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, FormField, Input } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";
import {
  StoryShowcaseFrame,
  storyEmphasisTextStyle,
  storyMutedTextStyle
} from "./storyShowcase";

const meta = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."
      }
    }
  },
  args: {
    placeholder: "Search release notes..."
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AiPromptStyle: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 560px)" gap={8}>
      <label htmlFor="prompt" style={{ fontWeight: 600 }}>
        Prompt Draft
      </label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8 }}>
        <Input id="prompt" placeholder="Ask Aurora AI to scaffold a new dialog flow..." aria-label="AI prompt" />
        <Button>Send</Button>
      </div>
      <small style={storyEmphasisTextStyle}>
        Tip: switch theme in toolbar to validate input token contrast.
      </small>
    </StoryShowcaseFrame>
  )
};

export const StateMatrix: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 600px)" gap={12}>
      <FormField label="Default" description="Hover and focus to verify border and ring states.">
        <Input placeholder="Type project name..." />
      </FormField>

      <FormField label="Error" error="Please provide a valid email address." required>
        <Input placeholder="name@company.com" defaultValue="invalid-email" />
      </FormField>

      <FormField label="Required inherited from control">
        <Input placeholder="Inherited required field" required />
      </FormField>

      <FormField label="Disabled" description="Disabled fields remain readable with lower emphasis." disabled>
        <Input placeholder="Disabled field" />
      </FormField>

      <FormField label="Read-only" description="Read-only fields are focusable but not editable.">
        <Input value="release/0.1.0" readOnly aria-label="Release branch" />
      </FormField>
    </StoryShowcaseFrame>
  )
};

export const InteractionA11yParity: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 600px)" gap={12}>
      <FormField label="Keyboard interaction" description="Tab focus should show ring; Enter feedback is suppressed during IME composition.">
        <Input defaultValue="release-notes" />
      </FormField>

      <FormField label="Read-only propagated">
        <Input aria-label="Read-only propagated input" readOnly defaultValue="stable" />
      </FormField>

      <FormField label="Disabled interaction guard" disabled>
        <Input aria-label="Disabled interaction guard input" placeholder="Disabled input" />
      </FormField>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const keyboardInput = await canvas.findByRole("textbox", { name: "Keyboard interaction" });
    const label = canvas.getByText("Keyboard interaction").closest("label");

    await userEvent.click(keyboardInput);
    await expect(keyboardInput).toHaveAttribute("data-focused", "true");
    await expect(label).toHaveAttribute("id");
    await expect(keyboardInput.getAttribute("aria-labelledby") ?? "").toContain(label?.id ?? "");

    fireEvent.keyDown(keyboardInput, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    await expect(keyboardInput).not.toHaveAttribute("data-active");

    fireEvent.keyDown(keyboardInput, { key: "Enter", ctrlKey: true });
    await expect(keyboardInput).not.toHaveAttribute("data-active");
    fireEvent.keyDown(keyboardInput, { key: "Enter", metaKey: true });
    await expect(keyboardInput).not.toHaveAttribute("data-active");
    fireEvent.keyDown(keyboardInput, { key: "Enter", altKey: true });
    await expect(keyboardInput).not.toHaveAttribute("data-active");

    fireEvent.keyDown(keyboardInput, { key: "Enter", shiftKey: true });
    fireEvent.keyUp(keyboardInput, { key: "Enter", shiftKey: true });
    await expect(keyboardInput).not.toHaveAttribute("data-active");

    fireEvent.keyDown(keyboardInput, { key: "Enter" });
    fireEvent.keyUp(keyboardInput, { key: "Enter" });
    await expect(keyboardInput).not.toHaveAttribute("data-active");

    const readOnlyInput = canvas.getByRole("textbox", { name: "Read-only propagated input" });
    await expect(readOnlyInput).toHaveAttribute("readonly");
    readOnlyInput.focus();
    fireEvent.keyDown(readOnlyInput, { key: "Enter" });
    fireEvent.keyUp(readOnlyInput, { key: "Enter" });
    await expect(readOnlyInput).not.toHaveAttribute("data-active");

    const disabledInput = canvas.getByRole("textbox", { name: "Disabled interaction guard input" });
    await expect(disabledInput).toBeDisabled();
    await userEvent.hover(disabledInput);
    await expect(disabledInput).not.toHaveAttribute("data-hovered");
  }
};

function FocusIntentReentryDemo() {
  return (
    <StoryShowcaseFrame maxWidth="min(100%, 600px)" gap={10}>
      <p style={storyMutedTextStyle}>
        Click first, then press <kbd>Tab</kbd> to verify keyboard re-entry restores focus-visible
        state on input.
      </p>
      <button type="button">Before input</button>
      <Input aria-label="Focus intent re-entry input" placeholder="Tab back into this field" />
    </StoryShowcaseFrame>
  );
}

export const FocusIntentReentry: Story = {
  render: () => <FocusIntentReentryDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", { name: "Before input" });
    const input = canvas.getByRole("textbox", { name: "Focus intent re-entry input" });

    await userEvent.click(input);
    await expect(input).toHaveAttribute("data-focused", "true");

    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(input).toHaveFocus();
    await expect(input).toHaveAttribute("data-focus-visible", "true");
  }
};

function ValidationFlowDemo() {
  const [value, setValue] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const invalid = touched && value.trim().length === 0;

  return (
    <StoryShowcaseFrame maxWidth="min(100%, 600px)" gap={10}>
      <FormField label="Prompt" error={invalid ? "Prompt is required." : undefined}>
        <Input
          aria-label="Prompt input"
          value={value}
          placeholder="Describe release note summary..."
          onChange={(event) => setValue(event.target.value)}
          onBlur={() => setTouched(true)}
        />
      </FormField>
      <small style={storyEmphasisTextStyle} data-testid="char-count">
        {value.length} chars
      </small>
      <Button disabled={value.trim().length === 0}>Submit Prompt</Button>
    </StoryShowcaseFrame>
  );
}

export const ValidationFlow: Story = {
  render: () => <ValidationFlowDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox", { name: "Prompt input" });

    await userEvent.click(input);
    await userEvent.tab();
    await expect(canvas.getByRole("alert")).toHaveTextContent("Prompt is required.");
    await expect(canvas.getByRole("button", { name: "Submit Prompt" })).toBeDisabled();

    await userEvent.type(input, "Release summary");
    await expect(canvas.queryByRole("alert")).not.toBeInTheDocument();
    await expect(canvas.getByTestId("char-count")).toHaveTextContent("15 chars");
    await expect(canvas.getByRole("button", { name: "Submit Prompt" })).not.toBeDisabled();
  }
};

export const InvalidTokenSemantics: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 560px)" gap={8}>
      <FormField label="Grammar review">
        <Input aria-label="Grammar review input" aria-invalid="grammar" defaultValue="Needs grammar check" />
      </FormField>
      <small style={storyMutedTextStyle}>
        Preserves <code>aria-invalid=&quot;grammar&quot;</code> for assistive-tech integrations that distinguish
        grammar/spelling corrections.
      </small>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox", { name: "Grammar review input" });
    await expect(input).toHaveAttribute("aria-invalid", "grammar");
  }
};

export const BlankAriaLabelFallback: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 560px)" gap={8}>
      <FormField label="Release scope">
        <Input aria-label="   " defaultValue="stable" />
      </FormField>
      <small style={storyMutedTextStyle}>
        Blank <code>aria-label</code> values are ignored so visible label association remains the
        accessible name source.
      </small>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox", { name: "Release scope" });
    await expect(input).not.toHaveAttribute("aria-label");
  }
};
