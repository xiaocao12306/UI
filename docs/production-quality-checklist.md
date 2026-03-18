# Production Quality Checklist (Core + AI Components)

## Quality Gate (Must Pass)
- Interaction states: hover / active / focus / disabled / loading / error / empty (as applicable)
- Keyboard behavior: complete and deterministic
- Accessibility: semantic roles, labels, `aria-*` wiring, dismiss paths
- Edge behavior: controlled/uncontrolled behavior and close policy clarity
- Tests: unit coverage for key interaction branches
- Storybook: at least one API story + one state/edge scenario story

## Component Matrix

| Component | Status | Storybook Entry | Key Tests |
| --- | --- | --- | --- |
| Button | production-refined | `Core/Button` | `Button.test.tsx` |
| Tag | production-refined | `Core/Tag` | `Tag.test.tsx` |
| Badge | production-refined | `Core/Badge` | `Badge.test.tsx` |
| Input / FormField | production-refined | `Form/Input` | `Input.test.tsx`, `FormField.test.tsx` |
| Select | production-refined | `Form/Select` | `Select.test.tsx` |
| Textarea | production-refined | `Form/Textarea` | `Textarea.test.tsx` |
| Checkbox | production-refined | `Form/Checkbox` | `Checkbox.test.tsx` |
| RadioGroup | production-refined | `Form/RadioGroup` | `RadioGroup.test.tsx` |
| Switch | production-refined | `Form/Switch` | `Switch.test.tsx` |
| Combobox | production-refined | `Form/Combobox` | `Combobox.test.tsx` |
| DatePicker | production-refined | `Form/DatePicker` | `DatePicker.test.tsx` |
| Dialog | production-refined | `Overlay/Dialog` | `Dialog.test.tsx` |
| Drawer | production-refined | `Overlay/Drawer` | `Drawer.test.tsx` |
| Tooltip | production-refined | `Overlay/Tooltip` | `Tooltip.test.tsx` |
| Popover | production-refined | `Overlay/Popover` | `Popover.test.tsx` |
| Dropdown | production-refined | `Overlay/Dropdown` | `Dropdown.test.tsx` |
| CommandPalette | production-refined | `AI/CommandPalette` | `CommandPalette.test.tsx` |
| PromptInput | production-refined | `AI/PromptInput` | `PromptInput.test.tsx` |
| MessageBubble | production-refined | `AI/MessageBubble` | `MessageBubble.test.tsx` |
| ReasoningPanel | production-refined | `AI/ReasoningPanel` | `ReasoningPanel.test.tsx` |
| StreamingCodeBlock | production-refined | `AI/StreamingCodeBlock` | `StreamingCodeBlock.test.tsx` |
| Toast | production-refined | `Feedback/Toast` | `Toast.test.tsx` |
| Progress | production-refined | `Feedback/Progress` | `Progress.test.tsx` |
| Empty | production-refined | `Feedback/Empty` | `Empty.test.tsx` |
| Skeleton | production-refined | `Feedback/Skeleton` | `Skeleton.test.tsx` |
| LoadingDots | production-refined | `Feedback/LoadingDots` | `LoadingDots.test.tsx` |
| StreamingText | production-refined | `Feedback/StreamingText` | `StreamingText.test.tsx` |
| Alert | production-refined | `Feedback/Alert` | `Alert.test.tsx` |
| Tabs | production-refined | `Data/Tabs` | `Tabs.test.tsx` |
| Table | production-refined | `Data/Table` | `Table.test.tsx` |
| Pagination | production-refined | `Data/Pagination` | `Pagination.test.tsx` |

## Ongoing Maintenance Rules
1. Any API change must update Storybook controls/docs and at least one interaction test.
2. Any a11y behavior change must update role/name assertions in tests.
3. Any visual state change should be checked in all 4 theme packs and Chromatic (if token configured).
4. Release blocking condition: `pnpm verify` + `pnpm demo:e2e` + `pnpm storybook:test:ci` + `pnpm release:dry-run` all green (or run `pnpm release:gate`).

## Recent Closure Notes (2026-03-17)
- CommandPalette: added `Home/End` keyboard paths, deterministic disabled-option skipping, explicit `aria-disabled` option semantics, and query telemetry + empty message Storybook example.
- CommandPalette: live region narration now differentiates visible vs actionable results (`enabledCount`), and announces disabled-only matches as non-executable.
- Toast: live region now wires `aria-labelledby/aria-describedby` by default and supports `ariaLabel` override for icon-only titles.
- Tabs: added `orientation` API with vertical ArrowUp/ArrowDown flow while preserving Home/End and disabled-tab skipping.
- Table: fallback row key now uses source index (not sorted index) so row DOM/state remains stable across sort toggles.
- Dropdown: typeahead now supports buffered multi-character matching, repeated-key cycling, and accent-normalized `textValue` search.
- Dialog: close path now restores focus to the previously focused element by default, with `restoreFocus={false}` escape hatch.
- CommandPalette focus model hardening: option nodes now stay out of tab order (`tabIndex=-1`) and preserve combobox focus on pointer selection for `aria-activedescendant` parity.
- CommandPalette search hardening: `commands[].textValue` now supports non-string labels, and matching is accent-insensitive (`cafe` matches `Café`).
- Table i18n hardening: `getSortAriaLabel` now enables localized sortable-header narration while preserving `aria-sort` behavior.
- Table loading hardening: `loading/loadingContent` now sets `aria-busy`, suppresses stale rows/empty-state rendering, and disables sort controls during refresh windows.
- Table row-key hardening: `rowKey(row, rowIndex)` now receives source-data index (not sorted visual index), preventing index-derived key churn during sort toggles.
- Table render-index hardening: `columns[].render(row, rowIndex, sourceIndex)` now exposes visual index + source index together, so sorted rankings and source-linked telemetry can stay deterministic.
- Table header semantics hardening: non-sortable columns no longer expose `aria-sort`, preventing screen readers from announcing inert headers as sortable.
- Toast stack-order hardening: Escape dismissal now targets only the latest open toast first, so stacked notifications close deterministically from top to bottom.
- Toast interaction-priority hardening: focusing or hovering an older toast now promotes it to stack top so Escape follows current user interaction context.
- CommandPalette batching hardening: `closeOnSelect` now supports persistent mode for multi-command execution without repeated reopen friction.
- Tabs naming hardening: `ariaLabelledBy` now supports visible-heading-linked tablist naming, reducing generic screen-reader labels.
- Popover/Dropdown dismiss-policy hardening: both overlays now expose `closeOnEscape` / `closeOnOutsidePointer` and low-level dismiss event hooks for blocking confirmation flows.
- CommandPalette dismiss-policy hardening: palette now supports `closeOnEscape` / `closeOnOutsidePointer` toggles for approval flows that must stay open until explicit action.
- Demo CommandPalette blocking-mode coverage: added UI toggle for dismiss policy (`closeOnEscape/closeOnOutsidePointer`) and Playwright regression asserting Escape/outside click do not close when blocking mode is enabled.
- Demo Toast blocking-mode coverage: added `closeOnEscape={false}` notification path and Playwright regression asserting Escape is ignored until explicit close action.
- Demo CommandPalette persistent-mode coverage: added runtime `closeOnSelect=false` toggle and Playwright regression asserting selection keeps palette open for batch actions.
- Demo CommandPalette disabled-option coverage: added disabled archive command and Playwright regression asserting click does not close or execute blocked action.
- Demo Toast stack-order coverage: added runtime stacked-toast trigger and Playwright regression asserting Escape closes newest toast before older notices.
- Demo Tabs manual-activation coverage: added `activationMode="manual"` data-workflow example and Playwright regression locking focus-move vs Enter-activation split.
- Demo Tabs vertical-orientation coverage: added `orientation="vertical"` example and Playwright ArrowUp/ArrowDown regression for focus + activation flow.
- Demo Table loading coverage: added runtime loading toggle and Playwright regression for `aria-busy`, disabled sort controls, and stale-row suppression.
- Demo Table empty-state coverage: added runtime empty toggle and Playwright regression asserting empty copy plus disabled sortable headers.
- Demo Dropdown focus-policy coverage: added outside-focus target and Playwright regressions for Escape trigger focus return + outside pointer focus retention.
- Demo Dropdown Tab flow coverage: added Playwright regression asserting menu closes on Tab and focus continues to the next actionable control.
- Storybook Dropdown focus-policy coverage: added explicit `EscapeDismissFocusReturn` interaction scenario to lock trigger focus restoration on keyboard dismiss.
- Storybook docs parity: `Component API` and `Best Practices` now both include Dropdown focus-policy canvases for implementation + QA alignment.
- CommandPalette disabled-action guard: added dedicated Storybook `DisabledCommandGuard` interaction scenario plus unit branch to ensure disabled options never execute and never dismiss palette.
- Toast Escape preemption guard: added Storybook `EscapePreemptedByGlobalHandler` scenario to lock `defaultPrevented` semantics and prevent accidental dismiss under global shortcut handlers.
- Table keyboard sort parity: added `Enter/Space` activation coverage in unit + Storybook `SortTelemetry` play assertions to lock non-pointer sorting flows.
- Tabs keyboard edge parity: Storybook `KeyboardNavigationGuide` now includes `Home/End` assertions with disabled-tab skipping to lock focus/selection semantics.
- Data API docs parity: Component API + Best Practices now explicitly document Table sortable-header keyboard activation (`Enter/Space`) for integration teams.
- Demo data-flow parity: Playwright now covers Table sort keyboard activation (`Enter`/`Space`) to match Storybook/unit keyboard sorting guarantees.
- Demo tabs parity: Playwright now covers manual-activation `Space` path so Enter/Space semantics stay aligned with Tabs API contract.
- Tabs cross-browser keyboard parity: manual activation now accepts legacy `Spacebar` key value, with dedicated unit regression coverage.
- Tabs telemetry de-dup hardening: manual mode now ignores follow-up keyboard-generated click (`detail=0`) after key activation, preventing duplicate `onValueChange` emissions.
- Storybook Tag stability hardening: `Core/Tag/MetadataRow` now has explicit play assertions to reduce interaction-runner navigation retry noise.
- Storybook Toast stability hardening: `Feedback/Toast/ToneMatrix` now uses `duration={0}` so baseline stories stay deterministic during interaction-runner sweeps.
- Storybook Pagination stability hardening: keyboard stories now await async role transitions (`findByRole`) and assert focus preconditions to reduce interaction-runner retry noise.
- Pagination naming hardening: added `ariaLabelledBy` so pager nav can inherit visible-heading naming and suppress fallback `aria-label` when heading binding is present.
- Pagination focus-continuity hardening: keyboard paging (`Home/End/Arrow`) now restores focus to the newly active page button, with unit + Storybook interaction coverage.
- Pagination Arrow-focus regression coverage: added explicit unit assertions for `ArrowLeft/ArrowRight` focus handoff so keyboard page transitions keep focus anchored to the newly active page.
- Storybook static-sync gate hardening: `storybook:static:check` now rebuilds static output and fails on `git status` diff so stale static artifacts are blocked before interaction tests.
- Demo visual productization hardening: updated hero panel, badge rail, nav pill styling, and section card surfaces for stronger brand hierarchy and commercial polish.
- Pages delivery hardening: GitHub Pages artifact now ships Demo root + Storybook subpath (`/storybook`) in one deploy workflow.
- Pages observability hardening: deploy workflow now writes Demo + Storybook external URLs into `GITHUB_STEP_SUMMARY`.
- Release-gate baseline refresh: `pnpm release:gate` rerun passed on 2026-03-18 after latest Tabs/Table hardening, with dry-run tarballs still publishable.
- Release-gate hardening: `release:gate` now includes `storybook:test:ci` so publish checks always include Storybook interaction regression.
- Dropdown unit focus-policy branch: added explicit outside-target focus retention assertion so pointer dismiss cannot regress into trigger focus theft.
- Table empty-state sort coverage: sortable headers now disable when data is empty, with unit + Storybook play assertions to prevent no-op sort telemetry.
- Table single-row sort guard: sortable headers now disable when dataset size is `<=1`, with unit + Storybook play assertions to prevent redundant no-op sort telemetry.
- Tabs manual keyboard coverage: `Home/End` now has explicit unit + Storybook play assertions confirming focus movement does not activate panel until `Enter/Space`.
- Toast escape-priority coverage: added explicit `defaultPrevented` unit branch to ensure global/higher-priority Escape handlers can preempt toast dismissal.
- CommandPalette list semantics: options now expose `aria-posinset/aria-setsize` so assistive tech can announce positional context within filtered command results.
- Demo CommandPalette Escape-query coverage: added runtime toggle + Playwright regression to lock first-Escape query clear and second-Escape dismiss behavior.
- CommandPalette query-refinement parity: active option now follows command identity (not stale index), so narrowing search keeps Enter target deterministic.
- Demo Toast live-region coverage: added silent-toast path + Playwright regression asserting `aria-live=\"off\"` passive update semantics.
- Demo Toast focus-priority coverage: added Playwright regression ensuring focused toast is promoted and dismissed first on Escape in stacked mode.
- Toast live override coverage: added regression ensuring `live` can override danger default politeness while retaining `role="alert"` semantics.
- Button keyboard parity: added legacy `Spacebar` activation-key compatibility regression for pressed-state feedback.
- Button loading/disabled state parity: pressed visual offset now clears immediately when runtime transitions to `loading` or `disabled`.
- Form invalid-token parity: `aria-invalid=\"grammar|spelling\"` now remains intact across Input/Select/Textarea/DatePicker/Checkbox/RadioGroup/Switch/FormField instead of collapsing to `true`.
- FormField invalid precedence parity: field-level `error` now explicitly overrides child `aria-invalid=\"grammar|spelling\"` to `true`, keeping form-error narration deterministic.
- Storybook invalid-token parity: added `Form/Input/InvalidTokenSemantics` play assertion to keep `aria-invalid=\"grammar\"` semantics inside visual/interaction regression chain.
- Tabs interaction hardening: `activationMode="manual"` decouples arrow-key focus movement from activation and supports Enter/Space commit.
- Toast escape hardening: Escape now respects `defaultPrevented` so stacked notifications close one at a time.
- Overlay focus-policy hardening: Popover/Dropdown now restore trigger focus on Escape while preserving outside pointer target focus on pointer dismiss.
- Overlay scroll-lock hardening: Dialog/Drawer now share reference-counted body scroll lock, preventing premature unlock when multiple modal surfaces overlap.
- DismissableLayer stack hardening: nested overlays now dismiss from top layer first on Escape/outside pointer, preventing multi-layer cascade closes.
- Dialog nested overlay coverage: added `Dropdown in Dialog` Escape-order test + Storybook scenario to lock top-layer-first dismissal behavior.
- Drawer nested overlay coverage: added `Dropdown in Drawer` Escape-order test + Storybook scenario to lock one-layer-per-Escape dismiss behavior.
- Drawer focus-return parity: added `restoreFocus` API + unit/storybook interaction coverage to align close-focus policy with Dialog defaults.
- Release dry-run refresh: `pnpm release:dry-run` revalidated on 2026-03-18 with publishable tarballs (`tokens ~3.0 kB`, `primitives ~13.9 kB`, `react ~50.0 kB`).
- Storybook API 文档补齐：新增 Button/Input/Dialog/Popover/Dropdown 的 prop 契约与键盘/关闭策略说明，减少集成歧义。
- CommandPalette Escape 语义收口：新增 `clearQueryOnEscape`（默认启用）以实现首次 Escape 清空查询、二次 Escape 再关闭，降低搜索过程中误关闭风险。
- Table 空态播报收口：`emptyContent` 通过 `role="status"` 进行 polite 播报，避免数据筛空后仅视觉可见而读屏无反馈。
- Toast 播报强度收口：新增 `live`（`polite/assertive/off`）以支持被动高频通知降噪，同时保留危险态默认 assertive。
- Overlay 分层一致性收口：Dialog/Drawer/Popover/Dropdown/Tooltip 改为统一引用 `z` token 变量，避免硬编码层级漂移。
- Table 排序语义修复：`defaultSortKey` 非 sortable 列时不再错误设置初始 `aria-sort`，并补充单测覆盖。
- 发布链路提示收口：`release.yml` 在缺失 `NPM_TOKEN` 时输出结构化 warning 与配置路径，降低排障成本。
- Table Storybook 边界场景补齐：新增 `InvalidDefaultSortKeyFallback` 交互断言，覆盖非 sortable 默认排序键分支。
- Overlay 指南补齐：新增层级 token 标尺与焦点返回规则，统一 app 集成策略（`docs/overlay-behavior.md`）。
- Toast 可访问性细化：新增 `closeLabel` API，支持关闭按钮文案本地化与 Storybook 分支断言。
- 表单 invalid 语义修复：`aria-invalid="false"` 不再被误判为错误态（Input/Select/Textarea/DatePicker 覆盖单测）。
- 表单 invalid 语义收口：同样修复 Checkbox/RadioGroup/Switch 的 `aria-invalid` 合并逻辑，并补充 `true/false` 分支测试。
- 无障碍工具函数测试补齐：新增 `a11y.test.ts`，锁定 `resolveInvalidState` 对 `true/false/grammar/spelling` 输入的稳定语义。
- FormField 语义合并修复：保留子控件既有 `aria-describedby/aria-invalid/required`，并与字段级提示/错误做增量合并。
- FormField required/error 收口：`aria-required="false"` 不再被误判为必填，且子控件 `aria-errormessage` 会与字段错误 ID 去重合并。
- Tag/Badge 覆盖补齐：新增单测并接入 Storybook `Core/Tag` + `Core/Badge` 场景，补上导出组件验收闭环。
- Verify 质量门禁修复：Pagination 键盘快捷键改为按钮级处理以满足 a11y lint，RadioGroup `aria-invalid` 收敛到 `radiogroup` 容器，Tooltip/Storybook 示例补齐 lint 合规写法。
- CommandPalette 可访问性补强：新增可定制结果播报 `getResultsStatusText`，将空状态可视文案与 live region 解耦，补齐单测与 Storybook 遥测场景。
- Core 组件回归补点：为 `Core/Tag` 与 `Core/Badge` 增加 Storybook `play` 断言，确保状态文案进入视觉/交互回归链路。
- FormField 文档收口：新增 `Form/FormField` Storybook 入口与 `play` 断言，补齐子控件 `aria-describedby` / `aria-errormessage` 合并的可执行示例。
- Table 命名语义补齐：新增 `ariaLabel` API 与 Storybook `AccessibleNameWithoutCaption` 场景，覆盖无 caption 的可访问性分支。
- Table 命名语义扩展：新增 `ariaLabelledBy` API 与 Storybook `AccessibleNameLabelledByHeading` 场景，覆盖可见标题命名表格路径并优先于 `ariaLabel`。
- Table 命名兜底收口：无 `caption/ariaLabel` 时回退 `aria-label="Data table"`，补齐单测与 Storybook `AccessibleNameFallback` 断言。
- Table 排序稳定性收口：相同排序值保持原始输入顺序，避免同值行在不同运行环境中抖动。
- Tabs 回调语义收口：重复点击已选中页签不再触发 `onValueChange`，并补齐 Storybook 遥测去重交互断言。
- Tabs 引用语义收口：所有 `tabpanel` 持续挂载并使用 `hidden` 切换，保证每个 tab 的 `aria-controls` 都有有效目标。
- 表单 invalid token 收口：`aria-invalid="grammar|spelling"` 现在按错误态处理，统一辅助语义与样式分支。
- Dropdown 命名语义收口：`menu` 通过 trigger `aria-labelledby` 暴露可访问名称，并补齐单测分支。
- Dropdown typeahead 收口：新增字母键跳转与禁用项跳过，支持 `textValue` 为非字符串标签提供匹配文本。
- Overlay 引用语义收口：Popover/Dropdown 触发器在关闭时不再保留 `aria-controls`，打开时再建立关联并补齐单测。
- Storybook 类型门禁修复：`FormField` story 增补默认 `args`，恢复 `pnpm --filter @aurora-ui/storybook-app typecheck` 全绿。
- Overlay icon 触发器语义补齐：Popover/Dropdown 增加 `triggerAriaLabel` 并补单测 + Storybook 示例。
- Combobox 引用语义收口：关闭态不再保留 `aria-controls`，并补齐单测与 Storybook `KeyboardDismissPaths` 断言。
- PromptInput IME 收口：组合输入阶段屏蔽 Ctrl/Cmd+Enter 提交，补齐单测与 Storybook 交互断言。
- Toast 焦点暂停收口：`pauseOnHover` 现在覆盖 toast 内部键盘 focus 路径，防止操作 close/action 按钮时被计时器中断。
- Toast: added timer-path tests (`duration`, `pauseOnHover`) and `closeOnEscape={false}` branch, then fixed paused-state reset on close/reopen; Storybook now includes action-required persistent notification example.
- Tabs: validated `Home/End` focus + selection behavior with disabled tabs in keyboard flow tests.
- Table: validated `aria-sort` transitions and ascending/descending row-order toggling assertions; sortable headers now expose next-direction `aria-label` and `scope="col"`.
- Demo E2E: added Data section keyboard/sort regression (`Tabs Home/End`, table sort toggle) to guard real user flows.
- Pagination: added accessible nav controls, ellipsis behavior tests, Storybook examples, and demo feed page-switch E2E.
- Combobox: added searchable option filtering, disabled-option keyboard skip, and Storybook/demo regression coverage.
- DatePicker: added controlled date input wrapper, range/invalid coverage, and demo interaction regression.
- Storybook interaction runner: added `play`-based interaction checks and static-site test-runner execution (`storybook:test:ci`).
- Pagination polish: added disabled visual semantics and `showFirstLast={false}` branch coverage.
- Storybook play coverage expansion: added deterministic interaction assertions for `CommandPalette`, `Toast`, `Tabs`, and `Table`.
- AI component quality pass: added `MessageBubble`/`ReasoningPanel`/`StreamingCodeBlock` tests and Storybook stories, plus `PromptInput` submit/disabled/multi-feedback interaction coverage.
- Combobox production hardening: added `Escape` + blur dismiss paths, corrected `aria-selected` semantics to track selected value, and added disabled non-open guard coverage in unit + Storybook interaction checks.
- Textarea production hardening: aligned invalid/focus/hover/disabled/readOnly visual states with Input tokens, and added dedicated unit + Storybook coverage.
- Select production hardening: aligned invalid/focus/hover/disabled state semantics with Input tokens, and added dedicated unit + Storybook coverage.
- Checkbox production hardening: added mixed-state (`indeterminate`) semantics, helper narration wiring, and dedicated unit + Storybook coverage.
- RadioGroup production hardening: added controlled/uncontrolled flow, disabled options, invalid semantics, and dedicated unit + Storybook coverage.
- Switch production hardening: added controlled/uncontrolled flow, helper narration wiring, invalid/disabled semantics, and keyboard interaction coverage.
- Drawer production hardening: aligned with dialog-level aria semantics, configurable dismiss policy, and dedicated Storybook overlay scenarios.
- Tooltip production hardening: added controlled/uncontrolled flow, pointer delay/close policy, and `aria-describedby` wiring assertions.
- Tooltip `aria-describedby` lifecycle hardening: trigger now has regression coverage for appending tooltip ID on open and cleaning it after close while preserving pre-existing helper IDs.
- Progress production hardening: added indeterminate semantics, tone/size/value narration API, and Storybook state matrix coverage.
- Empty production hardening: added role/label narration, tone/align variants, and action/icon story validation.
- Skeleton production hardening: added decorative-vs-narrated semantics, variant geometry controls, and profile-card Storybook scenarios.
- LoadingDots production hardening: added pause/resume/live-region branches, interval/dotCount controls, and Storybook paused state validation.
- StreamingText production hardening: added streaming lifecycle callbacks, cursor policies, and instant-done accessibility branch coverage.
- Pagination production hardening: added keyboard shortcuts (`Home/End/Arrow`), redundant-change guards, and customizable aria label generation for i18n.
- Pagination aria-label boundary hardening: `getItemAriaLabel` now receives clamped previous/next page values at edges, avoiding `0` / `pageCount+1` narration drift.
- DatePicker production hardening: aligned invalid inference with `aria-invalid`, exposed native `onChange` hook, and expanded state-matrix Storybook coverage.
- DatePicker error-link hardening: `errorMessageId` now deduplicates reference IDs and wires both `aria-describedby` + `aria-errormessage` while invalid.
- Alert production hardening: added tone-based live-region semantics, dismiss action branch, and dedicated Storybook + unit coverage.
- Table cross-browser keyboard parity: added dedicated unit regression for legacy `Spacebar` sortable-header activation.
- Dropdown keyboard-dismiss parity: added unit coverage for `Tab`-close branch to align with existing demo/E2E focus-continuation flow.
- Dropdown Storybook parity: added `TabDismissToNextControl` interaction scenario so Tab-close focus handoff is covered in visual regression chain.
- CommandPalette dismiss guard hardening: added `onEscapeKeyDown/onPointerDownOutside` hooks so approval flows can block dismiss conditionally via `event.preventDefault()`, with unit + Storybook interaction coverage.
- Toast dismiss guard hardening: added `onEscapeKeyDown` hook so individual notifications can conditionally intercept Escape and coordinate with approval workflows.
- Tabs vertical-manual parity: added dedicated unit/Storybook/demo E2E coverage so ArrowUp/ArrowDown focus movement stays decoupled from activation until Enter/Space.
- Table row-identity semantics: added `columns[].rowHeader` support with Storybook + unit coverage so key rows can expose `<th scope="row">` context for assistive tech.
- Demo toast guard parity: added runtime toggle for `Toast onEscapeKeyDown` interception and Playwright regression confirming Escape is blocked/unblocked by toast-level guard state.
- Storybook build-log hygiene: set `vite.build.chunkSizeWarningLimit=2500` to suppress known vendor-size warning noise without changing runtime behavior.
- Table row-header E2E parity: demo Playwright now asserts rowheader semantics survive sort transitions.
- Demo command-palette guard parity: added runtime `onEscapeKeyDown/onPointerDownOutside` toggle and Playwright regression for block/unblock dismiss behavior.
- Release dry-run observability: `release-dry-run` now writes package-size evidence into `GITHUB_STEP_SUMMARY` for CI reviewers.
- CommandPalette IME safety hardening: composition mode now bypasses Arrow/Enter command handlers (`isComposing` + legacy `keyCode=229`) so CJK text confirmation does not trigger accidental command execution.
- Toast IME safety hardening: Escape dismiss now ignores composition mode (`isComposing` + `keyCode=229`) to prevent accidental close while confirming CJK input inside toast action controls.
- Tabs RTL keyboard hardening: horizontal arrow semantics now follow container direction (`dir=\"rtl\"` mirrors ArrowLeft/ArrowRight), with unit + Storybook interaction coverage.
- Table sort narration hardening: `aria-sort` now appears only on the actively sorted column; unsorted headers omit the attribute to reduce screen-reader noise and align with ARIA guidance.
- Table live-sort narration hardening: added `getSortStatusText` to localize active sort-state live region updates, with unit + Storybook interaction coverage for ascending/descending transitions.
- Release evidence refresh: reran `demo:e2e` (`60` passed) and `release:dry-run` (`react` unpacked ~316.7 kB) with Storybook interaction baseline now `32/32` suites and `173/173` tests.
- Demo table narration parity: Playwright now asserts unsorted columns keep `aria-sort` absent while active sorted column toggles, matching unit/Storybook semantics.
- Toast IME callback parity: Escape during composition no longer fires `onEscapeKeyDown`, preventing guarded flows from treating IME confirm/cancel as dismissal intent.
- Demo RTL tabs parity: added dedicated Data section RTL tablist and Playwright ArrowRight/ArrowLeft regression to lock direction-aware keyboard navigation in real app flows.
- Pagination RTL keyboard parity: ArrowLeft/ArrowRight shortcuts now mirror in `dir=\"rtl\"` containers, with unit + Storybook interaction coverage.
- Demo RTL pagination parity: added `RTL release pagination` block and Playwright regression to verify ArrowRight/ArrowLeft page movement mirrors in app-level flows.
- Toast Escape preemption parity: preempted Escape now bypasses `onEscapeKeyDown`, with unit + Storybook `EscapePreemptedSkipsToastHook` coverage to avoid duplicate guarded-flow side effects.
- Dropdown IME typeahead parity: menu typeahead now ignores composition-phase key events (`isComposing` / `keyCode=229`) so CJK input confirmation does not jump focus.
- DismissableLayer IME Escape parity: overlay dismiss layer now ignores Escape during composition (`isComposing` / `keyCode=229`), preventing nested surfaces from closing while CJK input is being confirmed.
- DismissableLayer Escape preemption parity: when upstream handlers already `preventDefault()` Escape, dismiss layer now skips both `onEscapeKeyDown` and dismiss to avoid duplicate guarded-flow side effects across overlays.
- Overlay Escape preemption coverage: Dialog + CommandPalette now include component-level regressions asserting preempted Escape bypasses `onEscapeKeyDown` and close transitions.
- Overlay Escape preemption coverage expansion: Popover + Dropdown now include regressions asserting preempted Escape bypasses `onEscapeKeyDown` and keeps overlays open.
- Overlay Escape preemption coverage completion: Drawer now includes component-level regression asserting preempted Escape bypasses `onEscapeKeyDown` and close transitions.
- Storybook overlay preemption parity: Dropdown now includes `EscapePreemptedByGlobalHandler` interaction scenario so preempted Escape keep-open behavior is locked in visual baseline.
- Storybook AI preemption parity: CommandPalette now includes `EscapePreemptedByGlobalHandler` interaction scenario so preempted Escape keeps palette open and skips hook side effects.
- Storybook modal preemption parity: Dialog + Drawer now include `EscapePreemptedByGlobalHandler` interaction scenarios so preempted Escape keeps surfaces open and skips hook side effects.
- Storybook popover preemption parity: Popover now includes `EscapePreemptedByGlobalHandler` interaction scenario so preempted Escape keeps surface open and skips hook side effects.
- Demo preemption parity: Playwright now validates global Escape preemption for Dialog + Drawer + Popover + CommandPalette + Dropdown + Toast, ensuring overlays stay open under app-level shortcut interception.
- CommandPalette empty-state semantics: combobox now removes `aria-controls` when no filtered results exist, and listbox mounts only with actual options to avoid empty-state dangling references.
- CommandPalette i18n semantics: added `resultsAriaLabel` so command result listbox naming can be localized while preserving default `Command results` fallback.
- CommandPalette i18n copy semantics: added `title` / `description` / `searchAriaLabel` so dialog heading, helper copy, and combobox naming can be localized without forking component markup.
- CommandPalette query lifecycle parity: closing the palette now emits `onQueryChange("")` so external telemetry/state resets with internal query clearing, with unit + Storybook interaction coverage.
- CommandPalette close-reason telemetry parity: added `onCloseReason` with structured reasons (`close-button` / `item-select` / `escape-key` / `outside-pointer`) and Storybook `CloseReasonTelemetry` validation for analytics-safe dismissal tracking.
- Demo query telemetry parity: added `palette-query-telemetry` indicator + Playwright regression to ensure command-palette close actions reset telemetry back to `N/A`.
- Demo command-palette close-reason parity: added `palette-close-reason-telemetry` indicator and Playwright regression for `escape-key` / `item-select` / `close-button` / `outside-pointer` branches.
- Toast close-reason telemetry parity: added `onCloseReason` with structured reasons (`close-button` / `escape-key` / `timeout`) and Storybook `CloseReasonTelemetry` validation for analytics-safe dismissal tracking.
- Demo toast close-reason parity: added `toast-close-reason-demo` indicator and Playwright regression for `escape-key` / `close-button` / `timeout` branches.
- Dropdown close-reason telemetry parity: added `onCloseReason` with structured reasons (`trigger-click` / `item-select` / `escape-key` / `outside-pointer` / `tab-key`) and Storybook `CloseReasonTelemetry` validation for analytics-safe dismiss tracking.
- Demo dropdown close-reason parity: added `dropdown-close-reason-demo` indicator and Playwright regression for `item-select` / `escape-key` / `outside-pointer` / `trigger-click` / `tab-key` branches.
- Popover close-reason telemetry parity: added `onCloseReason` with structured reasons (`trigger-click` / `escape-key` / `outside-pointer`) and Storybook `CloseReasonTelemetry` validation for analytics-safe dismiss tracking.
- Dialog close-reason telemetry parity: added `onCloseReason` with structured reasons (`close-button` / `escape-key` / `outside-pointer`) and Storybook `CloseReasonTelemetry` validation for analytics-safe dismiss tracking.
- Drawer close-reason telemetry parity: added `onCloseReason` with structured reasons (`close-button` / `escape-key` / `outside-pointer`) and Storybook `CloseReasonTelemetry` validation for analytics-safe dismiss tracking.
- Demo dialog close-reason parity: added `dialog-close-reason-demo` telemetry indicator and Playwright regression for `close-button` / `escape-key` / `outside-pointer` branches.
- Demo drawer close-reason parity: added `drawer-close-reason-demo` telemetry indicator and Playwright regression for `close-button` / `escape-key` / `outside-pointer` branches.
- Demo tabs telemetry parity: added `tabs-change-telemetry` indicator and Playwright regression to lock active tab value updates.
- Demo table sort telemetry parity: added `table-sort-telemetry` indicator and Playwright regression for click/keyboard sort-path updates.
- Component recipes telemetry parity: `docs/component-recipes.md` now includes reusable Overlay close-reason and Tabs/Table telemetry templates for direct product integration.
- Storybook docs import guard: added `pnpm storybook:docs:check` and wired it into `storybook:test:ci` so missing `*Stories` imports in MDX fail fast before visual/interaction regression runs.
- Storybook static metadata hygiene: `build-storybook` now normalizes `storybook-static/project.json` volatile timestamps (`generatedAt`, `userSince`) to stable values, reducing no-op static bundle churn in review diffs.
- Dialog/Drawer IME Escape coverage: added component-level regressions to ensure composition-phase Escape does not emit close events while plain Escape still dismisses as expected.
- Storybook overlay IME parity: added `Dialog/Drawer EscapeIgnoresImeComposition` interaction scenarios so composition-guard behavior is locked in visual/interaction baseline.
- Demo keyboard parity hardening: added Playwright regressions for CommandPalette/Toast IME Escape composition paths and Tabs/Table legacy `Spacebar` activation paths.
- Tabs boundary-loop parity: added `loop` prop to opt out of Arrow wrap-around at tablist edges, with unit + Storybook `NoLoopNavigation` interaction coverage.
