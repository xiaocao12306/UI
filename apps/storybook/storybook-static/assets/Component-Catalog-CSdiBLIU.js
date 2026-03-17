import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CHKtz2QT.js";import{M as t,T as c,S as s,D as i}from"./index-CHySWwzm.js";import"./index-BWu4c2F4.js";import"./iframe-C7wTNu3z.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";function d(n){const o={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Component Catalog"}),`
`,e.jsx(c,{}),`
`,e.jsx(s,{children:"Components, Coverage, and Entry Points"}),`
`,e.jsx(i,{children:e.jsx(o.p,{children:`This index tracks Aurora UI component groups with implementation and quality signals.
Use it as the first stop before extending APIs or adding new stories.`})}),`
`,e.jsx(o.h2,{id:"core-and-form",children:"Core and Form"}),`
`,e.jsxs(o.p,{children:[`| Component | Export | Storybook | Unit Test |
| --- | --- | --- | --- |
| Button | `,e.jsx(o.code,{children:"Button"})," | ",e.jsx(o.code,{children:"Core/Button"}),` | yes |
| Input | `,e.jsx(o.code,{children:"Input"})," | ",e.jsx(o.code,{children:"Form/Input"}),` | covered via FormField |
| Textarea | `,e.jsx(o.code,{children:"Textarea"})," | used in ",e.jsx(o.code,{children:"Overlay/Dialog"})," and ",e.jsx(o.code,{children:"AI/PromptInput"}),` stories | indirect |
| Select | `,e.jsx(o.code,{children:"Select"}),` | demo coverage | - |
| Checkbox | `,e.jsx(o.code,{children:"Checkbox"}),` | demo coverage | - |
| RadioGroup | `,e.jsx(o.code,{children:"RadioGroup"}),` | demo coverage | - |
| Switch | `,e.jsx(o.code,{children:"Switch"}),` | demo coverage | - |
| FormField | `,e.jsx(o.code,{children:"FormField"})," | demo coverage | yes |"]}),`
`,e.jsx(o.h2,{id:"data-and-navigation",children:"Data and Navigation"}),`
`,e.jsxs(o.p,{children:[`| Component | Export | Storybook | Unit Test |
| --- | --- | --- | --- |
| Tabs | `,e.jsx(o.code,{children:"Tabs"})," | ",e.jsx(o.code,{children:"Data/Tabs"}),` | yes |
| Table | `,e.jsx(o.code,{children:"Table"})," | ",e.jsx(o.code,{children:"Data/Table"}),` | yes |
| Tag | `,e.jsx(o.code,{children:"Tag"})," | used in ",e.jsx(o.code,{children:"Core/Button"}),` story | - |
| Badge | `,e.jsx(o.code,{children:"Badge"})," | used in multiple stories | - |"]}),`
`,e.jsx(o.h2,{id:"feedback-and-state",children:"Feedback and State"}),`
`,e.jsxs(o.p,{children:[`| Component | Export | Storybook | Unit Test |
| --- | --- | --- | --- |
| Alert | `,e.jsx(o.code,{children:"Alert"}),` | demo coverage | - |
| Toast | `,e.jsx(o.code,{children:"Toast"}),` | demo coverage | yes |
| Progress | `,e.jsx(o.code,{children:"Progress"}),` | demo coverage | - |
| Skeleton | `,e.jsx(o.code,{children:"Skeleton"}),` | demo coverage | - |
| Empty | `,e.jsx(o.code,{children:"Empty"}),` | demo coverage | - |
| LoadingDots | `,e.jsx(o.code,{children:"LoadingDots"}),` | demo coverage | - |
| StreamingText | `,e.jsx(o.code,{children:"StreamingText"})," | demo coverage | - |"]}),`
`,e.jsx(o.h2,{id:"overlay",children:"Overlay"}),`
`,e.jsxs(o.p,{children:[`| Component | Export | Storybook | Unit Test |
| --- | --- | --- | --- |
| Tooltip | `,e.jsx(o.code,{children:"Tooltip"}),` | demo coverage | - |
| Popover | `,e.jsx(o.code,{children:"Popover"}),` | demo coverage | yes |
| Dialog | `,e.jsx(o.code,{children:"Dialog"})," | ",e.jsx(o.code,{children:"Overlay/Dialog"}),` | yes |
| Drawer | `,e.jsx(o.code,{children:"Drawer"}),` | demo coverage | yes |
| Dropdown | `,e.jsx(o.code,{children:"Dropdown"}),` | demo coverage | yes |
| CommandPalette | `,e.jsx(o.code,{children:"CommandPalette"})," | ",e.jsx(o.code,{children:"AI/CommandPalette"})," | yes |"]}),`
`,e.jsx(o.h2,{id:"ai-components",children:"AI Components"}),`
`,e.jsxs(o.p,{children:[`| Component | Export | Storybook | Unit Test |
| --- | --- | --- | --- |
| PromptInput | `,e.jsx(o.code,{children:"PromptInput"})," | ",e.jsx(o.code,{children:"AI/PromptInput"}),` | yes |
| MessageBubble | `,e.jsx(o.code,{children:"MessageBubble"}),` | demo coverage | - |
| ReasoningPanel | `,e.jsx(o.code,{children:"ReasoningPanel"}),` | demo coverage | - |
| StreamingCodeBlock | `,e.jsx(o.code,{children:"StreamingCodeBlock"})," | demo coverage | - |"]}),`
`,e.jsx(o.h2,{id:"extension-checklist",children:"Extension Checklist"}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsx(o.li,{children:"Add or update story with deterministic state."}),`
`,e.jsx(o.li,{children:"Add interaction/unit test for new behavior branch."}),`
`,e.jsx(o.li,{children:"Verify all theme packs from Storybook toolbar."}),`
`,e.jsxs(o.li,{children:["Update ",e.jsx(o.code,{children:"docs/component-status.md"})," and this catalog when coverage changes."]}),`
`]})]})}function u(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(d,{...n})}):d(n)}export{u as default};
