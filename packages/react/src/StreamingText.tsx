import * as React from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export type StreamingTextProps = React.ComponentPropsWithoutRef<"span"> & {
  text: string;
  speed?: number;
  streaming?: boolean;
  startDelay?: number;
  cursor?: boolean;
  cursorChar?: string;
  showCursorWhenDone?: boolean;
  preserveLineBreaks?: boolean;
  onComplete?: () => void;
  onProgress?: (visibleText: string, count: number, total: number) => void;
  live?: "polite" | "assertive" | "off";
  label?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  respectReducedMotion?: boolean;
};

export function StreamingText({
  text,
  speed = 16,
  streaming = true,
  startDelay = 0,
  cursor = true,
  cursorChar = "|",
  showCursorWhenDone = false,
  preserveLineBreaks = true,
  onComplete,
  onProgress,
  live = "polite",
  label = "Streaming text",
  ariaLabel,
  ariaLabelledBy,
  respectReducedMotion = true,
  style,
  ...props
}: StreamingTextProps) {
  const rootRef = React.useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion(rootRef);
  const shouldStream = streaming && !(respectReducedMotion && prefersReducedMotion);
  const [visibleText, setVisibleText] = React.useState(streaming ? "" : text);
  const completedRef = React.useRef(false);
  const totalLength = text.length;
  const resolvedLabel =
    typeof label === "string" && label.trim().length > 0
      ? label.trim()
      : "Streaming text";
  const resolvedAriaLabelledBy =
    typeof ariaLabelledBy === "string" && ariaLabelledBy.trim().length > 0
      ? ariaLabelledBy.trim()
      : undefined;
  const explicitAriaLabel =
    resolvedAriaLabelledBy === undefined && typeof ariaLabel === "string" && ariaLabel.trim().length > 0
      ? ariaLabel.trim()
      : undefined;
  const resolvedAriaLabel = resolvedAriaLabelledBy
    ? undefined
    : explicitAriaLabel ?? resolvedLabel;

  React.useEffect(() => {
    completedRef.current = false;

    if (!shouldStream) {
      setVisibleText(text);
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
      return;
    }

    let pointer = 0;
    let intervalId: number | null = null;
    setVisibleText("");
    const ownerWindow = rootRef.current?.ownerDocument.defaultView ?? window;

    const start = () => {
      intervalId = ownerWindow.setInterval(() => {
        pointer += 1;
        const nextText = text.slice(0, pointer);
        setVisibleText(nextText);
        onProgress?.(nextText, pointer, totalLength);
        if (pointer >= totalLength) {
          if (intervalId !== null) {
            ownerWindow.clearInterval(intervalId);
            intervalId = null;
          }
          if (!completedRef.current) {
            completedRef.current = true;
            onComplete?.();
          }
        }
      }, Math.max(8, speed));
    };

    if (totalLength === 0) {
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
      return;
    }

    const timeoutId = ownerWindow.setTimeout(start, Math.max(0, startDelay));

    return () => {
      ownerWindow.clearTimeout(timeoutId);
      if (intervalId !== null) {
        ownerWindow.clearInterval(intervalId);
      }
    };
  }, [onComplete, onProgress, shouldStream, speed, startDelay, text, totalLength]);

  const isComplete = visibleText.length >= totalLength;
  const showCursor = cursor && shouldStream && (!isComplete || showCursorWhenDone);

  return (
    <span
      ref={rootRef}
      role="status"
      aria-label={resolvedAriaLabel}
      aria-labelledby={resolvedAriaLabelledBy}
      aria-live={live}
      aria-busy={shouldStream && !isComplete}
      style={{ whiteSpace: preserveLineBreaks ? "pre-wrap" : "normal", ...style }}
      {...props}
    >
      {visibleText}
      {showCursor ? (
        <span aria-hidden style={{ color: "var(--aurora-streaming-cursor)", marginLeft: 2 }}>
          {cursorChar}
        </span>
      ) : null}
    </span>
  );
}
