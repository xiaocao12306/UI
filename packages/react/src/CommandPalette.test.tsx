import * as React from "react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CommandPalette } from "./CommandPalette";
import { dispatchNonPrimaryPointerDown } from "./test-utils/pointer";

describe("CommandPalette", () => {
  it("filters commands and handles selection", () => {
    const onOpenChange = vi.fn();
    const onCreateProject = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        commands={[
          { key: "open-settings", label: "Open Settings", keywords: ["settings"] },
          {
            key: "create-project",
            label: "Create Project",
            keywords: ["new", "project"],
            onSelect: onCreateProject
          }
        ]}
      />
    );

    fireEvent.change(screen.getByPlaceholderText("Search commands..."), {
      target: { value: "project" }
    });

    expect(screen.getByRole("option", { name: "Create Project" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Create Project" })).toBeNull();
    expect(screen.queryByRole("option", { name: "Open Settings" })).toBeNull();

    fireEvent.click(screen.getByRole("option", { name: "Create Project" }));

    expect(onCreateProject).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenCalledWith("item-select");
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

  it("warns when duplicate command keys are provided", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(
        <CommandPalette
          open
          onOpenChange={() => {}}
          commands={[
            { key: "deploy", label: "Deploy now" },
            { key: "deploy", label: "Deploy later" }
          ]}
        />
      );

      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenLastCalledWith(
        expect.stringContaining('Duplicate command keys detected: "deploy"')
      );
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
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

  it("associates combobox with live result status narration", () => {
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
    const status = screen.getByRole("status");
    const statusId = status.getAttribute("id");
    expect(statusId).toBeTruthy();
    expect(input).toHaveAttribute("aria-describedby", statusId!);
    expect(input).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"
    );

    fireEvent.change(input, { target: { value: "project" } });
    expect(status).toHaveTextContent('1 command found for "project".');
  });

  it("announces enabled subset when query matches enabled and disabled commands", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[
          { key: "deploy-now", label: "Deploy now", keywords: ["deploy"] },
          { key: "deploy-lock", label: "Deploy after lock", keywords: ["deploy"], disabled: true }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    fireEvent.change(input, { target: { value: "deploy" } });
    expect(screen.getByRole("status")).toHaveTextContent(
      '1 of 2 matching command available for "deploy".'
    );
  });

  it("closes on escape key through dialog dismiss", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onCloseReason).toHaveBeenCalledWith("escape-key");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("clears query on first Escape before dismissing palette", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    fireEvent.change(input, { target: { value: "settings" } });
    expect(input).toHaveValue("settings");

    fireEvent.keyDown(input, { key: "Escape" });
    expect(input).toHaveValue("");
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();

    fireEvent.keyDown(input, { key: "Escape" });
    expect(onCloseReason).toHaveBeenCalledWith("escape-key");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("focuses search input when transitioning from closed to open", async () => {
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <CommandPalette
        open={false}
        onOpenChange={onOpenChange}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    expect(screen.queryByRole("combobox", { name: "Search commands" })).toBeNull();

    rerender(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    await waitFor(() => {
      expect(screen.getByRole("combobox", { name: "Search commands" })).toHaveFocus();
    });
  });

  it("does not reclaim focus after open when users move focus manually", async () => {
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <CommandPalette
        open={false}
        onOpenChange={onOpenChange}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    rerender(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    await waitFor(() => {
      expect(screen.getByRole("combobox", { name: "Search commands" })).toHaveFocus();
    });

    const closeButton = screen.getByRole("button", { name: "Close dialog" });
    act(() => {
      closeButton.focus();
    });
    expect(closeButton).toHaveFocus();

    await act(async () => {
      await new Promise((resolve) => {
        window.setTimeout(resolve, 0);
      });
    });
    expect(closeButton).toHaveFocus();
  });

  it("supports immediate keyboard query and Enter selection after opening from closed state", async () => {
    const onOpenChange = vi.fn();
    const onRunE2E = vi.fn();
    const { rerender } = render(
      <CommandPalette
        open={false}
        onOpenChange={onOpenChange}
        commands={[
          { key: "run-e2e", label: "Run E2E Smoke", keywords: ["run"], onSelect: onRunE2E },
          { key: "open-theme", label: "Open Theme Pack", keywords: ["theme"] }
        ]}
      />
    );

    rerender(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[
          { key: "run-e2e", label: "Run E2E Smoke", keywords: ["run"], onSelect: onRunE2E },
          { key: "open-theme", label: "Open Theme Pack", keywords: ["theme"] }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    await waitFor(() => {
      expect(input).toHaveFocus();
    });

    fireEvent.change(input, { target: { value: "run" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onRunE2E).toHaveBeenCalledTimes(1);
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

  it("removes Escape keyboard hint when Escape behaviors are fully disabled", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        closeOnEscape={false}
        clearQueryOnEscape={false}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    expect(screen.getByRole("combobox", { name: "Search commands" })).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Enter"
    );
  });

  it("shows Escape keyboard hint only while query clear-on-escape is actionable", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        closeOnEscape={false}
        clearQueryOnEscape
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    expect(input).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Enter"
    );

    fireEvent.change(input, { target: { value: "settings" } });
    expect(input).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"
    );

    fireEvent.keyDown(input, { key: "Escape" });
    expect(input).toHaveValue("");
    expect(input).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Enter"
    );
  });

  it("ignores non-primary outside pointer interactions", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    dispatchNonPrimaryPointerDown(document.body);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.getByRole("dialog", { name: "Command Palette" })).toBeInTheDocument();
  });

  it("only prevents option mousedown default on primary button", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[
          { key: "open-settings", label: "Open Settings" },
          { key: "open-theme", label: "Open Theme Pack" }
        ]}
      />
    );

    const option = screen.getByRole("option", { name: "Open Settings" });

    const secondaryMouseDown = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      button: 2
    });
    option.dispatchEvent(secondaryMouseDown);
    expect(secondaryMouseDown.defaultPrevented).toBe(false);

    const primaryMouseDown = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      button: 0
    });
    option.dispatchEvent(primaryMouseDown);
    expect(primaryMouseDown.defaultPrevented).toBe(true);
  });

  it("prevents primary touch pointerdown default on options to keep combobox focus", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[
          { key: "open-settings", label: "Open Settings" },
          { key: "open-theme", label: "Open Theme Pack" }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    const option = screen.getByRole("option", { name: "Open Settings" });
    input.focus();
    expect(input).toHaveFocus();

    const touchPointerDown = new Event("pointerdown", {
      bubbles: true,
      cancelable: true
    });
    Object.defineProperty(touchPointerDown, "button", { configurable: true, value: 0 });
    Object.defineProperty(touchPointerDown, "pointerType", { configurable: true, value: "touch" });

    option.dispatchEvent(touchPointerDown);
    expect(touchPointerDown.defaultPrevented).toBe(true);
    expect(input).toHaveFocus();
  });

  it("forwards escape and outside-pointer dismiss events", () => {
    const onEscapeKeyDown = vi.fn();
    const onPointerDownOutside = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        onCloseReason={onCloseReason}
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenNthCalledWith(1, "escape-key");

    fireEvent.pointerDown(document.body);
    expect(onPointerDownOutside).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenNthCalledWith(2, "outside-pointer");
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
    const onCloseReason = vi.fn();
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
        onCloseReason={onCloseReason}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
    document.removeEventListener("keydown", preemptEscape, true);
  });

  it("emits close-button close reason when dismiss button is clicked", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(onCloseReason).toHaveBeenCalledWith("close-button");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("emits item-select and close-button callbacks in deterministic order", () => {
    const events: string[] = [];
    const onOpenChange = (nextOpen: boolean) => {
      events.push(`open:${String(nextOpen)}`);
    };

    const { rerender } = render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onCloseReason={(reason) => {
          events.push(`reason:${reason}`);
        }}
        commands={[
          {
            key: "open-settings",
            label: "Open Settings",
            onSelect: () => {
              events.push("select");
            }
          }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("option", { name: "Open Settings" }));
    expect(events).toEqual(["select", "reason:item-select", "open:false"]);

    events.length = 0;
    rerender(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onCloseReason={(reason) => {
          events.push(`reason:${reason}`);
        }}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(events).toEqual(["reason:close-button", "open:false"]);
  });

  it("emits escape and outside-pointer callbacks in deterministic order", () => {
    const events: string[] = [];
    const onOpenChange = (nextOpen: boolean) => {
      events.push(`open:${String(nextOpen)}`);
    };

    const { rerender } = render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onCloseReason={(reason) => {
          events.push(`reason:${reason}`);
        }}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(events).toEqual(["reason:escape-key", "open:false"]);

    events.length = 0;
    rerender(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onCloseReason={(reason) => {
          events.push(`reason:${reason}`);
        }}
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    fireEvent.pointerDown(document.body);
    expect(events).toEqual(["reason:outside-pointer", "open:false"]);
  });

  it("supports localized close-button accessible label", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        closeLabel="关闭命令面板"
        commands={[{ key: "open-settings", label: "Open Settings" }]}
      />
    );

    expect(screen.getByRole("button", { name: "关闭命令面板" })).toBeInTheDocument();
  });

  it("resets close-reason tracking between dismiss cycles", () => {
    const onCloseReason = vi.fn();

    function CloseReasonCycleFixture() {
      const [open, setOpen] = React.useState(true);

      return (
        <div>
          <button type="button" onClick={() => setOpen(true)}>
            Reopen palette
          </button>
          <CommandPalette
            open={open}
            onOpenChange={setOpen}
            onCloseReason={onCloseReason}
            commands={[{ key: "open-settings", label: "Open Settings" }]}
          />
        </div>
      );
    }

    render(<CloseReasonCycleFixture />);

    fireEvent.click(screen.getByRole("option", { name: "Open Settings" }));
    expect(onCloseReason).toHaveBeenNthCalledWith(1, "item-select");

    fireEvent.click(screen.getByRole("button", { name: "Reopen palette" }));
    fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(onCloseReason).toHaveBeenNthCalledWith(2, "close-button");
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

  it("ignores arrow and page navigation when all filtered commands are disabled", () => {
    const onOpenChange = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        commands={[
          { key: "archive", label: "Archive workspace", disabled: true },
          { key: "delete", label: "Delete workspace", disabled: true }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    expect(input).not.toHaveAttribute("aria-activedescendant");
    expect(input).toHaveAttribute(
      "aria-keyshortcuts",
      "Escape"
    );

    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "ArrowUp" });
    fireEvent.keyDown(input, { key: "PageDown" });
    fireEvent.keyDown(input, { key: "PageUp" });
    fireEvent.keyDown(input, { key: "Home" });
    fireEvent.keyDown(input, { key: "End" });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(input).not.toHaveAttribute("aria-activedescendant");
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("keeps aria-activedescendant bound to an existing enabled option after command updates", () => {
    const initialCommands = [
      { key: "open-settings", label: "Open Settings" },
      { key: "run-tests", label: "Run Tests" }
    ];

    const { rerender } = render(
      <CommandPalette open onOpenChange={() => {}} commands={initialCommands} />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));

    rerender(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[
          { key: "open-settings", label: "Open Settings" },
          { key: "run-tests", label: "Run Tests", disabled: true }
        ]}
      />
    );

    const activeId = input.getAttribute("aria-activedescendant");
    expect(activeId ?? "").not.toContain("option-1");
    if (!activeId) {
      return;
    }

    const activeOption = document.getElementById(activeId);
    expect(activeOption).toBeTruthy();
    expect(activeOption).toHaveAttribute("role", "option");
    expect(activeOption).not.toHaveAttribute("aria-disabled", "true");
  });

  it("keeps combobox popup semantics aligned with result listbox visibility", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    const listbox = screen.getByRole("listbox", { name: "Command results" });
    const listboxId = listbox.getAttribute("id");
    expect(listboxId).toBeTruthy();
    expect(input).toHaveAttribute("aria-expanded", "true");
    expect(input).toHaveAttribute("aria-controls", listboxId!);

    fireEvent.change(input, { target: { value: "no-match" } });
    expect(screen.queryByRole("listbox", { name: "Command results" })).toBeNull();
    expect(input).toHaveAttribute("aria-expanded", "false");
    expect(input).not.toHaveAttribute("aria-controls");

    fireEvent.change(input, { target: { value: "settings" } });
    const restoredListbox = screen.getByRole("listbox", { name: "Command results" });
    expect(input).toHaveAttribute("aria-expanded", "true");
    expect(input).toHaveAttribute("aria-controls", restoredListbox.getAttribute("id"));
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

  it("supports localized listbox accessible naming", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        resultsAriaLabel="命令结果列表"
        commands={[
          { key: "open-settings", label: "Open Settings", keywords: ["settings"] },
          { key: "create-project", label: "Create Project", keywords: ["project"] }
        ]}
      />
    );

    expect(screen.getByRole("listbox", { name: "命令结果列表" })).toBeInTheDocument();
  });

  it("supports localized dialog and search input copy", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        title="命令中心"
        description="快速检索并执行工作区操作。"
        searchAriaLabel="搜索命令"
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
      />
    );

    expect(screen.getByRole("dialog", { name: "命令中心" })).toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: "搜索命令" })).toBeInTheDocument();
    expect(screen.getByText("快速检索并执行工作区操作。")).toBeInTheDocument();
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

  it("ignores repeated Enter keydown to avoid duplicate command execution", () => {
    const onCreate = vi.fn();
    const onOpenChange = vi.fn();

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

    const input = screen.getByRole("combobox", { name: "Search commands" });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter", repeat: false });
    expect(onCreate).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(input, { key: "Enter", repeat: true });
    expect(onCreate).toHaveBeenCalledTimes(1);
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("keeps active option visible while navigating long result lists", () => {
    const originalScrollIntoView = HTMLElement.prototype.scrollIntoView;
    const scrollIntoView = vi.fn();
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
      configurable: true,
      value: scrollIntoView
    });

    try {
      render(
        <CommandPalette
          open
          closeOnSelect={false}
          onOpenChange={() => {}}
          commands={Array.from({ length: 30 }, (_, index) => ({
            key: `command-${index + 1}`,
            label: `Command ${index + 1}`
          }))}
        />
      );

      const input = screen.getByRole("combobox", { name: "Search commands" });
      scrollIntoView.mockClear();

      for (let index = 0; index < 8; index += 1) {
        fireEvent.keyDown(input, { key: "ArrowDown" });
      }

      expect(scrollIntoView).toHaveBeenCalled();
    } finally {
      if (originalScrollIntoView) {
        Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
          configurable: true,
          value: originalScrollIntoView
        });
      } else {
        Reflect.deleteProperty(HTMLElement.prototype, "scrollIntoView");
      }
    }
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

  it("ignores Escape query reset and dismiss while IME composition is active", () => {
    const onOpenChange = vi.fn();
    const onEscapeKeyDown = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onEscapeKeyDown={onEscapeKeyDown}
        onCloseReason={onCloseReason}
        commands={[
          { key: "open-settings", label: "Open Settings", keywords: ["settings"] },
          { key: "deploy", label: "Deploy Project", keywords: ["deploy"] }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    fireEvent.change(input, { target: { value: "deploy" } });
    expect(input).toHaveValue("deploy");

    fireEvent.keyDown(input, { key: "Escape", isComposing: true, keyCode: 229, which: 229 });
    expect(input).toHaveValue("deploy");
    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();

    fireEvent.keyDown(input, { key: "Escape" });
    expect(input).toHaveValue("");
    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();

    fireEvent.keyDown(input, { key: "Escape" });
    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenCalledWith("escape-key");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("keeps palette open after selection when closeOnSelect is false", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();
    const onCreate = vi.fn();

    render(
      <CommandPalette
        open
        closeOnSelect={false}
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        commands={[
          { key: "open-settings", label: "Open Settings" },
          { key: "create-project", label: "Create Project", onSelect: onCreate }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("option", { name: "Create Project" }));

    expect(onCreate).toHaveBeenCalledTimes(1);
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
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
          {
            key: "publish-release",
            label: "Publish Release",
            disabled: true,
            onSelect: onDisabledSelect
          },
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
    const onQueryChange = vi.fn();
    const { rerender } = render(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onQueryChange={onQueryChange}
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
      />
    );

    fireEvent.change(screen.getByLabelText("Search commands"), { target: { value: "settings" } });
    expect((screen.getByLabelText("Search commands") as HTMLInputElement).value).toBe("settings");
    expect(onQueryChange).toHaveBeenLastCalledWith("settings");

    rerender(
      <CommandPalette
        open={false}
        onOpenChange={onOpenChange}
        onQueryChange={onQueryChange}
        commands={[{ key: "open-settings", label: "Open Settings", keywords: ["settings"] }]}
      />
    );
    expect(onQueryChange).toHaveBeenLastCalledWith("");

    rerender(
      <CommandPalette
        open
        onOpenChange={onOpenChange}
        onQueryChange={onQueryChange}
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

  it("supports PageUp/PageDown navigation across long result lists while skipping disabled options", () => {
    render(
      <CommandPalette
        open
        closeOnSelect={false}
        onOpenChange={() => {}}
        commands={[
          { key: "disabled-first", label: "Disabled First", disabled: true },
          { key: "cmd-1", label: "Command 1" },
          { key: "cmd-2", label: "Command 2" },
          { key: "disabled-middle", label: "Disabled Middle", disabled: true },
          { key: "cmd-3", label: "Command 3" },
          { key: "cmd-4", label: "Command 4" },
          { key: "cmd-5", label: "Command 5" },
          { key: "cmd-6", label: "Command 6" },
          { key: "cmd-7", label: "Command 7" }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));

    fireEvent.keyDown(input, { key: "PageDown" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-7"));

    fireEvent.keyDown(input, { key: "PageUp" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));
  });

  it("keeps native behavior for modifier-key shortcuts and does not trigger command navigation", () => {
    const onRunLint = vi.fn();

    render(
      <CommandPalette
        open
        closeOnSelect={false}
        onOpenChange={() => {}}
        commands={[
          { key: "run-lint", label: "Run lint", onSelect: onRunLint },
          { key: "publish", label: "Publish release" },
          { key: "notify", label: "Notify team" }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));

    fireEvent.keyDown(input, { key: "PageDown", ctrlKey: true });
    fireEvent.keyDown(input, { key: "End", metaKey: true });
    fireEvent.keyDown(input, { key: "Home", altKey: true });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));

    fireEvent.keyDown(input, { key: "Enter", ctrlKey: true });
    expect(onRunLint).not.toHaveBeenCalled();
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
          {
            key: "search-docs",
            label: "Search Docs",
            keywords: ["search"],
            onSelect: onSearchDocs
          },
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
          {
            key: "publish-release",
            label: "Publish Release",
            keywords: ["release"],
            disabled: true
          },
          { key: "open-settings", label: "Open Settings", keywords: ["settings"] }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    fireEvent.change(input, {
      target: { value: "release" }
    });
    expect(screen.getByRole("status")).toHaveTextContent('No enabled commands match "release".');
    expect(input).toHaveAttribute(
      "aria-keyshortcuts",
      "Escape"
    );
  });

  it("does not prevent native input key behavior when filtered results have no enabled commands", () => {
    render(
      <CommandPalette
        open
        onOpenChange={() => {}}
        commands={[
          { key: "archive", label: "Archive workspace", disabled: true },
          { key: "delete", label: "Delete workspace", disabled: true }
        ]}
      />
    );

    const input = screen.getByRole("combobox", { name: "Search commands" });
    const navigationKeys = ["ArrowDown", "ArrowUp", "Home", "End", "PageDown", "PageUp"];

    for (const key of navigationKeys) {
      const keyEvent = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true });
      input.dispatchEvent(keyEvent);
      expect(keyEvent.defaultPrevented).toBe(false);
    }
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
