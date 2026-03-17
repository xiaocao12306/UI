import * as React from "react";

export type ProgressProps = {
  value: number;
  max?: number;
};

export function Progress({ value, max = 100 }: ProgressProps) {
  const safeValue = Math.min(Math.max(value, 0), max);
  const ratio = (safeValue / max) * 100;

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={safeValue}
      style={{
        width: "100%",
        height: 8,
        borderRadius: "var(--aurora-radius-pill)",
        background: "var(--aurora-surface-elevated)",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          width: `${ratio}%`,
          height: "100%",
          background: "var(--aurora-accent-default)",
          transition: "width var(--aurora-motion-duration-normal) var(--aurora-motion-easing-standard)"
        }}
      />
    </div>
  );
}
