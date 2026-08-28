"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
  return (
    <main className="min-h-screen bg-white text-[#111111] transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      <Navbar />

      <section className="relative min-h-[90svh] overflow-hidden bg-[#111111] sm:min-h-[92vh]">
        <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90" alt="Modern luxury interior" fill priority sizes="100vw" className="object-cover" />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#F97316] sm:w-32" />

        <div className="relative mx-auto flex min-h-[90svh] max-w-7xl items-end px-5 pb-10 sm:min-h-[92vh] sm:px-6 sm:pb-14 lg:px-8 lg:pb-20">
          <div className="max-w-5xl text-white">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F97316] sm:text-xs sm:tracking-[0.3em]">Interior Architecture &amp; Design</p>

            <h1 className="font-display text-[3.5rem] font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
              Spaces that feel
              <br />
              <span className="font-normal italic text-[#F97316]">like you.</span>
            </h1>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
              <Link href="/contact" className="inline-flex w-full items-center justify-center gap-3 bg-[#F97316] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c] sm:w-fit">
                Start your project
                <ArrowUpRight size={17} />
              </Link>

              <span className="text-sm font-medium text-white/70">Dhaka · Bangladesh</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 transition-colors duration-300 sm:px-6 sm:py-24 lg:px-8 lg:py-36 dark:bg-[#111111]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">01 / Philosophy</p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">We create interiors with purpose, personality, and a quiet sense of luxury.</h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-black/60 sm:text-base dark:text-white/60">From initial concept to the final detail, we design spaces that are beautiful to look at and effortless to live in. Every project begins with understanding the people who will experience it.</p>

              <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#F97316]">
                Discover our approach
                <ArrowUpRight size={16} className="text-[#F97316]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] text-white">
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

                <Link href="/services" className="mt-8 flex h-10 w-10 items-center justify-center border border-white/20 transition-colors group-hover:border-[#F97316] group-hover:bg-[#F97316]" aria-label={`Learn more about ${service.title}`}>
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#F97316]">
              Explore all services
              <ArrowUpRight size={16} className="text-[#F97316]" />
            </Link>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-white text-[#111111] transition-colors duration-300 dark:bg-[#111111] dark:text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-12 flex items-end justify-between sm:mb-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">03 / Selected work</p>

              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">Recent projects</h2>
            </div>

            <Link href="/portfolio" className="hidden items-center gap-2 border-b border-black/30 pb-1 text-sm font-semibold transition-colors hover:border-[#F97316] dark:border-white/30 sm:flex">
              View all
              <ArrowUpRight size={15} className="text-[#F97316]" />
            </Link>
          </div>

          <div className="grid gap-7 sm:gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className={index === 0 ? "md:col-span-2" : ""}>
                <Link href="/portfolio" className="block">
                  <div className={`group relative overflow-hidden bg-black ${index === 0 ? "aspect-4/3 sm:aspect-16/8" : "aspect-4/5"}`}>
                    <Image src={project.image} alt={project.title} fill sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"} className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
                  </div>
                </Link>

                <div className="mt-4 flex items-start justify-between sm:mt-5">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{project.title}</h3>

                    <p className="mt-1 text-sm text-black/50 dark:text-white/50">{project.category}</p>
                  </div>

                  <ArrowUpRight size={20} strokeWidth={1.5} className="text-[#F97316]" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#F97316]">
              View all projects
              <ArrowUpRight size={16} className="text-[#F97316]" />
            </Link>
          </div>
        </div>
      </section>

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

      <section className="bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-36">
          <div className="border-t-4 border-[#F97316] pt-8 sm:pt-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">05 / Start a project</p>

            <div className="mt-7 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <h2 className="font-display text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Let&apos;s create a space
                  <br />
                  <span className="font-normal italic text-[#F97316]">worth coming home to.</span>
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-black/50 dark:text-white/50">Tell us about your project and our team will get in touch to discuss your requirements, ideas, and next steps.</p>
              </div>

              <Link href="/contact" className="inline-flex w-fit items-center gap-3 bg-[#111111] px-7 py-5 text-sm font-semibold text-white transition-colors hover:bg-[#F97316] dark:bg-white dark:text-[#111111] dark:hover:bg-[#F97316] dark:hover:text-white">
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
