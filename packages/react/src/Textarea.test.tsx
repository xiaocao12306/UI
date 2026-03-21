import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders with placeholder text", () => {
    render(<Textarea placeholder="Write summary" />);
    const textarea = screen.getByPlaceholderText("Write summary");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute("data-aurora-reduced-motion", "transition");
  });

  it("applies invalid accessibility attributes", () => {
    render(<Textarea invalid aria-label="Notes" />);
    const textarea = screen.getByRole("textbox", { name: "Notes" });

    expect(textarea).toHaveAttribute("aria-invalid", "true");
    expect(textarea).toHaveAttribute("data-invalid", "true");
  });

  it("treats aria-invalid=false as valid", () => {
    render(<Textarea aria-label="Comment" aria-invalid="false" />);
    const textarea = screen.getByRole("textbox", { name: "Comment" });

    expect(textarea).not.toHaveAttribute("aria-invalid");
    expect(textarea).not.toHaveAttribute("data-invalid");
  });

  it("preserves aria-invalid grammar token", () => {
    render(<Textarea aria-label="Grammar note" aria-invalid="grammar" />);
    const textarea = screen.getByRole("textbox", { name: "Grammar note" });

    expect(textarea).toHaveAttribute("aria-invalid", "grammar");
    expect(textarea).toHaveAttribute("data-invalid", "true");
  });

  it("ignores blank aria-label and falls back to associated label naming", () => {
    render(
      <div>
        <label htmlFor="release-summary">Release summary</label>
        <Textarea id="release-summary" aria-label="   " />
      </div>
    );

    const textarea = screen.getByRole("textbox", { name: "Release summary" });
    expect(textarea).not.toHaveAttribute("aria-label");
  });

  it("ignores blank aria-labelledby and keeps aria-label naming", () => {
    render(<Textarea aria-label="Release summary" aria-labelledby="   " />);

    const textarea = screen.getByRole("textbox", { name: "Release summary" });
    expect(textarea).toHaveAttribute("aria-label", "Release summary");
    expect(textarea).not.toHaveAttribute("aria-labelledby");
  });

  it("prefers aria-labelledby naming over aria-label when both are provided", () => {
    render(
      <div>
        <p id="release-summary-heading">Release summary heading</p>
        <Textarea aria-label="Fallback summary label" aria-labelledby="release-summary-heading" />
      </div>
    );

    const textarea = screen.getByRole("textbox", { name: "Release summary heading" });
    expect(textarea).toHaveAttribute("aria-labelledby", "release-summary-heading");
    expect(textarea).not.toHaveAttribute("aria-label");
  });

  it("tracks focus state for visual feedback", () => {
    render(<Textarea aria-label="Description" />);
    const textarea = screen.getByRole("textbox", { name: "Description" });

    fireEvent.focus(textarea);
    expect(textarea).toHaveAttribute("data-focused", "true");

    fireEvent.blur(textarea);
    expect(textarea).not.toHaveAttribute("data-focused");
  });

  it("tracks keyboard focus-visible intent and clears it on primary pointer interaction", () => {
    render(<Textarea aria-label="Focus-visible textarea" />);
    const textarea = screen.getByRole("textbox", { name: "Focus-visible textarea" });

    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(textarea);
    expect(textarea).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(textarea, { button: 0, ctrlKey: true });
    expect(textarea).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(textarea, { button: 0 });
    expect(textarea).not.toHaveAttribute("data-focus-visible");
  });

  it("tracks keyboard focus intent from ownerDocument when focus-visible fallback is used", () => {
    render(
      <div>
        <button type="button">Before textarea</button>
        <Textarea aria-label="Document intent textarea" />
      </div>
    );

    const textarea = screen.getByRole("textbox", { name: "Document intent textarea" });
    const beforeButton = screen.getByRole("button", { name: "Before textarea" });
    const matchesSpy = vi.spyOn(textarea, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(textarea);
    expect(textarea).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(textarea);
    fireEvent.mouseDown(document.body, { button: 2 });
    fireEvent.focus(textarea);
    expect(textarea).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(textarea);
    fireEvent.mouseDown(document.body, { button: 0, ctrlKey: true });
    fireEvent.focus(textarea);
    expect(textarea).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(textarea);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(textarea);
    expect(textarea).not.toHaveAttribute("data-focus-visible");

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

    const { getByRole } = render(<Textarea aria-label="Iframe textarea" />, {
      container: secondaryContainer,
      baseElement: secondaryDocument.body
    });
    const textarea = getByRole("textbox", { name: "Iframe textarea" });
    const matchesSpy = vi.spyOn(textarea, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    try {
      secondaryDocument.dispatchEvent(
        new secondaryWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      fireEvent.focus(textarea);
      expect(textarea).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(textarea);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0 })
      );
      fireEvent.focus(textarea);
      expect(textarea).not.toHaveAttribute("data-focus-visible");
    } finally {
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });

  it("forwards focus and hover handlers", () => {
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();

    render(
      <Textarea
        aria-label="Handler test"
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
    const textarea = screen.getByRole("textbox", { name: "Handler test" });

    fireEvent.focus(textarea);
    fireEvent.blur(textarea);
    fireEvent.mouseEnter(textarea);
    fireEvent.mouseLeave(textarea);

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });

  it("respects disabled and readOnly behavior", () => {
    const { rerender } = render(<Textarea aria-label="Disabled message" disabled />);
    const disabledTextarea = screen.getByRole("textbox", { name: "Disabled message" });

    expect(disabledTextarea).toBeDisabled();
    expect(disabledTextarea).toHaveStyle("cursor: not-allowed");

    rerender(<Textarea aria-label="Readonly message" readOnly />);
    const readOnlyTextarea = screen.getByRole("textbox", { name: "Readonly message" });
    expect(readOnlyTextarea).toHaveAttribute("readonly");
    expect(readOnlyTextarea).toHaveStyle("cursor: default");
  });
});
