"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative rounded-md bg-transparent p-2 text-muted transition-colors hover:bg-accent/10 hover:text-accent"
      aria-label="Toggle theme"
    >
      {!mounted ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
      ) : isDark ? (
        <Moon className="h-[1.2rem] w-[1.2rem] text-blue-400" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
