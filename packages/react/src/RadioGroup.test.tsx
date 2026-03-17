import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { RadioGroup } from "./RadioGroup";

const baseOptions = [
  { label: "Small", value: "s" },
  { label: "Medium", value: "m" },
  { label: "Large", value: "l" }
];

describe("RadioGroup", () => {
  it("renders controlled value", () => {
    render(<RadioGroup name="Size" value="m" options={baseOptions} />);
    expect(screen.getByRole("radio", { name: "Medium" })).toBeChecked();
  });

  it("supports uncontrolled selection with defaultValue", () => {
    render(<RadioGroup name="Uncontrolled size" defaultValue="s" options={baseOptions} />);
    const large = screen.getByRole("radio", { name: "Large" });

    fireEvent.click(large);
    expect(large).toBeChecked();
  });

  it("emits value changes", () => {
    const onChange = vi.fn();
    render(<RadioGroup name="Sizes" defaultValue="s" options={baseOptions} onChange={onChange} />);

    fireEvent.click(screen.getByRole("radio", { name: "Medium" }));
    expect(onChange).toHaveBeenCalledWith("m");
  });

  it("does not trigger disabled options", () => {
    const onChange = vi.fn();
    render(
      <RadioGroup
        name="Blocked sizes"
        defaultValue="s"
        options={[
          { label: "Small", value: "s" },
          { label: "Medium", value: "m", disabled: true }
        ]}
        onChange={onChange}
      />
    );

    const medium = screen.getByRole("radio", { name: "Medium" });
    fireEvent.click(medium);
    expect(medium).toBeDisabled();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("wires invalid semantics to group and options", () => {
    render(<RadioGroup name="Invalid group" invalid options={baseOptions} />);
    expect(screen.getByRole("radiogroup", { name: "Invalid group" })).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("radio", { name: "Small" })).toHaveAttribute("aria-invalid", "true");
  });
});
