import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MessageBubble } from "./MessageBubble";

describe("MessageBubble", () => {
  it("renders role and label for each speaker variant", () => {
    render(
      <div>
        <MessageBubble speaker="user">Ship this today.</MessageBubble>
        <MessageBubble speaker="assistant">Draft created. Please review.</MessageBubble>
        <MessageBubble speaker="system">Autosaved 2 minutes ago.</MessageBubble>
      </div>
    );

    expect(screen.getByRole("article", { name: "User message" })).toHaveTextContent("Ship this today.");
    expect(screen.getByRole("article", { name: "Assistant message" })).toHaveTextContent("Draft created. Please review.");
    expect(screen.getByRole("article", { name: "System message" })).toHaveTextContent("Autosaved 2 minutes ago.");
  });

  it("exposes speaker marker for diagnostics hooks", () => {
    render(<MessageBubble speaker="system">Pipeline paused.</MessageBubble>);
    expect(screen.getByRole("article", { name: "System message" })).toHaveAttribute("data-speaker", "system");
  });
});
