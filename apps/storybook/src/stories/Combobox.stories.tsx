import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Combobox, type ComboboxOption } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";

const frameworkOptions: ComboboxOption[] = [
  { value: "react", label: "React", keywords: ["library", "jsx"] },
  { value: "vue", label: "Vue", keywords: ["framework"] },
  { value: "svelte", label: "Svelte", keywords: ["compiler"] },
  { value: "solid", label: "Solid", keywords: ["signals"], disabled: true }
];

function dispatchLegacyImeKeyDown(element: HTMLElement, key: string) {
  const event = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true });
  Object.defineProperty(event, "keyCode", { value: 229 });
  element.dispatchEvent(event);
}

const meta = {
  title: "Form/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."
      }
    }
  },
  args: {
    options: frameworkOptions,
    onValueChange: () => {}
  }
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledComboboxDemo() {
  const [value, setValue] = React.useState("react");

  return (
    <div style={{ width: 400, display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Selected framework</span>
        <Badge tone="default">{value}</Badge>
      </div>
      <Combobox id="framework-combobox" options={frameworkOptions} value={value} onValueChange={setValue} ariaLabel="Framework" />
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledComboboxDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Framework" });

    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, "sv");
    await userEvent.keyboard("{ArrowDown}{Enter}");

    await expect(canvas.getByText("svelte")).toBeInTheDocument();
  }
};

export const WithCustomEmptyMessage: Story = {
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
};

export const KeyboardDismissPaths: Story = {
  args: {
    ariaLabel: "Framework dismiss demo"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Framework dismiss demo" });

    await expect(input).not.toHaveAttribute("aria-controls");
    await userEvent.click(input);
    const listbox = canvas.getByRole("listbox", { name: "Framework dismiss demo options" });
    await expect(input).toHaveAttribute("aria-controls", listbox.id);

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("listbox")).not.toBeInTheDocument();
    await expect(input).not.toHaveAttribute("aria-controls");
  }
};

function ModifierGuardComboboxDemo() {
  const [value, setValue] = React.useState("react");

  return (
    <div style={{ width: 400, display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Selected framework</span>
        <Badge tone="default" data-testid="combobox-modifier-selected-value">
          {value}
        </Badge>
      </div>
      <Combobox
        options={frameworkOptions}
        value={value}
        onValueChange={setValue}
        ariaLabel="Framework modifier guard"
      />
    </div>
  );
}

export const ModifierKeyGuard: Story = {
  render: () => <ModifierGuardComboboxDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Framework modifier guard" });

    await userEvent.click(input);
    await expect(canvas.getByRole("listbox", { name: "Framework modifier guard options" })).toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react");

    await userEvent.keyboard("{Control>}{ArrowDown}{/Control}");
    await userEvent.keyboard("{Control>}{Enter}{/Control}");
    await expect(canvas.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react");
    await expect(canvas.getByRole("listbox", { name: "Framework modifier guard options" })).toBeInTheDocument();

    await userEvent.keyboard("{Meta>}{Escape}{/Meta}");
    await expect(canvas.getByRole("listbox", { name: "Framework modifier guard options" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("listbox", { name: "Framework modifier guard options" })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react");
  }
};

function ImeGuardComboboxDemo() {
  const [value, setValue] = React.useState("react");

  return (
    <div style={{ width: 400, display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Selected framework</span>
        <Badge tone="default" data-testid="combobox-ime-selected-value">
          {value}
        </Badge>
      </div>
      <Combobox options={frameworkOptions} value={value} onValueChange={setValue} ariaLabel="Framework IME guard" />
    </div>
  );
}

export const ImeCompositionGuard: Story = {
  render: () => <ImeGuardComboboxDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Framework IME guard" });

    await userEvent.click(input);
    await expect(canvas.getByRole("listbox", { name: "Framework IME guard options" })).toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));

    fireEvent.keyDown(input, { key: "ArrowDown", isComposing: true, keyCode: 229, which: 229 });
    fireEvent.keyDown(input, { key: "End", isComposing: true, keyCode: 229, which: 229 });
    fireEvent.keyDown(input, { key: "Home", isComposing: true, keyCode: 229, which: 229 });
    fireEvent.keyDown(input, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    fireEvent.keyDown(input, { key: "Escape", isComposing: true, keyCode: 229, which: 229 });
    await expect(canvas.getByRole("listbox", { name: "Framework IME guard options" })).toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));

    dispatchLegacyImeKeyDown(input, "ArrowDown");
    dispatchLegacyImeKeyDown(input, "End");
    dispatchLegacyImeKeyDown(input, "Home");
    dispatchLegacyImeKeyDown(input, "Enter");
    dispatchLegacyImeKeyDown(input, "Escape");
    await expect(canvas.getByRole("listbox", { name: "Framework IME guard options" })).toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));

    await userEvent.clear(input);
    await userEvent.type(input, "vu");
    const vueOption = canvas.getByRole("option", { name: "Vue" });
    await expect(vueOption).toBeInTheDocument();
    await userEvent.click(vueOption);
    await expect(canvas.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue");
  }
};

export const BlankAriaLabelFallback: Story = {
  args: {
    ariaLabel: "   "
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Combobox" });

    await userEvent.click(input);
    await expect(canvas.getByRole("listbox", { name: "Combobox options" })).toBeInTheDocument();
  }
};

export const ActivedescendantFocusModel: Story = {
  args: {
    ariaLabel: "Framework focus model"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Framework focus model" });

    await userEvent.click(input);
    const option = canvas.getByRole("option", { name: "React" });
    await expect(option).toHaveAttribute("tabindex", "-1");

    await userEvent.click(option);
    await expect(input).toHaveFocus();
  }
};

export const SearchNormalizationAndShortcutHints: Story = {
  args: {
    ariaLabel: "Release search"
  },
  render: (args) => (
    <Combobox
      {...args}
      options={[
        { value: "cafe-launch", label: "Café Launch", keywords: ["déploiement", "release"] },
        { value: "release-notes", label: "Release Notes", keywords: ["notes"] }
      ]}
      onValueChange={() => {}}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Release search" });

    await userEvent.click(input);
    await expect(input).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End Enter Escape");

    await userEvent.clear(input);
    await userEvent.type(input, "cafe launch");
    await expect(canvas.getByRole("option", { name: "Café Launch" })).toBeInTheDocument();
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Enter Escape");

    await userEvent.clear(input);
    await userEvent.type(input, "no-match");
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Escape");
  }
};

export const DisabledState: Story = {
  args: {
    ariaLabel: "Framework disabled",
    disabled: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Framework disabled" });

    await userEvent.click(input);
    await expect(canvas.queryByRole("listbox")).toBeNull();
  }
};

export const FocusIntentReentry: Story = {
  render: () => (
    <div style={{ width: 400, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 13 }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores combobox
        focus-visible state.
      </p>
      <button type="button">Before combobox</button>
      <Combobox options={frameworkOptions} onValueChange={() => {}} ariaLabel="Focus intent combobox" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", { name: "Before combobox" });
    const input = canvas.getByRole("combobox", { name: "Focus intent combobox" });

    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(input).toHaveFocus();
    await expect(input).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(input, { button: 0, ctrlKey: true });
    await expect(input).toHaveAttribute("data-focus-visible", "true");
  }
};
