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
          "Tabs support keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."
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

    await userEvent.click(releaseTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Publish with changesets");

    const tabList = canvas.getByRole("tablist", { name: "Tabs" });
    tabList.focus();
    await userEvent.keyboard("{Home}");
    await expect(canvas.getByRole("tab", { name: "Spec" })).toHaveAttribute("aria-selected", "true");
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
        Keyboard: use ArrowLeft/ArrowRight to move, Home to jump first enabled tab, End to jump last enabled tab.
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
  )
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
