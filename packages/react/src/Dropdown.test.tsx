import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Dropdown } from "./Dropdown";

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

    fireEvent.click(trigger);
    const menu = screen.getByRole("menu", { name: "Actions" });
    expect(trigger).toHaveAttribute("aria-controls", menu.id);
    fireEvent.click(screen.getByRole("menuitem", { name: "Duplicate" }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onCloseReason).toHaveBeenCalledWith("item-select");
    expect(screen.queryByRole("menu")).toBeNull();
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
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("menu")).toBeNull();
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

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onEscapeKeyDown).toHaveBeenCalledTimes(1);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("menu", { name: "Policy" })).toBeInTheDocument();

    fireEvent.pointerDown(document.body);
    expect(onPointerDownOutside).toHaveBeenCalledTimes(1);
    expect(onCloseReason).not.toHaveBeenCalled();
    expect(screen.getByRole("menu", { name: "Policy" })).toBeInTheDocument();
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

  it("closes menu on Tab without forcing trigger focus", () => {
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
    expect(screen.queryByRole("menu", { name: "Keyboard exit" })).toBeNull();
    expect(trigger).not.toHaveFocus();
    expect(onCloseReason).toHaveBeenCalledWith("tab-key");
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

function dispatchNonPrimaryPointerDown(target: EventTarget) {
  const event = new Event("pointerdown", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "button", { configurable: true, value: 2 });
  Object.defineProperty(event, "buttons", { configurable: true, value: 2 });
  Object.defineProperty(event, "pointerType", { configurable: true, value: "mouse" });
  target.dispatchEvent(event);
}
