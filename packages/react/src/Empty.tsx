import * as React from "react";

export type EmptyTone = "default" | "info" | "warning" | "danger";

export type EmptyProps = React.ComponentPropsWithoutRef<"div"> & {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  tone?: EmptyTone;
  align?: "center" | "left";
  titleAs?: "h2" | "h3" | "h4" | "strong";
};

const toneStyleMap: Record<EmptyTone, React.CSSProperties> = {
  default: {},
  info: {
    borderColor: "color-mix(in srgb, var(--aurora-accent-default) 42%, var(--aurora-border-default))",
    background: "color-mix(in srgb, var(--aurora-accent-default) 6%, var(--aurora-surface-default))"
  },
  warning: {
    borderColor: "color-mix(in srgb, var(--aurora-color-amber-500) 42%, var(--aurora-border-default))",
    background: "color-mix(in srgb, var(--aurora-color-amber-500) 8%, var(--aurora-surface-default))"
  },
  danger: {
    borderColor: "color-mix(in srgb, var(--aurora-color-red-500) 42%, var(--aurora-border-default))",
    background: "color-mix(in srgb, var(--aurora-color-red-500) 8%, var(--aurora-surface-default))"
  }
};

export function Empty({
  title,
  description,
  action,
  icon,
  tone = "default",
  align = "center",
  titleAs = "strong",
  role,
  style,
  ...props
}: EmptyProps) {
  const titleId = React.useId();
  const descriptionId = React.useId();
  const TitleElement = titleAs;
  const isCenter = align === "center";
  const hasDescriptionContent = hasRenderableEmptyNode(description);
  const hasActionContent = hasRenderableEmptyNode(action);
  const hasIconContent = hasRenderableEmptyNode(icon);

  return (
    <div
      role={role ?? "status"}
      aria-live="polite"
      aria-labelledby={titleId}
      aria-describedby={hasDescriptionContent ? descriptionId : undefined}
      style={{
        border: "1px dashed var(--aurora-border-default)",
        borderRadius: "var(--aurora-radius-lg)",
        padding: 24,
        display: "grid",
        justifyItems: isCenter ? "center" : "start",
        gap: 10,
        textAlign: isCenter ? "center" : "left",
        ...toneStyleMap[tone],
        ...style
      }}
      {...props}
    >
      {hasIconContent ? <div aria-hidden>{icon}</div> : null}
      <TitleElement id={titleId} style={{ color: "var(--aurora-text-primary)", margin: 0, fontSize: "var(--aurora-font-size-md)" }}>
        {title}
      </TitleElement>
      {hasDescriptionContent ? (
        <p id={descriptionId} style={{ color: "var(--aurora-text-secondary)", margin: 0 }}>
          {description}
        </p>
      ) : null}
      {hasActionContent ? <div>{action}</div> : null}
    </div>
  );
}

function hasRenderableEmptyNode(node: React.ReactNode): boolean {
  if (node === null || node === undefined || typeof node === "boolean") {
    return false;
  }

  if (typeof node === "string") {
    return node.trim().length > 0;
  }

  if (typeof node === "number") {
    return true;
  }

  if (Array.isArray(node)) {
    return node.some((item) => hasRenderableEmptyNode(item));
  }

  return React.isValidElement(node);
}
