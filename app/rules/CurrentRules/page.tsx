"use client";
import { DataTable } from "@/components/dataTable/data-table";
import { generateColumns } from "@/lib/utils";
import rules from "@/public/Rules.json";

export default function Page() {
  return (
    <DataTable
      columns={generateColumns(Object.values(JSON.parse(rules)))}
      data={Object.values(JSON.parse(rules))}
    />
  );
}
