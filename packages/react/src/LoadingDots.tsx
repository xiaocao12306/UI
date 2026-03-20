import * as React from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export type LoadingDotsProps = React.ComponentPropsWithoutRef<"span"> & {
  label?: string;
  interval?: number;
  dotCount?: number;
  running?: boolean;
  respectReducedMotion?: boolean;
  live?: "polite" | "assertive" | "off";
};

function clampDotCount(dotCount: number) {
  return Math.min(Math.max(dotCount, 2), 6);
}

export function LoadingDots({
  label = "Loading",
  interval = 280,
  dotCount = 3,
  running = true,
  respectReducedMotion = true,
  live,
  style,
  ...props
}: LoadingDotsProps) {
  const rootRef = React.useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion(rootRef);
  const safeDotCount = clampDotCount(dotCount);
  const shouldAnimate = running && !(respectReducedMotion && prefersReducedMotion);
  const resolvedLabel =
    typeof label === "string" && label.trim().length > 0
      ? label.trim()
      : "Loading";
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setIndex(0);
  }, [safeDotCount, shouldAnimate]);

  React.useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    const ownerWindow = rootRef.current?.ownerDocument.defaultView ?? window;
    const id = ownerWindow.setInterval(() => {
      setIndex((prev) => (prev + 1) % safeDotCount);
    }, Math.max(80, interval));

    return () => {
      ownerWindow.clearInterval(id);
    };
  }, [interval, safeDotCount, shouldAnimate]);

  const visibleLength = shouldAnimate ? index + 1 : safeDotCount;
  const dotText = ".".repeat(visibleLength).padEnd(safeDotCount, " ");
  const ariaLive = live ?? (running ? "polite" : "off");

  return (
    <span
      ref={rootRef}
      role="status"
      aria-label={resolvedLabel}
      aria-live={ariaLive}
      aria-busy={running}
      style={{ color: "var(--aurora-text-secondary)", fontFamily: "var(--aurora-font-family-mono)", whiteSpace: "pre", ...style }}
      {...props}
    >
      {dotText}
    </span>
  );
}
