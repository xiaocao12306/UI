import * as React from "react";

export type StreamingTextProps = {
  text: string;
  speed?: number;
};

export function StreamingText({ text, speed = 16 }: StreamingTextProps) {
  const [visibleText, setVisibleText] = React.useState("");

  React.useEffect(() => {
    let pointer = 0;
    setVisibleText("");

    const id = window.setInterval(() => {
      pointer += 1;
      setVisibleText(text.slice(0, pointer));
      if (pointer >= text.length) {
        window.clearInterval(id);
      }
    }, speed);

    return () => {
      window.clearInterval(id);
    };
  }, [text, speed]);

  return (
    <span>
      {visibleText}
      <span style={{ color: "var(--aurora-streaming-cursor)", marginLeft: 2 }}>|</span>
    </span>
  );
}
