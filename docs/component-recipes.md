# Component Recipes

## 1. Prompt Bar (Button + Input)
```tsx
import { Button, Input } from "@aurora-ui/react";

export function PromptBar() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8 }}>
      <Input placeholder="Describe what you want to generate..." aria-label="Prompt" />
      <Button>Generate</Button>
    </div>
  );
}
```

## 2. Draft Dialog Form Flow
```tsx
import * as React from "react";
import { Button, Dialog, Input, Textarea } from "@aurora-ui/react";

export function DraftDialog() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Create Draft</Button>
      <Dialog open={open} onOpenChange={setOpen} title="Create Draft">
        <div style={{ display: "grid", gap: 10 }}>
          <Input placeholder="Title" aria-label="Title" />
          <Textarea placeholder="Expected output" aria-label="Expected output" />
          <Button>Save</Button>
        </div>
      </Dialog>
    </>
  );
}
```

## 3. Command Palette Actions
```tsx
import * as React from "react";
import { CommandPalette } from "@aurora-ui/react";

export function AppCommands() {
  const [open, setOpen] = React.useState(false);

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      commands={[
        { key: "new-doc", label: "New Document", keywords: ["create", "doc"] },
        { key: "run-tests", label: "Run Tests", keywords: ["quality", "ci"] }
      ]}
    />
  );
}
```

## 4. Theme Provider Wrapper
```tsx
import { AuroraProvider, GlobalStyles } from "@aurora-ui/react";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <AuroraProvider theme="core-dark">
      <GlobalStyles />
      {children}
    </AuroraProvider>
  );
}
```

## 5. Blocking Approval Dropdown
```tsx
import * as React from "react";
import { Button, Dropdown, type DropdownItem } from "@aurora-ui/react";

export function ApprovalMenu() {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("pending");

  const items: DropdownItem[] = [
    { key: "approve", label: "Approve Release", onSelect: () => setStatus("approved") },
    { key: "reject", label: "Reject Release", onSelect: () => setStatus("rejected") }
  ];

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <Dropdown
        label="Review Actions"
        items={items}
        open={open}
        onOpenChange={setOpen}
        closeOnEscape={false}
        closeOnOutsidePointer={false}
      />
      <Button variant="outline" onClick={() => setOpen(false)}>
        Close menu
      </Button>
      <p style={{ margin: 0 }}>Current status: {status}</p>
    </div>
  );
}
```

## 6. Command Palette Batch Mode
```tsx
import * as React from "react";
import { CommandPalette } from "@aurora-ui/react";

export function BatchCommands() {
  const [open, setOpen] = React.useState(true);
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      closeOnSelect={false}
      commands={[
        { key: "lint", label: "Run Lint", onSelect: () => setSelected((v) => [...v, "lint"]) },
        { key: "typecheck", label: "Run Typecheck", onSelect: () => setSelected((v) => [...v, "typecheck"]) },
        { key: "test", label: "Run Tests", onSelect: () => setSelected((v) => [...v, "test"]) }
      ]}
    />
  );
}
```

## 7. Table Loading and Empty States
```tsx
import * as React from "react";
import { Button, Table } from "@aurora-ui/react";

const columns = [
  { key: "component", header: "Component", sortable: true, rowHeader: true },
  { key: "status", header: "Status", sortable: true }
];

const rows = [
  { component: "Button", status: "stable" },
  { component: "Dialog", status: "stable" }
];

export function ReadinessTable() {
  const [loading, setLoading] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <Table
        caption="Readiness"
        columns={columns}
        data={empty ? [] : rows}
        loading={loading}
        loadingContent="Syncing readiness data..."
        emptyContent="No readiness records yet."
      />
      <div style={{ display: "flex", gap: 8 }}>
        <Button variant="outline" onClick={() => setLoading((v) => !v)}>Toggle loading</Button>
        <Button variant="outline" onClick={() => setEmpty((v) => !v)}>Toggle empty</Button>
      </div>
    </div>
  );
}
```

## 8. Command Palette Dismiss Guard
```tsx
import * as React from "react";
import { Button, CommandPalette } from "@aurora-ui/react";

export function GuardedCommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [guardDismiss, setGuardDismiss] = React.useState(true);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open palette
      </Button>
      <Button variant="ghost" onClick={() => setGuardDismiss((v) => !v)}>
        {guardDismiss ? "Disable guard" : "Enable guard"}
      </Button>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
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
          { key: "approve", label: "Approve release" },
          { key: "reject", label: "Reject release" }
        ]}
      />
    </div>
  );
}
```

## 9. Command Palette Escape-First Query Clear
```tsx
import * as React from "react";
import { CommandPalette } from "@aurora-ui/react";

export function SearchFirstPalette() {
  const [open, setOpen] = React.useState(true);
  const [query, setQuery] = React.useState("");

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      onQueryChange={setQuery}
      clearQueryOnEscape
      commands={[
        { key: "publish", label: "Publish Release", keywords: ["release"] },
        { key: "notes", label: "Open Release Notes", keywords: ["notes"] }
      ]}
    />
  );
}
```

## 10. Silent Background Toast
```tsx
import * as React from "react";
import { Button, Toast } from "@aurora-ui/react";

export function SilentBackgroundToast() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Trigger silent update
      </Button>
      <Toast
        open={open}
        onClose={() => setOpen(false)}
        title="Background sync update"
        description="Artifact metadata refreshed in background."
        live="off"
        duration={0}
        closeLabel="Dismiss silent toast"
      />
    </>
  );
}
```

## 11. Keyboard Discoverability Pattern (Tabs + Palette + Toast)
```tsx
import * as React from "react";
import { Button, CommandPalette, Tabs, Toast, type TabItem } from "@aurora-ui/react";

const workflowTabs: TabItem[] = [
  { key: "draft", label: "Draft", content: "Draft stage checks", description: "Authoring and copy review" },
  { key: "release", label: "Release", content: "Release stage checks", description: "QA and deployment" }
];

export function KeyboardDiscoverabilityDemo() {
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const [toastOpen, setToastOpen] = React.useState(false);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <p style={{ margin: 0 }}>
        Manual tabs advertise <code>Enter</code>/<code>Space</code>, command palette lists navigation shortcuts,
        and dismissable toast advertises <code>Escape</code> through <code>aria-keyshortcuts</code>.
      </p>

      <Tabs ariaLabel="Release workflow tabs" items={workflowTabs} defaultValue="draft" activationMode="manual" />

      <div style={{ display: "flex", gap: 8 }}>
        <Button variant="outline" onClick={() => setPaletteOpen(true)}>
          Open command palette
        </Button>
        <Button variant="outline" onClick={() => setToastOpen(true)}>
          Trigger escapable toast
        </Button>
      </div>

      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        commands={[
          { key: "publish", label: "Publish release", keywords: ["deploy", "ship"] },
          { key: "rollback", label: "Rollback release", keywords: ["recover"] }
        ]}
      />

      <Toast
        open={toastOpen}
        onOpenChange={setToastOpen}
        title="Release checks ready"
        description="Press Escape to dismiss this notification."
        duration={0}
      />
    </div>
  );
}
```

## 12. Overlay Close Reason Trace Template
```tsx
import * as React from "react";
import { Dialog } from "@aurora-ui/react";

export function OverlayCloseTelemetry() {
  const [open, setOpen] = React.useState(false);
  const [trace, setTrace] = React.useState<string[]>([]);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setTrace((prev) => [...prev, `open:${String(next)}`]);
        setOpen(next);
      }}
      onCloseReason={(reason) => {
        setTrace((prev) => [...prev, `reason:${reason}`]);
      }}
      title="Close reason telemetry"
    >
      <pre aria-label="overlay close trace">{trace.join(" -> ") || "N/A"}</pre>
    </Dialog>
  );
}
```

## 13. Overlay Close-Reason Telemetry Panel
```tsx
import * as React from "react";
import { Button, CommandPalette, Dialog, Drawer, Popover, Toast } from "@aurora-ui/react";

export function OverlayTelemetryPanel() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const [toastOpen, setToastOpen] = React.useState(false);
  const [dialogReason, setDialogReason] = React.useState("none");
  const [drawerReason, setDrawerReason] = React.useState("none");
  const [paletteReason, setPaletteReason] = React.useState("none");
  const [popoverReason, setPopoverReason] = React.useState("none");
  const [toastReason, setToastReason] = React.useState("none");

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Button onClick={() => setDialogOpen(true)}>Dialog</Button>
        <Button variant="outline" onClick={() => setDrawerOpen(true)}>Drawer</Button>
        <Button variant="ghost" onClick={() => setPaletteOpen(true)}>Command Palette</Button>
        <Button variant="outline" onClick={() => setToastOpen(true)}>Toast</Button>
        <Popover triggerLabel="Popover" onCloseReason={setPopoverReason}>
          <p style={{ margin: 0 }}>Popover close-reason demo.</p>
        </Popover>
      </div>

      <pre style={{ margin: 0 }}>{JSON.stringify({ dialogReason, drawerReason, paletteReason, popoverReason, toastReason }, null, 2)}</pre>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen} onCloseReason={setDialogReason} title="Dialog telemetry">
        <p style={{ margin: 0 }}>Close me via button / Escape / outside pointer.</p>
      </Dialog>
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} onCloseReason={setDrawerReason} title="Drawer telemetry">
        <p style={{ margin: 0 }}>Close me via button / Escape / outside pointer.</p>
      </Drawer>
      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        onCloseReason={setPaletteReason}
        commands={[{ key: "noop", label: "No-op command" }]}
      />
      <Toast
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        onCloseReason={setToastReason}
        title="Toast telemetry"
        description="Observe close-button / Escape / timeout."
        duration={1200}
      />
    </div>
  );
}
```

## 14. Tabs and Table Telemetry Binding
```tsx
import * as React from "react";
import { Table, Tabs, type TableSortDirection } from "@aurora-ui/react";

const columns = [
  { key: "component", header: "Component", sortable: true, rowHeader: true },
  { key: "status", header: "Status", sortable: true }
];

const rows = [
  { component: "Button", status: "stable" },
  { component: "Dialog", status: "stable" },
  { component: "StreamingCodeBlock", status: "beta" }
];

export function DataTelemetry() {
  const [activeTab, setActiveTab] = React.useState("overview");
  const [sortState, setSortState] = React.useState("component:asc");

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        items={[
          { key: "overview", label: "Overview", content: <p style={{ margin: 0 }}>Overview panel.</p> },
          { key: "activity", label: "Activity", content: <p style={{ margin: 0 }}>Activity panel.</p> },
          { key: "settings", label: "Settings", content: <p style={{ margin: 0 }}>Settings panel.</p> }
        ]}
      />

      <Table
        caption="Readiness"
        columns={columns}
        data={rows}
        defaultSortKey="component"
        onSortChange={(key, direction: TableSortDirection) => setSortState(`${key}:${direction}`)}
      />

      <p style={{ margin: 0 }}>activeTab={activeTab}</p>
      <p style={{ margin: 0 }}>sortState={sortState}</p>
    </div>
  );
}
```
