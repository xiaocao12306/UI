import type * as React from "react";

type AriaInvalidValue = React.AriaAttributes["aria-invalid"];

export function resolveInvalidState(invalid: boolean | undefined, ariaInvalid: AriaInvalidValue): boolean {
  if (typeof invalid === "boolean") {
    return invalid;
  }

  return ariaInvalid === true || ariaInvalid === "true";
}
