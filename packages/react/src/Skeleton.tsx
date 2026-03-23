import * as React from "react";

export type SkeletonProps = React.ComponentPropsWithoutRef<"div"> & {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  variant?: "rect" | "text" | "circle";
  animated?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

function resolveSkeletonMetric(
  value: number | string | undefined,
  fallback: number | string
) {
  if (typeof value === "number") {
    if (Number.isFinite(value) && value >= 0) {
      return value;
    }

    return fallback;
  }

  if (typeof value === "string") {
    const normalizedValue = value.trim();
    if (normalizedValue.length > 0) {
      return normalizedValue;
    }

    return fallback;
  }

  return fallback;
}

function resolveBooleanFlag(value: unknown, fallback: boolean) {
  if (typeof value !== "boolean") {
    return fallback;
  }

  return value;
}

export function Skeleton({
  width = "100%",
  height = 16,
  radius,
  variant = "rect",
  animated = true,
  ariaLabel,
  ariaLabelledBy,
  style,
  ...props
}: SkeletonProps) {
  const resolvedAnimated = resolveBooleanFlag(animated, true);
  const fallbackRadius =
    variant === "circle"
      ? "9999px"
      : variant === "text"
        ? "var(--aurora-radius-pill)"
        : "var(--aurora-radius-sm)";
  const resolvedRadius = resolveSkeletonMetric(radius, fallbackRadius);
  const resolvedWidth = resolveSkeletonMetric(variant === "circle" ? width ?? height : width, "100%");
  const resolvedHeight = resolveSkeletonMetric(variant === "text" ? height ?? 14 : height, 16);
  const resolvedAriaLabelledBy =
    typeof ariaLabelledBy === "string" && ariaLabelledBy.trim().length > 0
      ? ariaLabelledBy.trim()
      : undefined;
  const resolvedAriaLabel =
    resolvedAriaLabelledBy === undefined &&
    typeof ariaLabel === "string" &&
    ariaLabel.trim().length > 0
      ? ariaLabel.trim()
      : undefined;
  const narrated = resolvedAriaLabel !== undefined || resolvedAriaLabelledBy !== undefined;

  return (
    <div
      data-aurora-reduced-motion={resolvedAnimated ? "animate" : undefined}
      role={narrated ? "status" : undefined}
      aria-label={resolvedAriaLabel}
      aria-labelledby={resolvedAriaLabelledBy}
      aria-live={narrated ? "polite" : undefined}
      aria-busy={narrated ? true : undefined}
      aria-hidden={narrated ? undefined : true}
      style={{
        width: resolvedWidth,
        height: resolvedHeight,
        borderRadius: resolvedRadius,
        background:
          "linear-gradient(90deg, var(--aurora-skeleton-base) 0%, var(--aurora-skeleton-highlight) 50%, var(--aurora-skeleton-base) 100%)",
        backgroundSize: "200% 100%",
        animation: resolvedAnimated ? "aurora-skeleton-shimmer 1.2s ease-in-out infinite" : undefined,
        ...style
      }}
      {...props}
    />
  );
}
