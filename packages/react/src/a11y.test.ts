import { describe, expect, it } from "vitest";
import { mergeAriaReferenceIds, resolveInvalidState, resolveRequiredState } from "./a11y";

describe("resolveInvalidState", () => {
  it("prioritizes explicit invalid prop", () => {
    expect(resolveInvalidState(true, "false")).toBe(true);
    expect(resolveInvalidState(false, "true")).toBe(false);
  });

  it("accepts true aria-invalid values when invalid prop is undefined", () => {
    expect(resolveInvalidState(undefined, true)).toBe(true);
    expect(resolveInvalidState(undefined, "true")).toBe(true);
  });

  it("treats false aria-invalid values as valid", () => {
    expect(resolveInvalidState(undefined, false)).toBe(false);
    expect(resolveInvalidState(undefined, "false")).toBe(false);
  });

  it("accepts grammar/spelling aria-invalid tokens as invalid", () => {
    expect(resolveInvalidState(undefined, "grammar")).toBe(true);
    expect(resolveInvalidState(undefined, "spelling")).toBe(true);
    expect(resolveInvalidState(undefined, " Grammar ")).toBe(true);
  });
});

describe("resolveRequiredState", () => {
  it("prioritizes explicit required prop", () => {
    expect(resolveRequiredState(true, "false")).toBe(true);
    expect(resolveRequiredState(false, "true")).toBe(false);
  });

  it("accepts true aria-required values when required prop is undefined", () => {
    expect(resolveRequiredState(undefined, true)).toBe(true);
    expect(resolveRequiredState(undefined, "true")).toBe(true);
  });

  it("treats false aria-required values as optional", () => {
    expect(resolveRequiredState(undefined, false)).toBe(false);
    expect(resolveRequiredState(undefined, "false")).toBe(false);
  });
});

describe("mergeAriaReferenceIds", () => {
  it("deduplicates idrefs while preserving order", () => {
    expect(mergeAriaReferenceIds("hint-a hint-b", "hint-b", "error-a")).toBe("hint-a hint-b error-a");
  });

  it("returns undefined when every input is empty", () => {
    expect(mergeAriaReferenceIds(undefined, "", "   ", null)).toBeUndefined();
  });
});
