import * as React from "react";
import { fieldBaseStyle } from "./FieldStyles";

export type SelectProps = React.ComponentPropsWithoutRef<"select">;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select({ style, ...props }, ref) {
  return <select ref={ref} style={{ ...fieldBaseStyle, ...style }} {...props} />;
});
