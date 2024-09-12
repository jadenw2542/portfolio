"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="relative flex items-center justify-center 
          h-9 w-9 lg-pc:h-20 lg-pc:w-20 lg-pc:rounded-xl
          whitespace-nowrap rounded-md text-sm font-medium transition-colors 
          focus-visible:outline-none 
          disabled:pointer-events-none disabled:opacity-50 border border-input bg-background 
          shadow-sm hover:bg-accent hover:text-accent-foreground"
        >
          <Sun
            className="absolute transition-all h-[1.2rem] w-[1.2rem] lg-pc:h-8 lg-pc:w-8 dark:rotate-90 dark:scale-0"
          />
          <Moon
            className="absolute transition-all h-[1.2rem] w-[1.2rem] lg-pc:h-8 lg-pc:w-8  rotate-90 scale-0 dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="lg-pc:rounded-2xl lg-pc:h-28 lg-pc:w-72 lg-pc:text-5xl" onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className="lg-pc:rounded-2xl lg-pc:h-28 lg-pc:w-72 lg-pc:text-5xl"  onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="lg-pc:rounded-2xl lg-pc:h-28 lg-pc:w-72 lg-pc:text-5xl"  onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
