import { FiArrowDown } from "react-icons/fi";
import { site } from "@/data/site";
import { Typewriter } from "@/components/ui/Typewriter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden
        className="animate-float-a pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float-b pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-4xl">
        <p
          className="animate-fade-up-in mb-4 font-mono text-sm text-accent"
          style={{ animationDelay: "0ms" }}
        >
          Hi, my name is
        </p>
        <h1
          className="animate-fade-up-in text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          style={{ animationDelay: "90ms" }}
        >
          {site.name}.
        </h1>
        <h2
          className="animate-fade-up-in mt-2 text-3xl font-semibold tracking-tight text-muted sm:text-5xl"
          style={{ animationDelay: "180ms" }}
        >
          <Typewriter text={`${site.role}.`} startDelay={450} />
        </h2>
        <p
          className="animate-fade-up-in mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "270ms" }}
        >
          {site.tagline}
        </p>
        <div
          className="animate-fade-up-in mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-3 font-mono text-sm text-background transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:opacity-90 active:scale-95"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:border-accent hover:text-accent active:scale-95"
          >
            Get In Touch
            <FiArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
