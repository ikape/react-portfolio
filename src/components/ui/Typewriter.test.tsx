import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Typewriter } from "./Typewriter";

describe("Typewriter", () => {
  it("renders the full text immediately when reduced motion is preferred", async () => {
    const original = window.matchMedia;
    window.matchMedia = (query: string) =>
      ({
        matches: query.includes("prefers-reduced-motion"),
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }) as MediaQueryList;

    render(<Typewriter text="Senior Engineer." />);

    expect(await screen.findByText("Senior Engineer.")).toBeInTheDocument();

    window.matchMedia = original;
  });

  it("types the text out over time when motion is allowed", async () => {
    render(<Typewriter text="Hi" startDelay={0} speed={5} />);

    await waitFor(() => {
      expect(screen.getByText("Hi")).toBeInTheDocument();
    });
  });
});
