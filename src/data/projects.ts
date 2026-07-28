export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  caseStudy?: boolean;
  problem?: string;
  role?: string;
  architecture?: string[];
  outcome?: string;
};

export const projects: Project[] = [
  {
    slug: "afribooking",
    title: "Afribooking Agent App",
    description:
      "Property booking platform supporting apartment reservations and in-app payments. Integrated push notifications with Expo and production monitoring, reducing application crashes through improved error handling.",
    stack: ["React", "React Native", "Node.js", "MongoDB", "AWS", "Docker"],
    caseStudy: true,
    problem:
      "Property agents needed a way for renters to browse, reserve, and pay for apartments remotely, with reliable status updates — bookings and payments happening on mobile devices over inconsistent connectivity.",
    role: "Built the React Native client end-to-end — booking flow, payment integration, and push notification delivery via Expo — against a Node.js/MongoDB backend deployed on AWS.",
    architecture: [
      "React Native app with Expo for push notification delivery",
      "Node.js/Express API backed by MongoDB, deployed via Docker on AWS",
      "Client-side error handling and monitoring to catch crash-causing edge cases before they reached the booking/payment flow",
    ],
    outcome:
      "Reduced application crashes through improved error handling, with reliable reservation and payment status delivered via push notifications — the same reliability bar payment-adjacent products need in production.",
  },
  {
    slug: "africartz",
    title: "Africartz User Booking App",
    description:
      "Apartment booking app giving users a full reservation flow — scheduling, inspection requests, and payment for their desired apartment.",
    stack: ["React Native", "TypeScript", "Tailwind CSS", "Context API", "Laravel"],
    caseStudy: true,
    problem:
      "Renters needed a single mobile flow to discover apartments, schedule inspections, and pay — previously a fragmented, mostly manual process handled over calls and messages.",
    role: "Built the React Native/TypeScript client, integrating with a Laravel REST API and managing booking/reservation state via Context API.",
    architecture: [
      "React Native + TypeScript for a type-safe mobile client",
      "Context API for booking, reservation, and inspection state shared across screens",
      "Integration with a Laravel REST API for property listings, inspection scheduling, and payment status",
    ],
    outcome:
      "Delivered a single flow covering discovery → inspection request → reservation → payment, replacing the manual back-and-forth previously required to book a viewing or reservation.",
  },
  {
    slug: "niteon-marketplace",
    title: "NITEON Marketplace",
    description:
      "B2B marketplace connecting emerging African businesses to the global economy, with rendering strategies tuned for SEO and performance.",
    stack: ["Next.js", "Tailwind CSS", "Redux", "Context API", "Node.js", "AWS"],
    caseStudy: true,
    problem:
      "NITEON needed a fast, SEO-discoverable storefront for connecting African B2B sellers with global buyers — slow initial page loads and weak search visibility were limiting organic reach.",
    role: "Owned frontend rendering strategy and performance work on the Next.js marketplace, plus state management for cart and dashboard flows.",
    architecture: [
      "Next.js with rendering strategy (SSR/SSG) chosen per route based on content volatility and SEO needs",
      "Redux for global cart/session state, Context API for scoped UI state",
      "Tailwind CSS design system for consistent, fast-shipping UI across storefront and dashboard",
    ],
    outcome:
      "Increased page load speed and SEO effectiveness by 20%, directly improving organic discoverability for the marketplace's B2B storefront.",
  },
  {
    slug: "glumia-solutions",
    title: "Glumia Solutions",
    description:
      "Software solutions across multiple sectors and industries, built on a modern full-stack architecture with a documented, typed API layer.",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Swagger", "AWS", "Firebase"],
  },
];
