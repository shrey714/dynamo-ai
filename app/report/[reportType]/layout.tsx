import { ReactNode } from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Reports",
  description: "Reports",
};

export default async function RootLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return <>{children}</>;
}
