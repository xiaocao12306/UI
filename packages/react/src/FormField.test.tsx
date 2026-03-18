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

  it("preserves child invalid semantics when no field error exists", () => {
    render(
      <FormField label="Existing invalid">
        <Input invalid />
      </FormField>
    );

    expect(screen.getByRole("textbox", { name: "Existing invalid" })).toHaveAttribute("aria-invalid", "true");
  });

  it("preserves child grammar/spelling invalid token when no field error exists", () => {
    render(
      <FormField label="Grammar invalid">
        <Input aria-invalid="grammar" />
      </FormField>
    );

    expect(screen.getByRole("textbox", { name: "Grammar invalid" })).toHaveAttribute("aria-invalid", "grammar");
  });

  it("prioritizes field-level error semantics over child grammar token", () => {
    render(
      <FormField label="Grammar overridden" error="Needs correction">
        <Input aria-invalid="grammar" />
      </FormField>
    );

    expect(screen.getByRole("textbox", { name: "Grammar overridden" })).toHaveAttribute("aria-invalid", "true");
  });

  it("merges child aria-describedby with field hints", () => {
    render(
      <FormField label="Deployment window" description="Use local timezone.">
        <Input aria-describedby="custom-hint" />
      </FormField>
    );

    const input = screen.getByRole("textbox", { name: "Deployment window" });
    const describedBy = input.getAttribute("aria-describedby") ?? "";
    expect(describedBy).toContain("custom-hint");

    const ids = describedBy.split(" ").filter(Boolean);
    expect(ids.length).toBe(2);
  });

  it("preserves child required semantics", () => {
    render(
      <FormField label="API key">
        <Input required />
      </FormField>
    );

    const input = screen.getByRole("textbox", { name: /API key/ });
    expect(input).toHaveAttribute("required");
    expect(input).toHaveAttribute("aria-required", "true");
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("treats aria-required false as optional", () => {
    render(
      <FormField label="Optional note">
        <Input aria-required="false" />
      </FormField>
    );

    expect(screen.getByRole("textbox", { name: "Optional note" })).not.toHaveAttribute("required");
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  it("merges child aria-errormessage with field error id", () => {
    render(
      <FormField label="Email" error="Must be company email">
        <Input aria-invalid="true" aria-errormessage="custom-error" />
      </FormField>
    );

    const input = screen.getByRole("textbox", { name: "Email" });
    const mergedErrorMessage = input.getAttribute("aria-errormessage") ?? "";
    expect(mergedErrorMessage).toContain("custom-error");

    const alert = screen.getByRole("alert");
    expect(mergedErrorMessage.split(" ")).toContain(alert.id);
  });
});
