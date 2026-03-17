import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CHKtz2QT.js";import{M as t,T as l,S as a,D as c,C as n}from"./index-DO-7mDjM.js";import{VariantMatrix as d}from"./Button.stories-BXebMVGm.js";import{WithInputControl as h}from"./FormField.stories-C0jO5C5_.js";import{Interactive as x}from"./Dialog.stories-CZ2XlYDD.js";import{AiInteractionFlow as p,QueryTelemetry as j,TextValueAndAccentSearch as m}from"./CommandPalette.stories-V7Q_sk3b.js";import{WithAiRequestState as u}from"./PromptInput.stories-10Pu4-2r.js";import{Conversation as f}from"./MessageBubble.stories-wEP5cOKd.js";import{Default as b}from"./ReasoningPanel.stories-ll9aUG-c.js";import{Default as y}from"./StreamingCodeBlock.stories-Jd4VPz8N.js";import{ActionRequired as g}from"./Toast.stories-BUOgHkKQ.js";import{KeyboardNavigationGuide as v,ManualActivation as w}from"./Tabs.stories-C113NhrA.js";import{ReleaseChecklist as k,SortTelemetry as D,LocalizedSortLabels as A}from"./Table.stories-Cqh3SLl-.js";import"./index-BWu4c2F4.js";import"./iframe-Dixwo56G.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";import"./Button-Hgh0jeno.js";import"./Tag-Dmp9Dfgr.js";import"./Badge-Dkm8CRgf.js";import"./index-DgAF9SIF.js";import"./Input-CY7BO4jw.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";import"./FormField-CWhxX9un.js";import"./Textarea-Br71u4Ao.js";import"./Dialog-DCFtyuzV.js";import"./FocusScope-Db3t2k9z.js";import"./DismissableLayer-0Dn_Gr2D.js";function o(s){const i={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Best Practices"}),`
`,e.jsx(l,{}),`
`,e.jsx(a,{children:"Design + Engineering Checklist"}),`
`,e.jsx(c,{children:e.jsx(i.p,{children:"Use these rules to keep components consistent with the Aurora plan and avoid regressions in accessibility or theming."})}),`
`,e.jsx(i.h2,{id:"api-design",children:"API Design"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Keep props minimal and composable; avoid business-specific flags."}),`
`,e.jsxs(i.li,{children:["Prefer controlled APIs for overlays (",e.jsx(i.code,{children:"open"}),", ",e.jsx(i.code,{children:"onOpenChange"}),")."]}),`
`,e.jsxs(i.li,{children:["Expose semantic variants (",e.jsx(i.code,{children:"solid"}),", ",e.jsx(i.code,{children:"outline"}),") instead of hardcoded colors."]}),`
`]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"theming",children:"Theming"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Do not hardcode color values inside component internals."}),`
`,e.jsx(i.li,{children:"Resolve styling via Aurora CSS variables only."}),`
`,e.jsxs(i.li,{children:["Keep layering (",e.jsx(i.code,{children:"z-index"}),") tokenized (",e.jsx(i.code,{children:"--aurora-z-overlay"})," / ",e.jsx(i.code,{children:"--aurora-z-modal"})," / ",e.jsx(i.code,{children:"--aurora-z-toast"}),"), not magic numbers."]}),`
`,e.jsx(i.li,{children:"Validate stories under all four theme packs before merge."}),`
`]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Ensure keyboard dismissal paths for overlay components."}),`
`,e.jsx(i.li,{children:"Keep visible labels or accessible names for form controls."}),`
`,e.jsxs(i.li,{children:["Prefer ",e.jsx(i.code,{children:"FormField"})," wrappers for helper/error copy so ",e.jsx(i.code,{children:"aria-describedby"})," and ",e.jsx(i.code,{children:"aria-errormessage"})," stay in sync."]}),`
`,e.jsxs(i.li,{children:["Avoid ",e.jsx(i.code,{children:"autoFocus"}),"; use intentional focus management when opening overlays."]}),`
`,e.jsxs(i.li,{children:["For combobox/listbox patterns, map ",e.jsx(i.code,{children:"aria-selected"})," to the committed value, not temporary active focus."]}),`
`,e.jsxs(i.li,{children:["For ",e.jsx(i.code,{children:"aria-activedescendant"})," combobox flows, keep listbox options out of tab order and preserve input focus during pointer selection."]}),`
`,e.jsxs(i.li,{children:["Keep combobox ",e.jsx(i.code,{children:"aria-controls"})," conditional on popup visibility to avoid dangling listbox references."]}),`
`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"overlay-policies",children:"Overlay Policies"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Dialog/Drawer should explicitly define dismiss policy (",e.jsx(i.code,{children:"closeOnEscape"}),", ",e.jsx(i.code,{children:"closeOnOutsidePointer"}),") for critical workflows."]}),`
`,e.jsxs(i.li,{children:["Keep ",e.jsx(i.code,{children:"restoreFocus"})," enabled for dialogs unless product flow intentionally redirects focus after close."]}),`
`,e.jsx(i.li,{children:"Popover and Dropdown should restore focus to trigger on keyboard dismissal (Escape), but keep pointer target focus on outside-click dismissal."}),`
`,e.jsxs(i.li,{children:["Dropdown menus should expose an accessible name via trigger-linked ",e.jsx(i.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(i.li,{children:["Keep trigger ",e.jsx(i.code,{children:"aria-controls"})," conditional on open state for popover/menu patterns to avoid stale ID references."]}),`
`,e.jsxs(i.li,{children:["For dropdown typeahead, set ",e.jsx(i.code,{children:"textValue"})," when item labels are non-string or need locale/accent-friendly buffered matching aliases."]}),`
`,e.jsxs(i.li,{children:["For icon-only popover/dropdown triggers, always provide ",e.jsx(i.code,{children:"triggerAriaLabel"})," to preserve an explicit control name."]}),`
`,e.jsx(i.li,{children:"Command palette and combobox-style overlays should keep text input as the primary focus anchor for navigation."}),`
`]}),`
`,e.jsx(i.h2,{id:"testing",children:"Testing"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Add unit tests for any new interaction branch."}),`
`,e.jsx(i.li,{children:"Add/extend Playwright smoke tests when user-facing flows change."}),`
`,e.jsx(i.li,{children:"Keep Storybook stories deterministic so visual regression remains stable."}),`
`]}),`
`,e.jsx(i.h2,{id:"ai-interaction-patterns",children:"AI Interaction Patterns"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Always expose pending/loading states for AI request actions."}),`
`,e.jsx(i.li,{children:"Keep command labels explicit and searchable."}),`
`,e.jsxs(i.li,{children:["Provide ",e.jsx(i.code,{children:"textValue"})," aliases for non-string command labels and accent-friendly matching terms."]}),`
`,e.jsx(i.li,{children:"Provide empty-state guidance when no command matches the query."}),`
`,e.jsxs(i.li,{children:["Track user query updates with ",e.jsx(i.code,{children:"onQueryChange"})," for downstream telemetry."]}),`
`,e.jsx(i.li,{children:"Keep live-region narration aligned with actionable commands (enabled matches), not just visible results."}),`
`,e.jsx(i.li,{children:"Guard Ctrl/Cmd + Enter submission against active IME composition to avoid accidental sends for CJK input."}),`
`,e.jsx(i.li,{children:"Show reasoning disclosure with explicit user intent (default collapsed)."}),`
`,e.jsxs(i.li,{children:["Use streaming containers that surface busy completion (",e.jsx(i.code,{children:"aria-busy"}),") for assistive tech parity."]}),`
`]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"notification-behavior",children:"Notification Behavior"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Use ",e.jsx(i.code,{children:"duration={0}"})," for blocking notifications that require explicit user action."]}),`
`,e.jsxs(i.li,{children:["Keep ",e.jsx(i.code,{children:"closeOnEscape"})," aligned with task criticality; disable Escape only for must-read states."]}),`
`,e.jsx(i.li,{children:"For stacked notifications, rely on Escape handling that dismisses one toast per key press instead of closing all at once."}),`
`,e.jsxs(i.li,{children:["Verify timer pause behavior for both pointer hover and keyboard focus when ",e.jsx(i.code,{children:"pauseOnHover"})," is enabled."]}),`
`,e.jsxs(i.li,{children:["Provide ",e.jsx(i.code,{children:"ariaLabel"})," when toast title is icon-only or otherwise not plain text."]}),`
`]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"data-presentation-patterns",children:"Data Presentation Patterns"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Use typed columns and stable row keys in data tables; fallback source-index keys exist for safety but explicit ",e.jsx(i.code,{children:"rowKey"})," is preferred."]}),`
`,e.jsxs(i.li,{children:["If ",e.jsx(i.code,{children:"rowKey"})," uses ",e.jsx(i.code,{children:"rowIndex"}),", treat it as source-data index; avoid deriving keys from sorted visual position."]}),`
`,e.jsxs(i.li,{children:["Ensure each table has an accessible name through ",e.jsx(i.code,{children:"caption"})," or ",e.jsx(i.code,{children:"ariaLabel"}),"; fallback ",e.jsx(i.code,{children:"Data table"})," naming exists but should be treated as a safety net."]}),`
`,e.jsxs(i.li,{children:["Prefer sortable columns with explicit ",e.jsx(i.code,{children:"aria-sort"})," state for keyboard and screen-reader parity."]}),`
`,e.jsxs(i.li,{children:["Localize sortable header narration with ",e.jsx(i.code,{children:"getSortAriaLabel"})," instead of hardcoding translated text into column titles."]}),`
`,e.jsxs(i.li,{children:["During async refreshes, set ",e.jsx(i.code,{children:"loading"})," so table emits ",e.jsx(i.code,{children:"aria-busy"})," and temporarily suppresses stale row actions/sorting."]}),`
`,e.jsx(i.li,{children:"Surface status semantics with tokens instead of custom ad-hoc colors."}),`
`,e.jsx(i.li,{children:"Keep row actions predictable and keyboard reachable."}),`
`,e.jsxs(i.li,{children:["Ensure tabs support orientation-aware arrows (",e.jsx(i.code,{children:"Left/Right"})," or ",e.jsx(i.code,{children:"Up/Down"}),") plus ",e.jsx(i.code,{children:"Home/End"}),", and skip disabled entries."]}),`
`,e.jsxs(i.li,{children:["Use ",e.jsx(i.code,{children:'activationMode="manual"'})," when arrow-key navigation should not immediately trigger expensive panel renders."]}),`
`,e.jsxs(i.li,{children:["Keep tab panels mounted and toggle ",e.jsx(i.code,{children:"hidden"})," so tab ",e.jsx(i.code,{children:"aria-controls"})," always points to a real panel."]}),`
`,e.jsxs(i.li,{children:["Avoid duplicate telemetry from tabs by emitting ",e.jsx(i.code,{children:"onValueChange"})," only on actual key transitions."]}),`
`]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(n,{of:D}),`
`,e.jsx(n,{of:A})]})}function se(s={}){const{wrapper:i}={...r(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(o,{...s})}):o(s)}export{se as default};
