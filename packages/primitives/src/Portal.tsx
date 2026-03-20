import * as React from "react";
import { createPortal } from "react-dom";

export type PortalProps = {
  children: React.ReactNode;
  container?: Element | DocumentFragment | null;
};

export function Portal({ children, container }: PortalProps) {
  const anchorRef = React.useRef<HTMLSpanElement>(null);
  const [target, setTarget] = React.useState<Element | DocumentFragment | null>(container ?? null);

  React.useLayoutEffect(() => {
    if (container) {
      setTarget(container);
      return;
    }

    const ownerDocument = anchorRef.current?.ownerDocument;
    setTarget(ownerDocument?.body ?? null);
  }, [container]);

  if (!target) {
    return <span ref={anchorRef} aria-hidden="true" style={{ display: "none" }} />;
  }

  return (
    <>
      <span ref={anchorRef} aria-hidden="true" style={{ display: "none" }} />
      {createPortal(children, target)}
    </>
  );
}
