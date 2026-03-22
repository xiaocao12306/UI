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
  const resolvedRadius =
    radius ??
    (variant === "circle" ? "9999px" : variant === "text" ? "var(--aurora-radius-pill)" : "var(--aurora-radius-sm)");
  const resolvedWidth = variant === "circle" ? width ?? height : width;
  const resolvedHeight = variant === "text" ? height ?? 14 : height;
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
      data-aurora-reduced-motion={animated ? "animate" : undefined}
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
        animation: animated ? "aurora-skeleton-shimmer 1.2s ease-in-out infinite" : undefined,
        ...style
      }}
      {...props}
    />
  );
}
