import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CHKtz2QT.js";import{M as t,T as l,S as a,D as c,C as i}from"./index-tdvO6y0j.js";import{VariantMatrix as d}from"./Button.stories-BXebMVGm.js";import{WithInputControl as h}from"./FormField.stories-C0jO5C5_.js";import{Interactive as x}from"./Dialog.stories-CZ2XlYDD.js";import{AiInteractionFlow as p,QueryTelemetry as j,TextValueAndAccentSearch as m}from"./CommandPalette.stories-V7Q_sk3b.js";import{WithAiRequestState as u}from"./PromptInput.stories-10Pu4-2r.js";import{Conversation as f}from"./MessageBubble.stories-wEP5cOKd.js";import{Default as b}from"./ReasoningPanel.stories-ll9aUG-c.js";import{Default as y}from"./StreamingCodeBlock.stories-Jd4VPz8N.js";import{ActionRequired as g}from"./Toast.stories-CHXJEELy.js";import{KeyboardNavigationGuide as v,ManualActivation as w}from"./Tabs.stories-C113NhrA.js";import{ReleaseChecklist as k,SortTelemetry as A,LocalizedSortLabels as D}from"./Table.stories-C55vo1mY.js";import"./index-BWu4c2F4.js";import"./iframe-DtpyJOca.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";import"./Button-Hgh0jeno.js";import"./Tag-Dmp9Dfgr.js";import"./Badge-Dkm8CRgf.js";import"./index-DgAF9SIF.js";import"./Input-CY7BO4jw.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";import"./FormField-CWhxX9un.js";import"./Textarea-Br71u4Ao.js";import"./Dialog-DCFtyuzV.js";import"./FocusScope-Db3t2k9z.js";import"./DismissableLayer-0Dn_Gr2D.js";function o(s){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Best Practices"}),`
`,e.jsx(l,{}),`
`,e.jsx(a,{children:"Design + Engineering Checklist"}),`
`,e.jsx(c,{children:e.jsx(n.p,{children:"Use these rules to keep components consistent with the Aurora plan and avoid regressions in accessibility or theming."})}),`
`,e.jsx(n.h2,{id:"api-design",children:"API Design"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep props minimal and composable; avoid business-specific flags."}),`
`,e.jsxs(n.li,{children:["Prefer controlled APIs for overlays (",e.jsx(n.code,{children:"open"}),", ",e.jsx(n.code,{children:"onOpenChange"}),")."]}),`
`,e.jsxs(n.li,{children:["Expose semantic variants (",e.jsx(n.code,{children:"solid"}),", ",e.jsx(n.code,{children:"outline"}),") instead of hardcoded colors."]}),`
`]}),`
`,e.jsx(i,{of:d}),`
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
`,e.jsxs(n.li,{children:["Avoid ",e.jsx(n.code,{children:"autoFocus"}),"; use intentional focus management when opening overlays."]}),`
`,e.jsxs(n.li,{children:["For combobox/listbox patterns, map ",e.jsx(n.code,{children:"aria-selected"})," to the committed value, not temporary active focus."]}),`
`,e.jsxs(n.li,{children:["For ",e.jsx(n.code,{children:"aria-activedescendant"})," combobox flows, keep listbox options out of tab order and preserve input focus during pointer selection."]}),`
`,e.jsxs(n.li,{children:["Keep combobox ",e.jsx(n.code,{children:"aria-controls"})," conditional on popup visibility to avoid dangling listbox references."]}),`
`]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"overlay-policies",children:"Overlay Policies"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Dialog/Drawer should explicitly define dismiss policy (",e.jsx(n.code,{children:"closeOnEscape"}),", ",e.jsx(n.code,{children:"closeOnOutsidePointer"}),") for critical workflows."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"restoreFocus"})," enabled for dialogs unless product flow intentionally redirects focus after close."]}),`
`,e.jsx(n.li,{children:"Popover and Dropdown should return focus to trigger on close to avoid keyboard dead-ends."}),`
`,e.jsxs(n.li,{children:["Dropdown menus should expose an accessible name via trigger-linked ",e.jsx(n.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(n.li,{children:["Keep trigger ",e.jsx(n.code,{children:"aria-controls"})," conditional on open state for popover/menu patterns to avoid stale ID references."]}),`
`,e.jsxs(n.li,{children:["For dropdown typeahead, set ",e.jsx(n.code,{children:"textValue"})," when item labels are non-string or need locale/accent-friendly buffered matching aliases."]}),`
`,e.jsxs(n.li,{children:["For icon-only popover/dropdown triggers, always provide ",e.jsx(n.code,{children:"triggerAriaLabel"})," to preserve an explicit control name."]}),`
`,e.jsx(n.li,{children:"Command palette and combobox-style overlays should keep text input as the primary focus anchor for navigation."}),`
`]}),`
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
`,e.jsx(n.li,{children:"Guard Ctrl/Cmd + Enter submission against active IME composition to avoid accidental sends for CJK input."}),`
`,e.jsx(n.li,{children:"Show reasoning disclosure with explicit user intent (default collapsed)."}),`
`,e.jsxs(n.li,{children:["Use streaming containers that surface busy completion (",e.jsx(n.code,{children:"aria-busy"}),") for assistive tech parity."]}),`
`]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(i,{of:y}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"notification-behavior",children:"Notification Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"duration={0}"})," for blocking notifications that require explicit user action."]}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.code,{children:"closeOnEscape"})," aligned with task criticality; disable Escape only for must-read states."]}),`
`,e.jsxs(n.li,{children:["Verify timer pause behavior for both pointer hover and keyboard focus when ",e.jsx(n.code,{children:"pauseOnHover"})," is enabled."]}),`
`,e.jsxs(n.li,{children:["Provide ",e.jsx(n.code,{children:"ariaLabel"})," when toast title is icon-only or otherwise not plain text."]}),`
`]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h2,{id:"data-presentation-patterns",children:"Data Presentation Patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use typed columns and stable row keys in data tables; fallback source-index keys exist for safety but explicit ",e.jsx(n.code,{children:"rowKey"})," is preferred."]}),`
`,e.jsxs(n.li,{children:["Ensure each table has an accessible name through ",e.jsx(n.code,{children:"caption"})," or ",e.jsx(n.code,{children:"ariaLabel"}),"; fallback ",e.jsx(n.code,{children:"Data table"})," naming exists but should be treated as a safety net."]}),`
`,e.jsxs(n.li,{children:["Prefer sortable columns with explicit ",e.jsx(n.code,{children:"aria-sort"})," state for keyboard and screen-reader parity."]}),`
`,e.jsxs(n.li,{children:["Localize sortable header narration with ",e.jsx(n.code,{children:"getSortAriaLabel"})," instead of hardcoding translated text into column titles."]}),`
`,e.jsx(n.li,{children:"Surface status semantics with tokens instead of custom ad-hoc colors."}),`
`,e.jsx(n.li,{children:"Keep row actions predictable and keyboard reachable."}),`
`,e.jsxs(n.li,{children:["Ensure tabs support orientation-aware arrows (",e.jsx(n.code,{children:"Left/Right"})," or ",e.jsx(n.code,{children:"Up/Down"}),") plus ",e.jsx(n.code,{children:"Home/End"}),", and skip disabled entries."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'activationMode="manual"'})," when arrow-key navigation should not immediately trigger expensive panel renders."]}),`
`,e.jsxs(n.li,{children:["Keep tab panels mounted and toggle ",e.jsx(n.code,{children:"hidden"})," so tab ",e.jsx(n.code,{children:"aria-controls"})," always points to a real panel."]}),`
`,e.jsxs(n.li,{children:["Avoid duplicate telemetry from tabs by emitting ",e.jsx(n.code,{children:"onValueChange"})," only on actual key transitions."]}),`
`]}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(i,{of:w}),`
`,e.jsx(i,{of:k}),`
`,e.jsx(i,{of:A}),`
`,e.jsx(i,{of:D})]})}function se(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{se as default};
