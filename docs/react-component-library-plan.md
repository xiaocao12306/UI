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
- 进行中
  - 文档体系细化（组件 API、示例最佳实践，AI/Overlay 专项指南）
  - Storybook 与视觉回归基线
