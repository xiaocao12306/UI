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
- `docs/overlay-behavior.md`: overlay dismiss/keyboard behavior guide
- `docs/ai-components-guide.md`: AI component composition guide

## Quick Start
```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm demo:e2e
# or run all in one:
pnpm verify
```

## Run Demo
```bash
pnpm --filter @aurora-ui/demo dev
```

Build demo output:
```bash
pnpm --filter @aurora-ui/demo build
```

Run demo smoke E2E:
```bash
pnpm exec playwright install chromium
pnpm demo:e2e
```

## Demo External Link
- GitHub Pages workflow: `.github/workflows/demo-pages.yml`
- Immediate preview (no Pages dependency):
  - `https://rawcdn.githack.com/xiaocao12306/UI/main/apps/demo/dist/index.html`
- Expected URL after Pages is enabled in repo settings:
  - `https://xiaocao12306.github.io/UI/`

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
