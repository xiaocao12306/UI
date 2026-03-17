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
pnpm storybook:build
pnpm storybook:test:ci
```

## E2E (Playwright)
Install browser once in local environment:

```bash
pnpm exec playwright install chromium
pnpm demo:e2e
```

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
pnpm changeset version
pnpm --filter @aurora-ui/tokens exec npm publish --dry-run --access public
pnpm --filter @aurora-ui/primitives exec npm publish --dry-run --access public
pnpm --filter @aurora-ui/react exec npm publish --dry-run --access public
```

Expected behavior:
- when no pending changesets: `No unreleased changesets found, exiting.`
- `npm publish --dry-run` prints tarball manifest/size and ends without real publish

Latest dry-run record:
- date: 2026-03-17
- result:
  - `changeset version`: `No unreleased changesets found, exiting.`
  - `@aurora-ui/tokens`: dry-run tarball size ~3.0 kB
  - `@aurora-ui/primitives`: dry-run tarball size ~13.5 kB
  - `@aurora-ui/react`: dry-run tarball size ~29.6 kB
  - npm prints login warning in dry-run mode, but command exits successfully

## GitHub Release Automation
Workflow: `.github/workflows/release.yml`

Behavior:
- always runs Changesets version PR automation on `main`
- publishes npm packages only when `NPM_TOKEN` is configured
- uses npm provenance (`id-token: write`) during publish

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
