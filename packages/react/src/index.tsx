import * as React from "react";
import { Box } from "@aurora-ui/primitives";
import { colorTokens } from "@aurora-ui/tokens";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "solid" | "ghost";
};

export function Button({ variant = "solid", style, ...props }: ButtonProps) {
  const sharedStyle: React.CSSProperties = {
    borderRadius: 10,
    padding: "8px 14px",
    border: "1px solid transparent",
    cursor: "pointer"
  };

  const variantStyle: React.CSSProperties =
    variant === "solid"
      ? {
          backgroundColor: colorTokens.accent[500],
          color: colorTokens.neutral[0]
        }
      : {
          backgroundColor: "transparent",
          color: colorTokens.neutral[900],
          borderColor: colorTokens.neutral[100]
        };

  return <button style={{ ...sharedStyle, ...variantStyle, ...style }} {...props} />;
}

export { Box };
