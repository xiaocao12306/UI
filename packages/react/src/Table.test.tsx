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
});
