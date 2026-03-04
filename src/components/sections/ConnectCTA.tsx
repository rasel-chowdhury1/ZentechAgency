"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

const trust = [
  { icon: "✦", text: "Free 30-min call" },
  { icon: "✦", text: "No commitment" },
  { icon: "✦", text: "Response within 24 h" },
];

export default function ConnectCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("ds-section-visible"), 80); obs.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[color:var(--dark)] border-t border-white/10">
      <Container className="py-16 md:py-20">

        <div
          ref={sectionRef}
          className="ds-section-enter relative overflow-hidden rounded-3xl border border-[color:var(--primary)]/20 bg-gradient-to-br from-[color:var(--primary)]/90 to-[color:var(--ring)]/80 px-8 py-14 md:px-16 md:py-20"
        >
          {/* Glow orbs */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-black/20 blur-3xl" />

          {/* Top accent */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-white/40 to-white/10" />

          <div className="relative z-10 flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">

            {/* Left copy */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Let's Collaborate
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                Let's Connect And<br className="hidden sm:block" /> Collaborate!
              </h2>

              <p className="mt-3 leading-relaxed text-white/70">
                Share your requirements — we'll respond with a clear plan and estimate. No pressure, no long-term lock-in.
              </p>

              {/* Trust pills */}
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                {trust.map((t) => (
                  <span
                    key={t.text}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/75"
                  >
                    <span className="text-white/60 text-[10px]">{t.icon}</span>
                    {t.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right buttons */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--dark)] transition-opacity duration-200 hover:opacity-90"
              >
                Contact Now
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/20"
              >
                View Pricing
              </Link>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}
