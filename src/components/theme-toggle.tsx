"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");

    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <button type="button" onClick={toggleTheme} aria-label="Toggle dark mode" className="flex h-9 w-9 items-center justify-center border border-black/10 text-[#111111] transition-colors hover:border-[#F97316] hover:text-[#F97316] dark:border-white/10 dark:text-white">
      <span className="hidden dark:block">
        <Sun size={16} strokeWidth={1.7} />
      </span>

      <span className="block dark:hidden">
        <Moon size={16} strokeWidth={1.7} />
      </span>
    </button>
  );
}

export default ThemeToggle;
