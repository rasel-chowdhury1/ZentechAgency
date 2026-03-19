import Link from "next/link";
import Container from "@/components/layout/Container";
import { services } from "@/lib/data";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/zentechpoint/?hl=en",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/zentechpoint/?viewAsMember=true",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61584989416549",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L2.25 2.25h6.922l4.255 5.625zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const companyLinks = [
  { label: "About Us",  href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing",   href: "/pricing" },
  { label: "Blog",      href: "/blog" },
  { label: "Contact",   href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Sitemap",          href: "/sitemap.xml" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[color:var(--dark)] text-[color:var(--dark-foreground)]">

      {/* Subtle top gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--primary)]/40 to-transparent" />

      <Container className="pt-16 pb-8 sm:pt-20 sm:pb-10">

        {/* ── Top: brand + newsletter strip ── */}
        <div className="mb-14 flex flex-col gap-8 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 md:flex-row md:items-center md:justify-between md:gap-6">
          {/* Brand block */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--primary)] text-sm font-bold text-white shadow-lg shadow-[color:var(--primary)]/30">
              ZP
            </div>
            <div>
              <p className="text-base font-bold text-white">ZentechPoint</p>
              <p className="text-[11px] text-white/35">Premium Digital Agency</p>
            </div>
          </div>

          {/* Tagline */}
          <p className="max-w-xs text-sm leading-relaxed text-white/40 md:text-center">
            We turn ideas into high-performance digital products that grow your business.
          </p>

          {/* Start project CTA */}
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
          >
            Start a project
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--primary)]/15 text-xs font-bold text-[color:var(--primary)] ring-1 ring-[color:var(--primary)]/25">
                ZP
              </span>
              <span className="text-sm font-semibold text-white/70">ZentechPoint</span>
            </Link>

            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-white/35">
              Premium web, app &amp; software solutions built for performance and growth.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 bg-white/[0.04] text-white/30 transition-all duration-200 hover:border-[color:var(--primary)]/40 hover:bg-[color:var(--primary)]/10 hover:text-[color:var(--primary)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Status badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] text-white/40">Available for new projects</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--primary)]">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-1.5 text-sm text-white/40 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-px w-3 bg-white/15 transition-all duration-200 group-hover:w-4 group-hover:bg-[color:var(--primary)]" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--primary)]">
              Company
            </p>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-1.5 text-sm text-white/40 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-px w-3 bg-white/15 transition-all duration-200 group-hover:w-4 group-hover:bg-[color:var(--primary)]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--primary)]">
              Get in Touch
            </p>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:hello@zentechpoint.com"
                  className="group flex items-start gap-3 text-sm text-white/40 transition-colors duration-200 hover:text-white"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/[0.04] text-white/25 transition-all duration-200 group-hover:border-[color:var(--primary)]/30 group-hover:bg-[color:var(--primary)]/10 group-hover:text-[color:var(--primary)]">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-widest text-white/25">Email</span>
                    hello@zentechpoint.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/40">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/[0.04] text-white/25">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-white/25">Location</span>
                  Bangladesh — Remote Worldwide
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/40">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/[0.04] text-white/25">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-white/25">Response</span>
                  Within 24 hours
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ── Bottom bar ── */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} ZentechPoint. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-white/20 transition-colors duration-200 hover:text-white/50"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </Container>
    </footer>
  );
}
