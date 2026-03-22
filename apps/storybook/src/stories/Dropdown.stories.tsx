import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, Popover, type DropdownItem } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";
import { StoryShowcaseFrame, storyEmphasisTextStyle, storyMutedTextStyle } from "./storyShowcase";

const items: DropdownItem[] = [
  { key: "duplicate", label: "Duplicate" },
  { key: "rename", label: "Rename" },
  { key: "archive", label: "Archive", disabled: true },
  { key: "delete", label: "Delete" }
];

const meta = {
  title: "Overlay/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Dropdown provides keyboard navigation (Arrow/Home/End/PageUp/PageDown), disabled item semantics, and outside/Escape dismissal."
      }
    }
  },
  args: {
    label: "Actions",
    items
  }
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const storyStackStyle: React.CSSProperties = { display: "grid", gap: 12, justifyItems: "start" };
const storyTelemetryStackStyle: React.CSSProperties = { display: "grid", gap: 8, justifyItems: "start" };
const storyParagraphStyle: React.CSSProperties = { margin: 0 };

function dispatchLegacyImeKeyDown(element: HTMLElement, key: string) {
  const event = new KeyboardEvent("keydown", {
    key,
    bubbles: true,
    cancelable: true
  });
  Object.defineProperty(event, "keyCode", { value: 229 });
  element.dispatchEvent(event);
}

export const Default: Story = {};

export const DenseActions: Story = {
  args: {
    label: "Project Menu",
    items: [
      { key: "view", label: "View details" },
      { key: "copy", label: "Copy link" },
      { key: "tag", label: "Add tag" },
      { key: "export", label: "Export JSON" },
      { key: "remove", label: "Remove", disabled: true }
    ]
  }
};

export const IconTrigger: Story = {
  args: {
    label: "⋯",
    triggerAriaLabel: "More actions",
    items
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", { name: "More actions" }));
    await expect(canvas.getByRole("menu", { name: "More actions" })).toBeInTheDocument();
  }
};

export const TriggerLabelledByPrecedence: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <h3 id="dropdown-heading" style={{ margin: 0 }}>
        Release actions menu
      </h3>
      <Dropdown
        label={<span aria-hidden>⋯</span>}
        triggerAriaLabel="Fallback release actions"
        triggerAriaLabelledBy="dropdown-heading"
        items={items}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const trigger = await canvas.findByRole("button", { name: "Release actions menu" });
    await expect(trigger).toHaveAttribute("aria-labelledby", "dropdown-heading");
    await expect(trigger).not.toHaveAttribute("aria-label");

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Release actions menu" })).toBeInTheDocument();
  }
};

export const NonTextTriggerNameFallback: Story = {
  render: () => (
    <StoryShowcaseFrame gap={12}>
      <div style={{ display: "grid", gap: 8 }}>
        <h3 id="dropdown-trigger-name-heading" style={{ margin: 0 }}>
          Release actions menu
        </h3>
        <Dropdown
          label={<span aria-hidden>⋯</span>}
          triggerAriaLabelledBy="dropdown-trigger-name-heading"
          items={items}
        />
      </div>
      <Dropdown
        label={<span aria-hidden>⋯</span>}
        triggerAriaLabel="Quick actions"
        items={items}
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledByTrigger = await canvas.findByRole("button", { name: "Release actions menu" });
    const ariaLabelTrigger = canvas.getByRole("button", { name: "Quick actions" });

    await expect(labelledByTrigger).toHaveAttribute("aria-labelledby", "dropdown-trigger-name-heading");
    await expect(labelledByTrigger).not.toHaveAttribute("aria-label");
    await expect(ariaLabelTrigger).toHaveAttribute("aria-label", "Quick actions");

    await userEvent.click(labelledByTrigger);
    await expect(canvas.getByRole("menu", { name: "Release actions menu" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");

    await userEvent.click(ariaLabelTrigger);
    await expect(canvas.getByRole("menu", { name: "Quick actions" })).toBeInTheDocument();
  }
};

export const NonTextTriggerAutoNameFallback: Story = {
  args: {
    label: <span aria-hidden>⋯</span>,
    items
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Open dropdown menu" });
    await expect(trigger).toHaveAttribute("aria-label", "Open dropdown menu");
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Open dropdown menu" })).toBeInTheDocument();
  }
};

export const IconItemNaming: Story = {
  args: {
    label: "Icon items",
    items: [
      {
        key: "settings",
        label: <span aria-hidden="true">⚙</span>,
        ariaLabel: "Settings",
        textValue: "Settings"
      },
      {
        key: "archive",
        label: <span aria-hidden="true">🗄</span>,
        ariaLabel: "Archive",
        textValue: "Archive"
      }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", { name: "Icon items" }));

    const menu = canvas.getByRole("menu", { name: "Icon items" });
    await expect(canvas.getByRole("menuitem", { name: "Settings" })).toBeInTheDocument();
    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", { name: "Archive" })).toHaveFocus();
    await expect(menu).toBeInTheDocument();
  }
};

export const IconItemTextValueNameFallback: Story = {
  args: {
    label: "TextValue item names",
    items: [
      {
        key: "settings",
        label: <span aria-hidden="true">⚙</span>,
        textValue: "Settings"
      },
      {
        key: "archive",
        label: <span aria-hidden="true">🗄</span>,
        textValue: "Archive"
      }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", { name: "TextValue item names" }));

    const menu = canvas.getByRole("menu", { name: "TextValue item names" });
    await expect(canvas.getByRole("menuitem", { name: "Settings" })).toBeInTheDocument();
    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", { name: "Archive" })).toHaveFocus();
    await expect(menu).toBeInTheDocument();
  }
};

export const IconItemAriaLabelTypeahead: Story = {
  args: {
    label: "AriaLabel typeahead",
    items: [
      {
        key: "settings",
        label: <span aria-hidden="true">⚙</span>,
        ariaLabel: "Settings"
      },
      {
        key: "archive",
        label: <span aria-hidden="true">🗄</span>,
        ariaLabel: "Archive"
      }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", { name: "AriaLabel typeahead" }));

    const menu = canvas.getByRole("menu", { name: "AriaLabel typeahead" });
    await expect(canvas.getByRole("menuitem", { name: "Settings" })).toBeInTheDocument();
    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", { name: "Archive" })).toHaveFocus();
    await expect(menu).toBeInTheDocument();
  }
};

export const IconItemLabelledByPrecedence: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <h3 id="dropdown-item-heading" style={{ margin: 0 }}>
        Settings action
      </h3>
      <Dropdown
        label="Icon items"
        items={[
          {
            key: "settings",
            label: <span aria-hidden="true">⚙</span>,
            ariaLabel: "Fallback settings label",
            ariaLabelledBy: "dropdown-item-heading",
            textValue: "Settings"
          },
          {
            key: "archive",
            label: <span aria-hidden="true">🗄</span>,
            ariaLabel: "Archive",
            textValue: "Archive"
          }
        ]}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByRole("button", { name: "Icon items" }));

    const settingsItem = canvas.getByRole("menuitem", { name: "Settings action" });
    await expect(settingsItem).toHaveAttribute("aria-labelledby", "dropdown-item-heading");
    await expect(settingsItem).not.toHaveAttribute("aria-label");
  }
};

export const NonDismissible: Story = {
  args: {
    label: "Blocking actions",
    closeOnEscape: false,
    closeOnOutsidePointer: false,
    items
  },
  render: (args) => (
    <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
      <Dropdown {...args} />
      <button type="button">Outside target</button>
      </div>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Blocking actions" });
    await userEvent.click(trigger);
    const blockingMenu = canvas.getByRole("menu", { name: "Blocking actions" });
    await expect(blockingMenu).toBeInTheDocument();
    await expect(blockingMenu).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Tab"
    );

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("menu", { name: "Blocking actions" })).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Outside target" }));
    await expect(canvas.getByRole("menu", { name: "Blocking actions" })).toBeInTheDocument();
  }
};

function DismissGuardDropdown() {
  const [escapeCalls, setEscapeCalls] = React.useState(0);
  const [outsideCalls, setOutsideCalls] = React.useState(0);

  return (
    <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
      <p style={storyMutedTextStyle}>
        Escape guard calls:{" "}
        <strong data-testid="dropdown-guard-escape-calls" style={storyEmphasisTextStyle}>
          {escapeCalls}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Outside guard calls:{" "}
        <strong data-testid="dropdown-guard-outside-calls" style={storyEmphasisTextStyle}>
          {outsideCalls}
        </strong>
      </p>
      <Dropdown
        label="Guarded menu"
        onEscapeKeyDown={(event) => {
          event.preventDefault();
          setEscapeCalls((count) => count + 1);
        }}
        onPointerDownOutside={(event) => {
          event.preventDefault();
          setOutsideCalls((count) => count + 1);
        }}
        items={items}
      />
      <button type="button">Guarded outside target</button>
      </div>
    </StoryShowcaseFrame>
  );
}

export const DismissGuardHooks: Story = {
  render: () => <DismissGuardDropdown />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Guarded menu" });
    const outsideTarget = canvas.getByRole("button", { name: "Guarded outside target" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Guarded menu" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("menu", { name: "Guarded menu" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-guard-escape-calls")).toHaveTextContent("1");

    await userEvent.click(outsideTarget);
    await expect(canvas.getByRole("menu", { name: "Guarded menu" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-guard-outside-calls")).toHaveTextContent("1");
  }
};

function EscapePreemptedDropdown() {
  const [open, setOpen] = React.useState(false);
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
    <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
      <p style={storyMutedTextStyle}>
        Escape hook calls:{" "}
        <strong data-testid="dropdown-escape-calls" style={storyEmphasisTextStyle}>
          {escapeCalls}
        </strong>
      </p>
      <Dropdown
        label="Preempted Escape Menu"
        open={open}
        onOpenChange={setOpen}
        onEscapeKeyDown={() => setEscapeCalls((count) => count + 1)}
        items={items}
      />
      </div>
    </StoryShowcaseFrame>
  );
}

export const EscapePreemptedByGlobalHandler: Story = {
  render: () => <EscapePreemptedDropdown />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
    const trigger = await canvas.findByRole("button", { name: "Preempted Escape Menu" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Preempted Escape Menu" })).toBeInTheDocument();

    fireEvent.keyDown(ownerDocument, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(ownerDocument, { key: "Escape", altKey: true });
    fireEvent.keyDown(ownerDocument, { key: "Escape", metaKey: true });
    await expect(canvas.getByRole("menu", { name: "Preempted Escape Menu" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-escape-calls")).toHaveTextContent("0");

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("menu", { name: "Preempted Escape Menu" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-escape-calls")).toHaveTextContent("0");
  }
};

function ManagedKeysPreemptedDropdown() {
  const [selectedCount, setSelectedCount] = React.useState(0);

  return (
    <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <p style={storyMutedTextStyle}>
          Selected actions:{" "}
          <strong data-testid="dropdown-managed-key-select-count" style={storyEmphasisTextStyle}>
            {selectedCount}
          </strong>
        </p>
        <div onKeyDownCapture={(event) => event.preventDefault()}>
          <Dropdown
            label="Preempted Managed Key Menu"
            items={[
              { key: "run", label: "Run", onSelect: () => setSelectedCount((count) => count + 1) },
              { key: "archive", label: "Archive" }
            ]}
          />
        </div>
      </div>
    </StoryShowcaseFrame>
  );
}

export const ManagedKeysPreemptedByGlobalHandler: Story = {
  render: () => <ManagedKeysPreemptedDropdown />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Preempted Managed Key Menu" });

    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    await expect(canvas.queryByRole("menu", { name: "Preempted Managed Key Menu" })).toBeNull();

    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu", { name: "Preempted Managed Key Menu" });
    const runItem = canvas.getByRole("menuitem", { name: "Run" });

    await expect(runItem).toHaveFocus();
    fireEvent.keyDown(menu, { key: "ArrowDown" });
    await expect(runItem).toHaveFocus();

    fireEvent.keyDown(runItem, { key: "Enter" });
    await expect(canvas.getByTestId("dropdown-managed-key-select-count")).toHaveTextContent("0");
    await expect(canvas.getByRole("menu", { name: "Preempted Managed Key Menu" })).toBeInTheDocument();
  }
};

function EscapeRepeatDropdown() {
  const [open, setOpen] = React.useState(false);
  const [escapeCalls, setEscapeCalls] = React.useState(0);
  const [closeReason, setCloseReason] = React.useState("none");

  return (
    <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
      <p style={storyMutedTextStyle}>
        Escape hook calls:{" "}
        <strong data-testid="dropdown-repeat-escape-calls" style={storyEmphasisTextStyle}>
          {escapeCalls}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Last close reason:{" "}
        <strong data-testid="dropdown-repeat-close-reason" style={storyEmphasisTextStyle}>
          {closeReason}
        </strong>
      </p>
      <Dropdown
        label="Repeat Escape Menu"
        open={open}
        onOpenChange={setOpen}
        onEscapeKeyDown={() => setEscapeCalls((count) => count + 1)}
        onCloseReason={setCloseReason}
        items={items}
      />
      </div>
    </StoryShowcaseFrame>
  );
}

export const EscapeRepeatGuard: Story = {
  render: () => <EscapeRepeatDropdown />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
    const trigger = await canvas.findByRole("button", { name: "Repeat Escape Menu" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Repeat Escape Menu" })).toBeInTheDocument();

    fireEvent.keyDown(ownerDocument, { key: "Escape", repeat: true });
    await expect(canvas.getByRole("menu", { name: "Repeat Escape Menu" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("0");
    await expect(canvas.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("none");

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu", { name: "Repeat Escape Menu" })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("1");
    await expect(canvas.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("escape-key");
  }
};

function SelectionTelemetryDropdown() {
  const [selected, setSelected] = React.useState("none");

  const telemetryItems: DropdownItem[] = [
    { key: "duplicate", label: "Duplicate", onSelect: () => setSelected("Duplicate") },
    { key: "rename", label: "Rename", onSelect: () => setSelected("Rename") },
    { key: "archive", label: "Archive", disabled: true },
    { key: "delete", label: "Delete", onSelect: () => setSelected("Delete") }
  ];

  return (
    <StoryShowcaseFrame gap={8}>
      <p style={storyMutedTextStyle}>
        Selected action:{" "}
        <strong data-testid="dropdown-selected-action" style={storyEmphasisTextStyle}>
          {selected}
        </strong>
      </p>
      <Dropdown label="Release Actions" items={telemetryItems} />
    </StoryShowcaseFrame>
  );
}

export const SelectionTelemetry: Story = {
  render: () => <SelectionTelemetryDropdown />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Release Actions" });
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("none");
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp");

    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu");
    await expect(menu).toBeInTheDocument();
    await expect(menu).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Tab Escape"
    );
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    const duplicateItem = canvas.getByRole("menuitem", { name: "Duplicate" });
    const archiveItem = canvas.getByRole("menuitem", { name: "Archive" });
    await expect(duplicateItem).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await expect(archiveItem).not.toHaveAttribute("aria-keyshortcuts");

    await userEvent.keyboard("{End}");
    const deleteItem = canvas.getByRole("menuitem", { name: "Delete" });
    await expect(deleteItem).toHaveFocus();
    fireEvent.keyDown(deleteItem, { key: "Enter", ctrlKey: true });
    await expect(canvas.getByRole("menu")).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("none");
    fireEvent.keyDown(deleteItem, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    dispatchLegacyImeKeyDown(deleteItem, "Enter");
    await expect(canvas.getByRole("menu")).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("none");
    fireEvent.keyDown(deleteItem, { key: "Enter", repeat: true });
    await expect(canvas.getByRole("menu")).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("none");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.queryByRole("menu")).not.toBeInTheDocument();
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp");
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete");

    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu")).not.toBeInTheDocument();

    trigger.focus();
    await userEvent.keyboard("{ArrowUp}");
    await expect(canvas.getByRole("menuitem", { name: "Delete" })).toHaveFocus();
  }
};

function DuplicateKeyRerenderStabilityDropdown() {
  const [prependAction, setPrependAction] = React.useState(false);

  const duplicateItems = React.useMemo<DropdownItem[]>(
    () => [
      { key: "deploy", label: "Deploy now" },
      { key: "deploy", label: "Deploy later" },
      { key: "archive", label: "Archive" }
    ],
    []
  );

  const itemsWithOptionalPrependedAction = prependAction
    ? [{ key: "share", label: "Share release" }, ...duplicateItems]
    : duplicateItems;

  return (
    <StoryShowcaseFrame gap={8}>
      <p style={storyMutedTextStyle}>
        Prepend action:{" "}
        <strong data-testid="dropdown-duplicate-rerender-prepend-state" style={storyEmphasisTextStyle}>
          {prependAction ? "on" : "off"}
        </strong>
      </p>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Dropdown label="Duplicate Stability Menu" items={itemsWithOptionalPrependedAction} />
        <button type="button" onClick={() => setPrependAction((current) => !current)}>
          Toggle prepend action
        </button>
      </div>
    </StoryShowcaseFrame>
  );
}

export const DuplicateKeyRerenderStability: Story = {
  render: () => <DuplicateKeyRerenderStabilityDropdown />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Duplicate Stability Menu" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menuitem", { name: "Deploy now" })).toHaveFocus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("menuitem", { name: "Deploy later" })).toHaveFocus();

    fireEvent.click(canvas.getByRole("button", { name: "Toggle prepend action" }));
    await waitFor(() => {
      expect(canvas.getByTestId("dropdown-duplicate-rerender-prepend-state")).toHaveTextContent("on");
    });
    await waitFor(() => {
      expect(canvas.getByRole("menuitem", { name: "Deploy later" })).toHaveFocus();
    });
  }
};

export const ModifierArrowNavigationGuard: Story = {
  args: {
    label: "Modifier Arrow Guard",
    items
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Modifier Arrow Guard" });

    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu", { name: "Modifier Arrow Guard" });
    const duplicateItem = canvas.getByRole("menuitem", { name: "Duplicate" });
    await expect(duplicateItem).toHaveFocus();

    fireEvent.keyDown(menu, { key: "ArrowDown", ctrlKey: true });
    fireEvent.keyDown(menu, { key: "ArrowUp", metaKey: true });
    fireEvent.keyDown(menu, { key: "ArrowDown", altKey: true });
    await expect(duplicateItem).toHaveFocus();
    await expect(menu).toBeInTheDocument();

    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("menuitem", { name: "Rename" })).toHaveFocus();
  }
};

function TabModifierDismissGuardDropdown() {
  const [tabDismissCount, setTabDismissCount] = React.useState(0);

  return (
    <StoryShowcaseFrame gap={8}>
      <p style={storyMutedTextStyle}>
        Tab dismiss calls:{" "}
        <strong data-testid="dropdown-tab-dismiss-calls" style={storyEmphasisTextStyle}>
          {tabDismissCount}
        </strong>
      </p>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Dropdown
          label="Tab Modifier Guard"
          items={items}
          onCloseReason={(reason) => {
            if (reason === "tab-key") {
              setTabDismissCount((count) => count + 1);
            }
          }}
        />
        <button type="button">Next control</button>
      </div>
    </StoryShowcaseFrame>
  );
}

export const TabModifierDismissGuard: Story = {
  render: () => <TabModifierDismissGuardDropdown />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Tab Modifier Guard" });

    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu", { name: "Tab Modifier Guard" });
    await expect(menu).toBeInTheDocument();

    fireEvent.keyDown(menu, { key: "Tab", ctrlKey: true });
    fireEvent.keyDown(menu, { key: "Tab", altKey: true });
    fireEvent.keyDown(menu, { key: "Tab", metaKey: true });
    await expect(canvas.getByRole("menu", { name: "Tab Modifier Guard" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-tab-dismiss-calls")).toHaveTextContent("0");

    trigger.focus();
    fireEvent.keyDown(trigger, { key: "Tab", ctrlKey: true });
    fireEvent.keyDown(trigger, { key: "Tab", altKey: true });
    fireEvent.keyDown(trigger, { key: "Tab", metaKey: true });
    await expect(canvas.getByRole("menu", { name: "Tab Modifier Guard" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-tab-dismiss-calls")).toHaveTextContent("0");

    fireEvent.keyDown(trigger, { key: "Tab" });
    await waitFor(() => {
      expect(canvas.queryByRole("menu", { name: "Tab Modifier Guard" })).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByRole("button", { name: "Next control" })).toHaveFocus();
    });
    await waitFor(() => {
      expect(canvas.getByTestId("dropdown-tab-dismiss-calls")).toHaveTextContent("1");
    });
  }
};

function KeyboardActivationDedupeDropdown() {
  const [selectionCount, setSelectionCount] = React.useState(0);
  const [closeCount, setCloseCount] = React.useState(0);

  return (
    <StoryShowcaseFrame gap={8}>
      <p style={storyMutedTextStyle}>
        Selection calls:{" "}
        <strong data-testid="dropdown-keyboard-dedupe-selection-count" style={storyEmphasisTextStyle}>
          {selectionCount}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Item-close reasons:{" "}
        <strong data-testid="dropdown-keyboard-dedupe-close-count" style={storyEmphasisTextStyle}>
          {closeCount}
        </strong>
      </p>
      <Dropdown
        open
        label="Keyboard Dedupe Menu"
        onOpenChange={() => {}}
        onCloseReason={(reason) => {
          if (reason === "item-select") {
            setCloseCount((count) => count + 1);
          }
        }}
        items={[
          {
            key: "run",
            label: "Run",
            onSelect: () => {
              setSelectionCount((count) => count + 1);
            }
          },
          { key: "archive", label: "Archive" }
        ]}
      />
    </StoryShowcaseFrame>
  );
}

export const KeyboardActivationDedupe: Story = {
  render: () => <KeyboardActivationDedupeDropdown />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const runItem = await canvas.findByRole("menuitem", { name: "Run" });

    fireEvent.keyDown(runItem, { key: "Enter" });
    await waitFor(() => {
      expect(canvas.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1");
      expect(canvas.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1");
    });

    fireEvent.click(runItem, { detail: 0 });
    await waitFor(() => {
      expect(canvas.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1");
      expect(canvas.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1");
    });
  }
};

function CloseReasonTelemetryDropdown() {
  const [lastReason, setLastReason] = React.useState("none");
  const [lastTrace, setLastTrace] = React.useState("none");

  return (
    <StoryShowcaseFrame gap={8}>
      <div style={storyTelemetryStackStyle}>
      <p style={storyMutedTextStyle}>
        Last close reason:{" "}
        <strong data-testid="dropdown-close-reason" style={storyEmphasisTextStyle}>
          {lastReason}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Last close trace:{" "}
        <strong data-testid="dropdown-close-trace" style={storyEmphasisTextStyle}>
          {lastTrace}
        </strong>
      </p>
      <Dropdown
        label="Telemetry Menu"
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            setLastTrace((current) => `${current} -> open:false`);
          }
        }}
        onCloseReason={(reason) => {
          setLastReason(reason);
          setLastTrace((current) => (current === "select" ? `select -> reason:${reason}` : `reason:${reason}`));
        }}
        items={[
          {
            key: "duplicate",
            label: "Duplicate",
            onSelect: () => {
              setLastTrace("select");
            }
          },
          { key: "rename", label: "Rename" },
          { key: "archive", label: "Archive" }
        ]}
      />
      <button type="button">Outside target</button>
      </div>
    </StoryShowcaseFrame>
  );
}

export const CloseReasonTelemetry: Story = {
  render: () => <CloseReasonTelemetryDropdown />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Telemetry Menu" });
    const outsideTarget = canvas.getByRole("button", { name: "Outside target" });

    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("dropdown-close-trace")).toHaveTextContent("none");

    await userEvent.click(trigger);
    await userEvent.click(canvas.getByRole("menuitem", { name: "Duplicate" }));
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select");
    await expect(canvas.getByTestId("dropdown-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false");

    await userEvent.click(trigger);
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:escape-key -> open:false");

    await userEvent.click(trigger);
    outsideTarget.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        cancelable: true,
        button: 0,
        ctrlKey: true,
        pointerType: "mouse"
      })
    );
    await expect(canvas.getByRole("menu", { name: "Telemetry Menu" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key");
    await userEvent.click(outsideTarget);
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");

    await userEvent.click(trigger);
    await userEvent.click(trigger);
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click");
    await expect(canvas.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:trigger-click -> open:false");

    await userEvent.click(trigger);
    await userEvent.keyboard("{Tab}");
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key");
    await expect(canvas.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:tab-key -> open:false");
    await expect(outsideTarget).toHaveFocus();
  }
};

function ControlledContractDropdown() {
  const [open, setOpen] = React.useState(true);
  const [pendingClose, setPendingClose] = React.useState(false);
  const [closeRequests, setCloseRequests] = React.useState(0);
  const [lastReason, setLastReason] = React.useState("none");

  return (
    <StoryShowcaseFrame gap={8}>
      <div style={storyTelemetryStackStyle}>
      <p style={storyMutedTextStyle}>
        Close requests:{" "}
        <strong data-testid="dropdown-controlled-close-requests" style={storyEmphasisTextStyle}>
          {closeRequests}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Pending parent close:{" "}
        <strong data-testid="dropdown-controlled-pending-close" style={storyEmphasisTextStyle}>
          {pendingClose ? "yes" : "no"}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Last close reason:{" "}
        <strong data-testid="dropdown-controlled-last-reason" style={storyEmphasisTextStyle}>
          {lastReason}
        </strong>
      </p>
      <Dropdown
        label="Controlled Contract Menu"
        open={open}
        onOpenChange={(nextOpen) => {
          if (nextOpen) {
            setOpen(true);
            setPendingClose(false);
            return;
          }

          if (pendingClose) {
            return;
          }

          setCloseRequests((current) => current + 1);
          setPendingClose(true);
        }}
        onCloseReason={setLastReason}
        items={[
          { key: "duplicate", label: "Duplicate" },
          { key: "rename", label: "Rename" },
          { key: "archive", label: "Archive" }
        ]}
      />
      <button
        type="button"
        onClick={() => {
          setOpen(false);
          setPendingClose(false);
        }}
      >
        Apply close request
      </button>
      </div>
    </StoryShowcaseFrame>
  );
}

export const ControlledOpenContract: Story = {
  render: () => <ControlledContractDropdown />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Controlled Contract Menu" });
    const applyCloseButton = canvas.getByRole("button", { name: "Apply close request" });

    await expect(canvas.getByRole("menu", { name: "Controlled Contract Menu" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("0");
    await expect(canvas.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no");

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Controlled Contract Menu" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("trigger-click");
    await expect(canvas.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("1");
    await expect(canvas.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("yes");

    await userEvent.click(applyCloseButton);
    await expect(canvas.queryByRole("menu", { name: "Controlled Contract Menu" })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no");

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Controlled Contract Menu" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("menu", { name: "Controlled Contract Menu" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("2");

    await userEvent.click(applyCloseButton);
    await expect(canvas.queryByRole("menu", { name: "Controlled Contract Menu" })).not.toBeInTheDocument();
  }
};

export const TypeaheadNavigation: Story = {
  args: {
    label: "Quick Actions",
    items: [
      { key: "duplicate", label: "Duplicate" },
      { key: "archive", label: "Archive", disabled: true },
      { key: "add-note", label: "Add note" },
      { key: "assign", label: "Assign" },
      { key: "resume", label: "Resume card", textValue: "Résumé" },
      { key: "rename", label: "Rename" }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Quick Actions" });

    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu");
    await userEvent.keyboard("{PageDown}");
    await expect(canvas.getByRole("menuitem", { name: "Rename" })).toHaveFocus();
    await userEvent.keyboard("{PageUp}");
    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();
    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", { name: "Add note" })).toHaveFocus();
    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", { name: "Assign" })).toHaveFocus();
    await userEvent.keyboard("res");
    await expect(canvas.getByRole("menuitem", { name: "Resume card" })).toHaveFocus();
    await expect(menu).toBeInTheDocument();
  }
};

export const TypeaheadIgnoresImeComposition: Story = {
  args: {
    label: "IME Typeahead Guard",
    items: [
      { key: "duplicate", label: "Duplicate" },
      { key: "archive", label: "Archive" },
      { key: "rename", label: "Rename" }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "IME Typeahead Guard" });

    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu");
    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "a", isComposing: true, keyCode: 229, which: 229 });
    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();

    dispatchLegacyImeKeyDown(menu, "a");
    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();

    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", { name: "Archive" })).toHaveFocus();
  }
};

export const AllItemsDisabledKeyboardNoop: Story = {
  args: {
    label: "All Disabled Keyboard",
    items: [
      { key: "archive", label: "Archive", disabled: true },
      { key: "delete", label: "Delete", disabled: true }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "All Disabled Keyboard" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "All Disabled Keyboard" })).toHaveFocus();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu", { name: "All Disabled Keyboard" })).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();

    await userEvent.keyboard("{ArrowDown}");
    const menu = canvas.getByRole("menu", { name: "All Disabled Keyboard" });
    await expect(menu).toHaveFocus();
    await expect(menu).toHaveAttribute("tabindex", "-1");
    await expect(menu).toHaveAttribute("aria-keyshortcuts", "Tab Escape");
    const menuItems = canvas.getAllByRole("menuitem");

    menuItems.forEach((item) => {
      expect(item).toHaveAttribute("aria-disabled", "true");
      expect(item).toHaveAttribute("tabindex", "-1");
    });

    fireEvent.keyDown(menu, { key: "ArrowDown" });
    fireEvent.keyDown(menu, { key: "ArrowUp" });
    fireEvent.keyDown(menu, { key: "Home" });
    fireEvent.keyDown(menu, { key: "End" });
    fireEvent.keyDown(menu, { key: "PageDown" });
    fireEvent.keyDown(menu, { key: "PageUp" });
    fireEvent.keyDown(menu, { key: "Enter" });

    await expect(canvas.getByRole("menu", { name: "All Disabled Keyboard" })).toBeInTheDocument();
    menuItems.forEach((item) => {
      expect(item).toHaveAttribute("tabindex", "-1");
    });
    const blockedArrowDown = new KeyboardEvent("keydown", {
      key: "ArrowDown",
      bubbles: true,
      cancelable: true
    });
    menu.dispatchEvent(blockedArrowDown);
    await expect(blockedArrowDown.defaultPrevented).toBe(false);

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu", { name: "All Disabled Keyboard" })).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();

    await userEvent.keyboard("{ArrowUp}");
    await expect(canvas.getByRole("menu", { name: "All Disabled Keyboard" })).toHaveFocus();
  }
};

export const SingleActionableShortcutHints: Story = {
  args: {
    label: "Single Actionable Keyboard",
    items: [
      { key: "duplicate", label: "Duplicate" },
      { key: "archive", label: "Archive", disabled: true }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Single Actionable Keyboard" });

    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu", { name: "Single Actionable Keyboard" });
    await expect(menu).toHaveAttribute("aria-keyshortcuts", "Tab Escape");
    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "ArrowDown" });
    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();
    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Enter Space"
    );
    await expect(canvas.getByRole("menuitem", { name: "Archive" })).not.toHaveAttribute("aria-keyshortcuts");
    const unhandledHome = new KeyboardEvent("keydown", {
      key: "Home",
      bubbles: true,
      cancelable: true
    });
    menu.dispatchEvent(unhandledHome);
    await expect(unhandledHome.defaultPrevented).toBe(false);
  }
};

export const OutsideDismissFocusTransfer: Story = {
  render: () => (
    <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <Dropdown label="Focus Policy" items={items} />
        <button type="button">Next Focus Target</button>
      </div>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Focus Policy" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Focus Policy" })).toBeInTheDocument();

    const outsideTarget = canvas.getByRole("button", { name: "Next Focus Target" });
    await userEvent.click(outsideTarget);
    await expect(canvas.queryByRole("menu", { name: "Focus Policy" })).not.toBeInTheDocument();
    await expect(outsideTarget).toHaveFocus();
  }
};

export const EscapeDismissFocusReturn: Story = {
  render: () => (
    <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <Dropdown label="Escape Focus Policy" items={items} />
      </div>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Escape Focus Policy" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Escape Focus Policy" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu", { name: "Escape Focus Policy" })).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();
  }
};

export const TabDismissToNextControl: Story = {
  render: () => (
    <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <Dropdown label="Tab Flow Menu" items={items} />
        <button type="button">After Menu Control</button>
      </div>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Tab Flow Menu" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Tab Flow Menu" })).toBeInTheDocument();
    await userEvent.keyboard("{Tab}");
    await expect(canvas.queryByRole("menu", { name: "Tab Flow Menu" })).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "After Menu Control" })).toHaveFocus();
  }
};

export const ShiftTabDismissToPreviousControl: Story = {
  render: () => (
    <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <button type="button">Before Menu Control</button>
        <Dropdown label="Shift+Tab Flow Menu" items={items} />
      </div>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Shift+Tab Flow Menu" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Shift+Tab Flow Menu" })).toBeInTheDocument();
    await userEvent.keyboard("{Shift>}{Tab}{/Shift}");
    await expect(canvas.queryByRole("menu", { name: "Shift+Tab Flow Menu" })).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Before Menu Control" })).toHaveFocus();
  }
};

export const TabDismissFallbackToTrigger: Story = {
  render: () => (
    <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <Dropdown label="Tab Fallback Menu" items={items} />
      </div>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Tab Fallback Menu" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Tab Fallback Menu" })).toBeInTheDocument();
    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();

    await userEvent.keyboard("{Tab}");
    await expect(canvas.queryByRole("menu", { name: "Tab Fallback Menu" })).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();

    await userEvent.keyboard("{Shift>}{Tab}{/Shift}");
    await expect(canvas.queryByRole("menu", { name: "Tab Fallback Menu" })).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();
  }
};

export const TabDismissSkipsUnfocusableCandidates: Story = {
  render: () => (
    <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <Dropdown label="Tab Skip Menu" items={items} />
        <button type="button" style={{ display: "none" }}>
          Hidden Menu Candidate
        </button>
        <div inert={true}>
          <button type="button">Inert Menu Candidate</button>
        </div>
        <button type="button">Visible Menu Candidate</button>
      </div>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Tab Skip Menu" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Tab Skip Menu" })).toBeInTheDocument();

    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();
    await userEvent.keyboard("{Tab}");
    await waitFor(() => {
      expect(canvas.queryByRole("menu", { name: "Tab Skip Menu" })).not.toBeInTheDocument();
    });
    await expect(canvas.getByRole("button", { name: "Visible Menu Candidate" })).toHaveFocus();
  }
};

export const NestedDismissOrder: Story = {
  render: () => (
    <StoryShowcaseFrame gap={8}>
      <Popover triggerLabel="Open container">
        <div style={storyTelemetryStackStyle}>
          <p style={storyParagraphStyle}>Popover shell</p>
          <Dropdown
            label="Inner actions"
            items={[
              { key: "duplicate", label: "Duplicate" },
              { key: "archive", label: "Archive" }
            ]}
          />
        </div>
      </Popover>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", { name: "Open container" }));
    await userEvent.click(canvas.getByRole("button", { name: "Inner actions" }));
    await expect(canvas.getByRole("menu", { name: "Inner actions" })).toBeInTheDocument();
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu", { name: "Inner actions" })).not.toBeInTheDocument();
    await expect(canvas.getByRole("dialog", { name: "Popover content" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", { name: "Popover content" })).not.toBeInTheDocument();
  }
};

function NestedOutsideDismissOrderDemo() {
  const [trace, setTrace] = React.useState("none");

  const appendTrace = (entry: string) => {
    setTrace((current) => (current === "none" ? entry : `${current} -> ${entry}`));
  };

  return (
    <StoryShowcaseFrame gap={8}>
      <div style={storyTelemetryStackStyle}>
        <Popover
          triggerLabel="Open outside-order container"
          contentLabel="Outside-order popover content"
          onCloseReason={(reason) => appendTrace(`popover:reason:${reason}`)}
          onOpenChange={(nextOpen) => {
            if (!nextOpen) {
              appendTrace("popover:open:false");
            }
          }}
        >
          <div style={storyTelemetryStackStyle}>
            <p style={storyParagraphStyle}>Outside pointer should dismiss inner layer first.</p>
            <Dropdown
              label="Inner outside-order menu"
              onCloseReason={(reason) => appendTrace(`dropdown:reason:${reason}`)}
              onOpenChange={(nextOpen) => {
                if (!nextOpen) {
                  appendTrace("dropdown:open:false");
                }
              }}
              items={[
                { key: "duplicate", label: "Duplicate" },
                { key: "archive", label: "Archive" }
              ]}
            />
          </div>
        </Popover>
        <button type="button">Outside order target</button>
        <p style={storyMutedTextStyle}>
          Nested close trace:{" "}
          <strong data-testid="dropdown-nested-outside-trace" style={storyEmphasisTextStyle}>
            {trace}
          </strong>
        </p>
      </div>
    </StoryShowcaseFrame>
  );
}

export const NestedOutsideDismissOrder: Story = {
  render: () => <NestedOutsideDismissOrderDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", { name: "Open outside-order container" }));
    await userEvent.click(canvas.getByRole("button", { name: "Inner outside-order menu" }));

    await expect(canvas.getByRole("menu", { name: "Inner outside-order menu" })).toBeInTheDocument();
    await expect(canvas.getByRole("dialog", { name: "Outside-order popover content" })).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Outside order target" }));
    await expect(canvas.queryByRole("menu", { name: "Inner outside-order menu" })).not.toBeInTheDocument();
    await expect(canvas.getByRole("dialog", { name: "Outside-order popover content" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent(
      "dropdown:reason:outside-pointer -> dropdown:open:false"
    );

    await userEvent.click(canvas.getByRole("button", { name: "Outside order target" }));
    await expect(canvas.queryByRole("dialog", { name: "Outside-order popover content" })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent(
      "dropdown:reason:outside-pointer -> dropdown:open:false -> popover:reason:outside-pointer -> popover:open:false"
    );
  }
};
