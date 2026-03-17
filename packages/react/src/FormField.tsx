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
  const describedById = React.useId();
  const errorId = React.useId();

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

      <div aria-describedby={description ? describedById : undefined} aria-errormessage={error ? errorId : undefined}>
        {children}
      </div>

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
