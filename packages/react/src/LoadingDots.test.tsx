import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { LoadingDots } from "./LoadingDots";

describe("LoadingDots", () => {
  it("renders status semantics with default label", () => {
    render(<LoadingDots />);
    const dots = screen.getByRole("status", { name: "Loading" });

    expect(dots).toHaveAttribute("aria-live", "polite");
    expect(dots).toHaveAttribute("aria-busy", "true");
  });

  it("animates dots over time", () => {
    vi.useFakeTimers();

    render(<LoadingDots label="Generating" interval={120} dotCount={3} />);
    const dots = screen.getByRole("status", { name: "Generating" });
    expect(dots.textContent).toBe(".  ");

    act(() => {
      vi.advanceTimersByTime(120);
    });
    expect(dots.textContent).toBe(".. ");

    act(() => {
      vi.advanceTimersByTime(120);
    });
    expect(dots.textContent).toBe("...");

    vi.useRealTimers();
  });

  it("supports paused branch and live override", () => {
    render(<LoadingDots running={false} dotCount={4} live="off" />);
    const dots = screen.getByRole("status", { name: "Loading" });

    expect(dots).toHaveAttribute("aria-busy", "false");
    expect(dots).toHaveAttribute("aria-live", "off");
    expect(dots).toHaveTextContent("....");
  });

  it("ignores blank label and falls back to default narration label", () => {
    render(<LoadingDots label="   " />);
    expect(screen.getByRole("status", { name: "Loading" })).toBeInTheDocument();
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

    const { unmount } = render(<LoadingDots interval={120} />, { container: host });
    expect(setIntervalSpy).toHaveBeenCalled();

    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();

    setIntervalSpy.mockRestore();
    clearIntervalSpy.mockRestore();
    iframe.remove();
  });
});
