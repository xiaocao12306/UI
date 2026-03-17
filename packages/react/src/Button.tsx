import * as React from "react";

type ButtonVariant = "solid" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const sizeStyleMap: Record<ButtonSize, React.CSSProperties> = {
  sm: { height: "var(--aurora-button-height-sm)", fontSize: "var(--aurora-font-size-sm)", padding: "0 12px" },
  md: { height: "var(--aurora-button-height-md)", fontSize: "var(--aurora-font-size-md)", padding: "0 14px" },
  lg: { height: "var(--aurora-button-height-lg)", fontSize: "var(--aurora-font-size-md)", padding: "0 18px" }
};

const variantStyleMap: Record<ButtonVariant, React.CSSProperties> = {
  solid: {
    background: "var(--aurora-button-solid-bg)",
    color: "var(--aurora-button-solid-text)",
    border: "1px solid transparent"
  },
  ghost: {
    background: "var(--aurora-button-ghost-bg)",
    color: "var(--aurora-button-ghost-text)",
    border: "1px solid transparent"
  },
  outline: {
    background: "transparent",
    color: "var(--aurora-text-primary)",
    border: "1px solid var(--aurora-button-border)"
  }
};

export function Button({ variant = "solid", size = "md", style, ...props }: ButtonProps) {
  return (
    <button
      style={{
        borderRadius: "var(--aurora-button-radius)",
        fontWeight: "var(--aurora-font-weight-medium)",
        transition: "all var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",
        cursor: "pointer",
        ...sizeStyleMap[size],
        ...variantStyleMap[variant],
        ...style
      }}
      {...props}
    />
  );
}
