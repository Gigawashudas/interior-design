"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function getInitialTheme(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    return true;
  }

  if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
    return false;
  }

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (systemDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return systemDark;
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  function toggleTheme() {
    const newTheme = !isDark;

    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button type="button" onClick={toggleTheme} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Switch to light mode" : "Switch to dark mode"} className="flex h-9 w-9 items-center justify-center text-white transition-colors hover:text-[#F97316]">
      {isDark ? <Sun size={19} strokeWidth={1.5} /> : <Moon size={19} strokeWidth={1.5} />}
    </button>
  );
}

export default ThemeToggle;
