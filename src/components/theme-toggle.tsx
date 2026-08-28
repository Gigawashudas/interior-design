"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useSyncExternalStore } from "react";

const THEME_KEY = "theme";

function getTheme(): "light" | "dark" {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("storage", callback);
  };
}

function getServerSnapshot() {
  return "light" as const;
}

function getClientSnapshot() {
  return getTheme();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  const isDark = theme === "dark";

  const toggleTheme = useCallback(() => {
    const nextTheme = isDark ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");

    localStorage.setItem(THEME_KEY, nextTheme);

    window.dispatchEvent(new Event("storage"));
  }, [isDark]);

  return (
    <button type="button" onClick={toggleTheme} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Switch to light mode" : "Switch to dark mode"} className="flex h-9 w-9 items-center justify-center border border-black/10 bg-transparent text-[#111111] transition-colors hover:border-[#F97316] hover:text-[#F97316] dark:border-white/10 dark:text-white">
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
