import type { PortfolioItem, PricingPlan, Service } from "./types";

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;


export const services: Service[] = [
  // 1. Digital Marketing FIRST
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Growth",
    description:
      "SEO, paid ads, analytics, and content strategies to increase traffic, leads, and conversions.",
    bullets: [
      "SEO optimization",
      "Google Ads & Meta Ads",
      "Analytics & tracking",
      "Conversion optimization",
    ],
    timeline: "Ongoing / Monthly",
    bestFor: "Businesses looking to grow traffic and sales",
    deliverables: [
      "SEO audit report",
      "Campaign setup",
      "Analytics dashboard",
      "Monthly performance reports",
    ],
  },

  // 2. Web Development
  {
    slug: "web-development",
    title: "Web Development",
    category: "Development",
    description:
      "Modern, fast, SEO-friendly websites and scalable web applications.",
    bullets: [
      "Next.js / React",
      "Performance optimization",
      "SEO-ready architecture",
      "Deployment & support",
    ],
    timeline: "1–6 weeks",
    bestFor: "Business websites, dashboards, SaaS platforms",
    deliverables: [
      "Responsive website",
      "SEO setup",
      "Admin panel",
      "Deployment",
    ],
  },

  // 3. App Development
  {
    slug: "app-development",
    title: "App Development",
    category: "Mobile",
    description:
      "High-performance mobile apps for Android and iOS platforms.",
    bullets: [
      "Flutter / React Native",
      "API integration",
      "Push notifications",
      "App store deployment",
    ],
    timeline: "3–10 weeks",
    bestFor: "Startups, service apps, marketplaces",
    deliverables: [
      "Mobile app",
      "Backend integration",
      "Store release",
      "Maintenance setup",
    ],
  },

  // 4. Software Development
  {
    slug: "software-development",
    title: "Software Development",
    category: "Engineering",
    description:
      "Custom backend systems, APIs, and automation solutions.",
    bullets: [
      "Node.js / Python",
      "Database architecture",
      "Automation systems",
      "Secure APIs",
    ],
    timeline: "2–12 weeks",
    bestFor: "Custom platforms, automation tools",
    deliverables: [
      "Backend APIs",
      "Database setup",
      "Documentation",
      "Deployment pipeline",
    ],
  },

  // 5. UI/UX Design
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    description:
      "Premium UI/UX design with modern layouts and design systems.",
    bullets: [
      "Figma design",
      "Design systems",
      "Wireframes",
      "Prototype",
    ],
    timeline: "1–3 weeks",
    bestFor: "Websites, apps, dashboards",
    deliverables: [
      "Figma files",
      "UI kit",
      "Design system",
      "Prototype",
    ],
  },

  // 6. IT Consultancy
  {
    slug: "it-consultancy",
    title: "IT Consultancy",
    category: "Consulting",
    description:
      "Expert advice on architecture, scaling, and technology decisions.",
    bullets: [
      "Architecture planning",
      "Scaling strategy",
      "Security audit",
      "Technology roadmap",
    ],
    timeline: "1–4 weeks",
    bestFor: "Startups and scaling businesses",
    deliverables: [
      "Architecture document",
      "Tech roadmap",
      "Security review",
      "Best practices guide",
    ],
  },
];


export const portfolio: PortfolioItem[] = [
  {
    id: "p1",
    title: "E-commerce Admin Dashboard",
    tag: "Web",
    desc: "Inventory, orders, analytics with role-based access.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: "p2",
    title: "Service Booking Mobile App",
    tag: "Mobile",
    desc: "Booking flow, notifications, and admin integration.",
    stack: ["Flutter", "Firebase", "Stripe"],
  },
  {
    id: "p3",
    title: "Marketing Website Redesign",
    tag: "Design",
    desc: "High-conversion landing page with SEO improvements.",
    stack: ["Figma", "Next.js", "SEO"],
  },
  {
    id: "p4",
    title: "Automation CRM Tool",
    tag: "Software",
    desc: "Custom CRM + reporting automation for operations.",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "p5",
    title: "Agency Website Template",
    tag: "Web",
    desc: "Fast, clean, premium agency layout with dark section.",
    stack: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    id: "p6",
    title: "UI Kit + Design System",
    tag: "Design",
    desc: "Component library and tokens for consistent UI.",
    stack: ["Figma", "Design Tokens"],
  },
];

export const pricing: PricingPlan[] = [
  {
    name: "Starter",
    tag: "Best for small websites",
    price: "$499+",
    desc: "Landing page or simple business website.",
    features: ["1–5 pages", "Mobile responsive", "Basic SEO", "Contact form"],
  },
  {
    name: "Growth",
    tag: "Best for businesses",
    price: "$1499+",
    desc: "Business website + tracking + speed optimization.",
    features: ["Up to 12 pages", "Blog/CMS setup", "Advanced SEO", "Analytics + tracking", "Speed optimization"],
    featured: true,
  },
  {
    name: "MVP / Custom",
    tag: "Best for startups",
    price: "Custom",
    desc: "Web app / mobile app / platform with scalable backend.",
    features: ["Product planning", "UI/UX design", "Backend APIs", "Deployment + support"],
  },
];

export const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Simple sites can take 1–2 weeks. Larger websites or web apps usually take 3–6+ weeks depending on features.",
  },
  {
    q: "Do you provide UI/UX design in Figma?",
    a: "Yes. We design wireframes, UI screens, and a small design system to ensure consistency and a premium look.",
  },
  {
    q: "Can you help with hosting and deployment?",
    a: "Yes. We deploy to Vercel/Netlify, connect domains, set up SSL, analytics, and performance monitoring.",
  },
  {
    q: "Do you offer maintenance after launch?",
    a: "Yes. We can provide monthly support to handle fixes, enhancements, and performance improvements.",
  },
];

export const blogPreview = [
  {
    title: "How to design a premium agency website",
    tag: "Design",
    date: "2026",
  },
  {
    title: "SEO checklist for modern Next.js websites",
    tag: "SEO",
    date: "2026",
  },
  {
    title: "MVP roadmap: build fast without breaking quality",
    tag: "Product",
    date: "2026",
  },
];

export const team = [
  { name: "Danielle Stewart", role: "UI/UX Designer" },
  { name: "Bryan Mendez", role: "Full-Stack Developer" },
  { name: "Bora Roberts", role: "Mobile Engineer" },
  { name: "Roberto Carter", role: "Digital Marketer" },
];

export const faqCategories = ["General", "Services", "Payment"] as const;

export const faqItemsByCategory: Record<(typeof faqCategories)[number], { q: string; a: string }[]> = {
  General: [
    {
      q: "What services do digital agencies provide?",
      a: "We provide web development, app development, software solutions, UI/UX design, digital marketing, and IT consultancy.",
    },
    {
      q: "How long does it take for a project to be designed?",
      a: "Usually 1–3 weeks for UI/UX depending on pages, complexity, and iterations.",
    },
    {
      q: "Is ZentechPoint suitable for my business?",
      a: "Yes—startup MVPs, growing businesses, and enterprise teams. We tailor scope and stack to your goals.",
    },
  ],
  Services: [
    {
      q: "Do you build both website and mobile apps?",
      a: "Yes. We build modern websites/web apps and mobile apps (Flutter/React Native) with scalable APIs.",
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes. We offer maintenance and growth support after launch—bug fixes, performance, SEO, and enhancements.",
    },
  ],
  Payment: [
    {
      q: "How do payments work?",
      a: "Typically milestone-based payments. We agree scope → milestones → payment schedule before starting.",
    },
    {
      q: "Can I upgrade or change the plan?",
      a: "Yes. You can add features or upgrade scope at any time. We’ll re-estimate and update the timeline.",
    },
  ],
};
