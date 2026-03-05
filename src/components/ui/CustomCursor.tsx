"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Ring position — smoothly lags behind
  const ring = useRef({ x: -80, y: -80 });
  // Dot position — instant
  const dot  = useRef({ x: -80, y: -80 });

  const [hovered,  setHovered]  = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible,  setVisible]  = useState(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      dot.current  = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover], input, textarea, select, label")) {
        setHovered(true);
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover], input, textarea, select, label")) {
        setHovered(false);
      }
    };

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseover",  onEnter);
    window.addEventListener("mouseout",   onLeave);
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    // Smooth ring follow loop
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const loop = () => {
      ring.current.x = lerp(ring.current.x, dot.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, dot.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${dot.current.x}px, ${dot.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseover",  onEnter);
      window.removeEventListener("mouseout",   onLeave);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  return (
    <>
      {/* Dot — instant follow */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div
          className={`rounded-full bg-[color:var(--primary)] transition-all duration-150 ${
            clicking
              ? "h-2 w-2 opacity-60"
              : hovered
              ? "h-2.5 w-2.5 opacity-80"
              : "h-2 w-2 opacity-100"
          }`}
        />
      </div>

      {/* Ring — lagging follow */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div
          className={`rounded-full border border-[color:var(--primary)] transition-all duration-200 ${
            clicking
              ? "h-6 w-6 scale-75 opacity-40"
              : hovered
              ? "h-10 w-10 border-[color:var(--primary)]/50 bg-[color:var(--primary)]/8 opacity-80"
              : "h-8 w-8 opacity-50"
          }`}
        />
      </div>
    </>
  );
}
