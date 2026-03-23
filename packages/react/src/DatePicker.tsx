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
  "aria-label": rawAriaLabel,
  "aria-labelledby": rawAriaLabelledBy,
  ...restProps
}: DatePickerProps) {
  const resolvedInvalid = resolveBooleanFlag(invalid);
  const resolvedInvalidAria = resolveInvalidAria(resolvedInvalid, restProps["aria-invalid"]);
  const isInvalid = resolvedInvalidAria !== undefined;
  const describedBy = mergeAriaReferenceIds(restProps["aria-describedby"], isInvalid ? errorMessageId : undefined);
  const errorMessage = isInvalid
    ? mergeAriaReferenceIds(restProps["aria-errormessage"], errorMessageId)
    : restProps["aria-errormessage"];
  const resolvedAriaLabelledBy = resolveNonEmptyLabel(rawAriaLabelledBy);
  const resolvedAriaLabel =
    resolvedAriaLabelledBy === undefined
      ? resolveNonEmptyLabel(rawAriaLabel, "Date picker")
      : undefined;

  return (
    <Input
      {...restProps}
      type="date"
      value={value}
      defaultValue={defaultValue}
      aria-label={resolvedAriaLabel}
      aria-labelledby={resolvedAriaLabelledBy}
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

function resolveBooleanFlag(value: unknown): boolean | undefined {
  if (typeof value !== "boolean") {
    return undefined;
  }

  return value;
}

function resolveNonEmptyLabel(label: string | undefined, fallback?: string): string | undefined {
  if (typeof label === "string" && label.trim().length > 0) {
    return label.trim();
  }

  return fallback;
}
