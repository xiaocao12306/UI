import * as React from "react";
import { Dialog } from "./Dialog";
import { Input } from "./Input";

export type CommandItem = {
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
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
  ariaLabel?: string;
  ariaLabelledBy?: string;
  searchAriaLabel?: string;
  resultsAriaLabel?: string;
  closeOnSelect?: boolean;
  clearQueryOnEscape?: boolean;
  closeOnEscape?: boolean;
  closeOnOutsidePointer?: boolean;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onSearchKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onCloseButtonKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  closeLabel?: string;
  placeholder?: string;
  loading?: boolean;
  loadingContent?: React.ReactNode;
  emptyMessage?: React.ReactNode;
  disabledResultsMessage?: React.ReactNode;
  onQueryChange?: (query: string) => void;
  onCloseReason?: (reason: CommandPaletteCloseReason) => void;
  getResultsStatusText?: (params: {
    query: string;
    visibleCount: number;
    enabledCount: number;
    totalCount: number;
  }) => string;
};

export type CommandPaletteCloseReason =
  | "close-button"
  | "item-select"
  | "escape-key"
  | "outside-pointer";

export function CommandPalette({
  open,
  onOpenChange,
  commands,
  title = "Command Palette",
  description = "Quickly search and execute workspace actions.",
  ariaLabel,
  ariaLabelledBy,
  searchAriaLabel = "Search commands",
  resultsAriaLabel = "Command results",
  closeOnSelect = true,
  clearQueryOnEscape = true,
  closeOnEscape = true,
  closeOnOutsidePointer = true,
  onEscapeKeyDown,
  onSearchKeyDown,
  onCloseButtonKeyDown,
  onPointerDownOutside,
  closeLabel,
  placeholder = "Search commands...",
  loading = false,
  loadingContent = "Loading commands...",
  emptyMessage = "No commands found.",
  disabledResultsMessage = "Matching commands are currently unavailable.",
  onQueryChange,
  onCloseReason,
  getResultsStatusText = defaultGetResultsStatusText
}: CommandPaletteProps) {
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const activeCommandRenderKeyRef = React.useRef<string | null>(null);
  const closeReasonRef = React.useRef<CommandPaletteCloseReason | null>(null);
  const wasOpenRef = React.useRef(open);
  const warnedDuplicateKeysSignatureRef = React.useRef<string | null>(null);
  const warnedMissingAriaLabelSignatureRef = React.useRef<string | null>(null);
  const warnedMissingSearchMetadataSignatureRef = React.useRef<string | null>(null);
  const listId = React.useId();
  const statusId = React.useId();
  const disabledResultsId = React.useId();
  const listRef = React.useRef<HTMLDivElement>(null);
  const resolvedSearchAriaLabel = resolveNonEmptyLabel(searchAriaLabel, "Search commands");
  const resolvedResultsAriaLabel = resolveNonEmptyLabel(resultsAriaLabel, "Command results");
  const resolvedCloseLabel = resolveNonEmptyLabel(closeLabel, "Close command palette");
  const resolvedPlaceholder = resolveNonEmptyLabel(placeholder, "Search commands...");
  const resolvedAriaLabelledBy = resolveNonEmptyLabel(ariaLabelledBy);
  const resolvedAriaLabel =
    resolvedAriaLabelledBy === undefined
      ? resolveNonEmptyLabel(ariaLabel)
      : undefined;
  const resolvedCloseOnSelect = resolveBooleanFlag(closeOnSelect, true);
  const resolvedClearQueryOnEscape = resolveBooleanFlag(clearQueryOnEscape, true);
  const resolvedCloseOnEscape = resolveBooleanFlag(closeOnEscape, true);
  const resolvedCloseOnOutsidePointer = resolveBooleanFlag(closeOnOutsidePointer, true);
  const resolvedLoading = resolveBooleanFlag(loading, false);
  const resolvedLoadingStatusText = React.useMemo(
    () => resolveLoadingStatusText(loadingContent),
    [loadingContent]
  );
  const resolvedLoadingContent = hasRenderableCommandNode(loadingContent)
    ? loadingContent
    : "Loading commands...";
  const resolvedEmptyMessage = hasRenderableCommandNode(emptyMessage)
    ? emptyMessage
    : "No commands found.";
  const resolvedDisabledResultsMessage = hasRenderableCommandNode(disabledResultsMessage)
    ? disabledResultsMessage
    : "Matching commands are currently unavailable.";

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
    if (!open && wasOpenRef.current) {
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

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const duplicateKeys = new Set<string>();
    const seenKeys = new Set<string>();
    commands.forEach((item) => {
      if (seenKeys.has(item.key)) {
        duplicateKeys.add(item.key);
      }
      seenKeys.add(item.key);
    });

    if (duplicateKeys.size === 0) {
      warnedDuplicateKeysSignatureRef.current = null;
      return;
    }

    const signature = Array.from(duplicateKeys).sort().join("|");
    if (warnedDuplicateKeysSignatureRef.current === signature) {
      return;
    }
    warnedDuplicateKeysSignatureRef.current = signature;

    console.warn(
      `[CommandPalette] Duplicate command keys detected: ${Array.from(duplicateKeys)
        .map((key) => `"${key}"`)
        .join(
          ", "
        )}. Keys should be unique to keep aria-activedescendant and selection behavior deterministic. Duplicate option keys are auto-suffixed by duplicate occurrence order for render stability.`
    );
  }, [commands]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const missingAriaLabelKeys = commands.reduce<string[]>((keys, item) => {
      const hasReadableLabelText = getReadableCommandLabelText(item.label).trim().length > 0;
      const hasExplicitAriaLabel =
        typeof item.ariaLabel === "string" && item.ariaLabel.trim().length > 0;
      const hasExplicitAriaLabelledBy =
        typeof item.ariaLabelledBy === "string" && item.ariaLabelledBy.trim().length > 0;
      const hasTextValueAlias =
        typeof item.textValue === "string" && normalizeReadableCommandText(item.textValue).length > 0;
      if (
        hasReadableLabelText ||
        hasExplicitAriaLabel ||
        hasExplicitAriaLabelledBy ||
        hasTextValueAlias
      ) {
        return keys;
      }

      keys.push(item.key);
      return keys;
    }, []);

    if (missingAriaLabelKeys.length === 0) {
      warnedMissingAriaLabelSignatureRef.current = null;
      return;
    }

    const signature = missingAriaLabelKeys.sort().join("|");
    if (warnedMissingAriaLabelSignatureRef.current === signature) {
      return;
    }
    warnedMissingAriaLabelSignatureRef.current = signature;

    console.warn(
      `[CommandPalette] Non-text labels should provide ariaLabel, ariaLabelledBy, or textValue for accessible naming: ${missingAriaLabelKeys
        .map((key) => `"${key}"`)
        .join(", ")}.`
    );
  }, [commands]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const missingSearchMetadataKeys = commands.reduce<string[]>((keys, item) => {
      const hasReadableLabelText = getReadableCommandLabelText(item.label).trim().length > 0;
      const hasAriaLabel = typeof item.ariaLabel === "string" && item.ariaLabel.trim().length > 0;

      if (typeof item.textValue === "string" && item.textValue.trim().length > 0) {
        return keys;
      }

      if (
        Array.isArray(item.keywords) &&
        item.keywords.some((keyword) => typeof keyword === "string" && keyword.trim().length > 0)
      ) {
        return keys;
      }

      if (hasReadableLabelText) {
        return keys;
      }

      if (hasAriaLabel) {
        return keys;
      }

      keys.push(item.key);
      return keys;
    }, []);

    if (missingSearchMetadataKeys.length === 0) {
      warnedMissingSearchMetadataSignatureRef.current = null;
      return;
    }

    const signature = missingSearchMetadataKeys.sort().join("|");
    if (warnedMissingSearchMetadataSignatureRef.current === signature) {
      return;
    }
    warnedMissingSearchMetadataSignatureRef.current = signature;

    console.warn(
      `[CommandPalette] Non-text labels should provide textValue, ariaLabel, or keywords for searchable metadata: ${missingSearchMetadataKeys
        .map((key) => `"${key}"`)
        .join(", ")}.`
    );
  }, [commands]);

  const normalizedQuery = React.useMemo(() => normalizeSearchText(query.trim()), [query]);

  const commandEntries = React.useMemo(() => {
    const keyCounts = new Map<string, number>();
    commands.forEach((item) => {
      keyCounts.set(item.key, (keyCounts.get(item.key) ?? 0) + 1);
    });
    const duplicateOccurrenceCounts = new Map<string, number>();

    return commands.map((item) => {
      const duplicateCount = keyCounts.get(item.key) ?? 0;
      const duplicateOccurrence = duplicateOccurrenceCounts.get(item.key) ?? 0;
      duplicateOccurrenceCounts.set(item.key, duplicateOccurrence + 1);

      return {
      item,
      renderKey:
        duplicateCount > 1
          ? `${item.key}__duplicate-${duplicateOccurrence}`
          : item.key
    };
    });
  }, [commands]);

  const filteredEntries = React.useMemo(() => {
    if (!normalizedQuery) {
      return commandEntries;
    }

    return commandEntries.filter(({ item }) => {
      const labelText = getCommandText(item);
      const haystack = [labelText, ...(item.keywords ?? [])].join(" ");
      return normalizeSearchText(haystack).includes(normalizedQuery);
    });
  }, [commandEntries, normalizedQuery]);
  const filtered = React.useMemo(
    () => filteredEntries.map((entry) => entry.item),
    [filteredEntries]
  );
  const filteredRenderKeys = React.useMemo(() => {
    return filteredEntries.map((entry) => entry.renderKey);
  }, [filteredEntries]);
  const enabledCount = React.useMemo(
    () => filtered.reduce((count, command) => (command.disabled ? count : count + 1), 0),
    [filtered]
  );
  const hasDisabledOnlyResults = !resolvedLoading && filtered.length > 0 && enabledCount === 0;
  const canNavigateCommandList = !resolvedLoading && enabledCount > 1;
  const canActivateCommandList = !resolvedLoading && enabledCount > 0;
  const hasResults = !resolvedLoading && filtered.length > 0;
  const searchKeyShortcuts = React.useMemo(() => {
    const shortcuts: string[] = [];
    if (canNavigateCommandList) {
      shortcuts.push("ArrowDown", "ArrowUp", "Home", "End", "PageDown", "PageUp");
    }
    if (canActivateCommandList) {
      shortcuts.push("Enter");
    }
    if (resolvedCloseOnEscape || (resolvedClearQueryOnEscape && query.length > 0)) {
      shortcuts.push("Escape");
    }
    return shortcuts.length > 0 ? shortcuts.join(" ") : undefined;
  }, [
    canActivateCommandList,
    canNavigateCommandList,
    query.length,
    resolvedClearQueryOnEscape,
    resolvedCloseOnEscape
  ]);

  const resultsStatusText = React.useMemo(() => {
    if (resolvedLoading) {
      return resolvedLoadingStatusText;
    }

    const statusTextParams = {
      query,
      visibleCount: filtered.length,
      enabledCount,
      totalCount: commands.length
    };
    const defaultStatusText = defaultGetResultsStatusText(statusTextParams);
    const customStatusText = getResultsStatusText(statusTextParams);

    return resolveResultsStatusText(customStatusText, defaultStatusText);
  }, [
    commands.length,
    enabledCount,
    filtered.length,
    getResultsStatusText,
    resolvedLoading,
    query,
    resolvedLoadingStatusText
  ]);
  const inputDescriptionIds = hasDisabledOnlyResults ? `${statusId} ${disabledResultsId}` : statusId;

  const enabledIndices = React.useMemo(
    () =>
      filtered.reduce<number[]>((indices, command, index) => {
        if (!command.disabled) {
          indices.push(index);
        }
        return indices;
      }, []),
    [filtered]
  );
  const firstEnabledIndex = enabledIndices[0] ?? -1;
  const lastEnabledIndex = enabledIndices[enabledIndices.length - 1] ?? -1;
  const safeActiveIndex = React.useMemo(() => {
    if (activeIndex < 0) {
      return -1;
    }

    const activeCommand = filtered[activeIndex];
    if (!activeCommand || activeCommand.disabled) {
      return -1;
    }

    return activeIndex;
  }, [activeIndex, filtered]);

  React.useEffect(() => {
    if (filtered.length === 0) {
      activeCommandRenderKeyRef.current = null;
      setActiveIndex(-1);
      return;
    }

    const preferredRenderKey = activeCommandRenderKeyRef.current;
    if (preferredRenderKey) {
      const preferredIndex = filteredRenderKeys.findIndex(
        (renderKey, index) => !filtered[index]?.disabled && renderKey === preferredRenderKey
      );
      if (preferredIndex >= 0) {
        setActiveIndex(preferredIndex);
        return;
      }
    }

    setActiveIndex(firstEnabledIndex);
    activeCommandRenderKeyRef.current =
      firstEnabledIndex >= 0 ? (filteredRenderKeys[firstEnabledIndex] ?? null) : null;
  }, [filtered, filteredRenderKeys, firstEnabledIndex]);

  React.useEffect(() => {
    if (safeActiveIndex < 0) {
      activeCommandRenderKeyRef.current = null;
      return;
    }

    activeCommandRenderKeyRef.current = filteredRenderKeys[safeActiveIndex] ?? null;
  }, [filteredRenderKeys, safeActiveIndex]);

  React.useEffect(() => {
    if (!open || safeActiveIndex < 0) {
      return;
    }

    const list = listRef.current;
    if (!list) {
      return;
    }

    const activeOption = list.ownerDocument.getElementById(`${listId}-option-${safeActiveIndex}`);
    if (!activeOption || !list.contains(activeOption)) {
      return;
    }

    if (typeof activeOption.scrollIntoView === "function") {
      activeOption.scrollIntoView({ block: "nearest" });
    }
  }, [listId, open, safeActiveIndex]);

  const selectItem = React.useCallback(
    (index: number) => {
      const item = filtered[index];
      if (!item || item.disabled) {
        return;
      }

      if (!item.onSelect) {
        return;
      }

      item.onSelect();
      if (resolvedCloseOnSelect) {
        closeWithReason("item-select");
      }
    },
    [closeWithReason, filtered, resolvedCloseOnSelect]
  );

  const moveActiveIndex = (direction: 1 | -1) => {
    if (filtered.length === 0) {
      return;
    }

    let index = safeActiveIndex < 0 ? (direction === 1 ? -1 : 0) : safeActiveIndex;
    for (let i = 0; i < filtered.length; i += 1) {
      index = (index + direction + filtered.length) % filtered.length;
      if (!filtered[index]?.disabled) {
        setActiveIndex(index);
        return;
      }
    }
  };

  const moveActiveIndexByPage = (direction: 1 | -1) => {
    if (enabledIndices.length === 0) {
      return;
    }

    const currentEnabledPosition = enabledIndices.indexOf(safeActiveIndex);
    if (currentEnabledPosition < 0) {
      setActiveIndex(direction === 1 ? firstEnabledIndex : lastEnabledIndex);
      return;
    }

    const nextEnabledPosition = Math.min(
      enabledIndices.length - 1,
      Math.max(0, currentEnabledPosition + direction * 5)
    );
    setActiveIndex(enabledIndices[nextEnabledPosition] ?? firstEnabledIndex);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={handleOpenChange}
      title={title}
      description={description}
      ariaLabel={resolvedAriaLabel}
      ariaLabelledBy={resolvedAriaLabelledBy}
      closeLabel={resolvedCloseLabel}
      size="md"
      closeOnEscape={resolvedCloseOnEscape}
      closeOnOutsidePointer={resolvedCloseOnOutsidePointer}
      onCloseButtonKeyDown={onCloseButtonKeyDown}
      onEscapeKeyDown={(event) => {
        onEscapeKeyDown?.(event);
        if (event.defaultPrevented || !resolvedCloseOnEscape) {
          return;
        }

        markCloseReason("escape-key");
      }}
      onPointerDownOutside={(event) => {
        onPointerDownOutside?.(event);
        if (event.defaultPrevented || !resolvedCloseOnOutsidePointer) {
          return;
        }

        markCloseReason("outside-pointer");
      }}
    >
      <div style={{ display: "grid", gap: 10 }}>
        <Input
          ref={inputRef}
          data-autofocus=""
          role="combobox"
          aria-busy={resolvedLoading || undefined}
          aria-expanded={hasResults}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          aria-controls={hasResults ? listId : undefined}
          aria-activedescendant={
            !resolvedLoading && safeActiveIndex >= 0 ? `${listId}-option-${safeActiveIndex}` : undefined
          }
          aria-describedby={inputDescriptionIds}
          aria-keyshortcuts={searchKeyShortcuts}
          placeholder={resolvedPlaceholder}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            onQueryChange?.(event.target.value);
          }}
          onKeyDown={(event) => {
            onSearchKeyDown?.(event);
            if (isComposingCommandKeyEvent(event)) {
              return;
            }

            if (event.defaultPrevented) {
              return;
            }

            if (event.altKey || event.ctrlKey || event.metaKey) {
              return;
            }

            if (event.key === "Escape") {
              if (event.repeat) {
                return;
              }
              if (resolvedClearQueryOnEscape && query.length > 0) {
                event.preventDefault();
                setQuery("");
                onQueryChange?.("");
              }
              return;
            }

            if (event.key === "ArrowDown") {
              if (!canNavigateCommandList) {
                return;
              }
              event.preventDefault();
              moveActiveIndex(1);
              return;
            }

            if (event.key === "ArrowUp") {
              if (!canNavigateCommandList) {
                return;
              }
              event.preventDefault();
              moveActiveIndex(-1);
              return;
            }

            if (event.key === "Home") {
              if (!canNavigateCommandList || !shouldHandleCommandHomeEndKey(event)) {
                return;
              }
              event.preventDefault();
              setActiveIndex(firstEnabledIndex);
              return;
            }

            if (event.key === "End") {
              if (!canNavigateCommandList || !shouldHandleCommandHomeEndKey(event)) {
                return;
              }
              event.preventDefault();
              setActiveIndex(lastEnabledIndex);
              return;
            }

            if (event.key === "PageDown") {
              if (!canNavigateCommandList) {
                return;
              }
              event.preventDefault();
              moveActiveIndexByPage(1);
              return;
            }

            if (event.key === "PageUp") {
              if (!canNavigateCommandList) {
                return;
              }
              event.preventDefault();
              moveActiveIndexByPage(-1);
              return;
            }

            if (event.key === "Enter" && !resolvedLoading && safeActiveIndex >= 0) {
              event.preventDefault();
              if (event.repeat) {
                return;
              }
              selectItem(safeActiveIndex);
            }
          }}
          aria-label={resolvedSearchAriaLabel}
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
        {resolvedLoading ? (
          <p
            data-testid="command-palette-loading-content"
            style={{ margin: 0, color: "var(--aurora-text-secondary)" }}
          >
            {resolvedLoadingContent}
          </p>
        ) : hasResults ? (
          <>
            <div
              id={listId}
              ref={listRef}
              role="listbox"
              aria-label={resolvedResultsAriaLabel}
              style={{ maxHeight: 280, overflow: "auto", display: "grid", gap: 4 }}
            >
              {filtered.map((item, index) => {
                const active = index === safeActiveIndex;
                const optionAriaLabelledBy = resolveNonEmptyLabel(item.ariaLabelledBy);
                const hasReadableOptionText =
                  getReadableCommandLabelText(item.label).trim().length > 0;
                const optionAriaLabel = optionAriaLabelledBy
                  ? undefined
                  : resolveNonEmptyLabel(
                      item.ariaLabel,
                      hasReadableOptionText ? undefined : getCommandText(item)
                    );
                return (
                  <div
                    key={
                      filteredRenderKeys[index] ??
                      `${item.key}__source-fallback-${index}`
                    }
                    id={`${listId}-option-${index}`}
                    role="option"
                    aria-selected={active}
                    aria-disabled={item.disabled || undefined}
                    aria-labelledby={optionAriaLabelledBy}
                    aria-label={optionAriaLabel}
                    aria-keyshortcuts={item.disabled ? undefined : "Enter Space"}
                    aria-posinset={index + 1}
                    aria-setsize={filtered.length}
                    tabIndex={-1}
                    onPointerDown={(event) => {
                      if (
                        event.pointerType === "mouse" ||
                        !isPrimaryPointerButton(event.button) ||
                        event.ctrlKey
                      ) {
                        return;
                      }
                      // Keep combobox input focus while selecting listbox options.
                      event.preventDefault();
                    }}
                    onMouseDown={(event) => {
                      if (event.button !== 0 || event.ctrlKey) {
                        return;
                      }
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
                    onKeyDown={(event) => {
                      if (item.disabled) {
                        return;
                      }

                      if (event.defaultPrevented) {
                        return;
                      }

                      if (isComposingCommandKeyEvent(event)) {
                        return;
                      }

                      if (event.altKey || event.ctrlKey || event.metaKey) {
                        return;
                      }

                      if (
                        event.key === "Enter" ||
                        event.key === " " ||
                        event.key === "Space" ||
                        event.key === "Spacebar"
                      ) {
                        event.preventDefault();
                        if (event.repeat) {
                          return;
                        }
                        selectItem(index);
                      }
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
            {hasDisabledOnlyResults ? (
              <p
                id={disabledResultsId}
                data-testid="command-palette-disabled-results-message"
                style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 13 }}
              >
                {resolvedDisabledResultsMessage}
              </p>
            ) : null}
          </>
        ) : (
          <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>{resolvedEmptyMessage}</p>
        )}
      </div>
    </Dialog>
  );
}

function getCommandText(item: CommandItem) {
  if (typeof item.textValue === "string") {
    const textValue = normalizeReadableCommandText(item.textValue);
    if (textValue.length > 0) {
      return textValue;
    }
  }

  if (typeof item.ariaLabel === "string") {
    const ariaLabel = normalizeReadableCommandText(item.ariaLabel);
    if (ariaLabel.length > 0) {
      return ariaLabel;
    }
  }

  return normalizeReadableCommandText(getReadableCommandLabelText(item.label));
}

function normalizeSearchText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function isComposingCommandKeyEvent(event: React.KeyboardEvent<HTMLElement>) {
  const nativeEvent = event.nativeEvent;
  if (nativeEvent.isComposing) {
    return true;
  }

  // Legacy fallback for IME workflows on browsers emitting keyCode=229.
  return typeof nativeEvent.keyCode === "number" && nativeEvent.keyCode === 229;
}

function shouldHandleCommandHomeEndKey(event: React.KeyboardEvent<HTMLInputElement>) {
  if (event.key !== "Home" && event.key !== "End") {
    return true;
  }

  const input = event.currentTarget;
  const selectionStart = input.selectionStart;
  const selectionEnd = input.selectionEnd;
  if (selectionStart === null || selectionEnd === null) {
    return true;
  }

  if (selectionStart !== selectionEnd) {
    return false;
  }

  if (event.key === "Home") {
    return selectionStart === 0;
  }

  return selectionEnd === input.value.length;
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

function resolveLoadingStatusText(loadingContent: React.ReactNode) {
  const normalized = normalizeReadableCommandText(getReadableCommandLabelText(loadingContent));
  return normalized.length > 0 ? normalized : "Loading commands...";
}

function resolveResultsStatusText(statusText: unknown, fallback: string) {
  if (typeof statusText === "string") {
    const normalizedStatusText = normalizeReadableCommandText(statusText);
    if (normalizedStatusText.length > 0) {
      return normalizedStatusText;
    }
  }

  return fallback;
}

function hasRenderableCommandNode(node: React.ReactNode) {
  if (node === null || node === undefined || typeof node === "boolean") {
    return false;
  }

  if (typeof node === "string") {
    return node.trim().length > 0;
  }

  return true;
}

function getReadableCommandLabelText(node: React.ReactNode): string {
  if (typeof node === "string") {
    return node;
  }

  if (typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return normalizeReadableCommandText(
      node
        .map((item) => getReadableCommandLabelText(item))
        .filter((item) => item.length > 0)
        .join(" ")
    );
  }

  if (!React.isValidElement(node)) {
    return "";
  }

  const elementProps = node.props as {
    children?: React.ReactNode;
    "aria-hidden"?: boolean | "true" | "false";
    "aria-label"?: string;
  };
  if (elementProps["aria-hidden"] === true || elementProps["aria-hidden"] === "true") {
    return "";
  }

  if (
    typeof elementProps["aria-label"] === "string" &&
    elementProps["aria-label"].trim().length > 0
  ) {
    return normalizeReadableCommandText(elementProps["aria-label"]);
  }

  return getReadableCommandLabelText(elementProps.children);
}

function resolveNonEmptyLabel(label: string | undefined, fallback?: string): string | undefined {
  if (typeof label === "string" && label.trim().length > 0) {
    return label.trim();
  }

  return fallback;
}

function resolveBooleanFlag(value: unknown, fallback: boolean) {
  if (typeof value !== "boolean") {
    return fallback;
  }

  return value;
}

function isPrimaryPointerButton(button: number | undefined) {
  return typeof button !== "number" || button <= 0;
}

function normalizeReadableCommandText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}
