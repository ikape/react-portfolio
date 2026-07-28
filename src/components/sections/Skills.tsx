import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills & Stack">
      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 60}>
            <div>
              <h3 className="mb-3 font-mono text-sm text-accent">{group.label}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <TechIcon name={skill.icon} />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
