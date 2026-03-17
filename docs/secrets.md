# Repository Secrets 配置指引

本仓库当前使用的关键 secrets：
- `CHROMATIC_PROJECT_TOKEN`：Storybook 视觉回归上传
- `NPM_TOKEN`：Changesets 自动发布到 npm

建议先执行一次本地预检：

```bash
pnpm release:preflight
```

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

安全建议：
- 仅在仓库级 secret 保存 token，避免写入代码或文档示例中的真实值。
- token 泄露后立即在 Chromatic / npm 后台撤销并重建。
