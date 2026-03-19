# Aurora UI (React Component Library)

![CI](https://github.com/xiaocao12306/UI/actions/workflows/ci.yml/badge.svg)
![Demo Pages](https://github.com/xiaocao12306/UI/actions/workflows/demo-pages.yml/badge.svg)

Aurora UI is a token-first React component library monorepo with accessibility-focused primitives, AI interaction components, and a demo site.

## Current Status

- Workspace build: passing (`lint`, `typecheck`, `test`, `build`)
- Package layers:
  - `@aurora-ui/tokens`: layered tokens + theme variable generator
  - `@aurora-ui/primitives`: low-level focus/portal/dismiss primitives
  - `@aurora-ui/react`: UI components + AI interaction set
- Demo site: `apps/demo`
- Production hardening highlights:
  - Table supports row-identity semantics via `columns[].rowHeader` (`<th scope="row">`).
  - CommandPalette and Toast both support runtime dismiss interception via event hooks (`onEscapeKeyDown`, `onPointerDownOutside`).
  - CommandPalette now supports `clearQueryOnEscape` to clear search intent before dismissing overlay.
  - Release dry-run now writes package-size evidence into `GITHUB_STEP_SUMMARY`.

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
- `apps/storybook`: component playground and docs canvas
- `docs/react-component-library-plan.md`: source blueprint
- `docs/component-status.md`: component implementation matrix
- `docs/testing-and-release.md`: quality and release workflow
- `docs/storybook.md`: Storybook runbook and blocker log
- `docs/chromatic.md`: visual regression setup and workflow guide
- `docs/secrets.md`: CHROMATIC/NPM token setup instructions
- `docs/production-quality-checklist.md`: production-grade acceptance matrix for core components
- `docs/component-recipes.md`: copy-ready integration snippets
- `docs/overlay-behavior.md`: overlay dismiss/keyboard behavior guide
- `docs/ai-components-guide.md`: AI component composition guide

## Quick Start

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm exec playwright install chromium
pnpm demo:e2e
# code-only gate:
pnpm verify
# CI-equivalent release gate:
pnpm release:gate:ci
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
# run a focused case by title regex:
pnpm demo:e2e:grep "toggles table loading state and disables sort controls"
```

## Run Storybook

```bash
pnpm storybook:dev
pnpm storybook:build
pnpm storybook:coverage:report
pnpm storybook:coverage:check
pnpm storybook:docs:check
pnpm storybook:play:check
pnpm storybook:static:check
pnpm storybook:a11y:skip-check
pnpm storybook:test
pnpm storybook:test:grep "Table.stories.tsx"
pnpm storybook:test:ci
pnpm chromatic
```

## Storybook External Link

- Immediate static preview:
  - `https://rawcdn.githack.com/xiaocao12306/UI/main/apps/storybook/storybook-static/index.html`
- GitHub Pages preview (when Pages enabled):
  - `https://xiaocao12306.github.io/UI/storybook/`
- To refresh this link after Storybook changes:
  - `pnpm storybook:build`
  - `git add apps/storybook/storybook-static && git commit -m "构建(静态站): 刷新 Storybook 产物" && git push`

## Commit 规范

- 统一格式：`类型(范围): 中文说明`
- 推荐类型：`功能` / `修复` / `文档` / `测试` / `构建` / `重构` / `工程`
- 示例：
  - `功能(表格): 补充空态排序提示`
  - `修复(命令面板): 修正关闭原因状态重置`
  - `文档(Storybook): 更新组件用法说明`
  - `构建(静态站): 刷新 Storybook 产物`

## Release Workflow

- automated workflow: `.github/workflows/release.yml`
- dry-run workflow: `.github/workflows/release-dry-run.yml`
- release PR generation uses Changesets on `main`
- npm publish runs only when `NPM_TOKEN` is configured
- secrets setup guide: `docs/secrets.md`
- local preflight:
  - `pnpm release:preflight` (`CHROMATIC_PROJECT_TOKEN` + `NPM_TOKEN`)
  - `pnpm release:preflight -- --scope=chromatic` (`CHROMATIC_PROJECT_TOKEN` only)
  - `pnpm release:preflight -- --scope=publish` (`NPM_TOKEN` only)
- local CI-equivalent gate: `pnpm release:gate:ci` (`verify + demo:e2e + demo:dist:check + storybook:test:ci`)
- local publish dry-run: `pnpm release:dry-run` (runs `changeset version` + auto-discovered publishable packages `npm publish --dry-run`)
  - requires clean working tree and auto-reverts dry-run version file edits
- full pre-release gate: `pnpm release:gate` (`release:gate:ci` + `release:dry-run`)
- workflow evidence should be read from each run's `GITHUB_STEP_SUMMARY` (storybook gate snapshot, token mode, dry-run package table)
- `Release Dry Run` workflow always emits a summary (including checkout/setup/install failure paths) with failed-step labeling for faster triage

## Demo External Link

- GitHub Pages workflow: `.github/workflows/demo-pages.yml`
- GitHub Pages now publishes:
  - demo root: `https://xiaocao12306.github.io/UI/`
  - storybook docs: `https://xiaocao12306.github.io/UI/storybook/`
- Deploy workflow writes both URLs into `GITHUB_STEP_SUMMARY` after successful publish.
- Immediate preview (no Pages dependency):
  - `https://rawcdn.githack.com/xiaocao12306/UI/main/apps/demo/dist/index.html`
- If Pages is not enabled yet, the workflow will skip deploy without failing CI.

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

- CI release gate baseline uses Node 22 (recommended for local parity).
- Node 18+ remains supported for local development; Demo uses Vite 5 for Node 18 compatibility.
