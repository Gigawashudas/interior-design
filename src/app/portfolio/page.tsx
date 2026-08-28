import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const projects = [
  {
    title: "The Minimal Residence",
    category: "Residential",
    location: "Dhaka, Bangladesh",
    description: "A calm, contemporary residence built around natural materials, warm textures, and clean architectural lines.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "The Urban Office",
    category: "Commercial",
    location: "Dhaka, Bangladesh",
    description: "A modern workplace designed to balance focused work, collaboration, and a strong visual identity.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Warm Contemporary",
    category: "Residential",
    location: "Dhaka, Bangladesh",
    description: "A sophisticated family interior combining soft tones, practical planning, and contemporary detailing.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Modern Living",
    category: "Residential",
    location: "Gulshan, Dhaka",
    description: "A refined living space focused on proportion, natural light, and understated luxury.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Contemporary Workspace",
    category: "Commercial",
    location: "Banani, Dhaka",
    description: "A flexible office environment with a clean material palette and carefully planned circulation.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Quiet Luxury",
    category: "Residential",
    location: "Dhanmondi, Dhaka",
    description: "A warm residential interior where natural textures and minimal forms create a timeless atmosphere.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="border-t-4 border-[#F97316] pt-7 sm:pt-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F97316] sm:text-xs">Portfolio</p>

            <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
              <div>
                <h1 className="font-display text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
                  Spaces designed
                  <br />
                  <span className="font-normal italic text-[#F97316]">with intention.</span>
                </h1>
              </div>

              <div className="flex items-end">
                <p className="max-w-md text-sm leading-7 text-white/50 sm:text-base">Explore a selection of residential and commercial interiors designed by FORM/SPACE. Each project is shaped around the people, architecture, and lifestyle it serves.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-12 flex items-end justify-between sm:mb-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">Selected work</p>

              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.035em] sm:text-4xl lg:text-5xl">Recent projects</h2>
            </div>

            <p className="hidden text-sm text-black/40 dark:text-white/40 sm:block">{projects.length} projects</p>
          </div>

          <div className="grid gap-x-7 gap-y-14 sm:gap-x-8 sm:gap-y-16 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className={index === 0 ? "md:col-span-2" : ""}>
                {/* IMAGE */}
                <div className={`group relative overflow-hidden bg-black ${index === 0 ? "aspect-[4/3] sm:aspect-[16/8]" : "aspect-[4/5]"}`}>
                  <Image src={project.image} alt={project.title} fill sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"} className="object-cover transition duration-700 group-hover:scale-105" />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </div>

                {/* PROJECT INFO */}
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F97316]">{project.category}</p>

                    <h3 className="mt-2 font-display text-2xl font-medium tracking-[-0.03em] sm:text-3xl">{project.title}</h3>

                    <p className="mt-2 text-xs text-black/40 dark:text-white/40">{project.location}</p>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-black/50 dark:text-white/50">{project.description}</p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 dark:border-white/10">
                    <ArrowUpRight size={18} className="text-[#F97316]" strokeWidth={1.5} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F97316] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 sm:text-xs">Start a project</p>

              <h2 className="mt-5 font-display text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Have a space
                <br />
                in mind?
              </h2>
            </div>

            <div>
              <p className="max-w-md text-sm leading-7 text-white/75">Tell us about your project, your ideas, and what you want your space to feel like.</p>

              <Link href="/contact" className="mt-7 inline-flex items-center gap-3 bg-[#111111] px-6 py-4 text-sm font-semibold transition-transform hover:translate-x-1">
                Start your project
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
