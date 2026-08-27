"use client";

import { ArrowUpRight, Menu, Star, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
      {/* NAVIGATION */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-6 lg:px-8 lg:py-7">
          <Link href="/" onClick={closeMenu} className="text-lg font-bold tracking-[-0.05em] text-white sm:text-xl">
            FORM<span className="text-[#F97316]">/</span>SPACE
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 text-sm text-white lg:flex">
            <Link href="#services" className="transition-colors hover:text-[#F97316]">
              Services
            </Link>

            <Link href="#portfolio" className="transition-colors hover:text-[#F97316]">
              Portfolio
            </Link>

            <Link href="#about" className="transition-colors hover:text-[#F97316]">
              About
            </Link>

            <Link href="#contact" className="transition-colors hover:text-[#F97316]">
              Contact
            </Link>

            <ThemeToggle />

            <Link href="#contact" className="ml-2 flex items-center gap-2 border-b border-[#F97316] pb-1">
              Start a project
              <ArrowUpRight size={15} className="text-[#F97316]" />
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button onClick={() => setMobileMenuOpen(true)} aria-label="Open navigation menu" className="flex h-9 w-9 items-center justify-center text-white">
              <Menu size={23} strokeWidth={1.5} />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 min-h-screen bg-[#111111] px-5 py-6 text-white sm:px-6">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={closeMenu} className="text-lg font-bold tracking-[-0.05em]">
                FORM<span className="text-[#F97316]">/</span>SPACE
              </Link>

              <button onClick={closeMenu} aria-label="Close navigation menu" className="flex h-9 w-9 items-center justify-center">
                <X size={24} />
              </button>
            </div>

            <div className="mt-24 flex flex-col gap-7">
              {[
                ["Services", "#services"],
                ["Portfolio", "#portfolio"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <Link key={label} href={href} onClick={closeMenu} className="flex items-center justify-between border-b border-white/10 pb-5 text-3xl font-medium">
                  {label}
                  <ArrowUpRight size={22} className="text-[#F97316]" />
                </Link>
              ))}
            </div>

            <Link href="#contact" onClick={closeMenu} className="mt-12 flex w-full items-center justify-center gap-2 bg-[#F97316] px-6 py-4 text-sm font-medium">
              Start your project
              <ArrowUpRight size={17} />
            </Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-[90svh] overflow-hidden bg-[#111111] sm:min-h-[92vh]">
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90" alt="Modern luxury interior" className="absolute inset-0 h-full w-full object-cover" />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#F97316] sm:w-32" />

        <div className="relative mx-auto flex min-h-[90svh] max-w-7xl items-end px-5 pb-10 sm:min-h-[92vh] sm:px-6 sm:pb-14 lg:px-8 lg:pb-20">
          <div className="max-w-5xl text-white">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#F97316] sm:text-xs sm:tracking-[0.3em]">Interior Architecture & Design</p>

            <h1 className="text-[3.25rem] font-medium leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-8xl">
              Spaces that feel
              <br />
              <span className="font-normal italic">like you.</span>
            </h1>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
              <Link href="#contact" className="inline-flex w-full items-center justify-center gap-3 bg-[#F97316] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#ea580c] sm:w-fit">
                Start your project
                <ArrowUpRight size={17} />
              </Link>

              <span className="text-sm text-white/70">Dhaka · Bangladesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-36 dark:bg-[#111111]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#F97316]">01 / Philosophy</p>
            </div>

            <div>
              <h2 className="text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl lg:text-5xl">We create interiors with purpose, personality, and a quiet sense of luxury.</h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-black/60 sm:text-base dark:text-white/60">From initial concept to the final detail, we design spaces that are beautiful to look at and effortless to live in. Every project begins with understanding the people who will experience it.</p>

              <Link href="#portfolio" className="mt-7 inline-flex items-center gap-2 text-sm font-medium">
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
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#F97316]">02 / Expertise</p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl lg:text-5xl">What we do</h2>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.number} className="group border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <span className="text-sm font-medium text-[#F97316]">{service.number}</span>

                <h3 className="mt-12 text-2xl font-medium tracking-[-0.03em] sm:mt-16">{service.title}</h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">{service.description}</p>

                <div className="mt-8 flex h-10 w-10 items-center justify-center border border-white/20 transition-colors group-hover:border-[#F97316] group-hover:bg-[#F97316]">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-white dark:bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-12 flex items-end justify-between sm:mb-14">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#F97316]">03 / Selected work</p>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl lg:text-5xl">Recent projects</h2>
            </div>

            <Link href="/portfolio" className="hidden items-center gap-2 border-b border-black/30 pb-1 text-sm sm:flex">
              View all
              <ArrowUpRight size={15} className="text-[#F97316]" />
            </Link>
          </div>

          <div className="grid gap-7 sm:gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className={index === 0 ? "md:col-span-2" : ""}>
                <div className={`group overflow-hidden bg-black ${index === 0 ? "aspect-[4/3] sm:aspect-[16/8]" : "aspect-[4/5]"}`}>
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
                </div>

                <div className="mt-4 flex items-start justify-between sm:mt-5">
                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.03em] sm:text-xl">{project.title}</h3>

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
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#F97316]">04 / Client stories</p>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl lg:text-5xl">What our clients say</h2>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.name}>
                  <div className="flex gap-1 text-[#F97316]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>

                  <p className="mt-6 text-lg leading-8 tracking-[-0.02em] sm:text-xl">“{testimonial.quote}”</p>

                  <footer className="mt-7 text-sm">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="mt-1 text-white/40">{testimonial.project}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-white dark:bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-36">
          <div className="border-t-4 border-[#F97316] pt-8 sm:pt-10">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#F97316]">05 / Start a project</p>

            <div className="mt-7 flex flex-col justify-between gap-10 lg:flex-row lg:items-end lg:gap-12">
              <h2 className="max-w-4xl text-4xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-7xl">
                Let's create a space
                <br />
                <span className="font-normal italic">worth coming home to.</span>
              </h2>

              <Link href="/contact" className="inline-flex w-full shrink-0 items-center justify-center gap-3 bg-[#111111] px-7 py-5 text-sm font-medium text-white transition-colors hover:bg-[#F97316] sm:w-fit">
                Get a free consultation
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <p className="text-2xl font-bold tracking-[-0.05em]">
                FORM<span className="text-[#F97316]">/</span>SPACE
              </p>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">Interior architecture and design studio creating thoughtful spaces across Bangladesh.</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">Explore</p>

              <div className="mt-5 flex flex-col gap-3 text-sm">
                <Link href="#services" className="hover:text-[#F97316]">
                  Services
                </Link>
                <Link href="#portfolio" className="hover:text-[#F97316]">
                  Portfolio
                </Link>
                <Link href="#about" className="hover:text-[#F97316]">
                  About
                </Link>
                <Link href="#contact" className="hover:text-[#F97316]">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">Contact</p>

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
