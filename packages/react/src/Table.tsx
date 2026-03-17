import * as React from "react";

export type TableAlign = "left" | "center" | "right";
export type TableSortDirection = "asc" | "desc";

export type TableColumn<T> = {
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
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
  onSortChange?: (key: string, direction: TableSortDirection) => void;
};

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
  loading = false,
  loadingContent = "Loading data...",
  emptyContent = "No data available.",
  defaultSortKey,
  defaultSortDirection = "asc",
  getSortAriaLabel = defaultGetSortAriaLabel,
  onSortChange
}: TableProps<T>) {
  const resolvedAriaLabel = ariaLabel ?? (caption ? undefined : "Data table");

  const [sortState, setSortState] = React.useState<{ key: string; direction: TableSortDirection } | null>(() =>
    resolveInitialSortState(columns, defaultSortKey, defaultSortDirection)
  );

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

    return sourceEntries
      .sort((leftEntry, rightEntry) => {
        const leftValue = accessor(leftEntry.row);
        const rightValue = accessor(rightEntry.row);

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

  return (
    <div
      style={{
        border: "1px solid var(--aurora-border-default)",
        borderRadius: "var(--aurora-radius-md)",
        overflow: "auto"
      }}
    >
      <table
        aria-label={resolvedAriaLabel}
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
              const sorted = sortState?.key === key ? sortState.direction : undefined;
              const textAlign = column.align ?? "left";
              const headerLabel = typeof column.header === "string" ? column.header : key;
              const nextDirection: TableSortDirection = sorted === "asc" ? "desc" : "asc";
              const sortAriaLabel = getSortAriaLabel({ columnKey: key, columnHeader: headerLabel, nextDirection });
              const sortDisabled = loading || sortedEntries.length === 0;

              return (
                <th
                  key={key}
                  scope="col"
                  aria-sort={sorted ? (sorted === "asc" ? "ascending" : "descending") : "none"}
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
                  {column.sortable ? (
                    <button
                      type="button"
                      aria-label={sortAriaLabel}
                      disabled={sortDisabled}
                      onClick={() => {
                        if (sortDisabled) {
                          return;
                        }
                        setSortState({ key, direction: nextDirection });
                        onSortChange?.(key, nextDirection);
                      }}
                      style={{
                        border: 0,
                        background: "transparent",
                        color: "inherit",
                        font: "inherit",
                        cursor: sortDisabled ? "not-allowed" : "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: 0,
                        opacity: sortDisabled ? 0.64 : 1
                      }}
                    >
                      {column.header}
                      <span aria-hidden="true">{sorted === "asc" ? "▲" : sorted === "desc" ? "▼" : "↕"}</span>
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
                colSpan={columns.length}
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
                colSpan={columns.length}
                style={{
                  padding: "16px 12px",
                  color: "var(--aurora-text-secondary)",
                  textAlign: "center"
                }}
              >
                {emptyContent}
              </td>
            </tr>
          ) : (
            sortedEntries.map((entry, index) => {
              const row = entry.row;
              const fallbackKey = String(entry.sourceIndex);

              return (
                <tr
                  key={rowKey ? rowKey(row, entry.sourceIndex) : fallbackKey}
                  style={{ background: index % 2 === 0 ? "transparent" : "var(--aurora-surface-elevated)" }}
                >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    style={{
                      padding: "10px 12px",
                      borderBottom: "1px solid var(--aurora-border-default)",
                      color: "var(--aurora-text-primary)",
                      fontSize: "var(--aurora-font-size-sm)",
                      textAlign: column.align ?? "left"
                    }}
                  >
                    {column.render
                      ? column.render(row, index, entry.sourceIndex)
                      : String((row as Record<string, unknown>)[String(column.key)] ?? "")}
                  </td>
                ))}
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
