import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Dropdown } from "./Dropdown";
import { Popover } from "./Popover";
import { dispatchNonPrimaryPointerDown } from "./test-utils/pointer";

describe("Dropdown", () => {
  it("selects an item and closes the menu", () => {
    const onSelect = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Dropdown
        label="Actions"
        onCloseReason={onCloseReason}
        items={[
          { key: "duplicate", label: "Duplicate", onSelect },
          { key: "archive", label: "Archive" }
        ]}
      />
    );

    const trigger = screen.getByRole("button", { name: "Actions" });
    expect(trigger).not.toHaveAttribute("aria-controls");
    expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp");

    fireEvent.click(trigger);
    const menu = screen.getByRole("menu", { name: "Actions" });
    expect(trigger).toHaveAttribute("aria-controls", menu.id);
    expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    fireEvent.click(screen.getByRole("menuitem", { name: "Duplicate" }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenCalledWith("item-select");
    expect(screen.queryByRole("menu")).toBeNull();
    expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp");
  });

  it("warns when duplicate dropdown item keys are provided", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(
        <Dropdown
          label="Duplicate keys"
          items={[
            { key: "deploy", label: "Deploy now" },
            { key: "deploy", label: "Deploy later" }
          ]}
        />
      );

      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenLastCalledWith(
        expect.stringContaining('Duplicate item keys detected: "deploy"')
      );
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("warns when non-text dropdown item labels omit ariaLabel and textValue", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    try {
      render(
        <Dropdown
          label="Non-text labels"
          items={[
            { key: "icon-only", label: <span aria-hidden="true">⚙</span> },
            { key: "delete", label: "Delete" }
          ]}
        />
      );

      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('Non-text item labels should provide ariaLabel: "icon-only"')
      );
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('Non-text item labels should provide textValue for typeahead matching: "icon-only"')
      );
    } finally {
      warnSpy.mockRestore();
    }
  });

  it("does not warn for non-text dropdown item labels when ariaLabel and textValue are provided", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    try {
      render(
        <Dropdown
          label="Named icons"
          items={[
            {
              key: "settings",
              label: <span aria-hidden="true">⚙</span>,
              ariaLabel: "Settings",
              textValue: "Settings"
            },
            { key: "delete", label: "Delete" }
          ]}
        />
      );

      expect(warnSpy).not.toHaveBeenCalled();
    } finally {
      warnSpy.mockRestore();
    }
  });

  it("does not warn for non-text dropdown labels when inline aria-label is present", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    try {
      render(
        <Dropdown
          label="Inline aria label"
          items={[
            {
              key: "settings",
              label: (
                <span aria-label="Settings">
                  <span aria-hidden="true">⚙</span>
                </span>
              )
            },
            { key: "delete", label: "Delete" }
          ]}
        />
      );

      expect(warnSpy).not.toHaveBeenCalled();
    } finally {
      warnSpy.mockRestore();
    }
  });

  it("warns and ignores blank ariaLabel on non-text dropdown items", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    try {
      render(
        <Dropdown
          label="Blank icon label"
          items={[
            {
              key: "settings",
              label: <span aria-hidden="true">⚙</span>,
              ariaLabel: "   ",
              textValue: "Settings"
            }
          ]}
        />
      );

      fireEvent.click(screen.getByRole("button", { name: "Blank icon label" }));
      const settingsItem = screen.getByRole("menuitem");
      expect(settingsItem).not.toHaveAttribute("aria-label");
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('Non-text item labels should provide ariaLabel: "settings"')
      );
    } finally {
      warnSpy.mockRestore();
    }
  });

  it("closes on escape key and outside pointer", () => {
    const onCloseReason = vi.fn();

    render(
      <Dropdown
        label="Options"
        onCloseReason={onCloseReason}
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Options" }));
    expect(screen.getByRole("menu")).toBeInTheDocument();

    const trigger = screen.getByRole("button", { name: "Options" });
    expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("menu")).toBeNull();
    expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp");
    expect(trigger).toHaveFocus();
    expect(onCloseReason).toHaveBeenNthCalledWith(1, "escape-key");

    fireEvent.click(trigger);
    expect(screen.getByRole("menu")).toBeInTheDocument();

    expect(trigger).not.toHaveFocus();
    fireEvent.pointerDown(document.body);
    expect(screen.queryByRole("menu")).toBeNull();
    expect(trigger).not.toHaveFocus();
    expect(onCloseReason).toHaveBeenNthCalledWith(2, "outside-pointer");
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
    expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp");
    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: "ArrowDown" });

    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
    expect(menu).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Tab Escape"
    );
    expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    expect(screen.getByRole("menuitem", { name: "One" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "ArrowDown" });
    expect(screen.getByRole("menuitem", { name: "Two" })).toHaveFocus();
  });

  it("opens from trigger with ArrowUp and focuses the last enabled item", () => {
    render(
      <Dropdown
        label="Keyboard Up"
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two", disabled: true },
          { key: "three", label: "Three" }
        ]}
      />
    );

    const trigger = screen.getByRole("button", { name: "Keyboard Up" });
    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: "ArrowUp" });

    expect(screen.getByRole("menu", { name: "Keyboard Up" })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: "Three" })).toHaveFocus();
  });

  it("ignores modified trigger navigation keys", () => {
    render(
      <Dropdown
        label="Trigger Modifiers"
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    const trigger = screen.getByRole("button", { name: "Trigger Modifiers" });
    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: "ArrowDown", ctrlKey: true });
    fireEvent.keyDown(trigger, { key: "ArrowUp", metaKey: true });

    expect(screen.queryByRole("menu", { name: "Trigger Modifiers" })).toBeNull();
  });

  it("supports controlled open mode where dismissal requests depend on parent rerender", () => {
    const onOpenChange = vi.fn();
    const onCloseReason = vi.fn();
    const items = [
      { key: "one", label: "One" },
      { key: "two", label: "Two" }
    ];

    const { rerender } = render(
      <Dropdown
        label="Controlled"
        open
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        items={items}
      />
    );

    expect(screen.getByRole("menu", { name: "Controlled" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Controlled" }));
    expect(onCloseReason).toHaveBeenCalledWith("trigger-click");
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(screen.getByRole("menu", { name: "Controlled" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onCloseReason).toHaveBeenLastCalledWith("escape-key");
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
    expect(screen.getByRole("menu", { name: "Controlled" })).toBeInTheDocument();

    rerender(
      <Dropdown
        label="Controlled"
        open={false}
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        items={items}
      />
    );

    expect(screen.queryByRole("menu", { name: "Controlled" })).toBeNull();
  });

  it("supports defaultOpen to mount menu expanded on initial render", () => {
    render(
      <Dropdown
        label="Default expanded"
        defaultOpen
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    expect(screen.getByRole("button", { name: "Default expanded" })).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    expect(screen.getByRole("menu", { name: "Default expanded" })).toBeInTheDocument();
  });

  it("supports Home and End navigation while skipping disabled items", () => {
    render(
      <Dropdown
        label="Keyboard Bounds"
        items={[
          { key: "draft", label: "Draft", disabled: true },
          { key: "review", label: "Review" },
          { key: "blocked", label: "Blocked", disabled: true },
          { key: "ship", label: "Ship" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Keyboard Bounds" }));
    const menu = screen.getByRole("menu", { name: "Keyboard Bounds" });
    expect(screen.getByRole("menuitem", { name: "Review" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "End" });
    expect(screen.getByRole("menuitem", { name: "Ship" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "Home" });
    expect(screen.getByRole("menuitem", { name: "Review" })).toHaveFocus();
  });

  it("supports PageUp and PageDown navigation for long menus while skipping disabled items", () => {
    render(
      <Dropdown
        label="Paged Keyboard Bounds"
        items={[
          { key: "alpha", label: "Alpha" },
          { key: "bravo", label: "Bravo" },
          { key: "charlie", label: "Charlie", disabled: true },
          { key: "delta", label: "Delta" },
          { key: "echo", label: "Echo" },
          { key: "foxtrot", label: "Foxtrot" },
          { key: "golf", label: "Golf" },
          { key: "hotel", label: "Hotel" },
          { key: "india", label: "India" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Paged Keyboard Bounds" }));
    const menu = screen.getByRole("menu", { name: "Paged Keyboard Bounds" });
    expect(screen.getByRole("menuitem", { name: "Alpha" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "PageDown" });
    expect(screen.getByRole("menuitem", { name: "Golf" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "PageDown" });
    expect(screen.getByRole("menuitem", { name: "India" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "PageUp" });
    expect(screen.getByRole("menuitem", { name: "Delta" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "PageUp" });
    expect(screen.getByRole("menuitem", { name: "Alpha" })).toHaveFocus();
  });

  it("keeps keyboard navigation as no-op when all dropdown items are disabled", () => {
    const onCloseReason = vi.fn();

    render(
      <Dropdown
        label="All disabled"
        onCloseReason={onCloseReason}
        items={[
          { key: "archive", label: "Archive", disabled: true },
          { key: "delete", label: "Delete", disabled: true }
        ]}
      />
    );

    const trigger = screen.getByRole("button", { name: "All disabled" });
    fireEvent.click(trigger);
    const menu = screen.getByRole("menu", { name: "All disabled" });
    const menuItems = screen.getAllByRole("menuitem");

    menuItems.forEach((item) => {
      expect(item).toHaveAttribute("aria-disabled", "true");
      expect(item).toHaveAttribute("tabindex", "-1");
    });

    fireEvent.keyDown(menu, { key: "ArrowDown" });
    fireEvent.keyDown(menu, { key: "ArrowUp" });
    fireEvent.keyDown(menu, { key: "Home" });
    fireEvent.keyDown(menu, { key: "End" });
    fireEvent.keyDown(menu, { key: "PageDown" });
    fireEvent.keyDown(menu, { key: "PageUp" });
    fireEvent.keyDown(menu, { key: "Enter" });

    menuItems.forEach((item) => {
      expect(item).toHaveAttribute("tabindex", "-1");
    });
    expect(screen.getByRole("menu", { name: "All disabled" })).toBeInTheDocument();
    expect(onCloseReason).not.toHaveBeenCalled();
  });

  it("supports Enter/Space keyboard activation for menu items", () => {
    const onEnterSelect = vi.fn();
    const onSpaceSelect = vi.fn();

    render(
      <Dropdown
        label="Keyboard Select"
        items={[
          { key: "enter", label: "Run Enter", onSelect: onEnterSelect },
          { key: "space", label: "Run Space", onSelect: onSpaceSelect }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Keyboard Select" }));
    screen.getByRole("menu", { name: "Keyboard Select" });
    const enterItem = screen.getByRole("menuitem", { name: "Run Enter" });
    expect(enterItem).toHaveFocus();

    fireEvent.keyDown(enterItem, { key: "Enter" });
    expect(onEnterSelect).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu", { name: "Keyboard Select" })).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Keyboard Select" }));
    const reopenedMenu = screen.getByRole("menu", { name: "Keyboard Select" });
    fireEvent.keyDown(reopenedMenu, { key: "ArrowDown" });
    const spaceItem = screen.getByRole("menuitem", { name: "Run Space" });
    expect(spaceItem).toHaveFocus();
    fireEvent.keyDown(spaceItem, { key: "Spacebar" });
    expect(onSpaceSelect).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu", { name: "Keyboard Select" })).toBeNull();
  });

  it("deduplicates synthesized keyboard-origin click after menu-item Enter activation", () => {
    const onSelect = vi.fn();
    const onCloseReason = vi.fn();
    const onOpenChange = vi.fn();

    render(
      <Dropdown
        open
        label="Keyboard Click Dedupe"
        onOpenChange={onOpenChange}
        onCloseReason={onCloseReason}
        items={[
          { key: "run", label: "Run", onSelect },
          { key: "archive", label: "Archive" }
        ]}
      />
    );

    const runItem = screen.getByRole("menuitem", { name: "Run" });
    fireEvent.keyDown(runItem, { key: "Enter" });
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenLastCalledWith("item-select");
    expect(onOpenChange).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenLastCalledWith(false);

    fireEvent.click(runItem, { detail: 0 });
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledTimes(1);
  });

  it("expires menu-item keyboard click dedupe latch after window timeout", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-03-21T00:00:00.000Z"));

    try {
      const onSelect = vi.fn();

      render(
        <Dropdown
          open
          label="Keyboard Dedupe Timeout"
          onOpenChange={() => {}}
          items={[
            { key: "run", label: "Run", onSelect },
            { key: "archive", label: "Archive" }
          ]}
        />
      );

      const runItem = screen.getByRole("menuitem", { name: "Run" });
      fireEvent.keyDown(runItem, { key: "Enter" });
      expect(onSelect).toHaveBeenCalledTimes(1);

      vi.advanceTimersByTime(401);
      fireEvent.click(runItem, { detail: 0 });
      expect(onSelect).toHaveBeenCalledTimes(2);
    } finally {
      vi.useRealTimers();
    }
  });

  it("ignores modified menu navigation and activation keys", () => {
    const onSelect = vi.fn();

    render(
      <Dropdown
        label="Modifier Guard"
        items={[
          { key: "run", label: "Run", onSelect },
          { key: "archive", label: "Archive" },
          { key: "delete", label: "Delete" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Modifier Guard" }));
    const menu = screen.getByRole("menu", { name: "Modifier Guard" });
    const runItem = screen.getByRole("menuitem", { name: "Run" });
    expect(runItem).toHaveFocus();

    fireEvent.keyDown(menu, { key: "ArrowDown", ctrlKey: true });
    fireEvent.keyDown(menu, { key: "ArrowUp", metaKey: true });
    fireEvent.keyDown(menu, { key: "End", ctrlKey: true });
    fireEvent.keyDown(menu, { key: "PageDown", altKey: true });
    expect(runItem).toHaveFocus();

    fireEvent.keyDown(runItem, { key: "Enter", ctrlKey: true });
    fireEvent.keyDown(runItem, { key: "Spacebar", metaKey: true });
    expect(onSelect).not.toHaveBeenCalled();
    expect(screen.getByRole("menu", { name: "Modifier Guard" })).toBeInTheDocument();

    fireEvent.keyDown(runItem, { key: "Enter" });
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu", { name: "Modifier Guard" })).toBeNull();
  });

  it("ignores repeated activation keydown for menu items", () => {
    const onSelect = vi.fn();

    render(
      <Dropdown
        label="Repeat Guard"
        items={[
          { key: "run", label: "Run", onSelect },
          { key: "archive", label: "Archive" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Repeat Guard" }));
    const runItem = screen.getByRole("menuitem", { name: "Run" });
    expect(runItem).toHaveFocus();

    fireEvent.keyDown(runItem, { key: "Enter", repeat: true });
    expect(onSelect).not.toHaveBeenCalled();
    expect(screen.getByRole("menu", { name: "Repeat Guard" })).toBeInTheDocument();

    fireEvent.keyDown(runItem, { key: "Enter" });
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu", { name: "Repeat Guard" })).toBeNull();
  });

  it("exposes activation key hints only for actionable menu items", () => {
    render(
      <Dropdown
        label="Shortcut Hints"
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two", disabled: true }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Shortcut Hints" }));
    expect(screen.getByRole("menuitem", { name: "One" })).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    expect(screen.getByRole("menuitem", { name: "Two" })).not.toHaveAttribute("aria-keyshortcuts");
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

  it("supports buffered multi-character typeahead and textValue accent normalization", () => {
    render(
      <Dropdown
        label="Buffered"
        items={[
          { key: "duplicate", label: "Duplicate" },
          { key: "rename", label: "Rename" },
          { key: "resume", label: "Resume card", textValue: "Résumé" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Buffered" }));
    let menu = screen.getByRole("menu");

    fireEvent.keyDown(menu, { key: "r" });
    fireEvent.keyDown(menu, { key: "e" });
    fireEvent.keyDown(menu, { key: "n" });
    expect(screen.getByRole("menuitem", { name: "Rename" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "Escape" });
    fireEvent.click(screen.getByRole("button", { name: "Buffered" }));
    menu = screen.getByRole("menu");

    fireEvent.keyDown(menu, { key: "r" });
    fireEvent.keyDown(menu, { key: "e" });
    fireEvent.keyDown(menu, { key: "s" });
    expect(screen.getByRole("menuitem", { name: "Resume card" })).toHaveFocus();
  });

  it("supports typeahead with rich-text labels without requiring textValue", () => {
    render(
      <Dropdown
        label="Rich text"
        items={[
          { key: "duplicate", label: "Duplicate" },
          {
            key: "deploy",
            label: (
              <span>
                <span aria-hidden="true">🚀</span> Deploy
              </span>
            )
          },
          { key: "rename", label: "Rename" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Rich text" }));
    const menu = screen.getByRole("menu");

    fireEvent.keyDown(menu, { key: "d" });
    expect(screen.getByRole("menuitem", { name: "Deploy" })).toHaveFocus();
  });

  it("supports typeahead for non-text labels via inline aria-label without textValue", () => {
    render(
      <Dropdown
        label="Inline aria-label typeahead"
        items={[
          { key: "duplicate", label: "Duplicate" },
          {
            key: "settings",
            label: (
              <span aria-label="Settings">
                <span aria-hidden="true">⚙</span>
              </span>
            )
          },
          { key: "rename", label: "Rename" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Inline aria-label typeahead" }));
    const menu = screen.getByRole("menu");

    fireEvent.keyDown(menu, { key: "s" });
    expect(screen.getByRole("menuitem", { name: "Settings" })).toHaveFocus();
  });

  it("matches segmented rich-text labels when buffered query includes whitespace", () => {
    render(
      <Dropdown
        label="Segmented rich text"
        items={[
          { key: "duplicate", label: "Duplicate" },
          {
            key: "deploy-project",
            label: (
              <span>
                <span>Deploy</span>
                <span>Project</span>
              </span>
            )
          },
          { key: "preview", label: "Preview" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Segmented rich text" }));
    const menu = screen.getByRole("menu");

    for (const key of ["d", "e", "p", "l", "o", "y", " ", "p"]) {
      fireEvent.keyDown(menu, { key });
    }

    expect(screen.getByRole("menuitem", { name: "Deploy Project" })).toHaveFocus();
  });

  it("ignores typeahead key presses while IME composition is active", () => {
    render(
      <Dropdown
        label="IME Guard"
        items={[
          { key: "duplicate", label: "Duplicate" },
          { key: "archive", label: "Archive" },
          { key: "rename", label: "Rename" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "IME Guard" }));
    const menu = screen.getByRole("menu");
    expect(screen.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "a", isComposing: true, keyCode: 229, which: 229 });
    expect(screen.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();

    const legacyImeEvent = new KeyboardEvent("keydown", {
      key: "a",
      bubbles: true,
      cancelable: true
    });
    Object.defineProperty(legacyImeEvent, "keyCode", { value: 229 });
    menu.dispatchEvent(legacyImeEvent);
    expect(screen.getByRole("menuitem", { name: "Duplicate" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "a" });
    expect(screen.getByRole("menuitem", { name: "Archive" })).toHaveFocus();
  });

  it("cycles repeated typeahead key presses across matching items", () => {
    render(
      <Dropdown
        label="Cycle"
        items={[
          { key: "duplicate", label: "Duplicate" },
          { key: "archive", label: "Archive" },
          { key: "add-note", label: "Add note" },
          { key: "assign", label: "Assign" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Cycle" }));
    const menu = screen.getByRole("menu");

    fireEvent.keyDown(menu, { key: "a" });
    expect(screen.getByRole("menuitem", { name: "Archive" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "a" });
    expect(screen.getByRole("menuitem", { name: "Add note" })).toHaveFocus();

    fireEvent.keyDown(menu, { key: "a" });
    expect(screen.getByRole("menuitem", { name: "Assign" })).toHaveFocus();
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

  it("ignores blank triggerAriaLabel and keeps visible trigger text as accessible name", () => {
    render(
      <Dropdown
        label="Deployment actions"
        triggerAriaLabel="   "
        items={[
          { key: "ship", label: "Ship" },
          { key: "rollback", label: "Rollback" }
        ]}
      />
    );

    const trigger = screen.getByRole("button", { name: "Deployment actions" });
    expect(trigger).not.toHaveAttribute("aria-label");
    fireEvent.click(trigger);
    expect(screen.getByRole("menu", { name: "Deployment actions" })).toBeInTheDocument();
  });

  it("supports icon menuitem naming via ariaLabel", () => {
    render(
      <Dropdown
        label="Icon menuitems"
        items={[
          {
            key: "settings",
            label: <span aria-hidden="true">⚙</span>,
            ariaLabel: "Settings",
            textValue: "Settings"
          },
          { key: "archive", label: "Archive" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Icon menuitems" }));
    expect(screen.getByRole("menuitem", { name: "Settings" })).toBeInTheDocument();
  });

  it("ignores blank item ariaLabel and keeps visible label as accessible name", () => {
    render(
      <Dropdown
        label="Deployment actions"
        items={[
          { key: "archive", label: "Archive", ariaLabel: "   " },
          { key: "rollback", label: "Rollback" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Deployment actions" }));
    const archiveItem = screen.getByRole("menuitem", { name: "Archive" });
    expect(archiveItem).toBeInTheDocument();
    expect(archiveItem).not.toHaveAttribute("aria-label");
  });

  it("trims item ariaLabel before applying icon menuitem name", () => {
    render(
      <Dropdown
        label="Icon menuitems"
        items={[
          {
            key: "settings",
            label: <span aria-hidden="true">⚙</span>,
            ariaLabel: "  Settings  ",
            textValue: "Settings"
          }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Icon menuitems" }));
    const settingsItem = screen.getByRole("menuitem", { name: "Settings" });
    expect(settingsItem).toHaveAttribute("aria-label", "Settings");
  });

  it("supports configurable dismiss policies and event hooks", () => {
    const onEscapeKeyDown = vi.fn();
    const onPointerDownOutside = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Dropdown
        label="Policy"
        closeOnEscape={false}
        closeOnOutsidePointer={false}
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        onCloseReason={onCloseReason}
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Policy" }));
    expect(screen.getByRole("menu", { name: "Policy" })).toBeInTheDocument();
    expect(screen.getByRole("menu", { name: "Policy" })).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp Home End PageDown PageUp Tab"
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("menu", { name: "Policy" })).toBeInTheDocument();

    fireEvent.pointerDown(document.body);
    expect(onPointerDownOutside).toHaveBeenCalledTimes(1);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("menu", { name: "Policy" })).toBeInTheDocument();
  });

  it("keeps menu open when dismiss hooks call preventDefault", () => {
    const onEscapeKeyDown = vi.fn((event: KeyboardEvent) => {
      event.preventDefault();
    });
    const onPointerDownOutside = vi.fn((event: PointerEvent) => {
      event.preventDefault();
    });
    const onCloseReason = vi.fn();

    render(
      <Dropdown
        label="Guarded"
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        onCloseReason={onCloseReason}
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Guarded" }));
    expect(screen.getByRole("menu", { name: "Guarded" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("menu", { name: "Guarded" })).toBeInTheDocument();

    fireEvent.pointerDown(document.body);
    expect(onPointerDownOutside).toHaveBeenCalledTimes(1);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("menu", { name: "Guarded" })).toBeInTheDocument();
  });

  it("ignores modified Escape combinations for dismiss and hook callbacks", () => {
    const onEscapeKeyDown = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Dropdown
        label="Shortcut Guard"
        onEscapeKeyDown={onEscapeKeyDown}
        onCloseReason={onCloseReason}
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Shortcut Guard" }));
    expect(screen.getByRole("menu", { name: "Shortcut Guard" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape", ctrlKey: true });
    fireEvent.keyDown(document, { key: "Escape", altKey: true });
    fireEvent.keyDown(document, { key: "Escape", metaKey: true });

    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("menu", { name: "Shortcut Guard" })).toBeInTheDocument();
  });

  it("ignores repeated Escape keydown for dismiss and hook callbacks", () => {
    const onEscapeKeyDown = vi.fn();
    const onCloseReason = vi.fn();

    render(
      <Dropdown
        label="Repeat Guard"
        onEscapeKeyDown={onEscapeKeyDown}
        onCloseReason={onCloseReason}
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Repeat Guard" }));
    expect(screen.getByRole("menu", { name: "Repeat Guard" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape", repeat: true });
    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("menu", { name: "Repeat Guard" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenCalledWith("escape-key");
    expect(screen.queryByRole("menu", { name: "Repeat Guard" })).toBeNull();
  });

  it("skips escape callback and dismiss when Escape is preempted upstream", () => {
    const onEscapeKeyDown = vi.fn();
    const onCloseReason = vi.fn();
    const preemptEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", preemptEscape, true);
    render(
      <Dropdown
        label="Preempted"
        onEscapeKeyDown={onEscapeKeyDown}
        onCloseReason={onCloseReason}
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Preempted" }));
    expect(screen.getByRole("menu", { name: "Preempted" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onEscapeKeyDown).not.toHaveBeenCalled();
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("menu", { name: "Preempted" })).toBeInTheDocument();
    document.removeEventListener("keydown", preemptEscape, true);
  });

  it("emits trigger-click close reason when trigger toggles menu closed", () => {
    const onCloseReason = vi.fn();

    render(
      <Dropdown
        label="Trigger Toggle"
        onCloseReason={onCloseReason}
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    const trigger = screen.getByRole("button", { name: "Trigger Toggle" });
    fireEvent.click(trigger);
    expect(screen.getByRole("menu", { name: "Trigger Toggle" })).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.queryByRole("menu", { name: "Trigger Toggle" })).toBeNull();
    expect(onCloseReason).toHaveBeenCalledWith("trigger-click");
  });

  it("does not treat trigger pointerdown as outside dismiss", () => {
    const onCloseReason = vi.fn();
    const onPointerDownOutside = vi.fn();

    render(
      <Dropdown
        label="Trigger Pointer"
        onCloseReason={onCloseReason}
        onPointerDownOutside={onPointerDownOutside}
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    const trigger = screen.getByRole("button", { name: "Trigger Pointer" });
    fireEvent.click(trigger);
    expect(screen.getByRole("menu", { name: "Trigger Pointer" })).toBeInTheDocument();

    fireEvent.pointerDown(trigger);
    fireEvent.click(trigger);

    expect(onPointerDownOutside).not.toHaveBeenCalled();
    expect(onCloseReason).toHaveBeenCalledWith("trigger-click");
    expect(screen.queryByRole("menu", { name: "Trigger Pointer" })).toBeNull();
  });

  it("emits close callbacks in deterministic order for item-select and Tab dismiss", async () => {
    const events: string[] = [];
    render(
      <Dropdown
        label="Order"
        onCloseReason={(reason) => {
          events.push(`reason:${reason}`);
        }}
        onOpenChange={(nextOpen) => {
          events.push(`open:${String(nextOpen)}`);
        }}
        items={[
          {
            key: "one",
            label: "One",
            onSelect: () => {
              events.push("select");
            }
          },
          { key: "two", label: "Two" }
        ]}
      />
    );

    const trigger = screen.getByRole("button", { name: "Order" });
    fireEvent.click(trigger);
    events.length = 0;

    fireEvent.click(screen.getByRole("menuitem", { name: "One" }));
    expect(events).toEqual(["select", "reason:item-select", "open:false"]);

    fireEvent.click(trigger);
    events.length = 0;

    fireEvent.keyDown(screen.getByRole("menu", { name: "Order" }), { key: "Tab" });
    await waitFor(() => {
      expect(events).toEqual(["reason:tab-key", "open:false"]);
    });
  });

  it("closes menu on Tab without forcing trigger focus", async () => {
    const onCloseReason = vi.fn();

    render(
      <div>
        <Dropdown
          label="Keyboard exit"
          onCloseReason={onCloseReason}
          items={[
            { key: "one", label: "One" },
            { key: "two", label: "Two" }
          ]}
        />
        <button type="button">Next control</button>
      </div>
    );

    const trigger = screen.getByRole("button", { name: "Keyboard exit" });
    fireEvent.click(trigger);
    const menu = screen.getByRole("menu", { name: "Keyboard exit" });
    expect(menu).toBeInTheDocument();

    fireEvent.keyDown(menu, { key: "Tab" });
    await waitFor(() => {
      expect(screen.queryByRole("menu", { name: "Keyboard exit" })).toBeNull();
    });
    expect(trigger).not.toHaveFocus();
    expect(onCloseReason).toHaveBeenCalledWith("tab-key");
  });

  it("closes menu when Tab is pressed on trigger before menu item focus settles", async () => {
    const onCloseReason = vi.fn();

    render(
      <Dropdown
        label="Trigger tab dismiss"
        onCloseReason={onCloseReason}
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    const trigger = screen.getByRole("button", { name: "Trigger tab dismiss" });
    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(screen.getByRole("menu", { name: "Trigger tab dismiss" })).toBeInTheDocument();

    fireEvent.keyDown(trigger, { key: "Tab" });
    await waitFor(() => {
      expect(screen.queryByRole("menu", { name: "Trigger tab dismiss" })).toBeNull();
    });
    expect(onCloseReason).toHaveBeenCalledWith("tab-key");
  });

  it("moves focus to adjacent controls on Tab and Shift+Tab dismiss", () => {
    render(
      <div>
        <button type="button">Previous control</button>
        <Dropdown
          label="Tab focus transfer"
          items={[
            { key: "one", label: "One" },
            { key: "two", label: "Two" }
          ]}
        />
        <button type="button">Next control</button>
      </div>
    );

    const trigger = screen.getByRole("button", { name: "Tab focus transfer" });
    const previousControl = screen.getByRole("button", { name: "Previous control" });
    const nextControl = screen.getByRole("button", { name: "Next control" });

    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    const firstItem = screen.getByRole("menuitem", { name: "One" });
    expect(firstItem).toHaveFocus();

    fireEvent.keyDown(firstItem, { key: "Tab" });
    expect(screen.queryByRole("menu", { name: "Tab focus transfer" })).toBeNull();
    expect(nextControl).toHaveFocus();

    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(screen.getByRole("menuitem", { name: "One" })).toHaveFocus();

    fireEvent.keyDown(screen.getByRole("menuitem", { name: "One" }), { key: "Tab", shiftKey: true });
    expect(screen.queryByRole("menu", { name: "Tab focus transfer" })).toBeNull();
    expect(previousControl).toHaveFocus();
  });

  it("preserves outside pointer target focus when dismissing", () => {
    render(
      <div>
        <Dropdown
          label="Focus policy"
          items={[
            { key: "one", label: "One" },
            { key: "two", label: "Two" }
          ]}
        />
        <button type="button">Outside target</button>
      </div>
    );

    fireEvent.click(screen.getByRole("button", { name: "Focus policy" }));
    expect(screen.getByRole("menu", { name: "Focus policy" })).toBeInTheDocument();

    const outsideTarget = screen.getByRole("button", { name: "Outside target" });
    outsideTarget.focus();
    expect(outsideTarget).toHaveFocus();
    fireEvent.pointerDown(outsideTarget);

    expect(screen.queryByRole("menu", { name: "Focus policy" })).toBeNull();
    expect(outsideTarget).toHaveFocus();
  });

  it("isolates Escape and outside-pointer dismiss handling per owner document", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument;
    if (!iframeDocument) {
      throw new Error("expected iframe document to exist");
    }

    const iframeContainer = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(iframeContainer);

    let unmountMain: (() => void) | undefined;
    let unmountIframe: (() => void) | undefined;
    try {
      ({ unmount: unmountMain } = render(
        <div>
          <Dropdown
            label="Main dropdown"
            items={[
              { key: "main-one", label: "Main one" },
              { key: "main-two", label: "Main two" }
            ]}
          />
          <button type="button">Main outside target</button>
        </div>
      ));
      ({ unmount: unmountIframe } = render(
        <div>
          <Dropdown
            label="Iframe dropdown"
            items={[
              { key: "iframe-one", label: "Iframe one" },
              { key: "iframe-two", label: "Iframe two" }
            ]}
          />
          <button type="button">Iframe outside target</button>
        </div>,
        { container: iframeContainer, baseElement: iframeDocument.body }
      ));

      fireEvent.click(screen.getByRole("button", { name: "Main dropdown" }));
      fireEvent.click(within(iframeDocument.body).getByRole("button", { name: "Iframe dropdown" }));
      expect(screen.getByRole("menu", { name: "Main dropdown" })).toBeInTheDocument();
      expect(within(iframeDocument.body).getByRole("menu", { name: "Iframe dropdown" })).toBeInTheDocument();

      fireEvent.keyDown(document, { key: "Escape" });
      expect(screen.queryByRole("menu", { name: "Main dropdown" })).toBeNull();
      expect(within(iframeDocument.body).getByRole("menu", { name: "Iframe dropdown" })).toBeInTheDocument();

      fireEvent.pointerDown(within(iframeDocument.body).getByRole("button", { name: "Iframe outside target" }));
      expect(within(iframeDocument.body).queryByRole("menu", { name: "Iframe dropdown" })).toBeNull();
    } finally {
      unmountIframe?.();
      unmountMain?.();
      iframe.remove();
    }
  });

  it("dismisses nested dropdown layer before parent popover layer", () => {
    render(
      <Popover triggerLabel="Outer container" contentLabel="Outer container content">
        <Dropdown
          label="Inner menu"
          items={[
            { key: "duplicate", label: "Duplicate" },
            { key: "archive", label: "Archive" }
          ]}
        />
      </Popover>
    );

    const outerTrigger = screen.getByRole("button", { name: "Outer container" });
    fireEvent.click(outerTrigger);
    expect(screen.getByRole("dialog", { name: "Outer container content" })).toBeInTheDocument();

    const innerTrigger = screen.getByRole("button", { name: "Inner menu" });
    fireEvent.click(innerTrigger);
    expect(screen.getByRole("menu", { name: "Inner menu" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("menu", { name: "Inner menu" })).toBeNull();
    expect(screen.getByRole("dialog", { name: "Outer container content" })).toBeInTheDocument();
    expect(innerTrigger).toHaveFocus();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Outer container content" })).toBeNull();
    expect(outerTrigger).toHaveFocus();
  });

  it("dismisses nested dropdown layer before parent popover layer on outside pointer", () => {
    render(
      <Popover triggerLabel="Outer container" contentLabel="Outer container content">
        <Dropdown
          label="Inner menu"
          items={[
            { key: "duplicate", label: "Duplicate" },
            { key: "archive", label: "Archive" }
          ]}
        />
      </Popover>
    );

    const outerTrigger = screen.getByRole("button", { name: "Outer container" });
    fireEvent.click(outerTrigger);
    expect(screen.getByRole("dialog", { name: "Outer container content" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Inner menu" }));
    expect(screen.getByRole("menu", { name: "Inner menu" })).toBeInTheDocument();

    fireEvent.pointerDown(document.body);
    expect(screen.queryByRole("menu", { name: "Inner menu" })).toBeNull();
    expect(screen.getByRole("dialog", { name: "Outer container content" })).toBeInTheDocument();

    fireEvent.pointerDown(document.body);
    expect(screen.queryByRole("dialog", { name: "Outer container content" })).toBeNull();
  });

  it("ignores non-primary outside pointer interactions", () => {
    const onCloseReason = vi.fn();

    render(
      <Dropdown
        label="Ignore right click"
        onCloseReason={onCloseReason}
        items={[
          { key: "one", label: "One" },
          { key: "two", label: "Two" }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Ignore right click" }));
    expect(screen.getByRole("menu", { name: "Ignore right click" })).toBeInTheDocument();

    dispatchNonPrimaryPointerDown(document.body);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("menu", { name: "Ignore right click" })).toBeInTheDocument();
  });
});
