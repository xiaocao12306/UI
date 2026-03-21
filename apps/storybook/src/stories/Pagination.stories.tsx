import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Pagination } from "@aurora-ui/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Data/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Pagination provides first/previous/number/next/last controls with compact ellipsis behavior and accessible page labels."
      }
    }
  },
  args: {
    page: 6,
    pageCount: 20,
    onPageChange: () => {}
  }
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledPaginationDemo() {
  const [page, setPage] = React.useState(1);

  return (
    <div style={{ width: 640, display: "grid", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Active page</span>
        <Badge tone="default">{page}</Badge>
      </div>
      <Pagination page={page} pageCount={12} onPageChange={setPage} />
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledPaginationDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", { name: "Go to page 2" }));
    await expect(await canvas.findByRole("button", { name: "Current page, 2" })).toBeInTheDocument();
  }
};

function KeyboardShortcutsDemo() {
  const [page, setPage] = React.useState(4);

  return (
    <div style={{ width: 640, display: "grid", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Keyboard page</span>
        <Badge tone="default">{page}</Badge>
      </div>
      <Pagination page={page} pageCount={12} onPageChange={setPage} />
    </div>
  );
}

export const KeyboardShortcuts: Story = {
  render: () => <KeyboardShortcutsDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const current = await canvas.findByRole("button", { name: "Current page, 4" });

    current.focus();
    await expect(current).toHaveFocus();
    await expect(current).toHaveAttribute("aria-keyshortcuts", "Home End ArrowLeft ArrowRight");
    await userEvent.keyboard("{End}");
    const currentLast = await canvas.findByRole("button", { name: "Current page, 12" });
    await expect(currentLast).toBeInTheDocument();
    await expect(currentLast).toHaveFocus();

    await userEvent.keyboard("{Home}");
    const currentFirst = await canvas.findByRole("button", { name: "Current page, 1" });
    await expect(currentFirst).toBeInTheDocument();
    await expect(currentFirst).toHaveFocus();
  }
};

function ModifierGuardPaginationDemo() {
  const [page, setPage] = React.useState(4);

  return (
    <div style={{ width: 640, display: "grid", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>Modifier guard page</span>
        <Badge tone="default" data-testid="pagination-modifier-guard-page">
          {page}
        </Badge>
      </div>
      <Pagination page={page} pageCount={12} onPageChange={setPage} />
    </div>
  );
}

export const ModifierKeyGuard: Story = {
  render: () => <ModifierGuardPaginationDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const current = await canvas.findByRole("button", { name: "Current page, 4" });

    current.focus();
    await expect(current).toHaveFocus();
    await expect(canvas.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4");

    await userEvent.keyboard("{Control>}{End}{/Control}");
    await userEvent.keyboard("{Meta>}{ArrowRight}{/Meta}");
    await userEvent.keyboard("{Alt>}{Home}{/Alt}");
    await expect(canvas.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4");
    await expect(canvas.getByRole("button", { name: "Current page, 4" })).toHaveFocus();

    await userEvent.keyboard("{End}");
    await expect(canvas.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("12");
    await expect(await canvas.findByRole("button", { name: "Current page, 12" })).toHaveFocus();
  }
};

function RtlKeyboardShortcutsDemo() {
  const [page, setPage] = React.useState(4);

  return (
    <div dir="rtl" style={{ width: 640, display: "grid", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--aurora-text-secondary)" }}>صفحه فعال</span>
        <Badge tone="default" data-testid="rtl-page-value">
          {page}
        </Badge>
      </div>
      <Pagination page={page} pageCount={12} onPageChange={setPage} />
    </div>
  );
}

export const RtlKeyboardShortcuts: Story = {
  render: () => <RtlKeyboardShortcutsDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const current = await canvas.findByRole("button", { name: "Current page, 4" });

    current.focus();
    await expect(current).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    const currentRtl = await canvas.findByRole("button", { name: "Current page, 3" });
    await expect(currentRtl).toBeInTheDocument();
    await expect(currentRtl).toHaveFocus();
    await expect(canvas.getByTestId("rtl-page-value")).toHaveTextContent("3");

    await userEvent.keyboard("{ArrowLeft}");
    const currentDefault = await canvas.findByRole("button", { name: "Current page, 4" });
    await expect(currentDefault).toBeInTheDocument();
    await expect(currentDefault).toHaveFocus();
    await expect(canvas.getByTestId("rtl-page-value")).toHaveTextContent("4");
  }
};

export const CompactRange: Story = {
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
};

export const WithoutFirstLast: Story = {
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
};

export const DisabledPagination: Story = {
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
};

export const CustomAriaLabels: Story = {
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => `Pagination ${type} ${page}`,
    onPageChange: () => {}
  }
};

export const BoundaryAriaLabels: Story = {
  args: {
    page: 1,
    pageCount: 9,
    getItemAriaLabel: (type, page) => `Pagination ${type} ${page}`,
    onPageChange: () => {}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", { name: "Pagination previous 1" })).toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Pagination next 2" })).toBeInTheDocument();
  }
};

export const LabelledByHeading: Story = {
  render: (args) => (
    <div style={{ width: 640, display: "grid", gap: 12 }}>
      <h3 id="pagination-release-heading" style={{ margin: 0 }}>
        Release pages
      </h3>
      <Pagination {...args} ariaLabelledBy="pagination-release-heading" />
    </div>
  ),
  args: {
    page: 3,
    pageCount: 12,
    onPageChange: () => {}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nav = await canvas.findByRole("navigation", { name: "Release pages" });
    await expect(nav).toHaveAttribute("aria-labelledby", "pagination-release-heading");
    await expect(nav).not.toHaveAttribute("aria-label");
  }
};
