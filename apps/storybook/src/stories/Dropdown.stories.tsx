import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, Popover, type DropdownItem } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";

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
          "Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."
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

export const NonDismissible: Story = {
  args: {
    label: "Blocking actions",
    closeOnEscape: false,
    closeOnOutsidePointer: false,
    items
  },
  render: (args) => (
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <Dropdown {...args} />
      <button type="button">Outside target</button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Blocking actions" });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Blocking actions" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("menu", { name: "Blocking actions" })).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Outside target" }));
    await expect(canvas.getByRole("menu", { name: "Blocking actions" })).toBeInTheDocument();
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
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Escape hook calls:{" "}
        <strong data-testid="dropdown-escape-calls" style={{ color: "var(--aurora-text-primary)" }}>
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
  );
}

export const EscapePreemptedByGlobalHandler: Story = {
  render: () => <EscapePreemptedDropdown />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Preempted Escape Menu" });

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", { name: "Preempted Escape Menu" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("menu", { name: "Preempted Escape Menu" })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-escape-calls")).toHaveTextContent("0");
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
    <div style={{ display: "grid", gap: 8 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Selected action:{" "}
        <strong data-testid="dropdown-selected-action" style={{ color: "var(--aurora-text-primary)" }}>
          {selected}
        </strong>
      </p>
      <Dropdown label="Release Actions" items={telemetryItems} />
    </div>
  );
}

export const SelectionTelemetry: Story = {
  render: () => <SelectionTelemetryDropdown />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Release Actions" });
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("none");

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu")).toBeInTheDocument();
    const duplicateItem = canvas.getByRole("menuitem", { name: "Duplicate" });
    const archiveItem = canvas.getByRole("menuitem", { name: "Archive" });
    await expect(duplicateItem).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await expect(archiveItem).not.toHaveAttribute("aria-keyshortcuts");

    await userEvent.keyboard("{End}");
    const deleteItem = canvas.getByRole("menuitem", { name: "Delete" });
    await expect(deleteItem).toHaveFocus();
    fireEvent.keyDown(deleteItem, { key: "Enter", repeat: true });
    await expect(canvas.getByRole("menu")).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("none");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.queryByRole("menu")).not.toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete");

    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();
  }
};

function CloseReasonTelemetryDropdown() {
  const [lastReason, setLastReason] = React.useState("none");
  const [lastTrace, setLastTrace] = React.useState("none");

  return (
    <div style={{ display: "grid", gap: 8, justifyItems: "start" }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Last close reason:{" "}
        <strong data-testid="dropdown-close-reason" style={{ color: "var(--aurora-text-primary)" }}>
          {lastReason}
        </strong>
      </p>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Last close trace:{" "}
        <strong data-testid="dropdown-close-trace" style={{ color: "var(--aurora-text-primary)" }}>
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
    const menu = canvas.getByRole("menu", { name: "All Disabled Keyboard" });
    const menuItems = canvas.getAllByRole("menuitem");

    menuItems.forEach((item) => {
      expect(item).toHaveAttribute("aria-disabled", "true");
      expect(item).toHaveAttribute("tabindex", "-1");
    });

    fireEvent.keyDown(menu, { key: "ArrowDown" });
    fireEvent.keyDown(menu, { key: "ArrowUp" });
    fireEvent.keyDown(menu, { key: "Home" });
    fireEvent.keyDown(menu, { key: "End" });
    fireEvent.keyDown(menu, { key: "Enter" });

    await expect(canvas.getByRole("menu", { name: "All Disabled Keyboard" })).toBeInTheDocument();
    menuItems.forEach((item) => {
      expect(item).toHaveAttribute("tabindex", "-1");
    });
  }
};

export const OutsideDismissFocusTransfer: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <Dropdown label="Focus Policy" items={items} />
      <button type="button">Next Focus Target</button>
    </div>
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
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <Dropdown label="Escape Focus Policy" items={items} />
    </div>
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
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <Dropdown label="Tab Flow Menu" items={items} />
      <button type="button">After Menu Control</button>
    </div>
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

export const NestedDismissOrder: Story = {
  render: () => (
    <Popover triggerLabel="Open container">
      <div style={{ display: "grid", gap: 8 }}>
        <p style={{ margin: 0 }}>Popover shell</p>
        <Dropdown
          label="Inner actions"
          items={[
            { key: "duplicate", label: "Duplicate" },
            { key: "archive", label: "Archive" }
          ]}
        />
      </div>
    </Popover>
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
