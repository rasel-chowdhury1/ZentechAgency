"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { team } from "@/lib/data";

const stats = [
  { value: "12+",  label: "Team members" },
  { value: "50+",  label: "Projects delivered" },
  { value: "2k+",  label: "Happy clients" },
  { value: "4+",   label: "Years of excellence" },
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
    desc: "Every line of code and pixel is crafted with care. We don't ship until it's right.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Client-First Mindset",
    desc: "Your goals drive every decision. We listen, adapt, and deliver what actually matters.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Fast Delivery",
    desc: "We move fast without cutting corners. Structured workflows keep timelines on track.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Full Transparency",
    desc: "No surprises. Clear estimates, open communication, and honest progress updates.",
  },
];

const points = [
  "Data-driven decisions at every stage",
  "Fast delivery without sacrificing quality",
  "Performance, SEO & security built-in",
  "Post-launch support and iteration",
];

const avatarColors: Record<string, string> = {
  "Danielle Stewart": "from-violet-400 to-purple-500",
  "Bryan Mendez":     "from-emerald-400 to-teal-500",
  "Bora Roberts":     "from-blue-400 to-cyan-500",
  "Roberto Carter":   "from-orange-400 to-amber-500",
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
              We are a digital agency focused on premium UI, clean engineering, and growth-driven strategy. From design to deployment — we deliver polished products that perform.
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
      <Container className="py-14 md:py-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
            The Team
          </span>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">Top skilled experts</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[color:var(--muted)]">
            A small, focused team of designers, engineers, and strategists working in sync.
          </p>
        </div>

        <div ref={teamRef} className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="card-animated group">
              <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--primary)]/30 hover:shadow-lg">
                <span className="absolute inset-x-0 top-0 h-[2.5px] origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--ring)] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                {/* Avatar */}
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${avatarColors[m.name] ?? "from-gray-400 to-gray-500"} text-lg font-bold text-white shadow-sm`}>
                  {initials(m.name)}
                </div>

                <div className="mt-4 font-semibold">{m.name}</div>
                <div className="mt-1 inline-flex items-center rounded-full bg-[color:var(--muted-bg)] px-2.5 py-0.5 text-[11px] font-medium text-[color:var(--muted)]">
                  {m.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* ── CTA ── */}
      <div className="border-t border-[color:var(--border)]">
        <Container className="py-12">
          <div className="rounded-2xl bg-[color:var(--dark)] p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">Let's connect</p>
                <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Let's build something great together</h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/50">
                  Share your requirements — we'll respond with a clear plan and estimate within 24 hours.
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
