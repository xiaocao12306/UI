import type * as React from "react";

type AriaInvalidValue = React.AriaAttributes["aria-invalid"];
type AriaRequiredValue = React.AriaAttributes["aria-required"];

export function resolveInvalidAria(
  invalid: boolean | undefined,
  ariaInvalid: AriaInvalidValue
): true | "grammar" | "spelling" | undefined {
  if (typeof invalid === "boolean") {
    return invalid ? true : undefined;
  }

  if (ariaInvalid === true) {
    return true;
  }

  if (typeof ariaInvalid === "string") {
    const normalized = ariaInvalid.trim().toLowerCase();
    if (normalized === "true") {
      return true;
    }
    if (normalized === "grammar") {
      return "grammar";
    }
    if (normalized === "spelling") {
      return "spelling";
    }
  }

  return undefined;
}

export function resolveInvalidState(invalid: boolean | undefined, ariaInvalid: AriaInvalidValue): boolean {
  return resolveInvalidAria(invalid, ariaInvalid) !== undefined;
}

export function resolveRequiredState(required: boolean | undefined, ariaRequired: AriaRequiredValue): boolean {
  if (typeof required === "boolean") {
    return required;
  }

  return ariaRequired === true || ariaRequired === "true";
}

export function mergeAriaReferenceIds(...values: Array<string | undefined | null>): string | undefined {
  const tokens = values
    .flatMap((value) => (typeof value === "string" ? value.split(/\s+/) : []))
    .map((token) => token.trim())
    .filter(Boolean);

  if (tokens.length === 0) {
    return undefined;
  }

  return [...new Set(tokens)].join(" ");
}
