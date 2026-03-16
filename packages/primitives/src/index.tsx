import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

type BoxProps = React.ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean;
};

export function Box({ asChild, ...props }: BoxProps) {
  const Comp = asChild ? Slot : "div";
  return <Comp {...props} />;
}
