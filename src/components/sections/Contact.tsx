import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function Contact() {
  return (
    <Section id="contact" index="05" title="Get In Touch" className="pb-28">
      <Reveal>
        <div className="max-w-xl">
          <p className="mb-8 text-base leading-relaxed text-muted">
            I&apos;m currently open to new opportunities, especially with teams building
            in fintech and payments. The fastest way to reach me is email.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-md bg-accent px-5 py-3 font-mono text-sm text-background transition-opacity hover:opacity-90"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
