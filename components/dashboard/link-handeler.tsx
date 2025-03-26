import { useState, useEffect } from "react";
import { useApiStore } from "@/lib/store/useApiStore"; // Import Zustand store
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link2 } from "lucide-react";

export function LinkHandeler() {
  const { apiEndpoint, setApiEndpoint } = useApiStore();
  const [inputValue, setInputValue] = useState(apiEndpoint);

  // Load endpoint from localStorage on mount
  useEffect(() => {
    const storedEndpoint = localStorage.getItem("apiEndpoint");
    if (storedEndpoint) {
      setApiEndpoint(storedEndpoint);
      setInputValue(storedEndpoint);
    }
  }, [setApiEndpoint]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setApiEndpoint(e.target.value);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="h-8 w-8 text-white bg-transparent cursor-pointer"
          variant="ghost"
          size="icon"
        >
          <Link2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" className="w-4xl">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">API Endpoint :</h4>
            <p className="text-sm text-muted-foreground">
              Update or set the latest API Endpoint.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="endpoint">Endpoint</Label>
              <Input
                id="endpoint"
                value={inputValue}
                onChange={handleChange}
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
