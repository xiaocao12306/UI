import { act, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { StreamingCodeBlock } from "./StreamingCodeBlock";
import { installMatchMediaMock } from "./test-utils/matchMedia";

describe("StreamingCodeBlock", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("streams characters over time and clears busy state when complete", () => {
    vi.useFakeTimers();
    const { container } = render(<StreamingCodeBlock code="const x = 1;" speed={10} />);
    const root = container.firstElementChild as HTMLElement;
    const codeNode = container.querySelector("code") as HTMLElement;

    expect(root).toHaveAttribute("aria-busy", "true");
    expect(root).toHaveAttribute("role", "region");
    expect(root).toHaveAttribute("aria-label", "Streaming code block");
    expect(root).toHaveAttribute("aria-live", "off");
    expect(codeNode).toHaveTextContent("");

    act(() => {
      vi.advanceTimersByTime(10);
    });
    expect(codeNode).toHaveTextContent("c");

    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(codeNode).toHaveTextContent("const x = 1;");
    expect(root).toHaveAttribute("aria-busy", "false");
  });

  it("renders full content immediately when speed is 0", () => {
    const { container } = render(<StreamingCodeBlock code="echo done" speed={0} />);
    const root = container.firstElementChild as HTMLElement;
    const codeNode = container.querySelector("code") as HTMLElement;

    expect(codeNode).toHaveTextContent("echo done");
    expect(root).toHaveAttribute("aria-busy", "false");
  });

  it("restarts streaming when code prop changes", () => {
    vi.useFakeTimers();
    const { container, rerender } = render(<StreamingCodeBlock code="abc" speed={10} />);
    const readCode = () => (container.querySelector("code") as HTMLElement).textContent;

    act(() => {
      vi.advanceTimersByTime(20);
    });
    expect(readCode()).toBe("ab");

    rerender(<StreamingCodeBlock code="xy" speed={10} />);
    expect(readCode()).toBe("");

    act(() => {
      vi.advanceTimersByTime(20);
    });
    expect(readCode()).toBe("xy");
  });

  it("falls back to default speed when speed is non-finite", () => {
    vi.useFakeTimers();
    const { container } = render(<StreamingCodeBlock code="AB" speed={Number.POSITIVE_INFINITY} />);
    const root = container.firstElementChild as HTMLElement;
    const codeNode = container.querySelector("code") as HTMLElement;

    expect(root).toHaveAttribute("aria-busy", "true");
    expect(codeNode).toHaveTextContent("");

    act(() => {
      vi.advanceTimersByTime(7);
    });
    expect(codeNode).toHaveTextContent("");

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(codeNode).toHaveTextContent("A");
  });

  it("normalizes fractional speed to stable integer interval timing", () => {
    vi.useFakeTimers();
    const { container } = render(<StreamingCodeBlock code="AB" speed={9.9} />);
    const codeNode = container.querySelector("code") as HTMLElement;

    act(() => {
      vi.advanceTimersByTime(8);
    });
    expect(codeNode).toHaveTextContent("");

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(codeNode).toHaveTextContent("A");
  });

  it("supports custom region label and live narration settings", () => {
    const { container } = render(
      <StreamingCodeBlock code="const ready = true;" speed={0} label="Release code stream" live="polite" />
    );
    const root = container.firstElementChild as HTMLElement;

    expect(root).toHaveAttribute("aria-label", "Release code stream");
    expect(root).toHaveAttribute("aria-live", "polite");
  });

  it("ignores blank label values and falls back to default narration name", () => {
    const { container } = render(<StreamingCodeBlock code="const ready = true;" speed={0} label="   " />);
    const root = container.firstElementChild as HTMLElement;

    expect(root).toHaveAttribute("aria-label", "Streaming code block");
  });

  it("supports explicit ariaLabel override", () => {
    const { container } = render(
      <StreamingCodeBlock code="const ready = true;" speed={0} label="Code stream" ariaLabel="Release code region" />
    );
    const root = container.firstElementChild as HTMLElement;

    expect(root).toHaveAttribute("aria-label", "Release code region");
    expect(root).not.toHaveAttribute("aria-labelledby");
  });

  it("prefers ariaLabelledBy over ariaLabel and label fallback", () => {
    const { container } = render(
      <div>
        <h3 id="code-heading">Release code heading</h3>
        <StreamingCodeBlock
          code="const ready = true;"
          speed={0}
          label="Code stream"
          ariaLabel="Fallback code region"
          ariaLabelledBy="code-heading"
        />
      </div>
    );
    const root = container.querySelector("[role='region']") as HTMLElement;

    expect(root).toHaveAttribute("aria-labelledby", "code-heading");
    expect(root).not.toHaveAttribute("aria-label");
  });

  it("ignores blank ariaLabelledBy and preserves ariaLabel naming", () => {
    const { container } = render(
      <StreamingCodeBlock
        code="const ready = true;"
        speed={0}
        ariaLabel="Release code region"
        ariaLabelledBy="   "
      />
    );
    const root = container.firstElementChild as HTMLElement;

    expect(root).toHaveAttribute("aria-label", "Release code region");
    expect(root).not.toHaveAttribute("aria-labelledby");
  });

  it("uses ownerDocument window interval timers in iframe-hosted renders", () => {
    const iframe = document.createElement("iframe");
    document.body.append(iframe);
    const iframeDocument = iframe.contentDocument as Document;
    const iframeWindow = iframeDocument.defaultView as Window;
    const host = iframeDocument.createElement("div");
    iframeDocument.body.append(host);

    const setIntervalSpy = vi.spyOn(iframeWindow, "setInterval");
    const clearIntervalSpy = vi.spyOn(iframeWindow, "clearInterval");

    const { unmount } = render(<StreamingCodeBlock code="const x = 1;" speed={12} />, {
      container: host
    });
    expect(setIntervalSpy).toHaveBeenCalled();

    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();

    setIntervalSpy.mockRestore();
    clearIntervalSpy.mockRestore();
    iframe.remove();
  });

  it("respects reduced-motion and renders full content immediately", () => {
    const matchMediaMock = installMatchMediaMock({ initialMatches: true });
    const { container } = render(<StreamingCodeBlock code="const ready = true;" speed={12} />);
    const root = container.firstElementChild as HTMLElement;
    const codeNode = container.querySelector("code") as HTMLElement;

    expect(codeNode).toHaveTextContent("const ready = true;");
    expect(root).toHaveAttribute("aria-busy", "false");

    matchMediaMock.restore();
  });

  it("allows streaming under reduced-motion when respectReducedMotion is false", () => {
    vi.useFakeTimers();
    const matchMediaMock = installMatchMediaMock({ initialMatches: true });

    const { container } = render(<StreamingCodeBlock code="AB" speed={10} respectReducedMotion={false} />);
    const codeNode = container.querySelector("code") as HTMLElement;

    expect(codeNode).toHaveTextContent("");

    act(() => {
      vi.advanceTimersByTime(10);
    });
    expect(codeNode).toHaveTextContent("A");

    matchMediaMock.restore();
  });

  it("falls back invalid runtime respectReducedMotion flag to reduced-motion safe branch", () => {
    const matchMediaMock = installMatchMediaMock({ initialMatches: true });

    const { container } = render(
      <StreamingCodeBlock code="const ready = true;" speed={12} respectReducedMotion={"false" as unknown as boolean} />
    );
    const root = container.firstElementChild as HTMLElement;
    const codeNode = container.querySelector("code") as HTMLElement;

    expect(codeNode).toHaveTextContent("const ready = true;");
    expect(root).toHaveAttribute("aria-busy", "false");

    matchMediaMock.restore();
  });
});
