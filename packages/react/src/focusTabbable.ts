const tabbableSelector =
  'a[href], button, input:not([type="hidden"]), select, textarea, [tabindex]';

export function focusAdjacentTabbable(
  ownerDocument: Document,
  currentElement: HTMLElement,
  direction: 1 | -1,
  excludedContainer: HTMLElement | null = null
) {
  const tabbableElements = Array.from(
    ownerDocument.querySelectorAll<HTMLElement>(tabbableSelector)
  ).filter((element) => {
    if (element === currentElement) {
      return true;
    }

    if (excludedContainer && excludedContainer.contains(element)) {
      return false;
    }

    if (element.hasAttribute("disabled")) {
      return false;
    }

    return isElementTabbable(element);
  });

  if (tabbableElements.length === 0) {
    return false;
  }

  const fallbackActiveElement =
    ownerDocument.activeElement instanceof HTMLElement ? ownerDocument.activeElement : null;
  const currentIndex = tabbableElements.indexOf(currentElement);
  const activeIndex = fallbackActiveElement ? tabbableElements.indexOf(fallbackActiveElement) : -1;
  const startIndex = currentIndex >= 0 ? currentIndex : activeIndex;
  let nextIndex = startIndex + direction;

  while (nextIndex >= 0 && nextIndex < tabbableElements.length) {
    const candidate = tabbableElements[nextIndex];
    if (candidate && candidate !== currentElement && isElementTabbable(candidate)) {
      candidate.focus();
      if (ownerDocument.activeElement === candidate) {
        return true;
      }
    }
    nextIndex += direction;
  }

  return false;
}

export function isElementTabbable(element: HTMLElement) {
  if (element.tabIndex < 0) {
    return false;
  }

  if ("disabled" in element && (element as HTMLButtonElement | HTMLInputElement).disabled) {
    return false;
  }

  if (element.hidden || element.getAttribute("aria-hidden") === "true") {
    return false;
  }

  if (element.closest("[inert]")) {
    return false;
  }

  const ownerWindow =
    element.ownerDocument.defaultView ?? (typeof window !== "undefined" ? window : null);
  if (ownerWindow) {
    const computedStyle = ownerWindow.getComputedStyle(element);
    if (computedStyle.display === "none" || computedStyle.visibility === "hidden") {
      return false;
    }
  }

  return true;
}

export function getTabbableElements(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>(tabbableSelector)).filter((element) =>
    isElementTabbable(element)
  );
}
