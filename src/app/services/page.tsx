import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const services = [
  {
    number: "01",
    title: "Residential Design",
    description: "Personalized interiors that balance comfort, functionality, and timeless aesthetics.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
    features: ["Space planning", "Interior concept development", "Material and finish selection", "Furniture and lighting selection", "3D visualization", "Detailed design drawings"],
  },
  {
    number: "02",
    title: "Commercial Spaces",
    description: "Distinctive environments designed to strengthen your brand and create better experiences.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=90",
    features: ["Workplace planning", "Brand-focused interiors", "Space optimization", "Furniture planning", "Lighting design", "Detailed documentation"],
  },
  {
    number: "03",
    title: "3D Visualization",
    description: "Realistic visualizations that let you experience your space before construction begins.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=90",
    features: ["Photorealistic renders", "Interior visualization", "Material visualization", "Lighting visualization", "Design presentations", "Multiple design options"],
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    description: "We learn about your space, requirements, lifestyle, preferences, and budget.",
  },
  {
    number: "02",
    title: "Concept",
    description: "We develop the overall design direction, spatial planning, materials, and visual language.",
  },
  {
    number: "03",
    title: "Development",
    description: "The approved concept becomes detailed drawings, specifications, selections, and visualizations.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "We coordinate the final details so the finished environment reflects the original design vision.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="border-t-4 border-[#F97316] pt-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">Our services</p>

            <div className="mt-7 max-w-5xl">
              <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
                Design that works
                <br />
                <span className="font-normal italic text-[#F97316]">beautifully.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">From private residences to commercial environments, we create considered interiors shaped around the people who use them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white dark:bg-[#111111]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-36">
          <div className="mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">01 / What we do</p>

            <h2 className="mt-4 max-w-3xl font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">Complete design solutions for spaces that matter.</h2>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {services.map((service, index) => (
              <article key={service.number} className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                {/* IMAGE */}
                <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
                </div>

                {/* CONTENT */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-sm font-semibold text-[#F97316]">{service.number}</span>

                  <h3 className="mt-5 font-display text-3xl font-medium tracking-[-0.035em] sm:text-4xl">{service.title}</h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-black/60 dark:text-white/60">{service.description}</p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 border-t border-black/10 pt-3 dark:border-white/10">
                        <Check size={15} className="shrink-0 text-[#F97316]" />

                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="mt-9 flex w-fit items-center gap-2 border-b border-black/30 pb-1 text-sm font-semibold transition-colors hover:border-[#F97316] hover:text-[#F97316] dark:border-white/30">
                    Discuss your project
                    <ArrowUpRight size={15} className="text-[#F97316]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">02 / Our process</p>

              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">A clear process from first conversation to final space.</h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/50 lg:pt-10 sm:text-base">Good design is a collaboration. We keep the process clear, structured, and focused so you always understand what comes next.</p>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-4">
            {process.map((step) => (
              <div key={step.number} className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
                <span className="text-sm font-semibold text-[#F97316]">{step.number}</span>

                <h3 className="mt-12 text-xl font-semibold">{step.title}</h3>

                <p className="mt-4 text-sm leading-6 text-white/50">{step.description}</p>
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
                Ready to transform
                <br />
                <span className="font-normal italic text-[#F97316]">your space?</span>
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
