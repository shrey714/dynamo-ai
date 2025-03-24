"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { MonitorIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEffect, useState } from "react";

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [shrey, setshrey] = useState<string | undefined>();
  useEffect(() => {
    setshrey(theme);
  }, [theme]);

  return (
    <ToggleGroup
      type="single"
      onValueChange={(val) => {
        setTheme(val);
      }}
      value={shrey}
      variant="outline"
    >
      <ToggleGroupItem value="light" aria-label="light">
        <SunIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="system">
        <MonitorIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="dark">
        <MoonIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
