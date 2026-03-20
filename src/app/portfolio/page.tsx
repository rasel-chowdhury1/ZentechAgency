"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { portfolio } from "@/lib/data";

const FILTERS = ["All", "Web", "Mobile", "Software", "Design"] as const;

const tagStyle: Record<string, string> = {
  Web:      "text-emerald-700 bg-emerald-50 border-emerald-200",
  Mobile:   "text-blue-700 bg-blue-50 border-blue-200",
  Software: "text-violet-700 bg-violet-50 border-violet-200",
  Design:   "text-orange-700 bg-orange-50 border-orange-200",
};

const tagAccent: Record<string, string> = {
  Web:      "from-emerald-400 to-teal-400",
  Mobile:   "from-blue-400 to-cyan-400",
  Software: "from-violet-400 to-purple-400",
  Design:   "from-orange-400 to-amber-400",
};

const stats = [
  { value: "20+", label: "Projects delivered" },
  { value: "4",   label: "Service categories" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3x",  label: "Average ROI" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const gridRef  = useRef<HTMLDivElement>(null);
  const heroRef  = useRef<HTMLDivElement>(null);

  // Hero entrance — delay so browser paints opacity:0 before transitioning
  useEffect(() => {
    const t = setTimeout(() => heroRef.current?.classList.add("services-header-visible"), 120);
    return () => clearTimeout(t);
  }, []);

  // Re-animate cards on filter change
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    el.classList.remove("cards-visible");
    const t = setTimeout(() => el.classList.add("cards-visible"), 80);
    return () => clearTimeout(t);
  }, [active]);

  const items = useMemo(() => {
    if (active === "All") return portfolio;
    return portfolio.filter((p) => p.tag === active);
  }, [active]);

  return (
    <main className="min-h-screen bg-[color:var(--background)]">

      {/* ── Hero ── */}
      <div className="border-b border-[color:var(--border)]">
        <Container className="pt-2 pb-10 md:pt-3 md:pb-14">
          <div ref={heroRef}>
            {/* Breadcrumb */}
            <nav
              className="services-header-item mb-5 flex items-center gap-1.5 text-[12px] text-[color:var(--muted)]"
              style={{ transitionDelay: "0ms" }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="inline-flex items-center gap-1 font-medium transition-colors hover:text-[color:var(--foreground)]">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Home
              </Link>
              <svg className="h-3 w-3 shrink-0 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="font-semibold text-[color:var(--foreground)]">Portfolio</span>
            </nav>

            <span
              className="services-header-item inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]"
              style={{ transitionDelay: "0ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              Our Work
            </span>

            <h1
              className="services-header-item mt-4 text-4xl font-bold tracking-tight md:text-5xl"
              style={{ transitionDelay: "80ms" }}
            >
              Selected work &amp;<br className="hidden sm:block" /> project showcase
            </h1>

            <p
              className="services-header-item mt-4 max-w-xl leading-relaxed text-[color:var(--muted)]"
              style={{ transitionDelay: "150ms" }}
            >
              A curated selection of projects across web, mobile, software, and design — built with precision and purpose.
            </p>

            {/* Stats */}
            <div
              className="services-header-item mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
              style={{ transitionDelay: "220ms" }}
            >
              {stats.map((st) => (
                <div key={st.label} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-4">
                  <div className="text-2xl font-bold text-[color:var(--primary)]">{st.value}</div>
                  <div className="mt-0.5 text-xs text-[color:var(--muted)]">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Filter tabs */}
            <div
              className="services-header-item mt-8 flex flex-wrap gap-2"
              style={{ transitionDelay: "290ms" }}
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                    active === f
                      ? "border-[color:var(--primary)] bg-[color:var(--primary)] text-white shadow-sm"
                      : "border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--muted)] hover:border-[color:var(--primary)]/50 hover:text-[color:var(--foreground)]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── Grid ── */}
      <Container className="py-12 md:py-16">
        <div
          ref={gridRef}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((p) => (
            <div key={p.id} className="card-animated group">
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--primary)]/30 hover:shadow-xl">

                {/* Animated top accent bar */}
                <span className={`absolute inset-x-0 top-0 h-[2.5px] origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r ${tagAccent[p.tag] ?? "from-[color:var(--primary)] to-[color:var(--ring)]"} transition-transform duration-500 ease-out group-hover:scale-x-100`} />

                {/* Visual header band */}
                <div className={`h-[7px] w-full bg-gradient-to-r ${tagAccent[p.tag] ?? "from-[color:var(--primary)] to-[color:var(--ring)]"} opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />

                <div className="flex flex-1 flex-col p-6">
                  {/* Tag + external icon */}
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${tagStyle[p.tag] ?? "text-[color:var(--primary)] bg-[color:var(--primary)]/8 border-[color:var(--primary)]/20"}`}>
                      {p.tag}
                    </span>
                    <svg
                      className="h-4 w-4 text-[color:var(--border)] transition-all duration-200 group-hover:text-[color:var(--primary)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 text-[17px] font-semibold leading-snug">
                    {p.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">
                    {p.desc}
                  </p>

                  {/* Stack tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-[color:var(--muted-bg)] px-2.5 py-0.5 text-[11px] font-medium text-[color:var(--muted)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {items.length === 0 && (
          <div className="flex flex-col items-center py-24 text-center">
            <div className="text-4xl">📂</div>
            <p className="mt-3 text-sm text-[color:var(--muted)]">No projects in this category yet.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center md:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">Let's build together</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Have a project in mind?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[color:var(--muted)]">
            We'd love to hear about your idea. Book a free call and let's figure out the best approach together.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
          >
            Start a project
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </main>
  );
}
