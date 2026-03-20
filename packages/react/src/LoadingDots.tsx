import * as React from "react";

export type LoadingDotsProps = React.ComponentPropsWithoutRef<"span"> & {
  label?: string;
  interval?: number;
  dotCount?: number;
  running?: boolean;
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
  live,
  style,
  ...props
}: LoadingDotsProps) {
  const safeDotCount = clampDotCount(dotCount);
  const resolvedLabel =
    typeof label === "string" && label.trim().length > 0
      ? label.trim()
      : "Loading";
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setIndex(0);
  }, [safeDotCount, running]);

  React.useEffect(() => {
    if (!running) {
      return;
    }

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % safeDotCount);
    }, Math.max(80, interval));

    return () => {
      window.clearInterval(id);
    };
  }, [interval, running, safeDotCount]);

  const visibleLength = running ? index + 1 : safeDotCount;
  const dotText = ".".repeat(visibleLength).padEnd(safeDotCount, " ");
  const ariaLive = live ?? (running ? "polite" : "off");

  return (
    <span
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
