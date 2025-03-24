"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFRYDataStore } from "@/lib/store/useFRYData";

const ReportTabs = () => {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname.substring(1));
  const { FRYdata } = useFRYDataStore();

  return (
    <Tabs
      value={decodedPathname}
      className="rounded-none flex w-full flex-col justify-start gap-6"
    >
      <TabsList className="rounded-none border-0 p-0 bg-primary-foreground flex flex-wrap h-auto w-auto">
        {Object.keys(FRYdata || {}).map((item, key) => {
          return (
            <TabsTrigger
              key={key}
              className="text-base w-auto h-min cursor-pointer py-1.5 sm:py-2
              rounded-none border-0 border-b-2 border-border data-[state=active]:!border-red-500
              hover:bg-input/30
              "
              value={item}
              asChild
            >
              <Link href={item}>{item}</Link>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
};

export default ReportTabs;
