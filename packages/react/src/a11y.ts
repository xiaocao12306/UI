import type * as React from "react";

type AriaInvalidValue = React.AriaAttributes["aria-invalid"];
type AriaRequiredValue = React.AriaAttributes["aria-required"];

export function resolveInvalidState(invalid: boolean | undefined, ariaInvalid: AriaInvalidValue): boolean {
  if (typeof invalid === "boolean") {
    return invalid;
  }

  return ariaInvalid === true || ariaInvalid === "true";
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
