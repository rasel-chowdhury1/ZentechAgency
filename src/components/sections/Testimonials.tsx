"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

// TODO: replace with real client testimonials
const testimonials: Testimonial[] = [
  {
    quote:
      "ZentechPoint delivered our platform ahead of schedule. Communication was clear at every step and the final product exceeded our expectations.",
    name: "Product Owner",
    role: "Founder, E-commerce startup",
    rating: 5,
  },
  {
    quote:
      "They rebuilt our mobile app from the ground up. Performance improved dramatically and our user ratings went up within weeks of launch.",
    name: "Head of Product",
    role: "Director, FinTech company",
    rating: 5,
  },
  {
    quote:
      "Their engineers felt like an extension of our own team. Code quality and documentation were excellent.",
    name: "Engineering Lead",
    role: "CTO, SaaS company",
    rating: 5,
  },
  {
    quote:
      "From UI/UX to deployment, the whole process was smooth. They understood our business goals and turned them into a product our customers love.",
    name: "Operations Manager",
    role: "COO, Healthcare provider",
    rating: 5,
  },
  {
    quote:
      "Reliable, responsive and genuinely invested in our success. Their ongoing support has been just as strong as the initial build.",
    name: "Marketing Director",
    role: "Head of Growth, Agency",
    rating: 5,
  },
  {
    quote:
      "We've worked with several agencies before — ZentechPoint is the first one that consistently delivered on time and on budget.",
    name: "Project Manager",
    role: "PMO, Logistics company",
    rating: 5,
  },
];

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const total = testimonials.length;

  const go = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total]
  );

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, total, index]);

  // Reveal on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("testi-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden border-t border-[color:var(--border)] bg-[color:var(--background)]">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />

      <Container className="relative py-12 md:py-20">
        <div ref={sectionRef}>
          {/* Header */}
          <div className="testi-item mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              Testimonials
            </span>
            <h2 className="mt-4 text-[clamp(24px,4vw,40px)] font-bold leading-tight tracking-tight">
              What Our{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, var(--primary), var(--ring))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Clients Say
              </span>
            </h2>
          </div>

          {/* Slide */}
          <div
            className="testi-item mx-auto mt-10 max-w-3xl text-center"
            style={{ transitionDelay: "100ms" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {/* Quote icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--primary)]/10 ring-1 ring-[color:var(--primary)]/20">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-[color:var(--primary)]" fill="currentColor" aria-hidden="true">
                <path d="M9.6 5C6 6.5 3.5 9.6 3.5 13.6V19h6.3v-6.3H6.6c.1-2.6 1.6-4.5 4-5.6L9.6 5zm10.4 0c-3.6 1.5-6.1 4.6-6.1 8.6V19h6.3v-6.3H17c.1-2.6 1.6-4.5 4-5.6L20 5z" />
              </svg>
            </div>

            <div key={index} className="testi-slide" aria-live="polite">
              <blockquote className="mt-8 text-[clamp(16px,2.2vw,22px)] font-medium leading-relaxed text-[color:var(--foreground)]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Stars */}
              <div className="mt-6 flex items-center justify-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 ${i < t.rating ? "text-amber-400" : "text-[color:var(--border)]"}`}
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="mt-5 flex items-center justify-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--ring)] text-sm font-bold text-white shadow-md shadow-[color:var(--primary)]/20">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="text-left">
                  <p className="text-[15px] font-semibold text-[color:var(--foreground)]">{t.name}</p>
                  <p className="text-[13px] text-[color:var(--muted)]">{t.role}</p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--primary)]/40 text-[color:var(--primary)] transition-all duration-200 hover:bg-[color:var(--primary)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-6 bg-[color:var(--primary)]"
                        : "w-2 bg-[color:var(--primary)]/25 hover:bg-[color:var(--primary)]/50"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--primary)]/40 text-[color:var(--primary)] transition-all duration-200 hover:bg-[color:var(--primary)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .testi-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .testi-visible .testi-item {
          opacity: 1;
          transform: translateY(0);
        }
        .testi-slide {
          animation: testiIn 0.55s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes testiIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .testi-item, .testi-slide { animation: none; transition: none; opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
