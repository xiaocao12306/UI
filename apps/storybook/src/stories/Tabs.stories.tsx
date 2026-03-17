import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Tabs, type TabItem } from "@aurora-ui/react";

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
  render: () => <ControlledTabsDemo />
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
