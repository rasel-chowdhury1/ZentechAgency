"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const pathname = usePathname();
  const mobileRef = useRef<HTMLDivElement>(null);

  // Shrink on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--border)] bg-[color:var(--card)]/95 shadow-sm backdrop-blur-md"
          : "border-b border-[color:var(--border)] bg-[color:var(--card)]"
      }`}
    >
      <Container className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-[62px]" : "h-[72px]"}`}>

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="ZentechPoint Logo"
            width={200}
            height={60}
            priority
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-[32px]" : "h-[38px]"}`}
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2 text-[14px] font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[color:var(--primary)]"
                    : "text-[color:var(--muted)] hover:bg-[color:var(--muted-bg)] hover:text-[color:var(--foreground)]"
                }`}
              >
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[color:var(--primary)]" />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ── Right actions ── */}
        <div className="flex items-center gap-2.5">
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-xl bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85 sm:inline-flex"
          >
            Let&apos;s Talk
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--muted-bg)] text-[color:var(--muted)] transition-all duration-200 hover:border-[color:var(--primary)]/30 hover:bg-[color:var(--primary)]/8 hover:text-[color:var(--primary)] md:hidden"
          >
            <span className="relative flex h-[18px] w-[18px] flex-col items-center justify-center gap-[5px]">
              <span
                className={`h-[1.5px] w-full rounded-full bg-current transition-all duration-300 origin-center ${
                  open ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-full rounded-full bg-current transition-all duration-300 origin-center ${
                  open ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

      </Container>

      {/* ── Mobile menu ── */}
      <div
        ref={mobileRef}
        className={`overflow-hidden border-t border-[color:var(--border)] bg-[color:var(--card)] backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-4">
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[color:var(--primary)]/8 text-[color:var(--primary)]"
                      : "text-[color:var(--muted)] hover:bg-[color:var(--muted-bg)] hover:text-[color:var(--foreground)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-3 border-t border-[color:var(--border)] pt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--primary)] py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
            >
              Let&apos;s Talk
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
