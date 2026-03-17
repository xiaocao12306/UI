import * as React from "react";

export type TableColumn<T> = {
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  render?: (row: T, rowIndex: number) => React.ReactNode;
};

export type TableProps<T> = {
  columns: Array<TableColumn<T>>;
  data: T[];
  rowKey?: (row: T, rowIndex: number) => string;
};

export function Table<T>({ columns, data, rowKey }: TableProps<T>) {
  return (
    <div
      style={{
        border: "1px solid var(--aurora-border-default)",
        borderRadius: "var(--aurora-radius-md)",
        overflow: "auto"
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                style={{
                  textAlign: "left",
                  color: "var(--aurora-text-secondary)",
                  background: "var(--aurora-surface-elevated)",
                  borderBottom: "1px solid var(--aurora-border-default)",
                  padding: "10px 12px",
                  fontSize: "var(--aurora-font-size-sm)",
                  fontWeight: "var(--aurora-font-weight-medium)",
                  width: column.width
                }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={rowKey ? rowKey(row, index) : String(index)}>
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  style={{
                    padding: "10px 12px",
                    borderBottom: "1px solid var(--aurora-border-default)",
                    color: "var(--aurora-text-primary)",
                    fontSize: "var(--aurora-font-size-sm)"
                  }}
                >
                  {column.render ? column.render(row, index) : String((row as Record<string, unknown>)[String(column.key)] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
