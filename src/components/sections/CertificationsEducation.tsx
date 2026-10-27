import { FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { certifications, education } from "@/data/education";

function DocLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent"
    >
      {children}
      <FiArrowUpRight size={13} />
    </a>
  );
}

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
                  <li key={cert.name}>
                    {cert.url ? <DocLink href={cert.url}>{cert.name}</DocLink> : cert.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-mono text-sm text-muted">Education</h3>
              <ul className="space-y-2 text-sm text-muted">
                {education.map((entry) => (
                  <li key={entry.degree}>
                    {entry.url ? (
                      <DocLink href={entry.url}>{entry.degree}</DocLink>
                    ) : (
                      entry.degree
                    )}{" "}
                    — {entry.school}
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
