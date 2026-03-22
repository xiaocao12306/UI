import * as React from "react";
import { DismissableLayer } from "@aurora-ui/primitives";
import { Button } from "./Button";

export type DropdownItem = {
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  disabled?: boolean;
  onSelect?: () => void;
};

export type DropdownCloseReason = "trigger-click" | "item-select" | "escape-key" | "outside-pointer" | "tab-key";

export type DropdownProps = {
  label: React.ReactNode;
  triggerAriaLabel?: string;
  triggerAriaLabelledBy?: string;
  items: DropdownItem[];
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  closeOnEscape?: boolean;
  closeOnOutsidePointer?: boolean;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onCloseReason?: (reason: DropdownCloseReason) => void;
};

const dropdownTriggerKeyboardShortcuts = "ArrowDown ArrowUp";
const dropdownMenuDismissShortcut = "Tab";
const dropdownMenuNavigationShortcuts = "ArrowDown ArrowUp Home End PageDown PageUp";
const dropdownItemKeyboardClickDedupeWindowMs = 400;

function getNextEnabledIndex(items: DropdownItem[], currentIndex: number, direction: 1 | -1) {
  if (items.length === 0) {
    return -1;
  }

  let index = currentIndex;
  for (let i = 0; i < items.length; i += 1) {
    index = (index + direction + items.length) % items.length;
    if (!items[index]?.disabled) {
      return index;
    }
  }

  return -1;
}

function getDropdownItemText(item: DropdownItem) {
  if (typeof item.textValue === "string") {
    const textValue = normalizeReadableDropdownText(item.textValue);
    if (textValue.length > 0) {
      return textValue;
    }
  }

  return normalizeReadableDropdownText(getReadableTextNode(item.label));
}

function normalizeTypeaheadText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getNextTypeaheadQuery(previousQuery: string, nextChar: string, elapsedMs: number, timeoutMs = 500) {
  if (elapsedMs > timeoutMs || previousQuery.length === 0) {
    return nextChar;
  }

  if (previousQuery.length === 1 && previousQuery === nextChar) {
    return nextChar;
  }

  return `${previousQuery}${nextChar}`;
}

function getTypeaheadIndex(items: DropdownItem[], currentIndex: number, query: string) {
  if (items.length === 0 || query.length === 0) {
    return -1;
  }

  const normalized = normalizeTypeaheadText(query);
  for (let offset = 1; offset <= items.length; offset += 1) {
    const index = (currentIndex + offset + items.length) % items.length;
    const item = items[index];
    if (!item || item.disabled) {
      continue;
    }

    if (normalizeTypeaheadText(getDropdownItemText(item)).startsWith(normalized)) {
      return index;
    }
  }

  return -1;
}

function getPagedEnabledIndex(
  items: DropdownItem[],
  currentIndex: number,
  direction: 1 | -1,
  pageSize = 5
) {
  const enabledIndices = items.reduce<number[]>((indices, item, index) => {
    if (!item.disabled) {
      indices.push(index);
    }
    return indices;
  }, []);

  if (enabledIndices.length === 0) {
    return -1;
  }

  const currentEnabledPosition = enabledIndices.indexOf(currentIndex);
  if (currentEnabledPosition < 0) {
    return direction === 1 ? enabledIndices[0] : enabledIndices[enabledIndices.length - 1];
  }

  const nextEnabledPosition = Math.min(
    enabledIndices.length - 1,
    Math.max(0, currentEnabledPosition + direction * pageSize)
  );
  return enabledIndices[nextEnabledPosition] ?? -1;
}

function isDropdownItemActivationKey(key: string) {
  return key === "Enter" || key === " " || key === "Space" || key === "Spacebar";
}

function isDropdownNavigationKey(key: string) {
  return (
    key === "ArrowDown" ||
    key === "ArrowUp" ||
    key === "Home" ||
    key === "End" ||
    key === "PageDown" ||
    key === "PageUp"
  );
}

export function Dropdown({
  label,
  triggerAriaLabel,
  triggerAriaLabelledBy,
  items,
  open,
  defaultOpen,
  onOpenChange,
  closeOnEscape = true,
  closeOnOutsidePointer = true,
  onEscapeKeyDown,
  onPointerDownOutside,
  onCloseReason
}: DropdownProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen ?? false);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const typeaheadStateRef = React.useRef<{ query: string; timestamp: number }>({ query: "", timestamp: 0 });
  const pendingOpenActiveIndexRef = React.useRef<number | null>(null);
  const keyboardActivationItemIndexRef = React.useRef<number | null>(null);
  const keyboardActivationTimestampRef = React.useRef(0);
  const keyboardActivationResetTimerRef = React.useRef<number | null>(null);
  const keyboardActivationTimerWindowRef = React.useRef<Window | null>(null);
  const warnedDuplicateKeysSignatureRef = React.useRef<string | null>(null);
  const warnedMissingTriggerNameRef = React.useRef(false);
  const warnedMissingAriaLabelSignatureRef = React.useRef<string | null>(null);
  const warnedMissingTextValueSignatureRef = React.useRef<string | null>(null);
  const triggerId = React.useId();
  const menuId = React.useId();

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const resolvedTriggerAriaLabelledBy = resolveNonEmptyLabel(triggerAriaLabelledBy);
  const explicitTriggerAriaLabel =
    resolvedTriggerAriaLabelledBy === undefined
      ? resolveNonEmptyLabel(triggerAriaLabel)
      : undefined;
  const hasReadableTriggerLabelText = getReadableTextNode(label).trim().length > 0;
  const resolvedTriggerAriaLabel = resolvedTriggerAriaLabelledBy
    ? undefined
    : explicitTriggerAriaLabel ?? (hasReadableTriggerLabelText ? undefined : "Open menu");
  const itemRenderKeys = React.useMemo(() => {
    const seenCounts = new Map<string, number>();
    return items.map((item, index) => {
      const seenCount = seenCounts.get(item.key) ?? 0;
      seenCounts.set(item.key, seenCount + 1);
      if (seenCount === 0) {
        return item.key;
      }

      return `${item.key}__dup-${index}`;
    });
  }, [items]);
  const enabledItemCount = items.reduce((count, item) => count + (item.disabled ? 0 : 1), 0);
  const menuKeyboardShortcuts = React.useMemo(() => {
    const shortcuts = [dropdownMenuDismissShortcut];
    if (enabledItemCount > 1) {
      shortcuts.unshift(dropdownMenuNavigationShortcuts);
    }
    if (closeOnEscape) {
      shortcuts.push("Escape");
    }
    return shortcuts.join(" ");
  }, [closeOnEscape, enabledItemCount]);

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange]
  );

  const closeWithReason = React.useCallback(
    (reason: DropdownCloseReason) => {
      onCloseReason?.(reason);
      setOpen(false);
    },
    [onCloseReason, setOpen]
  );

  const clearKeyboardActivationLatch = React.useCallback(() => {
    keyboardActivationItemIndexRef.current = null;
    keyboardActivationTimestampRef.current = 0;
    if (keyboardActivationResetTimerRef.current !== null) {
      const timerWindow = keyboardActivationTimerWindowRef.current ?? window;
      timerWindow.clearTimeout(keyboardActivationResetTimerRef.current);
      keyboardActivationResetTimerRef.current = null;
    }
    keyboardActivationTimerWindowRef.current = null;
  }, []);

  const dismissWithTabNavigation = React.useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      event.preventDefault();
      const ownerDocument = event.currentTarget.ownerDocument;
      const fallbackAnchor = event.target instanceof HTMLElement ? event.target : event.currentTarget;
      const focusAnchor = triggerRef.current ?? fallbackAnchor;
      focusAdjacentTabbable(ownerDocument, focusAnchor, event.shiftKey ? -1 : 1, menuRef.current);
      closeWithReason("tab-key");
    },
    [closeWithReason]
  );

  React.useEffect(
    () => () => {
      clearKeyboardActivationLatch();
    },
    [clearKeyboardActivationLatch]
  );

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const duplicateKeys = new Set<string>();
    const seenKeys = new Set<string>();
    items.forEach((item) => {
      if (seenKeys.has(item.key)) {
        duplicateKeys.add(item.key);
      }
      seenKeys.add(item.key);
    });

    if (duplicateKeys.size === 0) {
      warnedDuplicateKeysSignatureRef.current = null;
      return;
    }

    const signature = Array.from(duplicateKeys).sort().join("|");
    if (warnedDuplicateKeysSignatureRef.current === signature) {
      return;
    }
    warnedDuplicateKeysSignatureRef.current = signature;

    console.warn(
      `[Dropdown] Duplicate item keys detected: ${Array.from(duplicateKeys)
        .map((key) => `"${key}"`)
        .join(
          ", "
        )}. Keys should be unique to keep focus and close telemetry deterministic. Duplicate render keys are auto-suffixed by item index for stability.`
    );
  }, [items]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }
    if (warnedMissingTriggerNameRef.current) {
      return;
    }
    if (
      hasReadableTriggerLabelText ||
      explicitTriggerAriaLabel !== undefined ||
      resolvedTriggerAriaLabelledBy !== undefined
    ) {
      return;
    }

    warnedMissingTriggerNameRef.current = true;
    console.warn("[Dropdown] Non-text trigger labels should provide triggerAriaLabel or triggerAriaLabelledBy.");
  }, [explicitTriggerAriaLabel, hasReadableTriggerLabelText, resolvedTriggerAriaLabelledBy]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const missingAriaLabelKeys = items.reduce<string[]>((keys, item) => {
      const hasReadableLabelText = getReadableTextNode(item.label).trim().length > 0;
      const hasExplicitAriaLabel =
        typeof item.ariaLabel === "string" && item.ariaLabel.trim().length > 0;
      const hasExplicitAriaLabelledBy =
        typeof item.ariaLabelledBy === "string" && item.ariaLabelledBy.trim().length > 0;
      if (hasReadableLabelText || hasExplicitAriaLabel || hasExplicitAriaLabelledBy) {
        return keys;
      }

      keys.push(item.key);
      return keys;
    }, []);

    if (missingAriaLabelKeys.length === 0) {
      warnedMissingAriaLabelSignatureRef.current = null;
      return;
    }

    const signature = missingAriaLabelKeys.sort().join("|");
    if (warnedMissingAriaLabelSignatureRef.current === signature) {
      return;
    }
    warnedMissingAriaLabelSignatureRef.current = signature;

    console.warn(
      `[Dropdown] Non-text item labels should provide ariaLabel or ariaLabelledBy: ${missingAriaLabelKeys
        .map((key) => `"${key}"`)
        .join(", ")}.`
    );
  }, [items]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const missingTextValueKeys = items.reduce<string[]>((keys, item) => {
      const hasTextValue = typeof item.textValue === "string" && item.textValue.trim().length > 0;
      const hasReadableLabelText = getReadableTextNode(item.label).trim().length > 0;
      if (hasTextValue || hasReadableLabelText) {
        return keys;
      }

      keys.push(item.key);
      return keys;
    }, []);

    if (missingTextValueKeys.length === 0) {
      warnedMissingTextValueSignatureRef.current = null;
      return;
    }

    const signature = missingTextValueKeys.sort().join("|");
    if (warnedMissingTextValueSignatureRef.current === signature) {
      return;
    }
    warnedMissingTextValueSignatureRef.current = signature;

    console.warn(
      `[Dropdown] Non-text item labels should provide textValue for typeahead matching: ${missingTextValueKeys
        .map((key) => `"${key}"`)
        .join(", ")}.`
    );
  }, [items]);

  React.useEffect(() => {
    if (!isOpen) {
      setActiveIndex(-1);
      typeaheadStateRef.current = { query: "", timestamp: 0 };
      pendingOpenActiveIndexRef.current = null;
      clearKeyboardActivationLatch();
      return;
    }

    const pendingIndex = pendingOpenActiveIndexRef.current;
    pendingOpenActiveIndexRef.current = null;
    if (
      typeof pendingIndex === "number" &&
      pendingIndex >= 0 &&
      pendingIndex < items.length &&
      !items[pendingIndex]?.disabled
    ) {
      setActiveIndex(pendingIndex);
      return;
    }

    const firstEnabledIndex = items.findIndex((item) => !item.disabled);
    setActiveIndex(firstEnabledIndex);
  }, [clearKeyboardActivationLatch, isOpen, items]);

  React.useEffect(() => {
    if (!isOpen || activeIndex < 0) {
      return;
    }

    itemRefs.current[activeIndex]?.focus();
  }, [activeIndex, isOpen]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Button
        id={triggerId}
        ref={triggerRef}
        variant="outline"
        aria-label={resolvedTriggerAriaLabel}
        aria-labelledby={resolvedTriggerAriaLabelledBy}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        aria-keyshortcuts={isOpen ? undefined : dropdownTriggerKeyboardShortcuts}
        onClick={() => {
          if (isOpen) {
            closeWithReason("trigger-click");
            return;
          }
          setOpen(true);
        }}
        onKeyDown={(event) => {
          if (event.key === "Tab" && isOpen) {
            dismissWithTabNavigation(event);
            return;
          }

          if (
            (event.key !== "ArrowDown" && event.key !== "ArrowUp") ||
            event.altKey ||
            event.ctrlKey ||
            event.metaKey
          ) {
            return;
          }

          event.preventDefault();
          const nextIndex =
            event.key === "ArrowDown"
              ? getNextEnabledIndex(items, -1, 1)
              : getNextEnabledIndex(items, 0, -1);

          if (!isOpen) {
            pendingOpenActiveIndexRef.current = nextIndex;
            setOpen(true);
            return;
          }

          setActiveIndex(nextIndex);
        }}
      >
        {label}
      </Button>
      {isOpen ? (
        <DismissableLayer
          onEscapeKeyDown={(event) => {
            onEscapeKeyDown?.(event);
            if (event.defaultPrevented || !closeOnEscape) {
              event.preventDefault();
              return;
            }

            event.preventDefault();
            closeWithReason("escape-key");
            triggerRef.current?.focus();
          }}
          onPointerDownOutside={(event) => {
            const target = event.target;
            if (target instanceof Node && triggerRef.current?.contains(target)) {
              return;
            }

            onPointerDownOutside?.(event);
            if (event.defaultPrevented || !closeOnOutsidePointer) {
              event.preventDefault();
              return;
            }

            closeWithReason("outside-pointer");
          }}
        >
          <ul
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-labelledby={resolvedTriggerAriaLabelledBy ?? triggerId}
            aria-orientation="vertical"
            aria-keyshortcuts={menuKeyboardShortcuts}
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: 0,
              margin: 0,
              padding: 6,
              listStyle: "none",
              minWidth: 200,
              borderRadius: "var(--aurora-radius-md)",
              border: "1px solid var(--aurora-border-default)",
              background: "var(--aurora-surface-overlay)",
              boxShadow: "var(--aurora-shadow-md)",
              zIndex: "var(--aurora-z-overlay)"
            }}
            onKeyDown={(event) => {
              if (
                (event.altKey || event.ctrlKey || event.metaKey) &&
                (isDropdownNavigationKey(event.key) || isDropdownItemActivationKey(event.key))
              ) {
                return;
              }

              if (event.key === "ArrowDown") {
                event.preventDefault();
                setActiveIndex((current) => getNextEnabledIndex(items, current < 0 ? -1 : current, 1));
                return;
              }

              if (event.key === "ArrowUp") {
                event.preventDefault();
                setActiveIndex((current) => getNextEnabledIndex(items, current < 0 ? 0 : current, -1));
                return;
              }

              if (event.key === "Home") {
                event.preventDefault();
                setActiveIndex(getNextEnabledIndex(items, -1, 1));
                return;
              }

              if (event.key === "End") {
                event.preventDefault();
                setActiveIndex(getNextEnabledIndex(items, 0, -1));
                return;
              }

              if (event.key === "PageDown") {
                event.preventDefault();
                setActiveIndex((current) =>
                  getPagedEnabledIndex(items, current < 0 ? -1 : current, 1)
                );
                return;
              }

              if (event.key === "PageUp") {
                event.preventDefault();
                setActiveIndex((current) =>
                  getPagedEnabledIndex(items, current < 0 ? -1 : current, -1)
                );
                return;
              }

              if (event.key === "Tab") {
                dismissWithTabNavigation(event);
                return;
              }

              if (isComposingDropdownKeyEvent(event)) {
                return;
              }

              if (event.key.length === 1 && !event.altKey && !event.ctrlKey && !event.metaKey) {
                const normalizedKey = normalizeTypeaheadText(event.key);
                if (normalizedKey.length === 0) {
                  return;
                }

                const now = Date.now();
                const elapsed = now - typeaheadStateRef.current.timestamp;
                const nextQuery = getNextTypeaheadQuery(typeaheadStateRef.current.query, normalizedKey, elapsed);
                typeaheadStateRef.current = { query: nextQuery, timestamp: now };

                let nextIndex = getTypeaheadIndex(items, activeIndex < 0 ? -1 : activeIndex, nextQuery);
                if (nextIndex < 0 && nextQuery.length > 1) {
                  nextIndex = getTypeaheadIndex(items, activeIndex < 0 ? -1 : activeIndex, normalizedKey);
                  if (nextIndex >= 0) {
                    typeaheadStateRef.current = { query: normalizedKey, timestamp: now };
                  }
                }

                if (nextIndex >= 0) {
                  event.preventDefault();
                  setActiveIndex(nextIndex);
                }
              }
            }}
          >
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              const resolvedItemAriaLabelledBy = resolveNonEmptyLabel(item.ariaLabelledBy);
              const resolvedItemAriaLabel =
                resolvedItemAriaLabelledBy === undefined
                  ? resolveNonEmptyLabel(item.ariaLabel)
                  : undefined;
              return (
                <li key={itemRenderKeys[index] ?? `${item.key}__dup-${index}`} role="none">
                  <button
                    ref={(node) => {
                      itemRefs.current[index] = node;
                    }}
                    role="menuitem"
                    type="button"
                    disabled={item.disabled}
                    tabIndex={isActive ? 0 : -1}
                    aria-labelledby={resolvedItemAriaLabelledBy}
                    aria-label={resolvedItemAriaLabel}
                    aria-disabled={item.disabled || undefined}
                    aria-keyshortcuts={item.disabled ? undefined : "Enter Space"}
                    onMouseEnter={() => {
                      if (!item.disabled) {
                        setActiveIndex(index);
                      }
                    }}
                    onKeyDown={(event) => {
                      if (!isDropdownItemActivationKey(event.key)) {
                        return;
                      }

                      if (event.altKey || event.ctrlKey || event.metaKey) {
                        return;
                      }

                      event.preventDefault();
                      if (item.disabled || event.repeat) {
                        return;
                      }

                      keyboardActivationItemIndexRef.current = index;
                      keyboardActivationTimestampRef.current = Date.now();
                      const ownerWindow = event.currentTarget.ownerDocument.defaultView ?? window;
                      if (keyboardActivationResetTimerRef.current !== null) {
                        const timerWindow = keyboardActivationTimerWindowRef.current ?? ownerWindow;
                        timerWindow.clearTimeout(keyboardActivationResetTimerRef.current);
                      }
                      keyboardActivationTimerWindowRef.current = ownerWindow;
                      keyboardActivationResetTimerRef.current = ownerWindow.setTimeout(() => {
                        clearKeyboardActivationLatch();
                      }, dropdownItemKeyboardClickDedupeWindowMs);

                      item.onSelect?.();
                      closeWithReason("item-select");
                      triggerRef.current?.focus();
                    }}
                    onClick={(event) => {
                      const keyboardActivationAgeMs = Date.now() - keyboardActivationTimestampRef.current;
                      const clickFromKeyboardActivation =
                        event.detail === 0 &&
                        keyboardActivationItemIndexRef.current === index &&
                        keyboardActivationTimestampRef.current > 0 &&
                        keyboardActivationAgeMs <= dropdownItemKeyboardClickDedupeWindowMs;
                      clearKeyboardActivationLatch();
                      if (clickFromKeyboardActivation) {
                        return;
                      }

                      if (item.disabled) {
                        return;
                      }

                      item.onSelect?.();
                      closeWithReason("item-select");
                      triggerRef.current?.focus();
                    }}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      border: 0,
                      background: isActive
                        ? "color-mix(in srgb, var(--aurora-accent-default) 12%, transparent)"
                        : "transparent",
                      padding: "8px 10px",
                      borderRadius: 8,
                      cursor: item.disabled ? "not-allowed" : "pointer",
                      color: item.disabled
                        ? "color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)"
                        : "var(--aurora-text-primary)"
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </DismissableLayer>
      ) : null}
    </div>
  );
}

function isComposingDropdownKeyEvent(event: React.KeyboardEvent<HTMLElement>) {
  const nativeEvent = event.nativeEvent;
  if (nativeEvent.isComposing) {
    return true;
  }

  return typeof nativeEvent.keyCode === "number" && nativeEvent.keyCode === 229;
}

function focusAdjacentTabbable(
  ownerDocument: Document,
  currentElement: HTMLElement,
  direction: 1 | -1,
  excludedContainer: HTMLElement | null = null
) {
  const tabbableElements = Array.from(
    ownerDocument.querySelectorAll<HTMLElement>(
      'a[href], button, input:not([type="hidden"]), select, textarea, [tabindex]'
    )
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
    return;
  }

  const fallbackActiveElement =
    ownerDocument.activeElement instanceof HTMLElement ? ownerDocument.activeElement : null;
  const currentIndex = tabbableElements.indexOf(currentElement);
  const activeIndex = fallbackActiveElement ? tabbableElements.indexOf(fallbackActiveElement) : -1;
  const startIndex = currentIndex >= 0 ? currentIndex : activeIndex;
  let nextIndex = startIndex + direction;

  while (nextIndex >= 0 && nextIndex < tabbableElements.length) {
    const candidate = tabbableElements[nextIndex];
    if (candidate !== currentElement && isElementTabbable(candidate)) {
      candidate.focus();
      if (ownerDocument.activeElement === candidate) {
        return;
      }
    }
    nextIndex += direction;
  }
}

function isElementTabbable(element: HTMLElement) {
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

function getReadableTextNode(node: React.ReactNode): string {
  if (typeof node === "string") {
    return node;
  }

  if (typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return normalizeReadableDropdownText(
      node
        .map((item) => getReadableTextNode(item))
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
    return normalizeReadableDropdownText(elementProps["aria-label"]);
  }

  return getReadableTextNode(elementProps.children);
}

function normalizeReadableDropdownText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function resolveNonEmptyLabel(label: string | undefined) {
  if (typeof label === "string" && label.trim().length > 0) {
    return label.trim();
  }

  return undefined;
}
