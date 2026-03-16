import * as React from "react";

export type VisuallyHiddenProps = React.ComponentPropsWithoutRef<"span">;

export function VisuallyHidden({ style, ...props }: VisuallyHiddenProps) {
  return (
    <span
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        border: 0,
        whiteSpace: "nowrap",
        ...style
      }}
      {...props}
    />
  );
}
