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
      </Reveal>
    </Section>
  );
}
