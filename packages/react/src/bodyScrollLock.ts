type BodyScrollLockState = {
  lockCount: number;
  previousOverflow: string | null;
};

const lockStateByDocument = new Map<Document, BodyScrollLockState>();

function getLockState(ownerDocument: Document) {
  const existingState = lockStateByDocument.get(ownerDocument);
  if (existingState) {
    return existingState;
  }

  const nextState: BodyScrollLockState = {
    lockCount: 0,
    previousOverflow: null
  };
  lockStateByDocument.set(ownerDocument, nextState);
  return nextState;
}

export function lockBodyScroll(ownerDocument?: Document) {
  if (typeof document === "undefined" && !ownerDocument) {
    return () => {};
  }
  const targetDocument = ownerDocument ?? document;
  const state = getLockState(targetDocument);

  if (state.lockCount === 0) {
    state.previousOverflow = targetDocument.body.style.overflow;
    targetDocument.body.style.overflow = "hidden";
  }

  state.lockCount += 1;
  let released = false;

  return () => {
    if (released) {
      return;
    }

    released = true;
    const currentState = lockStateByDocument.get(targetDocument);
    if (!currentState) {
      return;
    }

    currentState.lockCount = Math.max(0, currentState.lockCount - 1);
    if (currentState.lockCount > 0) {
      return;
    }

    targetDocument.body.style.overflow = currentState.previousOverflow ?? "";
    lockStateByDocument.delete(targetDocument);
  };
}

export function resetBodyScrollLockForTests() {
  lockStateByDocument.forEach((state, ownerDocument) => {
    ownerDocument.body.style.overflow = state.previousOverflow ?? "";
  });
  lockStateByDocument.clear();
}
