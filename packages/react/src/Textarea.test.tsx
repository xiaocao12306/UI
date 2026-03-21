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
