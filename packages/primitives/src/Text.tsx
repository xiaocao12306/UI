import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

export type TextProps = React.ComponentPropsWithoutRef<"span"> & {
  asChild?: boolean;
  tone?: "default" | "secondary" | "inverse";
};

const toneStyleMap: Record<NonNullable<TextProps["tone"]>, React.CSSProperties> = {
  default: { color: "var(--aurora-text-primary)" },
  secondary: { color: "var(--aurora-text-secondary)" },
  inverse: { color: "var(--aurora-text-inverse)" }
};

export function Text({ asChild = false, tone = "default", style, ...props }: TextProps) {
  const Comp = asChild ? Slot : "span";
  return <Comp style={{ ...toneStyleMap[tone], ...style }} {...props} />;
}
