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
        <Input aria-describedby="custom-window-help" aria-errormessage="custom-window-error" defaultValue="2026-03-12" />
      </FormField>
      <p id="custom-window-help" style={{ margin: "8px 0 0", color: "var(--aurora-text-secondary)", fontSize: 13 }}>
        Custom helper: choose an off-peak deployment slot.
      </p>
      <p id="custom-window-error" style={{ margin: "4px 0 0", color: "var(--aurora-color-red-500)", fontSize: 13 }}>
        Custom error: overlapping with freeze window.
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
    const alert = canvas.getByRole("alert");

    await expect(input).toHaveAttribute("aria-invalid", "true");
    await expect(describedByIds).toContain("custom-window-help");
    await expect(describedByIds).toContain(alert.id);
    await expect(errorMessageIds).toContain("custom-window-error");
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
