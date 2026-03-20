import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CHKtz2QT.js";import{M as t,T as a,S as l,D as c,C as s}from"./index-9ake0zFn.js";import{VariantMatrix as d,IconOnlyAccessibleName as h}from"./Button.stories-CNmDEEBp.js";import{WithInputControl as p}from"./FormField.stories-DGMlf6c5.js";import{Interactive as x,CloseReasonTelemetry as m,FocusTrapKeyboardCycle as j,EscapeIgnoresImeComposition as u,EscapePreemptedByGlobalHandler as f,DismissGuardHooks as b}from"./Dialog.stories-C6Nc4xmP.js";import{CloseReasonTelemetry as y,FocusTrapKeyboardCycle as g,EscapePreemptedByGlobalHandler as v,DismissGuardHooks as w}from"./Drawer.stories-Bdmlw2q7.js";import{CloseReasonTelemetry as k,EscapePreemptedByGlobalHandler as E,DismissGuardHooks as C}from"./Popover.stories-RsAEVW1k.js";import{OutsideDismissFocusTransfer as D,EscapeDismissFocusReturn as K,EscapePreemptedByGlobalHandler as P,TabDismissToNextControl as I,CloseReasonTelemetry as F,ControlledOpenContract as S,TypeaheadNavigation as R,IconItemNaming as A,TypeaheadIgnoresImeComposition as T,DismissGuardHooks as L}from"./Dropdown.stories-DGg_SbyF.js";import{DescribedByLifecycle as O}from"./Tooltip.stories-bRXIrL5w.js";import{AiInteractionFlow as H,QueryTelemetry as G,CloseReasonTelemetry as B,DisabledCommandGuard as M,TextValueAndAccentSearch as q,IconOnlyCommandNaming as U,PersistentSelection as $,RefinedSearchKeepsActiveCommand as z,PagedKeyboardNavigation as V,LocalizedResultsLabel as N,LocalizedDialogCopy as W,ImeCompositionGuard as Q,EscapePreemptedByGlobalHandler as J,GuardedDismissEvents as X,EscapeClearsQueryFirst as _}from"./CommandPalette.stories-DNhiUnnR.js";import{WithAiRequestState as Y}from"./PromptInput.stories-1fWyipdR.js";import{Conversation as Z}from"./MessageBubble.stories-XtWuqyRv.js";import{Default as ee}from"./ReasoningPanel.stories-ll9aUG-c.js";import{Default as ne}from"./StreamingCodeBlock.stories-Jd4VPz8N.js";import{ActionRequired as se,ActionRequiredDanger as oe,CloseReasonTelemetry as ie,EscapeStackOrder as re,EscapeShortcutSync as te,StackedViewportOffset as ae,FocusedToastEscapesFirst as le,CloseButtonPrimaryPointerOnly as ce,EscapePreemptedByGlobalHandler as de,EscapePreemptedSkipsToastHook as he,EscapeGuardedByToastHandler as pe,EscapeIgnoresImeComposition as xe,LiveRegionOff as me}from"./Toast.stories-B2ZlnPgR.js";import{KeyboardNavigationGuide as je,NoLoopNavigation as ue,Vertical as fe,RtlKeyboardNavigation as be,LabelledByHeading as ye,ManualActivation as ge,ManualVerticalActivation as ve,PrimaryPointerOnlyPressedState as we}from"./Tabs.stories-B9y_LWpC.js";import{ReleaseChecklist as ke,SortTelemetry as Ee,LocalizedSortLabels as Ce,SortLabelForCustomHeader as De,RichTextHeaderAutoSortLabel as Ke,SingleRowSortDisabled as Pe,PrimaryPointerOnlySortPress as Ie,WithRowAction as Fe,InvalidDefaultSortKeyFallback as Se,RowHeaderSemantics as Re,AccessibleNameFallback as Ae}from"./Table.stories-Bu48goo5.js";import{KeyboardShortcuts as Te,RtlKeyboardShortcuts as Le,LabelledByHeading as Oe}from"./Pagination.stories-8AthCQmC.js";import"./index-BWu4c2F4.js";import"./iframe-CedcDdyN.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";import"./Button-DS9RTxKh.js";import"./Tag-Dmp9Dfgr.js";import"./Badge-ZJmMstsz.js";import"./index-DgAF9SIF.js";import"./storyShowcase-Bw5VyCj0.js";import"./Input-pKdbw4ss.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./FormField-DYhF-Rf9.js";import"./Textarea-C2HCxZDO.js";import"./Dialog-B2OlqLN0.js";import"./bodyScrollLock-CnEUF6y7.js";import"./DismissableLayer-BWoUnDZk.js";import"./Dropdown-BdFEQ1QO.js";import"./Popover-DXsesf5W.js";function i(o){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Best Practices"}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{children:"Design + Engineering Checklist"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:"Use these rules to keep components consistent with the Aurora plan and avoid regressions in accessibility or theming."})}),`
`,e.jsx(n.h2,{id:"api-design",children:"API Design"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep props minimal and composable; avoid business-specific flags."}),`
`,e.jsxs(n.li,{children:["Prefer controlled APIs for overlays (",e.jsx(n.code,{children:"open"}),", ",e.jsx(n.code,{children:"onOpenChange"}),")."]}),`
`,e.jsxs(n.li,{children:["Expose semantic variants (",e.jsx(n.code,{children:"solid"}),", ",e.jsx(n.code,{children:"outline"}),") instead of hardcoded colors."]}),`
`]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h2,{id:"theming",children:"Theming"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Do not hardcode color values inside component internals."}),`
`,e.jsx(n.li,{children:"Resolve styling via Aurora CSS variables only."}),`
`,e.jsxs(n.li,{children:["Keep layering (",e.jsx(n.code,{children:"z-index"}),") tokenized (",e.jsx(n.code,{children:"--aurora-z-overlay"})," / ",e.jsx(n.code,{children:"--aurora-z-modal"})," / ",e.jsx(n.code,{children:"--aurora-z-toast"}),"), not magic numbers."]}),`
`,e.jsx(n.li,{children:"Validate stories under all four theme packs before merge."}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure keyboard dismissal paths for overlay components."}),`
`,e.jsx(n.li,{children:"Keep visible labels or accessible names for form controls."}),`
`,e.jsxs(n.li,{children:["For icon-only buttons, always provide ",e.jsx(n.code,{children:"aria-label"})," or ",e.jsx(n.code,{children:"aria-labelledby"}),"; do not rely on decorative glyph text."]}),`
`,e.jsxs(n.li,{children:["Prefer ",e.jsx(n.code,{children:"FormField"})," wrappers for helper/error copy so ",e.jsx(n.code,{children:"aria-describedby"})," and ",e.jsx(n.code,{children:"aria-errormessage"})," stay in sync."]}),`
`,e.jsxs(n.li,{children:["For guarded approval flows, use control-level ",e.jsx(n.code,{children:"onClick(event.preventDefault())"})," on switch-like toggles to block pointer state mutation while preserving keyboard/readout semantics."]}),`
`,e.jsxs(n.li,{children:["When using standalone DatePicker error messaging, pass ",e.jsx(n.code,{children:"errorMessageId"})," with ",e.jsx(n.code,{children:"invalid"})," so both ",e.jsx(n.code,{children:"aria-describedby"})," and ",e.jsx(n.code,{children:"aria-errormessage"})," stay aligned."]}),`
`,e.jsxs(n.li,{children:["Preserve nuanced ",e.jsx(n.code,{children:"aria-invalid"})," values (",e.jsx(n.code,{children:"grammar"}),"/",e.jsx(n.code,{children:"spelling"}),") when integrating validation services; avoid normalizing them to generic ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:["For tooltip-enhanced controls that already have helper text, keep ",e.jsx(n.code,{children:"aria-describedby"})," lifecycle clean: append tooltip ID only while visible and remove it on close."]}),`
`,e.jsxs(n.li,{children:["Avoid ",e.jsx(n.code,{children:"autoFocus"}),"; use intentional focus management when opening overlays."]}),`
`,e.jsxs(n.li,{children:["For value-selection combobox/listbox patterns, map ",e.jsx(n.code,{children:"aria-selected"})," to the committed value, not temporary active focus."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"Combobox.options[].value"})," unique and stable; development builds now warn on duplicate values to prevent selected/active state ambiguity."]}),`
`,e.jsxs(n.li,{children:["For command-palette ",e.jsx(n.code,{children:"aria-activedescendant"})," flows, keep ",e.jsx(n.code,{children:"aria-selected"})," on the active option so screen readers announce current keyboard focus target."]}),`
`,e.jsxs(n.li,{children:["For ",e.jsx(n.code,{children:"aria-activedescendant"})," combobox flows, keep listbox options out of tab order and preserve input focus during pointer selection."]}),`
`,e.jsxs(n.li,{children:["Keep combobox ",e.jsx(n.code,{children:"aria-controls"})," conditional on popup visibility to avoid dangling listbox references."]}),`
`,e.jsxs(n.li,{children:["Keep command-palette combobox ",e.jsx(n.code,{children:"aria-controls"})," conditional on filtered-result listbox visibility so empty states do not expose stale or missing listbox IDs."]}),`
`,e.jsxs(n.li,{children:["Localize command-palette result list semantics with ",e.jsx(n.code,{children:"resultsAriaLabel"})," in non-English products, instead of relying on the default English listbox label."]}),`
`,e.jsxs(n.li,{children:["Localize command-palette heading/search/close semantics with ",e.jsx(n.code,{children:"title"})," / ",e.jsx(n.code,{children:"description"})," / ",e.jsx(n.code,{children:"searchAriaLabel"})," / ",e.jsx(n.code,{children:"closeLabel"})," so dialog narration matches product language."]}),`
`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:O}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"overlay-policies",children:"Overlay Policies"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Dialog/Drawer should explicitly define dismiss policy (",e.jsx(n.code,{children:"closeOnEscape"}),", ",e.jsx(n.code,{children:"closeOnOutsidePointer"}),") for critical workflows."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"restoreFocus"})," enabled for dialogs unless product flow intentionally redirects focus after close."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"restoreFocus"})," enabled for drawers unless closing should intentionally hand focus to a different target."]}),`
`,e.jsx(n.li,{children:"Keep close-button focus intent primary-only in dialog/drawer surfaces so non-primary pointer interactions (for example context/right-click) do not clear keyboard focus-visible feedback."}),`
`,e.jsx(n.li,{children:"Popover and Dropdown should restore focus to trigger on keyboard dismissal (Escape), but keep pointer target focus on outside-click dismissal."}),`
`,e.jsxs(n.li,{children:["For blocking confirmation/action menus, set ",e.jsx(n.code,{children:"closeOnEscape={false}"})," + ",e.jsx(n.code,{children:"closeOnOutsidePointer={false}"})," and provide an explicit close/confirm path."]}),`
`,e.jsxs(n.li,{children:["For conditional runtime approval guards, keep ",e.jsx(n.code,{children:"closeOnEscape/closeOnOutsidePointer"})," enabled and intercept ",e.jsx(n.code,{children:"onEscapeKeyDown/onPointerDownOutside"})," with ",e.jsx(n.code,{children:"event.preventDefault()"})," only while guard conditions are active."]}),`
`,e.jsxs(n.li,{children:["Dropdown menus should expose an accessible name via trigger-linked ",e.jsx(n.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"Dropdown.items[].key"})," unique and stable; development builds now warn on duplicate keys to prevent focus and close-telemetry ambiguity."]}),`
`,e.jsx(n.li,{children:"For nested overlays, dismiss policy should resolve top-layer first so one Escape/outside click does not collapse the full stack."}),`
`,e.jsxs(n.li,{children:["For overlays built on ",e.jsx(n.code,{children:"DismissableLayer"}),", ignore Escape while IME composition is active so CJK text confirmation does not close parent surfaces unexpectedly."]}),`
`,e.jsxs(n.li,{children:["For dialog/drawer flows under app-level shortcuts, rely on built-in Escape preemption behavior so ",e.jsx(n.code,{children:"onEscapeKeyDown"})," hooks stay side-effect free when Escape is already prevented."]}),`
`,e.jsxs(n.li,{children:["Keep trigger ",e.jsx(n.code,{children:"aria-controls"})," conditional on open state for popover/menu patterns to avoid stale ID references."]}),`
`,e.jsxs(n.li,{children:["Use dialog ",e.jsx(n.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(n.code,{children:"close-button"})," / ",e.jsx(n.code,{children:"escape-key"})," / ",e.jsx(n.code,{children:"outside-pointer"}),") instead of inferring dismiss origin from external state transitions."]}),`
`,e.jsxs(n.li,{children:["Use drawer ",e.jsx(n.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(n.code,{children:"close-button"})," / ",e.jsx(n.code,{children:"escape-key"})," / ",e.jsx(n.code,{children:"outside-pointer"}),") instead of inferring dismiss origin from external state transitions."]}),`
`,e.jsxs(n.li,{children:["Keep dialog/drawer close callbacks ordered and single-purpose: dismiss paths should emit ",e.jsx(n.code,{children:"onCloseReason"})," before ",e.jsx(n.code,{children:"onOpenChange(false)"})," to avoid telemetry/state reducer race conditions."]}),`
`,e.jsxs(n.li,{children:["For dropdown typeahead, set ",e.jsx(n.code,{children:"textValue"})," when item labels are non-string or need locale/accent-friendly buffered matching aliases."]}),`
`,e.jsx(n.li,{children:"Ignore dropdown typeahead key matching during IME composition so CJK input confirmation does not shift active menu focus unexpectedly."}),`
`,e.jsxs(n.li,{children:["When app-level shortcuts preempt Escape with ",e.jsx(n.code,{children:"preventDefault()"}),", keep dropdown-level Escape hooks side-effect free and rely on built-in preemption skip behavior."]}),`
`,e.jsxs(n.li,{children:["When app-level shortcuts preempt Escape with ",e.jsx(n.code,{children:"preventDefault()"}),", keep popover-level Escape hooks side-effect free and rely on built-in preemption skip behavior."]}),`
`,e.jsxs(n.li,{children:["Use popover ",e.jsx(n.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(n.code,{children:"trigger-click"})," / ",e.jsx(n.code,{children:"escape-key"})," / ",e.jsx(n.code,{children:"outside-pointer"}),") instead of inferring dismiss origin from focus and pointer side effects."]}),`
`,e.jsxs(n.li,{children:["Use dropdown ",e.jsx(n.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(n.code,{children:"trigger-click"})," / ",e.jsx(n.code,{children:"item-select"})," / ",e.jsx(n.code,{children:"escape-key"})," / ",e.jsx(n.code,{children:"outside-pointer"})," / ",e.jsx(n.code,{children:"tab-key"}),") instead of inferring close origin from focus/state side effects."]}),`
`,e.jsxs(n.li,{children:["Keep popover/dropdown close callbacks ordered and single-purpose: close paths should emit ",e.jsx(n.code,{children:"onCloseReason"})," before ",e.jsx(n.code,{children:"onOpenChange(false)"}),", while dropdown ",e.jsx(n.code,{children:"item-select"})," should run ",e.jsx(n.code,{children:"onSelect"})," before close callbacks."]}),`
`,e.jsxs(n.li,{children:["Keep dropdown ",e.jsx(n.code,{children:"Tab"})," behavior aligned with document order: close menu and continue focus to next control."]}),`
`,e.jsx(n.li,{children:"For controlled dropdowns, treat Escape/outside/trigger dismiss as close intent only; apply final visual close in parent rerender to avoid state race conditions."}),`
`,e.jsxs(n.li,{children:["For icon-only/non-text dropdown items, provide ",e.jsx(n.code,{children:"items[].ariaLabel"})," so each menuitem keeps an explicit accessible name; development builds warn when omitted."]}),`
`,e.jsxs(n.li,{children:["For icon-only/non-text dropdown items, provide ",e.jsx(n.code,{children:"items[].textValue"})," so buffered typeahead can still discover those actions; development builds warn when omitted."]}),`
`,e.jsxs(n.li,{children:["Keep dropdown menu-item keyboard activation explicit and cross-browser (",e.jsx(n.code,{children:"Enter"})," / ",e.jsx(n.code,{children:"Space"})," / legacy ",e.jsx(n.code,{children:"Spacebar"}),") so non-pointer flows can execute actions without click simulation."]}),`
`,e.jsxs(n.li,{children:["Treat dropdown menu-item activation repeat (",e.jsx(n.code,{children:"event.repeat"}),") as no-op after first keydown to prevent duplicate command execution and telemetry jitter during long-press."]}),`
`,e.jsxs(n.li,{children:["Expose dropdown menu-item ",e.jsx(n.code,{children:'aria-keyshortcuts="Enter Space"'})," only on actionable items; disabled items should omit shortcut hints to avoid false affordance."]}),`
`,e.jsxs(n.li,{children:["For icon-only popover/dropdown triggers, always provide ",e.jsx(n.code,{children:"triggerAriaLabel"})," to preserve an explicit control name."]}),`
`,e.jsx(n.li,{children:"Keep field/button focus intent primary-only so non-primary pointer interactions do not clear keyboard-origin focus-visible rings before actual activation intent."}),`
`,e.jsx(n.li,{children:"Command palette and combobox-style overlays should keep text input as the primary focus anchor for navigation."}),`
`]}),`
`,e.jsx(s,{of:D}),`
`,e.jsx(s,{of:K}),`
`,e.jsx(s,{of:P}),`
`,e.jsx(s,{of:I}),`
`,e.jsx(s,{of:F}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(s,{of:R}),`
`,e.jsx(s,{of:A}),`
`,e.jsx(s,{of:T}),`
`,e.jsx(s,{of:L}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(s,{of:E}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h2,{id:"testing",children:"Testing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add unit tests for any new interaction branch."}),`
`,e.jsx(n.li,{children:"Add/extend Playwright smoke tests when user-facing flows change."}),`
`,e.jsx(n.li,{children:"Keep Storybook stories deterministic so visual regression remains stable."}),`
`]}),`
`,e.jsx(n.h2,{id:"ai-interaction-patterns",children:"AI Interaction Patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Always expose pending/loading states for AI request actions."}),`
`,e.jsx(n.li,{children:"Keep command labels explicit and searchable."}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"commands[].key"})," unique and stable; development builds now warn on duplicate keys to avoid active-option and telemetry drift."]}),`
`,e.jsxs(n.li,{children:["Provide ",e.jsx(n.code,{children:"textValue"})," aliases for non-string command labels and accent-friendly matching terms."]}),`
`,e.jsxs(n.li,{children:["For icon/non-text command labels, provide ",e.jsx(n.code,{children:"commands[].ariaLabel"})," so each option keeps an explicit accessible name; development builds warn when omitted."]}),`
`,e.jsxs(n.li,{children:["For non-text command labels, ensure ",e.jsx(n.code,{children:"textValue"})," or searchable ",e.jsx(n.code,{children:"keywords"})," are present; development builds warn when both are missing."]}),`
`,e.jsx(n.li,{children:"Provide empty-state guidance when no command matches the query."}),`
`,e.jsxs(n.li,{children:["Track user query updates with ",e.jsx(n.code,{children:"onQueryChange"})," for downstream telemetry."]}),`
`,e.jsxs(n.li,{children:["Treat ",e.jsx(n.code,{children:'onQueryChange("")'})," on palette close as the telemetry reset signal so external state mirrors the internal query lifecycle."]}),`
`,e.jsx(n.li,{children:"Keep live-region narration aligned with actionable commands (enabled matches), not just visible results."}),`
`,e.jsx(n.li,{children:"Keep disabled command entries non-executable and keep palette state unchanged on disabled clicks."}),`
`,e.jsxs(n.li,{children:["Keep command-palette ",e.jsx(n.code,{children:"aria-keyshortcuts"})," aligned with actionable state: when filtered results contain no enabled command, omit ",e.jsx(n.code,{children:"Enter"})," from shortcut hints."]}),`
`,e.jsxs(n.li,{children:["For batched command execution, set ",e.jsx(n.code,{children:"closeOnSelect={false}"})," so users can run multiple actions without reopening the palette."]}),`
`,e.jsxs(n.li,{children:["Treat repeated ",e.jsx(n.code,{children:"Enter"})," keydown (",e.jsx(n.code,{children:"event.repeat"}),") as no-op for command execution so long-press does not trigger duplicate actions or telemetry noise."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"PageUp"})," / ",e.jsx(n.code,{children:"PageDown"})," for long command sets so keyboard users can jump actionable options in larger steps."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"Ctrl/Meta/Alt + Home/End/Page/Enter"})," on native input behavior; do not hijack modified shortcuts for command navigation."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"clearQueryOnEscape"})," enabled so first Escape clears query intent before full palette dismissal; disable only when product expects immediate close."]}),`
`,e.jsxs(n.li,{children:["After query updates or command-set refreshes, keep command-palette ",e.jsx(n.code,{children:"aria-activedescendant"})," valid by pointing only to a currently mounted, enabled option; clear it when no executable option remains."]}),`
`,e.jsxs(n.li,{children:["For blocking approvals, set ",e.jsx(n.code,{children:"closeOnEscape={false}"})," and ",e.jsx(n.code,{children:"closeOnOutsidePointer={false}"})," so command confirmation cannot be dismissed accidentally."]}),`
`,e.jsxs(n.li,{children:["For conditional approval guards, prefer ",e.jsx(n.code,{children:"onEscapeKeyDown/onPointerDownOutside"})," + ",e.jsx(n.code,{children:"event.preventDefault()"})," so dismiss policy can be unlocked at runtime."]}),`
`,e.jsxs(n.li,{children:["When app-level shortcuts preempt Escape with ",e.jsx(n.code,{children:"preventDefault()"}),", rely on built-in callback-skip behavior so command-level escape hooks stay side-effect free."]}),`
`,e.jsx(n.li,{children:"Ignore command list navigation/selection keys while IME composition is active so Enter confirms text composition instead of executing commands."}),`
`,e.jsx(n.li,{children:"During IME composition, treat Escape as text-confirm/cancel only; do not expect query reset or palette dismiss until composition ends."}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"onCloseReason"})," to emit deterministic dismissal telemetry (",e.jsx(n.code,{children:"close-button"})," / ",e.jsx(n.code,{children:"item-select"})," / ",e.jsx(n.code,{children:"escape-key"})," / ",e.jsx(n.code,{children:"outside-pointer"}),") instead of inferring close path from side effects."]}),`
`,e.jsxs(n.li,{children:["Keep callback side effects ordered and single-purpose: ",e.jsx(n.code,{children:"item-select"})," path should treat ",e.jsx(n.code,{children:"onSelect"})," as action commit, then ",e.jsx(n.code,{children:"onCloseReason"}),", then ",e.jsx(n.code,{children:"onOpenChange(false)"}),"; close-button path should use ",e.jsx(n.code,{children:"onCloseReason"})," before ",e.jsx(n.code,{children:"onOpenChange(false)"}),"."]}),`
`,e.jsx(n.li,{children:"Guard Ctrl/Cmd + Enter submission against active IME composition to avoid accidental sends for CJK input."}),`
`,e.jsx(n.li,{children:"Show reasoning disclosure with explicit user intent (default collapsed)."}),`
`,e.jsxs(n.li,{children:["Use streaming containers that surface busy completion (",e.jsx(n.code,{children:"aria-busy"}),") for assistive tech parity."]}),`
`]}),`
`,e.jsx(s,{of:Y}),`
`,e.jsx(s,{of:Z}),`
`,e.jsx(s,{of:ee}),`
`,e.jsx(s,{of:ne}),`
`,e.jsx(s,{of:H}),`
`,e.jsx(s,{of:G}),`
`,e.jsx(s,{of:B}),`
`,e.jsx(s,{of:M}),`
`,e.jsx(s,{of:q}),`
`,e.jsx(s,{of:U}),`
`,e.jsx(s,{of:$}),`
`,e.jsx(s,{of:z}),`
`,e.jsx(s,{of:V}),`
`,e.jsx(s,{of:N}),`
`,e.jsx(s,{of:W}),`
`,e.jsx(s,{of:Q}),`
`,e.jsx(s,{of:J}),`
`,e.jsx(s,{of:X}),`
`,e.jsx(s,{of:_}),`
`,e.jsx(n.h2,{id:"notification-behavior",children:"Notification Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Actionable toasts are persistent by default (",e.jsx(n.code,{children:"duration"})," omitted -> ",e.jsx(n.code,{children:"0"}),"); set explicit ",e.jsx(n.code,{children:"duration"})," only when product requires timed dismissal."]}),`
`,e.jsxs(n.li,{children:["If a toast includes ",e.jsx(n.code,{children:"action"}),", treat it as an interactive surface (",e.jsx(n.code,{children:"dialog"})," / ",e.jsx(n.code,{children:"alertdialog"}),") and keep CTA labels explicit."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"closeOnEscape"})," aligned with task criticality; disable Escape only for must-read states."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"onEscapeKeyDown"})," when Escape policy must be toggled dynamically at runtime (e.g. approval checkpoints)."]}),`
`,e.jsxs(n.li,{children:["Ensure upper-layer shortcuts that ",e.jsx(n.code,{children:"preventDefault()"})," on Escape can preempt toast dismiss when required."]}),`
`,e.jsx(n.li,{children:"When Escape is preempted upstream, avoid side effects in toast-level analytics/guards by relying on the built-in hook-skip behavior."}),`
`,e.jsx(n.li,{children:"Ignore Escape dismissal while IME composition is active so CJK text confirmation inside toast actions does not close the notification unexpectedly."}),`
`,e.jsx(n.li,{children:"For stacked notifications, rely on Escape handling that dismisses one toast per key press, prioritizing the latest or most recently interacted toast."}),`
`,e.jsxs(n.li,{children:["Treat repeated Escape keydown (",e.jsx(n.code,{children:"event.repeat"}),") as no-op for toast dismissal so long-press does not close multiple stacked notices or duplicate telemetry."]}),`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"closeOnEscape"})," toggles at runtime, verify stacked ",e.jsx(n.code,{children:"aria-keyshortcuts"})," hints move to the current top escapable toast with no stale shortcut exposure."]}),`
`,e.jsx(n.li,{children:"Keep stacked toasts in the same corner so built-in visual offset preserves message legibility for older notifications."}),`
`,e.jsxs(n.li,{children:["Verify timer pause behavior for both pointer hover and keyboard focus when ",e.jsx(n.code,{children:"pauseOnHover"})," is enabled."]}),`
`,e.jsx(n.li,{children:"Verify timed toasts pause in hidden browser tabs and resume from remaining time after visibility returns."}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(n.code,{children:"close-button"})," / ",e.jsx(n.code,{children:"escape-key"})," / ",e.jsx(n.code,{children:"timeout"}),") instead of inferring dismiss origin from side effects."]}),`
`,e.jsxs(n.li,{children:["When combining ",e.jsx(n.code,{children:"onCloseReason"}),", ",e.jsx(n.code,{children:"onClose"}),", and ",e.jsx(n.code,{children:"onOpenChange"}),", consume them as ordered lifecycle hooks (",e.jsx(n.code,{children:"onCloseReason"})," -> ",e.jsx(n.code,{children:"onClose"})," -> ",e.jsx(n.code,{children:"onOpenChange(false)"}),"), not parallel duplicate side effects."]}),`
`,e.jsx(n.li,{children:"Keep toast close-button focus intent primary-only so non-primary pointer interactions do not clear keyboard-origin focus-visible feedback."}),`
`,e.jsx(n.li,{children:"Keep toast close-button keyboard-intent tracking document-scoped so keyboard re-entry after pointer interactions restores focus-visible fallback consistently."}),`
`,e.jsxs(n.li,{children:["Provide ",e.jsx(n.code,{children:"ariaLabel"})," when toast title is icon-only or otherwise not plain text; development builds warn when non-text titles omit it."]}),`
`,e.jsxs(n.li,{children:["For high-frequency passive updates, set ",e.jsx(n.code,{children:'live="off"'})," to reduce assistive-tech interruption while keeping visual toast context."]}),`
`]}),`
`,e.jsx(s,{of:se}),`
`,e.jsx(s,{of:oe}),`
`,e.jsx(s,{of:ie}),`
`,e.jsx(s,{of:re}),`
`,e.jsx(s,{of:te}),`
`,e.jsx(s,{of:ae}),`
`,e.jsx(s,{of:le}),`
`,e.jsx(s,{of:ce}),`
`,e.jsx(s,{of:de}),`
`,e.jsx(s,{of:he}),`
`,e.jsx(s,{of:pe}),`
`,e.jsx(s,{of:xe}),`
`,e.jsx(s,{of:me}),`
`,e.jsx(n.h2,{id:"data-presentation-patterns",children:"Data Presentation Patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use typed columns and stable row keys in data tables; fallback source-index keys exist for safety but explicit ",e.jsx(n.code,{children:"rowKey"})," is preferred."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"rowKey"})," outputs unique per source row; development builds now warn on duplicate keys to catch unstable identity wiring early."]}),`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"rowKey"})," uses ",e.jsx(n.code,{children:"rowIndex"}),", treat it as source-data index; avoid deriving keys from sorted visual position."]}),`
`,e.jsxs(n.li,{children:["For custom cell renderers, use ",e.jsx(n.code,{children:"render(row, rowIndex, sourceIndex)"})," and pick the index intentionally (",e.jsx(n.code,{children:"rowIndex"})," for ranking UI, ",e.jsx(n.code,{children:"sourceIndex"})," for source-linked IDs/telemetry)."]}),`
`,e.jsxs(n.li,{children:["Mark the primary identity column with ",e.jsx(n.code,{children:"rowHeader"})," so screen readers can announce row context consistently."]}),`
`,e.jsxs(n.li,{children:["Ensure each table has an accessible name through ",e.jsx(n.code,{children:"caption"}),", ",e.jsx(n.code,{children:"ariaLabel"}),", or ",e.jsx(n.code,{children:"ariaLabelledBy"}),"; fallback ",e.jsx(n.code,{children:"Data table"})," naming exists but should be treated as a safety net."]}),`
`,e.jsxs(n.li,{children:["Expose ",e.jsx(n.code,{children:"aria-sort"})," only on the actively sorted header so assistive narration reflects current sort state without repeating neutral columns."]}),`
`,e.jsxs(n.li,{children:["Keep non-sortable headers free of ",e.jsx(n.code,{children:"aria-sort"})," so assistive tech does not announce inert columns as interactive."]}),`
`,e.jsxs(n.li,{children:["Validate sortable headers with both pointer and keyboard (",e.jsx(n.code,{children:"Enter"}),"/",e.jsx(n.code,{children:"Space"}),", including legacy ",e.jsx(n.code,{children:"Spacebar"}),") so non-pointer workflows stay first-class."]}),`
`,e.jsxs(n.li,{children:["Keep modified shortcuts (",e.jsx(n.code,{children:"Ctrl/Meta/Alt + Enter/Space"}),") on host/browser behavior; sortable headers should only react to unmodified activation keys."]}),`
`,e.jsxs(n.li,{children:["Treat long-press keyboard repeat (",e.jsx(n.code,{children:"event.repeat"}),") for sortable-header activation keys (",e.jsx(n.code,{children:"Enter"})," / ",e.jsx(n.code,{children:"Space"})," / ",e.jsx(n.code,{children:"Spacebar"}),") as no-op after the first toggle to prevent sort churn and telemetry jitter."]}),`
`,e.jsxs(n.li,{children:["Guard against synthesized keyboard-origin click (",e.jsx(n.code,{children:"detail=0"}),") after handled sort keydown so one keyboard action maps to one telemetry event."]}),`
`,e.jsxs(n.li,{children:["Keep sortable-header focus-visible feedback and ",e.jsx(n.code,{children:'aria-keyshortcuts="Enter Space"'})," in place so keyboard affordance stays explicit in QA and audits."]}),`
`,e.jsx(n.li,{children:"Keep tab and sortable-header focus intent primary-only so non-primary pointer interactions do not clear keyboard-origin focus-visible rings."}),`
`,e.jsxs(n.li,{children:["For iframe/multi-document hosts, keep tab/sort focus-intent tracking bound to each component ",e.jsx(n.code,{children:"ownerDocument"})," so keyboard focus-visible semantics remain stable outside the top-level document."]}),`
`,e.jsxs(n.li,{children:["When sortable headers have no readable text (for example icon-only markup), provide ",e.jsx(n.code,{children:"columns[].sortLabel"})," so aria labels and live narration stay human-readable; rich headers with visible text are auto-extracted."]}),`
`,e.jsxs(n.li,{children:["Localize sortable header narration with ",e.jsx(n.code,{children:"getSortAriaLabel"})," instead of hardcoding translated text into column titles."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"getSortStatusText"})," to localize active-sort live narration so keyboard and pointer sorting changes remain equally discoverable to assistive tech users."]}),`
`,e.jsxs(n.li,{children:["During async refreshes, set ",e.jsx(n.code,{children:"loading"})," so table emits ",e.jsx(n.code,{children:"aria-busy"})," and temporarily suppresses stale row actions/sorting."]}),`
`,e.jsxs(n.li,{children:["During ",e.jsx(n.code,{children:"loading"}),", clear ",e.jsx(n.code,{children:"aria-sort"})," from headers so assistive narration does not announce stale sorted state while data is temporarily non-interactive."]}),`
`,e.jsxs(n.li,{children:["For empty datasets, use meaningful ",e.jsx(n.code,{children:"emptyContent"}),"; table announces it through polite live status narration."]}),`
`,e.jsx(n.li,{children:"Treat single-row tables as non-sortable UI at runtime; built-in sort controls are auto-disabled to prevent no-op telemetry and redundant keyboard stops."}),`
`,e.jsxs(n.li,{children:["For pagination i18n, generate ",e.jsx(n.code,{children:"getItemAriaLabel"})," from the provided ",e.jsx(n.code,{children:"page"})," argument; boundary previous/next labels are already clamped to valid page ranges."]}),`
`,e.jsxs(n.li,{children:["Prefer ",e.jsx(n.code,{children:"ariaLabelledBy"})," for pagination when a visible heading already exists; use ",e.jsx(n.code,{children:"ariaLabel"})," for standalone pagers without nearby title copy."]}),`
`,e.jsx(n.li,{children:"In RTL layouts, verify Pagination ArrowLeft/ArrowRight keyboard shortcuts are mirrored so page movement follows visual direction."}),`
`,e.jsx(n.li,{children:"Surface status semantics with tokens instead of custom ad-hoc colors."}),`
`,e.jsx(n.li,{children:"Keep row actions predictable and keyboard reachable."}),`
`,e.jsxs(n.li,{children:["Ensure tabs support orientation-aware arrows (",e.jsx(n.code,{children:"Left/Right"})," or ",e.jsx(n.code,{children:"Up/Down"}),") plus ",e.jsx(n.code,{children:"Home/End"}),", and skip disabled entries."]}),`
`,e.jsxs(n.li,{children:["In RTL layouts, verify horizontal ",e.jsx(n.code,{children:"ArrowLeft"}),"/",e.jsx(n.code,{children:"ArrowRight"})," intent is mirrored so tab navigation matches visual reading flow."]}),`
`,e.jsxs(n.li,{children:["Prefer ",e.jsx(n.code,{children:"ariaLabelledBy"})," with a visible heading when tabs already have on-screen context labels; fall back to ",e.jsx(n.code,{children:"ariaLabel"})," for standalone tab groups."]}),`
`,e.jsxs(n.li,{children:["For icon/custom tab labels, provide ",e.jsx(n.code,{children:"items[].ariaLabel"})," so each tab keeps an explicit accessible name; development builds warn when non-text labels omit it."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'activationMode="manual"'})," when arrow-key navigation should not immediately trigger expensive panel renders."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"loop={false}"})," when boundary tabs should trap Arrow navigation (for linear workflows where wrap-around can feel like a jump)."]}),`
`,e.jsxs(n.li,{children:["Keep modified shortcuts (",e.jsx(n.code,{children:"Ctrl/Meta/Alt + Arrow/Home/End/Enter/Space"}),") on host/browser behavior; tabs should only react to unmodified navigation/activation keys."]}),`
`,e.jsxs(n.li,{children:["Keep manual tabs compatible with legacy ",e.jsx(n.code,{children:"Spacebar"})," key values so activation remains consistent across browser engines."]}),`
`,e.jsxs(n.li,{children:["Treat manual-tab activation key repeat (",e.jsx(n.code,{children:"Enter"}),"/",e.jsx(n.code,{children:"Space"}),", ",e.jsx(n.code,{children:"event.repeat"}),") as no-op after first activation to prevent duplicate change telemetry."]}),`
`,e.jsxs(n.li,{children:["In controlled mode, ensure ",e.jsx(n.code,{children:"value"})," always maps to an enabled tab key; development builds now warn when ",e.jsx(n.code,{children:"value"})," is missing/disabled and fallback selection is applied."]}),`
`,e.jsxs(n.li,{children:["Keep tab panels mounted and toggle ",e.jsx(n.code,{children:"hidden"})," so tab ",e.jsx(n.code,{children:"aria-controls"})," always points to a real panel."]}),`
`,e.jsxs(n.li,{children:["Avoid duplicate telemetry from tabs by emitting ",e.jsx(n.code,{children:"onValueChange"})," only on actual key transitions."]}),`
`]}),`
`,e.jsx(s,{of:je}),`
`,e.jsx(s,{of:ue}),`
`,e.jsx(s,{of:fe}),`
`,e.jsx(s,{of:be}),`
`,e.jsx(s,{of:ye}),`
`,e.jsx(s,{of:ge}),`
`,e.jsx(s,{of:ve}),`
`,e.jsx(s,{of:we}),`
`,e.jsx(s,{of:ke}),`
`,e.jsx(s,{of:Ee}),`
`,e.jsx(s,{of:Ce}),`
`,e.jsx(s,{of:De}),`
`,e.jsx(s,{of:Ke}),`
`,e.jsx(s,{of:Pe}),`
`,e.jsx(s,{of:Ie}),`
`,e.jsx(s,{of:Fe}),`
`,e.jsx(s,{of:Se}),`
`,e.jsx(s,{of:Re}),`
`,e.jsx(s,{of:Ae}),`
`,e.jsx(s,{of:Te}),`
`,e.jsx(s,{of:Le}),`
`,e.jsx(s,{of:Oe})]})}function kn(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{kn as default};
