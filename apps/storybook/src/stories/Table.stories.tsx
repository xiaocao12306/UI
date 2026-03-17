import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button, Table, type TableColumn } from "@aurora-ui/react";
import * as React from "react";

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
  render: () => <SortTelemetryDemo />
};
