"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

function getSnapshot() {
  if (typeof document === "undefined") {
    return false;
  }

  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

function subscribe(callback: () => void) {
  window.addEventListener("themechange", callback);

  return () => {
    window.removeEventListener("themechange", callback);
  };
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";
    const nextIsDark = nextTheme === "dark";

    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextTheme);

    window.dispatchEvent(new Event("themechange"));
  }

  return (
    <button type="button" onClick={toggleTheme} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Switch to light mode" : "Switch to dark mode"} className="flex h-9 w-9 items-center justify-center border border-black/10 bg-transparent text-[#111111] transition-colors hover:border-[#F97316] hover:text-[#F97316] dark:border-white/10 dark:text-white">
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
