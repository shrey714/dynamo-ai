"use client";

import { useEffect, useState } from "react";
import { DataTable } from "../_components/data-table";
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
import axios from "axios";
import Spinner from "@/components/spinner";
import { useApiStore } from "@/lib/store/useApiStore";
import { toast } from "sonner";

type RowData = Record<string, unknown>;

export default function Page() {
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);
  const [loading, setloading] = useState(true);
  const [ruleData, setRuleData] = useState([]);
  const { apiEndpoint } = useApiStore.getState();

  useEffect(() => {
    if (apiEndpoint) {
      try {
        axios
          .get(`${apiEndpoint}/get_current_rules`)
          .then((response) => {
            setRuleData(JSON.parse(response.data));
            setloading(false);
          })
          .catch((err) => {
            console.log("Failed to fetch data", err);
            setloading(false);
          });
      } catch (error) {
        console.log("error : ", error);
        setloading(false);
      }
    } else {
      toast.error("API Endpoint is not available");
      setloading(false);
    }
  }, [apiEndpoint]);

  return (
    <>
      {loading ? (
        <div className="w-full h-full flex flex-1 items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {selectedRow && (
            <Dialog
              open={!!selectedRow}
              onOpenChange={() => setSelectedRow(null)}
            >
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
            columns={generateColumns(Object.values(ruleData))}
            data={Object.values(ruleData).slice(1)}
            onRowClick={(row) => setSelectedRow(row.original as RowData)}
          />
        </>
      )}
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
            <div className={`max-w-[300px] truncate cursor-pointer`}>
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
