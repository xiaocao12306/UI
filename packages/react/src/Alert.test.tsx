import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders title and description with status semantics by default", () => {
    render(<Alert title="Heads up" description="Deploy is still rolling out." />);

    const alert = screen.getByRole("status");
    expect(alert).toHaveAttribute("aria-live", "polite");
    expect(alert).toHaveTextContent("Heads up");
    expect(alert).toHaveTextContent("Deploy is still rolling out.");
  });

  it("uses assertive alert semantics for danger tone", () => {
    render(<Alert tone="danger" title="Deploy failed" description="Rollback required." />);

    const alert = screen.getByRole("alert");
    expect(alert).toHaveAttribute("aria-live", "assertive");
  });

  it("supports custom aria-live behavior", () => {
    render(<Alert live="off" title="Muted alert" />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "off");
  });

  it("supports dismiss callbacks", () => {
    const onClose = vi.fn();
    render(<Alert title="Notice" onClose={onClose} closeLabel="Close notice" />);

    const closeButton = screen.getByRole("button", { name: "Close notice" });
    expect(closeButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("ignores blank closeLabel and falls back to default dismiss button name", () => {
    render(<Alert title="Notice" onClose={() => {}} closeLabel="   " />);
    expect(screen.getByRole("button", { name: "Dismiss alert" })).toBeInTheDocument();
  });

  it("supports explicit ariaLabel and ignores blank values", () => {
    const { rerender } = render(<Alert title="Named alert" ariaLabel="Release readiness status" />);
    expect(screen.getByRole("status", { name: "Release readiness status" })).toBeInTheDocument();

    rerender(<Alert title="Named alert" ariaLabel="   " />);
    expect(screen.getByRole("status")).not.toHaveAttribute("aria-label");
  });
});
