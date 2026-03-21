import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders title and description with status semantics by default", () => {
    render(<Alert title="Heads up" description="Deploy is still rolling out." />);

    const alert = screen.getByRole("status");
    expect(alert).toHaveAttribute("aria-live", "polite");
    expect(alert).toHaveTextContent("Heads up");
    expect(alert).toHaveTextContent("Deploy is still rolling out.");
  });

  it("uses assertive alert semantics for danger tone", () => {
    render(<Alert tone="danger" title="Deploy failed" description="Rollback required." />);

    const alert = screen.getByRole("alert");
    expect(alert).toHaveAttribute("aria-live", "assertive");
  });

  it("supports custom aria-live behavior", () => {
    render(<Alert live="off" title="Muted alert" />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "off");
  });

  it("supports dismiss callbacks", () => {
    const onClose = vi.fn();
    render(<Alert title="Notice" onClose={onClose} closeLabel="Close notice" />);

    const closeButton = screen.getByRole("button", { name: "Close notice" });
    expect(closeButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("ignores blank closeLabel and falls back to default dismiss button name", () => {
    render(<Alert title="Notice" onClose={() => {}} closeLabel="   " />);
    expect(screen.getByRole("button", { name: "Dismiss alert" })).toBeInTheDocument();
  });

  it("supports explicit ariaLabel and ignores blank values", () => {
    const { rerender } = render(<Alert title="Named alert" ariaLabel="Release readiness status" />);
    expect(screen.getByRole("status", { name: "Release readiness status" })).toBeInTheDocument();

    rerender(<Alert title="Named alert" ariaLabel="   " />);
    expect(screen.getByRole("status")).not.toHaveAttribute("aria-label");
  });

  it("tracks keyboard focus-visible intent and clears it only on primary pointer interaction", () => {
    render(<Alert title="Notice" onClose={() => {}} closeLabel="Focus-visible dismiss" />);

    const closeButton = screen.getByRole("button", { name: "Focus-visible dismiss" });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(closeButton);
    expect(closeButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(closeButton, { button: 1 });
    expect(closeButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(closeButton, { button: 0 });
    expect(closeButton).not.toHaveAttribute("data-focus-visible");
  });

  it("tracks ownerDocument keyboard focus intent when focus-visible matching is unavailable", () => {
    render(
      <div>
        <button type="button">Before alert close</button>
        <Alert title="Notice" onClose={() => {}} closeLabel="Document intent dismiss" />
      </div>
    );

    const beforeButton = screen.getByRole("button", { name: "Before alert close" });
    const closeButton = screen.getByRole("button", { name: "Document intent dismiss" });
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(closeButton);
    expect(closeButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(closeButton);
    fireEvent.mouseDown(document.body, { button: 2 });
    fireEvent.focus(closeButton);
    expect(closeButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(closeButton);
    fireEvent.mouseDown(document.body, { button: 0, ctrlKey: true });
    fireEvent.focus(closeButton);
    expect(closeButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(closeButton);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(closeButton);
    expect(closeButton).not.toHaveAttribute("data-focus-visible");

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

    const { getByRole } = render(
      <Alert title="Notice" onClose={() => {}} closeLabel="Iframe dismiss" />,
      {
        container: iframeContainer,
        baseElement: iframeDocument.body
      }
    );
    const closeButton = getByRole("button", { name: "Iframe dismiss" });
    const matchesSpy = vi.spyOn(closeButton, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    try {
      iframeDocument.dispatchEvent(
        new iframeWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      fireEvent.focus(closeButton);
      expect(closeButton).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(closeButton);
      iframeDocument.dispatchEvent(
        new iframeWindow.MouseEvent("mousedown", { bubbles: true, button: 0 })
      );
      fireEvent.focus(closeButton);
      expect(closeButton).not.toHaveAttribute("data-focus-visible");
    } finally {
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });

  it("applies close-button pressed state only for primary pointer", () => {
    render(<Alert title="Notice" onClose={() => {}} closeLabel="Pointer dismiss" />);
    const closeButton = screen.getByRole("button", { name: "Pointer dismiss" });

    fireEvent.mouseDown(closeButton, { button: 1 });
    expect(closeButton).not.toHaveAttribute("data-pressed");

    fireEvent.mouseDown(closeButton, { button: 0, ctrlKey: true });
    expect(closeButton).not.toHaveAttribute("data-pressed");

    fireEvent.mouseDown(closeButton, { button: 0 });
    expect(closeButton).toHaveAttribute("data-pressed", "true");

    fireEvent.mouseUp(closeButton, { button: 1 });
    expect(closeButton).toHaveAttribute("data-pressed", "true");

    fireEvent.mouseUp(closeButton, { button: 0 });
    expect(closeButton).not.toHaveAttribute("data-pressed");
  });

  it("supports keyboard pressed-state feedback for unmodified Enter/Space keys", () => {
    render(<Alert title="Notice" onClose={() => {}} closeLabel="Keyboard dismiss" />);
    const closeButton = screen.getByRole("button", { name: "Keyboard dismiss" });

    fireEvent.focus(closeButton);
    fireEvent.keyDown(closeButton, { key: "Enter" });
    expect(closeButton).toHaveAttribute("data-pressed", "true");
    fireEvent.keyUp(closeButton, { key: "Enter" });
    expect(closeButton).not.toHaveAttribute("data-pressed");

    fireEvent.keyDown(closeButton, { key: "Spacebar" });
    expect(closeButton).toHaveAttribute("data-pressed", "true");
    fireEvent.keyUp(closeButton, { key: "Spacebar" });
    expect(closeButton).not.toHaveAttribute("data-pressed");

    fireEvent.keyDown(closeButton, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    expect(closeButton).not.toHaveAttribute("data-pressed");

    fireEvent.keyDown(closeButton, { key: "Enter", keyCode: 229, which: 229 });
    expect(closeButton).not.toHaveAttribute("data-pressed");
  });

  it("ignores Ctrl/Meta/Alt-modified close-button activation keys for pressed-state feedback", () => {
    render(<Alert title="Notice" onClose={() => {}} closeLabel="Modifier dismiss" />);
    const closeButton = screen.getByRole("button", { name: "Modifier dismiss" });

    fireEvent.focus(closeButton);
    fireEvent.keyDown(closeButton, { key: "Enter", ctrlKey: true });
    fireEvent.keyDown(closeButton, { key: " ", metaKey: true });
    fireEvent.keyDown(closeButton, { key: "Space", altKey: true });

    expect(closeButton).not.toHaveAttribute("data-pressed");
  });
});
