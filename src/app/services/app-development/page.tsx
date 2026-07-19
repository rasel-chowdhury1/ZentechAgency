import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { services } from "@/lib/data";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WhyChooseGrid from "@/components/sections/WhyChooseGrid";

export const metadata: Metadata = {
  title: "Custom Mobile App Development Company | ZentechPoint",
  description:
    "Expert Android/iOS app development services. Native apps, cross-platform solutions, PWAs. From concept to App Store launch. Free consultation available.",
};

const AC = "#3b82f6"; // Mobile category accent

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
  "Native iOS & Android Development",
  "Cross-Platform Solutions Available",
  "App Store Launch Support",
  "Ongoing Maintenance & Updates",
];

// ── Core advantages ────────────────────────────────────────────────────────
const ADVANTAGES = [
  { emoji: "🚀", title: "Rapid Development", desc: "MVP delivery in 6-12 weeks using agile methodology" },
  { emoji: "🎯", title: "Market-Ready Apps", desc: "App Store optimization and submission included" },
  { emoji: "🔒", title: "Enterprise Security", desc: "Bank-level encryption and compliance standards" },
  { emoji: "📈", title: "Scalable Solutions", desc: "Cloud infrastructure that grows with your users" },
];

// ── Services offered ──────────────────────────────────────────────────────
const OFFERINGS = [
  {
    title: "Native iOS App Development",
    desc: "Build premium iOS applications using Swift and SwiftUI that leverage the full Apple ecosystem. Our iOS apps integrate seamlessly with Apple services and deliver the native experience users expect.",
    includesLabel: "Key Features",
    includes: [
      "iOS 17+ compatibility and optimization",
      "Apple Human Interface Guidelines compliance",
      "App Store Connect integration",
      "TestFlight beta testing management",
      "ARKit, HealthKit, and Apple Pay integration",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
  },
  {
    title: "Native Android App Development",
    desc: "Create high-performance Android applications using Kotlin and Jetpack Compose. We build apps that work flawlessly across the diverse Android ecosystem with Material Design principles.",
    includesLabel: "Key Features",
    includes: [
      "Android 14+ support and backwards compatibility",
      "Google Play Console management",
      "Firebase integration and analytics",
      "Material You design implementation",
      "Google services integration",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M8.25 3v1.5M15.75 3v1.5M8.25 19.5V21M15.75 19.5V21M3 8.25h1.5M3 12h1.5M3 15.75h1.5M19.5 8.25H21M19.5 12H21M19.5 15.75H21M6.75 20.25h10.5a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Cross-Platform App Development",
    desc: "Maximize your ROI with cross-platform solutions using React Native, Flutter, or Xamarin. Build once, deploy everywhere while maintaining near-native performance and platform-specific features.",
    includesLabel: "Benefits",
    includes: [
      "40-60% cost savings compared to dual native development",
      "Single codebase maintenance",
      "Platform-specific UI customizations",
      "Shared business logic with native performance",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Progressive Web Apps (PWA)",
    desc: "Deliver app-like experiences through web browsers with no app store dependencies. PWAs offer the best of both web and mobile worlds with offline capabilities and push notifications.",
    includesLabel: "Features",
    includes: [
      "Service worker implementation",
      "Home screen installation",
      "Push notification support",
      "Offline functionality",
      "Cross-platform compatibility",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 21a8.997 8.997 0 007.843-4.582M12 21a8.997 8.997 0 01-7.843-4.582M12 21c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 18c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 0a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
  },
  {
    title: "App Store Optimization (ASO)",
    desc: "Maximize your app's visibility and downloads with our comprehensive ASO services. We optimize every element from keywords to visuals for maximum app store performance.",
    includesLabel: "ASO Services",
    includes: [
      "Keyword research and optimization",
      "App store listing optimization",
      "Screenshot and video creation",
      "Review and rating management",
      "Competitor analysis and monitoring",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
];

// ── Development process ─────────────────────────────────────────────────
const PROCESS = [
  {
    n: "01",
    title: "Discovery & Strategy",
    points: [
      "Market research and competitive analysis",
      "User persona development and validation",
      "Technical architecture planning",
      "Feature prioritization and MVP definition",
    ],
  },
  {
    n: "02",
    title: "UI/UX Design",
    points: [
      "User journey mapping and wireframing",
      "Interactive prototypes and user testing",
      "Visual design and brand integration",
      "Platform-specific design systems",
    ],
  },
  {
    n: "03",
    title: "Development & Integration",
    points: [
      "Agile development with weekly sprints",
      "Backend API development and integration",
      "Third-party service integrations",
      "Real-time progress tracking",
    ],
  },
  {
    n: "04",
    title: "Quality Assurance",
    points: [
      "Comprehensive testing across 100+ devices",
      "Performance optimization and security auditing",
      "User acceptance testing",
      "Bug fixing and refinement",
    ],
  },
  {
    n: "05",
    title: "Launch Preparation",
    points: [
      "App store submission and approval",
      "ASO implementation",
      "Marketing asset preparation",
      "Launch strategy execution",
    ],
  },
  {
    n: "06",
    title: "Post-Launch Support",
    points: [
      "Performance monitoring and analytics",
      "User feedback integration",
      "Feature updates and enhancements",
      "Ongoing maintenance and support",
    ],
  },
];

// ── Pricing ────────────────────────────────────────────────────────────────
const PRICING = [
  {
    name: "Starter Package",
    tag: "MVP Launch",
    timeline: "6-10 weeks",
    platforms: "iOS or Android (single platform)",
    features: ["Core functionality", "Basic UI/UX", "Essential integrations"],
    price: "$2,000 – $10,000",
  },
  {
    name: "Growth Package",
    tag: "Full-Featured App",
    timeline: "12-16 weeks",
    platforms: "iOS and Android",
    features: ["Advanced functionality", "Custom UI/UX", "ASO", "Analytics"],
    price: "$3,000 – $30,000",
    featured: true,
  },
  {
    name: "Enterprise Package",
    tag: "Complex Solutions",
    timeline: "4-6 months",
    platforms: "iOS, Android, and PWA options",
    features: ["Complex backend", "Advanced integrations", "Custom admin panels"],
    price: "$10,000+",
  },
];

// ── Technology stack ────────────────────────────────────────────────────
const TECH_STACK = [
  {
    title: "Native Development",
    groups: [
      { label: "iOS", items: ["Swift", "SwiftUI", "Xcode", "Core Data"] },
      { label: "Android", items: ["Kotlin", "Jetpack Compose", "Android Studio"] },
    ],
  },
  {
    title: "Cross-Platform",
    groups: [
      { label: "Frameworks", items: ["React Native", "Flutter", "Xamarin"] },
      { label: "Web", items: ["Progressive Web App technologies"] },
    ],
  },
  {
    title: "Backend & Infrastructure",
    groups: [
      { label: "Stack", items: ["Node.js", "Python", "AWS", "Firebase"] },
      { label: "APIs", items: ["RESTful APIs", "GraphQL", "Real-time databases"] },
    ],
  },
  {
    title: "Testing & Analytics",
    groups: [
      { label: "Tools", items: ["Automated testing frameworks", "Crashlytics", "Google Analytics", "Mixpanel"] },
    ],
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Should I choose native or cross-platform development?",
    a: "Native development offers the best performance and platform-specific features, while cross-platform saves time and cost. We'll recommend the best approach based on your specific requirements and budget.",
  },
  {
    q: "How long does it take to develop a mobile app?",
    a: "Simple apps take 6-12 weeks, while complex applications require 3-6 months. Timeline depends on features, integrations, and design complexity.",
  },
  {
    q: "Do you handle App Store submissions?",
    a: "Yes, we manage the complete App Store and Google Play submission process, including compliance with store guidelines and optimization for approval.",
  },
  {
    q: "What ongoing support do you provide?",
    a: "We offer comprehensive maintenance packages starting at $500/month, including security updates, bug fixes, and performance monitoring.",
  },
  {
    q: "Can you integrate with our existing business systems?",
    a: "Absolutely. We specialize in API development and system integrations, connecting your app seamlessly with existing CRM, ERP, or custom software solutions.",
  },
  {
    q: "How do you ensure app security?",
    a: "We implement industry-standard security measures including data encryption, secure authentication, API security, and compliance with relevant regulations like GDPR and HIPAA.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mobile Application Development",
  provider: {
    "@type": "Organization",
    name: "ZentechPoint",
    url: "https://zentechpoint.com",
  },
  offers: {
    "@type": "Offer",
    description: "Custom iOS and Android app development services",
  },
};

export default function AppDevelopmentPage() {
  const svc = services.find((s) => s.slug === "app-development")!;

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
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
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
            <span className="font-semibold text-[color:var(--foreground)]">Android/iOS App Development</span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em]"
            style={{ borderColor: `${AC}35`, backgroundColor: `${AC}10`, color: AC }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
            </svg>
            Mobile
          </div>

          <h1 className="mt-4 max-w-3xl text-[clamp(28px,4.6vw,50px)] font-black leading-[1.1] tracking-tight text-[color:var(--foreground)]">
            Expert Android &amp; iOS App Development Services
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[color:var(--muted)] md:text-base">
            Transform your business ideas into powerful mobile applications. ZentechPoint delivers native iOS and Android apps that
            engage users, drive revenue, and scale with your growth. From innovative startups to established enterprises, we create
            pixel-perfect mobile experiences that perform flawlessly across all devices.
          </p>

          {/* Key benefits */}
          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 sm:max-w-xl">
            {KEY_BENEFITS.map((b) => (
              <div key={b} className="flex items-center gap-2.5 text-[13px] font-medium text-[color:var(--foreground)]">
                <CheckIcon color={AC} />
                {b}
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
              Get Free App Consultation <ArrowIcon />
            </Link>
            <Link href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition-all hover:bg-[color:var(--muted-bg)]">
              View Our App Portfolio
            </Link>
          </div>
        </div>

        {/* ── Right: hero image ── */}
        <div className="relative mt-12 lg:mt-0">
          <div className="group relative aspect-[5/4] w-full overflow-hidden rounded-3xl border shadow-xl transition-shadow duration-500 hover:shadow-2xl"
            style={{ borderColor: `${AC}25` }}>
            <Image
              src="/images/services/app_development.jpeg"
              alt="Android and iOS app development services by ZentechPoint"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0"
              style={{ background: `linear-gradient(180deg, transparent 55%, ${AC}30 100%)` }} />
          </div>

          <div className="absolute -top-5 -right-5 rounded-2xl px-4 py-3 text-white shadow-lg" style={{ backgroundColor: AC }}>
            <div className="text-[13px] font-bold">Mobile</div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl border bg-[color:var(--card)] px-5 py-4 shadow-lg"
            style={{ borderColor: "var(--border)" }}>
            <div className="text-[11px] text-[color:var(--muted)]">MVP Delivery</div>
            <div className="text-xl font-bold" style={{ color: AC }}>6-12 wks</div>
          </div>
        </div>
        </div>
        </Container>
      </section>

      {/* ════════════════════════════════════
          CORE VALUE PROPOSITION
      ════════════════════════════════════ */}
      <div className="border-b border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Our Advantage</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Why Choose ZentechPoint for Mobile App Development?
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--muted)]">
              We combine technical excellence with strategic business thinking to create apps that solve real problems and deliver
              measurable ROI. Our proven development process ensures your app launches successfully and grows sustainably.
            </p>
          </div>

          <WhyChooseGrid
            items={ADVANTAGES.map((a) => ({ icon: a.emoji, title: a.title, desc: a.desc }))}
            accent={AC}
            columns={4}
            compact
          />
        </Container>
      </div>

      {/* ════════════════════════════════════
          SERVICES OFFERED
      ════════════════════════════════════ */}
      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>What We Build</p>
          <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
            Complete Mobile App Development Solutions
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((o) => (
            <div key={o.title}
              className="flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderTop: `3px solid ${AC}` }}>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${AC}15`, color: AC }}>
                {o.icon}
              </div>
              <h3 className="mt-4 text-[16px] font-bold leading-snug text-[color:var(--foreground)]">{o.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[color:var(--muted)]">{o.desc}</p>

              <div className="mt-4 h-px" style={{ background: `linear-gradient(to right, ${AC}30, transparent)` }} />

              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[color:var(--muted)]">{o.includesLabel}</p>
              <ul className="mt-3 space-y-2">
                {o.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12.5px] leading-snug text-[color:var(--muted)]">
                    <CheckIcon color={AC} />
                    {item}
                  </li>
                ))}
              </ul>
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
              Our Proven 6-Phase Development Process
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
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Investment</p>
          <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
            Transparent Development Investment
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

              <div className="mt-4 space-y-1.5 text-[12px] text-[color:var(--muted)]">
                <p><span className="font-semibold text-[color:var(--foreground)]">Timeline: </span>{p.timeline}</p>
                <p><span className="font-semibold text-[color:var(--foreground)]">Platforms: </span>{p.platforms}</p>
              </div>

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

        <p className="mx-auto mt-8 max-w-2xl text-center text-[13px] text-[color:var(--muted)]">
          All packages include 30-day post-launch support and App Store submission assistance.
        </p>
      </Container>
      </div>

      {/* ════════════════════════════════════
          TECHNOLOGY STACK
      ════════════════════════════════════ */}
      <div className="border-y border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Under the Hood</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Cutting-Edge Technologies We Use
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_STACK.map((cat) => (
              <div key={cat.title} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5">
                <h3 className="text-[13px] font-bold text-[color:var(--foreground)]">{cat.title}</h3>
                <div className="mt-4 space-y-3">
                  {cat.groups.map((g) => (
                    <div key={g.label}>
                      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[color:var(--muted)]">{g.label}</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {g.items.map((it) => (
                          <span key={it}
                            className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
                            style={{ borderColor: `${AC}30`, backgroundColor: `${AC}0d`, color: AC }}>
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
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
            Frequently Asked Questions
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
          style={{ background: `linear-gradient(135deg, ${AC} 0%, #1d4ed8 100%)` }}>
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white opacity-[0.06]" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-white opacity-[0.04]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-[0.03] blur-2xl" />

          <p className="relative z-10 text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">Get Started Today</p>
          <h2 className="relative z-10 mt-2 text-2xl font-bold text-white md:text-[32px]">
            Ready to Launch Your Mobile App?
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-white/80">
            Transform your business with a custom mobile application that drives results. Our expert development team is ready to
            bring your vision to life with cutting-edge technology and proven strategies.
          </p>

          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ color: AC }}>
              Schedule Free Consultation <ArrowIcon />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20">
              Request Detailed Proposal
            </Link>
          </div>
        </div>
      </Container>

    </main>
  );
}
