import * as React from "react";
import { Input } from "./Input";
import { mergeAriaReferenceIds, resolveInvalidAria } from "./a11y";

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
  const resolvedInvalidAria = resolveInvalidAria(invalid, restProps["aria-invalid"]);
  const isInvalid = resolvedInvalidAria !== undefined;
  const describedBy = mergeAriaReferenceIds(restProps["aria-describedby"], isInvalid ? errorMessageId : undefined);
  const errorMessage = isInvalid
    ? mergeAriaReferenceIds(restProps["aria-errormessage"], errorMessageId)
    : restProps["aria-errormessage"];

  return (
    <Input
      {...restProps}
      type="date"
      value={value}
      defaultValue={defaultValue}
      aria-describedby={describedBy}
      aria-errormessage={errorMessage}
      aria-invalid={resolvedInvalidAria}
      onChange={(event) => {
        onChange?.(event);
        onValueChange?.(event.target.value);
      }}
    />
  );
}
