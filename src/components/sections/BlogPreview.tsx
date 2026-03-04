"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { blogPreview } from "@/lib/data";

const tagAccent: Record<string, string> = {
  Design:  "from-violet-400 to-purple-400",
  SEO:     "from-emerald-400 to-teal-400",
  Product: "from-orange-400 to-amber-400",
};

const tagStyle: Record<string, string> = {
  Design:  "text-violet-700 bg-violet-50 border-violet-200",
  SEO:     "text-emerald-700 bg-emerald-50 border-emerald-200",
  Product: "text-orange-700 bg-orange-50 border-orange-200",
};

const readTimes: Record<string, string> = {
  Design:  "5 min read",
  SEO:     "7 min read",
  Product: "6 min read",
};

const excerpts: Record<string, string> = {
  "How to design a premium agency website":
    "Discover the key principles — typography, spacing, and motion — that separate a premium agency site from the rest.",
  "SEO checklist for modern Next.js websites":
    "A practical, up-to-date checklist covering metadata, Core Web Vitals, structured data, and more for Next.js projects.",
  "MVP roadmap: build fast without breaking quality":
    "How to scope, prioritise, and ship your first version without accumulating technical debt that haunts you later.",
};

export default function BlogPreview() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observe = (el: HTMLElement | null, cls: string, delay = 0) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add(cls), delay); obs.disconnect(); } },
        { threshold: 0, rootMargin: "0px 0px -60px 0px" }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = observe(headerRef.current, "services-header-visible", 80);
    const c2 = observe(gridRef.current,   "cards-visible",           80);
    return () => { c1?.(); c2?.(); };
  }, []);

  return (
    <section className="border-t border-[color:var(--border)] bg-[color:var(--background)]">
      <Container className="py-16 md:py-20">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span
              className="services-header-item inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]"
              style={{ transitionDelay: "0ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              Insights
            </span>
            <h2
              className="services-header-item mt-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ transitionDelay: "80ms" }}
            >
              Latest tips &amp; trends
            </h2>
            <p
              className="services-header-item mt-3 max-w-xl leading-relaxed text-[color:var(--muted)]"
              style={{ transitionDelay: "150ms" }}
            >
              Practical insights on design, engineering, SEO, and product strategy — written by our team.
            </p>
          </div>

          <Link
            href="/blog"
            className="services-header-item group inline-flex items-center gap-2 text-sm font-medium text-[color:var(--primary)] transition-all duration-200 hover:gap-3"
            style={{ transitionDelay: "210ms" }}
          >
            View all articles
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* ── Cards ── */}
        <div ref={gridRef} className="grid gap-5 md:grid-cols-3">
          {blogPreview.map((b, i) => (
            <Link
              key={b.title}
              href="/blog"
              className="card-animated group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--primary)]/30 hover:shadow-xl">

                {/* Animated top accent */}
                <span className={`absolute inset-x-0 top-0 h-[2.5px] origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r ${tagAccent[b.tag] ?? "from-[color:var(--primary)] to-[color:var(--ring)]"} transition-transform duration-500 ease-out group-hover:scale-x-100`} />

                {/* Gradient visual band */}
                <div className={`h-[6px] w-full bg-gradient-to-r ${tagAccent[b.tag] ?? "from-[color:var(--primary)] to-[color:var(--ring)]"} opacity-15 transition-opacity duration-300 group-hover:opacity-25`} />

                <div className="flex flex-1 flex-col p-6">

                  {/* Tag + read time */}
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${tagStyle[b.tag] ?? "text-[color:var(--primary)] bg-[color:var(--primary)]/8 border-[color:var(--primary)]/20"}`}>
                      {b.tag}
                    </span>
                    <span className="text-[11px] text-[color:var(--muted)]">
                      {readTimes[b.tag] ?? "5 min read"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-[17px] font-semibold leading-snug transition-colors duration-200 group-hover:text-[color:var(--primary)]">
                    {b.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">
                    {excerpts[b.title] ?? "Short preview text goes here."}
                  </p>

                  {/* Footer: date + CTA */}
                  <div className="mt-5 flex items-center justify-between border-t border-[color:var(--border)] pt-4">
                    <span className="text-[11px] font-medium text-[color:var(--muted)]">{b.date}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--primary)] transition-all duration-200 group-hover:gap-2.5">
                      Read more
                      <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
}
