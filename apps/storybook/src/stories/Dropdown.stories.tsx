import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, type DropdownItem } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

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
        Selected action: <strong>{selected}</strong>
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

    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu")).toBeInTheDocument();
    await userEvent.keyboard("{End}");
    await expect(canvas.getByRole("menuitem", { name: "Delete" })).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.queryByRole("menu")).not.toBeInTheDocument();
    await expect(canvas.getByText("Delete")).toBeInTheDocument();

    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();
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
