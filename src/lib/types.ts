export type Service = {
  slug: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  timeline: string;
  bestFor: string;
  deliverables: string[];
};

export type PortfolioItem = {
  id: string;
  title: string;
  tag: "Web" | "Mobile" | "Software" | "Design";
  desc: string;
  stack: string[];
};

export type PricingPlan = {
  name: string;
  tag: string;
  price: string;
  desc: string;
  features: string[];
  featured?: boolean;
};
