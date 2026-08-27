"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button aria-label="Toggle theme" className="h-9 w-9" />;
  }

  const isDark = theme === "dark";

  return (
    <button onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} className="flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#F97316] hover:text-[#F97316]">
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
