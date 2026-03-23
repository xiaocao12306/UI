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
    const indicator = progressbar.querySelector('[data-aurora-reduced-motion]');
    expect(progressbar).not.toHaveAttribute("aria-valuenow");
    expect(progressbar).toHaveAttribute("aria-valuetext", "Synchronizing");
    expect(indicator).not.toBeNull();
    if (indicator) {
      expect(indicator).toHaveAttribute("data-aurora-reduced-motion", "animate transform-reset");
      expect(indicator).toHaveStyle({ animation: "aurora-progress-indeterminate 1200ms ease-in-out infinite" });
    }
    expect(progressbar.querySelector("style")).toBeNull();
  });

  it("falls back to computed value narration when valueText is blank", () => {
    const { rerender } = render(<Progress value={55} valueText="   " showValueLabel />);
    const determinateProgressbar = screen.getByRole("progressbar", { name: "Progress" });

    expect(determinateProgressbar).toHaveAttribute("aria-valuetext", "55%");
    expect(screen.getByText("55%")).toBeInTheDocument();

    rerender(<Progress indeterminate valueText="   " showValueLabel />);
    const indeterminateProgressbar = screen.getByRole("progressbar", { name: "Progress" });
    expect(indeterminateProgressbar).toHaveAttribute("aria-valuetext", "Loading");
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("renders helper value label when requested", () => {
    render(<Progress value={55} showValueLabel />);
    expect(screen.getByText("55%")).toBeInTheDocument();
  });

  it("falls back invalid runtime indeterminate/showValueLabel flags to safe defaults", () => {
    render(
      <Progress
        value={55}
        indeterminate={"true" as unknown as boolean}
        showValueLabel={"true" as unknown as boolean}
      />
    );

    const progressbar = screen.getByRole("progressbar", { name: "Progress" });
    const indicator = progressbar.querySelector('[data-aurora-reduced-motion]');
    expect(progressbar).toHaveAttribute("aria-valuenow", "55");
    expect(progressbar).toHaveAttribute("aria-valuetext", "55%");
    expect(screen.queryByText("55%")).not.toBeInTheDocument();
    expect(indicator).not.toBeNull();
    if (indicator) {
      expect(indicator).toHaveAttribute("data-aurora-reduced-motion", "transition");
    }
  });

  it("ignores blank label and falls back to default progressbar name", () => {
    render(<Progress label="   " />);
    const progressbar = screen.getByRole("progressbar", { name: "Progress" });
    const indicator = progressbar.querySelector('[data-aurora-reduced-motion]');

    expect(progressbar).toBeInTheDocument();
    expect(indicator).not.toBeNull();
    if (indicator) {
      expect(indicator).toHaveAttribute("data-aurora-reduced-motion", "transition");
    }
  });

  it("supports explicit ariaLabel override", () => {
    render(<Progress label="Deployment progress" ariaLabel="Release pipeline progress" />);
    const progressbar = screen.getByRole("progressbar", { name: "Release pipeline progress" });
    expect(progressbar).toHaveAttribute("aria-label", "Release pipeline progress");
    expect(progressbar).not.toHaveAttribute("aria-labelledby");
  });

  it("prefers ariaLabelledBy over ariaLabel and label fallback", () => {
    render(
      <div>
        <h3 id="progress-heading">Release pipeline heading</h3>
        <Progress label="Deployment progress" ariaLabel="Fallback progress label" ariaLabelledBy="progress-heading" />
      </div>
    );

    const progressbar = screen.getByRole("progressbar", { name: "Release pipeline heading" });
    expect(progressbar).toHaveAttribute("aria-labelledby", "progress-heading");
    expect(progressbar).not.toHaveAttribute("aria-label");
  });

  it("ignores blank ariaLabelledBy and preserves ariaLabel naming", () => {
    render(<Progress label="Deployment progress" ariaLabel="Release pipeline progress" ariaLabelledBy="   " />);

    const progressbar = screen.getByRole("progressbar", { name: "Release pipeline progress" });
    expect(progressbar).toHaveAttribute("aria-label", "Release pipeline progress");
    expect(progressbar).not.toHaveAttribute("aria-labelledby");
  });
});
