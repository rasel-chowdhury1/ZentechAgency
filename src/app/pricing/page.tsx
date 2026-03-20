"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { pricing } from "@/lib/data";

const guarantees = [
  { icon: "✦", text: "No hidden fees" },
  { icon: "✦", text: "Free consultation" },
  { icon: "✦", text: "No long-term lock-in" },
];

const included = [
  "Mobile-responsive design",
  "SSL & basic security setup",
  "Google Analytics integration",
  "Cross-browser testing",
  "Post-launch support (14 days)",
  "Source code ownership",
];

function Check() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function PricingPage() {
  const heroRef  = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => heroRef.current?.classList.add("services-header-visible"), 120);
    const el = cardsRef.current;
    if (!el) return () => clearTimeout(t);
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("cards-visible"), 80); obs.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => { clearTimeout(t); obs.disconnect(); };
  }, []);

  return (
    <main className="min-h-screen bg-[color:var(--background)]">

      {/* ── Hero ── */}
      <div className="border-b border-[color:var(--border)]">
        <Container className="pt-2 pb-12 md:pt-3 md:pb-16">
          <div ref={heroRef} className="text-center">
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
              <span className="font-semibold text-[color:var(--foreground)]">Pricing</span>
            </nav>

            <span
              className="services-header-item inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]"
              style={{ transitionDelay: "0ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              Pricing
            </span>

            <h1
              className="services-header-item mt-4 text-4xl font-bold tracking-tight md:text-5xl"
              style={{ transitionDelay: "80ms" }}
            >
              Simple, transparent pricing
            </h1>

            <p
              className="services-header-item mx-auto mt-4 max-w-lg leading-relaxed text-[color:var(--muted)]"
              style={{ transitionDelay: "150ms" }}
            >
              Every project is unique — these are our starting points. Final price is scoped after a free consultation.
            </p>

            {/* Guarantee pills */}
            <div
              className="services-header-item mt-6 flex flex-wrap items-center justify-center gap-3"
              style={{ transitionDelay: "220ms" }}
            >
              {guarantees.map((g) => (
                <span
                  key={g.text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3.5 py-1.5 text-xs font-medium text-[color:var(--muted)]"
                >
                  <span className="text-[color:var(--primary)] text-[10px]">{g.icon}</span>
                  {g.text}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── Cards ── */}
      <Container className="py-12 md:py-16">
        <div
          ref={cardsRef}
          className="grid gap-5 md:grid-cols-3 md:items-stretch"
        >
          {pricing.map((p) =>
            p.featured ? (
              /* ── Featured card (dark) ── */
              <div key={p.name} className="card-animated relative md:-mt-4 md:mb-0">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[color:var(--dark)] text-[color:var(--dark-foreground)] shadow-2xl ring-1 ring-[color:var(--primary)]/40">
                  {/* Glow top bar */}
                  <div className="h-[3px] w-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--ring)]" />

                  {/* Most popular badge */}
                  <div className="absolute right-4 top-5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--primary)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      ★ Most Popular
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">{p.tag}</p>
                    <h2 className="mt-1.5 text-2xl font-bold text-white">{p.name}</h2>

                    <div className="mt-5 flex items-end gap-1">
                      <span className="text-4xl font-black text-white">{p.price}</span>
                      {p.price !== "Custom" && <span className="mb-1 text-sm text-white/40">/ project</span>}
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-white/55">{p.desc}</p>

                    <ul className="mt-6 flex-1 space-y-2.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-white/80">
                          <svg className="h-4 w-4 shrink-0 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                    >
                      Get Started
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              /* ── Regular card ── */
              <div key={p.name} className="card-animated group">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] transition-all duration-300 hover:border-[color:var(--primary)]/30 hover:shadow-lg">
                  {/* Animated top accent */}
                  <span className="absolute inset-x-0 top-0 h-[2.5px] origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--ring)] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">{p.tag}</p>
                    <h2 className="mt-1.5 text-2xl font-bold">{p.name}</h2>

                    <div className="mt-5 flex items-end gap-1">
                      <span className="text-4xl font-black">{p.price}</span>
                      {p.price !== "Custom" && <span className="mb-1 text-sm text-[color:var(--muted)]">/ project</span>}
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{p.desc}</p>

                    <ul className="mt-6 flex-1 space-y-2.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm">
                          <Check />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--muted-bg)] px-5 py-3 text-sm font-semibold transition-all duration-200 hover:border-[color:var(--primary)]/40 hover:bg-[color:var(--primary)]/5 hover:text-[color:var(--primary)]"
                    >
                      Get Started
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* ── Everything included strip ── */}
        <div className="mt-14 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 md:p-10">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">All plans include</p>
            <h2 className="mt-2 text-xl font-bold md:text-2xl">Everything you need to launch</h2>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-[color:var(--muted)]">
                <Check />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">Still unsure?</p>
          <h2 className="mt-2 text-xl font-bold md:text-2xl">Let's scope your project together</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[color:var(--muted)]">
            Book a free 30-minute consultation and we'll give you an honest estimate with no strings attached.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
          >
            Book a free consultation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </main>
  );
}
