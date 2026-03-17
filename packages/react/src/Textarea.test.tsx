import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders with placeholder text", () => {
    render(<Textarea placeholder="Write summary" />);
    expect(screen.getByPlaceholderText("Write summary")).toBeInTheDocument();
  });

  it("applies invalid accessibility attributes", () => {
    render(<Textarea invalid aria-label="Notes" />);
    const textarea = screen.getByRole("textbox", { name: "Notes" });

    expect(textarea).toHaveAttribute("aria-invalid", "true");
    expect(textarea).toHaveAttribute("data-invalid", "true");
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
