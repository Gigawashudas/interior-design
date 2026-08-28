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
    const nextIsDark = !isDark;

    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");

    window.dispatchEvent(new Event("themechange"));
  }

  return (
    <button type="button" onClick={toggleTheme} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Switch to light mode" : "Switch to dark mode"} className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-black/[0.03] shadow-sm transition-all duration-300 hover:border-[#F97316] hover:bg-[#F97316]/10 hover:shadow-md dark:border-white/20 dark:bg-white/[0.05] dark:hover:border-[#F97316] dark:hover:bg-[#F97316]/10">
      {isDark ? <Sun size={19} strokeWidth={1.8} className="text-[#F97316] transition-transform duration-300" /> : <Moon size={19} strokeWidth={1.8} className="text-[#F97316] transition-transform duration-300" />}
    </button>
  );
}
