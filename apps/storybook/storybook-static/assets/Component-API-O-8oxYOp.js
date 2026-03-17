import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as j}from"./index-CHKtz2QT.js";import{M as m,T as p,S as u,D as f,C as o,a as r}from"./index-CoBrkR84.js";import{Primary as d}from"./Button.stories-CioKYm6d.js";import{Default as i}from"./Input.stories-CNc38CLD.js";import{Controlled as b,WithCustomEmptyMessage as g}from"./Combobox.stories-CuXMa7HL.js";import{Controlled as C,InvalidState as v}from"./DatePicker.stories-LayE7ryW.js";import{Interactive as t}from"./Dialog.stories-DFUfgTLN.js";import{WithInteractiveContent as y,Default as D}from"./Popover.stories-CJvtCsuZ.js";import{Default as c}from"./Dropdown.stories-DXUk1DR7.js";import{SearchCommands as l,QueryTelemetry as T}from"./CommandPalette.stories-CFPoeC3V.js";import{Default as a,ActionRequired as P}from"./Toast.stories-85nlmZPq.js";import{Default as h,KeyboardNavigationGuide as I}from"./Tabs.stories-Cy2LOKSd.js";import{ReleaseChecklist as S,SortTelemetry as k}from"./Table.stories-COdgi_cR.js";import{Controlled as A,CompactRange as M}from"./Pagination.stories-BT0EmrvH.js";import{WithAiRequestState as N,Default as R}from"./PromptInput.stories-BlHC-L1j.js";import"./index-BWu4c2F4.js";import"./iframe-D97op_F7.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";import"./Button-Hgh0jeno.js";import"./Badge-Dkm8CRgf.js";import"./index-DgAF9SIF.js";import"./Input-vIzakoOT.js";import"./FieldStyles-CQy9UjBZ.js";import"./Textarea-CxXKxDMd.js";import"./Dialog-BvM6Q8hr.js";import"./DismissableLayer-0Dn_Gr2D.js";function x(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",...j(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Docs/Component API"}),`
`,e.jsx(p,{}),`
`,e.jsx(u,{children:"Primary API Reference"}),`
`,e.jsx(f,{children:e.jsx(n.p,{children:`This page links the most-used Aurora UI components to executable stories and prop controls.
When controls are available, Storybook reflects the runtime API contract directly.`})}),`
`,e.jsx(n.h2,{id:"core",children:"Core"}),`
`,e.jsx(n.h3,{id:"button",children:"Button"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"form",children:"Form"}),`
`,e.jsx(n.h3,{id:"input",children:"Input"}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n.h3,{id:"combobox",children:"Combobox"}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(r,{of:g}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"options"})," | ",e.jsx(n.code,{children:"ComboboxOption[]"}),` | Supports disabled entries and keyword filtering. |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"}),` | Controlled and uncontrolled modes are both available. |
| `,e.jsx(n.code,{children:"onValueChange"})," | ",e.jsx(n.code,{children:"(value: string) => void"}),` | Fires when user confirms option by click or Enter. |
| `,e.jsx(n.code,{children:"emptyMessage"})," | ",e.jsx(n.code,{children:"ReactNode"})," | Custom no-result content for search miss scenarios. |"]}),`
`,e.jsx(n.h3,{id:"datepicker",children:"DatePicker"}),`
`,e.jsx(o,{of:C}),`
`,e.jsx(r,{of:v}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"})," | Uses native ",e.jsx(n.code,{children:"YYYY-MM-DD"}),` value format. |
| `,e.jsx(n.code,{children:"onValueChange"})," | ",e.jsx(n.code,{children:"(value: string) => void"}),` | Emits selected date string from native date input. |
| `,e.jsx(n.code,{children:"min"})," / ",e.jsx(n.code,{children:"max"})," | ",e.jsx(n.code,{children:"string"}),` | Native date range constraints. |
| `,e.jsx(n.code,{children:"invalid"})," | ",e.jsx(n.code,{children:"boolean"})," | Adds ",e.jsx(n.code,{children:"aria-invalid"})," to communicate validation state. |"]}),`
`,e.jsx(n.h2,{id:"overlay",children:"Overlay"}),`
`,e.jsx(n.h3,{id:"dialog",children:"Dialog"}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h3,{id:"popover",children:"Popover"}),`
`,e.jsx(o,{of:y}),`
`,e.jsx(r,{of:D}),`
`,e.jsx(n.h3,{id:"dropdown",children:"Dropdown"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h2,{id:"data",children:"Data"}),`
`,e.jsx(n.h3,{id:"tabs",children:"Tabs"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(r,{of:h}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"items"})," | ",e.jsx(n.code,{children:"TabItem[]"})," | Include ",e.jsx(n.code,{children:"disabled"}),` for unavailable states. |
| `,e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," | ",e.jsx(n.code,{children:"string"}),` | Controlled and uncontrolled modes are both supported. |
| `,e.jsx(n.code,{children:"onValueChange"})," | ",e.jsx(n.code,{children:"(value: string) => void"})," | Fires only for enabled tabs. |"]}),`
`,e.jsx(o,{of:I}),`
`,e.jsx(n.h3,{id:"table",children:"Table"}),`
`,e.jsx(o,{of:S}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"columns"})," | ",e.jsx(n.code,{children:"TableColumn<T>[]"})," | ",e.jsx(n.code,{children:"sortable"})," + optional ",e.jsx(n.code,{children:"sortAccessor"}),` for stable sorting behavior. |
| `,e.jsx(n.code,{children:"data"})," | ",e.jsx(n.code,{children:"T[]"})," | Empty arrays render ",e.jsx(n.code,{children:"emptyContent"}),`. |
| `,e.jsx(n.code,{children:"defaultSortKey"})," / ",e.jsx(n.code,{children:"defaultSortDirection"})," | ",e.jsx(n.code,{children:"string"})," / ",e.jsx(n.code,{children:"'asc' \\| 'desc'"})," | Sets initial ",e.jsx(n.code,{children:"aria-sort"}),` and data order. |
| `,e.jsx(n.code,{children:"onSortChange"})," | ",e.jsx(n.code,{children:"(key, direction) => void"})," | Useful for telemetry and analytics. |"]}),`
`,e.jsx(o,{of:k}),`
`,e.jsx(n.h3,{id:"pagination",children:"Pagination"}),`
`,e.jsx(o,{of:A}),`
`,e.jsx(r,{of:M}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"page"})," | ",e.jsx(n.code,{children:"number"}),` | Current page index (1-based). |
| `,e.jsx(n.code,{children:"pageCount"})," | ",e.jsx(n.code,{children:"number"})," | Total number of pages; values ",e.jsx(n.code,{children:"<= 1"}),` render no UI. |
| `,e.jsx(n.code,{children:"onPageChange"})," | ",e.jsx(n.code,{children:"(page: number) => void"}),` | Called for navigation intent. |
| `,e.jsx(n.code,{children:"showFirstLast"})," | ",e.jsx(n.code,{children:"boolean"}),` | Toggle first/last jump buttons. |
| `,e.jsx(n.code,{children:"siblingCount"})," / ",e.jsx(n.code,{children:"boundaryCount"})," | ",e.jsx(n.code,{children:"number"})," | Controls visible number tokens before ellipsis. |"]}),`
`,e.jsx(n.h2,{id:"feedback",children:"Feedback"}),`
`,e.jsx(n.h3,{id:"toast",children:"Toast"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(r,{of:a}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"tone"})," | ",e.jsx(n.code,{children:"'info' \\| 'success' \\| 'warning' \\| 'danger'"})," | Drives semantics: danger uses ",e.jsx(n.code,{children:'role="alert"'}),`. |
| `,e.jsx(n.code,{children:"duration"})," | ",e.jsx(n.code,{children:"number"})," | Auto-dismiss delay in ms; ",e.jsx(n.code,{children:"0"}),` disables timer. |
| `,e.jsx(n.code,{children:"pauseOnHover"})," | ",e.jsx(n.code,{children:"boolean"}),` | Suspends timer while hovered. |
| `,e.jsx(n.code,{children:"closeOnEscape"})," | ",e.jsx(n.code,{children:"boolean"})," | Optional keyboard dismiss path. |"]}),`
`,e.jsx(o,{of:P}),`
`,e.jsx(n.h2,{id:"ai",children:"AI"}),`
`,e.jsx(n.h3,{id:"commandpalette",children:"CommandPalette"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(r,{of:l}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Notes |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"commands"})," | ",e.jsx(n.code,{children:"CommandItem[]"})," | ",e.jsx(n.code,{children:"disabled"}),` commands remain visible but non-selectable. |
| `,e.jsx(n.code,{children:"emptyMessage"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | Custom empty-state guidance for no-match queries. |
| `,e.jsx(n.code,{children:"onQueryChange"})," | ",e.jsx(n.code,{children:"(query: string) => void"}),` | Use for analytics and AI telemetry pipelines. |
| `,e.jsx(n.code,{children:"onOpenChange"})," | ",e.jsx(n.code,{children:"(open: boolean) => void"})," | Required controlled dialog state. |"]}),`
`,e.jsx(o,{of:T}),`
`,e.jsx(n.h3,{id:"promptinput",children:"PromptInput"}),`
`,e.jsx(o,{of:N}),`
`,e.jsx(r,{of:R})]})}function ce(s={}){const{wrapper:n}={...j(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(x,{...s})}):x(s)}export{ce as default};
