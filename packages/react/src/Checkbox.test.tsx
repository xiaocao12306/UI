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

  it("preserves grammar invalid semantics from aria-invalid", () => {
    render(<Checkbox label="Policy" aria-label="Policy" aria-invalid="grammar" />);
    expect(screen.getByRole("checkbox", { name: "Policy" })).toHaveAttribute("aria-invalid", "grammar");
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

  it("keeps numeric label and description semantics", () => {
    render(<Checkbox label={0} description={0} />);
    const checkbox = screen.getByRole("checkbox");
    const describedById = checkbox.getAttribute("aria-describedby");

    expect(checkbox).toHaveAccessibleName("0 0");
    expect(describedById).toBeTruthy();
    expect(document.getElementById(describedById as string)).toHaveTextContent("0");
  });

  it("exposes default keyboard shortcut hints only when actionable", () => {
    render(
      <div>
        <Checkbox label="Actionable checkbox" />
        <Checkbox label="Disabled checkbox" disabled />
      </div>
    );

    expect(screen.getByRole("checkbox", { name: "Actionable checkbox" })).toHaveAttribute("aria-keyshortcuts", "Space");
    expect(screen.getByRole("checkbox", { name: "Disabled checkbox" })).not.toHaveAttribute("aria-keyshortcuts");
  });

  it("accepts explicit shortcut hints and ignores blank overrides", () => {
    render(
      <div>
        <Checkbox label="Custom shortcut checkbox" aria-keyshortcuts="Space Enter" />
        <Checkbox label="Blank shortcut checkbox" aria-keyshortcuts="   " />
      </div>
    );

    expect(screen.getByRole("checkbox", { name: "Custom shortcut checkbox" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Space Enter"
    );
    expect(screen.getByRole("checkbox", { name: "Blank shortcut checkbox" })).toHaveAttribute("aria-keyshortcuts", "Space");
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

  it("tracks keyboard focus-visible intent and clears it on plain primary pointer interaction", () => {
    render(<Checkbox label="Focus-visible checkbox" />);
    const checkbox = screen.getByRole("checkbox", { name: "Focus-visible checkbox" });

    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(checkbox);
    expect(checkbox).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(checkbox, { button: 0, ctrlKey: true });
    expect(checkbox).toHaveAttribute("data-focus-visible", "true");

    fireEvent.pointerDown(checkbox, { pointerType: "touch", button: -1 });
    expect(checkbox).not.toHaveAttribute("data-focus-visible");

    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(checkbox);
    expect(checkbox).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(checkbox, { button: 0 });
    expect(checkbox).not.toHaveAttribute("data-focus-visible");
  });

  it("tracks keyboard focus intent from ownerDocument when focus-visible fallback is used", () => {
    render(
      <div>
        <button type="button">Before checkbox</button>
        <Checkbox label="Document intent checkbox" />
      </div>
    );

    const checkbox = screen.getByRole("checkbox", { name: "Document intent checkbox" });
    const beforeButton = screen.getByRole("button", { name: "Before checkbox" });
    const matchesSpy = vi.spyOn(checkbox, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(checkbox);
    expect(checkbox).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(checkbox);
    fireEvent.mouseDown(document.body, { button: 2 });
    fireEvent.focus(checkbox);
    expect(checkbox).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(checkbox);
    fireEvent.mouseDown(document.body, { button: 0, ctrlKey: true });
    fireEvent.focus(checkbox);
    expect(checkbox).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(checkbox);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(checkbox);
    expect(checkbox).not.toHaveAttribute("data-focus-visible");

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

    const { getByRole } = render(<Checkbox label="Iframe checkbox" />, {
      container: secondaryContainer,
      baseElement: secondaryDocument.body
    });
    const checkbox = getByRole("checkbox", { name: "Iframe checkbox" });
    const matchesSpy = vi.spyOn(checkbox, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    try {
      secondaryDocument.dispatchEvent(
        new secondaryWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      fireEvent.focus(checkbox);
      expect(checkbox).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(checkbox);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0, ctrlKey: true })
      );
      fireEvent.focus(checkbox);
      expect(checkbox).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(checkbox);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0 })
      );
      fireEvent.focus(checkbox);
      expect(checkbox).not.toHaveAttribute("data-focus-visible");
    } finally {
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });

  it("ignores blank aria-label and keeps visible label as accessible name", () => {
    render(<Checkbox label="Release gate" aria-label="   " />);

    const checkbox = screen.getByRole("checkbox", { name: "Release gate" });
    expect(checkbox).not.toHaveAttribute("aria-label");
  });

  it("ignores blank aria-labelledby and keeps aria-label naming", () => {
    render(<Checkbox aria-label="Release gate" aria-labelledby="   " />);

    const checkbox = screen.getByRole("checkbox", { name: "Release gate" });
    expect(checkbox).toHaveAttribute("aria-label", "Release gate");
    expect(checkbox).not.toHaveAttribute("aria-labelledby");
  });

  it("prioritizes aria-labelledby over aria-label when both are provided", () => {
    render(
      <div>
        <p id="checkbox-heading">Checkbox heading</p>
        <Checkbox aria-label="Fallback checkbox name" aria-labelledby="checkbox-heading" />
      </div>
    );

    const checkbox = screen.getByRole("checkbox", { name: "Checkbox heading" });
    expect(checkbox).toHaveAttribute("aria-labelledby", "checkbox-heading");
    expect(checkbox).not.toHaveAttribute("aria-label");
  });

  it("warns when non-text checkbox labels omit aria-label and aria-labelledby", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    try {
      render(<Checkbox label={<span aria-hidden="true">🧪</span>} />);
      expect(warnSpy).toHaveBeenCalledWith(
        "[Checkbox] Non-text label content should provide aria-label or aria-labelledby."
      );
    } finally {
      warnSpy.mockRestore();
    }
  });

  it("does not warn when non-text checkbox labels expose inline aria-label", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    try {
      render(<Checkbox label={<span aria-label="Deploy gate icon">🧪</span>} />);
      expect(warnSpy).not.toHaveBeenCalledWith(
        "[Checkbox] Non-text label content should provide aria-label or aria-labelledby."
      );
    } finally {
      warnSpy.mockRestore();
    }
  });
});
