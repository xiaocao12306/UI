import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CHKtz2QT.js";import{M as l,T as t,S as a,D as c,C as n}from"./index-C2DU43ey.js";import{VariantMatrix as d}from"./Button.stories-DuwwIx-h.js";import{WithInputControl as h}from"./FormField.stories-C7wnvhp_.js";import{Interactive as x,CloseReasonTelemetry as p,EscapeIgnoresImeComposition as j,EscapePreemptedByGlobalHandler as m}from"./Dialog.stories-BLXkRNv8.js";import{CloseReasonTelemetry as f,EscapePreemptedByGlobalHandler as u}from"./Drawer.stories-Bbm7M6d1.js";import{CloseReasonTelemetry as y,EscapePreemptedByGlobalHandler as b}from"./Popover.stories-D0omH0S9.js";import{OutsideDismissFocusTransfer as g,EscapeDismissFocusReturn as v,EscapePreemptedByGlobalHandler as w,TabDismissToNextControl as k,CloseReasonTelemetry as E,TypeaheadNavigation as C,TypeaheadIgnoresImeComposition as D}from"./Dropdown.stories-vWSZ2aKo.js";import{DescribedByLifecycle as I}from"./Tooltip.stories-BBopLjoy.js";import{AiInteractionFlow as R,QueryTelemetry as K,CloseReasonTelemetry as P,DisabledCommandGuard as A,TextValueAndAccentSearch as L,PersistentSelection as T,RefinedSearchKeepsActiveCommand as F,PagedKeyboardNavigation as S,LocalizedResultsLabel as O,LocalizedDialogCopy as B,ImeCompositionGuard as H,EscapePreemptedByGlobalHandler as U,GuardedDismissEvents as G,EscapeClearsQueryFirst as M}from"./CommandPalette.stories-DaTQ90rH.js";import{WithAiRequestState as z}from"./PromptInput.stories-BDcnwq3e.js";import{Conversation as $}from"./MessageBubble.stories-wEP5cOKd.js";import{Default as q}from"./ReasoningPanel.stories-ll9aUG-c.js";import{Default as V}from"./StreamingCodeBlock.stories-Jd4VPz8N.js";import{ActionRequired as N,ActionRequiredDanger as W,CloseReasonTelemetry as Q,EscapeStackOrder as J,StackedViewportOffset as X,FocusedToastEscapesFirst as _,EscapePreemptedByGlobalHandler as Y,EscapePreemptedSkipsToastHook as Z,EscapeGuardedByToastHandler as ee,EscapeIgnoresImeComposition as se,LiveRegionOff as ne}from"./Toast.stories-tVaNw_hT.js";import{KeyboardNavigationGuide as ie,NoLoopNavigation as oe,Vertical as re,RtlKeyboardNavigation as le,LabelledByHeading as te,ManualActivation as ae,ManualVerticalActivation as ce}from"./Tabs.stories-DUeWJ7RV.js";import{ReleaseChecklist as de,SortTelemetry as he,LocalizedSortLabels as xe,SingleRowSortDisabled as pe,WithRowAction as je,InvalidDefaultSortKeyFallback as me,RowHeaderSemantics as fe,AccessibleNameFallback as ue}from"./Table.stories-Bp02wOj1.js";import{KeyboardShortcuts as ye,RtlKeyboardShortcuts as be,LabelledByHeading as ge}from"./Pagination.stories-DiSph0Gr.js";import"./index-BWu4c2F4.js";import"./iframe-C5R4tQNE.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";import"./Button-DeQ1OHWt.js";import"./Tag-Dmp9Dfgr.js";import"./Badge-fH5xjxKG.js";import"./index-DgAF9SIF.js";import"./Input-B0g8SV4q.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./FormField-tjrV3Sij.js";import"./Textarea-C2HCxZDO.js";import"./Dialog-CFqGnmxp.js";import"./bodyScrollLock-DtRy56KP.js";import"./DismissableLayer-BWoUnDZk.js";import"./Dropdown-CDrPyIxd.js";import"./Popover-DxMZTkSb.js";function o(i){const s={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Docs/Best Practices"}),`
`,e.jsx(t,{}),`
`,e.jsx(a,{children:"Design + Engineering Checklist"}),`
`,e.jsx(c,{children:e.jsx(s.p,{children:"Use these rules to keep components consistent with the Aurora plan and avoid regressions in accessibility or theming."})}),`
`,e.jsx(s.h2,{id:"api-design",children:"API Design"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Keep props minimal and composable; avoid business-specific flags."}),`
`,e.jsxs(s.li,{children:["Prefer controlled APIs for overlays (",e.jsx(s.code,{children:"open"}),", ",e.jsx(s.code,{children:"onOpenChange"}),")."]}),`
`,e.jsxs(s.li,{children:["Expose semantic variants (",e.jsx(s.code,{children:"solid"}),", ",e.jsx(s.code,{children:"outline"}),") instead of hardcoded colors."]}),`
`]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(s.h2,{id:"theming",children:"Theming"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Do not hardcode color values inside component internals."}),`
`,e.jsx(s.li,{children:"Resolve styling via Aurora CSS variables only."}),`
`,e.jsxs(s.li,{children:["Keep layering (",e.jsx(s.code,{children:"z-index"}),") tokenized (",e.jsx(s.code,{children:"--aurora-z-overlay"})," / ",e.jsx(s.code,{children:"--aurora-z-modal"})," / ",e.jsx(s.code,{children:"--aurora-z-toast"}),"), not magic numbers."]}),`
`,e.jsx(s.li,{children:"Validate stories under all four theme packs before merge."}),`
`]}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Ensure keyboard dismissal paths for overlay components."}),`
`,e.jsx(s.li,{children:"Keep visible labels or accessible names for form controls."}),`
`,e.jsxs(s.li,{children:["Prefer ",e.jsx(s.code,{children:"FormField"})," wrappers for helper/error copy so ",e.jsx(s.code,{children:"aria-describedby"})," and ",e.jsx(s.code,{children:"aria-errormessage"})," stay in sync."]}),`
`,e.jsxs(s.li,{children:["When using standalone DatePicker error messaging, pass ",e.jsx(s.code,{children:"errorMessageId"})," with ",e.jsx(s.code,{children:"invalid"})," so both ",e.jsx(s.code,{children:"aria-describedby"})," and ",e.jsx(s.code,{children:"aria-errormessage"})," stay aligned."]}),`
`,e.jsxs(s.li,{children:["Preserve nuanced ",e.jsx(s.code,{children:"aria-invalid"})," values (",e.jsx(s.code,{children:"grammar"}),"/",e.jsx(s.code,{children:"spelling"}),") when integrating validation services; avoid normalizing them to generic ",e.jsx(s.code,{children:"true"}),"."]}),`
`,e.jsxs(s.li,{children:["For tooltip-enhanced controls that already have helper text, keep ",e.jsx(s.code,{children:"aria-describedby"})," lifecycle clean: append tooltip ID only while visible and remove it on close."]}),`
`,e.jsxs(s.li,{children:["Avoid ",e.jsx(s.code,{children:"autoFocus"}),"; use intentional focus management when opening overlays."]}),`
`,e.jsxs(s.li,{children:["For value-selection combobox/listbox patterns, map ",e.jsx(s.code,{children:"aria-selected"})," to the committed value, not temporary active focus."]}),`
`,e.jsxs(s.li,{children:["For command-palette ",e.jsx(s.code,{children:"aria-activedescendant"})," flows, keep ",e.jsx(s.code,{children:"aria-selected"})," on the active option so screen readers announce current keyboard focus target."]}),`
`,e.jsxs(s.li,{children:["For ",e.jsx(s.code,{children:"aria-activedescendant"})," combobox flows, keep listbox options out of tab order and preserve input focus during pointer selection."]}),`
`,e.jsxs(s.li,{children:["Keep combobox ",e.jsx(s.code,{children:"aria-controls"})," conditional on popup visibility to avoid dangling listbox references."]}),`
`,e.jsxs(s.li,{children:["Keep command-palette combobox ",e.jsx(s.code,{children:"aria-controls"})," conditional on filtered-result listbox visibility so empty states do not expose stale or missing listbox IDs."]}),`
`,e.jsxs(s.li,{children:["Localize command-palette result list semantics with ",e.jsx(s.code,{children:"resultsAriaLabel"})," in non-English products, instead of relying on the default English listbox label."]}),`
`,e.jsxs(s.li,{children:["Localize command-palette heading/search/close semantics with ",e.jsx(s.code,{children:"title"})," / ",e.jsx(s.code,{children:"description"})," / ",e.jsx(s.code,{children:"searchAriaLabel"})," / ",e.jsx(s.code,{children:"closeLabel"})," so dialog narration matches product language."]}),`
`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:I}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h2,{id:"overlay-policies",children:"Overlay Policies"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Dialog/Drawer should explicitly define dismiss policy (",e.jsx(s.code,{children:"closeOnEscape"}),", ",e.jsx(s.code,{children:"closeOnOutsidePointer"}),") for critical workflows."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"restoreFocus"})," enabled for dialogs unless product flow intentionally redirects focus after close."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"restoreFocus"})," enabled for drawers unless closing should intentionally hand focus to a different target."]}),`
`,e.jsx(s.li,{children:"Popover and Dropdown should restore focus to trigger on keyboard dismissal (Escape), but keep pointer target focus on outside-click dismissal."}),`
`,e.jsxs(s.li,{children:["For blocking confirmation/action menus, set ",e.jsx(s.code,{children:"closeOnEscape={false}"})," + ",e.jsx(s.code,{children:"closeOnOutsidePointer={false}"})," and provide an explicit close/confirm path."]}),`
`,e.jsxs(s.li,{children:["Dropdown menus should expose an accessible name via trigger-linked ",e.jsx(s.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsx(s.li,{children:"For nested overlays, dismiss policy should resolve top-layer first so one Escape/outside click does not collapse the full stack."}),`
`,e.jsxs(s.li,{children:["For overlays built on ",e.jsx(s.code,{children:"DismissableLayer"}),", ignore Escape while IME composition is active so CJK text confirmation does not close parent surfaces unexpectedly."]}),`
`,e.jsxs(s.li,{children:["For dialog/drawer flows under app-level shortcuts, rely on built-in Escape preemption behavior so ",e.jsx(s.code,{children:"onEscapeKeyDown"})," hooks stay side-effect free when Escape is already prevented."]}),`
`,e.jsxs(s.li,{children:["Keep trigger ",e.jsx(s.code,{children:"aria-controls"})," conditional on open state for popover/menu patterns to avoid stale ID references."]}),`
`,e.jsxs(s.li,{children:["Use dialog ",e.jsx(s.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(s.code,{children:"close-button"})," / ",e.jsx(s.code,{children:"escape-key"})," / ",e.jsx(s.code,{children:"outside-pointer"}),") instead of inferring dismiss origin from external state transitions."]}),`
`,e.jsxs(s.li,{children:["Use drawer ",e.jsx(s.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(s.code,{children:"close-button"})," / ",e.jsx(s.code,{children:"escape-key"})," / ",e.jsx(s.code,{children:"outside-pointer"}),") instead of inferring dismiss origin from external state transitions."]}),`
`,e.jsxs(s.li,{children:["For dropdown typeahead, set ",e.jsx(s.code,{children:"textValue"})," when item labels are non-string or need locale/accent-friendly buffered matching aliases."]}),`
`,e.jsx(s.li,{children:"Ignore dropdown typeahead key matching during IME composition so CJK input confirmation does not shift active menu focus unexpectedly."}),`
`,e.jsxs(s.li,{children:["When app-level shortcuts preempt Escape with ",e.jsx(s.code,{children:"preventDefault()"}),", keep dropdown-level Escape hooks side-effect free and rely on built-in preemption skip behavior."]}),`
`,e.jsxs(s.li,{children:["When app-level shortcuts preempt Escape with ",e.jsx(s.code,{children:"preventDefault()"}),", keep popover-level Escape hooks side-effect free and rely on built-in preemption skip behavior."]}),`
`,e.jsxs(s.li,{children:["Use popover ",e.jsx(s.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(s.code,{children:"trigger-click"})," / ",e.jsx(s.code,{children:"escape-key"})," / ",e.jsx(s.code,{children:"outside-pointer"}),") instead of inferring dismiss origin from focus and pointer side effects."]}),`
`,e.jsxs(s.li,{children:["Use dropdown ",e.jsx(s.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(s.code,{children:"trigger-click"})," / ",e.jsx(s.code,{children:"item-select"})," / ",e.jsx(s.code,{children:"escape-key"})," / ",e.jsx(s.code,{children:"outside-pointer"})," / ",e.jsx(s.code,{children:"tab-key"}),") instead of inferring close origin from focus/state side effects."]}),`
`,e.jsxs(s.li,{children:["Keep popover/dropdown close callbacks ordered and single-purpose: close paths should emit ",e.jsx(s.code,{children:"onCloseReason"})," before ",e.jsx(s.code,{children:"onOpenChange(false)"}),", while dropdown ",e.jsx(s.code,{children:"item-select"})," should run ",e.jsx(s.code,{children:"onSelect"})," before close callbacks."]}),`
`,e.jsxs(s.li,{children:["Keep dropdown ",e.jsx(s.code,{children:"Tab"})," behavior aligned with document order: close menu and continue focus to next control."]}),`
`,e.jsxs(s.li,{children:["For icon-only popover/dropdown triggers, always provide ",e.jsx(s.code,{children:"triggerAriaLabel"})," to preserve an explicit control name."]}),`
`,e.jsx(s.li,{children:"Command palette and combobox-style overlays should keep text input as the primary focus anchor for navigation."}),`
`]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(n,{of:E}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(n,{of:D}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h2,{id:"testing",children:"Testing"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Add unit tests for any new interaction branch."}),`
`,e.jsx(s.li,{children:"Add/extend Playwright smoke tests when user-facing flows change."}),`
`,e.jsx(s.li,{children:"Keep Storybook stories deterministic so visual regression remains stable."}),`
`]}),`
`,e.jsx(s.h2,{id:"ai-interaction-patterns",children:"AI Interaction Patterns"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Always expose pending/loading states for AI request actions."}),`
`,e.jsx(s.li,{children:"Keep command labels explicit and searchable."}),`
`,e.jsxs(s.li,{children:["Provide ",e.jsx(s.code,{children:"textValue"})," aliases for non-string command labels and accent-friendly matching terms."]}),`
`,e.jsx(s.li,{children:"Provide empty-state guidance when no command matches the query."}),`
`,e.jsxs(s.li,{children:["Track user query updates with ",e.jsx(s.code,{children:"onQueryChange"})," for downstream telemetry."]}),`
`,e.jsxs(s.li,{children:["Treat ",e.jsx(s.code,{children:'onQueryChange("")'})," on palette close as the telemetry reset signal so external state mirrors the internal query lifecycle."]}),`
`,e.jsx(s.li,{children:"Keep live-region narration aligned with actionable commands (enabled matches), not just visible results."}),`
`,e.jsx(s.li,{children:"Keep disabled command entries non-executable and keep palette state unchanged on disabled clicks."}),`
`,e.jsxs(s.li,{children:["For batched command execution, set ",e.jsx(s.code,{children:"closeOnSelect={false}"})," so users can run multiple actions without reopening the palette."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"PageUp"})," / ",e.jsx(s.code,{children:"PageDown"})," for long command sets so keyboard users can jump actionable options in larger steps."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"clearQueryOnEscape"})," enabled so first Escape clears query intent before full palette dismissal; disable only when product expects immediate close."]}),`
`,e.jsxs(s.li,{children:["For blocking approvals, set ",e.jsx(s.code,{children:"closeOnEscape={false}"})," and ",e.jsx(s.code,{children:"closeOnOutsidePointer={false}"})," so command confirmation cannot be dismissed accidentally."]}),`
`,e.jsxs(s.li,{children:["For conditional approval guards, prefer ",e.jsx(s.code,{children:"onEscapeKeyDown/onPointerDownOutside"})," + ",e.jsx(s.code,{children:"event.preventDefault()"})," so dismiss policy can be unlocked at runtime."]}),`
`,e.jsxs(s.li,{children:["When app-level shortcuts preempt Escape with ",e.jsx(s.code,{children:"preventDefault()"}),", rely on built-in callback-skip behavior so command-level escape hooks stay side-effect free."]}),`
`,e.jsx(s.li,{children:"Ignore command list navigation/selection keys while IME composition is active so Enter confirms text composition instead of executing commands."}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"onCloseReason"})," to emit deterministic dismissal telemetry (",e.jsx(s.code,{children:"close-button"})," / ",e.jsx(s.code,{children:"item-select"})," / ",e.jsx(s.code,{children:"escape-key"})," / ",e.jsx(s.code,{children:"outside-pointer"}),") instead of inferring close path from side effects."]}),`
`,e.jsxs(s.li,{children:["Keep callback side effects ordered and single-purpose: ",e.jsx(s.code,{children:"item-select"})," path should treat ",e.jsx(s.code,{children:"onSelect"})," as action commit, then ",e.jsx(s.code,{children:"onCloseReason"}),", then ",e.jsx(s.code,{children:"onOpenChange(false)"}),"; close-button path should use ",e.jsx(s.code,{children:"onCloseReason"})," before ",e.jsx(s.code,{children:"onOpenChange(false)"}),"."]}),`
`,e.jsx(s.li,{children:"Guard Ctrl/Cmd + Enter submission against active IME composition to avoid accidental sends for CJK input."}),`
`,e.jsx(s.li,{children:"Show reasoning disclosure with explicit user intent (default collapsed)."}),`
`,e.jsxs(s.li,{children:["Use streaming containers that surface busy completion (",e.jsx(s.code,{children:"aria-busy"}),") for assistive tech parity."]}),`
`]}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(n,{of:$}),`
`,e.jsx(n,{of:q}),`
`,e.jsx(n,{of:V}),`
`,e.jsx(n,{of:R}),`
`,e.jsx(n,{of:K}),`
`,e.jsx(n,{of:P}),`
`,e.jsx(n,{of:A}),`
`,e.jsx(n,{of:L}),`
`,e.jsx(n,{of:T}),`
`,e.jsx(n,{of:F}),`
`,e.jsx(n,{of:S}),`
`,e.jsx(n,{of:O}),`
`,e.jsx(n,{of:B}),`
`,e.jsx(n,{of:H}),`
`,e.jsx(n,{of:U}),`
`,e.jsx(n,{of:G}),`
`,e.jsx(n,{of:M}),`
`,e.jsx(s.h2,{id:"notification-behavior",children:"Notification Behavior"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"duration={0}"})," for blocking notifications that require explicit user action."]}),`
`,e.jsxs(s.li,{children:["If a toast includes ",e.jsx(s.code,{children:"action"}),", treat it as an interactive surface (",e.jsx(s.code,{children:"dialog"})," / ",e.jsx(s.code,{children:"alertdialog"}),") and keep CTA labels explicit."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"closeOnEscape"})," aligned with task criticality; disable Escape only for must-read states."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"onEscapeKeyDown"})," when Escape policy must be toggled dynamically at runtime (e.g. approval checkpoints)."]}),`
`,e.jsxs(s.li,{children:["Ensure upper-layer shortcuts that ",e.jsx(s.code,{children:"preventDefault()"})," on Escape can preempt toast dismiss when required."]}),`
`,e.jsx(s.li,{children:"When Escape is preempted upstream, avoid side effects in toast-level analytics/guards by relying on the built-in hook-skip behavior."}),`
`,e.jsx(s.li,{children:"Ignore Escape dismissal while IME composition is active so CJK text confirmation inside toast actions does not close the notification unexpectedly."}),`
`,e.jsx(s.li,{children:"For stacked notifications, rely on Escape handling that dismisses one toast per key press, prioritizing the latest or most recently interacted toast."}),`
`,e.jsx(s.li,{children:"Keep stacked toasts in the same corner so built-in visual offset preserves message legibility for older notifications."}),`
`,e.jsxs(s.li,{children:["Verify timer pause behavior for both pointer hover and keyboard focus when ",e.jsx(s.code,{children:"pauseOnHover"})," is enabled."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(s.code,{children:"close-button"})," / ",e.jsx(s.code,{children:"escape-key"})," / ",e.jsx(s.code,{children:"timeout"}),") instead of inferring dismiss origin from side effects."]}),`
`,e.jsxs(s.li,{children:["When combining ",e.jsx(s.code,{children:"onCloseReason"}),", ",e.jsx(s.code,{children:"onClose"}),", and ",e.jsx(s.code,{children:"onOpenChange"}),", consume them as ordered lifecycle hooks (",e.jsx(s.code,{children:"onCloseReason"})," -> ",e.jsx(s.code,{children:"onClose"})," -> ",e.jsx(s.code,{children:"onOpenChange(false)"}),"), not parallel duplicate side effects."]}),`
`,e.jsxs(s.li,{children:["Provide ",e.jsx(s.code,{children:"ariaLabel"})," when toast title is icon-only or otherwise not plain text."]}),`
`,e.jsxs(s.li,{children:["For high-frequency passive updates, set ",e.jsx(s.code,{children:'live="off"'})," to reduce assistive-tech interruption while keeping visual toast context."]}),`
`]}),`
`,e.jsx(n,{of:N}),`
`,e.jsx(n,{of:W}),`
`,e.jsx(n,{of:Q}),`
`,e.jsx(n,{of:J}),`
`,e.jsx(n,{of:X}),`
`,e.jsx(n,{of:_}),`
`,e.jsx(n,{of:Y}),`
`,e.jsx(n,{of:Z}),`
`,e.jsx(n,{of:ee}),`
`,e.jsx(n,{of:se}),`
`,e.jsx(n,{of:ne}),`
`,e.jsx(s.h2,{id:"data-presentation-patterns",children:"Data Presentation Patterns"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Use typed columns and stable row keys in data tables; fallback source-index keys exist for safety but explicit ",e.jsx(s.code,{children:"rowKey"})," is preferred."]}),`
`,e.jsxs(s.li,{children:["If ",e.jsx(s.code,{children:"rowKey"})," uses ",e.jsx(s.code,{children:"rowIndex"}),", treat it as source-data index; avoid deriving keys from sorted visual position."]}),`
`,e.jsxs(s.li,{children:["For custom cell renderers, use ",e.jsx(s.code,{children:"render(row, rowIndex, sourceIndex)"})," and pick the index intentionally (",e.jsx(s.code,{children:"rowIndex"})," for ranking UI, ",e.jsx(s.code,{children:"sourceIndex"})," for source-linked IDs/telemetry)."]}),`
`,e.jsxs(s.li,{children:["Mark the primary identity column with ",e.jsx(s.code,{children:"rowHeader"})," so screen readers can announce row context consistently."]}),`
`,e.jsxs(s.li,{children:["Ensure each table has an accessible name through ",e.jsx(s.code,{children:"caption"}),", ",e.jsx(s.code,{children:"ariaLabel"}),", or ",e.jsx(s.code,{children:"ariaLabelledBy"}),"; fallback ",e.jsx(s.code,{children:"Data table"})," naming exists but should be treated as a safety net."]}),`
`,e.jsxs(s.li,{children:["Expose ",e.jsx(s.code,{children:"aria-sort"})," only on the actively sorted header so assistive narration reflects current sort state without repeating neutral columns."]}),`
`,e.jsxs(s.li,{children:["Keep non-sortable headers free of ",e.jsx(s.code,{children:"aria-sort"})," so assistive tech does not announce inert columns as interactive."]}),`
`,e.jsxs(s.li,{children:["Validate sortable headers with both pointer and keyboard (",e.jsx(s.code,{children:"Enter"}),"/",e.jsx(s.code,{children:"Space"}),", including legacy ",e.jsx(s.code,{children:"Spacebar"}),") so non-pointer workflows stay first-class."]}),`
`,e.jsxs(s.li,{children:["Keep sortable-header focus-visible feedback and ",e.jsx(s.code,{children:'aria-keyshortcuts="Enter Space"'})," in place so keyboard affordance stays explicit in QA and audits."]}),`
`,e.jsxs(s.li,{children:["Localize sortable header narration with ",e.jsx(s.code,{children:"getSortAriaLabel"})," instead of hardcoding translated text into column titles."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"getSortStatusText"})," to localize active-sort live narration so keyboard and pointer sorting changes remain equally discoverable to assistive tech users."]}),`
`,e.jsxs(s.li,{children:["During async refreshes, set ",e.jsx(s.code,{children:"loading"})," so table emits ",e.jsx(s.code,{children:"aria-busy"})," and temporarily suppresses stale row actions/sorting."]}),`
`,e.jsxs(s.li,{children:["For empty datasets, use meaningful ",e.jsx(s.code,{children:"emptyContent"}),"; table announces it through polite live status narration."]}),`
`,e.jsx(s.li,{children:"Treat single-row tables as non-sortable UI at runtime; built-in sort controls are auto-disabled to prevent no-op telemetry and redundant keyboard stops."}),`
`,e.jsxs(s.li,{children:["For pagination i18n, generate ",e.jsx(s.code,{children:"getItemAriaLabel"})," from the provided ",e.jsx(s.code,{children:"page"})," argument; boundary previous/next labels are already clamped to valid page ranges."]}),`
`,e.jsxs(s.li,{children:["Prefer ",e.jsx(s.code,{children:"ariaLabelledBy"})," for pagination when a visible heading already exists; use ",e.jsx(s.code,{children:"ariaLabel"})," for standalone pagers without nearby title copy."]}),`
`,e.jsx(s.li,{children:"In RTL layouts, verify Pagination ArrowLeft/ArrowRight keyboard shortcuts are mirrored so page movement follows visual direction."}),`
`,e.jsx(s.li,{children:"Surface status semantics with tokens instead of custom ad-hoc colors."}),`
`,e.jsx(s.li,{children:"Keep row actions predictable and keyboard reachable."}),`
`,e.jsxs(s.li,{children:["Ensure tabs support orientation-aware arrows (",e.jsx(s.code,{children:"Left/Right"})," or ",e.jsx(s.code,{children:"Up/Down"}),") plus ",e.jsx(s.code,{children:"Home/End"}),", and skip disabled entries."]}),`
`,e.jsxs(s.li,{children:["In RTL layouts, verify horizontal ",e.jsx(s.code,{children:"ArrowLeft"}),"/",e.jsx(s.code,{children:"ArrowRight"})," intent is mirrored so tab navigation matches visual reading flow."]}),`
`,e.jsxs(s.li,{children:["Prefer ",e.jsx(s.code,{children:"ariaLabelledBy"})," with a visible heading when tabs already have on-screen context labels; fall back to ",e.jsx(s.code,{children:"ariaLabel"})," for standalone tab groups."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:'activationMode="manual"'})," when arrow-key navigation should not immediately trigger expensive panel renders."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"loop={false}"})," when boundary tabs should trap Arrow navigation (for linear workflows where wrap-around can feel like a jump)."]}),`
`,e.jsxs(s.li,{children:["Keep manual tabs compatible with legacy ",e.jsx(s.code,{children:"Spacebar"})," key values so activation remains consistent across browser engines."]}),`
`,e.jsxs(s.li,{children:["Keep tab panels mounted and toggle ",e.jsx(s.code,{children:"hidden"})," so tab ",e.jsx(s.code,{children:"aria-controls"})," always points to a real panel."]}),`
`,e.jsxs(s.li,{children:["Avoid duplicate telemetry from tabs by emitting ",e.jsx(s.code,{children:"onValueChange"})," only on actual key transitions."]}),`
`]}),`
`,e.jsx(n,{of:ie}),`
`,e.jsx(n,{of:oe}),`
`,e.jsx(n,{of:re}),`
`,e.jsx(n,{of:le}),`
`,e.jsx(n,{of:te}),`
`,e.jsx(n,{of:ae}),`
`,e.jsx(n,{of:ce}),`
`,e.jsx(n,{of:de}),`
`,e.jsx(n,{of:he}),`
`,e.jsx(n,{of:xe}),`
`,e.jsx(n,{of:pe}),`
`,e.jsx(n,{of:je}),`
`,e.jsx(n,{of:me}),`
`,e.jsx(n,{of:fe}),`
`,e.jsx(n,{of:ue}),`
`,e.jsx(n,{of:ye}),`
`,e.jsx(n,{of:be}),`
`,e.jsx(n,{of:ge})]})}function rs(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(o,{...i})}):o(i)}export{rs as default};
