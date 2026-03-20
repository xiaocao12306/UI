import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{f as A}from"./FieldStyles-CQy9UjBZ.js";import{a as H}from"./a11y-CU5SQrEA.js";import{B as O}from"./Badge-ZJmMstsz.js";import{within as T,userEvent as B,expect as P}from"./index-DgAF9SIF.js";import{s as N,S as W}from"./storyShowcase-Bw5VyCj0.js";const d=c.forwardRef(function({style:t,invalid:o,disabled:n,onFocus:u,onBlur:v,onMouseEnter:p,onMouseLeave:m,"aria-invalid":D,...F},_){const[x,b]=c.useState(!1),[q,f]=c.useState(!1),S=H(o,D),g=S!==void 0;return e.jsx("select",{ref:_,disabled:n,"aria-invalid":S,"data-invalid":g?"true":void 0,"data-focused":x?"true":void 0,"data-aurora-reduced-motion":"transition",style:{...A,transition:"border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",borderColor:g?"var(--aurora-color-red-500)":x||q&&!n?"var(--aurora-border-strong)":"var(--aurora-input-border)",boxShadow:x?`0 0 0 3px ${g?"color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)":"color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`:"none",background:n?"color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))":"var(--aurora-input-bg)",color:n?"color-mix(in srgb, var(--aurora-input-text) 60%, transparent)":"var(--aurora-input-text)",cursor:n?"not-allowed":"pointer",...t},onFocus:a=>{b(!0),u==null||u(a)},onBlur:a=>{b(!1),v==null||v(a)},onMouseEnter:a=>{f(!0),p==null||p(a)},onMouseLeave:a=>{f(!1),m==null||m(a)},...F})});d.__docgenInfo={description:"",methods:[],displayName:"Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}}};function C({children:r,gap:t=10}){return e.jsx(W,{maxWidth:"min(100%, 360px)",gap:t,children:r})}const Y={title:"Form/Select",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."}}}};function $(){const[r,t]=c.useState("react");return e.jsxs(C,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected"}),e.jsx(O,{children:r})]}),e.jsxs(d,{"aria-label":"Framework select",value:r,onChange:o=>t(o.target.value),children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"}),e.jsx("option",{value:"svelte",children:"Svelte"})]})]})}const i={render:()=>e.jsx($,{}),play:async({canvasElement:r})=>{const o=T(r).getByRole("combobox",{name:"Framework select"});await B.selectOptions(o,"vue"),await P(o).toHaveValue("vue")}},s={render:()=>e.jsxs(C,{gap:8,children:[e.jsxs(d,{"aria-label":"Environment select",invalid:!0,defaultValue:"","aria-describedby":"environment-error",children:[e.jsx("option",{value:"",disabled:!0,children:"Select environment"}),e.jsx("option",{value:"prod",children:"Production"}),e.jsx("option",{value:"stage",children:"Staging"})]}),e.jsx("p",{id:"environment-error",style:{...N,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"},children:"Environment is required before deployment."})]})},l={args:{"aria-label":"Disabled framework select",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"},"react"),e.jsx("option",{value:"vue",children:"Vue"},"vue")]}};var h,y,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var j,k,E;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(R=(I=l.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const Z=["Controlled","InvalidState","DisabledState"];export{i as Controlled,l as DisabledState,s as InvalidState,Z as __namedExportsOrder,Y as default};
