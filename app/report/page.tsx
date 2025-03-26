"use client";
import { DataTable } from "./_components/data-table";
import { useFRYDataStore } from "@/lib/store/useFRYData";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/dataTable/data-table-column-header";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type RowData = Record<string, unknown>;

export default function Page() {
  const { FRYdata } = useFRYDataStore();
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);
  return (
    <>
      {selectedRow && (
        <Dialog open={!!selectedRow} onOpenChange={() => setSelectedRow(null)}>
          <DialogContent className="sm:max-w-4xl p-6 max-h-[90svh] overflow-y-auto">
            <DialogTitle>Rule Data</DialogTitle>
            <DialogDescription hidden />
            <table className="w-full overflow-hidden border bg-muted rounded-lg">
              <tbody className="w-full border-border border rounded-lg border-collapse overflow-hidden">
                {Object.entries(selectedRow).map(([key, value], index) => (
                  <tr key={index}>
                    <th className="bg-border border-border border border-collapse p-2">
                      {key}
                    </th>
                    <td className="border-border border border-collapse p-2">
                      {String(value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DialogContent>
        </Dialog>
      )}

      <DataTable
        columns={generateColumns(FRYdata)}
        data={Object.values(FRYdata)}
        onRowClick={(row) => setSelectedRow(row.original as RowData)}
      />
    </>
  );
}

const generateColumns = (data: RowData[]): ColumnDef<unknown>[] => {
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
      const value = String(getValue() ?? "");
      const maxLength = 50;

      return (
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <div
              className={`max-w-[300px] truncate cursor-pointer ${
                value === "Non-Compliant" ? "text-red-500" : ""
              }`}
            >
              {value.length > maxLength
                ? `${value.slice(0, maxLength)}...`
                : value}
            </div>
          </TooltipTrigger>
          {value.length > maxLength && (
            <TooltipContent className="max-w-xs">{value}</TooltipContent>
          )}
        </Tooltip>
      );
    },
  }));
};
