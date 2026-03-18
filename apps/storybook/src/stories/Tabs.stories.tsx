import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Tabs, type TabItem } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const productTabs: TabItem[] = [
  {
    key: "spec",
    label: "Spec",
    content: "Token contract, component API, and test strategy are captured here before implementation."
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
    <div style={{ width: 620, display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Current stage</span>
        <Badge tone="default">{value}</Badge>
      </div>
      <Tabs items={productTabs} value={value} onValueChange={setValue} />
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

export const KeyboardNavigationGuide: Story = {
  render: () => (
    <div style={{ width: 620, display: "grid", gap: 12 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first
        enabled tab, End jumps to last enabled tab.
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
    <div style={{ width: 620, display: "grid", gap: 12 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Set <code>loop=&#123;false&#125;</code> to keep Arrow navigation at tablist boundaries instead of wrapping.
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
    <div style={{ width: 620, display: "grid", gap: 10 }}>
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
    <div style={{ width: 620 }}>
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
    await expect(canvas.getByRole("tab", { name: "Release" })).toHaveAttribute("aria-selected", "true");
  }
};

export const RtlKeyboardNavigation: Story = {
  render: () => (
    <div dir="rtl" style={{ width: 620, display: "grid", gap: 12 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab.
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
    <div style={{ width: 620, display: "grid", gap: 12 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate.
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

export const ManualVerticalActivation: Story = {
  render: () => (
    <div style={{ width: 620, display: "grid", gap: 12 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates.
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
    const shipTab = canvas.getByRole("tab", { name: "Ship" });

    await userEvent.click(backlogTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent.");

    await userEvent.keyboard("{ArrowDown}");
    await expect(shipTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent.");

    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.");
  }
};

function ChangeTelemetryDemo() {
  const [value, setValue] = React.useState("build");
  const [changes, setChanges] = React.useState(0);

  return (
    <div style={{ width: 620, display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Value change events</span>
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
