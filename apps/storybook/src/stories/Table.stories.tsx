import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button, Table, type TableColumn } from "@aurora-ui/react";
import * as React from "react";
import { expect, userEvent, within } from "@storybook/test";

type ReleaseRow = {
  id: string;
  component: string;
  owner: string;
  status: "ready" | "review" | "blocked";
};

const rows: ReleaseRow[] = [
  { id: "BTN-102", component: "Button", owner: "Design System", status: "ready" },
  { id: "DLG-210", component: "Dialog", owner: "Platform UI", status: "review" },
  { id: "AIP-501", component: "PromptInput", owner: "AI UX", status: "blocked" }
];

const columns: Array<TableColumn<ReleaseRow>> = [
  { key: "id", header: "Issue", width: 120, sortable: true },
  { key: "component", header: "Component", sortable: true },
  { key: "owner", header: "Owner", sortable: true },
  {
    key: "status",
    header: "Status",
    width: 140,
    sortable: true,
    sortAccessor: (row) => row.status,
    render: (row) => {
      const tone = row.status === "ready" ? "success" : row.status === "review" ? "default" : "danger";
      return <Badge tone={tone}>{row.status}</Badge>;
    }
  }
];

const meta = {
  title: "Data/Table",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."
      }
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReleaseChecklist: Story = {
  render: () => (
    <div style={{ width: 780, display: "grid", gap: 10 }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={(row) => row.id} defaultSortKey="id" />
    </div>
  )
};

export const WithRowAction: Story = {
  render: () => {
    const actionColumns: Array<TableColumn<ReleaseRow>> = [
      ...columns,
      {
        key: "action",
        header: "Action",
        width: 160,
        render: (row) => (
          <Button
            size="sm"
            variant="outline"
            onClick={(event) => event.preventDefault()}
            aria-label={`Open ${row.id}`}
          >
            Open Ticket
          </Button>
        )
      }
    ];

    return <Table columns={actionColumns} data={rows} rowKey={(row) => row.id} />;
  }
};

export const EmptyState: Story = {
  render: () => (
    <div style={{ width: 780 }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>
  )
};

export const AccessibleNameWithoutCaption: Story = {
  render: () => (
    <div style={{ width: 780 }}>
      <Table ariaLabel="Release checklist table" columns={columns} data={rows} rowKey={(row) => row.id} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table", { name: "Release checklist table" })).toBeInTheDocument();
  }
};

export const AccessibleNameFallback: Story = {
  render: () => (
    <div style={{ width: 780 }}>
      <Table columns={columns} data={rows} rowKey={(row) => row.id} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table", { name: "Data table" })).toBeInTheDocument();
  }
};

function SortTelemetryDemo() {
  const [sortState, setSortState] = React.useState("id asc");

  return (
    <div style={{ width: 780, display: "grid", gap: 8 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        Active sort: <strong style={{ color: "var(--aurora-text-primary)" }}>{sortState}</strong>
      </p>
      <Table
        columns={columns}
        data={rows}
        defaultSortKey="id"
        onSortChange={(key, direction) => setSortState(`${key} ${direction}`)}
      />
    </div>
  );
}

export const SortTelemetry: Story = {
  render: () => <SortTelemetryDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const issueSort = canvas.getByRole("button", { name: "Issue sort descending" });

    await userEvent.click(issueSort);
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    const issueSortAsc = canvas.getByRole("button", { name: "Issue sort ascending" });
    const issueHeader = issueSortAsc.closest("th");
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
  }
};

export const LocalizedSortLabels: Story = {
  render: () => (
    <div style={{ width: 780 }}>
      <Table
        columns={columns}
        data={rows}
        defaultSortKey="id"
        getSortAriaLabel={({ columnHeader, nextDirection }) =>
          `按${nextDirection === "asc" ? "升序" : "降序"}排序：${columnHeader}`
        }
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const descendingButton = canvas.getByRole("button", { name: "按降序排序：Issue" });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", { name: "按升序排序：Issue" })).toBeInTheDocument();
  }
};

export const InvalidDefaultSortKeyFallback: Story = {
  render: () => {
    const nonSortableStatusColumns: Array<TableColumn<ReleaseRow>> = [
      { key: "component", header: "Component", sortable: true },
      { key: "status", header: "Status", width: 140 }
    ];

    return (
      <div style={{ width: 620 }}>
        <Table columns={nonSortableStatusColumns} data={rows} defaultSortKey="status" />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const componentHeader = canvas.getByRole("columnheader", { name: "Component" });
    const statusHeader = canvas.getByRole("columnheader", { name: "Status" });

    await expect(componentHeader).toHaveAttribute("aria-sort", "none");
    await expect(statusHeader).toHaveAttribute("aria-sort", "none");
    await expect(canvas.queryByRole("button", { name: /Status sort/ })).not.toBeInTheDocument();
    await expect(canvas.getAllByRole("cell")[0]).toHaveTextContent("Button");
  }
};

type StatefulRow = ReleaseRow & { note: string };

const statefulRows: StatefulRow[] = rows.map((row) => ({ ...row, note: "" }));
const statefulColumns: Array<TableColumn<StatefulRow>> = [
  { key: "component", header: "Component", sortable: true },
  {
    key: "note",
    header: "QA Note",
    render: (row) => (
      <input
        defaultValue={row.note}
        aria-label={`${row.id} note`}
        style={{
          width: "100%",
          borderRadius: 6,
          border: "1px solid var(--aurora-border-default)",
          background: "var(--aurora-surface-default)",
          color: "var(--aurora-text-primary)",
          padding: "6px 8px"
        }}
      />
    )
  }
];

export const FallbackRowKeyStability: Story = {
  render: () => (
    <div style={{ width: 720 }}>
      <Table columns={statefulColumns} data={statefulRows} defaultSortKey="component" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alphaInput = canvas.getByRole("textbox", { name: "BTN-102 note" });

    await userEvent.type(alphaInput, "persist me");
    await userEvent.click(canvas.getByRole("button", { name: "Component sort descending" }));
    await expect(canvas.getByRole("textbox", { name: "BTN-102 note" })).toHaveValue("persist me");
  }
};
