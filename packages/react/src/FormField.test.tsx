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
    expect(screen.getByText("Email").closest("div")).toHaveAttribute("data-invalid", "true");
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

    const input = screen.getByRole("textbox", { name: "Disabled field" });
    expect(input).toBeDisabled();
    expect(screen.getByText("Disabled field").closest("div")).toHaveAttribute("aria-disabled", "true");
    expect(screen.getByText("Disabled field").closest("div")).toHaveAttribute("data-disabled", "true");
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
    expect(screen.getByText("*")).toHaveAttribute("aria-hidden", "true");
  });

  it("merges generated label id with child aria-labelledby", () => {
    render(
      <>
        <span id="custom-labelledby">Custom name</span>
        <FormField label="Build target">
          <Input aria-labelledby="custom-labelledby" />
        </FormField>
      </>
    );

    const input = screen.getAllByRole("textbox")[0];
    const label = screen.getByText("Build target").closest("label");
    const labelledBy = input.getAttribute("aria-labelledby") ?? "";

    expect(label).toHaveAttribute("id");
    expect(labelledBy.split(" ")).toContain("custom-labelledby");
    expect(label?.id ? labelledBy.split(" ").includes(label.id) : false).toBe(true);
  });

  it("keeps explicit aria-label naming without forcing generated aria-labelledby", () => {
    render(
      <FormField label="Internal label">
        <Input aria-label="Custom control name" />
      </FormField>
    );

    const input = screen.getByRole("textbox", { name: "Custom control name" });
    expect(input).not.toHaveAttribute("aria-labelledby");
  });

  it("reflects child disabled semantics on the field wrapper", () => {
    render(
      <FormField label="Inherited disabled state">
        <Input disabled />
      </FormField>
    );

    const wrapper = screen.getByText("Inherited disabled state").closest("div");
    expect(screen.getByRole("textbox", { name: "Inherited disabled state" })).toBeDisabled();
    expect(wrapper).toHaveAttribute("aria-disabled", "true");
    expect(wrapper).toHaveAttribute("data-disabled", "true");
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

  it("does not emit dangling htmlFor when child is non-clonable and htmlFor is absent", () => {
    render(
      <FormField label="Composite field">
        <>
          <Input />
        </>
      </FormField>
    );

    const label = screen.getByText("Composite field").closest("label");
    expect(label).not.toHaveAttribute("for");
  });

  it("respects explicit htmlFor even when child is non-clonable", () => {
    render(
      <FormField label="External field" htmlFor="external-control">
        <>
          <Input id="external-control" />
        </>
      </FormField>
    );

    expect(screen.getByLabelText("External field")).toHaveAttribute("id", "external-control");
  });
});
