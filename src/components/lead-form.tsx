"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const projectTypes = ["Residential", "Commercial", "Office", "Restaurant / Hospitality", "Other"];

const budgets = ["Under ৳5 lakh", "৳5–10 lakh", "৳10–20 lakh", "৳20–50 lakh", "৳50 lakh+"];

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

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

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-105 flex-col items-center justify-center border border-black/10 px-6 text-center dark:border-white/10">
        <CheckCircle2 size={42} strokeWidth={1.5} className="text-[#F97316]" />

        <h3 className="mt-6 font-display text-3xl font-medium tracking-tight">Thank you.</h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-black/50 dark:text-white/50">Your project details have been received. We&apos;ll get back to you shortly to discuss your project.</p>

        <button type="button" onClick={() => setSubmitted(false)} className="mt-7 text-sm font-semibold underline decoration-[#F97316] underline-offset-4 transition-colors hover:text-[#F97316]">
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name *</Label>

          <Input id="name" name="name" placeholder="Your name" required className="h-12 rounded-none border-black/15 bg-transparent dark:border-white/15" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone / WhatsApp *</Label>

          <Input id="phone" name="phone" type="tel" placeholder="+880 1XXX-XXXXXX" required className="h-12 rounded-none border-black/15 bg-transparent dark:border-white/15" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>

        <Input id="email" name="email" type="email" placeholder="you@example.com" className="h-12 rounded-none border-black/15 bg-transparent dark:border-white/15" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="projectType">Project type *</Label>

          <select id="projectType" name="projectType" required defaultValue="" className="h-12 w-full border border-black/15 bg-transparent px-3 text-sm outline-none transition-colors focus:border-[#F97316] dark:border-white/15 dark:bg-[#111111]">
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

        <div className="space-y-2">
          <Label htmlFor="budget">Estimated budget</Label>

          <select id="budget" name="budget" defaultValue="" className="h-12 w-full border border-black/15 bg-transparent px-3 text-sm outline-none transition-colors focus:border-[#F97316] dark:border-white/15 dark:bg-[#111111]">
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
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Project location</Label>

        <Input id="location" name="location" placeholder="e.g. Gulshan, Dhaka" className="h-12 rounded-none border-black/15 bg-transparent dark:border-white/15" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell us about your project *</Label>

        <Textarea id="message" name="message" placeholder="Tell us about your space, requirements, timeline, etc." required rows={6} className="resize-none rounded-none border-black/15 bg-transparent dark:border-white/15" />
      </div>

      <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center gap-3 bg-[#F97316] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#ea580c] disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit">
        {loading ? "Sending..." : "Request a consultation"}

        {!loading && <ArrowUpRight size={17} />}
      </button>

      <p className="text-xs leading-5 text-black/40 dark:text-white/40">By submitting this form, you agree to be contacted regarding your project.</p>
    </form>
  );
}
