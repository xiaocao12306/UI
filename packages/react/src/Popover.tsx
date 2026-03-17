import * as React from "react";
import { DismissableLayer } from "@aurora-ui/primitives";
import { Button } from "./Button";

export type PopoverProps = {
  triggerLabel: React.ReactNode;
  children: React.ReactNode;
};

export function Popover({ triggerLabel, children }: PopoverProps) {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const contentId = React.useId();

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Button
        ref={triggerRef}
        variant="outline"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((prev) => !prev)}
      >
        {triggerLabel}
      </Button>
      {open ? (
        <DismissableLayer
          id={contentId}
          role="dialog"
          onPointerDownOutside={(event) => {
            const target = event.target as Node | null;
            if (target && triggerRef.current?.contains(target)) {
              event.preventDefault();
            }
          }}
          onDismiss={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            minWidth: 220,
            borderRadius: "var(--aurora-radius-md)",
            border: "1px solid var(--aurora-border-default)",
            background: "var(--aurora-surface-overlay)",
            boxShadow: "var(--aurora-shadow-md)",
            padding: 10,
            zIndex: 1200
          }}
        >
          {children}
        </DismissableLayer>
      ) : null}
    </div>
  );
}
