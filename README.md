# Aurora UI (React Component Library)

Aurora UI is a token-first React component library monorepo with accessibility-focused primitives, AI interaction components, and a demo site.

## Current Status
- Workspace build: passing (`lint`, `typecheck`, `test`, `build`)
- Package layers:
  - `@aurora-ui/tokens`: layered tokens + theme variable generator
  - `@aurora-ui/primitives`: low-level focus/portal/dismiss primitives
  - `@aurora-ui/react`: UI components + AI interaction set
- Demo site: `apps/demo`

## Tech Stack
- React 19 + TypeScript 5
- pnpm workspace + Turborepo
- tsup package build pipeline
- ESLint 9 + Prettier
- Vitest + Testing Library
- Changesets + GitHub Actions

## Monorepo Structure
- `packages/tokens`: global/semantic/component tokens + theme packs
- `packages/primitives`: headless building blocks
- `packages/react`: business-ready UI components
- `apps/demo`: end-to-end showcase site
- `docs/react-component-library-plan.md`: source blueprint
- `docs/component-status.md`: component implementation matrix
- `docs/testing-and-release.md`: quality and release workflow

## Quick Start
```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Run Demo
```bash
pnpm --filter @aurora-ui/demo dev
```

Build demo output:
```bash
pnpm --filter @aurora-ui/demo build
```

## Package Usage (Example)
```tsx
import { AuroraProvider, Button, Input, Dialog } from "@aurora-ui/react";

export function App() {
  return (
    <AuroraProvider theme="core-light">
      <Input placeholder="Search" />
      <Button>Submit</Button>
      <Dialog open={false} onOpenChange={() => {}} title="Title">
        Content
      </Dialog>
    </AuroraProvider>
  );
}
```

## Notes
- The repo currently targets Node 18+.
- Demo currently uses Vite 5 for Node 18 compatibility.
