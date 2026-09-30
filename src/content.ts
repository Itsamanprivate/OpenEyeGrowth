export type ServicePlan = "marketing" | "website";

export type PricingTier = {
  name: string;
  description: string;
  price: number;
  popular?: boolean;
  features: readonly string[];
};

export type ServiceOffer = {
  id: ServicePlan;
  label: string;
  summary: string;
  points: readonly string[];
  tiers: readonly PricingTier[];
};

export const offerOrder: readonly ServicePlan[] = ["marketing", "website"];

export const offers: Record<ServicePlan, ServiceOffer> = {
  marketing: {
    id: "marketing",
    label: "Marketing Only",
    summary:
      "Campaigns that make the business easier to find and easier to choose, without a new website.",
    points: [
      "Google and social marketing",
      "Lead generation",
      "Campaign management",
      "Reporting",
    ],
    tiers: [
      {
        name: "Starter",
        description: "Getting started on one channel.",
        price: 1200,
        features: ["1 marketing channel", "Campaign setup", "Monthly report", "Email support"],
      },
      {
        name: "Growth",
        description: "Ready to grow across more channels.",
        price: 2800,
        popular: true,
        features: [
          "3 marketing channels",
          "Lead generation",
          "Campaign management",
          "Biweekly reporting",
          "Strategy call",
        ],
      },
      {
        name: "Pro",
        description: "A complete growth system.",
        price: 5000,
        features: [
          "Full funnel",
          "Campaign creative",
          "Dedicated strategist",
          "Weekly reporting",
          "Priority support",
        ],
      },
    ],
  },
  website: {
    id: "website",
    label: "Website + Marketing",
    summary:
      "A professional website built to convert, plus the marketing that keeps it growing.",
    points: [
      "Professional website",
      "Conversion-focused design",
      "Marketing",
      "Lead generation",
      "Ongoing growth",
    ],
    tiers: [
      {
        name: "Starter",
        description: "A marketing site and one channel.",
        price: 2400,
        features: [
          "Marketing site, up to 5 pages",
          "1 marketing channel",
          "Basic on-page SEO",
          "Monthly report",
        ],
      },
      {
        name: "Growth",
        description: "A conversion site with ongoing marketing.",
        price: 4800,
        popular: true,
        features: [
          "Conversion-focused site",
          "Multi-channel marketing",
          "Lead capture",
          "Ongoing CRO",
          "Biweekly reporting",
        ],
      },
      {
        name: "Pro",
        description: "A custom site and a full growth team.",
        price: 8000,
        features: [
          "Custom site",
          "Full growth system",
          "Dedicated team",
          "Weekly reporting",
          "Priority support",
        ],
      },
    ],
  },
};

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how-it-works", label: "How It Works" },
] as const;

export const steps = [
  {
    title: "Choose a path",
    body: "Marketing only, or a website plus marketing.",
  },
  {
    title: "We build the work",
    body: "We set up the website, the campaigns, or both.",
  },
  {
    title: "You get visibility",
    body: "The business is easier to find, and leads come in at a steady pace.",
  },
] as const;

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
