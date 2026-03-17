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

    fireEvent.click(screen.getByRole("button", { name: /Name/ }));
    expect(onSortChange).toHaveBeenCalledWith("name", "desc");
  });
});
