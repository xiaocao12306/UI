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

test("persists selected theme after reload", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Theme").selectOption("glass");
  await page.reload();

  await expect(page.getByText("Current theme: glass")).toBeVisible();
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
  await palette.getByRole("option", { name: "Open Drawer" }).click();

  await expect(palette).toBeHidden();
  await expect(page.getByRole("dialog").filter({ hasText: "Drawer Example" })).toBeVisible();
});

test("highlights active section in anchor nav", async ({ page }) => {
  await page.goto("/");

  const statesLink = page.getByRole("link", { name: "States" });
  await statesLink.click();
  await expect(statesLink).toHaveAttribute("aria-current", "location");
});

test("opens dropdown using keyboard", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Actions" });
  await trigger.focus();
  await trigger.press("ArrowDown");

  await expect(page.getByRole("menu")).toBeVisible();
  await expect(page.getByRole("menuitem", { name: "Duplicate" })).toBeVisible();
});

test("dismisses toast with escape key", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  await palette.getByRole("option", { name: "Create Project" }).click();

  const toast = page.getByRole("status").filter({ hasText: "Prompt submitted" });
  await expect(toast).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(toast).toBeHidden();
});
