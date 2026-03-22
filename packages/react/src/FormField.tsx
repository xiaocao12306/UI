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
  const hasDescriptionContent = hasRenderableNode(description);
  const hasErrorContent = hasRenderableNode(error);
  const canCloneControl = React.isValidElement(children) && typeof children.type !== "symbol";
  const childProps = canCloneControl ? (children.props as Record<string, unknown>) : undefined;
  const childControlId = canCloneControl ? (childProps?.id as string | undefined) : undefined;
  const controlId = htmlFor ?? childControlId ?? (canCloneControl ? generatedInputId : undefined);
  const isInvalid = hasErrorContent;
  const childDisabled = typeof childProps?.disabled === "boolean" ? childProps.disabled : undefined;
  const mergedDisabled = Boolean(disabled || childDisabled);
  const childDescribedBy = childProps?.["aria-describedby"] as string | undefined;
  const childErrorMessage = childProps?.["aria-errormessage"] as string | undefined;
  const childInvalid = childProps?.["aria-invalid"] as React.AriaAttributes["aria-invalid"] | undefined;
  const childLabelledBy = childProps?.["aria-labelledby"] as string | undefined;
  const childAriaLabel = childProps?.["aria-label"] as string | undefined;
  const resolvedChildLabelledBy =
    typeof childLabelledBy === "string" && childLabelledBy.trim().length > 0
      ? childLabelledBy.trim()
      : undefined;
  const resolvedChildAriaLabel =
    resolvedChildLabelledBy
      ? undefined
      : typeof childAriaLabel === "string" && childAriaLabel.trim().length > 0
      ? childAriaLabel.trim()
      : undefined;
  const childRequired = resolveRequiredState(
    typeof childProps?.required === "boolean" ? childProps.required : undefined,
    childProps?.["aria-required"] as React.AriaAttributes["aria-required"] | undefined
  );
  const mergedRequired = Boolean(required || childRequired);
  const childInvalidAria = resolveInvalidAria(undefined, childInvalid);
  const mergedInvalidAria = isInvalid ? true : childInvalidAria;
  const mergedDescribedBy = mergeAriaReferenceIds(
    childDescribedBy,
    hasDescriptionContent ? describedById : undefined,
    hasErrorContent ? errorId : undefined
  );
  const mergedErrorMessage = mergeAriaReferenceIds(childErrorMessage, hasErrorContent ? errorId : undefined);
  const mergedLabelledBy = resolvedChildAriaLabel
    ? resolvedChildLabelledBy
    : mergeAriaReferenceIds(resolvedChildLabelledBy, labelId);
  const labelReadableText = extractReadableText(label).trim();
  const warnedMissingAssociationRef = React.useRef(false);
  const warnedMissingNameRef = React.useRef(false);

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

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }
    if (warnedMissingNameRef.current) {
      return;
    }
    if (!canCloneControl || labelReadableText.length > 0 || resolvedChildAriaLabel || resolvedChildLabelledBy) {
      return;
    }

    warnedMissingNameRef.current = true;
    console.warn("[FormField] Non-text label should provide aria-label or aria-labelledby on the control.");
  }, [canCloneControl, labelReadableText, resolvedChildAriaLabel, resolvedChildLabelledBy]);

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

      {hasDescriptionContent ? (
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

      {hasErrorContent ? (
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

function hasRenderableNode(node: React.ReactNode): boolean {
  if (node === null || node === undefined || typeof node === "boolean") {
    return false;
  }

  if (typeof node === "string") {
    return node.trim().length > 0;
  }

  if (typeof node === "number") {
    return true;
  }

  if (Array.isArray(node)) {
    return node.some((item) => hasRenderableNode(item));
  }

  return React.isValidElement(node);
}

function extractReadableText(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map((child) => extractReadableText(child)).join(" ");
  }
  if (!React.isValidElement(node)) {
    return "";
  }

  const elementProps = node.props as {
    children?: React.ReactNode;
    "aria-hidden"?: boolean | "true" | "false";
    "aria-label"?: string;
  };
  if (elementProps["aria-hidden"] === true || elementProps["aria-hidden"] === "true") {
    return "";
  }

  const inlineAriaLabel = resolveNonEmptyString(elementProps["aria-label"]);
  if (inlineAriaLabel) {
    return inlineAriaLabel;
  }

  return extractReadableText(elementProps.children);
}

function resolveNonEmptyString(value: string | undefined): string | undefined {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }
  return undefined;
}
