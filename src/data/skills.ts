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
    label: "Frontend",
    skills: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Next.js (CSR / SSR)", icon: "nextdotjs" },
      { name: "React Native", icon: "react" },
      { name: "Redux / Context API", icon: "redux" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    label: "UI & Accessibility",
    skills: [
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "shadcn/ui" },
      { name: "Responsive, accessible interfaces" },
      { name: "Reusable component systems" },
      { name: "CSS animations" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js / Express.js" },
      { name: "NestJS" },
      { name: "PostgreSQL / TypeORM" },
      { name: "MongoDB" },
      { name: "REST APIs, Swagger, Postman" },
    ],
  },
  {
    label: "Testing & Reliability",
    skills: [
      { name: "Jest", icon: "jest" },
      { name: "Cypress", icon: "cypress" },
      { name: "Playwright" },
      { name: "Sentry monitoring", icon: "sentry" },
      { name: "Production debugging" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions / CI/CD", icon: "githubactions" },
      { name: "Vercel", icon: "vercel" },
      { name: "Netlify", icon: "netlify" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    label: "Practices",
    skills: [
      { name: "Code review" },
      { name: "Auth & payment workflows" },
      { name: "Secure coding" },
      { name: "Agile / Scrum" },
      { name: "Git", icon: "git" },
    ],
  },
];
