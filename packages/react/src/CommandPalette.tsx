import * as React from "react";
import { Dialog } from "./Dialog";
import { Input } from "./Input";

export type CommandItem = {
  key: string;
  label: string;
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
};

export function CommandPalette({
  open,
  onOpenChange,
  commands,
  placeholder = "Search commands...",
  emptyMessage = "No commands found.",
  onQueryChange
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

  const filtered = React.useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return commands;
    }

    return commands.filter((item) => {
      const haystack = [item.label, ...(item.keywords ?? [])].join(" ").toLowerCase();
      return haystack.includes(normalized);
    });
  }, [commands, query]);

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
                  disabled={item.disabled}
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
            <p role="status" aria-live="polite" style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
              {emptyMessage}
            </p>
          )}
        </div>
      </div>
    </Dialog>
  );
}
