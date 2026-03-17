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
