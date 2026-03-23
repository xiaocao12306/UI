import * as React from "react";

export type EmptyTone = "default" | "info" | "warning" | "danger";

export type EmptyProps = Omit<React.ComponentPropsWithoutRef<"div">, "title"> & {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  tone?: EmptyTone;
  align?: "center" | "left";
  titleAs?: "h2" | "h3" | "h4" | "strong";
  ariaLabel?: string;
  ariaLabelledBy?: string;
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

function resolveEmptyTone(value: unknown, fallback: EmptyTone) {
  if (typeof value === "string") {
    const normalizedValue = value.trim().toLowerCase();
    if (
      normalizedValue === "default" ||
      normalizedValue === "info" ||
      normalizedValue === "warning" ||
      normalizedValue === "danger"
    ) {
      return normalizedValue;
    }
  }

  return fallback;
}

export function Empty({
  title,
  description,
  action,
  icon,
  tone = "default",
  align = "center",
  titleAs = "strong",
  ariaLabel,
  ariaLabelledBy,
  role,
  style,
  ...props
}: EmptyProps) {
  const titleId = React.useId();
  const descriptionId = React.useId();
  const resolvedTone = resolveEmptyTone(tone, "default");
  const TitleElement = titleAs;
  const isCenter = align === "center";
  const warnedMissingAriaLabelRef = React.useRef(false);
  const hasDescriptionContent = hasRenderableEmptyNode(description);
  const hasActionContent = hasRenderableEmptyNode(action);
  const hasIconContent = hasRenderableEmptyNode(icon);
  const resolvedAriaLabelledBy =
    typeof ariaLabelledBy === "string" && ariaLabelledBy.trim().length > 0
      ? ariaLabelledBy.trim()
      : undefined;
  const explicitAriaLabel =
    resolvedAriaLabelledBy === undefined && typeof ariaLabel === "string" && ariaLabel.trim().length > 0
      ? ariaLabel.trim()
      : undefined;
  const hasReadableTitleText = getReadableEmptyTextNode(title).length > 0;
  const hasExplicitName = explicitAriaLabel !== undefined || resolvedAriaLabelledBy !== undefined;
  const resolvedAriaLabel = resolvedAriaLabelledBy
    ? undefined
    : explicitAriaLabel ?? (hasReadableTitleText ? undefined : "Empty state");

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    if (hasReadableTitleText || hasExplicitName) {
      warnedMissingAriaLabelRef.current = false;
      return;
    }

    if (warnedMissingAriaLabelRef.current) {
      return;
    }
    warnedMissingAriaLabelRef.current = true;

    console.warn("[Empty] Non-text title should provide ariaLabel or ariaLabelledBy.");
  }, [hasExplicitName, hasReadableTitleText]);

  return (
    <div
      role={role ?? "status"}
      aria-live="polite"
      aria-label={resolvedAriaLabel}
      aria-labelledby={resolvedAriaLabelledBy ?? (resolvedAriaLabel ? undefined : titleId)}
      aria-describedby={hasDescriptionContent ? descriptionId : undefined}
      style={{
        border: "1px dashed var(--aurora-border-default)",
        borderRadius: "var(--aurora-radius-lg)",
        padding: 24,
        display: "grid",
        justifyItems: isCenter ? "center" : "start",
        gap: 10,
        textAlign: isCenter ? "center" : "left",
        ...toneStyleMap[resolvedTone],
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

function getReadableEmptyTextNode(node: React.ReactNode): string {
  if (typeof node === "string") {
    return normalizeReadableEmptyText(node);
  }

  if (typeof node === "number") {
    return normalizeReadableEmptyText(String(node));
  }

  if (Array.isArray(node)) {
    return normalizeReadableEmptyText(
      node
        .map((item) => getReadableEmptyTextNode(item))
        .filter((item) => item.length > 0)
        .join(" ")
    );
  }

  if (!React.isValidElement(node)) {
    return "";
  }

  const elementProps = node.props as {
    children?: React.ReactNode;
    "aria-hidden"?: boolean | "true" | "false";
    "aria-label"?: string;
  };
  if (elementProps["aria-hidden"] === true || elementProps["aria-hidden"] === "true") {
    return "";
  }

  if (typeof elementProps["aria-label"] === "string" && elementProps["aria-label"].trim().length > 0) {
    return normalizeReadableEmptyText(elementProps["aria-label"]);
  }

  return getReadableEmptyTextNode(elementProps.children);
}

function normalizeReadableEmptyText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}
