import * as React from "react";

type PaginationToken = number | "ellipsis-left" | "ellipsis-right";

export type PaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  boundaryCount?: number;
  disabled?: boolean;
  showFirstLast?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  getItemAriaLabel?: (
    type: "page" | "current" | "first" | "last" | "next" | "previous",
    page: number
  ) => string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function createRange(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => start + index);
}

function getPaginationTokens(
  page: number,
  pageCount: number,
  siblingCount: number,
  boundaryCount: number
): PaginationToken[] {
  const totalPagesToShow = boundaryCount * 2 + siblingCount * 2 + 3;

  if (pageCount <= totalPagesToShow) {
    return createRange(1, pageCount);
  }

  const leftSibling = Math.max(page - siblingCount, boundaryCount + 2);
  const rightSibling = Math.min(page + siblingCount, pageCount - boundaryCount - 1);

  const tokens: PaginationToken[] = [];

  const startPages = createRange(1, boundaryCount);
  const endPages = createRange(pageCount - boundaryCount + 1, pageCount);
  tokens.push(...startPages);

  if (leftSibling > boundaryCount + 2) {
    tokens.push("ellipsis-left");
  } else if (boundaryCount + 1 < leftSibling) {
    tokens.push(boundaryCount + 1);
  }

  for (let current = leftSibling; current <= rightSibling; current += 1) {
    tokens.push(current);
  }

  if (rightSibling < pageCount - boundaryCount - 1) {
    tokens.push("ellipsis-right");
  } else if (rightSibling + 1 < pageCount - boundaryCount + 1) {
    tokens.push(pageCount - boundaryCount);
  }

  tokens.push(...endPages);
  return tokens;
}

export function Pagination({
  page,
  pageCount,
  onPageChange,
  siblingCount = 1,
  boundaryCount = 1,
  disabled = false,
  showFirstLast = true,
  ariaLabel = "Pagination",
  ariaLabelledBy,
  getItemAriaLabel = defaultGetItemAriaLabel
}: PaginationProps) {
  const navRef = React.useRef<HTMLElement>(null);
  const pendingFocusPageRef = React.useRef<number | null>(null);
  const suppressProgrammaticFocusStateRef = React.useRef(false);
  const focusVisibleIntentRef = React.useRef(false);
  const [focusedButtonId, setFocusedButtonId] = React.useState<string | null>(null);
  const [focusVisibleButtonId, setFocusVisibleButtonId] = React.useState<string | null>(null);
  const resolvedAriaLabel = resolveNonEmptyLabel(ariaLabel, "Pagination");
  const resolvedAriaLabelledBy = resolveNonEmptyLabel(ariaLabelledBy);
  const resolvedPageCount = Math.max(pageCount, 1);
  const currentPage = clamp(page, 1, resolvedPageCount);
  const tokens = pageCount <= 1 ? [] : getPaginationTokens(currentPage, pageCount, siblingCount, boundaryCount);
  const previousPage = clamp(currentPage - 1, 1, resolvedPageCount);
  const nextPage = clamp(currentPage + 1, 1, resolvedPageCount);
  const canGoPrevious = !disabled && pageCount > 1 && currentPage > 1;
  const canGoNext = !disabled && pageCount > 1 && currentPage < pageCount;
  const paginationKeyboardShortcuts = React.useMemo(() => {
    if (disabled || pageCount <= 1) {
      return undefined;
    }

    const shortcuts: string[] = [];
    if (canGoPrevious) {
      shortcuts.push("Home");
    }
    if (canGoNext) {
      shortcuts.push("End");
    }
    if (canGoPrevious || canGoNext) {
      shortcuts.push("ArrowLeft", "ArrowRight");
    }

    return shortcuts.length > 0 ? shortcuts.join(" ") : undefined;
  }, [canGoNext, canGoPrevious, disabled, pageCount]);
  const resolveItemAriaLabel = React.useCallback(
    (
      type: "page" | "current" | "first" | "last" | "next" | "previous",
      pageNumber: number
    ) =>
      resolveNonEmptyLabel(
        getItemAriaLabel(type, pageNumber),
        defaultGetItemAriaLabel(type, pageNumber)
      ),
    [getItemAriaLabel]
  );

  React.useEffect(() => {
    if (!disabled) {
      return;
    }

    setFocusedButtonId(null);
    setFocusVisibleButtonId(null);
  }, [disabled]);

  React.useEffect(() => {
    const ownerDocument = navRef.current?.ownerDocument ?? document;
    const markKeyboardIntent = (event: KeyboardEvent) => {
      if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
      }
      focusVisibleIntentRef.current = true;
    };
    const markPointerIntent = (event: Event) => {
      if ("button" in event && !isPrimaryPointerButton(event.button)) {
        return;
      }
      if ("ctrlKey" in event && event.ctrlKey) {
        return;
      }
      focusVisibleIntentRef.current = false;
    };

    ownerDocument.addEventListener("keydown", markKeyboardIntent, true);
    ownerDocument.addEventListener("pointerdown", markPointerIntent, true);
    ownerDocument.addEventListener("mousedown", markPointerIntent, true);
    ownerDocument.addEventListener("touchstart", markPointerIntent, true);

    return () => {
      ownerDocument.removeEventListener("keydown", markKeyboardIntent, true);
      ownerDocument.removeEventListener("pointerdown", markPointerIntent, true);
      ownerDocument.removeEventListener("mousedown", markPointerIntent, true);
      ownerDocument.removeEventListener("touchstart", markPointerIntent, true);
    };
  }, []);

  const goToPage = (nextPage: number) => {
    if (disabled || pageCount <= 1) {
      return;
    }
    const resolvedPage = clamp(nextPage, 1, pageCount);
    if (resolvedPage === currentPage) {
      return;
    }
    onPageChange(resolvedPage);
  };

  React.useLayoutEffect(() => {
    if (pendingFocusPageRef.current === null) {
      return;
    }
    const targetPage = pendingFocusPageRef.current;
    pendingFocusPageRef.current = null;
    const target = navRef.current?.querySelector<HTMLButtonElement>(`button[data-aurora-pagination-page="${targetPage}"]`);
    if (!target) {
      return;
    }

    suppressProgrammaticFocusStateRef.current = true;
    target.focus();
    suppressProgrammaticFocusStateRef.current = false;
  }, [currentPage]);

  const goToPageWithFocus = (nextPage: number) => {
    const resolvedPage = clamp(nextPage, 1, pageCount);
    if (resolvedPage === currentPage) {
      pendingFocusPageRef.current = null;
      return;
    }
    const targetButtonId = `page-${resolvedPage}`;
    setFocusedButtonId(targetButtonId);
    setFocusVisibleButtonId(
      focusVisibleIntentRef.current ? targetButtonId : null
    );
    pendingFocusPageRef.current = resolvedPage;
    goToPage(resolvedPage);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    focusVisibleIntentRef.current = true;
    if (disabled) {
      return;
    }
    if (
      (event.altKey || event.ctrlKey || event.metaKey) &&
      isPaginationManagedKeyboardKey(event.key)
    ) {
      return;
    }
    if (event.key === "Home") {
      if (currentPage === 1) {
        return;
      }
      event.preventDefault();
      goToPageWithFocus(1);
      return;
    }

    if (event.key === "End") {
      if (currentPage === resolvedPageCount) {
        return;
      }
      event.preventDefault();
      goToPageWithFocus(resolvedPageCount);
      return;
    }

    const arrowDelta = getPaginationArrowDelta(event.key, event.currentTarget);
    if (arrowDelta === undefined) {
      return;
    }

    const nextPage = clamp(currentPage + arrowDelta, 1, resolvedPageCount);
    if (nextPage === currentPage) {
      return;
    }

    event.preventDefault();
    goToPageWithFocus(nextPage);
  };

  const createButtonFocusIntentProps = React.useCallback(
    (buttonId: string) => ({
      "data-focus-visible":
        focusedButtonId === buttonId && focusVisibleButtonId === buttonId ? "true" : undefined,
      onFocus: (event: React.FocusEvent<HTMLButtonElement>) => {
        if (suppressProgrammaticFocusStateRef.current) {
          return;
        }
        setFocusedButtonId(buttonId);
        setFocusVisibleButtonId(
          resolveFocusVisibleState(event.currentTarget, focusVisibleIntentRef.current)
            ? buttonId
            : null
        );
      },
      onBlur: () => {
        if (suppressProgrammaticFocusStateRef.current) {
          return;
        }
        setFocusedButtonId((current) => (current === buttonId ? null : current));
        setFocusVisibleButtonId((current) => (current === buttonId ? null : current));
      },
      onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.button !== 0 || event.ctrlKey) {
          return;
        }
        focusVisibleIntentRef.current = false;
        setFocusVisibleButtonId((current) => (current === buttonId ? null : current));
      },
      onPointerDown: (event: React.PointerEvent<HTMLButtonElement>) => {
        if (!isPrimaryPointerButton(event.button) || event.ctrlKey) {
          return;
        }
        focusVisibleIntentRef.current = false;
        setFocusVisibleButtonId((current) => (current === buttonId ? null : current));
      }
    }),
    [focusedButtonId, focusVisibleButtonId]
  );

  if (pageCount <= 1) {
    return null;
  }

  return (
    <nav
      ref={navRef}
      aria-label={resolvedAriaLabelledBy ? undefined : resolvedAriaLabel}
      aria-labelledby={resolvedAriaLabelledBy}
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          alignItems: "center"
        }}
      >
        {showFirstLast ? (
          <li>
            <button
              {...createButtonFocusIntentProps("first")}
              type="button"
              disabled={!canGoPrevious}
              onClick={() => goToPage(1)}
              onKeyDown={handleKeyDown}
              aria-label={resolveItemAriaLabel("first", 1)}
              aria-keyshortcuts={!canGoPrevious ? undefined : paginationKeyboardShortcuts}
              style={buttonStyle(
                false,
                !canGoPrevious,
                focusedButtonId === "first" && focusVisibleButtonId === "first"
              )}
            >
              «
            </button>
          </li>
        ) : null}
        <li>
          <button
            {...createButtonFocusIntentProps("previous")}
            type="button"
            disabled={!canGoPrevious}
            onClick={() => goToPage(previousPage)}
            onKeyDown={handleKeyDown}
            aria-label={resolveItemAriaLabel("previous", previousPage)}
            aria-keyshortcuts={!canGoPrevious ? undefined : paginationKeyboardShortcuts}
            style={buttonStyle(
              false,
              !canGoPrevious,
              focusedButtonId === "previous" && focusVisibleButtonId === "previous"
            )}
          >
            ‹
          </button>
        </li>
        {tokens.map((token, index) => {
          if (typeof token !== "number") {
            return (
              <li key={`${token}-${index}`} aria-hidden="true" style={{ color: "var(--aurora-text-secondary)", minWidth: 32, textAlign: "center" }}>
                …
              </li>
            );
          }

          const selected = token === currentPage;
          const buttonId = `page-${token}`;
          return (
            <li key={token}>
              <button
                {...createButtonFocusIntentProps(buttonId)}
                type="button"
                onClick={() => goToPage(token)}
                disabled={disabled}
                onKeyDown={handleKeyDown}
                data-aurora-pagination-page={token}
                aria-current={selected ? "page" : undefined}
                aria-label={
                  selected
                    ? resolveItemAriaLabel("current", token)
                    : resolveItemAriaLabel("page", token)
                }
                aria-keyshortcuts={disabled ? undefined : paginationKeyboardShortcuts}
                style={buttonStyle(
                  selected,
                  disabled,
                  focusedButtonId === buttonId && focusVisibleButtonId === buttonId
                )}
              >
                {token}
              </button>
            </li>
          );
        })}
        <li>
          <button
            {...createButtonFocusIntentProps("next")}
            type="button"
            disabled={!canGoNext}
            onClick={() => goToPage(nextPage)}
            onKeyDown={handleKeyDown}
            aria-label={resolveItemAriaLabel("next", nextPage)}
            aria-keyshortcuts={!canGoNext ? undefined : paginationKeyboardShortcuts}
            style={buttonStyle(
              false,
              !canGoNext,
              focusedButtonId === "next" && focusVisibleButtonId === "next"
            )}
          >
            ›
          </button>
        </li>
        {showFirstLast ? (
          <li>
            <button
              {...createButtonFocusIntentProps("last")}
              type="button"
              disabled={!canGoNext}
              onClick={() => goToPage(pageCount)}
              onKeyDown={handleKeyDown}
              aria-label={resolveItemAriaLabel("last", pageCount)}
              aria-keyshortcuts={!canGoNext ? undefined : paginationKeyboardShortcuts}
              style={buttonStyle(
                false,
                !canGoNext,
                focusedButtonId === "last" && focusVisibleButtonId === "last"
              )}
            >
              »
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

function isPaginationManagedKeyboardKey(key: string) {
  return key === "Home" || key === "End" || key === "ArrowLeft" || key === "ArrowRight";
}

function getPaginationArrowDelta(key: string, target: HTMLButtonElement) {
  if (key !== "ArrowLeft" && key !== "ArrowRight") {
    return undefined;
  }

  return resolveDirectionAwareArrowDelta(key, isElementDirectionRtl(target));
}

function resolveDirectionAwareArrowDelta(key: "ArrowLeft" | "ArrowRight", isRtl: boolean) {
  if (key === "ArrowRight") {
    return isRtl ? -1 : 1;
  }

  return isRtl ? 1 : -1;
}

function isElementDirectionRtl(element: HTMLElement | null) {
  if (!element) {
    return false;
  }

  const nearestDirRoot = element.closest<HTMLElement>("[dir]");
  if (nearestDirRoot?.dir === "rtl") {
    return true;
  }
  if (nearestDirRoot?.dir === "ltr") {
    return false;
  }

  const ownerWindow = element.ownerDocument.defaultView ?? (typeof window !== "undefined" ? window : null);
  if (!ownerWindow) {
    return false;
  }

  return ownerWindow.getComputedStyle(element).direction === "rtl";
}

function defaultGetItemAriaLabel(
  type: "page" | "current" | "first" | "last" | "next" | "previous",
  page: number
) {
  switch (type) {
    case "first":
      return "Go to first page";
    case "last":
      return "Go to last page";
    case "previous":
      return "Go to previous page";
    case "next":
      return "Go to next page";
    case "current":
      return `Current page, ${page}`;
    default:
      return `Go to page ${page}`;
  }
}

function buttonStyle(selected: boolean, disabled: boolean, focusVisible: boolean): React.CSSProperties {
  return {
    minWidth: 32,
    height: 32,
    padding: "0 8px",
    borderRadius: "var(--aurora-radius-sm)",
    border: selected ? "1px solid var(--aurora-accent-default)" : "1px solid var(--aurora-border-default)",
    background: selected
      ? "color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))"
      : "var(--aurora-surface-default)",
    color: disabled ? "color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)" : "var(--aurora-text-primary)",
    cursor: disabled ? "not-allowed" : "pointer",
    font: "inherit",
    boxShadow:
      !disabled && focusVisible
        ? "0 0 0 3px color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)"
        : "none"
  };
}

function resolveNonEmptyLabel(label: string | undefined, fallback?: string): string | undefined {
  if (typeof label === "string" && label.trim().length > 0) {
    return label.trim();
  }

  return fallback;
}

function resolveFocusVisibleState(target: HTMLButtonElement, fallback: boolean) {
  try {
    return target.matches(":focus-visible") || fallback;
  } catch {
    return fallback;
  }
}

function isPrimaryPointerButton(button: number | undefined) {
  return typeof button !== "number" || button <= 0;
}
