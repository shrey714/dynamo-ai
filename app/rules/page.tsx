"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-start md:justify-start px-4 py-4 sm:py-20 overflow-y-auto">
      <Card className="w-full max-w-4xl pt-0 overflow-hidden rounded-xl bg-muted/50">
        <CardHeader className="bg-border py-4">
          <CardTitle>Rules</CardTitle>
          <CardDescription>Rules.....</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full flex flex-1 flex-col gap-2 md:gap-3 md:flex-row">
            <Button className="flex flex-1 h-28" asChild variant={"secondary"}>
              <Link href={"/rules/CurrentRules"}>Current Rules</Link>
            </Button>
            <Button className="flex flex-1 h-28" asChild variant={"secondary"}>
              <Link href={"/rules/TrainNewRules"}>Train New Rules</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
