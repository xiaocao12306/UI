import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CHKtz2QT.js";import{M as t,T as l,S as a,D as c,C as s}from"./index-DczvbIo2.js";import{VariantMatrix as d}from"./Button.stories-FePXSgqm.js";import{WithInputControl as h}from"./FormField.stories-Dszfn2vR.js";import{Interactive as x}from"./Dialog.stories-DbehCURv.js";import{OutsideDismissFocusTransfer as p,EscapeDismissFocusReturn as j,TabDismissToNextControl as u}from"./Dropdown.stories-NFAlTQFX.js";import{AiInteractionFlow as m,QueryTelemetry as f,DisabledCommandGuard as b,TextValueAndAccentSearch as y,PersistentSelection as g,RefinedSearchKeepsActiveCommand as v,GuardedDismissEvents as w,EscapeClearsQueryFirst as k}from"./CommandPalette.stories-Dx33b8VX.js";import{WithAiRequestState as D}from"./PromptInput.stories-BYxZ75u9.js";import{Conversation as E}from"./MessageBubble.stories-wEP5cOKd.js";import{Default as F}from"./ReasoningPanel.stories-ll9aUG-c.js";import{Default as K}from"./StreamingCodeBlock.stories-Jd4VPz8N.js";import{ActionRequired as C,EscapeStackOrder as P,FocusedToastEscapesFirst as A,EscapePreemptedByGlobalHandler as O,EscapeGuardedByToastHandler as I,LiveRegionOff as S}from"./Toast.stories-7iZrzgcq.js";import{KeyboardNavigationGuide as T,LabelledByHeading as L,ManualActivation as M,ManualVerticalActivation as R}from"./Tabs.stories-Ddb_vFWq.js";import{ReleaseChecklist as q,SortTelemetry as z,LocalizedSortLabels as V,RowHeaderSemantics as U}from"./Table.stories-DYfGHC85.js";import"./index-BWu4c2F4.js";import"./iframe-CAZ0hnWI.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";import"./Button-DKyBbf41.js";import"./Tag-Dmp9Dfgr.js";import"./Badge-Dkm8CRgf.js";import"./index-DgAF9SIF.js";import"./Input-CK-2zJ6Z.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./FormField-tjrV3Sij.js";import"./Textarea-C2HCxZDO.js";import"./Dialog-lfL8UqXn.js";import"./FocusScope-Db3t2k9z.js";import"./DismissableLayer-B4f576w9.js";import"./Dropdown-CgnMekiV.js";import"./Popover-N1GXP9dy.js";function o(i){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Best Practices"}),`
`,e.jsx(l,{}),`
`,e.jsx(a,{children:"Design + Engineering Checklist"}),`
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
`,e.jsxs(n.li,{children:["Prefer ",e.jsx(n.code,{children:"FormField"})," wrappers for helper/error copy so ",e.jsx(n.code,{children:"aria-describedby"})," and ",e.jsx(n.code,{children:"aria-errormessage"})," stay in sync."]}),`
`,e.jsxs(n.li,{children:["Preserve nuanced ",e.jsx(n.code,{children:"aria-invalid"})," values (",e.jsx(n.code,{children:"grammar"}),"/",e.jsx(n.code,{children:"spelling"}),") when integrating validation services; avoid normalizing them to generic ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:["Avoid ",e.jsx(n.code,{children:"autoFocus"}),"; use intentional focus management when opening overlays."]}),`
`,e.jsxs(n.li,{children:["For combobox/listbox patterns, map ",e.jsx(n.code,{children:"aria-selected"})," to the committed value, not temporary active focus."]}),`
`,e.jsxs(n.li,{children:["For ",e.jsx(n.code,{children:"aria-activedescendant"})," combobox flows, keep listbox options out of tab order and preserve input focus during pointer selection."]}),`
`,e.jsxs(n.li,{children:["Keep combobox ",e.jsx(n.code,{children:"aria-controls"})," conditional on popup visibility to avoid dangling listbox references."]}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"overlay-policies",children:"Overlay Policies"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Dialog/Drawer should explicitly define dismiss policy (",e.jsx(n.code,{children:"closeOnEscape"}),", ",e.jsx(n.code,{children:"closeOnOutsidePointer"}),") for critical workflows."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"restoreFocus"})," enabled for dialogs unless product flow intentionally redirects focus after close."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"restoreFocus"})," enabled for drawers unless closing should intentionally hand focus to a different target."]}),`
`,e.jsx(n.li,{children:"Popover and Dropdown should restore focus to trigger on keyboard dismissal (Escape), but keep pointer target focus on outside-click dismissal."}),`
`,e.jsxs(n.li,{children:["For blocking confirmation/action menus, set ",e.jsx(n.code,{children:"closeOnEscape={false}"})," + ",e.jsx(n.code,{children:"closeOnOutsidePointer={false}"})," and provide an explicit close/confirm path."]}),`
`,e.jsxs(n.li,{children:["Dropdown menus should expose an accessible name via trigger-linked ",e.jsx(n.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsx(n.li,{children:"For nested overlays, dismiss policy should resolve top-layer first so one Escape/outside click does not collapse the full stack."}),`
`,e.jsxs(n.li,{children:["Keep trigger ",e.jsx(n.code,{children:"aria-controls"})," conditional on open state for popover/menu patterns to avoid stale ID references."]}),`
`,e.jsxs(n.li,{children:["For dropdown typeahead, set ",e.jsx(n.code,{children:"textValue"})," when item labels are non-string or need locale/accent-friendly buffered matching aliases."]}),`
`,e.jsxs(n.li,{children:["Keep dropdown ",e.jsx(n.code,{children:"Tab"})," behavior aligned with document order: close menu and continue focus to next control."]}),`
`,e.jsxs(n.li,{children:["For icon-only popover/dropdown triggers, always provide ",e.jsx(n.code,{children:"triggerAriaLabel"})," to preserve an explicit control name."]}),`
`,e.jsx(n.li,{children:"Command palette and combobox-style overlays should keep text input as the primary focus anchor for navigation."}),`
`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:u}),`
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
`,e.jsxs(n.li,{children:["Provide ",e.jsx(n.code,{children:"textValue"})," aliases for non-string command labels and accent-friendly matching terms."]}),`
`,e.jsx(n.li,{children:"Provide empty-state guidance when no command matches the query."}),`
`,e.jsxs(n.li,{children:["Track user query updates with ",e.jsx(n.code,{children:"onQueryChange"})," for downstream telemetry."]}),`
`,e.jsx(n.li,{children:"Keep live-region narration aligned with actionable commands (enabled matches), not just visible results."}),`
`,e.jsx(n.li,{children:"Keep disabled command entries non-executable and keep palette state unchanged on disabled clicks."}),`
`,e.jsxs(n.li,{children:["For batched command execution, set ",e.jsx(n.code,{children:"closeOnSelect={false}"})," so users can run multiple actions without reopening the palette."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"clearQueryOnEscape"})," enabled so first Escape clears query intent before full palette dismissal; disable only when product expects immediate close."]}),`
`,e.jsxs(n.li,{children:["For blocking approvals, set ",e.jsx(n.code,{children:"closeOnEscape={false}"})," and ",e.jsx(n.code,{children:"closeOnOutsidePointer={false}"})," so command confirmation cannot be dismissed accidentally."]}),`
`,e.jsxs(n.li,{children:["For conditional approval guards, prefer ",e.jsx(n.code,{children:"onEscapeKeyDown/onPointerDownOutside"})," + ",e.jsx(n.code,{children:"event.preventDefault()"})," so dismiss policy can be unlocked at runtime."]}),`
`,e.jsx(n.li,{children:"Guard Ctrl/Cmd + Enter submission against active IME composition to avoid accidental sends for CJK input."}),`
`,e.jsx(n.li,{children:"Show reasoning disclosure with explicit user intent (default collapsed)."}),`
`,e.jsxs(n.li,{children:["Use streaming containers that surface busy completion (",e.jsx(n.code,{children:"aria-busy"}),") for assistive tech parity."]}),`
`]}),`
`,e.jsx(s,{of:D}),`
`,e.jsx(s,{of:E}),`
`,e.jsx(s,{of:F}),`
`,e.jsx(s,{of:K}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(n.h2,{id:"notification-behavior",children:"Notification Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"duration={0}"})," for blocking notifications that require explicit user action."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"closeOnEscape"})," aligned with task criticality; disable Escape only for must-read states."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"onEscapeKeyDown"})," when Escape policy must be toggled dynamically at runtime (e.g. approval checkpoints)."]}),`
`,e.jsxs(n.li,{children:["Ensure upper-layer shortcuts that ",e.jsx(n.code,{children:"preventDefault()"})," on Escape can preempt toast dismiss when required."]}),`
`,e.jsx(n.li,{children:"For stacked notifications, rely on Escape handling that dismisses one toast per key press, prioritizing the latest or most recently interacted toast."}),`
`,e.jsxs(n.li,{children:["Verify timer pause behavior for both pointer hover and keyboard focus when ",e.jsx(n.code,{children:"pauseOnHover"})," is enabled."]}),`
`,e.jsxs(n.li,{children:["Provide ",e.jsx(n.code,{children:"ariaLabel"})," when toast title is icon-only or otherwise not plain text."]}),`
`,e.jsxs(n.li,{children:["For high-frequency passive updates, set ",e.jsx(n.code,{children:'live="off"'})," to reduce assistive-tech interruption while keeping visual toast context."]}),`
`]}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(s,{of:P}),`
`,e.jsx(s,{of:A}),`
`,e.jsx(s,{of:O}),`
`,e.jsx(s,{of:I}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(n.h2,{id:"data-presentation-patterns",children:"Data Presentation Patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use typed columns and stable row keys in data tables; fallback source-index keys exist for safety but explicit ",e.jsx(n.code,{children:"rowKey"})," is preferred."]}),`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"rowKey"})," uses ",e.jsx(n.code,{children:"rowIndex"}),", treat it as source-data index; avoid deriving keys from sorted visual position."]}),`
`,e.jsxs(n.li,{children:["For custom cell renderers, use ",e.jsx(n.code,{children:"render(row, rowIndex, sourceIndex)"})," and pick the index intentionally (",e.jsx(n.code,{children:"rowIndex"})," for ranking UI, ",e.jsx(n.code,{children:"sourceIndex"})," for source-linked IDs/telemetry)."]}),`
`,e.jsxs(n.li,{children:["Mark the primary identity column with ",e.jsx(n.code,{children:"rowHeader"})," so screen readers can announce row context consistently."]}),`
`,e.jsxs(n.li,{children:["Ensure each table has an accessible name through ",e.jsx(n.code,{children:"caption"})," or ",e.jsx(n.code,{children:"ariaLabel"}),"; fallback ",e.jsx(n.code,{children:"Data table"})," naming exists but should be treated as a safety net."]}),`
`,e.jsxs(n.li,{children:["Prefer sortable columns with explicit ",e.jsx(n.code,{children:"aria-sort"})," state for keyboard and screen-reader parity."]}),`
`,e.jsxs(n.li,{children:["Keep non-sortable headers free of ",e.jsx(n.code,{children:"aria-sort"})," so assistive tech does not announce inert columns as interactive."]}),`
`,e.jsxs(n.li,{children:["Validate sortable headers with both pointer and keyboard (",e.jsx(n.code,{children:"Enter"}),"/",e.jsx(n.code,{children:"Space"}),") so non-pointer workflows stay first-class."]}),`
`,e.jsxs(n.li,{children:["Localize sortable header narration with ",e.jsx(n.code,{children:"getSortAriaLabel"})," instead of hardcoding translated text into column titles."]}),`
`,e.jsxs(n.li,{children:["During async refreshes, set ",e.jsx(n.code,{children:"loading"})," so table emits ",e.jsx(n.code,{children:"aria-busy"})," and temporarily suppresses stale row actions/sorting."]}),`
`,e.jsxs(n.li,{children:["For empty datasets, use meaningful ",e.jsx(n.code,{children:"emptyContent"}),"; table announces it through polite live status narration."]}),`
`,e.jsx(n.li,{children:"Surface status semantics with tokens instead of custom ad-hoc colors."}),`
`,e.jsx(n.li,{children:"Keep row actions predictable and keyboard reachable."}),`
`,e.jsxs(n.li,{children:["Ensure tabs support orientation-aware arrows (",e.jsx(n.code,{children:"Left/Right"})," or ",e.jsx(n.code,{children:"Up/Down"}),") plus ",e.jsx(n.code,{children:"Home/End"}),", and skip disabled entries."]}),`
`,e.jsxs(n.li,{children:["Prefer ",e.jsx(n.code,{children:"ariaLabelledBy"})," with a visible heading when tabs already have on-screen context labels; fall back to ",e.jsx(n.code,{children:"ariaLabel"})," for standalone tab groups."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'activationMode="manual"'})," when arrow-key navigation should not immediately trigger expensive panel renders."]}),`
`,e.jsxs(n.li,{children:["Keep tab panels mounted and toggle ",e.jsx(n.code,{children:"hidden"})," so tab ",e.jsx(n.code,{children:"aria-controls"})," always points to a real panel."]}),`
`,e.jsxs(n.li,{children:["Avoid duplicate telemetry from tabs by emitting ",e.jsx(n.code,{children:"onValueChange"})," only on actual key transitions."]}),`
`]}),`
`,e.jsx(s,{of:T}),`
`,e.jsx(s,{of:L}),`
`,e.jsx(s,{of:M}),`
`,e.jsx(s,{of:R}),`
`,e.jsx(s,{of:q}),`
`,e.jsx(s,{of:z}),`
`,e.jsx(s,{of:V}),`
`,e.jsx(s,{of:U})]})}function we(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{we as default};
