import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ColumnDef, Table } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/dataTable/data-table-column-header";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (value: number) => value.toFixed(2);

export const formatObject = (data: Record<string | number, number>) =>
  Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");

export function exportTableToCSV<TData>(
  /**
   * The table to export.
   * @type Table<TData>
   */
  table: Table<TData>,
  opts: {
    /**
     * The filename for the CSV file.
     * @default "table"
     * @example "tasks"
     */
    filename?: string;
    /**
     * Whether to export only the selected rows.
     * @default false
     */
    onlySelected?: boolean;
  } = {}
): void {
  const { filename = "table", onlySelected = false } = opts;

  // Retrieve headers (column names)
  const headers = table.getAllLeafColumns().map((column) => column.id);

  // Build CSV content
  const csvContent = [
    headers.join(","),
    ...(onlySelected
      ? table.getFilteredSelectedRowModel().rows
      : table.getRowModel().rows
    ).map((row) =>
      headers
        .map((header) => {
          const cellValue = row.getValue(header);
          // Handle values that might contain commas or newlines
          return typeof cellValue === "string"
            ? `"${cellValue.replace(/"/g, '""')}"`
            : cellValue;
        })
        .join(",")
    ),
  ].join("\n");

  // Create a Blob with CSV content
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  // Create a link and trigger the download
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const generateColumns = (
  data: Record<string, unknown>[]
): ColumnDef<unknown>[] => {
  if (data.length === 0) return [];

  return Object.keys(
    data.reduce(
      (max, obj) =>
        Object.keys(obj).length > Object.keys(max).length ? obj : max,
      {}
    )
  ).map((key) => ({
    accessorKey: key,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())}
      />
    ),
    cell: ({ getValue }) => {
      const value = getValue();
      return typeof value === "number"
        ? formatNumber(value)
        : parseIfJson(String(value)); // Format numbers
    },
  }));
};

function parseIfJson(value: string) {
  try {
    // Trim spaces and check if the value starts with '{' and ends with '}'
    if (
      typeof value === "string" &&
      value.trim().startsWith("{") &&
      value.trim().endsWith("}")
    ) {
      return (
        <div className="flex flex-col">
          {Object.keys(JSON.parse(value.replace(/'/g, '"'))).map(
            (item, index) => (
              <p key={index}>
                {item} : {JSON.parse(value.replace(/'/g, '"'))[item]}
              </p>
            )
          )}
        </div>
      );
    } else {
      return value;
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  // return value; // Return original value if parsing fails
}
