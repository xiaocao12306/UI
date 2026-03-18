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

test("toggles live updates switch via pointer and keyboard", async ({ page }) => {
  await page.goto("/");

  const control = page.getByRole("switch", { name: "Live updates" });
  await expect(control).toHaveAttribute("aria-checked", "true");

  await control.click();
  await expect(control).toHaveAttribute("aria-checked", "false");

  await control.focus();
  await control.press("Space");
  await expect(control).toHaveAttribute("aria-checked", "true");
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

test("opens and dismisses drawer with keyboard", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open Drawer" }).click();
  const drawer = page.getByRole("dialog", { name: "Drawer Example" });
  await expect(drawer).toBeVisible();
  await expect(drawer).toContainText("Contextual panel for filters, details, and quick actions.");

  await page.keyboard.press("Escape");
  await expect(drawer).toBeHidden();
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

test("keeps command palette open when blocking dismiss mode is enabled", async ({ page }) => {
  await page.goto("/");

  const blockingSwitch = page.getByRole("switch", { name: "Block palette dismiss gestures" });
  await blockingSwitch.click();
  await expect(blockingSwitch).toHaveAttribute("aria-checked", "true");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  await expect(palette).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(palette).toBeVisible();

  await page.mouse.click(8, 8);
  await expect(palette).toBeVisible();

  await palette.getByRole("button", { name: "Close dialog" }).click();
  await expect(palette).toBeHidden();
});

test("keeps command palette open after command select in persistent mode", async ({ page }) => {
  await page.goto("/");

  const persistentSwitch = page.getByRole("switch", { name: "Keep palette open after command select" });
  await persistentSwitch.click();
  await expect(persistentSwitch).toHaveAttribute("aria-checked", "true");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  await expect(palette).toBeVisible();

  await palette.getByPlaceholder("Search commands...").fill("create");
  await palette.getByRole("option", { name: "Create Project" }).click();

  await expect(palette).toBeVisible();
  await expect(page.getByRole("status").filter({ hasText: "Prompt submitted" })).toBeVisible();

  await palette.getByRole("button", { name: "Close dialog" }).click();
  await expect(palette).toBeHidden();
});

test("does not close command palette when disabled command is clicked", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  await expect(palette).toBeVisible();

  await palette.getByPlaceholder("Search commands...").fill("archive");
  const disabledOption = palette.getByRole("option", { name: "Archive Workspace" });
  await expect(disabledOption).toHaveAttribute("aria-disabled", "true");
  await palette.getByPlaceholder("Search commands...").press("Enter");

  await expect(palette).toBeVisible();
  await expect(palette.getByRole("status")).toContainText('No enabled commands match "archive".');
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
  const overviewPanel = page.locator(`#${await overviewTab.getAttribute("aria-controls")}`);
  await overviewTab.focus();
  await overviewTab.press("End");

  const settingsTab = page.getByRole("tab", { name: "Settings" });
  const settingsPanel = page.locator(`#${await settingsTab.getAttribute("aria-controls")}`);
  await expect(settingsTab).toBeFocused();
  await expect(settingsPanel).toContainText("Theme, access control, and preferences.");
  await expect(settingsPanel).not.toHaveAttribute("hidden");

  await settingsTab.press("Home");
  await expect(page.getByRole("tab", { name: "Overview" })).toBeFocused();
  await expect(overviewPanel).toContainText("Project health and adoption summary.");
  await expect(overviewPanel).not.toHaveAttribute("hidden");
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

test("sorts demo table with keyboard activation", async ({ page }) => {
  await page.goto("/");

  const table = page.getByRole("table");
  const componentColumn = table.getByRole("columnheader", { name: /Component/ });
  const componentSortButton = table.getByRole("button", { name: /Component/ });
  const firstRow = table.locator("tbody tr").first();

  await componentSortButton.focus();
  await componentSortButton.press("Enter");
  await expect(componentColumn).toHaveAttribute("aria-sort", "descending");
  await expect(firstRow).toContainText("StreamingCodeBlock");

  await componentSortButton.press("Space");
  await expect(componentColumn).toHaveAttribute("aria-sort", "ascending");
  await expect(firstRow).toContainText("Button");
});

test("toggles table loading state and disables sort controls", async ({ page }) => {
  await page.goto("/");

  const table = page.getByRole("table", { name: "Component readiness metrics" });
  const loadingToggle = page.getByRole("button", { name: "Toggle table loading" });

  await loadingToggle.click();
  await expect(table).toHaveAttribute("aria-busy", "true");
  await expect(page.getByText("Syncing component readiness metrics...")).toBeVisible();
  await expect(table.getByRole("button", { name: "Component sort descending" })).toBeDisabled();
  await expect(table.getByRole("cell", { name: "Button" })).toHaveCount(0);

  await loadingToggle.click();
  await expect(table).not.toHaveAttribute("aria-busy");
  await expect(table.getByRole("button", { name: "Component sort descending" })).toBeEnabled();
  await expect(table.getByRole("cell", { name: "Button" })).toBeVisible();
});

test("shows empty table state and keeps sort controls disabled", async ({ page }) => {
  await page.goto("/");

  const table = page.getByRole("table", { name: "Component readiness metrics" });
  const emptyToggle = page.getByRole("button", { name: "Toggle table empty state" });

  await emptyToggle.click();
  await expect(page.getByText("No component readiness metrics yet.")).toBeVisible();
  await expect(table.getByRole("button", { name: "Component sort descending" })).toBeDisabled();
  await expect(table.getByRole("cell", { name: "Button" })).toHaveCount(0);

  await emptyToggle.click();
  await expect(table.getByRole("cell", { name: "Button" })).toBeVisible();
});

test("keeps manual tabs panel stable until Enter activation", async ({ page }) => {
  await page.goto("/");

  const manualTablist = page.getByRole("tablist", { name: "Manual release workflow tabs" });
  const draftTab = manualTablist.getByRole("tab", { name: "Draft" });
  const reviewTab = manualTablist.getByRole("tab", { name: "Review" });
  const draftPanel = page.locator(`#${await draftTab.getAttribute("aria-controls")}`);
  const reviewPanel = page.locator(`#${await reviewTab.getAttribute("aria-controls")}`);

  await draftTab.focus();
  await draftTab.press("ArrowRight");
  await expect(reviewTab).toBeFocused();
  await expect(draftPanel).toContainText("Draft checklist and scoped API notes.");
  await expect(draftPanel).not.toHaveAttribute("hidden");
  await expect(reviewPanel).toHaveAttribute("hidden");

  await reviewTab.press("Enter");
  await expect(reviewPanel).toContainText("Cross-team review and accessibility signoff.");
  await expect(reviewPanel).not.toHaveAttribute("hidden");
});

test("keeps manual tabs panel stable until Space activation", async ({ page }) => {
  await page.goto("/");

  const manualTablist = page.getByRole("tablist", { name: "Manual release workflow tabs" });
  const draftTab = manualTablist.getByRole("tab", { name: "Draft" });
  const shipTab = manualTablist.getByRole("tab", { name: "Ship" });
  const draftPanel = page.locator(`#${await draftTab.getAttribute("aria-controls")}`);
  const shipPanel = page.locator(`#${await shipTab.getAttribute("aria-controls")}`);

  await draftTab.focus();
  await draftTab.press("End");
  await expect(shipTab).toBeFocused();
  await expect(draftPanel).toContainText("Draft checklist and scoped API notes.");
  await expect(draftPanel).not.toHaveAttribute("hidden");
  await expect(shipPanel).toHaveAttribute("hidden");

  await shipTab.press("Space");
  await expect(shipPanel).toContainText("Tag release, publish packages, and announce changelog.");
  await expect(shipPanel).not.toHaveAttribute("hidden");
});

test("keeps manual vertical tabs panel stable until Enter activation", async ({ page }) => {
  await page.goto("/");

  const manualVerticalTablist = page.getByRole("tablist", { name: "Manual vertical release tabs" });
  const backlogTab = manualVerticalTablist.getByRole("tab", { name: "Backlog" });
  const shipTab = manualVerticalTablist.getByRole("tab", { name: "Ship" });
  const backlogPanel = page.locator(`#${await backlogTab.getAttribute("aria-controls")}`);
  const shipPanel = page.locator(`#${await shipTab.getAttribute("aria-controls")}`);

  await backlogTab.focus();
  await backlogTab.press("ArrowDown");
  await expect(shipTab).toBeFocused();
  await expect(backlogPanel).toContainText("Backlog scope and release intent.");
  await expect(backlogPanel).not.toHaveAttribute("hidden");
  await expect(shipPanel).toHaveAttribute("hidden");

  await shipTab.press("Enter");
  await expect(shipPanel).toContainText("Ship checklist and release notes.");
  await expect(shipPanel).not.toHaveAttribute("hidden");
});

test("navigates vertical tabs with ArrowDown and ArrowUp", async ({ page }) => {
  await page.goto("/");

  const verticalTablist = page.getByRole("tablist", { name: "Vertical release stage tabs" });
  const backlogTab = verticalTablist.getByRole("tab", { name: "Backlog" });
  const inProgressTab = verticalTablist.getByRole("tab", { name: "In Progress" });
  const backlogPanel = page.locator(`#${await backlogTab.getAttribute("aria-controls")}`);
  const inProgressPanel = page.locator(`#${await inProgressTab.getAttribute("aria-controls")}`);

  await backlogTab.focus();
  await backlogTab.press("ArrowDown");
  await expect(inProgressTab).toBeFocused();
  await expect(inProgressPanel).toContainText("Implementation and QA checkpoints.");
  await expect(inProgressPanel).not.toHaveAttribute("hidden");

  await inProgressTab.press("ArrowUp");
  await expect(backlogTab).toBeFocused();
  await expect(backlogPanel).toContainText("Backlog scope and release intent.");
  await expect(backlogPanel).not.toHaveAttribute("hidden");
});

test("paginates release activity feed", async ({ page }) => {
  await page.goto("/");

  const paginationNav = page.getByRole("navigation", { name: "Release feed pagination" });
  await expect(page.getByText("v0.1.0: Button interaction states promoted to production grade.")).toBeVisible();

  await paginationNav.getByRole("button", { name: "Go to page 2" }).click();
  await expect(page.getByText("v0.1.0: Toast timer path stabilized for hover pause lifecycle.")).toBeVisible();
  await expect(page.getByText("v0.1.0: Button interaction states promoted to production grade.")).toBeHidden();
});

test("navigates release pagination with Home/End shortcuts", async ({ page }) => {
  await page.goto("/");

  const paginationNav = page.getByRole("navigation", { name: "Release feed pagination" });
  const firstPageButton = paginationNav.getByRole("button", { name: "Current page, 1" });
  await firstPageButton.focus();
  await firstPageButton.press("End");

  await expect(page.getByText("v0.1.0: Release dry-run evidence recorded for all npm packages.")).toBeVisible();
  await expect(page.getByText("v0.1.0: Button interaction states promoted to production grade.")).toBeHidden();

  await paginationNav.getByRole("button", { name: "Current page, 3" }).press("Home");
  await expect(page.getByText("v0.1.0: Button interaction states promoted to production grade.")).toBeVisible();
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

test("returns dropdown trigger focus on Escape dismiss", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Actions" });
  await trigger.click();
  await expect(page.getByRole("menu")).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.getByRole("menu")).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("keeps outside pointer target focus after dropdown dismiss", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Actions" });
  const outsideTarget = page.getByLabel("Overlay outside focus target");

  await trigger.click();
  await expect(page.getByRole("menu")).toBeVisible();

  await outsideTarget.click();
  await expect(page.getByRole("menu")).toBeHidden();
  await expect(outsideTarget).toBeFocused();
});

test("tabs out of dropdown menu and moves focus to next control", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Actions" });
  const nextButton = page.getByRole("button", { name: "Open Dialog" });

  await trigger.focus();
  await trigger.press("ArrowDown");
  await expect(page.getByRole("menu")).toBeVisible();

  await page.keyboard.press("Tab");
  await expect(page.getByRole("menu")).toBeHidden();
  await expect(nextButton).toBeFocused();
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

test("dismisses stacked toasts from top-most to oldest on Escape", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Trigger stacked toasts" }).click();

  const firstToast = page.getByRole("status", { name: "Sync started" });
  const secondToast = page.getByRole("status", { name: "Sync completed" });
  await expect(firstToast).toBeVisible();
  await expect(secondToast).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(secondToast).toBeHidden();
  await expect(firstToast).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(firstToast).toBeHidden();
});

test("keeps blocking toast open on Escape until explicit dismiss", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Trigger blocking toast" }).click();
  const toast = page.getByRole("status", { name: "Release approval required notification" });
  await expect(toast).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Dismiss blocking notice" }).click();
  await expect(toast).toBeHidden();
});

test("updates ai section prompt and reasoning trace", async ({ page }) => {
  await page.goto("/");

  const aiSection = page.locator("#ai-components");
  const promptInput = aiSection.getByRole("textbox", { name: "Prompt input" });

  await promptInput.fill("Generate release rollout checklist");
  await promptInput.press("Control+Enter");

  await expect(aiSection.getByRole("article", { name: "User message" })).toContainText(
    "Generate release rollout checklist"
  );

  const reasoningToggle = aiSection.getByRole("button", { name: /Model reasoning/ });
  await expect(reasoningToggle).toHaveAttribute("aria-expanded", "false");
  await reasoningToggle.click();
  await expect(reasoningToggle).toHaveAttribute("aria-expanded", "true");
  await expect(aiSection.getByText("Generate form schema and OTP fallback path.")).toBeVisible();

  await expect(aiSection.locator("code")).toContainText("export function OtpFallback()", { timeout: 5000 });
  await expect(aiSection.locator('[aria-busy="true"]').filter({ hasText: "OtpFallback" })).toHaveCount(0);
});
