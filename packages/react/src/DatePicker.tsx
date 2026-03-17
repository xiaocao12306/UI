import * as React from "react";
import { Input } from "./Input";

export type DatePickerProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "defaultValue" | "onChange"
> & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  invalid?: boolean;
};

export function DatePicker({ value, defaultValue, onValueChange, invalid = false, ...restProps }: DatePickerProps) {
  return (
    <Input
      {...restProps}
      type="date"
      value={value}
      defaultValue={defaultValue}
      aria-invalid={invalid || undefined}
      onChange={(event) => onValueChange?.(event.target.value)}
    />
  );
}
