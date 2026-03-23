import * as React from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export type StreamingCodeBlockProps = React.ComponentPropsWithoutRef<"div"> & {
  code: string;
  language?: string;
  speed?: number;
  label?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  live?: "polite" | "assertive" | "off";
  respectReducedMotion?: boolean;
};

function resolveStreamingCodeSpeed(speed: number, fallback: number) {
  if (!Number.isFinite(speed)) {
    return fallback;
  }

  return Math.trunc(speed);
}

function resolveBooleanFlag(value: unknown, fallback: boolean) {
  if (typeof value !== "boolean") {
    return fallback;
  }

  return value;
}

export function StreamingCodeBlock({
  code,
  language = "txt",
  speed = 8,
  label = "Streaming code block",
  ariaLabel,
  ariaLabelledBy,
  live = "off",
  respectReducedMotion = true,
  style,
  ...props
}: StreamingCodeBlockProps) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion(rootRef);
  const safeSpeed = resolveStreamingCodeSpeed(speed, 8);
  const resolvedRespectReducedMotion = resolveBooleanFlag(respectReducedMotion, true);
  const shouldStream =
    safeSpeed > 0 && code.length > 0 && !(resolvedRespectReducedMotion && prefersReducedMotion);
  const [visible, setVisible] = React.useState("");
  const resolvedLabel =
    typeof label === "string" && label.trim().length > 0 ? label.trim() : "Streaming code block";
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
    if (!shouldStream) {
      setVisible(code);
      return;
    }

    let pointer = 0;
    setVisible("");
    const ownerWindow = rootRef.current?.ownerDocument.defaultView ?? window;

    const id = ownerWindow.setInterval(() => {
      pointer += 1;
      setVisible(code.slice(0, pointer));
      if (pointer >= code.length) {
        ownerWindow.clearInterval(id);
      }
    }, Math.max(1, safeSpeed));

    return () => {
      ownerWindow.clearInterval(id);
    };
  }, [code, safeSpeed, shouldStream]);

  return (
    <div
      ref={rootRef}
      role="region"
      aria-label={resolvedAriaLabel}
      aria-labelledby={resolvedAriaLabelledBy}
      aria-live={live}
      aria-busy={visible.length < code.length}
      style={{
        border: "1px solid var(--aurora-border-default)",
        borderRadius: "var(--aurora-radius-md)",
        overflow: "hidden",
        ...style
      }}
      {...props}
    >
      <header
        style={{
          height: 34,
          borderBottom: "1px solid var(--aurora-border-default)",
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          color: "var(--aurora-text-secondary)",
          fontSize: "var(--aurora-font-size-xs)"
        }}
      >
        {language}
      </header>
      <pre
        style={{
          margin: 0,
          padding: 12,
          background: "var(--aurora-surface-default)",
          color: "var(--aurora-text-primary)",
          fontFamily: "var(--aurora-font-family-mono)",
          whiteSpace: "pre-wrap"
        }}
      >
        <code>{visible}</code>
      </pre>
    </div>
  );
}
