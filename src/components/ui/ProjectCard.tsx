import Link from "next/link";
import { FiArrowUpRight, FiArrowRight, FiGithub } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-base font-medium text-foreground">{project.title}</h3>
        <div className="flex shrink-0 gap-3 text-muted">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} on GitHub`}
              className="transition-colors hover:text-accent"
            >
              <FiGithub size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} live site`}
              className="transition-colors hover:text-accent"
            >
              <FiArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      {project.caseStudy && (
        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 flex items-center gap-1.5 font-mono text-sm text-accent transition-opacity hover:opacity-80"
        >
          Read case study
          <FiArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}
