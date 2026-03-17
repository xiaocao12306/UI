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

    const trigger = screen.getByRole("button", { name: "Actions" });
    expect(trigger).not.toHaveAttribute("aria-controls");

    fireEvent.click(trigger);
    const menu = screen.getByRole("menu", { name: "Actions" });
    expect(trigger).toHaveAttribute("aria-controls", menu.id);
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

  it("supports typeahead navigation and skips disabled matches", () => {
    render(
      <Dropdown
        label="Typeahead"
        items={[
          { key: "duplicate", label: "Duplicate" },
          { key: "archive", label: "Archive", disabled: true },
          { key: "add-note", label: "Add note" },
          { key: "rename", label: "Rename" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Typeahead" }));
    const menu = screen.getByRole("menu");

    fireEvent.keyDown(menu, { key: "a" });
    expect(screen.getByRole("menuitem", { name: "Add note" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "r" });
    expect(screen.getByRole("menuitem", { name: "Rename" })).toHaveFocus();
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

  it("supports icon trigger naming via triggerAriaLabel", () => {
    render(
      <Dropdown
        label="⋯"
        triggerAriaLabel="More deployment actions"
        items={[
          { key: "ship", label: "Ship" },
          { key: "rollback", label: "Rollback" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "More deployment actions" }));
    expect(screen.getByRole("menu", { name: "More deployment actions" })).toBeInTheDocument();
  });
});
