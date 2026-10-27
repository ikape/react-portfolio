export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Valuepay Payment Solutions / Microfinance Bank",
    role: "Software Engineer",
    location: "Abuja, Nigeria",
    start: "05/2025",
    end: "Present",
    bullets: [
      "Work across Valuepay Payment Solutions (PSSP), Valuepay Microfinance Bank and MeterToken, building web and mobile features for payment, banking and utility products.",
      "Build PSSP frontend features and connect them to backend APIs for business payment collection and transaction workflows.",
      "Handle roughly half of the MFB mobile app frontend — new features, API integration, app state and investigating issues reported in use.",
      "Own MeterToken's frontend day to day: planning and building features, fixing bugs and maintaining existing flows.",
      "Trace issues through navigation, API responses, application state and payment flows; review changes and test before release.",
    ],
  },
  {
    company: "NITEON",
    role: "Frontend Engineer (Project-based)",
    location: "Boulder, Colorado, USA",
    start: "07/2024",
    end: "01/2026",
    bullets: [
      "Built marketplace and admin-dashboard features for a B2B platform connecting African businesses with international markets.",
      "Worked across web and mobile with Next.js, React Native and Flutter, adapting the implementation to each interface.",
      "Contributed to frontend changes linked to a reported 20% improvement in page-load speed and SEO effectiveness.",
      "Worked on dashboard usability, rendering approaches and Firebase integrations for core user workflows.",
    ],
  },
  {
    company: "Codemanic Software Solutions",
    role: "Software Engineer (Frontend-focused, Project-based)",
    location: "Lagos, Nigeria",
    start: "08/2023",
    end: "12/2025",
    bullets: [
      "Built and maintained React applications and reusable components, keeping shared UI patterns consistent.",
      "Developed frontend features for digital tools supporting RCCG operations across multiple locations.",
      "Refactored frontend code for maintainability and worked with designers to translate designs into consistent interfaces.",
      "Used testing and code reviews to catch issues earlier, associated with a reported 25% reduction in frontend bugs.",
    ],
  },
  {
    company: "SOS Creativity",
    role: "Software Engineer (Part-time)",
    location: "Manchester, United Kingdom",
    start: "07/2024",
    end: "12/2024",
    bullets: [
      "Built React and Next.js features for dashboards and onboarding, focused on responsive layouts and clear user flows.",
      "Integrated authentication, forms and APIs, and investigated production issues affecting key parts of the user journey.",
    ],
  },
  {
    company: "Africart Store Enterprise",
    role: "Software Engineer — Frontend & Mobile",
    location: "Lagos, Nigeria",
    start: "02/2024",
    end: "12/2024",
    bullets: [
      "Built features for Afribooking's guest and owner mobile apps and admin dashboard for an apartment-booking platform.",
      "Implemented key booking flows: reservation requests, guest–owner price discussions and chat.",
      "Connected the apps to Laravel APIs, managed shared UI state with Context API and reused components for consistency.",
    ],
  },
];

export type EarlierExperienceEntry = {
  role: string;
  org: string;
  location: string;
  start: string;
  end: string;
  summary: string;
};

export const earlierExperience: EarlierExperienceEntry[] = [
  {
    role: "Mobile Engineer (Part-time)",
    org: "Ration Technologies",
    location: "Lagos, Nigeria",
    start: "",
    end: "",
    summary:
      "Built and maintained Ration's customer and vendor mobile apps; connected screens to backend APIs, managed app state and navigation, and fixed issues in key workflows.",
  },
  {
    role: "IT Engineer & Mobile Engineer (Part-time)",
    org: "All Talentz",
    location: "Ohio, USA",
    start: "",
    end: "",
    summary:
      "Mobile development and support for GET ATRA, Savewyze and Restore Capital across property restoration, personal finance and investment, alongside IT support.",
  },
  {
    role: "Software Developer (Intern)",
    org: "Glumia Solutions",
    location: "Lagos, Nigeria",
    start: "03/2024",
    end: "09/2024",
    summary:
      "Built REST APIs and backend logic with Node.js, Express and NestJS (CRUD, business rules); worked with PostgreSQL, MongoDB and TypeORM migrations; documented APIs with Swagger and Postman and supported AWS deployments.",
  },
  {
    role: "Full Stack Developer (Volunteer)",
    org: "Navigating with Neol (NGO)",
    location: "Lagos, Nigeria",
    start: "09/2023",
    end: "12/2024",
    summary:
      "Built full-stack features for outreach and resource-distribution tools; MongoDB and Node.js API work as part of a reported 15% site-performance improvement.",
  },
  {
    role: "Software Developer Trainee",
    org: "Seedbuilders",
    location: "Abuja, Nigeria",
    start: "07/2022",
    end: "12/2022",
    summary:
      "Project-based training building CRUD applications and startup MVPs with JavaScript, React, Node.js and PostgreSQL.",
  },
];
