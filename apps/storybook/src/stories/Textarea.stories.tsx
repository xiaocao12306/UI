import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Textarea shares Input token styling while supporting multiline editing, invalid state wiring, and disabled/read-only boundaries."
      }
    }
  },
  args: {
    "aria-label": "Message",
    placeholder: "Write release notes for this version..."
  }
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: ""
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox", { name: "Message" });
    await userEvent.click(textarea);
    await userEvent.keyboard("Delivery-ready");
    await expect(textarea).toHaveValue("Delivery-ready");
  }
};

export const InvalidWithHelper: Story = {
  render: () => (
    <div style={{ width: 360, display: "grid", gap: 8 }}>
      <Textarea
        aria-label="Release summary"
        defaultValue="Needs QA validation."
        invalid
        aria-describedby="release-summary-help release-summary-error"
      />
      <p id="release-summary-help" style={{ margin: 0, color: "var(--aurora-text-primary)", fontSize: 13 }}>
        Include impact, rollback plan, and owner contact.
      </p>
      <p
        id="release-summary-error"
        style={{
          margin: 0,
          color: "color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",
          fontSize: 13
        }}
      >
        Summary cannot be shorter than 30 characters.
      </p>
    </div>
  )
};

export const BlankAriaLabelFallback: Story = {
  render: () => (
    <div style={{ width: 360, display: "grid", gap: 8 }}>
      <label htmlFor="storybook-textarea-blank-label" style={{ color: "var(--aurora-text-primary)", fontSize: 13 }}>
        Release summary label
      </label>
      <Textarea id="storybook-textarea-blank-label" aria-label="   " defaultValue="Release summary draft..." />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox", { name: "Release summary label" });
    await expect(textarea).not.toHaveAttribute("aria-label");
  }
};

export const LabelledByPrecedence: Story = {
  render: () => (
    <div style={{ width: 360, display: "grid", gap: 8 }}>
      <p id="storybook-textarea-heading" style={{ margin: 0, color: "var(--aurora-text-primary)", fontSize: 13 }}>
        Release summary heading
      </p>
      <Textarea
        aria-label="Fallback release summary"
        aria-labelledby="storybook-textarea-heading"
        defaultValue="Heading-driven label should win."
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox", { name: "Release summary heading" });
    await expect(textarea).toHaveAttribute("aria-labelledby", "storybook-textarea-heading");
    await expect(textarea).not.toHaveAttribute("aria-label");
  }
};

export const DisabledAndReadOnly: Story = {
  render: () => (
    <div style={{ width: 360, display: "grid", gap: 12 }}>
      <div style={{ display: "grid", gap: 6 }}>
        <span style={{ color: "var(--aurora-text-primary)", fontSize: 13 }}>Read-only template</span>
        <Textarea
          aria-label="Read-only template"
          readOnly
          defaultValue={"Release owner: Platform Team\nRollback: feature flag"}
        />
      </div>
      <div style={{ display: "grid", gap: 6 }}>
        <span style={{ color: "var(--aurora-text-primary)", fontSize: 13 }}>Disabled while syncing</span>
        <Textarea aria-label="Disabled while syncing" disabled defaultValue="Synchronizing from source of truth..." />
      </div>
    </div>
  )
};
