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
    const onChange = vi.fn();
    render(<DatePicker aria-label="Release date" onValueChange={onValueChange} onChange={onChange} />);

    fireEvent.change(screen.getByLabelText("Release date"), { target: { value: "2026-04-01" } });
    expect(onChange).toHaveBeenCalledTimes(1);
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

  it("wires invalid helper description through aria-describedby", () => {
    render(
      <DatePicker
        aria-label="Release date"
        invalid
        aria-describedby="release-hint"
        errorMessageId="release-error"
        onValueChange={() => {}}
      />
    );

    expect(screen.getByLabelText("Release date")).toHaveAttribute("aria-describedby", "release-hint release-error");
  });

  it("does not append error message id when field is not invalid", () => {
    render(
      <DatePicker
        aria-label="Release date"
        aria-describedby="release-hint"
        errorMessageId="release-error"
        onValueChange={() => {}}
      />
    );

    expect(screen.getByLabelText("Release date")).toHaveAttribute("aria-describedby", "release-hint");
  });

  it("accepts invalid semantics from aria-invalid", () => {
    render(<DatePicker aria-label="Release date" aria-invalid="true" onValueChange={() => {}} />);

    expect(screen.getByLabelText("Release date")).toHaveAttribute("aria-invalid", "true");
  });

  it("treats aria-invalid=false as valid", () => {
    render(<DatePicker aria-label="Release date" aria-invalid="false" onValueChange={() => {}} />);

    const input = screen.getByLabelText("Release date");
    expect(input).not.toHaveAttribute("aria-invalid");
    expect(input).not.toHaveAttribute("data-invalid");
  });
});
