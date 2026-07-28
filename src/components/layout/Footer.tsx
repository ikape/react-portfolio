import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted md:flex-row md:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="transition-colors hover:text-accent"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
