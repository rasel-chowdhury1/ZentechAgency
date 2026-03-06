"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

/* ── Pre-defined word list with fixed delays ── */
type WordDef = {
  text: string;
  delay: number;
  shimmer?: boolean;
  underlineStart?: boolean; // this word starts an underline group
  underlineEnd?: boolean;   // this word ends an underline group
};

const words: WordDef[] = [
  { text: "Your",        delay: 80 },
  { text: "Reliable",    delay: 150, underlineStart: true },
  { text: "Partner",     delay: 220, underlineEnd: true },
  { text: "For",         delay: 290 },
  // line 2
  { text: "Web",         delay: 370 },
  { text: "and",         delay: 440 },
  { text: "Software",    delay: 510 },
  // line 3
  { text: "Development", delay: 590, shimmer: true },
];

const line1Words = words.slice(0, 4);
const line2Words = words.slice(4, 7);
const line3Words = words.slice(7);

/**
 * A single animated word.
 * - Outer span: handles the 3-D entrance (hero-word)
 * - Inner span (shimmer only): handles the sweep (hero-shimmer-text)
 * Splitting them avoids the CSS animation-override bug.
 */
function W({ w }: { w: WordDef }) {
  const inner = w.shimmer ? (
    <span className="hero-shimmer-text">{w.text}</span>
  ) : w.text;

  return (
    <span
      className="hero-word"
      style={{ animationDelay: `${w.delay}ms` }}
    >
      {inner}
    </span>
  );
}

export default function HeroMosaic() {
  const subRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger sub-content transitions after headline words land (~700ms)
    const t = setTimeout(() => {
      subRef.current?.classList.add("sub-visible");
    }, 700);
    return () => clearTimeout(t);
  }, []);

  /* ── Build Line 1: "Your [Reliable Partner] For" ── */
  const renderLine1 = () => {
    const parts: React.ReactNode[] = [];
    let i = 0;
    while (i < line1Words.length) {
      const w = line1Words[i];
      if (w.underlineStart) {
        // Collect all words in the underline group
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
    <section className="bg-[color:var(--background)]">
      <Container className="pt-4 pb-10 md:pt-12 md:pb-14 lg:pt-12 lg:pb-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* ── LEFT ── */}
          <div className="overflow-hidden pt-2">

            {/* Brand badge */}
            <div
              className="hero-fade-up flex items-center gap-2 text-sm text-[color:var(--muted)]"
              style={{ animationDelay: "40ms" }}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--primary)] text-white text-xs font-bold">
                ZP
              </span>
              <span className="font-medium tracking-wide">ZentechPoint</span>
            </div>

            {/* 3-D Headline — block spans, inline-block words wrap naturally */}
            <h1 className="mt-5 text-[30px] leading-[1.15] font-bold tracking-tight sm:text-[38px] md:text-[44px] lg:text-[52px]">
              <span className="block">{renderLine1().reduce<React.ReactNode[]>((acc, node, i) => i === 0 ? [node] : [...acc, " ", node], [])}</span>
              <span className="block">{line2Words.map((w, i) => <span key={w.text}><W w={w} />{i < line2Words.length - 1 ? " " : ""}</span>)}</span>
              <span className="block">{line3Words.map((w) => <W key={w.text} w={w} />)}</span>
            </h1>

            {/* Sub-content — transition-based for mobile reliability */}
            <div ref={subRef} className="hero-sub">
              <p
                className="hero-sub-item mt-2 max-w-full text-base italic text-[color:var(--muted)] sm:text-lg"
                style={{ transitionDelay: "80ms" }}
              >
                Scale your company without headache.{" "}
                We work silently behind your brand.
              </p>

              <p
                className="hero-sub-item mt-4 max-w-xl text-[15px] leading-7 text-[color:var(--muted)]"
                style={{ transitionDelay: "180ms" }}
              >
                Hire dedicated developers, software engineers, and expert teams to build scalable,
                secure software and high-performing websites—faster, leaner, and without hiring overhead.
              </p>

              <div
                className="hero-sub-item mt-7 flex flex-wrap gap-3"
                style={{ transitionDelay: "280ms" }}
              >
                <Link href="/contact">
                  <Button className="rounded-full px-6 py-2.5 text-sm sm:px-7">
                    Hire us now <span className="ml-2">↗</span>
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-2.5 text-sm bg-white font-bold text-gray-800 border-gray-300 hover:bg-gray-50 hover:text-gray-900 sm:px-7"
                  >
                    Learn more
                  </Button>
                </Link>
              </div>

              {/* Trusted by */}
              <div
                className="hero-sub-item mt-8 flex items-center gap-5"
                style={{ transitionDelay: "380ms" }}
              >
                <div className="shrink-0 text-sm leading-snug text-[color:var(--muted)]">
                  Trusted by clients
                  <br />
                  across the globe.
                </div>
                <div className="shrink-0 w-px h-8 bg-[color:var(--border)]" />
                <div className="overflow-hidden relative flex-1 min-w-0">
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-8 z-10"
                    style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
                  />
                  <div
                    className="pointer-events-none absolute right-0 top-0 h-full w-8 z-10"
                    style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
                  />
                  <div className="marquee-track flex items-center gap-10 whitespace-nowrap w-max">
                    {["SHARKANI","STUDIOTEM","BOXME","NEXLABZ","DEVHIVE","CLOUDORA",
                      "SHARKANI","STUDIOTEM","BOXME","NEXLABZ","DEVHIVE","CLOUDORA",
                      "SHARKANI","STUDIOTEM","BOXME","NEXLABZ","DEVHIVE","CLOUDORA"].map((name, i) => (
                      <span key={i} className="tracking-widest text-sm font-bold text-[color:var(--muted)]/60">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT — mosaic ── */}
          <div className="relative hidden lg:block">
            <div className="hidden gap-5 lg:grid">
              {/* Row 1 */}
              <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
                  <div className="relative h-44 w-full">
                    <Image src="/images/heroImage1.jpg" alt="Team working" fill priority className="object-cover" />
                  </div>
                </div>
                <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--primary)] text-white shadow-sm">
                  <div className="p-5">
                    <div className="text-[44px] font-semibold leading-none text-[color:var(--accent)]">55+</div>
                    <div className="mt-3 text-lg font-semibold">Customers Served</div>
                  </div>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--primary)] text-white shadow-sm">
                  <div className="p-6">
                    <div className="text-sm text-white/85">Completed Projects</div>
                    <div className="mt-2 text-[56px] font-semibold leading-none text-[color:var(--accent)]">380+</div>
                  </div>
                  <div className="h-10 opacity-20" style={{ background: "radial-gradient(circle at 20% 50%, #fff, transparent 60%)" }} />
                </div>
                <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
                  <div className="p-6">
                    <p className="text-sm leading-6 text-[color:var(--muted)]">
                      Our clients share their experiences—honest feedback that speaks for itself.
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <span className="text-[color:var(--primary)] text-lg">★</span>
                      <span className="text-sm font-semibold text-[color:var(--foreground)]">Trustpilot</span>
                      <span className="ml-auto text-xs text-[color:var(--muted)]">★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-5">
                <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
                  <div className="relative h-44 w-full">
                    <Image src="/images/heroImage2.png" alt="Developers collaborating" fill className="object-cover" />
                  </div>
                </div>
                <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
                  <div className="relative h-44 w-full">
                    <Image src="/images/heroImage3.jpg" alt="Developer coding" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle at 30% 20%, var(--accent), transparent 50%), radial-gradient(circle at 70% 70%, var(--ring), transparent 55%)" }}
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
