export type Skill = {
  name: string;
  icon?: string;
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Mobile Engineering",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Flutter", icon: "flutter" },
      { name: "Cross-platform architecture" },
      { name: "Navigation & app state" },
      { name: "Offline-capable apps" },
      { name: "Push notifications" },
      { name: "Real-time data sync" },
      { name: "Android & iOS deployment" },
    ],
  },
  {
    label: "Performance & Reliability",
    skills: [
      { name: "Low-end device optimisation" },
      { name: "Startup & rendering performance" },
      { name: "Network request optimisation" },
      { name: "Crash monitoring", icon: "sentry" },
      { name: "Production debugging" },
      { name: "Release management" },
    ],
  },
  {
    label: "Languages & Frontend",
    skills: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Redux / Context API", icon: "redux" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    label: "API & Backend",
    skills: [
      { name: "REST API integration" },
      { name: "Node.js / Express / NestJS" },
      { name: "Auth & authorization" },
      { name: "Payment gateway integration" },
      { name: "PostgreSQL / MongoDB" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    label: "Testing & DevOps",
    skills: [
      { name: "Jest", icon: "jest" },
      { name: "Cypress", icon: "cypress" },
      { name: "Playwright" },
      { name: "GitHub Actions / CI/CD", icon: "githubactions" },
      { name: "Docker", icon: "docker" },
      { name: "AWS" },
      { name: "Git", icon: "git" },
      { name: "Sentry / Swagger / Postman" },
    ],
  },
];
