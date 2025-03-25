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

import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/ui/file-upload";
import { Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [FRYType, setFRYType] = useState("FRY14M");
  const [loading, setloading] = useState(false);

  return (
    <div className="flex flex-1 flex-col items-center justify-start md:justify-start px-4 py-4 sm:py-20 overflow-y-auto">
      <Card className="w-full max-w-4xl pt-0 overflow-hidden rounded-xl bg-muted/50">
        <CardHeader className="bg-border py-4">
          <CardTitle>Train model</CardTitle>
          <CardDescription>
            Upload your Frs documents + Data sets and click on Train Button.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select
            required
            onValueChange={(value) => {
              setFRYType(value);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select FRY Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>FRY Type</SelectLabel>
                <SelectItem value="FRY14M">FRY14M</SelectItem>
                <SelectItem value="FRY14Q">FRY14Q</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Separator className="mt-4 mb-2" />

          <div className="w-full flex flex-1 flex-col gap-2 md:gap-3 md:flex-row">
            <FileUploader
              id="FileUpload"
              value={files}
              reSelect={true}
              onValueChange={setFiles}
              dropzoneOptions={dropZoneConfig}
              className="relative rounded-lg p-2"
            >
              <Label
                htmlFor="FileUpload"
                className="text-muted-foreground pb-3"
              >
                Frs Documents
              </Label>
              <FileInput
                id="FileUpload"
                className="outline-dashed outline-2 outline-border"
              >
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

            <FileUploader
              value={files}
              reSelect={true}
              onValueChange={setFiles}
              dropzoneOptions={dropZoneConfig}
              className="relative rounded-lg p-2"
            >
              <Label
                htmlFor="FileUpload"
                className="text-muted-foreground pb-3"
              >
                Data Sets
              </Label>
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
                  // setFRYData(FRY14MData);
                } else if (FRYType === "FRY14Q") {
                  // setFRYData({});
                }
                setloading(false);
              }, 3000);
            }}
            className="transition-all duration-300 hover:ring-1 hover:ring-primary/90 hover:ring-offset-1 bg-red-500 hover:bg-red-800 cursor-pointer text-lg  h-auto text-white"
          >
            {loading ? "Loading..." : "Train"}
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
