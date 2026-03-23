import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button, Table, type TableColumn } from "@aurora-ui/react";
import * as React from "react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";
import { StoryShowcaseFrame, storyEmphasisTextStyle, storyMutedTextStyle } from "./storyShowcase";

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

function dispatchLegacyImeKeyDown(element: HTMLElement, key: string) {
  const event = new KeyboardEvent("keydown", { key, bubbles: true });
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

export const RuntimeSortDirectionNormalization: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <p style={storyMutedTextStyle}>
        Runtime sort-direction config from CMS/JSON should normalize mixed-case tokens before
        sorting.
      </p>
      <Table
        caption="Runtime sort direction normalization"
        columns={columns}
        data={rows}
        rowKey={(row) => row.id}
        defaultSortKey="id"
        defaultSortDirection={" DESC " as unknown as "desc"}
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", { name: "Runtime sort direction normalization" });
    const issueHeader = within(table).getByRole("columnheader", { name: /Issue/ });

    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    await expect(within(table).getAllByRole("rowheader")[0]).toHaveTextContent("DLG-210");
    await expect(within(table).getByRole("button", { name: "Issue sort ascending" })).toBeInTheDocument();
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

export const SingleSortableColumnShortcutHints: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table
        columns={[
          { key: "id", header: "Issue", sortable: true, rowHeader: true },
          { key: "component", header: "Component" },
          { key: "owner", header: "Owner" },
          { key: "status", header: "Status" }
        ]}
        data={rows}
        defaultSortKey="id"
        rowKey={(row) => row.id}
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const issueSortButton = canvas.getByRole("button", { name: "Issue sort descending" });

    await expect(issueSortButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    issueSortButton.focus();

    await userEvent.keyboard("{ArrowRight}");
    await expect(issueSortButton).toHaveFocus();
    await expect(canvas.getByRole("columnheader", { name: /Issue/ })).toHaveAttribute(
      "aria-sort",
      "ascending"
    );
  }
};

export const KeyboardReachableScrollContainer: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="220px" gap={10}>
      <p style={storyMutedTextStyle}>
        When sortable controls are unavailable and horizontal overflow exists, focus the scroll
        region and use Arrow/Home/End/Page keys to pan overflowed columns.
      </p>
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
    await expect(scrollContainer).not.toHaveAttribute("role");
    await expect(scrollContainer).not.toHaveAttribute("tabindex");
    const ownerWindow = scrollContainer?.ownerDocument.defaultView ?? window;
    let mockedScrollLeft = 0;
    Object.defineProperty(scrollContainer as HTMLDivElement, "clientWidth", {
      configurable: true,
      value: 220
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollWidth", {
      configurable: true,
      value: 640
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollLeft", {
      configurable: true,
      get: () => mockedScrollLeft,
      set: (value: number) => {
        mockedScrollLeft = value;
      }
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollBy", {
      configurable: true,
      value: ({ left = 0 }: ScrollToOptions) => {
        mockedScrollLeft += Number(left) || 0;
      }
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollTo", {
      configurable: true,
      value: ({ left = 0 }: ScrollToOptions) => {
        mockedScrollLeft = Number(left) || 0;
      }
    });
    fireEvent(ownerWindow, new ownerWindow.Event("resize"));
    await waitFor(() => {
      expect(scrollContainer).toHaveAttribute("role", "region");
      expect(scrollContainer).toHaveAttribute("tabindex", "0");
      expect(scrollContainer).toHaveAttribute(
        "aria-keyshortcuts",
        "ArrowLeft ArrowRight Home End PageDown PageUp"
      );
    });

    await userEvent.tab();
    await expect(scrollContainer).toHaveFocus();
    fireEvent.keyDown(scrollContainer as HTMLDivElement, { key: "ArrowRight" });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBeGreaterThan(0);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, { key: "Home" });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(0);
    const preemptScrollHandler = (event: KeyboardEvent) => event.preventDefault();
    (scrollContainer as HTMLDivElement).addEventListener("keydown", preemptScrollHandler, true);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, { key: "ArrowRight" });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(0);
    (scrollContainer as HTMLDivElement).removeEventListener("keydown", preemptScrollHandler, true);

    await userEvent.tab();
    await expect(canvas.getByRole("button", { name: "After table" })).toHaveFocus();
  }
};

export const ScrollContainerSkipsTabStopWithoutOverflow: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="760px" gap={10}>
      <p style={storyMutedTextStyle}>
        Non-sortable tables without horizontal overflow should not insert an extra keyboard tab stop.
      </p>
      <button type="button">Before table</button>
      <Table
        columns={[
          { key: "id", header: "Issue" },
          { key: "component", header: "Component" }
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
    await expect(scrollContainer).not.toHaveAttribute("role");
    await expect(scrollContainer).not.toHaveAttribute("tabindex");
    await expect(scrollContainer).not.toHaveAttribute("aria-keyshortcuts");

    await userEvent.tab();
    await expect(canvas.getByRole("button", { name: "Before table" })).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole("button", { name: "After table" })).toHaveFocus();
  }
};

export const CompactMinWidthWithoutOverflow: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="360px" gap={10}>
      <p style={storyMutedTextStyle}>
        Use <code>minTableWidth</code> to keep compact layouts readable without forcing overflow.
      </p>
      <Table
        minTableWidth={320}
        columns={[
          { key: "id", header: "Issue" },
          { key: "component", header: "Component" }
        ]}
        data={rows}
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", { name: "Data table" });
    const scrollContainer = canvasElement.querySelector(
      "[data-aurora-table-scroll-container]"
    ) as HTMLDivElement | null;
    await expect(table).toHaveStyle({ minWidth: "320px" });
    await expect(scrollContainer).not.toHaveAttribute("role");
    await expect(scrollContainer).not.toHaveAttribute("tabindex");
    await expect(scrollContainer).not.toHaveAttribute("aria-keyshortcuts");
  }
};

export const RtlScrollContainerKeyboardPanning: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="220px" gap={10}>
      <p style={storyMutedTextStyle}>
        In RTL layouts, non-sortable table overflow keeps Arrow/Home/End panning aligned with visual
        direction.
      </p>
      <div dir="rtl">
        <Table
          columns={[
            { key: "id", header: "Issue" },
            { key: "component", header: "Component" },
            { key: "owner", header: "Owner" },
            { key: "status", header: "Status" }
          ]}
          data={rows}
        />
      </div>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const scrollContainer = canvasElement.querySelector(
      "[data-aurora-table-scroll-container]"
    ) as HTMLDivElement | null;
    await expect(scrollContainer).not.toBeNull();
    const ownerWindow = scrollContainer?.ownerDocument.defaultView ?? window;
    let mockedScrollLeft = 0;
    Object.defineProperty(scrollContainer as HTMLDivElement, "clientWidth", {
      configurable: true,
      value: 220
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollWidth", {
      configurable: true,
      value: 640
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollLeft", {
      configurable: true,
      get: () => mockedScrollLeft,
      set: (value: number) => {
        mockedScrollLeft = value;
      }
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollBy", {
      configurable: true,
      value: ({ left = 0 }: ScrollToOptions) => {
        mockedScrollLeft += Number(left) || 0;
      }
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollTo", {
      configurable: true,
      value: ({ left = 0 }: ScrollToOptions) => {
        mockedScrollLeft = Number(left) || 0;
      }
    });
    fireEvent(ownerWindow, new ownerWindow.Event("resize"));
    await waitFor(() => {
      expect(scrollContainer).toHaveAttribute("tabindex", "0");
      expect(scrollContainer).toHaveAttribute(
        "aria-keyshortcuts",
        "ArrowLeft ArrowRight Home End PageDown PageUp"
      );
    });
    (scrollContainer as HTMLDivElement).focus();
    await expect(scrollContainer).toHaveFocus();

    fireEvent.keyDown(scrollContainer as HTMLDivElement, { key: "ArrowLeft" });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBeGreaterThan(0);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, { key: "Home" });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(420);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, { key: "End" });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(0);

    const preemptScrollHandler = (event: KeyboardEvent) => event.preventDefault();
    (scrollContainer as HTMLDivElement).addEventListener("keydown", preemptScrollHandler, true);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, { key: "ArrowLeft" });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(0);
    (scrollContainer as HTMLDivElement).removeEventListener("keydown", preemptScrollHandler, true);

    await expect(canvas.getByRole("table", { name: "Data table" })).toBeInTheDocument();
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

export const KeyboardFocusRingShiftTabReentry: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <p style={storyMutedTextStyle}>
        Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab)
        restores focus-visible ring for the sortable header.
      </p>
      <Table columns={columns} data={rows} defaultSortKey="id" />
      <button type="button">After table</button>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const statusSortButton = canvas.getByRole("button", { name: "Status sort ascending" });
    const afterButton = canvas.getByRole("button", { name: "After table" });

    fireEvent.mouseDown(statusSortButton);
    statusSortButton.focus();

    await userEvent.click(afterButton);
    await userEvent.tab({ shift: true });
    await expect(statusSortButton).toHaveFocus();
    await expect(statusSortButton.style.boxShadow).toContain("0 0 0 3px");
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

export const RuntimeBooleanConfigNormalization: Story = {
  render: () => {
    const [sortTrace, setSortTrace] = React.useState("none");

    return (
      <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
        <p style={storyMutedTextStyle}>
          Runtime bool-like config from CMS/JSON should degrade safely: invalid `loading` values
          fall back to `false`.
        </p>
        <p style={storyMutedTextStyle}>
          Sort trace:{" "}
          <strong data-testid="table-runtime-boolean-sort-trace" style={storyEmphasisTextStyle}>
            {sortTrace}
          </strong>
        </p>
        <Table
          columns={columns}
          data={rows}
          defaultSortKey="id"
          loading={"invalid-loading-flag" as unknown as boolean}
          loadingContent="Should stay hidden"
          onSortChange={(key, direction) => setSortTrace(`${key} ${direction}`)}
        />
      </StoryShowcaseFrame>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", { name: "Data table" });
    const issueHeader = canvas.getByRole("columnheader", { name: /Issue/ });
    const sortButton = canvas.getByRole("button", { name: "Issue sort descending" });

    await expect(table).not.toHaveAttribute("aria-busy");
    await expect(canvas.queryByText("Should stay hidden")).not.toBeInTheDocument();
    await expect(canvas.getByRole("rowheader", { name: "BTN-102" })).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    await expect(sortButton).toBeEnabled();

    await userEvent.click(sortButton);
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    await expect(canvas.getByTestId("table-runtime-boolean-sort-trace")).toHaveTextContent("id desc");
  }
};

export const BlankLoadingContentFallback: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="   " defaultSortKey="id" />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading data...");
  }
};

export const BlankEmptyContentFallback: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="   " />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("No data available.");
  }
};

export const NumericFeedbackCopySemantics: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)" gap={10}>
      <Table columns={columns} data={rows} loading loadingContent={0} />
      <Table columns={columns} data={[]} emptyContent={0} />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const statuses = canvas.getAllByRole("status");
    await expect(statuses).toHaveLength(2);
    await expect(statuses[0]).toHaveTextContent("0");
    await expect(statuses[1]).toHaveTextContent("0");
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

    fireEvent.mouseDown(sortButton, { button: 0 });
    await waitFor(() => {
      expect(sortButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.pointerCancel(sortButton);
    await waitFor(() => {
      expect(sortButton.style.transform).toContain("translateY(0");
    });
    await expect(sortState).toHaveTextContent("id asc");

    sortButton.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        cancelable: true,
        pointerType: "touch",
        button: 0
      })
    );
    await waitFor(() => {
      expect(sortButton.style.transform).toContain("translateY(1px)");
    });
    sortButton.dispatchEvent(
      new PointerEvent("pointerup", {
        bubbles: true,
        cancelable: true,
        pointerType: "touch",
        button: 0
      })
    );
    await waitFor(() => {
      expect(sortButton.style.transform).toContain("translateY(0");
    });
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

export const NumericCaptionName: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table caption={0} columns={columns} data={rows} rowKey={(row) => row.id} />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", { name: "0" });
    await expect(table).not.toHaveAttribute("aria-label");
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

function ManagedSortKeysPreemptedLocallyDemo() {
  const [sortState, setSortState] = React.useState("id asc");

  return (
    <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={8}>
      <p style={storyMutedTextStyle}>
        Local sort-key guards should preempt sortable-header navigation and activation.
      </p>
      <p style={storyMutedTextStyle}>
        Active sort:{" "}
        <strong data-testid="table-local-preempt-sort-state" style={storyEmphasisTextStyle}>
          {sortState}
        </strong>
      </p>
      <Table
        columns={columns}
        data={rows}
        defaultSortKey="id"
        onSortKeyDown={(event) => {
          if (event.key === "Enter" || event.key === "ArrowRight") {
            event.preventDefault();
          }
        }}
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
    await expect(issueSort).toHaveAttribute(
      "aria-keyshortcuts",
      "Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"
    );

    issueSort.focus();
    await userEvent.keyboard("{ArrowRight}");
    const componentSortArrow = canvas.getByRole("button", { name: "Component sort ascending" });
    await expect(componentSortArrow).toHaveFocus();

    await userEvent.keyboard("{ArrowLeft}");
    await expect(issueSort).toHaveFocus();

    await userEvent.keyboard("{End}");
    const statusSort = canvas.getByRole("button", { name: "Status sort ascending" });
    await expect(statusSort).toHaveFocus();

    await userEvent.keyboard("{Home}");
    await expect(issueSort).toHaveFocus();

    await userEvent.keyboard("{PageDown}");
    const componentSortPage = canvas.getByRole("button", { name: "Component sort ascending" });
    await expect(componentSortPage).toHaveFocus();

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
    issueSortDesc.focus();
    fireEvent.keyDown(issueSortDesc, { key: "ArrowRight", ctrlKey: true });
    fireEvent.keyDown(issueSortDesc, { key: "ArrowLeft", metaKey: true });
    fireEvent.keyDown(issueSortDesc, { key: "End", ctrlKey: true });
    fireEvent.keyDown(issueSortDesc, { key: "Home", altKey: true });
    fireEvent.keyDown(issueSortDesc, { key: "PageDown", metaKey: true });
    fireEvent.keyDown(issueSortDesc, { key: "PageUp", ctrlKey: true });
    await expect(issueSortDesc).toHaveFocus();

    fireEvent.keyDown(issueSortDesc, { key: "Enter", ctrlKey: true });
    fireEvent.keyDown(issueSortDesc, { key: "Space", metaKey: true });
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");

    const preemptedEnterEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
      cancelable: true
    });
    preemptedEnterEvent.preventDefault();
    issueSortDesc.dispatchEvent(preemptedEnterEvent);
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");

    await userEvent.keyboard("{Shift>}{Enter}{/Shift}");
    await waitFor(() => {
      expect(canvas.getByText("id desc")).toBeInTheDocument();
      expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    });

    const issueSortAscAfterShift = canvas.getByRole("button", { name: "Issue sort ascending" });
    issueSortAscAfterShift.focus();
    await userEvent.keyboard("{Shift>}{Space}{/Shift}");
    await waitFor(() => {
      expect(canvas.getByText("id asc")).toBeInTheDocument();
      expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    });
  }
};

export const ManagedSortKeysPreemptedByLocalHandler: Story = {
  render: () => <ManagedSortKeysPreemptedLocallyDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const issueSort = canvas.getByRole("button", { name: "Issue sort descending" });

    issueSort.focus();
    fireEvent.keyDown(issueSort, { key: "ArrowRight" });
    await expect(issueSort).toHaveFocus();
    await expect(canvas.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc");

    fireEvent.keyDown(issueSort, { key: "Enter" });
    await expect(canvas.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");
  }
};

export const RtlArrowNavigation: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={8}>
      <p style={storyMutedTextStyle}>
        In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order.
      </p>
      <div dir="rtl">
        <Table columns={columns} data={rows} defaultSortKey="id" />
      </div>
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const issueSort = canvas.getByRole("button", { name: "Issue sort descending" });
    const componentSort = canvas.getByRole("button", { name: "Component sort ascending" });

    issueSort.focus();
    fireEvent.keyDown(issueSort, { key: "ArrowLeft", ctrlKey: true });
    fireEvent.keyDown(issueSort, { key: "ArrowRight", metaKey: true });
    fireEvent.keyDown(issueSort, { key: "ArrowLeft", altKey: true });
    await expect(issueSort).toHaveFocus();

    await userEvent.keyboard("{ArrowRight}");
    await expect(issueSort).toHaveFocus();

    await userEvent.keyboard("{ArrowLeft}");
    await expect(componentSort).toHaveFocus();

    await userEvent.keyboard("{ArrowRight}");
    await expect(issueSort).toHaveFocus();
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

    dispatchLegacyImeKeyDown(issueSortDesc, "Enter");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");

    dispatchLegacyImeKeyDown(issueSortDesc, "Space");
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
    await expect(
      canvas.getByRole("button", { name: "Release date sort ascending" })
    ).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent(
      "Sorted by Release date descending."
    );
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
    await expect(canvas.getByRole("status")).toHaveTextContent(
      "Sorted by Release status ascending."
    );
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
    await expect(canvas.getByRole("status")).toHaveTextContent(
      "Sorted by Release status ascending."
    );
    const descendingButton = canvas.getByRole("button", {
      name: "Release status sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(
      canvas.getByRole("button", { name: "Release status sort ascending" })
    ).toBeInTheDocument();
  }
};

export const BlankKeySortLabelFallback: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table
        columns={[
          {
            key: "   ",
            header: <span aria-hidden="true">🚦</span>,
            sortable: true
          },
          { key: "component", header: "Component", sortable: true }
        ]}
        data={[
          { "   ": "Review", component: "Dialog" },
          { "   ": "Ready", component: "Button" }
        ]}
        defaultSortKey="   "
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");
    const descendingButton = canvas.getByRole("button", {
      name: "Column 1 sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(
      canvas.getByRole("button", { name: "Column 1 sort ascending" })
    ).toBeInTheDocument();
  }
};

export const NormalizedKeySortLabelFallback: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table
        columns={[
          {
            key: "release_stage-ready",
            header: <span aria-hidden="true">🚦</span>,
            sortable: true
          },
          { key: "component", header: "Component", sortable: true }
        ]}
        data={[
          { "release_stage-ready": "Review", component: "Dialog" },
          { "release_stage-ready": "Ready", component: "Button" }
        ]}
        defaultSortKey="release_stage-ready"
      />
    </StoryShowcaseFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent(
      "Sorted by release stage ready ascending."
    );
    const descendingButton = canvas.getByRole("button", {
      name: "release stage ready sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(
      canvas.getByRole("button", { name: "release stage ready sort ascending" })
    ).toBeInTheDocument();
  }
};

export const SortLabelledByPrecedence: Story = {
  render: () => (
    <StoryShowcaseFrame maxWidth="min(100%, 780px)" gap={10}>
      <h3 id="table-status-sort-heading" style={{ margin: 0, fontSize: "var(--aurora-font-size-sm)" }}>
        Release status
      </h3>
      <Table
        columns={[
          {
            key: "status",
            header: <span aria-hidden="true">🚦</span>,
            sortLabelledBy: "table-status-sort-heading",
            sortLabel: "Fallback status",
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
    const sortButton = canvas.getByRole("button", { name: "Release status" });
    await expect(sortButton).toHaveAttribute("aria-labelledby", "table-status-sort-heading");
    await expect(sortButton).not.toHaveAttribute("aria-label");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending.");

    await userEvent.click(sortButton);
    await expect(canvas.getByRole("status")).toHaveTextContent(
      "Sorted by Fallback status descending."
    );
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
      <Table
        columns={deferredColumns}
        data={rows}
        rowKey={(row) => row.id}
        defaultSortKey="status"
      />
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
