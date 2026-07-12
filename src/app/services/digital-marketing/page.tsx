import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { services } from "@/lib/data";
import FaqAccordion from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "SEO & Performance Marketing Services | ZentechPoint",
  description:
    "Data-driven SEO and performance marketing that delivers qualified leads, dominates local search, and drives measurable ROI for your business.",
};

const AC = "#8b5cf6"; // Growth category accent

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

// ── Hero trust indicators ──────────────────────────────────────────────────
const TRUST_INDICATORS = [
  "200%+ average client growth in 6 months",
  "Local SEO specialists with proven track record",
  "Performance-based campaigns with transparent reporting",
  "Google Partner certified team",
];

// ── Company authority differentiators ──────────────────────────────────────
const DIFFERENTIATORS = [
  { title: "Local Market Domination", desc: "Google Business Profile optimization and local citation strategies" },
  { title: "ROI-Focused Campaigns", desc: "Performance tracking with advanced analytics and conversion optimization" },
  { title: "Technical SEO Mastery", desc: "Core Web Vitals optimization and mobile-first indexing" },
  { title: "Transparent Communication", desc: "Weekly performance reports and monthly strategy consultations" },
];

// ── Services offered ──────────────────────────────────────────────────────
const OFFERINGS = [
  {
    title: "Local SEO Optimization Services",
    desc: "Dominate your geographic market with comprehensive local search strategies that drive phone calls, website traffic, and foot traffic to your business location.",
    includesLabel: "Core Deliverables",
    includes: [
      "Google Business Profile management and optimization",
      "Local citation building across 80+ high-authority directories",
      "Location-specific landing page creation and optimization",
      "Customer review generation and reputation management systems",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Technical SEO & Website Performance",
    desc: "Maximize your website's search engine visibility and user experience with advanced technical optimizations that improve rankings and conversion rates.",
    includesLabel: "Technical Implementation",
    includes: [
      "Core Web Vitals optimization for faster page loading",
      "Mobile-responsive design and mobile-first indexing preparation",
      "Schema markup implementation for rich search results",
      "Site architecture optimization and internal linking strategies",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Content Strategy & On-Page SEO",
    desc: "Create high-value content that ranks on page one and converts visitors into customers through strategic keyword targeting and user-focused optimization.",
    includesLabel: "Content Development",
    includes: [
      "Comprehensive keyword research and competitor content analysis",
      "High-converting service page optimization",
      "Blog content strategy targeting featured snippets",
      "Local content creation for geographic relevance",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M6.75 3.75h6.879a1.5 1.5 0 011.06.44l3.622 3.62a1.5 1.5 0 01.439 1.061V19.5a1.5 1.5 0 01-1.5 1.5H6.75a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5z" />
        <path d="M13.5 3.75V7.5a1.5 1.5 0 001.5 1.5h3.75" />
        <path d="M9 13.5h6M9 16.5h6" />
      </svg>
    ),
  },
  {
    title: "Google Ads & PPC Campaign Management",
    desc: "Generate immediate qualified leads with professionally managed Google Ads campaigns optimized for local service businesses and maximum return on ad spend.",
    includesLabel: "Advertising Services",
    includes: [
      "Local Service Ads campaign creation and optimization",
      "Search and display advertising with geographic targeting",
      "Call tracking and conversion optimization",
      "Remarketing campaigns for abandoned prospects",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535" />
      </svg>
    ),
  },
  {
    title: "Social Media Marketing & Online Reputation",
    desc: "Build brand authority and customer trust through strategic social media presence and automated reputation management systems.",
    includesLabel: "Social Strategy",
    includes: [
      "Platform-specific content creation and posting schedules",
      "Automated review request systems for satisfied customers",
      "Online reputation monitoring and response management",
      "Social media advertising for local audience targeting",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
  {
    title: "Analytics & Performance Reporting",
    desc: "Complete visibility into your marketing performance with custom dashboards, detailed reporting, and actionable insights for continuous improvement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

// ── 6-phase process ─────────────────────────────────────────────────────
const PROCESS = [
  {
    n: "01",
    title: "Comprehensive Business Audit",
    points: [
      "Complete SEO analysis and competitor research",
      "Google Business Profile and citation audit",
      "Current marketing performance evaluation",
      "Custom growth strategy development",
    ],
  },
  {
    n: "02",
    title: "Technical Foundation Setup",
    points: [
      "Website technical SEO optimization",
      "Google Analytics and conversion tracking implementation",
      "Local citation cleanup and expansion",
      "Performance monitoring system installation",
    ],
  },
  {
    n: "03",
    title: "Content & Authority Development",
    points: [
      "High-intent keyword content creation",
      "Local landing page development and optimization",
      "Review generation system implementation",
      "Industry authority building through strategic content",
    ],
  },
  {
    n: "04",
    title: "Paid Advertising Launch",
    points: [
      "Google Ads campaign creation and launch",
      "Local Service Ads optimization",
      "Call tracking and conversion measurement",
      "Budget optimization for maximum ROI",
    ],
  },
  {
    n: "05",
    title: "Scaling & Expansion",
    points: [
      "Advanced SEO strategy implementation",
      "Multi-location optimization (if applicable)",
      "Additional marketing channel integration",
      "Competitive advantage strengthening",
    ],
  },
  {
    n: "06",
    title: "Domination & Maintenance",
    points: [
      "Market leadership positioning",
      "Ongoing optimization and testing",
      "Long-term growth planning",
      "Continuous performance improvement",
    ],
  },
];

// ── Pricing ────────────────────────────────────────────────────────────────
const PRICING = [
  {
    name: "Foundation Builder",
    tag: "New businesses establishing presence",
    price: "$297/mo",
    features: ["Local SEO setup", "Google Business optimization", "Basic reporting"],
  },
  {
    name: "Growth Accelerator",
    tag: "Growing businesses needing leads",
    price: "$1,497/mo",
    featured: true,
    features: ["Complete SEO", "Google Ads management", "Content creation", "Weekly consultations"],
  },
  {
    name: "Market Dominator",
    tag: "Established companies seeking leadership",
    price: "$2,497/mo",
    features: ["Full-service marketing", "Advanced campaigns", "Dedicated account manager"],
  },
];

const PACKAGE_BENEFITS = [
  "No long-term contracts required",
  "60-day performance guarantee",
  "Custom strategy development",
  "Weekly performance monitoring",
];

// ── Technology stack ────────────────────────────────────────────────────
const TECH_STACK = [
  {
    title: "SEO & Analytics Platform",
    items: [
      "Google Analytics 4 with advanced conversion tracking",
      "Google Search Console optimization and monitoring",
      "SEMrush and Ahrefs for competitive intelligence",
      "Local Falcon for citation tracking and management",
    ],
  },
  {
    title: "Advertising Management",
    items: [
      "Google Ads platform expertise (Search, Local Services, Display)",
      "Microsoft Advertising campaign management",
      "Facebook and Instagram advertising for local targeting",
    ],
  },
  {
    title: "Automation & Integration",
    items: [
      "CallRail for comprehensive call tracking and analysis",
      "ReviewTrackers for reputation management automation",
      "Zapier workflow automation for efficiency",
      "CRM integration capabilities for lead management",
    ],
  },
];

// ── Immediate next steps ────────────────────────────────────────────────
const NEXT_STEPS = [
  { title: "Comprehensive SEO Audit", desc: "Complete website and competitor performance analysis" },
  { title: "Strategy Development Call", desc: "45-minute custom growth planning session" },
  { title: "Performance Guarantee", desc: "Results within 60 days or continued service at no cost" },
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How quickly can we expect to see results from SEO services?",
    a: "Most ZentechPoint clients observe initial ranking improvements within 45-60 days, with significant traffic and lead increases by months 3-6. Local SEO typically shows faster results than national campaigns.",
  },
  {
    q: "Do you require long-term service contracts?",
    a: "ZentechPoint operates on a month-to-month basis with 30-day cancellation notice. We earn your continued partnership through consistent results and exceptional service.",
  },
  {
    q: "Which types of businesses benefit most from your services?",
    a: "Our expertise centers on local service businesses including HVAC, plumbing, electrical, roofing, landscaping, cleaning services, and other home service contractors.",
  },
  {
    q: "How do you handle Google Ads management and optimization?",
    a: "We specialize in local service business advertising with advanced call tracking, geographic targeting, and conversion optimization for maximum return on ad investment.",
  },
  {
    q: "What reporting and performance tracking do you provide?",
    a: "Clients receive custom performance dashboards with call tracking, lead attribution, keyword rankings, and ROI analysis updated weekly with monthly strategy reviews.",
  },
  {
    q: "Can you help improve our online reviews and reputation?",
    a: "Yes, our automated review generation systems request feedback from satisfied customers while monitoring and managing your online reputation across all platforms.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ZentechPoint SEO & Performance Marketing",
  url: "https://zentechpoint.com",
  serviceType: "SEO and Performance Marketing Services",
  areaServed: "Africa",
  priceRange: "$297-$4497",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
  },
};

export default function DigitalMarketingPage() {
  const svc = services.find((s) => s.slug === "digital-marketing")!;

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
            <span className="font-semibold text-[color:var(--foreground)]">SEO & Performance Marketing</span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em]"
            style={{ borderColor: `${AC}35`, backgroundColor: `${AC}10`, color: AC }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
            Growth
          </div>

          <h1 className="mt-4 max-w-3xl text-[clamp(28px,4.6vw,50px)] font-black leading-[1.1] tracking-tight text-[color:var(--foreground)]">
            Transform Your Business with ZentechPoint&apos;s Data-Driven SEO &amp; Performance Marketing
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[color:var(--muted)] md:text-base">
            Stop losing customers to competitors. ZentechPoint&apos;s proven SEO and performance marketing strategies deliver
            qualified leads, dominate local search results, and generate measurable ROI. Our integrated approach combines
            technical SEO expertise with high-converting paid advertising campaigns.
          </p>

          {/* Trust indicators */}
          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 sm:max-w-xl">
            {TRUST_INDICATORS.map((t) => (
              <div key={t} className="flex items-center gap-2.5 text-[13px] font-medium text-[color:var(--foreground)]">
                <CheckIcon color={AC} />
                {t}
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
              Get Free SEO Performance Audit <ArrowIcon />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition-all hover:bg-[color:var(--muted-bg)]">
              Schedule Growth Strategy Call
            </Link>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════
          COMPANY AUTHORITY
      ════════════════════════════════════ */}
      <div className="border-b border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Why ZentechPoint</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Why ZentechPoint Leads in SEO &amp; Performance Marketing Excellence
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--muted)]">
              ZentechPoint specializes in transforming local service businesses into market leaders through strategic SEO
              optimization and performance marketing campaigns. Our data-driven methodology ensures every marketing dollar
              generates maximum return on investment.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
                <CheckIcon color={AC} />
                <h3 className="mt-3 text-[14px] font-bold text-[color:var(--foreground)]">{d.title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-snug text-[color:var(--muted)]">{d.desc}</p>
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
            Complete SEO &amp; Performance Marketing Solutions
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

              {o.includes && (
                <>
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
                </>
              )}
            </div>
          ))}
        </div>
      </Container>

      {/* ════════════════════════════════════
          PRICING
      ════════════════════════════════════ */}
      <div id="pricing" className="scroll-mt-20 border-y border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Investment Options</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Results-Driven Marketing Investment Options
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

          {/* Package benefits */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--card)]/60 p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">Package Benefits</p>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {PACKAGE_BENEFITS.map((b) => (
                <div key={b} className="flex items-start gap-2 text-[13px] text-[color:var(--muted)]">
                  <CheckIcon color={AC} />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ════════════════════════════════════
          IMPLEMENTATION PROCESS
      ════════════════════════════════════ */}
      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>How We Work</p>
          <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
            ZentechPoint&apos;s 6-Phase Marketing Success System
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {PROCESS.map((step, i) => (
            <div key={step.n}
              className="relative flex gap-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-all duration-200 hover:shadow-md"
              style={{ borderLeftWidth: "3px", borderLeftColor: i === 0 ? `${AC}55` : "var(--border)" }}>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-black text-white"
                style={{ backgroundColor: AC }}>
                {step.n}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[color:var(--foreground)]">
                  Phase {i + 1}: {step.title}
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {step.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-[color:var(--muted)]">
                      <CheckIcon color={AC} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              {i < PROCESS.length - 1 && (
                <div className="absolute -bottom-4 left-[34px] h-4 w-px bg-[color:var(--border)]" />
              )}
            </div>
          ))}
        </div>
      </Container>

      {/* ════════════════════════════════════
          TECHNOLOGY STACK
      ════════════════════════════════════ */}
      <div className="border-y border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Under the Hood</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Cutting-Edge Tools Powering ZentechPoint Success
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK.map((cat) => (
              <div key={cat.title} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
                <h3 className="text-[14px] font-bold text-[color:var(--foreground)]">{cat.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {cat.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-[13px] leading-relaxed text-[color:var(--muted)]">
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
            SEO &amp; Performance Marketing Client Questions
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion items={FAQS} accent={AC} />
        </div>
      </Container>

      {/* ════════════════════════════════════
          NEXT STEPS
      ════════════════════════════════════ */}
      <Container className="pb-14 md:pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Get Started</p>
          <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
            Start Your Market Domination Journey with ZentechPoint Today
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {NEXT_STEPS.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-black text-white"
                style={{ backgroundColor: AC }}>
                {i + 1}
              </span>
              <h3 className="mt-3 text-[14px] font-bold text-[color:var(--foreground)]">{s.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-snug text-[color:var(--muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* ════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════ */}
      <Container className="pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl p-10 text-center md:p-16"
          style={{ background: `linear-gradient(135deg, ${AC} 0%, #6d28d9 100%)` }}>
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white opacity-[0.06]" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-white opacity-[0.04]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-[0.03] blur-2xl" />

          <p className="relative z-10 text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">Get Started Today</p>
          <h2 className="relative z-10 mt-2 text-2xl font-bold text-white md:text-[32px]">
            Ready to Dominate Your Market?
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-white/80">
            Get a free SEO performance audit and a custom growth strategy session — no commitment required.
          </p>

          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ color: AC }}>
              Get Free SEO Performance Audit <ArrowIcon />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20">
              Schedule Growth Strategy Call
            </Link>
          </div>

          {/* Contact methods */}
          <div className="relative z-10 mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] font-medium text-white/70">
            <span className="inline-flex items-center gap-1.5">📞 Direct Phone Consultation</span>
            <span className="inline-flex items-center gap-1.5">📅 Online Strategy Session Booking</span>
            <span className="inline-flex items-center gap-1.5">📧 Free SEO Performance Audit Request</span>
          </div>
        </div>
      </Container>

    </main>
  );
}
