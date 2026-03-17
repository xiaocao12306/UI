import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("returns null when there is only one page", () => {
    const { container } = render(<Pagination page={1} pageCount={1} onPageChange={() => {}} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("marks current page with aria-current", () => {
    render(<Pagination page={3} pageCount={8} onPageChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Current page, 3" })).toHaveAttribute("aria-current", "page");
  });

  it("moves to previous and next page", () => {
    const onPageChange = vi.fn();
    render(<Pagination page={3} pageCount={8} onPageChange={onPageChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Go to previous page" }));
    fireEvent.click(screen.getByRole("button", { name: "Go to next page" }));

    expect(onPageChange).toHaveBeenNthCalledWith(1, 2);
    expect(onPageChange).toHaveBeenNthCalledWith(2, 4);
  });

  it("disables previous controls on first page", () => {
    render(<Pagination page={1} pageCount={8} onPageChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Go to first page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Go to previous page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Go to next page" })).not.toBeDisabled();
  });

  it("supports first and last jump controls", () => {
    const onPageChange = vi.fn();
    render(<Pagination page={4} pageCount={10} onPageChange={onPageChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Go to first page" }));
    fireEvent.click(screen.getByRole("button", { name: "Go to last page" }));

    expect(onPageChange).toHaveBeenNthCalledWith(1, 1);
    expect(onPageChange).toHaveBeenNthCalledWith(2, 10);
  });

  it("renders compact tokens with ellipsis for large page sets", () => {
    render(<Pagination page={6} pageCount={20} onPageChange={() => {}} />);
    expect(screen.getAllByText("…").length).toBeGreaterThan(0);
    expect(screen.getByRole("button", { name: "Current page, 6" })).toBeInTheDocument();
  });

  it("does not call onPageChange when disabled", () => {
    const onPageChange = vi.fn();
    render(<Pagination page={4} pageCount={10} onPageChange={onPageChange} disabled />);

    fireEvent.click(screen.getByRole("button", { name: "Go to page 5" }));
    fireEvent.click(screen.getByRole("button", { name: "Go to next page" }));

    expect(onPageChange).not.toHaveBeenCalled();
  });
});
