import Link from "next/link";
import { ArrowUpRight, Building2, CheckCircle2, Home, Layers3, PenTool, Sparkles } from "lucide-react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const services = [
  {
    number: "01",
    title: "Residential Design",
    shortDescription: "Personalized interiors designed around the way you live.",
    description: "We create residential interiors that balance comfort, functionality, personality, and timeless aesthetics. From individual rooms to complete homes, every decision is made around your lifestyle and the character of your space.",
    icon: <Home size={24} strokeWidth={1.5} />,
    features: ["Complete interior design", "Space planning", "Living and dining spaces", "Bedroom design", "Kitchen and bathroom design", "Furniture and material selection"],
  },
  {
    number: "02",
    title: "Commercial Spaces",
    shortDescription: "Distinctive environments designed to support your business.",
    description: "Your commercial space is part of your brand. We design offices, retail environments, restaurants, studios, and other commercial interiors with a focus on identity, functionality, customer experience, and long-term usability.",
    icon: <Building2 size={24} strokeWidth={1.5} />,
    features: ["Office interiors", "Retail spaces", "Restaurants and cafés", "Showrooms", "Reception and waiting areas", "Brand-focused spatial design"],
  },
  {
    number: "03",
    title: "3D Visualization",
    shortDescription: "See your space before construction begins.",
    description: "Realistic 3D visualization helps you understand how your finished space will look before work begins. We turn design concepts into detailed visual environments so you can make decisions with confidence.",
    icon: <Layers3 size={24} strokeWidth={1.5} />,
    features: ["Photorealistic 3D renders", "Interior visualization", "Material visualization", "Lighting studies", "Furniture visualization", "Design presentation"],
  },
  {
    number: "04",
    title: "Renovation",
    shortDescription: "Transforming existing spaces into something better.",
    description: "A renovation is an opportunity to rethink how an existing space works. We help transform outdated or inefficient interiors through better planning, finishes, lighting, furniture, and architectural details.",
    icon: <PenTool size={24} strokeWidth={1.5} />,
    features: ["Existing space assessment", "Layout improvement", "Interior renovation", "Material and finish selection", "Lighting design", "Furniture and styling"],
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    description: "We start by understanding your space, requirements, lifestyle, design preferences, budget, and timeline.",
  },
  {
    number: "02",
    title: "Planning",
    description: "We develop the spatial strategy, layout, design direction, materials, and overall visual language.",
  },
  {
    number: "03",
    title: "Design",
    description: "The concept becomes a detailed design through drawings, material selections, furniture, lighting, and visualization.",
  },
  {
    number: "04",
    title: "Execution",
    description: "The final design is prepared for implementation with careful attention to detail and coordination.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="border-t-4 border-[#F97316] pt-8 sm:pt-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">Our services</p>

            <div className="mt-6 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium leading-6 text-white/40">
                  Interior Architecture
                  <br />
                  &amp; Design
                  <br />
                  Dhaka · Bangladesh
                </p>
              </div>

              <div>
                <h1 className="font-display text-5xl font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
                  Design that
                  <br />
                  works as
                  <br />
                  <span className="font-normal italic text-[#F97316]">beautifully.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">From complete interior design to detailed visualization, we create spaces that combine thoughtful planning, distinctive aesthetics, and everyday functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="bg-white dark:bg-[#111111]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">01 / Expertise</p>
            </div>

            <div>
              <h2 className="max-w-4xl font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">From the first idea to the final detail, we help turn spaces into places people want to be.</h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-black/55 dark:text-white/55 sm:text-base">Every project begins with a different set of needs. Our services are designed to give you the right level of support, whether you need a complete interior transformation or professional visualization for an existing concept.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="space-y-0">
            {services.map((service) => (
              <article key={service.number} className="border-t border-white/15 py-10 sm:py-14 lg:py-16">
                <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                  {/* NUMBER / ICON */}
                  <div>
                    <div className="flex items-center justify-between lg:block">
                      <span className="text-sm font-semibold text-[#F97316]">{service.number}</span>

                      <div className="flex h-11 w-11 items-center justify-center border border-white/15 text-[#F97316] lg:mt-12">{service.icon}</div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h2 className="font-display text-3xl font-medium tracking-[-0.03em] sm:text-4xl lg:text-5xl">{service.title}</h2>

                    <p className="mt-4 text-base font-medium text-white/80">{service.shortDescription}</p>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">{service.description}</p>

                    <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm text-white/70">
                          <CheckCircle2 size={16} className="shrink-0 text-[#F97316]" strokeWidth={1.5} />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact" className="mt-9 inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-semibold transition-colors hover:border-[#F97316] hover:text-[#F97316]">
                      Discuss your project
                      <ArrowUpRight size={16} className="text-[#F97316]" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="border-t border-white/15 pt-10">
            <div className="flex items-center gap-3 text-sm text-white/40">
              <Sparkles size={17} className="text-[#F97316]" />

              <span>Every project is tailored to the people and space behind it.</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F5F5F3] text-[#111111] dark:bg-[#181818] dark:text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">02 / Our process</p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                A clear process.
                <br />A better experience.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-black/50 dark:text-white/50">Good design should not feel complicated. We keep the process structured and collaborative so you always understand what comes next.</p>
            </div>
          </div>

          <div className="border-t border-black/10 dark:border-white/10">
            {process.map((step) => (
              <div key={step.number} className="grid gap-5 border-b border-black/10 py-8 dark:border-white/10 md:grid-cols-[80px_0.7fr_1.3fr] md:items-start md:gap-10">
                <span className="text-sm font-semibold text-[#F97316]">{step.number}</span>

                <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">{step.title}</h3>

                <p className="max-w-xl text-sm leading-6 text-black/50 dark:text-white/50">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white dark:bg-[#111111]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">03 / Why FORM/SPACE</p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">Design should be personal, practical, and built to last.</h2>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div className="border-t border-black/10 pt-5 dark:border-white/10">
                  <p className="text-sm font-semibold">Personal approach</p>

                  <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/50">Your project starts with your needs, not a predefined style.</p>
                </div>

                <div className="border-t border-black/10 pt-5 dark:border-white/10">
                  <p className="text-sm font-semibold">Thoughtful details</p>

                  <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/50">We focus on the small decisions that make a space feel complete.</p>
                </div>

                <div className="border-t border-black/10 pt-5 dark:border-white/10">
                  <p className="text-sm font-semibold">Functional design</p>

                  <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/50">Layout, circulation, storage, comfort, and usability are considered alongside aesthetics.</p>
                </div>

                <div className="border-t border-black/10 pt-5 dark:border-white/10">
                  <p className="text-sm font-semibold">Clear communication</p>

                  <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/50">We keep you involved throughout the design process so decisions remain clear.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="border-t-4 border-[#F97316] pt-8 sm:pt-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">04 / Start a project</p>

                <h2 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
                  Have a project in mind?
                  <br />
                  <span className="font-normal italic text-[#F97316]">Let&apos;s create it.</span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 sm:text-base">Tell us what you are planning and we&apos;ll get in touch to understand your project and discuss the next steps.</p>
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
