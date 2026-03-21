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

  it("warns when duplicate radio option values are provided", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(
        <RadioGroup
          name="Duplicate values group"
          options={[
            { label: "React stable", value: "react" },
            { label: "React legacy", value: "react" }
          ]}
        />
      );

      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenLastCalledWith(
        expect.stringContaining('Duplicate option values detected: "react"')
      );
      expect(warnSpy).toHaveBeenLastCalledWith(expect.stringContaining("auto-suffixed by option index"));
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("avoids duplicate-key errors and keeps focus styling isolated with duplicate values", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(
        <RadioGroup
          name="Duplicate values group"
          options={[
            { label: "React stable", value: "react" },
            { label: "React legacy", value: "react" },
            { label: "Vue", value: "vue" }
          ]}
        />
      );

      const stable = screen.getByRole("radio", { name: "React stable" });
      const legacy = screen.getByRole("radio", { name: "React legacy" });
      fireEvent.focus(stable);
      expect(stable).toHaveAttribute("data-focused", "true");
      expect(legacy).not.toHaveAttribute("data-focused");

      const duplicateKeyErrors = errorSpy.mock.calls.filter(([message]) =>
        typeof message === "string" && message.includes("same key")
      );
      expect(duplicateKeyErrors).toHaveLength(0);
      expect(warnSpy).toHaveBeenCalledTimes(1);
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("exposes shortcut hints only for actionable options", () => {
    render(
      <RadioGroup
        name="Shortcut hints group"
        options={[
          { label: "Enabled option", value: "enabled" },
          { label: "Disabled option", value: "disabled", disabled: true }
        ]}
      />
    );

    expect(screen.getByRole("radio", { name: "Enabled option" })).toHaveAttribute("aria-keyshortcuts", "Space");
    expect(screen.getByRole("radio", { name: "Disabled option" })).not.toHaveAttribute("aria-keyshortcuts");
  });

  it("wires invalid semantics to the radiogroup container", () => {
    render(<RadioGroup name="Invalid group" invalid options={baseOptions} />);
    expect(screen.getByRole("radiogroup", { name: "Invalid group" })).toHaveAttribute("aria-invalid", "true");
  });

  it("exposes radiogroup orientation semantics from direction", () => {
    const { rerender } = render(<RadioGroup name="Direction group" direction="vertical" options={baseOptions} />);
    expect(screen.getByRole("radiogroup", { name: "Direction group" })).toHaveAttribute("aria-orientation", "vertical");

    rerender(<RadioGroup name="Direction group" direction="horizontal" options={baseOptions} />);
    expect(screen.getByRole("radiogroup", { name: "Direction group" })).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("accepts invalid semantics from aria-invalid on the group", () => {
    render(<RadioGroup name="Aria group" aria-invalid="true" options={baseOptions} />);
    expect(screen.getByRole("radiogroup", { name: "Aria group" })).toHaveAttribute("aria-invalid", "true");
  });

  it("preserves spelling invalid semantics from aria-invalid on the group", () => {
    render(<RadioGroup name="Spelling group" aria-invalid="spelling" options={baseOptions} />);
    expect(screen.getByRole("radiogroup", { name: "Spelling group" })).toHaveAttribute("aria-invalid", "spelling");
  });

  it("treats aria-invalid=false as valid", () => {
    render(<RadioGroup name="Valid group" aria-invalid="false" options={baseOptions} />);
    expect(screen.getByRole("radiogroup", { name: "Valid group" })).not.toHaveAttribute("aria-invalid");
  });

  it("ignores blank ariaLabel and falls back to group name", () => {
    render(<RadioGroup name="Fallback group name" ariaLabel="   " options={baseOptions} />);
    expect(screen.getByRole("radiogroup", { name: "Fallback group name" })).toBeInTheDocument();
  });

  it("supports ariaLabelledBy naming and suppresses ariaLabel fallback", () => {
    render(
      <div>
        <p id="radiogroup-heading">External group heading</p>
        <RadioGroup
          name="Fallback group name"
          ariaLabel="Fallback group label"
          ariaLabelledBy="radiogroup-heading"
          options={baseOptions}
        />
      </div>
    );

    const group = screen.getByRole("radiogroup", { name: "External group heading" });
    expect(group).toHaveAttribute("aria-labelledby", "radiogroup-heading");
    expect(group).not.toHaveAttribute("aria-label");
  });

  it("ignores blank ariaLabelledBy and keeps fallback name semantics", () => {
    render(<RadioGroup name="Fallback group name" ariaLabelledBy="   " options={baseOptions} />);

    const group = screen.getByRole("radiogroup", { name: "Fallback group name" });
    expect(group).not.toHaveAttribute("aria-labelledby");
    expect(group).toHaveAttribute("aria-label", "Fallback group name");
  });

  it("tracks keyboard focus-visible intent and clears it on primary pointer interaction", () => {
    render(<RadioGroup name="Focus ring group" options={baseOptions} defaultValue="m" />);

    const medium = screen.getByRole("radio", { name: /^Medium/ });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(medium);
    expect(medium).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(medium, { button: 1 });
    expect(medium).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(medium, { button: 0 });
    expect(medium).not.toHaveAttribute("data-focus-visible");
  });

  it("tracks ownerDocument keyboard focus intent when focus-visible matching is unavailable", () => {
    render(
      <div>
        <button type="button">Before radio group</button>
        <RadioGroup name="Document intent group" defaultValue="m" options={baseOptions} />
      </div>
    );

    const medium = screen.getByRole("radio", { name: /^Medium/ });
    const beforeButton = screen.getByRole("button", { name: "Before radio group" });
    const matchesSpy = vi.spyOn(medium, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(medium);
    expect(medium).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(medium);
    fireEvent.mouseDown(document.body, { button: 2 });
    fireEvent.focus(medium);
    expect(medium).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(medium);
    fireEvent.mouseDown(document.body, { button: 0, ctrlKey: true });
    fireEvent.focus(medium);
    expect(medium).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(medium);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(medium);
    expect(medium).not.toHaveAttribute("data-focus-visible");

    matchesSpy.mockRestore();
  });

  it("tracks ownerDocument keyboard focus intent for iframe-hosted radio groups", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const secondaryDocument = iframe.contentDocument;
    const secondaryWindow = iframe.contentWindow;

    if (!secondaryDocument || !secondaryWindow) {
      throw new Error("expected iframe document/window to exist");
    }

    const secondaryContainer = secondaryDocument.createElement("div");
    secondaryDocument.body.appendChild(secondaryContainer);

    const { getByRole } = render(
      <RadioGroup name="Iframe group" defaultValue="m" options={baseOptions} />,
      {
        container: secondaryContainer,
        baseElement: secondaryDocument.body
      }
    );
    const medium = getByRole("radio", { name: /^Medium/ });
    const matchesSpy = vi.spyOn(medium, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    try {
      secondaryDocument.dispatchEvent(
        new secondaryWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      fireEvent.focus(medium);
      expect(medium).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(medium);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0 })
      );
      fireEvent.focus(medium);
      expect(medium).not.toHaveAttribute("data-focus-visible");
    } finally {
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });
});
