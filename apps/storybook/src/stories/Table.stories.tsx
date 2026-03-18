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
  { key: "id", header: "Issue", width: 120, sortable: true, rowHeader: true },
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
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("No release items yet.")).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("No release items yet.");
    await expect(canvas.getByRole("button", { name: "Issue sort ascending" })).toBeDisabled();
  }
};

export const SingleRowSortDisabled: Story = {
  render: () => (
    <div style={{ width: 780 }}>
      <Table
        columns={columns}
        data={[{ id: "BTN-102", component: "Button", owner: "Design System", status: "ready" }]}
        defaultSortKey="id"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const issueHeader = canvas.getByRole("columnheader", { name: /Issue/ });
    await expect(issueHeader).not.toHaveAttribute("aria-sort");
    await expect(canvas.queryByRole("status")).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Issue sort ascending" })).toBeDisabled();
  }
};

export const LoadingState: Story = {
  render: () => (
    <div style={{ width: 780 }}>
      <Table columns={columns} data={rows} loading loadingContent="Syncing release feed..." defaultSortKey="id" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", { name: "Data table" });

    await expect(table).toHaveAttribute("aria-busy", "true");
    await expect(canvas.getByText("Syncing release feed...")).toBeInTheDocument();
    await expect(canvas.queryByRole("rowheader", { name: "BTN-102" })).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Issue sort descending" })).toBeDisabled();
  }
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

export const AccessibleNameLabelledByHeading: Story = {
  render: () => (
    <div style={{ width: 780, display: "grid", gap: 10 }}>
      <h3 id="release-board-heading" style={{ margin: 0 }}>
        Release board metrics
      </h3>
      <Table ariaLabelledBy="release-board-heading" ariaLabel="Fallback table label" columns={columns} data={rows} rowKey={(row) => row.id} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", { name: "Release board metrics" });
    await expect(table).toHaveAttribute("aria-labelledby", "release-board-heading");
    await expect(table).not.toHaveAttribute("aria-label");
  }
};

export const RowHeaderSemantics: Story = {
  render: () => (
    <div style={{ width: 780 }}>
      <Table
        columns={[
          { key: "component", header: "Component", rowHeader: true, sortable: true },
          { key: "owner", header: "Owner", sortable: true },
          { key: "status", header: "Status", sortable: true }
        ]}
        data={rows}
        rowKey={(row) => row.id}
        defaultSortKey="component"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("rowheader", { name: "Button" })).toBeInTheDocument();
    await expect(canvas.getByRole("rowheader", { name: "Dialog" })).toBeInTheDocument();
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

    issueSort.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");
    const issueSortAsc = canvas.getByRole("button", { name: "Issue sort ascending" });
    const issueHeader = issueSortAsc.closest("th");
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");

    issueSortAsc.focus();
    await userEvent.keyboard("{Space}");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");
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
        getSortStatusText={({ columnHeader, direction }) => `当前排序：${columnHeader}（${direction === "asc" ? "升序" : "降序"}）`}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const descendingButton = canvas.getByRole("button", { name: "按降序排序：Issue" });
    await expect(canvas.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）");
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", { name: "按升序排序：Issue" })).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）");
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

    await expect(componentHeader).not.toHaveAttribute("aria-sort");
    await expect(statusHeader).not.toHaveAttribute("aria-sort");
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

export const SourceIndexRowKeyStability: Story = {
  render: () => (
    <div style={{ width: 720 }}>
      <Table columns={statefulColumns} data={statefulRows} defaultSortKey="component" rowKey={(row, rowIndex) => `${rowIndex}-${row.id}`} />
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

type IndexSemanticsRow = { key: string; score: number };

const indexSemanticsRows: IndexSemanticsRow[] = [
  { key: "Alpha", score: 1 },
  { key: "Beta", score: 2 },
  { key: "Gamma", score: 3 }
];

export const RenderIndexSemantics: Story = {
  render: () => (
    <div style={{ width: 720, display: "grid", gap: 8 }}>
      <p style={{ margin: 0, color: "var(--aurora-text-secondary)" }}>
        `render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position.
      </p>
      <Table
        columns={[
          {
            key: "key",
            header: "Item",
            sortable: true,
            render: (row, rowIndex, sourceIndex) => `${row.key} (visual:${rowIndex}, source:${sourceIndex})`
          },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={indexSemanticsRows}
        defaultSortKey="score"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Score sort descending" }));
    await expect(canvas.getByRole("cell", { name: "Gamma (visual:0, source:2)" })).toBeInTheDocument();
    await expect(canvas.getByRole("cell", { name: "Alpha (visual:2, source:0)" })).toBeInTheDocument();
  }
};
