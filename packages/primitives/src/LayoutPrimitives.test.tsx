import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Box } from "./Box";
import { Text } from "./Text";
import { VisuallyHidden } from "./VisuallyHidden";

describe("Layout primitives", () => {
  describe("Box", () => {
    it("renders a div by default", () => {
      const { container } = render(<Box data-testid="box">content</Box>);
      const element = screen.getByTestId("box");

      expect(element.tagName).toBe("DIV");
      expect(element).toHaveTextContent("content");
      expect(container.firstChild).toBe(element);
    });

    it("supports asChild slot rendering", () => {
      render(
        <Box asChild data-testid="slot-box">
          <button type="button">slot target</button>
        </Box>
      );

      const button = screen.getByRole("button", { name: "slot target" });
      expect(button).toHaveAttribute("data-testid", "slot-box");
    });
  });

  describe("Text", () => {
    it("uses primary tone by default", () => {
      render(<Text>Primary</Text>);
      expect(screen.getByText("Primary")).toHaveStyle({ color: "var(--aurora-text-primary)" });
    });

    it("applies secondary and inverse tones", () => {
      const { rerender } = render(<Text tone="secondary">Secondary</Text>);
      expect(screen.getByText("Secondary")).toHaveStyle({ color: "var(--aurora-text-secondary)" });

      rerender(<Text tone="inverse">Inverse</Text>);
      expect(screen.getByText("Inverse")).toHaveStyle({ color: "var(--aurora-text-inverse)" });
    });

    it("lets explicit style override tone style", () => {
      render(
        <Text tone="secondary" style={{ color: "rgb(255, 0, 0)" }}>
          Styled
        </Text>
      );
      expect(screen.getByText("Styled")).toHaveStyle({ color: "rgb(255, 0, 0)" });
    });

    it("supports asChild slot rendering", () => {
      render(
        <Text asChild data-testid="text-slot">
          <strong>Bold text</strong>
        </Text>
      );

      const element = screen.getByText("Bold text");
      expect(element.tagName).toBe("STRONG");
      expect(element).toHaveAttribute("data-testid", "text-slot");
      expect(element).toHaveStyle({ color: "var(--aurora-text-primary)" });
    });
  });

  describe("VisuallyHidden", () => {
    it("applies visually hidden baseline styles", () => {
      render(<VisuallyHidden>Hidden label</VisuallyHidden>);
      const element = screen.getByText("Hidden label");

      expect(element).toHaveStyle({
        position: "absolute",
        width: "1px",
        height: "1px",
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        whiteSpace: "nowrap"
      });
    });

    it("merges custom style overrides", () => {
      render(
        <VisuallyHidden style={{ width: 2, height: 2 }} data-testid="vh">
          Hidden custom
        </VisuallyHidden>
      );

      const element = screen.getByTestId("vh");
      expect(element).toHaveStyle({ width: "2px", height: "2px" });
    });
  });
});
