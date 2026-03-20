"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

/* ── Professional Constellation Canvas Background ── */
type PType = "micro" | "standard" | "hub";
type Particle = {
  x: number; y: number; vx: number; vy: number;
  r: number; type: PType; phase: number; phaseSpeed: number;
};
type Packet = { from: number; to: number; t: number; speed: number };

function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let tick = 0;

    // ── theme helpers (re-evaluated each frame so dark-mode toggle works live) ──
    const isDark = () => document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const palette = () => {
      const dark = isDark();
      return {
        // light: navy-slate dots contrast on #f9fafb; dark: sky-blue on #050814
        dot:      dark ? [180, 215, 255] : [10, 40, 80],
        // brand emerald — same in both modes
        hub:      dark ? [25, 197, 154]  : [5, 150, 105],
        // standard connection lines
        line:     dark ? [160, 200, 255] : [20, 60, 110],
        // hub-to-hub lines use brand emerald
        hubLine:  dark ? [25, 197, 154]  : [5, 150, 105],
        // data packet — always emerald
        packet:   dark ? [25, 197, 154]  : [5, 150, 105],
        // light mode needs higher alpha so particles show on white
        dotA:     dark ? 0.55  : 0.32,
        lineA:    dark ? 0.13  : 0.16,
        hubLineA: dark ? 0.40  : 0.42,
        // hub glow is toned down on white so it doesn't smudge
        hubGlowA: dark ? 0.28  : 0.14,
        hubRingA: dark ? 0.30  : 0.20,
      };
    };

    const rgba = (rgb: number[], a: number) =>
      `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a.toFixed(3)})`;

    // ── responsive config — scales everything with canvas width ──
    type Config = {
      hubN: number; stdN: number; microN: number;
      pktN: number; maxStd: number; maxHub: number; repel: number;
    };
    const getConfig = (w: number): Config => {
      if (w < 480) return { hubN: 3, stdN: 12, microN: 0, pktN: 1, maxStd:  80, maxHub: 120, repel:  0 };
      if (w < 768) return { hubN: 5, stdN: 20, microN: 0, pktN: 2, maxStd: 100, maxHub: 150, repel: 60 };
      if (w < 1024) return { hubN: 6, stdN: 30, microN: 6, pktN: 3, maxStd: 125, maxHub: 180, repel: 80 };
      return               { hubN: 9, stdN: 48, microN: 20, pktN: 6, maxStd: 155, maxHub: 220, repel: 110 };
    };

    let cfg: Config = getConfig(0);
    let particles: Particle[] = [];
    let packets:   Packet[]   = [];
    let prevW = 0, prevH = 0, prevBp = "";

    const bp = (w: number) => w < 480 ? "xs" : w < 768 ? "sm" : w < 1024 ? "md" : "lg";

    const mkParticle = (type: PType): Particle => {
      const speeds: Record<PType, number> = { hub: 0.09, standard: 0.16, micro: 0.28 };
      const radii:  Record<PType, () => number> = {
        hub:      () => 3.2 + Math.random() * 1.4,
        standard: () => 1.4 + Math.random() * 0.9,
        micro:    () => 0.5 + Math.random() * 0.5,
      };
      const s = speeds[type];
      const angle = Math.random() * Math.PI * 2;
      const speed = s * (0.5 + Math.random() * 0.8);
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: radii[type](),
        type,
        phase:      Math.random() * Math.PI * 2,
        phaseSpeed: 0.008 + Math.random() * 0.012,
      };
    };

    const mkPacket = (idx: number): Packet => {
      const hubs = particles.map((p, i) => ({ p, i })).filter(x => x.p.type === "hub");
      if (!hubs.length) return { from: 0, to: 1, t: 0, speed: 0.005 };
      const src  = hubs[Math.floor(Math.random() * hubs.length)];
      const candidates = particles.map((p, i) => {
        if (i === src.i) return null;
        const dx = p.x - src.p.x, dy = p.y - src.p.y;
        const d = Math.sqrt(dx*dx + dy*dy);
        return d < cfg.maxHub ? { i, d } : null;
      }).filter(Boolean) as { i: number; d: number }[];
      if (!candidates.length) return mkPacket(idx);
      const tgt = candidates[Math.floor(Math.random() * candidates.length)];
      return { from: src.i, to: tgt.i, t: 0, speed: 0.004 + Math.random() * 0.005 };
    };

    const spawnParticles = () => {
      particles = [
        ...Array.from({ length: cfg.hubN   }, () => mkParticle("hub")),
        ...Array.from({ length: cfg.stdN   }, () => mkParticle("standard")),
        ...Array.from({ length: cfg.microN }, () => mkParticle("micro")),
      ];
      packets = Array.from({ length: cfg.pktN }, (_, i) => mkPacket(i));
    };

    const resize = () => {
      const newW = canvas.offsetWidth;
      const newH = canvas.offsetHeight;
      const newBp = bp(newW);
      // breakpoint changed → reinit with new counts
      if (newBp !== prevBp) {
        cfg = getConfig(newW);
        canvas.width = newW; canvas.height = newH;
        prevW = newW; prevH = newH; prevBp = newBp;
        spawnParticles();
        return;
      }
      // same breakpoint → scale positions proportionally
      if (prevW > 0 && prevH > 0 && particles.length > 0) {
        const sx = newW / prevW, sy = newH / prevH;
        for (const p of particles) { p.x *= sx; p.y *= sy; }
      }
      canvas.width = newW; canvas.height = newH;
      prevW = newW; prevH = newH;
    };

    const init = () => {
      const w = canvas.offsetWidth;
      cfg = getConfig(w);
      canvas.width  = w;
      canvas.height = canvas.offsetHeight;
      prevW = canvas.width; prevH = canvas.height;
      prevBp = bp(w);
      spawnParticles();
    };

    // ── draw hub glow ring ──
    const drawHubGlow = (p: Particle, pulse: number, pal: ReturnType<typeof palette>) => {
      const baseA = pal.hubGlowA;
      const glow  = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * (4 + pulse * 3));
      glow.addColorStop(0,   rgba(pal.hub, baseA + pulse * 0.10));
      glow.addColorStop(0.4, rgba(pal.hub, baseA * 0.32));
      glow.addColorStop(1,   rgba(pal.hub, 0));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * (4 + pulse * 3), 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();
    };

    // ── main draw loop ──
    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pal   = palette();
      const mouse = mouseRef.current;

      // ── move particles ──
      for (const p of particles) {
        p.phase += p.phaseSpeed;

        // mouse repulsion
        if (mouse && cfg.repel > 0) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y;
          const d  = Math.sqrt(dx*dx + dy*dy);
          if (d < cfg.repel && d > 0) {
            const force = (cfg.repel - d) / cfg.repel * 0.6;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }

        // friction so repulsion doesn't snowball
        const baseS: Record<PType, number> = { hub: 0.09, standard: 0.16, micro: 0.28 };
        const maxV = baseS[p.type] * 2.8;
        const spd  = Math.sqrt(p.vx*p.vx + p.vy*p.vy);
        if (spd > maxV) { p.vx = (p.vx/spd)*maxV; p.vy = (p.vy/spd)*maxV; }

        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        p.x = Math.max(0, Math.min(canvas.width,  p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));
      }

      // ── draw lines (standard + hub) ──
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          if (a.type === "micro" && b.type === "micro") continue;
          const isHubConn = a.type === "hub" || b.type === "hub";
          const maxD = isHubConn ? cfg.maxHub : cfg.maxStd;
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist >= maxD) continue;
          const fade  = 1 - dist / maxD;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          if (isHubConn) {
            ctx.strokeStyle = rgba(pal.hubLine, pal.hubLineA * fade);
            ctx.lineWidth   = 0.9;
          } else {
            ctx.strokeStyle = rgba(pal.line, pal.lineA * fade);
            ctx.lineWidth   = 0.55;
          }
          ctx.stroke();
        }
      }

      // ── data packets (travel along hub connections) ──
      for (let k = 0; k < packets.length; k++) {
        const pkt = packets[k];
        pkt.t += pkt.speed;
        if (pkt.t >= 1) { packets[k] = mkPacket(k); continue; }
        const src = particles[pkt.from], dst = particles[pkt.to];
        const px = src.x + (dst.x - src.x) * pkt.t;
        const py = src.y + (dst.y - src.y) * pkt.t;
        // glow trail
        const trail = ctx.createRadialGradient(px, py, 0, px, py, 7);
        trail.addColorStop(0,   rgba(pal.packet, 0.7));
        trail.addColorStop(0.5, rgba(pal.packet, 0.2));
        trail.addColorStop(1,   rgba(pal.packet, 0));
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = trail;
        ctx.fill();
        // core dot
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = rgba(pal.packet, 1);
        ctx.fill();
      }

      // ── draw particles ──
      for (const p of particles) {
        const pulse = Math.sin(p.phase) * 0.5 + 0.5; // 0→1

        if (p.type === "hub") {
          drawHubGlow(p, pulse, pal);
          // outer ring
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r + pulse * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = rgba(pal.hub, pal.hubRingA + pulse * 0.12);
          ctx.lineWidth   = 0.8;
          ctx.stroke();
          // core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = rgba(pal.hub, 0.85 + pulse * 0.15);
          ctx.fill();
        } else if (p.type === "standard") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = rgba(pal.dot, pal.dotA * (0.7 + pulse * 0.3));
          ctx.fill();
        } else {
          // micro — no pulse, just static tiny
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = rgba(pal.dot, pal.dotA * 0.55);
          ctx.fill();
        }
      }

      // ── subtle scan-line every 4s (only in dark mode) ──
      if (isDark()) {
        const scanY = ((tick * 0.4) % (canvas.height + 60)) - 30;
        const scanGrad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
        scanGrad.addColorStop(0,   "rgba(25,197,154,0)");
        scanGrad.addColorStop(0.5, "rgba(25,197,154,0.025)");
        scanGrad.addColorStop(1,   "rgba(25,197,154,0)");
        ctx.fillStyle = scanGrad;
        ctx.fillRect(0, scanY - 30, canvas.width, 60);
      }

      animId = requestAnimationFrame(draw);
    };

    // defer until after first layout so canvas.offsetWidth is valid
    requestAnimationFrame(() => { init(); draw(); });

    // ── mouse tracking (on the section, not canvas) ──
    const section = canvas.parentElement;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouseRef.current = null; };
    section?.addEventListener("mousemove", onMove);
    section?.addEventListener("mouseleave", onLeave);

    const ro = new ResizeObserver(() => { resize(); });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      section?.removeEventListener("mousemove", onMove);
      section?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

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

      {/* Constellation animated background */}
      {/* <ConstellationCanvas /> */}

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
