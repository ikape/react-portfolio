"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { href: "#about", label: "About", index: "01" },
  { href: "#experience", label: "Experience", index: "02" },
  { href: "#projects", label: "Projects", index: "03" },
  { href: "#skills", label: "Skills", index: "04" },
  { href: "#contact", label: "Contact", index: "05" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-medium text-foreground">
          {site.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                <span className="text-accent">{link.index}.</span> {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md border border-accent px-3 py-1.5 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-foreground"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 overflow-y-auto border-t border-border bg-background px-6 py-8 md:hidden">
          <ul className="flex flex-col gap-6">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm text-muted transition-colors hover:text-accent"
                >
                  <span className="text-accent">{link.index}.</span> {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-sm text-accent"
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
