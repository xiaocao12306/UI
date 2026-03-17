import { expect, test } from "@playwright/test";

test("renders demo homepage", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Aurora UI Demo" })).toBeVisible();
  await expect(page.getByText("Token-first React component library")).toBeVisible();
});

test("switches theme from selector", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Theme").selectOption("core-dark");
  await expect(page.getByText("Current theme: core-dark")).toBeVisible();
});

test("opens command palette with keyboard shortcut", async ({ page }) => {
  await page.goto("/");

  await page.evaluate(() => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true }));
  });

  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("button", { name: "Close dialog" })).toBeVisible();
});

test("opens and dismisses dialog with keyboard", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open Dialog" }).click();
  const dialog = page.getByRole("dialog").filter({ hasText: "Dialog Example" });
  await expect(dialog).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});

test("filters command palette and triggers drawer action", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  await expect(palette).toBeVisible();

  await palette.getByPlaceholder("Search commands...").fill("drawer");
  await palette.getByRole("button", { name: "Open Drawer" }).click();

  await expect(palette).toBeHidden();
  await expect(page.getByRole("dialog").filter({ hasText: "Drawer Example" })).toBeVisible();
});
