import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Tabs, type TabItem } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";

const productTabs: TabItem[] = [
  {
    key: "spec",
    label: "Spec",
    content:
      "Token contract, component API, and test strategy are captured here before implementation."
  },
  {
    key: "build",
    label: "Build",
    content: "Run lint, typecheck, and unit tests for all affected packages, then update docs."
  },
  {
    key: "release",
    label: "Release",
    content: "Publish with changesets and validate Storybook + demo output as final quality gate."
  }
];

const storyHelperTextStyle: React.CSSProperties = {
  margin: 0,
  color: "var(--aurora-text-secondary)",
  fontSize: 13,
  lineHeight: 1.55
};

const storyTelemetryLabelStyle: React.CSSProperties = {
  color: "var(--aurora-text-secondary)",
  fontSize: 13
};

function dispatchImeKeyDown(element: HTMLElement, key: string) {
  const event = new KeyboardEvent("keydown", { key, bubbles: true });
  Object.defineProperty(event, "isComposing", { value: true });
  Object.defineProperty(event, "keyCode", { value: 229 });
  element.dispatchEvent(event);
}

const meta = {
  title: "Data/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."
      }
    }
  },
  args: {
    items: productTabs,
    defaultValue: "spec"
  }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

function ControlledTabsDemo() {
  const [value, setValue] = React.useState("build");

  return (
    <div style={{ width: "min(100%, 620px)", display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={storyTelemetryLabelStyle}>Current stage</span>
        <Badge tone="default">{value}</Badge>
      </div>
      <Tabs items={productTabs} value={value} onValueChange={setValue} />
    </div>
  );
}

function DisableVisualResetTabsDemo() {
  const [buildDisabled, setBuildDisabled] = React.useState(false);

  return (
    <div style={{ width: "min(100%, 620px)", display: "grid", gap: 12 }}>
      <button type="button" onClick={() => setBuildDisabled(true)}>
        Disable Build tab
      </button>
      <Tabs
        ariaLabel="Disable visual reset tabs"
        defaultValue="spec"
        items={[
          {
            key: "spec",
            label: "Spec",
            content: "Specification stage is active."
          },
          {
            key: "build",
            label: "Build",
            content: "Build stage is active.",
            disabled: buildDisabled
          },
          {
            key: "release",
            label: "Release",
            content: "Release stage is active."
          }
        ]}
      />
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledTabsDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const releaseTab = canvas.getByRole("tab", { name: "Release" });
    const specTab = canvas.getByRole("tab", { name: "Spec" });

    await userEvent.click(releaseTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Publish with changesets");
    await expect(releaseTab).toHaveFocus();

    await userEvent.keyboard("{Home}");
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();
  }
};

export const KeyboardFocusRingAfterPointer: Story = {
  render: () => (
    <div style={{ width: "min(100%, 620px)", display: "grid", gap: 12 }}>
      <p style={storyHelperTextStyle}>
        Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring
        for the active tab.
      </p>
      <button type="button">Before tabs</button>
      <Tabs ariaLabel="Focus ring fallback tabs" defaultValue="spec" items={productTabs} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const beforeButton = canvas.getByRole("button", { name: "Before tabs" });

    fireEvent.mouseDown(specTab);
    specTab.focus();

    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(specTab).toHaveFocus();
    await expect(specTab.style.boxShadow).toContain("0 0 0 3px");
  }
};

export const DisabledTabVisualReset: Story = {
  render: () => <DisableVisualResetTabsDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const disableButton = canvas.getByRole("button", { name: "Disable Build tab" });
    const buildTab = canvas.getByRole("tab", { name: "Build" });

    fireEvent.mouseDown(buildTab);

    await userEvent.click(disableButton);
    const disabledBuildTab = canvas.getByRole("tab", { name: "Build" });
    await expect(disabledBuildTab).toBeDisabled();
    await expect(disabledBuildTab.style.transform).toContain("translateY(0");
    await expect(disabledBuildTab.style.boxShadow).toBe("none");
  }
};

export const PrimaryPointerOnlyPressedState: Story = {
  render: function RenderPrimaryPointerOnlyPressedState() {
    const [activeKey, setActiveKey] = React.useState("spec");
    const [changeCount, setChangeCount] = React.useState(0);

    return (
      <div style={{ width: "min(100%, 620px)", display: "grid", gap: 10 }}>
        <p style={storyHelperTextStyle}>
          Active tab: <strong data-testid="primary-pointer-active">{activeKey}</strong> | Change
          count: <strong data-testid="primary-pointer-count">{changeCount}</strong>
        </p>
        <Tabs
          ariaLabel="Primary pointer tabs"
          value={activeKey}
          items={productTabs}
          onValueChange={(nextKey) => {
            setActiveKey(nextKey);
            setChangeCount((current) => current + 1);
          }}
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buildTab = canvas.getByRole("tab", { name: "Build" });
    const activeValue = canvas.getByTestId("primary-pointer-active");
    const changeCount = canvas.getByTestId("primary-pointer-count");

    fireEvent.mouseDown(buildTab, { button: 2 });
    fireEvent.mouseUp(buildTab, { button: 2 });
    await expect(activeValue).toHaveTextContent("spec");
    await expect(changeCount).toHaveTextContent("0");

    await userEvent.click(buildTab);
    await expect(activeValue).toHaveTextContent("build");
    await expect(changeCount).toHaveTextContent("1");
  }
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs
      ariaLabel="Release stages"
      defaultValue="spec"
      items={[
        {
          key: "spec",
          label: "Spec",
          content: "Specification stage is active."
        },
        {
          key: "security",
          label: "Security Review",
          content: "Security review is pending.",
          disabled: true
        },
        {
          key: "release",
          label: "Release",
          content: "Release checklist is ready."
        }
      ]}
    />
  )
};

export const AllTabsDisabled: Story = {
  render: () => (
    <Tabs
      ariaLabel="All disabled release tabs"
      activationMode="manual"
      items={[
        {
          key: "spec",
          label: "Spec",
          content: "Specification stage is disabled.",
          disabled: true
        },
        {
          key: "release",
          label: "Release",
          content: "Release stage is disabled.",
          disabled: true
        }
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabList = canvas.getByRole("tablist", { name: "All disabled release tabs" });
    await expect(tabList).toHaveAttribute("aria-disabled", "true");

    const allTabs = canvas.getAllByRole("tab");
    await expect(allTabs).toHaveLength(2);

    allTabs.forEach((tab) => {
      expect(tab).toBeDisabled();
      expect(tab).not.toHaveAttribute("aria-keyshortcuts");
      expect(tab).toHaveAttribute("aria-selected", "false");
      expect(tab).toHaveAttribute("tabindex", "-1");
    });
  }
};

export const KeyboardNavigationGuide: Story = {
  render: () => (
    <div style={{ width: "min(100%, 620px)", display: "grid", gap: 12 }}>
      <p style={storyHelperTextStyle}>
        Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown.
        Home jumps to first enabled tab, End jumps to last enabled tab.
      </p>
      <Tabs
        ariaLabel="Keyboard guide tabs"
        defaultValue="spec"
        items={[
          { key: "blocked", label: "Blocked", content: "Blocked tab", disabled: true },
          { key: "spec", label: "Spec", content: "Specification stage." },
          { key: "review", label: "Review", content: "Review stage.", disabled: true },
          { key: "release", label: "Release", content: "Release stage." }
        ]}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const releaseTab = canvas.getByRole("tab", { name: "Release" });
    const blockedTab = canvas.getByRole("tab", { name: "Blocked" });

    await userEvent.click(specTab);
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(blockedTab).toHaveAttribute("aria-disabled", "true");

    await userEvent.keyboard("{End}");
    await expect(releaseTab).toHaveAttribute("aria-selected", "true");
    await expect(releaseTab).toHaveFocus();

    await userEvent.keyboard("{Home}");
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();
  }
};

export const NoLoopNavigation: Story = {
  render: () => (
    <div style={{ width: "min(100%, 620px)", display: "grid", gap: 12 }}>
      <p style={storyHelperTextStyle}>
        Set <code>loop=&#123;false&#125;</code> to keep Arrow navigation at tablist boundaries
        instead of wrapping.
      </p>
      <Tabs ariaLabel="No loop tabs" defaultValue="spec" loop={false} items={productTabs} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const releaseTab = canvas.getByRole("tab", { name: "Release" });

    await userEvent.click(releaseTab);
    await userEvent.keyboard("{ArrowRight}");
    await expect(releaseTab).toHaveFocus();
    await expect(releaseTab).toHaveAttribute("aria-selected", "true");

    await userEvent.click(specTab);
    await userEvent.keyboard("{ArrowLeft}");
    await expect(specTab).toHaveFocus();
    await expect(specTab).toHaveAttribute("aria-selected", "true");
  }
};

function LabelledByHeadingDemo() {
  const headingId = React.useId();

  return (
    <div style={{ width: "min(100%, 620px)", display: "grid", gap: 10 }}>
      <h3 id={headingId} style={{ margin: 0 }}>
        Release Stages
      </h3>
      <Tabs ariaLabelledBy={headingId} items={productTabs} defaultValue="spec" />
    </div>
  );
}

export const LabelledByHeading: Story = {
  render: () => <LabelledByHeadingDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", { name: "Release Stages" })).toBeInTheDocument();
  }
};

export const Vertical: Story = {
  render: () => (
    <div style={{ width: "min(100%, 620px)" }}>
      <Tabs
        ariaLabel="Vertical workflow tabs"
        orientation="vertical"
        defaultValue="spec"
        items={[
          { key: "spec", label: "Spec", content: "Specification stage." },
          { key: "review", label: "Review", content: "Review stage.", disabled: true },
          { key: "release", label: "Release", content: "Release stage." }
        ]}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabList = canvas.getByRole("tablist", { name: "Vertical workflow tabs" });
    await expect(tabList).toHaveAttribute("aria-orientation", "vertical");

    const specTab = canvas.getByRole("tab", { name: "Spec" });
    await userEvent.click(specTab);
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("tab", { name: "Release" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
  }
};

export const RtlKeyboardNavigation: Story = {
  render: () => (
    <div dir="rtl" style={{ width: "min(100%, 620px)", display: "grid", gap: 12 }}>
      <p style={storyHelperTextStyle}>
        In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the
        next tab.
      </p>
      <Tabs ariaLabel="RTL workflow tabs" defaultValue="spec" items={productTabs} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const releaseTab = canvas.getByRole("tab", { name: "Release" });

    await userEvent.click(specTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Token contract, component API");

    await userEvent.keyboard("{ArrowRight}");
    await expect(releaseTab).toHaveFocus();
    await expect(releaseTab).toHaveAttribute("aria-selected", "true");

    await userEvent.keyboard("{ArrowLeft}");
    await expect(specTab).toHaveFocus();
    await expect(specTab).toHaveAttribute("aria-selected", "true");
  }
};

export const ManualActivation: Story = {
  render: () => (
    <div style={{ width: "min(100%, 620px)", display: "grid", gap: 12 }}>
      <p style={storyHelperTextStyle}>
        Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to
        activate.
      </p>
      <Tabs
        ariaLabel="Manual activation tabs"
        activationMode="manual"
        defaultValue="spec"
        items={[
          { key: "spec", label: "Spec", content: "Specification stage." },
          { key: "build", label: "Build", content: "Build stage." },
          { key: "release", label: "Release", content: "Release stage." }
        ]}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const releaseTab = canvas.getByRole("tab", { name: "Release" });

    await userEvent.click(specTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(specTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await expect(releaseTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");

    await userEvent.keyboard("{ArrowRight}");
    await expect(canvas.getByRole("tab", { name: "Build" })).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");

    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");

    await userEvent.keyboard("{End}");
    await expect(releaseTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");

    releaseTab.focus();
    await userEvent.keyboard("{Space}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Release stage.");
  }
};

export const ManualFocusResetOnBlur: Story = {
  render: () => (
    <div style={{ width: "min(100%, 620px)", display: "grid", gap: 12 }}>
      <p style={storyHelperTextStyle}>
        In manual mode, moving focus with arrows does not change selection. After leaving the
        tablist, roving focus returns to the selected tab for the next keyboard entry.
      </p>
      <Tabs
        ariaLabel="Manual blur reset tabs"
        activationMode="manual"
        defaultValue="spec"
        items={[
          { key: "spec", label: "Spec", content: "Specification stage." },
          { key: "build", label: "Build", content: "Build stage." },
          { key: "release", label: "Release", content: "Release stage." }
        ]}
      />
      <button type="button">Outside focus target</button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const buildTab = canvas.getByRole("tab", { name: "Build" });
    const outsideButton = canvas.getByRole("button", { name: "Outside focus target" });

    await userEvent.click(specTab);
    await userEvent.keyboard("{ArrowRight}");
    await expect(buildTab).toHaveFocus();
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(buildTab).toHaveAttribute("aria-selected", "false");
    await expect(specTab).toHaveAttribute("tabindex", "-1");
    await expect(buildTab).toHaveAttribute("tabindex", "0");

    await userEvent.click(outsideButton);
    await expect(outsideButton).toHaveFocus();
    await expect(specTab).toHaveAttribute("tabindex", "0");
    await expect(buildTab).toHaveAttribute("tabindex", "-1");
  }
};

export const ImeCompositionGuard: Story = {
  render: () => (
    <div style={{ width: "min(100%, 620px)", display: "grid", gap: 12 }}>
      <p style={storyHelperTextStyle}>
        In manual mode, Enter and Space are ignored while IME composition is active, so CJK
        confirmation does not activate a tab by accident.
      </p>
      <Tabs
        ariaLabel="Manual activation IME guard tabs"
        activationMode="manual"
        defaultValue="spec"
        items={[
          { key: "spec", label: "Spec", content: "Specification stage." },
          { key: "build", label: "Build", content: "Build stage." },
          { key: "release", label: "Release", content: "Release stage." }
        ]}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const buildTab = canvas.getByRole("tab", { name: "Build" });

    await userEvent.click(specTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");

    await userEvent.keyboard("{ArrowRight}");
    await expect(buildTab).toHaveFocus();
    await expect(buildTab).toHaveAttribute("aria-selected", "false");

    dispatchImeKeyDown(buildTab, "Enter");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(buildTab).toHaveAttribute("aria-selected", "false");

    dispatchImeKeyDown(buildTab, "Space");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(buildTab).toHaveAttribute("aria-selected", "false");

    buildTab.focus();
    await expect(buildTab).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    await expect(buildTab).toHaveAttribute("aria-selected", "true");
  }
};

export const ManualVerticalActivation: Story = {
  render: () => (
    <div style={{ width: "min(100%, 620px)", display: "grid", gap: 12 }}>
      <p style={storyHelperTextStyle}>
        Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus;
        Enter/Space activates.
      </p>
      <Tabs
        ariaLabel="Manual vertical release tabs"
        orientation="vertical"
        activationMode="manual"
        defaultValue="backlog"
        items={[
          { key: "backlog", label: "Backlog", content: "Backlog scope and release intent." },
          { key: "review", label: "Review", content: "Review and signoff.", disabled: true },
          { key: "ship", label: "Ship", content: "Ship checklist and release notes." }
        ]}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const backlogTab = canvas.getByRole("tab", { name: "Backlog" });
    const reviewTab = canvas.getByRole("tab", { name: "Review" });
    const shipTab = canvas.getByRole("tab", { name: "Ship" });

    await userEvent.click(backlogTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent(
      "Backlog scope and release intent."
    );
    await expect(backlogTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await expect(shipTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await expect(reviewTab).toHaveAttribute("aria-disabled", "true");
    await expect(reviewTab).not.toHaveAttribute("aria-keyshortcuts");

    await userEvent.keyboard("{ArrowDown}");
    await expect(shipTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent(
      "Backlog scope and release intent."
    );

    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent(
      "Ship checklist and release notes."
    );
  }
};

function ChangeTelemetryDemo() {
  const [value, setValue] = React.useState("build");
  const [changes, setChanges] = React.useState(0);

  return (
    <div style={{ width: "min(100%, 620px)", display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={storyTelemetryLabelStyle}>Value change events</span>
        <Badge tone="default" data-testid="change-count">
          {changes}
        </Badge>
      </div>
      <Tabs
        items={productTabs}
        value={value}
        onValueChange={(nextValue) => {
          setValue(nextValue);
          setChanges((count) => count + 1);
        }}
      />
    </div>
  );
}

export const ChangeTelemetry: Story = {
  render: () => <ChangeTelemetryDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buildTab = canvas.getByRole("tab", { name: "Build" });
    const releaseTab = canvas.getByRole("tab", { name: "Release" });
    const counter = canvas.getByTestId("change-count");

    await userEvent.click(buildTab);
    await expect(counter).toHaveTextContent("0");

    await userEvent.click(releaseTab);
    await expect(counter).toHaveTextContent("1");

    await userEvent.click(releaseTab);
    await expect(counter).toHaveTextContent("1");
  }
};

export const ControlsReferenceMountedPanels: Story = {
  render: () => <Tabs items={productTabs} defaultValue="spec" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const releaseTab = canvas.getByRole("tab", { name: "Release" });

    const specPanelId = specTab.getAttribute("aria-controls");
    const releasePanelId = releaseTab.getAttribute("aria-controls");
    await expect(specPanelId).toBeTruthy();
    await expect(releasePanelId).toBeTruthy();
    await expect(document.getElementById(specPanelId!)).not.toBeNull();
    await expect(document.getElementById(releasePanelId!)).not.toBeNull();

    const releasePanel = document.getElementById(releasePanelId!);
    await expect(releasePanel).toHaveAttribute("hidden");

    await userEvent.click(releaseTab);
    await expect(releasePanel).not.toHaveAttribute("hidden");
  }
};
