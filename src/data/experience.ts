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
    company: "Value Payment Solutions",
    role: "Software Engineer (Frontend-Focused)",
    location: "Abuja, Nigeria",
    start: "05/2025",
    end: "Present",
    bullets: [
      "Build and maintain frontend interfaces for payment and finance workflows using React and TypeScript, aligned with financial compliance requirements.",
      "Improve frontend load performance and reliability for high-traffic user flows; introduced Sentry monitoring for faster issue detection and resolution.",
      "Contribute to CI/CD workflows, Docker-based deployments, and Bash automation to streamline releases.",
      "Write unit and integration tests with Jest and end-to-end tests with Cypress and Playwright, reducing regressions in production releases.",
      "Review frontend code and contribute to shared engineering standards and best practices.",
    ],
  },
  {
    company: "NITEON",
    role: "Frontend Engineer",
    location: "Remote, United States",
    start: "07/2024",
    end: "01/2026",
    bullets: [
      "Delivered frontend and mobile features using React Native, Flutter, and Next.js.",
      "Led frontend performance improvements, increasing page load speed and SEO effectiveness by 20%.",
      "Worked on rendering strategies and UI optimization for customer-facing dashboards.",
      "Integrated Firebase services and implemented secure frontend data flows.",
    ],
  },
  {
    company: "SOS Creativity",
    role: "Software Engineer (Contract)",
    location: "Manchester, United Kingdom",
    start: "07/2024",
    end: "12/2024",
    bullets: [
      "Designed and maintained scalable frontend architectures using React and Next.js.",
      "Implemented secure frontend patterns for authentication, form handling, and API communication.",
      "Optimized frontend performance for dashboards and user onboarding flows.",
      "Debugged and resolved production frontend issues in high-traffic environments.",
    ],
  },
  {
    company: "Africart Store Enterprise",
    role: "Frontend Engineer",
    location: "Lagos, Nigeria",
    start: "02/2024",
    end: "12/2024",
    bullets: [
      "Designed and developed scalable React and React Native applications for an apartment booking and reservation platform.",
      "Collaborated with backend engineers to integrate Laravel REST APIs and manage application state with Context API.",
      "Improved performance, responsiveness, and maintainability through reusable components and frontend best practices.",
    ],
  },
  {
    company: "Codemanic Software Solutions",
    role: "Software Engineer (Frontend-Focused), Remote",
    location: "Lagos, Nigeria",
    start: "08/2023",
    end: "08/2024",
    bullets: [
      "Built and maintained scalable React applications using reusable component architectures.",
      "Refactored legacy frontend codebases, reducing bug rates by 25% through improved testing practices and code review.",
      "Built and maintained reusable UI components shared across multiple applications.",
      "Led frontend implementation for assigned features, conducted code reviews, and mentored junior developers on React best practices.",
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
    role: "Full Stack Developer (Volunteer)",
    org: "Navigating with Neol (NGO)",
    location: "Lagos, Nigeria",
    start: "09/2023",
    end: "12/2024",
    summary:
      "Developed full-stack systems for NGO digital outreach; improved site performance by 15% via optimized MongoDB and Node.js APIs.",
  },
  {
    role: "Software Developer (Intern)",
    org: "Glumia Solutions",
    location: "Lagos, Nigeria",
    start: "03/2024",
    end: "09/2024",
    summary:
      "Built REST APIs with Node.js, Express, and NestJS; designed and optimized PostgreSQL/MongoDB schemas with TypeORM; contributed to API docs and AWS deployments.",
  },
  {
    role: "Full Stack Developer (Intern)",
    org: "Seedbuilders",
    location: "Abuja, Nigeria",
    start: "07/2022",
    end: "06/2023",
    summary:
      "Intensive full-stack training in JavaScript, React, Node.js, PostgreSQL, and MongoDB; built scalable CRUD applications and startup MVPs.",
  },
];
