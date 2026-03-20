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

  it("isolates lock state across different owner documents", () => {
    const externalDocument = document.implementation.createHTMLDocument("external");
    externalDocument.body.style.overflow = "clip";

    const releaseMain = lockBodyScroll(document);
    const releaseExternal = lockBodyScroll(externalDocument);

    expect(document.body.style.overflow).toBe("hidden");
    expect(externalDocument.body.style.overflow).toBe("hidden");

    releaseMain();
    expect(document.body.style.overflow).toBe("");
    expect(externalDocument.body.style.overflow).toBe("hidden");

    releaseExternal();
    expect(externalDocument.body.style.overflow).toBe("clip");
  });

  it("restores all tracked documents when reset is called", () => {
    const externalDocument = document.implementation.createHTMLDocument("external");
    externalDocument.body.style.overflow = "auto";
    document.body.style.overflow = "clip";

    lockBodyScroll(document);
    lockBodyScroll(externalDocument);

    expect(document.body.style.overflow).toBe("hidden");
    expect(externalDocument.body.style.overflow).toBe("hidden");

    resetBodyScrollLockForTests();

    expect(document.body.style.overflow).toBe("clip");
    expect(externalDocument.body.style.overflow).toBe("auto");
  });
});
