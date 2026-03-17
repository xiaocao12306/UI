import * as React from "react";
import { Dialog } from "./Dialog";
import { Input } from "./Input";

export type CommandItem = {
  key: string;
  label: string;
  keywords?: string[];
  onSelect?: () => void;
};

export type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  commands: CommandItem[];
};

export function CommandPalette({ open, onOpenChange, commands }: CommandPaletteProps) {
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (!open) {
      setQuery("");
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange} title="Command Palette">
      <div style={{ display: "grid", gap: 10 }}>
        <Input
          ref={inputRef}
          placeholder="Search commands..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search commands"
        />
        <div style={{ maxHeight: 280, overflow: "auto", display: "grid", gap: 4 }}>
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  item.onSelect?.();
                  onOpenChange(false);
                }}
                style={{
                  border: "1px solid var(--aurora-border-default)",
                  background: "var(--aurora-surface-default)",
                  color: "var(--aurora-text-primary)",
                  borderRadius: 8,
                  height: 36,
                  padding: "0 10px",
                  textAlign: "left"
                }}
              >
                {item.label}
              </button>
            ))
          ) : (
            <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>No commands found.</p>
          )}
        </div>
      </div>
    </Dialog>
  );
}
