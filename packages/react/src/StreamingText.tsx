import * as React from "react";

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
  style,
  ...props
}: StreamingTextProps) {
  const [visibleText, setVisibleText] = React.useState(streaming ? "" : text);
  const completedRef = React.useRef(false);
  const totalLength = text.length;
  const resolvedLabel =
    typeof label === "string" && label.trim().length > 0
      ? label.trim()
      : "Streaming text";

  React.useEffect(() => {
    completedRef.current = false;

    if (!streaming) {
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

    const start = () => {
      intervalId = window.setInterval(() => {
        pointer += 1;
        const nextText = text.slice(0, pointer);
        setVisibleText(nextText);
        onProgress?.(nextText, pointer, totalLength);
        if (pointer >= totalLength) {
          if (intervalId !== null) {
            window.clearInterval(intervalId);
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

    const timeoutId = window.setTimeout(start, Math.max(0, startDelay));

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, [onComplete, onProgress, speed, startDelay, streaming, text, totalLength]);

  const isComplete = visibleText.length >= totalLength;
  const showCursor = cursor && streaming && (!isComplete || showCursorWhenDone);

  return (
    <span
      role="status"
      aria-label={resolvedLabel}
      aria-live={live}
      aria-busy={streaming && !isComplete}
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
