import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{a as K}from"./a11y-CU5SQrEA.js";import{B as M}from"./Badge-ZJmMstsz.js";import{within as D,userEvent as Q,expect as g}from"./index-DgAF9SIF.js";const c=o.forwardRef(function({label:t,description:a,invalid:Y,indeterminate:m=!1,disabled:l,style:F,onFocus:u,onBlur:h,"aria-invalid":O,"aria-label":P,"aria-labelledby":V,...y},s){const[v,k]=o.useState(!1),x=o.useRef(null),f=o.useId(),C=K(Y,O),w=C!==void 0,j=S(V),$=j?void 0:S(P),G=[y["aria-describedby"],a?f:void 0].filter(Boolean).join(" ")||void 0;o.useEffect(()=>{x.current&&(x.current.indeterminate=m)},[m]);const J=o.useCallback(n=>{x.current=n,typeof s=="function"?s(n):s&&(s.current=n)},[s]);return e.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:10,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",cursor:l?"not-allowed":"pointer",opacity:l?.75:1,...F},children:[e.jsx("input",{...y,ref:J,type:"checkbox",disabled:l,"aria-label":$,"aria-labelledby":j,"aria-invalid":C,"aria-checked":m?"mixed":y["aria-checked"],"aria-describedby":G,"data-focused":v?"true":void 0,style:{margin:"2px 0 0",width:16,height:16,accentColor:w?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:l?"not-allowed":"pointer",boxShadow:v?`0 0 0 3px ${w?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)"}`:"none"},onFocus:n=>{k(!0),u==null||u(n)},onBlur:n=>{k(!1),h==null||h(n)}}),t||a?e.jsxs("span",{style:{display:"grid",gap:a?2:0},children:[t?e.jsx("span",{children:t}):null,a?e.jsx("span",{id:f,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:a}):null]}):null]})});function S(r){if(typeof r!="string")return;const t=r.trim();return t.length>0?t:void 0}c.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const re={title:"Form/Checkbox",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Checkbox supports label/description narration, indeterminate state, and invalid/disabled visual semantics."}}}};function U(){const[r,t]=o.useState(!0);return e.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),e.jsx(M,{tone:r?"success":"danger",children:r?"Enabled":"Disabled"})]}),e.jsx(c,{"aria-label":"Enable AI memory",label:"Enable AI memory",description:"Persist short-term context between prompts.",checked:r,onChange:a=>t(a.currentTarget.checked)})]})}const i={render:()=>e.jsx(U,{}),play:async({canvasElement:r})=>{const a=D(r).getByRole("checkbox",{name:"Enable AI memory"});await Q.click(a),await g(a).not.toBeChecked()}},d={args:{"aria-label":"Select all rows",label:"Select all rows",description:"Some rows are already selected.",indeterminate:!0}},b={render:()=>e.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[e.jsx(c,{"aria-label":"Terms agreement",label:"Terms agreement",description:"You must accept terms before continuing.",invalid:!0}),e.jsx(c,{"aria-label":"System lock",label:"System lock",description:"Controlled by organization policy.",disabled:!0,defaultChecked:!0})]})},p={render:()=>e.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[e.jsx("p",{id:"checkbox-story-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Checkbox heading"}),e.jsx(c,{"aria-label":"Fallback checkbox name","aria-labelledby":"checkbox-story-heading",label:"Release gate",description:"aria-labelledby should remain canonical."})]}),play:async({canvasElement:r})=>{const a=D(r).getByRole("checkbox",{name:"Checkbox heading"});await g(a).toHaveAttribute("aria-labelledby","checkbox-story-heading"),await g(a).not.toHaveAttribute("aria-label")}};var E,I,R;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ControlledCheckbox />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", {
      name: "Enable AI memory"
    });
    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();
  }
}`,...(R=(I=i.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var A,B,T;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select all rows",
    label: "Select all rows",
    description: "Some rows are already selected.",
    indeterminate: true
  }
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var z,N,L;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 14
  }}>
      <Checkbox aria-label="Terms agreement" label="Terms agreement" description="You must accept terms before continuing." invalid />
      <Checkbox aria-label="System lock" label="System lock" description="Controlled by organization policy." disabled defaultChecked />
    </div>
}`,...(L=(N=b.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var q,H,_;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 10
  }}>
      <p id="checkbox-story-heading" style={{
      margin: 0,
      color: "var(--aurora-text-primary)"
    }}>
        Checkbox heading
      </p>
      <Checkbox aria-label="Fallback checkbox name" aria-labelledby="checkbox-story-heading" label="Release gate" description="aria-labelledby should remain canonical." />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", {
      name: "Checkbox heading"
    });
    await expect(checkbox).toHaveAttribute("aria-labelledby", "checkbox-story-heading");
    await expect(checkbox).not.toHaveAttribute("aria-label");
  }
}`,...(_=(H=p.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const te=["Controlled","Indeterminate","InvalidAndDisabled","LabelledByPrecedence"];export{i as Controlled,d as Indeterminate,b as InvalidAndDisabled,p as LabelledByPrecedence,te as __namedExportsOrder,re as default};
