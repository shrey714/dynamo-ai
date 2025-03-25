"use client";

import * as React from "react";
import { ChevronRight, Inbox, Newspaper, X } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
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
// import { useFRYTypeStore } from "@/lib/store/useFRYTypeStore";
// import { useFRYDataStore } from "@/lib/store/useFRYData";
import { useColumnsActiveStore } from "@/lib/store/useColumnsActive";
import { Button } from "../ui/button";

const isSubPath = (pathname: string, route: string) => {
  // const formattedPathname = pathname.endsWith("/") ? pathname : pathname + "/";
  // const formattedRoute = route.endsWith("/") ? route : route + "/";
  return pathname === route;
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  // const decodedPathname = decodeURIComponent(pathname.substring(1));

  // const { FRYType } = useFRYTypeStore();
  // const { FRYdata } = useFRYDataStore();
  const { columns, removeColumn } = useColumnsActiveStore();
  return (
    <Sidebar
      className="top-[var(--header-height)] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader className="pt-5 pb-0">
        <SidebarMenu>
          {pages.map((item, index) => (
            <React.Fragment key={index}>
              <SidebarMenuItem key={index}>
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={isSubPath(pathname, item.url)}
                  className="pl-3 overflow-hidden h-auto text-lg font-medium py-0"
                >
                  <Link
                    href={item.url}
                    className="flex flex-1 flex-row items-center gap-3 py-2"
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
              <SidebarMenuSub className="py-0">
                {item.item?.map((subItem, key) => (
                  <SidebarMenuSubItem key={key}>
                    <SidebarMenuSubButton
                      asChild
                      className="overflow-visible h-auto px-0"
                      isActive={isSubPath(pathname, subItem.url)}
                    >
                      <Link
                        href={subItem.url}
                        className="flex flex-1 flex-row items-center gap-3 px-2 py-2 h-auto text-base font-medium"
                      >
                        <span
                          className={`w-1 absolute -left-0.5 bg-red-500 rounded-full transition-all duration-300 ease-in-out ${
                            isSubPath(pathname, subItem.url)
                              ? "h-2/3 opacity-100"
                              : "h-0 opacity-0"
                          }`}
                        ></span>
                        {subItem.icon && <subItem.icon />}
                        <span>{subItem.title}</span>
                        <ChevronRight
                          className={`ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 ${
                            isSubPath(pathname, subItem.url)
                              ? "visible"
                              : "hidden"
                          }`}
                        />
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </React.Fragment>
          ))}
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="py-0">
        <SidebarGroup className="py-0">
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {columns.length > 0 ? (
                <SidebarMenuSub className="mb-2">
                  {columns.toReversed().map((item, key) => {
                    const link = `/report/${String(item)}`;
                    return (
                      <SidebarMenuSubItem key={key}>
                        <SidebarMenuSubButton
                          asChild
                          className="overflow-visible h-auto px-0"
                          isActive={isSubPath(pathname, link)}
                        >
                          <Link
                            href={link}
                            className="flex flex-1 flex-row items-center gap-3 px-2 py-2 h-auto text-base font-medium"
                          >
                            <span
                              className={`w-1 absolute -left-0.5 bg-red-500 rounded-full transition-all duration-300 ease-in-out ${
                                isSubPath(pathname, link)
                                  ? "h-2/3 opacity-100"
                                  : "h-0 opacity-0"
                              }`}
                            ></span>
                            {item && <Newspaper />}
                            <span className="w-full">{item}</span>
                            <Button
                              variant={"secondary"}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                removeColumn(item);
                              }}
                              className={`text-red-500 h-auto !p-[2px] cursor-pointer ${
                                isSubPath(pathname, link) ? "hidden" : ""
                              }`}
                            >
                              <X />
                            </Button>
                            <ChevronRight
                              className={`ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 ${
                                isSubPath(pathname, link) ? "visible" : "hidden"
                              }`}
                            />
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              ) : (
                <SidebarMenuSub className="mb-2 h-28">
                  <div className="flex flex-1 bg-muted rounded-lg h-full items-center justify-center">
                    <Inbox className="h-7 w-7" />
                  </div>
                </SidebarMenuSub>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex w-full items-center">
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
