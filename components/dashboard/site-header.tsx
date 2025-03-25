"use client";

import { SidebarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { LinkHandeler } from "./link-handeler";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex sticky top-0 z-50 w-full items-center border-b-5 border-b-amber-300 bg-red-500">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Image
          src="/wells_logo.webp"
          alt="logo"
          width={200}
          height={100}
          priority
          className="w-32 sm:w-52 h-3.5 sm:h-[21.73px]"
        />

        <Separator
          orientation="vertical"
          className="sm:!mx-1 rounded-full !h-[40%] sm:!h-[55%] !w-[2px] sm:!w-[3px] bg-white"
        />

        <p className="font-semibold text-base sm:text-xl flex flex-1 text-white">
          AI_Dynamos
        </p>
        <LinkHandeler />
        <Button
          className="h-8 w-8 text-white"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
      </div>
    </header>
  );
}
