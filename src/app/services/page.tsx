"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { services } from "@/lib/data";

// ── Per-category accent colour (hex) ──────────────────────────────────────
const ACCENT: Record<string, string> = {
  Development: "#059669",
  Mobile:      "#3b82f6",
  Engineering: "#f59e0b",
  Growth:      "#8b5cf6",
  Design:      "#f43f5e",
  Consulting:  "#06b6d4",
};

// ── SVG icons ──────────────────────────────────────────────────────────────
const ICONS: Record<string, React.ReactNode> = {
  Development: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  Mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
    </svg>
  ),
  Engineering: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Growth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  Design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  Consulting: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
};

const Check = () => (
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5">
    <polyline points="2,6 5,9 10,3" />
  </svg>
);
const Arrow = () => (
  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

// ── Page ───────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const heroRef  = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => heroRef.current?.classList.add("services-header-visible"), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observe = (el: HTMLElement | null, cls: string) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { el.classList.add(cls); obs.disconnect(); } },
        { threshold: 0, rootMargin: "0px 0px -40px 0px" }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };

    const c1 = observe(cardsRef.current, "svc-cards-visible");
    return () => { c1?.(); };
  }, []);

  const [featured, ...rest] = services;
  const fa = ACCENT[featured.category];

  return (
    <main className="min-h-screen bg-[color:var(--background)]">

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <div className="border-b border-[color:var(--border)]">
        <Container className="pt-2 pb-10 md:pt-3 md:pb-14">
          <div ref={heroRef}>

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
              <span className="font-semibold text-[color:var(--foreground)]">Services</span>
            </nav>

            {/* Eyebrow badge */}
            <span
              className="services-header-item inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]"
              style={{ transitionDelay: "0ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              Our Services
            </span>

            {/* Headline */}
            <h1
              className="services-header-item mt-4 text-4xl font-bold tracking-tight md:text-5xl"
              style={{ transitionDelay: "80ms" }}
            >
              Everything you need to<br className="hidden sm:block" /> build &amp; grow online
            </h1>

            {/* Subtitle */}
            <p
              className="services-header-item mt-4 max-w-xl leading-relaxed text-[color:var(--muted)]"
              style={{ transitionDelay: "150ms" }}
            >
              From custom software to brand strategy — end-to-end digital solutions tailored to your goals, timeline, and budget.
            </p>

            {/* Stats cards */}
            <div
              className="services-header-item mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
              style={{ transitionDelay: "220ms" }}
            >
              {[
                { value: "6",   label: "Core services"      },
                { value: "50+", label: "Projects shipped"   },
                { value: "4",   label: "Countries served"   },
                { value: "98%", label: "Client satisfaction"},
              ].map((st) => (
                <div key={st.label} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-4">
                  <div className="text-2xl font-bold text-[color:var(--primary)]">{st.value}</div>
                  <div className="mt-0.5 text-xs text-[color:var(--muted)]">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Category pills */}
            <div
              className="services-header-item mt-7 flex flex-wrap gap-2"
              style={{ transitionDelay: "290ms" }}
            >
              {Object.entries(ACCENT).map(([cat, color]) => (
                <span key={cat}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold"
                  style={{ borderColor: `${color}35`, backgroundColor: `${color}10`, color }}>
                  {ICONS[cat]}
                  {cat}
                </span>
              ))}
            </div>

          </div>
        </Container>
      </div>



      {/* ════════════════════════════════════
          SERVICES GRID
      ════════════════════════════════════ */}
      <Container className="py-14 md:py-20">
        <div ref={cardsRef}>

          {/* Section header */}
          <div className="svc-ci mb-10 flex flex-wrap items-end justify-between gap-4" style={{ "--d": "0ms" } as React.CSSProperties}>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--primary)]">Our Expertise</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">All 6 Services</h2>
            </div>
            <Link href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)] shadow-sm transition-all hover:border-[color:var(--primary)]/30 hover:shadow-md">
              Free consultation <Arrow />
            </Link>
          </div>

          {/* ── Featured card (full-width) ── */}
          <div className="svc-ci" style={{ "--d": "60ms" } as React.CSSProperties}>
            <Link href={`/services/${featured.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-10"
                style={{ borderLeft: `4px solid ${fa}` }}>

                {/* Hover colour wash */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at 8% 50%, ${fa}0d, transparent 55%)` }} />

                {/* Ghost number */}
                <span className="pointer-events-none absolute right-6 top-2 select-none text-[130px] font-black leading-none opacity-[0.04] md:right-10 md:text-[160px]">
                  01
                </span>

                <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_230px] md:items-start">

                  {/* Left */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${fa}18`, color: fa }}>
                        {ICONS[featured.category]}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: fa }}>
                          {featured.category}
                        </p>
                        <span className="mt-0.5 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium text-[color:var(--muted)]"
                          style={{ borderColor: `${fa}30`, backgroundColor: `${fa}08` }}>
                          ⏱ {featured.timeline}
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold leading-snug md:text-[28px]">{featured.title}</h3>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[color:var(--muted)]">{featured.description}</p>

                    {/* Feature pills */}
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {featured.bullets.map((b) => (
                        <li key={b}
                          className="flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--muted-bg)] px-3 py-1 text-[12px] text-[color:var(--muted)]">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: fa }} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-[12px] text-[color:var(--muted)]">
                      <span className="font-semibold text-[color:var(--foreground)]">Best for: </span>{featured.bestFor}
                    </p>
                  </div>

                  {/* Right: deliverables + CTA */}
                  <div className="flex flex-col gap-4">
                    <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted-bg)]/70 p-5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--muted)]">Deliverables</p>
                      <ul className="mt-3 space-y-2">
                        {featured.deliverables.map((d) => (
                          <li key={d} className="flex items-center gap-2 text-[13px]">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                              style={{ backgroundColor: `${fa}18`, color: fa }}>
                              <Check />
                            </span>
                            <span className="text-[color:var(--muted)]">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span className="inline-flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-xl"
                      style={{ backgroundColor: fa }}>
                      View full details <Arrow />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* ── Remaining 5 cards ── */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s, i) => {
              const ac = ACCENT[s.category];
              return (
                <Link key={s.slug} href={`/services/${s.slug}`}
                  className="svc-ci group"
                  style={{ "--d": `${(i + 2) * 60}ms` } as React.CSSProperties}>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ borderTop: `3px solid ${ac}` }}>

                    {/* Hover colour wash */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: `radial-gradient(ellipse at 50% 0%, ${ac}0c, transparent 60%)` }} />

                    {/* Ghost number */}
                    <span className="pointer-events-none absolute -right-1 -top-2 select-none text-[82px] font-black leading-none opacity-[0.045]">
                      {String(i + 2).padStart(2, "0")}
                    </span>

                    {/* Icon + timeline badge */}
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${ac}15`, color: ac }}>
                        {ICONS[s.category]}
                      </div>
                      <span className="rounded-full border px-2.5 py-0.5 text-[10px] font-medium text-[color:var(--muted)]"
                        style={{ borderColor: `${ac}28`, backgroundColor: `${ac}08` }}>
                        {s.timeline}
                      </span>
                    </div>

                    {/* Category */}
                    <p className="relative z-10 mt-4 text-[10px] font-bold uppercase tracking-[0.13em]" style={{ color: ac }}>
                      {s.category}
                    </p>

                    {/* Title */}
                    <h3 className="relative z-10 mt-1 text-[16px] font-bold leading-snug">{s.title}</h3>

                    {/* Description */}
                    <p className="relative z-10 mt-2 flex-1 text-[13px] leading-relaxed text-[color:var(--muted)]">{s.description}</p>

                    {/* Divider with gradient */}
                    <div className="relative z-10 my-4 h-px"
                      style={{ background: `linear-gradient(to right, ${ac}35, transparent)` }} />

                    {/* Bullets */}
                    <ul className="relative z-10 space-y-1.5">
                      {s.bullets.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                            style={{ backgroundColor: `${ac}15`, color: ac }}>
                            <Check />
                          </span>
                          <span className="text-[12px] text-[color:var(--muted)]">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Best for */}
                    <p className="relative z-10 mt-3 text-[11px] text-[color:var(--muted)]">
                      <span className="font-semibold" style={{ color: ac }}>Best for: </span>{s.bestFor}
                    </p>

                    {/* CTA row */}
                    <div className="relative z-10 mt-5 flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200 group-hover:gap-2.5"
                      style={{ color: ac }}>
                      View details <Arrow />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* ── Bottom CTA banner ── */}
          <div className="svc-ci mt-12 overflow-hidden rounded-3xl" style={{ "--d": "500ms" } as React.CSSProperties}>
            <div className="relative overflow-hidden rounded-3xl p-10 text-center md:p-14"
              style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--ring) 100%)" }}>

              {/* Decorative blobs */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white opacity-[0.06]" />
              <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-white opacity-[0.04]" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-[0.03] blur-2xl" />

              <p className="relative z-10 text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">
                Get Started Today
              </p>
              <h2 className="relative z-10 mt-2 text-2xl font-bold text-white md:text-[28px]">
                Not sure which service you need?
              </h2>
              <p className="relative z-10 mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-white/70">
                Book a free consultation and we'll match the right solution to your goals and budget.
              </p>

              <div className="relative z-10 mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ color: "var(--primary)" }}>
                  Book free consultation
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20">
                  See pricing
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* ── Animations ── */}
      <style>{`

        /* Service cards */
        .svc-ci {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1) var(--d,0ms),
                      transform 0.6s cubic-bezier(0.22,1,0.36,1) var(--d,0ms);
        }
        .svc-cards-visible .svc-ci { opacity:1; transform:translateY(0); }
      `}</style>
    </main>
  );
}
