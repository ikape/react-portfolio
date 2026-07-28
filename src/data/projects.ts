export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "afribooking",
    title: "Afribooking Agent App",
    description:
      "Property booking platform supporting apartment reservations and in-app payments. Integrated push notifications with Expo and production monitoring, reducing application crashes through improved error handling.",
    stack: ["React", "React Native", "Node.js", "MongoDB", "AWS", "Docker"],
  },
  {
    slug: "africartz",
    title: "Africartz User Booking App",
    description:
      "Apartment booking app giving users a full reservation flow — scheduling, inspection requests, and payment for their desired apartment.",
    stack: ["React Native", "TypeScript", "Tailwind CSS", "Context API", "Laravel"],
  },
  {
    slug: "niteon-marketplace",
    title: "NITEON Marketplace",
    description:
      "B2B marketplace connecting emerging African businesses to the global economy, with rendering strategies tuned for SEO and performance.",
    stack: ["Next.js", "Tailwind CSS", "Redux", "Context API", "Node.js", "AWS"],
  },
  {
    slug: "glumia-solutions",
    title: "Glumia Solutions",
    description:
      "Software solutions across multiple sectors and industries, built on a modern full-stack architecture with a documented, typed API layer.",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Swagger", "AWS", "Firebase"],
  },
];
