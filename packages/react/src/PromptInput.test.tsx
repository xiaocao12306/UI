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

  it("submits with Ctrl + Enter shortcut", () => {
    const onSubmit = vi.fn();

    render(<PromptInput onSubmit={onSubmit} />);
    const textbox = screen.getByRole("textbox", { name: "Prompt input" });

    fireEvent.change(textbox, { target: { value: "  Summarize migration risk  " } });
    fireEvent.keyDown(textbox, { key: "Enter", ctrlKey: true });

    expect(onSubmit).toHaveBeenCalledWith("Summarize migration risk");
    expect((textbox as HTMLTextAreaElement).value).toBe("");
  });

  it("blocks submit when empty or submitting", () => {
    const onSubmit = vi.fn();
    const { rerender } = render(<PromptInput onSubmit={onSubmit} />);

    const idleButton = screen.getByRole("button", { name: "Send" });
    expect(idleButton).toBeDisabled();
    fireEvent.click(idleButton);
    expect(onSubmit).not.toHaveBeenCalled();

    rerender(<PromptInput onSubmit={onSubmit} submitting />);

    const loadingButton = screen.getByRole("button", { name: "Sending..." });
    const textbox = screen.getByRole("textbox", { name: "Prompt input" });

    expect(loadingButton).toBeDisabled();
    expect(textbox).toBeDisabled();
    fireEvent.click(loadingButton);
    fireEvent.keyDown(textbox, { key: "Enter", ctrlKey: true });
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("does not submit while IME composition is active", () => {
    const onSubmit = vi.fn();

    render(<PromptInput onSubmit={onSubmit} />);
    const textbox = screen.getByRole("textbox", { name: "Prompt input" });

    fireEvent.change(textbox, { target: { value: "中文输入草稿" } });
    fireEvent.compositionStart(textbox);
    fireEvent.keyDown(textbox, { key: "Enter", ctrlKey: true });
    expect(onSubmit).not.toHaveBeenCalled();

    fireEvent.compositionEnd(textbox);
    fireEvent.keyDown(textbox, { key: "Enter", ctrlKey: true });
    expect(onSubmit).toHaveBeenCalledWith("中文输入草稿");
  });

  it("does not submit on Ctrl+Enter when only legacy IME keyCode is present", () => {
    const onSubmit = vi.fn();

    render(<PromptInput onSubmit={onSubmit} />);
    const textbox = screen.getByRole("textbox", { name: "Prompt input" });

    fireEvent.change(textbox, { target: { value: "Legacy fallback draft" } });
    const legacyImeSubmitEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      ctrlKey: true,
      bubbles: true,
      cancelable: true
    });
    Object.defineProperty(legacyImeSubmitEvent, "keyCode", { value: 229 });
    textbox.dispatchEvent(legacyImeSubmitEvent);
    expect(onSubmit).not.toHaveBeenCalled();

    fireEvent.keyDown(textbox, { key: "Enter", ctrlKey: true });
    expect(onSubmit).toHaveBeenCalledWith("Legacy fallback draft");
  });
});
