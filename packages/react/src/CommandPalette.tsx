import * as React from "react";
import { Dialog } from "./Dialog";
import { Input } from "./Input";

export type CommandItem = {
  key: string;
  label: React.ReactNode;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
};

export type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  commands: CommandItem[];
  placeholder?: string;
  emptyMessage?: React.ReactNode;
  onQueryChange?: (query: string) => void;
  getResultsStatusText?: (params: {
    query: string;
    visibleCount: number;
    enabledCount: number;
    totalCount: number;
  }) => string;
};

export function CommandPalette({
  open,
  onOpenChange,
  commands,
  placeholder = "Search commands...",
  emptyMessage = "No commands found.",
  onQueryChange,
  getResultsStatusText = defaultGetResultsStatusText
}: CommandPaletteProps) {
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listId = React.useId();

  React.useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
      return;
    }

    inputRef.current?.focus();
  }, [open]);

  const normalizedQuery = React.useMemo(() => normalizeSearchText(query.trim()), [query]);

  const filtered = React.useMemo(() => {
    if (!normalizedQuery) {
      return commands;
    }

    return commands.filter((item) => {
      const labelText = getCommandText(item);
      const haystack = [labelText, ...(item.keywords ?? [])].join(" ");
      return normalizeSearchText(haystack).includes(normalizedQuery);
    });
  }, [commands, normalizedQuery]);
  const enabledCount = React.useMemo(
    () => filtered.reduce((count, command) => (command.disabled ? count : count + 1), 0),
    [filtered]
  );

  const resultsStatusText = React.useMemo(
    () =>
      getResultsStatusText({
        query,
        visibleCount: filtered.length,
        enabledCount,
        totalCount: commands.length
      }),
    [commands.length, enabledCount, filtered.length, getResultsStatusText, query]
  );

  const firstEnabledIndex = React.useMemo(() => filtered.findIndex((command) => !command.disabled), [filtered]);
  const lastEnabledIndex = React.useMemo(() => {
    for (let index = filtered.length - 1; index >= 0; index -= 1) {
      if (!filtered[index]?.disabled) {
        return index;
      }
    }

    return -1;
  }, [filtered]);

  React.useEffect(() => {
    if (filtered.length === 0) {
      setActiveIndex(-1);
      return;
    }

    setActiveIndex(firstEnabledIndex);
  }, [filtered, firstEnabledIndex]);

  const selectItem = React.useCallback(
    (index: number) => {
      const item = filtered[index];
      if (!item || item.disabled) {
        return;
      }

      item.onSelect?.();
      onOpenChange(false);
    },
    [filtered, onOpenChange]
  );

  const moveActiveIndex = (direction: 1 | -1) => {
    if (filtered.length === 0) {
      return;
    }

    let index = activeIndex < 0 ? (direction === 1 ? -1 : 0) : activeIndex;
    for (let i = 0; i < filtered.length; i += 1) {
      index = (index + direction + filtered.length) % filtered.length;
      if (!filtered[index]?.disabled) {
        setActiveIndex(index);
        return;
      }
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title="Command Palette"
      description="Quickly search and execute workspace actions."
      size="md"
    >
      <div style={{ display: "grid", gap: 10 }}>
        <Input
          ref={inputRef}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          aria-controls={listId}
          aria-activedescendant={activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined}
          placeholder={placeholder}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            onQueryChange?.(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              moveActiveIndex(1);
              return;
            }

            if (event.key === "ArrowUp") {
              event.preventDefault();
              moveActiveIndex(-1);
              return;
            }

            if (event.key === "Home") {
              event.preventDefault();
              setActiveIndex(firstEnabledIndex);
              return;
            }

            if (event.key === "End") {
              event.preventDefault();
              setActiveIndex(lastEnabledIndex);
              return;
            }

            if (event.key === "Enter" && activeIndex >= 0) {
              event.preventDefault();
              selectItem(activeIndex);
            }
          }}
          aria-label="Search commands"
        />
        <p
          role="status"
          aria-live="polite"
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0
          }}
        >
          {resultsStatusText}
        </p>
        <div
          id={listId}
          role="listbox"
          aria-label="Command results"
          style={{ maxHeight: 280, overflow: "auto", display: "grid", gap: 4 }}
        >
          {filtered.length > 0 ? (
            filtered.map((item, index) => {
              const active = index === activeIndex;
              return (
                <button
                  key={item.key}
                  id={`${listId}-option-${index}`}
                  type="button"
                  role="option"
                  aria-selected={active}
                  aria-disabled={item.disabled || undefined}
                  tabIndex={-1}
                  disabled={item.disabled}
                  onMouseDown={(event) => {
                    // Keep combobox input focus while selecting listbox options.
                    event.preventDefault();
                  }}
                  onMouseEnter={() => {
                    if (!item.disabled) {
                      setActiveIndex(index);
                    }
                  }}
                  onClick={() => selectItem(index)}
                  style={{
                    border: "1px solid var(--aurora-border-default)",
                    background: active
                      ? "color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))"
                      : "var(--aurora-surface-default)",
                    color: item.disabled
                      ? "color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)"
                      : "var(--aurora-text-primary)",
                    borderRadius: 8,
                    height: 36,
                    padding: "0 10px",
                    textAlign: "left",
                    cursor: item.disabled ? "not-allowed" : "pointer"
                  }}
                >
                  {item.label}
                </button>
              );
            })
          ) : (
            <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
              {emptyMessage}
            </p>
          )}
        </div>
      </div>
    </Dialog>
  );
}

function getCommandText(item: CommandItem) {
  if (typeof item.textValue === "string") {
    return item.textValue.trim();
  }

  return typeof item.label === "string" ? item.label.trim() : "";
}

function normalizeSearchText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function defaultGetResultsStatusText({
  query,
  visibleCount,
  enabledCount,
  totalCount
}: {
  query: string;
  visibleCount: number;
  enabledCount: number;
  totalCount: number;
}) {
  const normalized = query.trim();
  if (normalized.length === 0) {
    if (enabledCount !== totalCount) {
      return `${enabledCount} of ${totalCount} command${totalCount === 1 ? "" : "s"} available.`;
    }

    return `${totalCount} command${totalCount === 1 ? "" : "s"} available.`;
  }

  if (visibleCount === 0) {
    return `No commands match "${normalized}".`;
  }

  if (enabledCount === 0) {
    return `No enabled commands match "${normalized}".`;
  }

  if (enabledCount !== visibleCount) {
    return `${enabledCount} of ${visibleCount} matching command${enabledCount === 1 ? "" : "s"} available for "${normalized}".`;
  }

  return `${visibleCount} command${visibleCount === 1 ? "" : "s"} found for "${normalized}".`;
}
