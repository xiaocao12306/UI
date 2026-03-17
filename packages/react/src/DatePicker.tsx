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
  errorMessageId?: string;
};

export function DatePicker({
  value,
  defaultValue,
  onValueChange,
  invalid = false,
  errorMessageId,
  ...restProps
}: DatePickerProps) {
  const describedBy = [restProps["aria-describedby"], invalid ? errorMessageId : undefined].filter(Boolean).join(" ") || undefined;

  return (
    <Input
      {...restProps}
      type="date"
      value={value}
      defaultValue={defaultValue}
      aria-describedby={describedBy}
      aria-invalid={invalid || undefined}
      onChange={(event) => onValueChange?.(event.target.value)}
    />
  );
}
