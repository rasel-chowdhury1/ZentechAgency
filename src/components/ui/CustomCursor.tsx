"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "hover" | "click" | "text";

export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const glowRef  = useRef<HTMLDivElement>(null);

  const pos   = useRef({ x: -120, y: -120 });
  const ring  = useRef({ x: -120, y: -120 });
  const rafId = useRef<number>(0);
  const angle = useRef(0);

  const [visible, setVisible] = useState(false);
  const [state,   setState]   = useState<CursorState>("default");

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const getState = (target: EventTarget | null): CursorState => {
      const el = target as HTMLElement;
      if (el?.closest("input, textarea, [contenteditable]")) return "text";
      if (el?.closest("a, button, [data-cursor-hover], select, label")) return "hover";
      return "default";
    };

    const onOver  = (e: MouseEvent) => setState(getState(e.target));
    const onOut   = (e: MouseEvent) => { if (!(e.target as HTMLElement)?.closest("a,button,input,textarea,select,label,[data-cursor-hover],[contenteditable]")) setState("default"); };
    const onDown  = () => setState("click");
    const onUp    = (e: MouseEvent) => setState(getState(e.target));
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove",  onMove,  { passive: true });
    window.addEventListener("mouseover",  onOver);
    window.addEventListener("mouseout",   onOut);
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      const lerpSpeed = 0.1;
      ring.current.x = lerp(ring.current.x, pos.current.x, lerpSpeed);
      ring.current.y = lerp(ring.current.y, pos.current.y, lerpSpeed);
      angle.current += 1.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px,${pos.current.y}px) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px,${ring.current.y}px) translate(-50%,-50%) rotate(${angle.current}deg)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${ring.current.x}px,${ring.current.y}px) translate(-50%,-50%)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseover",  onOver);
      window.removeEventListener("mouseout",   onOut);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  const opacity = visible ? 1 : 0;

  return (
    <>
      {/* ── Ambient glow (follows ring with blur) ── */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9996] transition-opacity duration-500"
        style={{ opacity: opacity * (state === "hover" ? 0.35 : 0.15) }}
      >
        <div
          className={`rounded-full bg-[color:var(--primary)] blur-2xl transition-all duration-300 ${
            state === "hover" ? "h-16 w-16" : state === "click" ? "h-8 w-8" : "h-12 w-12"
          }`}
        />
      </div>

      {/* ── Outer ring (lagging + rotating dashes) ── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] transition-opacity duration-300"
        style={{ opacity }}
      >
        <svg
          className="transition-all duration-300"
          style={{
            width:  state === "hover" ? 48 : state === "click" ? 24 : 36,
            height: state === "hover" ? 48 : state === "click" ? 24 : 36,
            marginLeft: state === "hover" ? -24 : state === "click" ? -12 : -18,
            marginTop:  state === "hover" ? -24 : state === "click" ? -12 : -18,
          }}
          viewBox="0 0 36 36"
          fill="none"
        >
          <circle
            cx="18" cy="18" r="16"
            stroke="var(--primary)"
            strokeWidth={state === "hover" ? "1.5" : "1"}
            strokeDasharray={state === "hover" ? "4 3" : state === "default" ? "3 5" : "2 4"}
            strokeOpacity={state === "click" ? 0.4 : state === "hover" ? 0.9 : 0.55}
          />
          {/* Inner accent arc */}
          {state === "hover" && (
            <circle
              cx="18" cy="18" r="10"
              stroke="var(--ring)"
              strokeWidth="1"
              strokeDasharray="2 6"
              strokeOpacity="0.5"
            />
          )}
        </svg>
      </div>

      {/* ── Center dot ── */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-300"
        style={{ opacity }}
      >
        {state === "text" ? (
          /* Text cursor — thin I-beam style */
          <div className="flex h-5 w-[2px] -translate-x-px flex-col items-center">
            <div className="h-1 w-1.5 rounded-sm bg-[color:var(--primary)]" />
            <div className="flex-1 w-[1.5px] bg-[color:var(--primary)]" />
            <div className="h-1 w-1.5 rounded-sm bg-[color:var(--primary)]" />
          </div>
        ) : (
          <div
            className="rounded-full transition-all duration-150"
            style={{
              width:   state === "hover" ? 8  : state === "click" ? 4  : 6,
              height:  state === "hover" ? 8  : state === "click" ? 4  : 6,
              marginLeft: state === "hover" ? -4 : state === "click" ? -2 : -3,
              marginTop:  state === "hover" ? -4 : state === "click" ? -2 : -3,
              background: state === "hover"
                ? "linear-gradient(135deg, var(--primary), var(--ring))"
                : "var(--primary)",
              boxShadow: state === "hover"
                ? "0 0 8px 2px color-mix(in srgb, var(--primary) 60%, transparent)"
                : state === "click"
                ? "0 0 6px 1px color-mix(in srgb, var(--primary) 80%, transparent)"
                : "none",
              opacity: state === "click" ? 0.7 : 1,
            }}
          />
        )}
      </div>
    </>
  );
}
