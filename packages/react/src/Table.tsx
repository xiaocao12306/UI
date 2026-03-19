import * as React from "react";

export type TableAlign = "left" | "center" | "right";
export type TableSortDirection = "asc" | "desc";

export type TableColumn<T> = {
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  rowHeader?: boolean;
  render?: (row: T, rowIndex: number, sourceIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
};

export type TableProps<T> = {
  columns: Array<TableColumn<T>>;
  data: T[];
  rowKey?: (row: T, rowIndex: number) => string;
  caption?: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  loading?: boolean;
  loadingContent?: React.ReactNode;
  emptyContent?: React.ReactNode;
  defaultSortKey?: string;
  defaultSortDirection?: TableSortDirection;
  getSortAriaLabel?: (params: {
    columnKey: string;
    columnHeader: string;
    nextDirection: TableSortDirection;
  }) => string;
  getSortStatusText?: (params: {
    columnKey: string;
    columnHeader: string;
    direction: TableSortDirection;
  }) => string;
  onSortChange?: (key: string, direction: TableSortDirection) => void;
};

const tableStringCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base"
});

function resolveInitialSortState<T>(
  columns: Array<TableColumn<T>>,
  defaultSortKey: string | undefined,
  defaultSortDirection: TableSortDirection
) {
  if (!defaultSortKey) {
    return null;
  }

  const initialColumn = columns.find((item) => String(item.key) === defaultSortKey);
  if (!initialColumn?.sortable) {
    return null;
  }

  return { key: defaultSortKey, direction: defaultSortDirection } satisfies {
    key: string;
    direction: TableSortDirection;
  };
}

export function Table<T>({
  columns,
  data,
  rowKey,
  caption,
  ariaLabel,
  ariaLabelledBy,
  loading = false,
  loadingContent = "Loading data...",
  emptyContent = "No data available.",
  defaultSortKey,
  defaultSortDirection = "asc",
  getSortAriaLabel = defaultGetSortAriaLabel,
  getSortStatusText = defaultGetSortStatusText,
  onSortChange
}: TableProps<T>) {
  const resolvedAriaLabel = ariaLabelledBy
    ? undefined
    : (ariaLabel ?? (caption ? undefined : "Data table"));
  const sortButtonRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const sortFocusIntentRef = React.useRef(true);
  const [hoveredSortKey, setHoveredSortKey] = React.useState<string | null>(null);
  const [pressedSortKey, setPressedSortKey] = React.useState<string | null>(null);
  const [focusVisibleSortKey, setFocusVisibleSortKey] = React.useState<string | null>(null);

  React.useEffect(() => {
    const markKeyboardIntent = (event: KeyboardEvent) => {
      if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
      }
      sortFocusIntentRef.current = true;
    };
    const markPointerIntent = () => {
      sortFocusIntentRef.current = false;
    };

    document.addEventListener("keydown", markKeyboardIntent, true);
    document.addEventListener("pointerdown", markPointerIntent, true);
    document.addEventListener("mousedown", markPointerIntent, true);
    document.addEventListener("touchstart", markPointerIntent, true);

    return () => {
      document.removeEventListener("keydown", markKeyboardIntent, true);
      document.removeEventListener("pointerdown", markPointerIntent, true);
      document.removeEventListener("mousedown", markPointerIntent, true);
      document.removeEventListener("touchstart", markPointerIntent, true);
    };
  }, []);

  const [sortState, setSortState] = React.useState<{
    key: string;
    direction: TableSortDirection;
  } | null>(() => resolveInitialSortState(columns, defaultSortKey, defaultSortDirection));

  React.useEffect(() => {
    if (!sortState) {
      return;
    }

    const activeSortColumn = columns.find((column) => String(column.key) === sortState.key);
    if (!activeSortColumn?.sortable) {
      setSortState(null);
    }
  }, [columns, sortState]);

  React.useEffect(() => {
    if (sortState) {
      return;
    }

    const nextInitialSortState = resolveInitialSortState(columns, defaultSortKey, defaultSortDirection);
    if (!nextInitialSortState) {
      return;
    }

    setSortState(nextInitialSortState);
  }, [columns, defaultSortDirection, defaultSortKey, sortState]);

  const sortedEntries = React.useMemo(() => {
    const sourceEntries = data.map((row, sourceIndex) => ({ row, sourceIndex }));
    if (!sortState) {
      return sourceEntries;
    }

    const column = columns.find((item) => String(item.key) === sortState.key);
    if (!column?.sortable) {
      return sourceEntries;
    }

    const accessor =
      column.sortAccessor ??
      ((row: T) => {
        const value = (row as Record<string, unknown>)[String(column.key)];
        if (value instanceof Date) {
          return value;
        }

        if (typeof value === "number" || typeof value === "string") {
          return value;
        }

        return String(value ?? "");
      });

    return sourceEntries.sort((leftEntry, rightEntry) => {
      const leftValue = accessor(leftEntry.row);
      const rightValue = accessor(rightEntry.row);

      if (typeof leftValue === "string" && typeof rightValue === "string") {
        const compareResult = tableStringCollator.compare(leftValue, rightValue);
        if (compareResult !== 0) {
          return sortState.direction === "asc" ? compareResult : -compareResult;
        }

        return leftEntry.sourceIndex - rightEntry.sourceIndex;
      }

      const normalizedLeft = leftValue instanceof Date ? leftValue.getTime() : leftValue;
      const normalizedRight = rightValue instanceof Date ? rightValue.getTime() : rightValue;

      if (normalizedLeft < normalizedRight) {
        return sortState.direction === "asc" ? -1 : 1;
      }
      if (normalizedLeft > normalizedRight) {
        return sortState.direction === "asc" ? 1 : -1;
      }

      // Preserve deterministic order for equal sort values.
      return leftEntry.sourceIndex - rightEntry.sourceIndex;
    });
  }, [columns, data, sortState]);

  const sortStatusText = React.useMemo(() => {
    if (loading || sortedEntries.length <= 1 || !sortState) {
      return "";
    }

    const activeSortColumn = columns.find((column) => String(column.key) === sortState.key);
    if (!activeSortColumn?.sortable) {
      return "";
    }

    const columnHeader =
      typeof activeSortColumn.header === "string"
        ? activeSortColumn.header
        : String(activeSortColumn.key);
    return getSortStatusText({
      columnKey: sortState.key,
      columnHeader,
      direction: sortState.direction
    });
  }, [columns, getSortStatusText, loading, sortState, sortedEntries.length]);
  const hasActionableSortControls =
    !loading && sortedEntries.length > 1 && columns.some((column) => column.sortable);
  const tableColSpan = Math.max(columns.length, 1);

  React.useEffect(() => {
    if (hasActionableSortControls) {
      return;
    }

    setHoveredSortKey(null);
    setPressedSortKey(null);
    setFocusVisibleSortKey(null);
  }, [hasActionableSortControls]);

  return (
    <div
      data-aurora-table-scroll-container=""
      tabIndex={hasActionableSortControls ? undefined : 0}
      aria-label={
        hasActionableSortControls
          ? undefined
          : ariaLabelledBy
            ? undefined
            : resolvedAriaLabel ?? "Data table scroll container"
      }
      aria-labelledby={hasActionableSortControls ? undefined : ariaLabelledBy}
      style={{
        border: "1px solid var(--aurora-border-default)",
        borderRadius: "var(--aurora-radius-md)",
        overflow: "auto"
      }}
    >
      {sortStatusText ? (
        <p
          role="status"
          aria-live="polite"
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0
          }}
        >
          {sortStatusText}
        </p>
      ) : null}
      <table
        aria-label={resolvedAriaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-busy={loading || undefined}
        style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}
      >
        {caption ? (
          <caption
            style={{
              textAlign: "left",
              padding: "10px 12px",
              color: "var(--aurora-text-secondary)",
              fontSize: "var(--aurora-font-size-sm)",
              borderBottom: "1px solid var(--aurora-border-default)"
            }}
          >
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr>
            {columns.map((column) => {
              const key = String(column.key);
              const sortable = Boolean(column.sortable);
              const hasMultiRowData = sortedEntries.length > 1;
              const activeSortDirection =
                sortable && sortState?.key === key ? sortState.direction : undefined;
              const sorted = !loading && hasMultiRowData ? activeSortDirection : undefined;
              const ariaSort = sorted ? (sorted === "asc" ? "ascending" : "descending") : undefined;
              const textAlign = column.align ?? "left";
              const headerLabel = typeof column.header === "string" ? column.header : key;
              const nextDirection: TableSortDirection =
                activeSortDirection === "asc" ? "desc" : "asc";
              const sortAriaLabel = getSortAriaLabel({
                columnKey: key,
                columnHeader: headerLabel,
                nextDirection
              });
              const sortDisabled = loading || !hasMultiRowData;
              const hovered = !sortDisabled && hoveredSortKey === key;
              const pressed = !sortDisabled && pressedSortKey === key;
              const focusVisible = !sortDisabled && focusVisibleSortKey === key;
              const interactive = hovered || focusVisible;
              const activateSort = () => {
                if (sortDisabled) {
                  return;
                }

                setSortState({ key, direction: nextDirection });
                onSortChange?.(key, nextDirection);
              };

              return (
                <th
                  key={key}
                  scope="col"
                  aria-sort={ariaSort}
                  style={{
                    textAlign,
                    color: "var(--aurora-text-secondary)",
                    background: "var(--aurora-surface-elevated)",
                    borderBottom: "1px solid var(--aurora-border-default)",
                    padding: "10px 12px",
                    fontSize: "var(--aurora-font-size-sm)",
                    fontWeight: "var(--aurora-font-weight-medium)",
                    width: column.width
                  }}
                >
                  {sortable ? (
                    <button
                      type="button"
                      ref={(node) => {
                        sortButtonRefs.current[key] = node;
                      }}
                      aria-label={sortAriaLabel}
                      aria-keyshortcuts={sortDisabled ? undefined : "Enter Space"}
                      disabled={sortDisabled}
                      onClick={activateSort}
                      onMouseEnter={() => {
                        if (sortDisabled) {
                          return;
                        }

                        setHoveredSortKey(key);
                      }}
                      onMouseLeave={() => {
                        setHoveredSortKey((currentKey) => (currentKey === key ? null : currentKey));
                        setPressedSortKey((currentKey) => (currentKey === key ? null : currentKey));
                      }}
                      onMouseDown={(event) => {
                        if (sortDisabled) {
                          return;
                        }

                        sortFocusIntentRef.current = false;
                        setFocusVisibleSortKey((currentKey) =>
                          currentKey === key ? null : currentKey
                        );
                        if (event.button === 0) {
                          setPressedSortKey(key);
                        }
                      }}
                      onMouseUp={(event) => {
                        if (event.button === 0) {
                          setPressedSortKey((currentKey) =>
                            currentKey === key ? null : currentKey
                          );
                        }
                      }}
                      onFocus={() => {
                        if (sortDisabled) {
                          setFocusVisibleSortKey((currentKey) =>
                            currentKey === key ? null : currentKey
                          );
                          return;
                        }

                        setFocusVisibleSortKey((currentKey) =>
                          resolveFocusVisibleState(
                            sortButtonRefs.current[key],
                            sortFocusIntentRef.current
                          )
                            ? key
                            : currentKey === key
                              ? null
                              : currentKey
                        );
                      }}
                      onBlur={() => {
                        setFocusVisibleSortKey((currentKey) =>
                          currentKey === key ? null : currentKey
                        );
                        setPressedSortKey((currentKey) => (currentKey === key ? null : currentKey));
                      }}
                      onKeyDown={(event) => {
                        sortFocusIntentRef.current = true;
                        if (!isSortActivationKey(event.key)) {
                          return;
                        }

                        if (isComposingSortActivationEvent(event)) {
                          return;
                        }

                        event.preventDefault();
                        if (event.repeat) {
                          return;
                        }
                        activateSort();
                      }}
                      style={{
                        border: interactive
                          ? "1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)"
                          : "1px solid transparent",
                        borderRadius: "var(--aurora-radius-sm)",
                        background: pressed
                          ? "color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))"
                          : hovered
                            ? "color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))"
                            : "transparent",
                        font: "inherit",
                        cursor: sortDisabled ? "not-allowed" : "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "2px 6px",
                        color: sortDisabled
                          ? "color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))"
                          : "inherit",
                        boxShadow: focusVisible
                          ? "0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)"
                          : "none",
                        transform: pressed ? "translateY(1px)" : "translateY(0)",
                        transition:
                          "background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"
                      }}
                    >
                      {column.header}
                      <span aria-hidden="true">
                        {sorted === "asc" ? "▲" : sorted === "desc" ? "▼" : "↕"}
                      </span>
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={tableColSpan}
                style={{
                  padding: "16px 12px",
                  color: "var(--aurora-text-secondary)",
                  textAlign: "center"
                }}
              >
                <span role="status" aria-live="polite">
                  {loadingContent}
                </span>
              </td>
            </tr>
          ) : sortedEntries.length === 0 ? (
            <tr>
              <td
                colSpan={tableColSpan}
                style={{
                  padding: "16px 12px",
                  color: "var(--aurora-text-secondary)",
                  textAlign: "center"
                }}
              >
                <span role="status" aria-live="polite">
                  {emptyContent}
                </span>
              </td>
            </tr>
          ) : (
            sortedEntries.map((entry, index) => {
              const row = entry.row;
              const fallbackKey = String(entry.sourceIndex);

              return (
                <tr
                  key={rowKey ? rowKey(row, entry.sourceIndex) : fallbackKey}
                  style={{
                    background: index % 2 === 0 ? "transparent" : "var(--aurora-surface-elevated)"
                  }}
                >
                  {columns.map((column) => {
                    const content = column.render
                      ? column.render(row, index, entry.sourceIndex)
                      : String((row as Record<string, unknown>)[String(column.key)] ?? "");
                    const cellStyle: React.CSSProperties = {
                      padding: "10px 12px",
                      borderBottom: "1px solid var(--aurora-border-default)",
                      color: "var(--aurora-text-primary)",
                      fontSize: "var(--aurora-font-size-sm)",
                      textAlign: column.align ?? "left"
                    };

                    if (column.rowHeader) {
                      return (
                        <th
                          key={String(column.key)}
                          scope="row"
                          style={{ ...cellStyle, fontWeight: "var(--aurora-font-weight-medium)" }}
                        >
                          {content}
                        </th>
                      );
                    }

                    return (
                      <td key={String(column.key)} style={cellStyle}>
                        {content}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

function defaultGetSortAriaLabel({
  columnHeader,
  nextDirection
}: {
  columnKey: string;
  columnHeader: string;
  nextDirection: TableSortDirection;
}) {
  return `${columnHeader} sort ${nextDirection === "asc" ? "ascending" : "descending"}`;
}

function defaultGetSortStatusText({
  columnHeader,
  direction
}: {
  columnKey: string;
  columnHeader: string;
  direction: TableSortDirection;
}) {
  return `Sorted by ${columnHeader} ${direction === "asc" ? "ascending" : "descending"}.`;
}

function isSortActivationKey(key: string) {
  return key === "Enter" || key === " " || key === "Space" || key === "Spacebar";
}

function isComposingSortActivationEvent(event: React.KeyboardEvent<HTMLButtonElement>) {
  const nativeEvent = event.nativeEvent;
  if (nativeEvent.isComposing) {
    return true;
  }

  return typeof nativeEvent.keyCode === "number" && nativeEvent.keyCode === 229;
}

function resolveFocusVisibleState(target: HTMLButtonElement | null, fallback: boolean) {
  if (!target) {
    return fallback;
  }

  try {
    return target.matches(":focus-visible");
  } catch {
    return fallback;
  }
}
