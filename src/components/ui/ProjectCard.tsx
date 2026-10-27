import Link from "next/link";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent">
      <p className="mb-2 font-mono text-xs text-accent">{project.category}</p>
      <h3 className="mb-3 text-base font-medium text-foreground">{project.title}</h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      {(project.links.length > 0 || project.caseStudy) && (
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} — ${link.label}`}
              className="flex items-center gap-1 text-muted transition-colors hover:text-accent"
            >
              {link.label}
              <FiArrowUpRight size={14} />
            </a>
          ))}
          {project.caseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
            >
              Details
              <FiArrowRight size={14} />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
