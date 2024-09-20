'use client';
import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="border-input bg-background hover:bg-accent hover:text-accent-foreground relative flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md border text-sm font-medium shadow-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 lg-pc:h-20 lg-pc:w-20 lg-pc:rounded-xl">
          <Sun className="absolute h-[1.2rem] w-[1.2rem] transition-all dark:rotate-90 dark:scale-0 lg-pc:h-8 lg-pc:w-8" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 lg-pc:h-8 lg-pc:w-8" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="lg-pc:h-28 lg-pc:w-72 lg-pc:rounded-2xl lg-pc:text-5xl"
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="lg-pc:h-28 lg-pc:w-72 lg-pc:rounded-2xl lg-pc:text-5xl"
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="lg-pc:h-28 lg-pc:w-72 lg-pc:rounded-2xl lg-pc:text-5xl"
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
