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
    expect(screen.getByLabelText("Release date")).toHaveAttribute("aria-errormessage", "release-error");
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
    expect(screen.getByLabelText("Release date")).not.toHaveAttribute("aria-errormessage");
  });

  it("deduplicates helper/error ids when they already exist in aria-describedby", () => {
    render(
      <DatePicker
        aria-label="Release date"
        invalid
        aria-describedby="release-hint release-error"
        errorMessageId="release-error"
        onValueChange={() => {}}
      />
    );

    expect(screen.getByLabelText("Release date")).toHaveAttribute("aria-describedby", "release-hint release-error");
  });

  it("accepts invalid semantics from aria-invalid", () => {
    render(<DatePicker aria-label="Release date" aria-invalid="true" onValueChange={() => {}} />);

    expect(screen.getByLabelText("Release date")).toHaveAttribute("aria-invalid", "true");
  });

  it("preserves grammar/spelling invalid semantics from aria-invalid", () => {
    render(<DatePicker aria-label="Release date" aria-invalid="grammar" onValueChange={() => {}} />);

    expect(screen.getByLabelText("Release date")).toHaveAttribute("aria-invalid", "grammar");
  });

  it("treats aria-invalid=false as valid", () => {
    render(<DatePicker aria-label="Release date" aria-invalid="false" onValueChange={() => {}} />);

    const input = screen.getByLabelText("Release date");
    expect(input).not.toHaveAttribute("aria-invalid");
    expect(input).not.toHaveAttribute("data-invalid");
  });

  it("ignores blank aria-label when aria-labelledby is present", () => {
    render(
      <>
        <h2 id="release-heading">Release schedule</h2>
        <DatePicker aria-label="   " aria-labelledby="release-heading" onValueChange={() => {}} />
      </>
    );

    const input = screen.getByLabelText("Release schedule");
    expect(input).toHaveAttribute("aria-labelledby", "release-heading");
    expect(input).not.toHaveAttribute("aria-label");
  });

  it("ignores blank aria-labelledby and preserves aria-label", () => {
    render(<DatePicker aria-label="Release date" aria-labelledby="   " onValueChange={() => {}} />);

    const input = screen.getByLabelText("Release date");
    expect(input).toHaveAttribute("aria-label", "Release date");
    expect(input).not.toHaveAttribute("aria-labelledby");
  });

  it("prefers aria-labelledby over aria-label when both are provided", () => {
    render(
      <>
        <h2 id="release-summary">Release summary</h2>
        <DatePicker aria-label="Release date" aria-labelledby="release-summary" onValueChange={() => {}} />
      </>
    );

    const input = screen.getByLabelText("Release summary");
    expect(input).toHaveAttribute("aria-labelledby", "release-summary");
    expect(input).not.toHaveAttribute("aria-label");
  });
});
