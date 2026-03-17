import * as React from "react";

export type DismissableLayerProps = React.ComponentPropsWithoutRef<"div"> & {
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onDismiss?: () => void;
};

export const DismissableLayer = React.forwardRef<HTMLDivElement, DismissableLayerProps>(function DismissableLayer(
  { children, onEscapeKeyDown, onPointerDownOutside, onDismiss, ...props },
  forwardedRef
) {
  const localRef = React.useRef<HTMLDivElement>(null);

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
      const element = localRef.current;
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
    <div
      ref={(node) => {
        localRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
});
