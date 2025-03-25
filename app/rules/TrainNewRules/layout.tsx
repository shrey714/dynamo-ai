import { ReactNode } from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Train Model",
  description: "Train Model",
};

export default async function RootLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return <>{children}</>;
}
