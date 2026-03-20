import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Portal } from "./Portal";

describe("Portal", () => {
  it("renders children in document.body by default", () => {
    render(
      <Portal>
        <div>Default portal content</div>
      </Portal>
    );

    expect(within(document.body).getByText("Default portal content")).toBeInTheDocument();
  });

  it("renders children in ownerDocument body when mounted in an iframe document", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument;
    if (!iframeDocument) {
      throw new Error("expected iframe document to exist");
    }

    const iframeContainer = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(iframeContainer);

    let unmount: (() => void) | undefined;
    try {
      ({ unmount } = render(
        <Portal>
          <div>Iframe portal content</div>
        </Portal>,
        { container: iframeContainer, baseElement: iframeDocument.body }
      ));

      expect(within(iframeDocument.body).getByText("Iframe portal content")).toBeInTheDocument();
      expect(screen.queryByText("Iframe portal content")).toBeNull();
    } finally {
      unmount?.();
      iframe.remove();
    }
  });

  it("prefers explicit container over ownerDocument body", () => {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument;
    if (!iframeDocument) {
      throw new Error("expected iframe document to exist");
    }

    const iframeContainer = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(iframeContainer);
    const explicitContainer = document.createElement("div");
    explicitContainer.setAttribute("data-testid", "explicit-portal-container");
    document.body.appendChild(explicitContainer);

    let unmount: (() => void) | undefined;
    try {
      ({ unmount } = render(
        <Portal container={explicitContainer}>
          <div>Explicit container portal content</div>
        </Portal>,
        { container: iframeContainer, baseElement: iframeDocument.body }
      ));

      expect(within(explicitContainer).getByText("Explicit container portal content")).toBeInTheDocument();
      expect(within(iframeDocument.body).queryByText("Explicit container portal content")).toBeNull();
    } finally {
      unmount?.();
      explicitContainer.remove();
      iframe.remove();
    }
  });
});
