import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { StreamingText } from "./StreamingText";

describe("StreamingText", () => {
  it("streams characters and triggers onComplete", () => {
    vi.useFakeTimers();
    const onComplete = vi.fn();

    render(<StreamingText text="ABC" speed={20} startDelay={10} onComplete={onComplete} />);
    const status = screen.getByRole("status", { name: "Streaming text" });

    expect(status).toHaveAttribute("aria-busy", "true");
    expect(status.textContent).toBe("|");

    act(() => {
      vi.advanceTimersByTime(10 + 20 * 3);
    });

    expect(status).toHaveTextContent("ABC");
    expect(status).toHaveAttribute("aria-busy", "false");
    expect(onComplete).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it("supports non-streaming branch", () => {
    render(<StreamingText text="Final answer" streaming={false} />);
    const status = screen.getByRole("status", { name: "Streaming text" });

    expect(status).toHaveTextContent("Final answer");
    expect(status).toHaveAttribute("aria-busy", "false");
  });

  it("supports custom cursor and keep-cursor-on-complete", () => {
    vi.useFakeTimers();

    render(<StreamingText text="Hi" speed={10} cursorChar="▋" showCursorWhenDone />);
    const status = screen.getByRole("status", { name: "Streaming text" });

    act(() => {
      vi.advanceTimersByTime(20);
    });

    expect(status).toHaveTextContent("Hi▋");
    vi.useRealTimers();
  });

  it("ignores blank label and falls back to default streaming narration name", () => {
    render(<StreamingText text="Result" streaming={false} label="   " />);
    expect(screen.getByRole("status", { name: "Streaming text" })).toBeInTheDocument();
  });

  it("uses ownerDocument window timeout timers in iframe-hosted renders", () => {
    const iframe = document.createElement("iframe");
    document.body.append(iframe);
    const iframeDocument = iframe.contentDocument as Document;
    const iframeWindow = iframeDocument.defaultView as Window;
    const host = iframeDocument.createElement("div");
    iframeDocument.body.append(host);

    const setTimeoutSpy = vi.spyOn(iframeWindow, "setTimeout");
    const clearTimeoutSpy = vi.spyOn(iframeWindow, "clearTimeout");

    const { unmount } = render(<StreamingText text="Owner document timer" speed={20} startDelay={120} />, {
      container: host
    });
    expect(setTimeoutSpy).toHaveBeenCalled();

    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();

    setTimeoutSpy.mockRestore();
    clearTimeoutSpy.mockRestore();
    iframe.remove();
  });
});
