import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Combobox } from "./Combobox";

const options = [
  { value: "react", label: "React", keywords: ["frontend"] },
  { value: "vue", label: "Vue", keywords: ["frontend"] },
  { value: "svelte", label: "Svelte", keywords: ["compiler"] }
];

describe("Combobox", () => {
  it("ignores blank ariaLabel and falls back to default combobox name", () => {
    render(<Combobox options={options} onValueChange={() => {}} ariaLabel="   " />);
    expect(screen.getByRole("combobox", { name: "Combobox" })).toBeInTheDocument();
  });

  it("uses fallback listbox name when ariaLabel is blank", () => {
    render(<Combobox options={options} onValueChange={() => {}} ariaLabel="   " />);
    const input = screen.getByRole("combobox", { name: "Combobox" });

    fireEvent.focus(input);
    expect(screen.getByRole("listbox", { name: "Combobox options" })).toBeInTheDocument();
  });

  it("trims ariaLabel for combobox and listbox naming", () => {
    render(<Combobox options={options} onValueChange={() => {}} ariaLabel="  Framework picker  " />);
    const input = screen.getByRole("combobox", { name: "Framework picker" });

    fireEvent.focus(input);
    expect(screen.getByRole("listbox", { name: "Framework picker options" })).toBeInTheDocument();
  });

  it("filters options by query", () => {
    render(<Combobox options={options} onValueChange={() => {}} />);

    const input = screen.getByRole("combobox", { name: "Combobox" });
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "sv" } });

    expect(screen.getByRole("option", { name: "Svelte" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "React" })).toBeNull();
  });

  it("warns when duplicate combobox option values are provided", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(
        <Combobox
          options={[
            { value: "react", label: "React core" },
            { value: "react", label: "React legacy" }
          ]}
          onValueChange={() => {}}
        />
      );

      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenLastCalledWith(
        expect.stringContaining('Duplicate option values detected: "react"')
      );
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("selects option on click and closes popup", () => {
    const onValueChange = vi.fn();
    render(<Combobox options={options} onValueChange={onValueChange} />);

    const input = screen.getByRole("combobox", { name: "Combobox" });
    fireEvent.focus(input);
    fireEvent.click(screen.getByRole("option", { name: "Vue" }));

    expect(onValueChange).toHaveBeenCalledWith("vue");
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("supports keyboard navigation and enter selection", () => {
    const onValueChange = vi.fn();
    render(<Combobox options={options} onValueChange={onValueChange} />);

    const input = screen.getByRole("combobox", { name: "Combobox" });
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onValueChange).toHaveBeenCalledWith("vue");
  });

  it("supports Home and End keyboard jumps", () => {
    render(<Combobox options={options} onValueChange={() => {}} />);

    const input = screen.getByRole("combobox", { name: "Combobox" });
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "End" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-2"));

    fireEvent.keyDown(input, { key: "Home" });
    expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
  });

  it("closes popup on Escape and blur outside", () => {
    render(<Combobox options={options} onValueChange={() => {}} />);

    const input = screen.getByRole("combobox", { name: "Combobox" });
    fireEvent.focus(input);
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    fireEvent.keyDown(input, { key: "Escape" });
    expect(screen.queryByRole("listbox")).toBeNull();

    fireEvent.focus(input);
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    fireEvent.blur(input, { relatedTarget: null });
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("keeps popup open when focus moves to option element", () => {
    render(<Combobox options={options} onValueChange={() => {}} />);

    const input = screen.getByRole("combobox", { name: "Combobox" });
    fireEvent.focus(input);
    const option = screen.getByRole("option", { name: "React" });

    fireEvent.blur(input, { relatedTarget: option });
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("keeps options out of tab order for aria-activedescendant pattern", () => {
    render(<Combobox options={options} onValueChange={() => {}} />);

    const input = screen.getByRole("combobox", { name: "Combobox" });
    fireEvent.focus(input);

    expect(screen.getByRole("option", { name: "React" })).toHaveAttribute("tabindex", "-1");
    expect(screen.getByRole("option", { name: "Vue" })).toHaveAttribute("tabindex", "-1");
  });

  it("keeps combobox focus when selecting an option with primary pointer down", () => {
    render(<Combobox options={options} onValueChange={() => {}} />);

    const input = screen.getByRole("combobox", { name: "Combobox" });
    fireEvent.focus(input);
    const option = screen.getByRole("option", { name: "React" });

    fireEvent.mouseDown(option, { button: 0 });
    expect(input).toHaveFocus();
  });

  it("shows custom empty message for no matches", () => {
    render(<Combobox options={options} onValueChange={() => {}} emptyMessage="No frameworks available." />);

    const input = screen.getByRole("combobox", { name: "Combobox" });
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "angular" } });

    expect(screen.getByRole("status")).toHaveTextContent("No frameworks available.");
  });

  it("ignores disabled options in keyboard selection", () => {
    const onValueChange = vi.fn();
    render(
      <Combobox
        options={[
          { value: "react", label: "React", disabled: true },
          { value: "vue", label: "Vue" }
        ]}
        onValueChange={onValueChange}
      />
    );

    const input = screen.getByRole("combobox", { name: "Combobox" });
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onValueChange).toHaveBeenCalledWith("vue");
  });

  it("respects controlled value changes", () => {
    const { rerender } = render(<Combobox options={options} value="react" onValueChange={() => {}} />);
    const input = screen.getByRole("combobox", { name: "Combobox" }) as HTMLInputElement;
    expect(input.value).toBe("React");

    rerender(<Combobox options={options} value="svelte" onValueChange={() => {}} />);
    expect((screen.getByRole("combobox", { name: "Combobox" }) as HTMLInputElement).value).toBe("Svelte");
  });

  it("uses aria-selected for selected option instead of active option", () => {
    render(<Combobox options={options} defaultValue="react" onValueChange={() => {}} />);

    const input = screen.getByRole("combobox", { name: "Combobox" });
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "" } });

    expect(screen.getByRole("option", { name: "React" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("option", { name: "Vue" })).toHaveAttribute("aria-selected", "false");

    fireEvent.keyDown(input, { key: "ArrowDown" });

    expect(screen.getByRole("option", { name: "React" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("option", { name: "Vue" })).toHaveAttribute("aria-selected", "false");
  });

  it("does not open option list when combobox is disabled", () => {
    render(<Combobox options={options} disabled onValueChange={() => {}} />);

    const input = screen.getByRole("combobox", { name: "Combobox" });
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "ArrowDown" });

    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("only exposes aria-controls while popup is open", () => {
    render(<Combobox options={options} onValueChange={() => {}} />);

    const input = screen.getByRole("combobox", { name: "Combobox" });
    expect(input).not.toHaveAttribute("aria-controls");

    fireEvent.focus(input);
    const listbox = screen.getByRole("listbox", { name: "Combobox options" });
    expect(input).toHaveAttribute("aria-controls", listbox.id);

    fireEvent.keyDown(input, { key: "Escape" });
    expect(input).not.toHaveAttribute("aria-controls");
  });
});
