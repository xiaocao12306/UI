import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { installMatchMediaMock } from "./test-utils/matchMedia";
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

  it("respects reduced-motion and renders full text immediately", () => {
    const matchMediaMock = installMatchMediaMock({ initialMatches: true });
    const onComplete = vi.fn();

    render(<StreamingText text="Reduced motion response" onComplete={onComplete} />);
    const status = screen.getByRole("status", { name: "Streaming text" });

    expect(status).toHaveTextContent("Reduced motion response");
    expect(status).toHaveAttribute("aria-busy", "false");
    expect(onComplete).toHaveBeenCalledTimes(1);

    matchMediaMock.restore();
  });

  it("keeps streaming when respectReducedMotion is disabled", () => {
    vi.useFakeTimers();
    const matchMediaMock = installMatchMediaMock({ initialMatches: true });

    render(<StreamingText text="AB" speed={20} respectReducedMotion={false} />);
    const status = screen.getByRole("status", { name: "Streaming text" });
    expect(status).toHaveTextContent("|");

    act(() => {
      vi.advanceTimersByTime(20);
    });
    expect(status).toHaveTextContent("A|");

    matchMediaMock.restore();
    vi.useRealTimers();
  });

  it("finishes immediately when reduced-motion preference toggles during streaming", () => {
    vi.useFakeTimers();
    const matchMediaMock = installMatchMediaMock({ initialMatches: false });

    render(<StreamingText text="ABCD" speed={20} />);
    const status = screen.getByRole("status", { name: "Streaming text" });
    expect(status).toHaveAttribute("aria-busy", "true");
    expect(status).toHaveTextContent("|");

    act(() => {
      vi.advanceTimersByTime(20);
    });
    expect(status).toHaveTextContent("A|");

    act(() => {
      matchMediaMock.setMatches(true);
    });
    expect(status).toHaveAttribute("aria-busy", "false");
    expect(status).toHaveTextContent("ABCD");

    matchMediaMock.restore();
    vi.useRealTimers();
  });
});
