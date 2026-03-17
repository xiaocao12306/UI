import * as React from "react";

export type StreamingCodeBlockProps = {
  code: string;
  language?: string;
  speed?: number;
};

export function StreamingCodeBlock({ code, language = "txt", speed = 8 }: StreamingCodeBlockProps) {
  const [visible, setVisible] = React.useState("");

  React.useEffect(() => {
    let pointer = 0;
    setVisible("");

    const id = window.setInterval(() => {
      pointer += 1;
      setVisible(code.slice(0, pointer));
      if (pointer >= code.length) {
        window.clearInterval(id);
      }
    }, speed);

    return () => {
      window.clearInterval(id);
    };
  }, [code, speed]);

  return (
    <div
      style={{
        border: "1px solid var(--aurora-border-default)",
        borderRadius: "var(--aurora-radius-md)",
        overflow: "hidden"
      }}
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
