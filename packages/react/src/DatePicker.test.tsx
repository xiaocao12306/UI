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

  it("does not expose default Enter shortcut hints for native date inputs", () => {
    render(<DatePicker aria-label="Release date" onValueChange={() => {}} />);

    expect(screen.getByLabelText("Release date")).not.toHaveAttribute("aria-keyshortcuts");
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

  it("tracks keyboard focus-visible intent and clears it on plain primary pointer interaction", () => {
    render(<DatePicker aria-label="Focus-visible date" onValueChange={() => {}} />);
    const input = screen.getByLabelText("Focus-visible date");

    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(input);
    expect(input).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(input, { button: 1 });
    expect(input).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(input, { button: 0, ctrlKey: true });
    expect(input).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(input, { button: 0 });
    expect(input).not.toHaveAttribute("data-focus-visible");
  });

  it("tracks ownerDocument keyboard focus intent when focus-visible matching is unavailable", () => {
    render(
      <div>
        <button type="button">Before date input</button>
        <DatePicker aria-label="Document intent date" onValueChange={() => {}} />
      </div>
    );

    const beforeButton = screen.getByRole("button", { name: "Before date input" });
    const input = screen.getByLabelText("Document intent date");
    const matchesSpy = vi.spyOn(input, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(input);
    expect(input).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(input);
    fireEvent.mouseDown(document.body, { button: 2 });
    fireEvent.focus(input);
    expect(input).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(input);
    fireEvent.mouseDown(document.body, { button: 0, ctrlKey: true });
    fireEvent.focus(input);
    expect(input).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(input);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(input);
    expect(input).not.toHaveAttribute("data-focus-visible");

    matchesSpy.mockRestore();
  });

  it("tracks ownerDocument keyboard focus intent for iframe-hosted renders", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const secondaryDocument = iframe.contentDocument;
    const secondaryWindow = iframe.contentWindow;

    if (!secondaryDocument || !secondaryWindow) {
      throw new Error("expected iframe document/window to exist");
    }

    const secondaryContainer = secondaryDocument.createElement("div");
    secondaryDocument.body.appendChild(secondaryContainer);

    const { getByLabelText } = render(
      <DatePicker aria-label="Iframe date" onValueChange={() => {}} />,
      {
        container: secondaryContainer,
        baseElement: secondaryDocument.body
      }
    );
    const input = getByLabelText("Iframe date");
    const matchesSpy = vi.spyOn(input, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    try {
      secondaryDocument.dispatchEvent(
        new secondaryWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      fireEvent.focus(input);
      expect(input).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(input);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0, ctrlKey: true })
      );
      fireEvent.focus(input);
      expect(input).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(input);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0 })
      );
      fireEvent.focus(input);
      expect(input).not.toHaveAttribute("data-focus-visible");
    } finally {
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });
});
