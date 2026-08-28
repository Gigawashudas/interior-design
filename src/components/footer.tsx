import Link from "next/link";

const navItems = [
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              FORM<span className="text-[#F97316]">/</span>SPACE
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">Interior architecture and design studio creating thoughtful spaces across Bangladesh.</p>
          </div>

          {/* EXPLORE */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/30 sm:text-xs">Explore</p>

            <div className="mt-5 flex flex-col gap-3 text-sm font-medium">
              {navItems.map(([label, href]) => (
                <Link key={label} href={href} className="transition-colors hover:text-[#F97316]">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/30 sm:text-xs">Contact</p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <p>Dhaka, Bangladesh</p>

              <a href="tel:+8801810013848" className="transition-colors hover:text-[#F97316]">
                +880 1810-013848
              </a>

              <a href="mailto:hreevud@gmail.com" className="transition-colors hover:text-[#F97316]">
                hreevud@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:mt-16 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} FORM/SPACE</span>

          <span>Interior Architecture &amp; Design</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
