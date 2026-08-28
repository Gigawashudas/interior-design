"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function getInitialDarkMode() {
  if (typeof window === "undefined") {
    return false;
  }

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "dark") {
    return true;
  }

  if (savedTheme === "light") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialDarkMode);

  function toggleTheme() {
    const nextIsDark = !isDark;

    setIsDark(nextIsDark);

    if (nextIsDark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }

  return (
    <button type="button" onClick={toggleTheme} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Switch to light mode" : "Switch to dark mode"} className="flex h-9 w-9 items-center justify-center border border-black/10 bg-transparent text-[#111111] transition-colors hover:border-[#F97316] hover:text-[#F97316] dark:border-white/10 dark:text-white">
      {isDark ? <Sun size={16} /> : <Moon size={16} />}{" "}
    </button>
  );
}
