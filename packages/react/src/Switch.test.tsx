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

  it("applies pressed state only for primary mouse button", () => {
    render(<Switch label="Pointer semantics" defaultChecked={false} />);
    const control = screen.getByRole("switch", { name: "Pointer semantics" });

    fireEvent.mouseDown(control, { button: 1 });
    expect(control).not.toHaveAttribute("data-pressed");

    fireEvent.mouseDown(control, { button: 0 });
    expect(control).toHaveAttribute("data-pressed", "true");

    fireEvent.mouseUp(control, { button: 1 });
    expect(control).toHaveAttribute("data-pressed", "true");

    fireEvent.mouseUp(control, { button: 0 });
    expect(control).not.toHaveAttribute("data-pressed");
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
