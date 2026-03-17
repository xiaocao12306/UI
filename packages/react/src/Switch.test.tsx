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

  it("treats aria-invalid=false as valid", () => {
    render(<Switch label="Valid switch" aria-invalid="false" />);
    expect(screen.getByRole("switch", { name: "Valid switch" })).not.toHaveAttribute("aria-invalid");
  });
});
