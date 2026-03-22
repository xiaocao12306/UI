import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders text content", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();
  });

  it("shows loading state and disables interactions", () => {
    render(<Button loading loadingText="Submitting">Submit</Button>);
    const button = screen.getByRole("button", { name: "Submitting" });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toHaveAttribute("data-loading", "true");
  });

  it("marks button transitions for reduced-motion fallback", () => {
    render(<Button>Publish</Button>);
    expect(screen.getByRole("button", { name: "Publish" })).toHaveAttribute("data-aurora-reduced-motion", "transition");
  });

  it("marks loading spinner for reduced-motion fallback", () => {
    render(<Button loading>Submit</Button>);
    const spinner = screen.getByRole("button", { name: "Submit" }).querySelector(
      '[data-aurora-reduced-motion~="animate"]'
    );

    expect(spinner).not.toBeNull();
    if (spinner) {
      expect(spinner).toHaveStyle({ animation: "aurora-spin 0.8s linear infinite" });
    }
  });

  it("uses button type by default to avoid unintended form submit", () => {
    render(<Button>Action</Button>);
    expect(screen.getByRole("button", { name: "Action" })).toHaveAttribute("type", "button");
  });

  it("applies focus ring when focus-visible is true", () => {
    render(<Button>Focus me</Button>);
    const button = screen.getByRole("button", { name: "Focus me" });
    const matchesSpy = vi.spyOn(button, "matches").mockImplementation((selector) => selector === ":focus-visible");

    fireEvent.focus(button);
    expect(button.getAttribute("style")).toContain("var(--aurora-focus-ring)");
    matchesSpy.mockRestore();
  });

  it("does not apply focus ring for pointer-driven focus", () => {
    render(<Button>Pointer Focus</Button>);
    const button = screen.getByRole("button", { name: "Pointer Focus" });
    const nativeMatches = button.matches.bind(button);
    const matchesSpy = vi.spyOn(button, "matches").mockImplementation((selector) => {
      if (selector === ":focus-visible") {
        return false;
      }

      return nativeMatches(selector);
    });

    fireEvent.mouseDown(button, { button: 0 });
    fireEvent.focus(button);
    expect(button.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");
    matchesSpy.mockRestore();
  });

  it("preserves focus ring on non-primary pointer down", () => {
    render(<Button>Secondary Pointer Focus</Button>);
    const button = screen.getByRole("button", { name: "Secondary Pointer Focus" });
    const nativeMatches = button.matches.bind(button);
    const matchesSpy = vi.spyOn(button, "matches").mockImplementation((selector) => {
      if (selector === ":focus-visible") {
        return true;
      }

      return nativeMatches(selector);
    });

    fireEvent.focus(button);
    expect(button.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.mouseDown(button, { button: 2 });
    expect(button.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.mouseDown(button, { button: 0, ctrlKey: true });
    expect(button.getAttribute("style")).toContain("var(--aurora-focus-ring)");
    matchesSpy.mockRestore();
  });

  it("tracks keyboard focus intent from ownerDocument when focus-visible fallback is used", () => {
    render(
      <div>
        <button type="button">Before action</button>
        <Button>Document intent button</Button>
      </div>
    );

    const button = screen.getByRole("button", { name: "Document intent button" });
    const beforeButton = screen.getByRole("button", { name: "Before action" });
    const matchesSpy = vi.spyOn(button, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(button);
    expect(button.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.blur(button);
    fireEvent.mouseDown(document.body, { button: 2 });
    fireEvent.focus(button);
    expect(button.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.blur(button);
    fireEvent.mouseDown(document.body, { button: 0, ctrlKey: true });
    fireEvent.focus(button);
    expect(button.getAttribute("style")).toContain("var(--aurora-focus-ring)");

    fireEvent.blur(button);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(button);
    expect(button.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");

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

    const { getByRole } = render(<Button>Iframe action</Button>, {
      container: secondaryContainer,
      baseElement: secondaryDocument.body
    });

    const button = getByRole("button", { name: "Iframe action" });
    const matchesSpy = vi.spyOn(button, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    try {
      secondaryDocument.dispatchEvent(
        new secondaryWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      fireEvent.focus(button);
      expect(button.getAttribute("style")).toContain("var(--aurora-focus-ring)");

      fireEvent.blur(button);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0, ctrlKey: true })
      );
      fireEvent.focus(button);
      expect(button.getAttribute("style")).toContain("var(--aurora-focus-ring)");

      fireEvent.blur(button);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0 })
      );
      fireEvent.focus(button);
      expect(button.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");
    } finally {
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });

  it("supports Space and legacy Spacebar key values for pressed-state feedback", () => {
    render(<Button>Space key aliases</Button>);
    const button = screen.getByRole("button", { name: "Space key aliases" });

    fireEvent.keyDown(button, { key: "Space" });
    expect(button.getAttribute("style")).toContain("translateY(1px)");
    fireEvent.keyUp(button, { key: "Space" });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");

    fireEvent.keyDown(button, { key: "Spacebar" });
    expect(button.getAttribute("style")).toContain("translateY(1px)");

    fireEvent.keyUp(button, { key: "Spacebar" });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");

    fireEvent.keyDown(button, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");

    fireEvent.keyDown(button, { key: "Enter", keyCode: 229, which: 229 });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");
  });

  it("ignores modified activation chords for pressed feedback while keeping Shift activation", () => {
    render(<Button>Shortcut Guard</Button>);
    const button = screen.getByRole("button", { name: "Shortcut Guard" });

    fireEvent.keyDown(button, { key: "Enter", ctrlKey: true });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");

    fireEvent.keyDown(button, { key: "Enter", metaKey: true });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");

    fireEvent.keyDown(button, { key: "Spacebar", altKey: true });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");

    fireEvent.keyDown(button, { key: "Enter", shiftKey: true });
    expect(button.getAttribute("style")).toContain("translateY(1px)");
    fireEvent.keyUp(button, { key: "Enter", shiftKey: true });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");
  });

  it("only uses primary mouse button for pressed feedback lifecycle", () => {
    render(<Button>Primary Only</Button>);
    const button = screen.getByRole("button", { name: "Primary Only" });

    fireEvent.mouseDown(button, { button: 2 });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");

    fireEvent.mouseDown(button, { button: 0, ctrlKey: true });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");

    fireEvent.mouseDown(button, { button: 0 });
    expect(button.getAttribute("style")).toContain("translateY(1px)");

    fireEvent.pointerCancel(button);
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");

    fireEvent.pointerDown(button, { pointerType: "touch", button: 0 });
    expect(button.getAttribute("style")).toContain("translateY(1px)");

    fireEvent.pointerUp(button, { pointerType: "touch", button: 0 });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");

    fireEvent.pointerDown(button, { pointerType: "touch", button: -1 });
    expect(button.getAttribute("style")).toContain("translateY(1px)");
    fireEvent.pointerUp(button, { pointerType: "touch", button: -1 });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");

    fireEvent.mouseDown(button, { button: 0 });
    expect(button.getAttribute("style")).toContain("translateY(1px)");

    fireEvent.mouseUp(button, { button: 2 });
    expect(button.getAttribute("style")).toContain("translateY(1px)");

    fireEvent.mouseUp(button, { button: 0 });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");
  });

  it("clears pressed visual state when loading toggles on", () => {
    const { rerender } = render(<Button>Async Action</Button>);
    const button = screen.getByRole("button", { name: "Async Action" });

    fireEvent.keyDown(button, { key: " " });
    expect(button.getAttribute("style")).toContain("translateY(1px)");

    rerender(<Button loading>Async Action</Button>);
    const loadingButton = screen.getByRole("button", { name: "Async Action" });
    expect(loadingButton.getAttribute("style")).not.toContain("translateY(1px)");
    expect(loadingButton).toHaveAttribute("data-loading", "true");
  });

  it("clears pressed visual state when disabled toggles on", () => {
    const { rerender } = render(<Button>Disable During Press</Button>);
    const button = screen.getByRole("button", { name: "Disable During Press" });

    fireEvent.keyDown(button, { key: "Enter" });
    expect(button.getAttribute("style")).toContain("translateY(1px)");

    rerender(<Button disabled>Disable During Press</Button>);
    const disabledButton = screen.getByRole("button", { name: "Disable During Press" });
    expect(disabledButton.getAttribute("style")).not.toContain("translateY(1px)");
    expect(disabledButton).toBeDisabled();
  });

  it("warns in development when icon-only button has no accessible name", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    render(
      <Button>
        <span aria-hidden="true">+</span>
      </Button>
    );

    expect(warnSpy).toHaveBeenCalledWith(
      "[aurora-ui/Button] Icon-only usage requires an accessible name. Provide aria-label or aria-labelledby."
    );
    warnSpy.mockRestore();
  });

  it("does not warn for icon-only button when aria-label is provided", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    render(
      <Button aria-label="Add release note">
        <span aria-hidden="true">+</span>
      </Button>
    );

    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it("warns for icon-only button when aria-label is empty", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    render(
      <Button aria-label="   ">
        <span aria-hidden="true">+</span>
      </Button>
    );

    expect(warnSpy).toHaveBeenCalledWith(
      "[aurora-ui/Button] Icon-only usage requires an accessible name. Provide aria-label or aria-labelledby."
    );
    warnSpy.mockRestore();
  });

  it("ignores blank aria-label and keeps text-content accessible name", () => {
    render(<Button aria-label="   ">Publish</Button>);

    const button = screen.getByRole("button", { name: "Publish" });
    expect(button).not.toHaveAttribute("aria-label");
  });

  it("ignores blank aria-labelledby and keeps text-content accessible name", () => {
    render(<Button aria-labelledby="   ">Publish</Button>);

    const button = screen.getByRole("button", { name: "Publish" });
    expect(button).not.toHaveAttribute("aria-labelledby");
  });

  it("does not warn for icon-only button when rich child exposes inline aria-label", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    render(
      <Button>
        <span aria-label="Add release note">
          <span aria-hidden="true">+</span>
        </span>
      </Button>
    );

    expect(warnSpy).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Add release note" })).toBeInTheDocument();
    warnSpy.mockRestore();
  });
});
