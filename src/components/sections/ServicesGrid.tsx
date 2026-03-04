"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { services } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  Growth: (
    <svg className="h-5 w-5 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  Development: (
    <svg className="h-5 w-5 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  Mobile: (
    <svg className="h-5 w-5 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
    </svg>
  ),
  Engineering: (
    <svg className="h-5 w-5 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Design: (
    <svg className="h-5 w-5 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  Consulting: (
    <svg className="h-5 w-5 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
};

export default function ServicesGrid() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observe = (el: HTMLElement | null, visibleClass: string, delay = 0) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add(visibleClass), delay);
            obs.disconnect();
          }
        },
        { threshold: 0, rootMargin: "0px 0px -60px 0px" }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };

    const cleanupHeader = observe(headerRef.current, "services-header-visible", 80);
    const cleanupGrid = observe(gridRef.current, "cards-visible", 80);
    return () => { cleanupHeader?.(); cleanupGrid?.(); };
  }, []);

  return (
    <section className="border-t border-[color:var(--border)] bg-[color:var(--background)]">
      <Container className="py-16">

        {/* Header */}
        <div ref={headerRef} className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span
              className="services-header-item inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]"
              style={{ transitionDelay: "0ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              Our Services
            </span>
            <h2
              className="services-header-item mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
              style={{ transitionDelay: "80ms" }}
            >
              Expert solutions designed to drive success
            </h2>
            <p
              className="services-header-item mt-3 max-w-xl leading-relaxed text-[color:var(--muted)]"
              style={{ transitionDelay: "150ms" }}
            >
              We combine strategy, design, engineering, and growth to build premium digital products.
            </p>
          </div>
          <Link
            href="/services"
            className="services-header-item group inline-flex items-center gap-2 text-sm font-medium text-[color:var(--primary)] transition-all duration-200 hover:gap-3"
            style={{ transitionDelay: "210ms" }}
          >
            View all services
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card-animated group"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--primary)]/40 hover:shadow-xl">

                {/* Animated top accent bar */}
                <span className="absolute inset-x-0 top-0 h-[2.5px] origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--ring)] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                {/* Faint background number */}
                <span className="pointer-events-none absolute -right-1 -top-2 select-none text-[88px] font-black leading-none text-[color:var(--border)] opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--muted-bg)] ring-1 ring-[color:var(--border)] transition-all duration-300 group-hover:bg-[color:var(--primary)]/10 group-hover:ring-[color:var(--primary)]/30">
                  {icons[s.category]}
                </div>

                {/* Category */}
                <p className="relative z-10 mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[color:var(--primary)]">
                  {s.category}
                </p>

                {/* Title */}
                <h3 className="relative z-10 mt-1 text-[17px] font-semibold leading-snug">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {s.description}
                </p>

                {/* Bullet tags */}
                <div className="relative z-10 mt-4 flex flex-wrap gap-1.5">
                  {s.bullets.slice(0, 3).map((b) => (
                    <span
                      key={b}
                      className="rounded-full bg-[color:var(--muted-bg)] px-2.5 py-0.5 text-[11px] font-medium text-[color:var(--muted)]"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="relative z-10 mt-5 flex items-center gap-1.5 text-sm font-medium text-[color:var(--primary)] transition-all duration-200 group-hover:gap-2.5">
                  Learn more
                  <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
}
