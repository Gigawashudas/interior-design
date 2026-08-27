"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, Star, X } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

import { ThemeToggle } from "@/components/theme-toggle";

const services = [
  {
    number: "01",
    title: "Residential Design",
    description: "Personalized interiors that balance comfort, functionality, and timeless aesthetics.",
  },
  {
    number: "02",
    title: "Commercial Spaces",
    description: "Distinctive environments designed to strengthen your brand and inspire people.",
  },
  {
    number: "03",
    title: "3D Visualization",
    description: "Realistic visualizations that let you experience your space before construction begins.",
  },
];

const projects = [
  {
    title: "The Minimal Residence",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "The Urban Office",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Warm Contemporary",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
  },
];

const testimonials = [
  {
    quote: "They understood exactly what we wanted and transformed our house into a space that genuinely feels like home.",
    name: "Sarah Rahman",
    project: "Residential Project",
  },
  {
    quote: "From the first concept to the final details, the entire process was professional, creative, and incredibly smooth.",
    name: "Arif Hasan",
    project: "Commercial Project",
  },
];

const navItems = [
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen bg-white text-[#111111] transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-6 lg:px-8 lg:py-7">
          <Link href="/" onClick={closeMenu} className="text-lg font-bold tracking-tighter text-white sm:text-xl">
            FORM<span className="text-[#F97316]">/</span>SPACE
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-7 text-sm font-medium text-white lg:flex">
            {navItems.map(([label, href]) => (
              <Link key={label} href={href} className="transition-colors hover:text-[#F97316]">
                {label}
              </Link>
            ))}

            <ThemeToggle />

            <Link href="#contact" className="ml-2 flex items-center gap-2 border-b border-[#F97316] pb-1 transition-colors hover:text-[#F97316]">
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
            <div className="flex items-center justify-between">
              <Link href="/" onClick={closeMenu} className="text-lg font-bold tracking-tighter">
                FORM<span className="text-[#F97316]">/</span>SPACE
              </Link>

              <button type="button" onClick={closeMenu} aria-label="Close navigation menu" className="flex h-9 w-9 items-center justify-center">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="mt-20 flex flex-col">
              {navItems.map(([label, href]) => (
                <Link key={label} href={href} onClick={closeMenu} className="flex items-center justify-between border-b border-white/10 py-6 font-display text-3xl font-medium tracking-[-0.03em]">
                  {label}
                  <ArrowUpRight size={22} className="text-[#F97316]" />
                </Link>
              ))}
            </div>

            <Link href="#contact" onClick={closeMenu} className="mt-12 flex w-full items-center justify-center gap-2 bg-[#F97316] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c]">
              Start your project
              <ArrowUpRight size={17} />
            </Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-[90svh] overflow-hidden bg-[#111111] sm:min-h-[92vh]">
        <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90" alt="Modern luxury interior" fill priority sizes="100vw" className="object-cover" />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#F97316] sm:w-32" />

        <div className="relative mx-auto flex min-h-[90svh] max-w-7xl items-end px-5 pb-10 sm:min-h-[92vh] sm:px-6 sm:pb-14 lg:px-8 lg:pb-20">
          <div className="max-w-5xl text-white">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F97316] sm:text-xs sm:tracking-[0.3em]">Interior Architecture & Design</p>

            <h1 className="font-display text-[3.5rem] font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
              Spaces that feel
              <br />
              <span className="font-normal italic text-[#F97316]">like you.</span>
            </h1>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
              <Link href="#contact" className="inline-flex w-full items-center justify-center gap-3 bg-[#F97316] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c] sm:w-fit">
                Start your project
                <ArrowUpRight size={17} />
              </Link>

              <span className="text-sm font-medium text-white/70">Dhaka · Bangladesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white px-5 py-20 transition-colors duration-300 sm:px-6 sm:py-24 lg:px-8 lg:py-36 dark:bg-[#111111]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">01 / Philosophy</p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">We create interiors with purpose, personality, and a quiet sense of luxury.</h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-black/60 sm:text-base dark:text-white/60">From initial concept to the final detail, we design spaces that are beautiful to look at and effortless to live in. Every project begins with understanding the people who will experience it.</p>

              <Link href="#portfolio" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#F97316]">
                Discover our work
                <ArrowUpRight size={16} className="text-[#F97316]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-12 sm:mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">02 / Expertise</p>

            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">What we do</h2>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="group border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <span className="text-sm font-semibold text-[#F97316]">{service.number}</span>

                <h3 className="mt-12 text-xl font-semibold tracking-tight sm:mt-16 sm:text-2xl">{service.title}</h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">{service.description}</p>

                <div className="mt-8 flex h-10 w-10 items-center justify-center border border-white/20 transition-colors group-hover:border-[#F97316] group-hover:bg-[#F97316]">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-white text-[#111111]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-12 flex items-end justify-between sm:mb-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">03 / Selected work</p>

              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">Recent projects</h2>
            </div>

            <Link href="/portfolio" className="hidden items-center gap-2 border-b border-black/30 pb-1 text-sm font-semibold transition-colors hover:border-[#F97316] sm:flex">
              View all
              <ArrowUpRight size={15} className="text-[#F97316]" />
            </Link>
          </div>

          <div className="grid gap-7 sm:gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className={index === 0 ? "md:col-span-2" : ""}>
                <div className={`group relative overflow-hidden bg-black ${index === 0 ? "aspect-4/3 sm:aspect-16/8" : "aspect-4/5"}`}>
                  <Image src={project.image} alt={project.title} fill sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"} className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
                </div>

                <div className="mt-4 flex items-start justify-between sm:mt-5">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{project.title}</h3>

                    <p className="mt-1 text-sm text-black/50">{project.category}</p>
                  </div>

                  <ArrowUpRight size={20} strokeWidth={1.5} className="text-[#F97316]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">04 / Client stories</p>

              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">What our clients say</h2>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.name}>
                  <div className="flex gap-1 text-[#F97316]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>

                  <p className="mt-6 font-display text-xl leading-[1.35] tracking-[-0.02em] sm:text-2xl">“{testimonial.quote}”</p>

                  <footer className="mt-7 text-sm">
                    <p className="font-semibold">{testimonial.name}</p>

                    <p className="mt-1 text-white/40">{testimonial.project}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / LEAD FORM */}
      <section id="contact" className="bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-36">
          <div className="border-t-4 border-[#F97316] pt-8 sm:pt-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">05 / Start a project</p>

            <div className="mt-7 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <h2 className="font-display text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Let&apos;s create a space
                  <br />
                  <span className="font-normal italic text-[#F97316]">worth coming home to.</span>
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-black/50 dark:text-white/50">Tell us about your project and our team will get in touch to discuss your requirements, ideas, and next steps.</p>
              </div>

              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <p className="text-2xl font-bold tracking-tighter">
                FORM<span className="text-[#F97316]">/</span>SPACE
              </p>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">Interior architecture and design studio creating thoughtful spaces across Bangladesh.</p>
            </div>

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

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/30 sm:text-xs">Contact</p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
                <p>Dhaka, Bangladesh</p>
                <p>+880 1XXX-XXXXXX</p>
                <p>hello@formspace.com</p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:mt-16 sm:flex-row sm:justify-between">
            <span>© 2026 FORM/SPACE</span>
            <span>Interior Architecture & Design</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
