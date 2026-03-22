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
    expect(screen.getByRole("article", { name: "User message" })).toHaveAttribute("aria-roledescription", "message");
  });

  it("exposes speaker marker for diagnostics hooks", () => {
    render(<MessageBubble speaker="system">Pipeline paused.</MessageBubble>);
    expect(screen.getByRole("article", { name: "System message" })).toHaveAttribute("data-speaker", "system");
  });

  it("supports localized speaker labels when ariaLabel is not provided", () => {
    render(<MessageBubble speaker="assistant" speakerLabel="助手">已完成草稿生成。</MessageBubble>);

    expect(screen.getByRole("article", { name: "助手 message" })).toHaveTextContent("已完成草稿生成。");
  });

  it("prefers explicit ariaLabel over speakerLabel and ignores blank values", () => {
    const { rerender } = render(
      <MessageBubble speaker="user" ariaLabel="发布摘要气泡" speakerLabel="用户">
        Draft summary ready.
      </MessageBubble>
    );

    expect(screen.getByRole("article", { name: "发布摘要气泡" })).toHaveTextContent("Draft summary ready.");

    rerender(
      <MessageBubble speaker="user" ariaLabel="   " speakerLabel="   ">
        Fallback label.
      </MessageBubble>
    );
    expect(screen.getByRole("article", { name: "User message" })).toHaveTextContent("Fallback label.");
  });

  it("prefers ariaLabelledBy over ariaLabel and ignores blank ariaLabelledBy", () => {
    const { rerender } = render(
      <div>
        <h3 id="message-heading">Release assistant message</h3>
        <MessageBubble
          speaker="assistant"
          ariaLabel="Fallback assistant label"
          ariaLabelledBy="message-heading"
        >
          Linked heading content.
        </MessageBubble>
      </div>
    );

    const labelledByMessage = screen.getByRole("article", { name: "Release assistant message" });
    expect(labelledByMessage).toHaveAttribute("aria-labelledby", "message-heading");
    expect(labelledByMessage).not.toHaveAttribute("aria-label");

    rerender(
      <MessageBubble speaker="assistant" ariaLabel="Fallback assistant label" ariaLabelledBy="   ">
        Blank labelledby fallback.
      </MessageBubble>
    );
    expect(screen.getByRole("article", { name: "Fallback assistant label" })).toHaveAttribute(
      "aria-label",
      "Fallback assistant label"
    );
    expect(screen.getByRole("article", { name: "Fallback assistant label" })).not.toHaveAttribute(
      "aria-labelledby"
    );
  });

  it("supports localized role description and falls back when blank", () => {
    const { rerender } = render(
      <MessageBubble speaker="assistant" roleDescription="聊天消息">
        已完成草稿生成。
      </MessageBubble>
    );

    expect(screen.getByRole("article", { name: "Assistant message" })).toHaveAttribute(
      "aria-roledescription",
      "聊天消息"
    );

    rerender(
      <MessageBubble speaker="assistant" roleDescription="   ">
        Fallback role description.
      </MessageBubble>
    );
    expect(screen.getByRole("article", { name: "Assistant message" })).toHaveAttribute(
      "aria-roledescription",
      "message"
    );
  });
});
