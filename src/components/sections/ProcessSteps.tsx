"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Step = { n: string; title: string; points: string[]; week?: string };

// Generic phase icons (discovery → plan → build → validate → launch → grow), cycled by index.
const ICON_PATHS = [
  "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125",
  "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
];

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export default function ProcessSteps({
  steps,
  accent,
  titleFormat = "phase",
}: {
  steps: Step[];
  accent: string;
  titleFormat?: "phase" | "numbered";
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const particleRef = useRef<SVGCircleElement>(null);
  const rafRef = useRef<number | null>(null);

  const [pathD, setPathD] = useState("");
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const [visible, setVisible] = useState<boolean[]>(() => steps.map(() => false));
  const [activeIndex, setActiveIndex] = useState(0);
  const uid = useRef(Math.random().toString(36).slice(2)).current;

  // ── Compute the flowing curved connector from actual node positions ──
  useLayoutEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    const computePath = () => {
      const containerRect = container.getBoundingClientRect();
      const points = nodeRefs.current
        .map((el) => {
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { x: r.left + r.width / 2 - containerRect.left, y: r.top + r.height / 2 - containerRect.top };
        })
        .filter((p): p is { x: number; y: number } => p !== null);

      if (points.length < 2) return;

      const amplitude = 22;
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const dir = i % 2 === 0 ? 1 : -1;
        const cx = p0.x + dir * amplitude;
        const q1 = p0.y + (p1.y - p0.y) * 0.33;
        const q2 = p0.y + (p1.y - p0.y) * 0.67;
        d += ` C ${cx} ${q1}, ${cx} ${q2}, ${p1.x} ${p1.y}`;
      }
      setPathD(d);
      setSvgSize({ width: containerRect.width, height: container.scrollHeight });
    };

    computePath();
    const ro = new ResizeObserver(computePath);
    ro.observe(container);
    window.addEventListener("resize", computePath);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", computePath);
    };
  }, [steps.length]);

  // ── Draw-on-scroll + traveling glow particle ──
  useEffect(() => {
    const path = pathRef.current;
    if (!path || !pathD) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const container = sectionRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height + vh * 0.6;
        const scrolled = vh * 0.85 - rect.top;
        const progress = clamp(scrolled / total, 0, 1);

        path.style.strokeDashoffset = `${length * (1 - progress)}`;

        if (particleRef.current && length > 0) {
          const pt = path.getPointAtLength(length * progress);
          particleRef.current.setAttribute("cx", `${pt.x}`);
          particleRef.current.setAttribute("cy", `${pt.y}`);
          particleRef.current.style.opacity = progress > 0.01 && progress < 0.995 ? "1" : "0";
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pathD]);

  // ── Card entrance (fade + slide + scale, staggered) ──
  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((v) => {
              const next = [...v];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [steps.length]);

  // ── Active card while scrolling (center-viewport band) ──
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [steps.length]);

  return (
    <div ref={sectionRef} className="relative mx-auto mt-14 max-w-3xl">

      {/* ── Ambient background ── */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }} />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full opacity-[0.06] blur-3xl"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]" preserveAspectRatio="none">
        <path d="M -20 60 Q 200 10, 420 90 T 900 40" stroke={accent} strokeWidth={1} fill="none" />
        <path d="M -20 260 Q 260 340, 480 240 T 940 300" stroke={accent} strokeWidth={1} fill="none" />
      </svg>
      {[8, 88, 22, 72, 46].map((left, i) => (
        <span
          key={left}
          className="ps-float pointer-events-none absolute h-1.5 w-1.5 rounded-full blur-[1px]"
          style={{
            left: `${left}%`,
            top: `${[14, 28, 62, 78, 46][i]}%`,
            backgroundColor: accent,
            opacity: 0.35,
            animationDelay: `${i * 1.1}s`,
          }}
        />
      ))}

      {/* ── Flowing connector ── */}
      {pathD && (
        <svg
          className="pointer-events-none absolute left-0 top-0"
          width={svgSize.width}
          height={svgSize.height}
          viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
          fill="none"
        >
          <defs>
            <linearGradient id={`ps-grad-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.1" />
              <stop offset="50%" stopColor={accent} stopOpacity="0.95" />
              <stop offset="100%" stopColor={accent} stopOpacity="0.1" />
            </linearGradient>
            <filter id={`ps-glow-${uid}`} x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path d={pathD} stroke="var(--border)" strokeWidth={2} strokeLinecap="round" />
          <path ref={pathRef} d={pathD} stroke={`url(#ps-grad-${uid})`} strokeWidth={2.5} strokeLinecap="round"
            filter={`url(#ps-glow-${uid})`} />
          <circle ref={particleRef} r={4.5} fill={accent} filter={`url(#ps-glow-${uid})`}
            style={{ transition: "opacity 0.3s", opacity: 0 }} />
        </svg>
      )}

      {/* ── Steps ── */}
      <div className="relative space-y-8">
        {steps.map((step, i) => {
          const isActive = activeIndex === i;
          const isVisible = visible[i];

          return (
            <div
              key={step.n}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="flex items-start gap-5 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.96)",
                transitionDelay: `${i * 90}ms`,
              }}
            >
              {/* Node */}
              <div className="relative z-10 shrink-0" ref={(el) => { nodeRefs.current[i] = el; }}>
                <div className="ps-pulse pointer-events-none absolute inset-0 rounded-full"
                  style={{ backgroundColor: accent, animationDelay: `${i * 0.3}s` }} />
                <div className="pointer-events-none absolute -inset-2 rounded-full blur-lg transition-opacity duration-500"
                  style={{ backgroundColor: accent, opacity: isActive ? 0.65 : 0.28 }} />
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-full text-[13px] font-black text-white shadow-lg ring-4 ring-[color:var(--background)] transition-transform duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${accent}, ${accent}bb)`,
                    transform: isActive ? "scale(1.12)" : "scale(1)",
                  }}
                >
                  {step.n}
                </div>
              </div>

              {/* Card */}
              <div className="group relative flex-1">
                <div className="absolute -inset-px rounded-[26px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `linear-gradient(135deg, ${accent}, transparent 65%)` }} />

                <div
                  className="relative overflow-hidden rounded-[26px] border p-6 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1.5 md:p-7"
                  style={{
                    borderColor: isActive ? `${accent}45` : "var(--border)",
                    backgroundColor: "color-mix(in srgb, var(--card) 88%, transparent)",
                    boxShadow: isActive
                      ? `0 20px 50px -20px ${accent}40, 0 8px 20px -12px rgba(0,0,0,0.15)`
                      : "0 4px 20px -12px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle at 15% 0%, ${accent}14, transparent 60%)` }} />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                        style={{ backgroundColor: `${accent}16`, color: accent }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d={ICON_PATHS[i % ICON_PATHS.length]} />
                        </svg>
                      </div>
                      <div>
                        {titleFormat === "phase" && (
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>
                            Phase {i + 1}
                          </p>
                        )}
                        <h3 className="mt-0.5 text-[15px] font-bold leading-snug text-[color:var(--foreground)]">
                          {titleFormat === "numbered" ? `${i + 1}. ${step.title}` : step.title}
                        </h3>
                      </div>
                    </div>
                    {step.week && (
                      <span className="shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold"
                        style={{ borderColor: `${accent}30`, backgroundColor: `${accent}0d`, color: accent }}>
                        {step.week}
                      </span>
                    )}
                  </div>

                  <ul className="relative mt-5 grid gap-2.5 sm:grid-cols-2">
                    {step.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[color:var(--muted)]">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .ps-pulse {
          animation: psPulse 2.8s ease-in-out infinite;
        }
        @keyframes psPulse {
          0%, 100% { transform: scale(1); opacity: 0.35; }
          50% { transform: scale(1.7); opacity: 0; }
        }
        .ps-float {
          animation: psFloat 6s ease-in-out infinite;
        }
        @keyframes psFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </div>
  );
}
