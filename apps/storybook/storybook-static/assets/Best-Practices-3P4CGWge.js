import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CHKtz2QT.js";import{M as t,T as l,S as a,D as c,C as n}from"./index-eygzEpjx.js";import{VariantMatrix as d}from"./Button.stories-CioKYm6d.js";import{Interactive as h}from"./Dialog.stories-DjVtG4e-.js";import{AiInteractionFlow as x,QueryTelemetry as m}from"./CommandPalette.stories-CZLT62wG.js";import{WithAiRequestState as p}from"./PromptInput.stories-dhUe7XyJ.js";import{Conversation as j}from"./MessageBubble.stories-wEP5cOKd.js";import{Default as u}from"./ReasoningPanel.stories-ll9aUG-c.js";import{Default as f}from"./StreamingCodeBlock.stories-Jd4VPz8N.js";import{ActionRequired as b}from"./Toast.stories-85nlmZPq.js";import{KeyboardNavigationGuide as y}from"./Tabs.stories-Cy2LOKSd.js";import{ReleaseChecklist as g,SortTelemetry as v}from"./Table.stories-C9VhWdqZ.js";import"./index-BWu4c2F4.js";import"./iframe-Do8CrFRr.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";import"./Button-Hgh0jeno.js";import"./Badge-Dkm8CRgf.js";import"./index-DgAF9SIF.js";import"./Input-vIzakoOT.js";import"./FieldStyles-CQy9UjBZ.js";import"./Textarea-D83jYE7Q.js";import"./Dialog-Cnf6Xxt0.js";import"./FocusScope-Db3t2k9z.js";import"./DismissableLayer-0Dn_Gr2D.js";function o(s){const i={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Best Practices"}),`
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
`,e.jsxs(i.li,{children:["Avoid ",e.jsx(i.code,{children:"autoFocus"}),"; use intentional focus management when opening overlays."]}),`
`,e.jsxs(i.li,{children:["For combobox/listbox patterns, map ",e.jsx(i.code,{children:"aria-selected"})," to the committed value, not temporary active focus."]}),`
`,e.jsxs(i.li,{children:["For ",e.jsx(i.code,{children:"aria-activedescendant"})," combobox flows, keep listbox options out of tab order and preserve input focus during pointer selection."]}),`
`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"overlay-policies",children:"Overlay Policies"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Dialog/Drawer should explicitly define dismiss policy (",e.jsx(i.code,{children:"closeOnEscape"}),", ",e.jsx(i.code,{children:"closeOnOutsidePointer"}),") for critical workflows."]}),`
`,e.jsx(i.li,{children:"Popover and Dropdown should return focus to trigger on close to avoid keyboard dead-ends."}),`
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
`,e.jsx(i.li,{children:"Provide empty-state guidance when no command matches the query."}),`
`,e.jsxs(i.li,{children:["Track user query updates with ",e.jsx(i.code,{children:"onQueryChange"})," for downstream telemetry."]}),`
`,e.jsx(i.li,{children:"Show reasoning disclosure with explicit user intent (default collapsed)."}),`
`,e.jsxs(i.li,{children:["Use streaming containers that surface busy completion (",e.jsx(i.code,{children:"aria-busy"}),") for assistive tech parity."]}),`
`]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"notification-behavior",children:"Notification Behavior"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Use ",e.jsx(i.code,{children:"duration={0}"})," for blocking notifications that require explicit user action."]}),`
`,e.jsxs(i.li,{children:["Keep ",e.jsx(i.code,{children:"closeOnEscape"})," aligned with task criticality; disable Escape only for must-read states."]}),`
`,e.jsxs(i.li,{children:["Verify hover pause behavior when ",e.jsx(i.code,{children:"pauseOnHover"})," is enabled."]}),`
`]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h2,{id:"data-presentation-patterns",children:"Data Presentation Patterns"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Use typed columns and stable row keys in data tables."}),`
`,e.jsxs(i.li,{children:["Prefer sortable columns with explicit ",e.jsx(i.code,{children:"aria-sort"})," state for keyboard and screen-reader parity."]}),`
`,e.jsx(i.li,{children:"Surface status semantics with tokens instead of custom ad-hoc colors."}),`
`,e.jsx(i.li,{children:"Keep row actions predictable and keyboard reachable."}),`
`,e.jsx(i.li,{children:"Ensure tabs support Arrow/Home/End and skip disabled entries."}),`
`]}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(n,{of:v})]})}function W(s={}){const{wrapper:i}={...r(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(o,{...s})}):o(s)}export{W as default};
