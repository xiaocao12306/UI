import * as React from "react";
import { getFocusableElements } from "./focusable";

export type FocusScopeProps = {
  children: React.ReactNode;
  trapped?: boolean;
  loop?: boolean;
  autoFocus?: boolean;
  restoreFocus?: boolean;
};

export function FocusScope({
  children,
  trapped = true,
  loop = true,
  autoFocus = true,
  restoreFocus = true
}: FocusScopeProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    previouslyFocusedRef.current = document.activeElement as HTMLElement;

    if (autoFocus) {
      const focusableElements = getFocusableElements(container);
      const preferredAutoFocusElement = container.querySelector<HTMLElement>("[data-autofocus]");
      const nextFocusTarget =
        preferredAutoFocusElement && focusableElements.includes(preferredAutoFocusElement)
          ? preferredAutoFocusElement
          : focusableElements[0];
      (nextFocusTarget ?? container).focus();
    }

    return () => {
      if (restoreFocus) {
        previouslyFocusedRef.current?.focus?.();
      }
    };
  }, [autoFocus, restoreFocus]);

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!trapped || event.key !== "Tab") {
        return;
      }

      const container = containerRef.current;
      if (!container) {
        return;
      }

      const focusables = getFocusableElements(container);
      if (focusables.length === 0) {
        event.preventDefault();
        return;
      }

      const currentIndex = focusables.indexOf(document.activeElement as HTMLElement);
      const isBackward = event.shiftKey;

      if (!loop && ((isBackward && currentIndex <= 0) || (!isBackward && currentIndex === focusables.length - 1))) {
        return;
      }

      if (isBackward && currentIndex <= 0) {
        event.preventDefault();
        focusables[focusables.length - 1]?.focus();
      } else if (!isBackward && currentIndex === focusables.length - 1) {
        event.preventDefault();
        focusables[0]?.focus();
      }
    },
    [loop, trapped]
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div ref={containerRef} onKeyDown={onKeyDown} tabIndex={-1} role="group">
      {children}
    </div>
  );
}
