# React 组件库设计与实现方案（基于 ui设计报告）

## 1. 目标与范围
- 目标：建设一个可长期维护的 React 企业/消费级通用组件库，兼顾品牌表达、性能、可访问性、AI 交互场景。
- 产出：`tokens + primitives + components + patterns + docs + release` 的完整工程体系。
- 非目标：不在 v1 追求全量业务组件，优先打通基础组件和主题系统。

## 2. 从报告提炼的设计原则
- 原则 1：Token First。
  - 从“扁平化/新拟态/毛玻璃/新粗野”等风格演进中抽象统一设计变量，而非把风格写死在组件。
- 原则 2：动态排印与动效分级。
  - 参考动态字体排印报告，提供可选 Variable Font 轴映射能力（默认关闭，按场景启用）。
- 原则 3：AI 交互状态是一等公民。
  - 参考延迟掩蔽报告，Skeleton、Streaming、Reasoning Panel 纳入基础状态组件。
- 原则 4：全局悬浮层标准化。
  - 参考全局悬浮控制面板报告，统一 Overlay/Floating/Z-index/Focus Trap 模型。
- 原则 5：可访问性与性能并重。
  - 所有交互组件默认满足 WCAG 2.2 AA 基线。

## 3. 技术栈选型（最终）
- 运行时：React 19、TypeScript 5.8。
- 包管理与构建编排：pnpm + Turbo。
- 组件构建：tsup（ESM/CJS + d.ts）。
- 样式策略：CSS Variables + Token 导出（v1）；后续接入 `vanilla-extract`。
- 可访问性基础：Radix Primitives（按需引入）、ARIA 语义约束。
- 文档与展示：Storybook 8（v1.1 接入）。
- 测试：Vitest + RTL（单元/交互），Playwright（E2E/回归），axe-core（无障碍）。
- 质量保障：ESLint 9、Prettier、Changesets、GitHub Actions。
- 发布：Changesets + npm provenance，语义化版本管理。

## 4. 仓库架构
- `packages/tokens`
  - 颜色、间距、圆角、阴影、动效、层级、字体 Token。
- `packages/primitives`
  - 低层能力：Box、Text、VisuallyHidden、Portal、FocusScope、DismissableLayer。
- `packages/react`
  - 面向业务组件：Button、Input、Select、Dialog、Toast、Tabs、Table、Form Field。
- `apps/storybook`（下一阶段）
  - 组件文档、交互演示、可访问性面板、视觉回归基线。

## 5. 设计系统分层
- Level 1: Global Tokens
  - `color.*`, `space.*`, `radius.*`, `shadow.*`, `motion.*`, `zIndex.*`。
- Level 2: Semantic Tokens
  - `surface.default`, `surface.elevated`, `text.primary`, `text.secondary`, `border.default`。
- Level 3: Component Tokens
  - `button.solid.bg`, `button.solid.text`, `input.focus.ring`。
- Level 4: Theme Packs
  - `core-light`, `core-dark`, `glass`, `neo-brutal`。

## 6. 组件规划
- 基础组件（MVP）
  - Button、Input、Textarea、Select、Checkbox、Radio、Switch、Tag、Badge。
- 反馈与状态
  - Alert、Toast、Progress、Skeleton、Empty、LoadingDots、StreamingText。
- 浮层与导航
  - Tooltip、Popover、Dialog、Drawer、Dropdown、Command Palette。
- AI 特化组件
  - ReasoningPanel、PromptInput、MessageBubble、StreamingCodeBlock。

## 7. 工程规范
- 分支模型：`main` + `feature/*`。
- 提交规范：Conventional Commits。
- 版本管理：Changesets。
- 组件准入门槛：
  - API 设计文档
  - Storybook 示例
  - 单元测试 + a11y 检查
  - Token 依赖声明
  - 生产级状态矩阵（hover/active/focus/disabled/loading/error/empty）
  - 键盘交互与边界行为（Escape / outside / roving focus / close policy）

## 8. 实施里程碑
- M0（第 1 周）
  - 初始化仓库、构建链路、Token 基础、Button/Box。
- M1（第 2-3 周）
  - 表单基础组件与 Overlay 体系。
- M2（第 4-5 周）
  - 数据展示与导航组件。
- M3（第 6 周）
  - AI 状态组件（Skeleton/Streaming/ReasoningPanel）。
- M4（第 7 周）
  - Storybook、测试补齐、首版发布（`0.1.0`）。

## 9. 风险与对策
- 风格分裂风险：通过 Semantic Token 收敛，不允许组件直接引用硬编码颜色。
- 性能风险：控制运行时样式计算，优先静态样式输出。
- 可访问性风险：建立 CI 阶段 axe 扫描和键盘回归清单。
- AI 场景不稳定：Streaming 与 Reasoning 组件做降级策略（非流式兜底）。

## 10. 验收标准
- 可发布：3 个包可独立构建并产出类型。
- 可复用：MVP 组件在示例项目完成接入。
- 可扩展：主题切换和 Token 扩展无需破坏组件 API。
- 可维护：CI 全绿（lint/typecheck/test/build）。

## 11. 当前落地进展（持续更新）
- 已完成
  - `tokens/primitives/react` 三层结构与构建链路
  - 全局/语义/组件 Token 与主题包
  - 基础组件、反馈组件、浮层组件、AI 组件
  - Demo 网站与多场景展示
  - 单元测试基线与 CI 质量门禁
  - 浮层组件交互测试（Escape / outside pointer / command filter）
  - Demo 命令面板快捷键（Ctrl/Cmd + K）与动作示例
  - Playwright Demo 冒烟测试与 CI 集成
  - Storybook Playground（Button/Input/Dialog/CommandPalette）与主题切换
  - Chromatic 视觉回归工作流（支持 token 缺失时优雅跳过）
  - Changesets 发布工作流（支持缺失 NPM token 时仅创建 release PR）
  - Storybook 文档体系（Getting Started / Component API / Component Catalog / Best Practices）
  - Data 与 AI 组件故事补齐（Tabs/Table/PromptInput）
  - 组件可访问性补强（Dialog `aria-labelledby`、CommandPalette listbox 语义、Toast live region）
  - Demo 体验增强（主题持久化、分区导航活跃态）与 E2E 回归补齐
  - Storybook 静态站公网预览（`apps/storybook/storybook-static`）与可访问外链
  - Secrets 配置文档（`docs/secrets.md`）及 README 引导
  - 发布 dry-run 验证（`changeset version` + `npm publish --dry-run`）
  - 发布 dry-run 复验（生产级返工后再次验证 3 个包 tarball 清单与体积）
  - 发布前置校验脚本（`pnpm release:preflight` 检查 Chromatic/NPM token 并输出缺失提示）
  - 发布 dry-run 自动化（`pnpm release:dry-run` 脚本 + `.github/workflows/release-dry-run.yml`）
  - Release 工作流缺失 `NPM_TOKEN` 提示增强（GitHub warning + secret 配置路径）
  - 生产级返工（Button、Input/FormField、Dialog）
  - 生产级返工（Popover、Dropdown、CommandPalette）
  - 生产级返工（Toast）
  - 生产级返工（Tabs）
  - 生产级返工（Table）
  - 横向收口（CommandPalette：Home/End 键盘分支、禁用项跳过、Query Telemetry 示例）
  - CommandPalette 焦点模型补强（`tabIndex=-1` option + pointer 选择保持 combobox 焦点）
  - 横向收口（Toast：auto-dismiss/pauseOnHover/closeOnEscape=false 测试分支、ActionRequired 示例）
  - Toast i18n 可访问性补充（`closeLabel` 自定义关闭按钮文案）
  - 横向收口（Tabs/Table：Home/End 焦点流、`aria-sort` 与排序切换断言、排序 telemetry 示例）
  - Table 语义边界修复（`defaultSortKey` 指向非 sortable 列时忽略初始排序，保持 `aria-sort` 正确）
  - Table Storybook 边界示例补齐（`InvalidDefaultSortKeyFallback` 覆盖无效默认排序键）
  - CommandPalette 语义补强（`aria-disabled` option 语义与全禁用状态测试）
  - Toast 生命周期补丁（hover pause 状态在 close/reopen 后复位）
  - Table 可访问性增强（sortable header `aria-label` 下一步排序提示、`scope="col"`）
  - Overlay 层级 token 化收口（Dialog/Drawer/Popover/Dropdown/Tooltip 使用统一 `z` 变量）
  - Overlay 行为文档深化（层级 token 标尺 + focus return 规则，`docs/overlay-behavior.md`）
  - Demo E2E 扩展（Data 区域 Tabs Home/End 与 Table 排序回归）
  - Pagination 组件落地（`@aurora-ui/react` 导出、单元测试、Storybook `Data/Pagination`）
  - Demo 数据区分页示例与 E2E 回归（Release feed 翻页路径）
  - Combobox 组件落地（搜索过滤、禁用项跳过、Arrow/Home/End/Enter 键盘流）
  - Storybook `Form/Combobox` + Demo 表单集成 + E2E 选项选择回归
  - DatePicker 组件落地（受控/非受控日期输入、min/max、invalid 状态）
  - Storybook `Form/DatePicker` + Demo 日期联动 + E2E 日期更新回归
  - Storybook interaction runner 接入（`@storybook/test-runner`、`storybook:test:ci`、CI 集成）
  - Storybook `play` 交互样例扩展（Button/Input/Combobox/DatePicker/Dialog/Tooltip/Popover/Dropdown/Pagination/CommandPalette/Toast/Tabs/Table）与本地静态站回归通过
  - PromptInput 生产级交互补齐（Ctrl/Cmd+Enter 提交、submitting 禁用边界、多动作反馈 Storybook 路径）
  - AI 组件补齐（MessageBubble/ReasoningPanel/StreamingCodeBlock 的单测 + Storybook + 交互验证）
  - Storybook 文档补齐（Component API / Component Catalog / Best Practices 增补 AI 组件章节）
  - Storybook API 文档深化（Button/Input/Dialog/Popover/Dropdown API 与 overlay 关闭策略说明）
  - Demo E2E 扩展（AI 区域 PromptInput 提交 + ReasoningPanel 展开 + StreamingCodeBlock 完成态）
  - Combobox 生产级补齐（Escape/blur 关闭策略、`aria-selected` 语义修正、状态 Storybook 场景）
  - Textarea 生产级返工（invalid/focus/hover/readOnly/disabled 状态对齐、单测 + Storybook `Form/Textarea`）
  - Select 生产级返工（invalid/focus/hover/disabled 状态对齐、单测 + Storybook `Form/Select`）
  - Checkbox 生产级返工（indeterminate/invalid/disabled + helper narration 语义、单测 + Storybook `Form/Checkbox`）
  - RadioGroup 生产级返工（受控/非受控、禁用选项、invalid 语义、单测 + Storybook `Form/RadioGroup`）
  - Switch 生产级返工（受控/非受控、描述语义、invalid/disabled 状态、单测 + Storybook `Form/Switch`）
  - Drawer 生产级返工（title/description aria 语义、可配置 dismiss policy、单测 + Storybook `Overlay/Drawer`）
  - Tooltip 生产级返工（受控/非受控、延迟开关策略、`aria-describedby` 语义合并、单测 + Storybook `Overlay/Tooltip`）
  - Progress 生产级返工（determinate/indeterminate 语义、tone/size/valueText API、单测 + Storybook `Feedback/Progress`）
  - Empty 生产级返工（status 语义、tone/align/action/icon 场景、单测 + Storybook `Feedback/Empty`）
  - Skeleton 生产级返工（装饰/叙述双语义、variant 形态与动画分支、单测 + Storybook `Feedback/Skeleton`）
  - LoadingDots 生产级返工（pause/resume 与 live region 语义、interval/dotCount API、单测 + Storybook `Feedback/LoadingDots`）
  - StreamingText 生产级返工（streaming 生命周期回调、cursor 策略、单测 + Storybook `Feedback/StreamingText`）
  - Pagination 细节打磨（禁用态视觉与 `showFirstLast=false` 分支测试）
  - Pagination 生产级返工（Home/End/Arrow 键盘快捷翻页、重复回调防抖、可定制 aria label、单测 + Storybook `Data/Pagination`）
  - DatePicker 生产级返工（`aria-invalid` 推断、`onChange` + `onValueChange` 双回调、状态矩阵 Storybook 与单测补齐）
  - Alert 生产级返工（status/alert live region 语义、dismiss 分支、单测 + Storybook `Feedback/Alert`）
  - 生产级验收清单落地（`docs/production-quality-checklist.md`）
  - Demo E2E 扩展（Dropdown 键盘打开、Toast Escape 关闭）
- 进行中
  - Storybook 视觉回归实链（待仓库配置 `CHROMATIC_PROJECT_TOKEN` 后产出首次快照基线）
  - Release 实发布验证（待仓库配置 `NPM_TOKEN` 后执行真实 npm publish）
