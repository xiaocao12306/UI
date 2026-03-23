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

  it("falls back to default speed and startDelay when values are non-finite", () => {
    vi.useFakeTimers();

    render(<StreamingText text="AB" speed={Number.NaN} startDelay={Number.POSITIVE_INFINITY} />);
    const status = screen.getByRole("status", { name: "Streaming text" });
    expect(status).toHaveTextContent("|");

    act(() => {
      vi.advanceTimersByTime(15);
    });
    expect(status).toHaveTextContent("|");

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(status).toHaveTextContent("A|");
    vi.useRealTimers();
  });

  it("normalizes fractional speed and startDelay to stable integer timings", () => {
    vi.useFakeTimers();

    render(<StreamingText text="AB" speed={9.8} startDelay={10.7} />);
    const status = screen.getByRole("status", { name: "Streaming text" });
    expect(status).toHaveTextContent("|");

    act(() => {
      vi.advanceTimersByTime(18);
    });
    expect(status).toHaveTextContent("|");

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(status).toHaveTextContent("A|");
    vi.useRealTimers();
  });

  it("ignores blank label and falls back to default streaming narration name", () => {
    render(<StreamingText text="Result" streaming={false} label="   " />);
    expect(screen.getByRole("status", { name: "Streaming text" })).toBeInTheDocument();
  });

  it("supports explicit ariaLabel override", () => {
    render(<StreamingText text="Result" streaming={false} ariaLabel="Release streaming status" />);
    const status = screen.getByRole("status", { name: "Release streaming status" });
    expect(status).toHaveAttribute("aria-label", "Release streaming status");
    expect(status).not.toHaveAttribute("aria-labelledby");
  });

  it("prefers ariaLabelledBy over ariaLabel and label fallback", () => {
    render(
      <div>
        <h3 id="streaming-heading">Release streaming heading</h3>
        <StreamingText
          text="Result"
          streaming={false}
          label="Streaming text"
          ariaLabel="Fallback streaming status"
          ariaLabelledBy="streaming-heading"
        />
      </div>
    );

    const status = screen.getByRole("status", { name: "Release streaming heading" });
    expect(status).toHaveAttribute("aria-labelledby", "streaming-heading");
    expect(status).not.toHaveAttribute("aria-label");
  });

  it("ignores blank ariaLabelledBy and preserves ariaLabel naming", () => {
    render(
      <StreamingText
        text="Result"
        streaming={false}
        ariaLabel="Release streaming status"
        ariaLabelledBy="   "
      />
    );

    const status = screen.getByRole("status", { name: "Release streaming status" });
    expect(status).toHaveAttribute("aria-label", "Release streaming status");
    expect(status).not.toHaveAttribute("aria-labelledby");
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

  it("falls back invalid runtime streaming/cursor/showCursorWhenDone/preserveLineBreaks flags to safe defaults", () => {
    vi.useFakeTimers();

    render(
      <StreamingText
        text={"A\nB"}
        speed={20}
        streaming={"false" as unknown as boolean}
        cursor={"false" as unknown as boolean}
        showCursorWhenDone={"true" as unknown as boolean}
        preserveLineBreaks={"false" as unknown as boolean}
      />
    );
    const status = screen.getByRole("status", { name: "Streaming text" });
    expect(status).toHaveAttribute("aria-busy", "true");
    expect(status).toHaveStyle({ whiteSpace: "pre-wrap" });
    expect(status).toHaveTextContent("|");

    act(() => {
      vi.advanceTimersByTime(20 * 3);
    });
    expect(status).toHaveTextContent(/A\s*B/);
    expect(status).not.toHaveTextContent("|");
    expect(status).toHaveAttribute("aria-busy", "false");

    vi.useRealTimers();
  });

  it("falls back invalid runtime respectReducedMotion flag to reduced-motion safe branch", () => {
    const matchMediaMock = installMatchMediaMock({ initialMatches: true });

    render(<StreamingText text="Reduced motion response" respectReducedMotion={"false" as unknown as boolean} />);
    const status = screen.getByRole("status", { name: "Streaming text" });

    expect(status).toHaveTextContent("Reduced motion response");
    expect(status).toHaveAttribute("aria-busy", "false");

    matchMediaMock.restore();
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
