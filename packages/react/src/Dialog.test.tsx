import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Dialog } from "./Dialog";

describe("Dialog", () => {
  it("calls onOpenChange(false) when close button clicked", () => {
    const onOpenChange = vi.fn();

    render(
      <Dialog open onOpenChange={onOpenChange} title="Settings">
        <p>Body</p>
      </Dialog>
    );

    fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
