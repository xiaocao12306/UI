import * as React from "react";
import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { installMatchMediaMock } from "./test-utils/matchMedia";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

function ReducedMotionProbe() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion(ref);

  return <div ref={ref} data-testid="probe" data-reduced-motion={String(prefersReducedMotion)} />;
}

describe("usePrefersReducedMotion", () => {
  it("reads initial reduced-motion preference from matchMedia", () => {
    const matchMediaMock = installMatchMediaMock({ initialMatches: true });
    render(<ReducedMotionProbe />);

    expect(screen.getByTestId("probe")).toHaveAttribute("data-reduced-motion", "true");
    matchMediaMock.restore();
  });

  it("reacts to runtime reduced-motion preference changes", () => {
    const matchMediaMock = installMatchMediaMock({ initialMatches: false });
    render(<ReducedMotionProbe />);

    const probe = screen.getByTestId("probe");
    expect(probe).toHaveAttribute("data-reduced-motion", "false");

    act(() => {
      matchMediaMock.setMatches(true);
    });

    expect(probe).toHaveAttribute("data-reduced-motion", "true");
    matchMediaMock.restore();
  });

  it("supports legacy media-query listeners when addEventListener is unavailable", () => {
    const matchMediaMock = installMatchMediaMock({ initialMatches: false, legacyOnly: true });
    const { unmount } = render(<ReducedMotionProbe />);

    expect(screen.getByTestId("probe")).toHaveAttribute("data-reduced-motion", "false");

    act(() => {
      matchMediaMock.setMatches(true);
    });

    expect(screen.getByTestId("probe")).toHaveAttribute("data-reduced-motion", "true");

    unmount();
    matchMediaMock.restore();
  });

  it("keeps default false when window.matchMedia is unavailable", () => {
    const original = window.matchMedia;
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      writable: true,
      value: undefined
    });

    render(<ReducedMotionProbe />);
    expect(screen.getByTestId("probe")).toHaveAttribute("data-reduced-motion", "false");

    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      writable: true,
      value: original
    });
  });
});
