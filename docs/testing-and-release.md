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
```

## Versioning
Use Changesets:

```bash
pnpm changeset
pnpm version-packages
pnpm release
```

## CI
GitHub Actions workflow runs:
- install
- lint
- typecheck
- test
- build

## Release Readiness Checklist
- all quality gates green
- no pending `git status`
- docs updated for new component APIs
- demo updated for new interactions
