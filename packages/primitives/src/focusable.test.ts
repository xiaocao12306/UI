import { describe, expect, it } from "vitest";
import { getFocusableElements } from "./focusable";

describe("getFocusableElements", () => {
  it("returns enabled focusable elements", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <button id="ok">ok</button>
      <button id="disabled" disabled>disabled</button>
      <a id="link" href="#">link</a>
      <div id="not" tabindex="-1"></div>
    `;

    const elements = getFocusableElements(container);
    expect(elements.map((el) => el.id)).toEqual(["ok", "link"]);
  });
});
