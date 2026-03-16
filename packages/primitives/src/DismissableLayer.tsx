import * as React from "react";

export type DismissableLayerProps = React.ComponentPropsWithoutRef<"div"> & {
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onDismiss?: () => void;
};

export function DismissableLayer({
  children,
  onEscapeKeyDown,
  onPointerDownOutside,
  onDismiss,
  ...props
}: DismissableLayerProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented) {
        onDismiss?.();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const element = ref.current;
      if (!element) {
        return;
      }

      const target = event.target as Node | null;
      if (target && element.contains(target)) {
        return;
      }

      onPointerDownOutside?.(event);
      if (!event.defaultPrevented) {
        onDismiss?.();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [onDismiss, onEscapeKeyDown, onPointerDownOutside]);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
}
