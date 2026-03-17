# Storybook 使用与维护

## 目录与定位
- 应用目录：`apps/storybook`
- 框架：`@storybook/react-vite`（Storybook 8）
- 目标：为 `@aurora-ui/react` 提供组件可视化、主题切换与交互演示

## 启动与构建
在仓库根目录执行：

```bash
pnpm storybook:dev
pnpm storybook:smoke
pnpm storybook:build
```

或直接在包级别执行：

```bash
pnpm --filter @aurora-ui/storybook-app storybook
pnpm --filter @aurora-ui/storybook-app storybook:smoke
pnpm --filter @aurora-ui/storybook-app build-storybook
```

## 当前已覆盖故事
- `Core/Button`
- `Form/Input`
- `Overlay/Dialog`
- `Overlay/Popover`
- `Overlay/Dropdown`
- `Data/Tabs`
- `Data/Table`
- `AI/CommandPalette`
- `AI/PromptInput`
- `Docs/Getting Started`
- `Docs/Component API`
- `Docs/Component Catalog`
- `Docs/Best Practices`

说明：预览层通过 toolbar 全局切换 `core-light/core-dark/glass/neo-brutal`，用于验证 token 与主题一致性。

## Chromatic
- 工作流：`.github/workflows/chromatic.yml`
- 接入文档：`docs/chromatic.md`
- 若仓库未配置 `CHROMATIC_PROJECT_TOKEN`，工作流会自动跳过上传并提示配置方式

## Blocker Log
- 日期：2026-03-17
- 事项：执行 `pnpm dlx storybook@next init --builder Vite --type react`
- 阻塞：`storybook@next` 要求 Node `20.19+` 或 `22.12+`，当前环境 Node `18.19.1`
- 处理：改用 Storybook 8 完成初始化与交付；待运行时升级 Node 后再切换到 `@next/10.x`
