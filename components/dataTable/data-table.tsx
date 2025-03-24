"use client";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableViewOptions } from "./data-table-view-options";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { exportTableToCSV, generateColumns } from "@/lib/utils";
// import { FRY14MData } from "@/lib/data";
import { useFRYDataStore } from "@/lib/store/useFRYData";

interface dataTable {
  reportType: string;
}

export function DataTable({ reportType }: dataTable) {
  const { FRYdata } = useFRYDataStore();

  const data =
    FRYdata && typeof FRYdata === "object" && reportType in FRYdata
      ? (FRYdata as Record<string, never>)[reportType]
      : [];

  const columns = generateColumns(data);

  const table = useReactTable({
    data,
    columns,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
  });

  return (
    <div className="flex flex-col pt-2 gap-2 px-2 overflow-y-hidden h-[calc(100svh-110px)]">
      <div className="flex items-center justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            exportTableToCSV(table, {
              filename: "Report",
            })
          }
        >
          <Download />
          Export
        </Button>
        <DataTableViewOptions table={table} />
      </div>
      <div className="bg-accent border rounded-md overflow-hidden flex flex-1 w-full h-full">
        <Table>
          <TableHeader className="bg-primary-foreground">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-muted-foreground"
                    >
                      {/* <TableHead key={header.id} className="text-muted-foreground text-wrap max-h-44 max-w-28 whitespace-normal" ></TableHead> */}
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => {
                    const isMetric = cell.column.id == "metric";
                    return (
                      <TableCell
                        className={` ${
                          isMetric
                            ? "bg-primary-foreground text-muted-foreground font-medium"
                            : ""
                        } `}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
