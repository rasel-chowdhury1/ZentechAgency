"use client";

import { useEffect, useRef, useState } from "react";

type WhyItem = {
  icon?: string;
  title: string;
  desc?: string;
  points?: string[];
};

const COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-5",
};

export default function WhyChooseGrid({
  items,
  accent,
  columns = 2,
  compact = false,
}: {
  items: WhyItem[];
  accent: string;
  columns?: 2 | 3 | 4 | 5;
  compact?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative mt-10 grid gap-6 ${COLS[columns]}`}>
      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -left-16 -top-10 h-48 w-48 rounded-full opacity-[0.08] blur-3xl"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }} />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full opacity-[0.06] blur-3xl"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }} />

      {items.map((item, i) => {
        const num = String(i + 1).padStart(2, "0");
        const stagger = !compact && i % 2 === 1 ? "lg:mt-7" : "";

        return (
          <div
            key={item.title}
            className={`group relative transition-all duration-700 ease-out ${stagger}`}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: `${i * 80}ms`,
            }}
          >
            {/* Gradient border ring */}
            <div
              className="absolute -inset-px rounded-[26px] opacity-50 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: `linear-gradient(140deg, ${accent}70, var(--border) 45%, transparent 80%)` }}
            />

            <div
              className={`relative flex h-full flex-col overflow-hidden rounded-[26px] backdrop-blur-xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.015] ${
                compact ? "items-center p-5 text-center" : "p-6"
              }`}
              style={{
                borderLeft: compact ? undefined : `3px solid ${accent}`,
                background: `linear-gradient(165deg, ${accent}0d 0%, color-mix(in srgb, var(--card) 95%, transparent) 32%)`,
                boxShadow: `0 14px 34px -22px ${accent}55, 0 2px 10px -4px rgba(0,0,0,0.10)`,
              }}
            >
              {/* Ghost number watermark */}
              <span className="pointer-events-none absolute -right-1 -top-4 select-none text-[76px] font-black leading-none tracking-tighter opacity-[0.055] transition-all duration-500 group-hover:opacity-[0.1]"
                style={{ color: accent }}>
                {num}
              </span>

              {/* Hover glow wash */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: `radial-gradient(circle at 15% 0%, ${accent}0f, transparent 60%)` }}
              />

              {/* Elevated colored shadow layer (grows on hover) */}
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[30px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-15"
                style={{ backgroundColor: accent }} />

              {/* Shine sweep on hover */}
              <div className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-18deg] transition-transform duration-[1100ms] ease-out group-hover:translate-x-[130%]"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)" }} />

              {item.icon && (
                <div
                  className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-[26px] transition-all duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(150deg, ${accent}22, ${accent}0a)`,
                    boxShadow: `0 0 0 1px ${accent}28 inset`,
                  }}
                >
                  {item.icon}
                </div>
              )}

              <h3
                className={`relative text-[16px] font-extrabold leading-snug transition-colors duration-300 group-hover:[color:var(--hover-accent)] ${item.icon ? "mt-4" : ""}`}
                style={{ color: "var(--foreground)", ["--hover-accent" as string]: accent }}
              >
                {item.title}
              </h3>

              {item.desc && (
                <p className="relative mt-2 text-[13px] leading-relaxed text-[color:var(--muted)]">{item.desc}</p>
              )}

              {item.points && (
                <ul className="relative mt-4 space-y-2.5 self-stretch text-left">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[color:var(--muted)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                        className="mt-[3px] h-3 w-3 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              )}

              {/* Bottom accent line */}
              <div className="relative mt-auto h-px w-full pt-4">
                <div className="h-px w-full opacity-40 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, ${accent}, transparent 70%)` }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
