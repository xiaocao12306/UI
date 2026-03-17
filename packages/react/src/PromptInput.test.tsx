import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PromptInput } from "./PromptInput";

describe("PromptInput", () => {
  it("submits prompt and clears input", () => {
    const onSubmit = vi.fn();

    render(<PromptInput onSubmit={onSubmit} />);
    const textbox = screen.getByPlaceholderText("Type your prompt...");

    fireEvent.change(textbox, { target: { value: "Draft release notes" } });
    fireEvent.click(screen.getByRole("button", { name: "Send" }));

    expect(onSubmit).toHaveBeenCalledWith("Draft release notes");
    expect((textbox as HTMLTextAreaElement).value).toBe("");
  });
});
