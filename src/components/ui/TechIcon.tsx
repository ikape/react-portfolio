import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGnubash,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiJest,
  SiCypress,
  SiDocker,
  SiGithubactions,
  SiSentry,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  gnubash: SiGnubash,
  react: SiReact,
  nextdotjs: SiNextdotjs,
  redux: SiRedux,
  tailwindcss: SiTailwindcss,
  jest: SiJest,
  cypress: SiCypress,
  docker: SiDocker,
  githubactions: SiGithubactions,
  sentry: SiSentry,
  vercel: SiVercel,
  netlify: SiNetlify,
  firebase: SiFirebase,
  git: SiGit,
};

export function TechIcon({ name, size = 16 }: { name?: string; size?: number }) {
  if (!name) return null;
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon size={size} aria-hidden />;
}
