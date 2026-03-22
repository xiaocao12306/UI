import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
});
