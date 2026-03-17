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

test("navigates data tabs with Home/End keys", async ({ page }) => {
  await page.goto("/");

  const overviewTab = page.getByRole("tab", { name: "Overview" });
  await overviewTab.focus();
  await overviewTab.press("End");

  const settingsTab = page.getByRole("tab", { name: "Settings" });
  await expect(settingsTab).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("Theme, access control, and preferences.");

  await settingsTab.press("Home");
  await expect(page.getByRole("tab", { name: "Overview" })).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("Project health and adoption summary.");
});

test("sorts demo table from column headers", async ({ page }) => {
  await page.goto("/");

  const table = page.getByRole("table");
  const componentColumn = table.getByRole("columnheader", { name: /Component/ });
  const componentSortButton = table.getByRole("button", { name: /Component/ });
  const firstRow = table.locator("tbody tr").first();

  await expect(componentColumn).toHaveAttribute("aria-sort", "ascending");
  await expect(firstRow).toContainText("Button");

  await componentSortButton.click();
  await expect(componentColumn).toHaveAttribute("aria-sort", "descending");
  await expect(firstRow).toContainText("StreamingCodeBlock");
});

test("paginates release activity feed", async ({ page }) => {
  await page.goto("/");

  const paginationNav = page.getByRole("navigation", { name: "Release feed pagination" });
  await expect(page.getByText("v0.1.0: Button interaction states promoted to production grade.")).toBeVisible();

  await paginationNav.getByRole("button", { name: "Go to page 2" }).click();
  await expect(page.getByText("v0.1.0: Toast timer path stabilized for hover pause lifecycle.")).toBeVisible();
  await expect(page.getByText("v0.1.0: Button interaction states promoted to production grade.")).toBeHidden();
});

test("selects framework from combobox", async ({ page }) => {
  await page.goto("/");

  const combobox = page.getByRole("combobox", { name: "Framework Combobox" });
  await combobox.click();
  await combobox.fill("sv");
  await expect(page.getByRole("listbox", { name: "Framework Combobox options" }).getByRole("option", { name: "Svelte" })).toBeVisible();

  await combobox.press("ArrowDown");
  await combobox.press("Enter");
  await expect(page.getByText("Current selection: svelte")).toBeVisible();
});

test("updates release date with date picker", async ({ page }) => {
  await page.goto("/");

  const datePicker = page.getByLabel("Release Date");
  await datePicker.fill("2026-05-20");
  await expect(page.getByText("Selected date: 2026-05-20")).toBeVisible();
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
