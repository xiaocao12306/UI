import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CommandPalette } from "./CommandPalette";

describe("CommandPalette", () => {
  it("filters commands and handles selection", () => {
    const onOpenChange = vi.fn();
    const onCreateProject = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[
          { key: "open-settings", label: "Open Settings", keywords: ["settings"] },
          { key: "create-project", label: "Create Project", keywords: ["new", "project"], onSelect: onCreateProject }
        ]}
      />
    );

    fireEvent.change(screen.getByPlaceholderText("Search commands..."), {
      target: { value: "project" }
    });

    expect(screen.getByRole("option", { name: "Create Project" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Open Settings" })).toBeNull();

    fireEvent.click(screen.getByRole("option", { name: "Create Project" }));

    expect(onCreateProject).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("closes on escape key through dialog dismiss", () => {
    const onOpenChange = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("shows empty-state copy when query has no match", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
      />
    );

    fireEvent.change(screen.getByLabelText("Search commands"), { target: { value: "no-match" } });
    expect(screen.getByRole("status")).toHaveTextContent("No commands found.");
  });

  it("renders filtered results as listbox options", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[
          { key: "open-settings", label: "Open Settings", keywords: ["settings"] },
          { key: "create-project", label: "Create Project", keywords: ["project"] }
        ]}
      />
    );

    const listbox = screen.getByRole("listbox", { name: "Command results" });
    expect(listbox).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  it("supports keyboard navigation and enter selection", () => {
    const onCreate = vi.fn();
    const onOpenChange = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[
          { key: "open-settings", label: "Open Settings" },
          { key: "create-project", label: "Create Project", onSelect: onCreate }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onCreate).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("resets search query after palette closes", () => {
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
      />
    );

    fireEvent.change(screen.getByLabelText("Search commands"), { target: { value: "settings" } });
    expect((screen.getByLabelText("Search commands") as HTMLInputElement).value).toBe("settings");

    rerender(
      <CommandPalette
        open={false}
        onOpenChange={onOpenChange}
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
      />
    );

    rerender(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
      />
    );

    expect((screen.getByLabelText("Search commands") as HTMLInputElement).value).toBe("");
  });

  it("supports Home/End navigation and skips disabled options", () => {
    const onRunLint = vi.fn();
    const onPublish = vi.fn();
    const onOpenChange = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[
          { key: "disabled-first", label: "Disabled First", disabled: true },
          { key: "run-lint", label: "Run Lint", onSelect: onRunLint },
          { key: "disabled-middle", label: "Disabled Middle", disabled: true },
          { key: "publish", label: "Publish", onSelect: onPublish }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));

    fireEvent.keyDown(input, { key: "End" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-3"));

    fireEvent.keyDown(input, { key: "Home" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));

    fireEvent.keyDown(input, { key: "ArrowUp" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-3"));

    fireEvent.keyDown(input, { key: "Enter" });
    expect(onPublish).toHaveBeenCalledTimes(1);
    expect(onRunLint).not.toHaveBeenCalled();
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("emits onQueryChange and supports custom empty message", () => {
    const onQueryChange = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        onQueryChange={onQueryChange}
        emptyMessage="No workflow commands yet."
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
      />
    );

    fireEvent.change(screen.getByRole("combobox", { name: "Search commands" }), {
      target: { value: "no-hit" }
    });

    expect(onQueryChange).toHaveBeenCalledWith("no-hit");
    expect(screen.getByRole("status")).toHaveTextContent("No workflow commands yet.");
  });
});
