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
pnpm demo:dist:check
pnpm storybook:docs:check
pnpm storybook:static:check
pnpm storybook:build
pnpm storybook:test:ci
```

Storybook static gate behavior:

- `storybook:static:check` rebuilds `apps/storybook/storybook-static` before interaction tests.
- stale static diff is treated as error and blocks the command (run `pnpm storybook:build` and commit updated static files).
- `storybook:test:ci` uses repository-local `scripts/serve-storybook-static.mjs` to host static output before running `@storybook/test-runner`.

Demo dist gate behavior:

- `demo:dist:check` rebuilds `apps/demo/dist` before release gate checks.
- stale dist diff is treated as error and blocks the command (run `pnpm demo:build` and commit updated dist files).

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

- requires a clean working tree (`git status --porcelain` empty) before execution
- when no pending changesets: `No unreleased changesets found, exiting.`
- auto-discovers publishable packages under `packages/*` (`package.json` has `name` and not `private: true`)
- `npm publish --dry-run` prints tarball manifest/size and ends without real publish
- when no publishable package is discovered: script exits with `status=skipped` and writes summary evidence
- any version-file edits from `changeset version` are automatically reverted before script exit
- command exits non-zero if any step fails (`changeset version` or any package dry-run)

Underlying commands (for troubleshooting):

```bash
pnpm changeset version
pnpm --filter <workspace-package-name> exec npm publish --dry-run --access public
```

Run history/evidence is tracked in workflow run summaries (`GITHUB_STEP_SUMMARY`) instead of this document.

## GitHub Release Automation

Workflow: `.github/workflows/release.yml`

Behavior:

- always runs Changesets version PR automation on `main`
- runs `pnpm release:gate:ci` (`verify + demo:e2e + demo:dist:check + storybook:test:ci`) before any version/publish step
- publishes npm packages only when `NPM_TOKEN` is configured
- uses npm provenance (`id-token: write`) during publish
- when `NPM_TOKEN` is missing, workflow emits explicit warning annotation and writes skip details into `GITHUB_STEP_SUMMARY` with setup path (`docs/secrets.md`)
- supports `workflow_dispatch` input `enforce=true` to fail hard when `NPM_TOKEN` is missing (manual release audit mode)

Dry-run workflow: `.github/workflows/release-dry-run.yml`

- runs `pnpm release:dry-run` on PRs that touch package/release related files
- path trigger coverage includes `.changeset/**`, `packages/**`, `scripts/**`, `pnpm-workspace.yaml`, lockfile and workflow itself
- enables workflow-level `concurrency` (same ref cancels in-progress old runs)
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
- storybook interaction gate (`pnpm storybook:test:ci`, includes docs/static freshness checks)
- demo e2e smoke test
- demo static freshness gate (`pnpm demo:dist:check`)

Separate workflows:

- Chromatic visual regression upload: `.github/workflows/chromatic.yml` (when `CHROMATIC_PROJECT_TOKEN` is configured)
  - supports `workflow_dispatch` input `enforce=true` to fail hard when token is missing (release/manual audit mode)
  - default behavior remains soft-skip (`enforce=false`) when token is absent
  - writes upload status/build URL/storybook URL/change/error counts into `GITHUB_STEP_SUMMARY`
- release PR + npm publish: `.github/workflows/release.yml` (when `NPM_TOKEN` is configured)
  - supports `workflow_dispatch` input `enforce=true` to hard-fail on missing `NPM_TOKEN`
  - default behavior remains soft-skip (`enforce=false`) when token is absent

## Release Readiness Checklist

- all quality gates green
- no pending `git status`
- docs updated for new component APIs
- demo updated for new interactions

One-command gate (recommended before cutting a release):

```bash
pnpm release:gate:ci
```

This runs:

1. `pnpm verify`
2. `pnpm demo:e2e`
3. `pnpm demo:dist:check`
4. `pnpm storybook:test:ci`（内含 `storybook:docs:check` + `storybook:static:check`）

Full local pre-release gate (includes tarball evidence):

```bash
pnpm release:gate
```

This appends: 5. `pnpm release:dry-run`

## Release Gate Evidence (2026-03-19)

Command executed from `/www/code/react-ui-library`:

```bash
pnpm release:gate:ci
```

Result summary:

- overall status: `passed`
- verify: `passed` (`lint` + `typecheck` + `test` + `build`)
- demo e2e: `65/65` passed
- demo dist sync gate: `passed` (`demo:dist:check`)
- storybook docs import gate: `passed` (`4` mdx files scanned)
- storybook static sync gate: `passed` (`storybook-static` synchronized)
- storybook interaction tests: `174/174` passed (`32` suites)
- release gate pass: `yes`

### 备注

- 同日早些时候曾在 `@aurora-ui/primitives` 的 `DismissableLayer` 非主键 pointer 用例触发阻塞；修复后已通过本节最终复验。

## Release Dry-Run Evidence (2026-03-19)

Command executed from `/www/code/react-ui-library`:

```bash
pnpm release:dry-run
```

Result summary:

- overall status: `passed`
- changeset phase: `No unreleased changesets found, exiting.`
- publish dry-run targets: `@aurora-ui/primitives` / `@aurora-ui/react` / `@aurora-ui/tokens`
- npm auth: dry-run warning expected (`requires you to be logged in`) and does not block output
- package tarball evidence:
  - `@aurora-ui/primitives@0.1.0`: package `14.4 kB`, unpacked `71.2 kB`
  - `@aurora-ui/react@0.1.0`: package `57.5 kB`, unpacked `342.6 kB`
  - `@aurora-ui/tokens@0.1.0`: package `3.2 kB`, unpacked `17.0 kB`
- post-run workspace hygiene: `release-dry-run` reverted temporary version-file edits automatically
