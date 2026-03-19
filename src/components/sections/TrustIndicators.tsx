"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/layout/Container";

const indicators = [
  {
    emoji: "✅",
    title: "Proven Track Record",
    color: "emerald",
    items: [
      "99% client satisfaction rate",
      "Successfully delivered 200+ projects",
      "5+ years of industry experience",
    ],
  },
  {
    emoji: "🎯",
    title: "Result-Oriented Approach",
    color: "blue",
    items: [
      "Data-driven strategies",
      "Measurable ROI improvements",
      "Performance-focused solutions",
    ],
  },
  {
    emoji: "🔧",
    title: "Full-Service Expertise",
    color: "violet",
    items: [
      "End-to-end project management",
      "Multi-disciplinary team",
      "Latest technology stack",
    ],
  },
  {
    emoji: "📞",
    title: "24/7 Support",
    color: "amber",
    items: [
      "Dedicated account managers",
      "Rapid response times",
      "Ongoing maintenance services",
    ],
  },
];

const accentMap: Record<string, { ring: string; bg: string; text: string; bar: string }> = {
  emerald: {
    ring: "ring-emerald-200 dark:ring-emerald-900",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    text: "text-emerald-700 dark:text-emerald-400",
    bar: "from-emerald-400 to-emerald-600",
  },
  blue: {
    ring: "ring-blue-200 dark:ring-blue-900",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-700 dark:text-blue-400",
    bar: "from-blue-400 to-blue-600",
  },
  violet: {
    ring: "ring-violet-200 dark:ring-violet-900",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    text: "text-violet-700 dark:text-violet-400",
    bar: "from-violet-400 to-violet-600",
  },
  amber: {
    ring: "ring-amber-200 dark:ring-amber-900",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    text: "text-amber-700 dark:text-amber-400",
    bar: "from-amber-400 to-amber-600",
  },
};

export default function TrustIndicators() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("trust-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="border-t border-[color:var(--border)] bg-[color:var(--background)]">
      <Container className="py-8 md:py-12">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
            Why Choose Us
          </span>
          <h2 className="mt-4 text-[clamp(22px,4vw,38px)] font-bold leading-tight tracking-tight">
            Why Industry Leaders Trust ZentechPoint
            <span className="block text-[color:var(--primary)]">for Critical Projects</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--muted)]">
            Our commitment to excellence, transparency, and measurable results has made us the
            preferred technology partner for businesses that demand the best.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={sectionRef}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {indicators.map((ind, i) => {
            const a = accentMap[ind.color];
            return (
              <div
                key={ind.title}
                className="trust-card group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Top gradient bar */}
                <span
                  className={`absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${a.bar} origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100`}
                />

                {/* Emoji badge */}
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl ring-1 ${a.ring} ${a.bg}`}>
                  {ind.emoji}
                </div>

                {/* Title */}
                <h3 className={`mt-4 text-[15px] font-bold leading-snug ${a.text}`}>
                  {ind.title}
                </h3>

                {/* Divider */}
                <div className="mt-3 h-px bg-[color:var(--border)]" />

                {/* Items */}
                <ul className="mt-3 space-y-2.5">
                  {ind.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className={`mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${a.bg}`}>
                        <svg viewBox="0 0 12 12" fill="none" className={`h-2.5 w-2.5 ${a.text}`} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="2,6 5,9 10,3" />
                        </svg>
                      </span>
                      <span className="text-[13px] leading-[1.5] text-[color:var(--muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </Container>

      <style>{`
        .trust-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s, translate 0.3s;
        }
        .trust-visible .trust-card {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
