import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { services } from "@/lib/data";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WhyChooseGrid from "@/components/sections/WhyChooseGrid";

export const metadata: Metadata = {
  title: "Custom Software Development | ZentechPoint Automation Solutions",
  description:
    "ZentechPoint delivers custom software development & automation solutions that streamline operations and drive business growth. Expert process automation and software engineering services.",
};

const AC = "#f59e0b"; // Engineering category accent

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
    title: "Custom Software Development",
    includes: [
      "Full-cycle development from concept to deployment",
      "Enterprise-grade architecture and scalability",
      "Modern technology stack integration",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Business Process Automation",
    includes: [
      "Robotic Process Automation (RPA)",
      "Workflow optimization and automation",
      "Document processing automation",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Software Solutions",
    includes: [
      "CRM and ERP customizations",
      "Inventory management systems",
      "HR and payroll automation",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "API Development & System Integration",
    includes: [
      "Custom API development",
      "Third-party system integration",
      "Legacy system modernization",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions & DevOps",
    includes: [
      "Cloud migration and optimization",
      "CI/CD pipeline implementation",
      "Infrastructure automation",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "AI/ML Integration",
    includes: [
      "Intelligent automation implementation",
      "Predictive analytics solutions",
      "Machine learning model integration",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M8.25 3v1.5M15.75 3v1.5M8.25 19.5V21M15.75 19.5V21M3 8.25h1.5M3 12h1.5M3 15.75h1.5M19.5 8.25H21M19.5 12H21M19.5 15.75H21M6.75 20.25h10.5a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

// ── Why choose ZentechPoint ───────────────────────────────────────────────
const WHY_CHOOSE = [
  {
    emoji: "🎯",
    title: "Business-First Development Approach",
    points: [
      "Strategic analysis that aligns technology solutions with business objectives",
      "ROI-focused development that delivers measurable value from day one",
      "Industry-specific expertise across healthcare, finance, manufacturing, and logistics",
      "Scalable architectures designed for long-term growth and adaptability",
    ],
  },
  {
    emoji: "⚙️",
    title: "Advanced Automation Capabilities",
    points: [
      "Robotic Process Automation (RPA) implementation and optimization",
      "Intelligent workflow design that reduces manual intervention by up to 85%",
      "AI-powered decision engines and predictive analytics integration",
      "Legacy system modernization with seamless data migration",
    ],
  },
  {
    emoji: "🔧",
    title: "Technical Excellence & Innovation",
    points: [
      "Full-stack development expertise with modern frameworks and languages",
      "Cloud-native solutions built for performance, security, and scalability",
      "API-first architecture enabling seamless third-party integrations",
      "Microservices design patterns for flexibility and maintainability",
    ],
  },
  {
    emoji: "🤝",
    title: "Collaborative Partnership Model",
    points: [
      "Agile development methodology with transparent project management",
      "Regular stakeholder communication and iterative feedback incorporation",
      "Comprehensive documentation and knowledge transfer protocols",
      "Post-deployment support and continuous optimization services",
    ],
  },
];

// ── Development process ─────────────────────────────────────────────────
const PROCESS = [
  {
    n: "01",
    title: "Strategic Discovery & Requirements Engineering",
    points: [
      "Comprehensive business process analysis and stakeholder interviews",
      "Current system audit and technical infrastructure assessment",
      "User experience research and workflow mapping",
      "Project scope definition with clear success metrics and deliverables",
    ],
  },
  {
    n: "02",
    title: "Solution Architecture & Technical Design",
    points: [
      "System architecture planning with scalability and security considerations",
      "Database design and data modeling for optimal performance",
      "Integration strategy development for existing systems and third-party services",
      "Technology stack selection based on project requirements and future needs",
    ],
  },
  {
    n: "03",
    title: "Agile Development & Continuous Integration",
    points: [
      "Sprint-based development cycles with regular milestone deliveries",
      "Test-driven development practices ensuring code quality and reliability",
      "Continuous integration and automated testing implementation",
      "Real-time progress tracking with client visibility and feedback loops",
    ],
  },
  {
    n: "04",
    title: "Quality Assurance & Security Validation",
    points: [
      "Comprehensive testing across multiple environments and use cases",
      "Performance optimization and load testing for production readiness",
      "Security auditing and penetration testing protocols",
      "User acceptance testing with stakeholder validation and approval",
    ],
  },
  {
    n: "05",
    title: "Deployment & System Integration",
    points: [
      "Production environment setup with monitoring and alerting systems",
      "Data migration and legacy system integration execution",
      "Staff training programs and comprehensive documentation delivery",
      "Go-live support with immediate issue resolution capabilities",
    ],
  },
  {
    n: "06",
    title: "Optimization & Ongoing Enhancement",
    points: [
      "Performance monitoring and analytics implementation",
      "User feedback collection and continuous improvement planning",
      "Feature enhancement roadmap development",
      "Long-term maintenance and support service activation",
    ],
  },
];

// ── Technology stack ────────────────────────────────────────────────────
const TECH_STACK = [
  {
    title: "Frontend Development Frameworks",
    items: [
      "React.js and Next.js for dynamic, responsive user interfaces",
      "Vue.js and Angular for complex enterprise application development",
      "React Native and Flutter for cross-platform mobile solutions",
      "Progressive Web App (PWA) technologies for enhanced user experiences",
    ],
  },
  {
    title: "Backend & Server Technologies",
    items: [
      "Node.js and Express.js for scalable server-side applications",
      "Python with Django and Flask for data-intensive applications",
      ".NET Core and C# for enterprise-level system development",
      "Java Spring Boot for robust, enterprise-grade backend solutions",
    ],
  },
  {
    title: "Database & Data Management",
    items: [
      "PostgreSQL and MySQL for relational data storage and complex queries",
      "MongoDB and NoSQL solutions for flexible, document-based storage",
      "Redis for high-performance caching and session management",
      "Elasticsearch for advanced search and analytics capabilities",
    ],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    items: [
      "Amazon Web Services (AWS) and Microsoft Azure cloud platforms",
      "Docker containerization for consistent deployment environments",
      "Kubernetes orchestration for scalable application management",
      "CI/CD pipelines using Jenkins, GitLab, and GitHub Actions",
    ],
  },
];

// ── Pricing ────────────────────────────────────────────────────────────────
const PRICING = [
  {
    name: "Software MVP Package",
    price: "$2,449 – $4,499",
    features: [
      "Core functionality development with essential features",
      "Basic automation workflows and user management",
      "Standard integrations with existing business systems",
      "3-6 month development timeline with phased delivery",
      "90 days of post-launch support and maintenance",
    ],
  },
  {
    name: "Enterprise Solution Package",
    price: "$5,099 – $19,999",
    featured: true,
    features: [
      "Comprehensive feature set with advanced automation capabilities",
      "Custom dashboard and reporting system development",
      "Multiple system integrations and API development",
      "6-12 month development timeline with regular milestone reviews",
      "6 months of support plus ongoing maintenance options",
    ],
  },
  {
    name: "Complex Platform Development",
    price: "$21,000+",
    features: [
      "Multi-module enterprise platforms with AI/ML integration",
      "Advanced workflow automation and business intelligence",
      "Custom mobile applications and third-party ecosystem connections",
      "12+ month development timeline with dedicated project management",
      "Comprehensive training, documentation, and extended support agreements",
    ],
  },
];

const ADD_ONS = [
  "Business process consultation and workflow optimization",
  "Legacy system modernization and data migration services",
  "Ongoing development and feature enhancement programs",
  "24/7 monitoring and technical support packages",
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does ZentechPoint determine the best automation approach for our business processes?",
    a: "We begin with a comprehensive business process audit, analyzing current workflows, identifying bottlenecks, and measuring time investment in manual tasks. Our team uses process mapping tools and stakeholder interviews to understand pain points, then recommends automation strategies based on ROI potential, technical feasibility, and integration requirements with your existing systems.",
  },
  {
    q: "What is the typical timeline for developing custom software solutions with ZentechPoint?",
    a: "Project timelines vary significantly based on complexity and scope. Simple automation tools typically require 6-12 weeks, while comprehensive enterprise software platforms take 6-18 months. We provide detailed project timelines during our discovery phase and maintain transparent progress tracking throughout development using agile methodologies.",
  },
  {
    q: "Can ZentechPoint integrate custom software with our existing business systems and databases?",
    a: "Absolutely. Integration is a core specialty of our development approach. We work with virtually any existing system through APIs, direct database connections, or custom integration layers. Our team has experience with popular platforms like Salesforce, SAP, QuickBooks, and countless proprietary systems across various industries.",
  },
  {
    q: "What ongoing support and maintenance do you provide for custom software applications?",
    a: "We offer comprehensive maintenance packages starting at $2,000 per month, including security updates, bug fixes, performance monitoring, and minor feature enhancements. Our support includes 24/7 system monitoring, regular backups, security patches, and dedicated technical support with guaranteed response times based on issue severity.",
  },
  {
    q: "How does ZentechPoint ensure data security and compliance in custom software development?",
    a: "Security is integrated throughout our development process, including encrypted data transmission, secure authentication protocols, regular security audits, and compliance with industry standards like GDPR, HIPAA, or SOC 2. We implement role-based access controls, audit trails, and follow secure coding practices with regular penetration testing.",
  },
  {
    q: "What happens if our business requirements change during the development process?",
    a: "We use agile development methodologies specifically to accommodate changing requirements. Our process includes regular sprint reviews where modifications can be incorporated efficiently. We provide transparent change management with clear impact assessments for timeline and budget adjustments, ensuring flexibility without compromising project quality.",
  },
];

export default function SoftwareDevelopmentPage() {
  const svc = services.find((s) => s.slug === "software-development")!;

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
            <span className="font-semibold text-[color:var(--foreground)]">Custom Software & Automation</span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em]"
            style={{ borderColor: `${AC}35`, backgroundColor: `${AC}10`, color: AC }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Engineering
          </div>

          <h1 className="mt-4 max-w-3xl text-[clamp(28px,4.6vw,50px)] font-black leading-[1.1] tracking-tight text-[color:var(--foreground)]">
            ZentechPoint&apos;s Expert Custom Software &amp; Intelligent Automation Services
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[color:var(--muted)] md:text-base">
            ZentechPoint empowers businesses to overcome operational challenges through innovative custom software development and
            intelligent automation solutions. Our expert engineering team creates tailored applications that streamline workflows,
            eliminate manual processes, and accelerate growth across industries. From enterprise software platforms to robotic process
            automation, we transform complex business requirements into powerful digital solutions that deliver measurable results.
            Whether you need to modernize legacy systems, automate repetitive tasks, or build entirely new software ecosystems,
            ZentechPoint combines cutting-edge technology with strategic business thinking to create solutions that scale with your
            success and provide sustainable competitive advantages in today&apos;s digital marketplace.
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
              Schedule Your Free Strategy Consultation <ArrowIcon />
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
              src="/images/services/Software_Development.png"
              alt="Custom software and automation development services by ZentechPoint"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0"
              style={{ background: `linear-gradient(180deg, transparent 55%, ${AC}30 100%)` }} />
          </div>

          <div className="absolute -top-5 -right-5 rounded-2xl px-4 py-3 text-white shadow-lg" style={{ backgroundColor: AC }}>
            <div className="text-[13px] font-bold">Engineering</div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl border bg-[color:var(--card)] px-5 py-4 shadow-lg"
            style={{ borderColor: "var(--border)" }}>
            <div className="text-[11px] text-[color:var(--muted)]">Manual Work Reduced</div>
            <div className="text-xl font-bold" style={{ color: AC }}>85%</div>
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
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Our Portfolio</p>
          <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
            Complete Custom Software &amp; Process Automation Services Portfolio
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--muted)]">
            We deliver comprehensive software development and automation services designed to optimize your business operations and
            accelerate digital transformation. Our integrated approach ensures seamless connectivity between custom applications and
            automated processes for maximum efficiency and scalability.
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
              <ul className="mt-4 space-y-2">
                {o.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-[color:var(--muted)]">
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
          WHY CHOOSE ZENTECHPOINT
      ════════════════════════════════════ */}
      <div className="border-y border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Key Differentiators</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Why Industry Leaders Partner with ZentechPoint for Mission-Critical Solutions
            </h2>
          </div>

          <WhyChooseGrid
            items={WHY_CHOOSE.map((c) => ({ icon: c.emoji, title: c.title, points: c.points }))}
            accent={AC}
            columns={2}
          />
        </Container>
      </div>

      {/* ════════════════════════════════════
          METHODOLOGY / PROCESS
      ════════════════════════════════════ */}
      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Development Process</p>
          <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
            Proven Development Framework That Ensures Project Success
          </h2>
        </div>

        <ProcessSteps steps={PROCESS} accent={AC} />
      </Container>

      {/* ════════════════════════════════════
          TECHNOLOGY STACK
      ════════════════════════════════════ */}
      <div className="border-y border-[color:var(--border)] bg-[color:var(--muted-bg)]">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Core Technologies</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Modern Development Tools &amp; Frameworks Powering ZentechPoint Solutions
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
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
          PRICING
      ════════════════════════════════════ */}
      <div id="pricing" className="scroll-mt-20">
        <Container className="py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: AC }}>Development Investment Tiers</p>
            <h2 className="mt-2 text-[clamp(22px,3.5vw,34px)] font-bold tracking-tight text-[color:var(--foreground)]">
              Transparent Pricing Models Designed for Every Business Need
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
                <p className="mt-2 text-[24px] font-black tracking-tight" style={{ color: AC }}>{p.price}</p>
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
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">Additional Services Available</p>
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
            Essential Answers About ZentechPoint&apos;s Custom Software Development
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
          style={{ background: `linear-gradient(135deg, ${AC} 0%, #b45309 100%)` }}>
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white opacity-[0.06]" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-white opacity-[0.04]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-[0.03] blur-2xl" />

          <p className="relative z-10 text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">Get Started Today</p>
          <h2 className="relative z-10 mt-2 text-2xl font-bold text-white md:text-[32px]">
            Begin Your Digital Transformation Journey with ZentechPoint Today
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-white/80">
            Take the first step toward operational excellence and business growth. Our expert development team is ready to analyze
            your unique challenges, recommend strategic solutions, and deliver custom software that drives measurable results for
            your organization.
          </p>

          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ color: AC }}>
              Schedule Your Free Strategy Consultation <ArrowIcon />
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
