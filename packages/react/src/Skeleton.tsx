import * as React from "react";

export type SkeletonProps = React.ComponentPropsWithoutRef<"div"> & {
  width?: number | string;
  height?: number | string;
};

export function Skeleton({ width = "100%", height = 16, style, ...props }: SkeletonProps) {
  return (
    <div
      aria-busy="true"
      style={{
        width,
        height,
        borderRadius: "var(--aurora-radius-sm)",
        background:
          "linear-gradient(90deg, var(--aurora-skeleton-base) 0%, var(--aurora-skeleton-highlight) 50%, var(--aurora-skeleton-base) 100%)",
        backgroundSize: "200% 100%",
        animation: "aurora-skeleton 1.2s ease-in-out infinite",
        ...style
      }}
      {...props}
    />
  );
}
