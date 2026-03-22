import { act, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { StreamingCodeBlock } from "./StreamingCodeBlock";

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
});
