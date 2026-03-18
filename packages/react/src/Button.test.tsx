import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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

  it("uses button type by default to avoid unintended form submit", () => {
    render(<Button>Action</Button>);
    expect(screen.getByRole("button", { name: "Action" })).toHaveAttribute("type", "button");
  });

  it("applies focus ring on focus", () => {
    render(<Button>Focus me</Button>);
    const button = screen.getByRole("button", { name: "Focus me" });

    fireEvent.focus(button);
    expect(button.getAttribute("style")).toContain("var(--aurora-focus-ring)");
  });

  it("supports legacy Spacebar key value for pressed-state feedback", () => {
    render(<Button>Legacy Spacebar</Button>);
    const button = screen.getByRole("button", { name: "Legacy Spacebar" });

    fireEvent.keyDown(button, { key: "Spacebar" });
    expect(button.getAttribute("style")).toContain("translateY(1px)");

    fireEvent.keyUp(button, { key: "Spacebar" });
    expect(button.getAttribute("style")).not.toContain("translateY(1px)");
  });
});
