import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, CommandPalette, Popover, type CommandItem } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";
import { StoryFullscreenFrame, storyEmphasisTextStyle, storyMutedTextStyle } from "./storyShowcase";

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
        component:
          "CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."
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

function dispatchLegacyImeKeyDown(element: HTMLElement, key: string) {
  const event = new KeyboardEvent("keydown", {
    key,
    bubbles: true,
    cancelable: true
  });
  Object.defineProperty(event, "keyCode", { value: 229 });
  element.dispatchEvent(event);
}

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

function TriggeredKeyboardFirstPalette() {
  const [open, setOpen] = React.useState(false);
  const [selectedAction, setSelectedAction] = React.useState("none");

  return (
    <StoryFullscreenFrame align="start">
      <p style={storyMutedTextStyle}>
        Last keyboard action:{" "}
        <strong data-testid="keyboard-first-selected" style={storyEmphasisTextStyle}>
          {selectedAction}
        </strong>
      </p>
      <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
        Open keyboard palette
      </Button>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        commands={[
          {
            key: "run-e2e",
            label: "Run E2E Smoke",
            keywords: ["run", "test"],
            onSelect: () => setSelectedAction("Run E2E Smoke")
          },
          {
            key: "open-theme",
            label: "Open Theme Pack",
            keywords: ["theme"],
            onSelect: () => setSelectedAction("Open Theme Pack")
          }
        ]}
      />
    </StoryFullscreenFrame>
  );
}

function AiFlowPalette() {
  const [open, setOpen] = React.useState(true);
  const [lastAction, setLastAction] = React.useState("None");

  const actionCommands: CommandItem[] = commands.map((item) => ({
    ...item,
    onSelect: () =>
      setLastAction(
        typeof item.textValue === "string"
          ? item.textValue
          : typeof item.label === "string"
            ? item.label
            : item.key
      )
  }));

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Last AI action: <strong style={storyEmphasisTextStyle}>{lastAction}</strong>
      </p>
      <CommandPalette open={open} onOpenChange={setOpen} commands={actionCommands} />
    </StoryFullscreenFrame>
  );
}

function QueryTelemetryPalette() {
  const [open, setOpen] = React.useState(true);
  const [query, setQuery] = React.useState("");

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Latest query telemetry:{" "}
        <strong data-testid="query-telemetry" style={storyEmphasisTextStyle}>
          {query || "N/A"}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        commands={[
          {
            key: "open-changelog",
            label: "Open Changelog",
            keywords: ["release", "notes"],
            onSelect: () => {}
          }
        ]}
        emptyMessage="No matching AI workflow command."
        onQueryChange={setQuery}
        getResultsStatusText={({ query: nextQuery, visibleCount, enabledCount }) =>
          nextQuery.trim().length === 0
            ? "Command search ready."
            : `${enabledCount}/${visibleCount} actionable AI workflow match${visibleCount === 1 ? "" : "es"} for ${nextQuery}`
        }
      />
    </StoryFullscreenFrame>
  );
}

function LoadingStatePalette() {
  const [open, setOpen] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [selectedCount, setSelectedCount] = React.useState(0);

  return (
    <StoryFullscreenFrame align="start">
      <p style={storyMutedTextStyle}>
        Executed commands while ready:{" "}
        <strong data-testid="loading-selection-count" style={storyEmphasisTextStyle}>
          {selectedCount}
        </strong>
      </p>
      <Button size="sm" variant="outline" onClick={() => setLoading((current) => !current)}>
        {loading ? "Finish loading commands" : "Re-enable loading commands"}
      </Button>
      <Button size="sm" variant="ghost" onClick={() => setOpen(true)}>
        Reopen loading palette
      </Button>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        loading={loading}
        loadingContent="Syncing AI workflow commands..."
        closeOnSelect={false}
        commands={[
          {
            key: "open-theme",
            label: "Open Theme Pack",
            keywords: ["theme"],
            onSelect: () => setSelectedCount((count) => count + 1)
          },
          {
            key: "run-e2e",
            label: "Run E2E Smoke",
            keywords: ["test"],
            onSelect: () => setSelectedCount((count) => count + 1)
          }
        ]}
      />
    </StoryFullscreenFrame>
  );
}

function CloseReasonTelemetryPalette() {
  const [open, setOpen] = React.useState(true);
  const [lastReason, setLastReason] = React.useState("none");
  const [closeTrace, setCloseTrace] = React.useState("N/A");

  const appendTrace = React.useCallback((step: string) => {
    setCloseTrace((current) => (current === "N/A" ? step : `${current} -> ${step}`));
  }, []);

  return (
    <StoryFullscreenFrame align="start">
      <p style={storyMutedTextStyle}>
        Last close reason:{" "}
        <strong data-testid="command-close-reason" style={storyEmphasisTextStyle}>
          {lastReason}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Close trace:{" "}
        <strong data-testid="command-close-trace" style={storyEmphasisTextStyle}>
          {closeTrace}
        </strong>
      </p>
      <Button
        size="sm"
        variant="outline"
        onClick={() => {
          setCloseTrace("N/A");
          setOpen(true);
        }}
      >
        Reopen Palette
      </Button>
      <CommandPalette
        open={open}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen);
          if (!nextOpen) {
            appendTrace("open:false");
          }
        }}
        onCloseReason={(reason) => {
          setLastReason(reason);
          appendTrace(`reason:${reason}`);
        }}
        commands={[
          {
            key: "create-spec",
            label: "Create Spec",
            keywords: ["doc", "plan"],
            onSelect: () => appendTrace("select")
          },
          {
            key: "run-e2e",
            label: "Run E2E Smoke",
            keywords: ["playwright", "test"],
            onSelect: () => appendTrace("select")
          }
        ]}
      />
    </StoryFullscreenFrame>
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

function SingleActionableShortcutHintPalette() {
  const [open, setOpen] = React.useState(true);

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      commands={[
        { key: "open-settings", label: "Open Settings", keywords: ["settings"] },
        { key: "publish-release", label: "Publish Release", keywords: ["release"], disabled: true }
      ]}
    />
  );
}

function DisabledCommandGuardPalette() {
  const [open, setOpen] = React.useState(true);
  const [executedCount, setExecutedCount] = React.useState(0);

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Executed commands:{" "}
        <strong data-testid="executed-count" style={storyEmphasisTextStyle}>
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
    </StoryFullscreenFrame>
  );
}

function MissingSelectHandlerGuardPalette() {
  const [open, setOpen] = React.useState(true);
  const [lastReason, setLastReason] = React.useState("none");

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Last close reason:{" "}
        <strong data-testid="missing-handler-close-reason" style={storyEmphasisTextStyle}>
          {lastReason}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        onCloseReason={(reason) => setLastReason(reason)}
        commands={[
          { key: "run-e2e", label: "Run E2E Smoke", keywords: ["run", "test"] },
          {
            key: "open-changelog",
            label: "Open Changelog",
            keywords: ["release notes"],
            onSelect: () => setLastReason("item-select")
          }
        ]}
        placeholder="Try searching run..."
      />
    </StoryFullscreenFrame>
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

function IconOnlyCommandNamingPalette() {
  const [open, setOpen] = React.useState(true);

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      commands={[
        {
          key: "deploy",
          label: <span aria-hidden="true">🚀</span>,
          ariaLabel: "Deploy Release",
          textValue: "Deploy Release",
          keywords: ["deploy", "release"]
        },
        {
          key: "rollback",
          label: <span aria-hidden="true">↩</span>,
          ariaLabel: "Rollback Release",
          textValue: "Rollback Release",
          keywords: ["rollback", "release"]
        }
      ]}
      placeholder="Try searching rollback..."
    />
  );
}

function IconOnlyCommandAriaLabelSearchPalette() {
  const [open, setOpen] = React.useState(true);

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      commands={[
        {
          key: "deploy",
          label: <span aria-hidden="true">🚀</span>,
          ariaLabel: "Deploy Release"
        },
        {
          key: "rollback",
          label: <span aria-hidden="true">↩</span>,
          ariaLabel: "Rollback Release"
        }
      ]}
      placeholder="Try searching rollback..."
    />
  );
}

function IconOnlyCommandTextValueFallbackPalette() {
  const [open, setOpen] = React.useState(true);

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      commands={[
        {
          key: "deploy",
          label: <span aria-hidden="true">🚀</span>,
          textValue: "Deploy Release",
          keywords: ["deploy", "release"]
        },
        {
          key: "rollback",
          label: <span aria-hidden="true">↩</span>,
          textValue: "Rollback Release",
          keywords: ["rollback", "release"]
        }
      ]}
      placeholder="Try searching rollback..."
    />
  );
}

function IconOnlyCommandLabelledByPalette() {
  const [open, setOpen] = React.useState(true);

  return (
    <StoryFullscreenFrame>
      <h3 id="deploy-command-heading" style={{ margin: 0, fontSize: "var(--aurora-font-size-sm)" }}>
        Deploy Release
      </h3>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        commands={[
          {
            key: "deploy",
            label: <span aria-hidden="true">🚀</span>,
            ariaLabel: "Fallback deploy command",
            ariaLabelledBy: "deploy-command-heading",
            textValue: "Deploy Release",
            keywords: ["deploy", "release"]
          },
          {
            key: "rollback",
            label: <span aria-hidden="true">↩</span>,
            ariaLabel: "Rollback Release",
            textValue: "Rollback Release",
            keywords: ["rollback", "release"]
          }
        ]}
        placeholder="Try searching rollback..."
      />
    </StoryFullscreenFrame>
  );
}

function PersistentSelectionPalette() {
  const [open, setOpen] = React.useState(true);
  const [selectedCount, setSelectedCount] = React.useState(0);

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Batch actions selected:{" "}
        <strong data-testid="selection-count" style={storyEmphasisTextStyle}>
          {selectedCount}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        closeOnSelect={false}
        commands={[
          {
            key: "run-lint",
            label: "Run Lint",
            onSelect: () => setSelectedCount((count) => count + 1)
          },
          {
            key: "run-tests",
            label: "Run Tests",
            onSelect: () => setSelectedCount((count) => count + 1)
          }
        ]}
      />
    </StoryFullscreenFrame>
  );
}

function OptionActivationKeyGuardPalette() {
  const [open, setOpen] = React.useState(true);
  const [selectedCount, setSelectedCount] = React.useState(0);

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Option activation count:{" "}
        <strong data-testid="option-activation-count" style={storyEmphasisTextStyle}>
          {selectedCount}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        closeOnSelect={false}
        commands={[
          {
            key: "run-lint",
            label: "Run Lint",
            onSelect: () => setSelectedCount((count) => count + 1)
          },
          { key: "run-tests", label: "Run Tests" }
        ]}
      />
    </StoryFullscreenFrame>
  );
}

function NonDismissiblePalette() {
  const [open, setOpen] = React.useState(false);

  return (
    <StoryFullscreenFrame align="start">
      <p style={storyMutedTextStyle}>
        Palette stays open until action selection or explicit toggle.
      </p>
      <Button size="sm" variant="outline" onClick={() => setOpen((value) => !value)}>
        {open ? "Close blocking palette" : "Open blocking palette"}
      </Button>
      <button type="button">Outside target</button>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        clearQueryOnEscape={false}
        closeOnEscape={false}
        closeOnOutsidePointer={false}
        commands={[
          { key: "approve", label: "Approve release" },
          { key: "reject", label: "Reject release" }
        ]}
      />
    </StoryFullscreenFrame>
  );
}

function GuardedDismissPalette() {
  const [open, setOpen] = React.useState(false);
  const [guardDismiss, setGuardDismiss] = React.useState(true);

  return (
    <StoryFullscreenFrame align="start">
      <p style={storyMutedTextStyle}>
        Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked.
      </p>
      <p style={storyMutedTextStyle}>
        Guard state:{" "}
        <strong data-testid="guard-state" style={storyEmphasisTextStyle}>
          {guardDismiss ? "enabled" : "disabled"}
        </strong>
      </p>
      <Button size="sm" variant="outline" onClick={() => setOpen((value) => !value)}>
        {open ? "Close guarded palette" : "Open guarded palette"}
      </Button>
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
    </StoryFullscreenFrame>
  );
}

function EscapeClearsQueryFirstPalette() {
  const [open, setOpen] = React.useState(true);
  const [query, setQuery] = React.useState("");

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Query telemetry:{" "}
        <strong data-testid="query-value" style={storyEmphasisTextStyle}>
          {query || "N/A"}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Palette state:{" "}
        <strong data-testid="open-state" style={storyEmphasisTextStyle}>
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
    </StoryFullscreenFrame>
  );
}

function EscapeRepeatGuardPalette() {
  const [open, setOpen] = React.useState(true);
  const [query, setQuery] = React.useState("");
  const [escapeCalls, setEscapeCalls] = React.useState(0);

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Query telemetry:{" "}
        <strong data-testid="escape-repeat-query" style={storyEmphasisTextStyle}>
          {query || "N/A"}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Palette state:{" "}
        <strong data-testid="escape-repeat-open-state" style={storyEmphasisTextStyle}>
          {open ? "open" : "closed"}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Escape hook calls:{" "}
        <strong data-testid="escape-repeat-calls" style={storyEmphasisTextStyle}>
          {escapeCalls}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        onQueryChange={setQuery}
        onEscapeKeyDown={() => setEscapeCalls((count) => count + 1)}
        commands={[
          { key: "publish-release", label: "Publish Release", keywords: ["release"] },
          { key: "open-changelog", label: "Open Changelog", keywords: ["notes"] }
        ]}
      />
    </StoryFullscreenFrame>
  );
}

function EscapeShortcutHintPrecisionPalette() {
  const [open, setOpen] = React.useState(true);
  const [query, setQuery] = React.useState("");

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Query telemetry:{" "}
        <strong data-testid="escape-hint-query" style={storyEmphasisTextStyle}>
          {query || "N/A"}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        closeOnEscape={false}
        clearQueryOnEscape
        onQueryChange={setQuery}
        commands={[
          { key: "publish-release", label: "Publish Release", keywords: ["release"] },
          { key: "open-changelog", label: "Open Changelog", keywords: ["notes"] }
        ]}
      />
    </StoryFullscreenFrame>
  );
}

function RefinedSearchKeepsActiveCommandPalette() {
  const [open, setOpen] = React.useState(true);
  const [lastAction, setLastAction] = React.useState("none");

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Last command:{" "}
        <strong data-testid="last-command" style={storyEmphasisTextStyle}>
          {lastAction}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        closeOnSelect={false}
        commands={[
          { key: "scan-code", label: "Scan Code", keywords: ["scan"] },
          {
            key: "search-docs",
            label: "Search Docs",
            keywords: ["search"],
            onSelect: () => setLastAction("search-docs")
          },
          {
            key: "send-report",
            label: "Send Report",
            keywords: ["send"],
            onSelect: () => setLastAction("send-report")
          }
        ]}
      />
    </StoryFullscreenFrame>
  );
}

function PagedKeyboardNavigationPalette() {
  const [open, setOpen] = React.useState(true);

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      closeOnSelect={false}
      commands={[
        { key: "cmd-1", label: "Command 1" },
        { key: "cmd-2", label: "Command 2" },
        { key: "cmd-3-disabled", label: "Command 3 (disabled)", disabled: true },
        { key: "cmd-4", label: "Command 4" },
        { key: "cmd-5", label: "Command 5" },
        { key: "cmd-6", label: "Command 6" },
        { key: "cmd-7", label: "Command 7" },
        { key: "cmd-8", label: "Command 8" },
        { key: "cmd-9", label: "Command 9" }
      ]}
      placeholder="Use PageUp/PageDown to jump 5 actionable commands"
    />
  );
}

function HomeEndCaretPriorityPalette() {
  const [open, setOpen] = React.useState(true);

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        With caret in the middle of query text, Home/End should keep native cursor behavior and
        avoid overriding active command focus.
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        closeOnSelect={false}
        commands={[
          { key: "release-checklist", label: "Release Checklist", keywords: ["release"] },
          { key: "release-notes", label: "Release Notes", keywords: ["release"] },
          { key: "release-pipeline", label: "Release Pipeline", keywords: ["release"] }
        ]}
      />
    </StoryFullscreenFrame>
  );
}

function ImeCompositionGuardPalette() {
  const [open, setOpen] = React.useState(true);
  const [selectedCount, setSelectedCount] = React.useState(0);
  const [queryValue, setQueryValue] = React.useState("");

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Executed commands:{" "}
        <strong data-testid="ime-selection-count" style={storyEmphasisTextStyle}>
          {selectedCount}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Query value:{" "}
        <strong data-testid="ime-query-value" style={storyEmphasisTextStyle}>
          {queryValue || "N/A"}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Palette state:{" "}
        <strong data-testid="ime-open-state" style={storyEmphasisTextStyle}>
          {open ? "open" : "closed"}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        onQueryChange={setQueryValue}
        closeOnSelect={false}
        commands={[
          { key: "open-settings", label: "Open Settings" },
          {
            key: "deploy",
            label: "Deploy Project",
            onSelect: () => setSelectedCount((value) => value + 1)
          }
        ]}
      />
    </StoryFullscreenFrame>
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
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Escape hook calls:{" "}
        <strong data-testid="command-escape-calls" style={storyEmphasisTextStyle}>
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
    </StoryFullscreenFrame>
  );
}

function ManagedKeysPreemptedPalette() {
  const [open, setOpen] = React.useState(true);
  const [selectedCount, setSelectedCount] = React.useState(0);
  const [queryValue, setQueryValue] = React.useState("");

  React.useEffect(() => {
    const preemptManagedKeys = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === "Escape") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", preemptManagedKeys, true);
    return () => {
      document.removeEventListener("keydown", preemptManagedKeys, true);
    };
  }, []);

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Executed commands:{" "}
        <strong data-testid="command-preempt-selection-count" style={storyEmphasisTextStyle}>
          {selectedCount}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Query value:{" "}
        <strong data-testid="command-preempt-query-value" style={storyEmphasisTextStyle}>
          {queryValue || "N/A"}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        onQueryChange={setQueryValue}
        commands={[
          {
            key: "open-settings",
            label: "Open Settings",
            keywords: ["open"],
            onSelect: () => setSelectedCount((count) => count + 1)
          },
          { key: "run-e2e", label: "Run E2E Smoke", keywords: ["run"] }
        ]}
      />
    </StoryFullscreenFrame>
  );
}

function ManagedKeysPreemptedLocallyPalette() {
  const [open, setOpen] = React.useState(true);
  const [selectedCount, setSelectedCount] = React.useState(0);
  const [queryValue, setQueryValue] = React.useState("");

  return (
    <StoryFullscreenFrame>
      <p style={storyMutedTextStyle}>
        Executed commands:{" "}
        <strong data-testid="command-local-preempt-selection-count" style={storyEmphasisTextStyle}>
          {selectedCount}
        </strong>
      </p>
      <p style={storyMutedTextStyle}>
        Query value:{" "}
        <strong data-testid="command-local-preempt-query-value" style={storyEmphasisTextStyle}>
          {queryValue || "N/A"}
        </strong>
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        onQueryChange={setQueryValue}
        onSearchKeyDown={(event) => {
          if (event.key === "Enter" || event.key === "Escape") {
            event.preventDefault();
          }
        }}
        commands={[
          {
            key: "open-settings",
            label: "Open Settings",
            keywords: ["open"],
            onSelect: () => setSelectedCount((count) => count + 1)
          },
          { key: "run-e2e", label: "Run E2E Smoke", keywords: ["run"] }
        ]}
      />
    </StoryFullscreenFrame>
  );
}

function NestedDismissOrderPalette() {
  const [paletteOpen, setPaletteOpen] = React.useState(false);

  return (
    <StoryFullscreenFrame align="start">
      <Popover triggerLabel="Open container popover" contentLabel="Command container popover">
        <div style={{ display: "grid", gap: 10 }}>
          <p style={{ margin: 0, ...storyMutedTextStyle }}>
            First Escape should close the command palette, second Escape should close the popover.
          </p>
          <Button size="sm" variant="outline" onClick={() => setPaletteOpen(true)}>
            Open nested palette
          </Button>
          <CommandPalette
            open={paletteOpen}
            onOpenChange={setPaletteOpen}
            title="Nested command palette"
            commands={[
              { key: "create-spec", label: "Create Spec", keywords: ["doc", "plan"] },
              { key: "run-e2e", label: "Run E2E Smoke", keywords: ["playwright", "test"] }
            ]}
          />
        </div>
      </Popover>
    </StoryFullscreenFrame>
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

export const OpenFromTriggerKeyboardFirst: Story = {
  render: () => <TriggeredKeyboardFirstPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByTestId("keyboard-first-selected")).toHaveTextContent("none");

    await userEvent.click(canvas.getByRole("button", { name: "Open keyboard palette" }));
    const input = await canvas.findByRole("combobox", { name: "Search commands" });
    await waitFor(() => {
      expect(input).toHaveFocus();
    });

    await userEvent.type(input, "run");
    await expect(canvas.getByRole("option", { name: "Run E2E Smoke" })).toBeInTheDocument();
    await userEvent.keyboard("{Enter}");

    await expect(canvas.queryByRole("dialog", { name: "Command Palette" })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke");
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

export const LoadingState: Story = {
  render: () => <LoadingStatePalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    let input = await canvas.findByRole("combobox", { name: "Search commands" });

    await expect(canvas.getByTestId("loading-selection-count")).toHaveTextContent("0");
    await expect(input).toHaveAttribute("aria-busy", "true");
    await expect(input).toHaveAttribute("aria-expanded", "false");
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Escape");
    await expect(canvas.getByTestId("command-palette-loading-content")).toHaveTextContent(
      "Syncing AI workflow commands..."
    );
    await expect(
      canvas.queryByRole("listbox", { name: "Command results" })
    ).not.toBeInTheDocument();

    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(canvas.getByTestId("loading-selection-count")).toHaveTextContent("0");

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", { name: "Command Palette" })).not.toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Finish loading commands" }));
    await userEvent.click(canvas.getByRole("button", { name: "Reopen loading palette" }));
    input = await canvas.findByRole("combobox", { name: "Search commands" });
    await expect(input).not.toHaveAttribute("aria-busy");
    await expect(input).toHaveAttribute("aria-expanded", "true");
    await expect(input).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"
    );
    await expect(canvas.getByRole("listbox", { name: "Command results" })).toBeInTheDocument();

    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(canvas.getByTestId("loading-selection-count")).toHaveTextContent("1");
  }
};

export const BlankLoadingContentFallback: Story = {
  args: {
    open: true,
    loading: true,
    loadingContent: "   ",
    onOpenChange: () => {},
    commands: [{ key: "open-settings", label: "Open Settings" }]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByTestId("command-palette-loading-content")).toHaveTextContent("Loading commands...");
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading commands...");
  }
};

export const BlankEmptyMessageFallback: Story = {
  args: {
    open: true,
    emptyMessage: "   ",
    onOpenChange: () => {},
    commands: [{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });
    await userEvent.clear(input);
    await userEvent.type(input, "no-match");
    await expect(canvas.getByText("No commands found.")).toBeInTheDocument();
  }
};

export const NumericFeedbackCopySemantics: Story = {
  args: {
    open: true,
    loading: true,
    loadingContent: 0,
    onOpenChange: () => {},
    commands: [{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByTestId("command-palette-loading-content")).toHaveTextContent("0");
    await expect(canvas.getByRole("status")).toHaveTextContent("0");
  }
};

export const CloseReasonTelemetry: Story = {
  render: () => <CloseReasonTelemetryPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;

    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent("N/A");
    await userEvent.click(await canvas.findByRole("option", { name: "Create Spec" }));
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("item-select");
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent(
      "select -> reason:item-select -> open:false"
    );

    await userEvent.click(canvas.getByRole("button", { name: "Reopen Palette" }));
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent(
      "reason:escape-key -> open:false"
    );

    await userEvent.click(canvas.getByRole("button", { name: "Reopen Palette" }));
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    doc.body.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        cancelable: true,
        button: 0,
        ctrlKey: true,
        pointerType: "mouse"
      })
    );
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("escape-key");
    await userEvent.click(doc.body);
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent(
      "reason:outside-pointer -> open:false"
    );

    await userEvent.click(canvas.getByRole("button", { name: "Reopen Palette" }));
    const dialog = canvas.getByRole("dialog", { name: "Command Palette" });
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveAttribute("aria-keyshortcuts", "Escape");
    const closeButton = canvas.getByRole("button", { name: "Close dialog" });
    await expect(closeButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await userEvent.click(closeButton);
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("close-button");
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent(
      "reason:close-button -> open:false"
    );
  }
};

export const CloseButtonFocusIntentReentry: Story = {
  render: () => (
    <CommandPalette
      open
      onOpenChange={() => {}}
      title="Command Palette"
      description="Shift+Tab from search input should restore close-button focus ring fallback."
      commands={[
        { key: "create-spec", label: "Create Spec", keywords: ["doc", "plan"] },
        { key: "run-e2e", label: "Run E2E Smoke", keywords: ["playwright", "test"] }
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });
    const closeButton = await canvas.findByRole("button", { name: "Close dialog" });

    await userEvent.click(input);
    await expect(input).toHaveFocus();

    await userEvent.tab({ shift: true });
    await expect(closeButton).toHaveFocus();
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
    fireEvent.mouseDown(closeButton, { button: 0, ctrlKey: true });
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
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
    await expect(input).toHaveAttribute("aria-expanded", "true");
    await expect(input).toHaveAttribute("aria-controls", initialListboxId!);
    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-0")
    );

    await userEvent.clear(input);
    await userEvent.type(input, "no-match");
    await expect(
      canvas.queryByRole("listbox", { name: "Command results" })
    ).not.toBeInTheDocument();
    await expect(input).toHaveAttribute("aria-expanded", "false");
    await expect(input).not.toHaveAttribute("aria-controls");
    await expect(input).not.toHaveAttribute("aria-activedescendant");

    await userEvent.clear(input);
    const restoredListbox = await canvas.findByRole("listbox", { name: "Command results" });
    await expect(input).toHaveAttribute("aria-expanded", "true");
    await expect(input).toHaveAttribute("aria-controls", restoredListbox.getAttribute("id"));
    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-0")
    );
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
    await expect(
      await canvas.findByRole("listbox", { name: "AI workflow commands" })
    ).toBeInTheDocument();
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
      closeLabel="关闭命令面板"
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
    await expect(canvas.getByRole("button", { name: "关闭命令面板" })).toBeInTheDocument();
  }
};

export const LabelledByPrecedence: Story = {
  render: () => (
    <StoryFullscreenFrame align="start">
      <h3 id="command-palette-heading" style={{ margin: 0 }}>
        AI release command center
      </h3>
      <CommandPalette
        open
        onOpenChange={() => {}}
        title={<span aria-hidden>⌘</span>}
        ariaLabel="Fallback AI command center"
        ariaLabelledBy="command-palette-heading"
        commands={[
          { key: "create-spec", label: "Create Spec", keywords: ["doc", "plan"] },
          { key: "run-e2e", label: "Run E2E Smoke", keywords: ["test"] }
        ]}
      />
    </StoryFullscreenFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const dialog = await canvas.findByRole("dialog", { name: "AI release command center" });
    await expect(dialog).toHaveAttribute("aria-labelledby", "command-palette-heading");
    await expect(dialog).not.toHaveAttribute("aria-label");
  }
};

export const NumericTitleDescriptionSemantics: Story = {
  render: () => (
    <CommandPalette
      open
      onOpenChange={() => {}}
      title={0}
      description={0}
      commands={[
        { key: "create-spec", label: "Create Spec", keywords: ["doc", "plan"] },
        { key: "run-e2e", label: "Run E2E Smoke", keywords: ["test"] }
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const dialog = await canvas.findByRole("dialog", { name: "0" });
    const describedById = dialog.getAttribute("aria-describedby");

    await expect(describedById).toBeTruthy();
    await expect(canvas.getAllByText("0").length).toBeGreaterThanOrEqual(2);
  }
};

export const DisabledOnlyResults: Story = {
  render: () => <DisabledOnlyResultsPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.clear(input);
    await userEvent.type(input, "release");
    await expect(canvas.getByRole("status")).toHaveTextContent(
      'No enabled commands match "release".'
    );
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Escape");
    await expect(canvas.getByTestId("command-palette-disabled-results-message")).toHaveTextContent(
      "Matching commands are currently unavailable."
    );

    for (const key of ["ArrowDown", "ArrowUp", "Home", "End", "PageDown", "PageUp"]) {
      const keyEvent = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true });
      input.dispatchEvent(keyEvent);
      await expect(keyEvent.defaultPrevented).toBe(false);
    }
  }
};

export const SingleActionableShortcutHints: Story = {
  render: () => <SingleActionableShortcutHintPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await expect(input).toHaveAttribute("aria-keyshortcuts", "Enter Escape");
    const activeDescendant = input.getAttribute("aria-activedescendant");
    expect(activeDescendant).toBeTruthy();

    for (const key of ["ArrowDown", "ArrowUp", "Home", "End", "PageDown", "PageUp"]) {
      const keyEvent = new KeyboardEvent("keydown", {
        key,
        bubbles: true,
        cancelable: true
      });
      input.dispatchEvent(keyEvent);
      await expect(keyEvent.defaultPrevented).toBe(false);
    }

    await expect(input.getAttribute("aria-activedescendant")).toBe(activeDescendant);
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
    await expect(disabledOption).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.click(disabledOption);

    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await expect(canvas.getByTestId("executed-count")).toHaveTextContent("0");
  }
};

export const MissingSelectHandlerGuard: Story = {
  render: () => <MissingSelectHandlerGuardPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.clear(input);
    await userEvent.type(input, "run");
    await userEvent.click(canvas.getByRole("option", { name: "Run E2E Smoke" }));

    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await expect(canvas.getByTestId("missing-handler-close-reason")).toHaveTextContent("none");
  }
};

export const OptionMouseDownPolicy: Story = {
  render: () => <OpenPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const option = await canvas.findByRole("option", { name: "Create Spec" });

    const secondaryMouseDown = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      button: 2
    });
    option.dispatchEvent(secondaryMouseDown);
    expect(secondaryMouseDown.defaultPrevented).toBe(false);

    const primaryMouseDown = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      button: 0
    });
    option.dispatchEvent(primaryMouseDown);
    expect(primaryMouseDown.defaultPrevented).toBe(true);
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

export const IconOnlyCommandNaming: Story = {
  render: () => <IconOnlyCommandNamingPalette />,
  play: async ({ canvasElement }) => {
    const root = within(canvasElement.ownerDocument.body);
    const input = await root.findByRole("combobox");
    await expect(root.getByRole("option", { name: "Deploy Release" })).toBeInTheDocument();

    await userEvent.type(input, "rollback");
    await expect(root.getByRole("option", { name: "Rollback Release" })).toBeInTheDocument();
    await expect(root.queryByRole("option", { name: "Deploy Release" })).not.toBeInTheDocument();
  }
};

export const IconOnlyCommandAriaLabelSearchFallback: Story = {
  render: () => <IconOnlyCommandAriaLabelSearchPalette />,
  play: async ({ canvasElement }) => {
    const root = within(canvasElement.ownerDocument.body);
    const input = await root.findByRole("combobox");
    const deployOption = root.getByRole("option", { name: "Deploy Release" });
    await expect(deployOption).toHaveAttribute("aria-label", "Deploy Release");

    await userEvent.type(input, "rollback");
    await expect(root.getByRole("option", { name: "Rollback Release" })).toBeInTheDocument();
    await expect(root.queryByRole("option", { name: "Deploy Release" })).not.toBeInTheDocument();
  }
};

export const IconOnlyCommandTextValueFallback: Story = {
  render: () => <IconOnlyCommandTextValueFallbackPalette />,
  play: async ({ canvasElement }) => {
    const root = within(canvasElement.ownerDocument.body);
    const input = await root.findByRole("combobox");
    const deployOption = root.getByRole("option", { name: "Deploy Release" });
    await expect(deployOption).toHaveAttribute("aria-label", "Deploy Release");

    await userEvent.type(input, "rollback");
    await expect(root.getByRole("option", { name: "Rollback Release" })).toBeInTheDocument();
    await expect(root.queryByRole("option", { name: "Deploy Release" })).not.toBeInTheDocument();
  }
};

export const IconOnlyCommandLabelledByPrecedence: Story = {
  render: () => <IconOnlyCommandLabelledByPalette />,
  play: async ({ canvasElement }) => {
    const root = within(canvasElement.ownerDocument.body);
    const input = await root.findByRole("combobox");
    const deployOption = root.getByRole("option", { name: "Deploy Release" });
    await expect(deployOption).toHaveAttribute("aria-labelledby", "deploy-command-heading");
    await expect(deployOption).not.toHaveAttribute("aria-label");

    await userEvent.type(input, "rollback");
    await expect(root.getByRole("option", { name: "Rollback Release" })).toBeInTheDocument();
    await expect(root.queryByRole("option", { name: "Deploy Release" })).not.toBeInTheDocument();
  }
};

export const PersistentSelection: Story = {
  render: () => <PersistentSelectionPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });
    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-0")
    );

    fireEvent.keyDown(input, { key: "Enter", repeat: false });
    await waitFor(() => {
      expect(canvas.getByTestId("selection-count")).toHaveTextContent("1");
    });

    fireEvent.keyDown(input, { key: "Enter", repeat: true });
    await waitFor(() => {
      expect(canvas.getByTestId("selection-count")).toHaveTextContent("1");
    });
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
  }
};

export const OptionActivationKeyGuard: Story = {
  render: () => <OptionActivationKeyGuardPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const option = await canvas.findByRole("option", { name: "Run Lint" });
    option.focus();
    await expect(option).toHaveAttribute("aria-keyshortcuts", "Enter Space");

    await expect(canvas.getByTestId("option-activation-count")).toHaveTextContent("0");
    await userEvent.keyboard("{Control>}{Enter}{/Control}");
    await userEvent.keyboard("{Meta>}{Space}{/Meta}");
    fireEvent.keyDown(option, { key: "Enter", repeat: true });
    fireEvent.keyDown(option, { key: "Spacebar", altKey: true });
    await expect(canvas.getByTestId("option-activation-count")).toHaveTextContent("0");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();

    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByTestId("option-activation-count")).toHaveTextContent("1");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
  }
};

export const NonDismissible: Story = {
  render: () => <NonDismissiblePalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByRole("button", { name: "Open blocking palette" }));
    const dialog = canvas.getByRole("dialog", { name: "Command Palette" });
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).not.toHaveAttribute("aria-keyshortcuts");
    await expect(canvas.getByRole("combobox", { name: "Search commands" })).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Enter"
    );

    await userEvent.keyboard("{Escape}");
    await expect(dialog).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Outside target" }));
    await expect(dialog).toBeInTheDocument();
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

export const EscapeRepeatGuard: Story = {
  render: () => <EscapeRepeatGuardPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.clear(input);
    await userEvent.type(input, "release");
    await expect(canvas.getByTestId("escape-repeat-query")).toHaveTextContent("release");
    await expect(canvas.getByTestId("escape-repeat-open-state")).toHaveTextContent("open");

    fireEvent.keyDown(input, { key: "Escape", repeat: true });
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await expect(canvas.getByTestId("escape-repeat-query")).toHaveTextContent("release");
    await expect(canvas.getByTestId("escape-repeat-open-state")).toHaveTextContent("open");
    await expect(canvas.getByTestId("escape-repeat-calls")).toHaveTextContent("0");

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await expect(canvas.getByTestId("escape-repeat-query")).toHaveTextContent("N/A");
    await expect(canvas.getByTestId("escape-repeat-open-state")).toHaveTextContent("open");
    await expect(canvas.getByTestId("escape-repeat-calls")).toHaveTextContent("0");

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", { name: "Command Palette" })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("escape-repeat-open-state")).toHaveTextContent("closed");
    await expect(canvas.getByTestId("escape-repeat-calls")).toHaveTextContent("1");
  }
};

export const EscapeShortcutHintPrecision: Story = {
  render: () => <EscapeShortcutHintPrecisionPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await expect(input).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Enter"
    );

    await userEvent.type(input, "release");
    await expect(canvas.getByTestId("escape-hint-query")).toHaveTextContent("release");
    await expect(input).toHaveAttribute(
      "aria-keyshortcuts",
      "Enter Escape"
    );

    fireEvent.keyDown(input, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(input, { key: "Escape", altKey: true });
    fireEvent.keyDown(input, { key: "Escape", metaKey: true });
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await expect(canvas.getByTestId("escape-hint-query")).toHaveTextContent("release");

    fireEvent.keyDown(input, { key: "Escape", shiftKey: true });
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await expect(canvas.getByTestId("escape-hint-query")).toHaveTextContent("N/A");
    await expect(input).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Enter"
    );
  }
};

export const RefinedSearchKeepsActiveCommand: Story = {
  render: () => <RefinedSearchKeepsActiveCommandPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.type(input, "search");
    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-0")
    );

    await userEvent.clear(input);
    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-1")
    );
    const activeId = input.getAttribute("aria-activedescendant");
    expect(activeId).toBeTruthy();
    const activeOption = canvasElement.ownerDocument.getElementById(activeId!);
    await expect(activeOption).toBeInTheDocument();
    await expect(activeOption).toHaveAttribute("role", "option");
    await expect(activeOption).not.toHaveAttribute("aria-disabled", "true");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
  }
};

export const PagedKeyboardNavigation: Story = {
  render: () => <PagedKeyboardNavigationPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });
    await userEvent.click(input);
    await expect(input).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"
    );

    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-0")
    );
    await userEvent.keyboard("{PageDown}");
    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-6")
    );

    fireEvent.keyDown(input, { key: "PageDown", ctrlKey: true });
    fireEvent.keyDown(input, { key: "End", metaKey: true });
    fireEvent.keyDown(input, { key: "ArrowDown", ctrlKey: true });
    fireEvent.keyDown(input, { key: "ArrowUp", metaKey: true });
    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-6")
    );

    await userEvent.keyboard("{PageUp}");
    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-0")
    );
  }
};

export const HomeEndCaretPriority: Story = {
  render: () => <HomeEndCaretPriorityPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });
    await userEvent.type(input, "release");
    await userEvent.keyboard("{ArrowDown}");
    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-1")
    );

    input.setSelectionRange(2, 2);
    fireEvent.keyDown(input, { key: "Home" });
    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-1")
    );

    fireEvent.keyDown(input, { key: "End" });
    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-1")
    );
  }
};

export const ImeCompositionGuard: Story = {
  render: () => <ImeCompositionGuardPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });
    await userEvent.click(input);

    await expect(input).toHaveAttribute(
      "aria-activedescendant",
      expect.stringContaining("option-0")
    );
    await userEvent.type(input, "deploy");
    await expect(canvas.getByTestId("ime-query-value")).toHaveTextContent("deploy");

    fireEvent.keyDown(input, { key: "Escape", isComposing: true, keyCode: 229, which: 229 });
    fireEvent.keyDown(input, { key: "ArrowDown", isComposing: true, keyCode: 229, which: 229 });
    fireEvent.keyDown(input, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    dispatchLegacyImeKeyDown(input, "Escape");
    dispatchLegacyImeKeyDown(input, "ArrowDown");
    dispatchLegacyImeKeyDown(input, "Enter");
    await expect(canvas.getByTestId("ime-selection-count")).toHaveTextContent("0");
    await expect(canvas.getByTestId("ime-query-value")).toHaveTextContent("deploy");
    await expect(canvas.getByTestId("ime-open-state")).toHaveTextContent("open");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();

    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByTestId("ime-selection-count")).toHaveTextContent("1");
  }
};

export const EscapePreemptedByGlobalHandler: Story = {
  render: () => <EscapePreemptedPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);

    await expect(
      await canvas.findByRole("dialog", { name: "Command Palette" })
    ).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
    await expect(canvas.getByTestId("command-escape-calls")).toHaveTextContent("0");
  }
};

export const ManagedKeysPreemptedByGlobalHandler: Story = {
  render: () => <ManagedKeysPreemptedPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.type(input, "open");
    await expect(canvas.getByTestId("command-preempt-query-value")).toHaveTextContent("open");

    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByTestId("command-preempt-selection-count")).toHaveTextContent("0");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("command-preempt-query-value")).toHaveTextContent("open");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
  }
};

export const ManagedKeysPreemptedByLocalHandler: Story = {
  render: () => <ManagedKeysPreemptedLocallyPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", { name: "Search commands" });

    await userEvent.type(input, "open");
    await expect(canvas.getByTestId("command-local-preempt-query-value")).toHaveTextContent("open");

    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByTestId("command-local-preempt-selection-count")).toHaveTextContent("0");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("command-local-preempt-query-value")).toHaveTextContent("open");
    await expect(canvas.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
  }
};

export const NestedDismissOrder: Story = {
  render: () => <NestedDismissOrderPalette />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const outerTrigger = await canvas.findByRole("button", { name: "Open container popover" });

    await userEvent.click(outerTrigger);
    await expect(
      canvas.getByRole("dialog", { name: "Command container popover" })
    ).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Open nested palette" }));
    await expect(
      canvas.getByRole("dialog", { name: "Nested command palette" })
    ).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(
        canvas.queryByRole("dialog", { name: "Nested command palette" })
      ).not.toBeInTheDocument();
    });
    await expect(
      canvas.getByRole("dialog", { name: "Command container popover" })
    ).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(
        canvas.queryByRole("dialog", { name: "Command container popover" })
      ).not.toBeInTheDocument();
    });
    await expect(outerTrigger).toHaveFocus();
  }
};
