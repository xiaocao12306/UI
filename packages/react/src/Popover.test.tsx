import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Popover } from "./Popover";

describe("Popover", () => {
  it("opens and closes through trigger, escape key, and outside pointer", () => {
    render(
      <Popover triggerLabel="Open popover">
        <p>Popover content</p>
      </Popover>
    );

    expect(screen.queryByText("Popover content")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Open popover" }));
    expect(screen.getByText("Popover content")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByText("Popover content")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Open popover" }));
    expect(screen.getByText("Popover content")).toBeInTheDocument();

    fireEvent.pointerDown(document.body);
    expect(screen.queryByText("Popover content")).toBeNull();
  });
});
