import * as React from "react";
import { DismissableLayer } from "@aurora-ui/primitives";
import { Button } from "./Button";

export type DropdownItem = {
  key: string;
  label: React.ReactNode;
  onSelect?: () => void;
};

export type DropdownProps = {
  label: React.ReactNode;
  items: DropdownItem[];
};

export function Dropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Button
        ref={triggerRef}
        variant="outline"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
      </Button>
      {open ? (
        <DismissableLayer
          onPointerDownOutside={(event) => {
            const target = event.target as Node | null;
            if (target && triggerRef.current?.contains(target)) {
              event.preventDefault();
            }
          }}
          onDismiss={() => setOpen(false)}
        >
          <ul
            role="menu"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            margin: 0,
            padding: 6,
            listStyle: "none",
            minWidth: 180,
            borderRadius: "var(--aurora-radius-md)",
            border: "1px solid var(--aurora-border-default)",
            background: "var(--aurora-surface-overlay)",
            boxShadow: "var(--aurora-shadow-md)",
            zIndex: 1200
          }}
        >
          {items.map((item) => (
            <li key={item.key}>
              <button
                role="menuitem"
                type="button"
                onClick={() => {
                  item.onSelect?.();
                  setOpen(false);
                }}
                style={{
                  width: "100%",
                  textAlign: "left",
                  border: 0,
                  background: "transparent",
                  padding: "8px 10px",
                  borderRadius: 8,
                  cursor: "pointer",
                  color: "var(--aurora-text-primary)"
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
          </ul>
        </DismissableLayer>
      ) : null}
    </div>
  );
}
