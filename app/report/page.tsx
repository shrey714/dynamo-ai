import { DataTable } from "@/components/dataTable/data-table";

export default async function Page({
  params,
}: {
  params: Promise<{ reportType: string }>;
}) {
  const { reportType } = await params;
  return (
    <DataTable
      reportType={decodeURIComponent(true ? "All Schedules" : reportType)}
    />
  );
}
