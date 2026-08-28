"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-6 lg:px-8 lg:py-7">
        {/* LOGO */}
        <Link href="/" onClick={closeMenu} className="text-lg font-bold tracking-tighter text-white sm:text-xl">
          FORM<span className="text-[#F97316]">/</span>SPACE
        </Link>
        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 text-sm font-medium text-white lg:flex">
          {navItems.map(([label, href]) => {
            const active = isActive(href);

            return (
              <Link key={label} href={href} className={`relative py-1 transition-colors hover:text-[#F97316] ${active ? "text-[#F97316]" : "text-white"}`}>
                {label}

                {/* ACTIVE UNDERLINE */}
                <span className={`absolute bottom-0 left-0 h-px bg-[#F97316] transition-all duration-300 ${active ? "w-full" : "w-0"}`} />
              </Link>
            );
          })}

          <ThemeToggle />

          <Link href="/contact" className="ml-2 flex items-center gap-2 border-b border-[#F97316] pb-1 transition-colors hover:text-[#F97316]">
            Start a project
            <ArrowUpRight size={15} className="text-[#F97316]" />
          </Link>
        </div>
        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button type="button" onClick={() => setMobileMenuOpen(true)} aria-label="Open navigation menu" className="flex h-9 w-9 items-center justify-center text-white">
            <Menu size={23} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-60 min-h-screen bg-[#111111] px-5 py-6 text-white sm:px-6">
          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between">
            <Link href="/" onClick={closeMenu} className="text-lg font-bold tracking-tighter">
              FORM<span className="text-[#F97316]">/</span>SPACE
            </Link>

            <button type="button" onClick={closeMenu} aria-label="Close navigation menu" className="flex h-9 w-9 items-center justify-center">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* MOBILE LINKS */}
          <div className="mt-20 flex flex-col">
            {navItems.map(([label, href]) => {
              const active = isActive(href);

              return (
                <Link key={label} href={href} onClick={closeMenu} className={`flex items-center justify-between border-b border-white/10 py-6 font-display text-3xl font-medium tracking-[-0.03em] transition-colors ${active ? "text-[#F97316]" : "text-white hover:text-[#F97316]"}`}>
                  <span className="flex items-center gap-3">
                    {label}

                    {active && <span className="h-px w-8 bg-[#F97316]" />}
                  </span>

                  <ArrowUpRight size={22} className="text-[#F97316]" />
                </Link>
              );
            })}
          </div>

          {/* MOBILE CTA */}
          <Link href="/contact" onClick={closeMenu} className="mt-12 flex w-full items-center justify-center gap-2 bg-[#F97316] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c]">
            Start your project
            <ArrowUpRight size={17} />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
