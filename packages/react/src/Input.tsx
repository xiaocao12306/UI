import * as React from "react";
import { fieldBaseStyle } from "./FieldStyles";

export type InputProps = React.ComponentPropsWithoutRef<"input">;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ style, ...props }, ref) {
  return <input ref={ref} style={{ ...fieldBaseStyle, ...style }} {...props} />;
});
