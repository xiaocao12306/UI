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

    expect(screen.getByRole("combobox", { name: "Framework" })).toHaveValue("react");
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
