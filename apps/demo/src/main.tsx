import * as React from "react";
import { createRoot } from "react-dom/client";
import type { ThemeName } from "@aurora-ui/tokens";
import {
  Alert,
  AuroraProvider,
  Badge,
  Button,
  Checkbox,
  Combobox,
  CommandPalette,
  DatePicker,
  Dialog,
  Drawer,
  Dropdown,
  Empty,
  FormField,
  GlobalStyles,
  Input,
  LoadingDots,
  MessageBubble,
  Popover,
  Pagination,
  Progress,
  PromptInput,
  RadioGroup,
  ReasoningPanel,
  Select,
  Skeleton,
  StreamingCodeBlock,
  StreamingText,
  Switch,
  Table,
  Tag,
  Tabs,
  Textarea,
  Toast,
  Tooltip
} from "@aurora-ui/react";

const sectionLinks = [
  { id: "basic-components", label: "Basic" },
  { id: "data-navigation", label: "Data" },
  { id: "feedback-states", label: "States" },
  { id: "overlays-navigation", label: "Overlays" },
  { id: "ai-components", label: "AI" }
];
const availableThemes: ThemeName[] = ["core-light", "core-dark", "glass", "neo-brutal"];
const themeStorageKey = "aurora-ui-demo-theme";
const frameworkOptions = [
  { value: "react", label: "React", keywords: ["library", "jsx"] },
  { value: "vue", label: "Vue", keywords: ["framework"] },
  { value: "svelte", label: "Svelte", keywords: ["compiler"] },
  { value: "solid", label: "Solid", keywords: ["signals"], disabled: true }
];
const releaseFeed = [
  "v0.1.0: Button interaction states promoted to production grade.",
  "v0.1.0: Dialog close policy docs updated for a11y consistency.",
  "v0.1.0: CommandPalette keyboard map expanded with Home/End.",
  "v0.1.0: Toast timer path stabilized for hover pause lifecycle.",
  "v0.1.0: Tabs and Table data keyboard regression suite added.",
  "v0.1.0: Storybook component API docs expanded with edge recipes.",
  "v0.1.0: Release dry-run evidence recorded for all npm packages."
];
const readinessRows = [
  { component: "Button", status: "Stable", coverage: 92 },
  { component: "Dialog", status: "Stable", coverage: 88 },
  { component: "StreamingCodeBlock", status: "Beta", coverage: 73 }
];

function Section({
  id,
  title,
  description,
  children
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ display: "grid", gap: 12, scrollMarginTop: 84 }}>
      <header style={{ display: "grid", gap: 4 }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>{title}</h2>
        {description ? <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>{description}</p> : null}
      </header>
      <div
        style={{
          border: "1px solid var(--aurora-border-default)",
          borderRadius: "var(--aurora-radius-lg)",
          background: "var(--aurora-surface-elevated)",
          boxShadow: "var(--aurora-shadow-sm)",
          padding: 16,
          display: "grid",
          gap: 14
        }}
      >
        {children}
      </div>
    </section>
  );
}

function App() {
  const [theme, setTheme] = React.useState<ThemeName>(() => {
    if (typeof window === "undefined") {
      return "core-light";
    }

    const storedTheme = window.localStorage.getItem(themeStorageKey) as ThemeName | null;
    return storedTheme && availableThemes.includes(storedTheme) ? storedTheme : "core-light";
  });
  const [activeSection, setActiveSection] = React.useState(sectionLinks[0].id);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [toastOpen, setToastOpen] = React.useState(false);
  const [silentToastOpen, setSilentToastOpen] = React.useState(false);
  const [blockingToastOpen, setBlockingToastOpen] = React.useState(false);
  const [stackedToastOpen, setStackedToastOpen] = React.useState({ first: false, second: false });
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const [paletteBlocking, setPaletteBlocking] = React.useState(false);
  const [paletteDismissGuard, setPaletteDismissGuard] = React.useState(false);
  const [palettePersistent, setPalettePersistent] = React.useState(false);
  const [paletteEscapeClearsQuery, setPaletteEscapeClearsQuery] = React.useState(true);
  const [paletteQueryTelemetry, setPaletteQueryTelemetry] = React.useState("");
  const [paletteCloseReason, setPaletteCloseReason] = React.useState("none");
  const [popoverCloseReason, setPopoverCloseReason] = React.useState("none");
  const [dialogCloseReason, setDialogCloseReason] = React.useState("none");
  const [drawerCloseReason, setDrawerCloseReason] = React.useState("none");
  const [toastEscapeGuard, setToastEscapeGuard] = React.useState(false);
  const [switchChecked, setSwitchChecked] = React.useState(true);
  const [submittedPrompt, setSubmittedPrompt] = React.useState("Build a minimal auth flow with OTP fallback");
  const [framework, setFramework] = React.useState("react");
  const [releaseDate, setReleaseDate] = React.useState("2026-03-17");
  const [feedPage, setFeedPage] = React.useState(1);
  const [rtlFeedPage, setRtlFeedPage] = React.useState(4);
  const [tableLoading, setTableLoading] = React.useState(false);
  const [tableEmpty, setTableEmpty] = React.useState(false);
  const feedPageSize = 3;
  const feedPageCount = Math.ceil(releaseFeed.length / feedPageSize);
  const visibleFeed = releaseFeed.slice((feedPage - 1) * feedPageSize, feedPage * feedPageSize);
  const tableRows = tableEmpty ? [] : readinessRows;

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isPaletteShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (!isPaletteShortcut) {
        return;
      }

      event.preventDefault();
      setPaletteOpen(true);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  React.useEffect(() => {
    const syncActiveSection = () => {
      const hash = window.location.hash.replace("#", "");
      const match = sectionLinks.find((item) => item.id === hash);
      setActiveSection(match?.id ?? sectionLinks[0].id);
    };

    syncActiveSection();
    window.addEventListener("hashchange", syncActiveSection);
    return () => {
      window.removeEventListener("hashchange", syncActiveSection);
    };
  }, []);

  return (
    <AuroraProvider theme={theme}>
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
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <h1 style={{ margin: 0, fontSize: 32 }}>Aurora UI Demo</h1>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <label htmlFor="theme-select" style={{ color: "var(--aurora-text-secondary)" }}>
                Theme
              </label>
              <Select
                id="theme-select"
                value={theme}
                onChange={(event) => setTheme(event.target.value as ThemeName)}
                style={{ width: 180 }}
              >
                <option value="core-light">core-light</option>
                <option value="core-dark">core-dark</option>
                <option value="glass">glass</option>
                <option value="neo-brutal">neo-brutal</option>
              </Select>
            </div>
          </div>
          <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
            Token-first React component library with AI interaction patterns. Current theme: <strong>{theme}</strong>
          </p>
          <nav
            aria-label="Demo sections"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              padding: 10,
              border: "1px solid var(--aurora-border-default)",
              borderRadius: "var(--aurora-radius-md)",
              background: "var(--aurora-surface-elevated)"
            }}
          >
            {sectionLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "location" : undefined}
                onClick={() => setActiveSection(item.id)}
                style={{
                  color: "var(--aurora-text-primary)",
                  textDecoration: "none",
                  fontWeight: "var(--aurora-font-weight-medium)",
                  border:
                    activeSection === item.id
                      ? "1px solid var(--aurora-accent-default)"
                      : "1px solid var(--aurora-border-default)",
                  background:
                    activeSection === item.id ? "color-mix(in srgb, var(--aurora-accent-default) 12%, transparent)" : "transparent",
                  borderRadius: 999,
                  padding: "4px 10px"
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <Section
          id="basic-components"
          title="Basic Components"
          description="Core controls and form primitives with theme-driven tokens."
        >
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Tag>Design Token</Tag>
            <Badge>Default</Badge>
            <Badge tone="success">Stable</Badge>
            <Badge tone="danger">Breaking</Badge>
          </div>
          <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
            <FormField label="Email" htmlFor="email" required description="Used for release notifications.">
              <Input id="email" placeholder="name@company.com" />
            </FormField>
            <FormField label="Message" htmlFor="message">
              <Textarea id="message" placeholder="Share your feedback..." />
            </FormField>
            <FormField label="Framework" htmlFor="framework">
              <Select id="framework" defaultValue="react">
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="svelte">Svelte</option>
              </Select>
            </FormField>
            <FormField label="Framework Combobox" htmlFor="framework-combobox" description={`Current selection: ${framework}`}>
              <Combobox
                id="framework-combobox"
                ariaLabel="Framework Combobox"
                options={frameworkOptions}
                value={framework}
                onValueChange={setFramework}
              />
            </FormField>
            <FormField label="Release Date" htmlFor="release-date" description={`Selected date: ${releaseDate}`}>
              <DatePicker
                id="release-date"
                aria-label="Release Date"
                value={releaseDate}
                onValueChange={setReleaseDate}
                min="2026-01-01"
                max="2026-12-31"
              />
            </FormField>
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
            <Switch
              checked={switchChecked}
              onCheckedChange={setSwitchChecked}
              label="Live updates"
              description="Automatically refresh release feed every 30 seconds."
            />
          </div>
        </Section>

        <Section
          id="data-navigation"
          title="Data & Navigation"
          description="Common data surfaces and navigation containers."
        >
          <Tabs
            defaultValue="overview"
            items={[
              { key: "overview", label: "Overview", content: <p style={{ margin: 0 }}>Project health and adoption summary.</p> },
              { key: "activity", label: "Activity", content: <p style={{ margin: 0 }}>Recent events, deploys, and alerts.</p> },
              { key: "settings", label: "Settings", content: <p style={{ margin: 0 }}>Theme, access control, and preferences.</p> }
            ]}
          />
          <div style={{ display: "grid", gap: 8 }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>Manual Activation Tabs</h3>
            <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 14 }}>
              Arrow keys move focus only; press Enter or Space to activate and render the target panel.
            </p>
            <Tabs
              ariaLabel="Manual release workflow tabs"
              activationMode="manual"
              defaultValue="draft"
              items={[
                { key: "draft", label: "Draft", content: <p style={{ margin: 0 }}>Draft checklist and scoped API notes.</p> },
                { key: "review", label: "Review", content: <p style={{ margin: 0 }}>Cross-team review and accessibility signoff.</p> },
                { key: "ship", label: "Ship", content: <p style={{ margin: 0 }}>Tag release, publish packages, and announce changelog.</p> }
              ]}
            />
          </div>
          <div dir="rtl" style={{ display: "grid", gap: 8 }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>RTL Direction Tabs</h3>
            <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 14 }}>
              In RTL layouts, ArrowRight moves to the previous tab and ArrowLeft moves to the next tab.
            </p>
            <Tabs
              ariaLabel="RTL release workflow tabs"
              defaultValue="spec"
              items={[
                { key: "spec", label: "Spec", content: <p style={{ margin: 0 }}>Specification scope and API contracts.</p> },
                { key: "review", label: "Review", content: <p style={{ margin: 0 }}>Cross-functional review and QA checkpoints.</p> },
                { key: "release", label: "Release", content: <p style={{ margin: 0 }}>Release checklist and rollout sequencing.</p> }
              ]}
            />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>Vertical Orientation Tabs</h3>
            <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 14 }}>
              ArrowUp and ArrowDown drive focus + activation flow in vertical tablists.
            </p>
            <Tabs
              ariaLabel="Vertical release stage tabs"
              orientation="vertical"
              defaultValue="backlog"
              items={[
                { key: "backlog", label: "Backlog", content: <p style={{ margin: 0 }}>Backlog scope and release intent.</p> },
                { key: "in-progress", label: "In Progress", content: <p style={{ margin: 0 }}>Implementation and QA checkpoints.</p> },
                { key: "completed", label: "Completed", content: <p style={{ margin: 0 }}>Ready for release notes and rollout.</p> }
              ]}
            />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>Manual Vertical Tabs</h3>
            <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 14 }}>
              In manual vertical mode, ArrowUp/ArrowDown move focus only; Enter or Space activates the focused stage.
            </p>
            <Tabs
              ariaLabel="Manual vertical release tabs"
              orientation="vertical"
              activationMode="manual"
              defaultValue="backlog"
              items={[
                { key: "backlog", label: "Backlog", content: <p style={{ margin: 0 }}>Backlog scope and release intent.</p> },
                { key: "review", label: "Review", content: <p style={{ margin: 0 }}>Review and signoff notes.</p>, disabled: true },
                { key: "ship", label: "Ship", content: <p style={{ margin: 0 }}>Ship checklist and release notes.</p> }
              ]}
            />
          </div>
          <Table
            caption="Component readiness metrics"
            defaultSortKey="component"
            loading={tableLoading}
            loadingContent="Syncing component readiness metrics..."
            emptyContent="No component readiness metrics yet."
            columns={[
              { key: "component", header: "Component", sortable: true, rowHeader: true },
              { key: "status", header: "Status", sortable: true },
              { key: "coverage", header: "Coverage", sortable: true, render: (row) => `${row.coverage}%` }
            ]}
            data={tableRows}
          />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Button variant="outline" onClick={() => setTableLoading((value) => !value)}>
              Toggle table loading
            </Button>
            <Button variant="outline" onClick={() => setTableEmpty((value) => !value)}>
              Toggle table empty state
            </Button>
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>Release Activity Feed</h3>
            <ul style={{ margin: 0, paddingLeft: 20, display: "grid", gap: 6 }}>
              {visibleFeed.map((entry) => (
                <li key={entry} style={{ color: "var(--aurora-text-secondary)" }}>
                  {entry}
                </li>
              ))}
            </ul>
            <Pagination
              ariaLabel="Release feed pagination"
              page={feedPage}
              pageCount={feedPageCount}
              onPageChange={setFeedPage}
            />
          </div>
          <div dir="rtl" style={{ display: "grid", gap: 10 }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>RTL Pagination</h3>
            <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 14 }}>
              In RTL layouts, ArrowRight moves to the previous page and ArrowLeft moves to the next page.
            </p>
            <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 14 }}>
              Current RTL page:{" "}
              <strong data-testid="rtl-pagination-page" style={{ color: "var(--aurora-text-primary)" }}>
                {rtlFeedPage}
              </strong>
            </p>
            <Pagination
              ariaLabel="RTL release pagination"
              page={rtlFeedPage}
              pageCount={7}
              onPageChange={setRtlFeedPage}
            />
          </div>
        </Section>

        <Section
          id="feedback-states"
          title="Feedback & States"
          description="System status, loading skeletons, and streaming indicators."
        >
          <Alert title="Network recovered" tone="success">
            All queued jobs were synchronized.
          </Alert>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Button variant="outline" onClick={() => setSilentToastOpen(true)}>
              Trigger silent toast
            </Button>
            <Button variant="outline" onClick={() => setBlockingToastOpen(true)}>
              Trigger blocking toast
            </Button>
            <Button
              variant="outline"
              onClick={() => setStackedToastOpen({ first: true, second: true })}
            >
              Trigger stacked toasts
            </Button>
          </div>
          <Switch
            checked={toastEscapeGuard}
            onCheckedChange={setToastEscapeGuard}
            label="Guard prompt toast Escape at toast layer"
            description="Uses Toast onEscapeKeyDown + preventDefault() while enabled."
          />
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

        <Section
          id="overlays-navigation"
          title="Overlays & Navigation"
          description="Layered surfaces with keyboard and pointer dismissal behavior."
        >
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Tooltip content="Runs a dry-run build">
              <Button variant="outline">Hover me</Button>
            </Tooltip>
            <Popover triggerLabel="Open Popover" onCloseReason={setPopoverCloseReason}>
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
          <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 14 }}>
            Popover close reason telemetry:{" "}
            <strong data-testid="popover-close-reason-demo" style={{ color: "var(--aurora-text-primary)" }}>
              {popoverCloseReason}
            </strong>
          </p>
          <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 14 }}>
            Dialog close reason telemetry:{" "}
            <strong data-testid="dialog-close-reason-demo" style={{ color: "var(--aurora-text-primary)" }}>
              {dialogCloseReason}
            </strong>
          </p>
          <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 14 }}>
            Drawer close reason telemetry:{" "}
            <strong data-testid="drawer-close-reason-demo" style={{ color: "var(--aurora-text-primary)" }}>
              {drawerCloseReason}
            </strong>
          </p>
          <div style={{ display: "grid", gap: 6, maxWidth: 300 }}>
            <label htmlFor="overlay-outside-target" style={{ color: "var(--aurora-text-secondary)", fontSize: 14 }}>
              Overlay outside focus target
            </label>
            <Input id="overlay-outside-target" placeholder="Click here to validate outside-dismiss focus." />
          </div>
          <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 14 }}>
            Keyboard shortcut: press{" "}
            <kbd
              style={{
                fontFamily: "var(--aurora-font-family-mono)",
                border: "1px solid var(--aurora-border-default)",
                borderRadius: 6,
                padding: "2px 6px"
              }}
            >
              Ctrl
            </kbd>
            /
            <kbd
              style={{
                fontFamily: "var(--aurora-font-family-mono)",
                border: "1px solid var(--aurora-border-default)",
                borderRadius: 6,
                padding: "2px 6px"
              }}
            >
              Cmd
            </kbd>{" "}
            +{" "}
            <kbd
              style={{
                fontFamily: "var(--aurora-font-family-mono)",
                border: "1px solid var(--aurora-border-default)",
                borderRadius: 6,
                padding: "2px 6px"
              }}
            >
              K
            </kbd>{" "}
            to open Command Palette.
          </p>
          <Switch
            checked={paletteBlocking}
            onCheckedChange={setPaletteBlocking}
            label="Block palette dismiss gestures"
            description="Disable Escape and outside-click dismissal for approval workflows."
          />
          <Switch
            checked={paletteDismissGuard}
            onCheckedChange={setPaletteDismissGuard}
            label="Guard palette dismiss via event hooks"
            description="Use onEscapeKeyDown/onPointerDownOutside with preventDefault() while enabled."
          />
          <Switch
            checked={palettePersistent}
            onCheckedChange={setPalettePersistent}
            label="Keep palette open after command select"
            description="Enable batch command execution without reopening the palette."
          />
          <Switch
            checked={paletteEscapeClearsQuery}
            onCheckedChange={setPaletteEscapeClearsQuery}
            label="Escape clears palette query first"
            description="When enabled, first Escape clears the query and second Escape dismisses."
          />
          <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 14 }}>
            Palette query telemetry:{" "}
            <strong data-testid="palette-query-telemetry" style={{ color: "var(--aurora-text-primary)" }}>
              {paletteQueryTelemetry || "N/A"}
            </strong>
          </p>
          <p style={{ margin: 0, color: "var(--aurora-text-secondary)", fontSize: 14 }}>
            Palette close reason telemetry:{" "}
            <strong data-testid="palette-close-reason-telemetry" style={{ color: "var(--aurora-text-primary)" }}>
              {paletteCloseReason}
            </strong>
          </p>
        </Section>

        <Section id="ai-components" title="AI Components" description="Prompt, reasoning, and streaming response building blocks.">
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

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen} onCloseReason={setDialogCloseReason} title="Dialog Example">
          <p style={{ margin: 0 }}>Modal built with FocusScope + DismissableLayer.</p>
        </Dialog>

        <Drawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          title="Drawer Example"
          description="Contextual panel for filters, details, and quick actions."
          onCloseReason={setDrawerCloseReason}
        >
          <p style={{ margin: 0 }}>This drawer can host contextual forms, filters, or details.</p>
        </Drawer>

        <CommandPalette
          open={paletteOpen}
          onOpenChange={setPaletteOpen}
          closeOnSelect={!palettePersistent}
          clearQueryOnEscape={paletteEscapeClearsQuery}
          closeOnEscape={!paletteBlocking}
          closeOnOutsidePointer={!paletteBlocking}
          onQueryChange={setPaletteQueryTelemetry}
          onCloseReason={setPaletteCloseReason}
          onEscapeKeyDown={(event) => {
            if (paletteDismissGuard) {
              event.preventDefault();
            }
          }}
          onPointerDownOutside={(event) => {
            if (paletteDismissGuard) {
              event.preventDefault();
            }
          }}
          commands={[
            { key: "open-settings", label: "Open Settings", keywords: ["preferences", "config"] },
            {
              key: "open-dialog",
              label: "Open Dialog",
              keywords: ["modal", "overlay"],
              onSelect: () => setDialogOpen(true)
            },
            {
              key: "open-drawer",
              label: "Open Drawer",
              keywords: ["panel", "sidebar"],
              onSelect: () => setDrawerOpen(true)
            },
            {
              key: "create-project",
              label: "Create Project",
              keywords: ["new", "workspace"],
              onSelect: () => setToastOpen(true)
            },
            {
              key: "archive-workspace",
              label: "Archive Workspace",
              keywords: ["archive", "lock"],
              disabled: true
            },
            { key: "run-tests", label: "Run Tests", keywords: ["ci", "quality"] }
          ]}
        />

        <Toast
          open={toastOpen}
          onClose={() => setToastOpen(false)}
          title="Prompt submitted"
          description="Your AI request is now in the queue."
          onEscapeKeyDown={(event) => {
            if (toastEscapeGuard) {
              event.preventDefault();
            }
          }}
        />
        <Toast
          open={silentToastOpen}
          onClose={() => setSilentToastOpen(false)}
          title="Background sync update"
          description="Artifact metadata refreshed in background."
          duration={0}
          live="off"
          closeLabel="Dismiss silent toast"
          position="bottom-right"
        />
        <Toast
          open={blockingToastOpen}
          onClose={() => setBlockingToastOpen(false)}
          title="Release approval required"
          description="Escalate to owner before publishing. Escape is disabled in this toast."
          tone="warning"
          duration={0}
          closeOnEscape={false}
          closeLabel="Dismiss blocking notice"
          ariaLabel="Release approval required notification"
          position="top-right"
        />
        <Toast
          open={stackedToastOpen.first}
          onClose={() => setStackedToastOpen((current) => ({ ...current, first: false }))}
          title="Sync started"
          description="Baseline snapshot sync is queued."
          duration={0}
          position="top-left"
        />
        <Toast
          open={stackedToastOpen.second}
          onClose={() => setStackedToastOpen((current) => ({ ...current, second: false }))}
          title="Sync completed"
          description="All artifacts are available for review."
          tone="success"
          duration={0}
          position="top-left"
        />
      </main>
    </AuroraProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
