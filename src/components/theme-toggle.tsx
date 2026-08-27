"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@teispace/next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button type="button" aria-label="Toggle theme" className="flex h-9 w-9 items-center justify-center border border-white/20 text-white">
        <span className="h-4.25 w-4.25" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button type="button" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} className="flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#F97316] hover:text-[#F97316]">
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
