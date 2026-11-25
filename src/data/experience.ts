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
    role: "Software Engineer — Mobile & Web",
    location: "Abuja, Nigeria",
    start: "05/2025",
    end: "Present",
    bullets: [
      "Own a significant share of the microfinance banking mobile app's frontend in React Native — feature implementation, API integration, application state and production issues.",
      "Build and maintain React Native interfaces and workflows for banking and payment operations, plus MeterToken, the utility-payment app on the App Store.",
      "Integrate backend services to support transaction processing and business payment collection.",
      "Investigate and resolve issues across mobile navigation, app state, API communication and payment workflows; improve reliability through testing and debugging.",
    ],
  },
  {
    company: "Ration Technologies",
    role: "Mobile Engineer (Part-time)",
    location: "Lagos, Nigeria",
    start: "",
    end: "",
    bullets: [
      "Built and maintained features for separate customer and vendor mobile apps on a food ordering and delivery platform.",
      "Implemented ordering, delivery and vendor-operations workflows; integrated screens with backend services and managed navigation and state.",
      "Resolved issues affecting key customer and vendor workflows and supported testing and maintenance.",
    ],
  },
  {
    company: "All Talentz",
    role: "IT Engineer & Mobile Engineer (Part-time)",
    location: "Ohio, USA",
    start: "",
    end: "",
    bullets: [
      "Contributed to mobile development and maintenance across GET ATRA, Savewyze and Restore Capital.",
      "GET ATRA: property damage documentation and insurance claims. Savewyze: savings, wallet transfers, gift cards and utility payments.",
      "Supported Restore Capital through technical troubleshooting and product improvements.",
    ],
  },
  {
    company: "Africart Store Enterprise",
    role: "Software Engineer — Frontend & Mobile",
    location: "Lagos, Nigeria",
    start: "02/2024",
    end: "12/2024",
    bullets: [
      "Built features for Afribooking's guest and property-owner mobile apps and the admin dashboard.",
      "Implemented booking requests, reservation management, guest–owner price discussions and in-app chat.",
      "Integrated the apps with Laravel APIs, managed state with Context API and built reusable components shared across mobile screens.",
    ],
  },
  {
    company: "NITEON",
    role: "Frontend Engineer (Project-based)",
    location: "Boulder, Colorado, USA",
    start: "07/2024",
    end: "01/2026",
    bullets: [
      "Worked across web and mobile product areas of a B2B marketplace using Next.js, React Native and Flutter.",
      "Built reusable interfaces and features for marketplace and administration workflows, with Firebase integrations.",
      "Improved dashboard usability, rendering and frontend performance, linked to a reported 20% improvement in page-load speed and SEO effectiveness.",
    ],
  },
  {
    company: "SOS Creativity",
    role: "Software Engineer (Part-time)",
    location: "Manchester, United Kingdom",
    start: "07/2024",
    end: "12/2024",
    bullets: [
      "Built React and Next.js features for dashboards and onboarding, with authentication, APIs and forms.",
      "Investigated production issues and built responsive, reusable interfaces.",
    ],
  },
  {
    company: "Codemanic Software Solutions",
    role: "Software Engineer (Frontend-focused, Project-based)",
    location: "Lagos, Nigeria",
    start: "08/2023",
    end: "12/2025",
    bullets: [
      "Built and maintained React applications and reusable components, including digital platforms supporting RCCG operations across locations.",
      "Refactored for maintainability; used testing, debugging and code reviews, associated with a reported 25% reduction in frontend bugs.",
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
