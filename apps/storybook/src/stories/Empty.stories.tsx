import type { Meta, StoryObj } from "@storybook/react";
import { Button, Empty } from "@aurora-ui/react";
import { expect, within } from "@storybook/test";
import type { ReactNode } from "react";
import { StoryShowcaseFrame } from "./storyShowcase";

function EmptyShowcase({ children, maxWidth = "min(100%, 420px)", gap = 10 }: { children: ReactNode; maxWidth?: string; gap?: number }) {
  return (
    <StoryShowcaseFrame maxWidth={maxWidth} gap={gap}>
      {children}
    </StoryShowcaseFrame>
  );
}

const meta = {
  title: "Feedback/Empty",
  component: Empty,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Empty provides accessible placeholder states with optional icon/action and tone guidance."
      }
    }
  },
  args: {
    title: "No releases yet",
    description: "Create your first release to start tracking rollout quality."
  }
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <EmptyShowcase maxWidth="min(100%, 360px)">
      <Empty {...args} />
    </EmptyShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const empty = await canvas.findByRole("status");
    await expect(empty).toHaveTextContent("No releases yet");
  }
};

export const WithAction: Story = {
  args: {
    icon: <span aria-hidden style={{ fontSize: 20 }}>🧭</span>,
    action: <Button size="sm">Create release</Button>
  },
  render: (args) => (
    <EmptyShowcase maxWidth="min(100%, 360px)">
      <Empty {...args} />
    </EmptyShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole("button", { name: "Create release" })).toBeInTheDocument();
  }
};

export const ToneMatrix: Story = {
  render: () => (
    <EmptyShowcase gap={12}>
      <Empty title="Default" description="Baseline empty state." />
      <Empty title="Info" description="No synced records yet." tone="info" />
      <Empty title="Warning" description="No eligible items for this filter." tone="warning" />
      <Empty title="Danger" description="No data returned due to request failure." tone="danger" />
    </EmptyShowcase>
  )
};

export const NumericContentSemantics: Story = {
  render: () => (
    <EmptyShowcase maxWidth="min(100%, 360px)">
      <Empty title="No numeric telemetry" description={0} action={0} icon={0} />
    </EmptyShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const empty = await canvas.findByRole("status");
    await expect(empty).toHaveAttribute("aria-describedby");
    await expect(canvas.getAllByText("0").length).toBeGreaterThanOrEqual(3);
  }
};
