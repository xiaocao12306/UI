import * as React from "react";
import { fieldBaseStyle } from "./FieldStyles";

export type TextareaProps = React.ComponentPropsWithoutRef<"textarea">;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { style, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      style={{
        ...fieldBaseStyle,
        minHeight: 96,
        height: "auto",
        padding: "10px 12px",
        resize: "vertical",
        ...style
      }}
      {...props}
    />
  );
});
