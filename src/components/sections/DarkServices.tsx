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

const INTERVAL = 3500;

export default function DarkServices() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (idx === active) return;
    setPrev(active);
    setActive(idx);
    setProgress(0);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);

    timerRef.current = setInterval(() => {
      setActive((cur) => {
        const next = (cur + 1) % services.length;
        setPrev(cur);
        return next;
      });
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
    goTo(idx);
    startTimer();
  };

  return (
    <section className="bg-[color:var(--dark)] text-[color:var(--dark-foreground)]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* Left: Header + Service List */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--primary)]">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Transforming Digital<br />Dreams Into Reality
            </h2>
            <p className="mt-3 text-sm text-white/50 max-w-md">
              Empower your business with innovative digital experiences. Our expert team
              combines strategy, design, and technology.
            </p>

            <ul className="mt-10 divide-y divide-white/10">
              {services.map((s, idx) => (
                <li
                  key={s.slug}
                  onClick={() => handleSelect(idx)}
                  className="flex cursor-pointer items-center justify-between gap-4 py-[14px]"
                >
                  <span
                    className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                      active === idx ? "text-white" : "text-white/35 hover:text-white/60"
                    }`}
                  >
                    {s.title}
                  </span>

                  {/* Progress bar for active item */}
                  <div className="flex items-center gap-2">
                    {active === idx ? (
                      <div className="h-[2px] w-16 rounded-full bg-white/15 overflow-hidden">
                        <div
                          className="h-full bg-[color:var(--primary)] rounded-full"
                          style={{ width: `${progress}%`, transition: "width 50ms linear" }}
                        />
                      </div>
                    ) : (
                      <div className="h-[2px] w-16 rounded-full bg-white/10" />
                    )}
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${
                        active === idx ? "bg-[color:var(--primary)]" : "bg-white/15"
                      }`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Auto-sliding Image Panel */}
          <div className="relative h-[480px] overflow-hidden rounded-2xl bg-white/5">
            {services.map((s, idx) => {
              const isActive = idx === active;
              const isPrev = idx === prev;
              return (
                <div
                  key={s.slug}
                  className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                    isActive
                      ? "translate-x-0 z-20"
                      : isPrev
                      ? "-translate-x-full z-10"
                      : "translate-x-full z-0"
                  }`}
                >
                  <Image
                    src={serviceImages[s.slug] ?? "/images/heroImage.png"}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Caption */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">
                      {s.category}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/60 line-clamp-2">{s.description}</p>
                  </div>
                </div>
              );
            })}

            {/* Slide counter */}
            <div className="absolute top-5 right-5 z-30 flex items-center gap-1.5">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === active
                      ? "h-2 w-6 bg-white"
                      : "h-2 w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
