import * as React from "react";

export type StreamingCodeBlockProps = React.ComponentPropsWithoutRef<"div"> & {
  code: string;
  language?: string;
  speed?: number;
  label?: string;
  live?: "polite" | "assertive" | "off";
};

export function StreamingCodeBlock({
  code,
  language = "txt",
  speed = 8,
  label = "Streaming code block",
  live = "off",
  style,
  ...props
}: StreamingCodeBlockProps) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState("");
  const resolvedLabel =
    typeof label === "string" && label.trim().length > 0 ? label.trim() : "Streaming code block";

  React.useEffect(() => {
    if (speed <= 0 || code.length === 0) {
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
    }, speed);

    return () => {
      ownerWindow.clearInterval(id);
    };
  }, [code, speed]);

  return (
    <div
      ref={rootRef}
      role="region"
      aria-label={resolvedLabel}
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
