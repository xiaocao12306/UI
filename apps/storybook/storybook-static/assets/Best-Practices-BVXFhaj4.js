import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CHKtz2QT.js";import{M as t,T as a,S as l,D as d,C as n}from"./index-h6pNPRpK.js";import{VariantMatrix as c,IconOnlyAccessibleName as h}from"./Button.stories-DubUdhYB.js";import{WithInputControl as p}from"./FormField.stories-DqRk1QEs.js";import{Interactive as x,CloseReasonTelemetry as u,FocusTrapKeyboardCycle as m,CloseButtonKeyboardPressedState as j,EscapeIgnoresImeComposition as f,EscapePreemptedByGlobalHandler as b,EscapeRepeatGuard as y,DismissGuardHooks as g}from"./Dialog.stories-F3ADudLA.js";import{CloseReasonTelemetry as v,FocusTrapKeyboardCycle as w,CloseButtonKeyboardPressedState as k,EscapePreemptedByGlobalHandler as E,EscapeRepeatGuard as C,DismissGuardHooks as K}from"./Drawer.stories-CLAKTID9.js";import{CloseReasonTelemetry as D,TriggerArrowDownModifierGuard as S,EscapePreemptedByGlobalHandler as P,EscapeRepeatGuard as A,DismissGuardHooks as F}from"./Popover.stories-DXfvONiz.js";import{OutsideDismissFocusTransfer as R,EscapeDismissFocusReturn as I,EscapePreemptedByGlobalHandler as T,EscapeRepeatGuard as L,TabDismissToNextControl as O,CloseReasonTelemetry as G,KeyboardActivationDedupe as H,ControlledOpenContract as M,TypeaheadNavigation as B,IconItemNaming as q,TypeaheadIgnoresImeComposition as U,DismissGuardHooks as $}from"./Dropdown.stories-BysaRibQ.js";import{DescribedByLifecycle as z}from"./Tooltip.stories-DI-ASlF0.js";import{AiInteractionFlow as V,QueryTelemetry as N,CloseReasonTelemetry as W,DisabledCommandGuard as Q,TextValueAndAccentSearch as J,IconOnlyCommandNaming as X,PersistentSelection as _,OptionActivationKeyGuard as Y,RefinedSearchKeepsActiveCommand as Z,PagedKeyboardNavigation as ee,LocalizedResultsLabel as se,LocalizedDialogCopy as ne,ImeCompositionGuard as oe,EscapePreemptedByGlobalHandler as ie,GuardedDismissEvents as re,EscapeClearsQueryFirst as te,EscapeRepeatGuard as ae}from"./CommandPalette.stories-qYVOpVj9.js";import{WithAiRequestState as le}from"./PromptInput.stories-B0ZpShKS.js";import{Conversation as de}from"./MessageBubble.stories-XtWuqyRv.js";import{Default as ce}from"./ReasoningPanel.stories-ll9aUG-c.js";import{Default as he}from"./StreamingCodeBlock.stories-52CajPJL.js";import{ActionRequired as pe,ActionRequiredDanger as xe,CloseReasonTelemetry as ue,EscapeStackOrder as me,EscapeShortcutSync as je,StackedViewportOffset as fe,FocusedToastEscapesFirst as be,CloseButtonPrimaryPointerOnly as ye,CloseButtonKeyboardPressedState as ge,EscapePreemptedByGlobalHandler as ve,EscapePreemptedSkipsToastHook as we,EscapeGuardedByToastHandler as ke,EscapeIgnoresImeComposition as Ee,LiveRegionOff as Ce}from"./Toast.stories-CjTAACDJ.js";import{KeyboardNavigationGuide as Ke,NoLoopNavigation as De,Vertical as Se,RtlKeyboardNavigation as Pe,LabelledByHeading as Ae,ManualActivation as Fe,ManualActivationPressedFeedback as Re,ManualVerticalActivation as Ie,PrimaryPointerOnlyPressedState as Te}from"./Tabs.stories-COzxGmFP.js";import{ReleaseChecklist as Le,SortTelemetry as Oe,LocalizedSortLabels as Ge,SortLabelForCustomHeader as He,RichTextHeaderAutoSortLabel as Me,AriaLabelHeaderAutoSortLabel as Be,SingleRowSortDisabled as qe,PrimaryPointerOnlySortPress as Ue,WithRowAction as $e,InvalidDefaultSortKeyFallback as ze,RowHeaderSemantics as Ve,AccessibleNameFallback as Ne}from"./Table.stories-D7WlZgYk.js";import{KeyboardShortcuts as We,RtlKeyboardShortcuts as Qe,LabelledByHeading as Je}from"./Pagination.stories-LaCM9y5E.js";import"./index-BWu4c2F4.js";import"./iframe-DUhW-gUT.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";import"./Button-Cn1nutIP.js";import"./Tag-Dmp9Dfgr.js";import"./Badge-ZJmMstsz.js";import"./index-DgAF9SIF.js";import"./storyShowcase-Bw5VyCj0.js";import"./Input-7y9QhjTU.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./FormField-ZaHPw_tE.js";import"./Textarea-rdjUZYOj.js";import"./Dialog-ByUOEfuy.js";import"./bodyScrollLock-D0vp0S5S.js";import"./DismissableLayer-DAyP3iyR.js";import"./Dropdown-HPPhmppp.js";import"./Popover-BBF32erp.js";function i(o){const s={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Best Practices"}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{children:"Design + Engineering Checklist"}),`
`,e.jsx(d,{children:e.jsx(s.p,{children:"Use these rules to keep components consistent with the Aurora plan and avoid regressions in accessibility or theming."})}),`
`,e.jsx(s.h2,{id:"api-design",children:"API Design"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Keep props minimal and composable; avoid business-specific flags."}),`
`,e.jsxs(s.li,{children:["Prefer controlled APIs for overlays (",e.jsx(s.code,{children:"open"}),", ",e.jsx(s.code,{children:"onOpenChange"}),")."]}),`
`,e.jsxs(s.li,{children:["Expose semantic variants (",e.jsx(s.code,{children:"solid"}),", ",e.jsx(s.code,{children:"outline"}),") instead of hardcoded colors."]}),`
`]}),`
`,e.jsx(n,{of:c}),`
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
`,e.jsxs(s.li,{children:["For icon-only buttons, provide non-empty ",e.jsx(s.code,{children:"aria-label"})," or ",e.jsx(s.code,{children:"aria-labelledby"})," on the button itself; inline child ",e.jsx(s.code,{children:"aria-label"})," is treated as fallback only, and decorative glyph text should remain ",e.jsx(s.code,{children:"aria-hidden"}),"."]}),`
`,e.jsxs(s.li,{children:["Keep button pressed-state feedback scoped to unmodified activation keys (",e.jsx(s.code,{children:"Enter"}),"/",e.jsx(s.code,{children:"Space"}),"/",e.jsx(s.code,{children:"Spacebar"}),"); ignore ",e.jsx(s.code,{children:"Ctrl/Meta/Alt"})," chords so host shortcuts do not flash pressed visuals."]}),`
`,e.jsxs(s.li,{children:["Respect OS reduced-motion preferences: keep ",e.jsx(s.code,{children:"GlobalStyles"})," mounted so surfaces tagged with ",e.jsx(s.code,{children:"data-aurora-reduced-motion"})," disable shimmer/spin/indeterminate motion (Button loading spinner, Progress indeterminate bar, Skeleton shimmer) under ",e.jsx(s.code,{children:"prefers-reduced-motion"}),", and keep timer-driven feedback (",e.jsx(s.code,{children:"LoadingDots"}),", ",e.jsx(s.code,{children:"StreamingText"}),") on default ",e.jsx(s.code,{children:"respectReducedMotion"})," behavior unless the product explicitly requires animated narration."]}),`
`,e.jsxs(s.li,{children:["Prefer ",e.jsx(s.code,{children:"FormField"})," wrappers for helper/error copy so ",e.jsx(s.code,{children:"aria-describedby"})," and ",e.jsx(s.code,{children:"aria-errormessage"})," stay in sync."]}),`
`,e.jsxs(s.li,{children:["Keep input Enter active feedback scoped to unmodified keys: ignore ",e.jsx(s.code,{children:"Ctrl/Meta/Alt + Enter"})," shortcut chords, while allowing normal ",e.jsx(s.code,{children:"Enter"})," and ",e.jsx(s.code,{children:"Shift+Enter"})," intent."]}),`
`,e.jsxs(s.li,{children:["For guarded approval flows, use control-level ",e.jsx(s.code,{children:"onClick(event.preventDefault())"})," on switch-like toggles to block pointer state mutation while preserving keyboard/readout semantics."]}),`
`,e.jsxs(s.li,{children:["When using standalone DatePicker error messaging, pass ",e.jsx(s.code,{children:"errorMessageId"})," with ",e.jsx(s.code,{children:"invalid"})," so both ",e.jsx(s.code,{children:"aria-describedby"})," and ",e.jsx(s.code,{children:"aria-errormessage"})," stay aligned."]}),`
`,e.jsxs(s.li,{children:["Preserve nuanced ",e.jsx(s.code,{children:"aria-invalid"})," values (",e.jsx(s.code,{children:"grammar"}),"/",e.jsx(s.code,{children:"spelling"}),") when integrating validation services; avoid normalizing them to generic ",e.jsx(s.code,{children:"true"}),"."]}),`
`,e.jsxs(s.li,{children:["For tooltip-enhanced controls that already have helper text, keep ",e.jsx(s.code,{children:"aria-describedby"})," lifecycle clean: append tooltip ID only while visible and remove it on close."]}),`
`,e.jsxs(s.li,{children:["Avoid ",e.jsx(s.code,{children:"autoFocus"}),"; use intentional focus management when opening overlays."]}),`
`,e.jsxs(s.li,{children:["For value-selection combobox/listbox patterns, map ",e.jsx(s.code,{children:"aria-selected"})," to the committed value, not temporary active focus."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"Combobox.options[].value"})," unique and stable; development builds now warn on duplicate values to prevent selected/active state ambiguity."]}),`
`,e.jsxs(s.li,{children:["Treat blank combobox ",e.jsx(s.code,{children:"ariaLabel"})," as missing so both combobox and listbox names fall back to readable defaults (",e.jsx(s.code,{children:"Combobox"})," / ",e.jsx(s.code,{children:"Combobox options"}),") instead of empty labels."]}),`
`,e.jsxs(s.li,{children:["For command-palette ",e.jsx(s.code,{children:"aria-activedescendant"})," flows, keep ",e.jsx(s.code,{children:"aria-selected"})," on the active option so screen readers announce current keyboard focus target."]}),`
`,e.jsxs(s.li,{children:["For ",e.jsx(s.code,{children:"aria-activedescendant"})," combobox flows, keep listbox options out of tab order and preserve input focus during pointer selection."]}),`
`,e.jsxs(s.li,{children:["For combobox outside-pointer dismissal, ignore non-primary pointer interactions and honor upstream ",e.jsx(s.code,{children:"pointerdown.preventDefault()"})," guards so context/right-click and guarded workflows do not collapse the popup unexpectedly."]}),`
`,e.jsxs(s.li,{children:["Keep combobox ",e.jsx(s.code,{children:"aria-controls"})," conditional on popup visibility to avoid dangling listbox references."]}),`
`,e.jsxs(s.li,{children:["Keep command-palette combobox ",e.jsx(s.code,{children:"aria-controls"})," conditional on filtered-result listbox visibility so empty states do not expose stale or missing listbox IDs."]}),`
`,e.jsxs(s.li,{children:["Localize command-palette result list semantics with ",e.jsx(s.code,{children:"resultsAriaLabel"})," in non-English products, instead of relying on the default English listbox label."]}),`
`,e.jsxs(s.li,{children:["Localize command-palette heading/search/close semantics with ",e.jsx(s.code,{children:"title"})," / ",e.jsx(s.code,{children:"description"})," / ",e.jsx(s.code,{children:"searchAriaLabel"})," / ",e.jsx(s.code,{children:"closeLabel"})," so dialog narration matches product language."]}),`
`]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h2,{id:"overlay-policies",children:"Overlay Policies"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Dialog/Drawer should explicitly define dismiss policy (",e.jsx(s.code,{children:"closeOnEscape"}),", ",e.jsx(s.code,{children:"closeOnOutsidePointer"}),") for critical workflows."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"restoreFocus"})," enabled for dialogs unless product flow intentionally redirects focus after close."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"restoreFocus"})," enabled for drawers unless closing should intentionally hand focus to a different target."]}),`
`,e.jsx(s.li,{children:"Keep close-button focus intent primary-only in dialog/drawer surfaces so non-primary pointer interactions (for example context/right-click) do not clear keyboard focus-visible feedback."}),`
`,e.jsxs(s.li,{children:["Keep dialog/drawer close-button keyboard pressed-state feedback scoped to unmodified activation keys (",e.jsx(s.code,{children:"Enter"}),"/",e.jsx(s.code,{children:"Space"}),"/",e.jsx(s.code,{children:"Spacebar"}),"); ",e.jsx(s.code,{children:"Ctrl/Meta/Alt"})," chords should not trigger pressed visuals."]}),`
`,e.jsx(s.li,{children:"Popover and Dropdown should restore focus to trigger on keyboard dismissal (Escape), but keep pointer target focus on outside-click dismissal."}),`
`,e.jsxs(s.li,{children:["For blocking confirmation/action menus, set ",e.jsx(s.code,{children:"closeOnEscape={false}"})," + ",e.jsx(s.code,{children:"closeOnOutsidePointer={false}"})," and provide an explicit close/confirm path."]}),`
`,e.jsxs(s.li,{children:["For conditional runtime approval guards, keep ",e.jsx(s.code,{children:"closeOnEscape/closeOnOutsidePointer"})," enabled and intercept ",e.jsx(s.code,{children:"onEscapeKeyDown/onPointerDownOutside"})," with ",e.jsx(s.code,{children:"event.preventDefault()"})," only while guard conditions are active."]}),`
`,e.jsxs(s.li,{children:["Dropdown menus should expose an accessible name via trigger-linked ",e.jsx(s.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"Dropdown.items[].key"})," unique and stable; development builds now warn on duplicate keys to prevent focus and close-telemetry ambiguity."]}),`
`,e.jsx(s.li,{children:"For nested overlays, dismiss policy should resolve top-layer first so one Escape/outside click does not collapse the full stack."}),`
`,e.jsxs(s.li,{children:["For overlays built on ",e.jsx(s.code,{children:"DismissableLayer"}),", ignore Escape while IME composition is active so CJK text confirmation does not close parent surfaces unexpectedly."]}),`
`,e.jsxs(s.li,{children:["For overlays built on ",e.jsx(s.code,{children:"DismissableLayer"}),", keep ",e.jsx(s.code,{children:"Ctrl/Meta/Alt + Escape"})," on host/app shortcut behavior; modified Escape should not trigger dismiss hooks or close transitions."]}),`
`,e.jsxs(s.li,{children:["For overlays built on ",e.jsx(s.code,{children:"DismissableLayer"}),", treat repeated Escape keydown (",e.jsx(s.code,{children:"event.repeat"}),") as no-op so long-press does not close multiple overlay layers or duplicate close telemetry."]}),`
`,e.jsxs(s.li,{children:["For dialog/drawer in iframe or multi-root hosts, rely on owner-document portal mounting (",e.jsx(s.code,{children:"ownerDocument.body"}),") so overlay content and scroll-lock scope stay inside the invoking document."]}),`
`,e.jsxs(s.li,{children:["For popover/dropdown in iframe or multi-root hosts, validate Escape/outside-pointer dismissal against the overlay ",e.jsx(s.code,{children:"ownerDocument"}),"; cross-document events should not close the active surface."]}),`
`,e.jsxs(s.li,{children:["For dialog/drawer flows under app-level shortcuts, rely on built-in Escape preemption behavior so ",e.jsx(s.code,{children:"onEscapeKeyDown"})," hooks stay side-effect free when Escape is already prevented."]}),`
`,e.jsxs(s.li,{children:["Keep trigger ",e.jsx(s.code,{children:"aria-controls"})," conditional on open state for popover/menu patterns to avoid stale ID references."]}),`
`,e.jsxs(s.li,{children:["Use dialog ",e.jsx(s.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(s.code,{children:"close-button"})," / ",e.jsx(s.code,{children:"escape-key"})," / ",e.jsx(s.code,{children:"outside-pointer"}),") instead of inferring dismiss origin from external state transitions."]}),`
`,e.jsxs(s.li,{children:["Use drawer ",e.jsx(s.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(s.code,{children:"close-button"})," / ",e.jsx(s.code,{children:"escape-key"})," / ",e.jsx(s.code,{children:"outside-pointer"}),") instead of inferring dismiss origin from external state transitions."]}),`
`,e.jsxs(s.li,{children:["Keep dialog/drawer close callbacks ordered and single-purpose: dismiss paths should emit ",e.jsx(s.code,{children:"onCloseReason"})," before ",e.jsx(s.code,{children:"onOpenChange(false)"})," to avoid telemetry/state reducer race conditions."]}),`
`,e.jsxs(s.li,{children:["For dropdown typeahead, set ",e.jsx(s.code,{children:"textValue"})," when item labels are non-string or need locale/accent-friendly buffered matching aliases."]}),`
`,e.jsx(s.li,{children:"Ignore dropdown typeahead key matching during IME composition so CJK input confirmation does not shift active menu focus unexpectedly."}),`
`,e.jsxs(s.li,{children:["When app-level shortcuts preempt Escape with ",e.jsx(s.code,{children:"preventDefault()"}),", keep dropdown-level Escape hooks side-effect free and rely on built-in preemption skip behavior."]}),`
`,e.jsxs(s.li,{children:["When app-level shortcuts preempt Escape with ",e.jsx(s.code,{children:"preventDefault()"}),", keep popover-level Escape hooks side-effect free and rely on built-in preemption skip behavior."]}),`
`,e.jsxs(s.li,{children:["Use popover ",e.jsx(s.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(s.code,{children:"trigger-click"})," / ",e.jsx(s.code,{children:"escape-key"})," / ",e.jsx(s.code,{children:"outside-pointer"}),") instead of inferring dismiss origin from focus and pointer side effects."]}),`
`,e.jsxs(s.li,{children:["Use dropdown ",e.jsx(s.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(s.code,{children:"trigger-click"})," / ",e.jsx(s.code,{children:"item-select"})," / ",e.jsx(s.code,{children:"escape-key"})," / ",e.jsx(s.code,{children:"outside-pointer"})," / ",e.jsx(s.code,{children:"tab-key"}),") instead of inferring close origin from focus/state side effects."]}),`
`,e.jsxs(s.li,{children:["Keep popover/dropdown close callbacks ordered and single-purpose: close paths should emit ",e.jsx(s.code,{children:"onCloseReason"})," before ",e.jsx(s.code,{children:"onOpenChange(false)"}),", while dropdown ",e.jsx(s.code,{children:"item-select"})," should run ",e.jsx(s.code,{children:"onSelect"})," before close callbacks."]}),`
`,e.jsxs(s.li,{children:["Keep popover trigger keyboard-open behavior scoped to unmodified ",e.jsx(s.code,{children:"ArrowDown"}),"; ",e.jsx(s.code,{children:"Ctrl/Meta/Alt + ArrowDown"})," should remain available for host/browser shortcut handling."]}),`
`,e.jsxs(s.li,{children:["Keep dropdown ",e.jsx(s.code,{children:"Tab"})," behavior aligned with document order: close menu and continue focus to next control."]}),`
`,e.jsx(s.li,{children:"For controlled dropdowns, treat Escape/outside/trigger dismiss as close intent only; apply final visual close in parent rerender to avoid state race conditions."}),`
`,e.jsxs(s.li,{children:["For icon-only/non-text dropdown items, provide ",e.jsx(s.code,{children:"items[].ariaLabel"})," unless the rich label already exposes inline ",e.jsx(s.code,{children:"aria-label"}),"; development builds warn when both are missing."]}),`
`,e.jsxs(s.li,{children:["For icon-only/non-text dropdown items, provide ",e.jsx(s.code,{children:"items[].textValue"})," unless the rich label already exposes readable text or inline ",e.jsx(s.code,{children:"aria-label"}),"; buffered typeahead relies on one of these metadata paths."]}),`
`,e.jsxs(s.li,{children:["Keep dropdown menu-item keyboard activation explicit and cross-browser (",e.jsx(s.code,{children:"Enter"})," / ",e.jsx(s.code,{children:"Space"})," / legacy ",e.jsx(s.code,{children:"Spacebar"}),") so non-pointer flows can execute actions without click simulation."]}),`
`,e.jsxs(s.li,{children:["Keep dropdown navigation/activation/dismiss scoped to unmodified keys; ",e.jsx(s.code,{children:"Ctrl/Meta/Alt + Arrow/Home/End/PageUp/PageDown/Enter/Space/Escape"})," should stay on host/browser shortcut behavior."]}),`
`,e.jsxs(s.li,{children:["For long dropdown menus, rely on ",e.jsx(s.code,{children:"PageUp"})," / ",e.jsx(s.code,{children:"PageDown"})," jumps to move across actionable items in larger steps while still skipping disabled entries."]}),`
`,e.jsxs(s.li,{children:["Treat dropdown menu-item activation repeat (",e.jsx(s.code,{children:"event.repeat"}),") as no-op after first keydown to prevent duplicate command execution and telemetry jitter during long-press."]}),`
`,e.jsxs(s.li,{children:["Deduplicate synthesized keyboard-origin click (",e.jsx(s.code,{children:"detail=0"}),") after handled dropdown item activation keydown so one keyboard action maps to one item side effect and one close telemetry event."]}),`
`,e.jsxs(s.li,{children:["Expose dropdown menu-item ",e.jsx(s.code,{children:'aria-keyshortcuts="Enter Space"'})," only on actionable items; disabled items should omit shortcut hints to avoid false affordance."]}),`
`,e.jsxs(s.li,{children:["For icon-only popover/dropdown triggers, provide non-empty ",e.jsx(s.code,{children:"triggerAriaLabel"})," to preserve an explicit control name."]}),`
`,e.jsx(s.li,{children:"Keep field/button focus intent primary-only so non-primary pointer interactions do not clear keyboard-origin focus-visible rings before actual activation intent."}),`
`,e.jsxs(s.li,{children:["Keep dialog/drawer close buttons visually state-complete (",e.jsx(s.code,{children:"hover"}),"/",e.jsx(s.code,{children:"focus-visible"}),"/",e.jsx(s.code,{children:"active"}),") so overlay dismissal affordances match the rest of the component system."]}),`
`,e.jsx(s.li,{children:"Command palette and combobox-style overlays should keep text input as the primary focus anchor for navigation."}),`
`]}),`
`,e.jsx(n,{of:R}),`
`,e.jsx(n,{of:I}),`
`,e.jsx(n,{of:T}),`
`,e.jsx(n,{of:L}),`
`,e.jsx(n,{of:O}),`
`,e.jsx(n,{of:G}),`
`,e.jsx(n,{of:H}),`
`,e.jsx(n,{of:M}),`
`,e.jsx(n,{of:B}),`
`,e.jsx(n,{of:q}),`
`,e.jsx(n,{of:U}),`
`,e.jsx(n,{of:$}),`
`,e.jsx(n,{of:D}),`
`,e.jsx(n,{of:S}),`
`,e.jsx(n,{of:P}),`
`,e.jsx(n,{of:A}),`
`,e.jsx(n,{of:F}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(n,{of:E}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(n,{of:K}),`
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
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"commands[].key"})," unique and stable; development builds now warn on duplicate keys to avoid active-option and telemetry drift."]}),`
`,e.jsxs(s.li,{children:["Provide ",e.jsx(s.code,{children:"textValue"})," aliases for non-string command labels and accent-friendly matching terms."]}),`
`,e.jsxs(s.li,{children:["For icon/non-text command labels, provide ",e.jsx(s.code,{children:"commands[].ariaLabel"})," unless the rich label already exposes inline ",e.jsx(s.code,{children:"aria-label"}),"; development builds warn when both are missing."]}),`
`,e.jsxs(s.li,{children:["For non-text command labels, ensure ",e.jsx(s.code,{children:"textValue"})," or searchable ",e.jsx(s.code,{children:"keywords"})," are present; development builds warn when both are missing."]}),`
`,e.jsx(s.li,{children:"Provide empty-state guidance when no command matches the query."}),`
`,e.jsxs(s.li,{children:["Track user query updates with ",e.jsx(s.code,{children:"onQueryChange"})," for downstream telemetry."]}),`
`,e.jsxs(s.li,{children:["Treat ",e.jsx(s.code,{children:'onQueryChange("")'})," on palette close as the telemetry reset signal so external state mirrors the internal query lifecycle."]}),`
`,e.jsx(s.li,{children:"Keep live-region narration aligned with actionable commands (enabled matches), not just visible results."}),`
`,e.jsx(s.li,{children:"Keep disabled command entries non-executable and keep palette state unchanged on disabled clicks."}),`
`,e.jsxs(s.li,{children:["Keep command-palette ",e.jsx(s.code,{children:"aria-keyshortcuts"})," aligned with actionable state: when filtered results contain no enabled command, omit ",e.jsx(s.code,{children:"Enter"})," from shortcut hints."]}),`
`,e.jsxs(s.li,{children:["For batched command execution, set ",e.jsx(s.code,{children:"closeOnSelect={false}"})," so users can run multiple actions without reopening the palette."]}),`
`,e.jsxs(s.li,{children:["Treat repeated ",e.jsx(s.code,{children:"Enter"})," keydown (",e.jsx(s.code,{children:"event.repeat"}),") as no-op for command execution so long-press does not trigger duplicate actions or telemetry noise."]}),`
`,e.jsxs(s.li,{children:["Treat repeated ",e.jsx(s.code,{children:"Escape"})," keydown (",e.jsx(s.code,{children:"event.repeat"}),") as no-op for both query-clear and dismiss paths so long-press does not clear/close the palette unexpectedly."]}),`
`,e.jsxs(s.li,{children:["Keep option-level activation (",e.jsx(s.code,{children:"Enter"}),"/",e.jsx(s.code,{children:"Space"}),") scoped to unmodified, non-repeat keydown so focused listbox options cannot execute on ",e.jsx(s.code,{children:"Ctrl/Meta/Alt"})," shortcuts or long-press repeats."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"PageUp"})," / ",e.jsx(s.code,{children:"PageDown"})," for long command sets so keyboard users can jump actionable options in larger steps."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"Ctrl/Meta/Alt + Home/End/Page/Enter/Escape"})," on native input behavior; do not hijack modified shortcuts for command navigation or dismiss."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"Shift + Escape"})," available so command input can follow the standard first-escape-clear / second-escape-dismiss sequence."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"clearQueryOnEscape"})," enabled so first Escape clears query intent before full palette dismissal; disable only when product expects immediate close."]}),`
`,e.jsxs(s.li,{children:["After query updates or command-set refreshes, keep command-palette ",e.jsx(s.code,{children:"aria-activedescendant"})," valid by pointing only to a currently mounted, enabled option; clear it when no executable option remains."]}),`
`,e.jsxs(s.li,{children:["For blocking approvals, set ",e.jsx(s.code,{children:"closeOnEscape={false}"})," and ",e.jsx(s.code,{children:"closeOnOutsidePointer={false}"})," so command confirmation cannot be dismissed accidentally."]}),`
`,e.jsxs(s.li,{children:["For conditional approval guards, prefer ",e.jsx(s.code,{children:"onEscapeKeyDown/onPointerDownOutside"})," + ",e.jsx(s.code,{children:"event.preventDefault()"})," so dismiss policy can be unlocked at runtime."]}),`
`,e.jsxs(s.li,{children:["When app-level shortcuts preempt Escape with ",e.jsx(s.code,{children:"preventDefault()"}),", rely on built-in callback-skip behavior so command-level escape hooks stay side-effect free."]}),`
`,e.jsxs(s.li,{children:["For iframe/multi-document hosts, validate command-palette dismiss behavior against the palette ",e.jsx(s.code,{children:"ownerDocument"}),"; Escape/outside events from other documents should not close the active palette."]}),`
`,e.jsx(s.li,{children:"Ignore command list navigation/selection keys while IME composition is active so Enter confirms text composition instead of executing commands."}),`
`,e.jsx(s.li,{children:"During IME composition, treat Escape as text-confirm/cancel only; do not expect query reset or palette dismiss until composition ends."}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"onCloseReason"})," to emit deterministic dismissal telemetry (",e.jsx(s.code,{children:"close-button"})," / ",e.jsx(s.code,{children:"item-select"})," / ",e.jsx(s.code,{children:"escape-key"})," / ",e.jsx(s.code,{children:"outside-pointer"}),") instead of inferring close path from side effects."]}),`
`,e.jsxs(s.li,{children:["Keep callback side effects ordered and single-purpose: ",e.jsx(s.code,{children:"item-select"})," path should treat ",e.jsx(s.code,{children:"onSelect"})," as action commit, then ",e.jsx(s.code,{children:"onCloseReason"}),", then ",e.jsx(s.code,{children:"onOpenChange(false)"}),"; close-button path should use ",e.jsx(s.code,{children:"onCloseReason"})," before ",e.jsx(s.code,{children:"onOpenChange(false)"}),"."]}),`
`,e.jsx(s.li,{children:"Guard Ctrl/Cmd + Enter submission against active IME composition to avoid accidental sends for CJK input."}),`
`,e.jsx(s.li,{children:"Show reasoning disclosure with explicit user intent (default collapsed)."}),`
`,e.jsxs(s.li,{children:["Use streaming containers that surface busy completion (",e.jsx(s.code,{children:"aria-busy"}),") for assistive tech parity."]}),`
`,e.jsxs(s.li,{children:["Keep streaming-code narration ",e.jsx(s.code,{children:'live="off"'})," for high-frequency token output; enable ",e.jsx(s.code,{children:'live="polite"'})," only when progressive code updates must be announced."]}),`
`,e.jsxs(s.li,{children:["Provide explicit ",e.jsx(s.code,{children:"label"})," for streaming code regions so screen-reader users can distinguish concurrent AI outputs."]}),`
`]}),`
`,e.jsx(n,{of:le}),`
`,e.jsx(n,{of:de}),`
`,e.jsx(n,{of:ce}),`
`,e.jsx(n,{of:he}),`
`,e.jsx(n,{of:V}),`
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
`,e.jsx(n,{of:oe}),`
`,e.jsx(n,{of:ie}),`
`,e.jsx(n,{of:re}),`
`,e.jsx(n,{of:te}),`
`,e.jsx(n,{of:ae}),`
`,e.jsx(s.h2,{id:"notification-behavior",children:"Notification Behavior"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Actionable toasts are persistent by default (",e.jsx(s.code,{children:"duration"})," omitted -> ",e.jsx(s.code,{children:"0"}),"); set explicit ",e.jsx(s.code,{children:"duration"})," only when product requires timed dismissal."]}),`
`,e.jsxs(s.li,{children:["If a toast includes ",e.jsx(s.code,{children:"action"}),", treat it as an interactive surface (",e.jsx(s.code,{children:"dialog"})," / ",e.jsx(s.code,{children:"alertdialog"}),") and keep CTA labels explicit."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"closeOnEscape"})," aligned with task criticality; disable Escape only for must-read states."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"onEscapeKeyDown"})," when Escape policy must be toggled dynamically at runtime (e.g. approval checkpoints)."]}),`
`,e.jsxs(s.li,{children:["Ensure upper-layer shortcuts that ",e.jsx(s.code,{children:"preventDefault()"})," on Escape can preempt toast dismiss when required."]}),`
`,e.jsx(s.li,{children:"When Escape is preempted upstream, avoid side effects in toast-level analytics/guards by relying on the built-in hook-skip behavior."}),`
`,e.jsx(s.li,{children:"Ignore Escape dismissal while IME composition is active so CJK text confirmation inside toast actions does not close the notification unexpectedly."}),`
`,e.jsx(s.li,{children:"For stacked notifications, rely on Escape handling that dismisses one toast per key press, prioritizing the latest or most recently interacted toast."}),`
`,e.jsxs(s.li,{children:["Treat repeated Escape keydown (",e.jsx(s.code,{children:"event.repeat"}),") as no-op for toast dismissal so long-press does not close multiple stacked notices or duplicate telemetry."]}),`
`,e.jsxs(s.li,{children:["Keep toast Escape dismissal scoped to unmodified keys; ",e.jsx(s.code,{children:"Ctrl/Meta/Alt + Escape"})," should stay on host/app shortcut behavior."]}),`
`,e.jsxs(s.li,{children:["Do not block ",e.jsx(s.code,{children:"Shift + Escape"}),"; keep it aligned with standard Escape dismiss semantics and ",e.jsx(s.code,{children:"escape-key"})," telemetry."]}),`
`,e.jsxs(s.li,{children:["When ",e.jsx(s.code,{children:"closeOnEscape"})," toggles at runtime, verify stacked ",e.jsx(s.code,{children:"aria-keyshortcuts"})," hints move to the current top escapable toast with no stale shortcut exposure."]}),`
`,e.jsx(s.li,{children:"Keep stacked toasts in the same corner so built-in visual offset preserves message legibility for older notifications."}),`
`,e.jsxs(s.li,{children:["Verify timer pause behavior for both pointer hover and keyboard focus when ",e.jsx(s.code,{children:"pauseOnHover"})," is enabled."]}),`
`,e.jsx(s.li,{children:"Verify timed toasts pause in hidden browser tabs and resume from remaining time after visibility returns."}),`
`,e.jsxs(s.li,{children:["For iframe/multi-document hosts, keep toast timer/visibility/Escape behavior bound to each toast ",e.jsx(s.code,{children:"ownerDocument"}),"/",e.jsx(s.code,{children:"defaultView"})," so timing and dismissal state cannot leak across document roots."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"onCloseReason"})," for deterministic telemetry (",e.jsx(s.code,{children:"close-button"})," / ",e.jsx(s.code,{children:"escape-key"})," / ",e.jsx(s.code,{children:"timeout"}),") instead of inferring dismiss origin from side effects."]}),`
`,e.jsxs(s.li,{children:["When combining ",e.jsx(s.code,{children:"onCloseReason"}),", ",e.jsx(s.code,{children:"onClose"}),", and ",e.jsx(s.code,{children:"onOpenChange"}),", consume them as ordered lifecycle hooks (",e.jsx(s.code,{children:"onCloseReason"})," -> ",e.jsx(s.code,{children:"onClose"})," -> ",e.jsx(s.code,{children:"onOpenChange(false)"}),"), not parallel duplicate side effects."]}),`
`,e.jsx(s.li,{children:"Keep toast close-button focus intent primary-only so non-primary pointer interactions do not clear keyboard-origin focus-visible feedback."}),`
`,e.jsxs(s.li,{children:["Keep toast close-button keyboard pressed-state feedback scoped to unmodified activation keys (",e.jsx(s.code,{children:"Enter"}),"/",e.jsx(s.code,{children:"Space"}),"/",e.jsx(s.code,{children:"Spacebar"}),"); ",e.jsx(s.code,{children:"Ctrl/Meta/Alt"})," chords should not trigger pressed visuals."]}),`
`,e.jsx(s.li,{children:"Keep toast close-button keyboard-intent tracking document-scoped so keyboard re-entry after pointer interactions restores focus-visible fallback consistently."}),`
`,e.jsxs(s.li,{children:["For toast titles without readable text, provide ",e.jsx(s.code,{children:"ariaLabel"}),"; rich title nodes that expose inline ",e.jsx(s.code,{children:"aria-label"})," are auto-detected, and development builds warn only when both are missing."]}),`
`,e.jsxs(s.li,{children:["For high-frequency passive updates, set ",e.jsx(s.code,{children:'live="off"'})," to reduce assistive-tech interruption while keeping visual toast context."]}),`
`]}),`
`,e.jsx(n,{of:pe}),`
`,e.jsx(n,{of:xe}),`
`,e.jsx(n,{of:ue}),`
`,e.jsx(n,{of:me}),`
`,e.jsx(n,{of:je}),`
`,e.jsx(n,{of:fe}),`
`,e.jsx(n,{of:be}),`
`,e.jsx(n,{of:ye}),`
`,e.jsx(n,{of:ge}),`
`,e.jsx(n,{of:ve}),`
`,e.jsx(n,{of:we}),`
`,e.jsx(n,{of:ke}),`
`,e.jsx(n,{of:Ee}),`
`,e.jsx(n,{of:Ce}),`
`,e.jsx(s.h2,{id:"data-presentation-patterns",children:"Data Presentation Patterns"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Use typed columns and stable row keys in data tables; fallback source-index keys exist for safety but explicit ",e.jsx(s.code,{children:"rowKey"})," is preferred."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"columns[].key"})," values unique; development builds now warn on duplicate column keys to avoid unstable header references and sort-button wiring."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"rowKey"})," outputs unique per source row; development builds now warn on duplicate keys to catch unstable identity wiring early."]}),`
`,e.jsxs(s.li,{children:["If ",e.jsx(s.code,{children:"rowKey"})," uses ",e.jsx(s.code,{children:"rowIndex"}),", treat it as source-data index; avoid deriving keys from sorted visual position."]}),`
`,e.jsxs(s.li,{children:["For custom cell renderers, use ",e.jsx(s.code,{children:"render(row, rowIndex, sourceIndex)"})," and pick the index intentionally (",e.jsx(s.code,{children:"rowIndex"})," for ranking UI, ",e.jsx(s.code,{children:"sourceIndex"})," for source-linked IDs/telemetry)."]}),`
`,e.jsxs(s.li,{children:["Mark the primary identity column with ",e.jsx(s.code,{children:"rowHeader"})," so screen readers can announce row context consistently."]}),`
`,e.jsxs(s.li,{children:["Ensure each table has an accessible name through ",e.jsx(s.code,{children:"caption"}),", ",e.jsx(s.code,{children:"ariaLabel"}),", or ",e.jsx(s.code,{children:"ariaLabelledBy"}),"; fallback ",e.jsx(s.code,{children:"Data table"})," naming exists but should be treated as a safety net."]}),`
`,e.jsxs(s.li,{children:["Expose ",e.jsx(s.code,{children:"aria-sort"})," only on the actively sorted header so assistive narration reflects current sort state without repeating neutral columns."]}),`
`,e.jsxs(s.li,{children:["Keep non-sortable headers free of ",e.jsx(s.code,{children:"aria-sort"})," so assistive tech does not announce inert columns as interactive."]}),`
`,e.jsxs(s.li,{children:["Validate sortable headers with both pointer and keyboard (",e.jsx(s.code,{children:"Enter"}),"/",e.jsx(s.code,{children:"Space"}),", including legacy ",e.jsx(s.code,{children:"Spacebar"}),") so non-pointer workflows stay first-class."]}),`
`,e.jsxs(s.li,{children:["Support sortable-header focus traversal with ",e.jsx(s.code,{children:"Home"})," / ",e.jsx(s.code,{children:"End"})," / ",e.jsx(s.code,{children:"PageUp"})," / ",e.jsx(s.code,{children:"PageDown"})," so keyboard users can move between columns without forcing sort changes."]}),`
`,e.jsxs(s.li,{children:["Keep modified shortcuts (",e.jsx(s.code,{children:"Ctrl/Meta/Alt + Home/End/PageUp/PageDown/Enter/Space"}),") on host/browser behavior; sortable headers should only react to unmodified focus/activation keys."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"Shift + Enter/Space"})," available on sortable headers; only ",e.jsx(s.code,{children:"Ctrl/Meta/Alt"})," combinations should be filtered from sort activation."]}),`
`,e.jsxs(s.li,{children:["Treat long-press keyboard repeat (",e.jsx(s.code,{children:"event.repeat"}),") for sortable-header activation keys (",e.jsx(s.code,{children:"Enter"})," / ",e.jsx(s.code,{children:"Space"})," / ",e.jsx(s.code,{children:"Spacebar"}),") as no-op after the first toggle to prevent sort churn and telemetry jitter."]}),`
`,e.jsxs(s.li,{children:["Guard against synthesized keyboard-origin click (",e.jsx(s.code,{children:"detail=0"}),") after handled sort keydown so one keyboard action maps to one telemetry event."]}),`
`,e.jsxs(s.li,{children:["Keep sortable-header focus-visible feedback and ",e.jsx(s.code,{children:'aria-keyshortcuts="Enter Space"'})," in place so keyboard affordance stays explicit in QA and audits."]}),`
`,e.jsxs(s.li,{children:["Keep sortable-header pressed-state feedback active during keyboard ",e.jsx(s.code,{children:"Enter/Space"})," key hold (and clear on keyup) so non-pointer activation has equivalent active affordance."]}),`
`,e.jsx(s.li,{children:"Keep tab and sortable-header focus intent primary-only so non-primary pointer interactions do not clear keyboard-origin focus-visible rings."}),`
`,e.jsxs(s.li,{children:["For iframe/multi-document hosts, keep tab/sort focus-intent tracking bound to each component ",e.jsx(s.code,{children:"ownerDocument"})," so keyboard focus-visible semantics remain stable outside the top-level document."]}),`
`,e.jsxs(s.li,{children:["When sortable headers have no readable text (for example icon-only markup), provide ",e.jsx(s.code,{children:"columns[].sortLabel"})," so aria labels and live narration stay human-readable; rich headers with visible text or inline ",e.jsx(s.code,{children:"aria-label"})," are auto-extracted."]}),`
`,e.jsxs(s.li,{children:["Localize sortable header narration with ",e.jsx(s.code,{children:"getSortAriaLabel"})," instead of hardcoding translated text into column titles."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"getSortStatusText"})," to localize active-sort live narration so keyboard and pointer sorting changes remain equally discoverable to assistive tech users."]}),`
`,e.jsxs(s.li,{children:["During async refreshes, set ",e.jsx(s.code,{children:"loading"})," so table emits ",e.jsx(s.code,{children:"aria-busy"})," and temporarily suppresses stale row actions/sorting."]}),`
`,e.jsxs(s.li,{children:["During ",e.jsx(s.code,{children:"loading"}),", clear ",e.jsx(s.code,{children:"aria-sort"})," from headers so assistive narration does not announce stale sorted state while data is temporarily non-interactive."]}),`
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
`,e.jsxs(s.li,{children:["For icon/custom tab labels, provide ",e.jsx(s.code,{children:"items[].ariaLabel"})," unless the rich label already exposes readable text or inline ",e.jsx(s.code,{children:"aria-label"}),"; development builds warn when non-text labels omit both."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:'activationMode="manual"'})," when arrow-key navigation should not immediately trigger expensive panel renders."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"loop={false}"})," when boundary tabs should trap Arrow navigation (for linear workflows where wrap-around can feel like a jump)."]}),`
`,e.jsxs(s.li,{children:["Keep modified shortcuts (",e.jsx(s.code,{children:"Ctrl/Meta/Alt + Arrow/Home/End/PageUp/PageDown/Enter/Space"}),") on host/browser behavior; tabs should only react to unmodified navigation/activation keys."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"Shift + Enter/Space"})," available for manual tab activation; only ",e.jsx(s.code,{children:"Ctrl/Meta/Alt"})," combinations should be filtered from activation paths."]}),`
`,e.jsxs(s.li,{children:["Keep manual tabs compatible with legacy ",e.jsx(s.code,{children:"Spacebar"})," key values so activation remains consistent across browser engines."]}),`
`,e.jsxs(s.li,{children:["Treat manual-tab activation key repeat (",e.jsx(s.code,{children:"Enter"}),"/",e.jsx(s.code,{children:"Space"}),", ",e.jsx(s.code,{children:"event.repeat"}),") as no-op after first activation to prevent duplicate change telemetry."]}),`
`,e.jsxs(s.li,{children:["Keep manual-tab pressed-state feedback active during ",e.jsx(s.code,{children:"Enter"}),"/",e.jsx(s.code,{children:"Space"})," hold (and clear on keyup) so keyboard activation has the same tactile affordance as pointer activation."]}),`
`,e.jsxs(s.li,{children:["In controlled mode, ensure ",e.jsx(s.code,{children:"value"})," always maps to an enabled tab key; development builds now warn when ",e.jsx(s.code,{children:"value"})," is missing/disabled and fallback selection is applied."]}),`
`,e.jsxs(s.li,{children:["Keep tab panels mounted and toggle ",e.jsx(s.code,{children:"hidden"})," so tab ",e.jsx(s.code,{children:"aria-controls"})," always points to a real panel."]}),`
`,e.jsxs(s.li,{children:["Avoid duplicate telemetry from tabs by emitting ",e.jsx(s.code,{children:"onValueChange"})," only on actual key transitions."]}),`
`]}),`
`,e.jsx(n,{of:Ke}),`
`,e.jsx(n,{of:De}),`
`,e.jsx(n,{of:Se}),`
`,e.jsx(n,{of:Pe}),`
`,e.jsx(n,{of:Ae}),`
`,e.jsx(n,{of:Fe}),`
`,e.jsx(n,{of:Re}),`
`,e.jsx(n,{of:Ie}),`
`,e.jsx(n,{of:Te}),`
`,e.jsx(n,{of:Le}),`
`,e.jsx(n,{of:Oe}),`
`,e.jsx(n,{of:Ge}),`
`,e.jsx(n,{of:He}),`
`,e.jsx(n,{of:Me}),`
`,e.jsx(n,{of:Be}),`
`,e.jsx(n,{of:qe}),`
`,e.jsx(n,{of:Ue}),`
`,e.jsx(n,{of:$e}),`
`,e.jsx(n,{of:ze}),`
`,e.jsx(n,{of:Ve}),`
`,e.jsx(n,{of:Ne}),`
`,e.jsx(n,{of:We}),`
`,e.jsx(n,{of:Qe}),`
`,e.jsx(n,{of:Je})]})}function Ls(o={}){const{wrapper:s}={...r(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(i,{...o})}):i(o)}export{Ls as default};
