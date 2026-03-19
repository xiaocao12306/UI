import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-CHKtz2QT.js";import{M as r,T as s,S as c,D as a}from"./index-DELaUDiD.js";import"./index-BWu4c2F4.js";import"./iframe-uCgelXbX.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";function t(o){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Getting Started"}),`
`,e.jsx(s,{}),`
`,e.jsx(c,{children:"Aurora UI Storybook"}),`
`,e.jsx(a,{children:e.jsxs(n.p,{children:[`Aurora UI Storybook is the primary visual documentation surface for React components.
Use the toolbar theme selector to validate token behavior across `,e.jsx(n.code,{children:"core-light"}),", ",e.jsx(n.code,{children:"core-dark"}),", ",e.jsx(n.code,{children:"glass"}),", and ",e.jsx(n.code,{children:"neo-brutal"}),"."]})}),`
`,e.jsx(n.h2,{id:"documentation-path",children:"Documentation Path"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Component Catalog (left sidebar stories): browse concrete implementations by domain."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/docs/docs-component-api--docs",children:"Component API"}),": review prop contracts, accessibility semantics, and edge policies."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/docs/docs-best-practices--docs",children:"Best Practices"}),": apply production integration guidance and policy decisions."]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-domains",children:"Component Domains"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Core: foundational controls and metadata surfaces."}),`
`,e.jsx(n.li,{children:"Form: data capture and validation flows."}),`
`,e.jsx(n.li,{children:"Data: tabs, table, pagination, and navigation state."}),`
`,e.jsx(n.li,{children:"Feedback: alert/toast/loading/empty-state communication."}),`
`,e.jsx(n.li,{children:"Overlay: dialog/drawer/popover/dropdown/tooltip interaction layers."}),`
`,e.jsx(n.li,{children:"AI: command workflows, prompt/message/reasoning composition."}),`
`]}),`
`,e.jsx(n.h2,{id:"how-to-validate-a-component-change",children:"How To Validate A Component Change"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Open the affected story and switch all themes."}),`
`,e.jsx(n.li,{children:"Confirm keyboard and pointer interactions are preserved."}),`
`,e.jsx(n.li,{children:"Verify story docs and controls match real component props."}),`
`,e.jsxs(n.li,{children:["Validate docs links (",e.jsx(n.code,{children:"Component API"})," + ",e.jsx(n.code,{children:"Best Practices"}),") for the changed component group."]}),`
`,e.jsx(n.li,{children:"Run Chromatic (when token is configured) to compare snapshots."}),`
`]}),`
`,e.jsx(n.h2,{id:"reviewable-gate-trail",children:"Reviewable Gate Trail"}),`
`,e.jsx(n.p,{children:"Run from repository root:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm storybook:coverage:check
pnpm storybook:docs:check
pnpm storybook:static:check
pnpm storybook:test:ci
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["CI evidence source: workflow ",e.jsx(n.code,{children:"GITHUB_STEP_SUMMARY"})," (Storybook Interaction Gate section)."]}),`
`,e.jsxs(n.li,{children:["Chromatic evidence source: ",e.jsx(n.code,{children:".github/workflows/chromatic.yml"})," summary (mode/token/build URL/change/error counts)."]}),`
`,e.jsx(n.li,{children:"Avoid relying on hand-maintained test/suite numbers in docs; always review latest workflow summary output."}),`
`]})]})}function b(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{b as default};
