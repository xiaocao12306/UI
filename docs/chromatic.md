# Chromatic 视觉回归接入

## 目标
为 Storybook 建立 PR 级视觉回归基线，避免样式或交互变更引入未预期的 UI 漂移。

## 本地命令
```bash
pnpm storybook:build
pnpm chromatic
```

说明：`pnpm chromatic` 依赖环境变量 `CHROMATIC_PROJECT_TOKEN`。

## GitHub Actions
工作流文件：`.github/workflows/chromatic.yml`

触发条件：
- Pull Request（`apps/storybook/**`、`packages/**` 等路径变更）
- 手动触发 `workflow_dispatch`（支持 `enforce` 开关）

行为：
1. 安装依赖
2. 检查 `CHROMATIC_PROJECT_TOKEN`
3. 若 token 存在：构建 Storybook 并上传到 Chromatic
4. 若 token 不存在且 `enforce=false`（默认）：优雅跳过，不阻塞主 CI（soft-skip）
5. 若手动触发且 `enforce=true`：token 缺失时直接失败（hard-gate）
6. 无论上传/跳过/失败，都会写入 `GITHUB_STEP_SUMMARY`（mode、token 状态、build URL、storybook URL、change/error 计数）

`enforce` 使用建议：
- 日常 PR：保持默认 `false`，避免在未配置 token 的仓库里阻塞开发流。
- 发布前人工验收：手动触发 workflow_dispatch 并设置 `enforce=true`，将视觉回归升级为硬门禁。

手动触发建议（发布前）：
1. GitHub Actions 打开 `Chromatic Visual Tests` workflow。
2. 点击 `Run workflow`，勾选 `enforce=true`。
3. 检查 run 的 `GITHUB_STEP_SUMMARY`：确认 token 状态、Chromatic build URL 与 change/error 计数。

## 仓库配置步骤
1. 在 Chromatic 创建项目，获取 project token。
2. 在 GitHub 仓库 Secrets 添加 `CHROMATIC_PROJECT_TOKEN`。
   - 详细步骤见：`docs/secrets.md`
3. 发起 PR，确认 `Chromatic Visual Tests` workflow 成功并生成 build 链接。

## 基线策略建议
- `main` 分支作为自动接受变更基线（已通过 `autoAcceptChanges: main` 配置）。
- 大范围视觉重构分批提交，避免单次快照噪音过大。
