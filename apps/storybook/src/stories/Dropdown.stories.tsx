import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, type DropdownItem } from "@aurora-ui/react";

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
