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
  const resolvedAriaLabel = resolveNonEmptyLabel(ariaLabel, "Pagination");
  const resolvedAriaLabelledBy = resolveNonEmptyLabel(ariaLabelledBy);
  const resolvedPageCount = Math.max(pageCount, 1);
  const currentPage = clamp(page, 1, resolvedPageCount);
  const tokens = pageCount <= 1 ? [] : getPaginationTokens(currentPage, pageCount, siblingCount, boundaryCount);
  const previousPage = clamp(currentPage - 1, 1, resolvedPageCount);
  const nextPage = clamp(currentPage + 1, 1, resolvedPageCount);
  const canGoPrevious = !disabled && pageCount > 1 && currentPage > 1;
  const canGoNext = !disabled && pageCount > 1 && currentPage < pageCount;
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

  React.useEffect(() => {
    if (pendingFocusPageRef.current === null) {
      return;
    }
    const targetPage = pendingFocusPageRef.current;
    pendingFocusPageRef.current = null;
    const target = navRef.current?.querySelector<HTMLButtonElement>(`button[data-aurora-pagination-page="${targetPage}"]`);
    target?.focus();
  }, [currentPage]);

  const goToPageWithFocus = (nextPage: number) => {
    const resolvedPage = clamp(nextPage, 1, pageCount);
    if (resolvedPage === currentPage) {
      pendingFocusPageRef.current = null;
      return;
    }
    pendingFocusPageRef.current = resolvedPage;
    goToPage(resolvedPage);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      goToPageWithFocus(1);
    } else if (event.key === "End") {
      event.preventDefault();
      goToPageWithFocus(resolvedPageCount);
      return;
    }

    const arrowDelta = getPaginationArrowDelta(event.key, event.currentTarget);
    if (arrowDelta === undefined) {
      return;
    }

    event.preventDefault();
    goToPageWithFocus(currentPage + arrowDelta);
  };

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
              type="button"
              disabled={!canGoPrevious}
              onClick={() => goToPage(1)}
              onKeyDown={handleKeyDown}
              aria-label={resolveItemAriaLabel("first", 1)}
              style={buttonStyle(false, !canGoPrevious)}
            >
              «
            </button>
          </li>
        ) : null}
        <li>
          <button
            type="button"
            disabled={!canGoPrevious}
            onClick={() => goToPage(previousPage)}
            onKeyDown={handleKeyDown}
            aria-label={resolveItemAriaLabel("previous", previousPage)}
            style={buttonStyle(false, !canGoPrevious)}
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
          return (
            <li key={token}>
              <button
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
                style={buttonStyle(selected, disabled)}
              >
                {token}
              </button>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            disabled={!canGoNext}
            onClick={() => goToPage(nextPage)}
            onKeyDown={handleKeyDown}
            aria-label={resolveItemAriaLabel("next", nextPage)}
            style={buttonStyle(false, !canGoNext)}
          >
            ›
          </button>
        </li>
        {showFirstLast ? (
          <li>
            <button
              type="button"
              disabled={!canGoNext}
              onClick={() => goToPage(pageCount)}
              onKeyDown={handleKeyDown}
              aria-label={resolveItemAriaLabel("last", pageCount)}
              style={buttonStyle(false, !canGoNext)}
            >
              »
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
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

  if (typeof window === "undefined") {
    return false;
  }

  return window.getComputedStyle(element).direction === "rtl";
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

function buttonStyle(selected: boolean, disabled: boolean): React.CSSProperties {
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
    font: "inherit"
  };
}

function resolveNonEmptyLabel(label: string | undefined, fallback?: string): string | undefined {
  if (typeof label === "string" && label.trim().length > 0) {
    return label.trim();
  }

  return fallback;
}
