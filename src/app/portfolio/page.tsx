"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Minimal Residence",
    category: "Residential",
    location: "Dhaka, Bangladesh",
    description: "A calm, contemporary residence built around natural light, clean proportions, and warm materials.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "The Urban Office",
    category: "Commercial",
    location: "Dhaka, Bangladesh",
    description: "A modern workplace designed to balance focused work, collaboration, and a strong architectural identity.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Warm Contemporary",
    category: "Residential",
    location: "Dhaka, Bangladesh",
    description: "A refined residential interior combining soft textures, natural tones, and contemporary detailing.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Modern Living",
    category: "Residential",
    location: "Dhaka, Bangladesh",
    description: "A sophisticated living environment where functionality and understated luxury come together.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "The Contemporary Apartment",
    category: "Residential",
    location: "Dhaka, Bangladesh",
    description: "A compact urban home transformed through intelligent planning, restrained materials, and custom furniture.",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Creative Workspace",
    category: "Commercial",
    location: "Dhaka, Bangladesh",
    description: "A character-driven workspace designed to encourage creativity while maintaining a professional atmosphere.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
      {/* HERO */}{" "}
      <section className="bg-[#111111] text-white">
        {" "}
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32 lg:pt-32">
          {" "}
          <div className="max-w-5xl">
            {" "}
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F97316] sm:text-xs">Portfolio </p>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Spaces made
              <br />
              <span className="font-normal italic text-[#F97316]">personal.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">A selection of residential and commercial interiors designed with purpose, character, and attention to every detail.</p>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section className="bg-white dark:bg-[#111111]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-12 flex items-end justify-between sm:mb-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">Selected work</p>

              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.035em] sm:text-4xl lg:text-5xl">Recent projects</h2>
            </div>

            <span className="hidden text-sm text-black/40 dark:text-white/40 sm:block">{projects.length} projects</span>
          </div>

          <div className="grid gap-x-7 gap-y-14 sm:gap-x-8 sm:gap-y-16 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className={index === 0 ? "md:col-span-2" : ""}>
                <div className={`group relative overflow-hidden bg-black ${index === 0 ? "aspect-4/3 sm:aspect-16/8" : "aspect-4/5"}`}>
                  <Image src={project.image} alt={project.title} fill sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"} className="object-cover transition duration-700 group-hover:scale-105" />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center bg-[#F97316] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={19} />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>

                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-black/40 dark:text-white/40">
                        <span>{project.category}</span>
                        <span>·</span>
                        <span>{project.location}</span>
                      </div>
                    </div>

                    <ArrowUpRight size={20} strokeWidth={1.5} className="shrink-0 text-[#F97316]" />
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-black/50 dark:text-white/50">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* APPROACH */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">Our approach</p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">Every project starts with understanding how a space should feel.</h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base">We look beyond trends to understand your lifestyle, brand, priorities, and aspirations. The result is an interior that feels considered rather than simply decorated.</p>

              <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#F97316]">
                Explore our services
                <ArrowUpRight size={16} className="text-[#F97316]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-[#F97316] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-xs">Have a project in mind?</p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-none tracking-[-0.04em] sm:text-5xl lg:text-6xl">Let&apos;s create your next space.</h2>
            </div>

            <Link href="/contact" className="inline-flex w-fit items-center gap-3 border border-white px-6 py-4 text-sm font-semibold transition-colors hover:bg-white hover:text-[#111111]">
              Start your project
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
