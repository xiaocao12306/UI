import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CommandPalette, type CommandItem } from "@aurora-ui/react";

const commands: CommandItem[] = [
  { key: "create-spec", label: "Create Spec", keywords: ["doc", "plan"] },
  { key: "open-theme", label: "Open Theme Pack", keywords: ["theme", "token"] },
  { key: "run-e2e", label: "Run E2E Smoke", keywords: ["playwright", "test"] },
  { key: "generate-readme", label: "Generate README Draft", keywords: ["ai", "docs"] }
];

const meta = {
  title: "AI/CommandPalette",
  component: CommandPalette,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    open: false,
    onOpenChange: () => {},
    commands
  }
} satisfies Meta<typeof CommandPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

function OpenPalette() {
  const [open, setOpen] = React.useState(true);
  return <CommandPalette open={open} onOpenChange={setOpen} commands={commands} />;
}

function AiFlowPalette() {
  const [open, setOpen] = React.useState(true);
  const [lastAction, setLastAction] = React.useState("None");

  const actionCommands: CommandItem[] = commands.map((item) => ({
    ...item,
    onSelect: () => setLastAction(item.label)
  }));

  return (
    <div style={{ minHeight: 420, padding: 20 }}>
      <p style={{ marginTop: 0, color: "var(--aurora-text-secondary)" }}>
        Last AI action: <strong style={{ color: "var(--aurora-text-primary)" }}>{lastAction}</strong>
      </p>
      <CommandPalette open={open} onOpenChange={setOpen} commands={actionCommands} />
    </div>
  );
}

export const SearchCommands: Story = {
  render: () => <OpenPalette />
};

export const AiInteractionFlow: Story = {
  render: () => <AiFlowPalette />
};
