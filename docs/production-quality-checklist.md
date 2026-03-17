# Production Quality Checklist (Core Components)

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
| Dialog | production-refined | `Overlay/Dialog` | `Dialog.test.tsx` |
| Popover | production-refined | `Overlay/Popover` | `Popover.test.tsx` |
| Dropdown | production-refined | `Overlay/Dropdown` | `Dropdown.test.tsx` |
| CommandPalette | production-refined | `AI/CommandPalette` | `CommandPalette.test.tsx` |
| Toast | production-refined | `Feedback/Toast` | `Toast.test.tsx` |
| Tabs | production-refined | `Data/Tabs` | `Tabs.test.tsx` |
| Table | production-refined | `Data/Table` | `Table.test.tsx` |

## Ongoing Maintenance Rules
1. Any API change must update Storybook controls/docs and at least one interaction test.
2. Any a11y behavior change must update role/name assertions in tests.
3. Any visual state change should be checked in all 4 theme packs and Chromatic (if token configured).
4. Release blocking condition: `pnpm verify` + `pnpm demo:e2e` both green.
