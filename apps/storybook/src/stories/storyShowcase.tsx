import * as React from "react";

const baseSurfaceStyle: React.CSSProperties = {
  borderRadius: 16,
  border: "1px solid color-mix(in srgb, var(--aurora-border-default) 78%, transparent)",
  background:
    "radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--aurora-accent-default) 10%, transparent), transparent 42%), linear-gradient(180deg, color-mix(in srgb, var(--aurora-surface-elevated) 94%, var(--aurora-surface-default)), color-mix(in srgb, var(--aurora-surface-elevated) 84%, var(--aurora-surface-default)))",
  boxShadow: "var(--aurora-shadow-sm)"
};

export const storyMutedTextStyle: React.CSSProperties = {
  margin: 0,
  color: "var(--aurora-text-secondary)",
  fontSize: 13,
  lineHeight: 1.6
};

export const storyEmphasisTextStyle: React.CSSProperties = {
  color: "var(--aurora-text-primary)"
};

export function StoryShowcaseFrame({
  children,
  maxWidth = "min(100%, 860px)",
  gap = 10
}: {
  children: React.ReactNode;
  maxWidth?: string;
  gap?: number;
}) {
  return (
    <div
      style={{
        width: maxWidth,
        display: "grid",
        gap,
        padding: "clamp(12px, 2vw, 18px)",
        ...baseSurfaceStyle
      }}
    >
      {children}
    </div>
  );
}

export function StoryFullscreenFrame({
  children,
  minHeight = 420,
  align = "stretch"
}: {
  children: React.ReactNode;
  minHeight?: number;
  align?: "stretch" | "start";
}) {
  return (
    <div
      style={{
        minHeight,
        padding: "clamp(14px, 2.4vw, 24px)",
        display: "grid",
        gap: 10,
        justifyItems: align,
        ...baseSurfaceStyle
      }}
    >
      {children}
    </div>
  );
}
