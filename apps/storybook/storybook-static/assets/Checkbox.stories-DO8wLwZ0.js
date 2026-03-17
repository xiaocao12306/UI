import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./index-BWu4c2F4.js";import{B as N}from"./Badge-Dkm8CRgf.js";import{within as q,userEvent as _,expect as D}from"./index-DgAF9SIF.js";const c=t.forwardRef(function({label:s,description:a,invalid:p=!1,indeterminate:u=!1,disabled:l,style:z,onFocus:b,onBlur:x,...y},o){const[f,g]=t.useState(!1),h=t.useRef(null),v=t.useId(),A=[y["aria-describedby"],a?v:void 0].filter(Boolean).join(" ")||void 0;t.useEffect(()=>{h.current&&(h.current.indeterminate=u)},[u]);const B=t.useCallback(r=>{h.current=r,typeof o=="function"?o(r):o&&(o.current=r)},[o]);return e.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:10,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",cursor:l?"not-allowed":"pointer",opacity:l?.75:1,...z},children:[e.jsx("input",{...y,ref:B,type:"checkbox",disabled:l,"aria-invalid":p||void 0,"aria-checked":u?"mixed":y["aria-checked"],"aria-describedby":A,"data-focused":f?"true":void 0,style:{margin:"2px 0 0",width:16,height:16,accentColor:p?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:l?"not-allowed":"pointer",boxShadow:f?`0 0 0 3px ${p?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)"}`:"none"},onFocus:r=>{g(!0),b==null||b(r)},onBlur:r=>{g(!1),x==null||x(r)}}),s||a?e.jsxs("span",{style:{display:"grid",gap:a?2:0},children:[s?e.jsx("span",{children:s}):null,a?e.jsx("span",{id:v,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:a}):null]}):null]})});c.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const G={title:"Form/Checkbox",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Checkbox supports label/description narration, indeterminate state, and invalid/disabled visual semantics."}}}};function V(){const[n,s]=t.useState(!0);return e.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current state"}),e.jsx(N,{tone:n?"success":"danger",children:n?"Enabled":"Disabled"})]}),e.jsx(c,{"aria-label":"Enable AI memory",label:"Enable AI memory",description:"Persist short-term context between prompts.",checked:n,onChange:a=>s(a.currentTarget.checked)})]})}const i={render:()=>e.jsx(V,{}),play:async({canvasElement:n})=>{const a=q(n).getByRole("checkbox",{name:"Enable AI memory"});await _.click(a),await D(a).not.toBeChecked()}},d={args:{"aria-label":"Select all rows",label:"Select all rows",description:"Some rows are already selected.",indeterminate:!0}},m={render:()=>e.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[e.jsx(c,{"aria-label":"Terms agreement",label:"Terms agreement",description:"You must accept terms before continuing.",invalid:!0}),e.jsx(c,{"aria-label":"System lock",label:"System lock",description:"Controlled by organization policy.",disabled:!0,defaultChecked:!0})]})};var k,C,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var S,j,E;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select all rows",
    label: "Select all rows",
    description: "Some rows are already selected.",
    indeterminate: true
  }
}`,...(E=(j=d.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var I,R,T;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 14
  }}>
      <Checkbox aria-label="Terms agreement" label="Terms agreement" description="You must accept terms before continuing." invalid />
      <Checkbox aria-label="System lock" label="System lock" description="Controlled by organization policy." disabled defaultChecked />
    </div>
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const H=["Controlled","Indeterminate","InvalidAndDisabled"];export{i as Controlled,d as Indeterminate,m as InvalidAndDisabled,H as __namedExportsOrder,G as default};
