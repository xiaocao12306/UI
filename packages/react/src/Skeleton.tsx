import * as React from "react";

export type SkeletonProps = React.ComponentPropsWithoutRef<"div"> & {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  variant?: "rect" | "text" | "circle";
  animated?: boolean;
  ariaLabel?: string;
};

export function Skeleton({
  width = "100%",
  height = 16,
  radius,
  variant = "rect",
  animated = true,
  ariaLabel,
  style,
  ...props
}: SkeletonProps) {
  const resolvedRadius =
    radius ??
    (variant === "circle" ? "9999px" : variant === "text" ? "var(--aurora-radius-pill)" : "var(--aurora-radius-sm)");
  const resolvedWidth = variant === "circle" ? width ?? height : width;
  const resolvedHeight = variant === "text" ? height ?? 14 : height;
  const resolvedAriaLabel =
    typeof ariaLabel === "string" && ariaLabel.trim().length > 0
      ? ariaLabel.trim()
      : undefined;

  return (
    <div
      data-aurora-reduced-motion={animated ? "animate" : undefined}
      role={resolvedAriaLabel ? "status" : undefined}
      aria-label={resolvedAriaLabel}
      aria-live={resolvedAriaLabel ? "polite" : undefined}
      aria-busy={resolvedAriaLabel ? true : undefined}
      aria-hidden={resolvedAriaLabel ? undefined : true}
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
