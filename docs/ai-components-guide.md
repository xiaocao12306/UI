# AI Components Guide

## Scope
This guide covers the AI-oriented components in `@aurora-ui/react`:
- `PromptInput`
- `MessageBubble`
- `ReasoningPanel`
- `StreamingText`
- `StreamingCodeBlock`
- `LoadingDots` / `Skeleton` (loading fallback)

## Typical Composition
Use these components as one flow:

1. `PromptInput` captures user intent.
2. `MessageBubble` renders user/assistant messages.
3. `ReasoningPanel` shows intermediate reasoning steps.
4. `StreamingText` or `StreamingCodeBlock` renders incremental output.
5. `LoadingDots`/`Skeleton` bridges network gaps.

## Example
```tsx
import {
  PromptInput,
  MessageBubble,
  ReasoningPanel,
  StreamingText,
  StreamingCodeBlock
} from "@aurora-ui/react";

export function AiFlow() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <PromptInput onSubmit={(prompt) => console.log(prompt)} />
      <MessageBubble speaker="user">Create an OTP fallback flow.</MessageBubble>
      <MessageBubble speaker="assistant">
        <StreamingText text="Drafting flow and edge cases..." speed={14} />
      </MessageBubble>
      <ReasoningPanel
        steps={[
          "Parse intent",
          "Generate state transitions",
          "Prepare validation and recovery paths"
        ]}
      />
      <StreamingCodeBlock language="tsx" code={"export const ready = true;"} />
    </div>
  );
}
```

## Behavior Notes
- Keep `PromptInput` submission side effects outside the component (in app state or data layer).
- `StreamingText` and `StreamingCodeBlock` are render-only; upstream streaming control stays in business logic.
- For high-latency responses, always provide fallback state (`LoadingDots` or `Skeleton`).

## Accessibility Notes
- Preserve visible labels/placeholders for prompt input.
- Use semantic grouping around message threads (e.g. `<section aria-label="Conversation">`).
- Keep color contrast of streamed text and code blocks above AA baseline.
