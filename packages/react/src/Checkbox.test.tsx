import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders label and toggles checked value", () => {
    render(<Checkbox label="Enable alerts" aria-label="Enable alerts" defaultChecked />);
    const checkbox = screen.getByRole("checkbox", { name: "Enable alerts" });
    expect(checkbox).toBeChecked();
  });

  it("applies invalid accessibility semantics", () => {
    render(<Checkbox label="Policy" invalid aria-label="Policy" />);
    expect(screen.getByRole("checkbox", { name: "Policy" })).toHaveAttribute("aria-invalid", "true");
  });

  it("accepts invalid semantics from aria-invalid", () => {
    render(<Checkbox label="Policy" aria-label="Policy" aria-invalid="true" />);
    expect(screen.getByRole("checkbox", { name: "Policy" })).toHaveAttribute("aria-invalid", "true");
  });

  it("treats aria-invalid=false as valid", () => {
    render(<Checkbox label="Policy" aria-label="Policy" aria-invalid="false" />);
    expect(screen.getByRole("checkbox", { name: "Policy" })).not.toHaveAttribute("aria-invalid");
  });

  it("wires description into aria-describedby", () => {
    render(<Checkbox label="Deploy gate" description="Requires 2 approvals" aria-label="Deploy gate" />);
    const checkbox = screen.getByRole("checkbox", { name: "Deploy gate" });
    const describedById = checkbox.getAttribute("aria-describedby");

    expect(describedById).toBeTruthy();
    expect(document.getElementById(describedById as string)).toHaveTextContent("Requires 2 approvals");
  });

  it("supports indeterminate state", () => {
    render(<Checkbox label="Partial selection" indeterminate aria-label="Partial selection" />);
    const checkbox = screen.getByRole("checkbox", { name: "Partial selection" }) as HTMLInputElement;

    expect(checkbox.indeterminate).toBe(true);
    expect(checkbox).toHaveAttribute("aria-checked", "mixed");
  });

  it("forwards focus and change handlers", () => {
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    const onChange = vi.fn();

    render(<Checkbox label="Handler checkbox" aria-label="Handler checkbox" onFocus={onFocus} onBlur={onBlur} onChange={onChange} />);
    const checkbox = screen.getByRole("checkbox", { name: "Handler checkbox" });

    fireEvent.focus(checkbox);
    fireEvent.click(checkbox);
    fireEvent.blur(checkbox);

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
