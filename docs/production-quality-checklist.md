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
| Alert | production-refined | `Feedback/Alert` | `Alert.test.tsx` |
| Tabs | production-refined | `Data/Tabs` | `Tabs.test.tsx` |
| Table | production-refined | `Data/Table` | `Table.test.tsx` |
| Pagination | production-refined | `Data/Pagination` | `Pagination.test.tsx` |

## Ongoing Maintenance Rules
1. Any API change must update Storybook controls/docs and at least one interaction test.
2. Any a11y behavior change must update role/name assertions in tests.
3. Any visual state change should be checked in all 4 theme packs and Chromatic (if token configured).
4. Release blocking condition: `pnpm verify` + `pnpm demo:e2e` both green.

## Recent Closure Notes (2026-03-17)
- CommandPalette: added `Home/End` keyboard paths, deterministic disabled-option skipping, explicit `aria-disabled` option semantics, and query telemetry + empty message Storybook example.
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
- Pagination production hardening: added keyboard shortcuts (`Home/End/Arrow`), redundant-change guards, and customizable aria label generation for i18n.
- DatePicker production hardening: aligned invalid inference with `aria-invalid`, exposed native `onChange` hook, and expanded state-matrix Storybook coverage.
- Alert production hardening: added tone-based live-region semantics, dismiss action branch, and dedicated Storybook + unit coverage.
