import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CommandPalette, type CommandItem } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";

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
    onSelect: () =>
      setLastAction(typeof item.textValue === "string" ? item.textValue : typeof item.label === "string" ? item.label : item.key)
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
        Latest query telemetry:{" "}
        <strong data-testid="query-telemetry" style={{ color: "var(--aurora-text-primary)" }}>
          {query || "N/A"}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        commands={[{ key: "open-changelog", label: "Open Changelog", keywords: ["release", "notes"] }]}
        emptyMessage="No matching AI workflow command."
        onQueryChange={setQuery}
        getResultsStatusText={({ query: nextQuery, visibleCount, enabledCount }) =>
          nextQuery.trim().length === 0
            ? "Command search ready."
            : `${enabledCount}/${visibleCount} actionable AI workflow match${visibleCount === 1 ? "" : "es"} for ${nextQuery}`
        }
      />
    </div>
  );
}

function CloseReasonTelemetryPalette() {
  const [open, setOpen] = React.useState(true);
  const [lastReason, setLastReason] = React.useState("none");

  return (
    <div style={{ minHeight: 420, padding: 20, display: "grid", gap: 10, justifyItems: "start" }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Last close reason:{" "}
        <strong data-testid="command-close-reason" style={{ color: "var(--aurora-text-primary)" }}>
          {lastReason}
        </strong>
      </p>
      <button type="button" onClick={() => setOpen(true)}>
        Reopen Palette
      </button>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        onCloseReason={(reason) => setLastReason(reason)}
        commands={[
          { key: "create-spec", label: "Create Spec", keywords: ["doc", "plan"] },
          { key: "run-e2e", label: "Run E2E Smoke", keywords: ["playwright", "test"] }
        ]}
      />
    </div>
  );
}

function DisabledOnlyResultsPalette() {
  const [open, setOpen] = React.useState(true);

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      commands={[
        { key: "publish-release", label: "Publish Release", keywords: ["release"], disabled: true },
        { key: "open-settings", label: "Open Settings", keywords: ["settings"] }
      ]}
      placeholder="Try searching release..."
    />
  );
}

function DisabledCommandGuardPalette() {
  const [open, setOpen] = React.useState(true);
  const [executedCount, setExecutedCount] = React.useState(0);

  return (
    <div style={{ minHeight: 420, padding: 20, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Executed commands:{" "}
        <strong data-testid="executed-count" style={{ color: "var(--aurora-text-primary)" }}>
          {executedCount}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        commands={[
          {
            key: "publish-release",
            label: "Publish Release",
            keywords: ["release"],
            disabled: true,
            onSelect: () => setExecutedCount((count) => count + 1)
          },
          {
            key: "open-changelog",
            label: "Open Changelog",
            keywords: ["release notes"],
            onSelect: () => setExecutedCount((count) => count + 1)
          }
        ]}
        placeholder="Try searching publish..."
      />
    </div>
  );
}

function TextValueAndAccentSearchPalette() {
  const [open, setOpen] = React.useState(true);

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      commands={[
        {
          key: "cafe-settings",
          label: <span>Café Settings</span>,
          textValue: "Cafe Settings",
          keywords: ["preferences"]
        },
        { key: "open-reports", label: "Open Reports" }
      ]}
      placeholder="Try searching cafe..."
    />
  );
}

function PersistentSelectionPalette() {
  const [open, setOpen] = React.useState(true);
  const [selectedCount, setSelectedCount] = React.useState(0);

  return (
    <div style={{ minHeight: 420, padding: 20, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Batch actions selected:{" "}
        <strong data-testid="selection-count" style={{ color: "var(--aurora-text-primary)" }}>
          {selectedCount}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        closeOnSelect={false}
        commands={[
          { key: "run-lint", label: "Run Lint", onSelect: () => setSelectedCount((count) => count + 1) },
          { key: "run-tests", label: "Run Tests", onSelect: () => setSelectedCount((count) => count + 1) }
        ]}
      />
    </div>
  );
}

function NonDismissiblePalette() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ minHeight: 420, padding: 20, display: "grid", gap: 10, justifyItems: "start" }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Palette stays open until action selection or explicit toggle.
      </p>
      <button type="button" onClick={() => setOpen((value) => !value)}>
        {open ? "Close blocking palette" : "Open blocking palette"}
      </button>
      <button type="button">Outside target</button>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        closeOnEscape={false}
        closeOnOutsidePointer={false}
        commands={[
          { key: "approve", label: "Approve release" },
          { key: "reject", label: "Reject release" }
        ]}
      />
    </div>
  );
}

function GuardedDismissPalette() {
  const [open, setOpen] = React.useState(false);
  const [guardDismiss, setGuardDismiss] = React.useState(true);

  return (
    <div style={{ minHeight: 420, padding: 20, display: "grid", gap: 10, justifyItems: "start" }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked.
      </p>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Guard state:{" "}
        <strong data-testid="guard-state" style={{ color: "var(--aurora-text-primary)" }}>
          {guardDismiss ? "enabled" : "disabled"}
        </strong>
      </p>
      <button type="button" onClick={() => setOpen((value) => !value)}>
        {open ? "Close guarded palette" : "Open guarded palette"}
      </button>
      <button type="button">Outside target</button>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        closeOnSelect={false}
        clearQueryOnEscape={false}
        onEscapeKeyDown={(event) => {
          if (guardDismiss) {
            event.preventDefault();
          }
        }}
        onPointerDownOutside={(event) => {
          if (guardDismiss) {
            event.preventDefault();
          }
        }}
        commands={[
          {
            key: "unlock",
            label: "Unlock dismiss guard",
            disabled: !guardDismiss,
            onSelect: () => setGuardDismiss(false)
          },
          { key: "approve", label: "Approve release" },
          { key: "reject", label: "Reject release" }
        ]}
      />
    </div>
  );
}

function EscapeClearsQueryFirstPalette() {
  const [open, setOpen] = React.useState(true);
  const [query, setQuery] = React.useState("");

  return (
    <div style={{ minHeight: 420, padding: 20, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Query telemetry:{" "}
        <strong data-testid="query-value" style={{ color: "var(--aurora-text-primary)" }}>
          {query || "N/A"}
        </strong>
      </p>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Palette state:{" "}
        <strong data-testid="open-state" style={{ color: "var(--aurora-text-primary)" }}>
          {open ? "open" : "closed"}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        onQueryChange={setQuery}
        commands={[
          { key: "publish-release", label: "Publish Release", keywords: ["release"] },
          { key: "open-changelog", label: "Open Changelog", keywords: ["notes"] }
        ]}
      />
    </div>
  );
}

function RefinedSearchKeepsActiveCommandPalette() {
  const [open, setOpen] = React.useState(true);
  const [lastAction, setLastAction] = React.useState("none");

  return (
    <div style={{ minHeight: 420, padding: 20, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Last command:{" "}
        <strong data-testid="last-command" style={{ color: "var(--aurora-text-primary)" }}>
          {lastAction}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        closeOnSelect={false}
        commands={[
          { key: "scan-code", label: "Scan Code", keywords: ["scan"] },
          { key: "search-docs", label: "Search Docs", keywords: ["search"], onSelect: () => setLastAction("search-docs") },
          { key: "send-report", label: "Send Report", keywords: ["send"], onSelect: () => setLastAction("send-report") }
        ]}
      />
    </div>
  );
}

function ImeCompositionGuardPalette() {
  const [open, setOpen] = React.useState(true);
  const [selectedCount, setSelectedCount] = React.useState(0);

  return (
    <div style={{ minHeight: 420, padding: 20, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Executed commands:{" "}
        <strong data-testid="ime-selection-count" style={{ color: "var(--aurora-text-primary)" }}>
          {selectedCount}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        closeOnSelect={false}
        commands={[
          { key: "open-settings", label: "Open Settings" },
          { key: "deploy", label: "Deploy Project", onSelect: () => setSelectedCount((value) => value + 1) }
        ]}
      />
    </div>
  );
}

function EscapePreemptedPalette() {
  const [open, setOpen] = React.useState(true);
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
    <div style={{ minHeight: 420, padding: 20, display: "grid", gap: 10 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Escape hook calls:{" "}
        <strong data-testid="command-escape-calls" style={{ color: "var(--aurora-text-primary)" }}>
          {escapeCalls}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        onEscapeKeyDown={() => setEscapeCalls((count) => count + 1)}
        commands={[
          { key: "open-settings", label: "Open Settings" },
          { key: "run-e2e", label: "Run E2E Smoke" }
        ]}
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
    await expect(canvas.getByTestId("query-telemetry")).toHaveTextContent("N/A");
  }
};

export const CloseReasonTelemetry: Story = {
  render: () => <CloseReasonTelemetryPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;

    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("none");
    await userEvent.click(await canvas.findByRole("option", { name: "Create Spec" }));
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("item-select");

    await userEvent.click(canvas.getByRole("button", { name: "Reopen Palette" }));
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("escape-key");

    await userEvent.click(canvas.getByRole("button", { name: "Reopen Palette" }));
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await userEvent.click(doc.body);
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer");

    await userEvent.click(canvas.getByRole("button", { name: "Reopen Palette" }));
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Close dialog" }));
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("close-button");
  }
};

export const EmptyStateAriaControlsLifecycle: Story = {
  render: () => <QueryTelemetryPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    const initialListbox = canvas.getByRole("listbox", { name: "Command results" });
    const initialListboxId = initialListbox.getAttribute("id");
    await expect(initialListboxId).toBeTruthy();
    await expect(input).toHaveAttribute("aria-controls", initialListboxId!);

    await userEvent.clear(input);
    await userEvent.type(input, "no-match");
    await expect(canvas.queryByRole("listbox", { name: "Command results" })).not.toBeInTheDocument();
    await expect(input).not.toHaveAttribute("aria-controls");

    await userEvent.clear(input);
    const restoredListbox = await canvas.findByRole("listbox", { name: "Command results" });
    await expect(input).toHaveAttribute("aria-controls", restoredListbox.getAttribute("id"));
  }
};

export const LocalizedResultsLabel: Story = {
  render: () => (
    <CommandPalette
      open
      onOpenChange={() => {}}
      resultsAriaLabel="AI workflow commands"
      commands={[
        { key: "create-spec", label: "Create Spec", keywords: ["doc", "plan"] },
        { key: "run-e2e", label: "Run E2E Smoke", keywords: ["playwright", "test"] }
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(await canvas.findByRole("listbox", { name: "AI workflow commands" })).toBeInTheDocument();
  }
};

export const LocalizedDialogCopy: Story = {
  render: () => (
    <CommandPalette
      open
      onOpenChange={() => {}}
      title="命令中心"
      description="快速检索并执行工作区操作。"
      searchAriaLabel="搜索命令"
      resultsAriaLabel="命令结果列表"
      commands={[
        { key: "create-spec", label: "创建规范", keywords: ["文档", "计划"] },
        { key: "run-e2e", label: "运行 E2E", keywords: ["测试"] }
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(await canvas.findByRole("dialog", { name: "命令中心" })).toBeInTheDocument();
    await expect(canvas.getByRole("combobox", { name: "搜索命令" })).toBeInTheDocument();
    await expect(canvas.getByRole("listbox", { name: "命令结果列表" })).toBeInTheDocument();
  }
};

export const DisabledOnlyResults: Story = {
  render: () => <DisabledOnlyResultsPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.clear(input);
    await userEvent.type(input, "release");
    await expect(canvas.getByRole("status")).toHaveTextContent('No enabled commands match "release".');
  }
};

export const DisabledCommandGuard: Story = {
  render: () => <DisabledCommandGuardPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.clear(input);
    await userEvent.type(input, "publish");

    const disabledOption = canvas.getByRole("option", { name: "Publish Release" });
    await expect(disabledOption).toHaveAttribute("aria-disabled", "true");
    await userEvent.click(disabledOption);

    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await expect(canvas.getByTestId("executed-count")).toHaveTextContent("0");
  }
};

export const TextValueAndAccentSearch: Story = {
  render: () => <TextValueAndAccentSearchPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.clear(input);
    await userEvent.type(input, "cafe");
    await expect(canvas.getByRole("option", { name: "Café Settings" })).toBeInTheDocument();
    await expect(canvas.queryByRole("option", { name: "Open Reports" })).not.toBeInTheDocument();
  }
};

export const PersistentSelection: Story = {
  render: () => <PersistentSelectionPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const runLint = await canvas.findByRole("option", { name: "Run Lint" });

    await userEvent.click(runLint);
    await expect(canvas.getByTestId("selection-count")).toHaveTextContent("1");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
  }
};

export const NonDismissible: Story = {
  render: () => <NonDismissiblePalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByRole("button", { name: "Open blocking palette" }));
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Outside target" }));
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
  }
};

export const GuardedDismissEvents: Story = {
  render: () => <GuardedDismissPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await userEvent.click(await canvas.findByRole("button", { name: "Open guarded palette" }));
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();

    fireEvent.pointerDown(doc.body);
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();

    const input = canvas.getByRole("combobox", { name: "Search commands" });
    await userEvent.clear(input);
    await userEvent.type(input, "unlock");
    await userEvent.click(canvas.getByRole("option", { name: "Unlock dismiss guard" }));
    await expect(canvas.getByTestId("guard-state")).toHaveTextContent("disabled");

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", { name: "Command Palette" })).not.toBeInTheDocument();
  }
};

export const EscapeClearsQueryFirst: Story = {
  render: () => <EscapeClearsQueryFirstPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.clear(input);
    await userEvent.type(input, "release");
    await expect(canvas.getByTestId("query-value")).toHaveTextContent("release");

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await expect(canvas.getByTestId("query-value")).toHaveTextContent("N/A");
    await expect(canvas.getByTestId("open-state")).toHaveTextContent("open");

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", { name: "Command Palette" })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("open-state")).toHaveTextContent("closed");
  }
};

export const RefinedSearchKeepsActiveCommand: Story = {
  render: () => <RefinedSearchKeepsActiveCommandPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.type(input, "search");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));

    await userEvent.clear(input);
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
  }
};

export const ImeCompositionGuard: Story = {
  render: () => <ImeCompositionGuardPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });
    await userEvent.click(input);

    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));

    fireEvent.keyDown(input, { key: "ArrowDown", isComposing: true, keyCode: 229, which: 229 });
    fireEvent.keyDown(input, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    await expect(canvas.getByTestId("ime-selection-count")).toHaveTextContent("0");

    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByTestId("ime-selection-count")).toHaveTextContent("1");
  }
};

export const EscapePreemptedByGlobalHandler: Story = {
  render: () => <EscapePreemptedPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);

    await expect(await canvas.findByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await expect(canvas.getByTestId("command-escape-calls")).toHaveTextContent("0");
  }
};
