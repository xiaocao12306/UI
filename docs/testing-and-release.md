# Testing and Release Workflow

## Local Quality Gates

Run from repo root:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm coverage:gate
pnpm build
```

## Package-Level Checks

Examples:

```bash
pnpm --filter @aurora-ui/react test
pnpm --filter @aurora-ui/demo build
pnpm demo:e2e
pnpm demo:dist:check
pnpm storybook:coverage:report
pnpm storybook:coverage:check
pnpm storybook:a11y:skip-check
pnpm storybook:play:check
pnpm storybook:docs:check
pnpm storybook:static:check
pnpm storybook:test:grep "Table.stories.tsx"
pnpm storybook:build
pnpm storybook:test:ci
```

Storybook static gate behavior:

- `storybook:static:check` rebuilds `apps/storybook/storybook-static` before interaction tests.
- stale static diff is treated as error and blocks the command (run `pnpm storybook:build` and commit updated static files).
- `storybook:test:ci` uses repository-local `scripts/serve-storybook-static.mjs` to host static output before running `@storybook/test-runner`.
- Storybook test-runner additionally executes `axe-playwright` checks per story (`apps/storybook/.storybook/test-runner.ts`), with `color-contrast` enabled by default and optional story-id skip list governance (empty list allowed for zero-exemption baseline).

Demo dist gate behavior:

- `demo:dist:check` rebuilds `apps/demo/dist` before release gate checks.
- stale dist diff is treated as error and blocks the command (run `pnpm demo:build` and commit updated dist files).
- common failure signature:
  - `[demo-dist-check] error: demo dist is out of sync with current sources.`
  - changed entries usually include `apps/demo/dist/index.html` + hashed bundle rename in `apps/demo/dist/assets/`.
  - fix sequence: `pnpm demo:build` -> `git add apps/demo/dist` -> commit -> rerun `pnpm demo:dist:check` or `pnpm release:gate:ci`.

## E2E (Playwright)

Install browser once in local environment:

```bash
pnpm exec playwright install chromium
pnpm demo:e2e
pnpm demo:e2e:grep "toggles table loading state and disables sort controls"
```

## Release Secrets Preflight

Run this before Chromatic upload or npm publish:

```bash
pnpm release:preflight
pnpm release:preflight -- --scope=chromatic
pnpm release:preflight -- --scope=publish
```

Expected behavior:

- `release:preflight`: checks `CHROMATIC_PROJECT_TOKEN + NPM_TOKEN`
- `release:preflight -- --scope=chromatic`: checks `CHROMATIC_PROJECT_TOKEN` only
- `release:preflight -- --scope=publish`: checks `NPM_TOKEN` only
- any missing token in selected scope: command prints `MISSING` line(s), points to `docs/secrets.md`, and exits with code `1`

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
- runs `pnpm release:gate:ci` (`verify + coverage:gate + demo:e2e + demo:dist:check + storybook:test:ci`) before any version/publish step
- publishes npm packages only when `NPM_TOKEN` is configured
- uses npm provenance (`id-token: write`) during publish
- when `NPM_TOKEN` is missing, workflow emits explicit warning annotation and writes skip details into `GITHUB_STEP_SUMMARY` with setup path (`docs/secrets.md`)
- supports `workflow_dispatch` input `enforce=true` to fail hard when `NPM_TOKEN` is missing (manual release audit mode)

Dry-run workflow: `.github/workflows/release-dry-run.yml`

- runs `pnpm release:dry-run` on PRs that touch package/release related files
- path trigger coverage includes `.changeset/**`, `packages/**`, `scripts/**`, `pnpm-workspace.yaml`, lockfile, `release.yml`, and dry-run workflow itself
- enables workflow-level `concurrency` (same ref cancels in-progress old runs)
- validates publishable tarballs without requiring `NPM_TOKEN`
- writes tarball size summary (`package size` / `unpacked size`) into `GITHUB_STEP_SUMMARY` for reviewer-facing release evidence
- always writes `Release Dry Run Summary` (even when install/setup failed before dry-run execution)
- summary includes `install` + `release:dry-run` outcomes and resolved failed-step label (`install` / `release:dry-run` / `none`) for triage

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
- coverage gate (`pnpm coverage:gate`, Vitest hard thresholds: lines/statements `>=90%`, branches/functions `>=85%`)
- build
- storybook interaction gate (`pnpm storybook:test:ci`, includes coverage/docs/static freshness checks)
- storybook a11y scan gate (`axe-playwright` via Storybook test-runner, fail-fast on non-contrast WCAG violations)
- demo e2e smoke test
- demo static freshness gate (`pnpm demo:dist:check`)
- CI evidence summary: `GITHUB_STEP_SUMMARY` includes `Storybook Interaction Gate` and `Demo Quality Gate`

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
2. `pnpm coverage:gate`
3. `pnpm demo:e2e`
4. `pnpm demo:dist:check`
5. `pnpm storybook:test:ci`（内含 `storybook:coverage:check` + `storybook:docs:check` + `storybook:play:check` + `storybook:static:check` + `storybook:a11y:skip-check`）

Full local pre-release gate (includes tarball evidence):

```bash
pnpm release:gate
```

This appends: 6. `pnpm release:dry-run`

## Evidence Retrieval

为避免手工维护计数过期（例如 Storybook tests/suites 或 dry-run 包体积），本仓库以 workflow run 的 `GITHUB_STEP_SUMMARY` 作为唯一审阅证据源。

建议审阅顺序：

1. `CI` workflow：查看 `Storybook Interaction Gate` + `Demo Quality Gate` summary（coverage/docs/static/test + demo e2e/dist gate 快照）。
2. `Release Dry Run` workflow：查看包体积表、失败步骤、恢复文件计数。
3. `Chromatic Visual Tests` workflow：查看 mode/token 状态、build/storybook URL、change/error 计数。
4. `Release` workflow：查看 `Release Gate (CI)` summary（verify + demo e2e run/result + demo dist + storybook gate）以及 `Publish Mode` summary（`enforce`/token 状态）。
5. 失败排障：下载 workflow artifacts（`storybook-gate-logs` / `demo-quality-gate-logs` / `release-gate-logs`）查看原始日志与首条失败签名。
