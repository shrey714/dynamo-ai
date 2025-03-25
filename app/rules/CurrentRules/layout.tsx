import { ReactNode } from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Current Rules",
  description: "Current Rules",
};

export default async function RootLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return <>{children}</>;
}
