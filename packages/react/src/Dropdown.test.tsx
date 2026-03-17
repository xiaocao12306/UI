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

  it("supports keyboard open and item navigation", () => {
    render(
      <Dropdown
        label="Keyboard"
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" },
          { key: "three", label: "Three" }
        ]}
      />
    );

    const trigger = screen.getByRole("button", { name: "Keyboard" });
    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: "ArrowDown" });

    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: "One" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "ArrowDown" });
    expect(screen.getByRole("menuitem", { name: "Two" })).toHaveFocus();
  });

  it("does not trigger selection for disabled item", () => {
    const onSelect = vi.fn();
    render(
      <Dropdown
        label="Disabled case"
        items={[
          { key: "disabled", label: "Disabled", disabled: true, onSelect },
          { key: "active", label: "Active" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Disabled case" }));
    const disabledItem = screen.getByRole("menuitem", { name: "Disabled" });
    fireEvent.click(disabledItem);

    expect(disabledItem).toHaveAttribute("aria-disabled", "true");
    expect(onSelect).not.toHaveBeenCalled();
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("exposes menu accessible name from trigger label", () => {
    render(
      <Dropdown
        label="Deployment actions"
        items={[
          { key: "ship", label: "Ship" },
          { key: "rollback", label: "Rollback" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Deployment actions" }));
    expect(screen.getByRole("menu", { name: "Deployment actions" })).toBeInTheDocument();
  });
});
