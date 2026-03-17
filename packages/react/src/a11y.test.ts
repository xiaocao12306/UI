import { describe, expect, it } from "vitest";
import { resolveInvalidState } from "./a11y";

describe("resolveInvalidState", () => {
  it("prioritizes explicit invalid prop", () => {
    expect(resolveInvalidState(true, "false")).toBe(true);
    expect(resolveInvalidState(false, "true")).toBe(false);
  });

  it("accepts true aria-invalid values when invalid prop is undefined", () => {
    expect(resolveInvalidState(undefined, true)).toBe(true);
    expect(resolveInvalidState(undefined, "true")).toBe(true);
  });

  it("treats false or token values as valid", () => {
    expect(resolveInvalidState(undefined, false)).toBe(false);
    expect(resolveInvalidState(undefined, "false")).toBe(false);
    expect(resolveInvalidState(undefined, "grammar")).toBe(false);
    expect(resolveInvalidState(undefined, "spelling")).toBe(false);
  });
});
