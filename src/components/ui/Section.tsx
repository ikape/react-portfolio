import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, index, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className ?? ""}`}>
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-10 flex items-baseline gap-3 font-mono text-lg text-foreground md:text-xl">
          <span className="text-accent">{index}.</span>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
