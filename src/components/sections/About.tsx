import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal>
        <div className="space-y-4">
          {site.bio.map((paragraph) => (
            <p key={paragraph} className="max-w-2xl text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-8">
          {site.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="text-xs leading-snug text-muted">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold text-accent">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
