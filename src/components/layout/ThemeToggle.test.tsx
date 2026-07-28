import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "./ThemeToggle";

function renderToggle() {
  return render(
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ThemeToggle />
    </ThemeProvider>,
  );
}

describe("ThemeToggle", () => {
  it("starts in dark mode and switches the document class to light on click", async () => {
    renderToggle();

    const button = await screen.findByRole("button", { name: /switch to light mode/i });
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    await userEvent.setup().click(button);

    await waitFor(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });
    expect(await screen.findByRole("button", { name: /switch to dark mode/i })).toBeInTheDocument();
  });
});
