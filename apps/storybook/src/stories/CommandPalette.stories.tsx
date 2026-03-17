import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CommandPalette, type CommandItem } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const commands: CommandItem[] = [
  { key: "create-spec", label: "Create Spec", keywords: ["doc", "plan"] },
  { key: "open-theme", label: "Open Theme Pack", keywords: ["theme", "token"] },
  { key: "run-e2e", label: "Run E2E Smoke", keywords: ["playwright", "test"] },
  { key: "generate-readme", label: "Generate README Draft", keywords: ["ai", "docs"] },
  { key: "publish-release", label: "Publish Release", keywords: ["release"], disabled: true }
];

const meta = {
  title: "AI/CommandPalette",
  component: CommandPalette,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."
      }
    }
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
  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      commands={commands}
      placeholder="Search commands (ArrowUp/ArrowDown + Enter)..."
    />
  );
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

function QueryTelemetryPalette() {
  const [open, setOpen] = React.useState(true);
  const [query, setQuery] = React.useState("");

  return (
    <div style={{ minHeight: 420, padding: 20, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Latest query telemetry: <strong style={{ color: "var(--aurora-text-primary)" }}>{query || "N/A"}</strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        commands={[{ key: "open-changelog", label: "Open Changelog", keywords: ["release", "notes"] }]}
        emptyMessage="No matching AI workflow command."
        onQueryChange={setQuery}
        getResultsStatusText={({ query: nextQuery, visibleCount }) =>
          nextQuery.trim().length === 0
            ? "Command search ready."
            : `${visibleCount} AI workflow match${visibleCount === 1 ? "" : "es"} for ${nextQuery}`
        }
      />
    </div>
  );
}

export const SearchCommands: Story = {
  render: () => <OpenPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.clear(input);
    await userEvent.type(input, "publish");

    const disabledOption = canvas.getByRole("option", { name: "Publish Release" });
    await expect(disabledOption).toHaveAttribute("aria-disabled", "true");
    await expect(disabledOption).toHaveAttribute("tabindex", "-1");
  }
};

export const AiInteractionFlow: Story = {
  render: () => <AiFlowPalette />
};

export const QueryTelemetry: Story = {
  render: () => <QueryTelemetryPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.clear(input);
    await userEvent.type(input, "release");
    await expect(canvas.getByText("release")).toBeInTheDocument();

    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(canvas.queryByRole("dialog", { name: "Command Palette" })).not.toBeInTheDocument();
  }
};
