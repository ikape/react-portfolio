import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" index="03" title="Apps & Products">
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
        Products I&apos;ve built or contributed to across payments, banking, utilities,
        booking and commerce — most are live on the App Store.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 75}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <h3 className="mb-6 mt-14 font-mono text-sm text-muted">More products</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {more.map((project, i) => (
          <Reveal key={project.slug} delay={i * 60}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
