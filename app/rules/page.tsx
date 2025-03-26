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
import { BrainCogIcon, ListChecksIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-start md:justify-start px-4 py-4 sm:py-20 overflow-y-auto">
      <Card className="w-full max-w-4xl pt-0 overflow-hidden rounded-xl bg-muted/50">
        <CardHeader className="bg-border py-4">
          <CardTitle>Rule Management</CardTitle>
          <CardDescription>
            View current rules or train new rules to enhance system accuracy.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full flex flex-1 flex-col gap-2 md:gap-3 md:flex-row">
            <Button
              className="flex flex-1 h-auto text-lg p-4"
              asChild
              variant={"secondary"}
            >
              <Link
                href={"/rules/CurrentRules"}
                className="flex flex-col flex-1 text-2xl gap-3"
              >
                <ListChecksIcon style={{ width: "3rem", height: "3rem" }} />
                Current Rules
              </Link>
            </Button>
            <Button
              className="flex flex-1 h-auto text-lg p-4"
              asChild
              variant={"secondary"}
            >
              <Link
                href={"/rules/TrainNewRules"}
                className="flex flex-col flex-1 text-2xl gap-3"
              >
                <BrainCogIcon style={{ width: "3rem", height: "3rem" }} />
                Train New Rules
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
