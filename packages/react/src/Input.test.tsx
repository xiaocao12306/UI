import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with placeholder text", () => {
    render(<Input placeholder="Search" />);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("data-aurora-input", "true");
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
});
