import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  Alert,
  AuroraProvider,
  Badge,
  Button,
  Checkbox,
  CommandPalette,
  Dialog,
  Drawer,
  Dropdown,
  Empty,
  GlobalStyles,
  Input,
  LoadingDots,
  MessageBubble,
  Popover,
  Progress,
  PromptInput,
  RadioGroup,
  ReasoningPanel,
  Select,
  Skeleton,
  StreamingCodeBlock,
  StreamingText,
  Switch,
  Tag,
  Textarea,
  Toast,
  Tooltip
} from "@aurora-ui/react";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ display: "grid", gap: 12 }}>
      <h2 style={{ margin: 0, fontSize: 18 }}>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [toastOpen, setToastOpen] = React.useState(false);
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const [switchChecked, setSwitchChecked] = React.useState(true);
  const [submittedPrompt, setSubmittedPrompt] = React.useState("Build a minimal auth flow with OTP fallback");

  return (
    <AuroraProvider theme="core-light">
      <GlobalStyles />
      <main
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: 24,
          display: "grid",
          gap: 28,
          fontFamily: "var(--aurora-font-family-base)",
          color: "var(--aurora-text-primary)"
        }}
      >
        <header style={{ display: "grid", gap: 10 }}>
          <h1 style={{ margin: 0, fontSize: 32 }}>Aurora UI Demo</h1>
          <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
            Token-first React component library with AI interaction patterns.
          </p>
        </header>

        <Section title="Basic Components">
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Tag>Design Token</Tag>
            <Badge>Default</Badge>
            <Badge tone="success">Stable</Badge>
            <Badge tone="danger">Breaking</Badge>
          </div>
          <div style={{ display: "grid", gap: 10, maxWidth: 420 }}>
            <Input placeholder="Email" />
            <Textarea placeholder="Message" />
            <Select defaultValue="react">
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="svelte">Svelte</option>
            </Select>
            <Checkbox label="Enable analytics" defaultChecked />
            <RadioGroup
              name="size"
              value="m"
              options={[
                { label: "Small", value: "s" },
                { label: "Medium", value: "m" },
                { label: "Large", value: "l" }
              ]}
            />
            <Switch checked={switchChecked} onCheckedChange={setSwitchChecked} label="Live updates" />
          </div>
        </Section>

        <Section title="Feedback & States">
          <Alert title="Network recovered" tone="success">
            All queued jobs were synchronized.
          </Alert>
          <Progress value={62} />
          <div style={{ display: "grid", gap: 8, maxWidth: 320 }}>
            <Skeleton height={14} />
            <Skeleton height={14} width="80%" />
            <Skeleton height={14} width="65%" />
          </div>
          <Empty title="No records found" description="Create your first workflow to start collecting events." action={<Button>Create workflow</Button>} />
          <LoadingDots />
          <StreamingText text="Streaming response in progress..." />
        </Section>

        <Section title="Overlays & Navigation">
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Tooltip content="Runs a dry-run build">
              <Button variant="outline">Hover me</Button>
            </Tooltip>
            <Popover triggerLabel="Open Popover">
              <p style={{ margin: 0 }}>This popover is built with Aurora primitives.</p>
            </Popover>
            <Dropdown
              label="Actions"
              items={[
                { key: "a", label: "Duplicate" },
                { key: "b", label: "Archive" },
                { key: "c", label: "Delete" }
              ]}
            />
            <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
            <Button variant="outline" onClick={() => setDrawerOpen(true)}>
              Open Drawer
            </Button>
            <Button variant="ghost" onClick={() => setPaletteOpen(true)}>
              Command Palette
            </Button>
          </div>
        </Section>

        <Section title="AI Components">
          <PromptInput
            onSubmit={(prompt) => {
              setSubmittedPrompt(prompt);
              setToastOpen(true);
            }}
          />
          <div style={{ display: "grid", gap: 10 }}>
            <MessageBubble speaker="user">{submittedPrompt}</MessageBubble>
            <MessageBubble speaker="assistant">
              <StreamingText text="I can scaffold this flow with form validation and fallback rate-limiting." speed={12} />
            </MessageBubble>
          </div>
          <ReasoningPanel
            steps={[
              "Parse user intent and identify required components.",
              "Generate form schema and OTP fallback path.",
              "Prepare integration checklist and edge-case validation."
            ]}
          />
          <StreamingCodeBlock
            language="tsx"
            code={`export function OtpFallback() {
  const [step, setStep] = useState("verify");
  return <div>{step}</div>;
}`}
          />
        </Section>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen} title="Dialog Example">
          <p style={{ margin: 0 }}>Modal built with FocusScope + DismissableLayer.</p>
        </Dialog>

        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} title="Drawer Example">
          <p style={{ margin: 0 }}>This drawer can host contextual forms, filters, or details.</p>
        </Drawer>

        <CommandPalette
          open={paletteOpen}
          onOpenChange={setPaletteOpen}
          commands={[
            { key: "open-settings", label: "Open Settings" },
            { key: "create-project", label: "Create Project" },
            { key: "run-tests", label: "Run Tests" }
          ]}
        />

        <Toast
          open={toastOpen}
          onClose={() => setToastOpen(false)}
          title="Prompt submitted"
          description="Your AI request is now in the queue."
        />
      </main>
    </AuroraProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
