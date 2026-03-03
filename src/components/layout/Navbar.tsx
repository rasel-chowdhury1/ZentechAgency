"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white">
      <Container className="flex h-[72px] items-center justify-between">

        {/* LEFT — LOGO */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="ZentechPoint Logo"
            width={200}
            height={60}
            priority
            className="h-[38px] w-auto object-contain"
          />
        </Link>

        {/* CENTER — NAV LINKS (desktop) */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-gray-600 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <Button className="hidden px-6 py-2.5 text-sm font-medium sm:inline-flex">
            Let&apos;s Talk
          </Button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--border)] text-gray-600 transition hover:bg-[color:var(--muted-bg)] md:hidden"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden border-t border-[color:var(--border)] bg-white transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-gray-600 transition hover:bg-[color:var(--muted-bg)] hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 border-t border-[color:var(--border)] pt-4">
            <Button className="w-full py-2.5 text-sm font-medium">
              Let&apos;s Talk
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
