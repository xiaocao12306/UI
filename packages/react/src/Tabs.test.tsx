import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tabs } from "./Tabs";

describe("Tabs", () => {
  it("switches panel when tab is clicked", () => {
    render(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    expect(screen.getByText("Panel One")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("tab", { name: "Two" }));
    expect(screen.getByText("Panel Two")).toBeInTheDocument();
  });

  it("supports keyboard navigation", () => {
    render(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    fireEvent.keyDown(screen.getByRole("tab", { name: "One" }), { key: "ArrowRight" });
    expect(screen.getByText("Panel Two")).toBeInTheDocument();
  });
});
