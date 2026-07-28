import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Tag } from "@/components/ui/Tag";

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

function getProject(slug: string) {
  const project = projects.find((p) => p.slug === slug && p.caseStudy);
  if (!project) return null;
  return project;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.description,
    },
  };
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-28 md:py-36">
      <Link
        href="/#projects"
        className="mb-10 flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
      >
        <FiArrowLeft size={14} />
        Back to projects
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <div className="mt-4 flex gap-4">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            <FiGithub size={14} />
            Repository
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            <FiArrowUpRight size={14} />
            Live site
          </a>
        )}
      </div>

      <section className="mt-12">
        <h2 className="mb-3 font-mono text-sm text-accent">Problem</h2>
        <p className="text-base leading-relaxed text-muted">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 font-mono text-sm text-accent">My Role</h2>
        <p className="text-base leading-relaxed text-muted">{project.role}</p>
      </section>

      {project.architecture && (
        <section className="mt-10">
          <h2 className="mb-3 font-mono text-sm text-accent">Architecture</h2>
          <ul className="space-y-2">
            {project.architecture.map((item) => (
              <li key={item} className="flex gap-2 text-base leading-relaxed text-muted">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="mb-3 font-mono text-sm text-accent">Outcome</h2>
        <p className="text-base leading-relaxed text-muted">{project.outcome}</p>
      </section>
    </div>
  );
}
