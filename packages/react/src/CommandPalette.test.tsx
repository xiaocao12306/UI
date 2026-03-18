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

  it("clears query on first Escape before dismissing palette", () => {
    const onOpenChange = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    fireEvent.change(input, { target: { value: "settings" } });
    expect(input).toHaveValue("settings");

    fireEvent.keyDown(input, { key: "Escape" });
    expect(input).toHaveValue("");
    expect(onOpenChange).not.toHaveBeenCalled();

    fireEvent.keyDown(input, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("supports disabling Escape query reset for immediate dismiss", () => {
    const onOpenChange = vi.fn();

    render(
      <CommandPalette
        open
        clearQueryOnEscape={false}
        onOpenChange={onOpenChange}
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    fireEvent.change(input, { target: { value: "settings" } });
    expect(input).toHaveValue("settings");

    fireEvent.keyDown(input, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(input).toHaveValue("settings");
  });

  it("supports non-dismissible escape and outside pointer policies", () => {
    const onOpenChange = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        closeOnEscape={false}
        closeOnOutsidePointer={false}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();

    fireEvent.pointerDown(document.body);
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
  });

  it("forwards escape and outside-pointer dismiss events", () => {
    const onEscapeKeyDown = vi.fn();
    const onPointerDownOutside = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);

    fireEvent.pointerDown(document.body);
    expect(onPointerDownOutside).toHaveBeenCalledTimes(1);
  });

  it("allows custom dismiss guards by preventing escape/outside events", () => {
    const onOpenChange = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onEscapeKeyDown={(event) => {
          event.preventDefault();
        }}
        onPointerDownOutside={(event) => {
          event.preventDefault();
        }}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    fireEvent.keyDown(document, { key: "Escape" });
    fireEvent.pointerDown(document.body);

    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
  });

  it("skips escape callback and dismiss when Escape is preempted upstream", () => {
    const onOpenChange = vi.fn();
    const onEscapeKeyDown = vi.fn();
    const preemptEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", preemptEscape, true);
    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onEscapeKeyDown={onEscapeKeyDown}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    document.removeEventListener("keydown", preemptEscape, true);
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
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(2);
    expect(options[0]).toHaveAttribute("aria-posinset", "1");
    expect(options[0]).toHaveAttribute("aria-setsize", "2");
    expect(options[1]).toHaveAttribute("aria-posinset", "2");
    expect(options[1]).toHaveAttribute("aria-setsize", "2");
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

  it("ignores navigation and selection keys while IME composition is active", () => {
    const onDeploy = vi.fn();
    const onOpenChange = vi.fn();

    render(
      <CommandPalette
        open
        closeOnSelect={false}
        onOpenChange={onOpenChange}
        commands={[
          { key: "open-settings", label: "Open Settings" },
          { key: "deploy", label: "Deploy Project", onSelect: onDeploy }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));

    fireEvent.keyDown(input, { key: "ArrowDown", isComposing: true, keyCode: 229, which: 229 });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));

    fireEvent.keyDown(input, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    expect(onDeploy).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();

    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onDeploy).toHaveBeenCalledTimes(1);
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("keeps palette open after selection when closeOnSelect is false", () => {
    const onOpenChange = vi.fn();
    const onCreate = vi.fn();

    render(
      <CommandPalette
        open
        closeOnSelect={false}
        onOpenChange={onOpenChange}
        commands={[
          { key: "open-settings", label: "Open Settings" },
          { key: "create-project", label: "Create Project", onSelect: onCreate }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("option", { name: "Create Project" }));

    expect(onCreate).toHaveBeenCalledTimes(1);
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
  });

  it("ignores disabled command click without closing palette", () => {
    const onOpenChange = vi.fn();
    const onDisabledSelect = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[
          { key: "publish-release", label: "Publish Release", disabled: true, onSelect: onDisabledSelect },
          { key: "open-settings", label: "Open Settings" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("option", { name: "Publish Release" }));

    expect(onDisabledSelect).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
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

  it("preserves active command intent when query refinement keeps that command", () => {
    const onSearchDocs = vi.fn();
    const onSendReport = vi.fn();
    const onOpenChange = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[
          { key: "scan-code", label: "Scan Code" },
          { key: "search-docs", label: "Search Docs", keywords: ["search"], onSelect: onSearchDocs },
          { key: "send-report", label: "Send Report", keywords: ["send"], onSelect: onSendReport }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));

    fireEvent.change(input, { target: { value: "search" } });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));

    fireEvent.keyDown(input, { key: "Enter" });
    expect(onSearchDocs).toHaveBeenCalledTimes(1);
    expect(onSendReport).not.toHaveBeenCalled();
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
