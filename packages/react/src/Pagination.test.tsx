import * as React from "react";
import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("returns null when there is only one page", () => {
    const { container } = render(<Pagination page={1} pageCount={1} onPageChange={() => {}} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("returns null without throwing when pageCount is zero or negative", () => {
    const { container: zeroContainer } = render(<Pagination page={1} pageCount={0} onPageChange={() => {}} />);
    expect(zeroContainer).toBeEmptyDOMElement();

    const { container: negativeContainer } = render(<Pagination page={1} pageCount={-2} onPageChange={() => {}} />);
    expect(negativeContainer).toBeEmptyDOMElement();
  });

  it("marks current page with aria-current", () => {
    render(<Pagination page={3} pageCount={8} onPageChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Current page, 3" })).toHaveAttribute("aria-current", "page");
  });

  it("uses default navigation label when ariaLabelledBy is not provided", () => {
    render(<Pagination page={3} pageCount={8} onPageChange={() => {}} />);
    expect(screen.getByRole("navigation", { name: "Pagination" })).toBeInTheDocument();
  });

  it("ignores blank ariaLabel and falls back to default navigation label", () => {
    render(<Pagination page={3} pageCount={8} onPageChange={() => {}} ariaLabel="   " />);
    expect(screen.getByRole("navigation", { name: "Pagination" })).toBeInTheDocument();
  });

  it("supports ariaLabelledBy naming and suppresses fallback aria-label", () => {
    render(
      <div>
        <h2 id="release-pages-heading">Release pages</h2>
        <Pagination page={3} pageCount={8} onPageChange={() => {}} ariaLabelledBy="release-pages-heading" />
      </div>
    );

    const navigation = screen.getByRole("navigation", { name: "Release pages" });
    expect(navigation).toHaveAttribute("aria-labelledby", "release-pages-heading");
    expect(navigation).not.toHaveAttribute("aria-label");
  });

  it("ignores blank ariaLabelledBy and keeps explicit ariaLabel naming", () => {
    render(
      <Pagination
        page={3}
        pageCount={8}
        onPageChange={() => {}}
        ariaLabelledBy="   "
        ariaLabel="Release page navigation"
      />
    );

    const navigation = screen.getByRole("navigation", { name: "Release page navigation" });
    expect(navigation).toHaveAttribute("aria-label", "Release page navigation");
    expect(navigation).not.toHaveAttribute("aria-labelledby");
  });

  it("moves to previous and next page", () => {
    const onPageChange = vi.fn();
    render(<Pagination page={3} pageCount={8} onPageChange={onPageChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Go to previous page" }));
    fireEvent.click(screen.getByRole("button", { name: "Go to next page" }));

    expect(onPageChange).toHaveBeenNthCalledWith(1, 2);
    expect(onPageChange).toHaveBeenNthCalledWith(2, 4);
  });

  it("disables previous controls on first page", () => {
    render(<Pagination page={1} pageCount={8} onPageChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Go to first page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Go to previous page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Go to next page" })).not.toBeDisabled();
  });

  it("supports first and last jump controls", () => {
    const onPageChange = vi.fn();
    render(<Pagination page={4} pageCount={10} onPageChange={onPageChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Go to first page" }));
    fireEvent.click(screen.getByRole("button", { name: "Go to last page" }));

    expect(onPageChange).toHaveBeenNthCalledWith(1, 1);
    expect(onPageChange).toHaveBeenNthCalledWith(2, 10);
  });

  it("renders compact tokens with ellipsis for large page sets", () => {
    render(<Pagination page={6} pageCount={20} onPageChange={() => {}} />);
    expect(screen.getAllByText("…").length).toBeGreaterThan(0);
    expect(screen.getByRole("button", { name: "Current page, 6" })).toBeInTheDocument();
  });

  it("does not call onPageChange when disabled", () => {
    const onPageChange = vi.fn();
    render(<Pagination page={4} pageCount={10} onPageChange={onPageChange} disabled />);

    fireEvent.click(screen.getByRole("button", { name: "Go to page 5" }));
    fireEvent.click(screen.getByRole("button", { name: "Go to next page" }));

    expect(onPageChange).not.toHaveBeenCalled();
  });

  it("does not emit redundant events when selecting current page", () => {
    const onPageChange = vi.fn();
    render(<Pagination page={4} pageCount={10} onPageChange={onPageChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Current page, 4" }));
    expect(onPageChange).not.toHaveBeenCalled();
  });

  it("supports Home/End/PageUp/PageDown and arrow keyboard shortcuts on navigation", () => {
    const onPageChange = vi.fn();
    render(<Pagination page={4} pageCount={10} onPageChange={onPageChange} />);

    const activeButton = screen.getByRole("button", { name: "Current page, 4" });
    fireEvent.keyDown(activeButton, { key: "Home" });
    fireEvent.keyDown(activeButton, { key: "End" });
    fireEvent.keyDown(activeButton, { key: "ArrowLeft" });
    fireEvent.keyDown(activeButton, { key: "ArrowRight" });
    fireEvent.keyDown(activeButton, { key: "PageUp" });
    fireEvent.keyDown(activeButton, { key: "PageDown" });

    expect(onPageChange).toHaveBeenNthCalledWith(1, 1);
    expect(onPageChange).toHaveBeenNthCalledWith(2, 10);
    expect(onPageChange).toHaveBeenNthCalledWith(3, 3);
    expect(onPageChange).toHaveBeenNthCalledWith(4, 5);
    expect(onPageChange).toHaveBeenNthCalledWith(5, 3);
    expect(onPageChange).toHaveBeenNthCalledWith(6, 5);
  });

  it("exposes keyboard shortcut hints on enabled controls and omits them on disabled controls", () => {
    const { rerender } = render(<Pagination page={4} pageCount={10} onPageChange={() => {}} />);

    expect(screen.getByRole("button", { name: "Go to first page" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Home PageUp End PageDown ArrowLeft ArrowRight"
    );
    expect(screen.getByRole("button", { name: "Current page, 4" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Home PageUp End PageDown ArrowLeft ArrowRight"
    );
    expect(screen.getByRole("button", { name: "Go to next page" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Home PageUp End PageDown ArrowLeft ArrowRight"
    );

    rerender(<Pagination page={4} pageCount={10} onPageChange={() => {}} disabled />);
    expect(screen.getByRole("button", { name: "Current page, 4" })).not.toHaveAttribute("aria-keyshortcuts");
  });

  it("omits boundary-unavailable Home/End shortcut hints on first and last page", () => {
    const { rerender } = render(<Pagination page={1} pageCount={10} onPageChange={() => {}} />);

    expect(screen.getByRole("button", { name: "Current page, 1" })).toHaveAttribute(
      "aria-keyshortcuts",
      "End PageDown ArrowLeft ArrowRight"
    );
    expect(screen.getByRole("button", { name: "Go to next page" })).toHaveAttribute(
      "aria-keyshortcuts",
      "End PageDown ArrowLeft ArrowRight"
    );

    rerender(<Pagination page={10} pageCount={10} onPageChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Current page, 10" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Home PageUp ArrowLeft ArrowRight"
    );
    expect(screen.getByRole("button", { name: "Go to previous page" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Home PageUp ArrowLeft ArrowRight"
    );
  });

  it("ignores Ctrl/Meta/Alt-modified Home/End/PageUp/PageDown/arrow shortcuts", () => {
    const onPageChange = vi.fn();
    render(<Pagination page={4} pageCount={10} onPageChange={onPageChange} />);

    const activeButton = screen.getByRole("button", { name: "Current page, 4" });
    fireEvent.keyDown(activeButton, { key: "Home", ctrlKey: true });
    fireEvent.keyDown(activeButton, { key: "End", metaKey: true });
    fireEvent.keyDown(activeButton, { key: "PageUp", ctrlKey: true });
    fireEvent.keyDown(activeButton, { key: "PageDown", metaKey: true });
    fireEvent.keyDown(activeButton, { key: "ArrowLeft", altKey: true });
    fireEvent.keyDown(activeButton, { key: "ArrowRight", ctrlKey: true });
    expect(onPageChange).not.toHaveBeenCalled();

    fireEvent.keyDown(activeButton, { key: "End", shiftKey: true });
    expect(onPageChange).toHaveBeenCalledWith(10);
  });

  it("keeps boundary Home/End/PageUp/PageDown keys passive when already at first/last page", async () => {
    const onPageChange = vi.fn();
    const { rerender } = render(<Pagination page={1} pageCount={10} onPageChange={onPageChange} />);

    const firstButton = screen.getByRole("button", { name: "Current page, 1" });
    const homeEvent = new KeyboardEvent("keydown", { key: "Home", bubbles: true, cancelable: true });
    await act(async () => {
      firstButton.dispatchEvent(homeEvent);
    });
    expect(homeEvent.defaultPrevented).toBe(false);
    expect(onPageChange).not.toHaveBeenCalled();

    const pageUpEvent = new KeyboardEvent("keydown", { key: "PageUp", bubbles: true, cancelable: true });
    await act(async () => {
      firstButton.dispatchEvent(pageUpEvent);
    });
    expect(pageUpEvent.defaultPrevented).toBe(false);
    expect(onPageChange).not.toHaveBeenCalled();

    const endEvent = new KeyboardEvent("keydown", { key: "End", bubbles: true, cancelable: true });
    await act(async () => {
      firstButton.dispatchEvent(endEvent);
    });
    expect(endEvent.defaultPrevented).toBe(true);
    expect(onPageChange).toHaveBeenCalledWith(10);

    onPageChange.mockClear();
    rerender(<Pagination page={10} pageCount={10} onPageChange={onPageChange} />);
    const lastButton = screen.getByRole("button", { name: "Current page, 10" });
    const endBoundaryEvent = new KeyboardEvent("keydown", { key: "End", bubbles: true, cancelable: true });
    await act(async () => {
      lastButton.dispatchEvent(endBoundaryEvent);
    });
    expect(endBoundaryEvent.defaultPrevented).toBe(false);
    expect(onPageChange).not.toHaveBeenCalled();

    const pageDownBoundaryEvent = new KeyboardEvent("keydown", {
      key: "PageDown",
      bubbles: true,
      cancelable: true
    });
    await act(async () => {
      lastButton.dispatchEvent(pageDownBoundaryEvent);
    });
    expect(pageDownBoundaryEvent.defaultPrevented).toBe(false);
    expect(onPageChange).not.toHaveBeenCalled();

    const homeBoundaryEvent = new KeyboardEvent("keydown", { key: "Home", bubbles: true, cancelable: true });
    await act(async () => {
      lastButton.dispatchEvent(homeBoundaryEvent);
    });
    expect(homeBoundaryEvent.defaultPrevented).toBe(true);
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it("keeps focus on the newly active page button after keyboard page changes", async () => {
    function ControlledPaginationHarness() {
      const [page, setPage] = React.useState(4);
      return <Pagination page={page} pageCount={10} onPageChange={setPage} />;
    }

    render(<ControlledPaginationHarness />);

    const currentButton = screen.getByRole("button", { name: "Current page, 4" });
    await act(async () => {
      currentButton.focus();
    });
    await act(async () => {
      fireEvent.keyDown(currentButton, { key: "End" });
    });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Current page, 10" })).toHaveFocus();
    });

    await act(async () => {
      fireEvent.keyDown(screen.getByRole("button", { name: "Current page, 10" }), { key: "Home" });
    });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Current page, 1" })).toHaveFocus();
    });
  });

  it("keeps focus on the newly active page button after Arrow key pagination", async () => {
    function ControlledPaginationHarness() {
      const [page, setPage] = React.useState(4);
      return <Pagination page={page} pageCount={10} onPageChange={setPage} />;
    }

    render(<ControlledPaginationHarness />);

    const currentButton = screen.getByRole("button", { name: "Current page, 4" });
    await act(async () => {
      currentButton.focus();
    });
    await act(async () => {
      fireEvent.keyDown(currentButton, { key: "ArrowRight" });
    });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Current page, 5" })).toHaveFocus();
    });

    await act(async () => {
      fireEvent.keyDown(screen.getByRole("button", { name: "Current page, 5" }), { key: "ArrowLeft" });
    });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Current page, 4" })).toHaveFocus();
    });
  });

  it("tracks keyboard focus-visible intent and clears it only on primary pointer interaction", () => {
    render(<Pagination page={4} pageCount={10} onPageChange={() => {}} />);

    const currentButton = screen.getByRole("button", { name: "Current page, 4" });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(currentButton);
    expect(currentButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(currentButton, { button: 1 });
    expect(currentButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(currentButton, { button: 0, ctrlKey: true });
    expect(currentButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.pointerDown(currentButton, { pointerType: "touch", button: -1 });
    expect(currentButton).not.toHaveAttribute("data-focus-visible");

    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(currentButton);
    expect(currentButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.mouseDown(currentButton, { button: 0 });
    expect(currentButton).not.toHaveAttribute("data-focus-visible");
  });

  it("tracks ownerDocument keyboard focus intent when focus-visible matching is unavailable", () => {
    render(
      <div>
        <button type="button">Before pagination</button>
        <Pagination page={4} pageCount={10} onPageChange={() => {}} />
      </div>
    );

    const beforeButton = screen.getByRole("button", { name: "Before pagination" });
    const currentButton = screen.getByRole("button", { name: "Current page, 4" });
    const matchesSpy = vi.spyOn(currentButton, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(beforeButton, { button: 0 });
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(currentButton);
    expect(currentButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(currentButton);
    fireEvent.mouseDown(document.body, { button: 2 });
    fireEvent.focus(currentButton);
    expect(currentButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(currentButton);
    fireEvent.mouseDown(document.body, { button: 0, ctrlKey: true });
    fireEvent.focus(currentButton);
    expect(currentButton).toHaveAttribute("data-focus-visible", "true");

    fireEvent.blur(currentButton);
    fireEvent.mouseDown(document.body, { button: 0 });
    fireEvent.focus(currentButton);
    expect(currentButton).not.toHaveAttribute("data-focus-visible");

    matchesSpy.mockRestore();
  });

  it("tracks ownerDocument keyboard focus intent for iframe-hosted renders", () => {
    const iframe = document.createElement("iframe");
    document.body.append(iframe);
    const iframeDocument = iframe.contentDocument;
    const iframeWindow = iframe.contentWindow;
    if (!iframeDocument || !iframeWindow) {
      throw new Error("iframe contentDocument/window is unavailable");
    }
    const host = iframeDocument.createElement("div");
    iframeDocument.body.append(host);

    const { getByRole } = render(
      <Pagination page={4} pageCount={10} onPageChange={() => {}} />,
      { container: host, baseElement: iframeDocument.body }
    );
    const currentButton = getByRole("button", { name: "Current page, 4" });
    const matchesSpy = vi.spyOn(currentButton, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    try {
      iframeDocument.dispatchEvent(
        new iframeWindow.KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      fireEvent.focus(currentButton);
      expect(currentButton).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(currentButton);
      iframeDocument.dispatchEvent(
        new iframeWindow.MouseEvent("mousedown", { bubbles: true, button: 0, ctrlKey: true })
      );
      fireEvent.focus(currentButton);
      expect(currentButton).toHaveAttribute("data-focus-visible", "true");

      fireEvent.blur(currentButton);
      iframeDocument.dispatchEvent(
        new iframeWindow.MouseEvent("mousedown", { bubbles: true, button: 0 })
      );
      fireEvent.focus(currentButton);
      expect(currentButton).not.toHaveAttribute("data-focus-visible");
    } finally {
      matchesSpy.mockRestore();
      iframe.remove();
    }
  });

  it("mirrors ArrowLeft/ArrowRight keyboard shortcuts in rtl containers", () => {
    const onPageChange = vi.fn();
    render(
      <div dir="rtl">
        <Pagination page={4} pageCount={10} onPageChange={onPageChange} />
      </div>
    );

    const activeButton = screen.getByRole("button", { name: "Current page, 4" });
    fireEvent.keyDown(activeButton, { key: "ArrowRight" });
    fireEvent.keyDown(activeButton, { key: "ArrowLeft" });

    expect(onPageChange).toHaveBeenNthCalledWith(1, 3);
    expect(onPageChange).toHaveBeenNthCalledWith(2, 5);
  });

  it("uses ownerDocument computed style direction in iframe-hosted renders", () => {
    const iframe = document.createElement("iframe");
    document.body.append(iframe);
    const iframeDocument = iframe.contentDocument as Document;
    const iframeWindow = iframeDocument.defaultView as Window;
    const host = iframeDocument.createElement("div");
    iframeDocument.body.append(host);

    const originalGetComputedStyle = iframeWindow.getComputedStyle;
    const getComputedStyleSpy = vi.spyOn(iframeWindow, "getComputedStyle").mockImplementation((element, pseudoElt) => {
      const style = originalGetComputedStyle.call(iframeWindow, element, pseudoElt);
      return new Proxy(style, {
        get(target, property, receiver) {
          if (property === "direction") {
            return "rtl";
          }
          return Reflect.get(target, property, receiver);
        }
      }) as CSSStyleDeclaration;
    });

    const onPageChange = vi.fn();
    render(<Pagination page={4} pageCount={10} onPageChange={onPageChange} />, { container: host });

    const activeButton = within(host).getByRole("button", { name: "Current page, 4" });
    fireEvent.keyDown(activeButton, { key: "ArrowRight" });
    fireEvent.keyDown(activeButton, { key: "ArrowLeft" });

    expect(onPageChange).toHaveBeenNthCalledWith(1, 3);
    expect(onPageChange).toHaveBeenNthCalledWith(2, 5);

    getComputedStyleSpy.mockRestore();
    iframe.remove();
  });

  it("supports custom aria label generators", () => {
    render(
      <Pagination
        page={2}
        pageCount={6}
        onPageChange={() => {}}
        getItemAriaLabel={(type, pageNumber) => `${type}:${pageNumber}`}
      />
    );

    expect(screen.getByRole("button", { name: "first:1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "current:2" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "page:3" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "next:3" })).toBeInTheDocument();
  });

  it("ignores blank custom aria labels and falls back to default pagination narration", () => {
    render(
      <Pagination
        page={2}
        pageCount={6}
        onPageChange={() => {}}
        getItemAriaLabel={() => "   "}
      />
    );

    expect(screen.getByRole("button", { name: "Go to first page" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Current page, 2" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go to next page" })).toBeInTheDocument();
  });

  it("clamps custom previous/next aria label pages at boundaries", () => {
    const getItemAriaLabel = vi.fn((type: string, pageNumber: number) => `${type}:${pageNumber}`);

    const { rerender } = render(
      <Pagination page={1} pageCount={6} onPageChange={() => {}} getItemAriaLabel={getItemAriaLabel} />
    );

    expect(screen.getByRole("button", { name: "previous:1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "next:2" })).toBeInTheDocument();

    rerender(<Pagination page={6} pageCount={6} onPageChange={() => {}} getItemAriaLabel={getItemAriaLabel} />);

    expect(screen.getByRole("button", { name: "previous:5" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "next:6" })).toBeInTheDocument();
  });

  it("hides first and last controls when showFirstLast is disabled", () => {
    render(<Pagination page={4} pageCount={10} onPageChange={() => {}} showFirstLast={false} />);

    expect(screen.queryByRole("button", { name: "Go to first page" })).toBeNull();
    expect(screen.queryByRole("button", { name: "Go to last page" })).toBeNull();
    expect(screen.getByRole("button", { name: "Go to previous page" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go to next page" })).toBeInTheDocument();
  });
});
