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
        <Input placeholder="Search commands..." value={query} onChange={(event) => setQuery(event.target.value)} />
        <div style={{ maxHeight: 280, overflow: "auto", display: "grid", gap: 4 }}>
          {filtered.map((item) => (
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
          ))}
        </div>
      </div>
    </Dialog>
  );
}
