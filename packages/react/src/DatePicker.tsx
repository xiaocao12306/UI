import * as React from "react";
import { Input } from "./Input";

export type DatePickerProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "defaultValue" | "onChange"
> & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  invalid?: boolean;
  errorMessageId?: string;
};

export function DatePicker({
  value,
  defaultValue,
  onValueChange,
  onChange,
  invalid,
  errorMessageId,
  ...restProps
}: DatePickerProps) {
  const isInvalid = Boolean(invalid ?? restProps["aria-invalid"]);
  const describedBy = [restProps["aria-describedby"], isInvalid ? errorMessageId : undefined].filter(Boolean).join(" ") || undefined;

  return (
    <Input
      {...restProps}
      type="date"
      value={value}
      defaultValue={defaultValue}
      aria-describedby={describedBy}
      aria-invalid={isInvalid || undefined}
      onChange={(event) => {
        onChange?.(event);
        onValueChange?.(event.target.value);
      }}
    />
  );
}
