import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PromptInput } from "./PromptInput";

describe("PromptInput", () => {
  it("submits prompt and clears input", () => {
    const onSubmit = vi.fn();

    render(<PromptInput onSubmit={onSubmit} />);
    const textbox = screen.getByPlaceholderText("Type your prompt...");
    expect(textbox).toHaveAttribute("aria-label", "Prompt input");
    expect(textbox).toHaveAttribute("aria-keyshortcuts", "Control+Enter Meta+Enter");
    const hint = screen.getByText("Ctrl/Cmd + Enter to send");
    expect(textbox).toHaveAttribute("aria-describedby", hint.getAttribute("id"));

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
    const shortcutAccepted = fireEvent.keyDown(textbox, { key: "Enter", ctrlKey: true });

    expect(onSubmit).toHaveBeenCalledWith("Summarize migration risk");
    expect((textbox as HTMLTextAreaElement).value).toBe("");
    expect(shortcutAccepted).toBe(false);
  });

  it("ignores repeated Ctrl + Enter shortcuts to avoid duplicate submit", () => {
    const onSubmit = vi.fn();

    render(<PromptInput onSubmit={onSubmit} />);
    const textbox = screen.getByRole("textbox", { name: "Prompt input" });

    fireEvent.change(textbox, { target: { value: "De-duplicate keyboard submit" } });
    const repeatShortcutAccepted = fireEvent.keyDown(textbox, { key: "Enter", ctrlKey: true, repeat: true });

    expect(onSubmit).not.toHaveBeenCalled();
    expect((textbox as HTMLTextAreaElement).value).toBe("De-duplicate keyboard submit");
    expect(repeatShortcutAccepted).toBe(false);
  });

  it("keeps Alt + Ctrl/Cmd + Enter for host shortcuts instead of submitting", () => {
    const onSubmit = vi.fn();

    render(<PromptInput onSubmit={onSubmit} />);
    const textbox = screen.getByRole("textbox", { name: "Prompt input" });

    fireEvent.change(textbox, { target: { value: "Host shortcut chord" } });
    const altChordAccepted = fireEvent.keyDown(textbox, { key: "Enter", ctrlKey: true, altKey: true });

    expect(onSubmit).not.toHaveBeenCalled();
    expect((textbox as HTMLTextAreaElement).value).toBe("Host shortcut chord");
    expect(altChordAccepted).toBe(true);
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
    expect(textbox).not.toHaveAttribute("aria-keyshortcuts");
    fireEvent.click(loadingButton);
    fireEvent.keyDown(textbox, { key: "Enter", ctrlKey: true });
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("restores shortcut metadata after submitting state exits", () => {
    const onSubmit = vi.fn();
    const { rerender } = render(<PromptInput onSubmit={onSubmit} submitting />);
    const textbox = screen.getByRole("textbox", { name: "Prompt input" });
    expect(textbox).not.toHaveAttribute("aria-keyshortcuts");

    rerender(<PromptInput onSubmit={onSubmit} submitting={false} />);
    expect(screen.getByRole("textbox", { name: "Prompt input" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Control+Enter Meta+Enter"
    );
  });

  it("keeps send action disabled when onSubmit is missing", () => {
    render(<PromptInput ariaLabel="No submit handler prompt" />);
    const textbox = screen.getByRole("textbox", { name: "No submit handler prompt" });
    const sendButton = screen.getByRole("button", { name: "Send" });

    fireEvent.change(textbox, { target: { value: "Draft that should remain in place" } });

    expect(sendButton).toBeDisabled();
    expect(textbox).not.toHaveAttribute("aria-keyshortcuts");

    const shortcutAccepted = fireEvent.keyDown(textbox, { key: "Enter", ctrlKey: true });
    expect(shortcutAccepted).toBe(true);
    expect((textbox as HTMLTextAreaElement).value).toBe("Draft that should remain in place");
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

  it("supports localized aria label and hint copy", () => {
    const onSubmit = vi.fn();
    render(
      <PromptInput
        onSubmit={onSubmit}
        ariaLabel="智能提示输入"
        shortcutHint="按 Ctrl/Cmd + Enter 提交"
        submittingHint="正在生成建议..."
      />
    );

    expect(screen.getByRole("textbox", { name: "智能提示输入" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Control+Enter Meta+Enter"
    );
    const hint = screen.getByText("按 Ctrl/Cmd + Enter 提交");
    expect(hint).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "智能提示输入" })).toHaveAttribute(
      "aria-describedby",
      hint.getAttribute("id")
    );
    expect(screen.queryByText("正在生成建议...")).not.toBeInTheDocument();
  });

  it("omits described-by semantics when active hint content is blank", () => {
    const onSubmit = vi.fn();
    const { rerender } = render(
      <PromptInput onSubmit={onSubmit} ariaLabel="Hint semantics prompt" shortcutHint="   " />
    );

    const textbox = screen.getByRole("textbox", { name: "Hint semantics prompt" });
    expect(textbox).not.toHaveAttribute("aria-describedby");

    rerender(
      <PromptInput
        onSubmit={onSubmit}
        ariaLabel="Hint semantics prompt"
        submitting
        shortcutHint="Ctrl/Cmd + Enter to send"
        submittingHint="   "
      />
    );

    expect(screen.getByRole("textbox", { name: "Hint semantics prompt" })).not.toHaveAttribute(
      "aria-describedby"
    );
  });

  it("keeps numeric hint semantics wired through aria-describedby", () => {
    const onSubmit = vi.fn();
    const { rerender } = render(<PromptInput onSubmit={onSubmit} ariaLabel="Numeric hint prompt" shortcutHint={0} />);

    const shortcutTextbox = screen.getByRole("textbox", { name: "Numeric hint prompt" });
    const shortcutHint = screen.getByText("0");
    expect(shortcutTextbox).toHaveAttribute("aria-describedby", shortcutHint.getAttribute("id"));

    rerender(<PromptInput onSubmit={onSubmit} ariaLabel="Numeric hint prompt" submitting submittingHint={0} />);

    const submittingTextbox = screen.getByRole("textbox", { name: "Numeric hint prompt" });
    const submittingHint = screen.getByText("0");
    expect(submittingTextbox).toHaveAttribute("aria-describedby", submittingHint.getAttribute("id"));
  });

  it("falls back to default prompt label when ariaLabel is blank", () => {
    render(<PromptInput ariaLabel="   " />);

    const textbox = screen.getByRole("textbox", { name: "Prompt input" });
    expect(textbox).toHaveAttribute("aria-label", "Prompt input");
  });

  it("ignores blank ariaLabelledBy and preserves ariaLabel naming", () => {
    render(<PromptInput ariaLabel="Release prompt" ariaLabelledBy="   " />);

    const textbox = screen.getByRole("textbox", { name: "Release prompt" });
    expect(textbox).toHaveAttribute("aria-label", "Release prompt");
    expect(textbox).not.toHaveAttribute("aria-labelledby");
  });

  it("prefers ariaLabelledBy over ariaLabel when both are provided", () => {
    render(
      <div>
        <h2 id="prompt-heading">Release workflow prompt</h2>
        <PromptInput ariaLabel="Fallback prompt name" ariaLabelledBy="prompt-heading" />
      </div>
    );

    const textbox = screen.getByRole("textbox", { name: "Release workflow prompt" });
    expect(textbox).toHaveAttribute("aria-labelledby", "prompt-heading");
    expect(textbox).not.toHaveAttribute("aria-label");
  });

  it("uses ariaLabelledBy naming when ariaLabel is blank", () => {
    render(
      <div>
        <h2 id="prompt-heading">Contextual prompt</h2>
        <PromptInput ariaLabel="   " ariaLabelledBy="prompt-heading" />
      </div>
    );

    const textbox = screen.getByRole("textbox", { name: "Contextual prompt" });
    expect(textbox).toHaveAttribute("aria-labelledby", "prompt-heading");
    expect(textbox).not.toHaveAttribute("aria-label");
  });

  it("tracks keyboard focus-visible intent and clears it only on plain primary pointer interaction", () => {
    render(<PromptInput ariaLabel="Focus-visible prompt" />);

    const textbox = screen.getByRole("textbox", { name: "Focus-visible prompt" });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(textbox);
    expect(textbox).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(textbox, { button: 1 });
    expect(textbox).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(textbox, { button: 0, ctrlKey: true });
    expect(textbox).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(textbox, { button: 0 });
    expect(textbox).not.toHaveAttribute("data-focus-visible");
  });

  it("tracks ownerDocument keyboard focus intent when focus-visible matching is unavailable", () => {
    render(
      <div>
        <button type="button">Before prompt input</button>
        <PromptInput ariaLabel="Document intent prompt" />
      </div>
    );

    const beforeButton = screen.getByRole("button", { name: "Before prompt input" });
    const textbox = screen.getByRole("textbox", { name: "Document intent prompt" });
    const matchesSpy = vi.spyOn(textbox, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(textbox);
    expect(textbox).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(textbox);
    fireEvent.mouseDown(document.body, { button: 2 });
    fireEvent.focus(textbox);
    expect(textbox).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(textbox);
    fireEvent.mouseDown(document.body, { button: 0, ctrlKey: true });
    fireEvent.focus(textbox);
    expect(textbox).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(textbox);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(textbox);
    expect(textbox).not.toHaveAttribute("data-focus-visible");

    matchesSpy.mockRestore();
  });

  it("tracks ownerDocument keyboard focus intent for iframe-hosted renders", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument;
    const iframeWindow = iframe.contentWindow;
    if (!iframeDocument || !iframeWindow) {
      throw new Error("expected iframe document/window to exist");
    }

    const iframeContainer = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(iframeContainer);

    const { getByRole } = render(<PromptInput ariaLabel="Iframe prompt" />, {
      container: iframeContainer,
      baseElement: iframeDocument.body
    });
    const textbox = getByRole("textbox", { name: "Iframe prompt" });
    const matchesSpy = vi.spyOn(textbox, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    try {
      iframeDocument.dispatchEvent(
        new iframeWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      fireEvent.focus(textbox);
      expect(textbox).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(textbox);
      iframeDocument.dispatchEvent(
        new iframeWindow.MouseEvent("mousedown", { bubbles: true, button: 0, ctrlKey: true })
      );
      fireEvent.focus(textbox);
      expect(textbox).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(textbox);
      iframeDocument.dispatchEvent(
        new iframeWindow.MouseEvent("mousedown", { bubbles: true, button: 0 })
      );
      fireEvent.focus(textbox);
      expect(textbox).not.toHaveAttribute("data-focus-visible");
    } finally {
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });
});
