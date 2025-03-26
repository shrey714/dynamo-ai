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
import { useFRYDataStore } from "@/lib/store/useFRYData";
import { toast } from "sonner";
import { useApiStore } from "@/lib/store/useApiStore";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
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
  const { setFRYData } = useFRYDataStore();
  const [loading, setloading] = useState(false);
  const { apiEndpoint } = useApiStore.getState();
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const submitFile = async () => {
    if (!files || !files[0]) {
      toast.error("Please select a file first.");
      return;
    }
    if (!apiEndpoint) {
      toast.error("API Endpoint is not available");
      return;
    }

    const formData = new FormData();
    formData.append("file", files[0]);
    setloading(true);
    toast.promise(
      axios.post(`${apiEndpoint}/generate_anomalies_report`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
      {
        loading: "Generating new rules...",
        success: (response) => {
          if (response.data.status === "success") {
            setFRYData(JSON.parse(response.data.data));
            setloading(false);
            setIsSuccess(true);
            return "Report generated successfully!";
          } else {
            setloading(false);
            throw new Error("Failed to generate the report.");
          }
        },
        error: (error) => {
          setloading(false);
          console.error("Failed to generate the report:", error);
          return "Failed to generate the report. Please try again.";
        },
      }
    );
  };

  return (
    <>
      <AlertDialog open={isSuccess} onOpenChange={setIsSuccess}>
        <AlertDialogContent className="w-6xl max-w-max">
          <AlertDialogHeader>
            <AlertDialogTitle>
              FRY14Q Reports Successfully Generated !
            </AlertDialogTitle>
            <AlertDialogDescription>
              Your FRY14Q reports have been generated. Navigate to the reports
              page to review them, or reset the form to start over.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setFiles([]);
                setFRYData([]);
                setIsSuccess(false);
              }}
            >
              Reset
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                router.push("/report");
              }}
              className="bg-red-500 text-white cursor-pointer hover:bg-orange-700"
            >
              Get Reports
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex flex-col gap-8 items-center justify-start px-4 py-[5svh]">
        <Tabs
          value={"FRY14Q"}
          className="flex flex-col items-center justify-start w-full"
        >
          <TabsList className="p-1.5 h-auto max-w-md grid w-full gap-2 grid-cols-1 bg-border">
            <TabsTrigger
              className="cursor-pointer data-[state=inactive]:hover:bg-secondary data-[state=active]:!bg-red-500 data-[state=active]:!text-white py-2.5 text-base"
              value="FRY14Q"
              onClick={() => {}}
            >
              FRY14Q H1 Schedule Data validation
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Card className="w-full max-w-4xl pt-0 rounded-xl bg-muted/50 overflow-hidden">
          <CardHeader className="py-4 bg-border">
            <CardTitle>FRY14Q</CardTitle>
            <CardDescription>
              Upload your FRY14Q document and click on Get Reports.
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
                      <FileUploaderItem
                        key={i}
                        index={i}
                        className="py-2 h-auto"
                      >
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
              disabled={(files?.length ? false : true) || loading}
              onClick={() => {
                submitFile();
              }}
              className="transition-all duration-300 hover:ring-1 hover:ring-primary/90 hover:ring-offset-1 bg-red-500 hover:bg-red-800 cursor-pointer text-lg  h-auto text-white"
            >
              {loading ? "Loading..." : `Upload datasets`}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
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
