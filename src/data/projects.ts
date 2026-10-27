export type ProjectLink = { label: string; url: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
  caseStudy?: boolean;
  problem?: string;
  role?: string;
  highlights?: string[];
};

const appStore = (label: string, url: string): ProjectLink => ({ label, url });

export const projects: Project[] = [
  {
    slug: "metertoken",
    title: "MeterToken",
    category: "Utility payments · Mobile",
    description:
      "Utility payment product under Valuepay. I take day-to-day ownership of the frontend — planning and building features, fixing bugs and keeping existing flows working.",
    stack: ["React Native", "TypeScript", "REST APIs"],
    links: [appStore("App Store", "https://apps.apple.com/ng/app/metertoken/id1580150842")],
    featured: true,
    caseStudy: true,
    problem:
      "Customers pay for utilities through a product where a broken payment flow means a real person without power. The frontend has to stay dependable while features keep shipping.",
    role: "Own MeterToken's frontend day to day, from planning and building features to fixing bugs, maintaining existing flows and making ongoing improvements.",
    highlights: [
      "Trace issues through navigation, API responses, application state and payment flows",
      "Clarify requirements with product and engineering, review changes and test before release",
      "Prioritise keeping existing flows working while adding new features",
    ],
  },
  {
    slug: "valuepay-mfb",
    title: "Valuepay MFB & PSSP",
    category: "Banking & payment collection · Web + Mobile",
    description:
      "Frontend for Valuepay Payment Solutions (business payment collection and transaction workflows) and roughly half of the Microfinance Bank mobile app — features, API integration and app state.",
    stack: ["React", "React Native", "TypeScript", "Redux", "Sentry"],
    links: [],
    featured: true,
    caseStudy: true,
    problem:
      "A licensed bank and a payment-collection platform need web and mobile interfaces that handle money, where issues reported in use must be investigated quickly and correctly.",
    role: "Build and update PSSP frontend features and connect them to backend APIs; handle roughly half of the MFB mobile app frontend, including new features, API integration, app state and investigating reported issues.",
    highlights: [
      "Business payment collection and transaction workflows on web (React + TypeScript)",
      "Mobile screens and flows in React Native, wired to backend APIs",
      "Unit, integration and end-to-end testing with Jest, Cypress and Playwright; production monitoring with Sentry",
    ],
  },
  {
    slug: "afribooking",
    title: "Afribooking",
    category: "Property booking · Guest, owner & web apps",
    description:
      "Apartment-booking platform with a guest app, an owner app and a web admin dashboard — reservation requests, guest–owner price discussions and chat.",
    stack: ["React Native", "React", "TypeScript", "Context API", "Laravel APIs"],
    links: [
      appStore("Find & Book", "https://apps.apple.com/ng/app/afribooking-find-book/id6476979170"),
      appStore("Own & Manage", "https://apps.apple.com/ng/app/afribooking-own-manage/id6745455021"),
      { label: "Web app", url: "https://africartz.vercel.app/" },
    ],
    featured: true,
    caseStudy: true,
    problem:
      "Renters and property owners needed one platform to request reservations, negotiate price and communicate, instead of a manual back-and-forth over calls and messages.",
    role: "Built features across the guest and owner mobile apps and the admin dashboard at Africart Store Enterprise.",
    highlights: [
      "Reservation requests, guest–owner price discussions and in-app chat",
      "Connected the apps to Laravel APIs and managed shared UI state with Context API",
      "Reused components across screens to keep the experience consistent",
    ],
  },
  {
    slug: "niteon-marketplace",
    title: "NITEON Marketplace",
    category: "B2B marketplace · Web",
    description:
      "B2B marketplace connecting African businesses with international markets. Built marketplace and admin-dashboard features, with rendering strategies tuned for SEO and speed.",
    stack: ["Next.js", "React Native", "Flutter", "Firebase", "Tailwind CSS"],
    links: [{ label: "Website", url: "https://niteonhq.com/" }],
    featured: true,
    caseStudy: true,
    problem:
      "A cross-border B2B platform needs a discoverable, fast storefront and usable admin dashboards to connect sellers and buyers.",
    role: "Frontend engineer (project-based) on the web experience and admin dashboard, working across Next.js, React Native and Flutter surfaces.",
    highlights: [
      "Marketplace and admin-dashboard features built from product requirements",
      "Dashboard usability, rendering approaches and Firebase integrations for core workflows",
      "Frontend changes linked to a reported 20% improvement in page-load speed and SEO effectiveness",
    ],
  },
  {
    slug: "savewyze",
    title: "Savewyze",
    category: "Personal finance · Mobile",
    description: "Savings, wallet transfers, gift cards and utility payments.",
    stack: ["React Native", "REST APIs"],
    links: [appStore("App Store", "https://apps.apple.com/ng/app/savewyze/id6449370010")],
  },
  {
    slug: "restore-capital",
    title: "Restore Capital",
    category: "Investment · Mobile",
    description: "Investment product — supported app functionality and contributed to product updates.",
    stack: ["React Native"],
    links: [{ label: "Website", url: "https://www.therestorecapital.com/" }],
  },
  {
    slug: "get-atra",
    title: "GET ATRA",
    category: "Insurance claims · Mobile",
    description: "Property damage documentation and insurance claim workflows.",
    stack: ["React Native"],
    links: [appStore("App Store", "https://apps.apple.com/ng/app/get-atra/id6744064699")],
  },
  {
    slug: "ration",
    title: "Ration",
    category: "Food delivery · Customer & vendor apps",
    description:
      "Food ordering and delivery platform with separate customer and vendor apps for placing orders and managing vendor operations.",
    stack: ["React Native", "REST APIs", "State management"],
    links: [
      appStore("Customer", "https://apps.apple.com/ng/app/ration-app/id6760186233"),
      appStore("Vendor", "https://apps.apple.com/ng/app/ration-vendor/id6756193702"),
    ],
  },
  {
    slug: "amsos-ai",
    title: "amsos ai",
    category: "E-commerce automation · Web",
    description:
      "An automationOS blending innovation with deep e-commerce insights to craft tools that empower merchants' businesses.",
    stack: ["Web"],
    links: [{ label: "Website", url: "https://amsos.ai/" }],
  },
];
