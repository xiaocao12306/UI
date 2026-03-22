import * as React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FocusScope } from "./FocusScope";

describe("FocusScope", () => {
  it("loops focus on unmodified Tab at the boundary", () => {
    const { getByRole } = render(
      <FocusScope>
        <button type="button">First action</button>
        <button type="button">Last action</button>
      </FocusScope>
    );

    const first = getByRole("button", { name: "First action" });
    const last = getByRole("button", { name: "Last action" });
    last.focus();

    const tabEvent = new KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: true,
      cancelable: true
    });
    last.dispatchEvent(tabEvent);

    expect(tabEvent.defaultPrevented).toBe(true);
    expect(first).toHaveFocus();
  });

  it("ignores modified Tab chords to preserve host shortcuts", () => {
    const { getByRole } = render(
      <FocusScope>
        <button type="button">First action</button>
        <button type="button">Last action</button>
      </FocusScope>
    );

    const last = getByRole("button", { name: "Last action" });

    const modifiedTabEvents = [
      { ctrlKey: true },
      { altKey: true },
      { metaKey: true }
    ] as const;

    modifiedTabEvents.forEach((modifier) => {
      last.focus();
      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
        cancelable: true,
        ...modifier
      });
      last.dispatchEvent(tabEvent);
      expect(tabEvent.defaultPrevented).toBe(false);
      expect(last).toHaveFocus();
    });
  });

  it("uses ownerDocument activeElement when rendered in iframe hosts", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument;
    if (!iframeDocument) {
      throw new Error("expected iframe document to exist");
    }
    const iframeContainer = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(iframeContainer);

    const { getByRole, unmount } = render(
      <FocusScope>
        <button type="button">Iframe first action</button>
        <button type="button">Iframe last action</button>
      </FocusScope>,
      { container: iframeContainer, baseElement: iframeDocument.body }
    );

    try {
      const first = getByRole("button", { name: "Iframe first action" });
      const last = getByRole("button", { name: "Iframe last action" });
      last.focus();

      const tabEvent = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
        cancelable: true
      });
      last.dispatchEvent(tabEvent);

      expect(tabEvent.defaultPrevented).toBe(true);
      expect(first).toHaveFocus();
    } finally {
      unmount();
      iframe.remove();
    }
  });
});
