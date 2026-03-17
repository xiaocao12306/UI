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
- 手动触发 `workflow_dispatch`

行为：
1. 安装依赖
2. 检查 `CHROMATIC_PROJECT_TOKEN`
3. 若 token 存在：构建 Storybook 并上传到 Chromatic
4. 若 token 不存在：优雅跳过，不阻塞主 CI

## 仓库配置步骤
1. 在 Chromatic 创建项目，获取 project token。
2. 在 GitHub 仓库 Secrets 添加 `CHROMATIC_PROJECT_TOKEN`。
3. 发起 PR，确认 `Chromatic Visual Tests` workflow 成功并生成 build 链接。

## 基线策略建议
- `main` 分支作为自动接受变更基线（已通过 `autoAcceptChanges: main` 配置）。
- 大范围视觉重构分批提交，避免单次快照噪音过大。
