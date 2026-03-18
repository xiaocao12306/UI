# Component Recipes

## 1) Button + Input (Prompt Bar)
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

## 2) Dialog Form Flow
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

## 3) Command Palette with Actions
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

## 4) Theme Wrapper
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

## 5) Blocking Dropdown Approval Flow
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

## 6) Command Palette Batch Mode
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

## 7) Table Loading + Empty States
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

## 8) Command Palette Conditional Dismiss Guard
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

## 9) Command Palette Escape Clears Query First
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

## 10) Silent Toast for Passive Background Updates
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
