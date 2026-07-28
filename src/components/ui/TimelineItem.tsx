import type { ExperienceEntry } from "@/data/experience";

export function TimelineItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative border-l border-border pb-12 pl-8 last:pb-0">
      <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-accent" />
      <div className="mb-1 font-mono text-xs text-muted">
        {entry.start} — {entry.end}
      </div>
      <h3 className="text-base font-medium text-foreground">
        {entry.role} · <span className="text-muted">{entry.company}</span>
      </h3>
      <div className="mb-4 text-sm text-muted">{entry.location}</div>
      <ul className="space-y-2">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
