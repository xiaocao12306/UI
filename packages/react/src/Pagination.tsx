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
  ariaLabel = "Pagination"
}: PaginationProps) {
  if (pageCount <= 1) {
    return null;
  }

  const currentPage = clamp(page, 1, pageCount);
  const tokens = getPaginationTokens(currentPage, pageCount, siblingCount, boundaryCount);
  const canGoPrevious = !disabled && currentPage > 1;
  const canGoNext = !disabled && currentPage < pageCount;

  const goToPage = (nextPage: number) => {
    if (disabled) {
      return;
    }
    onPageChange(clamp(nextPage, 1, pageCount));
  };

  return (
    <nav aria-label={ariaLabel}>
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
              aria-label="Go to first page"
              style={buttonStyle(false)}
            >
              «
            </button>
          </li>
        ) : null}
        <li>
          <button
            type="button"
            disabled={!canGoPrevious}
            onClick={() => goToPage(currentPage - 1)}
            aria-label="Go to previous page"
            style={buttonStyle(false)}
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
                aria-current={selected ? "page" : undefined}
                aria-label={selected ? `Current page, ${token}` : `Go to page ${token}`}
                style={buttonStyle(selected)}
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
            onClick={() => goToPage(currentPage + 1)}
            aria-label="Go to next page"
            style={buttonStyle(false)}
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
              aria-label="Go to last page"
              style={buttonStyle(false)}
            >
              »
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

function buttonStyle(selected: boolean): React.CSSProperties {
  return {
    minWidth: 32,
    height: 32,
    padding: "0 8px",
    borderRadius: "var(--aurora-radius-sm)",
    border: selected ? "1px solid var(--aurora-accent-default)" : "1px solid var(--aurora-border-default)",
    background: selected
      ? "color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))"
      : "var(--aurora-surface-default)",
    color: "var(--aurora-text-primary)",
    cursor: "pointer",
    font: "inherit"
  };
}
