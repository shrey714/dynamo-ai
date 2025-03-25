"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/ui/file-upload";
import { Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useFRYTypeStore } from "@/lib/store/useFRYTypeStore";
import { useFRYDataStore } from "@/lib/store/useFRYData";
import { FRY14MData } from "@/lib/data";

const dropZoneConfig = {
  maxFiles: 1,
  maxSize: 1024 * 1024 * 4,
  accept: {
    "text/csv": [".csv"],
    "application/vnd.ms-excel": [".xls"],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
      ".xlsx",
    ],
  },
  multiple: true,
};

export default function Page() {
  const [files, setFiles] = useState<File[] | null>(null);
  const { FRYType, setFRYType } = useFRYTypeStore();
  const { setFRYData } = useFRYDataStore();
  const [loading, setloading] = useState(false);
  return (
    <div className="flex flex-col gap-8 items-center justify-start px-4 py-[5svh]">
      <Tabs
        value={FRYType}
        className="flex flex-col items-center justify-start w-full"
      >
        <TabsList className="p-1.5 h-auto max-w-xl grid w-full gap-2 grid-cols-2 bg-border">
          <TabsTrigger
            className="cursor-pointer data-[state=inactive]:hover:bg-secondary data-[state=active]:!bg-red-500 data-[state=active]:!text-white py-2.5 text-base"
            value="FRY14M"
            onClick={() => {
              if (FRYType !== "FRY14M") setFiles(null);
              setFRYType("FRY14M");
            }}
          >
            FRY14M
          </TabsTrigger>
          <TabsTrigger
            className="cursor-pointer data-[state=inactive]:hover:bg-secondary data-[state=active]:!bg-red-500 data-[state=active]:!text-white py-2.5 text-base"
            value="FRY14Q"
            onClick={() => {
              if (FRYType !== "FRY14Q") setFiles(null);
              setFRYType("FRY14Q");
            }}
          >
            FRY14Q
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Card className="w-full max-w-4xl pt-0 rounded-xl bg-muted/50 overflow-hidden">
        <CardHeader className="py-4 bg-border">
          <CardTitle>{FRYType}</CardTitle>
          <CardDescription>
            Upload your {FRYType} document and click on Get Reports.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <FileUploader
              value={files}
              reSelect={true}
              onValueChange={setFiles}
              dropzoneOptions={dropZoneConfig}
              className="relative rounded-lg p-2"
            >
              <FileInput className="outline-dashed outline-2 outline-border">
                <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
                  <FileSvgDraw />
                </div>
              </FileInput>
              <FileUploaderContent className="bg-accent rounded-sm">
                {files &&
                  files.length > 0 &&
                  files.map((file, i) => (
                    <FileUploaderItem key={i} index={i} className="py-2 h-auto">
                      <Paperclip className="h-4 w-4 stroke-current" />
                      <span>{file.name}</span>
                    </FileUploaderItem>
                  ))}
              </FileUploaderContent>
            </FileUploader>
          </div>
        </CardContent>
        <CardFooter className="items-center justify-center">
          <Button
            disabled={files?.length ? false : true}
            onClick={() => {
              setloading(true);
              setTimeout(() => {
                if (FRYType === "FRY14M") {
                  setFRYData(FRY14MData);
                } else if (FRYType === "FRY14Q") {
                  setFRYData({});
                }
                setloading(false);
              }, 3000);
            }}
            className="transition-all duration-300 hover:ring-1 hover:ring-primary/90 hover:ring-offset-1 bg-red-500 hover:bg-red-800 cursor-pointer text-lg  h-auto text-white"
          >
            {loading ? "Loading..." : `Get ${FRYType} Reports`}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

const FileSvgDraw = () => {
  return (
    <>
      <svg
        className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span>
        &nbsp; or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        .csv or .xlsx or .xls
      </p>
    </>
  );
};
