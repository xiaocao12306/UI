import * as React from "react";

export type FormFieldProps = {
  label: React.ReactNode;
  htmlFor?: string;
  description?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
};

export function FormField({ label, htmlFor, description, error, required, children }: FormFieldProps) {
  const generatedInputId = React.useId();
  const describedById = React.useId();
  const errorId = React.useId();
  const controlId = htmlFor ?? generatedInputId;

  const describedBy = [description ? describedById : null, error ? errorId : null].filter(Boolean).join(" ");

  const control =
    React.isValidElement(children) && typeof children.type !== "symbol"
      ? React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
          id: controlId,
          "aria-describedby": describedBy || undefined,
          "aria-invalid": error ? true : undefined
        })
      : children;

  return (
    <div style={{ display: "grid", gap: 6 }}>
      <label
        htmlFor={htmlFor}
        style={{
          color: "var(--aurora-text-primary)",
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
        <small id={describedById} style={{ color: "var(--aurora-text-secondary)" }}>
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
