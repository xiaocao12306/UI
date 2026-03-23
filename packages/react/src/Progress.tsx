import * as React from "react";

export type ProgressTone = "default" | "success" | "warning" | "danger";
export type ProgressSize = "sm" | "md";

export type ProgressProps = React.ComponentPropsWithoutRef<"div"> & {
  value?: number;
  min?: number;
  max?: number;
  indeterminate?: boolean;
  tone?: ProgressTone;
  size?: ProgressSize;
  label?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  valueText?: string;
  showValueLabel?: boolean;
};

const toneStyleMap: Record<ProgressTone, string> = {
  default: "var(--aurora-accent-default)",
  success: "var(--aurora-color-green-500)",
  warning: "var(--aurora-color-amber-500)",
  danger: "var(--aurora-color-red-500)"
};

const sizeStyleMap: Record<ProgressSize, number> = {
  sm: 6,
  md: 8
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function resolveBooleanFlag(value: unknown, fallback: boolean) {
  if (typeof value !== "boolean") {
    return fallback;
  }

  return value;
}

function resolveProgressTone(value: unknown, fallback: ProgressTone) {
  if (typeof value === "string") {
    const normalizedValue = value.trim().toLowerCase();
    if (
      normalizedValue === "default" ||
      normalizedValue === "success" ||
      normalizedValue === "warning" ||
      normalizedValue === "danger"
    ) {
      return normalizedValue;
    }
  }

  return fallback;
}

function resolveProgressSize(value: unknown, fallback: ProgressSize) {
  if (typeof value === "string") {
    const normalizedValue = value.trim().toLowerCase();
    if (normalizedValue === "sm" || normalizedValue === "md") {
      return normalizedValue;
    }
  }

  return fallback;
}

export function Progress({
  value = 0,
  min = 0,
  max = 100,
  indeterminate = false,
  tone = "default",
  size = "md",
  label = "Progress",
  ariaLabel,
  ariaLabelledBy,
  valueText,
  showValueLabel = false,
  style,
  ...props
}: ProgressProps) {
  const resolvedIndeterminate = resolveBooleanFlag(indeterminate, false);
  const resolvedShowValueLabel = resolveBooleanFlag(showValueLabel, false);
  const resolvedTone = resolveProgressTone(tone, "default");
  const resolvedSize = resolveProgressSize(size, "md");
  const safeMin = Number.isFinite(min) ? min : 0;
  const safeMax = Number.isFinite(max) && max > safeMin ? max : safeMin + 100;
  const safeValue = clamp(Number.isFinite(value) ? value : safeMin, safeMin, safeMax);
  const ratio = ((safeValue - safeMin) / (safeMax - safeMin)) * 100;
  const fallbackLabel =
    typeof label === "string" && label.trim().length > 0
      ? label.trim()
      : "Progress";
  const resolvedAriaLabelledBy =
    typeof ariaLabelledBy === "string" && ariaLabelledBy.trim().length > 0
      ? ariaLabelledBy.trim()
      : undefined;
  const explicitAriaLabel =
    resolvedAriaLabelledBy === undefined && typeof ariaLabel === "string" && ariaLabel.trim().length > 0
      ? ariaLabel.trim()
      : undefined;
  const resolvedAriaLabel = resolvedAriaLabelledBy
    ? undefined
    : explicitAriaLabel ?? fallbackLabel;
  const fallbackValueText = resolvedIndeterminate ? "Loading" : `${Math.round(ratio)}%`;
  const resolvedValueText =
    typeof valueText === "string" && valueText.trim().length > 0
      ? valueText.trim()
      : fallbackValueText;

  return (
    <div style={{ display: "grid", gap: 6 }}>
      <div
        role="progressbar"
        aria-label={resolvedAriaLabel}
        aria-labelledby={resolvedAriaLabelledBy}
        aria-valuemin={safeMin}
        aria-valuemax={safeMax}
        aria-valuenow={resolvedIndeterminate ? undefined : safeValue}
        aria-valuetext={resolvedValueText}
        style={{
          position: "relative",
          width: "100%",
          height: sizeStyleMap[resolvedSize],
          borderRadius: "var(--aurora-radius-pill)",
          background: "var(--aurora-surface-elevated)",
          overflow: "hidden",
          ...style
        }}
        {...props}
      >
        <div
          data-aurora-reduced-motion={resolvedIndeterminate ? "animate transform-reset" : "transition"}
          style={{
            width: resolvedIndeterminate ? "35%" : `${ratio}%`,
            height: "100%",
            background: toneStyleMap[resolvedTone],
            transition: resolvedIndeterminate ? undefined : "width var(--aurora-motion-duration-normal) var(--aurora-motion-easing-standard)",
            animation: resolvedIndeterminate ? "aurora-progress-indeterminate 1200ms ease-in-out infinite" : undefined,
            willChange: resolvedIndeterminate ? "transform" : undefined
          }}
        />
      </div>
      {resolvedShowValueLabel ? (
        <span style={{ fontSize: "var(--aurora-font-size-xs)", color: "var(--aurora-text-secondary)" }}>{resolvedValueText}</span>
      ) : null}
    </div>
  );
}
