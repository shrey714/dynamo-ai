"use client";

import * as React from "react";
import { ChevronRight, Inbox, Newspaper } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./theme-toggler";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "@/lib/data";
import { useFRYTypeStore } from "@/lib/store/useFRYTypeStore";
import { useFRYDataStore } from "@/lib/store/useFRYData";

const isSubPath = (pathname: string, route: string) => {
  // const formattedPathname = pathname.endsWith("/") ? pathname : pathname + "/";
  // const formattedRoute = route.endsWith("/") ? route : route + "/";
  // console.log("path--", pathname, route);
  return pathname === route;
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname.substring(1));

  const { FRYType } = useFRYTypeStore();
  const { FRYdata } = useFRYDataStore();
  return (
    <Sidebar
      className="top-[var(--header-height)] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarContent className="py-3">
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {pages.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={isSubPath(pathname, item.url)}
                    className="pl-3 overflow-hidden h-auto text-lg font-medium"
                  >
                    <Link
                      href={item.url}
                      className="flex flex-1 flex-row items-center gap-3"
                    >
                      <span
                        className={`w-1 absolute -left-0.5 bg-red-500 rounded-full transition-all duration-300 ease-in-out ${
                          isSubPath(pathname, item.url)
                            ? "h-2/3 opacity-100"
                            : "h-0 opacity-0"
                        }`}
                      ></span>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight
                        className={`ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 ${
                          isSubPath(pathname, item.url) ? "visible" : "hidden"
                        }`}
                      />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuButton
                disabled
                tooltip={""}
                isActive={false}
                className="pl-3 overflow-hidden h-auto text-lg font-medium"
              >
                {FRYType + " Report"}
              </SidebarMenuButton>
              {Object.keys(FRYdata || {})?.length > 0 ? (
                <SidebarMenuSub className="mb-2">
                  {Object.keys(FRYdata || {}).map((item) => {
                    return (
                      <SidebarMenuSubItem key={item}>
                        <SidebarMenuSubButton
                          asChild
                          className="overflow-visible h-auto px-0"
                          isActive={isSubPath(decodedPathname, item)}
                        >
                          <Link
                            href={item}
                            className="flex flex-1 flex-row items-center gap-3 px-2 py-2 h-auto text-base font-medium"
                          >
                            <span
                              className={`w-1 absolute -left-0.5 bg-red-500 rounded-full transition-all duration-300 ease-in-out ${
                                isSubPath(decodedPathname, item)
                                  ? "h-2/3 opacity-100"
                                  : "h-0 opacity-0"
                              }`}
                            ></span>
                            {item && <Newspaper />}
                            <span>{item}</span>
                            <ChevronRight
                              className={`ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 ${
                                isSubPath(decodedPathname, item)
                                  ? "visible"
                                  : "hidden"
                              }`}
                            />
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              ) : (
                <SidebarMenuButton className="w-full h-28 py-0 px-2">
                  <div className="flex flex-1 bg-muted rounded-lg h-full items-center justify-center">
                    <Inbox className="h-7 w-7" />
                  </div>
                </SidebarMenuButton>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
