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
pnpm storybook:docs:check
pnpm storybook:test
pnpm storybook:test:ci
```

或直接在包级别执行：

```bash
pnpm --filter @aurora-ui/storybook-app storybook
pnpm --filter @aurora-ui/storybook-app storybook:smoke
pnpm --filter @aurora-ui/storybook-app build-storybook
pnpm --filter @aurora-ui/storybook-app storybook:test
pnpm --filter @aurora-ui/storybook-app storybook:test:ci
```

## Interaction Runner
- 工具：`@storybook/test-runner`
- 入口脚本：
  - `storybook:docs:check`：校验 docs MDX 中 `*Stories` 引用是否都有对应 import，避免文档页运行时 `ReferenceError`
  - `storybook:test`：针对已运行的 Storybook URL 执行交互测试
  - `storybook:test:ci`：先执行 `storybook:docs:check`，再在本地静态产物（`storybook-static`）上启动临时服务并运行测试（启动前自动清理 `6106` 端口残留进程）
- 当前已覆盖 play 场景：
  - `Core/Button` 键盘激活 + loading 禁用分支
  - `Core/Tag` MetadataRow/AI context 可见性断言
  - `Form/Input` blur 校验 + 输入计数 + 提交禁用分支
  - `Form/Checkbox` 勾选切换、mixed 状态与 invalid/disabled 展示路径
  - `Form/RadioGroup` 选项切换、禁用项和 invalid 语义路径
  - `Form/Switch` 点击与 Space 键切换路径，invalid/disabled 展示状态
  - `Form/Select` 选项切换与 invalid/disabled 展示路径
  - `Form/Textarea` 多行输入提交与 invalid/readOnly/disabled 展示路径
  - `Form/Combobox` 选择流程 + Escape/blur 关闭路径
  - `Form/DatePicker` 受控日期更新流程与 StateMatrix 展示路径
  - `Data/Pagination` 翻页流程与 Home/End 快捷切页
  - `Overlay/Dialog` Escape dismiss 与 non-dismissible 分支
  - `Overlay/Drawer` 侧边抽屉打开关闭、non-dismissible 分支
  - `Overlay/Tooltip` hover 延迟打开、受控/禁用分支与 Escape 关闭路径
  - `Overlay/Popover` click/Escape/ArrowDown 打开关闭路径
  - `Overlay/Dropdown` End/Enter 选择 + ArrowDown 再次打开 + Escape 回焦 trigger + outside pointer 保持目标焦点 + Tab 关闭并前进焦点
  - `AI/CommandPalette` 搜索/禁用项/回车关闭流程 + 禁用命令点击防误触
  - `AI/PromptInput` 提交/禁用边界与多动作反馈路径
  - `AI/ReasoningPanel` 展开/折叠可访问性路径
  - `AI/StreamingCodeBlock` streaming 完成与 busy 状态路径
  - `Feedback/Empty` action CTA 与状态语义路径
  - `Feedback/Skeleton` 装饰/叙述语义与形态分支路径
  - `Feedback/LoadingDots` pause/resume 与 live region 分支路径
  - `Feedback/StreamingText` streaming/instant 完成态与 cursor 分支路径
  - `Feedback/Progress` determinate/indeterminate 语义路径
  - `Feedback/Alert` dismiss 分支与 live region 语义路径
  - `Feedback/Toast` 关闭与重开流程 + Escape 栈顺序/全局快捷键抢占分支
  - `Data/Tabs` 点击切换 + Home/End 键导航（含禁用项跳过）+ manual/vertical 模式键盘路径
  - `Data/Table` 键盘/点击排序切换与 `aria-sort` 状态同步

## 当前已覆盖故事
- `Core/Button`
- `Form/Input`
- `Form/Checkbox`
- `Form/RadioGroup`
- `Form/Switch`
- `Form/Select`
- `Form/Textarea`
- `Form/Combobox`
- `Form/DatePicker`
- `Overlay/Dialog`
- `Overlay/Drawer`
- `Overlay/Tooltip`
- `Overlay/Popover`
- `Overlay/Dropdown`
- `Data/Tabs`
- `Data/Table`
- `Data/Pagination`
- `Data/Pagination/KeyboardShortcuts`
- `Feedback/Empty`
- `Feedback/Skeleton`
- `Feedback/LoadingDots`
- `Feedback/StreamingText`
- `Feedback/Progress`
- `Feedback/Toast`
- `Feedback/Alert`
- `AI/CommandPalette`
- `AI/PromptInput`
- `AI/MessageBubble`
- `AI/ReasoningPanel`
- `AI/StreamingCodeBlock`
- `Docs/Getting Started`
- `Docs/Component API`
- `Docs/Component Catalog`
- `Docs/Best Practices`
- 核心边界示例：`CommandPalette/QueryTelemetry`、`CommandPalette/DisabledCommandGuard`、`CommandPalette/GuardedDismissEvents`、`CommandPalette/EscapeClearsQueryFirst`、`CommandPalette/EscapePreemptedByGlobalHandler`、`Toast/ActionRequired`、`Toast/EscapePreemptedByGlobalHandler`、`Toast/EscapeGuardedByToastHandler`、`Dialog/EscapeIgnoresImeComposition`、`Dialog/EscapePreemptedByGlobalHandler`、`Drawer/EscapeIgnoresImeComposition`、`Drawer/EscapePreemptedByGlobalHandler`、`Popover/EscapePreemptedByGlobalHandler`、`Dropdown/EscapePreemptedByGlobalHandler`、`Dropdown/TabDismissToNextControl`、`Tabs/KeyboardNavigationGuide`、`Tabs/ManualVerticalActivation`、`Table/SortTelemetry`（含键盘排序）、`Table/RowHeaderSemantics`

说明：预览层通过 toolbar 全局切换 `core-light/core-dark/glass/neo-brutal`，用于验证 token 与主题一致性。
生产级验收矩阵：`docs/production-quality-checklist.md`
构建噪音控制：`.storybook/main.ts` 已设置 `vite.build.chunkSizeWarningLimit=2500`，避免 Storybook vendor chunk 的误导性超限告警干扰 CI 日志。

## Chromatic
- 工作流：`.github/workflows/chromatic.yml`
- 接入文档：`docs/chromatic.md`
- 若仓库未配置 `CHROMATIC_PROJECT_TOKEN`，工作流会自动跳过上传并提示配置方式

## 外部预览
- GitHub Pages 工作流：`.github/workflows/demo-pages.yml`
- Pages 启用后可用地址：
  - Demo：`https://xiaocao12306.github.io/UI/`
  - Storybook：`https://xiaocao12306.github.io/UI/storybook/`
- 工作流会在 `GITHUB_STEP_SUMMARY` 输出以上链接，便于发布后直接复制。
- 备用静态地址（无需 Pages）：`https://rawcdn.githack.com/xiaocao12306/UI/main/apps/storybook/storybook-static/index.html`

## Blocker Log
- 日期：2026-03-17
- 事项：执行 `pnpm dlx storybook@next init --builder Vite --type react`
- 阻塞：`storybook@next` 要求 Node `20.19+` 或 `22.12+`，当前环境 Node `18.19.1`
- 处理：改用 Storybook 8 完成初始化与交付；待运行时升级 Node 后再切换到 `@next/10.x`
