import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "./Nav";

function renderNav() {
  return render(
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Nav />
    </ThemeProvider>,
  );
}

describe("Nav", () => {
  it("renders a link for every section", () => {
    renderNav();

    for (const label of ["About", "Experience", "Projects", "Skills", "Contact"]) {
      expect(screen.getAllByRole("link", { name: new RegExp(label, "i") }).length).toBeGreaterThan(
        0,
      );
    }
  });

  it("renders a resume download link", () => {
    renderNav();

    const resumeLinks = screen.getAllByRole("link", { name: /resume/i });
    expect(resumeLinks.length).toBeGreaterThan(0);
    expect(resumeLinks[0]).toHaveAttribute("href", "/resume.pdf");
  });

  it("opens the mobile menu on click", async () => {
    renderNav();

    const toggle = screen.getByRole("button", { name: /open menu/i });
    await userEvent.setup().click(toggle);

    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();
  });
});
