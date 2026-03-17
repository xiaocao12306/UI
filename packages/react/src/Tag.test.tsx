import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tag } from "./Tag";

describe("Tag", () => {
  it("renders text content", () => {
    render(<Tag>release/0.1.0</Tag>);
    expect(screen.getByText("release/0.1.0")).toBeInTheDocument();
  });

  it("supports aria attributes", () => {
    render(<Tag aria-label="Environment: staging">staging</Tag>);
    expect(screen.getByLabelText("Environment: staging")).toHaveTextContent("staging");
  });

  it("allows style overrides", () => {
    render(
      <Tag style={{ borderStyle: "dashed" }}>
        token-first
      </Tag>
    );

    expect(screen.getByText("token-first")).toHaveStyle({ borderStyle: "dashed" });
  });
});
