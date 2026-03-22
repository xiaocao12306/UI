import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders controlled state and emits checked changes", () => {
    const onCheckedChange = vi.fn();
    render(<Switch label="Live updates" checked onCheckedChange={onCheckedChange} />);

    const control = screen.getByRole("switch", { name: "Live updates" });
    expect(control).toHaveAttribute("aria-checked", "true");

    fireEvent.click(control);
    expect(onCheckedChange).toHaveBeenCalledWith(false);
  });

  it("marks track and thumb transitions for reduced-motion fallback", () => {
    render(<Switch label="Reduced motion switch" checked={false} onCheckedChange={() => {}} />);

    const control = screen.getByRole("switch", { name: "Reduced motion switch" });
    const reducedMotionNodes = control.querySelectorAll('[data-aurora-reduced-motion="transition"]');
    expect(reducedMotionNodes).toHaveLength(2);
  });

  it("supports uncontrolled behavior with defaultChecked", () => {
    render(<Switch label="Auto-refresh" defaultChecked={false} />);
    const control = screen.getByRole("switch", { name: "Auto-refresh" });

    expect(control).toHaveAttribute("aria-checked", "false");
    fireEvent.click(screen.getByText("Auto-refresh"));
    expect(control).toHaveAttribute("aria-checked", "true");
  });

  it("supports keyboard toggle with space", () => {
    const onCheckedChange = vi.fn();
    render(<Switch label="Keyboard toggle" checked={false} onCheckedChange={onCheckedChange} />);

    const control = screen.getByRole("switch", { name: "Keyboard toggle" });
    fireEvent.keyDown(control, { key: " " });

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("exposes keyboard pressed-state feedback only while activation key is held", () => {
    const onCheckedChange = vi.fn();
    render(<Switch label="Keyboard pressed switch" checked={false} onCheckedChange={onCheckedChange} />);

    const control = screen.getByRole("switch", { name: "Keyboard pressed switch" });
    fireEvent.keyDown(control, { key: " " });
    expect(control).toHaveAttribute("data-pressed", "true");
    expect(onCheckedChange).toHaveBeenCalledWith(true);

    fireEvent.keyUp(control, { key: " " });
    expect(control).not.toHaveAttribute("data-pressed");
  });

  it("supports keyboard toggle with Space alias key values", () => {
    const onCheckedChange = vi.fn();
    render(<Switch label="Space alias toggle" checked={false} onCheckedChange={onCheckedChange} />);

    const control = screen.getByRole("switch", { name: "Space alias toggle" });
    fireEvent.keyDown(control, { key: "Space" });
    fireEvent.keyDown(control, { key: "Spacebar" });

    expect(onCheckedChange).toHaveBeenCalledTimes(2);
  });

  it("ignores modified keyboard toggle combinations", () => {
    const onCheckedChange = vi.fn();
    render(<Switch label="Modified keyboard toggle" checked={false} onCheckedChange={onCheckedChange} />);

    const control = screen.getByRole("switch", { name: "Modified keyboard toggle" });
    fireEvent.keyDown(control, { key: " ", ctrlKey: true });
    fireEvent.keyDown(control, { key: "Space", metaKey: true });
    fireEvent.keyDown(control, { key: "Spacebar", altKey: true });

    expect(onCheckedChange).not.toHaveBeenCalled();
    expect(control).not.toHaveAttribute("data-pressed");
  });

  it("ignores IME composition activation keys for toggle and pressed-state feedback", () => {
    const onCheckedChange = vi.fn();
    render(<Switch label="IME guarded switch" checked={false} onCheckedChange={onCheckedChange} />);

    const control = screen.getByRole("switch", { name: "IME guarded switch" });
    fireEvent.keyDown(control, { key: " ", isComposing: true, keyCode: 229, which: 229 });
    fireEvent.keyDown(control, { key: " ", keyCode: 229, which: 229 });

    expect(onCheckedChange).not.toHaveBeenCalled();
    expect(control).toHaveAttribute("aria-checked", "false");
    expect(control).not.toHaveAttribute("data-pressed");
  });

  it("does not toggle when click handler prevents default", () => {
    const onCheckedChange = vi.fn();
    render(
      <Switch
        label="Guarded toggle"
        checked={false}
        onCheckedChange={onCheckedChange}
        onClick={(event) => {
          event.preventDefault();
        }}
      />
    );

    const control = screen.getByRole("switch", { name: "Guarded toggle" });
    fireEvent.click(control);

    expect(control).toHaveAttribute("aria-checked", "false");
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it("applies pressed state only for plain primary mouse button", () => {
    render(<Switch label="Pointer semantics" defaultChecked={false} />);
    const control = screen.getByRole("switch", { name: "Pointer semantics" });

    fireEvent.mouseDown(control, { button: 1 });
    expect(control).not.toHaveAttribute("data-pressed");

    fireEvent.mouseDown(control, { button: 0, ctrlKey: true });
    expect(control).not.toHaveAttribute("data-pressed");

    fireEvent.mouseDown(control, { button: 0 });
    expect(control).toHaveAttribute("data-pressed", "true");

    fireEvent.pointerCancel(control);
    expect(control).not.toHaveAttribute("data-pressed");

    fireEvent.pointerDown(control, { pointerType: "touch", button: 0 });
    expect(control).toHaveAttribute("data-pressed", "true");

    fireEvent.pointerUp(control, { pointerType: "touch", button: 0 });
    expect(control).not.toHaveAttribute("data-pressed");

    fireEvent.pointerDown(control, { pointerType: "touch", button: -1 });
    expect(control).toHaveAttribute("data-pressed", "true");

    fireEvent.pointerUp(control, { pointerType: "touch", button: -1 });
    expect(control).not.toHaveAttribute("data-pressed");

    fireEvent.mouseDown(control, { button: 0 });
    expect(control).toHaveAttribute("data-pressed", "true");

    fireEvent.mouseUp(control, { button: 1 });
    expect(control).toHaveAttribute("data-pressed", "true");

    fireEvent.mouseUp(control, { button: 0 });
    expect(control).not.toHaveAttribute("data-pressed");
  });

  it("tracks keyboard focus-visible intent and clears it on plain primary pointer interaction", () => {
    render(<Switch label="Focus-visible switch" defaultChecked={false} />);
    const control = screen.getByRole("switch", { name: "Focus-visible switch" });

    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(control);
    expect(control).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(control, { button: 0, ctrlKey: true });
    expect(control).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(control, { button: 0 });
    expect(control).not.toHaveAttribute("data-focus-visible");
  });

  it("tracks keyboard focus intent from ownerDocument when focus-visible fallback is used", () => {
    render(
      <div>
        <button type="button">Before switch</button>
        <Switch label="Document intent switch" />
      </div>
    );

    const control = screen.getByRole("switch", { name: "Document intent switch" });
    const beforeButton = screen.getByRole("button", { name: "Before switch" });
    const matchesSpy = vi.spyOn(control, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(control);
    expect(control).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(control);
    fireEvent.mouseDown(document.body, { button: 2 });
    fireEvent.focus(control);
    expect(control).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(control);
    fireEvent.mouseDown(document.body, { button: 0, ctrlKey: true });
    fireEvent.focus(control);
    expect(control).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(control);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(control);
    expect(control).not.toHaveAttribute("data-focus-visible");

    matchesSpy.mockRestore();
  });

  it("tracks ownerDocument keyboard focus intent for iframe-hosted renders", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const secondaryDocument = iframe.contentDocument;
    const secondaryWindow = iframe.contentWindow;

    if (!secondaryDocument || !secondaryWindow) {
      throw new Error("expected iframe document/window to exist");
    }

    const secondaryContainer = secondaryDocument.createElement("div");
    secondaryDocument.body.appendChild(secondaryContainer);

    const { getByRole } = render(<Switch label="Iframe switch" />, {
      container: secondaryContainer,
      baseElement: secondaryDocument.body
    });
    const control = getByRole("switch", { name: "Iframe switch" });
    const matchesSpy = vi.spyOn(control, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    try {
      secondaryDocument.dispatchEvent(
        new secondaryWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      fireEvent.focus(control);
      expect(control).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(control);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0, ctrlKey: true })
      );
      fireEvent.focus(control);
      expect(control).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(control);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0 })
      );
      fireEvent.focus(control);
      expect(control).not.toHaveAttribute("data-focus-visible");
    } finally {
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });

  it("does not toggle when disabled", () => {
    const onCheckedChange = vi.fn();
    render(<Switch label="Readonly mode" checked onCheckedChange={onCheckedChange} disabled />);

    const control = screen.getByRole("switch", { name: "Readonly mode" });
    fireEvent.click(control);

    expect(control).toBeDisabled();
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it("wires invalid and helper semantics", () => {
    render(
      <Switch
        label="Policy acknowledgement"
        description="Required before continuing."
        invalid
        defaultChecked={false}
      />
    );

    const control = screen.getByRole("switch", { name: "Policy acknowledgement" });
    const helper = screen.getByText("Required before continuing.");

    expect(control).toHaveAttribute("aria-invalid", "true");
    expect(control).toHaveAttribute("aria-describedby", helper.getAttribute("id"));
  });

  it("accepts invalid semantics from aria-invalid", () => {
    render(<Switch label="Aria invalid switch" aria-invalid="true" />);
    expect(screen.getByRole("switch", { name: "Aria invalid switch" })).toHaveAttribute("aria-invalid", "true");
  });

  it("exposes default keyboard shortcut hints only when actionable", () => {
    render(
      <div>
        <Switch label="Actionable switch" />
        <Switch label="Disabled switch" disabled />
      </div>
    );

    expect(screen.getByRole("switch", { name: "Actionable switch" })).toHaveAttribute("aria-keyshortcuts", "Space");
    expect(screen.getByRole("switch", { name: "Disabled switch" })).not.toHaveAttribute("aria-keyshortcuts");
  });

  it("accepts explicit shortcut hints and ignores blank overrides", () => {
    render(
      <div>
        <Switch label="Custom shortcut switch" aria-keyshortcuts="Space Enter" />
        <Switch label="Blank shortcut switch" aria-keyshortcuts="   " />
      </div>
    );

    expect(screen.getByRole("switch", { name: "Custom shortcut switch" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Space Enter"
    );
    expect(screen.getByRole("switch", { name: "Blank shortcut switch" })).toHaveAttribute("aria-keyshortcuts", "Space");
  });

  it("preserves grammar invalid semantics from aria-invalid", () => {
    render(<Switch label="Grammar switch" aria-invalid="grammar" />);
    expect(screen.getByRole("switch", { name: "Grammar switch" })).toHaveAttribute("aria-invalid", "grammar");
  });

  it("treats aria-invalid=false as valid", () => {
    render(<Switch label="Valid switch" aria-invalid="false" />);
    expect(screen.getByRole("switch", { name: "Valid switch" })).not.toHaveAttribute("aria-invalid");
  });

  it("ignores blank aria-label and keeps visible label as accessible name", () => {
    render(<Switch label="Release gate" aria-label="   " />);

    const control = screen.getByRole("switch", { name: "Release gate" });
    expect(control).not.toHaveAttribute("aria-label");
  });

  it("ignores blank aria-labelledby and keeps visible label as accessible name", () => {
    render(<Switch label="Release gate" aria-labelledby="   " />);

    const control = screen.getByRole("switch", { name: "Release gate" });
    expect(control).toHaveAttribute("aria-labelledby");
    expect((control.getAttribute("aria-labelledby") ?? "").trim().length).toBeGreaterThan(0);
  });

  it("prioritizes aria-labelledby over aria-label when both are provided", () => {
    render(
      <div>
        <p id="switch-name-source">Switch heading</p>
        <Switch label="Release gate" aria-label="Fallback switch name" aria-labelledby="switch-name-source" />
      </div>
    );

    const control = screen.getByRole("switch", { name: "Switch heading" });
    expect(control).toHaveAttribute("aria-labelledby", "switch-name-source");
    expect(control).not.toHaveAttribute("aria-label");
  });
});
