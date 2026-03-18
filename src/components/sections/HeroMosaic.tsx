"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

/* ── Pre-defined word list with fixed delays ── */
type WordDef = {
  text: string;
  delay: number;
  shimmer?: boolean;
  underlineStart?: boolean;
  underlineEnd?: boolean;
};

const words: WordDef[] = [
  { text: "Your",        delay: 80 },
  { text: "Partner",     delay: 150, underlineStart: true },
  { text: "for",         delay: 220, underlineEnd: true },
  { text: "Custom",      delay: 290 },
  // line 2
  { text: "Software,",   delay: 370 },
  { text: "Web",         delay: 440 },
  { text: "Development", delay: 510 },
  // line 3
  { text: "&",           delay: 590 },
  { text: "Digital",     delay: 660, shimmer: true },
  { text: "Growth",      delay: 730 },
];

const line1Words = words.slice(0, 4);
const line2Words = words.slice(4, 7);
const line3Words = words.slice(7);

const trustItems = [
  "Fast Delivery",
  "Mobile-First Design",
  "SEO-Ready Builds",
  "Transparent Pricing",
  "Ongoing Support",
];
const marqueeItems = [...trustItems, ...trustItems, ...trustItems];

function W({ w }: { w: WordDef }) {
  const inner = w.shimmer ? (
    <span className="hero-shimmer-text">{w.text}</span>
  ) : w.text;

  return (
    <span className="hero-word" style={{ animationDelay: `${w.delay}ms` }}>
      {inner}
    </span>
  );
}


export default function HeroMosaic() {

  const renderLine1 = () => {
    const parts: React.ReactNode[] = [];
    let i = 0;
    while (i < line1Words.length) {
      const w = line1Words[i];
      if (w.underlineStart) {
        const group: WordDef[] = [];
        while (i < line1Words.length) {
          group.push(line1Words[i]);
          if (line1Words[i].underlineEnd) { i++; break; }
          i++;
        }
        parts.push(
          <span key="ul" className="relative inline-block">
            <span className="relative z-10 inline-flex gap-[0.25em]">
              {group.map((gw) => <W key={gw.text} w={gw} />)}
            </span>
            <span
              className="absolute left-0 right-0 -bottom-1.5 h-[5px] rounded-full opacity-70"
              style={{ background: "linear-gradient(90deg, var(--ring), transparent)" }}
            />
          </span>
        );
      } else {
        parts.push(<W key={w.text} w={w} />);
        i++;
      }
    }
    return parts;
  };

  return (
    <section className="relative overflow-hidden bg-[color:var(--background)]">

      {/* Subtle ambient background glow */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-48 h-[600px] w-[600px] rounded-full opacity-[0.04] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--ring), transparent 70%)" }}
      />

      <Container className="relative pt-6 pb-12 md:pt-14 md:pb-16 lg:pt-14 lg:pb-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* ── LEFT ── */}
          <div className="overflow-hidden">

            {/* Premium brand badge */}
            <div
              className="hero-fade-up inline-flex items-center gap-2.5 rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-1.5 shadow-sm"
              style={{ animationDelay: "40ms" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--ring)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--primary)]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">
                Premier Digital Agency
              </span>
              <span className="h-3 w-px bg-[color:var(--border)]" />
              <span
                className="text-xs font-bold tracking-wide"
                style={{ background: "linear-gradient(90deg, var(--primary), var(--ring))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                ZentechPoint
              </span>
            </div>

            {/* 3-D Headline */}
            <h1 className="mt-6 font-bold tracking-tight text-[clamp(28px,6vw,54px)] leading-[1.18]">
              <span className="mb-1 block">
                {renderLine1().reduce<React.ReactNode[]>((acc, node, i) => i === 0 ? [node] : [...acc, " ", node], [])}
              </span>
              <span className="mb-1 block">
                {line2Words.map((w, i) => (
                  <span key={w.text}>
                    <W w={w} />{i < line2Words.length - 1 ? " " : ""}
                  </span>
                ))}
              </span>
              <span className="block">
                {line3Words.map((w, i) => (
                  <span key={w.text}>
                    <W w={w} />{i < line3Words.length - 1 ? " " : ""}
                  </span>
                ))}
              </span>
            </h1>

            {/* Sub-content */}
            <div>

              {/* Description */}
              <p
                className="hero-sub-item mt-5 max-w-[520px] text-[15px] leading-[1.85] text-[color:var(--muted)]"
                style={{ transitionDelay: "80ms" }}
              >
                Welcome to ZentechPoint, a premier digital solutions provider specializing in web
                development, app creation, and digital marketing. With over a decade of expertise,
                our team transforms your vision into powerful online experiences that engage audiences
                and drive measurable growth. We craft bespoke solutions tailored to your goals,
                helping your brand stand out and unlock its full digital potential.
              </p>

              {/* CTAs */}
              <div
                className="hero-sub-item mt-8 flex items-center gap-2 sm:gap-3"
                style={{ transitionDelay: "240ms" }}
              >
                <Link href="/contact" className="flex-1 sm:flex-none">
                  <Button
                    className="relative w-full overflow-hidden rounded-full px-4 py-2.5 text-xs font-semibold shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 sm:w-auto sm:px-7 sm:py-3 sm:text-sm"
                  >
                    Start Your Project
                    <span className="ml-1.5 text-sm sm:ml-2 sm:text-base">↗</span>
                  </Button>
                </Link>
                <Link href="/contact" className="flex-1 sm:flex-none">
                  <Button
                    variant="outline"
                    className="w-full rounded-full px-4 py-2.5 text-xs font-semibold border-[color:var(--border)] bg-transparent text-[color:var(--foreground)] hover:bg-[color:var(--border)]/30 hover:-translate-y-0.5 transition-all sm:w-auto sm:px-7 sm:py-3 sm:text-sm"
                  >
                    Free IT Consultation
                  </Button>
                </Link>
              </div>

              {/* Trust ticker */}
              <div
                className="hero-sub-item mt-8 flex items-center gap-4"
                style={{ transitionDelay: "340ms" }}
              >
                <div className="shrink-0">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] leading-snug"
                    style={{ background: "linear-gradient(135deg, var(--primary), var(--ring))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    Trusted by
                    <br />
                    businesses for
                  </div>
                </div>
                <div className="shrink-0 h-6 w-px bg-[color:var(--border)]" />
                <div className="overflow-hidden relative flex-1 min-w-0">
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10"
                    style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
                  />
                  <div
                    className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10"
                    style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
                  />
                  <div className="marquee-track flex items-center gap-0 whitespace-nowrap w-max">
                    {marqueeItems.map((item, i) => (
                      <span key={i} className="inline-flex items-center">
                        <span className="text-[12px] font-semibold tracking-wide text-[color:var(--muted)]/70">
                          {item}
                        </span>
                        <span className="mx-4 text-[color:var(--primary)] opacity-50 text-xs">✦</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── RIGHT — mosaic ── */}
          <div className="relative hidden lg:block">

            {/* Soft background aura */}
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[48px] opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle at 30% 20%, var(--accent), transparent 50%), radial-gradient(circle at 70% 75%, var(--ring), transparent 55%)" }}
            />

            <div className="grid gap-4">

              {/* Row 1 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm">
                  <div className="relative h-[168px] w-full">
                    <Image src="/images/heroImage1.jpg" alt="ZentechPoint team working" fill priority className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-[color:var(--card)]/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-[color:var(--card-foreground)] shadow-sm">
                      Expert Team
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--primary)] text-white shadow-sm">
                  <div className="flex h-full flex-col justify-between p-5">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
                      Clients Served
                    </div>
                    <div>
                      <div className="text-[46px] font-bold leading-none text-white">55+</div>
                      <div className="mt-1.5 text-[11px] text-white/70">Worldwide</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--primary)] text-white shadow-sm">
                  <div className="relative p-6">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
                      Projects Delivered
                    </div>
                    <div className="mt-2 text-[58px] font-bold leading-none text-white">380+</div>
                    <div className="mt-1 text-sm text-white/70">Across web, mobile & software</div>
                    <div
                      className="pointer-events-none absolute right-0 top-0 h-full w-28 opacity-10"
                      style={{ background: "radial-gradient(circle at 80% 50%, #fff, transparent 60%)" }}
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm">
                  <div className="flex h-full flex-col justify-between p-5">
                    <p className="text-[12px] leading-[1.6] text-[color:var(--muted)]">
                      Real results, real clients — honest feedback that speaks for itself.
                    </p>
                    <div>
                      <div className="flex gap-0.5 text-amber-400 text-sm">★★★★★</div>
                      <div className="mt-1 text-[11px] font-semibold text-[color:var(--muted)]">
                        5.0 · Trustpilot Reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm">
                  <div className="relative h-[148px] w-full">
                    <Image src="/images/heroImage2.png" alt="Developers collaborating" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-[color:var(--card)]/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-[color:var(--card-foreground)] shadow-sm">
                      Collaborative Process
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm">
                  <div className="relative h-[148px] w-full">
                    <Image src="/images/heroImage3.jpg" alt="Developer coding" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-[color:var(--card)]/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-[color:var(--card-foreground)] shadow-sm">
                      Precision Engineering
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
