"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { services } from "@/lib/data";

const serviceImages: Record<string, string> = {
  "digital-marketing": "/images/DigitalMarketing.jpeg",
  "web-development": "/images/heroImage1.jpg",
  "app-development": "/images/heroImage3.jpg",
  "software-development": "/images/SoftwareDevelopment.jpeg",
  "ui-ux-design": "/images/heroImage2.png",
  "it-consultancy": "/images/heroImage.png",
};

const INTERVAL = 3800;

export default function DarkServices() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Scroll entrance
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => el.classList.add("ds-section-visible"), 80); obs.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);

    timerRef.current = setInterval(() => {
      setActive((cur) => (cur + 1) % services.length);
      setProgress(0);
    }, INTERVAL);

    const step = 50;
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + (step / INTERVAL) * 100, 100));
    }, step);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  const handleSelect = (idx: number) => {
    if (idx === active) return;
    setActive(idx);
    startTimer();
  };

  return (
    <section className="bg-[color:var(--dark)] text-[color:var(--dark-foreground)]">
      <Container className="py-16 md:py-20">
        <div
          ref={sectionRef}
          className="ds-section-enter grid gap-10 md:grid-cols-2 md:items-center md:gap-14"
        >

          {/* ── Image panel ── */}
          <div className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[380px] md:order-2 md:h-[520px]">

            {services.map((s, idx) => (
              <div
                key={s.slug}
                className={`ds-image absolute inset-0 ${idx === active ? "ds-image-active" : ""}`}
              >
                <Image
                  src={serviceImages[s.slug] ?? "/images/heroImage.png"}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                {/* Image info */}
                <div className="absolute bottom-5 left-5 right-5 z-10 sm:bottom-7 sm:left-7 sm:right-7">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--primary)]/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[color:var(--primary)] ring-1 ring-[color:var(--primary)]/30">
                    {s.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">{s.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/55 line-clamp-2 sm:text-sm">{s.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {s.bullets.slice(0, 3).map((b) => (
                      <span key={b} className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white/65 backdrop-blur-sm">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Dot nav */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 sm:top-5 sm:right-5">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    idx === active
                      ? "h-2 w-6 bg-[color:var(--primary)]"
                      : "h-2 w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Bottom progress bar */}
            <div className="absolute bottom-0 inset-x-0 z-30 h-[3px] bg-white/10">
              <div
                className="h-full rounded-r-full bg-[color:var(--primary)]"
                style={{ width: `${progress}%`, transition: "width 50ms linear" }}
              />
            </div>
          </div>

          {/* ── Service list ── */}
          <div className="md:order-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--primary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              What We Do
            </span>

            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-[2rem]">
              Transforming Digital<br />Dreams Into Reality
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/45">
              Empower your business with innovative digital experiences. Our expert team
              combines strategy, design, and technology.
            </p>

            <ul className="mt-8 divide-y divide-white/[0.07]">
              {services.map((s, idx) => (
                <li
                  key={s.slug}
                  onClick={() => handleSelect(idx)}
                  className="group cursor-pointer py-4 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    {/* Category tag + title */}
                    <div className="flex flex-col gap-0.5">
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-widest transition-colors duration-300 ${
                          active === idx ? "text-[color:var(--primary)]" : "text-white/25 group-hover:text-white/40"
                        }`}
                      >
                        {s.category}
                      </span>
                      <span
                        className={`text-[15px] font-semibold leading-snug transition-colors duration-300 ${
                          active === idx ? "text-white" : "text-white/45 group-hover:text-white/70"
                        }`}
                      >
                        {s.title}
                      </span>
                    </div>

                    {/* Right: progress or chevron */}
                    <div className="flex-shrink-0">
                      {active === idx ? (
                        <div className="h-[2px] w-14 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-[color:var(--primary)]"
                            style={{ width: `${progress}%`, transition: "width 50ms linear" }}
                          />
                        </div>
                      ) : (
                        <svg
                          className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:text-white/40 group-hover:translate-x-0.5"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Expandable description */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      active === idx ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-white/40">
                      {s.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}
