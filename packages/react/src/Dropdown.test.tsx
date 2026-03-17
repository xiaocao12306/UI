import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  it("selects an item and closes the menu", () => {
    const onSelect = vi.fn();

    render(
      <Dropdown
        label="Actions"
        items={[
          { key: "duplicate", label: "Duplicate", onSelect },
          { key: "archive", label: "Archive" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Actions" }));
    fireEvent.click(screen.getByRole("menuitem", { name: "Duplicate" }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu")).toBeNull();
  });

  it("closes on escape key and outside pointer", () => {
    render(
      <Dropdown
        label="Options"
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Options" }));
    expect(screen.getByRole("menu")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("menu")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Options" }));
    expect(screen.getByRole("menu")).toBeInTheDocument();

    fireEvent.pointerDown(document.body);
    expect(screen.queryByRole("menu")).toBeNull();
  });
});
