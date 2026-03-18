"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("faq-visible"); obs.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-[color:var(--border)] bg-[color:var(--muted-bg)]">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[400px] w-[400px] rounded-full opacity-[0.04] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }} />

      <Container className="py-16 md:py-20">
        <div
          ref={sectionRef}
          className="grid gap-12 lg:grid-cols-[400px_1fr] lg:gap-16 xl:grid-cols-[440px_1fr]"
        >

          {/* ── LEFT — sticky intro panel ── */}
          <div className="faq-left lg:sticky lg:top-24 lg:self-start">

            <span className="faq-item inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]"
              style={{ transitionDelay: "0ms" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              FAQ
            </span>

            <h2 className="faq-item mt-5 text-[clamp(22px,3.5vw,36px)] font-bold leading-tight tracking-tight"
              style={{ transitionDelay: "70ms" }}>
              Common Questions About
              <span className="block" style={{ background: "linear-gradient(90deg, var(--primary), var(--ring))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                ZentechPoint's Services
              </span>
            </h2>

            <p className="faq-item mt-4 text-[15px] leading-relaxed text-[color:var(--muted)]"
              style={{ transitionDelay: "130ms" }}>
              Clear answers to the questions we hear most. Can't find what you're looking for?
              Reach out and we'll respond within 24 hours.
            </p>

            {/* Stats */}
            <div className="faq-item mt-8 grid grid-cols-2 gap-3" style={{ transitionDelay: "190ms" }}>
              {[
                { value: `${faqs.length}`, label: "Questions covered" },
                { value: "24h", label: "Response time" },
                { value: "99%", label: "Client satisfaction" },
                { value: "Free", label: "First consultation" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-3"
                >
                  <div className="text-xl font-bold text-[color:var(--foreground)]"
                    style={{ background: "linear-gradient(135deg, var(--primary), var(--ring))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] text-[color:var(--muted)]">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="faq-item mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
              style={{ transitionDelay: "250ms" }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-md"
              >
                Book a Free Consultation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] px-5 py-2.5 text-sm font-semibold text-[color:var(--foreground)] transition-all duration-200 hover:border-[color:var(--primary)]/30 hover:-translate-y-0.5"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* ── RIGHT — accordion ── */}
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={f.q}
                  className={`faq-item overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[color:var(--primary)]/30 bg-[color:var(--card)] shadow-lg shadow-[color:var(--primary)]/5"
                      : "border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--primary)]/20 hover:shadow-sm"
                  }`}
                  style={{ transitionDelay: `${i * 55}ms` }}
                >
                  {/* Top gradient bar */}
                  <div className={`h-[2.5px] bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--ring)] origin-left transition-transform duration-500 ease-out ${isOpen ? "scale-x-100" : "scale-x-0"}`} />

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      {/* Step number */}
                      <span className={`mt-0.5 shrink-0 text-[11px] font-black tabular-nums transition-colors duration-300 ${isOpen ? "text-[color:var(--primary)]" : "text-[color:var(--border)]"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-semibold leading-snug text-[color:var(--foreground)]">
                        {f.q}
                      </span>
                    </div>

                    {/* Toggle icon */}
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[color:var(--primary)]/30 bg-[color:var(--primary)]/10 text-[color:var(--primary)] rotate-45"
                        : "border-[color:var(--border)] bg-[color:var(--muted-bg)] text-[color:var(--muted)]"
                    }`}>
                      <svg className="h-3.5 w-3.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </button>

                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="flex gap-4 px-6 pb-6 pt-0">
                      <div className="ml-9 border-l-2 border-[color:var(--primary)]/20 pl-4">
                        <p className="text-[14px] leading-[1.8] text-[color:var(--muted)]">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom contact strip */}
            <div className="faq-item mt-2 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--card)]/50 px-6 py-5 text-center sm:flex-row sm:text-left"
              style={{ transitionDelay: `${faqs.length * 55}ms` }}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[color:var(--primary)]/10">
                  <svg className="h-4 w-4 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[color:var(--foreground)]">Still have questions?</p>
                  <p className="text-[12px] text-[color:var(--muted)]">Our team responds within 24 hours — no pressure.</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-4 py-1.5 text-[13px] font-semibold text-[color:var(--primary)] transition-all duration-200 hover:bg-[color:var(--primary)]/15"
              >
                Get in touch ↗
              </Link>
            </div>
          </div>

        </div>
      </Container>

      <style>{`
        .faq-item {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.55s cubic-bezier(0.22,1,0.36,1),
                      transform 0.55s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.3s, box-shadow 0.3s;
        }
        .faq-visible .faq-item {
          opacity: 1;
          transform: translateY(0);
        }
        .faq-left .faq-item {
          transition-property: opacity, transform;
        }
      `}</style>
    </section>
  );
}
