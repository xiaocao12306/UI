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

  it("treats numeric title/description/children as renderable alert content", () => {
    render(<Alert title={0} description={0}>{0}</Alert>);

    const alert = screen.getByRole("status");
    const contents = screen.getAllByText("0");
    expect(contents).toHaveLength(3);
    expect(alert).toHaveTextContent("000");
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

  it("normalizes runtime tone/live tokens and falls back invalid values to safe defaults", () => {
    const { rerender } = render(
      <Alert
        tone={" DANGER " as unknown as "danger"}
        live={" ASSERTIVE " as unknown as "assertive"}
        title="Danger runtime token"
      />
    );
    expect(screen.getByRole("alert", { name: "Danger runtime token" })).toHaveAttribute("aria-live", "assertive");

    rerender(
      <Alert
        tone={"critical" as unknown as "info"}
        live={"LOUD" as unknown as "polite"}
        title="Fallback runtime token"
      />
    );
    expect(screen.getByRole("status", { name: "Fallback runtime token" })).toHaveAttribute("aria-live", "polite");
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

  it("prefers ariaLabelledBy over ariaLabel when both are provided", () => {
    render(
      <div>
        <h2 id="alert-heading">Release readiness heading</h2>
        <Alert
          title="Named alert"
          ariaLabel="Fallback alert label"
          ariaLabelledBy="alert-heading"
        />
      </div>
    );

    const alert = screen.getByRole("status", { name: "Release readiness heading" });
    expect(alert).toHaveAttribute("aria-labelledby", "alert-heading");
    expect(alert).not.toHaveAttribute("aria-label");
  });

  it("ignores blank ariaLabelledBy and preserves ariaLabel naming", () => {
    render(
      <Alert
        title="Named alert"
        ariaLabel="Release readiness status"
        ariaLabelledBy="   "
      />
    );

    const alert = screen.getByRole("status", { name: "Release readiness status" });
    expect(alert).toHaveAttribute("aria-label", "Release readiness status");
    expect(alert).not.toHaveAttribute("aria-labelledby");
  });

  it("falls back to Alert name when non-text title omits ariaLabel and ariaLabelledBy", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(<Alert title={<span aria-hidden>✅</span>} description="Fallback naming for icon-only title." />);
      const alert = screen.getByRole("status", { name: "Alert" });
      expect(alert).toHaveAttribute("aria-label", "Alert");
      expect(alert).not.toHaveAttribute("aria-labelledby");
      expect(warnSpy).toHaveBeenCalledWith(
        "[Alert] Non-text title should provide ariaLabel or ariaLabelledBy."
      );
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("does not warn when non-text title provides ariaLabel", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(<Alert title={<span aria-hidden>✅</span>} ariaLabel="Release readiness status" />);
      expect(warnSpy).not.toHaveBeenCalled();
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("does not warn when non-text title provides ariaLabelledBy", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(
        <div>
          <h2 id="alert-heading">Release readiness heading</h2>
          <Alert title={<span aria-hidden>✅</span>} ariaLabelledBy="alert-heading" />
        </div>
      );
      expect(warnSpy).not.toHaveBeenCalled();
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("does not warn when rich non-text title exposes aria-label on inner node", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(<Alert title={<span aria-label="Release readiness status">✅</span>} />);
      expect(warnSpy).not.toHaveBeenCalled();
      expect(screen.getByRole("status", { name: "Release readiness status" })).toBeInTheDocument();
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("tracks keyboard focus-visible intent and clears it only on plain primary pointer interaction", () => {
    render(<Alert title="Notice" onClose={() => {}} closeLabel="Focus-visible dismiss" />);

    const closeButton = screen.getByRole("button", { name: "Focus-visible dismiss" });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(closeButton);
    expect(closeButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(closeButton, { button: 1 });
    expect(closeButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(closeButton, { button: 0, ctrlKey: true });
    expect(closeButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.pointerDown(closeButton, { pointerType: "touch", button: -1 });
    expect(closeButton).not.toHaveAttribute("data-focus-visible");

    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(closeButton);
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
        new iframeWindow.MouseEvent("mousedown", { bubbles: true, button: 0, ctrlKey: true })
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

    fireEvent.pointerDown(closeButton, { pointerType: "touch", button: 0 });
    expect(closeButton).toHaveAttribute("data-pressed", "true");
    fireEvent.pointerCancel(closeButton);
    expect(closeButton).not.toHaveAttribute("data-pressed");

    fireEvent.pointerDown(closeButton, { pointerType: "touch", button: -1 });
    expect(closeButton).toHaveAttribute("data-pressed", "true");
    fireEvent.pointerUp(closeButton, { pointerType: "touch", button: -1 });
    expect(closeButton).not.toHaveAttribute("data-pressed");
  });

  it("supports keyboard pressed-state feedback for unmodified Enter/Space keys", () => {
    render(<Alert title="Notice" onClose={() => {}} closeLabel="Keyboard dismiss" />);
    const closeButton = screen.getByRole("button", { name: "Keyboard dismiss" });
    const preemptActivationKeys = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " " || event.key === "Space" || event.key === "Spacebar") {
        event.preventDefault();
      }
    };

    fireEvent.focus(closeButton);

    try {
      document.addEventListener("keydown", preemptActivationKeys, true);
      fireEvent.keyDown(closeButton, { key: "Enter" });
      expect(closeButton).not.toHaveAttribute("data-pressed");
      fireEvent.keyDown(closeButton, { key: "Space" });
      expect(closeButton).not.toHaveAttribute("data-pressed");
    } finally {
      document.removeEventListener("keydown", preemptActivationKeys, true);
    }

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
