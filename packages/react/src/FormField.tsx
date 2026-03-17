import * as React from "react";

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
  const childControlId =
    React.isValidElement(children) && typeof children.type !== "symbol"
      ? ((children.props as Record<string, unknown>).id as string | undefined)
      : undefined;
  const controlId = htmlFor ?? childControlId ?? generatedInputId;
  const isInvalid = Boolean(error);

  const describedBy = [description ? describedById : null, error ? errorId : null].filter(Boolean).join(" ");

  const control =
    React.isValidElement(children) && typeof children.type !== "symbol"
      ? React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
          id: controlId,
          "aria-describedby": describedBy || undefined,
          "aria-errormessage": error ? errorId : undefined,
          "aria-invalid": isInvalid ? true : undefined,
          "aria-required": required || undefined,
          required: required || undefined,
          disabled: disabled || (children.props as Record<string, unknown>).disabled
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
        {required ? <span style={{ color: "var(--aurora-color-red-500)" }}>*</span> : null}
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
