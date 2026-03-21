import type { Meta, StoryObj } from "@storybook/react";
import { Button, Tooltip } from "@aurora-ui/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";
import * as React from "react";
import { StoryShowcaseFrame, storyMutedTextStyle } from "./storyShowcase";

function TooltipShowcase({ children, gap = 12 }: { children: React.ReactNode; gap?: number }) {
  return (
    <StoryShowcaseFrame maxWidth="min(100%, 520px)" gap={gap}>
      {children}
    </StoryShowcaseFrame>
  );
}

const meta = {
  title: "Overlay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Tooltip supports controlled/uncontrolled mode, pointer delay, and deterministic Escape/blur close behavior."
      }
    }
  },
  args: {
    content: "Use Cmd/Ctrl + K to open command palette.",
    delayDuration: 200,
    side: "top"
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

    await userEvent.hover(trigger);
    await expect(await canvas.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette.");
    await expect(canvas.getByRole("tooltip")).toHaveAttribute("aria-keyshortcuts", "Escape");
    await userEvent.unhover(trigger);
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });

    trigger.focus();
    await expect(await canvas.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette.");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  }
};

export const EscapeModifierGuard: Story = {
  args: {
    content: "Only unmodified Escape should close this tooltip.",
    children: <Button variant="outline">Escape Guard Trigger</Button>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Escape Guard Trigger" });

    trigger.focus();
    await expect(await canvas.findByRole("tooltip")).toHaveTextContent(
      "Only unmodified Escape should close this tooltip."
    );

    fireEvent.keyDown(trigger, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(trigger, { key: "Escape", altKey: true });
    fireEvent.keyDown(trigger, { key: "Escape", metaKey: true });
    fireEvent.keyDown(trigger, { key: "Escape", repeat: true });
    fireEvent.keyDown(trigger, { key: "Escape", isComposing: true, keyCode: 229, which: 229 });
    await expect(canvas.getByRole("tooltip")).toBeInTheDocument();

    await userEvent.keyboard("{Shift>}{Escape}{/Shift}");
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  }
};

export const InlineHint: Story = {
  args: {
    content: "Theme tokens are inherited from AuroraProvider.",
    children: (
      <button
        type="button"
        style={{ border: 0, background: "transparent", color: "var(--aurora-text-secondary)", textDecoration: "underline", cursor: "pointer" }}
      >
        Token inheritance
      </button>
    )
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    content: "This tooltip should never open",
    children: <Button variant="ghost">Disabled Tooltip</Button>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Disabled Tooltip" });
    await userEvent.hover(trigger);
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  }
};

function ControlledTooltipStory({ content, children }: { content: React.ReactNode; children: React.ReactElement }) {
  const [open, setOpen] = React.useState(false);
  return (
    <TooltipShowcase>
      <Button onClick={() => setOpen((previous) => !previous)}>{open ? "Hide tooltip" : "Show tooltip"}</Button>
      <Tooltip open={open} onOpenChange={setOpen} content={content}>
        {children}
      </Tooltip>
    </TooltipShowcase>
  );
}

export const Controlled: Story = {
  args: {
    content: "Controlled tooltip content",
    children: <Button variant="outline">Controlled target</Button>
  },
  render: (args) => <ControlledTooltipStory content={args.content}>{args.children}</ControlledTooltipStory>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.findByRole("button", { name: "Show tooltip" });

    await userEvent.click(toggleButton);
    await expect(await canvas.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content");
    const target = await canvas.findByRole("button", { name: "Controlled target" });
    target.focus();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  }
};

export const DescribedByLifecycle: Story = {
  args: {
    content: "Tooltip with described-by lifecycle checks",
    children: <Button variant="outline">Lifecycle target</Button>
  },
  render: (args) => (
    <TooltipShowcase gap={8}>
      <Tooltip content={args.content} closeDelay={0}>
        <button type="button" aria-describedby="helper-id">
          Lifecycle target
        </button>
      </Tooltip>
      <small id="helper-id" style={storyMutedTextStyle}>
        Existing helper narration
      </small>
    </TooltipShowcase>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Lifecycle target" });

    trigger.focus();
    const tooltip = await canvas.findByRole("tooltip");
    const tooltipId = tooltip.getAttribute("id") as string;
    await expect(trigger.getAttribute("aria-describedby") ?? "").toContain("helper-id");
    await expect(trigger.getAttribute("aria-describedby") ?? "").toContain(tooltipId);

    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    await expect(trigger).toHaveAttribute("aria-describedby", "helper-id");
  }
};
