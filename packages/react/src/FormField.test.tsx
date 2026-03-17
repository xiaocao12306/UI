import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FormField } from "./FormField";
import { Input } from "./Input";

describe("FormField", () => {
  it("renders label, description and error", () => {
    render(
      <FormField label="Email" description="Work email" error="Invalid email" required>
        <Input />
      </FormField>
    );

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Work email")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("Invalid email");
    expect(screen.getByLabelText(/Email/)).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText(/Email/)).toHaveAttribute("required");
  });

  it("associates control with generated id when htmlFor is not provided", () => {
    render(
      <FormField label="Project name">
        <Input />
      </FormField>
    );

    const input = screen.getByRole("textbox", { name: "Project name" });
    expect(input).toHaveAttribute("id");
    expect(screen.getByLabelText("Project name")).toBe(input);
  });

  it("links description and error through aria attributes", () => {
    render(
      <FormField label="Email" description="Use company email" error="Invalid format">
        <Input />
      </FormField>
    );

    const input = screen.getByLabelText(/Email/);
    const describedBy = input.getAttribute("aria-describedby") ?? "";
    const errorMessageId = input.getAttribute("aria-errormessage");

    expect(describedBy.split(" ").length).toBe(2);
    expect(errorMessageId).toBeTruthy();
    expect(screen.getByRole("alert").id).toBe(errorMessageId);
  });

  it("propagates disabled state to child control", () => {
    render(
      <FormField label="Disabled field" disabled>
        <Input />
      </FormField>
    );

    expect(screen.getByRole("textbox", { name: "Disabled field" })).toBeDisabled();
  });
});
