import { afterEach, describe, expect, it } from "vitest";
import { lockBodyScroll, resetBodyScrollLockForTests } from "./bodyScrollLock";

describe("bodyScrollLock", () => {
  afterEach(() => {
    document.body.style.overflow = "";
    resetBodyScrollLockForTests();
  });

  it("keeps body scroll locked until the last lock releases", () => {
    const releaseFirst = lockBodyScroll();
    const releaseSecond = lockBodyScroll();

    expect(document.body.style.overflow).toBe("hidden");

    releaseFirst();
    expect(document.body.style.overflow).toBe("hidden");

    releaseSecond();
    expect(document.body.style.overflow).toBe("");
  });

  it("restores pre-existing body overflow style after unlock", () => {
    document.body.style.overflow = "clip";

    const release = lockBodyScroll();
    expect(document.body.style.overflow).toBe("hidden");

    release();
    expect(document.body.style.overflow).toBe("clip");
  });

  it("ignores duplicate releases from the same lock handle", () => {
    const release = lockBodyScroll();
    expect(document.body.style.overflow).toBe("hidden");

    release();
    release();

    expect(document.body.style.overflow).toBe("");
  });
});
