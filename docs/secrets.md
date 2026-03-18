# Repository Secrets 配置指引

本仓库当前使用的关键 secrets：

- `CHROMATIC_PROJECT_TOKEN`：Storybook 视觉回归上传
- `NPM_TOKEN`：Changesets 自动发布到 npm

建议先执行本地预检（按目标选择 scope）：

```bash
pnpm release:preflight
pnpm release:preflight -- --scope=chromatic
pnpm release:preflight -- --scope=publish
```

- `release:preflight`：检查 `CHROMATIC_PROJECT_TOKEN + NPM_TOKEN`
- `release:preflight -- --scope=chromatic`：仅检查 `CHROMATIC_PROJECT_TOKEN`
- `release:preflight -- --scope=publish`：仅检查 `NPM_TOKEN`

## CHROMATIC_PROJECT_TOKEN

用途：启用 `.github/workflows/chromatic.yml` 的快照上传。

配置步骤：

1. 登录 https://www.chromatic.com/ ，创建或进入项目。
2. 在项目设置中复制 `Project Token`。
3. 打开 GitHub 仓库 `Settings -> Secrets and variables -> Actions`。
4. 新增 `Repository secret`：
   - Name: `CHROMATIC_PROJECT_TOKEN`
   - Value: `<your chromatic project token>`
5. 提交一个包含 Storybook 变更的 PR，确认 `Chromatic Visual Tests` 任务执行上传而非跳过。

本地验证（可选）：

```bash
export CHROMATIC_PROJECT_TOKEN=<your token>
pnpm storybook:build
pnpm chromatic
```

`enforce` 使用建议（Chromatic workflow）：

- 日常 PR：保持默认 `enforce=false`，缺失 token 时 soft-skip（不阻塞主 CI）。
- 发布前人工验收：手动触发 `workflow_dispatch` 并设置 `enforce=true`，将 `CHROMATIC_PROJECT_TOKEN` 缺失升级为硬失败。

## NPM_TOKEN

用途：启用 `.github/workflows/release.yml` 的 npm publish。

配置步骤：

1. 登录 npm（https://www.npmjs.com/）。
2. 创建自动化 token（Automation token）。
3. 打开 GitHub 仓库 `Settings -> Secrets and variables -> Actions`。
4. 新增 `Repository secret`：
   - Name: `NPM_TOKEN`
   - Value: `<your npm automation token>`
5. 推送到 `main` 或手动触发 `Release` workflow，确认 publish 步骤执行。

未配置时的预期行为：

- `Release` workflow 仍会执行 Changesets 版本 PR 自动化，但会显示 `Release Publish Skipped` warning，并提示配置路径。
- `Release` 与 `Chromatic` workflow 都会在 `GITHUB_STEP_SUMMARY` 输出可读的 skip 原因与修复步骤。

`enforce` 使用建议（Release workflow）：

- 日常自动触发：保持默认 `enforce=false`，缺失 token 时允许软跳过 publish，避免阻塞非发布类迭代。
- 发布前人工验收：手动触发 `workflow_dispatch` 并设置 `enforce=true`，将 `NPM_TOKEN` 缺失升级为硬失败，避免误以为完成了真实发布。

统一可审阅口径：

- `chromatic.yml` 与 `release.yml` 都会在 `GITHUB_STEP_SUMMARY` 输出 `enforce mode` 与 token 配置状态。
- token 缺失时 summary 会附修复路径：`docs/secrets.md`。

安全建议：

- 仅在仓库级 secret 保存 token，避免写入代码或文档示例中的真实值。
- token 泄露后立即在 Chromatic / npm 后台撤销并重建。
