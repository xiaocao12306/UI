import * as React from "react";

export type TagProps = React.ComponentPropsWithoutRef<"span">;

export function Tag({ style, ...props }: TagProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 26,
        borderRadius: "var(--aurora-radius-pill)",
        border: "1px solid var(--aurora-border-default)",
        padding: "0 10px",
        color: "var(--aurora-text-secondary)",
        fontSize: "var(--aurora-font-size-xs)",
        ...style
      }}
      {...props}
    />
  );
}
