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
  title?: React.ReactNode;
  description?: React.ReactNode;
  searchAriaLabel?: string;
  resultsAriaLabel?: string;
  closeOnSelect?: boolean;
  clearQueryOnEscape?: boolean;
  closeOnEscape?: boolean;
  closeOnOutsidePointer?: boolean;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  placeholder?: string;
  emptyMessage?: React.ReactNode;
  onQueryChange?: (query: string) => void;
  onCloseReason?: (reason: CommandPaletteCloseReason) => void;
  getResultsStatusText?: (params: {
    query: string;
    visibleCount: number;
    enabledCount: number;
    totalCount: number;
  }) => string;
};

export type CommandPaletteCloseReason = "close-button" | "item-select" | "escape-key" | "outside-pointer";

export function CommandPalette({
  open,
  onOpenChange,
  commands,
  title = "Command Palette",
  description = "Quickly search and execute workspace actions.",
  searchAriaLabel = "Search commands",
  resultsAriaLabel = "Command results",
  closeOnSelect = true,
  clearQueryOnEscape = true,
  closeOnEscape = true,
  closeOnOutsidePointer = true,
  onEscapeKeyDown,
  onPointerDownOutside,
  placeholder = "Search commands...",
  emptyMessage = "No commands found.",
  onQueryChange,
  onCloseReason,
  getResultsStatusText = defaultGetResultsStatusText
}: CommandPaletteProps) {
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const activeCommandKeyRef = React.useRef<string | null>(null);
  const closeReasonRef = React.useRef<CommandPaletteCloseReason | null>(null);
  const wasOpenRef = React.useRef(open);
  const listId = React.useId();
  const statusId = React.useId();

  const markCloseReason = React.useCallback(
    (reason: CommandPaletteCloseReason) => {
      closeReasonRef.current = reason;
      onCloseReason?.(reason);
    },
    [onCloseReason]
  );

  const closeWithReason = React.useCallback(
    (reason: CommandPaletteCloseReason) => {
      markCloseReason(reason);
      onOpenChange(false);
      closeReasonRef.current = null;
    },
    [markCloseReason, onOpenChange]
  );

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      if (!nextOpen && open && closeReasonRef.current === null) {
        onCloseReason?.("close-button");
      }

      closeReasonRef.current = null;
      onOpenChange(nextOpen);
    },
    [onCloseReason, onOpenChange, open]
  );

  React.useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else if (wasOpenRef.current) {
      setQuery((currentQuery) => {
        if (currentQuery.length > 0) {
          onQueryChange?.("");
        }
        return "";
      });
      setActiveIndex(0);
    }

    wasOpenRef.current = open;
  }, [onQueryChange, open]);

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
  const hasResults = filtered.length > 0;

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
      activeCommandKeyRef.current = null;
      setActiveIndex(-1);
      return;
    }

    const preferredKey = activeCommandKeyRef.current;
    if (preferredKey) {
      const preferredIndex = filtered.findIndex((command) => !command.disabled && command.key === preferredKey);
      if (preferredIndex >= 0) {
        setActiveIndex(preferredIndex);
        return;
      }
    }

    setActiveIndex(firstEnabledIndex);
    activeCommandKeyRef.current = firstEnabledIndex >= 0 ? filtered[firstEnabledIndex]?.key ?? null : null;
  }, [filtered, firstEnabledIndex]);

  React.useEffect(() => {
    if (activeIndex < 0) {
      activeCommandKeyRef.current = null;
      return;
    }

    activeCommandKeyRef.current = filtered[activeIndex]?.key ?? null;
  }, [activeIndex, filtered]);

  const selectItem = React.useCallback(
    (index: number) => {
      const item = filtered[index];
      if (!item || item.disabled) {
        return;
      }

      item.onSelect?.();
      if (closeOnSelect) {
        closeWithReason("item-select");
      }
    },
    [closeOnSelect, closeWithReason, filtered]
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
      onOpenChange={handleOpenChange}
      title={title}
      description={description}
      size="md"
      closeOnEscape={closeOnEscape}
      closeOnOutsidePointer={closeOnOutsidePointer}
      onEscapeKeyDown={(event) => {
        onEscapeKeyDown?.(event);
        if (event.defaultPrevented || !closeOnEscape) {
          return;
        }

        markCloseReason("escape-key");
      }}
      onPointerDownOutside={(event) => {
        onPointerDownOutside?.(event);
        if (event.defaultPrevented || !closeOnOutsidePointer) {
          return;
        }

        markCloseReason("outside-pointer");
      }}
    >
      <div style={{ display: "grid", gap: 10 }}>
        <Input
          ref={inputRef}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          aria-controls={hasResults ? listId : undefined}
          aria-activedescendant={activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined}
          aria-describedby={statusId}
          placeholder={placeholder}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            onQueryChange?.(event.target.value);
          }}
          onKeyDown={(event) => {
            if (isComposingCommandKeyEvent(event)) {
              return;
            }

            if (event.key === "Escape" && clearQueryOnEscape && query.length > 0) {
              event.preventDefault();
              setQuery("");
              onQueryChange?.("");
              return;
            }

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
          aria-label={searchAriaLabel}
        />
        <p
          id={statusId}
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
        {hasResults ? (
          <div
            id={listId}
            role="listbox"
            aria-label={resultsAriaLabel}
            style={{ maxHeight: 280, overflow: "auto", display: "grid", gap: 4 }}
          >
            {filtered.map((item, index) => {
              const active = index === activeIndex;
              return (
                <div
                  key={item.key}
                  id={`${listId}-option-${index}`}
                  role="option"
                  aria-selected={active}
                  aria-disabled={item.disabled || undefined}
                  aria-posinset={index + 1}
                  aria-setsize={filtered.length}
                  tabIndex={-1}
                  onMouseDown={(event) => {
                    // Keep combobox input focus while selecting listbox options.
                    event.preventDefault();
                  }}
                  onMouseEnter={() => {
                    if (!item.disabled) {
                      setActiveIndex(index);
                    }
                  }}
                  onClick={() => {
                    if (item.disabled) {
                      return;
                    }

                    selectItem(index);
                  }}
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
                </div>
              );
            })}
          </div>
        ) : (
          <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
            {emptyMessage}
          </p>
        )}
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

function isComposingCommandKeyEvent(event: React.KeyboardEvent<HTMLInputElement>) {
  const nativeEvent = event.nativeEvent;
  if (nativeEvent.isComposing) {
    return true;
  }

  // Legacy fallback for IME workflows on browsers emitting keyCode=229.
  return typeof nativeEvent.keyCode === "number" && nativeEvent.keyCode === 229;
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
