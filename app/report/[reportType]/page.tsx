import { DataTable } from "@/components/dataTable/data-table";
import { generateColumns } from "@/lib/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ reportType: string }>;
}) {
  const { reportType } = await params;
  console.log(reportType);
  return <DataTable columns={generateColumns([])} data={Object.values([])} />;
}
