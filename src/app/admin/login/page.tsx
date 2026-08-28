"use client";

import { ArrowUpRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AdminLoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Invalid password.");
        return;
      }

      router.replace("/admin/leads");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-[#111111] transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      {" "}
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-6 sm:px-6">
        {/* TOP BAR */}{" "}
        <div className="flex items-center justify-between">
          {" "}
          <Link href="/" className="text-xl font-bold tracking-tighter transition-colors hover:text-[#F97316]">
            FORM<span className="text-[#F97316]">/</span>SPACE{" "}
          </Link>
          ```
          <ThemeToggle />
        </div>
        {/* LOGIN CARD */}
        <div className="my-auto py-12">
          <div className="border-t-4 border-[#F97316] pt-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316]">Admin</p>

            <h1 className="mt-3 font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">Welcome back.</h1>

            <p className="mt-4 text-sm leading-6 text-black/50 dark:text-white/50">Enter your password to access project inquiries.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10">
            <label htmlFor="password" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/50 dark:text-white/50">
              Password
            </label>

            <input id="password" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter admin password" required disabled={loading} className="mt-2 w-full border border-black/10 bg-transparent px-4 py-4 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[#F97316] disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:placeholder:text-white/30" />

            {error && (
              <p role="alert" className="mt-3 text-sm text-red-500 dark:text-red-400">
                {error}
              </p>
            )}

            <button type="submit" disabled={loading} className="mt-6 flex w-full items-center justify-center gap-2 bg-[#111111] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#F97316] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-[#111111] dark:hover:bg-[#F97316] dark:hover:text-white">
              {loading ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <ArrowUpRight size={17} />
                </>
              )}
            </button>
          </form>
        </div>
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.16em] text-black/30 dark:text-white/30">FORM/SPACE Admin</p>
      </div>
    </main>
  );
}
