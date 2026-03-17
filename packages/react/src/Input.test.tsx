import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with placeholder text", () => {
    render(<Input placeholder="Search" />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
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
});
