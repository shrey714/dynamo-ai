import { ReactNode } from "react";

import type { Metadata } from "next";
import ReportTabs from "@/components/dashboard/report-tabs";
export const metadata: Metadata = {
  title: "Train Model",
  description: "Train Model",
};

export default async function RootLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <>
      <ReportTabs />
      {children}
    </>
  );
}
