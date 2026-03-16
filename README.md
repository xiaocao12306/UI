# Aurora UI (React Component Library)

A monorepo workspace for a React component library with token-first design and accessibility-first primitives.

## Tech Stack
- React 19 + TypeScript 5
- pnpm workspace + Turbo
- tsup for package build
- Radix Slot primitive for composability
- Vitest (planned), Storybook (planned), Playwright (planned)
- Changesets for versioning and release

## Workspace
- `packages/tokens`: design tokens
- `packages/primitives`: headless low-level primitives
- `packages/react`: business-ready React components
- `docs/react-component-library-plan.md`: design and implementation plan

## Quick Start
```bash
pnpm install
pnpm build
```
