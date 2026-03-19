import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Table } from "./Table";

describe("Table", () => {
  it("renders headers and rows", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name" },
          { key: "status", header: "Status" }
        ]}
        data={[
          { name: "Button", status: "Stable" },
          { name: "Dialog", status: "Stable" }
        ]}
      />
    );

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Dialog")).toBeInTheDocument();
  });

  it("supports row-header cells for row identity semantics", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", rowHeader: true },
          { key: "status", header: "Status" }
        ]}
        data={[
          { name: "Button", status: "Stable" },
          { name: "Dialog", status: "Stable" }
        ]}
      />
    );

    expect(screen.getByRole("rowheader", { name: "Button" })).toBeInTheDocument();
    expect(screen.getByRole("rowheader", { name: "Dialog" })).toBeInTheDocument();
  });

  it("falls back to a default accessible table name when caption and ariaLabel are absent", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name" },
          { key: "status", header: "Status" }
        ]}
        data={[
          { name: "Button", status: "Stable" },
          { name: "Dialog", status: "Stable" }
        ]}
      />
    );

    expect(screen.getByRole("table", { name: "Data table" })).toBeInTheDocument();
  });

  it("keeps scroll container keyboard reachable when sortable controls are unavailable", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <div>
        <Table
          columns={[
            { key: "name", header: "Name" },
            { key: "status", header: "Status" }
          ]}
          data={[
            { name: "Button", status: "Stable" },
            { name: "Dialog", status: "Stable" }
          ]}
        />
        <button type="button">After table</button>
      </div>
    );

    const scrollContainer = container.querySelector(
      "[data-aurora-table-scroll-container]"
    ) as HTMLDivElement;
    expect(scrollContainer).toHaveAttribute("tabindex", "0");

    await user.tab();
    expect(scrollContainer).toHaveFocus();

    await user.tab();
    expect(screen.getByRole("button", { name: "After table" })).toHaveFocus();
  });

  it("does not add extra scroll-container tab stop when sortable controls are actionable", () => {
    const { container } = render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "status", header: "Status" }
        ]}
        data={[
          { name: "Button", status: "Stable" },
          { name: "Dialog", status: "Stable" }
        ]}
      />
    );

    const scrollContainer = container.querySelector(
      "[data-aurora-table-scroll-container]"
    ) as HTMLDivElement;
    expect(scrollContainer).not.toHaveAttribute("tabindex");
  });

  it("renders empty state when no rows", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name" },
          { key: "status", header: "Status" }
        ]}
        data={[]}
        emptyContent="No components"
      />
    );

    expect(screen.getByText("No components")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("No components");
  });

  it("keeps a single live region when empty state and default sorting coexist", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "status", header: "Status" }
        ]}
        data={[]}
        defaultSortKey="name"
        emptyContent="No release rows"
      />
    );

    const statuses = screen.getAllByRole("status");
    expect(statuses).toHaveLength(1);
    expect(statuses[0]).toHaveTextContent("No release rows");
  });

  it("disables sortable controls when no rows are available", () => {
    const onSortChange = vi.fn();

    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "status", header: "Status", sortable: true }
        ]}
        data={[]}
        onSortChange={onSortChange}
      />
    );

    const nameSort = screen.getByRole("button", { name: "Name sort ascending" });
    expect(nameSort).toBeDisabled();

    fireEvent.click(nameSort);
    expect(onSortChange).not.toHaveBeenCalled();
  });

  it("disables sortable controls when only one row is available", () => {
    const onSortChange = vi.fn();

    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "status", header: "Status", sortable: true }
        ]}
        data={[{ name: "Button", status: "Stable" }]}
        onSortChange={onSortChange}
      />
    );

    const nameSort = screen.getByRole("button", { name: "Name sort ascending" });
    expect(nameSort).toBeDisabled();

    fireEvent.click(nameSort);
    expect(onSortChange).not.toHaveBeenCalled();
  });

  it("suppresses sorted semantics for default sort key when only one row is available", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "status", header: "Status", sortable: true }
        ]}
        data={[{ name: "Button", status: "Stable" }]}
        defaultSortKey="name"
      />
    );

    const nameHeader = screen.getByRole("columnheader", { name: /Name/ });
    expect(nameHeader).not.toHaveAttribute("aria-sort");
    expect(screen.queryByRole("status")).toBeNull();
    expect(screen.getByRole("button", { name: "Name sort descending" })).toBeDisabled();
  });

  it("keeps disabled sort label aligned with existing sort state when data shrinks to one row", () => {
    const { rerender } = render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "status", header: "Status", sortable: true }
        ]}
        data={[
          { name: "Dialog", status: "Stable" },
          { name: "Button", status: "Stable" }
        ]}
        defaultSortKey="name"
      />
    );

    expect(screen.getByRole("button", { name: "Name sort descending" })).toBeEnabled();

    rerender(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "status", header: "Status", sortable: true }
        ]}
        data={[{ name: "Dialog", status: "Stable" }]}
        defaultSortKey="name"
      />
    );

    const nameHeader = screen.getByRole("columnheader", { name: /Name/ });
    expect(nameHeader).not.toHaveAttribute("aria-sort");
    expect(screen.getByRole("button", { name: "Name sort descending" })).toBeDisabled();
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("renders loading state with aria-busy and suppresses table rows", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name" },
          { key: "status", header: "Status" }
        ]}
        data={[
          { name: "Button", status: "Stable" },
          { name: "Dialog", status: "Stable" }
        ]}
        loading
        loadingContent="Syncing release feed..."
      />
    );

    expect(screen.getByRole("table", { name: "Data table" })).toHaveAttribute("aria-busy", "true");
    expect(screen.getByText("Syncing release feed...")).toBeInTheDocument();
    expect(screen.queryByRole("cell", { name: "Button" })).toBeNull();
  });

  it("suppresses aria-sort while loading even when sort state exists, then restores when loading ends", () => {
    const { rerender } = render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "status", header: "Status", sortable: true }
        ]}
        data={[
          { name: "Button", status: "Stable" },
          { name: "Dialog", status: "Stable" }
        ]}
        defaultSortKey="name"
        loading
      />
    );

    const loadingNameHeader = screen.getByRole("columnheader", { name: /Name/ });
    expect(loadingNameHeader).not.toHaveAttribute("aria-sort");
    expect(screen.getByRole("button", { name: "Name sort descending" })).toBeDisabled();

    rerender(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "status", header: "Status", sortable: true }
        ]}
        data={[
          { name: "Button", status: "Stable" },
          { name: "Dialog", status: "Stable" }
        ]}
        defaultSortKey="name"
      />
    );

    const nameHeader = screen.getByRole("columnheader", { name: /Name/ });
    expect(nameHeader).toHaveAttribute("aria-sort", "ascending");
    expect(screen.getByRole("button", { name: "Name sort descending" })).toBeEnabled();
  });

  it("accepts ariaLabel to provide an explicit table name without caption", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name" },
          { key: "status", header: "Status" }
        ]}
        data={[
          { name: "Button", status: "Stable" },
          { name: "Dialog", status: "Stable" }
        ]}
        ariaLabel="Component release status"
      />
    );

    expect(screen.getByRole("table", { name: "Component release status" })).toBeInTheDocument();
  });

  it("supports ariaLabelledBy naming and suppresses aria-label fallback", () => {
    render(
      <div>
        <h2 id="release-metrics-heading">Release metrics table</h2>
        <Table
          columns={[
            { key: "name", header: "Name" },
            { key: "status", header: "Status" }
          ]}
          data={[
            { name: "Button", status: "Stable" },
            { name: "Dialog", status: "Stable" }
          ]}
          ariaLabelledBy="release-metrics-heading"
          ariaLabel="Should not be used when ariaLabelledBy exists"
        />
      </div>
    );

    const table = screen.getByRole("table", { name: "Release metrics table" });
    expect(table).toHaveAttribute("aria-labelledby", "release-metrics-heading");
    expect(table).not.toHaveAttribute("aria-label");
  });

  it("prefers caption naming when ariaLabel is not provided", () => {
    render(
      <Table
        caption="Release readiness board"
        columns={[
          { key: "name", header: "Name" },
          { key: "status", header: "Status" }
        ]}
        data={[
          { name: "Button", status: "Stable" },
          { name: "Dialog", status: "Stable" }
        ]}
      />
    );

    const table = screen.getByRole("table", { name: "Release readiness board" });
    expect(table).not.toHaveAttribute("aria-label");
  });

  it("sorts sortable columns and emits sort change", () => {
    const onSortChange = vi.fn();

    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
        onSortChange={onSortChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Name sort descending" }));
    expect(onSortChange).toHaveBeenCalledWith("name", "desc");
  });

  it("applies descending initial order when defaultSortDirection is desc", () => {
    const onSortChange = vi.fn();

    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
        defaultSortDirection="desc"
        onSortChange={onSortChange}
      />
    );

    const nameHeader = screen.getByRole("columnheader", { name: /Name/ });
    expect(nameHeader).toHaveAttribute("aria-sort", "descending");
    expect(screen.getAllByRole("row")[1]).toHaveTextContent("Dialog");

    fireEvent.click(screen.getByRole("button", { name: "Name sort ascending" }));
    expect(onSortChange).toHaveBeenCalledWith("name", "asc");
    expect(nameHeader).toHaveAttribute("aria-sort", "ascending");
    expect(screen.getAllByRole("row")[1]).toHaveTextContent("Button");
  });

  it("clears stale sort state when active sort column becomes non-sortable", () => {
    const data = [
      { name: "Dialog", score: 80 },
      { name: "Button", score: 95 }
    ];

    const { rerender } = render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={data}
        defaultSortKey="name"
      />
    );

    const sortedFirstRow = screen.getAllByRole("row")[1];
    expect(sortedFirstRow).toHaveTextContent("Button");
    expect(screen.getByRole("columnheader", { name: /Name/ })).toHaveAttribute(
      "aria-sort",
      "ascending"
    );
    expect(screen.getByRole("button", { name: "Name sort descending" })).toBeInTheDocument();

    rerender(
      <Table
        columns={[
          { key: "name", header: "Name" },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={data}
        defaultSortKey="name"
      />
    );

    const restoredFirstRow = screen.getAllByRole("row")[1];
    expect(restoredFirstRow).toHaveTextContent("Dialog");
    expect(screen.getByRole("columnheader", { name: /Name/ })).not.toHaveAttribute("aria-sort");
    expect(screen.queryByRole("button", { name: /Name sort/i })).toBeNull();
  });

  it("supports keyboard activation on sortable headers", async () => {
    const onSortChange = vi.fn();
    const user = userEvent.setup();

    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
        onSortChange={onSortChange}
      />
    );

    const sortDescending = screen.getByRole("button", { name: "Name sort descending" });
    await user.tab();
    expect(sortDescending).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(onSortChange).toHaveBeenNthCalledWith(1, "name", "desc");
    expect(onSortChange).toHaveBeenCalledTimes(1);

    await user.keyboard("{Space}");
    expect(onSortChange).toHaveBeenNthCalledWith(2, "name", "asc");
    expect(onSortChange).toHaveBeenCalledTimes(2);
  });

  it("exposes Enter/Space keyboard shortcuts on sortable headers", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
      />
    );

    expect(screen.getByRole("button", { name: "Name sort descending" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Enter Space"
    );
  });

  it("omits sortable-header keyboard hints when sorting is disabled", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[]}
      />
    );

    expect(screen.getByRole("button", { name: "Name sort ascending" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Name sort ascending" })).not.toHaveAttribute(
      "aria-keyshortcuts"
    );
  });

  it("shows sort-button focus ring only for keyboard-intended focus", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
      />
    );

    const sortButton = screen.getByRole("button", { name: "Name sort descending" });
    const matchesSpy = vi.spyOn(sortButton, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(sortButton);
    fireEvent.focus(sortButton);
    expect(sortButton.style.boxShadow).toBe("none");

    fireEvent.blur(sortButton);
    fireEvent.keyDown(sortButton, { key: "Tab" });
    fireEvent.focus(sortButton);
    expect(sortButton.style.boxShadow).toContain("0 0 0 3px");
    matchesSpy.mockRestore();
  });

  it("applies pressed offset while pointer is active on sortable headers", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
      />
    );

    const sortButton = screen.getByRole("button", { name: "Name sort descending" });
    fireEvent.mouseDown(sortButton);
    expect(sortButton.style.transform).toBe("translateY(1px)");

    fireEvent.mouseUp(sortButton);
    expect(sortButton.style.transform).toBe("translateY(0)");
  });

  it("supports legacy Spacebar key value on sortable headers", () => {
    const onSortChange = vi.fn();

    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
        onSortChange={onSortChange}
      />
    );

    const sortAscending = screen.getByRole("button", { name: "Name sort descending" });
    fireEvent.keyDown(sortAscending, { key: "Spacebar" });
    expect(onSortChange).toHaveBeenCalledTimes(1);
    expect(onSortChange).toHaveBeenCalledWith("name", "desc");
  });

  it("supports modern Space key value on sortable headers", () => {
    const onSortChange = vi.fn();

    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
        onSortChange={onSortChange}
      />
    );

    const sortAscending = screen.getByRole("button", { name: "Name sort descending" });
    fireEvent.keyDown(sortAscending, { key: "Space" });
    expect(onSortChange).toHaveBeenCalledTimes(1);
    expect(onSortChange).toHaveBeenCalledWith("name", "desc");
  });

  it("ignores repeated Space keydown events on sortable headers", () => {
    const onSortChange = vi.fn();

    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
        onSortChange={onSortChange}
      />
    );

    const sortButton = screen.getByRole("button", { name: "Name sort descending" });
    fireEvent.keyDown(sortButton, { key: " ", repeat: false });
    expect(onSortChange).toHaveBeenCalledTimes(1);
    expect(onSortChange).toHaveBeenLastCalledWith("name", "desc");

    fireEvent.keyDown(sortButton, { key: " ", repeat: true });
    expect(onSortChange).toHaveBeenCalledTimes(1);
  });

  it("ignores repeated Enter keydown events on sortable headers", () => {
    const onSortChange = vi.fn();

    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
        onSortChange={onSortChange}
      />
    );

    const sortButton = screen.getByRole("button", { name: "Name sort descending" });
    fireEvent.keyDown(sortButton, { key: "Enter", repeat: false });
    expect(onSortChange).toHaveBeenCalledTimes(1);
    expect(onSortChange).toHaveBeenLastCalledWith("name", "desc");

    fireEvent.keyDown(sortButton, { key: "Enter", repeat: true });
    expect(onSortChange).toHaveBeenCalledTimes(1);
  });

  it("ignores sortable-header activation keys during IME composition", () => {
    const onSortChange = vi.fn();

    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
        onSortChange={onSortChange}
      />
    );

    const sortButton = screen.getByRole("button", { name: "Name sort descending" });
    fireEvent.keyDown(sortButton, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    fireEvent.keyDown(sortButton, { key: " ", isComposing: true, keyCode: 229, which: 229 });
    expect(onSortChange).not.toHaveBeenCalled();

    fireEvent.keyDown(sortButton, { key: "Enter" });
    expect(onSortChange).toHaveBeenCalledTimes(1);
    expect(onSortChange).toHaveBeenCalledWith("name", "desc");
  });

  it("supports localized sort aria labels via getSortAriaLabel", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score" }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
        getSortAriaLabel={({ columnHeader, nextDirection }) =>
          `按${nextDirection === "asc" ? "升序" : "降序"}排序：${columnHeader}`
        }
      />
    );

    const sortButton = screen.getByRole("button", { name: "按降序排序：Name" });
    fireEvent.click(sortButton);
    expect(screen.getByRole("button", { name: "按升序排序：Name" })).toBeInTheDocument();
  });

  it("sorts date values correctly when sortable accessor returns Date", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name" },
          {
            key: "releasedAt",
            header: "Released",
            sortable: true,
            sortAccessor: (row) => new Date(row.releasedAt)
          }
        ]}
        data={[
          { name: "Dialog", releasedAt: "2026-03-19" },
          { name: "Button", releasedAt: "2026-01-10" },
          { name: "Table", releasedAt: "2026-02-01" }
        ]}
        defaultSortKey="releasedAt"
      />
    );

    let firstRow = screen.getAllByRole("row")[1];
    expect(firstRow).toHaveTextContent("Button");

    fireEvent.click(screen.getByRole("button", { name: "Released sort descending" }));
    firstRow = screen.getAllByRole("row")[1];
    expect(firstRow).toHaveTextContent("Dialog");
  });

  it("announces active sort state through live narration", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score" }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
      />
    );

    expect(screen.getByRole("status")).toHaveTextContent("Sorted by Name ascending.");
    fireEvent.click(screen.getByRole("button", { name: "Name sort descending" }));
    expect(screen.getByRole("status")).toHaveTextContent("Sorted by Name descending.");
  });

  it("supports localized sort status narration via getSortStatusText", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score" }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
        getSortStatusText={({ columnHeader, direction }) =>
          `当前排序：${columnHeader}（${direction}）`
        }
      />
    );

    expect(screen.getByRole("status")).toHaveTextContent("当前排序：Name（asc）");
    fireEvent.click(screen.getByRole("button", { name: "Name sort descending" }));
    expect(screen.getByRole("status")).toHaveTextContent("当前排序：Name（desc）");
  });

  it("disables sortable header controls while loading and preserves next-direction label", () => {
    const onSortChange = vi.fn();

    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score" }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
        loading
        onSortChange={onSortChange}
      />
    );

    const sortButton = screen.getByRole("button", { name: "Name sort descending" });
    expect(sortButton).toBeDisabled();
    fireEvent.click(sortButton);
    expect(onSortChange).not.toHaveBeenCalled();
  });

  it("keeps only loading narration while loading to avoid duplicate live regions", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
        loading
        loadingContent="Loading release rows..."
      />
    );

    const statuses = screen.getAllByRole("status");
    expect(statuses).toHaveLength(1);
    expect(statuses[0]).toHaveTextContent("Loading release rows...");
  });

  it("uses safe colSpan fallback when columns are empty", () => {
    render(<Table columns={[]} data={[]} emptyContent="No rows yet." />);

    const emptyStatus = screen.getByRole("status");
    expect(emptyStatus).toHaveTextContent("No rows yet.");
    expect(emptyStatus.closest("td")).toHaveAttribute("colspan", "1");
  });

  it("updates aria-sort state and row order as sort toggles", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Dialog", score: 80 },
          { name: "Button", score: 95 }
        ]}
        defaultSortKey="name"
      />
    );

    const nameHeader = screen.getByRole("columnheader", { name: /Name/ });
    const scoreHeader = screen.getByRole("columnheader", { name: /Score/ });
    expect(nameHeader).toHaveAttribute("aria-sort", "ascending");
    expect(scoreHeader).not.toHaveAttribute("aria-sort");
    expect(screen.getAllByRole("cell")[0]).toHaveTextContent("Button");

    expect(screen.getByRole("button", { name: "Name sort descending" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Name sort descending" }));
    expect(nameHeader).toHaveAttribute("aria-sort", "descending");
    expect(screen.getAllByRole("cell")[0]).toHaveTextContent("Dialog");
    expect(screen.getByRole("button", { name: "Name sort ascending" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Name sort ascending" }));
    expect(nameHeader).toHaveAttribute("aria-sort", "ascending");
    expect(screen.getAllByRole("cell")[0]).toHaveTextContent("Button");
  });

  it("ignores non-sortable default sort key to keep aria-sort semantics valid", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "status", header: "Status" }
        ]}
        data={[
          { name: "Dialog", status: "Stable" },
          { name: "Button", status: "Stable" }
        ]}
        defaultSortKey="status"
      />
    );

    const nameHeader = screen.getByRole("columnheader", { name: "Name" });
    const statusHeader = screen.getByRole("columnheader", { name: "Status" });

    expect(nameHeader).not.toHaveAttribute("aria-sort");
    expect(statusHeader).not.toHaveAttribute("aria-sort");
    expect(screen.queryByRole("button", { name: /Status sort/ })).toBeNull();
    expect(screen.getAllByRole("cell")[0]).toHaveTextContent("Dialog");
  });

  it("keeps equal sort values in source order for deterministic rendering", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name" },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Alpha", score: 1 },
          { name: "Beta", score: 1 },
          { name: "Gamma", score: 2 }
        ]}
        defaultSortKey="score"
      />
    );

    let cells = screen.getAllByRole("cell");
    expect(cells[0]).toHaveTextContent("Alpha");
    expect(cells[2]).toHaveTextContent("Beta");
    expect(cells[4]).toHaveTextContent("Gamma");

    fireEvent.click(screen.getByRole("button", { name: "Score sort descending" }));

    cells = screen.getAllByRole("cell");
    expect(cells[0]).toHaveTextContent("Gamma");
    expect(cells[2]).toHaveTextContent("Alpha");
    expect(cells[4]).toHaveTextContent("Beta");
  });

  it("uses natural string sorting for sortable text columns", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true },
          { key: "status", header: "Status" }
        ]}
        data={[
          { name: "a2", status: "Stable" },
          { name: "A10", status: "Stable" },
          { name: "a1", status: "Stable" },
          { name: "A11", status: "Stable" }
        ]}
        defaultSortKey="name"
      />
    );

    let cells = screen.getAllByRole("cell");
    expect(cells[0]).toHaveTextContent("a1");
    expect(cells[2]).toHaveTextContent("a2");
    expect(cells[4]).toHaveTextContent("A10");
    expect(cells[6]).toHaveTextContent("A11");

    fireEvent.click(screen.getByRole("button", { name: "Name sort descending" }));
    cells = screen.getAllByRole("cell");
    expect(cells[0]).toHaveTextContent("A11");
    expect(cells[2]).toHaveTextContent("A10");
    expect(cells[4]).toHaveTextContent("a2");
    expect(cells[6]).toHaveTextContent("a1");
  });

  it("keeps fallback row keys stable across sorting when rowKey is not provided", () => {
    render(
      <Table
        columns={[
          { key: "name", header: "Name" },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Alpha", score: 1 },
          { name: "Beta", score: 2 },
          { name: "Gamma", score: 3 }
        ]}
        defaultSortKey="score"
      />
    );

    const alphaCellBefore = screen.getByRole("cell", { name: "Alpha" });
    fireEvent.click(screen.getByRole("button", { name: "Score sort descending" }));
    const alphaCellAfter = screen.getByRole("cell", { name: "Alpha" });

    expect(alphaCellAfter).toBe(alphaCellBefore);
  });

  it("passes source row index to rowKey so sorting does not churn index-based keys", () => {
    const rowKey = vi.fn((row: { name: string }, rowIndex: number) => `${rowIndex}-${row.name}`);

    render(
      <Table
        columns={[
          { key: "name", header: "Name" },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Alpha", score: 1 },
          { name: "Beta", score: 2 },
          { name: "Gamma", score: 3 }
        ]}
        rowKey={rowKey}
        defaultSortKey="score"
      />
    );

    rowKey.mockClear();
    fireEvent.click(screen.getByRole("button", { name: "Score sort descending" }));

    expect(rowKey).toHaveBeenCalledWith({ name: "Gamma", score: 3 }, 2);
    expect(rowKey).toHaveBeenCalledWith({ name: "Beta", score: 2 }, 1);
    expect(rowKey).toHaveBeenCalledWith({ name: "Alpha", score: 1 }, 0);
  });

  it("passes both visual row index and source row index to column render callbacks", () => {
    const indexRenderer = vi.fn(
      (row: { name: string }, rowIndex: number, sourceIndex: number) =>
        `${row.name}-${rowIndex}-${sourceIndex}`
    );

    render(
      <Table
        columns={[
          { key: "name", header: "Name", sortable: true, render: indexRenderer },
          { key: "score", header: "Score", sortable: true }
        ]}
        data={[
          { name: "Alpha", score: 1 },
          { name: "Beta", score: 2 },
          { name: "Gamma", score: 3 }
        ]}
        defaultSortKey="score"
      />
    );

    indexRenderer.mockClear();
    fireEvent.click(screen.getByRole("button", { name: "Score sort descending" }));

    expect(indexRenderer).toHaveBeenCalledWith({ name: "Gamma", score: 3 }, 0, 2);
    expect(indexRenderer).toHaveBeenCalledWith({ name: "Beta", score: 2 }, 1, 1);
    expect(indexRenderer).toHaveBeenCalledWith({ name: "Alpha", score: 1 }, 2, 0);
  });
});
