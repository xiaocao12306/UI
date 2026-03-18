import * as React from "react";
import { mergeAriaReferenceIds, resolveInvalidAria, resolveRequiredState } from "./a11y";

export type FormFieldProps = {
  label: React.ReactNode;
  htmlFor?: string;
  description?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
};

export function FormField({ label, htmlFor, description, error, required, disabled, children }: FormFieldProps) {
  const generatedInputId = React.useId();
  const describedById = React.useId();
  const errorId = React.useId();
  const childProps =
    React.isValidElement(children) && typeof children.type !== "symbol"
      ? (children.props as Record<string, unknown>)
      : undefined;
  const childControlId =
    React.isValidElement(children) && typeof children.type !== "symbol" ? (childProps?.id as string | undefined) : undefined;
  const controlId = htmlFor ?? childControlId ?? generatedInputId;
  const isInvalid = Boolean(error);
  const childDescribedBy = childProps?.["aria-describedby"] as string | undefined;
  const childErrorMessage = childProps?.["aria-errormessage"] as string | undefined;
  const childInvalid = childProps?.["aria-invalid"] as React.AriaAttributes["aria-invalid"] | undefined;
  const childRequired = resolveRequiredState(
    typeof childProps?.required === "boolean" ? childProps.required : undefined,
    childProps?.["aria-required"] as React.AriaAttributes["aria-required"] | undefined
  );
  const mergedRequired = Boolean(required || childRequired);
  const childInvalidAria = resolveInvalidAria(undefined, childInvalid);
  const mergedInvalidAria = isInvalid ? true : childInvalidAria;
  const mergedInvalid = mergedInvalidAria !== undefined;
  const mergedDescribedBy = mergeAriaReferenceIds(childDescribedBy, description ? describedById : undefined, error ? errorId : undefined);
  const mergedErrorMessage = mergeAriaReferenceIds(childErrorMessage, error ? errorId : undefined);

  const control =
    React.isValidElement(children) && typeof children.type !== "symbol"
      ? React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
          id: controlId,
          "aria-describedby": mergedDescribedBy,
          "aria-errormessage": mergedErrorMessage,
          "aria-invalid": mergedInvalidAria,
          "aria-required": mergedRequired || undefined,
          required: mergedRequired || undefined,
          disabled: disabled || childProps?.disabled
        })
      : children;

  return (
    <div style={{ display: "grid", gap: 6 }} aria-disabled={disabled || undefined}>
      <label
        htmlFor={controlId}
        style={{
          color: disabled
            ? "color-mix(in srgb, var(--aurora-text-primary) 60%, transparent)"
            : "var(--aurora-text-primary)",
          fontSize: "var(--aurora-font-size-sm)",
          fontWeight: "var(--aurora-font-weight-medium)",
          display: "inline-flex",
          gap: 4,
          alignItems: "center"
        }}
      >
        {label}
        {mergedRequired ? <span style={{ color: "var(--aurora-color-red-500)" }}>*</span> : null}
      </label>

      <div>{control}</div>

      {description ? (
        <small
          id={describedById}
          style={{
            color: disabled
              ? "color-mix(in srgb, var(--aurora-text-secondary) 70%, transparent)"
              : "var(--aurora-text-secondary)"
          }}
        >
          {description}
        </small>
      ) : null}

      {error ? (
        <small id={errorId} role="alert" style={{ color: "var(--aurora-color-red-500)" }}>
          {error}
        </small>
      ) : null}
    </div>
  );
}
