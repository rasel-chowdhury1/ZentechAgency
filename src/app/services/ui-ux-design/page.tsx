import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { services } from "@/lib/data";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";

export const metadata: Metadata = {
  title: "UI/UX Design Systems | ZentechPoint Custom Development",
  description:
    "ZentechPoint creates scalable UI/UX design systems for consistent digital experiences. Expert design development for enterprise apps & web platforms.",
};

const AC = "#f43f5e"; // Design category accent

// ── Small shared icons ────────────────────────────────────────────────────
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

// ── Hero key benefits ──────────────────────────────────────────────────────
const KEY_BENEFITS = [
  { emoji: "🎨", title: "Design Consistency", points: ["Unified brand experience", "Seamless user journeys"] },
  { emoji: "⚡", title: "Faster Development", points: ["70% faster build times", "Reusable components"] },
  { emoji: "📱", title: "Multi-Platform Ready", points: ["Web, mobile, desktop", "Cross-browser compatibility"] },
  { emoji: "🎯", title: "User-Focused", points: ["Research-backed decisions", "Accessibility-first approach"] },
];

// ── Track record ────────────────────────────────────────────────────────
const TRACK_RECORD = [
  "500+ design components delivered",
  "50+ enterprise clients served",
  "95% client satisfaction rate",
  "WCAG 2.1 AA compliance expertise",
  "Figma, Adobe XD, and Sketch specialists",
];

// ── Services offered ──────────────────────────────────────────────────────
const OFFERINGS = [
  {
    title: "Design System Architecture",
    subtitle: "Foundation Building for Scalable Design",
    listA: { label: "Core Components", items: ["Design Tokens (Colors, Typography, Spacing, Icons)", "Atomic Components (Buttons, Inputs, Labels, Tags)", "Layout Systems (Grids, Containers, Spacing Rules)", "Brand Guidelines Integration"] },
    listB: { label: "Deliverables", items: ["Component library documentation", "Style guide specifications", "Token architecture setup", "Brand consistency framework"] },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Interactive Component Development",
    subtitle: "Production-Ready UI Elements",
    listA: { label: "Advanced Components", items: ["Navigation Systems (Headers, Sidebars, Breadcrumbs)", "Form Elements (Multi-step forms, Validation, Error states)", "Data Display (Tables, Cards, Lists, Dashboards)", "Modal & Overlay Systems"] },
    listB: { label: "Technical Features", items: ["Interactive prototypes", "Multiple component states", "Responsive behavior", "Animation specifications"] },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    ),
  },
  {
    title: "Cross-Platform Implementation",
    subtitle: "Unified Design Across All Touchpoints",
    listA: { label: "Platform Coverage", items: ["Responsive Web Applications", "iOS & Android Native Apps", "Progressive Web Apps (PWA)", "Desktop Applications"] },
    listB: { label: "Integration Services", items: ["Design token synchronization", "Component library setup", "Developer handoff documentation", "Quality assurance testing"] },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
  },
  {
    title: "Design System Governance",
    subtitle: "Long-term System Health & Evolution",
    listA: { label: "Governance Framework", items: ["Component Usage Guidelines", "Contribution & Review Processes", "Version Control Management", "Performance Monitoring"] },
    listB: { label: "Ongoing Support", items: ["Monthly system health audits", "Component usage analytics", "Continuous improvement recommendations", "Team training sessions"] },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

// ── 6-phase process ─────────────────────────────────────────────────────
const PROCESS = [
  {
    n: "01",
    title: "Discovery & Assessment",
    week: "Week 1-2",
    points: [
      "Current design audit & component inventory",
      "Stakeholder interviews & requirement gathering",
      "Technical environment assessment",
      "Competitive analysis & best practices review",
    ],
  },
  {
    n: "02",
    title: "Foundation Architecture",
    week: "Week 3-4",
    points: [
      "Design token definition & hierarchy",
      "Color palette & typography system",
      "Spacing scale & layout principles",
      "Iconography & illustration guidelines",
    ],
  },
  {
    n: "03",
    title: "Core Component Development",
    week: "Week 5-8",
    points: [
      "Atomic component creation (buttons, inputs, tags)",
      "Interactive states & hover effects",
      "Responsive behavior specifications",
      "Accessibility implementation (WCAG 2.1 AA)",
    ],
  },
  {
    n: "04",
    title: "Complex Component Systems",
    week: "Week 9-12",
    points: [
      "Navigation & layout components",
      "Form systems & validation patterns",
      "Data visualization elements",
      "Advanced interaction patterns",
    ],
  },
  {
    n: "05",
    title: "Documentation & Integration",
    week: "Week 13-14",
    points: [
      "Comprehensive design system documentation",
      "Developer handoff materials",
      "Figma/Sketch library setup",
      "Code implementation guidelines",
    ],
  },
  {
    n: "06",
    title: "Training & Launch",
    week: "Week 15-16",
    points: [
      "Team onboarding workshops",
      "Implementation support",
      "Governance process establishment",
      "Success metrics setup",
    ],
  },
];

// ── Pricing ────────────────────────────────────────────────────────────────
const PRICING = [
  {
    name: "Starter Package",
    tag: "Perfect for Growing Companies",
    timeline: "8-week timeline",
    price: "$5,000",
    features: ["Core component library (50+ components)", "Basic design tokens", "Figma library setup", "Documentation portal"],
  },
  {
    name: "Professional Package",
    tag: "Ideal for Established Businesses",
    timeline: "12-week timeline",
    price: "$10,000",
    featured: true,
    features: ["Complete component ecosystem (150+ components)", "Advanced interactions & animations", "Cross-platform guidelines", "Developer training included"],
  },
  {
    name: "Enterprise Package",
    tag: "Comprehensive for Large Organizations",
    timeline: "16-20 week timeline",
    price: "$20,000+",
    features: ["Full design system governance", "Multiple platform implementations", "Ongoing maintenance included", "Dedicated design system team"],
  },
];

const ADDITIONAL_SERVICES = [
  { name: "Design System Audit", price: "Starting at $2,000" },
  { name: "Monthly Retainer", price: "$5,000 – $15,000" },
  { name: "Team Augmentation", price: "Custom pricing" },
  { name: "Training Workshops", price: "$2,500 per session" },
];

// ── Technology stack ────────────────────────────────────────────────────
const TECH_STACK = [
  {
    title: "Design & Prototyping Platforms",
    items: ["Figma (Primary design system platform)", "Adobe XD (Advanced prototyping & animations)", "Sketch (Enterprise library management)", "Framer (Interactive micro-animations)"],
  },
  {
    title: "Documentation & Collaboration",
    items: ["Storybook (Component showcase & testing)", "Zeroheight (Design system documentation)", "Notion (Team collaboration & guidelines)", "Confluence (Enterprise documentation)"],
  },
  {
    title: "Development Integration",
    items: ["GitHub (Version control & collaboration)", "Style Dictionary (Multi-platform token generation)", "Tokens Studio (Design token management)", "Abstract (Design version control)"],
  },
  {
    title: "Quality Assurance",
    items: ["Accessibility testing tools (axe, WAVE)", "Cross-browser testing platforms", "Performance monitoring", "Usability testing frameworks"],
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "When should my company invest in a design system?",
    a: "Design systems provide maximum value when you have multiple products, growing design/development teams, or inconsistent user experiences. They're essential for companies with 3+ designers or multiple digital touchpoints.",
  },
  {
    q: "How long does design system development typically take?",
    a: "Timeline varies by complexity: basic systems take 8-12 weeks, professional systems take 12-16 weeks, and enterprise systems take 16-24 weeks. We provide detailed timelines after initial discovery and requirements analysis.",
  },
  {
    q: "Will our development team actually adopt the design system?",
    a: "Yes! Our developer-centric approach ensures high adoption rates. We provide code-ready specifications, interactive documentation, implementation support, and training and onboarding. Our systems achieve 95% adoption rates within 90 days.",
  },
  {
    q: "Can you work with our existing design components?",
    a: "Absolutely. We specialize in auditing existing component libraries, consolidating fragmented designs, preserving brand equity during migration, and creating unified systems from existing assets.",
  },
  {
    q: "How do you ensure accessibility compliance?",
    a: "Accessibility is integrated from day one through WCAG 2.1 AA standards implementation, automated and manual testing, comprehensive accessibility documentation, screen reader optimization, and color contrast validation.",
  },
  {
    q: "What ongoing support do you provide?",
    a: "We offer multiple support options including monthly design system health checks, quarterly component library updates, team training and workshops, 24/7 technical support, and governance process optimization.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "UI/UX Design Systems Development",
  serviceType: "Design System Creation",
  provider: {
    "@type": "Organization",
    name: "ZentechPoint",
    url: "https://zentechpoint.com",
    logo: "https://zentechpoint.com/logo.png",
  },
  description: "Professional UI/UX design systems that scale design consistency across enterprise applications and digital products.",
  areaServed: "Africa",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Design System Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Design System Development",
        },
        price: "300",
        priceCurrency: "USD",
      },
    ],
  },
};

export default function UiUxDesignPage() {
  const svc = services.find((s) => s.slug === "ui-ux-design")!;

  return (
    <main className="min-h-screen bg-[color:var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-[color:var(--border)]">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: `radial-gradient(circle, ${AC}, transparent 70%)` }} />
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[360px] w-[360px] rounded-full opacity-[0.04] blur-3xl"
          style={{ background: `radial-gradient(circle, ${AC}, transparent 70%)` }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${AC}60, transparent)` }} />

        <Container className="relative pt-4 pb-14 md:pt-5 md:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col lg:justify-center">
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
            <span className="font-semibold text-[color:var(--foreground)]">UI/UX Design Systems</span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em]"
            style={{ borderColor: `${AC}35`, backgroundColor: `${AC}10`, color: AC }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
            Design
          </div>

          <h1 className="mt-4 max-w-3xl text-[clamp(28px,4.6vw,50px)] font-black leading-[1.1] tracking-tight text-[color:var(--foreground)]">
            Transform Your Digital Products with ZentechPoint&apos;s Expert UI/UX Design Systems
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[color:var(--muted)] md:text-base">
            Eliminate design chaos and accelerate development with scalable, cohesive design systems. ZentechPoint delivers
            enterprise-grade UI/UX solutions that ensure consistency across all platforms while reducing development time by
            up to 70%.
          </p>

          {/* Key benefits grid */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {KEY_BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-lg" style={{ backgroundColor: `${AC}15` }}>
                  {b.emoji}
                </span>
                <h3 className="mt-2.5 text-[13px] font-bold text-[color:var(--foreground)]">{b.title}</h3>
                <ul className="mt-2 space-y-1">
                  {b.points.map((p) => (
                    <li key={p} className="text-[11.5px] leading-snug text-[color:var(--muted)]">{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Meta chips */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3.5 py-1.5 text-[12px] font-medium text-[color:var(--muted)]">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              {svc.timeline}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3.5 py-1.5 text-[12px] font-medium text-[color:var(--muted)]">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
              </svg>
              {svc.bestFor}
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: AC }}>
              Get Free Design System Audit <ArrowIcon />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition-all hover:bg-[color:var(--muted-bg)]">
              Schedule Strategy Call
            </Link>
          </div>
        </div>

        {/* ── Right: hero image ── */}
        <div className="mt-12 flex lg:mt-0 lg:h-full lg:items-center">
          <div className="relative w-full">
            <div className="group relative aspect-[5/4] w-full overflow-hidden rounded-3xl border shadow-xl transition-shadow duration-500 hover:shadow-2xl"
              style={{ borderColor: `${AC}25` }}>
              <Image
                src="/images/services/UIUX_Design.png"
                alt="UI/UX design systems services by ZentechPoint"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0"
                style={{ background: `linear-gradient(180deg, transparent 55%, ${AC}30 100%)` }} />
            </div>

            <div className="absolute -top-5 -right-5 rounded-2xl px-4 py-3 text-white shadow-lg" style={{ backgroundColor: AC }}>
              <div className="text-[13px] font-bold">Design</div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl border bg-[color:var(--card)] px-5 py-4 shadow-lg"
              style={{ borderColor: "var(--border)" }}>
              <div className="text-[11px] text-[color:var(--muted)]">Faster Development</div>
              <div className="text-xl font-bold" style={{ color: AC }}>70%</div>
            </div>
          </div>
        </div>
        </div>
        </Container>
      </section>

      {/* ════════════════════════════════════
          ABOUT ZENTECHPOINT'S EXPERTISE
      ════════════════════════════════════ */}
      <div className="border-b border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Industry Leadership</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Why Leading Companies Choose ZentechPoint for Design Systems
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--muted)]">
              ZentechPoint has established itself as the premier destination for enterprise-grade design system development.
              Our team of specialized UI/UX designers and developers creates systematic design solutions that scale with
              your business growth.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {TRACK_RECORD.map((t) => (
              <div key={t} className="flex items-center gap-2.5 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-3 text-[13px] font-medium text-[color:var(--foreground)]">
                <CheckIcon color={AC} />
                {t}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ════════════════════════════════════
          SERVICES OFFERED
      ════════════════════════════════════ */}
      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Our Portfolio</p>
          <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
            Complete UI/UX Design System Solutions
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {OFFERINGS.map((o) => (
            <div key={o.title}
              className="flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderTop: `3px solid ${AC}` }}>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${AC}15`, color: AC }}>
                {o.icon}
              </div>
              <h3 className="mt-4 text-[16px] font-bold leading-snug text-[color:var(--foreground)]">{o.title}</h3>
              <p className="mt-1 text-[12.5px] font-medium text-[color:var(--muted)]">{o.subtitle}</p>

              <div className="mt-4 h-px" style={{ background: `linear-gradient(to right, ${AC}30, transparent)` }} />

              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[color:var(--muted)]">{o.listA.label}</p>
                  <ul className="mt-3 space-y-2">
                    {o.listA.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] leading-snug text-[color:var(--muted)]">
                        <CheckIcon color={AC} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[color:var(--muted)]">{o.listB.label}</p>
                  <ul className="mt-3 space-y-2">
                    {o.listB.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] leading-snug text-[color:var(--muted)]">
                        <CheckIcon color={AC} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* ════════════════════════════════════
          DEVELOPMENT PROCESS
      ════════════════════════════════════ */}
      <div className="border-y border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>How We Work</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              ZentechPoint&apos;s 6-Phase Design System Methodology
            </h2>
          </div>

          <ProcessSteps steps={PROCESS} accent={AC} />
        </Container>
      </div>

      {/* ════════════════════════════════════
          PRICING
      ════════════════════════════════════ */}
      <div id="pricing" className="scroll-mt-20">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Investment & Engagement</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Flexible Design System Packages
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PRICING.map((p) => (
              <div key={p.name}
                className={`relative flex flex-col rounded-3xl border p-7 ${p.featured ? "shadow-xl" : "bg-[color:var(--card)]"}`}
                style={p.featured
                  ? { borderColor: `${AC}45`, background: `linear-gradient(160deg, ${AC}10, var(--card))` }
                  : { borderColor: "var(--border)" }}>
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-md"
                    style={{ backgroundColor: AC }}>
                    Most Popular
                  </span>
                )}
                <h3 className="text-[16px] font-bold text-[color:var(--foreground)]">{p.name}</h3>
                <p className="mt-0.5 text-[12px] font-medium text-[color:var(--muted)]">{p.tag}</p>
                <p className="mt-3 text-[26px] font-black tracking-tight" style={{ color: AC }}>{p.price}</p>
                <p className="mt-1 text-[12px] text-[color:var(--muted)]">{p.timeline}</p>
                <div className="mt-5 h-px" style={{ background: `linear-gradient(to right, ${AC}30, transparent)` }} />
                <ul className="mt-5 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[color:var(--muted)]">
                      <CheckIcon color={AC} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all hover:opacity-90 ${p.featured ? "text-white shadow-md" : "border border-[color:var(--border)] text-[color:var(--foreground)] hover:bg-[color:var(--muted-bg)]"}`}
                  style={p.featured ? { backgroundColor: AC } : undefined}>
                  Get Started <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>

          {/* Additional services */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--card)]/60 p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">Additional Services</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ADDITIONAL_SERVICES.map((s) => (
                <div key={s.name} className="flex items-center justify-between gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--muted-bg)]/50 px-4 py-2.5">
                  <span className="text-[13px] font-medium text-[color:var(--foreground)]">{s.name}</span>
                  <span className="text-[12px] font-semibold" style={{ color: AC }}>{s.price}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ════════════════════════════════════
          TECHNOLOGY STACK
      ════════════════════════════════════ */}
      <div className="border-y border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Tools & Ecosystem</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Industry-Leading Design System Technology Stack
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_STACK.map((cat) => (
              <div key={cat.title} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5">
                <h3 className="text-[13px] font-bold text-[color:var(--foreground)]">{cat.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {cat.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-[12px] leading-relaxed text-[color:var(--muted)]">
                      <CheckIcon color={AC} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ════════════════════════════════════
          FAQ
      ════════════════════════════════════ */}
      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>FAQ</p>
          <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
            Essential Design System Information
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion items={FAQS} accent={AC} />
        </div>
      </Container>

      {/* ════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════ */}
      <Container className="pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl p-10 text-center md:p-16"
          style={{ background: `linear-gradient(135deg, ${AC} 0%, #be123c 100%)` }}>
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white opacity-[0.06]" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-white opacity-[0.04]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-[0.03] blur-2xl" />

          <p className="relative z-10 text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">Ready to Get Started?</p>
          <h2 className="relative z-10 mt-2 text-2xl font-bold text-white md:text-[32px]">
            Transform Your Design Process with ZentechPoint
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-white/80">
            Receive a detailed project proposal tailored to your specific requirements and timeline.
          </p>

          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ color: AC }}>
              Get Free Design System Audit <ArrowIcon />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20">
              Schedule Strategy Call
            </Link>
          </div>

          <div className="relative z-10 mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] font-medium text-white/70">
            <span className="inline-flex items-center gap-1.5">📧 hello@zentechpoint.com</span>
            <span className="inline-flex items-center gap-1.5">🌐 zentechpoint.com</span>
          </div>
        </div>
      </Container>

    </main>
  );
}
