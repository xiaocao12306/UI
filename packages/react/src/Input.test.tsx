import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with placeholder text", () => {
    render(<Input placeholder="Search" />);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("data-aurora-input", "true");
    expect(input).toHaveAttribute("data-aurora-reduced-motion", "transition");
  });

  it("applies invalid accessibility attributes", () => {
    render(<Input invalid aria-label="Email" />);
    const input = screen.getByRole("textbox", { name: "Email" });

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("data-invalid", "true");
  });

  it("treats aria-invalid=false as valid", () => {
    render(<Input aria-label="Username" aria-invalid="false" />);
    const input = screen.getByRole("textbox", { name: "Username" });

    expect(input).not.toHaveAttribute("aria-invalid");
    expect(input).not.toHaveAttribute("data-invalid");
  });

  it("treats aria-invalid=grammar as invalid", () => {
    render(<Input aria-label="Commit message" aria-invalid="grammar" />);
    const input = screen.getByRole("textbox", { name: "Commit message" });

    expect(input).toHaveAttribute("aria-invalid", "grammar");
    expect(input).toHaveAttribute("data-invalid", "true");
  });

  it("tracks focus state for visual feedback", () => {
    render(<Input aria-label="Query" />);
    const input = screen.getByRole("textbox", { name: "Query" });

    fireEvent.focus(input);
    expect(input).toHaveAttribute("data-focused", "true");

    fireEvent.blur(input);
    expect(input).not.toHaveAttribute("data-focused");
  });

  it("respects disabled behavior", () => {
    render(<Input aria-label="Disabled field" disabled />);
    expect(screen.getByRole("textbox", { name: "Disabled field" })).toBeDisabled();
  });

  it("forwards readonly semantics to the native input", () => {
    render(<Input aria-label="Read only field" readOnly />);
    const input = screen.getByRole("textbox", { name: "Read only field" });

    expect(input).toHaveAttribute("readonly");

    fireEvent.mouseDown(input, { button: 0 });
    expect(input).not.toHaveAttribute("data-active");

    fireEvent.keyDown(input, { key: "Enter" });
    expect(input).not.toHaveAttribute("data-active");
  });

  it("tracks hover and active interaction states", () => {
    render(<Input aria-label="Stateful field" />);
    const input = screen.getByRole("textbox", { name: "Stateful field" });

    fireEvent.mouseEnter(input);
    expect(input).toHaveAttribute("data-hovered", "true");

    fireEvent.mouseDown(input, { button: 0 });
    expect(input).toHaveAttribute("data-active", "true");

    fireEvent.mouseUp(input, { button: 0 });
    expect(input).not.toHaveAttribute("data-active");

    fireEvent.mouseLeave(input);
    expect(input).not.toHaveAttribute("data-hovered");
  });

  it("tracks keyboard focus-visible and enter active state", () => {
    render(<Input aria-label="Keyboard field" />);
    const input = screen.getByRole("textbox", { name: "Keyboard field" });

    fireEvent.keyDown(input, { key: "Tab" });
    fireEvent.focus(input);
    expect(input).toHaveAttribute("data-focus-visible", "true");

    fireEvent.keyDown(input, { key: "Enter" });
    expect(input).toHaveAttribute("data-active", "true");

    fireEvent.keyUp(input, { key: "Enter" });
    expect(input).not.toHaveAttribute("data-active");
  });

  it("ignores enter active feedback while IME composition is active", () => {
    render(<Input aria-label="IME field" />);
    const input = screen.getByRole("textbox", { name: "IME field" });

    fireEvent.keyDown(input, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    expect(input).not.toHaveAttribute("data-active");

    fireEvent.keyDown(input, { key: "Enter", keyCode: 229, which: 229 });
    expect(input).not.toHaveAttribute("data-active");

    fireEvent.keyDown(input, { key: "Enter" });
    expect(input).toHaveAttribute("data-active", "true");

    fireEvent.keyUp(input, { key: "Enter" });
    expect(input).not.toHaveAttribute("data-active");
  });

  it("ignores modified Enter activation while keeping Shift+Enter active feedback", () => {
    render(<Input aria-label="Modified enter field" />);
    const input = screen.getByRole("textbox", { name: "Modified enter field" });

    fireEvent.keyDown(input, { key: "Enter", ctrlKey: true });
    expect(input).not.toHaveAttribute("data-active");

    fireEvent.keyDown(input, { key: "Enter", metaKey: true });
    expect(input).not.toHaveAttribute("data-active");

    fireEvent.keyDown(input, { key: "Enter", altKey: true });
    expect(input).not.toHaveAttribute("data-active");

    fireEvent.keyDown(input, { key: "Enter", shiftKey: true });
    expect(input).toHaveAttribute("data-active", "true");
    fireEvent.keyUp(input, { key: "Enter", shiftKey: true });
    expect(input).not.toHaveAttribute("data-active");
  });

  it("retains focus-visible state on non-primary pointer interaction", () => {
    render(<Input aria-label="Pointer focus input" />);
    const input = screen.getByRole("textbox", { name: "Pointer focus input" });

    fireEvent.keyDown(input, { key: "Tab" });
    fireEvent.focus(input);
    expect(input).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(input, { button: 1 });
    expect(input).toHaveAttribute("data-focus-visible", "true");

    fireEvent.pointerDown(input, { button: 2 });
    expect(input).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(input, { button: 0 });
    expect(input).not.toHaveAttribute("data-focus-visible");
  });

  it("tracks keyboard focus intent from ownerDocument when focus-visible fallback is used", () => {
    render(
      <div>
        <button type="button">Before input</button>
        <Input aria-label="Document intent input" />
      </div>
    );

    const input = screen.getByRole("textbox", { name: "Document intent input" });
    const beforeButton = screen.getByRole("button", { name: "Before input" });
    const matchesSpy = vi.spyOn(input, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(input);
    expect(input).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(input);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(input);
    expect(input).not.toHaveAttribute("data-focus-visible");

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

    const { getByRole } = render(<Input aria-label="Iframe input" />, {
      container: secondaryContainer,
      baseElement: secondaryDocument.body
    });
    const input = getByRole("textbox", { name: "Iframe input" });
    const matchesSpy = vi.spyOn(input, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    try {
      secondaryDocument.dispatchEvent(
        new secondaryWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      fireEvent.focus(input);
      expect(input).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(input);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0 })
      );
      fireEvent.focus(input);
      expect(input).not.toHaveAttribute("data-focus-visible");
    } finally {
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });

  it("suppresses hover and active states when disabled", () => {
    render(<Input aria-label="Disabled interactions" disabled />);
    const input = screen.getByRole("textbox", { name: "Disabled interactions" });

    fireEvent.mouseEnter(input);
    fireEvent.mouseDown(input, { button: 0 });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(input).toHaveAttribute("data-disabled", "true");
    expect(input).not.toHaveAttribute("data-hovered");
    expect(input).not.toHaveAttribute("data-active");
  });

  it("uses invalid focus-visible ring token for keyboard focus", () => {
    render(<Input aria-label="Invalid focus ring" invalid />);
    const input = screen.getByRole("textbox", { name: "Invalid focus ring" });

    fireEvent.keyDown(input, { key: "Tab" });
    fireEvent.focus(input);

    expect(input).toHaveAttribute("data-focus-visible", "true");
    expect(input.style.borderColor).toBe("var(--aurora-color-red-500)");
    expect(input.style.boxShadow).toContain("--aurora-color-red-500");
  });

  it("ignores blank aria-label and falls back to associated label naming", () => {
    render(
      <>
        <label htmlFor="release-scope">Release scope</label>
        <Input id="release-scope" aria-label="   " />
      </>
    );

    const input = screen.getByRole("textbox", { name: "Release scope" });
    expect(input).not.toHaveAttribute("aria-label");
  });

  it("ignores blank aria-labelledby and keeps aria-label naming", () => {
    render(<Input aria-label="Input search" aria-labelledby="   " />);
    const input = screen.getByRole("textbox", { name: "Input search" });

    expect(input).not.toHaveAttribute("aria-labelledby");
    expect(input).toHaveAttribute("aria-label", "Input search");
  });

  it("prefers aria-labelledby naming over aria-label when both are provided", () => {
    render(
      <>
        <span id="input-filter-heading">Input filter heading</span>
        <Input aria-label="Input fallback name" aria-labelledby="input-filter-heading" />
      </>
    );

    const input = screen.getByRole("textbox", { name: "Input filter heading" });
    expect(input).toHaveAttribute("aria-labelledby", "input-filter-heading");
    expect(input).not.toHaveAttribute("aria-label");
  });
});
