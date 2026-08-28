import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Compass, Layers3, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";

import Footer from "@/components/footer";

const values = [
  {
    number: "01",
    title: "Purpose",
    description: "Every space should have a reason behind it. We design around how people live, work, move, and experience their surroundings.",
    icon: <Compass size={22} strokeWidth={1.5} />,
  },
  {
    number: "02",
    title: "Character",
    description: "We believe great interiors should feel personal rather than generic, combining architecture, materials, light, and detail.",
    icon: <Sparkles size={22} strokeWidth={1.5} />,
  },
  {
    number: "03",
    title: "Function",
    description: "Beautiful spaces also need to work. Our designs balance aesthetics with practical layouts, storage, comfort, and everyday use.",
    icon: <Layers3 size={22} strokeWidth={1.5} />,
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description: "We begin by understanding your lifestyle, requirements, preferences, budget, and the character of the space.",
  },
  {
    number: "02",
    title: "Concept",
    description: "We translate your requirements into a clear design direction through layouts, materials, mood, and visual concepts.",
  },
  {
    number: "03",
    title: "Develop",
    description: "The selected concept is developed into detailed drawings, finishes, furniture selections, and realistic visualizations.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "We help bring the design to life with attention to detail, coordination, and a focus on achieving the intended result.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="border-t-4 border-[#F97316] pt-8 sm:pt-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">About FORM/SPACE</p>

            <div className="mt-6 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium text-white/40">
                  Interior Architecture
                  <br />
                  &amp; Design Studio
                  <br />
                  Dhaka · Bangladesh
                </p>
              </div>

              <div>
                <h1 className="font-display text-5xl font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
                  Designing
                  <br />
                  spaces with
                  <br />
                  <span className="font-normal italic text-[#F97316]">meaning.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">FORM/SPACE is an interior architecture and design studio focused on creating thoughtful, functional, and distinctive spaces for the way people live and work today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white dark:bg-[#111111]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">01 / Our approach</p>
            </div>

            <div>
              <h2 className="max-w-4xl font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                We believe the best interiors are not simply beautiful.
                <span className="text-[#F97316]"> They should feel right.</span>
              </h2>

              <div className="mt-8 grid gap-6 text-sm leading-7 text-black/55 dark:text-white/55 sm:grid-cols-2 sm:gap-8 sm:text-base">
                <p>A successful interior begins with understanding. Before choosing colours, furniture, or finishes, we look at how a space will actually be used and who will experience it.</p>

                <p>Our approach combines architectural thinking with interior design to create spaces that are comfortable, practical, visually refined, and built around the personality of each client.</p>
              </div>

              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 border-b border-black/30 pb-1 text-sm font-semibold transition-colors hover:border-[#F97316] hover:text-[#F97316] dark:border-white/30">
                Start a conversation
                <ArrowUpRight size={16} className="text-[#F97316]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-12 sm:mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">02 / What matters</p>

            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">Our principles</h2>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.number} className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#F97316]">{value.number}</span>

                  <span className="text-[#F97316]">{value.icon}</span>
                </div>

                <h3 className="mt-12 text-xl font-semibold tracking-tight sm:mt-16 sm:text-2xl">{value.title}</h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO STATEMENT */}
      <section className="bg-white dark:bg-[#111111]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">03 / The studio</p>

              <h2 className="mt-5 font-display text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Thoughtful design for
                <br />
                <span className="font-normal italic text-[#F97316]">everyday life.</span>
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-black/55 dark:text-white/55 sm:text-base">
              <p>FORM/SPACE was created around a simple idea: interior design should make everyday life better.</p>

              <p>Whether we are working on a home, office, commercial environment, or visualization project, we focus on creating a strong relationship between people and their surroundings.</p>

              <p>We pay close attention to proportion, natural light, materials, colour, texture, circulation, and the small details that make a space feel complete.</p>

              <div className="border-t border-black/10 pt-6 dark:border-white/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#F97316]" strokeWidth={1.5} />

                  <p className="font-medium text-black/80 dark:text-white/80">Designed around you. Built around how you live.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F5F5F3] text-[#111111] dark:bg-[#181818] dark:text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">04 / How we work</p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                From first conversation
                <br />
                to final detail.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-black/50 dark:text-white/50">Every project is different, but our process keeps the experience clear, collaborative, and focused.</p>
            </div>
          </div>

          <div className="border-t border-black/10 dark:border-white/10">
            {process.map((step) => (
              <div key={step.number} className="grid gap-5 border-b border-black/10 py-7 dark:border-white/10 md:grid-cols-[80px_0.7fr_1.3fr] md:items-start md:gap-10">
                <span className="text-sm font-semibold text-[#F97316]">{step.number}</span>

                <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">{step.title}</h3>

                <p className="max-w-xl text-sm leading-6 text-black/50 dark:text-white/50">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="border-t-4 border-[#F97316] pt-8 sm:pt-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">05 / Work with us</p>

                <h2 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
                  Have a space in mind?
                  <br />
                  <span className="font-normal italic text-[#F97316]">Let&apos;s talk.</span>
                </h2>
              </div>

              <Link href="/contact" className="inline-flex w-fit items-center gap-3 bg-[#F97316] px-7 py-5 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c]">
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
