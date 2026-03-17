import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "./Progress";

describe("Progress", () => {
  it("clamps numeric value and exposes progressbar semantics", () => {
    render(<Progress value={140} max={120} label="Upload progress" />);

    const progressbar = screen.getByRole("progressbar", { name: "Upload progress" });
    expect(progressbar).toHaveAttribute("aria-valuemin", "0");
    expect(progressbar).toHaveAttribute("aria-valuemax", "120");
    expect(progressbar).toHaveAttribute("aria-valuenow", "120");
    expect(progressbar).toHaveAttribute("aria-valuetext", "100%");
  });

  it("supports indeterminate mode without aria-valuenow", () => {
    render(<Progress indeterminate valueText="Synchronizing" />);

    const progressbar = screen.getByRole("progressbar", { name: "Progress" });
    expect(progressbar).not.toHaveAttribute("aria-valuenow");
    expect(progressbar).toHaveAttribute("aria-valuetext", "Synchronizing");
  });

  it("renders helper value label when requested", () => {
    render(<Progress value={55} showValueLabel />);
    expect(screen.getByText("55%")).toBeInTheDocument();
  });
});
