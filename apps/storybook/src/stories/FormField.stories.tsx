import type { Meta, StoryObj } from "@storybook/react";
import { FormField, Input } from "@aurora-ui/react";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Form/FormField",
  component: FormField,
  tags: ["autodocs"],
  args: {
    label: "Field label",
    children: <Input aria-label="Field input" />
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "FormField composes label, description, and error semantics around any form control while preserving child aria contracts."
      }
    }
  }
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInputControl: Story = {
  render: () => (
    <div style={{ width: 520 }}>
      <FormField label="Deployment window" description="Use local timezone for all rollouts." error="End date must be after start date.">
        <Input aria-describedby="custom-window-help" defaultValue="2026-03-12" />
      </FormField>
      <p id="custom-window-help" style={{ margin: "8px 0 0", color: "var(--aurora-text-primary)", fontSize: 13 }}>
        Custom helper: choose an off-peak deployment slot.
      </p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { name: "Deployment window" });
    const describedBy = input.getAttribute("aria-describedby") ?? "";
    const describedByIds = describedBy.split(" ").filter(Boolean);
    const errorMessage = input.getAttribute("aria-errormessage") ?? "";
    const errorMessageIds = errorMessage.split(" ").filter(Boolean);
    const [alert] = canvas.getAllByRole("alert");

    await expect(input).toHaveAttribute("aria-invalid", "true");
    await expect(describedByIds).toContain("custom-window-help");
    await expect(describedByIds).toContain(alert.id);
    await expect(errorMessageIds).toContain(alert.id);
  }
};

export const InheritedControlSemantics: Story = {
  render: () => (
    <div style={{ width: 520, display: "grid", gap: 14 }}>
      <FormField label="API token">
        <Input required placeholder="Enter CI token" />
      </FormField>

      <FormField label="Read-only channel" description="Managed by organization policy." disabled>
        <Input defaultValue="stable" />
      </FormField>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tokenInput = canvas.getByRole("textbox", { name: /API token/ });
    const disabledInput = canvas.getByRole("textbox", { name: "Read-only channel" });

    await expect(tokenInput).toHaveAttribute("required");
    await expect(tokenInput).toHaveAttribute("aria-required", "true");
    await expect(disabledInput).toBeDisabled();
  }
};

export const RuntimeBooleanConfigNormalization: Story = {
  render: () => (
    <div style={{ width: 520 }}>
      <FormField
        label="Runtime boolean fallback field"
        required={"true" as unknown as boolean}
        disabled={"true" as unknown as boolean}
        description="Invalid runtime booleans should degrade to optional + actionable field semantics."
      >
        <Input />
      </FormField>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { name: "Runtime boolean fallback field" });
    const wrapper = canvas.getByText("Runtime boolean fallback field").closest("div");

    await expect(input).not.toBeDisabled();
    await expect(input).not.toHaveAttribute("required");
    await expect(input).not.toHaveAttribute("aria-required");
    await expect(wrapper).not.toHaveAttribute("aria-disabled");
    await expect(wrapper).not.toHaveAttribute("data-disabled");
    await expect(canvas.queryByText("*")).not.toBeInTheDocument();
  }
};

export const ExternalControlAssociation: Story = {
  render: () => (
    <div style={{ width: 520 }}>
      <FormField label="External field" htmlFor="external-control">
        <>
          <Input id="external-control" defaultValue="owner@aurora.dev" />
        </>
      </FormField>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { name: "External field" });
    const label = canvas.getByText("External field");

    await expect(input).toHaveAttribute("id", "external-control");
    await expect(label).toHaveAttribute("for", "external-control");
  }
};

export const LabelledByPrecedence: Story = {
  render: () => (
    <div style={{ width: 520, display: "grid", gap: 10 }}>
      <p id="custom-formfield-name" style={{ margin: 0 }}>
        Custom field heading
      </p>
      <FormField label="Internal label">
        <Input aria-label="Should be ignored" aria-labelledby="custom-formfield-name" />
      </FormField>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    const label = canvas.getByText("Internal label");
    const labelledBy = input.getAttribute("aria-labelledby") ?? "";

    await expect(input).not.toHaveAttribute("aria-label");
    await expect(labelledBy.split(" ")).toContain("custom-formfield-name");
    await expect(label).toHaveAttribute("id");
    const labelId = label.getAttribute("id");
    if (!labelId) {
      throw new Error("expected generated label id");
    }
    await expect(labelledBy.split(" ")).toContain(labelId);
  }
};

export const NonTextLabelNameFallback: Story = {
  render: () => (
    <div style={{ width: 520, display: "grid", gap: 12 }}>
      <p id="release-scope-heading" style={{ margin: 0, fontWeight: 600 }}>
        Release scope
      </p>
      <FormField
        label={
          <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center" }}>
            ⚙️
          </span>
        }
      >
        <Input aria-labelledby="release-scope-heading" defaultValue="production" />
      </FormField>

      <FormField
        label={
          <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center" }}>
            🧪
          </span>
        }
      >
        <Input aria-label="Experiment channel" defaultValue="beta-canary" />
      </FormField>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledByInput = canvas.getByRole("textbox", { name: "Release scope" });
    const ariaLabelInput = canvas.getByRole("textbox", { name: "Experiment channel" });
    const labelledBy = labelledByInput.getAttribute("aria-labelledby") ?? "";

    await expect(labelledBy.split(" ")).toContain("release-scope-heading");
    await expect(ariaLabelInput).toHaveAttribute("aria-label", "Experiment channel");
  }
};

export const NumericMessageSemantics: Story = {
  render: () => (
    <div style={{ width: 520 }}>
      <FormField label="Retry attempts" description={0} error={0}>
        <Input />
      </FormField>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { name: "Retry attempts" });
    const describedBy = input.getAttribute("aria-describedby") ?? "";
    const errorMessage = input.getAttribute("aria-errormessage");
    const [description, alert] = canvas.getAllByText("0");

    await expect(description.tagName).toBe("SMALL");
    await expect(alert).toHaveAttribute("role", "alert");
    await expect(input).toHaveAttribute("aria-invalid", "true");
    await expect(describedBy.split(" ").filter(Boolean)).toContain(description.id);
    await expect(describedBy.split(" ").filter(Boolean)).toContain(alert.id);
    await expect(errorMessage).toBe(alert.id);
  }
};

export const ErrorMessageInvalidContract: Story = {
  render: () => (
    <div style={{ width: 520, display: "grid", gap: 14 }}>
      <FormField label="Optional email">
        <Input aria-errormessage="optional-error-id" />
      </FormField>

      <FormField label="Invalid email">
        <Input aria-invalid="grammar" aria-errormessage="invalid-error-id" />
      </FormField>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const optionalInput = canvas.getByRole("textbox", { name: "Optional email" });
    const invalidInput = canvas.getByRole("textbox", { name: "Invalid email" });

    await expect(optionalInput).not.toHaveAttribute("aria-errormessage");
    await expect(invalidInput).toHaveAttribute("aria-invalid", "grammar");
    await expect(invalidInput).toHaveAttribute("aria-errormessage", "invalid-error-id");
  }
};
