import { act, fireEvent, render, screen } from "@testing-library/react";
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

  it("filters non-string labels via textValue", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[
          {
            key: "deploy",
            label: <span>Deploy Project</span>,
            textValue: "deploy project",
            keywords: ["release"]
          },
          { key: "settings", label: "Open Settings" }
        ]}
      />
    );

    fireEvent.change(screen.getByRole("combobox", { name: "Search commands" }), {
      target: { value: "deploy" }
    });

    expect(screen.getByRole("option", { name: "Deploy Project" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Open Settings" })).toBeNull();
  });

  it("matches accented labels with plain query text", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[
          { key: "cafe", label: "Café Settings", keywords: ["profil"] },
          { key: "release", label: "Release Notes" }
        ]}
      />
    );

    fireEvent.change(screen.getByRole("combobox", { name: "Search commands" }), {
      target: { value: "cafe" }
    });

    expect(screen.getByRole("option", { name: "Café Settings" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Release Notes" })).toBeNull();
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
    expect(screen.getByText("No commands found.")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent('No commands match "no-match".');
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
    expect(screen.getByText("No workflow commands yet.")).toBeInTheDocument();
  });

  it("announces result count in live region", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[
          { key: "open-settings", label: "Open Settings", keywords: ["settings"] },
          { key: "open-changelog", label: "Open Changelog", keywords: ["release"] }
        ]}
      />
    );

    expect(screen.getByRole("status")).toHaveTextContent("2 commands available.");
    fireEvent.change(screen.getByRole("combobox", { name: "Search commands" }), {
      target: { value: "release" }
    });
    expect(screen.getByRole("status")).toHaveTextContent('1 command found for "release".');
  });

  it("announces when only disabled commands match query", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[
          { key: "publish-release", label: "Publish Release", keywords: ["release"], disabled: true },
          { key: "open-settings", label: "Open Settings", keywords: ["settings"] }
        ]}
      />
    );

    fireEvent.change(screen.getByRole("combobox", { name: "Search commands" }), {
      target: { value: "release" }
    });
    expect(screen.getByRole("status")).toHaveTextContent('No enabled commands match "release".');
  });

  it("supports custom result status narration", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
        getResultsStatusText={({ query, visibleCount, enabledCount }) =>
          query.trim().length === 0
            ? "Ready for command search."
            : `${enabledCount}/${visibleCount} actionable match(es) for ${query}`
        }
      />
    );

    expect(screen.getByRole("status")).toHaveTextContent("Ready for command search.");
    fireEvent.change(screen.getByRole("combobox", { name: "Search commands" }), {
      target: { value: "settings" }
    });
    expect(screen.getByRole("status")).toHaveTextContent("1/1 actionable match(es) for settings");
  });

  it("keeps selection unset when all commands are disabled", () => {
    const onOpenChange = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[
          { key: "sync", label: "Sync", disabled: true },
          { key: "deploy", label: "Deploy", disabled: true }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    const disabledOptions = screen.getAllByRole("option");

    expect(input).not.toHaveAttribute("aria-activedescendant");
    expect(disabledOptions).toHaveLength(2);
    disabledOptions.forEach((option) => {
      expect(option).toHaveAttribute("aria-disabled", "true");
    });

    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("keeps options outside tab order and preserves combobox focus on pointer selection", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[
          { key: "open-settings", label: "Open Settings" },
          { key: "create-project", label: "Create Project" }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    act(() => {
      input.focus();
    });
    expect(input).toHaveFocus();

    const firstOption = screen.getByRole("option", { name: "Open Settings" });
    expect(firstOption).toHaveAttribute("tabindex", "-1");

    fireEvent.mouseDown(firstOption);
    expect(input).toHaveFocus();
  });
});
