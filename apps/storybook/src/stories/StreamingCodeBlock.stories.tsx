import type { Meta, StoryObj } from "@storybook/react";
import { StreamingCodeBlock } from "@aurora-ui/react";
import { expect, waitFor } from "@storybook/test";

const meta = {
  title: "AI/StreamingCodeBlock",
  component: StreamingCodeBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "StreamingCodeBlock reveals generated code progressively and marks busy state until streaming completes."
      }
    }
  },
  args: {
    language: "bash",
    code: "pnpm verify",
    speed: 12,
    label: "CI command stream",
    live: "off"
  }
} satisfies Meta<typeof StreamingCodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[aria-busy]") as HTMLElement;
    const codeNode = canvasElement.querySelector("code") as HTMLElement;

    await expect(root).toHaveAttribute("role", "region");
    await expect(root).toHaveAttribute("aria-label", "CI command stream");
    await expect(root).toHaveAttribute("aria-live", "off");
    await expect(root).toHaveAttribute("aria-busy", "true");
    await waitFor(() => {
      expect(codeNode).toHaveTextContent("pnpm verify");
      expect(root).toHaveAttribute("aria-busy", "false");
    });
  }
};

export const InstantRender: Story = {
  args: {
    language: "ts",
    code: "export const releaseReady = true;",
    speed: 0
  }
};

export const LiveNarration: Story = {
  args: {
    language: "tsx",
    code: "export function ShipGate() { return true; }",
    speed: 10,
    live: "polite",
    label: "Release streaming code output"
  },
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[aria-busy]") as HTMLElement;

    await expect(root).toHaveAttribute("aria-label", "Release streaming code output");
    await expect(root).toHaveAttribute("aria-live", "polite");
  }
};

export const RuntimeBooleanConfigNormalization: Story = {
  args: {
    language: "bash",
    code: "echo runtime-safe",
    speed: 10,
    live: "off",
    respectReducedMotion: "false" as unknown as boolean
  },
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[aria-busy]") as HTMLElement;
    const codeNode = canvasElement.querySelector("code") as HTMLElement;

    await expect(root).toHaveAttribute("aria-live", "off");
    await expect(root).toHaveAttribute("aria-busy", "true");
    await waitFor(() => {
      expect(codeNode).toHaveTextContent("echo runtime-safe");
      expect(root).toHaveAttribute("aria-busy", "false");
    });
  }
};

export const LabelledByPrecedence: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 10 }}>
      <h3 id="code-heading" style={{ margin: 0 }}>
        Release code heading
      </h3>
      <StreamingCodeBlock
        language="ts"
        code="export const releaseReady = true;"
        speed={0}
        label="Code stream"
        ariaLabel="Fallback code region"
        ariaLabelledBy="code-heading"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[role='region']") as HTMLElement;
    await expect(root).toHaveAttribute("aria-labelledby", "code-heading");
    await expect(root).not.toHaveAttribute("aria-label");
  }
};
