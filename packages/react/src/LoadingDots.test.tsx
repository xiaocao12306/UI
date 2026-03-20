import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { installMatchMediaMock } from "./test-utils/matchMedia";
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

  it("respects reduced-motion and keeps dots static when running", () => {
    vi.useFakeTimers();
    const matchMediaMock = installMatchMediaMock({ initialMatches: true });

    render(<LoadingDots dotCount={4} />);
    const dots = screen.getByRole("status", { name: "Loading" });
    expect(dots).toHaveTextContent("....");

    act(() => {
      vi.advanceTimersByTime(800);
    });
    expect(dots).toHaveTextContent("....");

    matchMediaMock.restore();
    vi.useRealTimers();
  });

  it("allows animation under reduced-motion when respectReducedMotion is disabled", () => {
    vi.useFakeTimers();
    const matchMediaMock = installMatchMediaMock({ initialMatches: true });

    render(<LoadingDots interval={120} dotCount={3} respectReducedMotion={false} />);
    const dots = screen.getByRole("status", { name: "Loading" });
    expect(dots.textContent).toBe(".  ");

    act(() => {
      vi.advanceTimersByTime(120);
    });
    expect(dots.textContent).toBe(".. ");

    matchMediaMock.restore();
    vi.useRealTimers();
  });

  it("switches to static dots when reduced-motion preference changes at runtime", () => {
    vi.useFakeTimers();
    const matchMediaMock = installMatchMediaMock({ initialMatches: false });

    render(<LoadingDots interval={120} dotCount={4} />);
    const dots = screen.getByRole("status", { name: "Loading" });
    expect(dots.textContent).toBe(".   ");

    act(() => {
      vi.advanceTimersByTime(120);
    });
    expect(dots.textContent).toBe("..  ");

    act(() => {
      matchMediaMock.setMatches(true);
    });
    expect(dots.textContent).toBe("....");

    act(() => {
      vi.advanceTimersByTime(240);
    });
    expect(dots.textContent).toBe("....");

    matchMediaMock.restore();
    vi.useRealTimers();
  });
});
