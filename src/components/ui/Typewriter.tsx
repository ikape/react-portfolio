"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  text,
  startDelay = 0,
  speed = 32,
  className,
}: {
  text: string;
  startDelay?: number;
  speed?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(
      () => {
        if (reduced) {
          setCount(text.length);
          setDone(true);
          return;
        }
        interval = setInterval(() => {
          i += 1;
          setCount(i);
          if (i >= text.length) {
            clearInterval(interval);
            setDone(true);
          }
        }, speed);
      },
      reduced ? 0 : startDelay,
    );

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, startDelay, speed]);

  return (
    <span className={className}>
      {text.slice(0, count)}
      <span
        aria-hidden
        className={`ml-0.5 inline-block h-[0.85em] w-[2px] translate-y-[0.1em] bg-accent align-middle ${
          done ? "animate-blink-caret" : "opacity-100"
        }`}
      />
    </span>
  );
}
