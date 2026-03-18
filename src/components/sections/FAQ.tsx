"use client";

import { useState, useEffect, useRef } from "react";
import Container from "@/components/layout/Container";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef   = useRef<HTMLDivElement>(null);

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
    const c2 = observe(listRef.current,   "cards-visible",           80);
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
              FAQ
            </span>
            <h2
              className="services-header-item mt-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ transitionDelay: "80ms" }}
            >
              Common Questions About ZentechPoint's Services
            </h2>
            <p
              className="services-header-item mt-3 max-w-xl leading-relaxed text-[color:var(--muted)]"
              style={{ transitionDelay: "150ms" }}
            >
              Quick answers about our process, timelines, and pricing. Still have questions?{" "}
              <a href="/contact" className="font-medium text-[color:var(--primary)] underline-offset-2 hover:underline">
                Let's talk.
              </a>
            </p>
          </div>

          {/* Stat pill */}
          <div
            className="services-header-item flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] px-5 py-3"
            style={{ transitionDelay: "220ms" }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--primary)]/10 text-[color:var(--primary)]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--muted)]">Questions answered</p>
              <p className="text-lg font-bold">{faqs.length}+</p>
            </div>
          </div>
        </div>

        {/* ── Accordion ── */}
        <div ref={listRef} className="grid gap-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={f.q}
                className={`card-animated group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[color:var(--primary)]/30 bg-[color:var(--card)] shadow-md"
                    : "border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--primary)]/20 hover:shadow-sm"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Top accent line (visible when open) */}
                <div
                  className={`h-[2.5px] w-full origin-left bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--ring)] transition-transform duration-500 ease-out ${
                    isOpen ? "scale-x-100" : "scale-x-0"
                  }`}
                />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  {/* Index + question */}
                  <div className="flex items-center gap-4">
                    <span
                      className={`shrink-0 text-[11px] font-bold tabular-nums transition-colors duration-300 ${
                        isOpen ? "text-[color:var(--primary)]" : "text-[color:var(--muted)]/50"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[15px] font-semibold leading-snug transition-colors duration-300 ${
                        isOpen ? "text-[color:var(--foreground)]" : "text-[color:var(--foreground)]"
                      }`}
                    >
                      {f.q}
                    </span>
                  </div>

                  {/* Chevron icon */}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[color:var(--primary)]/30 bg-[color:var(--primary)]/10 text-[color:var(--primary)] rotate-180"
                        : "border-[color:var(--border)] bg-[color:var(--muted-bg)] text-[color:var(--muted)]"
                    }`}
                  >
                    <svg className="h-3.5 w-3.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                {/* Answer with smooth expand */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex gap-4 px-6 pb-6">
                    <div className="shrink-0 pt-0.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--primary)]/15">
                        <svg className="h-3 w-3 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-[color:var(--muted)]">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">Still have questions?</p>
            <h3 className="mt-1 text-lg font-bold">We're happy to help you decide</h3>
            <p className="mt-1 text-sm text-[color:var(--muted)]">Book a free call and get honest answers — no pressure.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
          >
            Book a free call
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </Container>
    </section>
  );
}
