import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReasoningPanel } from "./ReasoningPanel";

describe("ReasoningPanel", () => {
  it("toggles open state and exposes aria-expanded", () => {
    render(<ReasoningPanel steps={["Gather requirements", "Draft API contract"]} />);

    const toggle = screen.getByRole("button", { name: "▶ Model reasoning" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("list")).toBeNull();

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("Gather requirements")).toBeInTheDocument();

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("list")).toBeNull();
  });

  it("supports defaultOpen and empty-state fallback", () => {
    render(<ReasoningPanel title="Reasoning trace" defaultOpen steps={[]} />);

    expect(screen.getByRole("button", { name: "▼ Reasoning trace" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("No reasoning steps captured.")).toBeInTheDocument();
  });
});
