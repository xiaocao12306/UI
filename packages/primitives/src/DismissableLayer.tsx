import * as React from "react";

export type DismissableLayerProps = React.ComponentPropsWithoutRef<"div"> & {
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onDismiss?: () => void;
};

type DismissableLayerDocumentState = {
  stack: HTMLElement[];
};

const dismissableLayerStateByDocument = new WeakMap<Document, DismissableLayerDocumentState>();

function getDismissableLayerDocumentState(ownerDocument: Document): DismissableLayerDocumentState {
  const existingState = dismissableLayerStateByDocument.get(ownerDocument);
  if (existingState) {
    return existingState;
  }

  const nextState: DismissableLayerDocumentState = { stack: [] };
  dismissableLayerStateByDocument.set(ownerDocument, nextState);
  return nextState;
}

function pushLayer(element: HTMLElement) {
  const stack = getDismissableLayerDocumentState(element.ownerDocument).stack;
  const existingIndex = stack.lastIndexOf(element);
  if (existingIndex >= 0) {
    stack.splice(existingIndex, 1);
  }
  stack.push(element);
}

function removeLayer(element: HTMLElement) {
  const stack = getDismissableLayerDocumentState(element.ownerDocument).stack;
  const existingIndex = stack.lastIndexOf(element);
  if (existingIndex >= 0) {
    stack.splice(existingIndex, 1);
  }
}

function isTopLayer(element: HTMLElement) {
  const stack = getDismissableLayerDocumentState(element.ownerDocument).stack;
  return stack[stack.length - 1] === element;
}

export function hasActiveDismissableLayer(ownerDocument: Document) {
  return getDismissableLayerDocumentState(ownerDocument).stack.length > 0;
}

function isComposingKeyEvent(event: KeyboardEvent) {
  return event.isComposing || event.keyCode === 229;
}

function isRepeatedKeyEvent(event: KeyboardEvent) {
  return event.repeat;
}

function isModifiedEscapeEvent(event: KeyboardEvent) {
  return event.altKey || event.ctrlKey || event.metaKey;
}

function isPrimaryPointerDownEvent(event: PointerEvent) {
  const button = typeof event.button === "number" ? event.button : 0;
  if (button > 0) {
    return false;
  }

  if (event.ctrlKey && button === 0) {
    return false;
  }

  if (event.pointerType === "mouse" || event.pointerType === "") {
    if (typeof event.buttons === "number" && event.buttons !== 0 && (event.buttons & 1) === 0) {
      return false;
    }
  }

  return true;
}

export const DismissableLayer = React.forwardRef<HTMLDivElement, DismissableLayerProps>(function DismissableLayer(
  { children, onEscapeKeyDown, onPointerDownOutside, onDismiss, ...props },
  forwardedRef
) {
  const localRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = localRef.current;
    if (!element) {
      return;
    }

    pushLayer(element);
    return () => {
      removeLayer(element);
    };
  }, []);

  React.useEffect(() => {
    const ownerDocument = localRef.current?.ownerDocument;
    if (!ownerDocument) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }
      if (isRepeatedKeyEvent(event)) {
        return;
      }
      if (isComposingKeyEvent(event)) {
        return;
      }
      if (isModifiedEscapeEvent(event)) {
        return;
      }

      const element = localRef.current;
      if (!element || !isTopLayer(element)) {
        return;
      }
      if (event.defaultPrevented) {
        return;
      }

      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented) {
        onDismiss?.();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const element = localRef.current;
      if (!element || !isTopLayer(element)) {
        return;
      }
      if (!isPrimaryPointerDownEvent(event)) {
        return;
      }
      if (event.defaultPrevented) {
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

    ownerDocument.addEventListener("keydown", onKeyDown);
    ownerDocument.addEventListener("pointerdown", onPointerDown);

    return () => {
      ownerDocument.removeEventListener("keydown", onKeyDown);
      ownerDocument.removeEventListener("pointerdown", onPointerDown);
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
