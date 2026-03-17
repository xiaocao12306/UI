# Overlay Behavior Guide

## Covered Components
- `Tooltip`
- `Popover`
- `Dropdown`
- `Dialog`
- `Drawer`
- `CommandPalette`
- `Toast` (non-blocking feedback overlay)

## Dismiss Rules
- `Dialog`, `Drawer`, `CommandPalette`: default close on `Escape` and outside pointer interaction.
- `Dialog` and `Drawer` can disable dismiss paths via `closeOnEscape={false}` / `closeOnOutsidePointer={false}` for blocking workflows.
- `Popover`, `Dropdown`: toggle from trigger and close on `Escape` / outside pointer interaction.
- `Toast`: controlled by `open` + `onClose`.

## Layering Scale
- `Dialog` / `Drawer`: `--aurora-z-modal`
- `Popover` / `Dropdown` / `Tooltip`: `--aurora-z-overlay`
- `Toast`: `--aurora-z-toast`
- Recommendation: do not use hard-coded numeric `z-index` in app integrations; compose on top of these token tiers.

## Keyboard Expectations
- Trigger buttons expose `aria-expanded` where applicable.
- `Dropdown` exposes `role="menu"` with `role="menuitem"` entries.
- `CommandPalette` can be opened by app-level shortcut (`Ctrl/Cmd + K` in demo).
- `Popover` and `Dropdown` should return focus to the trigger after dismiss to avoid keyboard dead ends.

## Example
```tsx
import { Button, Popover, Dropdown, Dialog } from "@aurora-ui/react";
import * as React from "react";

export function OverlaySample() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Popover triggerLabel="Open Popover">
        <p style={{ margin: 0 }}>Popover content</p>
      </Popover>
      <Dropdown
        label="Actions"
        items={[
          { key: "duplicate", label: "Duplicate" },
          { key: "archive", label: "Archive" }
        ]}
      />
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onOpenChange={setOpen} title="Confirm action">
        Action details
      </Dialog>
    </div>
  );
}
```

## Implementation Notes
- Prefer controlled `open` APIs for modal overlays when integrating with routing or analytics.
- Avoid stacking multiple blocking overlays at once.
- Keep trigger and overlay content close in DOM ownership to simplify state management.
