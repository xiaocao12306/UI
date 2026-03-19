import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{f as A}from"./FieldStyles-CQy9UjBZ.js";import{a as F}from"./a11y-CU5SQrEA.js";import{B as H}from"./Badge-ZJmMstsz.js";import{within as O,userEvent as z,expect as B}from"./index-DgAF9SIF.js";const c=d.forwardRef(function({style:n,invalid:a,disabled:o,onFocus:u,onBlur:v,onMouseEnter:p,onMouseLeave:m,"aria-invalid":C,...D},_){const[g,f]=d.useState(!1),[q,b]=d.useState(!1),y=F(a,C),x=y!==void 0;return e.jsx("select",{ref:_,disabled:o,"aria-invalid":y,"data-invalid":x?"true":void 0,"data-focused":g?"true":void 0,style:{...A,transition:"border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",borderColor:x?"var(--aurora-color-red-500)":g||q&&!o?"var(--aurora-border-strong)":"var(--aurora-input-border)",boxShadow:g?`0 0 0 3px ${x?"color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)":"color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`:"none",background:o?"color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))":"var(--aurora-input-bg)",color:o?"color-mix(in srgb, var(--aurora-input-text) 60%, transparent)":"var(--aurora-input-text)",cursor:o?"not-allowed":"pointer",...n},onFocus:r=>{f(!0),u==null||u(r)},onBlur:r=>{f(!1),v==null||v(r)},onMouseEnter:r=>{b(!0),p==null||p(r)},onMouseLeave:r=>{b(!1),m==null||m(r)},...D})});c.__docgenInfo={description:"",methods:[],displayName:"Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}}};const Q={title:"Form/Select",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."}}}};function P(){const[t,n]=d.useState("react");return e.jsxs("div",{style:{width:340,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected"}),e.jsx(H,{children:t})]}),e.jsxs(c,{"aria-label":"Framework select",value:t,onChange:a=>n(a.target.value),children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"}),e.jsx("option",{value:"svelte",children:"Svelte"})]})]})}const i={render:()=>e.jsx(P,{}),play:async({canvasElement:t})=>{const a=O(t).getByRole("combobox",{name:"Framework select"});await z.selectOptions(a,"vue"),await B(a).toHaveValue("vue")}},s={render:()=>e.jsxs("div",{style:{width:340,display:"grid",gap:8},children:[e.jsxs(c,{"aria-label":"Environment select",invalid:!0,defaultValue:"","aria-describedby":"environment-error",children:[e.jsx("option",{value:"",disabled:!0,children:"Select environment"}),e.jsx("option",{value:"prod",children:"Production"}),e.jsx("option",{value:"stage",children:"Staging"})]}),e.jsx("p",{id:"environment-error",style:{margin:0,color:"var(--aurora-color-red-500)",fontSize:13},children:"Environment is required before deployment."})]})},l={args:{"aria-label":"Disabled framework select",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"},"react"),e.jsx("option",{value:"vue",children:"Vue"},"vue")]}};var h,S,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var j,k,E;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 340,
    display: "grid",
    gap: 8
  }}>
      <Select aria-label="Environment select" invalid defaultValue="" aria-describedby="environment-error">
        <option value="" disabled>
          Select environment
        </option>
        <option value="prod">Production</option>
        <option value="stage">Staging</option>
      </Select>
      <p id="environment-error" style={{
      margin: 0,
      color: "var(--aurora-color-red-500)",
      fontSize: 13
    }}>
        Environment is required before deployment.
      </p>
    </div>
}`,...(E=(k=s.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var V,I,R;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(I=l.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const U=["Controlled","InvalidState","DisabledState"];export{i as Controlled,l as DisabledState,s as InvalidState,U as __namedExportsOrder,Q as default};
