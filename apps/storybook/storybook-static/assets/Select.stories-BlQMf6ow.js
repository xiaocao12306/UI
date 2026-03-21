import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BWu4c2F4.js";import{f as X}from"./FieldStyles-CQy9UjBZ.js";import{a as Y}from"./a11y-CU5SQrEA.js";import{B as Z}from"./Badge-ZJmMstsz.js";import{within as f,expect as v,userEvent as M}from"./index-DgAF9SIF.js";import{s as w,S as ee}from"./storyShowcase-Bw5VyCj0.js";const n=p.forwardRef(function({style:r,invalid:t,disabled:l,onFocus:b,onBlur:y,onMouseEnter:x,onMouseLeave:g,"aria-invalid":W,"aria-label":$,"aria-labelledby":G,...J},K){const[h,k]=p.useState(!1),[Q,j]=p.useState(!1),F=Y(t,W),S=F!==void 0,V=R(G),U=V?void 0:R($);return e.jsx("select",{ref:K,...J,disabled:l,"aria-label":U,"aria-labelledby":V,"aria-invalid":F,"data-invalid":S?"true":void 0,"data-focused":h?"true":void 0,"data-aurora-reduced-motion":"transition",style:{...X,transition:"border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",borderColor:S?"var(--aurora-color-red-500)":h||Q&&!l?"var(--aurora-border-strong)":"var(--aurora-input-border)",boxShadow:h?`0 0 0 3px ${S?"color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)":"color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`:"none",background:l?"color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))":"var(--aurora-input-bg)",color:l?"color-mix(in srgb, var(--aurora-input-text) 60%, transparent)":"var(--aurora-input-text)",cursor:l?"not-allowed":"pointer",...r},onFocus:o=>{k(!0),b==null||b(o)},onBlur:o=>{k(!1),y==null||y(o)},onMouseEnter:o=>{j(!0),x==null||x(o)},onMouseLeave:o=>{j(!1),g==null||g(o)}})});function R(a){if(typeof a!="string")return;const r=a.trim();return r.length>0?r:void 0}n.__docgenInfo={description:"",methods:[],displayName:"Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}}};function m({children:a,gap:r=10}){return e.jsx(ee,{maxWidth:"min(100%, 360px)",gap:r,children:a})}const ce={title:"Form/Select",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."}}}};function ae(){const[a,r]=p.useState("react");return e.jsxs(m,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected"}),e.jsx(Z,{children:a})]}),e.jsxs(n,{"aria-label":"Framework select",value:a,onChange:t=>r(t.target.value),children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"}),e.jsx("option",{value:"svelte",children:"Svelte"})]})]})}const s={render:()=>e.jsx(ae,{}),play:async({canvasElement:a})=>{const t=f(a).getByRole("combobox",{name:"Framework select"});await M.selectOptions(t,"vue"),await v(t).toHaveValue("vue")}},i={render:()=>e.jsxs(m,{gap:8,children:[e.jsxs(n,{"aria-label":"Environment select",invalid:!0,defaultValue:"","aria-describedby":"environment-error",children:[e.jsx("option",{value:"",disabled:!0,children:"Select environment"}),e.jsx("option",{value:"prod",children:"Production"}),e.jsx("option",{value:"stage",children:"Staging"})]}),e.jsx("p",{id:"environment-error",style:{...w,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"},children:"Environment is required before deployment."})]})},c={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("label",{htmlFor:"storybook-select-blank-label",style:w,children:"Framework label"}),e.jsxs(n,{id:"storybook-select-blank-label","aria-label":"   ",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const t=f(a).getByRole("combobox",{name:"Framework label"});await v(t).not.toHaveAttribute("aria-label")}},d={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{id:"storybook-select-heading",style:w,children:"Framework heading"}),e.jsxs(n,{"aria-label":"Framework fallback name","aria-labelledby":"storybook-select-heading",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const t=f(a).getByRole("combobox",{name:"Framework heading"});await v(t).toHaveAttribute("aria-labelledby","storybook-select-heading"),await v(t).not.toHaveAttribute("aria-label")}},u={args:{"aria-label":"Disabled framework select",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"},"react"),e.jsx("option",{value:"vue",children:"Vue"},"vue")]}};var E,A,B;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ControlledSelectDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", {
      name: "Framework select"
    });
    await userEvent.selectOptions(select, "vue");
    await expect(select).toHaveValue("vue");
  }
}`,...(B=(A=s.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var H,I,C;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <SelectShowcase gap={8}>
      <Select aria-label="Environment select" invalid defaultValue="" aria-describedby="environment-error">
        <option value="" disabled>
          Select environment
        </option>
        <option value="prod">Production</option>
        <option value="stage">Staging</option>
      </Select>
      <p id="environment-error" style={{
      ...storyMutedTextStyle,
      color: "color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"
    }}>
        Environment is required before deployment.
      </p>
    </SelectShowcase>
}`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var D,T,L;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <SelectShowcase gap={8}>
      <label htmlFor="storybook-select-blank-label" style={storyMutedTextStyle}>
        Framework label
      </label>
      <Select id="storybook-select-blank-label" aria-label="   " defaultValue="react">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </Select>
    </SelectShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", {
      name: "Framework label"
    });
    await expect(select).not.toHaveAttribute("aria-label");
  }
}`,...(L=(T=c.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var P,_,q;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <SelectShowcase gap={8}>
      <p id="storybook-select-heading" style={storyMutedTextStyle}>
        Framework heading
      </p>
      <Select aria-label="Framework fallback name" aria-labelledby="storybook-select-heading" defaultValue="react">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </Select>
    </SelectShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", {
      name: "Framework heading"
    });
    await expect(select).toHaveAttribute("aria-labelledby", "storybook-select-heading");
    await expect(select).not.toHaveAttribute("aria-label");
  }
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var O,N,z;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    "aria-label": "Disabled framework select",
    disabled: true,
    defaultValue: "react",
    children: [<option value="react" key="react">
        React
      </option>, <option value="vue" key="vue">
        Vue
      </option>]
  }
}`,...(z=(N=u.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};const de=["Controlled","InvalidState","BlankAriaLabelFallback","LabelledByPrecedence","DisabledState"];export{c as BlankAriaLabelFallback,s as Controlled,u as DisabledState,i as InvalidState,d as LabelledByPrecedence,de as __namedExportsOrder,ce as default};
