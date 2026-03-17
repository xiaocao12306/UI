import * as React from "react";

export type LoadingDotsProps = {
  label?: string;
};

export function LoadingDots({ label = "Loading" }: LoadingDotsProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 280);

    return () => {
      window.clearInterval(id);
    };
  }, []);

  return (
    <span aria-label={label} style={{ color: "var(--aurora-text-secondary)", fontFamily: "var(--aurora-font-family-mono)" }}>
      {".".repeat(index + 1)}
      {"\u00a0".repeat(2 - index)}
    </span>
  );
}
