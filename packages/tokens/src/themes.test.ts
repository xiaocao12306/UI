import { describe, expect, it } from "vitest";
import { themeNames, themePacks } from "./themes";

describe("theme metadata", () => {
  it("keeps themeNames in sync with themePacks keys", () => {
    expect(themeNames).toEqual(Object.keys(themePacks));
    expect(new Set(themeNames).size).toBe(themeNames.length);
  });
});
