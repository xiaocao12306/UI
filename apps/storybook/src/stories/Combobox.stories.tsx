import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button, Combobox, type ComboboxOption } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";

const frameworkOptions: ComboboxOption[] = [
  { value: "react", label: "React", keywords: ["library", "jsx"] },
  { value: "vue", label: "Vue", keywords: ["framework"] },
  { value: "svelte", label: "Svelte", keywords: ["compiler"] },
  { value: "solid", label: "Solid", keywords: ["signals"], disabled: true }
];
const iconOptionMetadataOptions: ComboboxOption[] = [
  {
    value: "deploy",
    label: (
      <span aria-hidden="true" style={{ fontSize: 16 }}>
        🚀
      </span>
    ),
    ariaLabel: "Deploy release",
    ariaLabelledBy: "combobox-option-heading",
    textValue: "Deploy release",
    keywords: ["release", "ship"]
  },
  {
    value: "rollback",
    label: (
      <span aria-hidden="true" style={{ fontSize: 16 }}>
        ↩️
      </span>
    ),
    ariaLabel: "Rollback release",
    textValue: "Rollback release",
    keywords: ["undo", "revert"]
  }
];
const iconOptionAriaLabelSearchOptions: ComboboxOption[] = [
  {
    value: "deploy",
    label: (
      <span aria-hidden="true" style={{ fontSize: 16 }}>
        🚀
      </span>
    ),
    ariaLabel: "Deploy release"
  },
  {
    value: "rollback",
    label: (
      <span aria-hidden="true" style={{ fontSize: 16 }}>
        ↩️
      </span>
    ),
    ariaLabel: "Rollback release"
  }
];
const iconOptionTextValueNameFallbackOptions: ComboboxOption[] = [
  {
    value: "deploy",
    label: (
      <span aria-hidden="true" style={{ fontSize: 16 }}>
        🚀
      </span>
    ),
    textValue: "Deploy release"
  },
  {
    value: "rollback",
    label: (
      <span aria-hidden="true" style={{ fontSize: 16 }}>
        ↩️
      </span>
    ),
    textValue: "Rollback release"
  }
];
const duplicateValueOptions: ComboboxOption[] = [
  { value: "react", label: "React core" },
  { value: "react", label: "React legacy" },
  { value: "vue", label: "Vue" }
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

export const BlankPlaceholderFallback: Story = {
  args: {
    options: frameworkOptions,
    onValueChange: () => {},
    placeholder: "   "
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("combobox", { name: "Combobox" })).toHaveAttribute(
      "placeholder",
      "Search option..."
    );
  }
};

export const BlankEmptyMessageFallback: Story = {
  args: {
    options: frameworkOptions,
    onValueChange: () => {},
    emptyMessage: "   "
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Combobox" });
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, "no-match");
    await expect(canvas.getByRole("status")).toHaveTextContent("No option found.");
  }
};

export const KeyboardDismissPaths: Story = {
  args: {
    ariaLabel: "Framework dismiss demo"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
    const input = canvas.getByRole("combobox", { name: "Framework dismiss demo" });

    await expect(input).not.toHaveAttribute("aria-controls");
    await userEvent.click(input);
    const listbox = canvas.getByRole("listbox", { name: "Framework dismiss demo options" });
    await expect(input).toHaveAttribute("aria-controls", listbox.id);

    ownerDocument.body.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        cancelable: true,
        button: 0,
        ctrlKey: true,
        pointerType: "mouse"
      })
    );
    await expect(canvas.getByRole("listbox", { name: "Framework dismiss demo options" })).toBeInTheDocument();

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

    fireEvent.keyDown(input, { key: "Enter", repeat: true });
    await expect(canvas.getByRole("listbox", { name: "Framework modifier guard options" })).toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react");

    await userEvent.keyboard("{Meta>}{Escape}{/Meta}");
    await expect(canvas.getByRole("listbox", { name: "Framework modifier guard options" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("listbox", { name: "Framework modifier guard options" })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react");
  }
};

function ManagedKeysPreemptedComboboxDemo() {
  const [value, setValue] = React.useState("react");
  const [guardEnabled, setGuardEnabled] = React.useState(true);
  const [telemetry, setTelemetry] = React.useState("idle");

  return (
    <div style={{ width: 420, display: "grid", gap: 10 }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
        <Button type="button" variant="outline" size="sm" onClick={() => setGuardEnabled((current) => !current)}>
          {guardEnabled ? "Disable local key guard" : "Enable local key guard"}
        </Button>
        <Badge tone="default" data-testid="combobox-local-guard-telemetry">
          {telemetry}
        </Badge>
        <Badge tone="success" data-testid="combobox-local-guard-selected-value">
          {value}
        </Badge>
      </div>
      <Combobox
        options={frameworkOptions}
        value={value}
        onValueChange={setValue}
        ariaLabel="Framework local key guard"
        onInputKeyDown={(event) => {
          if (!guardEnabled) {
            return;
          }
          if (event.key === "ArrowDown" || event.key === "Enter" || event.key === "Escape") {
            event.preventDefault();
            setTelemetry(`blocked:${event.key}`);
          }
        }}
      />
    </div>
  );
}

export const ManagedKeysPreemptedByLocalHandler: Story = {
  render: () => <ManagedKeysPreemptedComboboxDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Framework local key guard" });
    const telemetry = canvas.getByTestId("combobox-local-guard-telemetry");
    const selected = canvas.getByTestId("combobox-local-guard-selected-value");

    await userEvent.click(input);
    await userEvent.clear(input);
    await expect(canvas.getByRole("listbox", { name: "Framework local key guard options" })).toBeInTheDocument();

    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{Enter}");
    await expect(telemetry).toHaveTextContent("blocked:Enter");
    await expect(selected).toHaveTextContent("react");
    await expect(canvas.getByRole("listbox", { name: "Framework local key guard options" })).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Disable local key guard" }));
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{Enter}");
    await expect(selected).toHaveTextContent("vue");
    await expect(canvas.queryByRole("listbox", { name: "Framework local key guard options" })).not.toBeInTheDocument();
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

function HomeEndCaretPriorityComboboxDemo() {
  const [value, setValue] = React.useState("react");

  return (
    <div style={{ width: 400, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 13 }}>
        When caret is inside query text, Home/End should keep native editing behavior instead of
        hijacking option focus.
      </p>
      <Combobox
        options={frameworkOptions}
        value={value}
        onValueChange={setValue}
        ariaLabel="Framework caret priority"
      />
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

export const HomeEndCaretPriority: Story = {
  render: () => <HomeEndCaretPriorityComboboxDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Framework caret priority" }) as HTMLInputElement;

    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, "ve");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));

    input.setSelectionRange(1, 1);
    fireEvent.keyDown(input, { key: "Home" });
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));

    fireEvent.keyDown(input, { key: "End" });
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
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

function LabelledByFallbackComboboxDemo() {
  return (
    <div style={{ width: 400, display: "grid", gap: 10 }}>
      <h3 id="framework-heading" style={{ margin: 0 }}>
        Framework heading
      </h3>
      <Combobox options={frameworkOptions} onValueChange={() => {}} ariaLabelledBy="framework-heading" />
    </div>
  );
}

export const LabelledByNameFallback: Story = {
  render: () => <LabelledByFallbackComboboxDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Framework heading" });
    await expect(input).toHaveAttribute("aria-labelledby", "framework-heading");
    await expect(input).not.toHaveAttribute("aria-label");

    await userEvent.click(input);
    const listbox = canvas.getByRole("listbox", { name: "Framework heading" });
    await expect(listbox).toHaveAttribute("aria-labelledby", "framework-heading");
    await expect(listbox).not.toHaveAttribute("aria-label");
  }
};

function IconOptionLabelledByComboboxDemo() {
  return (
    <div style={{ width: 400, display: "grid", gap: 10 }}>
      <h3 id="combobox-option-heading" style={{ margin: 0 }}>
        Deploy release
      </h3>
      <Combobox
        options={iconOptionMetadataOptions}
        onValueChange={() => {}}
        ariaLabel="Release actions"
      />
    </div>
  );
}

export const IconOptionLabelledByPrecedence: Story = {
  render: () => <IconOptionLabelledByComboboxDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Release actions" });
    await userEvent.click(input);

    const deployOption = canvas.getByRole("option", { name: "Deploy release" });
    await expect(deployOption).toHaveAttribute("aria-labelledby", "combobox-option-heading");
    await expect(deployOption).not.toHaveAttribute("aria-label");
  }
};

export const IconOptionAriaLabelSearchFallback: Story = {
  render: () => (
    <Combobox
      options={iconOptionAriaLabelSearchOptions}
      onValueChange={() => {}}
      ariaLabel="Release search fallback"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Release search fallback" });

    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, "rollback");

    await expect(canvas.getByRole("option", { name: "Rollback release" })).toBeInTheDocument();
    await expect(canvas.queryByRole("option", { name: "Deploy release" })).not.toBeInTheDocument();
  }
};

export const IconOptionTextValueNameFallback: Story = {
  render: () => (
    <Combobox
      options={iconOptionTextValueNameFallbackOptions}
      onValueChange={() => {}}
      ariaLabel="Release textValue fallback"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Release textValue fallback" });

    await userEvent.click(input);
    const deployOption = canvas.getByRole("option", { name: "Deploy release" });
    await expect(deployOption).toHaveAttribute("aria-label", "Deploy release");

    await userEvent.clear(input);
    await userEvent.type(input, "rollback");
    await expect(canvas.getByRole("option", { name: "Rollback release" })).toBeInTheDocument();
    await expect(canvas.queryByRole("option", { name: "Deploy release" })).not.toBeInTheDocument();
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

    const touchPointerDown = new Event("pointerdown", {
      bubbles: true,
      cancelable: true
    });
    Object.defineProperty(touchPointerDown, "button", { configurable: true, value: -1 });
    Object.defineProperty(touchPointerDown, "pointerType", { configurable: true, value: "touch" });
    option.dispatchEvent(touchPointerDown);
    await expect(touchPointerDown.defaultPrevented).toBe(true);
    await expect(input).toHaveFocus();

    await userEvent.click(option);
    await expect(input).toHaveFocus();
  }
};

function DuplicateValueRerenderStabilityComboboxDemo() {
  const [prependAction, setPrependAction] = React.useState(false);
  const options = prependAction ? [{ value: "share", label: "Share release" }, ...duplicateValueOptions] : duplicateValueOptions;

  return (
    <div style={{ width: 420, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 13 }}>
        Press F2 while combobox is open to prepend a new option without resetting active duplicate option.
      </p>
      <Badge tone="default" data-testid="combobox-duplicate-rerender-prepend-state">
        {prependAction ? "on" : "off"}
      </Badge>
      <Combobox
        options={options}
        onValueChange={() => {}}
        ariaLabel="Duplicate value stability"
        onInputKeyDown={(event) => {
          if (event.key !== "F2") {
            return;
          }
          event.preventDefault();
          setPrependAction((current) => !current);
        }}
      />
    </div>
  );
}

function DuplicateValueSelectedSemanticsComboboxDemo() {
  return (
    <div style={{ width: 420, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 13 }}>
        Duplicate values still expose one deterministic `aria-selected` option by anchoring to the
        first enabled occurrence.
      </p>
      <Combobox
        value="react"
        options={[
          { value: "react", label: "React archived", disabled: true },
          { value: "react", label: "React stable" },
          { value: "vue", label: "Vue" }
        ]}
        onValueChange={() => {}}
        ariaLabel="Duplicate value selected semantics"
      />
    </div>
  );
}

export const DuplicateValueRerenderStability: Story = {
  render: () => <DuplicateValueRerenderStabilityComboboxDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Duplicate value stability" });

    await userEvent.click(input);
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    await userEvent.keyboard("{ArrowDown}");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));

    const legacyOption = canvas.getByRole("option", { name: "React legacy" });
    await expect(legacyOption).toHaveAttribute("id", input.getAttribute("aria-activedescendant"));

    await userEvent.keyboard("{F2}");
    await waitFor(() => {
      expect(canvas.getByTestId("combobox-duplicate-rerender-prepend-state")).toHaveTextContent("on");
    });
    await waitFor(() => {
      expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-2"));
    });
    await expect(canvas.getByRole("option", { name: "React legacy" })).toHaveAttribute(
      "id",
      input.getAttribute("aria-activedescendant")
    );
  }
};

export const DuplicateValueSelectedSemantics: Story = {
  render: () => <DuplicateValueSelectedSemanticsComboboxDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Duplicate value selected semantics" });

    await waitFor(() => {
      expect(input).toHaveValue("React stable");
    });
    await userEvent.click(input);

    const selectedOptions = canvas
      .getAllByRole("option")
      .filter((option) => option.getAttribute("aria-selected") === "true");
    await expect(selectedOptions).toHaveLength(1);
    await expect(selectedOptions[0]).toHaveTextContent("React stable");
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

function RuntimeBooleanConfigNormalizationCombobox() {
  const [selectedValue, setSelectedValue] = React.useState("none");
  const [events, setEvents] = React.useState(0);

  return (
    <div style={{ width: 420, display: "grid", gap: 10 }}>
      <Combobox
        ariaLabel="Runtime boolean combobox"
        disabled={"true" as unknown as boolean}
        options={[
          { value: "react", label: "React" },
          { value: "vue", label: "Vue", disabled: "true" as unknown as boolean }
        ]}
        onValueChange={(value) => {
          setSelectedValue(value);
          setEvents((current) => current + 1);
        }}
      />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Badge tone="default">
          Selected: <span data-testid="combobox-runtime-selected">{selectedValue}</span>
        </Badge>
        <Badge tone="default">
          Change events: <span data-testid="combobox-runtime-events">{events}</span>
        </Badge>
      </div>
    </div>
  );
}

export const RuntimeBooleanConfigNormalization: Story = {
  render: () => <RuntimeBooleanConfigNormalizationCombobox />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", { name: "Runtime boolean combobox" });
    const selected = canvas.getByTestId("combobox-runtime-selected");
    const events = canvas.getByTestId("combobox-runtime-events");

    await expect(input).not.toBeDisabled();
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Enter");
    await expect(selected).toHaveTextContent("none");
    await expect(events).toHaveTextContent("0");

    await userEvent.click(input);
    await expect(canvas.getByRole("listbox", { name: "Runtime boolean combobox options" })).toBeInTheDocument();
    await expect(canvas.getByRole("option", { name: "Vue" })).not.toBeDisabled();

    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(selected).toHaveTextContent("vue");
    await expect(events).toHaveTextContent("1");
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
