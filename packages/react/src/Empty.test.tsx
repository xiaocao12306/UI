import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";
import { Empty } from "./Empty";

describe("Empty", () => {
  it("renders status semantics and helper narration", () => {
    render(<Empty title="No records" description="Try changing filters." />);

    const empty = screen.getByRole("status");
    const heading = screen.getByText("No records");
    const description = screen.getByText("Try changing filters.");
    const describedBy = empty.getAttribute("aria-describedby");

    expect(empty).toHaveAttribute("aria-labelledby", heading.getAttribute("id"));
    expect(describedBy).toBe(description.getAttribute("id"));
  });

  it("supports icon and action content", () => {
    render(
      <Empty
        title="No releases yet"
        icon={<span data-testid="empty-icon">📦</span>}
        action={<Button size="sm">Create release</Button>}
      />
    );

    expect(screen.getByTestId("empty-icon")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create release" })).toBeInTheDocument();
  });

  it("keeps numeric description/action/icon semantics", () => {
    render(<Empty title="No records" description={0} action={0} icon={0} />);

    const empty = screen.getByRole("status");
    const zeros = screen.getAllByText("0");

    expect(zeros.length).toBeGreaterThanOrEqual(3);
    expect(empty).toHaveAttribute("aria-describedby");
  });

  it("respects custom role override", () => {
    render(<Empty title="No data" role="region" />);
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  it("supports explicit ariaLabel and ignores blank values", () => {
    const { rerender } = render(<Empty title="No data" ariaLabel="Release empty state" />);
    expect(screen.getByRole("status", { name: "Release empty state" })).toBeInTheDocument();

    rerender(<Empty title="No data" ariaLabel="   " />);
    expect(screen.getByRole("status", { name: "No data" })).toBeInTheDocument();
  });

  it("prefers ariaLabelledBy over ariaLabel for naming", () => {
    render(
      <div>
        <h2 id="empty-heading">Release state heading</h2>
        <Empty title="No data" ariaLabel="Fallback empty state" ariaLabelledBy="empty-heading" />
      </div>
    );

    const empty = screen.getByRole("status", { name: "Release state heading" });
    expect(empty).toHaveAttribute("aria-labelledby", "empty-heading");
    expect(empty).not.toHaveAttribute("aria-label");
  });

  it("falls back to Empty state name when non-text title omits ariaLabel and ariaLabelledBy", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(<Empty title={<span aria-hidden>📦</span>} description="No releases yet." />);
      const empty = screen.getByRole("status", { name: "Empty state" });
      expect(empty).toHaveAttribute("aria-label", "Empty state");
      expect(empty).not.toHaveAttribute("aria-labelledby");
      expect(warnSpy).toHaveBeenCalledWith(
        "[Empty] Non-text title should provide ariaLabel or ariaLabelledBy."
      );
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("does not warn when non-text title provides ariaLabel", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(<Empty title={<span aria-hidden>📦</span>} ariaLabel="Release empty state" />);
      expect(warnSpy).not.toHaveBeenCalled();
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("does not warn when rich non-text title exposes aria-label on inner node", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      render(<Empty title={<span aria-label="Release empty state">📦</span>} />);
      expect(warnSpy).not.toHaveBeenCalled();
      expect(screen.getByRole("status", { name: "Release empty state" })).toBeInTheDocument();
    } finally {
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    }
  });

  it("normalizes runtime tone tokens and falls back invalid values to default tone", () => {
    const { unmount } = render(<Empty title="Runtime warning" tone={" WARNING " as unknown as "warning"} />);
    const runtimeWarning = screen.getByRole("status", { name: "Runtime warning" });
    const warningStyle = runtimeWarning.getAttribute("style") ?? "";
    expect(warningStyle).toContain("var(--aurora-color-amber-500)");

    unmount();
    render(<Empty title="Runtime fallback" tone={"critical" as unknown as "default"} />);
    const runtimeFallback = screen.getByRole("status", { name: "Runtime fallback" });
    const fallbackStyle = runtimeFallback.getAttribute("style") ?? "";
    expect(fallbackStyle).not.toContain("var(--aurora-color-amber-500)");
    expect(fallbackStyle).not.toContain("var(--aurora-color-red-500)");
  });
});
