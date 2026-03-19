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
import "./main.css";

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
const mutedBodyStyle: React.CSSProperties = {
  margin: 0,
  color: "var(--aurora-text-secondary)",
  fontSize: 14,
  lineHeight: 1.55
};
const sectionSubheadingStyle: React.CSSProperties = { margin: 0, fontSize: 16, letterSpacing: "0.01em" };
const sectionStyle: React.CSSProperties = { display: "grid", gap: 12, scrollMarginTop: 84 };
const sectionHeaderStyle: React.CSSProperties = { display: "grid", gap: 6 };
const sectionHeadingRowStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: 10 };
const sectionEyebrowStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: "0.11em",
  color: "var(--aurora-text-secondary)",
  padding: "3px 10px",
  borderRadius: 999,
  border: "1px solid color-mix(in srgb, var(--aurora-border-default) 72%, transparent)",
  background: "color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))"
};
const sectionCardStyle: React.CSSProperties = {
  border: "1px solid color-mix(in srgb, var(--aurora-border-default) 82%, transparent)",
  borderRadius: "var(--aurora-radius-lg)",
  background:
    "linear-gradient(180deg, color-mix(in srgb, var(--aurora-surface-elevated) 88%, var(--aurora-surface-default) 12%), var(--aurora-surface-elevated))",
  boxShadow: "var(--aurora-shadow-sm)",
  padding: 18,
  display: "grid",
  gap: 14,
  position: "relative",
  overflow: "hidden"
};
const appShellStyle: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--aurora-accent-default) 12%, transparent), transparent 42%), radial-gradient(circle at 100% 12%, color-mix(in srgb, var(--aurora-border-default) 24%, transparent), transparent 38%), linear-gradient(180deg, color-mix(in srgb, var(--aurora-surface-default) 94%, black 6%), var(--aurora-surface-default))",
  padding: "14px clamp(10px, 2.4vw, 24px) 22px"
};
const mainLayoutStyle: React.CSSProperties = {
  maxWidth: 1160,
  margin: "0 auto",
  padding: "24px clamp(16px, 3vw, 24px) 36px",
  borderRadius: "min(22px, 3.6vw)",
  border: "1px solid color-mix(in srgb, var(--aurora-border-default) 74%, transparent)",
  boxShadow: "var(--aurora-shadow-md)",
  display: "grid",
  gap: 30,
  fontFamily: "var(--aurora-font-family-base)",
  color: "var(--aurora-text-primary)",
  background:
    "radial-gradient(circle at 85% -10%, color-mix(in srgb, var(--aurora-accent-default) 12%, transparent), transparent 36%), radial-gradient(circle at 12% 24%, color-mix(in srgb, var(--aurora-border-default) 24%, transparent), transparent 38%), color-mix(in srgb, var(--aurora-surface-default) 96%, transparent)"
};
const heroPanelStyle: React.CSSProperties = {
  display: "grid",
  gap: 18,
  border: "1px solid color-mix(in srgb, var(--aurora-accent-default) 30%, var(--aurora-border-default))",
  borderRadius: "var(--aurora-radius-lg)",
  background:
    "radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--aurora-accent-default) 16%, transparent), transparent 45%), linear-gradient(180deg, var(--aurora-surface-elevated), color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default) 30%))",
  boxShadow: "var(--aurora-shadow-md)",
  padding: "20px clamp(14px, 2vw, 22px) 18px"
};
const heroHeadlineStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12
};
const heroTitleBlockStyle: React.CSSProperties = { display: "grid", gap: 8 };
const heroLabelStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  letterSpacing: "0.11em",
  textTransform: "uppercase",
  color: "var(--aurora-text-secondary)"
};
const heroTitleStyle: React.CSSProperties = { margin: 0, fontSize: "clamp(28px, 4vw, 38px)", letterSpacing: "-0.03em" };
const heroOverviewStyle: React.CSSProperties = {
  display: "grid",
  gap: 12,
  gridTemplateColumns: "minmax(0, 1fr) minmax(220px, 300px)"
};
const heroOverviewCopyStyle: React.CSSProperties = { display: "grid", gap: 10 };
const heroBadgeRowStyle: React.CSSProperties = { display: "flex", flexWrap: "wrap", gap: 8 };
const heroContextCardStyle: React.CSSProperties = {
  margin: 0,
  display: "grid",
  gap: 8,
  alignContent: "start",
  border: "1px solid color-mix(in srgb, var(--aurora-border-default) 84%, transparent)",
  borderRadius: "var(--aurora-radius-md)",
  background: "color-mix(in srgb, var(--aurora-surface-elevated) 90%, var(--aurora-surface-default))",
  boxShadow: "var(--aurora-shadow-sm)",
  padding: "10px 12px"
};
const heroContextLabelStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "var(--aurora-text-secondary)"
};
const heroContextValueStyle: React.CSSProperties = { margin: 0, fontSize: 16, letterSpacing: "-0.01em" };
const heroContextMetaStyle: React.CSSProperties = { ...mutedBodyStyle, fontSize: 13 };
const sectionNavShellStyle: React.CSSProperties = { display: "grid", gap: 8 };
const sectionNavLabelStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  color: "var(--aurora-text-secondary)",
  letterSpacing: "0.08em",
  textTransform: "uppercase"
};
const sectionNavStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  padding: 10,
  border: "1px solid color-mix(in srgb, var(--aurora-border-default) 80%, transparent)",
  borderRadius: "var(--aurora-radius-md)",
  background: "color-mix(in srgb, var(--aurora-surface-elevated) 92%, var(--aurora-surface-default))",
  backdropFilter: "blur(4px)"
};
const keyboardHintStyle: React.CSSProperties = {
  fontFamily: "var(--aurora-font-family-mono)",
  border: "1px solid var(--aurora-border-default)",
  borderRadius: 6,
  padding: "2px 6px"
};
const heroStatsGridStyle: React.CSSProperties = {
  display: "grid",
  gap: 10,
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))"
};
const heroStatCardStyle: React.CSSProperties = {
  borderRadius: "var(--aurora-radius-md)",
  border: "1px solid color-mix(in srgb, var(--aurora-border-default) 76%, transparent)",
  background: "color-mix(in srgb, var(--aurora-surface-elevated) 92%, var(--aurora-surface-default))",
  boxShadow: "var(--aurora-shadow-sm)",
  padding: "10px 12px",
  display: "grid",
  gap: 4
};
const sectionNavLinkStyle: React.CSSProperties = {
  color: "var(--aurora-text-primary)",
  textDecoration: "none",
  fontWeight: "var(--aurora-font-weight-medium)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  position: "relative",
  border: "1px solid var(--aurora-border-default)",
  borderRadius: 999,
  padding: "6px 14px",
  fontSize: 13,
  transition:
    "background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"
};
const panelTitleStyle: React.CSSProperties = { margin: 0, fontSize: 15, letterSpacing: "-0.01em" };
const panelDescriptionStyle: React.CSSProperties = { ...mutedBodyStyle, fontSize: 13 };
const telemetryValueStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 22,
  maxWidth: "100%",
  padding: "1px 9px",
  borderRadius: 999,
  border: "1px solid color-mix(in srgb, var(--aurora-border-default) 84%, transparent)",
  background: "color-mix(in srgb, var(--aurora-surface-elevated) 76%, transparent)",
  fontFamily: '"IBM Plex Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace',
  fontSize: 12,
  letterSpacing: "0.01em",
  lineHeight: "18px",
  whiteSpace: "normal",
  overflowWrap: "anywhere",
  color: "var(--aurora-text-primary)",
  fontWeight: "var(--aurora-font-weight-semibold)"
};

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
  const headingId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={headingId} className="demo-section" style={sectionStyle}>
      <header className="demo-section-header" style={sectionHeaderStyle}>
        <div style={sectionHeadingRowStyle}>
          <p style={sectionEyebrowStyle}>{id.replaceAll("-", " ")}</p>
          <span aria-hidden="true" className="demo-section-heading-rule" />
        </div>
        <h2 id={headingId} style={{ margin: 0, fontSize: "clamp(21px, 2.1vw, 24px)", letterSpacing: "-0.015em" }}>
          {title}
        </h2>
        {description ? <p style={mutedBodyStyle}>{description}</p> : null}
      </header>
      <div className="demo-section-card" style={sectionCardStyle}>
        {children}
      </div>
    </section>
  );
}

function SectionNavLink({
  id,
  label,
  active,
  onNavigate
}: {
  id: string;
  label: string;
  active: boolean;
  onNavigate: () => void;
}) {
  const [hovered, setHovered] = React.useState(false);
  const [focusVisible, setFocusVisible] = React.useState(false);
  const focusIntentRef = React.useRef(true);

  const interactive = active || hovered || focusVisible;
  const activeBackground =
    "linear-gradient(180deg, color-mix(in srgb, var(--aurora-accent-default) 18%, transparent), color-mix(in srgb, var(--aurora-accent-default) 10%, transparent))";
  const idleBackground = hovered
    ? "color-mix(in srgb, var(--aurora-surface-elevated) 88%, var(--aurora-surface-default))"
    : "transparent";

  return (
    <a
      className="demo-section-nav-pill"
      href={`#${id}`}
      aria-current={active ? "location" : undefined}
      onClick={onNavigate}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onMouseDown={() => {
        focusIntentRef.current = false;
        setFocusVisible(false);
      }}
      onKeyDown={() => {
        focusIntentRef.current = true;
      }}
      onFocus={(event) => {
        setFocusVisible(resolveFocusVisibleState(event.currentTarget, focusIntentRef.current));
      }}
      onBlur={() => {
        setFocusVisible(false);
      }}
      style={{
        ...sectionNavLinkStyle,
        border: active ? "1px solid var(--aurora-accent-default)" : "1px solid var(--aurora-border-default)",
        background: active ? activeBackground : idleBackground,
        boxShadow: focusVisible
          ? "0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)"
          : interactive
            ? "var(--aurora-shadow-sm)"
            : "none",
        color: active || hovered ? "var(--aurora-text-primary)" : "var(--aurora-text-secondary)",
        transform: interactive ? "translateY(-1px)" : "translateY(0)"
      }}
    >
      {label}
    </a>
  );
}

function HeroStatCard({
  targetId,
  targetLabel,
  active,
  onNavigate,
  label,
  value,
  description
}: {
  targetId: string;
  targetLabel: string;
  active: boolean;
  onNavigate: (targetId: string) => void;
  label: string;
  value: string;
  description: string;
}) {
  const [hovered, setHovered] = React.useState(false);
  const [focusVisible, setFocusVisible] = React.useState(false);
  const focusIntentRef = React.useRef(true);

  return (
    <a
      className="demo-hero-stat-card"
      href={`#${targetId}`}
      aria-label={`Jump to ${targetLabel} section`}
      aria-current={active ? "location" : undefined}
      onClick={() => {
        onNavigate(targetId);
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onMouseDown={() => {
        focusIntentRef.current = false;
        setFocusVisible(false);
      }}
      onKeyDown={() => {
        focusIntentRef.current = true;
      }}
      onFocus={(event) => {
        setFocusVisible(resolveFocusVisibleState(event.currentTarget, focusIntentRef.current));
      }}
      onBlur={() => {
        setFocusVisible(false);
      }}
      style={{
        ...heroStatCardStyle,
        textDecoration: "none",
        color: "inherit",
        textAlign: "left",
        cursor: "pointer",
        border:
          active
            ? "1px solid color-mix(in srgb, var(--aurora-accent-default) 62%, var(--aurora-border-default))"
            : hovered || focusVisible
            ? "1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))"
            : heroStatCardStyle.border,
        boxShadow: focusVisible
          ? "0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent), var(--aurora-shadow-sm)"
          : active || hovered
            ? "var(--aurora-shadow-md)"
            : "var(--aurora-shadow-sm)",
        transform: active || hovered ? "translateY(-2px)" : "translateY(0)",
        transition:
          "transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--aurora-text-secondary)"
        }}
      >
        {label}
      </p>
      <strong style={{ fontSize: 18, letterSpacing: "-0.02em" }}>{value}</strong>
      <p style={{ ...mutedBodyStyle, fontSize: 12 }}>{description}</p>
    </a>
  );
}

function resolveFocusVisibleState(target: HTMLElement, fallback: boolean) {
  try {
    return target.matches(":focus-visible");
  } catch {
    return fallback;
  }
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
  const [toastTelemetryOpen, setToastTelemetryOpen] = React.useState(false);
  const [actionToastOpen, setActionToastOpen] = React.useState(false);
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
  const [paletteCloseTrace, setPaletteCloseTrace] = React.useState("none");
  const [popoverCloseReason, setPopoverCloseReason] = React.useState("none");
  const [popoverCloseTrace, setPopoverCloseTrace] = React.useState("none");
  const [dropdownCloseReason, setDropdownCloseReason] = React.useState("none");
  const [dropdownCloseTrace, setDropdownCloseTrace] = React.useState("none");
  const [dialogCloseReason, setDialogCloseReason] = React.useState("none");
  const [dialogCloseTrace, setDialogCloseTrace] = React.useState("none");
  const [drawerCloseReason, setDrawerCloseReason] = React.useState("none");
  const [drawerCloseTrace, setDrawerCloseTrace] = React.useState("none");
  const [toastCloseReason, setToastCloseReason] = React.useState("none");
  const [toastCloseTrace, setToastCloseTrace] = React.useState("none");
  const [actionToastHandledCount, setActionToastHandledCount] = React.useState(0);
  const [toastEscapeGuard, setToastEscapeGuard] = React.useState(false);
  const [switchChecked, setSwitchChecked] = React.useState(true);
  const [submittedPrompt, setSubmittedPrompt] = React.useState("Build a minimal auth flow with OTP fallback");
  const [framework, setFramework] = React.useState("react");
  const [releaseDate, setReleaseDate] = React.useState("2026-03-17");
  const [feedPage, setFeedPage] = React.useState(1);
  const [rtlFeedPage, setRtlFeedPage] = React.useState(4);
  const [topTabsValue, setTopTabsValue] = React.useState("overview");
  const [tableSortTelemetry, setTableSortTelemetry] = React.useState("component:asc");
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

  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const sectionNodes = sectionLinks
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node instanceof HTMLElement);
    if (sectionNodes.length === 0) {
      return;
    }

    const visibilityById = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          visibilityById.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = sectionLinks[0].id;
        let bestRatio = -1;
        for (const item of sectionLinks) {
          const ratio = visibilityById.get(item.id) ?? 0;
          if (ratio > bestRatio) {
            bestId = item.id;
            bestRatio = ratio;
          }
        }

        setActiveSection((current) => (current === bestId ? current : bestId));
      },
      {
        rootMargin: "-18% 0px -55% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }
    );

    sectionNodes.forEach((node) => {
      visibilityById.set(node.id, 0);
      observer.observe(node);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleDialogOpenChange = React.useCallback((nextOpen: boolean) => {
    setDialogOpen(nextOpen);
    if (!nextOpen) {
      setDialogCloseTrace((current) => {
        if (current.startsWith("reason:") && !current.endsWith("open:false")) {
          return `${current} -> open:false`;
        }

        return current;
      });
    }
  }, []);

  const handleDialogCloseReason = React.useCallback((reason: string) => {
    setDialogCloseReason(reason);
    setDialogCloseTrace(`reason:${reason}`);
  }, []);

  const handleDrawerOpenChange = React.useCallback((nextOpen: boolean) => {
    setDrawerOpen(nextOpen);
    if (!nextOpen) {
      setDrawerCloseTrace((current) => {
        if (current.startsWith("reason:") && !current.endsWith("open:false")) {
          return `${current} -> open:false`;
        }

        return current;
      });
    }
  }, []);

  const handleDrawerCloseReason = React.useCallback((reason: string) => {
    setDrawerCloseReason(reason);
    setDrawerCloseTrace(`reason:${reason}`);
  }, []);

  const handlePopoverOpenChange = React.useCallback((nextOpen: boolean) => {
    if (!nextOpen) {
      setPopoverCloseTrace((current) => {
        if (!current.endsWith("open:false")) {
          return `${current} -> open:false`;
        }

        return current;
      });
    }
  }, []);

  const handlePopoverCloseReason = React.useCallback((reason: string) => {
    setPopoverCloseReason(reason);
    setPopoverCloseTrace(`reason:${reason}`);
  }, []);

  const handleDropdownOpenChange = React.useCallback((nextOpen: boolean) => {
    if (!nextOpen) {
      setDropdownCloseTrace((current) => {
        if (!current.endsWith("open:false")) {
          return `${current} -> open:false`;
        }

        return current;
      });
    }
  }, []);

  const handleDropdownCloseReason = React.useCallback((reason: string) => {
    setDropdownCloseReason(reason);
    setDropdownCloseTrace((current) => (current === "select" ? `select -> reason:${reason}` : `reason:${reason}`));
  }, []);

  const handlePaletteOpenChange = React.useCallback((nextOpen: boolean) => {
    setPaletteOpen(nextOpen);
    if (!nextOpen) {
      setPaletteCloseTrace((current) => {
        if (current !== "none" && !current.endsWith("open:false")) {
          return `${current} -> open:false`;
        }

        return current;
      });
    }
  }, []);

  const handlePaletteCloseReason = React.useCallback((reason: string) => {
    setPaletteCloseReason(reason);
    setPaletteCloseTrace((current) => (current === "select" ? `select -> reason:${reason}` : `reason:${reason}`));
  }, []);

  const handleToastTelemetryOpenChange = React.useCallback((nextOpen: boolean) => {
    setToastTelemetryOpen(nextOpen);
    if (!nextOpen) {
      setToastCloseTrace((current) => {
        if (current.startsWith("reason:") && !current.endsWith("open:false")) {
          return `${current} -> open:false`;
        }

        return current;
      });
    }
  }, []);

  const handleToastTelemetryCloseReason = React.useCallback((reason: string) => {
    setToastCloseReason(reason);
    setToastCloseTrace(`reason:${reason}`);
  }, []);

  return (
    <AuroraProvider theme={theme}>
      <GlobalStyles />
      <div style={appShellStyle}>
        <main className="demo-main-layout" style={mainLayoutStyle}>
          <header className="demo-hero" style={heroPanelStyle}>
            <div style={heroHeadlineStyle}>
              <div style={heroTitleBlockStyle}>
                <p style={heroLabelStyle}>
                  Production React UI Library
                </p>
                <h1 style={heroTitleStyle}>Aurora UI Demo</h1>
              </div>
              <div className="demo-hero-theme-control" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <label htmlFor="theme-select" style={{ color: "var(--aurora-text-secondary)" }}>
                  Theme
                </label>
                <Select
                  id="theme-select"
                  value={theme}
                  onChange={(event) => setTheme(event.target.value as ThemeName)}
                  style={{ width: "min(180px, 48vw)" }}
                >
                  {availableThemes.map((themeName) => (
                    <option key={themeName} value={themeName}>
                      {themeName}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="demo-hero-overview" style={heroOverviewStyle}>
              <div style={heroOverviewCopyStyle}>
                <p style={{ ...mutedBodyStyle, maxWidth: 820 }}>
                  Token-first React component library with AI interaction patterns. Current theme: <strong>{theme}</strong>
                </p>
                <div className="demo-hero-badge-row" style={heroBadgeRowStyle}>
                  <Badge tone="success">Production-ready interactions</Badge>
                  <Badge>Accessibility-first defaults</Badge>
                  <Tag>Design-token driven</Tag>
                  <Tag>Overlay + AI ready</Tag>
                </div>
              </div>
              <aside aria-label="Delivery focus" style={heroContextCardStyle}>
                <p style={heroContextLabelStyle}>Delivery Focus</p>
                <p style={heroContextValueStyle}>Production Refinement</p>
                <p style={heroContextMetaStyle}>A11y parity, interaction resilience, docs quality, and release confidence.</p>
              </aside>
            </div>
            <div style={heroStatsGridStyle}>
              <HeroStatCard
                targetId="basic-components"
                targetLabel="Basic Components"
                active={activeSection === "basic-components"}
                onNavigate={setActiveSection}
                label="Quality Gate"
                value="Production confidence"
                description="Core controls and forms with production-grade interaction and a11y defaults."
              />
              <HeroStatCard
                targetId="overlays-navigation"
                targetLabel="Overlays and Navigation"
                active={activeSection === "overlays-navigation"}
                onNavigate={setActiveSection}
                label="Active Workstream"
                value="Production Refinement"
                description="Overlay close policy, focus flow, and telemetry consistency across dismissal paths."
              />
              <HeroStatCard
                targetId="feedback-states"
                targetLabel="Feedback and States"
                active={activeSection === "feedback-states"}
                onNavigate={setActiveSection}
                label="Theme Pack"
                value={theme}
                description="Token-first surface, accent, and typography language across all feedback states."
              />
            </div>
            <div className="demo-section-nav-shell" style={sectionNavShellStyle}>
              <p style={sectionNavLabelStyle}>Jump to section</p>
              <nav aria-label="Demo sections" className="demo-section-nav" style={sectionNavStyle}>
                {sectionLinks.map((item) => (
                  <SectionNavLink
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    active={activeSection === item.id}
                    onNavigate={() => setActiveSection(item.id)}
                  />
                ))}
              </nav>
            </div>
          </header>

          <Section
            id="basic-components"
            title="Basic Components"
            description="Core controls and form primitives with theme-driven tokens."
          >
            <div className="demo-section-stack">
              <div className="demo-panel">
                <div className="demo-panel-header">
                  <h3 style={panelTitleStyle}>Brand Token Snapshot</h3>
                  <p style={panelDescriptionStyle}>Primary actions, status badges, and semantic tags should read consistently across themes.</p>
                </div>
                <div className="demo-action-row">
                  <Button>Primary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Tag>Design Token</Tag>
                  <Badge>Default</Badge>
                  <Badge tone="success">Stable</Badge>
                  <Badge tone="danger">Breaking</Badge>
                </div>
              </div>
              <div className="demo-two-column">
                <div className="demo-panel">
                  <div className="demo-panel-header">
                    <h3 style={panelTitleStyle}>Form Foundations</h3>
                    <p style={panelDescriptionStyle}>Inputs are grouped as a production workflow instead of isolated component fragments.</p>
                  </div>
                  <div className="demo-form-grid">
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
                  </div>
                </div>
                <div className="demo-panel">
                  <div className="demo-panel-header">
                    <h3 style={panelTitleStyle}>Preference Controls</h3>
                    <p style={panelDescriptionStyle}>Selection controls are shown as policy toggles commonly used in production settings.</p>
                  </div>
                  <div className="demo-control-stack">
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
                </div>
              </div>
            </div>
          </Section>

          <Section
            id="data-navigation"
            title="Data & Navigation"
            description="Common data surfaces and navigation containers."
          >
            <div className="demo-section-stack">
              <div className="demo-panel">
                <div className="demo-panel-header">
                  <h3 style={panelTitleStyle}>Navigation Baseline</h3>
                  <p style={panelDescriptionStyle}>Default tabs are presented as a product summary strip with visible selection telemetry.</p>
                </div>
                <Tabs
                  value={topTabsValue}
                  onValueChange={setTopTabsValue}
                  items={[
                    { key: "overview", label: "Overview", content: <p style={{ margin: 0 }}>Project health and adoption summary.</p> },
                    { key: "activity", label: "Activity", content: <p style={{ margin: 0 }}>Recent events, deploys, and alerts.</p> },
                    { key: "settings", label: "Settings", content: <p style={{ margin: 0 }}>Theme, access control, and preferences.</p> }
                  ]}
                />
                <div className="demo-telemetry-grid">
                  <p style={mutedBodyStyle}>
                    Tabs change telemetry:{" "}
                    <strong data-testid="tabs-change-telemetry" style={telemetryValueStyle}>
                      {topTabsValue}
                    </strong>
                  </p>
                </div>
              </div>
              <div className="demo-tabs-lab-grid">
                <div className="demo-panel">
                  <h3 style={sectionSubheadingStyle}>Manual Activation Tabs</h3>
                  <p style={mutedBodyStyle}>
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
                <div dir="rtl" className="demo-panel">
                  <h3 style={sectionSubheadingStyle}>RTL Direction Tabs</h3>
                  <p style={mutedBodyStyle}>
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
                <div className="demo-panel">
                  <h3 style={sectionSubheadingStyle}>Vertical Orientation Tabs</h3>
                  <p style={mutedBodyStyle}>
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
                <div className="demo-panel">
                  <h3 style={sectionSubheadingStyle}>Manual Vertical Tabs</h3>
                  <p style={mutedBodyStyle}>
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
                <div className="demo-panel">
                  <h3 style={sectionSubheadingStyle}>No-Loop Keyboard Boundaries</h3>
                  <p style={mutedBodyStyle}>
                    With <code>loop=false</code>, Arrow keys stop at the first/last enabled tab and still skip disabled items.
                  </p>
                  <Tabs
                    ariaLabel="No-loop release tabs"
                    loop={false}
                    defaultValue="draft"
                    items={[
                      { key: "draft", label: "Draft", content: <p style={{ margin: 0 }}>Draft scope and implementation notes.</p> },
                      { key: "review", label: "Review", content: <p style={{ margin: 0 }}>Cross-team review and signoff.</p>, disabled: true },
                      { key: "release", label: "Release", content: <p style={{ margin: 0 }}>Release train and rollout sequencing.</p> }
                    ]}
                  />
                </div>
              </div>
              <div className="demo-two-column">
                <div className="demo-panel">
                  <div className="demo-panel-header">
                    <h3 style={panelTitleStyle}>Readiness Table</h3>
                    <p style={panelDescriptionStyle}>Sortable readiness data paired with state toggles for loading and empty branches.</p>
                  </div>
                  <Table
                    caption="Component readiness metrics"
                    defaultSortKey="component"
                    onSortChange={(key, direction) => setTableSortTelemetry(`${key}:${direction}`)}
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
                  <div className="demo-telemetry-grid">
                    <p style={mutedBodyStyle}>
                      Table sort telemetry:{" "}
                      <strong data-testid="table-sort-telemetry" style={telemetryValueStyle}>
                        {tableSortTelemetry}
                      </strong>
                    </p>
                  </div>
                  <div className="demo-action-row">
                    <Button variant="outline" onClick={() => setTableLoading((value) => !value)}>
                      Toggle table loading
                    </Button>
                    <Button variant="outline" onClick={() => setTableEmpty((value) => !value)}>
                      Toggle table empty state
                    </Button>
                  </div>
                </div>
                <div className="demo-panel">
                  <div className="demo-panel-header">
                    <h3 style={panelTitleStyle}>Release Activity Feed</h3>
                    <p style={panelDescriptionStyle}>Chronological activity feed with compact pagination to mimic a product dashboard lane.</p>
                  </div>
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
              </div>
              <div dir="rtl" className="demo-panel">
                <h3 style={sectionSubheadingStyle}>RTL Pagination</h3>
                <p style={mutedBodyStyle}>
                  In RTL layouts, ArrowRight moves to the previous page and ArrowLeft moves to the next page.
                </p>
                <p style={mutedBodyStyle}>
                  Current RTL page:{" "}
                  <strong data-testid="rtl-pagination-page" style={telemetryValueStyle}>
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
            </div>
          </Section>

          <Section
            id="feedback-states"
            title="Feedback & States"
            description="System status, loading skeletons, and streaming indicators."
          >
            <div className="demo-section-stack">
              <div className="demo-panel">
                <div className="demo-panel-header">
                  <h3 style={panelTitleStyle}>Notification States</h3>
                  <p style={panelDescriptionStyle}>Toast variants are grouped as an operator control board with explicit branch triggers.</p>
                </div>
                <Alert title="Network recovered" tone="success">
                  All queued jobs were synchronized.
                </Alert>
                <div className="demo-action-row">
                  <Button variant="outline" onClick={() => setToastTelemetryOpen(true)}>
                    Trigger telemetry toast
                  </Button>
                  <Button variant="outline" onClick={() => setActionToastOpen(true)}>
                    Trigger action toast
                  </Button>
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
              </div>
              <div className="demo-panel">
                <div className="demo-panel-header">
                  <h3 style={panelTitleStyle}>Toast Diagnostics</h3>
                  <p style={panelDescriptionStyle}>Guard toggles and telemetry are surfaced together for faster behavior verification.</p>
                </div>
                <Switch
                  checked={toastEscapeGuard}
                  onCheckedChange={setToastEscapeGuard}
                  label="Guard prompt toast Escape at toast layer"
                  description="Uses Toast onEscapeKeyDown + preventDefault() while enabled."
                />
                <div className="demo-telemetry-grid">
                  <p style={mutedBodyStyle}>
                    Toast close reason telemetry:{" "}
                    <strong data-testid="toast-close-reason-demo" style={telemetryValueStyle}>
                      {toastCloseReason}
                    </strong>
                  </p>
                  <p style={mutedBodyStyle}>
                    Toast close trace:{" "}
                    <strong data-testid="toast-close-trace-demo" style={telemetryValueStyle}>
                      {toastCloseTrace}
                    </strong>
                  </p>
                  <p style={mutedBodyStyle}>
                    Action toast handled count:{" "}
                    <strong data-testid="action-toast-handled-count" style={telemetryValueStyle}>
                      {actionToastHandledCount}
                    </strong>
                  </p>
                </div>
              </div>
              <div className="demo-two-column">
                <div className="demo-panel">
                  <h3 style={panelTitleStyle}>Loading Surfaces</h3>
                  <p style={panelDescriptionStyle}>Progress and skeleton placeholders show state transitions in a compact, scannable column.</p>
                  <Progress value={62} />
                  <div style={{ display: "grid", gap: 8, maxWidth: 320 }}>
                    <Skeleton height={14} />
                    <Skeleton height={14} width="80%" />
                    <Skeleton height={14} width="65%" />
                  </div>
                </div>
                <div className="demo-panel">
                  <h3 style={panelTitleStyle}>Empty And Streaming</h3>
                  <p style={panelDescriptionStyle}>No-data messaging and live feedback are paired to reflect a real request lifecycle.</p>
                  <Empty title="No records found" description="Create your first workflow to start collecting events." action={<Button>Create workflow</Button>} />
                  <LoadingDots />
                  <StreamingText text="Streaming response in progress..." />
                </div>
              </div>
            </div>
          </Section>

          <Section
            id="overlays-navigation"
            title="Overlays & Navigation"
            description="Layered surfaces with keyboard and pointer dismissal behavior."
          >
            <div className="demo-section-stack">
              <div className="demo-panel">
                <div className="demo-panel-header">
                  <h3 style={panelTitleStyle}>Overlay Launchers</h3>
                  <p style={panelDescriptionStyle}>Core overlay entries are grouped as a single action rail for rapid interaction checks.</p>
                </div>
                <div className="demo-action-row">
                  <Tooltip content="Runs a dry-run build">
                    <Button variant="outline">Hover me</Button>
                  </Tooltip>
                  <Popover
                    triggerLabel="Open Popover"
                    onOpenChange={handlePopoverOpenChange}
                    onCloseReason={handlePopoverCloseReason}
                  >
                    <p style={{ margin: 0 }}>This popover is built with Aurora primitives.</p>
                  </Popover>
                  <Dropdown
                    label="Actions"
                    onOpenChange={handleDropdownOpenChange}
                    onCloseReason={handleDropdownCloseReason}
                    items={[
                      { key: "a", label: "Duplicate", onSelect: () => setDropdownCloseTrace("select") },
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
                <div style={{ display: "grid", gap: 6, maxWidth: 320, marginTop: 72 }}>
                  <label htmlFor="overlay-outside-target" style={{ color: "var(--aurora-text-secondary)", fontSize: 14 }}>
                    Overlay outside focus target
                  </label>
                  <Input id="overlay-outside-target" placeholder="Click here to validate outside-dismiss focus." />
                </div>
              </div>
              <div className="demo-panel">
                <div className="demo-panel-header">
                  <h3 style={panelTitleStyle}>Overlay Dismiss Telemetry</h3>
                  <p style={panelDescriptionStyle}>Close reasons are consolidated into a diagnostics rail for faster regression spotting.</p>
                </div>
                <div className="demo-telemetry-grid">
                  <p style={mutedBodyStyle}>
                    Popover close reason telemetry:{" "}
                    <strong data-testid="popover-close-reason-demo" style={telemetryValueStyle}>
                      {popoverCloseReason}
                    </strong>
                  </p>
                  <p style={mutedBodyStyle}>
                    Popover close trace:{" "}
                    <strong data-testid="popover-close-trace-demo" style={telemetryValueStyle}>
                      {popoverCloseTrace}
                    </strong>
                  </p>
                  <p style={mutedBodyStyle}>
                    Dropdown close reason telemetry:{" "}
                    <strong data-testid="dropdown-close-reason-demo" style={telemetryValueStyle}>
                      {dropdownCloseReason}
                    </strong>
                  </p>
                  <p style={mutedBodyStyle}>
                    Dropdown close trace:{" "}
                    <strong data-testid="dropdown-close-trace-demo" style={telemetryValueStyle}>
                      {dropdownCloseTrace}
                    </strong>
                  </p>
                  <p style={mutedBodyStyle}>
                    Dialog close reason telemetry:{" "}
                    <strong data-testid="dialog-close-reason-demo" style={telemetryValueStyle}>
                      {dialogCloseReason}
                    </strong>
                  </p>
                  <p style={mutedBodyStyle}>
                    Dialog close trace:{" "}
                    <strong data-testid="dialog-close-trace-demo" style={telemetryValueStyle}>
                      {dialogCloseTrace}
                    </strong>
                  </p>
                  <p style={mutedBodyStyle}>
                    Drawer close reason telemetry:{" "}
                    <strong data-testid="drawer-close-reason-demo" style={telemetryValueStyle}>
                      {drawerCloseReason}
                    </strong>
                  </p>
                  <p style={mutedBodyStyle}>
                    Drawer close trace:{" "}
                    <strong data-testid="drawer-close-trace-demo" style={telemetryValueStyle}>
                      {drawerCloseTrace}
                    </strong>
                  </p>
                </div>
              </div>
              <div className="demo-panel">
                <div className="demo-panel-header">
                  <h3 style={panelTitleStyle}>Command Palette Policy Controls</h3>
                  <p style={panelDescriptionStyle}>Keyboard hints, guard toggles, and telemetry live in one place to reduce operator context switching.</p>
                </div>
                <p style={mutedBodyStyle}>
                  Keyboard shortcut: press{" "}
                  <kbd style={keyboardHintStyle}>
                    Ctrl
                  </kbd>
                  /
                  <kbd style={keyboardHintStyle}>
                    Cmd
                  </kbd>{" "}
                  +{" "}
                  <kbd style={keyboardHintStyle}>
                    K
                  </kbd>{" "}
                  to open Command Palette.
                </p>
                <div className="demo-control-stack">
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
                </div>
                <div className="demo-telemetry-grid">
                  <p style={mutedBodyStyle}>
                    Palette query telemetry:{" "}
                    <strong data-testid="palette-query-telemetry" style={telemetryValueStyle}>
                      {paletteQueryTelemetry || "N/A"}
                    </strong>
                  </p>
                  <p style={mutedBodyStyle}>
                    Palette close reason telemetry:{" "}
                    <strong data-testid="palette-close-reason-telemetry" style={telemetryValueStyle}>
                      {paletteCloseReason}
                    </strong>
                  </p>
                  <p style={mutedBodyStyle}>
                    Palette close trace:{" "}
                    <strong data-testid="palette-close-trace-demo" style={telemetryValueStyle}>
                      {paletteCloseTrace}
                    </strong>
                  </p>
                </div>
                <p style={mutedBodyStyle}>
                  Keyboard tip: use <kbd style={keyboardHintStyle}>PageDown</kbd> /{" "}
                  <kbd style={keyboardHintStyle}>PageUp</kbd> to jump across actionable commands.
                </p>
              </div>
            </div>
          </Section>

          <Section id="ai-components" title="AI Components" description="Prompt, reasoning, and streaming response building blocks.">
            <div className="demo-section-stack">
              <div className="demo-two-column">
                <div className="demo-panel">
                  <div className="demo-panel-header">
                    <h3 style={panelTitleStyle}>Prompt Intake</h3>
                    <p style={panelDescriptionStyle}>Prompt entry and live conversation are grouped as one customer-facing interaction lane.</p>
                  </div>
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
                </div>
                <div className="demo-panel">
                  <div className="demo-panel-header">
                    <h3 style={panelTitleStyle}>Reasoning And Output</h3>
                    <p style={panelDescriptionStyle}>Model reasoning trail and generated code appear together to reflect productized AI responses.</p>
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
                </div>
              </div>
            </div>
          </Section>

        <Dialog
          open={dialogOpen}
          onOpenChange={handleDialogOpenChange}
          onCloseReason={handleDialogCloseReason}
          title="Dialog Example"
        >
          <p style={{ margin: 0 }}>Modal built with FocusScope + DismissableLayer.</p>
        </Dialog>

        <Drawer
          open={drawerOpen}
          onOpenChange={handleDrawerOpenChange}
          title="Drawer Example"
          description="Contextual panel for filters, details, and quick actions."
          onCloseReason={handleDrawerCloseReason}
        >
          <p style={{ margin: 0 }}>This drawer can host contextual forms, filters, or details.</p>
        </Drawer>

        <CommandPalette
          open={paletteOpen}
          onOpenChange={handlePaletteOpenChange}
          closeOnSelect={!palettePersistent}
          clearQueryOnEscape={paletteEscapeClearsQuery}
          closeOnEscape={!paletteBlocking}
          closeOnOutsidePointer={!paletteBlocking}
          onQueryChange={setPaletteQueryTelemetry}
          onCloseReason={handlePaletteCloseReason}
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
              onSelect: () => {
                setPaletteCloseTrace("select");
                setDialogOpen(true);
              }
            },
            {
              key: "open-drawer",
              label: "Open Drawer",
              keywords: ["panel", "sidebar"],
              onSelect: () => {
                setPaletteCloseTrace("select");
                setDrawerOpen(true);
              }
            },
            {
              key: "create-project",
              label: "Create Project",
              keywords: ["new", "workspace"],
              onSelect: () => {
                setPaletteCloseTrace("select");
                setToastOpen(true);
              }
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
          open={toastTelemetryOpen}
          onClose={() => handleToastTelemetryOpenChange(false)}
          onOpenChange={handleToastTelemetryOpenChange}
          onCloseReason={handleToastTelemetryCloseReason}
          title="Telemetry toast"
          description="Used to validate close-button / Escape / timeout branches."
          duration={900}
          closeLabel="Dismiss telemetry toast"
          position="bottom-left"
        />
        <Toast
          open={actionToastOpen}
          onClose={() => setActionToastOpen(false)}
          title="Release approval action required"
          description="Review release blockers before publish."
          duration={0}
          position="top-left"
          closeLabel="Dismiss approval action toast"
          action={
            <Button
              size="sm"
              onClick={() => {
                setActionToastHandledCount((current) => current + 1);
                setActionToastOpen(false);
              }}
            >
              Acknowledge approval action
            </Button>
          }
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
      </div>
    </AuroraProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
