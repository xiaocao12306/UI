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
