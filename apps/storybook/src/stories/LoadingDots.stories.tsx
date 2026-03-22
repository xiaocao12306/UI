import type { Meta, StoryObj } from "@storybook/react";
import { LoadingDots } from "@aurora-ui/react";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Feedback/LoadingDots",
  component: LoadingDots,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "LoadingDots supports configurable rhythm, accessible status narration, and paused states for waiting UIs."
      }
    }
  },
  args: {
    label: "Loading suggestions",
    dotCount: 3
  }
} satisfies Meta<typeof LoadingDots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dots = await canvas.findByRole("status", { name: "Loading suggestions" });
    await expect(dots).toHaveAttribute("aria-live", "polite");
    await expect(dots).toHaveAttribute("aria-busy", "true");
  }
};

export const SlowPulse: Story = {
  args: {
    interval: 560,
    dotCount: 4
  }
};

export const Paused: Story = {
  args: {
    running: false,
    live: "off",
    dotCount: 4
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dots = await canvas.findByRole("status", { name: "Loading suggestions" });
    await expect(dots).toHaveAttribute("aria-busy", "false");
    await expect(dots).toHaveTextContent("....");
  }
};

export const LabelledByPrecedence: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 10 }}>
      <h3 id="loading-heading" style={{ margin: 0 }}>
        Suggestion loading heading
      </h3>
      <LoadingDots
        label="Loading suggestions"
        ariaLabel="Fallback loading status"
        ariaLabelledBy="loading-heading"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dots = await canvas.findByRole("status", { name: "Suggestion loading heading" });
    await expect(dots).toHaveAttribute("aria-labelledby", "loading-heading");
    await expect(dots).not.toHaveAttribute("aria-label");
  }
};
