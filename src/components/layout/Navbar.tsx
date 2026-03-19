"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted,  setMounted]  = useState(false);
  const [hovered,  setHovered]  = useState<string | null>(null);
  const [isDark,   setIsDark]   = useState(false);
  const pathname = usePathname();
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const navRef       = useRef<HTMLDivElement>(null);

  // Mount entrance animation + read saved theme
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setIsDark(true);
    else if (saved === "light") setIsDark(false);
    else setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    return () => clearTimeout(t);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    const html = document.documentElement;
    if (next) {
      html.classList.add("dark");
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Scroll shrink + blur
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Slide the highlight pill to the hovered / active link
  useEffect(() => {
    const target = hovered ?? pathname;
    const nav = navRef.current;
    const pill = indicatorRef.current;
    if (!nav || !pill) return;
    const link = nav.querySelector<HTMLElement>(`[data-href="${target}"]`);
    if (!link) { pill.style.opacity = "0"; return; }
    const navRect  = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    pill.style.opacity  = "1";
    pill.style.width    = `${linkRect.width}px`;
    pill.style.left     = `${linkRect.left - navRect.left}px`;
  }, [hovered, pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--card)]/80 shadow-[0_1px_0_0_color:var(--border)] backdrop-blur-xl"
          : "bg-[color:var(--card)] shadow-[0_1px_0_0_color:var(--border)]"
      }`}
    >
      {/* Top progress line — always-on brand accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[color:var(--primary)]/50 to-transparent" />

      <Container
        className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-[60px]" : "h-[72px]"
        }`}
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={`flex items-center transition-all duration-500 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}
        >
          <Image
            src={isDark ? "/zentechpoint_dark.png" : "/zentechpoint_wide.png"}
            alt="ZentechPoint"
            width={200}
            height={60}
            priority
            className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-[30px]" : "h-[36px]"}`}
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav
          ref={navRef}
          onMouseLeave={() => setHovered(null)}
          className={`relative hidden items-center md:flex transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          {/* Sliding background pill */}
          <span
            ref={indicatorRef}
            aria-hidden="true"
            className="pointer-events-none absolute top-0 h-full rounded-xl bg-[color:var(--muted-bg)] transition-all duration-300 ease-out"
            style={{ opacity: 0 }}
          />

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className={`relative z-10 flex items-center gap-1.5 px-4 py-2.5 text-[13.5px] font-medium tracking-wide transition-colors duration-200 select-none ${
                  isActive
                    ? "text-[color:var(--primary)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                }`}
              >
                {link.label}
                {/* Active dot */}
                {isActive && (
                  <span className="h-1 w-1 rounded-full bg-[color:var(--primary)] opacity-80" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Right actions ── */}
        <div
          className={`flex items-center gap-2.5 transition-all duration-500 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
          }`}
        >
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--muted-bg)] transition-all duration-300 hover:border-[color:var(--primary)]/50 hover:bg-[color:var(--primary)]/8 hover:text-[color:var(--primary)] overflow-hidden"
          >
            {/* Sun icon — visible in dark mode (click to go light) */}
            <svg
              className={`absolute h-[18px] w-[18px] transition-all duration-400 ${
                isDark
                  ? "opacity-100 scale-100 rotate-0 text-amber-400"
                  : "opacity-0 scale-50 rotate-90 text-amber-500"
              }`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            {/* Moon icon — visible in light mode (click to go dark) */}
            <svg
              className={`absolute h-[17px] w-[17px] transition-all duration-400 ${
                isDark
                  ? "opacity-0 scale-50 -rotate-90 text-slate-500"
                  : "opacity-100 scale-100 rotate-0 text-slate-600"
              }`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </button>

          {/* Subtle availability pill — desktop only */}
          <div className="mr-1 hidden items-center gap-1.5 rounded-full border border-[color:var(--border)] px-3 py-1 lg:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[11px] font-medium text-[color:var(--muted)]">Available</span>
          </div>

          {/* CTA button */}
          <Link
            href="/contact"
            className="group relative hidden overflow-hidden rounded-xl bg-[color:var(--primary)] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[color:var(--primary)]/25 sm:inline-flex sm:items-center sm:gap-2"
          >
            {/* Shine sweep */}
            <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/15 transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative">Let&apos;s Talk</span>
            <svg className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 md:hidden ${
              open
                ? "border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 text-[color:var(--primary)]"
                : "border-[color:var(--border)] bg-[color:var(--muted-bg)] text-[color:var(--muted)] hover:border-[color:var(--primary)]/30 hover:bg-[color:var(--primary)]/8 hover:text-[color:var(--primary)]"
            }`}
          >
            <span className="relative flex h-[16px] w-[16px] flex-col justify-between">
              <span className={`h-[1.5px] w-full origin-center rounded-full bg-current transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[1.5px] rounded-full bg-current transition-all duration-300 ${open ? "w-0 opacity-0" : "w-2/3"}`} />
              <span className={`h-[1.5px] w-full origin-center rounded-full bg-current transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </Container>

      {/* ── Mobile menu ── */}
      <div
        className={`overflow-hidden border-t border-[color:var(--border)] bg-[color:var(--card)]/95 backdrop-blur-xl transition-all duration-400 ease-in-out md:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-3 pb-5">

          {/* Nav links */}
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-300 ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                  } ${
                    isActive
                      ? "bg-[color:var(--primary)]/8 text-[color:var(--primary)]"
                      : "text-[color:var(--muted)] hover:bg-[color:var(--muted-bg)] hover:text-[color:var(--foreground)]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive
                    ? <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
                    : (
                      <svg className="h-4 w-4 opacity-25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    )
                  }
                </Link>
              );
            })}
          </nav>

          {/* Mobile bottom strip */}
          <div className="mt-4 space-y-3 border-t border-[color:var(--border)] pt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[color:var(--primary)] py-3 text-sm font-semibold text-white"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative">Let&apos;s Talk</span>
              <svg className="relative h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            {/* Contact info row */}
            <div className="flex items-center justify-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] text-[color:var(--muted)]">Available for new projects</span>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
