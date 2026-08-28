import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="border-t-4 border-[#F97316] pt-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">About FORM/SPACE</p>

            <div className="mt-7 max-w-5xl">
              <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
                We design spaces
                <br />
                <span className="font-normal italic text-[#F97316]">with meaning.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">FORM/SPACE is an interior architecture and design studio focused on creating thoughtful, functional, and timeless environments across Bangladesh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white dark:bg-[#111111]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">01 / Who we are</p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">A design studio built around people, space, and purpose.</h2>

              <p className="mt-7 text-sm leading-7 text-black/60 sm:text-base dark:text-white/60">We believe great interiors are more than beautiful images. They should respond to how people live, work, move, gather, and experience their surroundings.</p>

              <p className="mt-5 text-sm leading-7 text-black/60 sm:text-base dark:text-white/60">Our approach combines architectural thinking with a strong understanding of materials, proportions, lighting, furniture, and everyday functionality.</p>

              <p className="mt-5 text-sm leading-7 text-black/60 sm:text-base dark:text-white/60">Every project is different. Our job is to understand what makes each client unique and translate that into a space that feels natural, considered, and personal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE */}
      <section className="bg-[#f5f5f5] dark:bg-[#181818]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90" alt="FORM/SPACE interior design" fill sizes="100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-white dark:bg-[#111111]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">02 / Philosophy</p>
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">Less noise. More intention.</h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-black/60 sm:text-base dark:text-white/60">We are drawn to spaces that feel calm, balanced, and intentional. Rather than following trends blindly, we focus on creating environments that can remain relevant for years.</p>

              <div className="mt-12 grid gap-8 sm:grid-cols-3">
                <div className="border-t border-black/10 pt-5 dark:border-white/10">
                  <p className="text-sm font-semibold">01</p>
                  <h3 className="mt-4 text-lg font-semibold">Function first</h3>
                  <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/50">Beautiful spaces should also work effortlessly.</p>
                </div>

                <div className="border-t border-black/10 pt-5 dark:border-white/10">
                  <p className="text-sm font-semibold">02</p>
                  <h3 className="mt-4 text-lg font-semibold">Personal design</h3>
                  <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/50">Every project reflects the people who use it.</p>
                </div>

                <div className="border-t border-black/10 pt-5 dark:border-white/10">
                  <p className="text-sm font-semibold">03</p>
                  <h3 className="mt-4 text-lg font-semibold">Timeless detail</h3>
                  <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/50">Materials and details are chosen to last.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">03 / Our process</p>

            <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.035em] sm:text-4xl lg:text-5xl">From idea to finished space.</h2>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                text: "We begin by understanding your needs, lifestyle, goals, and vision.",
              },
              {
                number: "02",
                title: "Concept",
                text: "We develop the design direction, mood, materials, and spatial ideas.",
              },
              {
                number: "03",
                title: "Develop",
                text: "The concept becomes detailed drawings, selections, and realistic visualizations.",
              },
              {
                number: "04",
                title: "Deliver",
                text: "We bring the design together into a finished space with attention to every detail.",
              },
            ].map((step) => (
              <div key={step.number} className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
                <span className="text-sm font-semibold text-[#F97316]">{step.number}</span>

                <h3 className="mt-12 text-xl font-semibold">{step.title}</h3>

                <p className="mt-4 text-sm leading-6 text-white/50">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white dark:bg-[#111111]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="border-t-4 border-[#F97316] pt-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">Start a project</p>

            <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="max-w-3xl font-display text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Have a space in mind?
                <br />
                <span className="font-normal italic text-[#F97316]">Let&apos;s talk.</span>
              </h2>

              <Link href="/contact" className="inline-flex w-fit items-center gap-3 bg-[#F97316] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c]">
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
