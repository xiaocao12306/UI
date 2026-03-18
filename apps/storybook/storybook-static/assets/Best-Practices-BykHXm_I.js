import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CHKtz2QT.js";import{M as t,T as a,S as l,D as c,C as n}from"./index-CeFSKR1u.js";import{VariantMatrix as d}from"./Button.stories-sZwF0IUd.js";import{WithInputControl as h}from"./FormField.stories-Dszfn2vR.js";import{Interactive as p,EscapeIgnoresImeComposition as x,EscapePreemptedByGlobalHandler as m}from"./Dialog.stories-B9k3MJ-d.js";import{EscapePreemptedByGlobalHandler as j}from"./Drawer.stories-BwPTrffU.js";import{EscapePreemptedByGlobalHandler as u}from"./Popover.stories-CqrzwlyW.js";import{OutsideDismissFocusTransfer as f,EscapeDismissFocusReturn as b,EscapePreemptedByGlobalHandler as y,TabDismissToNextControl as g,TypeaheadNavigation as v,TypeaheadIgnoresImeComposition as w}from"./Dropdown.stories-QkrlJs6i.js";import{DescribedByLifecycle as k}from"./Tooltip.stories-C_4GNLrX.js";import{AiInteractionFlow as E,QueryTelemetry as D,DisabledCommandGuard as I,TextValueAndAccentSearch as P,PersistentSelection as K,RefinedSearchKeepsActiveCommand as C,ImeCompositionGuard as A,EscapePreemptedByGlobalHandler as F,GuardedDismissEvents as S,EscapeClearsQueryFirst as L}from"./CommandPalette.stories-CnXanYVO.js";import{WithAiRequestState as T}from"./PromptInput.stories-5LNZKlDc.js";import{Conversation as O}from"./MessageBubble.stories-wEP5cOKd.js";import{Default as H}from"./ReasoningPanel.stories-ll9aUG-c.js";import{Default as B}from"./StreamingCodeBlock.stories-Jd4VPz8N.js";import{ActionRequired as G,EscapeStackOrder as M,FocusedToastEscapesFirst as R,EscapePreemptedByGlobalHandler as z,EscapePreemptedSkipsToastHook as q,EscapeGuardedByToastHandler as U,EscapeIgnoresImeComposition as V,LiveRegionOff as W}from"./Toast.stories-B6LBOBWS.js";import{KeyboardNavigationGuide as $,RtlKeyboardNavigation as N,LabelledByHeading as Q,ManualActivation as J,ManualVerticalActivation as X}from"./Tabs.stories-7f3nDcte.js";import{ReleaseChecklist as _,SortTelemetry as Y,LocalizedSortLabels as Z,RowHeaderSemantics as ee}from"./Table.stories-3XCYVyP_.js";import{KeyboardShortcuts as se,RtlKeyboardShortcuts as ne}from"./Pagination.stories-Dmiw_gmi.js";import"./index-BWu4c2F4.js";import"./iframe-CzkTiwLc.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";import"./Button-BCHo91JE.js";import"./Tag-Dmp9Dfgr.js";import"./Badge-Dkm8CRgf.js";import"./index-DgAF9SIF.js";import"./Input-CK-2zJ6Z.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./FormField-tjrV3Sij.js";import"./Textarea-C2HCxZDO.js";import"./Dialog-D3FAqkbz.js";import"./bodyScrollLock-DtRy56KP.js";import"./DismissableLayer-DGNgq5OX.js";import"./Dropdown-CG_1bOes.js";import"./Popover-M8N8Nc2N.js";function o(i){const s={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Best Practices"}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{children:"Design + Engineering Checklist"}),`
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
`,e.jsxs(s.li,{children:["For combobox/listbox patterns, map ",e.jsx(s.code,{children:"aria-selected"})," to the committed value, not temporary active focus."]}),`
`,e.jsxs(s.li,{children:["For ",e.jsx(s.code,{children:"aria-activedescendant"})," combobox flows, keep listbox options out of tab order and preserve input focus during pointer selection."]}),`
`,e.jsxs(s.li,{children:["Keep combobox ",e.jsx(s.code,{children:"aria-controls"})," conditional on popup visibility to avoid dangling listbox references."]}),`
`,e.jsxs(s.li,{children:["Keep command-palette combobox ",e.jsx(s.code,{children:"aria-controls"})," conditional on filtered-result listbox visibility so empty states do not expose stale or missing listbox IDs."]}),`
`,e.jsxs(s.li,{children:["Localize command-palette result list semantics with ",e.jsx(s.code,{children:"resultsAriaLabel"})," in non-English products, instead of relying on the default English listbox label."]}),`
`,e.jsxs(s.li,{children:["Localize command-palette heading/search semantics with ",e.jsx(s.code,{children:"title"})," / ",e.jsx(s.code,{children:"description"})," / ",e.jsx(s.code,{children:"searchAriaLabel"})," so dialog and combobox narration matches product language."]}),`
`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(n,{of:p}),`
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
`,e.jsxs(s.li,{children:["For dropdown typeahead, set ",e.jsx(s.code,{children:"textValue"})," when item labels are non-string or need locale/accent-friendly buffered matching aliases."]}),`
`,e.jsx(s.li,{children:"Ignore dropdown typeahead key matching during IME composition so CJK input confirmation does not shift active menu focus unexpectedly."}),`
`,e.jsxs(s.li,{children:["When app-level shortcuts preempt Escape with ",e.jsx(s.code,{children:"preventDefault()"}),", keep dropdown-level Escape hooks side-effect free and rely on built-in preemption skip behavior."]}),`
`,e.jsxs(s.li,{children:["When app-level shortcuts preempt Escape with ",e.jsx(s.code,{children:"preventDefault()"}),", keep popover-level Escape hooks side-effect free and rely on built-in preemption skip behavior."]}),`
`,e.jsxs(s.li,{children:["Keep dropdown ",e.jsx(s.code,{children:"Tab"})," behavior aligned with document order: close menu and continue focus to next control."]}),`
`,e.jsxs(s.li,{children:["For icon-only popover/dropdown triggers, always provide ",e.jsx(s.code,{children:"triggerAriaLabel"})," to preserve an explicit control name."]}),`
`,e.jsx(s.li,{children:"Command palette and combobox-style overlays should keep text input as the primary focus anchor for navigation."}),`
`]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:j}),`
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
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"clearQueryOnEscape"})," enabled so first Escape clears query intent before full palette dismissal; disable only when product expects immediate close."]}),`
`,e.jsxs(s.li,{children:["For blocking approvals, set ",e.jsx(s.code,{children:"closeOnEscape={false}"})," and ",e.jsx(s.code,{children:"closeOnOutsidePointer={false}"})," so command confirmation cannot be dismissed accidentally."]}),`
`,e.jsxs(s.li,{children:["For conditional approval guards, prefer ",e.jsx(s.code,{children:"onEscapeKeyDown/onPointerDownOutside"})," + ",e.jsx(s.code,{children:"event.preventDefault()"})," so dismiss policy can be unlocked at runtime."]}),`
`,e.jsxs(s.li,{children:["When app-level shortcuts preempt Escape with ",e.jsx(s.code,{children:"preventDefault()"}),", rely on built-in callback-skip behavior so command-level escape hooks stay side-effect free."]}),`
`,e.jsx(s.li,{children:"Ignore command list navigation/selection keys while IME composition is active so Enter confirms text composition instead of executing commands."}),`
`,e.jsx(s.li,{children:"Guard Ctrl/Cmd + Enter submission against active IME composition to avoid accidental sends for CJK input."}),`
`,e.jsx(s.li,{children:"Show reasoning disclosure with explicit user intent (default collapsed)."}),`
`,e.jsxs(s.li,{children:["Use streaming containers that surface busy completion (",e.jsx(s.code,{children:"aria-busy"}),") for assistive tech parity."]}),`
`]}),`
`,e.jsx(n,{of:T}),`
`,e.jsx(n,{of:O}),`
`,e.jsx(n,{of:H}),`
`,e.jsx(n,{of:B}),`
`,e.jsx(n,{of:E}),`
`,e.jsx(n,{of:D}),`
`,e.jsx(n,{of:I}),`
`,e.jsx(n,{of:P}),`
`,e.jsx(n,{of:K}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(n,{of:A}),`
`,e.jsx(n,{of:F}),`
`,e.jsx(n,{of:S}),`
`,e.jsx(n,{of:L}),`
`,e.jsx(s.h2,{id:"notification-behavior",children:"Notification Behavior"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"duration={0}"})," for blocking notifications that require explicit user action."]}),`
`,e.jsxs(s.li,{children:["Keep ",e.jsx(s.code,{children:"closeOnEscape"})," aligned with task criticality; disable Escape only for must-read states."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"onEscapeKeyDown"})," when Escape policy must be toggled dynamically at runtime (e.g. approval checkpoints)."]}),`
`,e.jsxs(s.li,{children:["Ensure upper-layer shortcuts that ",e.jsx(s.code,{children:"preventDefault()"})," on Escape can preempt toast dismiss when required."]}),`
`,e.jsx(s.li,{children:"When Escape is preempted upstream, avoid side effects in toast-level analytics/guards by relying on the built-in hook-skip behavior."}),`
`,e.jsx(s.li,{children:"Ignore Escape dismissal while IME composition is active so CJK text confirmation inside toast actions does not close the notification unexpectedly."}),`
`,e.jsx(s.li,{children:"For stacked notifications, rely on Escape handling that dismisses one toast per key press, prioritizing the latest or most recently interacted toast."}),`
`,e.jsxs(s.li,{children:["Verify timer pause behavior for both pointer hover and keyboard focus when ",e.jsx(s.code,{children:"pauseOnHover"})," is enabled."]}),`
`,e.jsxs(s.li,{children:["Provide ",e.jsx(s.code,{children:"ariaLabel"})," when toast title is icon-only or otherwise not plain text."]}),`
`,e.jsxs(s.li,{children:["For high-frequency passive updates, set ",e.jsx(s.code,{children:'live="off"'})," to reduce assistive-tech interruption while keeping visual toast context."]}),`
`]}),`
`,e.jsx(n,{of:G}),`
`,e.jsx(n,{of:M}),`
`,e.jsx(n,{of:R}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(n,{of:q}),`
`,e.jsx(n,{of:U}),`
`,e.jsx(n,{of:V}),`
`,e.jsx(n,{of:W}),`
`,e.jsx(s.h2,{id:"data-presentation-patterns",children:"Data Presentation Patterns"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Use typed columns and stable row keys in data tables; fallback source-index keys exist for safety but explicit ",e.jsx(s.code,{children:"rowKey"})," is preferred."]}),`
`,e.jsxs(s.li,{children:["If ",e.jsx(s.code,{children:"rowKey"})," uses ",e.jsx(s.code,{children:"rowIndex"}),", treat it as source-data index; avoid deriving keys from sorted visual position."]}),`
`,e.jsxs(s.li,{children:["For custom cell renderers, use ",e.jsx(s.code,{children:"render(row, rowIndex, sourceIndex)"})," and pick the index intentionally (",e.jsx(s.code,{children:"rowIndex"})," for ranking UI, ",e.jsx(s.code,{children:"sourceIndex"})," for source-linked IDs/telemetry)."]}),`
`,e.jsxs(s.li,{children:["Mark the primary identity column with ",e.jsx(s.code,{children:"rowHeader"})," so screen readers can announce row context consistently."]}),`
`,e.jsxs(s.li,{children:["Ensure each table has an accessible name through ",e.jsx(s.code,{children:"caption"})," or ",e.jsx(s.code,{children:"ariaLabel"}),"; fallback ",e.jsx(s.code,{children:"Data table"})," naming exists but should be treated as a safety net."]}),`
`,e.jsxs(s.li,{children:["Expose ",e.jsx(s.code,{children:"aria-sort"})," only on the actively sorted header so assistive narration reflects current sort state without repeating neutral columns."]}),`
`,e.jsxs(s.li,{children:["Keep non-sortable headers free of ",e.jsx(s.code,{children:"aria-sort"})," so assistive tech does not announce inert columns as interactive."]}),`
`,e.jsxs(s.li,{children:["Validate sortable headers with both pointer and keyboard (",e.jsx(s.code,{children:"Enter"}),"/",e.jsx(s.code,{children:"Space"}),", including legacy ",e.jsx(s.code,{children:"Spacebar"}),") so non-pointer workflows stay first-class."]}),`
`,e.jsxs(s.li,{children:["Localize sortable header narration with ",e.jsx(s.code,{children:"getSortAriaLabel"})," instead of hardcoding translated text into column titles."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:"getSortStatusText"})," to localize active-sort live narration so keyboard and pointer sorting changes remain equally discoverable to assistive tech users."]}),`
`,e.jsxs(s.li,{children:["During async refreshes, set ",e.jsx(s.code,{children:"loading"})," so table emits ",e.jsx(s.code,{children:"aria-busy"})," and temporarily suppresses stale row actions/sorting."]}),`
`,e.jsxs(s.li,{children:["For empty datasets, use meaningful ",e.jsx(s.code,{children:"emptyContent"}),"; table announces it through polite live status narration."]}),`
`,e.jsxs(s.li,{children:["For pagination i18n, generate ",e.jsx(s.code,{children:"getItemAriaLabel"})," from the provided ",e.jsx(s.code,{children:"page"})," argument; boundary previous/next labels are already clamped to valid page ranges."]}),`
`,e.jsx(s.li,{children:"In RTL layouts, verify Pagination ArrowLeft/ArrowRight keyboard shortcuts are mirrored so page movement follows visual direction."}),`
`,e.jsx(s.li,{children:"Surface status semantics with tokens instead of custom ad-hoc colors."}),`
`,e.jsx(s.li,{children:"Keep row actions predictable and keyboard reachable."}),`
`,e.jsxs(s.li,{children:["Ensure tabs support orientation-aware arrows (",e.jsx(s.code,{children:"Left/Right"})," or ",e.jsx(s.code,{children:"Up/Down"}),") plus ",e.jsx(s.code,{children:"Home/End"}),", and skip disabled entries."]}),`
`,e.jsxs(s.li,{children:["In RTL layouts, verify horizontal ",e.jsx(s.code,{children:"ArrowLeft"}),"/",e.jsx(s.code,{children:"ArrowRight"})," intent is mirrored so tab navigation matches visual reading flow."]}),`
`,e.jsxs(s.li,{children:["Prefer ",e.jsx(s.code,{children:"ariaLabelledBy"})," with a visible heading when tabs already have on-screen context labels; fall back to ",e.jsx(s.code,{children:"ariaLabel"})," for standalone tab groups."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.code,{children:'activationMode="manual"'})," when arrow-key navigation should not immediately trigger expensive panel renders."]}),`
`,e.jsxs(s.li,{children:["Keep manual tabs compatible with legacy ",e.jsx(s.code,{children:"Spacebar"})," key values so activation remains consistent across browser engines."]}),`
`,e.jsxs(s.li,{children:["Keep tab panels mounted and toggle ",e.jsx(s.code,{children:"hidden"})," so tab ",e.jsx(s.code,{children:"aria-controls"})," always points to a real panel."]}),`
`,e.jsxs(s.li,{children:["Avoid duplicate telemetry from tabs by emitting ",e.jsx(s.code,{children:"onValueChange"})," only on actual key transitions."]}),`
`]}),`
`,e.jsx(n,{of:$}),`
`,e.jsx(n,{of:N}),`
`,e.jsx(n,{of:Q}),`
`,e.jsx(n,{of:J}),`
`,e.jsx(n,{of:X}),`
`,e.jsx(n,{of:_}),`
`,e.jsx(n,{of:Y}),`
`,e.jsx(n,{of:Z}),`
`,e.jsx(n,{of:ee}),`
`,e.jsx(n,{of:se}),`
`,e.jsx(n,{of:ne})]})}function ze(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(o,{...i})}):o(i)}export{ze as default};
