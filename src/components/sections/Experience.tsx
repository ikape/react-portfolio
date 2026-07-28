import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experience, earlierExperience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <Reveal>
        <div>
          {experience.map((entry) => (
            <TimelineItem key={entry.company} entry={entry} />
          ))}
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-4">
          <h3 className="mb-4 font-mono text-sm text-muted">Earlier Experience</h3>
          <div className="space-y-5">
            {earlierExperience.map((entry) => (
              <div key={entry.role + entry.org} className="text-sm">
                <div className="font-mono text-xs text-muted">
                  {entry.start} — {entry.end}
                </div>
                <p className="font-medium text-foreground">
                  {entry.role} · <span className="font-normal text-muted">{entry.org}</span>
                </p>
                <p className="mt-1 leading-relaxed text-muted">{entry.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
