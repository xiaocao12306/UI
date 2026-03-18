import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-CHKtz2QT.js";import{M as s,T as r,S as a,D as c}from"./index-BaNbdrth.js";import"./index-BWu4c2F4.js";import"./iframe-Cs-XjYqZ.js";import"./index-DlVbWVVj.js";import"./index-4adcsI43.js";import"./index-DrFu-skq.js";function t(o){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Docs/Getting Started"}),`
`,n.jsx(r,{}),`
`,n.jsx(a,{children:"Aurora UI Storybook"}),`
`,n.jsx(c,{children:n.jsxs(e.p,{children:[`Aurora UI Storybook is the primary visual documentation surface for React components.
Use the toolbar theme selector to validate token behavior across `,n.jsx(e.code,{children:"core-light"}),", ",n.jsx(e.code,{children:"core-dark"}),", ",n.jsx(e.code,{children:"glass"}),", and ",n.jsx(e.code,{children:"neo-brutal"}),"."]})}),`
`,n.jsx(e.h2,{id:"documentation-path",children:"Documentation Path"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Component Catalog (left sidebar stories): browse concrete implementations by domain."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/docs-component-api--docs",children:"Component API"}),": review prop contracts, accessibility semantics, and edge policies."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/docs-best-practices--docs",children:"Best Practices"}),": apply production integration guidance and policy decisions."]}),`
`]}),`
`,n.jsx(e.h2,{id:"component-domains",children:"Component Domains"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Core: foundational controls and metadata surfaces."}),`
`,n.jsx(e.li,{children:"Form: data capture and validation flows."}),`
`,n.jsx(e.li,{children:"Data: tabs, table, pagination, and navigation state."}),`
`,n.jsx(e.li,{children:"Feedback: alert/toast/loading/empty-state communication."}),`
`,n.jsx(e.li,{children:"Overlay: dialog/drawer/popover/dropdown/tooltip interaction layers."}),`
`,n.jsx(e.li,{children:"AI: command workflows, prompt/message/reasoning composition."}),`
`]}),`
`,n.jsx(e.h2,{id:"how-to-validate-a-component-change",children:"How To Validate A Component Change"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Open the affected story and switch all themes."}),`
`,n.jsx(e.li,{children:"Confirm keyboard and pointer interactions are preserved."}),`
`,n.jsx(e.li,{children:"Verify story docs and controls match real component props."}),`
`,n.jsxs(e.li,{children:["Validate docs links (",n.jsx(e.code,{children:"Component API"})," + ",n.jsx(e.code,{children:"Best Practices"}),") for the changed component group."]}),`
`,n.jsx(e.li,{children:"Run Chromatic (when token is configured) to compare snapshots."}),`
`]})]})}function f(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{f as default};
