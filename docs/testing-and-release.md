# Testing and Release Workflow

## Local Quality Gates
Run from repo root:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Package-Level Checks
Examples:

```bash
pnpm --filter @aurora-ui/react test
pnpm --filter @aurora-ui/demo build
pnpm demo:e2e
pnpm storybook:docs:check
pnpm storybook:build
pnpm storybook:test:ci
```

## E2E (Playwright)
Install browser once in local environment:

```bash
pnpm exec playwright install chromium
pnpm demo:e2e
```

## Release Secrets Preflight
Run this before Chromatic upload or npm publish:

```bash
pnpm release:preflight
```

Expected behavior:
- both `CHROMATIC_PROJECT_TOKEN` and `NPM_TOKEN` exist: command exits with code `0`
- any missing token: command prints `MISSING` line(s), points to `docs/secrets.md`, and exits with code `1`

## Versioning
Use Changesets:

```bash
pnpm changeset
pnpm version-packages
pnpm release
```

## Publish Dry-Run (Recommended Before Real Release)
Run from repo root:

```bash
pnpm release:dry-run
```

Expected behavior:
- when no pending changesets: `No unreleased changesets found, exiting.`
- `npm publish --dry-run` prints tarball manifest/size and ends without real publish
- command exits non-zero if any step fails (`changeset version` or any package dry-run)

Underlying commands (for troubleshooting):

```bash
pnpm changeset version
pnpm --filter @aurora-ui/tokens exec npm publish --dry-run --access public
pnpm --filter @aurora-ui/primitives exec npm publish --dry-run --access public
pnpm --filter @aurora-ui/react exec npm publish --dry-run --access public
```

Latest dry-run record:
- date: 2026-03-18
- result:
  - `changeset version`: `No unreleased changesets found, exiting.`
  - `@aurora-ui/tokens`: dry-run tarball size ~3.0 kB
  - `@aurora-ui/primitives`: dry-run tarball size ~14.0 kB
  - `@aurora-ui/react`: dry-run tarball size ~54.1 kB (unpacked ~312.7 kB after latest Dropdown/CommandPalette/Popover telemetry + Table sort-guard refinements)
  - npm prints login warning in dry-run mode, but command exits successfully
  - CI summary now includes package size / unpacked size table via `GITHUB_STEP_SUMMARY`

Latest release gate run:
- date: 2026-03-18
- command: `pnpm release:gate`
- result: passed (`verify` + `demo:e2e` + `storybook:test:ci` + `release:dry-run`)
- notes:
  - demo E2E total now `53` checks
  - Storybook interaction suites refreshed to `32/32`, tests `170/170` all passed after latest Dropdown + CommandPalette + Popover close-reason telemetry + Table single-row sort guard coverage
  - primitives regression: `pnpm --filter @aurora-ui/primitives exec vitest run src/DismissableLayer.test.tsx` passed after IME Escape + Escape preemption dismiss-guard hardening
  - react overlay regressions: `pnpm --filter @aurora-ui/react exec vitest run src/Dialog.test.tsx src/Drawer.test.tsx` passed after IME Escape guard coverage expansion
  - react preemption regressions: `pnpm --filter @aurora-ui/react exec vitest run src/Dialog.test.tsx src/CommandPalette.test.tsx` passed after Escape-preemption callback-skip coverage expansion
  - react preemption overlay expansion: `pnpm --filter @aurora-ui/react exec vitest run src/Popover.test.tsx src/Dropdown.test.tsx` passed after Escape-preemption callback-skip coverage expansion
  - react preemption overlay completion: `pnpm --filter @aurora-ui/react exec vitest run src/Drawer.test.tsx` passed after Escape-preemption callback-skip coverage expansion
  - demo IME/legacy keyboard regressions: `pnpm demo:e2e` passed after adding Dialog+Drawer+Popover+CommandPalette+Dropdown+Toast Escape preemption coverage, CommandPalette+Toast IME Escape coverage, and Tabs/Table legacy `Spacebar` keyboard-path checks
  - release dry-run package size evidence refreshed (`react` unpacked size ~312.7 kB)

## GitHub Release Automation
Workflow: `.github/workflows/release.yml`

Behavior:
- always runs Changesets version PR automation on `main`
- publishes npm packages only when `NPM_TOKEN` is configured
- uses npm provenance (`id-token: write`) during publish
- when `NPM_TOKEN` is missing, workflow emits explicit warning annotation and writes skip details into `GITHUB_STEP_SUMMARY` with setup path (`docs/secrets.md`)

Dry-run workflow: `.github/workflows/release-dry-run.yml`
- runs `pnpm release:dry-run` on PRs that touch package/release related files
- validates publishable tarballs without requiring `NPM_TOKEN`
- writes tarball size summary (`package size` / `unpacked size`) into `GITHUB_STEP_SUMMARY` for reviewer-facing release evidence
- on failure, summary still records `status=failed` and the failed step label to speed up triage

Required repository secrets:
- `NPM_TOKEN` (for npm publish)
- `CHROMATIC_PROJECT_TOKEN` (optional, visual regression upload)
- setup reference: `docs/secrets.md`

## CI
GitHub Actions workflow runs:
- install
- lint
- typecheck
- test
- build
- demo e2e smoke test
- storybook static build
- chromatic visual regression upload (when token configured)
- changesets release PR + npm publish (when `NPM_TOKEN` configured)

## Release Readiness Checklist
- all quality gates green
- no pending `git status`
- docs updated for new component APIs
- demo updated for new interactions

One-command gate (recommended before cutting a release):

```bash
pnpm release:gate
```

This runs:
1. `pnpm verify`
2. `pnpm demo:e2e`
3. `pnpm storybook:test:ci`
4. `pnpm release:dry-run`
