import { expect, test, type Page } from "@playwright/test";

const surfaceDefaultByTheme = {
  "core-light": "#ffffff",
  "core-dark": "#0b1220",
  glass: "#ffffff",
  "neo-brutal": "#fffde7"
} as const;

async function readProviderTheme(page: Page) {
  return page.locator("[data-aurora-provider]").getAttribute("data-aurora-theme");
}

async function readProviderCssVariable(page: Page, variableName: string) {
  return page
    .locator("[data-aurora-provider]")
    .evaluate(
      (node, variable) => getComputedStyle(node as HTMLElement).getPropertyValue(variable).trim(),
      variableName
    );
}

test("renders demo homepage", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Aurora UI Demo" })).toBeVisible();
  await expect(page.getByText("Token-first React component library")).toBeVisible();
});

test("supports keyboard skip link jump to component sections", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to component sections" });
  await expect(skipLink).toBeVisible();

  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#basic-components$/);
  await expect(page.getByRole("heading", { name: "Basic Components" })).toBeVisible();
});

test("switches theme from selector", async ({ page }) => {
  await page.goto("/");

  await expect(await readProviderTheme(page)).toBe("core-light");
  await expect(await readProviderCssVariable(page, "--aurora-surface-default")).toBe(
    surfaceDefaultByTheme["core-light"]
  );

  await page.getByLabel("Theme").selectOption("core-dark");
  await expect(page.getByText("Current theme: core-dark")).toBeVisible();
  await expect(await readProviderTheme(page)).toBe("core-dark");
  await expect(await readProviderCssVariable(page, "--aurora-surface-default")).toBe(
    surfaceDefaultByTheme["core-dark"]
  );
});

test("persists selected theme after reload", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Theme").selectOption("glass");
  await page.reload();

  await expect(page.getByText("Current theme: glass")).toBeVisible();
  await expect(await readProviderTheme(page)).toBe("glass");
  await expect(await readProviderCssVariable(page, "--aurora-surface-default")).toBe(
    surfaceDefaultByTheme.glass
  );
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
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true })
    );
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

test("keeps dialog open when Escape is preempted by a global handler", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open Dialog" }).click();
  const dialog = page.getByRole("dialog").filter({ hasText: "Dialog Example" });
  await expect(dialog).toBeVisible();

  await page.evaluate(() => {
    const preemptEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };
    (
      window as typeof window & { __demoPreemptEscape?: (event: KeyboardEvent) => void }
    ).__demoPreemptEscape = preemptEscape;
    document.addEventListener("keydown", preemptEscape, true);
  });

  await page.keyboard.press("Escape");
  await expect(dialog).toBeVisible();

  await page.evaluate(() => {
    const globalWindow = window as typeof window & {
      __demoPreemptEscape?: (event: KeyboardEvent) => void;
    };
    if (globalWindow.__demoPreemptEscape) {
      document.removeEventListener("keydown", globalWindow.__demoPreemptEscape, true);
      delete globalWindow.__demoPreemptEscape;
    }
  });

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});

test("reports dialog close reason telemetry for close button, Escape, and outside pointer", async ({
  page
}) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Open Dialog" });
  const telemetry = page.getByTestId("dialog-close-reason-demo");
  const traceTelemetry = page.getByTestId("dialog-close-trace-demo");
  const dialog = page.getByRole("dialog").filter({ hasText: "Dialog Example" });

  await expect(telemetry).toHaveText("none");
  await expect(traceTelemetry).toHaveText("none");

  await trigger.click();
  await expect(dialog).toBeVisible();
  await page.getByRole("button", { name: "Close dialog" }).click();
  await expect(dialog).toBeHidden();
  await expect(telemetry).toHaveText("close-button");
  await expect(traceTelemetry).toHaveText("reason:close-button -> open:false");

  await trigger.click();
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(telemetry).toHaveText("escape-key");
  await expect(traceTelemetry).toHaveText("reason:escape-key -> open:false");

  await trigger.click();
  await expect(dialog).toBeVisible();
  await page.mouse.click(8, 8);
  await expect(dialog).toBeHidden();
  await expect(telemetry).toHaveText("outside-pointer");
  await expect(traceTelemetry).toHaveText("reason:outside-pointer -> open:false");
});

test("keeps dialog open on non-primary outside pointer interaction", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open Dialog" }).click();
  const dialog = page.getByRole("dialog").filter({ hasText: "Dialog Example" });
  await expect(dialog).toBeVisible();

  await page.mouse.click(8, 8, { button: "right" });
  await expect(dialog).toBeVisible();

  await page.mouse.click(8, 8);
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

test("keeps drawer open when Escape is preempted by a global handler", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open Drawer" }).click();
  const drawer = page.getByRole("dialog", { name: "Drawer Example" });
  await expect(drawer).toBeVisible();

  await page.evaluate(() => {
    const preemptEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };
    (
      window as typeof window & { __demoPreemptEscape?: (event: KeyboardEvent) => void }
    ).__demoPreemptEscape = preemptEscape;
    document.addEventListener("keydown", preemptEscape, true);
  });

  await page.keyboard.press("Escape");
  await expect(drawer).toBeVisible();

  await page.evaluate(() => {
    const globalWindow = window as typeof window & {
      __demoPreemptEscape?: (event: KeyboardEvent) => void;
    };
    if (globalWindow.__demoPreemptEscape) {
      document.removeEventListener("keydown", globalWindow.__demoPreemptEscape, true);
      delete globalWindow.__demoPreemptEscape;
    }
  });

  await page.keyboard.press("Escape");
  await expect(drawer).toBeHidden();
});

test("reports drawer close reason telemetry for close button, Escape, and outside pointer", async ({
  page
}) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Open Drawer" });
  const telemetry = page.getByTestId("drawer-close-reason-demo");
  const traceTelemetry = page.getByTestId("drawer-close-trace-demo");
  const drawerDialog = page.getByRole("dialog", { name: "Drawer Example" });

  await expect(telemetry).toHaveText("none");
  await expect(traceTelemetry).toHaveText("none");

  await trigger.click();
  await expect(drawerDialog).toBeVisible();
  await page.getByRole("button", { name: "Close drawer" }).click();
  await expect(drawerDialog).toBeHidden();
  await expect(telemetry).toHaveText("close-button");
  await expect(traceTelemetry).toHaveText("reason:close-button -> open:false");

  await trigger.click();
  await expect(drawerDialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(drawerDialog).toBeHidden();
  await expect(telemetry).toHaveText("escape-key");
  await expect(traceTelemetry).toHaveText("reason:escape-key -> open:false");

  await trigger.click();
  await expect(drawerDialog).toBeVisible();
  await page.mouse.click(8, 8);
  await expect(drawerDialog).toBeHidden();
  await expect(telemetry).toHaveText("outside-pointer");
  await expect(traceTelemetry).toHaveText("reason:outside-pointer -> open:false");
});

test("keeps drawer open on non-primary outside pointer interaction", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Open Drawer" });
  const telemetry = page.getByTestId("drawer-close-reason-demo");
  const drawerDialog = page.getByRole("dialog", { name: "Drawer Example" });

  await expect(telemetry).toHaveText("none");
  await trigger.click();
  await expect(drawerDialog).toBeVisible();

  await page.mouse.click(8, 8, { button: "right" });
  await expect(drawerDialog).toBeVisible();
  await expect(telemetry).toHaveText("none");

  await page.mouse.click(8, 8);
  await expect(drawerDialog).toBeHidden();
  await expect(telemetry).toHaveText("outside-pointer");
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

test("resets command palette query telemetry after close", async ({ page }) => {
  await page.goto("/");

  const telemetry = page.getByTestId("palette-query-telemetry");
  await expect(telemetry).toHaveText("N/A");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  await expect(palette).toBeVisible();

  await palette.getByPlaceholder("Search commands...").fill("drawer");
  await expect(telemetry).toHaveText("drawer");

  await palette.getByRole("option", { name: "Open Drawer" }).click();
  await expect(palette).toBeHidden();
  await expect(telemetry).toHaveText("N/A");
});

test("reports command palette close reason telemetry for all dismiss paths", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Command Palette" });
  const telemetry = page.getByTestId("palette-close-reason-telemetry");
  const traceTelemetry = page.getByTestId("palette-close-trace-demo");
  const paletteDialog = page.getByRole("dialog").filter({ hasText: "Command Palette" });

  await expect(telemetry).toHaveText("none");
  await expect(traceTelemetry).toHaveText("none");

  await trigger.click();
  await expect(paletteDialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(paletteDialog).toBeHidden();
  await expect(telemetry).toHaveText("escape-key");
  await expect(traceTelemetry).toHaveText("reason:escape-key -> open:false");

  await trigger.click();
  await expect(paletteDialog).toBeVisible();
  await paletteDialog.getByRole("option", { name: "Create Project" }).click();
  await expect(paletteDialog).toBeHidden();
  await expect(telemetry).toHaveText("item-select");
  await expect(traceTelemetry).toHaveText("select -> reason:item-select -> open:false");

  await trigger.click();
  await expect(paletteDialog).toBeVisible();
  await paletteDialog.getByRole("button", { name: "Close dialog" }).click();
  await expect(paletteDialog).toBeHidden();
  await expect(telemetry).toHaveText("close-button");
  await expect(traceTelemetry).toHaveText("reason:close-button -> open:false");

  await trigger.click();
  await expect(paletteDialog).toBeVisible();
  await page.mouse.click(8, 8);
  await expect(paletteDialog).toBeHidden();
  await expect(telemetry).toHaveText("outside-pointer");
  await expect(traceTelemetry).toHaveText("reason:outside-pointer -> open:false");
});

test("keeps command palette open on non-primary outside pointer interaction", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Command Palette" });
  const telemetry = page.getByTestId("palette-close-reason-telemetry");
  const traceTelemetry = page.getByTestId("palette-close-trace-demo");
  const paletteDialog = page.getByRole("dialog").filter({ hasText: "Command Palette" });

  await expect(telemetry).toHaveText("none");
  await expect(traceTelemetry).toHaveText("none");
  await trigger.click();
  await expect(paletteDialog).toBeVisible();

  await page.mouse.click(8, 8, { button: "right" });
  await expect(paletteDialog).toBeVisible();
  await expect(telemetry).toHaveText("none");
  await expect(traceTelemetry).toHaveText("none");

  await page.mouse.click(8, 8);
  await expect(paletteDialog).toBeHidden();
  await expect(telemetry).toHaveText("outside-pointer");
  await expect(traceTelemetry).toHaveText("reason:outside-pointer -> open:false");
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

test("guards command palette dismiss through event hooks when enabled", async ({ page }) => {
  await page.goto("/");

  const guardSwitch = page.getByRole("switch", { name: "Guard palette dismiss via event hooks" });
  await guardSwitch.click();
  await expect(guardSwitch).toHaveAttribute("aria-checked", "true");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  await expect(palette).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(palette).toBeVisible();

  await page.mouse.click(8, 8);
  await expect(palette).toBeVisible();

  await palette.getByRole("button", { name: "Close dialog" }).click();
  await expect(palette).toBeHidden();

  await guardSwitch.click();
  await expect(guardSwitch).toHaveAttribute("aria-checked", "false");
  await page.getByRole("button", { name: "Command Palette" }).click();
  await expect(palette).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(palette).toBeHidden();
});

test("keeps command palette open after command select in persistent mode", async ({ page }) => {
  await page.goto("/");

  const persistentSwitch = page.getByRole("switch", {
    name: "Keep palette open after command select"
  });
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

test("clears palette query on first Escape before dismiss when enabled", async ({ page }) => {
  await page.goto("/");

  const escapeQuerySwitch = page.getByRole("switch", { name: "Escape clears palette query first" });
  await expect(escapeQuerySwitch).toHaveAttribute("aria-checked", "true");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  const searchInput = palette.getByRole("combobox", { name: "Search commands" });

  await searchInput.fill("drawer");
  await page.keyboard.press("Escape");
  await expect(palette).toBeVisible();
  await expect(searchInput).toHaveValue("");

  await page.keyboard.press("Escape");
  await expect(palette).toBeHidden();

  await escapeQuerySwitch.click();
  await expect(escapeQuerySwitch).toHaveAttribute("aria-checked", "false");
  await page.getByRole("button", { name: "Command Palette" }).click();
  await expect(palette).toBeVisible();
  await searchInput.fill("drawer");
  await page.keyboard.press("Escape");
  await expect(palette).toBeHidden();
});

test("ignores command palette navigation and selection keys during IME composition", async ({
  page
}) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  const searchInput = palette.getByRole("combobox", { name: "Search commands" });

  await expect(palette).toBeVisible();
  const activeBefore = await searchInput.getAttribute("aria-activedescendant");

  await searchInput.evaluate((element) => {
    const event = new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true });
    Object.defineProperty(event, "isComposing", { value: true });
    Object.defineProperty(event, "keyCode", { value: 229 });
    element.dispatchEvent(event);
  });
  await expect(searchInput).toHaveAttribute("aria-activedescendant", activeBefore ?? "");

  await searchInput.evaluate((element) => {
    const event = new KeyboardEvent("keydown", { key: "Enter", bubbles: true });
    Object.defineProperty(event, "isComposing", { value: true });
    Object.defineProperty(event, "keyCode", { value: 229 });
    element.dispatchEvent(event);
  });
  await expect(palette).toBeVisible();

  await searchInput.press("ArrowDown");
  await searchInput.press("Enter");
  await expect(palette).toBeHidden();
  await expect(page.getByRole("dialog", { name: "Dialog Example" })).toBeVisible();
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

test("keeps command palette activedescendant mapped to an enabled option after query refine", async ({
  page
}) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  const searchInput = palette.getByRole("combobox", { name: "Search commands" });
  await expect(palette).toBeVisible();

  await searchInput.fill("open");
  await expect(searchInput).toHaveAttribute("aria-activedescendant", /option-/);

  await searchInput.fill("settings");
  const activeId = await searchInput.getAttribute("aria-activedescendant");
  expect(activeId).toBeTruthy();

  const activeOptionMeta = await page.evaluate((id) => {
    if (!id) {
      return { exists: false, disabled: "true" };
    }
    const option = document.getElementById(id);
    return {
      exists: Boolean(option),
      disabled: option?.getAttribute("aria-disabled") ?? null
    };
  }, activeId);

  expect(activeOptionMeta.exists).toBeTruthy();
  expect(activeOptionMeta.disabled).not.toBe("true");
});

test("jumps command palette active option with PageDown/PageUp while skipping disabled commands", async ({
  page
}) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  const searchInput = palette.getByRole("combobox", { name: "Search commands" });
  await expect(palette).toBeVisible();
  await expect(searchInput).toHaveAttribute(
    "aria-keyshortcuts",
    "ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"
  );

  await expect(palette.getByRole("option", { name: "Open Settings" })).toHaveAttribute("aria-selected", "true");
  await searchInput.press("PageDown");
  await expect(palette.getByRole("option", { name: "Run Tests" })).toHaveAttribute("aria-selected", "true");
  await expect(palette.getByRole("option", { name: "Archive Workspace" })).toHaveAttribute("aria-selected", "false");

  await searchInput.press("PageUp");
  await expect(palette.getByRole("option", { name: "Open Settings" })).toHaveAttribute("aria-selected", "true");
});

test("keeps command palette open when Escape is preempted by a global handler", async ({
  page
}) => {
  await page.goto("/");

  await page.evaluate(() => {
    const preemptEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };
    (
      window as typeof window & { __demoPreemptEscape?: (event: KeyboardEvent) => void }
    ).__demoPreemptEscape = preemptEscape;
    document.addEventListener("keydown", preemptEscape, true);
  });

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  await expect(palette).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(palette).toBeVisible();

  await page.evaluate(() => {
    const globalWindow = window as typeof window & {
      __demoPreemptEscape?: (event: KeyboardEvent) => void;
    };
    if (globalWindow.__demoPreemptEscape) {
      document.removeEventListener("keydown", globalWindow.__demoPreemptEscape, true);
      delete globalWindow.__demoPreemptEscape;
    }
  });

  await page.keyboard.press("Escape");
  await expect(palette).toBeHidden();
});

test("highlights active section in anchor nav", async ({ page }) => {
  await page.goto("/");

  const statesLink = page.getByRole("link", { name: "Feedback & States", exact: true });
  await statesLink.click();
  await expect(statesLink).toHaveAttribute("aria-current", "location");
});

test("navigates to target sections from hero stat cards", async ({ page }) => {
  await page.goto("/");

  const overlaysCardLink = page.getByRole("link", { name: "Jump to Overlays and Navigation section" });
  await overlaysCardLink.click();
  await expect(page).toHaveURL(/#overlays-navigation$/);
  await expect(page.getByRole("link", { name: "Overlays & Navigation", exact: true })).toHaveAttribute(
    "aria-current",
    "location"
  );
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

test("keeps data tabs stable for modified navigation keys", async ({ page }) => {
  await page.goto("/");

  const overviewTab = page.getByRole("tab", { name: "Overview" });
  const overviewPanel = page.locator(`#${await overviewTab.getAttribute("aria-controls")}`);
  const settingsTab = page.getByRole("tab", { name: "Settings" });

  await overviewTab.focus();
  await overviewTab.evaluate((element) => {
    element.dispatchEvent(new KeyboardEvent("keydown", { key: "End", ctrlKey: true, bubbles: true }));
  });
  await expect(overviewTab).toBeFocused();
  await expect(overviewPanel).not.toHaveAttribute("hidden");
  await expect(settingsTab).toHaveAttribute("aria-selected", "false");

  await overviewTab.evaluate((element) => {
    element.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowRight", metaKey: true, bubbles: true })
    );
  });
  await expect(overviewTab).toBeFocused();
  await expect(overviewPanel).not.toHaveAttribute("hidden");
  await expect(settingsTab).toHaveAttribute("aria-selected", "false");
});

test("updates tabs telemetry when active tab changes", async ({ page }) => {
  await page.goto("/");

  const telemetry = page.getByTestId("tabs-change-telemetry");
  await expect(telemetry).toHaveText("overview");

  await page.getByRole("tab", { name: "Activity" }).click();
  await expect(telemetry).toHaveText("activity");

  await page.getByRole("tab", { name: "Settings" }).click();
  await expect(telemetry).toHaveText("settings");
});

test("mirrors horizontal tab arrows in rtl layout", async ({ page }) => {
  await page.goto("/");

  const rtlTablist = page.getByRole("tablist", { name: "RTL release workflow tabs" });
  const specTab = rtlTablist.getByRole("tab", { name: "Spec" });
  const releaseTab = rtlTablist.getByRole("tab", { name: "Release" });
  const releasePanel = page.locator(`#${await releaseTab.getAttribute("aria-controls")}`);
  const specPanel = page.locator(`#${await specTab.getAttribute("aria-controls")}`);

  await specTab.focus();
  await specTab.press("ArrowRight");
  await expect(releaseTab).toBeFocused();
  await expect(releasePanel).toContainText("Release checklist and rollout sequencing.");
  await expect(releasePanel).not.toHaveAttribute("hidden");

  await releaseTab.press("ArrowLeft");
  await expect(specTab).toBeFocused();
  await expect(specPanel).toContainText("Specification scope and API contracts.");
  await expect(specPanel).not.toHaveAttribute("hidden");
});

test("sorts demo table from column headers", async ({ page }) => {
  await page.goto("/");

  const table = page.getByRole("table");
  const componentColumn = table.getByRole("columnheader", { name: /Component/ });
  const statusColumn = table.getByRole("columnheader", { name: /Status/ });
  const componentSortButton = table.getByRole("button", { name: /Component/ });
  const firstRow = table.locator("tbody tr").first();

  await expect(componentColumn).toHaveAttribute("aria-sort", "ascending");
  await expect(statusColumn).not.toHaveAttribute("aria-sort");
  await expect(firstRow).toContainText("Button");

  await componentSortButton.click();
  await expect(componentColumn).toHaveAttribute("aria-sort", "descending");
  await expect(statusColumn).not.toHaveAttribute("aria-sort");
  await expect(firstRow).toContainText("StreamingCodeBlock");
});

test("updates table sort telemetry across click and keyboard sort paths", async ({ page }) => {
  await page.goto("/");

  const table = page.getByRole("table");
  const telemetry = page.getByTestId("table-sort-telemetry");
  const statusSortAscending = table.getByRole("button", { name: "Status sort ascending" });

  await expect(telemetry).toHaveText("component:asc");
  await statusSortAscending.click();
  await expect(telemetry).toHaveText("status:asc");

  const statusSortDescending = table.getByRole("button", { name: "Status sort descending" });
  await statusSortDescending.focus();
  await statusSortDescending.press("Enter");
  await expect(telemetry).toHaveText("status:desc");
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

test("keeps demo table sort stable for modified activation keys", async ({ page }) => {
  await page.goto("/");

  const table = page.getByRole("table");
  const telemetry = page.getByTestId("table-sort-telemetry");
  const componentColumn = table.getByRole("columnheader", { name: /Component/ });
  const componentSortButton = table.getByRole("button", { name: /Component/ });
  const firstRow = table.locator("tbody tr").first();

  await componentSortButton.focus();
  await componentSortButton.evaluate((element) => {
    element.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", ctrlKey: true, bubbles: true })
    );
  });
  await componentSortButton.evaluate((element) => {
    element.dispatchEvent(new KeyboardEvent("keydown", { key: "Space", metaKey: true, bubbles: true }));
  });

  await expect(componentColumn).toHaveAttribute("aria-sort", "ascending");
  await expect(firstRow).toContainText("Button");
  await expect(telemetry).toHaveText("component:asc");
});

test("ignores repeated Space keydown when sorting demo table", async ({ page }) => {
  await page.goto("/");

  const table = page.getByRole("table");
  const telemetry = page.getByTestId("table-sort-telemetry");
  const componentColumn = table.getByRole("columnheader", { name: /Component/ });
  const componentSortButton = table.getByRole("button", { name: /Component/ });
  const firstRow = table.locator("tbody tr").first();

  await componentSortButton.focus();
  await componentSortButton.press("Enter");
  await expect(componentColumn).toHaveAttribute("aria-sort", "descending");
  await expect(firstRow).toContainText("StreamingCodeBlock");
  await expect(telemetry).toHaveText("component:desc");

  await componentSortButton.evaluate((element) => {
    const event = new KeyboardEvent("keydown", { key: " ", repeat: true, bubbles: true });
    element.dispatchEvent(event);
  });

  await expect(componentColumn).toHaveAttribute("aria-sort", "descending");
  await expect(firstRow).toContainText("StreamingCodeBlock");
  await expect(telemetry).toHaveText("component:desc");
});

test("sorts demo table with legacy Spacebar key event", async ({ page }) => {
  await page.goto("/");

  const table = page.getByRole("table");
  const componentColumn = table.getByRole("columnheader", { name: /Component/ });
  const componentSortButton = table.getByRole("button", { name: /Component/ });
  const firstRow = table.locator("tbody tr").first();

  await componentSortButton.focus();
  await componentSortButton.evaluate((element) => {
    const event = new KeyboardEvent("keydown", { key: "Spacebar", bubbles: true });
    element.dispatchEvent(event);
  });

  await expect(componentColumn).toHaveAttribute("aria-sort", "descending");
  await expect(firstRow).toContainText("StreamingCodeBlock");
});

test("keeps table identity column exposed as row headers across sorting", async ({ page }) => {
  await page.goto("/");

  const table = page.getByRole("table", { name: "Component readiness metrics" });
  const componentSortButton = table.getByRole("button", { name: "Component sort descending" });

  await expect(table.getByRole("rowheader", { name: "Button" })).toBeVisible();
  await componentSortButton.click();
  await expect(table.getByRole("rowheader", { name: "StreamingCodeBlock" })).toBeVisible();
});

test("toggles table loading state and disables sort controls", async ({ page }) => {
  await page.goto("/");

  const table = page.getByRole("table", { name: "Component readiness metrics" });
  const loadingToggle = page.getByRole("button", { name: "Toggle table loading" });
  const sortButton = table.getByRole("button", { name: "Component sort descending" });

  await loadingToggle.click();
  await expect(table).toHaveAttribute("aria-busy", "true");
  await expect(page.getByText("Syncing component readiness metrics...")).toBeVisible();
  await expect(sortButton).toBeDisabled();
  await expect(sortButton).not.toHaveAttribute("aria-keyshortcuts");
  await expect(table.getByRole("rowheader", { name: "Button" })).toHaveCount(0);

  await loadingToggle.click();
  await expect(table).not.toHaveAttribute("aria-busy");
  await expect(sortButton).toBeEnabled();
  await expect(sortButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
  await expect(table.getByRole("rowheader", { name: "Button" })).toBeVisible();
});

test("shows empty table state and keeps sort controls disabled", async ({ page }) => {
  await page.goto("/");

  const table = page.getByRole("table", { name: "Component readiness metrics" });
  const emptyToggle = page.getByRole("button", { name: "Toggle table empty state" });
  const sortButton = table.getByRole("button", { name: /Component sort (ascending|descending)/ });

  await emptyToggle.click();
  await expect(page.getByText("No component readiness metrics yet.")).toBeVisible();
  await expect(sortButton).toBeDisabled();
  await expect(sortButton).not.toHaveAttribute("aria-keyshortcuts");
  await expect(table.getByRole("rowheader", { name: "Button" })).toHaveCount(0);

  await emptyToggle.click();
  await expect(sortButton).toBeEnabled();
  await expect(sortButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
  await expect(table.getByRole("rowheader", { name: "Button" })).toBeVisible();
});

test("keeps manual tabs panel stable until Enter activation", async ({ page }) => {
  await page.goto("/");

  const manualTablist = page.getByRole("tablist", { name: "Manual release workflow tabs" });
  const draftTab = manualTablist.getByRole("tab", { name: "Draft" });
  const reviewTab = manualTablist.getByRole("tab", { name: "Review" });
  const draftPanel = page.locator(`#${await draftTab.getAttribute("aria-controls")}`);
  const reviewPanel = page.locator(`#${await reviewTab.getAttribute("aria-controls")}`);

  await expect(draftTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");
  await expect(reviewTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");

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

  await expect(draftTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");
  await expect(shipTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");

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

test("keeps manual tabs panel stable until legacy Spacebar activation", async ({ page }) => {
  await page.goto("/");

  const manualTablist = page.getByRole("tablist", { name: "Manual release workflow tabs" });
  const draftTab = manualTablist.getByRole("tab", { name: "Draft" });
  const reviewTab = manualTablist.getByRole("tab", { name: "Review" });
  const draftPanel = page.locator(`#${await draftTab.getAttribute("aria-controls")}`);
  const reviewPanel = page.locator(`#${await reviewTab.getAttribute("aria-controls")}`);

  await expect(draftTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");
  await expect(reviewTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");

  await draftTab.focus();
  await draftTab.press("ArrowRight");
  await expect(reviewTab).toBeFocused();
  await expect(reviewPanel).toHaveAttribute("hidden");
  await expect(draftPanel).not.toHaveAttribute("hidden");

  await reviewTab.evaluate((element) => {
    const event = new KeyboardEvent("keydown", { key: "Spacebar", bubbles: true });
    element.dispatchEvent(event);
  });

  await expect(reviewPanel).not.toHaveAttribute("hidden");
  await expect(draftPanel).toHaveAttribute("hidden");
});

test("keeps manual vertical tabs panel stable until Enter activation", async ({ page }) => {
  await page.goto("/");

  const manualVerticalTablist = page.getByRole("tablist", { name: "Manual vertical release tabs" });
  const backlogTab = manualVerticalTablist.getByRole("tab", { name: "Backlog" });
  const reviewTab = manualVerticalTablist.getByRole("tab", { name: "Review" });
  const shipTab = manualVerticalTablist.getByRole("tab", { name: "Ship" });
  const backlogPanel = page.locator(`#${await backlogTab.getAttribute("aria-controls")}`);
  const shipPanel = page.locator(`#${await shipTab.getAttribute("aria-controls")}`);

  await expect(backlogTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");
  await expect(shipTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");
  await expect(reviewTab).toHaveAttribute("aria-disabled", "true");
  await expect(reviewTab).not.toHaveAttribute("aria-keyshortcuts");

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

test("keeps focus at no-loop tab boundaries while skipping disabled tabs", async ({ page }) => {
  await page.goto("/");

  const noLoopTablist = page.getByRole("tablist", { name: "No-loop release tabs" });
  const draftTab = noLoopTablist.getByRole("tab", { name: "Draft" });
  const releaseTab = noLoopTablist.getByRole("tab", { name: "Release" });
  const releasePanel = page.locator(`#${await releaseTab.getAttribute("aria-controls")}`);
  const draftPanel = page.locator(`#${await draftTab.getAttribute("aria-controls")}`);

  await draftTab.focus();
  await draftTab.press("ArrowLeft");
  await expect(draftTab).toBeFocused();
  await expect(draftPanel).not.toHaveAttribute("hidden");

  await draftTab.press("ArrowRight");
  await expect(releaseTab).toBeFocused();
  await expect(releasePanel).not.toHaveAttribute("hidden");

  await releaseTab.press("ArrowRight");
  await expect(releaseTab).toBeFocused();
  await expect(releasePanel).not.toHaveAttribute("hidden");
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
  await expect(
    page.getByText("v0.1.0: Button interaction states promoted to production grade.")
  ).toBeVisible();

  await paginationNav.getByRole("button", { name: "Go to page 2" }).click();
  await expect(
    page.getByText("v0.1.0: Toast timer path stabilized for hover pause lifecycle.")
  ).toBeVisible();
  await expect(
    page.getByText("v0.1.0: Button interaction states promoted to production grade.")
  ).toBeHidden();
});

test("navigates release pagination with Home/End shortcuts", async ({ page }) => {
  await page.goto("/");

  const paginationNav = page.getByRole("navigation", { name: "Release feed pagination" });
  const firstPageButton = paginationNav.getByRole("button", { name: "Current page, 1" });
  await firstPageButton.focus();
  await firstPageButton.press("End");

  await expect(
    page.getByText("v0.1.0: Release dry-run evidence recorded for all npm packages.")
  ).toBeVisible();
  await expect(
    page.getByText("v0.1.0: Button interaction states promoted to production grade.")
  ).toBeHidden();

  await paginationNav.getByRole("button", { name: "Current page, 3" }).press("Home");
  await expect(
    page.getByText("v0.1.0: Button interaction states promoted to production grade.")
  ).toBeVisible();
});

test("mirrors pagination arrow shortcuts in rtl layout", async ({ page }) => {
  await page.goto("/");

  const rtlNav = page.getByRole("navigation", { name: "RTL release pagination" });
  const currentPage = rtlNav.getByRole("button", { name: "Current page, 4" });
  await currentPage.focus();
  await currentPage.press("ArrowRight");

  await expect(rtlNav.getByRole("button", { name: "Current page, 3" })).toBeVisible();
  await expect(page.getByTestId("rtl-pagination-page")).toHaveText("3");

  await rtlNav.getByRole("button", { name: "Current page, 3" }).press("ArrowLeft");
  await expect(rtlNav.getByRole("button", { name: "Current page, 4" })).toBeVisible();
  await expect(page.getByTestId("rtl-pagination-page")).toHaveText("4");
});

test("selects framework from combobox", async ({ page }) => {
  await page.goto("/");

  const combobox = page.getByRole("combobox", { name: "Framework Combobox" });
  await combobox.click();
  await combobox.fill("sv");
  await expect(
    page
      .getByRole("listbox", { name: "Framework Combobox options" })
      .getByRole("option", { name: "Svelte" })
  ).toBeVisible();

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

test("keeps popover open when Escape is preempted by a global handler", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Open Popover" }).click();
  const popover = page.getByRole("dialog", { name: "Popover content" });
  await expect(popover).toBeVisible();

  await page.evaluate(() => {
    const preemptEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };
    (
      window as typeof window & { __demoPreemptEscape?: (event: KeyboardEvent) => void }
    ).__demoPreemptEscape = preemptEscape;
    document.addEventListener("keydown", preemptEscape, true);
  });

  await page.keyboard.press("Escape");
  await expect(popover).toBeVisible();

  await page.evaluate(() => {
    const globalWindow = window as typeof window & {
      __demoPreemptEscape?: (event: KeyboardEvent) => void;
    };
    if (globalWindow.__demoPreemptEscape) {
      document.removeEventListener("keydown", globalWindow.__demoPreemptEscape, true);
      delete globalWindow.__demoPreemptEscape;
    }
  });

  await page.keyboard.press("Escape");
  await expect(popover).toBeHidden();
});

test("reports popover close reason telemetry for trigger, Escape, and outside pointer", async ({
  page
}) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Open Popover" });
  const telemetry = page.getByTestId("popover-close-reason-demo");
  const traceTelemetry = page.getByTestId("popover-close-trace-demo");
  const outsideTarget = page.getByLabel("Overlay outside focus target");

  await expect(telemetry).toHaveText("none");
  await expect(traceTelemetry).toHaveText("none");

  await trigger.click();
  await expect(page.getByRole("dialog", { name: "Popover content" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(telemetry).toHaveText("escape-key");
  await expect(traceTelemetry).toHaveText("reason:escape-key -> open:false");

  await trigger.click();
  await outsideTarget.click();
  await expect(telemetry).toHaveText("outside-pointer");
  await expect(traceTelemetry).toHaveText("reason:outside-pointer -> open:false");

  await trigger.click();
  await trigger.click();
  await expect(telemetry).toHaveText("trigger-click");
  await expect(traceTelemetry).toHaveText("reason:trigger-click -> open:false");
});

test("keeps popover open on non-primary outside pointer interaction", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Open Popover" });
  const telemetry = page.getByTestId("popover-close-reason-demo");
  const outsideTarget = page.getByLabel("Overlay outside focus target");
  const popover = page.getByRole("dialog", { name: "Popover content" });

  await expect(telemetry).toHaveText("none");
  await trigger.click();
  await expect(popover).toBeVisible();

  await outsideTarget.click({ button: "right" });
  await expect(popover).toBeVisible();
  await expect(telemetry).toHaveText("none");

  await outsideTarget.click();
  await expect(popover).toBeHidden();
  await expect(telemetry).toHaveText("outside-pointer");
});

test("reports dropdown close reason telemetry for all dismiss paths", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Actions" });
  const telemetry = page.getByTestId("dropdown-close-reason-demo");
  const traceTelemetry = page.getByTestId("dropdown-close-trace-demo");
  const outsideTarget = page.getByLabel("Overlay outside focus target");

  await expect(telemetry).toHaveText("none");
  await expect(traceTelemetry).toHaveText("none");

  await trigger.click();
  await page.getByRole("menuitem", { name: "Duplicate" }).click();
  await expect(telemetry).toHaveText("item-select");
  await expect(traceTelemetry).toHaveText("select -> reason:item-select -> open:false");

  await trigger.click();
  await page.keyboard.press("Escape");
  await expect(telemetry).toHaveText("escape-key");
  await expect(traceTelemetry).toHaveText("reason:escape-key -> open:false");

  await trigger.click();
  await outsideTarget.click();
  await expect(telemetry).toHaveText("outside-pointer");
  await expect(traceTelemetry).toHaveText("reason:outside-pointer -> open:false");

  await trigger.click();
  await trigger.click();
  await expect(telemetry).toHaveText("trigger-click");
  await expect(traceTelemetry).toHaveText("reason:trigger-click -> open:false");

  await trigger.focus();
  await trigger.press("ArrowDown");
  await expect(page.getByRole("menu")).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(telemetry).toHaveText("tab-key");
  await expect(traceTelemetry).toHaveText("reason:tab-key -> open:false");
});

test("keeps dropdown open on non-primary outside pointer interaction", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Actions" });
  const telemetry = page.getByTestId("dropdown-close-reason-demo");
  const outsideTarget = page.getByLabel("Overlay outside focus target");

  await expect(telemetry).toHaveText("none");
  await trigger.click();
  await expect(page.getByRole("menu")).toBeVisible();

  await outsideTarget.click({ button: "right" });
  await expect(page.getByRole("menu")).toBeVisible();
  await expect(telemetry).toHaveText("none");

  await outsideTarget.click();
  await expect(page.getByRole("menu")).toBeHidden();
  await expect(telemetry).toHaveText("outside-pointer");
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

test("keeps dropdown open when Escape is preempted by a global handler", async ({ page }) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Actions" });
  await trigger.click();
  const menu = page.getByRole("menu", { name: "Actions" });
  await expect(menu).toBeVisible();

  await page.evaluate(() => {
    const preemptEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };
    (
      window as typeof window & { __demoPreemptEscape?: (event: KeyboardEvent) => void }
    ).__demoPreemptEscape = preemptEscape;
    document.addEventListener("keydown", preemptEscape, true);
  });

  await page.keyboard.press("Escape");
  await expect(menu).toBeVisible();

  await page.evaluate(() => {
    const globalWindow = window as typeof window & {
      __demoPreemptEscape?: (event: KeyboardEvent) => void;
    };
    if (globalWindow.__demoPreemptEscape) {
      document.removeEventListener("keydown", globalWindow.__demoPreemptEscape, true);
      delete globalWindow.__demoPreemptEscape;
    }
  });

  await page.keyboard.press("Escape");
  await expect(menu).toBeHidden();
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

test("reports toast close reason telemetry for Escape, close button, and timeout", async ({
  page
}) => {
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Trigger telemetry toast" });
  const telemetry = page.getByTestId("toast-close-reason-demo");
  const traceTelemetry = page.getByTestId("toast-close-trace-demo");

  await expect(telemetry).toHaveText("none");
  await expect(traceTelemetry).toHaveText("none");

  await trigger.click();
  await page.keyboard.press("Escape");
  await expect(telemetry).toHaveText("escape-key");
  await expect(traceTelemetry).toHaveText("reason:escape-key -> open:false");

  await trigger.click();
  await page.getByRole("button", { name: "Dismiss telemetry toast" }).click();
  await expect(telemetry).toHaveText("close-button");
  await expect(traceTelemetry).toHaveText("reason:close-button -> open:false");

  await trigger.click();
  await expect(page.getByRole("status").filter({ hasText: "Telemetry toast" })).toBeVisible();
  await expect(telemetry).toHaveText("timeout", { timeout: 6000 });
  await expect(traceTelemetry).toHaveText("reason:timeout -> open:false", { timeout: 6000 });
});

test("renders actionable toast with dialog semantics and handles action click", async ({ page }) => {
  await page.goto("/");

  const handledCount = page.getByTestId("action-toast-handled-count");
  await expect(handledCount).toHaveText("0");

  await page.getByRole("button", { name: "Trigger action toast" }).click();
  const actionToast = page.getByRole("dialog", { name: "Release approval action required" });
  await expect(actionToast).toBeVisible();
  await expect(actionToast).toHaveAttribute("aria-modal", "false");
  await expect(actionToast).not.toHaveAttribute("aria-live");

  await page.getByRole("button", { name: "Acknowledge approval action" }).click();
  await expect(actionToast).toBeHidden();
  await expect(handledCount).toHaveText("1");
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

test("keeps toast open when Escape is preempted by a global handler", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  await palette.getByRole("option", { name: "Create Project" }).click();

  const toast = page.getByRole("status").filter({ hasText: "Prompt submitted" });
  await expect(toast).toBeVisible();

  await page.evaluate(() => {
    const preemptEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };
    (
      window as typeof window & { __demoPreemptEscape?: (event: KeyboardEvent) => void }
    ).__demoPreemptEscape = preemptEscape;
    document.addEventListener("keydown", preemptEscape, true);
  });

  await page.keyboard.press("Escape");
  await expect(toast).toBeVisible();

  await page.evaluate(() => {
    const globalWindow = window as typeof window & {
      __demoPreemptEscape?: (event: KeyboardEvent) => void;
    };
    if (globalWindow.__demoPreemptEscape) {
      document.removeEventListener("keydown", globalWindow.__demoPreemptEscape, true);
      delete globalWindow.__demoPreemptEscape;
    }
  });

  await page.keyboard.press("Escape");
  await expect(toast).toBeHidden();
});

test("keeps toast open when Escape is dispatched during IME composition", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  await palette.getByRole("option", { name: "Create Project" }).click();

  const toast = page.getByRole("status").filter({ hasText: "Prompt submitted" });
  await expect(toast).toBeVisible();

  await page.evaluate(() => {
    const event = new KeyboardEvent("keydown", { key: "Escape", bubbles: true });
    Object.defineProperty(event, "isComposing", { value: true });
    Object.defineProperty(event, "keyCode", { value: 229 });
    document.dispatchEvent(event);
  });
  await expect(toast).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(toast).toBeHidden();
});

test("renders silent toast with aria-live off for passive updates", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Trigger silent toast" }).click();
  const toast = page.getByRole("status", { name: "Background sync update" });
  await expect(toast).toBeVisible();
  await expect(toast).toHaveAttribute("aria-live", "off");

  await page.getByRole("button", { name: "Dismiss silent toast" }).click();
  await expect(toast).toBeHidden();
});

test("keeps prompt toast open while toast-level escape guard is enabled", async ({ page }) => {
  await page.goto("/");

  const guardSwitch = page.getByRole("switch", {
    name: "Guard prompt toast Escape at toast layer"
  });
  await guardSwitch.click();
  await expect(guardSwitch).toHaveAttribute("aria-checked", "true");

  await page.getByRole("button", { name: "Command Palette" }).click();
  const palette = page.getByRole("dialog").filter({ hasText: "Command Palette" });
  await palette.getByRole("option", { name: "Create Project" }).click();

  const toast = page.getByRole("status").filter({ hasText: "Prompt submitted" });
  await expect(toast).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(toast).toBeVisible();

  await guardSwitch.click();
  await expect(guardSwitch).toHaveAttribute("aria-checked", "false");
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

test("prioritizes focused toast when dismissing stacked notifications with Escape", async ({
  page
}) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Trigger stacked toasts" }).click();

  const firstToast = page.getByRole("status", { name: "Sync started" });
  const secondToast = page.getByRole("status", { name: "Sync completed" });
  await expect(firstToast).toBeVisible();
  await expect(secondToast).toBeVisible();

  const closeButtons = page.getByRole("button", { name: "Close toast" });
  await closeButtons.first().focus();
  await page.keyboard.press("Escape");

  await expect(firstToast).toBeHidden();
  await expect(secondToast).toBeVisible();
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

  await expect(aiSection.locator("code")).toContainText("export function OtpFallback()", {
    timeout: 5000
  });
  await expect(
    aiSection.locator('[aria-busy="true"]').filter({ hasText: "OtpFallback" })
  ).toHaveCount(0);
});
