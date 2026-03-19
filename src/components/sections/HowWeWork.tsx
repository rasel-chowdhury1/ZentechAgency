"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/layout/Container";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    desc: "We align on your goals before writing a single line of code.",
    items: ["Requirements analysis", "Market research", "Strategy development"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & Development",
    desc: "Creative precision meets engineering rigour at every stage.",
    items: ["Creative conceptualization", "Agile development methodology", "Quality assurance testing"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Launch & Optimization",
    desc: "Precision deployment followed by data-driven refinement.",
    items: ["Smooth deployment", "Performance monitoring", "Continuous improvements"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7l-.002.002" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Support & Growth",
    desc: "We stay invested in your success long after launch.",
    items: ["Ongoing maintenance", "Feature enhancements", "Strategic consultations"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("hww-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="border-t border-[color:var(--border)] bg-[color:var(--muted-bg)]">
      <Container className="py-8 md:py-12">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
            Our Process
          </span>
          <h2 className="mt-4 text-[clamp(22px,4vw,38px)] font-bold leading-tight tracking-tight">
            How ZentechPoint
            <span className="text-[color:var(--primary)]"> Delivers Excellence</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--muted)]">
            A structured, transparent workflow that keeps you informed and in control —
            from the first conversation to long-term growth.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={sectionRef}
          className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Connecting line — desktop only */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-[color:var(--border)] to-transparent lg:block" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="hww-card group relative flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--primary)]/40 hover:shadow-xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Top accent bar */}
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--ring)] transition-transform duration-500 ease-out group-hover:scale-x-100" />

              {/* Step number + icon row */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--primary)]/10 text-[color:var(--primary)] ring-1 ring-[color:var(--primary)]/20 transition-all duration-300 group-hover:bg-[color:var(--primary)] group-hover:text-white group-hover:ring-transparent">
                  {step.icon}
                </div>
                <span className="font-black text-[32px] leading-none text-[color:var(--border)] transition-colors duration-300 group-hover:text-[color:var(--primary)]/20">
                  {step.number}
                </span>
              </div>

              {/* Title & desc */}
              <h3 className="mt-5 text-[16px] font-bold leading-snug text-[color:var(--foreground)]">
                {step.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[color:var(--muted)]">
                {step.desc}
              </p>

              {/* Divider */}
              <div className="my-4 h-px bg-[color:var(--border)]" />

              {/* Items */}
              <ul className="space-y-2">
                {step.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--primary)]" />
                    <span className="text-[12px] font-medium text-[color:var(--muted)]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Step connector dot — desktop */}
              <div className="absolute -top-[6px] left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[color:var(--primary)] bg-[color:var(--card)] lg:block" />
            </div>
          ))}
        </div>

      </Container>

      <style>{`
        .hww-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s;
        }
        .hww-visible .hww-card {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
