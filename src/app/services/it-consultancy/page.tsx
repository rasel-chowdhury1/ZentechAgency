import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { services } from "@/lib/data";
import FaqAccordion from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "IT Consulting & Support Services | ZentechPoint",
  description:
    "Expert IT consulting and support that reduces downtime, secures systems, and optimizes performance with ZentechPoint's managed services. Free consultation available.",
};

const AC = "#06b6d4"; // Consulting category accent

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

// ── Hero value propositions ────────────────────────────────────────────────
const VALUE_PROPS = [
  "24/7 proactive monitoring & support",
  "Advanced cybersecurity protection",
  "Rapid-response expert support",
  "Predictable IT costs and improved efficiency",
];

const TRUST_INDICATORS = [
  "Certified IT professionals",
  "99.9% uptime guarantee",
  "Rapid response support",
  "No long-term contracts required",
];

// ── Why choose ZentechPoint ───────────────────────────────────────────────
const WHY_CHOOSE = [
  {
    title: "Proactive IT Management, Not Just Problem-Solving",
    points: [
      "Continuous monitoring of your systems 24/7",
      "Strategic planning aligned with your business goals",
      "Regular maintenance to prevent costly downtime",
      "Vendor-neutral advice that puts your interests first",
    ],
  },
  {
    title: "Local Expertise with Enterprise-Grade Solutions",
    points: [
      "Fast on-site support throughout your region and surrounding areas",
      "Remote assistance available around the clock",
      "Enterprise-level tools scaled for small and medium businesses",
      "Clear communication — no confusing technical jargon",
    ],
  },
  {
    title: "Measurable Results and Transparent Reporting",
    points: [
      "Monthly performance reports with key metrics",
      "Documented cost savings through optimization",
      "Security improvement tracking",
      "ROI analysis for all IT investments",
    ],
  },
];

// ── Services offered ──────────────────────────────────────────────────────
const OFFERINGS = [
  {
    title: "Strategic IT Consulting & Virtual CIO Services",
    listA: { label: "What's Included", items: ["Technology roadmap development", "IT budget planning and optimization", "Digital transformation guidance", "Vendor selection and management", "Risk assessment and mitigation"] },
    listB: { label: "Your Benefits", items: ["Align technology with business objectives", "Reduce wasteful IT spending", "Make informed technology decisions", "Plan for scalable growth"] },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Managed IT Support & Help Desk",
    listA: { label: "What's Included", items: ["24/7 system monitoring and alerts", "Remote and on-site technical support", "Help desk for end-user issues", "Software updates and patch management", "Hardware maintenance coordination"] },
    listB: { label: "Your Benefits", items: ["Minimize business disruptions", "Predictable monthly IT costs", "Expert support when you need it", "Improved employee productivity"] },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity Consulting & Protection",
    listA: { label: "What's Included", items: ["Comprehensive security assessments", "Security policy development", "Employee cybersecurity training", "Threat monitoring and response", "Compliance audit preparation"] },
    listB: { label: "Your Benefits", items: ["Protect against cyber threats", "Meet industry compliance requirements", "Build customer trust through security", "Avoid costly data breaches"] },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Cloud Migration & Optimization",
    listA: { label: "What's Included", items: ["Cloud readiness assessment", "Migration to AWS, Azure, or Google Cloud", "Hybrid cloud architecture design", "Cloud cost optimization", "Data backup and disaster recovery"] },
    listB: { label: "Your Benefits", items: ["Scalable, flexible infrastructure", "Reduced hardware costs", "Enhanced remote work capabilities", "Improved data protection"] },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Network Infrastructure Support",
    listA: { label: "What's Included", items: ["Network design and optimization", "WiFi setup and troubleshooting", "Server management and maintenance", "Data backup solutions", "Disaster recovery planning"] },
    listB: { label: "Your Benefits", items: ["Reliable, fast connectivity", "Secure data storage", "Business continuity assurance", "Minimized downtime risks"] },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12z" />
      </svg>
    ),
  },
];

// ── 5-step process ─────────────────────────────────────────────────────
const PROCESS = [
  {
    n: "01",
    title: "Discovery & Assessment",
    points: [
      "Comprehensive audit of current IT systems",
      "Business needs and goals analysis",
      "Security and compliance risk identification",
      "Performance bottleneck assessment",
    ],
  },
  {
    n: "02",
    title: "Strategic Planning",
    points: [
      "Custom technology roadmap development",
      "Budget recommendations and timeline",
      "Vendor evaluation and selection",
      "Risk mitigation strategy",
    ],
  },
  {
    n: "03",
    title: "Implementation",
    points: [
      "Secure deployment of new solutions",
      "Staff training and documentation",
      "Minimal disruption to daily operations",
      "Quality assurance testing",
    ],
  },
  {
    n: "04",
    title: "Ongoing Support & Optimization",
    points: [
      "Continuous system monitoring",
      "Performance tuning and improvements",
      "Regular reporting and communication",
      "Proactive maintenance scheduling",
    ],
  },
  {
    n: "05",
    title: "Review & Strategic Evolution",
    points: [
      "Quarterly business reviews",
      "Technology refresh planning",
      "Scaling recommendations",
      "ROI analysis and optimization",
    ],
  },
];

const WHAT_WE_NEED = [
  "Access to current IT systems for assessment",
  "Clear communication of business goals",
  "Key contact persons for coordination",
];

// ── Pricing ────────────────────────────────────────────────────────────────
const PRICING = [
  {
    name: "Essential Support",
    tag: "Small teams (5-15 users)",
    price: "$149/user/mo",
    features: ["Help desk", "Basic monitoring", "Monthly reports"],
  },
  {
    name: "Managed IT Plus",
    tag: "Growing businesses (15-50 users)",
    price: "$299/user/mo",
    featured: true,
    features: ["Full support", "Cybersecurity", "Backup solutions"],
  },
  {
    name: "Enterprise Consulting",
    tag: "Larger organizations (50+ users)",
    price: "Custom quote",
    features: ["Strategic planning", "Compliance", "Advanced security"],
  },
  {
    name: "Project-Based Services",
    tag: "Specific needs",
    price: "From $499",
    features: ["Migrations", "Audits", "Infrastructure upgrades"],
  },
];

const PRICING_NOTES = [
  "All packages include free initial assessment",
  "No long-term contracts required",
  "Scalable pricing based on your specific needs",
  "Additional services available à la carte",
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What exactly does IT consulting include?",
    a: "IT consulting encompasses strategic technology planning, system assessments, vendor management, security auditing, and creating technology roadmaps that align with your business goals.",
  },
  {
    q: "Do you provide 24/7 IT support?",
    a: "Yes! Our managed IT services include 24/7 remote monitoring and help desk support, with guaranteed response times for on-site visits where available.",
  },
  {
    q: "How much do managed IT services typically cost?",
    a: "Pricing starts at $99 per user per month for essential support. We provide detailed, custom quotes after your free assessment based on your specific needs and current infrastructure.",
  },
  {
    q: "Can you help with cybersecurity and compliance?",
    a: "Absolutely. We conduct comprehensive security audits, develop policies, and provide ongoing monitoring to help meet GDPR, HIPAA, PCI-DSS, and other industry compliance requirements.",
  },
  {
    q: "What's included in your free IT assessment?",
    a: "Our free assessment includes a 60-90 minute review of your current systems, identification of security risks and inefficiencies, and a written report with actionable recommendations.",
  },
  {
    q: "Do you support cloud migrations?",
    a: "Yes. We specialize in migrations to AWS, Azure, and Google Cloud platforms, including assessment, planning, execution, and ongoing optimization with minimal business disruption.",
  },
  {
    q: "What makes ZentechPoint different from other IT companies?",
    a: "We focus on proactive management rather than reactive fixes, provide transparent pricing, offer local support with enterprise-grade tools, and maintain vendor neutrality to ensure unbiased recommendations.",
  },
];

export default function ItConsultancyPage() {
  const svc = services.find((s) => s.slug === "it-consultancy")!;

  return (
    <main className="min-h-screen bg-[color:var(--background)]">

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
            <span className="font-semibold text-[color:var(--foreground)]">IT Consulting & Support</span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em]"
            style={{ borderColor: `${AC}35`, backgroundColor: `${AC}10`, color: AC }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            Consulting
          </div>

          <h1 className="mt-4 max-w-3xl text-[clamp(28px,4.6vw,50px)] font-black leading-[1.1] tracking-tight text-[color:var(--foreground)]">
            Professional IT Consulting &amp; Support Services by ZentechPoint
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[color:var(--muted)] md:text-base">
            Stop dealing with constant IT headaches. ZentechPoint provides comprehensive IT consulting and support that
            keeps your business running smoothly, securely, and efficiently.
          </p>

          {/* Value props */}
          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 sm:max-w-xl">
            {VALUE_PROPS.map((v) => (
              <div key={v} className="flex items-center gap-2.5 text-[13px] font-medium text-[color:var(--foreground)]">
                <CheckIcon color={AC} />
                {v}
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
              Get Your Free IT Assessment <ArrowIcon />
            </Link>
            <a href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition-all hover:bg-[color:var(--muted-bg)]">
              View Our IT Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-7 flex flex-wrap gap-2">
            {TRUST_INDICATORS.map((t) => (
              <span key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1.5 text-[11.5px] font-medium text-[color:var(--muted)]">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: AC }} />
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════
          WHY CHOOSE ZENTECHPOINT
      ════════════════════════════════════ */}
      <div className="border-b border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Why ZentechPoint</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Why Choose ZentechPoint for IT Consulting?
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--muted)]">
              Unlike reactive IT companies, ZentechPoint focuses on preventing problems before they impact your business.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((cat) => (
              <div key={cat.title}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
                <h3 className="text-[15px] font-bold text-[color:var(--foreground)]">{cat.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {cat.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[13px] leading-relaxed text-[color:var(--muted)]">
                      <CheckIcon color={AC} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ════════════════════════════════════
          SERVICES OFFERED
      ════════════════════════════════════ */}
      <div id="services" className="scroll-mt-20">
      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Our Portfolio</p>
          <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
            Comprehensive IT Consulting &amp; Support Services
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--muted)]">
            ZentechPoint delivers end-to-end IT solutions designed for growing businesses. From strategic planning to
            daily operations, we handle your technology needs so you can focus on growing your business.
          </p>
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
      </div>

      {/* ════════════════════════════════════
          PROCESS
      ════════════════════════════════════ */}
      <div className="border-y border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>How We Work</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Our Proven 5-Step IT Consulting Process
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
                    {i + 1}. {step.title}
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

          {/* What we need from you */}
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--card)]/60 p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">What We Need From You</p>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {WHAT_WE_NEED.map((w) => (
                <div key={w} className="flex items-start gap-2 text-[13px] text-[color:var(--muted)]">
                  <CheckIcon color={AC} />
                  {w}
                </div>
              ))}
            </div>
          </div>
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
              Transparent IT Support Pricing
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRICING.map((p) => (
              <div key={p.name}
                className={`relative flex flex-col rounded-3xl border p-6 ${p.featured ? "shadow-xl" : "bg-[color:var(--card)]"}`}
                style={p.featured
                  ? { borderColor: `${AC}45`, background: `linear-gradient(160deg, ${AC}10, var(--card))` }
                  : { borderColor: "var(--border)" }}>
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-md"
                    style={{ backgroundColor: AC }}>
                    Most Popular
                  </span>
                )}
                <h3 className="text-[15px] font-bold text-[color:var(--foreground)]">{p.name}</h3>
                <p className="mt-1 text-[11.5px] font-medium text-[color:var(--muted)]">{p.tag}</p>
                <p className="mt-3 text-[22px] font-black tracking-tight" style={{ color: AC }}>{p.price}</p>
                <div className="mt-4 h-px" style={{ background: `linear-gradient(to right, ${AC}30, transparent)` }} />
                <ul className="mt-4 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-[color:var(--muted)]">
                      <CheckIcon color={AC} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all hover:opacity-90 ${p.featured ? "text-white shadow-md" : "border border-[color:var(--border)] text-[color:var(--foreground)] hover:bg-[color:var(--muted-bg)]"}`}
                  style={p.featured ? { backgroundColor: AC } : undefined}>
                  Get Started <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>

          {/* Pricing notes */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--card)]/60 p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">Pricing Notes</p>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {PRICING_NOTES.map((n) => (
                <div key={n} className="flex items-start gap-2 text-[13px] text-[color:var(--muted)]">
                  <CheckIcon color={AC} />
                  {n}
                </div>
              ))}
            </div>
          </div>

          {/* Money-back guarantee */}
          <div className="mx-auto mt-4 max-w-3xl rounded-2xl border p-5 text-center"
            style={{ borderColor: `${AC}30`, backgroundColor: `${AC}0a` }}>
            <p className="text-[13px] font-semibold" style={{ color: AC }}>
              Money-Back Guarantee: Not satisfied with our service in the first 30 days? We&apos;ll refund your investment.
            </p>
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
            Frequently Asked Questions About IT Consulting
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
          style={{ background: `linear-gradient(135deg, ${AC} 0%, #0e7490 100%)` }}>
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white opacity-[0.06]" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-white opacity-[0.04]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-[0.03] blur-2xl" />

          <p className="relative z-10 text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">Ready to Transform Your IT Experience?</p>
          <h2 className="relative z-10 mt-2 text-2xl font-bold text-white md:text-[32px]">
            Get Started with Professional IT Support Today
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-white/80">
            Don&apos;t wait for the next system failure or security breach. ZentechPoint&apos;s comprehensive IT consulting
            and support keeps your business secure, efficient, and positioned for growth.
          </p>

          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ color: AC }}>
              Schedule Your Free IT Assessment <ArrowIcon />
            </Link>
            <Link href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20">
              All Services
            </Link>
          </div>
        </div>
      </Container>

    </main>
  );
}
