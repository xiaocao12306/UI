import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Toast } from "./Toast";

describe("Toast", () => {
  it("renders live region and closes via close button", () => {
    const onClose = vi.fn();

    render(<Toast open title="Saved" description="Changes were persisted" onClose={onClose} />);

    const toast = screen.getByRole("status");
    expect(toast).toHaveAttribute("aria-live", "polite");
    expect(toast).toHaveAttribute("aria-atomic", "true");

    fireEvent.click(screen.getByRole("button", { name: "Close toast" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not render when closed", () => {
    render(<Toast open={false} title="Hidden" />);
    expect(screen.queryByRole("status")).toBeNull();
  });
});
