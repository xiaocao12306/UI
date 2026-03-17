import { fireEvent, render, screen } from "@testing-library/react";
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
    expect(scoreHeader).toHaveAttribute("aria-sort", "none");
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

    expect(nameHeader).toHaveAttribute("aria-sort", "none");
    expect(statusHeader).toHaveAttribute("aria-sort", "none");
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
});
