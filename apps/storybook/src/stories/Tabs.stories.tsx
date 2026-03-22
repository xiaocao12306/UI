import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button, Tabs, type TabItem } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";
import { StoryShowcaseFrame, storyMutedTextStyle } from "./storyShowcase";

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

const storyTelemetryLabelStyle: React.CSSProperties = {
  color: "var(--aurora-text-secondary)",
  fontSize: 13
};

const tabsShowcaseMaxWidth = "min(100%, 620px)";
const automaticHorizontalTabShortcuts = "Home End PageDown PageUp ArrowLeft ArrowRight";
const automaticVerticalTabShortcuts = "Home End PageDown PageUp ArrowUp ArrowDown";
const manualHorizontalTabShortcuts = "Enter Space Home End PageDown PageUp ArrowLeft ArrowRight";
const manualVerticalTabShortcuts = "Enter Space Home End PageDown PageUp ArrowUp ArrowDown";

function TabsShowcase({
  children,
  gap = 12,
  dir
}: {
  children: React.ReactNode;
  gap?: number;
  dir?: "ltr" | "rtl";
}) {
  if (dir) {
    return (
      <div dir={dir}>
        <StoryShowcaseFrame maxWidth={tabsShowcaseMaxWidth} gap={gap}>
          {children}
        </StoryShowcaseFrame>
      </div>
    );
  }

  return (
    <StoryShowcaseFrame maxWidth={tabsShowcaseMaxWidth} gap={gap}>
      {children}
    </StoryShowcaseFrame>
  );
}

function dispatchImeKeyDown(element: HTMLElement, key: string) {
  const event = new KeyboardEvent("keydown", { key, bubbles: true });
  Object.defineProperty(event, "isComposing", { value: true });
  Object.defineProperty(event, "keyCode", { value: 229 });
  element.dispatchEvent(event);
}

function dispatchLegacyImeKeyDown(element: HTMLElement, key: string) {
  const event = new KeyboardEvent("keydown", { key, bubbles: true });
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
          "Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End/PageUp/PageDown) and theme-aware state styling for data-heavy dashboards."
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
    <TabsShowcase gap={10}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={storyTelemetryLabelStyle}>Current stage</span>
        <Badge tone="default">{value}</Badge>
      </div>
      <Tabs items={productTabs} value={value} onValueChange={setValue} />
    </TabsShowcase>
  );
}

function DisableVisualResetTabsDemo() {
  const [buildDisabled, setBuildDisabled] = React.useState(false);

  return (
    <TabsShowcase>
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
    </TabsShowcase>
  );
}

function RemoveActiveTabFallbackDemo() {
  const [removeBuildTab, setRemoveBuildTab] = React.useState(false);

  const items: TabItem[] = removeBuildTab
    ? [
        { key: "spec", label: "Spec", content: "Spec stage remains available." },
        { key: "release", label: "Release", content: "Release stage becomes the nearest fallback." }
      ]
    : [
        { key: "spec", label: "Spec", content: "Spec stage remains available." },
        { key: "build", label: "Build", content: "Build stage is active before removal." },
        { key: "release", label: "Release", content: "Release stage becomes the nearest fallback." }
      ];

  return (
    <TabsShowcase>
      <Button size="sm" variant="outline" onClick={() => setRemoveBuildTab(true)}>
        Remove Build tab
      </Button>
      <Tabs ariaLabel="Removal fallback tabs" defaultValue="build" items={items} />
    </TabsShowcase>
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
    <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring
        for the active tab.
      </p>
      <button type="button">Before tabs</button>
      <Tabs ariaLabel="Focus ring fallback tabs" defaultValue="spec" items={productTabs} />
    </TabsShowcase>
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

export const KeyboardFocusRingShiftTabReentry: Story = {
  render: () => (
    <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Pointer focus keeps ring hidden, then reverse keyboard navigation (Shift+Tab) restores
        focus-visible ring for the active tab.
      </p>
      <Tabs
        ariaLabel="Shift+Tab focus ring fallback tabs"
        defaultValue="spec"
        items={productTabs}
      />
      <button type="button">After tabs</button>
    </TabsShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const afterButton = canvas.getByRole("button", { name: "After tabs" });
    const panel = canvas.getByRole("tabpanel");

    fireEvent.mouseDown(specTab);
    specTab.focus();

    await userEvent.click(afterButton);
    await userEvent.tab({ shift: true });
    await expect(panel).toHaveFocus();
    await userEvent.tab({ shift: true });
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

export const RemovedActiveTabFallback: Story = {
  render: () => <RemoveActiveTabFallbackDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const removeButton = canvas.getByRole("button", { name: "Remove Build tab" });

    await expect(canvas.getByRole("tab", { name: "Build" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    await userEvent.click(removeButton);

    const releaseTab = canvas.getByRole("tab", { name: "Release" });
    await expect(releaseTab).toHaveAttribute("aria-selected", "true");
    await expect(releaseTab).toHaveAttribute("tabindex", "0");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent(
      "Release stage becomes the nearest fallback."
    );
  }
};

export const PrimaryPointerOnlyPressedState: Story = {
  render: function RenderPrimaryPointerOnlyPressedState() {
    const [activeKey, setActiveKey] = React.useState("spec");
    const [changeCount, setChangeCount] = React.useState(0);

    return (
      <TabsShowcase gap={10}>
        <p style={storyMutedTextStyle}>
          Active tab: <strong data-testid="primary-pointer-active">{activeKey}</strong> | Change
          count: <strong data-testid="primary-pointer-count">{changeCount}</strong>
        </p>
        <button type="button">Before tabs</button>
        <Tabs
          ariaLabel="Primary pointer tabs"
          value={activeKey}
          activationMode="manual"
          items={productTabs}
          onValueChange={(nextKey) => {
            setActiveKey(nextKey);
            setChangeCount((current) => current + 1);
          }}
        />
      </TabsShowcase>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeButton = canvas.getByRole("button", { name: "Before tabs" });
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const buildTab = canvas.getByRole("tab", { name: "Build" });
    const activeValue = canvas.getByTestId("primary-pointer-active");
    const changeCount = canvas.getByTestId("primary-pointer-count");

    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(specTab).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(buildTab).toHaveFocus();
    await expect(buildTab.style.boxShadow).toContain("0 0 0 3px");

    fireEvent.mouseDown(buildTab, { button: 2 });
    fireEvent.mouseUp(buildTab, { button: 2 });
    await expect(buildTab.style.boxShadow).toContain("0 0 0 3px");
    await expect(activeValue).toHaveTextContent("spec");
    await expect(changeCount).toHaveTextContent("0");

    fireEvent.mouseDown(buildTab, { button: 0 });
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(1px)");
    });
    fireEvent.pointerCancel(buildTab);
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(0");
    });
    await expect(activeValue).toHaveTextContent("spec");
    await expect(changeCount).toHaveTextContent("0");

    buildTab.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        cancelable: true,
        pointerType: "touch",
        button: 0
      })
    );
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(1px)");
    });
    buildTab.dispatchEvent(
      new PointerEvent("pointerup", {
        bubbles: true,
        cancelable: true,
        pointerType: "touch",
        button: 0
      })
    );
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(0");
    });
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
    await expect(tabList).toHaveAttribute("tabindex", "0");

    const allTabs = canvas.getAllByRole("tab");
    await expect(allTabs).toHaveLength(2);

    allTabs.forEach((tab, index) => {
      expect(tab).toBeDisabled();
      expect(tab).not.toHaveAttribute("aria-keyshortcuts");
      expect(tab).toHaveAttribute("aria-selected", index === 0 ? "true" : "false");
      expect(tab).toHaveAttribute("tabindex", "-1");
    });

    await expect(canvas.getByRole("tabpanel", { name: "Spec" })).toBeVisible();
    await expect(canvas.getByText("Specification stage is disabled.")).toBeInTheDocument();

    await userEvent.tab();
    await expect(tabList).toHaveFocus();
  }
};

export const EmptyTabsSkipTabStop: Story = {
  render: () => (
    <TabsShowcase>
      <button type="button">Before empty tabs</button>
      <Tabs ariaLabel="Empty tabs" items={[]} />
      <button type="button">After empty tabs</button>
    </TabsShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabList = canvas.getByRole("tablist", { name: "Empty tabs" });
    await expect(tabList).not.toHaveAttribute("tabindex");
    await expect(tabList).not.toHaveAttribute("aria-disabled");
    await expect(canvas.queryByRole("tab")).not.toBeInTheDocument();
    await expect(canvas.queryByRole("tabpanel")).not.toBeInTheDocument();

    await userEvent.tab();
    await expect(canvas.getByRole("button", { name: "Before empty tabs" })).toHaveFocus();

    await userEvent.tab();
    await expect(canvas.getByRole("button", { name: "After empty tabs" })).toHaveFocus();
  }
};

export const SingleActionableTab: Story = {
  render: () => (
    <Tabs
      ariaLabel="Single actionable tab example"
      activationMode="manual"
      items={[
        {
          key: "spec",
          label: "Spec",
          content: "Specification stage is active."
        },
        {
          key: "security",
          label: "Security Review",
          content: "Security review is blocked.",
          disabled: true
        },
        {
          key: "release",
          label: "Release",
          content: "Release stage is blocked.",
          disabled: true
        }
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const securityTab = canvas.getByRole("tab", { name: "Security Review" });
    const releaseTab = canvas.getByRole("tab", { name: "Release" });

    await expect(specTab).not.toHaveAttribute("aria-keyshortcuts");
    await expect(securityTab).not.toHaveAttribute("aria-keyshortcuts");
    await expect(releaseTab).not.toHaveAttribute("aria-keyshortcuts");

    specTab.focus();
    await userEvent.keyboard("{ArrowRight}");
    await userEvent.keyboard("{Enter}");

    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();
    await expect(canvas.getByText("Specification stage is active.")).toBeInTheDocument();
  }
};

export const KeyboardNavigationGuide: Story = {
  render: () => (
    <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown.
        Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to
        the previous/next enabled tab.
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
    </TabsShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const releaseTab = canvas.getByRole("tab", { name: "Release" });
    const blockedTab = canvas.getByRole("tab", { name: "Blocked" });

    await userEvent.click(specTab);
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveAttribute("aria-keyshortcuts", automaticHorizontalTabShortcuts);
    await expect(releaseTab).toHaveAttribute("aria-keyshortcuts", automaticHorizontalTabShortcuts);
    await expect(blockedTab).toHaveAttribute("aria-disabled", "true");
    await expect(blockedTab).not.toHaveAttribute("aria-keyshortcuts");

    await userEvent.keyboard("{End}");
    await expect(releaseTab).toHaveAttribute("aria-selected", "true");
    await expect(releaseTab).toHaveFocus();

    await userEvent.keyboard("{PageUp}");
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();

    await userEvent.keyboard("{PageDown}");
    await expect(releaseTab).toHaveAttribute("aria-selected", "true");
    await expect(releaseTab).toHaveFocus();

    await userEvent.keyboard("{Home}");
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();

    fireEvent.keyDown(specTab, { key: "End", ctrlKey: true });
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();

    fireEvent.keyDown(specTab, { key: "PageDown", ctrlKey: true });
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();
  }
};

export const NoLoopNavigation: Story = {
  render: () => (
    <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Set <code>loop=&#123;false&#125;</code> to keep Arrow navigation at tablist boundaries
        instead of wrapping.
      </p>
      <Tabs ariaLabel="No loop tabs" defaultValue="spec" loop={false} items={productTabs} />
    </TabsShowcase>
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
    <TabsShowcase gap={10}>
      <h3 id={headingId} style={{ margin: 0 }}>
        Release Stages
      </h3>
      <Tabs ariaLabelledBy={headingId} items={productTabs} defaultValue="spec" />
    </TabsShowcase>
  );
}

function IconOnlyLabelTabsDemo() {
  return (
    <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Icon tabs should expose explicit naming through <code>items[].ariaLabel</code> so keyboard
        and screen-reader navigation stay clear.
      </p>
      <Tabs
        ariaLabel="Icon label tabs"
        defaultValue="overview"
        items={[
          {
            key: "overview",
            label: <span aria-hidden="true">🧭</span>,
            ariaLabel: "Navigation overview",
            content: "Overview panel keeps icon-only tab naming explicit."
          },
          {
            key: "release",
            label: "Release",
            content: "Release panel remains text-labeled."
          }
        ]}
      />
    </TabsShowcase>
  );
}

function NonTextFallbackNamingTabsDemo() {
  return (
    <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Non-text tabs without explicit naming still get fallback accessible names derived from
        <code> items[].key </code> and normalized for readability to avoid unnamed tab controls in
        production.
      </p>
      <Tabs
        ariaLabel="Fallback naming tabs"
        defaultValue="overview-stage"
        items={[
          {
            key: "overview-stage",
            label: <span aria-hidden="true">🧭</span>,
            content: "Overview panel keeps fallback naming deterministic."
          },
          {
            key: "release",
            label: "Release",
            content: "Release panel remains text-labeled."
          }
        ]}
      />
    </TabsShowcase>
  );
}

function IconOnlyLabelledByTabsDemo() {
  return (
    <TabsShowcase gap={10}>
      <p style={storyMutedTextStyle}>
        Icon tabs can bind to external visible headings with <code>items[].ariaLabelledBy</code>;
        when both naming props are present, <code>ariaLabelledBy</code> takes precedence.
      </p>
      <h3 id="tabs-icon-overview-heading" style={{ margin: 0, fontSize: "var(--aurora-font-size-sm)" }}>
        Navigation overview
      </h3>
      <Tabs
        ariaLabel="Icon labelledby tabs"
        defaultValue="overview"
        items={[
          {
            key: "overview",
            label: <span aria-hidden="true">🧭</span>,
            ariaLabel: "Fallback overview label",
            ariaLabelledBy: "tabs-icon-overview-heading",
            content: "Overview panel binds icon tab naming to visible heading."
          },
          {
            key: "release",
            label: "Release",
            content: "Release panel remains text-labeled."
          }
        ]}
      />
    </TabsShowcase>
  );
}

export const LabelledByHeading: Story = {
  render: () => <LabelledByHeadingDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", { name: "Release Stages" })).toBeInTheDocument();
  }
};

export const IconOnlyLabelNaming: Story = {
  render: () => <IconOnlyLabelTabsDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const iconTab = canvas.getByRole("tab", { name: "Navigation overview" });
    await expect(iconTab).toHaveAttribute("aria-selected", "true");
    await expect(iconTab).toHaveAttribute("aria-controls");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent(
      "Overview panel keeps icon-only tab naming explicit."
    );
  }
};

export const NonTextFallbackNaming: Story = {
  render: () => <NonTextFallbackNamingTabsDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const iconTab = canvas.getByRole("tab", { name: "overview stage" });
    await expect(iconTab).toHaveAttribute("aria-label", "overview stage");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent(
      "Overview panel keeps fallback naming deterministic."
    );
  }
};

export const IconOnlyLabelledByPrecedence: Story = {
  render: () => <IconOnlyLabelledByTabsDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const iconTab = canvas.getByRole("tab", { name: "Navigation overview" });
    await expect(iconTab).toHaveAttribute("aria-labelledby", "tabs-icon-overview-heading");
    await expect(iconTab).not.toHaveAttribute("aria-label");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent(
      "Overview panel binds icon tab naming to visible heading."
    );
  }
};

export const Vertical: Story = {
  render: () => (
    <TabsShowcase>
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
    </TabsShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabList = canvas.getByRole("tablist", { name: "Vertical workflow tabs" });
    await expect(tabList).toHaveAttribute("aria-orientation", "vertical");

    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const reviewTab = canvas.getByRole("tab", { name: "Review" });
    const releaseTab = canvas.getByRole("tab", { name: "Release" });
    await userEvent.click(specTab);
    await expect(specTab).toHaveAttribute("aria-keyshortcuts", automaticVerticalTabShortcuts);
    await expect(releaseTab).toHaveAttribute("aria-keyshortcuts", automaticVerticalTabShortcuts);
    await expect(reviewTab).not.toHaveAttribute("aria-keyshortcuts");

    fireEvent.keyDown(specTab, { key: "ArrowDown", ctrlKey: true });
    fireEvent.keyDown(specTab, { key: "ArrowUp", metaKey: true });
    await expect(specTab).toHaveFocus();
    await expect(specTab).toHaveAttribute("aria-selected", "true");

    await userEvent.keyboard("{ArrowDown}");
    await expect(releaseTab).toHaveAttribute("aria-selected", "true");
  }
};

export const RtlKeyboardNavigation: Story = {
  render: () => (
    <TabsShowcase dir="rtl">
      <p style={storyMutedTextStyle}>
        In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the
        next tab.
      </p>
      <Tabs ariaLabel="RTL workflow tabs" defaultValue="spec" items={productTabs} />
    </TabsShowcase>
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
    <TabsShowcase>
      <p style={storyMutedTextStyle}>
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
    </TabsShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const releaseTab = canvas.getByRole("tab", { name: "Release" });

    await userEvent.click(specTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(specTab).toHaveAttribute("aria-keyshortcuts", manualHorizontalTabShortcuts);
    await expect(releaseTab).toHaveAttribute("aria-keyshortcuts", manualHorizontalTabShortcuts);

    await userEvent.keyboard("{ArrowRight}");
    const buildTab = canvas.getByRole("tab", { name: "Build" });
    await expect(buildTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");

    await userEvent.keyboard("{Shift>}{Enter}{/Shift}");
    await waitFor(() => {
      expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    });

    await userEvent.keyboard("{End}");
    await expect(releaseTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");

    releaseTab.focus();
    await userEvent.keyboard("{Shift>}{Space}{/Shift}");
    await waitFor(() => {
      expect(canvas.getByRole("tabpanel")).toHaveTextContent("Release stage.");
    });
  }
};

export const ManualActivationPressedFeedback: Story = {
  render: () => (
    <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Manual activation tab triggers expose pressed-state feedback while Enter/Space is held, and
        clear it on keyup.
      </p>
      <Tabs
        ariaLabel="Manual pressed feedback tabs"
        activationMode="manual"
        defaultValue="spec"
        items={[
          { key: "spec", label: "Spec", content: "Specification stage." },
          { key: "build", label: "Build", content: "Build stage." },
          { key: "release", label: "Release", content: "Release stage." }
        ]}
      />
    </TabsShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buildTab = canvas.getByRole("tab", { name: "Build" });

    fireEvent.keyDown(buildTab, { key: "Enter", ctrlKey: true });
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(0");
    });

    fireEvent.keyDown(buildTab, { key: "Enter" });
    await waitFor(() => {
      expect(buildTab.style.transform).toBe("translateY(1px)");
    });

    fireEvent.keyUp(buildTab, { key: "Enter" });
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(0");
    });

    fireEvent.keyDown(buildTab, { key: "Spacebar" });
    await waitFor(() => {
      expect(buildTab.style.transform).toBe("translateY(1px)");
    });

    fireEvent.keyUp(buildTab, { key: "Spacebar" });
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(0");
    });
  }
};

function ManualActivationRepeatGuardDemo() {
  const [value, setValue] = React.useState("spec");
  const [changes, setChanges] = React.useState(0);

  return (
    <TabsShowcase gap={10}>
      <p style={storyMutedTextStyle}>
        Manual activation ignores repeated Enter/Space keydown so long-press does not trigger
        duplicate value changes.
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={storyTelemetryLabelStyle}>Manual activation changes</span>
        <Badge tone="default" data-testid="manual-repeat-change-count">
          {changes}
        </Badge>
      </div>
      <Tabs
        ariaLabel="Manual repeat guard tabs"
        activationMode="manual"
        value={value}
        onValueChange={(nextValue) => {
          setValue(nextValue);
          setChanges((count) => count + 1);
        }}
        items={[
          { key: "spec", label: "Spec", content: "Specification stage." },
          { key: "build", label: "Build", content: "Build stage." },
          { key: "release", label: "Release", content: "Release stage." }
        ]}
      />
    </TabsShowcase>
  );
}

function ManagedKeysPreemptedDemo() {
  const [value, setValue] = React.useState("spec");
  const [changes, setChanges] = React.useState(0);

  return (
    <TabsShowcase gap={10}>
      <p style={storyMutedTextStyle}>
        Global shortcut guards that preempt keydown should keep tablist selection and roving focus
        stable.
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={storyTelemetryLabelStyle}>Tab value changes</span>
        <Badge tone="default" data-testid="managed-key-preempt-change-count">
          {changes}
        </Badge>
      </div>
      <div onKeyDownCapture={(event) => event.preventDefault()}>
        <Tabs
          ariaLabel="Managed key preempt tabs"
          activationMode="manual"
          value={value}
          onValueChange={(nextValue) => {
            setValue(nextValue);
            setChanges((count) => count + 1);
          }}
          items={[
            { key: "spec", label: "Spec", content: "Specification stage." },
            { key: "build", label: "Build", content: "Build stage." },
            { key: "release", label: "Release", content: "Release stage." }
          ]}
        />
      </div>
    </TabsShowcase>
  );
}

function DuplicateKeyRerenderStabilityDemo() {
  const [version, setVersion] = React.useState(0);
  const items = React.useMemo<TabItem[]>(
    () =>
      version % 2 === 0
        ? [
            { key: "spec", label: "Spec", content: "Specification stage." },
            { key: "build", label: "Build", content: "Build stage." },
            { key: "build", label: "Build backup", content: "Build backup stage." }
          ]
        : [
            { key: "lint", label: "Lint", content: "Lint stage." },
            { key: "spec", label: "Spec", content: "Specification stage." },
            { key: "build", label: "Build", content: "Build stage." },
            { key: "build", label: "Build backup", content: "Build backup stage." }
          ],
    [version]
  );

  return (
    <TabsShowcase gap={10}>
      <p style={storyMutedTextStyle}>
        Duplicate-key tabs should keep focused tab identity stable when a non-duplicate tab is
        prepended during rerender.
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={storyTelemetryLabelStyle}>Refresh version</span>
        <Badge tone="default" data-testid="tabs-duplicate-refresh-version">
          {version}
        </Badge>
      </div>
      <Button
        size="sm"
        variant="outline"
        onPointerDown={(event) => event.preventDefault()}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => setVersion((current) => current + 1)}
      >
        Refresh tabs list
      </Button>
      <Tabs ariaLabel="Duplicate key rerender stability tabs" defaultValue="spec" items={items} />
    </TabsShowcase>
  );
}

function DuplicateKeyInteractionIsolationDemo() {
  return (
    <TabsShowcase gap={10}>
      <p style={storyMutedTextStyle}>
        Duplicate-key tabs should keep hover, focus-ring, and pressed visuals scoped to the
        interacted duplicate occurrence.
      </p>
      <Tabs
        ariaLabel="Duplicate key interaction isolation tabs"
        defaultValue="release"
        items={[
          { key: "build", label: "Build", content: "Build stage." },
          { key: "build", label: "Build backup", content: "Build backup stage." },
          { key: "release", label: "Release", content: "Release stage." }
        ]}
      />
    </TabsShowcase>
  );
}

function ManagedKeysPreemptedLocallyDemo() {
  const [value, setValue] = React.useState("spec");
  const [changes, setChanges] = React.useState(0);

  return (
    <TabsShowcase gap={10}>
      <p style={storyMutedTextStyle}>
        Local tab key guards should be able to preempt managed navigation/activation keys.
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={storyTelemetryLabelStyle}>Tab value changes</span>
        <Badge tone="default" data-testid="managed-key-local-preempt-change-count">
          {changes}
        </Badge>
      </div>
      <Tabs
        ariaLabel="Managed key local preempt tabs"
        activationMode="manual"
        value={value}
        onTabKeyDown={(event) => {
          if (event.key === "Enter" || event.key === "ArrowRight") {
            event.preventDefault();
          }
        }}
        onValueChange={(nextValue) => {
          setValue(nextValue);
          setChanges((count) => count + 1);
        }}
        items={[
          { key: "spec", label: "Spec", content: "Specification stage." },
          { key: "build", label: "Build", content: "Build stage." },
          { key: "release", label: "Release", content: "Release stage." }
        ]}
      />
    </TabsShowcase>
  );
}

export const ManualActivationRepeatGuard: Story = {
  render: () => <ManualActivationRepeatGuardDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const buildTab = canvas.getByRole("tab", { name: "Build" });
    const releaseTab = canvas.getByRole("tab", { name: "Release" });
    const changeCount = canvas.getByTestId("manual-repeat-change-count");

    await userEvent.click(specTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(changeCount).toHaveTextContent("0");

    await userEvent.keyboard("{ArrowRight}");
    await expect(buildTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");

    fireEvent.keyDown(buildTab, { key: "Enter", repeat: true });
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(changeCount).toHaveTextContent("0");

    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    await expect(changeCount).toHaveTextContent("1");

    await userEvent.keyboard("{ArrowRight}");
    await expect(releaseTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");

    fireEvent.keyDown(releaseTab, { key: " ", repeat: true });
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    await expect(changeCount).toHaveTextContent("1");

    await userEvent.keyboard("{Space}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Release stage.");
    await expect(changeCount).toHaveTextContent("2");
  }
};

export const DuplicateKeyRerenderStability: Story = {
  render: () => <DuplicateKeyRerenderStabilityDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const duplicateTab = canvas.getByRole("tab", { name: "Build backup" });

    fireEvent.click(canvas.getByRole("button", { name: "Refresh tabs list" }));
    await waitFor(() => {
      expect(canvas.getByTestId("tabs-duplicate-refresh-version")).toHaveTextContent("1");
    });

    await expect(canvas.getByRole("tab", { name: "Build backup" })).toBe(duplicateTab);
  }
};

export const DuplicateKeyInteractionIsolation: Story = {
  render: () => <DuplicateKeyInteractionIsolationDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primaryDuplicateTab = canvas.getByRole("tab", { name: "Build" });
    const secondaryDuplicateTab = canvas.getByRole("tab", { name: "Build backup" });

    await userEvent.hover(secondaryDuplicateTab);
    await expect(secondaryDuplicateTab.getAttribute("style")).toContain(
      "var(--aurora-accent-default) 52%"
    );
    await expect(primaryDuplicateTab.getAttribute("style")).not.toContain(
      "var(--aurora-accent-default) 52%"
    );
  }
};

export const ManagedKeysPreemptedByGlobalHandler: Story = {
  render: () => <ManagedKeysPreemptedDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const buildTab = canvas.getByRole("tab", { name: "Build" });
    const changeCount = canvas.getByTestId("managed-key-preempt-change-count");

    await userEvent.click(specTab);
    await expect(changeCount).toHaveTextContent("0");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");

    fireEvent.keyDown(specTab, { key: "ArrowRight" });
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(changeCount).toHaveTextContent("0");

    fireEvent.focus(buildTab);
    fireEvent.keyDown(buildTab, { key: "Enter" });
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(changeCount).toHaveTextContent("0");
  }
};

export const ManagedKeysPreemptedByLocalHandler: Story = {
  render: () => <ManagedKeysPreemptedLocallyDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", { name: "Spec" });
    const buildTab = canvas.getByRole("tab", { name: "Build" });
    const changeCount = canvas.getByTestId("managed-key-local-preempt-change-count");

    await userEvent.click(specTab);
    await expect(changeCount).toHaveTextContent("0");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");

    fireEvent.keyDown(specTab, { key: "ArrowRight" });
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(changeCount).toHaveTextContent("0");

    fireEvent.focus(buildTab);
    fireEvent.keyDown(buildTab, { key: "Enter" });
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(changeCount).toHaveTextContent("0");
  }
};

export const ManualFocusResetOnBlur: Story = {
  render: () => (
    <TabsShowcase>
      <p style={storyMutedTextStyle}>
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
    </TabsShowcase>
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
    <TabsShowcase>
      <p style={storyMutedTextStyle}>
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
    </TabsShowcase>
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

    dispatchLegacyImeKeyDown(buildTab, "Enter");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(buildTab).toHaveAttribute("aria-selected", "false");

    dispatchLegacyImeKeyDown(buildTab, "Space");
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
    <TabsShowcase>
      <p style={storyMutedTextStyle}>
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
    </TabsShowcase>
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
    await expect(backlogTab).toHaveAttribute("aria-keyshortcuts", manualVerticalTabShortcuts);
    await expect(shipTab).toHaveAttribute("aria-keyshortcuts", manualVerticalTabShortcuts);
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
    <TabsShowcase gap={10}>
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
    </TabsShowcase>
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
