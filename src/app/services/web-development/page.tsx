import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { services } from "@/lib/data";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";

export const metadata: Metadata = {
  title: "Website Design & Development Services | ZentechPoint",
  description:
    "Custom, responsive website design and development from ZentechPoint — business sites, e-commerce, SEO-optimized builds, CMS platforms, and custom web apps.",
};

const AC = "#059669"; // Development category accent

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

// ── Services offered ──────────────────────────────────────────────────────
const OFFERINGS = [
  {
    title: "Custom Responsive Web Design",
    desc: "Beautiful, adaptive designs that look perfect on desktops, tablets, and phones. We create pixel-perfect interfaces with your brand identity, ensuring seamless experiences across all devices and screen sizes.",
    includes: ["Wireframes & mockups", "Responsive layouts (Bootstrap/Tailwind)", "Brand-aligned visuals", "Cross-browser compatibility"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Website Development",
    desc: "Launch secure online stores with inventory management, payment gateways, and customer accounts. Optimized for sales, with fast checkout, product filters, and abandoned cart recovery to boost revenue.",
    includes: ["WooCommerce/Shopify/Custom builds", "Payment integration (Stripe/PayPal/Square)", "Inventory & shipping setup", "Customer account portals"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    title: "SEO-Optimized Web Development",
    desc: "Sites built to rank — from technical SEO (Core Web Vitals, schema) to on-page optimization. We target local city and neighborhood keywords so customers searching \"web design near me\" find you first.",
    includes: ["Speed optimization (<2s load time)", "Schema markup & XML sitemap", "Mobile-first indexing", "Local SEO implementation"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Content Management Systems (CMS)",
    desc: "User-friendly CMS platforms so you control content without coding. WordPress, custom dashboards, or headless setups — fully trained and maintained for easy updates and scalability.",
    includes: ["WordPress/Webflow setup", "Custom post types & fields", "Security & automated backups", "Content editor training"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M6.75 3.75h6.879a1.5 1.5 0 011.06.44l3.622 3.62a1.5 1.5 0 01.439 1.061V19.5a1.5 1.5 0 01-1.5 1.5H6.75a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5z" />
        <path d="M13.5 3.75V7.5a1.5 1.5 0 001.5 1.5h3.75" />
        <path d="M9 13.5h6M9 16.5h6" />
      </svg>
    ),
  },
  {
    title: "Web App & Custom Functionality",
    desc: "Beyond static sites, we build interactive web apps with booking systems, dashboards, APIs, and automation. Ideal for service businesses needing lead forms, calendars, or client portals.",
    includes: ["Custom JavaScript/React development", "Third-party API integrations", "Progressive Web Apps (PWA)", "Database design & management"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

// ── Why choose ZentechPoint ───────────────────────────────────────────────
const WHY_CHOOSE = [
  {
    emoji: "🚀",
    title: "Performance-First Development",
    points: [
      "Lightning-fast loading speeds under 2 seconds",
      "Core Web Vitals optimization for superior user experience",
      "Mobile-first responsive design across all devices",
      "SEO-optimized code structure for higher search rankings",
    ],
  },
  {
    emoji: "🎨",
    title: "Strategic Design Excellence",
    points: [
      "User-centered design research and testing",
      "Conversion-focused layouts that drive business results",
      "Brand-aligned visual identity and messaging",
      "Accessibility compliance for inclusive experiences",
    ],
  },
  {
    emoji: "⚙️",
    title: "Cutting-Edge Technology Stack",
    points: [
      "Modern frameworks and development tools",
      "Scalable architecture for future growth",
      "Security-first approach with SSL and protection protocols",
      "Integration capabilities with existing business systems",
    ],
  },
  {
    emoji: "🤝",
    title: "Client-Centric Service Approach",
    points: [
      "Transparent communication throughout the project lifecycle",
      "Collaborative development process with regular feedback loops",
      "Comprehensive training and ongoing support options",
      "Flexible maintenance plans tailored to your needs",
    ],
  },
];

// ── Process / methodology ─────────────────────────────────────────────────
const PROCESS = [
  {
    n: "01",
    title: "Discovery & Strategic Planning",
    points: [
      "Comprehensive business requirements analysis",
      "Target audience research and user persona development",
      "Competitive landscape assessment and opportunity identification",
      "Technical architecture planning and technology selection",
    ],
  },
  {
    n: "02",
    title: "Creative Design & Prototyping",
    points: [
      "Wireframe development and information architecture",
      "Visual design concepts aligned with brand identity",
      "Interactive prototypes for user experience validation",
      "Client collaboration and iterative design refinement",
    ],
  },
  {
    n: "03",
    title: "Development & Integration",
    points: [
      "Clean, semantic code development using best practices",
      "Content management system implementation and customization",
      "Third-party service integrations and API connections",
      "Performance optimization and security implementation",
    ],
  },
  {
    n: "04",
    title: "Testing & Quality Assurance",
    points: [
      "Cross-browser compatibility testing across multiple devices",
      "User acceptance testing with real-world scenarios",
      "Performance audits and speed optimization",
      "Security testing and vulnerability assessments",
    ],
  },
  {
    n: "05",
    title: "Launch & Optimization",
    points: [
      "Seamless deployment with zero-downtime migration",
      "Search engine optimization and analytics setup",
      "Client training sessions for content management",
      "Post-launch monitoring and performance tracking",
    ],
  },
];

// ── Pricing ────────────────────────────────────────────────────────────────
const PRICING = [
  {
    name: "Starter Website Package",
    price: "$300 – $1,000",
    features: [
      "Professional 5–10 page responsive website",
      "Content management system setup",
      "Basic SEO optimization and analytics",
      "Mobile-optimized design and development",
      "30 days of post-launch support",
    ],
  },
  {
    name: "Business Growth Package",
    price: "$500 – $1,500",
    featured: true,
    features: [
      "Custom 10–20 page website with advanced features",
      "E-commerce functionality or booking system",
      "Comprehensive SEO strategy implementation",
      "Social media integration and contact forms",
      "60 days of support plus maintenance plan",
    ],
  },
  {
    name: "Enterprise Solution",
    price: "$1,000 – $10,000+",
    features: [
      "Complex web applications with custom functionality",
      "Advanced integrations and API development",
      "Multi-language and multi-location capabilities",
      "Dedicated project management and priority support",
      "Comprehensive training and extended warranty",
    ],
  },
];

const ADD_ONS = [
  "Logo and brand identity design",
  "Content writing and photography coordination",
  "Advanced analytics and conversion tracking",
  "Ongoing maintenance and security monitoring",
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How long does it typically take ZentechPoint to complete a website project?",
    a: "Project timelines vary based on complexity and scope. Simple business websites typically require 3-4 weeks, while custom e-commerce sites or complex web applications take 6-12 weeks. We provide detailed project timelines during our initial consultation and maintain regular communication throughout development to ensure timely delivery.",
  },
  {
    q: "Will my website be optimized for mobile devices and search engines?",
    a: "Absolutely. Every website we develop follows mobile-first design principles and includes comprehensive SEO optimization. This includes responsive design testing across multiple devices, fast loading speeds, clean code structure, meta tag optimization, and Google Analytics integration to ensure maximum visibility and performance.",
  },
  {
    q: "What content management system do you recommend for easy website updates?",
    a: "We primarily recommend WordPress for its flexibility, security, and ease of use, though we also work with other platforms based on specific requirements. We provide comprehensive training sessions to ensure you're comfortable managing content updates, and our user-friendly admin interfaces make ongoing maintenance straightforward.",
  },
  {
    q: "Do you provide ongoing support and maintenance after the website launches?",
    a: "Yes, we offer various maintenance packages starting at $99 per month, including security updates, regular backups, performance monitoring, and content updates. We also provide 30-60 days of complimentary post-launch support to address any questions or minor adjustments needed.",
  },
  {
    q: "Can you integrate my website with existing business tools and social media platforms?",
    a: "We specialize in seamless integrations with popular business tools including CRM systems, email marketing platforms, social media accounts, payment processors, and analytics tools. We assess your current technology stack during planning to ensure smooth connectivity and data flow.",
  },
  {
    q: "What happens if I need significant changes or additions to my website after completion?",
    a: "We build websites with scalability in mind, making future enhancements straightforward. Whether you need additional pages, new functionality, or design updates, we provide detailed quotes for modifications and can typically implement changes within 1-2 weeks depending on complexity.",
  },
];

export default function WebDevelopmentPage() {
  const svc = services.find((s) => s.slug === "web-development")!;

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
            <span className="font-semibold text-[color:var(--foreground)]">Website Design & Development</span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em]"
            style={{ borderColor: `${AC}35`, backgroundColor: `${AC}10`, color: AC }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            Development
          </div>

          <h1 className="mt-4 max-w-3xl text-[clamp(28px,4.6vw,50px)] font-black leading-[1.1] tracking-tight text-[color:var(--foreground)]">
            Custom Website Design &amp; Development Services by ZentechPoint
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[color:var(--muted)] md:text-base">
            ZentechPoint transforms your digital vision into stunning, high-performing websites that drive real business results.
            Our expert development team creates custom, responsive web solutions that seamlessly adapt to every device while delivering
            exceptional user experiences. From elegant business websites to robust e-commerce platforms, we combine cutting-edge technology
            with strategic design thinking to build sites that not only look remarkable but also rank higher in search engines and convert
            visitors into loyal customers. Whether you&apos;re launching a startup, scaling an established business, or refreshing your online
            presence, ZentechPoint delivers websites that grow with your success and exceed your expectations.
          </p>

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
              Get a Free Quote <ArrowIcon />
            </Link>
            <a href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition-all hover:bg-[color:var(--muted-bg)]">
              View Pricing
            </a>
          </div>
        </div>

        {/* ── Right: hero image ── */}
        <div className="relative mt-12 lg:mt-0">
          <div className="group relative aspect-[5/4] w-full overflow-hidden rounded-3xl border shadow-xl transition-shadow duration-500 hover:shadow-2xl"
            style={{ borderColor: `${AC}25` }}>
            <Image
              src="/images/services/Website_Design_Development.jpeg"
              alt="Website design and development services by ZentechPoint"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0"
              style={{ background: `linear-gradient(180deg, transparent 55%, ${AC}30 100%)` }} />
          </div>

          <div className="absolute -top-5 -right-5 rounded-2xl px-4 py-3 text-white shadow-lg" style={{ backgroundColor: AC }}>
            <div className="text-[13px] font-bold">Development</div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl border bg-[color:var(--card)] px-5 py-4 shadow-lg"
            style={{ borderColor: "var(--border)" }}>
            <div className="text-[11px] text-[color:var(--muted)]">Page Load Time</div>
            <div className="text-xl font-bold" style={{ color: AC }}>&lt;2s</div>
          </div>
        </div>
        </div>
        </Container>
      </section>

      {/* ════════════════════════════════════
          SERVICES OFFERED
      ════════════════════════════════════ */}
      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>What We Offer</p>
          <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
            Comprehensive Website Services Tailored to Your Business Goals
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--muted)]">
            We offer end-to-end web solutions tailored to your goals — whether you need a simple business site, full eCommerce platform,
            or custom web app. Every project follows modern standards for performance and accessibility.
          </p>
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

              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[color:var(--muted)]">Service Includes</p>
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

        <div className="mt-10 flex justify-center">
          <Link href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: AC }}>
            Tell Us Your Website Needs <ArrowIcon />
          </Link>
        </div>
      </Container>

      {/* ════════════════════════════════════
          WHY CHOOSE ZENTECHPOINT
      ════════════════════════════════════ */}
      <div className="border-y border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Why ZentechPoint</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Why Choose ZentechPoint for Web Development
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {WHY_CHOOSE.map((cat) => (
              <div key={cat.title}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                    style={{ backgroundColor: `${AC}15` }}>
                    {cat.emoji}
                  </span>
                  <h3 className="text-[15px] font-bold text-[color:var(--foreground)]">{cat.title}</h3>
                </div>
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
          PROCESS / METHODOLOGY
      ════════════════════════════════════ */}
      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Our Methodology</p>
          <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
            The ZentechPoint Method: Proven Steps to Digital Success
          </h2>
        </div>

        <ProcessSteps steps={PROCESS} accent={AC} />
      </Container>

      {/* ════════════════════════════════════
          PRICING
      ════════════════════════════════════ */}
      <div id="pricing" className="scroll-mt-20 border-y border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Project Investment Levels</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Flexible Pricing Plans Designed for Every Business Need
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
                <p className="mt-2 text-[26px] font-black tracking-tight" style={{ color: AC }}>{p.price}</p>
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

          {/* Add-ons */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--card)]/60 p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">Add-On Services Available</p>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {ADD_ONS.map((a) => (
                <div key={a} className="flex items-start gap-2 text-[13px] text-[color:var(--muted)]">
                  <CheckIcon color={AC} />
                  {a}
                </div>
              ))}
            </div>
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
            Essential Questions About ZentechPoint&apos;s Web Development Services
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
          style={{ background: `linear-gradient(135deg, ${AC} 0%, #047857 100%)` }}>
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white opacity-[0.06]" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-white opacity-[0.04]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-[0.03] blur-2xl" />

          <p className="relative z-10 text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">Get Started Today</p>
          <h2 className="relative z-10 mt-2 text-2xl font-bold text-white md:text-[32px]">
            Ready to Transform Your Online Presence with ZentechPoint?
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-white/80">
            Take the first step toward a website that truly represents your brand and drives business growth. Our expert team is ready
            to discuss your vision, provide strategic recommendations, and deliver a solution that exceeds your expectations.
          </p>

          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ color: AC }}>
              Schedule Your Free Consultation <ArrowIcon />
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
