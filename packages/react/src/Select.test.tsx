import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Select } from "./Select";

describe("Select", () => {
  it("renders options and default value", () => {
    render(
      <Select aria-label="Framework" defaultValue="react">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </Select>
    );

    const select = screen.getByRole("combobox", { name: "Framework" });
    expect(select).toHaveValue("react");
    expect(select).toHaveAttribute("data-aurora-reduced-motion", "transition");
  });

  it("warns when duplicate select option values are provided", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(
        <Select aria-label="Duplicate value select">
          <option value="react">React stable</option>
          <option value="react">React legacy</option>
        </Select>
      );

      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenLastCalledWith(
        expect.stringContaining('Duplicate option values detected: "react"')
      );
      expect(warnSpy).toHaveBeenLastCalledWith(expect.stringContaining("selected-option semantics"));
      expect(warnSpy).toHaveBeenLastCalledWith(
        expect.stringContaining("first enabled matching option")
      );
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("warns when duplicate select options rely on implicit text values", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(
        <Select aria-label="Implicit duplicate value select">
          <option>React</option>
          <option>React</option>
        </Select>
      );

      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenLastCalledWith(
        expect.stringContaining('Duplicate option values detected: "React"')
      );
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("exposes default shortcut hints only when actionable", () => {
    render(
      <div>
        <Select aria-label="Actionable select">
          <option value="react">React</option>
        </Select>
        <Select aria-label="Disabled select shortcuts" disabled>
          <option value="react">React</option>
        </Select>
      </div>
    );

    expect(screen.getByRole("combobox", { name: "Actionable select" })).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp"
    );
    expect(screen.getByRole("combobox", { name: "Disabled select shortcuts" })).not.toHaveAttribute(
      "aria-keyshortcuts"
    );
  });

  it("falls back invalid runtime disabled flags to actionable select semantics", () => {
    const onChange = vi.fn();
    render(
      <Select
        aria-label="Runtime boolean select"
        disabled={"true" as unknown as boolean}
        defaultValue="react"
        onChange={onChange}
      >
        <option value="react">React</option>
        <option value="vue" disabled={"true" as unknown as boolean}>
          Vue
        </option>
        <optgroup label="Legacy" disabled={"true" as unknown as boolean}>
          <option value="legacy">Legacy</option>
        </optgroup>
      </Select>
    );

    const select = screen.getByRole("combobox", { name: "Runtime boolean select" });
    const vue = screen.getByRole("option", { name: "Vue" });
    const legacy = screen.getByRole("option", { name: "Legacy" });
    expect(select).not.toBeDisabled();
    expect(select).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp");
    expect(vue).not.toBeDisabled();
    expect(legacy).not.toBeDisabled();

    fireEvent.change(select, { target: { value: "vue" } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(select).toHaveValue("vue");
  });

  it("accepts explicit shortcut hints and ignores blank overrides", () => {
    render(
      <div>
        <Select aria-label="Custom shortcut select" aria-keyshortcuts="ArrowDown Enter">
          <option value="react">React</option>
        </Select>
        <Select aria-label="Blank shortcut select" aria-keyshortcuts="   ">
          <option value="react">React</option>
        </Select>
      </div>
    );

    expect(screen.getByRole("combobox", { name: "Custom shortcut select" })).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown Enter"
    );
    expect(screen.getByRole("combobox", { name: "Blank shortcut select" })).toHaveAttribute(
      "aria-keyshortcuts",
      "ArrowDown ArrowUp"
    );
  });

  it("applies invalid accessibility attributes", () => {
    render(
      <Select invalid aria-label="Environment">
        <option value="prod">Production</option>
      </Select>
    );
    const select = screen.getByRole("combobox", { name: "Environment" });

    expect(select).toHaveAttribute("aria-invalid", "true");
    expect(select).toHaveAttribute("data-invalid", "true");
  });

  it("treats aria-invalid=false as valid", () => {
    render(
      <Select aria-label="Channel" aria-invalid="false">
        <option value="stable">Stable</option>
      </Select>
    );

    const select = screen.getByRole("combobox", { name: "Channel" });
    expect(select).not.toHaveAttribute("aria-invalid");
    expect(select).not.toHaveAttribute("data-invalid");
  });

  it("preserves aria-invalid grammar/spelling tokens", () => {
    render(
      <Select aria-label="Spelling select" aria-invalid="spelling">
        <option value="stable">Stable</option>
      </Select>
    );

    const select = screen.getByRole("combobox", { name: "Spelling select" });
    expect(select).toHaveAttribute("aria-invalid", "spelling");
    expect(select).toHaveAttribute("data-invalid", "true");
  });

  it("ignores blank aria-label and falls back to associated label naming", () => {
    render(
      <div>
        <label htmlFor="release-framework">Framework</label>
        <Select id="release-framework" aria-label="   ">
          <option value="react">React</option>
        </Select>
      </div>
    );

    const select = screen.getByRole("combobox", { name: "Framework" });
    expect(select).not.toHaveAttribute("aria-label");
  });

  it("ignores blank aria-labelledby and keeps aria-label naming", () => {
    render(
      <Select aria-label="Framework picker" aria-labelledby="   ">
        <option value="react">React</option>
      </Select>
    );

    const select = screen.getByRole("combobox", { name: "Framework picker" });
    expect(select).not.toHaveAttribute("aria-labelledby");
    expect(select).toHaveAttribute("aria-label", "Framework picker");
  });

  it("prefers aria-labelledby naming over aria-label when both are provided", () => {
    render(
      <div>
        <p id="framework-heading">Framework heading</p>
        <Select aria-label="Fallback framework name" aria-labelledby="framework-heading">
          <option value="react">React</option>
        </Select>
      </div>
    );

    const select = screen.getByRole("combobox", { name: "Framework heading" });
    expect(select).toHaveAttribute("aria-labelledby", "framework-heading");
    expect(select).not.toHaveAttribute("aria-label");
  });

  it("tracks focus state for visual feedback", () => {
    render(
      <Select aria-label="Focus state">
        <option value="one">One</option>
      </Select>
    );
    const select = screen.getByRole("combobox", { name: "Focus state" });

    fireEvent.focus(select);
    expect(select).toHaveAttribute("data-focused", "true");

    fireEvent.blur(select);
    expect(select).not.toHaveAttribute("data-focused");
  });

  it("tracks keyboard focus-visible intent and clears it on primary pointer interaction", () => {
    render(
      <Select aria-label="Focus-visible select">
        <option value="one">One</option>
      </Select>
    );
    const select = screen.getByRole("combobox", { name: "Focus-visible select" });

    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(select);
    expect(select).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(select, { button: 0, ctrlKey: true });
    expect(select).toHaveAttribute("data-focus-visible", "true");

    fireEvent.pointerDown(select, { pointerType: "touch", button: -1 });
    expect(select).not.toHaveAttribute("data-focus-visible");

    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(select);
    expect(select).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(select, { button: 0 });
    expect(select).not.toHaveAttribute("data-focus-visible");
  });

  it("tracks keyboard focus intent from ownerDocument when focus-visible fallback is used", () => {
    render(
      <div>
        <button type="button">Before select</button>
        <Select aria-label="Document intent select">
          <option value="react">React</option>
        </Select>
      </div>
    );

    const select = screen.getByRole("combobox", { name: "Document intent select" });
    const beforeButton = screen.getByRole("button", { name: "Before select" });
    const matchesSpy = vi.spyOn(select, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(select);
    expect(select).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(select);
    fireEvent.mouseDown(document.body, { button: 2 });
    fireEvent.focus(select);
    expect(select).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(select);
    fireEvent.mouseDown(document.body, { button: 0, ctrlKey: true });
    fireEvent.focus(select);
    expect(select).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(select);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(select);
    expect(select).not.toHaveAttribute("data-focus-visible");

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

    const { getByRole } = render(
      <Select aria-label="Iframe select">
        <option value="react">React</option>
      </Select>,
      { container: secondaryContainer, baseElement: secondaryDocument.body }
    );
    const select = getByRole("combobox", { name: "Iframe select" });
    const matchesSpy = vi.spyOn(select, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    try {
      secondaryDocument.dispatchEvent(
        new secondaryWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      fireEvent.focus(select);
      expect(select).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(select);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0, ctrlKey: true })
      );
      fireEvent.focus(select);
      expect(select).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(select);
      secondaryDocument.dispatchEvent(
        new secondaryWindow.MouseEvent("mousedown", { bubbles: true, button: 0 })
      );
      fireEvent.focus(select);
      expect(select).not.toHaveAttribute("data-focus-visible");
    } finally {
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });

  it("anchors duplicate option selected-state to the first enabled match", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(
        <Select aria-label="Duplicate semantics select" defaultValue="react">
          <option value="react" disabled>
            React disabled
          </option>
          <option value="react">React enabled</option>
          <option value="vue">Vue</option>
        </Select>
      );

      const select = screen.getByRole("combobox", { name: "Duplicate semantics select" });
      const options = screen.getAllByRole("option");
      expect(select).toHaveValue("react");
      expect(select).toHaveProperty("selectedIndex", 1);
      expect(options[0]).toHaveProperty("selected", false);
      expect(options[1]).toHaveProperty("selected", true);
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("anchors duplicate implicit option values to the first enabled match", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(
        <Select aria-label="Implicit duplicate semantics select" defaultValue="React">
          <option disabled>React</option>
          <option>React</option>
          <option>Vue</option>
        </Select>
      );

      const select = screen.getByRole("combobox", { name: "Implicit duplicate semantics select" });
      const options = screen.getAllByRole("option");
      expect(select).toHaveValue("React");
      expect(select).toHaveProperty("selectedIndex", 1);
      expect(options[0]).toHaveProperty("selected", false);
      expect(options[1]).toHaveProperty("selected", true);
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("resolves duplicate option preferred selection through disabled optgroup ancestry", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(
        <Select aria-label="Optgroup duplicate semantics select" defaultValue="react">
          <optgroup label="Legacy" disabled>
            <option value="react">React disabled by optgroup</option>
          </optgroup>
          <option value="react">React enabled</option>
        </Select>
      );

      const select = screen.getByRole("combobox", { name: "Optgroup duplicate semantics select" });
      const options = screen.getAllByRole("option");
      expect(select).toHaveValue("react");
      expect(select).toHaveProperty("selectedIndex", 1);
      expect(options[0]).toHaveProperty("selected", false);
      expect(options[1]).toHaveProperty("selected", true);
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("keeps duplicate selection changes anchored and suppresses same-value onChange telemetry", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const onChange = vi.fn();

    try {
      render(
        <Select aria-label="Duplicate interaction select" defaultValue="react" onChange={onChange}>
          <option value="react">React primary</option>
          <option value="react">React secondary</option>
          <option value="vue">Vue</option>
        </Select>
      );

      const select = screen.getByRole("combobox", { name: "Duplicate interaction select" }) as HTMLSelectElement;
      const options = screen.getAllByRole("option");
      select.selectedIndex = 1;
      fireEvent.change(select);

      expect(select).toHaveValue("react");
      expect(select).toHaveProperty("selectedIndex", 0);
      expect(options[0]).toHaveProperty("selected", true);
      expect(options[1]).toHaveProperty("selected", false);
      expect(onChange).not.toHaveBeenCalled();
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("still emits onChange when select value actually changes under duplicate diagnostics", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const onChange = vi.fn();

    try {
      render(
        <Select aria-label="Duplicate interaction value change select" defaultValue="react" onChange={onChange}>
          <option value="react">React primary</option>
          <option value="react">React secondary</option>
          <option value="vue">Vue</option>
        </Select>
      );

      const select = screen.getByRole("combobox", {
        name: "Duplicate interaction value change select"
      }) as HTMLSelectElement;
      fireEvent.change(select, { target: { value: "vue" } });

      expect(select).toHaveValue("vue");
      expect(onChange).toHaveBeenCalledTimes(1);
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("forwards change and hover handlers", () => {
    const onChange = vi.fn();
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();

    render(
      <Select
        aria-label="Action"
        defaultValue="build"
        onChange={onChange}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <option value="build">Build</option>
        <option value="deploy">Deploy</option>
      </Select>
    );
    const select = screen.getByRole("combobox", { name: "Action" });

    fireEvent.mouseEnter(select);
    fireEvent.change(select, { target: { value: "deploy" } });
    fireEvent.mouseLeave(select);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
    expect(select).toHaveValue("deploy");
  });

  it("respects disabled behavior", () => {
    render(
      <Select aria-label="Disabled select" disabled>
        <option value="blocked">Blocked</option>
      </Select>
    );

    const select = screen.getByRole("combobox", { name: "Disabled select" });
    expect(select).toBeDisabled();
    expect(select).toHaveStyle("cursor: not-allowed");
  });
});
