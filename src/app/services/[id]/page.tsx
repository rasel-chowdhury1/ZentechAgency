import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { services } from "@/lib/data";

// ── Per-category accent colour ──────────────────────────────────────────────
const ACCENT: Record<string, string> = {
  Development: "#059669",
  Mobile:      "#3b82f6",
  Engineering: "#f59e0b",
  Growth:      "#8b5cf6",
  Design:      "#f43f5e",
  Consulting:  "#06b6d4",
};

// ── Category icons ───────────────────────────────────────────────────────────
const ICONS: Record<string, React.ReactNode> = {
  Development: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  Mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
    </svg>
  ),
  Engineering: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Growth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  Design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  Consulting: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
};

// ── Reusable small components ────────────────────────────────────────────────
function CheckIcon({ color }: { color: string }) {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: `${color}18`, color }}>
      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5">
        <polyline points="2,6 5,9 10,3" />
      </svg>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="h-3 w-3 shrink-0 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

// ── Process steps (generic, works for every service) ─────────────────────────
const PROCESS = [
  {
    n: "01",
    title: "Discovery Call",
    desc: "We start with a free consultation to understand your goals, timeline, and constraints.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Strategy & Roadmap",
    desc: "We map out a clear project plan — scope, milestones, tech stack, and delivery schedule.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Build & Iterate",
    desc: "Agile sprints with regular check-ins. You see progress at every stage, not just at the end.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Launch & Support",
    desc: "We deploy, handover everything, and stay available for post-launch support and improvements.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

// ── Why ZentechPoint features ────────────────────────────────────────────────
const WHY_US = [
  {
    title: "Fast Delivery",
    desc: "Structured sprints keep timelines on track — no endless delays.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Precision Built",
    desc: "Every line of code and pixel is crafted for performance and scale.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Transparent Process",
    desc: "No surprises. Clear estimates and open communication throughout.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Measurable Results",
    desc: "KPIs defined upfront. Every deliverable is tied to your business goals.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Source Ownership",
    desc: "You own 100% of the code, assets, and accounts — always.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Post-Launch Support",
    desc: "14-day post-launch support included. Long-term plans available.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ServiceDetailsPage({ params }: { params: { id: string } }) {
  const current = services.find((s) => s.slug === params.id);
  if (!current) return notFound();

  const ac      = ACCENT[current.category] ?? "var(--primary)";
  const others  = services.filter((s) => s.slug !== current.slug);
  const idx     = services.findIndex((s) => s.slug === current.slug);
  const num     = String(idx + 1).padStart(2, "0");

  return (
    <main className="min-h-screen bg-[color:var(--background)]">

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-[color:var(--border)]">

        {/* Accent glow blob */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: `radial-gradient(circle, ${ac}, transparent 70%)` }} />
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[360px] w-[360px] rounded-full opacity-[0.04] blur-3xl"
          style={{ background: `radial-gradient(circle, ${ac}, transparent 70%)` }} />

        {/* Dot grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        {/* Bottom separator line */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${ac}60, transparent)` }} />

        <Container className="relative pt-4 pb-12 md:pt-5 md:pb-16">

          {/* Breadcrumb */}
          <nav className="mb-7 flex items-center gap-1.5 text-[12px] text-[color:var(--muted)]" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex items-center gap-1 font-medium transition-colors hover:text-[color:var(--foreground)]">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Home
            </Link>
            <ChevronRight />
            <Link href="/services" className="font-medium transition-colors hover:text-[color:var(--foreground)]">Services</Link>
            <ChevronRight />
            <span className="font-semibold text-[color:var(--foreground)]">{current.title}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:items-start">

            {/* ── Left ── */}
            <div>
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em]"
                style={{ borderColor: `${ac}35`, backgroundColor: `${ac}10`, color: ac }}>
                <span style={{ color: ac }}>{ICONS[current.category]}</span>
                {current.category}
              </div>

              {/* Ghost number + title */}
              <div className="relative mt-4">
                <span className="pointer-events-none absolute -right-2 -top-6 select-none text-[110px] font-black leading-none opacity-[0.04] md:text-[130px]">
                  {num}
                </span>
                <h1 className="relative text-[clamp(26px,4vw,46px)] font-black leading-tight tracking-tight text-[color:var(--foreground)]">
                  {current.title}
                </h1>
              </div>

              {/* Description */}
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[color:var(--muted)]">
                {current.description}
              </p>

              {/* Meta chips */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3.5 py-1.5 text-[12px] font-medium text-[color:var(--muted)]">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {current.timeline}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3.5 py-1.5 text-[12px] font-medium text-[color:var(--muted)]">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"/>
                  </svg>
                  {current.bestFor}
                </span>
              </div>

              {/* CTA row — mobile */}
              <div className="mt-7 flex flex-wrap gap-3 lg:hidden">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{ backgroundColor: ac }}>
                  Get a free quote <ArrowIcon />
                </Link>
                <Link href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-5 py-2.5 text-sm font-semibold text-[color:var(--foreground)] transition-all hover:bg-[color:var(--muted-bg)]">
                  All services
                </Link>
              </div>
            </div>

            {/* ── Right: sticky CTA card (desktop) ── */}
            <div className="hidden lg:block">
              <div className="sticky top-8 overflow-hidden rounded-2xl border"
                style={{ borderColor: `${ac}30`, background: `linear-gradient(145deg, ${ac}0e, ${ac}05)` }}>
                <div className="p-6">
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${ac}18`, color: ac }}>
                    {ICONS[current.category]}
                  </div>
                  <h3 className="mt-3 text-[15px] font-bold text-[color:var(--foreground)]">
                    Ready to get started?
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-snug text-[color:var(--muted)]">
                    Share your requirements and we'll put together a custom plan for this service.
                  </p>

                  {/* Trust line */}
                  <div className="my-4 flex items-center gap-2 text-[11px] text-[color:var(--muted)]">
                    <svg className="h-3.5 w-3.5 shrink-0 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Free consultation — no commitment needed
                  </div>

                  <Link href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:opacity-90"
                    style={{ backgroundColor: ac }}>
                    Get a free quote <ArrowIcon />
                  </Link>
                  <Link href="/services"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] py-2.5 text-sm font-medium text-[color:var(--foreground)] transition-all hover:bg-[color:var(--muted-bg)]">
                    Browse all services
                  </Link>
                </div>

                {/* Accent bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${ac}, transparent)` }} />
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* ════════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════════ */}
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-start">

          {/* ══ LEFT CONTENT ══════════════════════════════════ */}
          <div className="space-y-12">

            {/* 1 ── What's Included ───────────────────────── */}
            <section>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white"
                  style={{ backgroundColor: ac }}>1</span>
                <h2 className="text-xl font-bold md:text-2xl">What's Included</h2>
              </div>
              <p className="mt-2 pl-10 text-[14px] leading-relaxed text-[color:var(--muted)]">
                Every engagement covers the following capabilities, tailored to your specific requirements.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {current.bullets.map((b) => (
                  <div key={b}
                    className="flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 transition-all duration-200 hover:shadow-md"
                    style={{ borderLeftWidth: "3px", borderLeftColor: `${ac}55` }}>
                    <CheckIcon color={ac} />
                    <span className="text-[13px] font-medium text-[color:var(--foreground)]">{b}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 2 ── How It Works ──────────────────────────── */}
            <section>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white"
                  style={{ backgroundColor: ac }}>2</span>
                <h2 className="text-xl font-bold md:text-2xl">How It Works</h2>
              </div>
              <p className="mt-2 pl-10 text-[14px] leading-relaxed text-[color:var(--muted)]">
                A structured 4-step process that keeps every project on time, on budget, and stress-free.
              </p>
              <div className="mt-6 space-y-3">
                {PROCESS.map((step, i) => (
                  <div key={step.n}
                    className="group relative flex gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 transition-all duration-200 hover:shadow-md"
                    style={{ borderLeftWidth: "3px", borderLeftColor: i === 0 ? `${ac}55` : "var(--border)" }}>

                    {/* Step icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors"
                      style={{ backgroundColor: i === 0 ? `${ac}18` : "var(--muted-bg)", color: i === 0 ? ac : "var(--muted)" }}>
                      {step.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black tracking-widest"
                          style={{ color: i === 0 ? ac : "var(--muted)" }}>
                          {step.n}
                        </span>
                        <h3 className="text-[14px] font-bold text-[color:var(--foreground)]">{step.title}</h3>
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-[color:var(--muted)]">{step.desc}</p>
                    </div>

                    {/* Connector dot */}
                    {i < PROCESS.length - 1 && (
                      <div className="absolute -bottom-3.5 left-[30px] flex flex-col items-center gap-0.5">
                        <div className="h-3.5 w-px bg-[color:var(--border)]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 3 ── Deliverables ──────────────────────────── */}
            <section>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white"
                  style={{ backgroundColor: ac }}>3</span>
                <h2 className="text-xl font-bold md:text-2xl">What You'll Receive</h2>
              </div>
              <p className="mt-2 pl-10 text-[14px] leading-relaxed text-[color:var(--muted)]">
                Tangible assets handed over at the end of the engagement — ready to use immediately.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {current.deliverables.map((d) => (
                  <span key={d}
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold"
                    style={{ borderColor: `${ac}35`, backgroundColor: `${ac}0d`, color: ac }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ac }} />
                    {d}
                  </span>
                ))}
              </div>
            </section>

            {/* 4 ── Why ZentechPoint ──────────────────────── */}
            <section className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)]">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white"
                    style={{ backgroundColor: ac }}>4</span>
                  <h2 className="text-xl font-bold md:text-2xl">Why Choose ZentechPoint</h2>
                </div>
                <p className="mt-3 pl-10 text-[14px] leading-relaxed text-[color:var(--muted)]">
                  We focus on premium delivery — clean code, scalable architecture, and results you can measure.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {WHY_US.map((item) => (
                    <div key={item.title}
                      className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted-bg)]/50 p-4 transition-all duration-200 hover:shadow-md">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${ac}14`, color: ac }}>
                        {item.icon}
                      </div>
                      <h3 className="mt-3 text-[13px] font-bold text-[color:var(--foreground)]">{item.title}</h3>
                      <p className="mt-1 text-[12px] leading-snug text-[color:var(--muted)]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Bottom accent strip */}
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${ac}, transparent 60%)` }} />
            </section>

            {/* Mobile CTA ─────────────────────────────────── */}
            <div className="flex flex-wrap gap-3 lg:hidden">
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90"
                style={{ backgroundColor: ac }}>
                Get a free quote <ArrowIcon />
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition-all hover:bg-[color:var(--muted-bg)]">
                All services
              </Link>
            </div>
          </div>

          {/* ══ RIGHT SIDEBAR ═════════════════════════════════ */}
          <div className="space-y-5">

            {/* All services nav ───────────────────────────── */}
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">All Services</p>
              <div className="mt-3 space-y-1.5">
                {services.map((s) => {
                  const isActive = s.slug === current.slug;
                  const sac = ACCENT[s.category] ?? "var(--primary)";
                  return (
                    <Link key={s.slug} href={`/services/${s.slug}`}
                      className="group flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-[13px] font-medium transition-all duration-200 hover:shadow-sm"
                      style={isActive
                        ? { borderColor: `${sac}40`, backgroundColor: `${sac}12`, color: sac }
                        : { borderColor: "transparent", backgroundColor: "transparent", color: "var(--foreground)" }
                      }>
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg opacity-80"
                          style={{ backgroundColor: `${sac}15`, color: sac }}>
                          <span className="scale-[0.6]">{ICONS[s.category]}</span>
                        </span>
                        {s.title}
                      </div>
                      <svg className="h-3 w-3 shrink-0 opacity-40 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Free consultation card ─────────────────────── */}
            <div className="overflow-hidden rounded-2xl border"
              style={{ borderColor: `${ac}28`, background: `linear-gradient(145deg, ${ac}10, ${ac}05)` }}>
              <div className="p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${ac}18`, color: ac }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-[14px] font-bold text-[color:var(--foreground)]">Free Consultation</h3>
                <p className="mt-1.5 text-[12px] leading-snug text-[color:var(--muted)]">
                  Share your requirements — we'll suggest the best approach with no commitment.
                </p>
                <ul className="mt-3 space-y-1.5">
                  {["No commitment needed", "Response within 24 hours", "Custom plan included"].map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-[11px] text-[color:var(--muted)]">
                      <svg className="h-3 w-3 shrink-0 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:opacity-90"
                  style={{ backgroundColor: ac }}>
                  Book free call <ArrowIcon />
                </Link>
              </div>
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${ac}, transparent)` }} />
            </div>

            {/* You might also need ────────────────────────── */}
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">You might also need</p>
              <div className="mt-3 space-y-2">
                {others.slice(0, 3).map((s) => {
                  const oc = ACCENT[s.category] ?? "#059669";
                  return (
                    <Link key={s.slug} href={`/services/${s.slug}`}
                      className="group flex items-center gap-3 rounded-xl p-2.5 transition-all hover:bg-[color:var(--muted-bg)]">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors"
                        style={{ backgroundColor: `${oc}14`, color: oc }}>
                        {ICONS[s.category]}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[12px] font-semibold text-[color:var(--foreground)]">{s.title}</p>
                        <p className="text-[11px] text-[color:var(--muted)]">{s.timeline}</p>
                      </div>
                      <svg className="h-3.5 w-3.5 shrink-0 opacity-30 transition-all duration-200 group-hover:opacity-70 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>{/* end sidebar */}
        </div>
      </Container>

    </main>
  );
}
