"use client";

import { ArrowLeft, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const projectTypes = [
  "Residential Design",
  "Commercial Spaces",
  "3D Visualization",
  "Renovation",
  "Other",
];

const budgets = [
  "Under 10 Lakh",
  "10–20 Lakh",
  "20–30 Lakh",
  "30–50 Lakh",
  "50 Lakh+",
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      location: formData.get("location"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-[#111111] transition-colors dark:bg-[#111111] dark:text-white">
      {/* Header */}
      <header className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-lg font-bold tracking-tighter sm:text-xl"
          >
            FORM<span className="text-[#F97316]">/</span>SPACE
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#F97316]"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Intro */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316] sm:text-xs">
              Start a project
            </p>

            <h1 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Let&apos;s create something{" "}
              <span className="font-normal italic text-[#F97316]">
                meaningful.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-7 text-black/60 dark:text-white/60 sm:text-base">
              Tell us about your project. We&apos;ll review your requirements
              and get back to you to discuss the possibilities.
            </p>

            <div className="mt-10 border-t border-black/10 pt-6 dark:border-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                Studio
              </p>

              <p className="mt-3 text-sm leading-6">
                Dhaka, Bangladesh
                <br />
                +880 1XXX-XXXXXX
                <br />
                hello@formspace.com
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {success ? (
              <div className="border-t-4 border-[#F97316] pt-8">
                <CheckCircle2
                  size={42}
                  strokeWidth={1.5}
                  className="text-[#F97316]"
                />

                <h2 className="mt-6 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                  Thank you.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-black/60 dark:text-white/60">
                  Your project inquiry has been received. We&apos;ll be in
                  touch with you soon.
                </p>

                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-8 inline-flex items-center gap-2 border-b border-black/30 pb-1 text-sm font-semibold transition-colors hover:border-[#F97316] hover:text-[#F97316] dark:border-white/30"
                >
                  Submit another inquiry
                  <ArrowUpRight size={15} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border-t-4 border-[#F97316] pt-8"
              >
                <div className="grid gap-7 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-[0.16em]"
                    >
                      Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-3 w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[#F97316] dark:border-white/20 dark:placeholder:text-white/30"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-[0.16em]"
                    >
                      Phone *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+880 1XXX-XXXXXX"
                      className="mt-3 w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[#F97316] dark:border-white/20 dark:placeholder:text-white/30"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-[0.16em]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-3 w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[#F97316] dark:border-white/20 dark:placeholder:text-white/30"
                    />
                  </div>

                  {/* Project type */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="text-xs font-semibold uppercase tracking-[0.16em]"
                    >
                      Project type *
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      required
                      defaultValue=""
                      className="mt-3 w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-[#F97316] dark:border-white/20 dark:bg-[#111111]"
                    >
                      <option value="" disabled>
                        Select project type
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="text-xs font-semibold uppercase tracking-[0.16em]"
                    >
                      Budget
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="mt-3 w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-[#F97316] dark:border-white/20 dark:bg-[#111111]"
                    >
                      <option value="" disabled>
                        Select budget
                      </option>

                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="text-xs font-semibold uppercase tracking-[0.16em]"
                    >
                      Location
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="Project location"
                      className="mt-3 w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[#F97316] dark:border-white/20 dark:placeholder:text-white/30"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mt-7">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-[0.16em]"
                  >
                    Tell us about your project *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your space, requirements, timeline, and anything else we should know."
                    className="mt-3 w-full resize-none border-b border-black/20 bg-transparent px-0 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-black/30 focus:border-[#F97316] dark:border-white/20 dark:placeholder:text-white/30"
                  />
                </div>

                {error && (
                  <div className="mt-6 border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-[#111111] px-7 py-5 text-sm font-semibold text-white transition-colors hover:bg-[#F97316] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-[#111111] dark:hover:bg-[#F97316] dark:hover:text-white sm:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send inquiry
                      <ArrowUpRight size={17} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
