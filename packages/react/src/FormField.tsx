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
  const labelId = React.useId();
  const describedById = React.useId();
  const errorId = React.useId();
  const canCloneControl = React.isValidElement(children) && typeof children.type !== "symbol";
  const childProps = canCloneControl ? (children.props as Record<string, unknown>) : undefined;
  const childControlId = canCloneControl ? (childProps?.id as string | undefined) : undefined;
  const controlId = htmlFor ?? childControlId ?? (canCloneControl ? generatedInputId : undefined);
  const isInvalid = Boolean(error);
  const childDisabled = typeof childProps?.disabled === "boolean" ? childProps.disabled : undefined;
  const mergedDisabled = Boolean(disabled || childDisabled);
  const childDescribedBy = childProps?.["aria-describedby"] as string | undefined;
  const childErrorMessage = childProps?.["aria-errormessage"] as string | undefined;
  const childInvalid = childProps?.["aria-invalid"] as React.AriaAttributes["aria-invalid"] | undefined;
  const childLabelledBy = childProps?.["aria-labelledby"] as string | undefined;
  const childAriaLabel = childProps?.["aria-label"] as string | undefined;
  const resolvedChildAriaLabel =
    typeof childAriaLabel === "string" && childAriaLabel.trim().length > 0
      ? childAriaLabel.trim()
      : undefined;
  const childRequired = resolveRequiredState(
    typeof childProps?.required === "boolean" ? childProps.required : undefined,
    childProps?.["aria-required"] as React.AriaAttributes["aria-required"] | undefined
  );
  const mergedRequired = Boolean(required || childRequired);
  const childInvalidAria = resolveInvalidAria(undefined, childInvalid);
  const mergedInvalidAria = isInvalid ? true : childInvalidAria;
  const mergedDescribedBy = mergeAriaReferenceIds(childDescribedBy, description ? describedById : undefined, error ? errorId : undefined);
  const mergedErrorMessage = mergeAriaReferenceIds(childErrorMessage, error ? errorId : undefined);
  const mergedLabelledBy = resolvedChildAriaLabel
    ? childLabelledBy
    : mergeAriaReferenceIds(childLabelledBy, labelId);
  const warnedMissingAssociationRef = React.useRef(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }
    if (warnedMissingAssociationRef.current) {
      return;
    }
    if (canCloneControl || controlId) {
      return;
    }

    warnedMissingAssociationRef.current = true;
    console.warn(
      "[FormField] Could not associate label with a form control because children is not a single clonable element and htmlFor was not provided. Provide htmlFor and a matching control id."
    );
  }, [canCloneControl, controlId]);

  const control =
    canCloneControl
      ? React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
          id: controlId,
          "aria-label": resolvedChildAriaLabel,
          "aria-labelledby": mergedLabelledBy,
          "aria-describedby": mergedDescribedBy,
          "aria-errormessage": mergedErrorMessage,
          "aria-invalid": mergedInvalidAria,
          "aria-required": mergedRequired || undefined,
          required: mergedRequired || undefined,
          disabled: mergedDisabled || undefined
        })
      : children;

  return (
    <div
      style={{ display: "grid", gap: 6 }}
      aria-disabled={mergedDisabled || undefined}
      data-invalid={isInvalid ? "true" : undefined}
      data-disabled={mergedDisabled ? "true" : undefined}
    >
      <label
        id={labelId}
        htmlFor={controlId}
        style={{
          color: mergedDisabled
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
        {mergedRequired ? (
          <span aria-hidden="true" style={{ color: "var(--aurora-color-red-500)" }}>
            *
          </span>
        ) : null}
      </label>

      <div>{control}</div>

      {description ? (
        <small
          id={describedById}
          style={{
            color: mergedDisabled
              ? "color-mix(in srgb, var(--aurora-text-secondary) 70%, transparent)"
              : "var(--aurora-text-secondary)"
          }}
        >
          {description}
        </small>
      ) : null}

      {error ? (
        <small
          id={errorId}
          role="alert"
          style={{ color: "color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))" }}
        >
          {error}
        </small>
      ) : null}
    </div>
  );
}
