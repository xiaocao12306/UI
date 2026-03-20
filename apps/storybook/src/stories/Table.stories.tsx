import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button, Table, type TableColumn } from "@aurora-ui/react";
import * as React from "react";
import { expect, fireEvent, userEvent, within } from "@storybook/test";
import {
  StoryShowcaseFrame,
  storyEmphasisTextStyle,
  storyMutedTextStyle
} from "./storyShowcase";

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
      const tone =
        row.status === "ready" ? "success" : row.status === "review" ? "default" : "danger";
      return <Badge tone={tone}>{row.status}</Badge>;
    }
  }
];

function dispatchImeKeyDown(element: HTMLElement, key: string) {
  const event = new KeyboardEvent("keydown", { key, bubbles: true });
  Object.defineProperty(event, "isComposing", { value: true });
  Object.defineProperty(event, "keyCode", { value: 229 });
  element.dispatchEvent(event);
}

function LoadingVisualResetTable() {
  const [loading, setLoading] = React.useState(false);

  return (
    <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <button type="button" onClick={() => setLoading((current) => !current)}>
        Toggle loading
      </button>
      <Table
        columns={columns}
        data={rows}
        loading={loading}
        loadingContent="Syncing release feed..."
        defaultSortKey="id"
      />
    </StoryShowcaseFrame>
  );
}

const meta = {
  title: "Data/Table",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."
      }
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReleaseChecklist: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table
        caption="Release readiness board"
        columns={columns}
        data={rows}
        rowKey={(row) => row.id}
        defaultSortKey="id"
      />
    </StoryShowcaseFrame>
  )
};

export const DescendingDefaultSortDirection: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table
        caption="Release readiness board"
        columns={columns}
        data={rows}
        rowKey={(row) => row.id}
        defaultSortKey="id"
        defaultSortDirection="desc"
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const issueHeader = canvas.getByRole("columnheader", { name: /Issue/ });
    const firstRowHeader = canvas.getAllByRole("rowheader")[0];
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    await expect(firstRowHeader).toHaveTextContent("DLG-210");
    await expect(canvas.getByRole("button", { name: "Issue sort ascending" })).toBeInTheDocument();
  }
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
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sortButton = canvas.getByRole("button", { name: "Issue sort ascending" });
    await expect(canvas.getByText("No release items yet.")).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("No release items yet.");
    await expect(sortButton).toBeDisabled();
    await expect(sortButton).not.toHaveAttribute("aria-keyshortcuts");
  }
};

export const SingleRowSortDisabled: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table
        columns={columns}
        data={[{ id: "BTN-102", component: "Button", owner: "Design System", status: "ready" }]}
        defaultSortKey="id"
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const issueHeader = canvas.getByRole("columnheader", { name: /Issue/ });
    await expect(issueHeader).not.toHaveAttribute("aria-sort");
    await expect(canvas.queryByRole("status")).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Issue sort descending" })).toBeDisabled();
  }
};

export const KeyboardReachableScrollContainer: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table
        columns={[
          { key: "id", header: "Issue" },
          { key: "component", header: "Component" },
          { key: "owner", header: "Owner" },
          { key: "status", header: "Status" }
        ]}
        data={rows}
      />
      <button type="button">After table</button>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const scrollContainer = canvasElement.querySelector(
      "[data-aurora-table-scroll-container]"
    ) as HTMLDivElement | null;
    await expect(scrollContainer).not.toBeNull();
    await expect(scrollContainer).toHaveAttribute("tabindex", "0");

    await userEvent.tab();
    await expect(scrollContainer).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole("button", { name: "After table" })).toHaveFocus();
  }
};

export const KeyboardFocusRingAfterPointer: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <p style={storyMutedTextStyle}>
        Sort button hides focus ring on pointer focus, then restores focus-visible ring when users
        return with keyboard Tab navigation.
      </p>
      <button type="button">Before table</button>
      <Table columns={columns} data={rows} defaultSortKey="id" />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeButton = canvas.getByRole("button", { name: "Before table" });
    const issueSortButton = canvas.getByRole("button", { name: "Issue sort descending" });

    fireEvent.mouseDown(issueSortButton);
    issueSortButton.focus();

    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(issueSortButton).toHaveFocus();
    await expect(issueSortButton.style.boxShadow).toContain("0 0 0 3px");
  }
};

export const LoadingState: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table
        columns={columns}
        data={rows}
        loading
        loadingContent="Syncing release feed..."
        defaultSortKey="id"
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", { name: "Data table" });
    const sortButton = canvas.getByRole("button", { name: "Issue sort descending" });
    const issueHeader = canvas.getByRole("columnheader", { name: /Issue/ });

    await expect(table).toHaveAttribute("aria-busy", "true");
    await expect(canvas.getByText("Syncing release feed...")).toBeInTheDocument();
    await expect(canvas.queryByRole("rowheader", { name: "BTN-102" })).not.toBeInTheDocument();
    await expect(sortButton).toBeDisabled();
    await expect(sortButton).not.toHaveAttribute("aria-keyshortcuts");
    await expect(issueHeader).not.toHaveAttribute("aria-sort");
  }
};

export const LoadingDisablesResetsSortVisualState: Story = {
  render: () => <LoadingVisualResetTable />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = canvas.getByRole("button", { name: "Toggle loading" });
    const sortButton = canvas.getByRole("button", { name: "Issue sort descending" });

    fireEvent.mouseDown(sortButton);

    await userEvent.click(toggleButton);
    const disabledSortButton = canvas.getByRole("button", { name: "Issue sort descending" });
    await expect(disabledSortButton).toBeDisabled();
    await expect(disabledSortButton.style.transform).toContain("translateY(0");
    await expect(disabledSortButton.style.boxShadow).toBe("none");
  }
};

export const PrimaryPointerOnlySortPress: Story = {
  render: function RenderPrimaryPointerOnlySortPress() {
    const [sortState, setSortState] = React.useState("id asc");

    return (
      <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
        <p style={storyMutedTextStyle}>
          Active sort: <strong data-testid="primary-pointer-sort-state">{sortState}</strong>
        </p>
        <button type="button">Before table</button>
        <Table
          columns={columns}
          data={rows}
          defaultSortKey="id"
          onSortChange={(key, direction) => setSortState(`${key} ${direction}`)}
        />
      </StoryShowcaseFrame>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeButton = canvas.getByRole("button", { name: "Before table" });
    const sortButton = canvas.getByRole("button", { name: "Issue sort descending" });
    const sortState = canvas.getByTestId("primary-pointer-sort-state");

    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(sortButton).toHaveFocus();
    await expect(sortButton.style.boxShadow).toContain("0 0 0 3px");

    fireEvent.mouseDown(sortButton, { button: 2 });
    fireEvent.mouseUp(sortButton, { button: 2 });
    await expect(sortButton.style.boxShadow).toContain("0 0 0 3px");
    await expect(sortState).toHaveTextContent("id asc");

    await userEvent.click(sortButton);
    await expect(sortState).toHaveTextContent("id desc");
  }
};

export const AccessibleNameWithoutCaption: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table
        ariaLabel="Release checklist table"
        columns={columns}
        data={rows}
        rowKey={(row) => row.id}
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole("table", { name: "Release checklist table" })
    ).toBeInTheDocument();
  }
};

export const AccessibleNameFallback: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} rowKey={(row) => row.id} />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table", { name: "Data table" })).toBeInTheDocument();
  }
};

export const AccessibleNameLabelledByHeading: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)" gap={10}>
      <h3 id="release-board-heading" style={{ margin: 0 }}>
        Release board metrics
      </h3>
      <Table
        ariaLabelledBy="release-board-heading"
        ariaLabel="Fallback table label"
        columns={columns}
        data={rows}
        rowKey={(row) => row.id}
      />
    </StoryShowcaseFrame>
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
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
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
    </StoryShowcaseFrame>
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
    <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={8}>
      <p style={storyMutedTextStyle}>
        Active sort: <strong style={storyEmphasisTextStyle}>{sortState}</strong>
      </p>
      <Table
        columns={columns}
        data={rows}
        defaultSortKey="id"
        onSortChange={(key, direction) => setSortState(`${key} ${direction}`)}
      />
    </StoryShowcaseFrame>
  );
}

export const SortTelemetry: Story = {
  render: () => <SortTelemetryDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const scrollContainer = canvasElement.querySelector(
      "[data-aurora-table-scroll-container]"
    ) as HTMLDivElement | null;
    await expect(scrollContainer).not.toBeNull();
    await expect(scrollContainer).not.toHaveAttribute("tabindex");

    const issueSort = canvas.getByRole("button", { name: "Issue sort descending" });
    await expect(issueSort).toHaveAttribute("aria-keyshortcuts", "Enter Space");

    issueSort.focus();
    await userEvent.keyboard("{End}");
    const statusSort = canvas.getByRole("button", { name: "Status sort ascending" });
    await expect(statusSort).toHaveFocus();

    await userEvent.keyboard("{Home}");
    await expect(issueSort).toHaveFocus();

    await userEvent.keyboard("{PageDown}");
    const componentSort = canvas.getByRole("button", { name: "Component sort ascending" });
    await expect(componentSort).toHaveFocus();

    await userEvent.keyboard("{PageUp}");
    await expect(issueSort).toHaveFocus();

    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");
    const issueSortAsc = canvas.getByRole("button", { name: "Issue sort ascending" });
    const issueHeader = issueSortAsc.closest("th");
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");

    fireEvent.keyDown(issueSortAsc, { key: "Enter", repeat: true });
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");

    issueSortAsc.focus();
    fireEvent.keyDown(issueSortAsc, { key: "Space", repeat: true });
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");

    await userEvent.keyboard("{Space}");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");

    const issueSortDesc = canvas.getByRole("button", { name: "Issue sort descending" });
    fireEvent.keyDown(issueSortDesc, { key: "Enter", ctrlKey: true });
    fireEvent.keyDown(issueSortDesc, { key: "Space", metaKey: true });
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
  }
};

function ImeCompositionGuardDemo() {
  const [sortState, setSortState] = React.useState("id asc");

  return (
    <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={8}>
      <p style={storyMutedTextStyle}>
        IME composition guards Enter and Space so sortable headers do not toggle while users confirm
        CJK input.
      </p>
      <p style={storyMutedTextStyle}>
        Active sort: <strong style={storyEmphasisTextStyle}>{sortState}</strong>
      </p>
      <Table
        columns={columns}
        data={rows}
        defaultSortKey="id"
        onSortChange={(key, direction) => setSortState(`${key} ${direction}`)}
      />
    </StoryShowcaseFrame>
  );
}

export const ImeCompositionGuard: Story = {
  render: () => <ImeCompositionGuardDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const issueHeader = canvas.getByRole("columnheader", { name: /Issue/ });
    const issueSortDesc = canvas.getByRole("button", { name: "Issue sort descending" });

    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");

    dispatchImeKeyDown(issueSortDesc, "Enter");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");

    dispatchImeKeyDown(issueSortDesc, "Space");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");

    issueSortDesc.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
  }
};

export const LocalizedSortLabels: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table
        columns={columns}
        data={rows}
        defaultSortKey="id"
        getSortAriaLabel={({ columnHeader, nextDirection }) =>
          `按${nextDirection === "asc" ? "升序" : "降序"}排序：${columnHeader}`
        }
        getSortStatusText={({ columnHeader, direction }) =>
          `当前排序：${columnHeader}（${direction === "asc" ? "升序" : "降序"}）`
        }
      />
    </StoryShowcaseFrame>
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

export const SortLabelForCustomHeader: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table
        columns={[
          {
            key: "releasedAt",
            header: <span aria-hidden="true">📅</span>,
            sortLabel: "Release date",
            sortable: true
          },
          { key: "component", header: "Component", sortable: true },
          { key: "owner", header: "Owner" }
        ]}
        data={[
          { releasedAt: "2026-03-19", component: "Dialog", owner: "Platform UI" },
          { releasedAt: "2026-01-10", component: "Button", owner: "Design System" }
        ]}
        defaultSortKey="releasedAt"
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");
    const descendingButton = canvas.getByRole("button", { name: "Release date sort descending" });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", { name: "Release date sort ascending" })).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Release date descending.");
  }
};

export const RichTextHeaderAutoSortLabel: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table
        columns={[
          {
            key: "status",
            header: (
              <span>
                <span aria-hidden="true">🚦</span> Release status
              </span>
            ),
            sortable: true
          },
          { key: "component", header: "Component", sortable: true }
        ]}
        data={[
          { status: "Review", component: "Dialog" },
          { status: "Ready", component: "Button" }
        ]}
        defaultSortKey="status"
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");
    const descendingButton = canvas.getByRole("button", {
      name: "Release status sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(
      canvas.getByRole("button", { name: "Release status sort ascending" })
    ).toBeInTheDocument();
  }
};

export const AriaLabelHeaderAutoSortLabel: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table
        columns={[
          {
            key: "status",
            header: (
              <span aria-label="Release status">
                <span aria-hidden="true">🚦</span>
              </span>
            ),
            sortable: true
          },
          { key: "component", header: "Component", sortable: true }
        ]}
        data={[
          { status: "Review", component: "Dialog" },
          { status: "Ready", component: "Button" }
        ]}
        defaultSortKey="status"
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");
    const descendingButton = canvas.getByRole("button", {
      name: "Release status sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(
      canvas.getByRole("button", { name: "Release status sort ascending" })
    ).toBeInTheDocument();
  }
};

export const InvalidDefaultSortKeyFallback: Story = {
  render: () => {
    const nonSortableStatusColumns: Array<TableColumn<ReleaseRow>> = [
      { key: "component", header: "Component", sortable: true },
      { key: "status", header: "Status", width: 140 }
    ];

    return (
      <StoryShowcaseFrame maxWidth="min(100%, 620px)">
        <Table columns={nonSortableStatusColumns} data={rows} defaultSortKey="status" />
      </StoryShowcaseFrame>
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

function DeferredColumnsDefaultSortRecoveryDemo() {
  const [statusSortable, setStatusSortable] = React.useState(false);

  const deferredColumns = React.useMemo<Array<TableColumn<ReleaseRow>>>(
    () => [
      { key: "component", header: "Component", sortable: true, rowHeader: true },
      { key: "status", header: "Status", sortable: statusSortable, width: 140 }
    ],
    [statusSortable]
  );

  return (
    <StoryShowcaseFrame maxWidth="min(100%, 760px)" gap={8}>
      <p style={storyMutedTextStyle}>
        Async column schema can enable a previously unavailable default sort key after rerender.
      </p>
      <p style={storyMutedTextStyle}>
        Status column sortable:{" "}
        <strong data-testid="table-status-sortable" style={storyEmphasisTextStyle}>
          {statusSortable ? "yes" : "no"}
        </strong>
      </p>
      <button type="button" onClick={() => setStatusSortable(true)}>
        Load status sortable schema
      </button>
      <Table columns={deferredColumns} data={rows} rowKey={(row) => row.id} defaultSortKey="status" />
    </StoryShowcaseFrame>
  );
}

export const DeferredColumnsDefaultSortRecovery: Story = {
  render: () => <DeferredColumnsDefaultSortRecoveryDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loadSchemaButton = canvas.getByRole("button", { name: "Load status sortable schema" });
    const statusHeader = canvas.getByRole("columnheader", { name: "Status" });

    await expect(canvas.getByTestId("table-status-sortable")).toHaveTextContent("no");
    await expect(statusHeader).not.toHaveAttribute("aria-sort");
    await expect(canvas.getAllByRole("rowheader")[0]).toHaveTextContent("Button");
    await expect(canvas.queryByRole("status")).not.toBeInTheDocument();

    await userEvent.click(loadSchemaButton);
    await expect(canvas.getByTestId("table-status-sortable")).toHaveTextContent("yes");
    await expect(statusHeader).toHaveAttribute("aria-sort", "ascending");
    await expect(canvas.getByRole("button", { name: "Status sort descending" })).toBeEnabled();
    await expect(canvas.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Status ascending.");
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
    <StoryShowcaseFrame maxWidth="min(100%, 720px)">
      <Table columns={statefulColumns} data={statefulRows} defaultSortKey="component" />
    </StoryShowcaseFrame>
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
    <StoryShowcaseFrame maxWidth="min(100%, 720px)">
      <Table
        columns={statefulColumns}
        data={statefulRows}
        defaultSortKey="component"
        rowKey={(row, rowIndex) => `${rowIndex}-${row.id}`}
      />
    </StoryShowcaseFrame>
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
    <StoryShowcaseFrame maxWidth="min(100%, 760px)" gap={8}>
      <p style={storyMutedTextStyle}>
        `render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data
        position.
      </p>
      <Table
        columns={[
          {
            key: "key",
            header: "Item",
            sortable: true,
            render: (row, rowIndex, sourceIndex) =>
              `${row.key} (visual:${rowIndex}, source:${sourceIndex})`
          },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={indexSemanticsRows}
        defaultSortKey="score"
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Score sort descending" }));
    await expect(
      canvas.getByRole("cell", { name: "Gamma (visual:0, source:2)" })
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole("cell", { name: "Alpha (visual:2, source:0)" })
    ).toBeInTheDocument();
  }
};
