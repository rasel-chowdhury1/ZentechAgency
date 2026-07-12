"use client";

import { useEffect, useRef } from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { team } from "@/lib/data";

const stats = [
  { value: "12+",  label: "Team Members" },
  { value: "50+",  label: "Projects Delivered" },
  { value: "2k+",  label: "Happy Clients" },
  { value: "4+",   label: "Years of Excellence" },
];

const values = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Precision & Quality",
    desc: "Every line of code and every pixel is crafted with intentional care. We hold ourselves to an uncompromising standard — we don't ship until it's truly right.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Client-First Mindset",
    desc: "Your goals are our compass. We listen closely, adapt quickly, and focus only on what actually moves the needle for your business — nothing less.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Fast Delivery",
    desc: "Speed without shortcuts. Our structured workflows and experienced team keep every project on time, on budget, and on brief — consistently.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Full Transparency",
    desc: "No surprises, no hidden fees. You get clear estimates, open communication, and honest progress updates from day one to launch day.",
  },
];

const points = [
  "Data-driven decisions at every stage",
  "Fast delivery without sacrificing quality",
  "Performance, SEO & security built-in",
  "Post-launch support and continuous iteration",
];

const socialIcons: Record<string, ReactElement> = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L2.25 2.25h6.922l4.255 5.625zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  ),
};

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2);
}

function useReveal(cls: string, delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add(cls), delay); obs.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [cls, delay]);
  return ref;
}

export default function AboutPage() {
  const heroRef   = useRef<HTMLDivElement>(null);
  const aboutRef  = useReveal("ds-section-visible");
  const valuesRef = useReveal("cards-visible", 80);
  const teamRef   = useReveal("cards-visible", 80);

  useEffect(() => {
    const t = setTimeout(() => heroRef.current?.classList.add("services-header-visible"), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-[color:var(--background)]">

      {/* ── Hero ── */}
      <div className="border-b border-[color:var(--border)]">
        <Container className="pt-6 pb-12 md:pt-8 md:pb-16">
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
              <span className="font-semibold text-[color:var(--foreground)]">About</span>
            </nav>

            <span
              className="services-header-item inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]"
              style={{ transitionDelay: "0ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              About Us
            </span>

            <h1
              className="services-header-item mt-4 text-4xl font-bold tracking-tight md:text-5xl"
              style={{ transitionDelay: "80ms" }}
            >
              We build digital products<br className="hidden sm:block" /> that drive real growth
            </h1>

            <p
              className="services-header-item mt-4 max-w-xl leading-relaxed text-[color:var(--muted)]"
              style={{ transitionDelay: "150ms" }}
            >
              ZentechPoint is a premium digital agency specialising in web, mobile, software, and growth strategy — built for businesses that take quality seriously.
            </p>

            {/* Stats */}
            <div
              className="services-header-item mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
              style={{ transitionDelay: "220ms" }}
            >
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-5">
                  <div className="text-2xl font-bold text-[color:var(--primary)]">{s.value}</div>
                  <div className="mt-0.5 text-xs text-[color:var(--muted)]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── Who we are ── */}
      <Container className="py-16 md:py-20">
        <div ref={aboutRef} className="ds-section-enter grid gap-12 md:grid-cols-2 md:items-center">

          {/* Image collage */}
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/heroImage.png" alt="Team" width={400} height={280} className="h-[180px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[220px]" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/heroImage2.png" alt="Office" width={400} height={280} className="h-[180px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[220px]" />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image src="/images/heroImage1.jpg" alt="Work" width={800} height={280} className="h-[140px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[160px]" />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              Who we are
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-[2rem]">
              We bring your ideas to life,<br /> every step of the way
            </h2>

            <p className="mt-4 leading-relaxed text-[color:var(--muted)]">
              ZentechPoint is a premium digital agency built for businesses that refuse to settle for average. We combine precision engineering, bold design, and data-backed strategy to deliver products that don&apos;t just look great — they perform.
            </p>
            <p className="mt-3 leading-relaxed text-[color:var(--muted)]">
              From the very first wireframe to post-launch optimization, our team works as a true extension of yours. We believe great digital products are built on clarity, craft, and consistency — and that&apos;s exactly what we bring to every project, every time.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--primary)]/10">
                    <svg className="h-3 w-3 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="font-medium">{pt}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
            >
              Work with us
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>

      {/* ── Values ── */}
      <div className="border-y border-[color:var(--border)] bg-[color:var(--card)]">
        <Container className="py-14 md:py-16">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              Our Values
            </span>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">What we stand for</h2>
          </div>

          <div ref={valuesRef} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card-animated group">
                <div className="relative h-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--primary)]/40 hover:shadow-lg">
                  <span className="absolute inset-x-0 top-0 h-[2.5px] origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--ring)] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--primary)]/10 text-[color:var(--primary)] ring-1 ring-[color:var(--primary)]/20 transition-all duration-300 group-hover:bg-[color:var(--primary)]/15">
                    {v.icon}
                  </div>
                  <h3 className="mt-4 font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Team ── */}
      <div className="relative overflow-hidden border-y border-[color:var(--border)] bg-[color:var(--card)]">
        {/* Decorative blobs */}
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[color:var(--primary)]/5 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-3xl" />

        <Container className="relative py-8 md:py-10">

          {/* Header */}
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              The Team
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Top Skilled Experts</h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-[color:var(--muted)]">
              A small, focused team of engineers, marketers, and creatives — working in sync to build products that actually matter.
            </p>
          </div>

          {/* Cards grid */}
          <div ref={teamRef} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="card-animated group">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm transition-all duration-300 hover:-translate-y-[5px] hover:scale-[1.02] hover:shadow-xl">

                  {/* ── Portrait image block ── */}
                  <div className={`relative w-full shrink-0 bg-gradient-to-br ${m.gradient}`}>
                    {"image" in m && m.image ? (
                      <Image
                        src={m.image as string}
                        alt={m.name}
                        width={400}
                        height={400}
                        className="w-full object-cover object-top"
                        style={{ height: "400px" }}
                      />
                    ) : (
                      <div className="flex w-full items-center justify-center text-5xl font-bold tracking-widest text-white/80" style={{ height: "400px" }}>
                        {initials(m.name)}
                      </div>
                    )}
                    {/* Bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[color:var(--card)] to-transparent" />
                  </div>

                  {/* ── Content ── */}
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-3">

                    {/* Badge */}
                    {"badge" in m && (
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[color:var(--primary)]/25 bg-[color:var(--primary)]/10 px-2.5 py-[3px] text-[10px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">
                        <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        {m.badge as string}
                      </span>
                    )}

                    {/* Name + role */}
                    <h3 className="mt-2.5 text-[16px] font-bold leading-snug text-[color:var(--foreground)]">{m.name}</h3>
                    <p className="mt-0.5 text-[12px] text-[color:var(--muted)]">{m.role}</p>

                    {/* Divider */}
                    <div className="my-3.5 h-px bg-[color:var(--border)]" />

                    {/* Bio */}
                    <p className="flex-1 text-[12.5px] leading-relaxed text-[color:var(--muted)] line-clamp-4">
                      {m.bio}
                    </p>

                    {/* Social icons */}
                    {"social" in m && m.social && (
                      <div className="mt-4 flex items-center gap-2">
                        {(Object.entries(m.social) as [string, string | undefined][])
                          .filter(([platform, href]) => href && socialIcons[platform])
                          .map(([platform, href]) => (
                            <Link
                              key={platform}
                              href={href as string}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={platform}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] text-[color:var(--muted)] transition-all duration-200 hover:scale-110 hover:border-[color:var(--primary)]/40 hover:bg-[color:var(--primary)]/8 hover:text-[color:var(--primary)]"
                            >
                              {socialIcons[platform]}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── CTA ── */}
      <div className="border-t border-[color:var(--border)]">
        <Container className="py-12">
          <div className="rounded-2xl bg-[color:var(--dark)] p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">Let&apos;s connect</p>
                <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Let&apos;s build something great together</h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/50">
                  Have a project in mind? Share your requirements and we&apos;ll come back with a clear plan and honest estimate — within 24 hours.
                </p>
                <p className="mt-3 text-[11px] text-white/30">
                  Available for new projects · Remote Worldwide · Based in Bangladesh
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
              >
                Contact now
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </div>

    </main>
  );
}
