"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@teispace/next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <button type="button" aria-label="Toggle theme" className="flex h-9 w-9 items-center justify-center border border-white/20 text-white">
        <span className="h-4.25 w-4.25" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button type="button" onClick={toggleTheme} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} className="flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#F97316] hover:text-[#F97316]">
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
