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
    label: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Bash", icon: "gnubash" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "React Native", icon: "react" },
      { name: "Redux / Context API", icon: "redux" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Shadcn UI" },
      { name: "Accessibility & responsive design" },
    ],
  },
  {
    label: "Testing & Quality",
    skills: [
      { name: "Jest", icon: "jest" },
      { name: "Cypress", icon: "cypress" },
      { name: "Playwright" },
    ],
  },
  {
    label: "Engineering Practices",
    skills: [
      { name: "CI/CD", icon: "githubactions" },
      { name: "Docker", icon: "docker" },
      { name: "Sentry", icon: "sentry" },
      { name: "Code Review" },
      { name: "Secure Coding" },
      { name: "Agile / Scrum" },
    ],
  },
  {
    label: "Cloud & Tooling",
    skills: [
      { name: "AWS" },
      { name: "Vercel", icon: "vercel" },
      { name: "Netlify", icon: "netlify" },
      { name: "Firebase", icon: "firebase" },
      { name: "Git", icon: "git" },
    ],
  },
];
