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
});
