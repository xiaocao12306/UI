import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReasoningPanel } from "./ReasoningPanel";

describe("ReasoningPanel", () => {
  it("toggles open state and exposes aria-expanded", () => {
    render(<ReasoningPanel steps={["Gather requirements", "Draft API contract"]} />);

    const toggle = screen.getByRole("button", { name: "Expand reasoning panel: Model reasoning" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    expect(screen.queryByRole("list")).toBeNull();

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle).toHaveAttribute("aria-label", "Collapse reasoning panel: Model reasoning");
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("Gather requirements")).toBeInTheDocument();

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-label", "Expand reasoning panel: Model reasoning");
    expect(screen.queryByRole("list")).toBeNull();
  });

  it("supports defaultOpen and empty-state fallback", () => {
    render(<ReasoningPanel title="Reasoning trace" defaultOpen steps={[]} />);

    expect(screen.getByRole("button", { name: "Collapse reasoning panel: Reasoning trace" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Collapse reasoning panel: Reasoning trace" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Enter Space"
    );
    expect(screen.getByText("No reasoning steps captured.")).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "Reasoning steps" })).toBeInTheDocument();
  });

  it("supports localized toggle and list labels", () => {
    render(
      <ReasoningPanel
        title="推理过程"
        steps={["收集上下文", "整理变更点"]}
        expandLabel="展开推理面板"
        collapseLabel="收起推理面板"
        listAriaLabel="推理步骤"
      />
    );

    const toggle = screen.getByRole("button", { name: "展开推理面板" });
    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: "收起推理面板" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("list", { name: "推理步骤" })).toBeInTheDocument();
  });

  it("falls back to default labels when localization props are blank", () => {
    render(<ReasoningPanel steps={[]} expandLabel="   " collapseLabel="   " listAriaLabel="   " />);

    const toggle = screen.getByRole("button", { name: "Expand reasoning panel: Model reasoning" });
    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: "Collapse reasoning panel: Model reasoning" })).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "Reasoning steps" })).toBeInTheDocument();
  });

  it("keeps custom expand/collapse labels unchanged", () => {
    render(
      <ReasoningPanel
        steps={["Gather requirements"]}
        expandLabel="展开推理面板"
        collapseLabel="收起推理面板"
      />
    );

    const toggle = screen.getByRole("button", { name: "展开推理面板" });
    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: "收起推理面板" })).toBeInTheDocument();
  });

  it("prefers listAriaLabelledBy over listAriaLabel", () => {
    render(
      <div>
        <h3 id="reasoning-heading">Reasoning timeline heading</h3>
        <ReasoningPanel
          defaultOpen
          steps={["Gather requirements"]}
          listAriaLabel="Fallback reasoning steps"
          listAriaLabelledBy="reasoning-heading"
        />
      </div>
    );

    const list = screen.getByRole("list", { name: "Reasoning timeline heading" });
    expect(list).toHaveAttribute("aria-labelledby", "reasoning-heading");
    expect(list).not.toHaveAttribute("aria-label");
  });

  it("treats blank-only steps and blank emptyText as fallback empty state", () => {
    render(<ReasoningPanel defaultOpen steps={["   "]} emptyText="   " />);
    expect(screen.getByText("No reasoning steps captured.")).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "Reasoning steps" })).toBeInTheDocument();
  });

  it("keeps numeric emptyText semantics when no reasoning step remains after normalization", () => {
    render(<ReasoningPanel defaultOpen steps={["   "]} emptyText={0} />);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "Reasoning steps" })).toBeInTheDocument();
  });
});
