import type { Meta, StoryObj } from "@storybook/react";
import { Button, Tooltip } from "@aurora-ui/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";

const meta = {
  title: "Overlay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Tooltip opens on hover/focus and closes on leave/blur/Escape for keyboard and pointer parity."
      }
    }
  },
  args: {
    content: "Use Cmd/Ctrl + K to open command palette."
  }
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Button variant="outline">Keyboard Shortcut</Button>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Keyboard Shortcut" });

    trigger.focus();
    await expect(await canvas.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette.");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  }
};

export const InlineHint: Story = {
  args: {
    content: "Theme tokens are inherited from AuroraProvider.",
    children: (
      <button type="button" style={{ border: 0, background: "transparent", color: "var(--aurora-text-secondary)", textDecoration: "underline", cursor: "pointer" }}>
        Token inheritance
      </button>
    )
  }
};
