import * as React from "react";

type HTMLElementRef = React.RefObject<HTMLElement | null>;

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

export function usePrefersReducedMotion(rootRef?: HTMLElementRef) {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const ownerWindow = rootRef?.current?.ownerDocument.defaultView ?? window;
    if (typeof ownerWindow.matchMedia !== "function") {
      return;
    }

    const mediaQueryList = ownerWindow.matchMedia(reducedMotionQuery);
    const apply = () => {
      setPrefersReducedMotion(mediaQueryList.matches);
    };

    apply();

    if (typeof mediaQueryList.addEventListener === "function") {
      mediaQueryList.addEventListener("change", apply);
      return () => {
        mediaQueryList.removeEventListener("change", apply);
      };
    }

    mediaQueryList.addListener(apply);
    return () => {
      mediaQueryList.removeListener(apply);
    };
  }, [rootRef]);

  return prefersReducedMotion;
}
