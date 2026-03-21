import type { PortfolioItem, PricingPlan, Service } from "./types";

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;


export const services: Service[] = [
  // 1. Website Design & Development
  {
    slug: "web-development",
    title: "Website Design & Development",
    category: "Development",
    description:
      "Build powerful, conversion-focused websites that engage visitors and drive business results through responsive design, optimized performance, and strategic user experience architecture.",
    bullets: [
      "Custom responsive web design",
      "E-commerce solutions",
      "SEO-optimized development",
      "Fast-loading, mobile-first approach",
      "Content management systems",
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

  // 2. Android/iOS App Development
  {
    slug: "app-development",
    title: "Android/iOS App Development",
    category: "Mobile",
    description:
      "Create intuitive mobile applications that connect with your audience across all devices, featuring seamless functionality, engaging interfaces, and scalable architecture for sustainable growth.",
    bullets: [
      "iOS and Android app development",
      "Cross-platform solutions",
      "Progressive web apps (PWA)",
      "App store optimization",
      "Ongoing maintenance and updates",
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

  // 3. Custom Software & Automation
  {
    slug: "software-development",
    title: "Custom Software & Automation",
    category: "Engineering",
    description:
      "Streamline business operations with tailored software solutions that automate processes, improve efficiency, and integrate seamlessly with existing systems for enhanced productivity and scalability.",
    bullets: [
      "Enterprise software development",
      "Database design and management",
      "API development and integration",
      "Cloud-based solutions",
      "Legacy system modernization",
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

  // 4. SEO & Performance Marketing
  {
    slug: "digital-marketing",
    title: "SEO & Performance Marketing",
    category: "Growth",
    description:
      "Increase online visibility and drive qualified traffic through data-driven marketing strategies, search optimization, and targeted campaigns that deliver measurable ROI and sustainable growth.",
    bullets: [
      "Search engine optimization (SEO)",
      "Pay-per-click advertising (PPC)",
      "Social media marketing",
      "Local SEO optimization",
      "Analytics and reporting",
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

  // 5. UI/UX Design Systems
  {
    slug: "ui-ux-design",
    title: "UI/UX Design Systems",
    category: "Design",
    description:
      "Design intuitive user experiences that convert visitors into customers through research-backed interfaces, strategic user flows, and visually compelling designs that reflect your brand identity.",
    bullets: [
      "User experience research",
      "Interface design and prototyping",
      "Usability testing",
      "Brand identity development",
      "Conversion optimization",
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

  // 6. IT Consulting & Support
  {
    slug: "it-consultancy",
    title: "IT Consulting & Support",
    category: "Consulting",
    description:
      "Navigate technology decisions with confidence through strategic consulting services that align technical solutions with business objectives, ensuring optimal performance and long-term success.",
    bullets: [
      "Technology strategy planning",
      "System architecture consulting",
      "Digital transformation",
      "Security assessments",
      "Performance optimization",
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
    q: "How long does a typical web development project take with ZentechPoint?",
    a: "Project timelines depend on complexity and requirements. Simple business websites typically take 3–4 weeks, while custom e-commerce platforms or complex web applications require 8–16 weeks. We provide detailed timelines during our initial consultation based on your specific needs.",
  },
  {
    q: "Do you develop apps for both iOS and Android platforms?",
    a: "Yes, we specialize in both native iOS and Android development, as well as cross-platform solutions using React Native and Flutter. We help you choose the best approach based on your target audience, budget, and long-term goals.",
  },
  {
    q: "What's included in your SEO and digital marketing services?",
    a: "Our comprehensive digital marketing includes keyword research, on-page optimization, content strategy, link building, PPC campaign management, social media marketing, and detailed analytics reporting. We create custom strategies based on your industry and competition.",
  },
  {
    q: "Can ZentechPoint integrate new software with our existing business systems?",
    a: "Absolutely. We specialize in API development and system integration, ensuring seamless connectivity between new solutions and your current infrastructure. Our team conducts thorough compatibility assessments before beginning any integration project.",
  },
  {
    q: "What ongoing support do you provide after project completion?",
    a: "We offer comprehensive maintenance packages including security updates, performance monitoring, bug fixes, content updates, and technical support. Our support plans range from basic monthly maintenance to full-service management with 24/7 monitoring.",
  },
  {
    q: "How does ZentechPoint ensure project quality and client satisfaction?",
    a: "We follow rigorous quality assurance processes including code reviews, automated testing, user acceptance testing, and staged deployments. Regular client communication, milestone reviews, and our 99% satisfaction rate demonstrate our commitment to excellence.",
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
  {
    name: "Rasel Chowdhury",
    role: "Co-Founder & Software Engineer",
    badge: "Co-Founder",
    image: "/images/team/raselDev2.png",
    bio: "Rasel is the technical foundation of ZentechPoint. With deep expertise in full-stack development, software architecture, and custom system building, he transforms complex challenges into clean, scalable solutions. Every product ZentechPoint delivers carries his commitment to performance, precision, and long-term reliability.",
    gradient: "from-violet-500 to-purple-600",
    social: {
      linkedin: "https://www.linkedin.com/in/raselchowdhury",
      github: "https://github.com/raselchowdhury",
      twitter: "#",
    },
  },
  {
    name: "Emu Chowdhury",
    role: "Co-Founder & Head of Marketing",
    badge: "Co-Founder",
    image: "/images/team/emuChy.png",
    bio: "Emu is the strategic growth engine behind ZentechPoint. She leads our marketing direction with a sharp focus on ROI-driven campaigns, brand positioning, and client growth. Her work ensures that every business we partner with doesn't just launch — it scales, attracts the right audience, and builds lasting market presence.",
    gradient: "from-emerald-500 to-teal-600",
    social: {
      linkedin: "#",
      instagram: "https://www.instagram.com/zentechpoint/?hl=en",
      facebook: "https://web.facebook.com/profile.php?id=61584989416549",
    },
  },
  {
    name: "Shimul Chowdhury",
    role: "Social Media Manager",
    badge: "Social Media",
    image: "/images/team/Shimulchowdhury.png",
    bio: "Shimul is our voice across the digital landscape. She crafts compelling content, builds engaged communities, and shapes authentic brand presence across every platform. With a talent for storytelling and audience connection, she turns followers into loyal fans and fans into paying customers.",
    gradient: "from-blue-500 to-cyan-600",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Antu Das",
    role: "AI Visual Designer",
    badge: "Designer",
    image: "/images/team/antuDas.jpeg",
    bio: "Antu sits at the intersection of creativity and technology. He blends traditional design thinking with cutting-edge AI tools to produce visuals that are both stunning and strategically on-brand — from UI assets and brand identities to campaign graphics and motion content. His work gives ZentechPoint its distinct visual edge.",
    gradient: "from-orange-500 to-amber-600",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
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
