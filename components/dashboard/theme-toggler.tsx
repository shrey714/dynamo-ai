"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { MonitorIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <ToggleGroup
      type="single"
      onValueChange={(val) => {
        setTheme(val);
      }}
      value={theme}
      variant="outline"
    >
      <ToggleGroupItem value="light" aria-label="Toggle light">
        <SunIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle dark">
        <MonitorIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="Toggle system">
        <MoonIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
