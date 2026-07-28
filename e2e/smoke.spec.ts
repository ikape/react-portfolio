import { test, expect } from "@playwright/test";

test("homepage renders the hero and nav", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Isaac Ikape");
  await expect(page.getByRole("link", { name: /view work/i })).toBeVisible();
  await expect(page.getByRole("navigation")).toBeVisible();
});

test("theme toggle switches between dark and light mode", async ({ page }) => {
  await page.goto("/");

  const html = page.locator("html");
  await expect(html).toHaveClass(/dark/);

  await page.getByRole("button", { name: /switch to light mode/i }).click();
  await expect(html).not.toHaveClass(/dark/);
});

test("mobile nav opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: /open menu/i }).click();
  await expect(page.getByRole("link", { name: /about/i })).toBeVisible();

  await page.getByRole("button", { name: /close menu/i }).click();
  await expect(page.getByRole("button", { name: /open menu/i })).toBeVisible();
});

test("nav links scroll to their matching section", async ({ page }) => {
  await page.goto("/");

  for (const section of ["about", "experience", "projects", "skills", "contact"]) {
    await page
      .locator("nav")
      .getByRole("link", { name: new RegExp(section, "i") })
      .first()
      .click();
    await expect(page).toHaveURL(new RegExp(`#${section}$`));
    await expect(page.locator(`#${section}`)).toBeVisible();
  }
});
