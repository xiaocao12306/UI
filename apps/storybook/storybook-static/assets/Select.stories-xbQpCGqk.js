import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{f as q,r as F}from"./a11y-H6OEtEva.js";import{B as H}from"./Badge-Dkm8CRgf.js";import{within as O,userEvent as z,expect as B}from"./index-DgAF9SIF.js";const u=c.forwardRef(function({style:n,invalid:a,disabled:o,onFocus:v,onBlur:p,onMouseEnter:m,onMouseLeave:g,"aria-invalid":C,...D},I){const[x,b]=c.useState(!1),[_,f]=c.useState(!1),i=F(a,C);return e.jsx("select",{ref:I,disabled:o,"aria-invalid":i||void 0,"data-invalid":i?"true":void 0,"data-focused":x?"true":void 0,style:{...q,transition:"border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",borderColor:i?"var(--aurora-color-red-500)":x||_&&!o?"var(--aurora-border-strong)":"var(--aurora-input-border)",boxShadow:x?`0 0 0 3px ${i?"color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)":"color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`:"none",background:o?"color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))":"var(--aurora-input-bg)",color:o?"color-mix(in srgb, var(--aurora-input-text) 60%, transparent)":"var(--aurora-input-text)",cursor:o?"not-allowed":"pointer",...n},onFocus:r=>{b(!0),v==null||v(r)},onBlur:r=>{b(!1),p==null||p(r)},onMouseEnter:r=>{f(!0),m==null||m(r)},onMouseLeave:r=>{f(!1),g==null||g(r)},...D})});u.__docgenInfo={description:"",methods:[],displayName:"Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}}};const J={title:"Form/Select",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."}}}};function P(){const[t,n]=c.useState("react");return e.jsxs("div",{style:{width:340,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected"}),e.jsx(H,{children:t})]}),e.jsxs(u,{"aria-label":"Framework select",value:t,onChange:a=>n(a.target.value),children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"}),e.jsx("option",{value:"svelte",children:"Svelte"})]})]})}const s={render:()=>e.jsx(P,{}),play:async({canvasElement:t})=>{const a=O(t).getByRole("combobox",{name:"Framework select"});await z.selectOptions(a,"vue"),await B(a).toHaveValue("vue")}},l={render:()=>e.jsxs("div",{style:{width:340,display:"grid",gap:8},children:[e.jsxs(u,{"aria-label":"Environment select",invalid:!0,defaultValue:"","aria-describedby":"environment-error",children:[e.jsx("option",{value:"",disabled:!0,children:"Select environment"}),e.jsx("option",{value:"prod",children:"Production"}),e.jsx("option",{value:"stage",children:"Staging"})]}),e.jsx("p",{id:"environment-error",style:{margin:0,color:"var(--aurora-color-red-500)",fontSize:13},children:"Environment is required before deployment."})]})},d={args:{"aria-label":"Disabled framework select",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"},"react"),e.jsx("option",{value:"vue",children:"Vue"},"vue")]}};var y,S,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var w,j,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var E,V,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(V=d.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};const K=["Controlled","InvalidState","DisabledState"];export{s as Controlled,d as DisabledState,l as InvalidState,K as __namedExportsOrder,J as default};
