"use client";

import { ArrowUpRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

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
    <main className="flex min-h-screen items-center justify-center bg-white px-5 text-[#111111] dark:bg-[#111111] dark:text-white">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter"
        >
          FORM<span className="text-[#F97316]">/</span>SPACE
        </Link>

        <div className="mt-10 border-t-4 border-[#F97316] pt-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F97316]">
            Admin
          </p>

          <h1 className="mt-3 font-display text-4xl font-medium tracking-[-0.04em]">
            Welcome back.
          </h1>

          <p className="mt-3 text-sm text-black/50 dark:text-white/50">
            Enter your password to access project inquiries.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <label
            htmlFor="password"
            className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/50 dark:text-white/50"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter admin password"
            required
            className="mt-2 w-full border border-black/10 bg-transparent px-4 py-4 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[#F97316] dark:border-white/10 dark:placeholder:text-white/30"
          />

          {error && (
            <p className="mt-3 text-sm text-red-500">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 bg-[#111111] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#F97316] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-[#111111] dark:hover:bg-[#F97316] dark:hover:text-white"
          >
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
    </main>
  );
}
