import { Reveal } from "@/components/ui/Reveal";
import { certifications, education } from "@/data/education";

export function CertificationsEducation() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 font-mono text-sm text-muted">Certifications</h3>
              <ul className="space-y-2 text-sm text-muted">
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-mono text-sm text-muted">Education</h3>
              <ul className="space-y-2 text-sm text-muted">
                {education.map((entry) => (
                  <li key={entry.degree}>
                    {entry.degree} — {entry.school}
                    <span className="block font-mono text-xs">
                      {entry.start} – {entry.end}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
