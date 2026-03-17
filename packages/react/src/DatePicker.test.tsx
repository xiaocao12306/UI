import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DatePicker } from "./DatePicker";

describe("DatePicker", () => {
  it("renders date input with initial value", () => {
    render(<DatePicker aria-label="Release date" value="2026-03-17" onValueChange={() => {}} />);
    expect(screen.getByLabelText("Release date")).toHaveValue("2026-03-17");
  });

  it("emits value updates on change", () => {
    const onValueChange = vi.fn();
    render(<DatePicker aria-label="Release date" onValueChange={onValueChange} />);

    fireEvent.change(screen.getByLabelText("Release date"), { target: { value: "2026-04-01" } });
    expect(onValueChange).toHaveBeenCalledWith("2026-04-01");
  });

  it("supports min/max constraints", () => {
    render(
      <DatePicker
        aria-label="Release date"
        min="2026-01-01"
        max="2026-12-31"
        onValueChange={() => {}}
      />
    );

    const input = screen.getByLabelText("Release date");
    expect(input).toHaveAttribute("min", "2026-01-01");
    expect(input).toHaveAttribute("max", "2026-12-31");
  });

  it("supports invalid and disabled states", () => {
    render(<DatePicker aria-label="Release date" invalid disabled onValueChange={() => {}} />);

    const input = screen.getByLabelText("Release date");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toBeDisabled();
  });
});
