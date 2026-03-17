import * as React from "react";

export type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactElement;
};

export function Tooltip({ content, children }: TooltipProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <span
      style={{ position: "relative", display: "inline-flex" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open ? (
        <span
          role="tooltip"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: "var(--aurora-color-slate-900)",
            color: "white",
            padding: "6px 8px",
            borderRadius: 6,
            fontSize: 12,
            whiteSpace: "nowrap",
            zIndex: 1200
          }}
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}
