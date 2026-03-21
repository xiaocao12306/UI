import * as React from "react";

const sortableHeaderActivationKeyboardShortcuts = "Enter Space";
const sortableHeaderKeyboardShortcuts = `${sortableHeaderActivationKeyboardShortcuts} Home End PageDown PageUp ArrowLeft ArrowRight`;

export type TableAlign = "left" | "center" | "right";
export type TableSortDirection = "asc" | "desc";

export type TableColumn<T> = {
  key: keyof T | string;
  header: React.ReactNode;
  sortLabel?: string;
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
const keyboardSortClickDedupeWindowMs = 400;

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

function resolveColumnSortLabel<T>(column: TableColumn<T>, fallbackKey: string) {
  if (typeof column.sortLabel === "string" && column.sortLabel.trim().length > 0) {
    return column.sortLabel.trim();
  }

  const normalizedHeader = normalizeReadableText(getReadableHeaderText(column.header));
  if (normalizedHeader.length > 0) {
    return normalizedHeader;
  }

  return fallbackKey;
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
  const resolvedAriaLabelledBy = resolveNonEmptyLabel(ariaLabelledBy);
  const resolvedAriaLabel = resolvedAriaLabelledBy
    ? undefined
    : resolveNonEmptyLabel(ariaLabel, caption ? undefined : "Data table");
  const sortButtonRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const keyboardActivationSortKeyRef = React.useRef<string | null>(null);
  const keyboardActivationTimestampRef = React.useRef(0);
  const keyboardActivationResetTimerRef = React.useRef<number | null>(null);
  const keyboardActivationTimerWindowRef = React.useRef<Window | null>(null);
  const sortFocusIntentRef = React.useRef(true);
  const warnedDuplicateColumnKeysSignatureRef = React.useRef<string | null>(null);
  const warnedDuplicateRowKeysSignatureRef = React.useRef<string | null>(null);
  const warnedMissingSortLabelSignatureRef = React.useRef<string | null>(null);
  const [hoveredSortKey, setHoveredSortKey] = React.useState<string | null>(null);
  const [pressedSortKey, setPressedSortKey] = React.useState<string | null>(null);
  const [focusVisibleSortKey, setFocusVisibleSortKey] = React.useState<string | null>(null);

  React.useEffect(() => {
    const ownerDocument = scrollContainerRef.current?.ownerDocument ?? document;
    const markKeyboardIntent = (event: KeyboardEvent) => {
      if (event.metaKey || event.altKey || event.ctrlKey) {
        return;
      }
      sortFocusIntentRef.current = true;
    };
    const markPointerIntent = () => {
      sortFocusIntentRef.current = false;
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

  const clearKeyboardActivationLatch = React.useCallback(() => {
    keyboardActivationSortKeyRef.current = null;
    keyboardActivationTimestampRef.current = 0;
    if (keyboardActivationResetTimerRef.current !== null) {
      const timerWindow = keyboardActivationTimerWindowRef.current ?? window;
      timerWindow.clearTimeout(keyboardActivationResetTimerRef.current);
      keyboardActivationResetTimerRef.current = null;
    }
    keyboardActivationTimerWindowRef.current = null;
  }, []);

  React.useEffect(
    () => () => {
      clearKeyboardActivationLatch();
    },
    [clearKeyboardActivationLatch]
  );

  const [sortState, setSortState] = React.useState<{
    key: string;
    direction: TableSortDirection;
  } | null>(() => resolveInitialSortState(columns, defaultSortKey, defaultSortDirection));
  const resolvedColumnRenderKeys = React.useMemo(() => {
    const counts = new Map<string, number>();
    return columns.map((column) => {
      const key = String(column.key);
      const count = counts.get(key) ?? 0;
      counts.set(key, count + 1);
      return count === 0 ? key : `${key}__duplicate-${count}`;
    });
  }, [columns]);
  const sortableNavigationRenderKeys = React.useMemo(() => {
    if (loading || data.length <= 1) {
      return [];
    }

    return columns.reduce<string[]>((keys, column, index) => {
      if (column.sortable) {
        keys.push(
          resolvedColumnRenderKeys[index] ??
            `${String(column.key)}__index-${index}`
        );
      }
      return keys;
    }, []);
  }, [columns, data.length, loading, resolvedColumnRenderKeys]);

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

    const nextInitialSortState = resolveInitialSortState(
      columns,
      defaultSortKey,
      defaultSortDirection
    );
    if (!nextInitialSortState) {
      return;
    }

    setSortState(nextInitialSortState);
  }, [columns, defaultSortDirection, defaultSortKey, sortState]);

  const sourceRowKeys = React.useMemo(
    () =>
      data.map((row, sourceIndex) => {
        if (!rowKey) {
          return String(sourceIndex);
        }

        return String(rowKey(row, sourceIndex));
      }),
    [data, rowKey]
  );
  const resolvedSourceRowKeys = React.useMemo(() => {
    const seenCounts = new Map<string, number>();
    return sourceRowKeys.map((key, sourceIndex) => {
      const seenCount = seenCounts.get(key) ?? 0;
      seenCounts.set(key, seenCount + 1);
      if (seenCount === 0) {
        return key;
      }

      return `${key}__dup-${sourceIndex}`;
    });
  }, [sourceRowKeys]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production" || !rowKey) {
      return;
    }

    const duplicates = new Set<string>();
    const seen = new Set<string>();
    sourceRowKeys.forEach((key) => {
      if (seen.has(key)) {
        duplicates.add(key);
      }
      seen.add(key);
    });

    if (duplicates.size === 0) {
      warnedDuplicateRowKeysSignatureRef.current = null;
      return;
    }

    const signature = Array.from(duplicates).sort().join("|");
    if (warnedDuplicateRowKeysSignatureRef.current === signature) {
      return;
    }
    warnedDuplicateRowKeysSignatureRef.current = signature;

    console.warn(
      `[Table] Duplicate row keys detected: ${Array.from(duplicates)
        .map((key) => `"${key}"`)
        .join(
          ", "
        )}. Ensure rowKey returns a unique, stable value for each source row. Duplicate keys are auto-suffixed with source index for render stability.`
    );
  }, [rowKey, sourceRowKeys]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const duplicateColumnKeys = new Set<string>();
    const seenColumnKeys = new Set<string>();
    columns.forEach((column) => {
      const key = String(column.key);
      if (seenColumnKeys.has(key)) {
        duplicateColumnKeys.add(key);
      }
      seenColumnKeys.add(key);
    });

    if (duplicateColumnKeys.size === 0) {
      warnedDuplicateColumnKeysSignatureRef.current = null;
      return;
    }

    const signature = Array.from(duplicateColumnKeys).sort().join("|");
    if (warnedDuplicateColumnKeysSignatureRef.current === signature) {
      return;
    }
    warnedDuplicateColumnKeysSignatureRef.current = signature;

    console.warn(
      `[Table] Duplicate column keys detected: ${Array.from(duplicateColumnKeys)
        .map((key) => `"${key}"`)
        .join(
          ", "
        )}. Ensure columns[].key values are unique to keep header associations and sorting behavior deterministic. Duplicate render keys are auto-suffixed by column index for stability.`
    );
  }, [columns]);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const missingSortLabelKeys = columns.reduce<string[]>((keys, column) => {
      if (!column.sortable) {
        return keys;
      }

      if (typeof column.sortLabel === "string" && column.sortLabel.trim().length > 0) {
        return keys;
      }

      if (normalizeReadableText(getReadableHeaderText(column.header)).length > 0) {
        return keys;
      }

      keys.push(String(column.key));
      return keys;
    }, []);

    if (missingSortLabelKeys.length === 0) {
      warnedMissingSortLabelSignatureRef.current = null;
      return;
    }

    const signature = missingSortLabelKeys.sort().join("|");
    if (warnedMissingSortLabelSignatureRef.current === signature) {
      return;
    }
    warnedMissingSortLabelSignatureRef.current = signature;

    console.warn(
      `[Table] Sortable columns with non-text headers should provide sortLabel: ${missingSortLabelKeys
        .map((key) => `"${key}"`)
        .join(", ")}. This keeps sort button labels and live-region narration accessible.`
    );
  }, [columns]);

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

    const columnHeader = resolveColumnSortLabel(activeSortColumn, String(activeSortColumn.key));
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
      ref={scrollContainerRef}
      data-aurora-table-scroll-container=""
      tabIndex={hasActionableSortControls ? undefined : 0}
      aria-label={
        hasActionableSortControls
          ? undefined
          : resolvedAriaLabelledBy
            ? undefined
            : (resolvedAriaLabel ?? "Data table scroll container")
      }
      aria-labelledby={hasActionableSortControls ? undefined : resolvedAriaLabelledBy}
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
        aria-labelledby={resolvedAriaLabelledBy}
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
            {columns.map((column, columnIndex) => {
              const key = String(column.key);
              const columnRenderKey =
                resolvedColumnRenderKeys[columnIndex] ??
                `${key}__index-${columnIndex}`;
              const sortable = Boolean(column.sortable);
              const hasMultiRowData = sortedEntries.length > 1;
              const activeSortDirection =
                sortable && sortState?.key === key ? sortState.direction : undefined;
              const sorted = !loading && hasMultiRowData ? activeSortDirection : undefined;
              const ariaSort = sorted ? (sorted === "asc" ? "ascending" : "descending") : undefined;
              const textAlign = column.align ?? "left";
              const headerLabel = resolveColumnSortLabel(column, key);
              const nextDirection: TableSortDirection =
                activeSortDirection === "asc" ? "desc" : "asc";
              const sortAriaLabel = getSortAriaLabel({
                columnKey: key,
                columnHeader: headerLabel,
                nextDirection
              });
              const resolvedSortAriaLabel = resolveNonEmptyLabel(
                sortAriaLabel,
                defaultGetSortAriaLabel({
                  columnKey: key,
                  columnHeader: headerLabel,
                  nextDirection
                })
              );
              const sortDisabled = loading || !hasMultiRowData;
              const sortKeyShortcuts = sortDisabled
                ? undefined
                : sortableNavigationRenderKeys.length > 1
                  ? sortableHeaderKeyboardShortcuts
                  : sortableHeaderActivationKeyboardShortcuts;
              const hovered = !sortDisabled && hoveredSortKey === columnRenderKey;
              const pressed = !sortDisabled && pressedSortKey === columnRenderKey;
              const focusVisible = !sortDisabled && focusVisibleSortKey === columnRenderKey;
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
                  key={columnRenderKey}
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
                      data-aurora-reduced-motion="transition"
                      type="button"
                      ref={(node) => {
                        sortButtonRefs.current[columnRenderKey] = node;
                      }}
                      aria-label={resolvedSortAriaLabel}
                      aria-keyshortcuts={sortKeyShortcuts}
                      disabled={sortDisabled}
                      onClick={(event) => {
                        const keyboardActivationAgeMs =
                          Date.now() - keyboardActivationTimestampRef.current;
                        const clickFromKeyboardActivation =
                          event.detail === 0 &&
                          keyboardActivationSortKeyRef.current === columnRenderKey &&
                          keyboardActivationTimestampRef.current > 0 &&
                          keyboardActivationAgeMs <= keyboardSortClickDedupeWindowMs;
                        clearKeyboardActivationLatch();
                        if (clickFromKeyboardActivation) {
                          return;
                        }

                        activateSort();
                      }}
                      onMouseEnter={() => {
                        if (sortDisabled) {
                          return;
                        }

                        setHoveredSortKey(columnRenderKey);
                      }}
                      onMouseLeave={() => {
                        setHoveredSortKey((currentKey) =>
                          currentKey === columnRenderKey ? null : currentKey
                        );
                        setPressedSortKey((currentKey) =>
                          currentKey === columnRenderKey ? null : currentKey
                        );
                      }}
                      onMouseDown={(event) => {
                        if (sortDisabled) {
                          return;
                        }

                        if (event.button !== 0) {
                          return;
                        }

                        sortFocusIntentRef.current = false;
                        setFocusVisibleSortKey((currentKey) =>
                          currentKey === columnRenderKey ? null : currentKey
                        );
                        setPressedSortKey(columnRenderKey);
                      }}
                      onMouseUp={(event) => {
                        if (event.button === 0) {
                          setPressedSortKey((currentKey) =>
                            currentKey === columnRenderKey ? null : currentKey
                          );
                        }
                      }}
                      onFocus={() => {
                        if (sortDisabled) {
                          setFocusVisibleSortKey((currentKey) =>
                            currentKey === columnRenderKey ? null : currentKey
                          );
                          return;
                        }

                        setFocusVisibleSortKey((currentKey) =>
                          resolveFocusVisibleState(
                            sortButtonRefs.current[columnRenderKey],
                            sortFocusIntentRef.current
                          )
                            ? columnRenderKey
                            : currentKey === columnRenderKey
                              ? null
                              : currentKey
                        );
                      }}
                      onBlur={() => {
                        setFocusVisibleSortKey((currentKey) =>
                          currentKey === columnRenderKey ? null : currentKey
                        );
                        setPressedSortKey((currentKey) =>
                          currentKey === columnRenderKey ? null : currentKey
                        );
                      }}
                      onKeyDown={(event) => {
                        sortFocusIntentRef.current = true;
                        if (event.altKey || event.ctrlKey || event.metaKey) {
                          return;
                        }

                        if (event.key === "Home") {
                          const firstKey = sortableNavigationRenderKeys[0];
                          if (!firstKey) {
                            return;
                          }
                          event.preventDefault();
                          sortButtonRefs.current[firstKey]?.focus();
                          return;
                        }

                        if (event.key === "End") {
                          const lastKey =
                            sortableNavigationRenderKeys[sortableNavigationRenderKeys.length - 1];
                          if (!lastKey) {
                            return;
                          }
                          event.preventDefault();
                          sortButtonRefs.current[lastKey]?.focus();
                          return;
                        }

                        if (event.key === "PageDown" || event.key === "PageUp") {
                          const currentPosition =
                            sortableNavigationRenderKeys.indexOf(columnRenderKey);
                          if (currentPosition < 0) {
                            return;
                          }

                          const delta = event.key === "PageDown" ? 1 : -1;
                          const nextPosition = Math.max(
                            0,
                            Math.min(
                              sortableNavigationRenderKeys.length - 1,
                              currentPosition + delta
                            )
                          );
                          if (nextPosition === currentPosition) {
                            return;
                          }

                          event.preventDefault();
                          const nextKey = sortableNavigationRenderKeys[nextPosition];
                          sortButtonRefs.current[nextKey]?.focus();
                          return;
                        }

                        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                          const currentPosition =
                            sortableNavigationRenderKeys.indexOf(columnRenderKey);
                          if (currentPosition < 0) {
                            return;
                          }

                          const ownerWindow =
                            event.currentTarget.ownerDocument.defaultView ?? window;
                          const styleDirection = ownerWindow.getComputedStyle(
                            event.currentTarget
                          ).direction;
                          const attributeDirection = event.currentTarget
                            .closest("[dir]")
                            ?.getAttribute("dir");
                          const computedDirection =
                            styleDirection === "rtl" || styleDirection === "ltr"
                              ? styleDirection
                              : attributeDirection === "rtl"
                                ? "rtl"
                                : "ltr";
                          const movesForwardKey =
                            computedDirection === "rtl" ? "ArrowLeft" : "ArrowRight";
                          const delta = event.key === movesForwardKey ? 1 : -1;
                          const nextPosition = Math.max(
                            0,
                            Math.min(
                              sortableNavigationRenderKeys.length - 1,
                              currentPosition + delta
                            )
                          );
                          if (nextPosition === currentPosition) {
                            return;
                          }

                          event.preventDefault();
                          const nextKey = sortableNavigationRenderKeys[nextPosition];
                          sortButtonRefs.current[nextKey]?.focus();
                          return;
                        }

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
                        setPressedSortKey(columnRenderKey);
                        keyboardActivationSortKeyRef.current = columnRenderKey;
                        keyboardActivationTimestampRef.current = Date.now();
                        const ownerWindow = event.currentTarget.ownerDocument.defaultView ?? window;
                        if (keyboardActivationResetTimerRef.current !== null) {
                          const timerWindow =
                            keyboardActivationTimerWindowRef.current ?? ownerWindow;
                          timerWindow.clearTimeout(keyboardActivationResetTimerRef.current);
                        }
                        keyboardActivationTimerWindowRef.current = ownerWindow;
                        keyboardActivationResetTimerRef.current = ownerWindow.setTimeout(() => {
                          clearKeyboardActivationLatch();
                        }, keyboardSortClickDedupeWindowMs);
                        activateSort();
                      }}
                      onKeyUp={(event) => {
                        if (event.altKey || event.ctrlKey || event.metaKey) {
                          return;
                        }

                        if (!isSortActivationKey(event.key)) {
                          return;
                        }

                        setPressedSortKey((currentKey) =>
                          currentKey === columnRenderKey ? null : currentKey
                        );
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
              const resolvedRowKey = resolvedSourceRowKeys[entry.sourceIndex] ?? fallbackKey;

              return (
                <tr
                  key={resolvedRowKey}
                  style={{
                    background: index % 2 === 0 ? "transparent" : "var(--aurora-surface-elevated)"
                  }}
                >
                  {columns.map((column, columnIndex) => {
                    const content = column.render
                      ? column.render(row, index, entry.sourceIndex)
                      : String((row as Record<string, unknown>)[String(column.key)] ?? "");
                    const columnRenderKey =
                      resolvedColumnRenderKeys[columnIndex] ??
                      `${String(column.key)}__index-${columnIndex}`;
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
                          key={columnRenderKey}
                          scope="row"
                          style={{ ...cellStyle, fontWeight: "var(--aurora-font-weight-medium)" }}
                        >
                          {content}
                        </th>
                      );
                    }

                    return (
                      <td key={columnRenderKey} style={cellStyle}>
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

function getReadableHeaderText(node: React.ReactNode): string {
  if (typeof node === "string") {
    return node;
  }

  if (typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return normalizeReadableText(
      node
        .map((item) => getReadableHeaderText(item))
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

  if (typeof elementProps["aria-label"] === "string") {
    const normalizedAriaLabel = normalizeReadableText(elementProps["aria-label"]);
    if (normalizedAriaLabel.length > 0) {
      return normalizedAriaLabel;
    }
  }

  return getReadableHeaderText(elementProps.children);
}

function normalizeReadableText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function resolveNonEmptyLabel(label: string | undefined, fallback?: string): string | undefined {
  if (typeof label === "string" && label.trim().length > 0) {
    return label.trim();
  }

  return fallback;
}
