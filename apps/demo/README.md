# Aurora UI Demo

## Development
```bash
pnpm --filter @aurora-ui/demo dev
```

## Build
```bash
pnpm --filter @aurora-ui/demo build
```

## Preview
```bash
pnpm --filter @aurora-ui/demo preview
```

The demo showcases:
- Core form and feedback components
- Overlay/navigation patterns
- AI interaction components (prompt/reasoning/streaming)
- Data-oriented widgets (`Tabs`, `Table`)

## Hosting
- CI workflow: `.github/workflows/demo-pages.yml`
- Immediate preview link:
  - `https://rawcdn.githack.com/xiaocao12306/UI/main/apps/demo/dist/index.html`
- After enabling GitHub Pages, the demo is published to:
  - `https://xiaocao12306.github.io/UI/`
