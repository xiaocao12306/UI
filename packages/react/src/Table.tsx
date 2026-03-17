import * as React from "react";

export type TableAlign = "left" | "center" | "right";
export type TableSortDirection = "asc" | "desc";

export type TableColumn<T> = {
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
};

export type TableProps<T> = {
  columns: Array<TableColumn<T>>;
  data: T[];
  rowKey?: (row: T, rowIndex: number) => string;
  caption?: React.ReactNode;
  ariaLabel?: string;
  emptyContent?: React.ReactNode;
  defaultSortKey?: string;
  defaultSortDirection?: TableSortDirection;
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
  emptyContent = "No data available.",
  defaultSortKey,
  defaultSortDirection = "asc",
  onSortChange
}: TableProps<T>) {
  const resolvedAriaLabel = ariaLabel ?? (caption ? undefined : "Data table");

  const [sortState, setSortState] = React.useState<{ key: string; direction: TableSortDirection } | null>(() =>
    resolveInitialSortState(columns, defaultSortKey, defaultSortDirection)
  );

  const sortedData = React.useMemo(() => {
    if (!sortState) {
      return data;
    }

    const column = columns.find((item) => String(item.key) === sortState.key);
    if (!column?.sortable) {
      return data;
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

    return [...data].sort((left, right) => {
      const leftValue = accessor(left);
      const rightValue = accessor(right);

      const normalizedLeft = leftValue instanceof Date ? leftValue.getTime() : leftValue;
      const normalizedRight = rightValue instanceof Date ? rightValue.getTime() : rightValue;

      if (normalizedLeft < normalizedRight) {
        return sortState.direction === "asc" ? -1 : 1;
      }
      if (normalizedLeft > normalizedRight) {
        return sortState.direction === "asc" ? 1 : -1;
      }
      return 0;
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
      <table aria-label={resolvedAriaLabel} style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
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
              const nextDirectionLabel = nextDirection === "asc" ? "ascending" : "descending";

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
                      aria-label={`${headerLabel} sort ${nextDirectionLabel}`}
                      onClick={() => {
                        setSortState({ key, direction: nextDirection });
                        onSortChange?.(key, nextDirection);
                      }}
                      style={{
                        border: 0,
                        background: "transparent",
                        color: "inherit",
                        font: "inherit",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: 0
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
          {sortedData.length === 0 ? (
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
            sortedData.map((row, index) => (
              <tr key={rowKey ? rowKey(row, index) : String(index)} style={{ background: index % 2 === 0 ? "transparent" : "var(--aurora-surface-elevated)" }}>
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
                    {column.render ? column.render(row, index) : String((row as Record<string, unknown>)[String(column.key)] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
