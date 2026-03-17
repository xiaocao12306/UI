import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@aurora-ui/react";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Skeleton supports decorative and narrated loading states with shape variants and animation toggles."
      }
    }
  },
  args: {
    width: 320,
    height: 16
  }
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const skeleton = canvas.getByTestId("story-skeleton-default");
    await expect(skeleton).toHaveAttribute("aria-hidden", "true");
  },
  render: (args) => <Skeleton data-testid="story-skeleton-default" {...args} />
};

export const ProfileCard: Story = {
  render: () => (
    <div style={{ width: 360, display: "grid", gap: 12 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Skeleton variant="circle" width={42} height={42} />
        <div style={{ display: "grid", gap: 6, flex: 1 }}>
          <Skeleton variant="text" width="42%" />
          <Skeleton variant="text" width="68%" />
        </div>
      </div>
      <Skeleton height={96} />
    </div>
  )
};

export const NarratedStatus: Story = {
  args: {
    width: 360,
    height: 18,
    ariaLabel: "Loading release list",
    animated: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole("status", { name: "Loading release list" })).toBeInTheDocument();
  }
};
