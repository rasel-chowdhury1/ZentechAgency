"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

const trust = [
  { icon: "✦", text: "Free consultation" },
  { icon: "✦", text: "No long-term lock-in" },
  { icon: "✦", text: "Response within 24 h" },
];

export default function CTA() {
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
    <section className="border-t border-[color:var(--border)] bg-[color:var(--background)]">
      <Container className="py-16 md:py-20">

        <div
          ref={sectionRef}
          className="ds-section-enter relative overflow-hidden rounded-3xl bg-[color:var(--dark)] px-8 py-14 text-[color:var(--dark-foreground)] md:px-16 md:py-20"
        >
          {/* Gradient orbs */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--primary)]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[color:var(--ring)]/15 blur-3xl" />

          {/* Top accent bar */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--ring)]" />

          <div className="relative z-10 flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">

            {/* Left copy */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
                Ready to start?
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                Start Your Project Journey with
                <span className="block" style={{ background: "linear-gradient(90deg, var(--primary), var(--ring))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  a Free Consultation
                </span>
              </h2>

              <p className="mt-3 max-w-lg leading-relaxed text-white/60">
                Take the first step toward digital transformation. Our expert team is ready to discuss
                your project requirements, provide strategic recommendations, and create a customized
                solution that drives real business results.
              </p>

              {/* Trust pills */}
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                {trust.map((t) => (
                  <span
                    key={t.text}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/60"
                  >
                    <span className="text-[color:var(--primary)] text-[10px]">{t.icon}</span>
                    {t.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right buttons */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--primary)] px-7 py-3.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
              >
                Contact Us
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
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
