import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@aurora-ui/react";
import { expect, within } from "@storybook/test";
import type { ReactNode } from "react";
import { StoryShowcaseFrame } from "./storyShowcase";

function ProgressShowcase({
  children,
  maxWidth = "min(100%, 360px)",
  gap = 10
}: {
  children: ReactNode;
  maxWidth?: string;
  gap?: number;
}) {
  return (
    <StoryShowcaseFrame maxWidth={maxWidth} gap={gap}>
      {children}
    </StoryShowcaseFrame>
  );
}

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Progress supports determinate and indeterminate states with semantic aria labels and optional helper value text."
      }
    }
  },
  args: {
    value: 62,
    label: "Deployment progress",
    showValueLabel: true
  }
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ProgressShowcase maxWidth="min(100%, 320px)">
      <Progress {...args} />
    </ProgressShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const progressbar = await canvas.findByRole("progressbar", { name: "Deployment progress" });
    await expect(progressbar).toHaveAttribute("aria-valuenow", "62");
    await expect(canvas.getByText("62%")).toBeInTheDocument();
  }
};

export const ToneMatrix: Story = {
  render: () => (
    <ProgressShowcase gap={12}>
      <Progress value={28} tone="default" label="Default progress" showValueLabel />
      <Progress value={46} tone="success" label="Success progress" showValueLabel />
      <Progress value={64} tone="warning" label="Warning progress" showValueLabel />
      <Progress value={82} tone="danger" label="Danger progress" showValueLabel />
    </ProgressShowcase>
  )
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    valueText: "Syncing deployment artifacts",
    showValueLabel: true
  },
  render: (args) => (
    <ProgressShowcase maxWidth="min(100%, 320px)">
      <Progress {...args} />
    </ProgressShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const progressbar = await canvas.findByRole("progressbar", { name: "Deployment progress" });
    await expect(progressbar).not.toHaveAttribute("aria-valuenow");
    await expect(progressbar).toHaveAttribute("aria-valuetext", "Syncing deployment artifacts");
  }
};
